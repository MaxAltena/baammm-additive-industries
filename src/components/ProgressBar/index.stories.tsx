import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ProgressBar } from '.';
import { ProgressBarProps } from './types';

export default {
	title: 'Components / Progress Bar',
	component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	percentage: 34,
};
