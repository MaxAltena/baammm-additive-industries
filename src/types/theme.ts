export interface Theme {
	name: string;
	unit: number;
	fonts: {
		DEFAULT: string;
		text: string;
		heading: string;
	};
	transition: {
		DEFAULT: string;
		timing: string;
		speed: string;
	};
	colors: {
		primary: {
			DEFAULT: string;
			50?: string;
			100?: string;
			200?: string;
			300?: string;
			400?: string;
			500?: string;
			600?: string;
			700?: string;
			800?: string;
			900?: string;
			A100?: string;
			A200?: string;
			A400?: string;
			A700?: string;
		};
		secondary: {
			DEFAULT: string;
			50?: string;
			100?: string;
			200?: string;
			300?: string;
			400?: string;
			500?: string;
			600?: string;
			700?: string;
			800?: string;
			900?: string;
			A100?: string;
			A200?: string;
			A400?: string;
			A700?: string;
		};
		background: string;
		text: {
			DEFAULT: string;
			light: string;
			lighter: string;
		};
		status: {
			red: string;
			orange: string;
			blue: string;
			green: string;
		};
		accent: {
			DEFAULT: string;
			hover: string;
		};
		onAccent: {
			DEFAULT: string;
			hover: string;
		};
		link: {
			DEFAULT: string;
			hover: string;
		};
	};
	borderRadius?: {
		none: string;
		sm?: string;
		DEFAULT: string;
		md?: string;
		lg?: string;
		xl?: string;
		'2xl'?: string;
		'3xl'?: string;
		full?: string;
	};
	shadows?: {
		sm?: string;
		DEFAULT: string;
		md?: string;
		lg?: string;
		xl?: string;
		'2xl'?: string;
		inner?: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)';
		none: string;
	};
	icon?: {
		stroke?: {
			width: string;
		};
	};
}
