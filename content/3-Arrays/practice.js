// 0. Get a list of all the team names
// 1. What is the youngest team ?
// 2. What is the team that participated the most ?
// 3. What is the average marketValue value of all teams ?
// 4. Get a list of all the teams sorted from most participations to least.

// Sample:
// {
//   country:'France',
//   midAge:26,
//   participations:15,
//   abroadPercentage:69.6,
//   marketValue:916.65,
//   midValue:39.85
// }

const worldCupTeams = [
  { country: 'France', midAge: 26, participations: 15, abroadPercentage: 69.6, marketValue: 916.65, midValue: 39.85 },
  { country: 'Spain', midAge: 28.5, participations: 15, abroadPercentage: 26.1, marketValue: 909, midValue: 39.52 },
  { country: 'Germany', midAge: 26.8, participations: 19, abroadPercentage: 33.3, marketValue: 897.75, midValue: 33.25 },
  { country: 'Brazil', midAge: 28.6, participations: 21, abroadPercentage: 87, marketValue: 814.5, midValue: 35.41 },
  { country: 'Belgium', midAge: 27.6, participations: 13, abroadPercentage: 92.9, marketValue: 675.68, midValue: 24.13 },
  { country: 'England', midAge: 26, participations: 15, abroadPercentage: 0, marketValue: 648, midValue: 28.17 },
  { country: 'Argentina', midAge: 29.2, participations: 17, abroadPercentage: 87, marketValue: 621.9, midValue: 27.04 },
  { country: 'Portugal', midAge: 28.3, participations: 7, abroadPercentage: 73.9, marketValue: 435.56, midValue: 18.94 },
  { country: 'Uruguay', midAge: 27.8, participations: 13, abroadPercentage: 92.3, marketValue: 347.4, midValue: 13.36 },
  { country: 'Croatia', midAge: 27.7, participations: 5, abroadPercentage: 91.7, marketValue: 321.03, midValue: 13.38 },
  { country: 'Colombia', midAge: 28, participations: 6, abroadPercentage: 82.9, marketValue: 277.65, midValue: 7.93 },
  { country: 'Poland', midAge: 27.4, participations: 8, abroadPercentage: 75, marketValue: 251.73, midValue: 7.87 },
  { country: 'Senegal', midAge: 27.1, participations: 2, abroadPercentage: 100, marketValue: 248.81, midValue: 10.82 },
  { country: 'Serbia', midAge: 26.4, participations: 2, abroadPercentage: 88.9, marketValue: 234.77, midValue: 8.69 },
  { country: 'Denmark', midAge: 27.5, participations: 5, abroadPercentage: 85.2, marketValue: 225.59, midValue: 8.35 },
  { country: 'Switzerland', midAge: 26.6, participations: 11, abroadPercentage: 96.2, marketValue: 200.03, midValue: 7.69 },
  { country: 'Mexico', midAge: 28.9, participations: 16, abroadPercentage: 53.6, marketValue: 147.96, midValue: 5.28 },
  { country: 'Russia', midAge: 28.4, participations: 4, abroadPercentage: 10.7, marketValue: 134.57, midValue: 4.81 },
  { country: 'Egypt', midAge: 28.4, participations: 3, abroadPercentage: 62.1, marketValue: 116.98, midValue: 4.03 },
  { country: 'Nigeria', midAge: 25.5, participations: 6, abroadPercentage: 90, marketValue: 116.33, midValue: 3.88 },
  { country: 'Morocco', midAge: 26.9, participations: 5, abroadPercentage: 88.5, marketValue: 109.67, midValue: 4.22 },
  { country: 'Sweden', midAge: 28.2, participations: 12, abroadPercentage: 100, marketValue: 104.81, midValue: 4.56 },
  { country: 'South Korea', midAge: 27.8, participations: 10, abroadPercentage: 50, marketValue: 69.53, midValue: 2.48 },
  { country: 'Japan', midAge: 27.9, participations: 6, abroadPercentage: 65.4, marketValue: 65.88, midValue: 2.53 },
  { country: 'Iceland', midAge: 28.6, participations: 1, abroadPercentage: 91.3, marketValue: 61.2, midValue: 2.66 },
  { country: 'Tunisia', midAge: 27.1, participations: 5, abroadPercentage: 72.4, marketValue: 49.3, midValue: 1.7 },
  { country: 'Australia', midAge: 28.1, participations: 5, abroadPercentage: 80.8, marketValue: 43.29, midValue: 1.67 },
  { country: 'Costa Rica', midAge: 29.2, participations: 5, abroadPercentage: 63, marketValue: 40.12, midValue: 1.49 },
  { country: 'Iran', midAge: 27, participations: 5, abroadPercentage: 58.3, marketValue: 38.66, midValue: 1.61 },
  { country: 'Peru', midAge: 26.7, participations: 5, abroadPercentage: 79.2, marketValue: 31.37, midValue: 1.31 },
  { country: 'Saudi Arabia', midAge: 28.6, participations: 5, abroadPercentage: 10.7, marketValue: 20.25, midValue: 723 },
  { country: 'Panama', midAge: 28.2, participations: 1, abroadPercentage: 77.1, marketValue: 10.53, midValue: 301 }
];
//0. Get a list of all the team names
const teamNames = worldCupTeams.map((teams) => {
  return teams.country;
});
console.log({ EquiposParticipantes: teamNames })
console.log(`\n`)

