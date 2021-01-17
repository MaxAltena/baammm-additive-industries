import React, { CSSProperties } from 'react';

export interface CardProps {
	/** Content **/
	children: React.ReactNode;
	/**
	 * Additional styles
	 */
	style?: CSSProperties;
}
