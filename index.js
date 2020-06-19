const colors = require('colors');

//Error Log
const autoLogE = (message) => {

    //Creating Error to get name of function
    let stack = new Error().stack
    let caller = stack.split('\n')[2].trim();
    caller = caller.slice(3, caller.length)
    let arr = caller.split(" ");

    const nameOfFunction = arr[0];
    if (message != undefined) {
        console.log(`${nameOfFunction}`.cyan + ` |`.green + ` Error: ${message}`.red.bold);
    } else {
        console.log(`${nameOfFunction} Called`.cyan);
    }
}

//Info Log
const autoLogI = (message) => {

    //Creating Error to get name of function
    let stack = new Error().stack
    let caller = stack.split('\n')[2].trim();
    caller = caller.slice(3, caller.length)
    let arr = caller.split(" ");

    const nameOfFunction = arr[0];
    if (message != undefined) {
        console.log(`${nameOfFunction}`.cyan + ` |`.green + ` Info: ${message}`.blue.bold);
    } else {
        console.log(`${nameOfFunction} Called`.cyan);
    }
}


//Warning Log
const autoLogW = (message) => {

    //Creating Error to get name of function
    let stack = new Error().stack
    let caller = stack.split('\n')[2].trim();
    caller = caller.slice(3, caller.length)
    let arr = caller.split(" ");

    const nameOfFunction = arr[0];
    if (message != undefined) {
        console.log(`${nameOfFunction}`.cyan + ` |`.green + ` Warning: ${message}`.yellow.bold);
    } else {
        console.log(`${nameOfFunction} Called`.cyan);
    }
}

module.exports.autoLog = autoLogE;
module.exports.autoLogE = autoLogE;
module.exports.autoLogI = autoLogI;
module.exports.autoLogW = autoLogW;