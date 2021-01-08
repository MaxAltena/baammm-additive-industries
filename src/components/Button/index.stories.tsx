import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button } from './index';
import { ButtonProps } from './types';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

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
