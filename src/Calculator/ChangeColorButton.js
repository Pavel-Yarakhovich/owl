import React from 'react';
import { Theme, themes } from '../theme-context';
import classes from './Calculator.module.scss';

const ChangeColorButton = ({ isDark, buttonClicked }) => {
	const theme = React.useContext(Theme);
	const text = isDark ? 'Make me light' : 'Make me dark';
	return (
		<button className={classes.themeToggler}
			style={{
				border: `2px solid ${theme.border}`,
				background: isDark ? themes.light.bg : themes.dark.bg,
				color: isDark ? themes.light.text : themes.dark.text
			}}
			onClick={buttonClicked}
		>{text}</button>
	);
};

export default ChangeColorButton;