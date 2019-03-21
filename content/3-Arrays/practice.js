// 0. Get a list of all the team names
// 1. What is the youngest team ?
// 2. What is the team that participated the most ?
// 3. What is the average market value of all teams ?
// 4. Get a list of all the teams sorted from most participations to least.
// Sample:
// {
//   "country":"France",
//   "mid_age":26,
//   "participations":15,
//   "abroad_percentage":69.6,
//   "market":916.65,
//   "mid_market_value":39.85
// }

const worldCupTeams = [
  { "country": "France", "mid_age": 26, "participations": 15, "abroad_percentage": 69.6, "market": 916.65, "mid_market_value": 39.85 },
  { "country": "Spain", "mid_age": 28.5, "participations": 15, "abroad_percentage": 26.1, "market": 909, "mid_market_value": 39.52 },
  { "country": "Germany", "mid_age": 26.8, "participations": 19, "abroad_percentage": 33.3, "market": 897.75, "mid_market_value": 33.25 },
  { "country": "Brazil", "mid_age": 28.6, "participations": 21, "abroad_percentage": 87, "market": 814.5, "mid_market_value": 35.41 },
  { "country": "Belgium", "mid_age": 27.6, "participations": 13, "abroad_percentage": 92.9, "market": 675.68, "mid_market_value": 24.13 },
  { "country": "England", "mid_age": 26, "participations": 15, "abroad_percentage": 0, "market": 648, "mid_market_value": 28.17 },
  { "country": "Argentina", "mid_age": 29.2, "participations": 17, "abroad_percentage": 87, "market": 621.9, "mid_market_value": 27.04 },
  { "country": "Portugal", "mid_age": 28.3, "participations": 7, "abroad_percentage": 73.9, "market": 435.56, "mid_market_value": 18.94 },
  { "country": "Uruguay", "mid_age": 27.8, "participations": 13, "abroad_percentage": 92.3, "market": 347.4, "mid_market_value": 13.36 },
  { "country": "Croatia", "mid_age": 27.7, "participations": 5, "abroad_percentage": 91.7, "market": 321.03, "mid_market_value": 13.38 },
  { "country": "Colombia", "mid_age": 28, "participations": 6, "abroad_percentage": 82.9, "market": 277.65, "mid_market_value": 7.93 },
  { "country": "Poland", "mid_age": 27.4, "participations": 8, "abroad_percentage": 75, "market": 251.73, "mid_market_value": 7.87 },
  { "country": "Senegal", "mid_age": 27.1, "participations": 2, "abroad_percentage": 100, "market": 248.81, "mid_market_value": 10.82 },
  { "country": "Serbia", "mid_age": 26.4, "participations": 2, "abroad_percentage": 88.9, "market": 234.77, "mid_market_value": 8.69 },
  { "country": "Denmark", "mid_age": 27.5, "participations": 5, "abroad_percentage": 85.2, "market": 225.59, "mid_market_value": 8.35 },
  { "country": "Switzerland", "mid_age": 26.6, "participations": 11, "abroad_percentage": 96.2, "market": 200.03, "mid_market_value": 7.69 },
  { "country": "Mexico", "mid_age": 28.9, "participations": 16, "abroad_percentage": 53.6, "market": 147.96, "mid_market_value": 5.28 },
  { "country": "Russia", "mid_age": 28.4, "participations": 4, "abroad_percentage": 10.7, "market": 134.57, "mid_market_value": 4.81 },
  { "country": "Egypt", "mid_age": 28.4, "participations": 3, "abroad_percentage": 62.1, "market": 116.98, "mid_market_value": 4.03 },
  { "country": "Nigeria", "mid_age": 25.5, "participations": 6, "abroad_percentage": 90, "market": 116.33, "mid_market_value": 3.88 },
  { "country": "Morocco", "mid_age": 26.9, "participations": 5, "abroad_percentage": 88.5, "market": 109.67, "mid_market_value": 4.22 },
  { "country": "Sweden", "mid_age": 28.2, "participations": 12, "abroad_percentage": 100, "market": 104.81, "mid_market_value": 4.56 },
  { "country": "South Korea", "mid_age": 27.8, "participations": 10, "abroad_percentage": 50, "market": 69.53, "mid_market_value": 2.48 },
  { "country": "Japan", "mid_age": 27.9, "participations": 6, "abroad_percentage": 65.4, "market": 65.88, "mid_market_value": 2.53 },
  { "country": "Iceland", "mid_age": 28.6, "participations": 1, "abroad_percentage": 91.3, "market": 61.2, "mid_market_value": 2.66 },
  { "country": "Tunisia", "mid_age": 27.1, "participations": 5, "abroad_percentage": 72.4, "market": 49.3, "mid_market_value": 1.7 },
  { "country": "Australia", "mid_age": 28.1, "participations": 5, "abroad_percentage": 80.8, "market": 43.29, "mid_market_value": 1.67 },
  { "country": "Costa Rica", "mid_age": 29.2, "participations": 5, "abroad_percentage": 63, "market": 40.12, "mid_market_value": 1.49 },
  { "country": "Iran", "mid_age": 27, "participations": 5, "abroad_percentage": 58.3, "market": 38.66, "mid_market_value": 1.61 },
  { "country": "Peru", "mid_age": 26.7, "participations": 5, "abroad_percentage": 79.2, "market": 31.37, "mid_market_value": 1.31 },
  { "country": "Saudi Arabia", "mid_age": 28.6, "participations": 5, "abroad_percentage": 10.7, "market": 20.25, "mid_market_value": 723 },
  { "country": "Panama", "mid_age": 28.2, "participations": 1, "abroad_percentage": 77.1, "market": 10.53, "mid_market_value": 301 }
];
const teamNames = worldCupTeams.map((t) => {
  return t.country;
});
console.log({teamsName: teamNames})

const sortedTeams = worldCupTeams.sort((a, b) => {
  return a.mid_age - b.mid_age;
});
console.log({ joven: sortedTeams[0] });
console.log({ viejo: sortedTeams[sortedTeams.length - 1] })

const participationsTeam = worldCupTeams.sort((a, b) => {
  return b.participations - a.participations;
});
console.log({MayorParticipacion: participationsTeam[0] });

console.log({MayorParticipacion: participationsTeam});

