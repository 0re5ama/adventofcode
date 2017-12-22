var fs = require('fs');
var res;

fs.readFile(process.argv[2], 'utf-8', (e, data) => {
	if (e) console.error(e);
	var draft = data.split('\n').filter(x => x != '').map(x => x.split('-> '));
	var output = draft.map(x => {
		let root = x[0].split(' ')[0];
		let childs = (x.length > 1) ?  x[1].split(', ') : null;
		return [root, childs];
	}).filter(x => x[1]);
	res = output.map(x => x);
	console.log(getHead('qxjkp'));
	return;
});

getHead = x => {
	var ret = res.filter(y => y[1].indexOf(x) >= 0);
	if (ret.length == 0) return 0;
	return ret[0][0];
}

getRoot = x => {
	if (getHead(x) == 0) return x;
	
