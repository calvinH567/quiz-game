var canva;
var gameState, contestantCount, database, quiz, question, contestant,contestentCountref,gameStateRef
function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz()
  quiz.getState();
}


function draw(){
  background("pink");
  quiz.start();

}
