# .devcontainer

This container is not strictly necessary for regular development. It was added while debugging an issue with the browser tests that affected Webkit on Ubuntu and not macOS. Use it if you need it.

[This getting-started guide](https://code.visualstudio.com/docs/devcontainers/tutorial) (you can stop after installing the extension) takes you through using a dev container for the first time.

Once you've installed the extension you may see a popup asking you if you want to reopen the current directory in a devcontainer. Click yes.

If you missed it, look for the icon in the bottom left of the status bar that looks like kind of like `>` and `<` next to each other and click that.

Choose Reopen in container from the menu.

## First-time setup

The first time will be a bit slow as you download the base image.

Once VS Code reopens the project in a new devcontainer-powered window you need to open a terminal and install `pnpm`.

To install `pnpm` using `corepack`:

```sh
corepack enable
corepack prepare --activate
```

Then run `pnpm install`. Answer yes if you are prompted to remove an existing `node_modules` folder.

## Installing additional tools

The dev container is running Debian as the root user.

To install additional tools via `apt`, first run `apt update`.

```sh
apt update
```

Now you can search for and install packages, for example [`lsof`](https://lsof.readthedocs.io/en/latest/).

```sh
apt search lsof
```

```sh
apt install lsof
```

You should now be able to use `lsof` to for example get the ID of a process using port 8080.

```sh
lsof -i :8080
```

Then to exit the stray process, use `kill`.

```sh
kill -s SIGINT <PID>
```
