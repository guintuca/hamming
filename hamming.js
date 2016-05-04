var comput;

compute = function(strand1, strand2) {

	if (strand1.length !== strand2.length) {
		throw new Error('DNA strands must be of equal length.');
	}

	var dist = 0;

	for (var i = 0; i < strand1.length; i += 1) {
		if (strand1charAt(i) !== strand2.charAt(i)) {
			dist += 1;
		}
	}

	return dist;
};

module.exports = {
	compute: compute
};