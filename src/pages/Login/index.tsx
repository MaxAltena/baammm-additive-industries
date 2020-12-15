import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { LoginProps } from './types';
import { StyledPage, StyledTitle, StyledLink } from './styles';

/**
 * Machine overview page
 */
export const Login: React.FC<LoginProps> = () => {
	return (
		<StyledPage>
			<StyledTitle>Login</StyledTitle>
			<StyledLink onClick={linkTo('Pages/Machine overview')}>Log me in please</StyledLink>
		</StyledPage>
	);
};
