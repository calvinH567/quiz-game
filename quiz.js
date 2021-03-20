class Quiz {
    constructor(){}

    getState(){
         gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
          gameState = data.val();
         // console.log(gameState);
        });
    }
    update(state){
      database.ref('/').update({
        gameState: state 
      });
        
    }
    
    async start(){
      if(gameState==0){
        
          player = new participant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            player.getCount();
            
          }
          question = new Question();
          question.display();
      }else{
          console.log("DASDASDDsda");
          console.log(gameState);
      }  

    }
    play(){
      question.hideAll();
      text("result",100,100);
      participant.getPlayerInfo();
      if(allPlayers!==undefined){
        text("player who answered correct are green",250,i);
        var y = 100
        for(var i in allPlayers ){
          var correctAnswer = "2"
          if(correctAnswer==allPlayers[i].answer){
            fill ("green");
          }else{
            fill ("red");
          }
          text(allPlayers[i].name + ": " + allPlayers[i].answer, 250,y);
          y = y + 50;
        }
      }
    }
}