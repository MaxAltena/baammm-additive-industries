import React from 'react';

import { UpcomingActionsCard } from '.';

export default {
	title: 'Components/Upcoming Actions Card',
	component: UpcomingActionsCard,
	parameters: {
		layout: 'fullscreen',
	},
};

const Template = (args) => <UpcomingActionsCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	actions: [
		{ action: 'Redill scalmalloy', machine: 'Machine 4', core: 'AM Core 1', priority: 'high' },
		{ action: 'Refill inconel 718', machine: 'Machine 1', core: 'AM Core 3', priority: 'high' },
		{ action: 'Collect print', machine: 'Machine 5', core: 'Storage module', priority: 'medium' },
		{ action: 'Prepare print', machine: 'Machine 5', core: 'Controls module', priority: 'medium' },
	],
};
