import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { LoginProps } from './types';
import {
	StyledPage,
	StyledLoginImage,
	StyledForm,
	StyledLogo,
	StyledInput,
	StyledLink,
	StyledBottomForm,
	StyledCheckbox,
} from './styles';
import { Button } from 'src/components';
import { theme } from 'src/styles';

/**
 * The login page for the Additive Industries product
 */
export const Login: React.FC<LoginProps> = ({ withImage = true, withOptions = true }: LoginProps) => {
	return (
		<StyledPage>
			{withImage && <StyledLoginImage />}
			<StyledForm onSubmit={(event) => event.preventDefault()}>
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

				<Button
					primary
					label="Login"
					onClick={linkTo('Pages/Machine overview')}
					style={{ marginTop: `${theme.unit * 4}px` }}
				></Button>
			</StyledForm>
		</StyledPage>
	);
};
