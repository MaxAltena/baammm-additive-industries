import React from 'react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { Reset } from 'styled-reset';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import { Global, themeAdditiveIndustries, themes } from '../src/styles';

export const decorators = [
	withThemesProvider(themes),
	(Story) => (
		<>
			<Reset />
			<Normalize />
			<ThemeProvider theme={themeAdditiveIndustries}>
				<Global />
				<Story />
			</ThemeProvider>
		</>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};
