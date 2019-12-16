import React from 'react';
import Total from './Total';
import { Theme } from '../theme-context';

import classes from './Calculator.module.scss';

class Calculator extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			amount: 100,
			time: 1
		}

		this.myRef = React.createRef();
	}
	
	myRef = React.createRef();

	amountChangedHandler = (event) =>
		this.setState({
			amount: parseInt(event.target.value, 10)
		});

	timeChangedHandler = (event) => {
		this.setState({
			time: parseInt(event.target.value, 10)
		});
	}

	componentDidMount() {
		this.myRef.current.focus();
	}

	render() {
		return (
			<form
				className={classes.calculator}
				style={{ 
					backgroundColor: this.context.bg,
					transition: 'all 0.3s ease',
					boxShadow: `3px 6px 12px ${this.context.border}` }}
			>
				<div 
					className={classes.calculator__title_block}
					style={{ color: this.context.text }}
				>
					<p>Credit amount ($)</p>
					<span 
						className={classes.calculator__title_block_number}
						style={{ color: this.context.contrast }}
					>{this.state.amount}</span>
				</div>

				<input
					onChange={this.amountChangedHandler}
					id='amount'
					type='range'
					min='100'
					value={this.state.amount}
					max='1000'
					step='100'
					ref={this.myRef}
					className={classes.calculator__range}
					style={{ background: `-webkit-linear-gradient(left ,${this.context.contrast}, ${this.context.contrast} ${(this.state.amount-100)/9}%, ${this.context.border} ${(this.state.amount-100)/9}%, ${this.context.border} 100%)` }}
				/>

				<div 
					className={classes.calculator__title_block}
					style={{ color: this.context.text }}
				>
					<p>Number of months</p>
					<span 
						className={classes.calculator__title_block_number}
						style={{ color: this.context.contrast }}
					>{this.state.time}</span>
				</div>

				<input
					onChange={this.timeChangedHandler}
					id='time'
					type='range'
					value={this.state.time}
					min='1'
					max='12'
					step='1'
					className={classes.calculator__range}
					style={{ background: `-webkit-linear-gradient(left , ${this.context.contrast}, ${this.context.contrast} ${(this.state.time-1)/11*100}%, ${this.context.border} ${(this.state.time-1)/11*100}%, ${this.context.border}` }}
				/>
				<Total 
					amount={this.state.amount}
					time={this.state.time}
				/>
			</form>
		)
	}
}

Calculator.contextType = Theme;

export default Calculator;