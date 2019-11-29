import React from 'react';
import classes from './Calculator.module.scss';

class Total extends React.Component {
	state = {
		amount: this.props.amount,
		time: this.props.time,
		percentage: 0.16,
		exchangeRate: 0,
		total: 0
	};

	static getDerivedStateFromProps(props, state) {
		if (props.amount !== state.amount || props.time !== state.time) {
			return {
				amount: props.amount,
				time: props.time
			};
		}
		return null;
	}

	componentDidMount() {
		fetch('http://www.nbrb.by/api/exrates/rates/145')
  		.then(response => response.json())
		.then(response => this.setState({ exchangeRate: response.Cur_OfficialRate }));
	}

	render(){
		return (
			<div className={classes.calculator__total_block}>
				<p className={classes.calculator__total_block_text}>К возврату: <span className={classes.calculator__total_block_BYN}>${ (this.state.amount + this.state.amount * this.state.percentage / 12 * this.state.time).toFixed(2) }</span></p>
				<p className={classes.calculator__total_block_USD}>({ ((this.state.amount + this.state.amount * this.state.percentage / 12 * this.state.time) * this.state.exchangeRate).toFixed(2) } бел. руб)</p>
			</div>
		);
	}
}

export default Total;