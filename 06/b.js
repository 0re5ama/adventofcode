var fs = require('fs');

var prev = [], curr, next;
var count = 0;
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) console.error(err);
    var nums = data.split('\t').map(Number);
    curr = nums;
    var cond = true;
    while ( cond ) {
        let pushable = curr.map(x => x);
        prev.push(pushable);
        let max = Math.max(...curr);
        let maxloc = curr.indexOf(max);
        let rem = max;
        curr[maxloc] = 0;
        let currloc = maxloc;
        while ( rem ) {
            currloc ++;
            if (currloc > curr.length - 1) currloc = 0;
            curr[currloc] ++;
            rem --;
        }
        count ++;

        var indx = prev.map(x => x.toString()).indexOf(curr.toString() );
        var cond = indx < 0;
    }
    console.log(count - indx);
    console.log(count);
});
