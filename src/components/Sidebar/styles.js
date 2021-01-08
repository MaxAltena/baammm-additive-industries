import styled from 'styled-components';

export const SideBarStyledDiv = styled.div`
	font-family: ${(props) => props.theme.fonts.DEFAULT};
	color: white;
	background: ${(props) => props.theme.colors.primary.DEFAULT};
	padding: ${(props) => `${props.theme.unit}px`};
	width: 300px;
	height: 100vh;
`;

export const StyledVector = styled.div`
	background-image: url('/assets/vectors/logo-white.svg');
	background-origin: content-box;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	width: 100%;
	min-height: ${(props) => `${props.theme.unit * 6}px`};
	padding: ${(props) => `${props.theme.unit}px`};
`;