// Segunda Opcion
worldCupTeams.sort((a, b) => {
  if (a.country > b.country) {
    return 1;
  }
  if (a.country < b.country) {
    return -1;
  }
});
worldCupTeams.forEach((worldCupTeams, index) => {
  console.log(`${index + 1}-${worldCupTeams.country}`)
});

console.log(`\n`)

// 1. What is the youngest team ?
const sortedTeams = worldCupTeams.sort((a, b) => {
  return a.midAge - b.midAge;
});
console.log({ joven: sortedTeams[0] }); '\n'
console.log({ viejo: sortedTeams[sortedTeams.length - 1] })

console.log(`\n`)

// 2. What is the team that participated the most ?

const participationsTeam = worldCupTeams.sort((x, y) => {
  return y.participations - x.participations;
});
console.log({ MayorParticipacion: participationsTeam[0] });
console.log(`\n`)
console.log({ DeMayoraMenor: participationsTeam });

// 3. What is the average marketValue value of all teams ?

const averagemarketValue = worldCupTeams.reduce((total, team) => {
  return total + team.marketValue;
}, 0);

const average = averagemarketValue / worldCupTeams.length


console.log(`El total del valor de los equipos es de: \n ${(averagemarketValue)}
 El valor promedio de todos los equipos es de : \n ${(average)} `);
console.log(`\n`)

//Practica adicional echa por nosotros.
//Realizar un listado de generos de pelicula y 
//posteriormente mostrasr las peliculas que       
//unicamente pueden ver los mayores de edad

const peliculas = [
  { name: `Eso (El payaso asesino)`, genero: `Terror`, clasificacion: `B15`, rangoEdad: 15 },
  { name: `Alien, el octavo pasajero`, genero: `Terror`, clasificacion: `C`, rangoEdad: 18 },
  { name: `Amanecer de los muertos`, genero: `Terror`, clasificacion: `C`, rangoEdad: 18 },
  { name: `Avatar`, genero: `Ciencia ficcion`, clasificacion: `B15`, rangoEdad: 15 },
  { name: `Interestelar`, genero: `Ciencia ficcion`, clasificacion: `A`, rangoEdad: 6 },
  { name: `Transformers`, genero: `Ciencia ficcion`, clasificacion: `B15`, rangoEdad: 15 },
  { name: `Las crónicas de Spiderwick`, genero: `Infantil`, clasificacion: `AA`, rangoEdad: 0 },
  { name: `Up: Una aventura de altura`, genero: `Infantil`, clasificacion: `AA`, rangoEdad: 0 },
  { name: `WALL-E`, genero: `Infantil`, clasificacion: `AA`, rangoEdad: 0 },
  { name: `Avengers: Juego Final `, genero: `Accion`, clasificacion: `B15`, rangoEdad: 0 },
  { name: `Misión imposible: repercusión`, genero: `Accion`, clasificacion: `B15`, rangoEdad: 15 },
  { name: `Rápidos y Furiosos 8`, genero: `Accion`, clasificacion: `B15`, rangoEdad: 15 },
]
const aptasMayores18 = peliculas.filter((peliculas) => {
  return peliculas.rangoEdad >= 18
});
console.log(`Estas peliculas que no son aptas para menores de 18: \n`, aptasMayores18);

const aptasMenores18 = peliculas.filter((peliculas) => {
  return peliculas.rangoEdad - 18
});
console.log(`Aptas para menores: \n`, aptasMenores18);

const filtroAA = peliculas.filter((peliculas) => {
  return peliculas.clasificacion === 'AA'
});
console.log(`Aptas para todo publico: \n`, filtroAA)


//Ejecutar now
