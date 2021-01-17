import React from 'react';
import * as StyledIconsFeather from '@styled-icons/feather';

import { StyledContainer, StyledCard } from './styles';

export const IconGrid = ({ icons }: { icons: typeof StyledIconsFeather }) => (
	<StyledContainer>
		{Object.entries(icons).map(([name, icon], index) => (
			<StyledCard key={index}>
				{icon.render()}
				<strong>{name}</strong>
			</StyledCard>
		))}
	</StyledContainer>
);
