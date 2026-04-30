import { exec } from "node:child_process";
import { watch } from "node:fs";
import { join } from "node:path";

async function pexec(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            console.log(stdout);
            if (error) {
                console.error(stderr);
                console.error(error);
                reject(error);
                return;
            }
            resolve();
        });
    });
}

watch(join(process.cwd(), "packages"), { recursive: true }, async (eventType, fileName) => {
    if (!fileName) return;
    
    if (fileName.endsWith(".md")) {
        console.log(`${fileName} changed, rebuilding docs...`);
        await pexec("pnpm run build:docs");
        return;
    }

    if (fileName.endsWith(".test.ts")) {
        // Vitest has its own built-in watcher that's smarter than ours
        return;
    }
    
    if (fileName.includes(".stories.ts")) {
        // Storybook has live updates
        return;
    }

    if (fileName.endsWith(".ts")) {
        console.log(`${fileName} changed, rebuilding...`);
        await pexec("pnpm run build:manifest");
        await pexec("pnpm run build:docs");
        return;
    }
});

console.log("Watching packages/ for changes...");
