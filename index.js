const colors = require('colors');

const autoLog = () => {
    console.log(this);
} 

module.exports.autoLog = autoLog;