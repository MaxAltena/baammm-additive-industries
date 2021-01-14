import React from 'react';

import { StyledContainer, StyledCard, StyledBackground, StyledTitle } from './styles';

export const ColorGrid = ({
	colors = [],
}: {
	colors: Array<{ backgroundColor: string; title: string; titleColor?: string }>;
}) => {
	return (
		<StyledContainer>
			{colors.map((color, index) => (
				<StyledCard key={index}>
					<StyledBackground color={color.backgroundColor}>
						<StyledTitle color={color.titleColor}>{color.title}</StyledTitle>
					</StyledBackground>
				</StyledCard>
			))}
		</StyledContainer>
	);
};
