import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ComponentsExampleCard } from '.';

export default {
	title: 'Examples/Card example',
	component: ComponentsExampleCard,
} as Meta;

const Template: Story = (args) => <ComponentsExampleCard {...args}></ComponentsExampleCard>;

export const Primary = Template.bind({});
Primary.args = {};
