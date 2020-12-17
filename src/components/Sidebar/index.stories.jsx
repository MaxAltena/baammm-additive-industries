import React from 'react';

import { Sidebar } from '.';

export default {
	title: 'Components/Sidebar',
	component: Sidebar,
	parameters: {
		layout: 'fullscreen',
	},
};

const Template = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
