import styled from 'styled-components';

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
