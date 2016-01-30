function setup(){
    var canvas = createCanvas(500, 500);
    canvas.parent("canvasParent");
};
function draw(){
    stroke(random(255),128);
    line(random(500),random(500),mouseX,mouseY);
}
