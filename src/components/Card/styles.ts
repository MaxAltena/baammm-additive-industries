import styled from 'styled-components';

export const StyledCard = styled.div`
	font-family: ${({ theme }) => theme.fonts.text};
	font-size: ${({ theme }) => theme.fontSize.DEFAULT};
	background-color: #fff;
	box-shadow: ${({ theme }) => `${theme.shadows.md}`};
	padding: ${({ theme }) => `${theme.unit * 2}px`};
	border-radius: ${({ theme }) => `${theme.borderRadius.DEFAULT}`};
	margin: ${({ theme }) => `${theme.unit * 4}px`}0;
`;
