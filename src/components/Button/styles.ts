import styled from 'styled-components';

export const StyledButton = styled.button`
	font-family: ${(props) => props.theme.fonts.DEFAULT};
	border: 0;
	border-radius: ${(props) => props.theme.borderRadius.DEFAULT};
	cursor: pointer;
	display: inline-block;
	line-height: 1;

	&.primary {
		color: #fff;
		background-color: ${(props) => props.theme.colors.primary.DEFAULT};
	}

	&.secondary {
		color: ${(props) => props.theme.colors.text};
		background-color: #fff;
		box-shadow: 0 0 12px #00000029;
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
