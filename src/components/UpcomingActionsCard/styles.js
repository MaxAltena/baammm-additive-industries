import styled from 'styled-components';
import { X } from '@styled-icons/feather';

export const StyledCard = styled.div`
	font-family: ${({ theme }) => theme.fonts.text};
	background-color: ${({ theme }) => theme.colors.DEFAULT};
	box-shadow: ${({ theme }) => theme.shadows.DEFAULT};
	box-sizing: border-box;
	padding: 1em;
	margin: 20px;
	width: 778px;
	height: 432px;
	border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};
	position: relative;
	display: grid;
`;

export const StyledRow = styled.div`
	&:after {
		content: '';
		display: table;
		clear: both;
	}
`;

export const StyledColumn = styled.div`
	float: left;
	width: 22.22%;
	margin: auto;
	align-content: center;
`;

export const StyledPriority = styled.div`
	display: inline-flex;
	padding: ${({ theme }) => `${theme.unit / 2}px ${theme.unit}px`};
	font-size: 0.85em;
	border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};
	font-family: ${({ theme }) => theme.fonts.DEFAULT};
	margin-left: 10px;
	border-width: 1px;
	border-style: solid;
`;

export const StyledPriorityHigh = styled(StyledPriority)`
	color: ${({ theme }) => theme.colors.status.red};
	border-color: ${({ theme }) => theme.colors.status.red};
	background-color: ${({ theme }) => theme.colors.status.lighterRed};
`;

export const StyledPriorityMedium = styled(StyledPriority)`
	color: ${({ theme }) => theme.colors.status.orange};
	border-color: ${({ theme }) => theme.colors.status.orange};
	background-color: ${({ theme }) => theme.colors.status.lighterOrange};
`;

export const StyledXIcon = styled(X)`
	stroke-width: ${({ theme }) => theme.icon.stroke.width};
`;

export const StyledHeading3 = styled.h3`
	font-family: ${({ theme }) => theme.fonts.heading};
	font-size: 28px;
	padding: 10px 10px 0px 10px;
	color: ${({ theme }) => theme.colors.primary.DEFAULT};
`;

export const StyledHeading4 = styled.h4`
	font-family: ${({ theme }) => theme.fonts.DEFAULT};
	text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
	font-size: 12px;
	padding: 10px 10px 0px 10px;
	color: ${({ theme }) => theme.colors.primary.DEFAULT};
`;

export const StyledParagraph = styled.p`
	font-family: ${({ theme }) => theme.fonts.DEFAULT};
	font-size: 14px;
	padding-left: 10px;
	color: ${({ theme }) => theme.colors.text.DEFAULT};
`;
