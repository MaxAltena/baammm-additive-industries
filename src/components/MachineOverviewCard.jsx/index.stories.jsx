import React from 'react';

import { MachineOverviewCard } from '.';

export default {
	title: 'Components/MachineOverviewCard',
	component: MachineOverviewCard,
	parameters: {
		layout: 'fullscreen',
	},
};

const Template = (args) => <MachineOverviewCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
