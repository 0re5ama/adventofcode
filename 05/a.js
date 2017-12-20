var fs = require('fs');

var pos = 0, count = 0, tmp;
fs.readFile('./05.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);
  var lines = data.split('\n').filter(x => x != '').map(Number);
  while (pos <= lines.length - 1) {
    tmp = pos;
    pos += lines[pos];
    if (lines[tmp] >= 3) lines[tmp] -= 1 
    else lines[tmp] += 1;
    count ++;
  }
  console.log(count);
});
