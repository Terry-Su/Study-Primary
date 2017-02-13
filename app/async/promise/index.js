import {f1, f2, f3} from '../util'


const getPromise = (func) => new Promise( resolve => {
	func( () => { resolve() } )
})

Promise.resolve( getPromise(f1) )
	.then( () => getPromise(f2) )
	.then( () => getPromise(f3) )



















