const INTERCEPTS = /intercepts pointer events/;

function hitsTarget(locator) {
	return locator.evaluate((el) => {
		const box = el.getBoundingClientRect();
		const x = box.x + box.width / 2;
		const y = box.y + box.height / 2;
		let root = document;
		let hit = null;
		for (;;) {
			const next = root.elementFromPoint(x, y);
			if (!next || next === hit) break;
			hit = next;
			if (!hit.shadowRoot) break;
			root = hit.shadowRoot;
		}
		for (let node = hit; node; node = node.parentNode ?? node.host) {
			if (node === el) return true;
		}
		return false;
	});
}

export async function pointerAction(locator, action, timeout) {
	try {
		await locator[action]({ trial: true, timeout: 500 });
	} catch (error) {
		if (INTERCEPTS.test(error.message) && (await hitsTarget(locator))) {
			await locator[action]({ force: true });
			return {
				note: `Playwright's hit test reported an element intercepting its own shadow content, but the browser's hit test lands on the target, so ${action} sent a real mouse event at its centre.`,
			};
		}
	}
	await locator[action]({ timeout });
	return {};
}
