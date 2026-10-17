// Using CommonJs Syntax:-
const fs = require('node:fs');


// Asynchronous Non-blocking I/O Module
fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log(err, data);
});

// Sync read the file
const syncFile = fs.readFileSync('file.txt');
console.log(syncFile, syncFile.toString());

console.log("Finished Reading File");

// Non-blocking write file
fs.writeFile('file2.txt', 'Hello World', (err) => {
    console.log(err);
});

fs.writeFileSync('file2.txt', 'Hello World from Sync Write File');

fs.appendFile('file2.txt', '\nHello World', (err) => {
    console.log(err);
});

// CommonJS Module:-
// ES6 Module:-


