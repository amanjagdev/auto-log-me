const colors = require('colors');

//Error Log
const autoLogE = (message) => {

    //Creating Error to get name of function
    let stack = new Error().stack
    let caller = stack.split('\n')[2].trim();
    caller = caller.slice(3, caller.length)
    let arr = caller.split(" ");

    const nameOfFunction = arr[0];

    console.log(`${nameOfFunction}`.blue + ` |`.green + ` Error: ${message}`.red.bold);
}

//Info Log
const autoLogI = (message) => {

    //Creating Error to get name of function
    let stack = new Error().stack
    let caller = stack.split('\n')[2].trim();
    caller = caller.slice(3, caller.length)
    let arr = caller.split(" ");

    const nameOfFunction = arr[0];

    console.log(`${nameOfFunction}`.blue + ` |`.green + ` Info: ${message}`.blue.bold);
}


//Warning Log
const autoLogW = (message ) => {

    //Creating Error to get name of function
    let stack = new Error().stack
    let caller = stack.split('\n')[2].trim();
    caller = caller.slice(3, caller.length)
    let arr = caller.split(" ");

    const nameOfFunction = arr[0];

    console.log(`${nameOfFunction}`.blue + ` |`.green + ` Warning: ${message}`.yellow.bold);
}

module.exports.autoLog = autoLogE;
module.exports.autoLogE = autoLogE;
module.exports.autoLogI = autoLogI;
module.exports.autoLogW = autoLogW;