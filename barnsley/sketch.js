
var w = 1280;
var w_off = Math.floor(w / 2);

var h = 720;
// var h_off = Math.floor(h / 2);

var f1 = [0, 0, 0.16, 0, 0]
var f2 = [0.85, 0.04, -0.04, 0.85, 1.6]
var f3 = [0.2, -0.26, 0.23, 0.22, 1.6]
var f4 = [-0.15, 0.28, 0.26, 0.24, 0.44]

function change_range(l1, h1, l2, h2, inp) {
  var frac = (inp - l1) / (h1 - l1);
  return (frac * (h2 - l2)) + l2;
}

function apply(f, pnt) {
  var xO = pnt[0];
  var yO = pnt[1];

  var x = (f[0] * xO) + (f[1] * yO);
  var y = (f[2] * xO) + (f[3] * yO) + f[4];
  // console.log(x);
  // console.log(y);
  // return [x, h - y];
  return [x, y];
}

function setup() {
  createCanvas(w, h);
  background(220,220,220);
  stroke('green');
  strokeWeight(1);
  // noLoop();

  colorMode(HSB);
}

function draw() {
  // return;
  // for (var x = 0; x < w; x ++) {
  //   for (var y = 0; y < h; y++) {
  //     var pnt = [x, y];
  //     console.log(pnt);
  //     var r = Math.random();
  //     if (r < 0.01) {
  //       var p = apply(f1, pnt);
  //     } else if (r < 0.86) {
  //       var p = apply(f2, pnt);
  //     } else if (r < 0.93) {
  //       var p = apply(f3, pnt);
  //     } else {
  //       var p = apply(f4, pnt);
  //     }
  //     // console.log(p);
  //     point(p[0], p[1])
  //   }
  // }

  // v1
  var pnt = [0,0];

  for (var i=0; i < 10000; i++) {
    var x = change_range(-2.1820, 2.6558, 0, w, pnt[0]);
    var y = change_range(0, 9.9983, h, 0, pnt[1]);
    point(x, y);
    var r = Math.random();
    if (r < 0.01) {
      pnt = apply(f1, pnt);
    } else if (r < 0.86) {
      pnt = apply(f2, pnt);
    } else if (r < 0.93) {
      pnt = apply(f3, pnt);
    } else {
      pnt = apply(f4, pnt);
    }
    // console.log(p);
    
  }

  // alt
  // var pnt = [0,0];
  // var max_iters = 1000000;

  // for (var i=0; i < max_iters; i++) {
  //   var x = change_range(-2.1820, 2.6558, 0, w, pnt[0]);
  //   var y = change_range(0, 9.9983, h, 0, pnt[1]);
  //   var hu = Math.floor(change_range(0, max_iters, 0, 255, i));
  //   stroke(hu, 255, 255);
  //   point(x, y);
  //   var r = Math.random();
  //   if (r < 0.01) {
  //     pnt = apply(f1, pnt);
  //   } else if (r < 0.86) {
  //     pnt = apply(f2, pnt);
  //   } else if (r < 0.93) {
  //     pnt = apply(f3, pnt);
  //   } else {
  //     pnt = apply(f4, pnt);
  //   }
    // console.log(p);
  // }

}