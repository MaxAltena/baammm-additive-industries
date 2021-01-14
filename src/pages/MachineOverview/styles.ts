import styled from 'styled-components';
import { Bell } from '@styled-icons/feather';

export const StyledPage = styled.div`
	min-height: 100vh;
	width: 100%;
	font-family: ${({ theme }) => theme.fonts.DEFAULT};
	background-color: ${({ theme }) => theme.background};
	display: flex;
`;

export const StyledTitle = styled.h1`
	margin: 0;
	padding: ${({ theme }) => `${theme.unit * 2}px`};
	font-family: ${({ theme }) => theme.fonts.heading};
`;

export const StyledBell = styled(Bell)`
	color: ${({ theme }) => theme.colors.secondary.DEFAULT};
	padding: ${({ theme }) => `${theme.unit}px`};
	margin: ${({ theme }) => `${theme.unit}px`};
	width: 48px;
	height: 48px;
	stroke-width: ${({ theme }) => theme.icon.stroke.width};
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
