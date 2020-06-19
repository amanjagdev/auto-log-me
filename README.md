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

Usage
```javascript
const CalledInThis = () => {
    autoLogI('Hi');
    autoLogW('Hi');
    autoLog('Hi');
    autoLogE('Hi');
    autoLogI();
    autoLogW();
    autoLog();
    autoLogE();
}
CalledInThis();
```

OUTPUT(Color Coded):

```
CalledInThis | Info: Hi
CalledInThis | Warning: Hi
CalledInThis | Error: Hi
CalledInThis | Error: Hi
CalledInThis Called
CalledInThis Called
CalledInThis Called
CalledInThis Called
```
