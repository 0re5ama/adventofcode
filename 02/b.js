var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (!err) {
        var rows = data.split('\n');
        const strnums = rows.map(x => x.split(' '));
        let nums = [];
        strnums.map(x => {
            let ints = x.map(Number);
            nums.push(ints);
        });
        final = nums.filter(x => x.length > 2);
        var result = final.map(x => res(x)).reduce((a, b) => a + b, 0);
        console.log(result);
    } else {
        console.log(err);
    }
});

var res = x => {
    var out = [];
    x.forEach(y => out.push(x.map(a => y%a)));
    var dblzero = out.map(y => y.map((z, i) => (z == 0))).filter(y => y.reduce((a, b) => a + b, 0) == 2);
    var dbls = dblzero[0];
    var dblpos = dbls.map((y, j) => y ? j : -1).filter(y => y >= 0);
    var div = x[dblpos[0]] / x[dblpos[1]];
    var ret = (div >= 1) ? div : 1 / div;
    return ret;
};
