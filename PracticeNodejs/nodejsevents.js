// Use inbuilt Event Package
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

// Custom Event
// This block of code only runs when the event fires or triggers
myEmitter.on('WaterFull', () => {
    console.log('Please,turn off the motor!');
    // Gentle Remainder
    // Non-blocking Asynchronous Function
    setTimeout(() => {
        console.log("Please,turn off the motor! Its a gentle reminder");
    },3000);
});

console.log("Oops,The script is running");
myEmitter.emit('WaterFull');
console.log("Oops,The script is still running");

// myEmitter.emit('event');



// const EventEmitter = require('node:events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');

