import React from 'react';

import { ExampleButtonProps } from './types';
import { StyledExampleButton } from './styles';

/**
 * Primary UI component for user interaction
 */
export const ExampleButton: React.FC<ExampleButtonProps> = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ExampleButtonProps) => {
	const mode = primary ? 'primary' : 'secondary';

	return (
		<StyledExampleButton className={[size, mode].join(' ')} style={{ backgroundColor }} {...props}>
			{label}
		</StyledExampleButton>
	);
};
