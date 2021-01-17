import React from 'react';
import { Meta, Story } from '@storybook/react';

import { CoreStatus, JobStatus } from 'src/components';
import { MachineDetails } from '.';
import { MachineDetailsProps } from './types';

export default {
	title: 'Pages/Machine details',
	component: MachineDetails,
	parameters: {
		layout: 'fullscreen',
	},
} as Meta;

const Template: Story<MachineDetailsProps> = (args) => <MachineDetails {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	machine: {
		name: 'Machine 1',
		cores: [
			{
				name: 'AM Core 1',
				status: CoreStatus.Idle,
				job: {
					name: 'KFC_133_7',
					status: JobStatus.Queued,
					processCompleted: 0,
				},
			},
			{
				name: 'AM Core 2',
				status: CoreStatus.Idle,
				job: undefined,
			},
			{
				name: 'AM Core 3',
				status: CoreStatus.Active,
				job: {
					name: 'FRD_CHKN_4_20',
					status: JobStatus.Printing,
					processCompleted: 69.42,
					timeRemaining: '3h 17m',
				},
			},
			{
				name: 'AM Core 4',
				status: CoreStatus.Idle,
				job: undefined,
			},
		],
	},
};
