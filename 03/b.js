var n = parseInt(process.argv[2]);
var arr = [];
var curr = 1;
var count = 0;
while( curr < n ) {
	let next = getNext(count);
	arr.push(curr);
	curr ++;
	count ++;
}
console.log(arr[0].poas);

getNext = x => {
	var neighbors = getneigh(x);
}

getneigh = x => {
	var ret = [];
	if (x == 0) return null;
}
