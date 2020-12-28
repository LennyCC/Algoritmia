// Data to test
state_capitals = [{state: 'Maine', capital: 'Augusta'}];
mixed_capitals = [
	{
  	"state": 'Maine',
    capital: 'Augusta'
  },
  {
  	country: 'Spain',
    "capital" : "Madrid"
  },
  // delete later
  {
  	country: 'Spain',
    capital: 'Madrid'
  }
]

const capital = (x) => x.map(i => {
	let state;
	if (i.state) {
  	state = i.state;
  } else if (i.country) {
  	state = i.country;
  }
  
  return `The Capital of ${state} is ${i.capital}`
})
// Solution of the exercise
const capital = (x) => x.map(i => `The Capital of ${i.state ? i.state : i.country} is ${i.capital}`)


// LOGS
const log1 = capital(state_capitals)[0]; // "The capital of Maine is Augusta"
const log2 = capital(mixed_capitals)[1]; // "The capital of Spain is Madrid"
const log3 = capital(mixed_capitals)[1]; // "The capital of Spain is Madrid"
document.getElementById('demo').innerHTML = log3

/* Simple function without conditional */
// const capital = (x) => x.map(i => `The Capital of ${i.state} is ${i.capital}`);


/* Simple function without conditional, no arrow function
function capital(x) {
	return x.map(i => `The Capital of ${i.state} is ${i.capital}`)
}


Two ways of calling a specific field of an object:

const myObject = {
	name: 'Lenny',
  lastName: 'Cala'
}

myObject.name

myObject["name"] // porque es útil? imagínate

const x = 'name';
return myObject.x; // aunque x return 'name', JS lo interpreta literal como que hay un campo que se llama x. Aunque no lo haya. Pero se lo reserva. Detrás del punto LITERAL el nombre del campo. Si tienes que jugar con el nombre usa la segunda forma:

myObject[`${x}`] // Esto si funcionaría, porque sería literalmente "name"*/