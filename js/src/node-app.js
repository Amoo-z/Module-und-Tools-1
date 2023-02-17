const myDefaultImport = require('./node-module');
const { myFunction } = require('./node-module');
const cowsay = require('cowsay');
myDefaultImport();
myFunction();

console.log(cowsay.say({ text: 'Hello World!' }));
