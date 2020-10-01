# auto-log-me

A Logger to Debug your JS Projects.

## Description
It logs the name of the function you called it in along with the message that you send with it

## Installation

`yarn add auto-log-me`

OR

`npm install auto-log-me`

## Usage

Import 
```javascript
const { autoLog, autoLogE, autoLogI, autoLogW } = require('auto-log');`
```
OR

```javascript
import { autoLog, autoLogE, autoLogI, autoLogW } from 'auto-log';
```

Functions

autoLog() --> for basic messages
autoLogI() --> for info messages
autoLogW() --> for warning messages
autoLogE() --> for error messages

Usage
```javascript
const CalledInThis = () => {
    const foo = "Value of foo";
    const foosome = {
        value: "This is a object"
    };

    autoLogI('Hi');
    autoLogW('Hi');
    autoLog('Hi');
    autoLogE('Hi');
    autoLogI();
    autoLogW();
    autoLog();
    autoLogE();
    autoLogI('', { foo, foosome });
    autoLogW('', { foo, foosome });
    autoLogE('You can even write errors', { foo, foosome });
    autoLog('', { foo, foosome });
}
CalledInThis();
```

OUTPUT(Color Coded):

![Output Photo](https://github.com/amanjagdev/auto-log-me/blob/master/assets/output.jpg?raw=true)
