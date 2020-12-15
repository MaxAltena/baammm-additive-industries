import styled from 'styled-components';

export const StyledExampleButton = styled.button`
	font-family: 'Frank New', 'Open Sans', sans-serif;
	font-weight: 700;
	border: 0;
	border-radius: ${(props) => props.theme.borderRadius.default};
	cursor: pointer;
	display: inline-block;
	line-height: 1;

	&.primary {
		color: white;
		background-color: ${(props) => props.theme.colors.primary.default};
	}
	&.secondary {
		color: #333;
		background-color: transparent;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
	}
	&.small {
		font-size: 12px;
		padding: ${(props) => `${props.theme.unit * 1}px`} ${(props) => `${props.theme.unit * 2}px`};
	}
	&.medium {
		font-size: 14px;
		padding: ${(props) => `${props.theme.unit * 1.25}px`} ${(props) => `${props.theme.unit * 2.5}px`};
	}
	&.large {
		font-size: 16px;
		padding: ${(props) => `${props.theme.unit * 1.5}px`} ${(props) => `${props.theme.unit * 3}px`};
	}
`;
