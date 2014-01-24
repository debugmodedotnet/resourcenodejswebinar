
var events = require('events'); 
var myEvents = events.EventEmitter;
var myLogger= new myEvents();
myLogger.on('error',errorfunction);

function errorfunction(message)
{
 console.log(message);
}
myLogger.emit('error','Error1');
myLogger.emit('error','Error 2');
