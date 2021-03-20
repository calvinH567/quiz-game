var canva;
var player
var allPlayers;
var gameState = 0, contestantCount, database, quiz, question, contestant,contestentCountref,gameStateRef
function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz()
  quiz.getState();
}


function draw(){
  background("pink");
  quiz.start();
  if(contestantCount>2){
    quiz.update(1)
  }
  if(gameState==1){
    quiz.play();
  }
}
