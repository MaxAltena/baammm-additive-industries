import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Card } from '.';
import { CardProps } from './types';

export default {
	title: 'Components / Card',
	component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
	<Card {...args}>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos error ex expedita incidunt ipsum libero
		magnam, nemo placeat praesentium quis vel veritatis, voluptates? Eius, facere ipsam maiores numquam pariatur
		tenetur.
	</Card>
);

export const Standard = Template.bind({});
Standard.args = {};
