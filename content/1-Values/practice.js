// Best representation in Javascript for:
// - The tax percentage for purchases in Mexico
const taxpercent = 16;

console.log(`${taxpercent}% es el porcentaje del impuesto por compras en México.!`);

//ejemplo 2

const tenis = {
    name: 'nike fire ace',
    size: '6',
    price: 1500,
    impuesto: { nombre: 'ieps', tasa: 0 }

}
const impuesto = 16;
function porcentajeDeImpuesto(producto) {
    const impuestoNulo = { nombre: 'ninguno', tasa: 0 };
    const impuestoDelProducto = producto.impuesto || impuestoNulo;

    return producto.price * impuestoDelProducto.tasa / 100;
}
console.log(`El aporcentaje de impuesto a tus ${tenis.name} es de ${porcentajeDeImpuesto(tenis)}`);



//let base = 15
//let altura = 30

//function areaTriangulo(base, altura) {
// return base * altura / 2
//};

//console.log(`El area de triangulo ${areaTriangulo(base, altura)}`);

// - A terms && conditions document

// - Houses in Game of thrones

const houseName = 'cazadorez';
const houseName2 = 'agricultores';
const houseName3 = 'soldados';

// - ejemplo 2
const houses = [
    'soldados',
    'agricultores',
    'cazadores'
];

// - The simplest to-do list you can think of
const list = [
    'Al depertar tender la cama'
];
let lista2 =
    ['lavar la ropa',
        'lavar los trastes',
        'estudiar'
    ];

console.log({ houses, list, lista2 })

// - Teams in the world cup
let teamscup = ['16']

let team1 = 'Brasil';
let team2 = 'Mexico';
let team3 = 'USA';
let team4 = 'Jamaica';
let team5 = 'Korea';
let team6 = 'Holanda';
let team7 = 'Francia';
let team8 = 'Alemania';
let team9 = 'Rusia';
let team10 = 'Costa de marfil';
let team11 = 'Africa';
let team12 = 'China';
let team13 = 'Argentina';
let team14 = 'Chile';
let team15 = 'Peru'
let team16 = 'Panama';

console.log(team1, team10, team11)

// - The list of students in the class with name, age and favorite programming language.
const students = [
    { name: 'Mario', age: 20, programlanguage: 'c++' },
    { name: 'Carlos', age: 19, programlanguage: 'piton' },
    { name: 'Saul', age: 18, programlanguage: 'java' },
    { name: 'Pedro', age: 18, programlanguage: 'java' },
    { name: 'Hugo', age: 21, programlanguage: 'c++' }
];
