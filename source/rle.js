'use strict';

const rle = (text) => {
	if (typeof text !== "string") {
		return;
	}
	let output = text.substr(0, 1);
	let amount = [...text].reduce((amount, curr) => {
		if (curr !== output.substr(-1, 1)) {
			if (amount > 1) 
				output += amount;
			output += curr;
			amount = 0;
		}
		return ++amount;
	}, 0);
	if (amount > 1) { 
		output += amount;
	}
	return output;
}
