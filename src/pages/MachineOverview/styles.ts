import styled from 'styled-components';
import { Bell } from '@styled-icons/feather';

export const StyledPage = styled.div`
	min-height: 100vh;
	width: 100%;
	font-family: ${(props) => props.theme.fonts.default};
	background-color: ${(props) => props.theme.background};
	display: flex;
`;

export const StyledTitle = styled.h1`
	margin: 0;
	padding: ${(props) => `${props.theme.unit * 2}px`};
	font-family: ${(props) => props.theme.fonts.heading};
`;

export const StyledBell = styled(Bell)`
	color: ${(props) => props.theme.colors.secondary.default};
	padding: ${(props) => `${props.theme.unit}px`};
	margin: ${(props) => `${props.theme.unit}px`};
	width: 48px;
	height: 48px;
	stroke-width: ${(props) => props.theme.icon.stroke.width};
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
