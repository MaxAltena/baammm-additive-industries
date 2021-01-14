import styled from 'styled-components';
import { Bell } from '@styled-icons/feather';

export const StyledPage = styled.div`
	min-height: 100vh;
	width: 100%;
	font-family: ${(props) => props.theme.fonts.DEFAULT};
	background-color: ${(props) => props.theme.background};
	display: flex;
`;

export const StyledTitle = styled.h1`
	margin: 0;
	font-family: ${(props) => props.theme.fonts.heading};
`;

export const StyledBell = styled(Bell)`
	color: ${(props) => props.theme.colors.secondary.DEFAULT};
	padding: ${(props) => `${props.theme.unit}px`};
	margin: ${(props) => `${props.theme.unit}px`};
	width: 48px;
	height: 48px;
	stroke-width: ${(props) => props.theme.icon.stroke.width};
`;

export const StyledContent = styled.div`
	flex: 1;
	padding: ${(props) => `${props.theme.unit * 5}px`};
	overflow: auto;
	height: 100vh;
`;

export const StyledTopBar = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const StyledMainContent = styled.div`
	max-width: 800px;
	margin: 0 auto;
`;

export const StyledCardImage = styled.div`
	background-image: url('/assets/images/machines/metalfab1-large--cropped.png');
	background-origin: content-box;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	width: 100%;
	height: 250px;
	margin: ${(props) => `${props.theme.unit * 10}px`} 0;
`;
