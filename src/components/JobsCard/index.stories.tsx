import React from 'react';
import { Meta, Story } from '@storybook/react';

import { JobsCard } from '.';
import { CoreStatus, JobsCardProps, JobStatus } from './types';

export default {
	title: 'Components / Jobs Card',
	component: JobsCard,
} as Meta;

const Template: Story<JobsCardProps> = (args) => <JobsCard {...args} />;

export const Standard = Template.bind({});
Standard.args = {
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
	],
};
