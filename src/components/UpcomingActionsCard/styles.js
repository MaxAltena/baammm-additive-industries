import styled from 'styled-components';
import { X } from '@styled-icons/feather';

export const StyledUpcomingActionsCard = styled.div`
	font-family: ${(props) => props.theme.fonts.text};
	background-color: ${(props) => `${props.theme.colors.DEFAULT}`};
	box-shadow: ${(props) => `${props.theme.shadows.DEFAULT}`};
	margin: 20px;
	width: 778px;
	height: 432px;
	border-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
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

export const StyledHighPriority = styled.div`
	width: 36px;
	height: 27px;
	border-width: 1px;
	border-style: solid;
	border-color: #ff0000;
	background-color: rgb(255, 0, 0, 0.1);
	border-radius: ${(props) => props.theme.borderRadius.DEFAULT};
	font-family: ${(props) => props.theme.fonts.text};
	color: #ff0000;
	justify-content: center;
	align-content: center;
	display: grid;
`;

export const StyledMediumPriority = styled.div`
	width: 56px;
	height: 27px;
	border-width: 1px;
	border-style: solid;
	border-color: #ffb000;
	background-color: rgb(255, 176, 0, 0.1);
	border-radius: ${(props) => props.theme.borderRadius.DEFAULT};
	font-family: ${(props) => props.theme.fonts.text};
	color: #ffb000;
	justify-content: center;
	align-content: center;
	display: grid;
`;

export const StyledXIcon = styled(X)`
	width: 24px;
	height: 24px;
`;
