import styled from 'styled-components';

export const StyledPage = styled.div`
	min-height: 100vh;
	width: 100%;
	font-family: ${({ theme }) => theme.fonts.DEFAULT};
	background-color: ${({ theme }) => theme.background};
	display: flex;
`;

export const StyledLoginImage = styled.div`
	background-color: ${({ theme }) => theme.colors.primary.DEFAULT};
	background-image: url('/assets/images/login.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: left center;
	background-blend-mode: multiply;
	clip-path: ellipse(100% 200% at 0% 50%);
	min-height: 100vh;
	min-width: 10vw;
	width: 50vw;
`;

export const StyledForm = styled.form`
	min-width: 50%;
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const StyledLogo = styled.div`
	background-image: url('/assets/vectors/logo-color.svg');
	background-origin: content-box;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	width: 100%;
	min-height: ${({ theme }) => `${theme.unit * 10}px`};
	padding: ${({ theme }) => `${theme.unit}px`};
	margin-bottom: ${({ theme }) => `${theme.unit * 4}px`};
`;

export const StyledButton = styled.button`
	background: ${({ theme }) => theme.colors.accent.DEFAULT};
	color: ${({ theme }) => theme.colors.onAccent.DEFAULT};
	border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};
	border: none;
	cursor: pointer;
	padding: ${({ theme }) => `${theme.unit * 1}px ${theme.unit * 2}px`};
	transition: ${({ theme }) => theme.transition.DEFAULT};
	margin-top: ${({ theme }) => `${theme.unit * 4}px`};

	&:hover,
	&:active,
	&:focus {
		background: ${({ theme }) => theme.colors.accent.hover};
		color: ${({ theme }) => theme.colors.onAccent.hover};
	}
`;

export const StyledInput = styled.input`
	border: none;
	border-bottom-width: 2px;
	border-bottom-color: ${({ theme }) => theme.colors.primary.DEFAULT};
	border-bottom-style: solid;
	padding: ${({ theme }) => `${theme.unit * 1.5}px ${theme.unit * 2}px`};
	margin: ${({ theme }) => `${theme.unit * 2}px 0`};
	min-width: 75px;
	width: 50%;
	max-width: 450px;
`;

export const StyledBottomForm = styled.div`
	min-width: 75px;
	width: 50%;
	max-width: 450px;
	margin: ${({ theme }) => `${theme.unit * 1.5}px 0`};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledCheckbox = styled.input`
	margin-right: ${({ theme }) => `${theme.unit * 1}px`};
`;

export const StyledLink = styled.a`
	color: ${({ theme }) => theme.colors.link.DEFAULT};
	text-decoration: underline;
	transition: ${({ theme }) => theme.transition.DEFAULT};
	cursor: pointer;

	&:hover,
	&:active,
	&:focus {
		color: ${({ theme }) => theme.colors.link.hover};
	}
`;
