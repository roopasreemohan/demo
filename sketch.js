var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
fixedRect = createSprite(200,200,50,80);
movingRect = createSprite(400,200,80,30);

  
}

function draw() {
  background(255,255,255);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  
  drawSprites();
}