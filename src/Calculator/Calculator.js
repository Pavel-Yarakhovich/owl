import React from 'react';
import Total from './Total';

import classes from './Calculator.module.scss';

class Calculator extends React.Component {
	state = {
		amount: 100,
		time: 1
	}

	amountChangedHandler = (event) =>
		this.setState({
			amount: parseInt(event.target.value, 10)
		});

	timeChangedHandler = (event) =>
		this.setState({
			time: parseInt(event.target.value, 10)
		});

	render() {
		return (
			<form
				className={classes.calculator}
			>
				<div className={classes.calculator__title_block}>
					<p>Сумма кредита ($)</p>
					<span className={classes.calculator__title_block_number}>{this.state.amount}</span>
				</div>

				<input
					onChange={this.amountChangedHandler}
					id='amount'
					type='range'
					min='100'
					value={this.state.amount}
					max='1000'
					step='100'
					className={classes.calculator__range}
					style={{ background: `-webkit-linear-gradient(left ,rgb(179, 24, 24),rgb(179, 24, 24) ${(this.state.amount-100)/9}%,rgb(165, 165, 165) ${(this.state.amount-100)/9}%,rgb(165, 165, 165) 100%)` }}
				/>

				<div className={classes.calculator__title_block}>
					<p>Количество месяцев</p>
					<span className={classes.calculator__title_block_number}>{this.state.time}</span>
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
					style={{ background: `-webkit-linear-gradient(left ,rgb(179, 24, 24),rgb(179, 24, 24) ${(this.state.time-1)/11*100}%,rgb(165, 165, 165) ${(this.state.time-1)/11*100}%,rgb(165, 165, 165) 100%)` }}
				/>
				<Total 
					amount={this.state.amount}
					time={this.state.time}
				/>
			</form>
		)
	}
}

export default Calculator;