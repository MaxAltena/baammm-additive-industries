import styled from 'styled-components';

export const StyledPage = styled.div`
	min-height: 100vh;
	width: 100%;
	font-family: ${(props) => props.theme.fonts.default};
	background-color: ${(props) => props.theme.background};
	display: flex;
`;

export const StyledLoginImage = styled.div`
	background-color: ${(props) => props.theme.colors.primary.default};
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
	min-height: ${(props) => `${props.theme.unit * 10}px`};
	padding: ${(props) => `${props.theme.unit}px`};
	margin-bottom: ${(props) => `${props.theme.unit * 4}px`};
`;

export const StyledButton = styled.button`
	background: ${(props) => props.theme.colors.accent.default};
	color: ${(props) => props.theme.colors.onAccent.default};
	border-radius: ${(props) => props.theme.borderRadius.default};
	border: none;
	cursor: pointer;
	padding: ${(props) => `${props.theme.unit * 1}px ${props.theme.unit * 2}px`};
	transition: ${(props) => props.theme.transition.default};
	margin-top: ${(props) => `${props.theme.unit * 4}px`};

	&:hover,
	&:active,
	&:focus {
		background: ${(props) => props.theme.colors.accent.hover};
		color: ${(props) => props.theme.colors.onAccent.hover};
	}
`;

export const StyledInput = styled.input`
	border: none;
	border-bottom-width: 2px;
	border-bottom-color: ${(props) => props.theme.colors.primary.default};
	border-bottom-style: solid;
	padding: ${(props) => `${props.theme.unit * 1.5}px ${props.theme.unit * 2}px`};
	margin: ${(props) => `${props.theme.unit * 2}px 0`};
	min-width: 75px;
	width: 50%;
	max-width: 450px;
`;

export const StyledBottomForm = styled.div`
	min-width: 75px;
	width: 50%;
	max-width: 450px;
	margin: ${(props) => `${props.theme.unit * 1.5}px 0`};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledCheckbox = styled.input`
	margin-right: ${(props) => `${props.theme.unit * 1}px`};
`;

export const StyledLink = styled.a`
	color: ${(props) => props.theme.colors.link.default};
	text-decoration: underline;
	transition: ${(props) => props.theme.transition.default};
	cursor: pointer;

	&:hover,
	&:active,
	&:focus {
		color: ${(props) => props.theme.colors.link.hover};
	}
`;
