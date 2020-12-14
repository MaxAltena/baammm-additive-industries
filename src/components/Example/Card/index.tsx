import React from 'react';

import { ExampleCardProps } from './types';
import { StyledExampleCard } from './styles';

/**
 * Card component to contain items
 */
export const ExampleCard: React.FC<ExampleCardProps> = ({ children, ...props }: ExampleCardProps) => {
	return <StyledExampleCard {...props}>{children}</StyledExampleCard>;
};
