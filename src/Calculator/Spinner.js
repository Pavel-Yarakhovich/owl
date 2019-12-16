import React from 'react';
import classes from './Spinner.module.css';

const Spinner = props => {
	return(
		<div className={classes.spinner}>
			<div className={classes.container}>  
				<div className={classes.bubbleOne}></div>
				<div className={classes.bubbleTwo}></div>
				<div className={classes.bubbleThree}></div>
			</div>
		</div>
	);
};

export default Spinner;