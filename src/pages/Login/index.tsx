import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { LoginProps } from './types';
import {
	StyledPage,
	StyledLoginImage,
	StyledContainer,
	StyledButton,
	StyledLogo,
	StyledInput,
	StyledLink,
	StyledBottomForm,
	StyledCheckbox,
} from './styles';

/**
 * The login page for the Additive Industries product
 */
export const Login: React.FC<LoginProps> = ({ withImage = true }: LoginProps) => {
	return (
		<StyledPage>
			{withImage && <StyledLoginImage />}
			<StyledContainer>
				<StyledLogo />

				<StyledInput type="email" placeholder="Email" />
				<StyledInput type="password" placeholder="Password" />

				<StyledBottomForm>
					<span>
						<StyledCheckbox type="checkbox" id="rememberMe" />
						<label htmlFor="rememberMe">Remember me</label>
					</span>
					<StyledLink>Forgot password</StyledLink>
				</StyledBottomForm>

				<StyledButton onClick={linkTo('Pages/Machine overview')}>Login</StyledButton>
			</StyledContainer>
		</StyledPage>
	);
};
