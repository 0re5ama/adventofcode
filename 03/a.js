var spiral = [[0,0]];
const final = 312051;

const dir = Object.freeze({
  right: 0,
  up: 1,
  left: 2,
  down: 3,
});

var count = 1;
var curDir = dir.right;

const condition = _ => {
};

const forward = _ => {
  curPos = spiral[spiral.length-1];
  spiral.push(1);
};

const turnLeft = _ => {
  curDir ++;
  curDir %= 4;
};

while(spiral.length < final) {
  if (condition)
    forward();
  else
    turnLeft();
  console.log(spiral);
}
