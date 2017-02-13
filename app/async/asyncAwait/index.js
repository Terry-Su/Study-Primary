import {f1, f2, f3} from '../util'

const getPromise = fn => new Promise( resolve => fn( () => resolve() ) )

async function run() {
	await getPromise(f1)
	await getPromise(f2)
	await getPromise(f3)
}

run()