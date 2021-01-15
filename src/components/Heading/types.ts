import React, { CSSProperties } from 'react';

export interface HeadingProps {
	/** Heading size **/
	type?: 'title' | 'subtitle';
	/** Content **/
	children: React.ReactNode;
	/**
	 * Additional styles
	 */
	style?: CSSProperties;
	fontSize?: string;
}
