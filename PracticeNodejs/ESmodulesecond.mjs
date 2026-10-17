// distance.mjs
export function distance(a, b) { return Math.sqrt((a - b) ** 2 + (b - a) ** 2); }

export function simple() { console.log("Simple from ES6 Module");
}

// addTwo.mjs
function addTwo(num) {
  return num + 2;
}

export { addTwo };

const sum = () => {
    let s = 0;
    for (let index = 1; index <= 10; index++) {
        s += index;
    }
    return s;
};


export default sum;