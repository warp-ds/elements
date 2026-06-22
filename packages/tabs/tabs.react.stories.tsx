import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "../icon/icon.js";
import { Tab, TabPanel, Tabs } from "./react";

declare module "react" {
	/* eslint-disable-next-line @typescript-eslint/no-namespace */ // Say it with me now: React is legacy tech!
	namespace JSX {
		interface IntrinsicElements {
			"w-icon": React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & {
					name?: string;
					size?: string;
					locale?: string;
				},
				HTMLElement
			>;
		}
	}
}

export default {
	title: "Components/Tabs",
	component: Tabs,
} satisfies Meta<typeof Tabs>;

export type Story = StoryObj<typeof Tabs>;

export const Default = () => (
	<Tabs active="tab1">
		<Tab id="tab1" for="panel1">
			First Tab
		</Tab>
		<Tab id="tab2" for="panel2">
			Second Tab
		</Tab>
		<Tab id="tab3" for="panel3">
			Third Tab
		</Tab>

		<TabPanel id="panel1">
			<p>
				Content for the first tab. This panel is visible when the first tab is
				active.
			</p>
		</TabPanel>

		<TabPanel id="panel2" hidden>
			<p>
				Content for the second tab. This panel is visible when the second tab is
				active.
			</p>
		</TabPanel>

		<TabPanel id="panel3" hidden>
			<p>
				Content for the third tab. This panel is visible when the third tab is
				active.
			</p>
		</TabPanel>
	</Tabs>
);

export const WithIcons = () => (
	<>
		<Tabs active="info">
			<Tab id="infotab" for="info">
				<w-icon name="Info" slot="icon" />
				Info
			</Tab>
			<Tab id="donetab" for="done">
				<w-icon name="Success" slot="icon" />
				Done
			</Tab>
			<Tab id="errortab" for="error">
				<w-icon name="Error" slot="icon" />
				Failures
			</Tab>
		</Tabs>

		<TabPanel id="info">
			<p>Info content.</p>
		</TabPanel>

		<TabPanel id="done" hidden>
			<p>Done content.</p>
		</TabPanel>

		<TabPanel id="error" hidden>
			<p>Error content.</p>
		</TabPanel>
	</>
);

export const WithIconsOver = () => (
	<>
		<Tabs active="info">
			<Tab id="infotab" for="info" over>
				<w-icon name="Info" slot="icon" />
				Info
			</Tab>
			<Tab id="donetab" for="done" over>
				<w-icon name="Success" slot="icon" />
				Done
			</Tab>
			<Tab id="errortab" for="error" over>
				<w-icon name="Error" slot="icon" />
				Failures
			</Tab>
		</Tabs>

		<TabPanel id="info">
			<p>Info content.</p>
		</TabPanel>

		<TabPanel id="done" hidden>
			<p>Done content.</p>
		</TabPanel>

		<TabPanel id="error" hidden>
			<p>Error content.</p>
		</TabPanel>
	</>
);

export const ManyTabs = () => (
	<>
		<Tabs active="tab1" id="tabs-many">
			<Tab id="tab1" for="panel1">
				Tab 1
			</Tab>
			<Tab id="tab2" for="panel2">
				Tab 2
			</Tab>
			<Tab id="tab3" for="panel3">
				Tab 3
			</Tab>
			<Tab id="tab4" for="panel4">
				Tab 4
			</Tab>
			<Tab id="tab5" for="panel5">
				Tab 5
			</Tab>
			<Tab id="tab6" for="panel6">
				Tab 6
			</Tab>
		</Tabs>

		<TabPanel id="panel1">
			<p>Content for tab 1</p>
		</TabPanel>

		<TabPanel id="panel2" hidden>
			<p>Content for tab 2</p>
		</TabPanel>

		<TabPanel id="panel3" hidden>
			<p>Content for tab 3</p>
		</TabPanel>

		<TabPanel id="panel4" hidden>
			<p>Content for tab 4</p>
		</TabPanel>

		<TabPanel id="panel5" hidden>
			<p>Content for tab 5</p>
		</TabPanel>

		<TabPanel id="panel6" hidden>
			<p>Content for tab 6</p>
		</TabPanel>
	</>
);
