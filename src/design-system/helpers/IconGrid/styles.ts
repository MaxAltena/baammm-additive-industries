import styled from 'styled-components';

import { theme } from 'src/styles';

export const StyledContainer = styled.div`
	display: grid;
	gap: ${`${theme.unit * 5}px`};
	grid-template-columns: repeat(auto-fit, minmax(4em, 8em));
	justify-content: center;
`;

export const StyledCard = styled.div`
	font-family: ${theme.fonts.DEFAULT};
	font-size: ${theme.fontSize.DEFAULT};
	background-color: #fff;
	box-shadow: ${theme.shadows.DEFAULT};
	padding: ${`${theme.unit}px`};
	border-radius: ${theme.borderRadius.DEFAULT};
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 8em;

	> * {
		stroke-width: ${theme.icon.stroke.width};
		width: 50%;
	}

	> strong {
		margin-top: 1em;
		width: 100%;
		align-self: flex-end;
		text-align: center;
	}
`;
