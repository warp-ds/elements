import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "../button/react";
import { Snackbar } from "./react";
import type { WarpSnackbar } from "./snackbar";

export default {
	title: "Overlays/Snackbar",
	component: Snackbar,
} satisfies Meta<typeof Snackbar>;

export type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
	render: () => (
		<div className="flex gap-8">
			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "positive",
					});
				}}
			>
				Positive variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "warning",
					});
				}}
			>
				Warning variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "negative",
					});
				}}
			>
				Negative variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", { variant: "info" });
				}}
			>
				Info variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short");
				}}
			>
				Neutral variant
			</Button>
		</div>
	),
};

export const WithAction: Story = {
	render: () => (
		<div className="flex gap-8">
			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "positive",
						action: {
							label: "Action",
							onclick() {
								alert("Do action");
							},
						},
					});
				}}
			>
				Positive variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "warning",
						action: {
							label: "Action",
							onclick() {
								alert("Do action");
							},
						},
					});
				}}
			>
				Warning variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "negative",
						action: {
							label: "Action",
							onclick() {
								alert("Do action");
							},
						},
					});
				}}
			>
				Negative variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "info",
						action: {
							label: "Action",
							onclick() {
								alert("Do action");
							},
						},
					});
				}}
			>
				Info variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						action: {
							label: "Action",
							onclick() {
								alert("Do action");
							},
						},
					});
				}}
			>
				Neutral variant
			</Button>
		</div>
	),
};

export const WithLongActionLabel: Story = {
	render: () => (
		<div className="flex gap-8">
			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "positive",
						action: {
							label: "Long action label",
							onclick() {
								alert("Do action");
							},
						},
					});
				}}
			>
				Positive variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "warning",
						action: {
							label: "Long action label",
							onclick() {
								alert("Do action");
							},
						},
					});
				}}
			>
				Warning variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "negative",
						action: {
							label: "Long action label",
							onclick() {
								alert("Do action");
							},
						},
					});
				}}
			>
				Negative variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						variant: "info",
						action: {
							label: "Long action label",
							onclick() {
								alert("Do action");
							},
						},
					});
				}}
			>
				Info variant
			</Button>

			<Button
				onClick={() => {
					const snackbar: WarpSnackbar = document.querySelector(
						"w-snackbar",
					) as WarpSnackbar;
					snackbar.create("The message should be short", {
						action: {
							label: "Long action label",
							onclick() {
								alert("Do action");
							},
						},
					});
				}}
			>
				Neutral variant
			</Button>
		</div>
	),
};
