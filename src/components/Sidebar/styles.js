import styled from 'styled-components';

export const SideBarStyledDiv = styled.div`
	font-family: ${({ theme }) => theme.fonts.DEFAULT};
	color: white;
	background: ${({ theme }) => theme.colors.primary.DEFAULT};
	padding: ${({ theme }) => `${theme.unit}px`};
	width: 300px;
	height: 100vh;
	display: block;
`;

export const StyledVector = styled.div`
	background-image: url('/assets/vectors/logo-white.svg');
	background-origin: content-box;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	width: 80%;
	margin: 0 28px 0 28px;
	min-height: ${({ theme }) => `${theme.unit * 6}px`};
`;
