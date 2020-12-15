import React from 'react';

import { Sidebartab } from '.';

export default {
	title: 'Components/Sidebar/Tab',
	component: Sidebartab,
};

const Template = (props) => <Sidebartab {...props} />;

export const Primary = Template.bind({});
Primary.args = {};
