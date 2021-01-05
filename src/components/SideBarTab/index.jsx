import React from 'react';

import { SideBarTabStyledDiv } from './styles';

/**
 * SideBarTab
 */

export const Sidebartab = ({ ...props }) => {
	return (
		<SideBarTabStyledDiv>
			{props.icon}
			{props.name}
		</SideBarTabStyledDiv>
	);
};

Sidebartab.propTypes = {
	icon: PropTypes.any,
	name: PropTypes.string,
};
