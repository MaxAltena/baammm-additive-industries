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
			<Sidebartab title="Dashboard" imgSource="homeicon" />
			<Sidebartab title="Machines" imgSource="machines" />
			<Sidebartab title="Planning" imgSource="planning" />
			<Sidebartab title="History" imgSource="history" />
		</SideBarStyledDiv>
	);
};
