class participant {
        constructor(d){
          this.d = 0;
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
          });
        }
      //takes the player info
        static getPlayerInfo(){
          var playerInfo = database.ref("contestants");
          playerInfo.on("value",(data)=>{
            allContestents = data.val();
          });
        }
      }
      

