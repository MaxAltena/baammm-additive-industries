import styled from 'styled-components';

export const StyledPrimaryHeading = styled.h1`
	margin: 0 0 ${({ theme }) => `${theme.unit * 2}px`};
	font-family: ${({ theme }) => theme.fonts.heading};
	font-size: ${({ theme }) => theme.fontSize.title};
	font-weight: bold;
`;

export const StyledSecondaryHeading = styled.h2`
	margin: 0 0 ${({ theme }) => `${theme.unit}px`};
	font-family: ${({ theme }) => theme.fonts.heading};
	font-size: ${({ theme }) => theme.fontSize.subtitle};
	font-weight: bold;
`;
