import { execFileSync } from "node:child_process";

const PS_ROW = /^\s*(\d+)\s+(\d+)\s+(.*)$/;

function listProcesses() {
	return execFileSync("ps", ["-A", "-o", "pid=,ppid=,command="], {
		encoding: "utf8",
	})
		.trim()
		.split("\n")
		.map((line) => {
			const [, pid, ppid, command] = line.match(PS_ROW) ?? [];
			return { pid: Number(pid), ppid: Number(ppid), command };
		});
}

export function processTree(pid) {
	const rows = listProcesses();
	const tree = [];
	const queue = [pid];
	while (queue.length) {
		const current = queue.shift();
		const row = rows.find((r) => r.pid === current);
		if (row) tree.push(row);
		queue.push(...rows.filter((r) => r.ppid === current).map((r) => r.pid));
	}
	return tree;
}

export function stillRunning(recorded) {
	const live = new Map(listProcesses().map((row) => [row.pid, row.command]));
	return recorded.filter((p) => live.get(p.pid) === p.command);
}

export function kill(pid, signal) {
	try {
		process.kill(pid, signal);
		return true;
	} catch {
		return false;
	}
}

export const describe = (p) => ({
	pid: p.pid,
	command: p.command.length > 120 ? `${p.command.slice(0, 117)}...` : p.command,
});
