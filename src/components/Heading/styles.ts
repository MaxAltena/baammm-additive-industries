import styled from 'styled-components';

export const StyledPrimaryHeading = styled.h1`
	margin: 0 0 ${(props) => `${props.theme.unit * 2}px`};
	font-family: ${(props) => props.theme.fonts.heading};
	font-size: ${(props) => props.theme.fontSize.title};
	font-weight: bold;
`;

export const StyledSecondaryHeading = styled.h2`
	margin: 0 0 ${(props) => `${props.theme.unit}px`};
	font-family: ${(props) => props.theme.fonts.heading};
	font-size: ${(props) => props.theme.fontSize.subtitle};
	font-weight: bold;
`;
