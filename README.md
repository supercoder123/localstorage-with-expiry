# @supercoder123/localstorage-with-expiry

Micro library written in typescript which adds expiry time (in seconds) to localstorage 

## Installation

### NPM
```
npm i @supercoder123/localstorage-with-expiry
```

### CDN (882 bytes)
```
<script src="https://cdn.jsdelivr.net/npm/@supercoder123/localstorage-with-expiry@1.0.0/dist/lib-umd/LS.min.js"></script>
```

## Usage
```
const ls = new LS();  // default storage class is localstorage

// pass sessionStorage in the constructor to use sessionStorage
const ls = new LS(window.sessionStorage); 

// no expiry
ls.setItem('key', 'value');  

// expiry time in seconds
ls.setItem('key', 'value', 5)  

// no need to stringify, uses JSON.stringity internally
ls.setItem('key', {test: 'yay'});

// get Item
ls.getItem('key');

// remove Item
ls.removeItem('key');

// clear all
ls.clear();

// list all
ls.list();   // prints key value in the console

```

