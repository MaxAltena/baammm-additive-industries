import { create } from '@storybook/theming/create';

export default create({
	base: 'light',

	colorPrimary: '#151539',
	colorSecondary: '#5c73b8',

	// UI
	appBg: '#f6f9fc',
	appContentBg: '#ffffff',
	appBorderColor: 'rgba(0, 0, 0, 0.1)',
	appBorderRadius: 4,

	// Typography
	fontBase: `'Open Sans', '-apple-system', '.SFNSText-Regular', 'San Francisco', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'`,
	fontCode: `'Fira Code Retina', 'Fira Code', 'FiraCode-Retina', 'Operator Mono', 'Andale Mono', 'Lucida Console', Consolas, Monaco, monospace`,

	// Text colors
	textColor: 'rgba(0, 0, 0, 0.9)',
	textInverseColor: 'rgba(255, 255, 255, 0.9)',
	textMutedColor: 'rgba(102, 102, 102, 0.9)',

	// Toolbar default and active colors
	barTextColor: 'rgba(153, 153, 153, 0.9)',
	barSelectedColor: '#5c73b8',
	barBg: '#ffffff',

	// Form colors
	inputBg: '#ffffff',
	inputBorder: 'rgba(0, 0, 0, 0.1)',
	inputTextColor: 'rgba(51, 51, 51, 0.9)',
	inputBorderRadius: 4,

	brandTitle: 'BAAMMM – Additive Industries',
	brandUrl: 'https://baammm-additive-industries.netlify.app/',
	brandImage:
		'https://raw.githubusercontent.com/MaxAltena/baammm-additive-industries/development/public/assets/vectors/baammm-logo.svg',
});
