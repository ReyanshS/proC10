var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 10, 10)
  box.shapeColor = "grey"
}

function draw(){
  background("yellow");
  if(keyDown("right_arrow")){
    background("red")
  }
  drawSprites()
}

