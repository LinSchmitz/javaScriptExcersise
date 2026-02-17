const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const players1 = game.players[0];
const players2 = game.players[1];

// console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//3
// - Create an array `allPlayers` containing all **22 players** from both teams.

const allPlayers = players1.concat(players2);
// console.log(allPlayers);

//4
// - During the game, Bayern Munich used **3 substitute players**.
// - Create `players1Final` including `'Thiago'`, `'Coutinho'` and `'Perisic'`.

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);

//5 From the `game.odds` object, create variables `team1`, `draw`, and `team2`
const team1 = game.odds.team1;
const team2 = game.odds.team2;
const draw = game.odds.x;

//6
// - Write a function `printGoals` that:
//   - Receives an **arbitrary number of player names** (not an array)
//   - Prints each player's name
//   - Prints the **total number of goals scored**

// **Test Data:**

// - First, use players: `'Davies'`, `'Muller'`, `'Lewandowski'`, `'Kimmich'`
// - Then, call the function again with players from `game.scored`

const printGoals = function (...players) {
  for (const player of players) console.log(player);
  console.log(`Total goals: ${players.length}`);
};

printGoals(['Davies', 'Muller', 'Lewandowski', 'Kimmich']);
printGoals(game.scored);

//7
// - Print which team is more likely to win (**team with the lower odd**)
// - **Do NOT use if/else or ternary operators**

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
team1 === team2 && console.log('It is likely a draw');
