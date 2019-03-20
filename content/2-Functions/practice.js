// CeroUno.io
// - 1. Send an acceptance e-mail to all students
// - 2. What are all the languages that students are interested in ?
// - 3. What is the average age of all the students ?

function sendEmail(student) {
  console.log(`Dear ${student.name}, you are accepted at CeroUno.io`);
  console.log(`Email sent to: ${student.email}`);
}

const students = [
  { name: 'Juan', age: 18, email: 'juan@cerouno.io', interest: 'ruby' },
  { name: 'Elizabeth', age: 22, email: 'elizabeth@cerouno.io', interest: 'js' },
  { name: 'Erika', age: 17, email: 'erika@cerouno.io', interest: 'go' },
  { name: 'Pedro', age: 30, email: 'pedro@cerounio.io', interest: 'elixir' },
  { name: 'Fernanda', age: 25, email: 'fernanda@cerouno.io', interest: 'java' }
];

students.forEach(sendEmail)
const interests = students.map((stud) => {
  return stud.interest;
});

const totalAge = students.reduce((total, s) => {
  return total + s.age;
}, 0);

const avg = totalAge / students.length

console.log({ totalAge, avg })