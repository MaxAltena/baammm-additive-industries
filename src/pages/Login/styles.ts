import styled from 'styled-components';

export const StyledPage = styled.div`
	min-height: 100vh;
	width: 100%;
	font-family: ${(props) => props.theme.fonts.default};
	background-color: white;
	display: flex;
`;

export const StyledImage = styled.div`
	background-image: url('/assets/images/login.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: left center;
	height: 100%;
	min-height: 100vh;
	width: 500px;
`;

export const StyledTitle = styled.h1`
	margin: 0;
	padding: ${(props) => `${props.theme.unit * 2}px`};
	font-family: ${(props) => props.theme.fonts.heading};
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
