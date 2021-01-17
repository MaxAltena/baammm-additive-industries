import styled from 'styled-components';

export const StyledCard = styled.div`
	font-family: ${(props) => props.theme.fonts.text};
	font-size: ${(props) => props.theme.fontSize.DEFAULT};
	background-color: #fff;
	box-shadow: ${(props) => `${props.theme.shadows.md}`};
	padding: ${(props) => `${props.theme.unit * 2}px`};
	border-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	margin: 20px 0;
`;
