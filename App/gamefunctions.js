//Developers and Game Makers
var creator = "Brendon Ho";
var developer = "Peter Soboyejo";
var helper = "Prafull Sharma";
//Circle Function
var ellipse = function(x,y,width,height){
  
};

//Player Attributes
var gravity = 0.4;
var positionX = 200;
var positionY = 0;
var velocityX += 1;
var velocityY = 0;
var charSize = 20;
var maxFallSpeed = 8;
//collideWith Function
var collideWith = function(xv,yv,width,height){
  
};

//Random Positions Function
var randomX = random(50,255)
var randomY = random(50,255)
//Platforms

var makePlatforms = function(x,y,width,height){
  random(0,255);
  platforms.push({
    x: x, y: y,
    width: width, height: height
  })
};
makePlatforms(randomX, randomY, /*Put Width*/, /*height*/);
var drawPlatforms = function(){
  
};
//Orange Platforms, makes the game, the game.
var orangePlatforms = [];
var makeOrangePlatforms = function(x,y,width,height){
  color(255,165,0);
  orangePlatforms.push({
    x: x, y: y,
    width: width, height: height
  })
};
makeOrangePlatforms(randomX, randomY, /*Put Width*/, /*Put Height*/);
var drawOrangePlatforms = function(){
  
};

//Updates player
var drawPlayer = function(){
  ellipse();
}

