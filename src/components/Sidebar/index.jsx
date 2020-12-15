import React from 'react';
import { Sidebartab } from '../SideBarTab';

import { SideBarStyledDiv } from './styles';
import { StyledVector } from './styles';

/**
 * Sidebar
 */
export const Sidebar = () => {
	return (
		<SideBarStyledDiv>
			<StyledVector />
			<Sidebartab name="Tab1" />
		</SideBarStyledDiv>
	);
};
