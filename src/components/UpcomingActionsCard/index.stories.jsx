import React from 'react';

import { UpcomingActionsCard } from '.';

export default {
	title: 'Components/UpcomingActionsCard',
	component: UpcomingActionsCard,
	parameters: {
		layout: 'fullscreen',
	},
};

const Template = (args) => <UpcomingActionsCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
