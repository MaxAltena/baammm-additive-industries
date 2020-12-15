import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { MachineOverviewProps } from './types';
import { StyledPage, StyledTitle, StyledBell, StyledLink } from './styles';

/**
 * Machine overview page
 */
export const MachineOverview: React.FC<MachineOverviewProps> = () => {
	return (
		<StyledPage>
			<StyledLink onClick={linkTo('Pages/Login')}>logout</StyledLink>
			<StyledTitle>Machine overview</StyledTitle>
			<StyledBell />
		</StyledPage>
	);
};
