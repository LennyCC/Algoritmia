state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"

function capital(x) {
	let strings = [];
	for (let i = 0; i < x.length; i++) {
    strings.push(`The capital of ${x[i].state ? x[i].state : x[i].country} is ${x[i].capital}`)
  }
  return strings;
}