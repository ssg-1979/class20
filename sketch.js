var mr,fr,obj1,obj2;
function setup() {
  createCanvas(800,400);
  mr= createSprite(300, 200, 50, 50);
  fr=createSprite(200,200,30,50);

  mr.shapeColor="green";
  fr.shapeColor="green";
 obj1=createSprite(100,100,50,50);
 obj1.shapeColor="green";
 obj2=createSprite(400,200,50,50);
 obj2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  mr.x=World.mouseX;
  mr.y=World.mouseY;
 console.log(mr.x);
 console.log(mr.x-fr.x);

 console.log((mr.width)/2+(fr.width)/2);
  if(mr.x-fr.x<(mr.width)/2+(fr.width)/2 && fr.x-mr.x <(mr.width)/2+(fr.width)/2
    && mr.y-fr.y<(mr.height)/2+(fr.height)/2 && fr.y-mr.y <(mr.height)/2+(fr.height)/2)
  {
    mr.shapeColor="red";
    fr.shapeColor="red";
  }
  else
  {
    mr.shapeColor="green";
    fr.shapeColor="green";
  }

if(istouching(mr,obj1))
{
  mr.shapeColor="red";
  obj1.shapeColor="red";
}
else
{
  mr.shapeColor="green";
  obj1.shapeColor="green";
}

  drawSprites();
}
 function istouching(obj1,obj2)
{
  if(obj1.x-obj2.x<(obj1.width)/2+(obj2.width)/2 && obj2.x-obj1.x <(obj1.width)/2+(obj2.width)/2
  && obj1.y-obj2.y<(obj1.height)/2+(obj2.height)/2 && obj2.y-obj1.y <(obj1.height)/2+(obj2.height)/2)
{
 return true;
}
else
{
  return false;
}
}