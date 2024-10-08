// var generateName = require('sillyname');
//creating a variable called generateName that requires this module

// import generateName from "sillyname";

// var sillyName = generateName();
//next step is to use the method called generateName() that comes from this module  

// console.log(`My name is ${sillyName}.`);    



// import randomSuperhero from "superheroes";
import {randomSuperhero} from 'superheroes';

var superHeroName = randomSuperhero();
console.log(`I am ${superHeroName}!`);


//old
/* import superheroes from "superheroes";

const name = superheroes.random();
console.log(`I am ${name}!`); */

import harryPotterNames from "harry-potter-names";

var name =  harryPotterNames.random();
console.log(`Name: ${name}!`);