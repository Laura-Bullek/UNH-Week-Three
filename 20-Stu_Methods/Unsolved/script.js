var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
// "Canis Major" is added as the first element of the array
// No elements are removed
constellations.unshift("Canis Major"); 

// "Venus" is removed from the planets array
// The first argument specifies the location at which to begin adding or removing elements. 
// The second argument specifies the number of elements to remove.
planets.splice(5,1);

// Arrays constellations and planets are joined to form a new array named galaxy
constellations.concat(planets);

// "Polaris" is converted into all capital letters and
// the new string is stored in a variable
let starCaps = star.toUpperCase()

console.log(constellations);
console.log(planets);
console.log(starCaps);