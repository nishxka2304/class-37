class Player {

  //index,name,distance
  constructor(){

    this.index = null;
    this.name = null;
    this.distance = 0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//players - player1 ->name & distance
//- player2 ->name & distance
//=>

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.distance
    });
  }

  // ref,on,set/update
  //
  static getPlayerInfo()
  {
    var pIR = database.ref('players');
    pIR.on("value",(data)=>{
      allPlayers = data.val();
    })

  }


}
