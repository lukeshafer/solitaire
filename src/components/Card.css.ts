import { createTheme, style } from '@vanilla-extract/css';

export const [themeDefault, vars] = createTheme({
	color: {
		background: 'green',
		text: 'white',
	},
});

export const themeSecondary = createTheme(vars, {
	color: {
		background: 'blue',
		text: 'white',
	},
});

export const card = style({
	padding: '1rem',
	fontFamily: 'sans-serif',
	backgroundColor: vars.color.background,
	color: vars.color.text,

	width: '8rem',
	height: '12rem',
});
