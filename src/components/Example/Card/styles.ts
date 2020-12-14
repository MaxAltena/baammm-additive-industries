import styled from 'styled-components';

export const StyledExampleCard = styled.div`
	background: ${(props) => props.theme.background};
	min-width: ${(props) => `${props.theme.unit * 8}px`};
	min-height: ${(props) => `${props.theme.unit * 8}px`};
	border-radius: ${(props) => props.theme.borderRadius.md};
	box-shadow: ${(props) => props.theme.shadows.md};
	padding: ${(props) => `${props.theme.unit * 2}px`};
`;
