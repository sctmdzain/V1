//Create variables here
var dog,dogImg, happyDog, database, eat, eatstock ;





function preload()
{
  //load images here
  dogImg = loadImage("feed.png");
  happyDog = loadImage("happyDog.png");
}

function setup() {

  database = firebase.database();


 /* Create a canvas of size 500, 500.
Create a dog sprite and add the dog image to the dog sprite.
Assign firebase database to variable database.
Fetch the foodStock from the database you have created using the following syntax.
  */
createCanvas(500,500);
rectMode(CENTER);

dog =createSprite(250,250, 10,10);
	dog.addImage(dogImg);
	dog.scale=0.1;

  eatstock = database.ref(`Food`)
  //eatstock.on("value",readeatstock);


  
}


function draw() { 
  
   background(46, 139, 87) 
   /*
Using UP_ARROW write the code to feed the dog.
This action will feed the dog one milk bottle.
Deduct the count of food left from the firebase.
After feeding the dog, change the image of the dog to a happy image of the dog.
*/

  drawSprites();
  //add styles here
  /*After drawSprites() write the text to print foodStock from the database.
Use textSize to increase the size of the text, fill() to set text color and stroke() to outline the text.
(You can add one more text in draw() to show as an instruction on Canvas)

Write a function to read and write foodStock from the database.
*/



}



