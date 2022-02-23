
var branches = []
var leaves = []

function setup() {
  // put setup code here
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  // background(255,204,0);
  frameRate(0.5)
  leaves.push(new Leaf(windowWidth/2, windowHeight, windowHeight/3, 270, 128, 0));
  colorMode(HSB);
  background(198, 86, 60);
}

function draw() {
  // put drawing code here
  // stroke(0,255,0);

  // line(windowWidth/2, windowHeight, windowWidth/2, 2*windowHeight/3)
  // line(40,40,100,windowHeight)
  for (var i = branches.length - 1; i >= 0; i--) {
    branches[i].draw();
    branches[i].age += 0.5;
  }

  branches = branches.filter(function(branch) {
    return branch.age <= 5;
  }) 

  // leaves = leaves.filter(function(leaf) {
  //   return (leaf.angle >= 180 && leaf.angle <=360);
  // })

  var newLeaves = []
  console.log(leaves.length);
  for (var i = 0; i < leaves.length; i++) {
    leaves[i].draw();

    var grown = leaves[i].grow();
    branches.push(grown[0]);

    for (var k = 1; k < grown.length; k++) {
      newLeaves.push(grown[k]);
    }
    // newLeaves.push(grown[1]);
    // newLeaves.push(grown[2]);
    // newLeaves.push(grown[3]);
    // newLeaves.push(grown[4]);
    // newLeaves.push(grown[5]);
    // newLeaves.push(grown[6]);
    // newLeaves.push(grown[7]);
  }
  leaves = newLeaves;

}