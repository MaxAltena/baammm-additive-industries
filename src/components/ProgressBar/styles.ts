import styled from 'styled-components';

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
