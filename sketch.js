var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var finishedCars = 0;
var passedFinishLine = false;

var timer = 30;

var form2;

var join;

function preload(){
  track = loadImage("../images/track4.png");
  car1_img = loadImage("../images/pink_car1.png");
  car2_img = loadImage("../images/car_2.png");
  car3_img = loadImage("../images/car_3.png");
  car4_img = loadImage("../images/car_4.png");
  ground = loadImage("../images/ground.png");
  background = loadImage("../images/background4.png")

  //form2 = new Form2();
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  join = new Join();
}


function draw(){

  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.formdisplay();
    timer--
    if(timer === 0 ){
      timer++
      
      delete(timer)
    }
  }
  if(gameState === 2){
    game.play();
    //form.hide();
    
  }
  if (finishedCars === 4){
    game.displayRanks();
  }

  
  textSize(50)
  text(timer , width/2 , height/2-150)
 
  
}
