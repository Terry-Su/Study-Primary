import EventEmitter from 'events'

import {f1, f2, f3} from '../util'


class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('f1 complete', () => {
	f2( () => {
		myEmitter.emit('f2 complete')
	} )
});
myEmitter.on('f2 complete', () => {
	f3()
});

f1( () => {
	myEmitter.emit('f1 complete')
} )