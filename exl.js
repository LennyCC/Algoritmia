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


