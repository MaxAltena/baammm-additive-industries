import React from 'react';
import { CardProps } from './types';
import { StyledCard } from './styles';

/**
 * Generic card
 */
export const Card: React.FC<CardProps> = ({ style, children }: CardProps) => {
	return <StyledCard style={style}>{children}</StyledCard>;
};
