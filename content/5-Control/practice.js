// HELL GROUP
// 1. Create a Mexico Object that has
// 1.1 name, points
// 1.2 method: play
//      Receives a rival
//      The probability to win is random > rival strength
//      If mexico wins 3 points are added
// 2. Use the object to make Mexico play all rivals,
//    Mexico needs 6 points to advance
//    Announce if Mexico advances or not
// 3. Make Mexico try to advance the group until it can (exit only when it does)
//    Announce how many times it required before quitting

const mexicoRivals = [
  { "country": "South Korea", "strength": 0.6 },
  { "country": "Germany", "strength": 0.9 },
  { "country": "Sweden", "strength": 0.5 }
];

const mexico = {
  name: 'Mexico',
  strength: 0.7,
  points: 0,

  /**
   * 
   * @param {Rival} rival 
   * @returns boolean
   * 
   * Recibe un rival { stregth: number, country: string}
   * 1. Calcula la fuerza de juego de Mexico
   * 2. Compara la fuerza de Mexico contra la del rival
   * 3. Regresa `true` si la fuerza de Mexico supera la del rival
   * 4. Caso contrario, regresa `false`
   */
  play: function (rival) {
    const mexicoGana = Math.random() > rival.strength;
    if (mexicoGana) this.points += 3;

    return mexicoGana
  }
}

let mexicoWins
for (let i = 0; i < mexicoRivals.length; i++) {
  console.log(`Mexico vs ${mexicoRivals[i].country}`)
  mexicoWins = mexico.play(mexicoRivals[i])

  if (mexicoWins)
    console.log("mexico gana", { mexico })
  else
    console.log("mexico pierde", { mexico })
}