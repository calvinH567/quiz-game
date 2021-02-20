class Quiz {
    constructor(){}

    getState(){
         gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
          gameState = data.val();
         // console.log(gameState);
        });
     

    }
    
    async start(){
      if(gameState==1){
        
          var player = new participant();
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
}