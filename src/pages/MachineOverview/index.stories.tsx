import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MachineOverview } from '.';
import { MachineOverviewProps } from './types';

export default {
	title: 'Pages/Machine overview',
	component: MachineOverview,
	parameters: {
		layout: 'fullscreen',
	},
} as Meta;

const Template: Story<MachineOverviewProps> = (args) => <MachineOverview {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
