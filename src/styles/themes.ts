import { Theme } from '../types';

export const themeAdditiveIndustries: Theme = {
	name: 'Additive Industries',
	unit: 8,
	fonts: {
		DEFAULT: `'Open Sans', sans-serif`,
		text: `'Open Sans', sans-serif`,
		heading: `'Frank New', 'Open Sans', sans-serif`,
	},
	transition: {
		DEFAULT: 'all 200ms ease-in-out',
		timing: 'ease-in-out',
		speed: '200ms',
	},
	colors: {
		primary: {
			DEFAULT: '#151539',
			50: '#e3e3e7',
			100: '#b9b9c4',
			200: '#8a8a9c',
			300: '#5b5b74',
			400: '#383857',
			500: '#151539',
			600: '#121233',
			700: '#0f0f2c',
			800: '#0c0c24',
			900: '#060617',
			A100: '#5858ff',
			A200: '#2525ff',
			A400: '#0000f1',
			A700: '#0000d7',
		},
		secondary: {
			DEFAULT: '#5268AA',
			50: '#ebeef6',
			100: '#ced5ea',
			200: '#aeb9dc',
			300: '#8d9dcd',
			400: '#7488c3',
			500: '#5c73b8',
			600: '#546bb1',
			700: '#4a60a8',
			800: '#4156a0',
			900: '#304391',
			A100: '#d9e0ff',
			A200: '#a6b6ff',
			A400: '#738cff',
			A700: '#5977ff',
		},
		background: '#f8f8f8',
		text: {
			DEFAULT: '#5b5b5b',
			light: '#5A607F',
			lighter: '#A2A2A2',
		},
		status: {
			red: '#eb6060',
			orange: '#FF5717',
			blue: '#1ea7fd',
			green: '#4EDB90',
		},
		accent: {
			DEFAULT: '#fcc517',
			hover: '#f7be3d',
		},
		onAccent: {
			DEFAULT: '#ffffff',
			hover: '#ffffff',
		},
		link: {
			DEFAULT: '#506ed5',
			hover: '#16153b',
		},
	},
	borderRadius: {
		none: '0',
		sm: '2px',
		DEFAULT: '4px',
		md: '5px',
		lg: '12px',
		xl: '14px',
		'2xl': '16px',
		'3xl': '18px',
		full: '9999px',
	},
	shadows: {
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
		none: '0 0 #000000',
	},
	icon: {
		stroke: {
			width: '2px',
		},
	},
};

export const themeFunny: Theme = {
	name: 'Funny',
	unit: 8,
	fonts: {
		DEFAULT: `'Comic Sans MS', 'Comic Sans', display, monospace`,
		text: `'Comic Sans MS', 'Comic Sans', display, monospace`,
		heading: `'Comic Sans MS', 'Comic Sans', display, monospace`,
	},
	transition: {
		DEFAULT: 'all 200ms ease-in-out',
		timing: 'ease-in-out',
		speed: '200ms',
	},
	colors: {
		primary: {
			DEFAULT: 'yellow',
		},
		secondary: {
			DEFAULT: 'red',
		},
		background: '#f8f8f8',
		text: {
			DEFAULT: '#5b5b5b',
			light: '#5A607F',
			lighter: '#A2A2A2',
		},
		status: {
			red: '#eb6060',
			orange: '#FF5717',
			blue: '#1ea7fd',
			green: '#4EDB90',
		},
		accent: {
			DEFAULT: 'red',
			hover: 'indianred',
		},
		onAccent: {
			DEFAULT: '#ffffff',
			hover: '#ffffff',
		},
		link: {
			DEFAULT: 'blue',
			hover: 'darkblue',
		},
	},
	borderRadius: {
		none: '0',
		sm: '0.125rem',
		DEFAULT: '0.25rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		'2xl': '1rem',
		'3xl': '1.5rem',
		full: '9999px',
	},
	shadows: {
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
		none: '0 0 #000000',
	},
	icon: {
		stroke: {
			width: '4px',
		},
	},
};

export const themeCustom: Theme = {
	name: 'Custom',
	unit: 10,
	fonts: {
		DEFAULT: `'Open Sans', sans-serif`,
		text: `'Open Sans', sans-serif`,
		heading: `'Merriweather', 'Roboto', 'Open Sans', sans-serif`,
	},
	transition: {
		DEFAULT: 'all 200ms ease-in-out',
		timing: 'ease-in-out',
		speed: '200ms',
	},
	colors: {
		primary: {
			DEFAULT: '#00796b',
		},
		secondary: {
			DEFAULT: '#ff4081',
		},
		background: '#f8f8f8',
		text: {
			DEFAULT: '#5b5b5b',
			light: '#5A607F',
			lighter: '#A2A2A2',
		},
		status: {
			red: '#eb6060',
			orange: '#FF5717',
			blue: '#1ea7fd',
			green: '#4EDB90',
		},
		accent: {
			DEFAULT: '#ff4081',
			hover: '#ff70a0',
		},
		onAccent: {
			DEFAULT: '#ffffff',
			hover: '#ffffff',
		},
		link: {
			DEFAULT: '#506ed5',
			hover: '#16153b',
		},
	},
	borderRadius: {
		none: '0',
		sm: '0.125rem',
		DEFAULT: '0.25rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		'2xl': '1rem',
		'3xl': '1.5rem',
		full: '9999px',
	},
	shadows: {
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
		none: '0 0 #000000',
	},
	icon: {
		stroke: {
			width: '1px',
		},
	},
};

export const themes: Theme[] = [themeAdditiveIndustries, themeFunny, themeCustom];

export default themes;
