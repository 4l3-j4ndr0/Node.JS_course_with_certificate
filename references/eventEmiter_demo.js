const EvenEmitter = require('events')

// create class 
class MyEmitter extends EvenEmitter{}

// init Object 
const myEmitter = new MyEmitter()

//Event lsitener
myEmitter.on('event', () => console.log('event fired'))

// init event
myEmitter.emit('event') 
myEmitter.emit('event') 
myEmitter.emit('event') 
myEmitter.emit('event') 