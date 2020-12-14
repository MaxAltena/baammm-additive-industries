import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ExampleCard } from '.';
import { ExampleCardProps } from './types';

export default {
	title: 'Components/Example/Card',
	component: ExampleCard,
} as Meta;

const Template: Story<ExampleCardProps> = (args) => <ExampleCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
