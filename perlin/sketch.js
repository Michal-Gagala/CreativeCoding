// w = 300;
// h = 150;
// var h_off = Math.floor(h / 2);

var w = 1280;
var h = 720;


function change_range(l1, h1, l2, h2, inp) {
    var frac = (inp - l1) / (h1 - l1);
    return (frac * (h2 - l2)) + l2;
}

function setup() {

    createCanvas(w, h);
    // background(220,220,220);
    background(255, 255, 255);
    // background(100,255,0);
    colorMode(HSB);
    // stroke(110,255,255);
    // stroke(0,0,255);
    strokeWeight(1);
    noLoop();
}

function draw() {
    // strokeWeight(40);
    // point(50,50);
    // console.log('kek');
    // return;
    var vectors = new Array(width + 1);
    for (var x = 0; x <= width; x++) {
        vectors[x] = new Array(height + 1);
        for (var y = 0; y <= height; y++) {
            vectors[x][y] = p5.Vector.random2D();
        }
    }

    var minS = 0;
    var maxS = 0;


    var S = new Array(w);
    for (var i = 0; i < w; i++) {
        S[i] = new Array(h);
    }

    for (var x = 0; x < w; x++) {
        for (var y = 0; y < h; y++) {
            // for (var x = 40; x < 41; x ++) {
            //   for (var y = 64; y < 65; y++) {

            // console.log(centre);
            var corners = [
                vectors[x][y],
                vectors[x][y + 1],
                vectors[x + 1][y],
                vectors[x + 1][y + 1]
            ];
            var cornerV = [
                createVector(x, y),
                createVector(x, y + 1),
                createVector(x + 1, y),
                createVector(x + 1, y + 1)
            ];
            // var s = 0;
            var ss = new Array(4);
            for (var i = 0; i < 4; i++) {
                var centre = createVector(x + 0.5, y + 0.5);
                // console.log('---------');
                // console.log(x);
                // console.log(y);
                // console.log(centre);
                // console.log(cornerV[i]);
                var dist = centre.sub(cornerV[i]);
                var d = corners[i].dot(dist);
                // console.log(dist);
                // var d = corners[i].dot(corners[i].dist(centre));
                // console.log(d);
                ss[i] = d;
            }
            // s /= 4;
            var s = (((ss[0] + ss[1]) / 2) + ((ss[2] + ss[3]) / 2)) / 2
            S[x][y] = s;
            // console.log(s);
            minS = min(s, minS);
            maxS = max(s, maxS);
            // s = Math.floor(change_range(-1, 1, 0, 255, s));
            // s = Math.floor(change_range(-0.71, 0.71, 0, 255, s));

            // s = Math.floor(change_range(0, height, 0, 255, y));
            // stroke(110, 255, s);
            // stroke(165, s, 165);
            // point(x, y);
            // return;
            // stroke(0,0,0);
            // console.log(s);

            // decent
            // if (s > 0) {
            //   s = Math.floor(change_range(-0.71, 0.71, 0, 255, s));
            //   console.log(s);
            //   stroke(170, 255, s);
            //   point(x, y);
            // }


            // s = Math.floor(change_range(-0.71, 0.71, 0, 255, s));
            // var st = 255 - s;
            // // console.log(st);
            // stroke(st);
            // point(x, y);
        }
    }
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var s = Math.floor(change_range(minS, maxS, 0, 255, S[x][y]));
            stroke(s);
            point(x, y);
        }
    }
    // console.log(minS);
    // console.log(maxS);
}