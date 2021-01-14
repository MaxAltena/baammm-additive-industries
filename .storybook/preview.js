import React from 'react';
import { Reset } from 'styled-reset';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import { Global, theme as StyledTheme } from '../src/styles';

export const decorators = [
	(Story) => (
		<>
			<Reset />
			<Normalize />
			<ThemeProvider theme={StyledTheme}>
				<Global />
				<Story />
			</ThemeProvider>
		</>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: {
		theme,
	},
	options: {
		storySort: {
			order: [
				'Design system',
				'Design system/Colors',
				'Design system/Fonts',
				'Design system/Typography',
				'Design system/Iconography',
				'Design system/Other',
				'Pages',
				'Components',
			],
		},
	},
};
