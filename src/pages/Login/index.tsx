import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { LoginProps } from './types';
import { StyledPage, StyledImage, StyledTitle, StyledLink } from './styles';

/**
 * Machine overview page
 */
export const Login: React.FC<LoginProps> = () => {
	return (
		<StyledPage>
			<StyledImage />
			<StyledTitle>Login</StyledTitle>
			<StyledLink onClick={linkTo('Pages/Machine overview')}>Log me in please</StyledLink>
		</StyledPage>
	);
};
