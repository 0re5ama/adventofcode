var fs = require('fs');
var x1, x2;

var file = process.argv[2];

anagram = (x, y) => x.split('').sort().join('') == y.split('').sort().join('');
/*
sorted = x => x.map(y => y.split('').sort().join('')).sort();

repeated = x => x.sort().filter((y, j, b) => y == b[j - 1]).length > 0;
*/
sorted = x => x.map(y => y.split('').sort().join('')).sort().filter((y, j, b) => y == b[j - 1]).length > 0;

fs.readFile(file, 'utf-8', (err, data) => {
    if (err) console.log(err);
    var lines = data.toString().split('\n').filter(x => x != '');
    var codes = lines.map(x => x.split(' '));
    sortedCodes = codes.map(sorted);//.filter(x => !x).length;
    console.log(sortedCodes);
});
