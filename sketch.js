//Create variables here
var dog,dogImg,doghappyImg;
var database;
var foodstock,foods=20,lastfeed=0,foodobject=null,feedbutton,addbutton;

var x;
function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  doghappyImg=loadImage("images/dogImg1.png");
}

function setup() {

	createCanvas(800, 500);

  database=firebase.database();

  dog=createSprite(650,280,50,100);

  dog.addImage("dog1",dogImg);
  dog.addImage("dog2",doghappyImg);

  var greeting=createElement("h3");

  var greeting1=createElement("h3");

  feedbutton=createButton("Feed your dog.");

  feedbutton.position(1000,500);

  feedbutton.mousePressed(feeddog);

  input=createInput("Fill your dog's name.");

  input.position(500,95);

  var name=input.value();

  addbutton=createButton("Buy milk bottles");

  addbutton.position(820,95);

  addbutton.mousePressed(addfood);

  dog.scale=0.15;

foodobject=new Food();

 

}


function draw() {  
background(46,139,87);

textSize(15);
fill("white");
if(lastfeed>=12){
  text("Last feed(approx timing):"+lastfeed%12+"pm",350,30);

}
else if(lastfeed===0){
  text("Last feed(approx timing):12am",350,30);
}
else{
  text("Last feed(approx timing):"+lastfeed+"am",350,30);
}
strokeWeight(3);
stroke("black");
fill("white");
textSize(30);
text("Milk bottles left at the stock:"+foods,30,475);
strokeWeight(3);
stroke("blue");
fill("white");
textSize(15);
text("Start to be filled only you finished playing the game.",450,410);
foodobject.display();
  drawSprites();
  //add styles here

}

function addfood(){
  foods++;
  foodobject.updatefoodstock(foods);


}

function feeddog(){
  if(foods>0){
    dog.changeAnimation("dog2",doghappyImg);
    foods--;
    foodobject.updatefoodstock(foods);
    lastfeed=hour();
    foodobject.updatelastfeed(lastfeed);
  }
}


