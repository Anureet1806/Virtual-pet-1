var dog,happyDog;
var database;
var foodS,foodStock;
var dogImage,happyDogImage;

function preload()
{
  dogImage=loadImage("Dog.png");
  happyDogImage=loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  
  var dog=createSprite(200,200,50,50);
   dog.addImage("dogImage",dog);

   database=firebase.database();
   foodStock=database.ref('Food');
   foodStock.on("value",readStock);
  
}

function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }

  drawSprites();
  
  text("Note:Press UP_ARROW Key To Feed Drago Milk",400,5);
  textSize(18);
  fill ("white");
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }

  database.ref('/').update({
    foodS
  })
}



