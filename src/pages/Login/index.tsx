import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { LoginProps } from './types';
import {
	StyledPage,
	StyledLoginImage,
	StyledForm,
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
export const Login: React.FC<LoginProps> = ({ withImage = true, withOptions = true }: LoginProps) => {
	return (
		<StyledPage>
			{withImage && <StyledLoginImage />}
			<StyledForm>
				<StyledLogo />

				<StyledInput type="email" placeholder="Email" />
				<StyledInput type="password" placeholder="Password" />

				{withOptions && (
					<StyledBottomForm>
						<span>
							<StyledCheckbox type="checkbox" id="rememberMe" />
							<label htmlFor="rememberMe">Remember me</label>
						</span>
						<StyledLink>Forgot password</StyledLink>
					</StyledBottomForm>
				)}

				<StyledButton type="submit" onClick={linkTo('Pages/Machine overview')}>
					Login
				</StyledButton>
			</StyledForm>
		</StyledPage>
	);
};
