import React, { useState, useEffect, useContext } from 'react';
import { Theme } from '../theme-context';
import classes from './Calculator.module.scss';
import axios from 'axios';

const Total = ({ amount:amt, time:tm }) => {
	const PERCENTAGE = 0.16;
	const [amount, setAmount] = useState(amt);
	const [time, setTime] = useState(tm);
	const [exRate, setExRate] = useState(0);

	const context = useContext(Theme);

	useEffect(() => {
		setAmount(amt);
		setTime(tm)
	}, [amt, tm]);

	useEffect(() => {
		const fetchExRate = async () => {
			const result = await axios('http://www.nbrb.by/api/exrates/rates/145');
			setExRate(result.data.Cur_OfficialRate);
		};
		fetchExRate();
	}, []);

	const total = amount + amount * PERCENTAGE / 12 * time;

	return (
		<div>
			<p style={{ color: context.text, fontSize: '0.8rem' }}>Percentage rate is: {PERCENTAGE*100}%</p>
			<p style={{ color: context.text, fontSize: '0.8rem' }}>Exchange rate is: {exRate.toFixed(3)}</p>
			<div className={classes.calculator__total_block}>
				<p
					className={classes.calculator__total_block_text}
					style={{ color: context.text }}
				>
					To be returned:  <span
					className={classes.calculator__total_block_BYN}
					style={{ color: context.contrast }}
					>
						{ (total).toFixed(2) } USD
					</span>
				</p>
				<p
					className={classes.calculator__total_block_USD}
					style={{ color: context.text }}
				>
					({ (total * exRate).toFixed(2) } BYN)
				</p>
			</div>
		</div>
	);
}

export default Total;