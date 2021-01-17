import React from 'react';

import { HeadingProps } from './types';
import { StyledPrimaryHeading, StyledSecondaryHeading } from './styles';

/**
 * Heading component
 */
export const Heading: React.FC<HeadingProps> = ({ type = 'title', fontSize, style, ...props }: HeadingProps) => {
	if (type === 'title') {
		return (
			<StyledPrimaryHeading style={{ ...style, fontSize }} {...props}>
				{props.children}
			</StyledPrimaryHeading>
		);
	} else {
		return (
			<StyledSecondaryHeading style={{ ...style, fontSize }} {...props}>
				{props.children}
			</StyledSecondaryHeading>
		);
	}
};
