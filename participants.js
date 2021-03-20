class participant {
        constructor(answer){
          this.answer = null;
          this.name = null
          this.index = null
      
        }
      //reads the playercount
        getCount(){
          var contestentCountref = database.ref('contestantCount');
          contestentCountref.on("value",function(data){
            contestantCount = data.val();
          })
          //
        }
      //updates the count in the game
        updateCount(count){
          database.ref('/').update({
            contestantCount: count
          });
        }
      // updates name
        update(){
          var playerIndex = "players/player"+this.index;
          database.ref(playerIndex).set({
            name:this.name,
            answer:this.answer
          });
        }
      //takes the player info
        static getPlayerInfo(){
          var playerInfo = database.ref("contestants");
          playerInfo.on("value",(data)=>{
            allPlayers = data.val();
          });
        }
      }
      

