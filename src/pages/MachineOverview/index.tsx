import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { MachineOverviewProps } from './types';
import { StyledBell, StyledLink, StyledPage } from './styles';
import { Sidebar } from '../../components/Sidebar';
import { Heading } from '../../components/Heading';

/**
 * Machine overview page
 */
export const MachineOverview: React.FC<MachineOverviewProps> = () => {
	return (
		<StyledPage>
			<Sidebar />
			<StyledLink onClick={linkTo('Pages/Login')}>logout</StyledLink>
			<Heading>Machine overview</Heading>
			<StyledBell />
		</StyledPage>
	);
};
