var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (e, data) => {
	var reps = [];
	if (e) console.error(e);
	var nums = data.split('').filter(x => x != '\n').map(Number);
	const ln = nums.length;
	const half = ln / 2;
	nums.forEach((x, i, a) => {
		let next = i + half;
		if (next >= ln) next = next - ln;
		if (x == a[next]) reps.push(x);
	});
	console.log(reps.reduce((a, b) => a + b, 0));
});
