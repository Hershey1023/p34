//Create variables here
var dog, happyDog;
var foodS, foodStock;
var database;

function preload()
{
	//load images here
  dogImg = loadImage("images/doglmg.png");

}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();

  dog(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    decodeURI.addImage(dogHappy);

  }
  drawSprites();
  //add styles here
  text("Note : Press UP Arrow to feed Drago milk!", 0, 0);
  textSize("10");
  fill("blue");
  stroke("3");

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({Food:x})
}


