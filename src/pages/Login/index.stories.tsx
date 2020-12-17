import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Login } from '.';
import { LoginProps } from './types';

export default {
	title: 'Pages/Login',
	component: Login,
	parameters: {
		layout: 'fullscreen',
	},
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Standard = Template.bind({});
Standard.args = {};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
	withImage: false,
};

export const WithoutOptions = Template.bind({});
WithoutOptions.args = {
	withOptions: false,
};

export const FormOnly = Template.bind({});
FormOnly.args = {
	withImage: false,
	withOptions: false,
};
