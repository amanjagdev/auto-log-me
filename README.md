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
    autoLog('HI');
    autoLogE('HI');
    autoLogI('HI');
    autoLogW('HI');
}
CalledInThis();
```

OUTPUT(Color Coded):

```
CalledInThis | Error: HI
CalledInThis | Error: HI
CalledInThis | Info: HI
CalledInThis | Warning: HI
```
