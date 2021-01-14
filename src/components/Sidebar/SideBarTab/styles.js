import styled from 'styled-components';
import { Home } from '@styled-icons/feather';
import { Printer } from '@styled-icons/feather';
import { Archive } from '@styled-icons/feather';
import { Calendar } from '@styled-icons/feather';

export const SideBarTabStyledDiv = styled.div`
	font-family: 'Open Sans';
	background: ${(props) => `${props.theme.colors.primary.DEFAULT}`};
	color: white;
	width: 300px;
	height: 48px;
	margin: 15px 0 0 -8px;
`;

export const StyledRow = styled.div`
	&:after {
		content: '';
		display: table;
		clear: both;
	}
`;

export const StyledColumn = styled.div`
	.content {
		margin: 17px 0 0 5px;
		text-align: center;
		font-family: ${(props) => props.theme.fonts.text};
		font-size: 16px;
	}
	&:after {
		content: '';
		display: block;
		clear: both;
	}
`;

export const StyledHomeIcon = styled(Home)`
	float: left;
	width: 32px;
	height: 32px;
	margin: 7px 15px 0px 35px;
`;

export const StyledMachineIcon = styled(Printer)`
	float: left;
	width: 32px;
	height: 32px;
	margin: 7px 15px 0px 35px;
`;

export const StyledCalendarIcon = styled(Calendar)`
	float: left;
	width: 32px;
	height: 32px;
	margin: 7px 15px 0px 35px;
`;

export const StyledArchiveIcon = styled(Archive)`
	float: left;
	width: 32px;
	height: 32px;
	margin: 7px 15px 0px 35px;
`;
