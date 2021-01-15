import styled from 'styled-components';

import { theme } from 'src/styles';

export const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	> * {
		width: 30%;
		margin: 0 2em 2em 0;

		&:nth-child(3n),
		&:last-child {
			margin: 0 0 2em 0;
		}
	}
`;

export const StyledCard = styled.div`
	overflow: hidden;
	border-radius: ${theme.borderRadius.md};
	box-shadow: ${theme.shadows.md};
`;

export const StyledBackground = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 12em;
	background: ${({ color }) => color};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0.75em;

	> * {
		margin: 0;
		padding: 0;
	}
`;

export const StyledTitle = styled.h2`
	font-family: ${theme.fonts.heading};
	font-size: 1.5em;
	color: ${({ color }) => color};
`;

export const StyledCode = styled.code`
	align-self: flex-end;
	font-size: 1.1em;
	padding: 0.25em;
	border-width: 2px;
	border-style: solid;
	border-radius: ${theme.borderRadius.DEFAULT};
	background-color: rgba(255, 255, 255, 0.25);

	color: ${({ color }) => (color === 'light' ? 'white' : 'black')};
	border-color: ${({ color }) => (color === 'light' ? 'white' : 'black')};
`;
