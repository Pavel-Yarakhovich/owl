import React from 'react';

export const themes = {
	dark: {
		border: '#2d2d2d',
		contrast: '#8d2663',
		text: '#dbdbdb',
		bg: '#000'
	},
	light: {
		border: '#9e9e9e',
		contrast: '#890900',
		text: '#2d2d2d',
		bg: '#fffefc'
	}
};

export const Theme = React.createContext();