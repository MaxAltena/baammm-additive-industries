import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Heading } from './index';
import { HeadingProps } from './types';

export default {
	title: 'Components/Heading',
	component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args}>Heading</Heading>;

export const Title = Template.bind({});
Title.args = {
	type: 'title',
};

export const Subtitle = Template.bind({});
Subtitle.args = {
	type: 'subtitle',
};

export const Small = Template.bind({});
Small.args = {
	type: 'subtitle',
	fontSize: '16px',
};
