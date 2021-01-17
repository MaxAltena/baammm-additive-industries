import React from 'react';
import { ProgressBarProps } from './types';
import { StyledProgressBarInside, StyledProgressBarOutside } from './styles';

/**
 * The jobs card showcasing core progress of a specific machine
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }: ProgressBarProps) => {
	return (
		<StyledProgressBarOutside>
			<StyledProgressBarInside style={{ width: `${percentage}%` }} />
		</StyledProgressBarOutside>
	);
};
