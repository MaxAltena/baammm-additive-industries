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
	width: 100%;
	height: 12em;
	background: ${({ color }) => color};
	display: flex;
	align-items: flex-end;
`;

export const StyledTitle = styled.h2`
	font-family: ${theme.fonts.heading};
	font-size: 1.5em;
	color: ${({ color }) => (color ? color : theme.colors.text.lightest)};
	margin: 0.5em 1em;
`;
