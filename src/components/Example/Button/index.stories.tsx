import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ExampleButton } from '.';
import { ExampleButtonProps } from './types';

export default {
	title: 'Components/Example/Button',
	component: ExampleButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

const Template: Story<ExampleButtonProps> = (args) => <ExampleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 'button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'button',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'button',
};
