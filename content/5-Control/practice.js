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

console.log(Math.random());

const mexicoRivals = [
  { "country": "South Korea", "strength": 0.6 },
  { "country": "Germany", "strength": 0.9 },
  { "country": "Sweden", "strength": 0.5 }
];

const mexico = {
  name: 'Mexico',
  strength: 0.7,
  points: 0,
  //methodPlay: ['defensivo', 'contragolpe']

  play: function playrival (rival) {
    // el metodo recibe un rival.
    // a veces gana, a veces pierde
    // ganar depende de Math.random() y rival.strength
    // si Math.random() es mayor que la fuerza del rival, entonces mexico gana
    // en caso contrario, pierde.
    return Math.random() > rival.strength;
   }
}
