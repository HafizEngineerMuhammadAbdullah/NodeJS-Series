import url from 'node:url';

// const myURL = new URL('https://example.org');
const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log("URL is : ", myURL);


const pathname = '/a/b/c';
const search = '?d=e';
const hash = '#fgh';
console.log("URL href : ",myURL.href);

// const myURL = new URL(`https://example.org${pathname}${search}${hash}`);


// Node.js works on eventTrigger Architecture
