import React from 'react';
import { theme } from 'src/styles';

import { StyledContainer, StyledCard, StyledBackground, StyledCode, StyledTitle } from './styles';

export const ColorGrid = ({
	colors = [],
}: {
	colors: Array<{ backgroundColor: string; title: string; titleColor?: string; code?: 'light' | 'dark' }>;
}) => (
	<StyledContainer>
		{colors.map((color, index) => (
			<StyledCard key={index}>
				<StyledBackground color={color.backgroundColor}>
					<StyledCode color={color.code ? color.code : 'light'}>{color.backgroundColor}</StyledCode>
					<StyledTitle color={color.titleColor ? color.titleColor : theme.colors.text.lightest}>
						{color.title}
					</StyledTitle>
				</StyledBackground>
			</StyledCard>
		))}
	</StyledContainer>
);
