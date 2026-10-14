import { readdirSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function visit(node, callback) {
	callback(node);
	ts.forEachChild(node, (child) => visit(child, callback));
}

function unwrap(node) {
	while (
		ts.isAsExpression(node) ||
		ts.isTypeAssertionExpression(node) ||
		ts.isParenthesizedExpression(node)
	) {
		node = node.expression;
	}
	return node;
}

function nameOf(node) {
	return node && (ts.isIdentifier(node) || ts.isStringLiteral(node))
		? node.text
		: undefined;
}

function objectProperty(object, name) {
	return object.properties.find(
		(property) =>
			ts.isPropertyAssignment(property) && nameOf(property.name) === name,
	)?.initializer;
}

// Only reactive public fields are relevant. Methods and Lit internals inherited
// through @lit/react's broad inferred prop type are outside this check.
function reactiveAttribute(symbol) {
	for (const declaration of symbol.declarations ?? []) {
		if (
			!ts.isPropertyDeclaration(declaration) &&
			!ts.isGetAccessorDeclaration(declaration)
		)
			continue;
		if (
			symbol.name.startsWith("_") ||
			ts
				.getJSDocTags(declaration)
				.some((tag) => tag.tagName.text === "internal")
		)
			continue;
		if (
			ts.getCombinedModifierFlags(declaration) &
			(ts.ModifierFlags.Private |
				ts.ModifierFlags.Protected |
				ts.ModifierFlags.Static)
		)
			continue;
		if (ts.isPrivateIdentifier(declaration.name)) continue;
		for (const decorator of ts.getDecorators(declaration) ?? []) {
			const call = decorator.expression;
			if (!ts.isCallExpression(call) || nameOf(call.expression) !== "property")
				continue;
			const options = call.arguments[0];
			if (options && !ts.isObjectLiteralExpression(options))
				return { unsupported: true };
			if (
				options &&
				objectProperty(options, "state")?.kind === ts.SyntaxKind.TrueKeyword
			)
				continue;
			const attribute = options && objectProperty(options, "attribute");
			if (attribute?.kind === ts.SyntaxKind.FalseKeyword)
				return { propertyOnly: true };
			if (
				attribute &&
				!ts.isStringLiteral(attribute) &&
				attribute.kind !== ts.SyntaxKind.TrueKeyword
			) {
				return { unsupported: true };
			}
			return {
				name:
					attribute && ts.isStringLiteral(attribute)
						? attribute.text
						: symbol.name.toLowerCase(),
			};
		}
	}
	return undefined;
}

/**
 * Static analysis: never imports/renders wrappers or writes source files.
 * Returns errors for provable attribute drift and review notices for cases that
 * require runtime/property handling beyond the checker’s supported patterns.
 */
export function checkWrappers(program, files) {
	const checker = program.getTypeChecker();
	const findings = [];
	let checked = 0;
	for (const file of files) {
		const source = program.getSourceFile(file);
		if (!source)
			throw new Error(
				`Wrapper is not included in the TypeScript project: ${file}`,
			);
		const add = (node, severity, message) =>
			findings.push({
				file,
				line:
					source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1,
				severity,
				message,
			});
		const moduleSymbol = checker.getSymbolAtLocation(source);
		const propNames = new Set();
		for (const exported of checker.getExportsOfModule(moduleSymbol)) {
			const type = checker.getTypeOfSymbolAtLocation(exported, source);
			for (const signature of type.getCallSignatures()) {
				const parameter = signature.parameters[0];
				if (!parameter) continue;
				for (const prop of checker
					.getTypeOfSymbolAtLocation(parameter, source)
					.getProperties()) {
					propNames.add(prop.name);
				}
			}
		}
		visit(source, (node) => {
			if (
				!ts.isCallExpression(node) ||
				nameOf(node.expression) !== "createComponent"
			)
				return;
			const options = node.arguments[0];
			if (!options || !ts.isObjectLiteralExpression(options)) {
				add(
					node,
					"review",
					"Cannot analyze non-literal createComponent options.",
				);
				return;
			}
			const elementClass = objectProperty(options, "elementClass");
			const tagName = objectProperty(options, "tagName");
			if (!elementClass || !tagName || !ts.isStringLiteral(tagName)) {
				add(node, "review", "Cannot resolve elementClass or tagName.");
				return;
			}
			checked++;
			const constructor = checker
				.getTypeAtLocation(elementClass)
				.getConstructSignatures()[0];
			if (!constructor) {
				add(
					node,
					"error",
					`${tagName.text}: cannot resolve element type; check TypeScript imports.`,
				);
				return;
			}
			let elementType = constructor.getReturnType();
			// Attention merges its real element type into the public props instead
			// of casting elementClass. Resolve a single local imported class there.
			if (
				elementType.getSymbol()?.name === "Component" &&
				!elementType.getProperties().some((field) => reactiveAttribute(field))
			) {
				const candidates = [];
				for (const statement of source.statements) {
					if (
						!ts.isImportDeclaration(statement) ||
						!ts.isStringLiteral(statement.moduleSpecifier) ||
						!statement.moduleSpecifier.text.startsWith("./")
					)
						continue;
					const bindings = statement.importClause?.namedBindings;
					if (!bindings || !ts.isNamedImports(bindings)) continue;
					for (const imported of bindings.elements) {
						const symbol = checker.getSymbolAtLocation(imported.name);
						if (!symbol) continue;
						const target = checker.getAliasedSymbol(symbol);
						if (target.declarations?.some(ts.isClassDeclaration))
							candidates.push(checker.getDeclaredTypeOfSymbol(target));
					}
				}
				if (candidates.length === 1) elementType = candidates[0];
			}
			const fields = new Map();
			for (const field of elementType.getProperties()) {
				const attribute = reactiveAttribute(field);
				if (attribute) fields.set(field.name, attribute);
			}
			const baseName = ts.isVariableDeclaration(node.parent)
				? nameOf(node.parent.name)
				: undefined;
			const mappings = new Map();
			if (baseName)
				visit(source, (call) => {
					if (
						!ts.isCallExpression(call) ||
						!ts.isPropertyAccessExpression(call.expression) ||
						call.expression.name.text !== "createElement" ||
						nameOf(call.arguments[0]) !== baseName ||
						!call.arguments[1]
					)
						return;
					const object = unwrap(call.arguments[1]);
					if (!ts.isObjectLiteralExpression(object)) {
						add(
							call,
							"review",
							`${tagName.text}: cannot analyze non-literal forwarded props.`,
						);
						return;
					}
					visit(object, (assignment) => {
						if (!ts.isPropertyAssignment(assignment)) return;
						const output = nameOf(assignment.name);
						if (!output) return;
						const inputs = new Set();
						const collect = (expression) =>
							visit(expression, (part) => {
								if (ts.isIdentifier(part) && propNames.has(part.text))
									inputs.add(part.text);
							});
						collect(assignment.initializer);
						// Boolean aliases often emit a literal true under a conditional spread.
						for (
							let parent = assignment.parent;
							parent !== object && parent;
							parent = parent.parent
						) {
							if (ts.isConditionalExpression(parent)) collect(parent.condition);
						}
						for (const input of inputs) {
							if (!mappings.has(input)) mappings.set(input, new Set());
							mappings.get(input).add(output);
						}
						if (
							inputs.size &&
							output.includes("-") &&
							!output.startsWith("aria-") &&
							!output.startsWith("data-") &&
							![...fields.values()].some(
								(attribute) => attribute.name === output,
							)
						) {
							add(
								assignment,
								"error",
								`${tagName.text}: mapping emits unknown attribute "${output}".`,
							);
						}
					});
				});
			const runtimeClass = checker.getTypeAtLocation(unwrap(elementClass));
			const runtimeConstructor = runtimeClass.getConstructSignatures()[0];
			const runtimeFields =
				runtimeConstructor?.getReturnType().getProperties() ?? [];
			for (const [field, attribute] of fields) {
				if (!propNames.has(field)) continue;
				if (mappings.get(field)?.has(attribute.name)) continue;
				const symbol = elementType.getProperty(field);
				const fieldType = checker.getTypeOfSymbolAtLocation(symbol, source);
				const types = fieldType.isUnion() ? fieldType.types : [fieldType];
				const primitiveFlags =
					ts.TypeFlags.StringLike |
					ts.TypeFlags.NumberLike |
					ts.TypeFlags.BooleanLike |
					ts.TypeFlags.Null |
					ts.TypeFlags.Undefined;
				if (types.some((type) => !(type.flags & primitiveFlags))) {
					add(
						node,
						"review",
						`${tagName.text}: exposed prop "${field}" has a non-primitive type; verify serialization/property assignment separately.`,
					);
					continue;
				}
				if (attribute.unsupported || attribute.propertyOnly) {
					add(
						node,
						"review",
						`${tagName.text}: exposed prop "${field}" ${attribute.propertyOnly ? "has no attribute" : "uses dynamic decorator options"}; verify property assignment separately.`,
					);
					continue;
				}
				// React handles native casing such as tabIndex -> tabindex. The actual
				// supplied class also handles properties when it is not a dummy class.
				if (
					field === attribute.name ||
					runtimeFields.some((property) => property.name === field) ||
					mappings.get(field)?.has(attribute.name)
				)
					continue;
				add(
					node,
					"error",
					`${tagName.text}: exposed prop "${field}" needs "${attribute.name}"; no matching translation found. Map it or remove it from the public prop type.`,
				);
			}
		});
	}
	return { checked, findings };
}

export function main(args = process.argv.slice(2)) {
	if (args.includes("--help")) {
		console.log(
			"Usage: node build/check-react-wrappers.js [component ... | --all]\nRead-only static check. Exit codes: 0 = no drift, 1 = drift, 2 = invalid input.",
		);
		return 0;
	}
	if (
		args.some((arg) => arg.startsWith("-") && arg !== "--all") ||
		(args.includes("--all") && args.length > 1)
	) {
		throw new Error("Use component names or --all. Run with --help for usage.");
	}
	const configPath = join(repositoryRoot, "tsconfig.json");
	const config = ts.readConfigFile(configPath, ts.sys.readFile);
	if (config.error)
		throw new Error(
			ts.flattenDiagnosticMessageText(config.error.messageText, "\n"),
		);
	const parsed = ts.parseJsonConfigFileContent(
		config.config,
		ts.sys,
		repositoryRoot,
	);
	if (parsed.errors.length)
		throw new Error(
			ts.flattenDiagnosticMessageText(parsed.errors[0].messageText, "\n"),
		);
	const wrappers = parsed.fileNames.filter((file) =>
		file.endsWith("/react.ts"),
	);
	const available = new Set(readdirSync(join(repositoryRoot, "packages")));
	const selected =
		!args.length || args.includes("--all")
			? wrappers
			: Array.from(new Set(args), (component) => {
					if (!available.has(component))
						throw new Error(`Unknown component: ${component}`);
					const file = join(repositoryRoot, "packages", component, "react.ts");
					if (!wrappers.includes(file))
						throw new Error(
							`No React wrapper in the TypeScript project for: ${component}`,
						);
					return file;
				});
	const program = ts.createProgram(parsed.fileNames, parsed.options);
	const { checked, findings } = checkWrappers(program, selected);
	for (const finding of findings) {
		console.log(
			`${relative(repositoryRoot, finding.file)}:${finding.line} [${finding.severity}] ${finding.message}`,
		);
	}
	const errors = findings.filter(
		(finding) => finding.severity === "error",
	).length;
	console.log(
		`Checked ${checked} element wrapper(s): ${errors} drift error(s), ${findings.length - errors} review notice(s).`,
	);
	return errors ? 1 : 0;
}

if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
	try {
		process.exitCode = main();
	} catch (error) {
		console.error(error.message);
		process.exitCode = 2;
	}
}
