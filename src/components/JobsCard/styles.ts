import styled from 'styled-components';

export const StyledCard = styled.div`
	font-family: ${(props) => props.theme.fonts.text};
	background-color: ${(props) => `${props.theme.colors.DEFAULT}`};
	box-shadow: ${(props) => `${props.theme.shadows.md}`};
	padding: ${(props) => `${props.theme.unit * 2}px`};
	border-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	margin: 20px 0;
`;

export const StyledTitle = styled.h2`
	margin: 0 0 28px;
	font-family: ${(props) => props.theme.fonts.heading};
	font-size: 20px;
	font-weight: bold;
`;

export const StyledCoreGrid = styled.div`
	display: grid;
	grid-template-columns: auto auto minmax(50%, 4fr);
	grid-gap: ${(props) => `${props.theme.unit * 2}px`};
	margin-bottom: ${(props) => `${props.theme.unit}px`};
`;

export const StyledCoreName = styled.div`
	font-weight: bold;
`;

export const StyledTextDiv = styled.div`
	color: ${(props) => props.theme.colors.text.DEFAULT};
`;

export const StyledProgressContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: ${(props) => `${props.theme.unit * 7}px`};
`;

export const StyledProgressBarContainer = styled.div`
	width: 200px;
	height: 100%;
	margin-right: 20px;
`;

export const StyledProgressBarOutside = styled.div`
	width: 100%;
	height: 2px;
	background: #c8c8c8;
`;

export const StyledProgressBarInside = styled.div`
	height: 100%;
	border-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	background-color: ${(props) => `${props.theme.colors.primary.DEFAULT}`};
	position: relative;
	overflow: hidden;
`;
