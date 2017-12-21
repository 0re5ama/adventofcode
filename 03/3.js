var x = process.argv[2];
x = parseInt(x);
var low = Math.floor(Math.sqrt(x));
var hi = Math.ceil(Math.sqrt(x));
var nlow = ( low % 2 == 0 ) ? low - 1 : low; //lower root
var nhi = ( hi % 2 == 0 ) ? hi + 1 : hi; //higher root
// console.log((nlow + 1) / 2);
var cdist = (nhi + 1) / 2; // This is the circular distance
// console.log(cdist);
mindist = cdist - 1;
maxdist = cdist * 2 - 2;
firstNum = nlow * nlow + 1;
lastNum = nhi * nhi;
distFirst = maxdist - 1;
var diff = x - firstNum;
diffMin = distFirst - mindist;
var arr = [];
var val = distFirst;
var inc = false;
for (let i = firstNum; i <= lastNum; i++) {
	arr.push([i, val]);
	if (i == x) console.log(val);
	if (val == maxdist || val == mindist) {
		inc = !inc;
	}
	if (inc)
		val ++;
	else
		val --;
}
