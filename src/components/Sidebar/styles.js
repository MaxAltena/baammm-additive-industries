import styled from 'styled-components';

export const StyledDiv = styled.div`
	font-family: 'Open Sans';
	background: green;
	color: white;
	padding: ${(props) => `${props.theme.unit}px`};
`;
