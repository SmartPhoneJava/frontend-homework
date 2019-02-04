'use strict';

const rle = function(text) {
	if (typeof(text) != "string") {
		return undefined;
	}
	var output = "";
	var i = 0, j = 0;
	const length = text.length;
	while (i < length) {
		output += text[i];
		for (; j < length && text[i] == text[j]; j++);
		if (j - i > 1) {
			output += j - i;
		}
		i = j;
  }
  return output;
}
