import styled from 'styled-components';
import { AlertOctagon } from '@styled-icons/feather';

export const StyledMachineOverviewErrorCard = styled.div`
	font-family: ${(props) => props.theme.fonts.text};
	background-color: ${(props) => `${props.theme.colors.DEFAULT}`};
	box-shadow: 0px 0px 7px 7px rgba(255, 87, 23, 0.3), 0px 0px 7px 7px rgba(255, 87, 23, 0.05);
	margin: 20px;
	width: 354px;
	height: 354px;
	border-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	position: relative;
`;

export const StyledMachineOverviewSuccessCard = styled.div`
	font-family: ${(props) => props.theme.fonts.text};
	background-color: ${(props) => `${props.theme.colors.DEFAULT}`};
	box-shadow: ${(props) => `${props.theme.shadows.DEFAULT}`};
	margin: 20px;
	width: 354px;
	height: 354px;
	border-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	position: relative;
`;

export const StyledCardImage = styled.div`
	background-image: url('/assets/images/machines/metalfab1-large.png');
	background-origin: content-box;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 155px;
`;

export const StyledProgressBarOutside = styled.div`
	height: 5px; /* Can be anything */
	position: relative;
	background: #c8c8c8;
	-moz-border-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	-webkit-border-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	border-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	margin: 0 21px 21px 21px;
`;

export const StyledErrorProgressBarInside = styled.span`
	width: 10%;
	display: block;
	height: 100%;
	border-top-left-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	border-bottom-left-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	background-color: ${(props) => `${props.theme.colors.status.red}`};
	position: relative;
	overflow: hidden;
`;

export const StyledSuccessProgressBarInside = styled.span`
	width: 100%;
	display: block;
	height: 100%;
	border-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	background-color: #15133d;
	position: relative;
	overflow: hidden;
`;

export const StyledStatusIndicatorError = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	width: 40px;
	height: 40px;
	background-color: ${(props) => `${props.theme.colors.status.red}`};
	border-top-right-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	border-bottom-left-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	display: grid;
	justify-content: center;
	align-content: center;
`;

export const StyledStatusIndicatorSuccess = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	width: 40px;
	height: 40px;
	background-color: ${(props) => `${props.theme.colors.status.green}`};
	border-top-right-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	border-bottom-left-radius: ${(props) => `${props.theme.borderRadius.DEFAULT}`};
	display: grid;
	justify-content: center;
	align-content: center;
`;

export const StyledStatusIndicatorIcon = styled(AlertOctagon)`
	width: inherit;
	width: 20px;
	height: 20px;
	color: white;
	stroke-width: 2.5px;
`;
