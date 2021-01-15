import React from 'react';

import { ButtonProps } from './types';
import { StyledButton } from './styles';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	style,
	...props
}: ButtonProps) => {
	const mode = primary ? 'primary' : 'secondary';

	return (
		<StyledButton className={[size, mode].join(' ')} style={{ ...style, backgroundColor }} {...props}>
			{label}
		</StyledButton>
	);
};
