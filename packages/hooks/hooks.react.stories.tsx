import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { useWarpTheme } from "./useWarpTheme.js";

const meta: Meta = {
	title: "Utilities/Hooks",
};

export default meta;

export const WarpTheme: StoryObj = {
	render() {
		const theme = useWarpTheme();
		return (
			<>
				<p>
					This storybook example looks awful, but is here to test that the
					reactive controller does its thing (change the URL of the img tag for
					the DBA logo).
				</p>
				<div style={{ marginBottom: "16px" }}>
					<button
						onClick={() => {
							document.documentElement.dataset.wTheme = "light";
						}}
					>
						Set data-w-theme to light
					</button>
					<button
						onClick={() => {
							document.documentElement.dataset.wTheme = "dark";
						}}
					>
						Set data-w-theme to dark
					</button>
				</div>
				<img
					alt="DBA"
					width="82"
					height="32"
					src={
						theme === "dark"
							? "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba-inverted.svg"
							: "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba.svg"
					}
				/>
			</>
		);
	},
};
