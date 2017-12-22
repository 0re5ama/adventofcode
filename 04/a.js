var fs = require('fs');

fs.readFile('./in04.txt', 'utf-8', (e, data) => {
    if (e) console.error(e);
    var lines = data.toString().split('\n').filter(x => x != '');
    console.log(lines.length);
    var codes = lines.map(x => x.split(' ').sort((a, b) => a > b).filter((y, j, b) => y == b[j-1])).map(z => z.length == 0).filter(x => x).length;
    console.log(codes);
});
