var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (e, data) => {
    var lines = data.split('\n').filter(x => x != '');
    var arr = lines.map(x => x.split('-> '));
    var proc = arr.map(x => {
        var head, child, name, size;
        head = x[0].split(' ');
        name = head[0];
        size = Number(head[1].match(/\d+/g)[0]);
        child = (x[1]) ? x[1].split(', ') : [];
        return [name, size, child];
    });
    console.log(proc);
});
