var xoff1 = 0;
var xoff2 = 0;
var start = 0;
var inc = 0.01;

function setup(){
    createCanvas(800,800)
}

function draw(){
    background(51)
    //var x = random(width);
    var x = map(noise(xoff1),0,1,0,width);
    var y = map(noise(xoff2),0,1,0,height);
    
    xoff1 += 0.02;
    xoff2 += 0.02;
    ellipse(x,200,24,24);
    
    translate(0,0);
    stroke(255);
    noFill();
    beginShape();
    var xoff3 = start;
    for(var i = 0; i < width; i++){
   	 stroke(255);
   	 //var j = random(height);
   	 var j = noise(xoff3)*height;
   	 
   	 vertex(i,j);
   	 xoff3+=inc;
    }
    endShape();
    start+=inc;
    //noLoop();
}
