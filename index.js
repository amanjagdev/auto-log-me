const colors = require('colors');

//Error Log
const autoLogE = (message, vars) => {

    // If the process is running in 'production', stop logging.
    if (process.env.NODE_ENV === "production") return;

    //Creating Error to get name of function
    let stack = new Error().stack
    let caller = stack.split('\n')[2].trim();
    caller = caller.slice(3, caller.length)
    let arr = caller.split(" ");

    const nameOfFunction = arr[0];
    if (message !== (undefined || '')) {
        console.log(`${nameOfFunction}`.cyan + ` |`.green + ` Error: ${message}`.red.bold);
    } else {
        console.log(`${nameOfFunction} Called`.cyan);
    }

    //Printing varibales
    if (vars !== undefined) {
        console.log("Variables Used : ".green.bold);
        for (let varname in vars) {
            console.log(varname.yellow.bold + ": " + JSON.stringify(vars[varname]).green);
        }
    }
}

//Info Log
const autoLogI = (message, vars) => {

    // If the process is running in 'production', stop logging.
    if (process.env.NODE_ENV === "production") return;

    //Creating Error to get name of function
    let stack = new Error().stack
    let caller = stack.split('\n')[2].trim();
    caller = caller.slice(3, caller.length)
    let arr = caller.split(" ");

    const nameOfFunction = arr[0];
    if (message !== (undefined || '')) {
        console.log(`${nameOfFunction}`.cyan + ` |`.green + ` Info: ${message}`.blue.bold);
    } else {
        console.log(`${nameOfFunction} Called`.cyan);
    }

    //Printing varibales
    if (vars !== undefined) {
        console.log("Variables Used : ".green.bold);
        for (let varname in vars) {
            console.log(varname.yellow.bold + ": " + JSON.stringify(vars[varname]).green);
        }
    }
}


//Warning Log
const autoLogW = (message, vars) => {

    // If the process is running in 'production', stop logging.
    if (process.env.NODE_ENV === "production") return;

    //Creating Error to get name of function
    let stack = new Error().stack
    let caller = stack.split('\n')[2].trim();
    caller = caller.slice(3, caller.length)
    let arr = caller.split(" ");

    const nameOfFunction = arr[0];
    if (message !== (undefined || '')) {
        console.log(`${nameOfFunction}`.cyan + ` |`.green + ` Warning: ${message}`.yellow.bold);
    } else {
        console.log(`${nameOfFunction} Called`.cyan);
    }

    //Printing varibales
    if (vars !== undefined) {
        console.log("Variables Used : ".green.bold);
        for (let varname in vars) {
            console.log(varname.yellow.bold + ": " + JSON.stringify(vars[varname]).green);
        }
    }
}

module.exports.autoLog = autoLogE;
module.exports.autoLogE = autoLogE;
module.exports.autoLogI = autoLogI;
module.exports.autoLogW = autoLogW;
