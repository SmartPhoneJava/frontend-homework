'use strict';

const addAmount = (output, amount) => amount > 1 ? output + amount : output

const rle = (text) => {
	if (typeof text !== "string") {
		return;
	}
	let output = text.substr(0, 1);
	let amount = [...text].reduce((amount, curr) => {
		if (curr !== output.substr(-1, 1)) {
			output = add_amount(output, amount) + curr
			amount = 0;
		}
		return ++amount;
	}, 0);
	output = add_amount(output, amount)
	
	return output;
}
