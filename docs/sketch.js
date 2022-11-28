var diam1=0;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background("#FF126F");
  stroke("#ED70A1")
  strokeWeight("1")
  fill("#ED70A1")
  ellipse(200,200,diam1,diam1);diam1=diam1+5
  stroke("#F5ADC9")
  strokeWeight("1");
  fill("#F5ADC9");
  ellipse(200,200,diam1,diam1);diam1=diam1+1
  stroke("#ED70A1");
  strokeWeight("70");
  fill("#F5ADC9")
  ellipse(200,200,diam1,diam1);diam1=diam1+1
if (mouseIsPressed == true) {
    fill(255); // White
  }
  else{
    stroke("#FF126F")
    fill("#FF126F");
  }
  ellipse(200,200,20,20);
  fill("#FFFFFF");
  stroke("#000000");
  strokeWeight("8");
  textSize(35);
  textFont("Papyrus");
  textStyle(ITALIC);
  textStyle(BOLD);
  textAlign(CENTER);
  text("DReaM",200,190);
  text("WoRLD",200,255);
}

function mousePressed(){
  if(diam1>50){
    diam1=0;
  }else{
    diam1=diam1+5;
  }
}
