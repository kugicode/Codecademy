// const menu = {
//   _meal: "",
//   _price: 0,

//   set meal (mealToCheck){
//    if (typeof mealToCheck === 'string') {
//      this._meal = mealToCheck; 
//     }
//   }
// }

// menu._meal = 2;
// menu._price = "fish"

// console.log(menu);


const team = {
  _players: [
    {firstName: "dai", lastName: "dino", age: 12},
    {firstName: "anas", lastName: "hersi", age: 21},
    {firstName: "popp", lastName: "mage", age: 15}
  ],
  _games: [
    {opponent: "darkArmy", teamPoints: 22, opponentPoints: 33},
    {opponent: "akatsuki", teamPoints: 23, opponentPoints: 21},
    {opponent: "aa", teamPoints: 21, opponentPoints: 22}
  ],

  get players (){
    return this._players;
  },

  get games (){
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge

    }
    this._players.push(player)
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints

    }
    this._games.push(game);
  }
}

team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);
team.addGame("Titans", 100, 98);
console.log(team._games)