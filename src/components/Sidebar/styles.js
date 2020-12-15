import styled from 'styled-components';

export const StyledDiv = styled.div`
	font-family: ${(props) => props.theme.fonts.default};
	color: white;
	padding: ${(props) => `${props.theme.unit}px`};
	background: ${(props) => props.theme.colors.primary.default};
`;
