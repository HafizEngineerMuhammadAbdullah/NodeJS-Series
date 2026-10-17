import { distance, simple as s } from "./ESmodulesecond.mjs";

const dist = distance(2, 3);
console.log(dist);
s();


import * as es from "./ESmodulesecond.mjs";
import sum from "./ESmodulesecond.mjs"


console.log(es);
console.log("Add Two numbers : ", es.addTwo(0));
console.log("Sum of first 10 natural numbers : ", sum());
console.log("Sum of first 10 natural numbers : ", es.default());
console.log("Distance : ", es.distance(1, 2));
console.log("Simple Fnx ", es.simple());
