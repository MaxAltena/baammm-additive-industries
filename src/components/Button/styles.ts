import styled from 'styled-components';

export const StyledButton = styled.button`
	font-family: ${({ theme }) => theme.fonts.DEFAULT};
	border: 0;
	border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};
	cursor: pointer;
	display: inline-block;
	line-height: 1;

	&.primary {
		color: #fff;
		background-color: ${({ theme }) => theme.colors.primary.DEFAULT};
	}

	&.secondary {
		color: ${({ theme }) => theme.colors.text.light};
		background-color: #fff;
		box-shadow: 0 0 12px #00000029;
	}

	&.small {
		font-size: 12px;
		padding: ${({ theme }) => `${theme.unit * 1}px ${theme.unit * 2}px`};
	}

	&.medium {
		font-size: 14px;
		padding: ${({ theme }) => `${theme.unit * 1.25}px ${theme.unit * 2.5}px`};
	}

	&.large {
		font-size: 16px;
		padding: ${({ theme }) => `${theme.unit * 1.5}px ${theme.unit * 3}px`};
	}
`;
