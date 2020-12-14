import React from 'react';
import { Reset } from 'styled-reset';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import { Global, theme } from '../src/styles';

export const decorators = [
	(Story) => (
		<>
			<Reset />
			<Normalize />
			<ThemeProvider theme={theme}>
				<Global />
				<Story />
			</ThemeProvider>
		</>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};
