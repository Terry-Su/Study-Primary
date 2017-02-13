import {f1, f2, f3} from '../util'


// define thunk function
const getPromise = (fn) => new Promise( (resolve) => fn( () => resolve() ) )

const run = function (fn) {
  const gen = fn()

  const next = () => {
  	// recurrent callback
    const result = gen.next()

    if (result.done) return result.value

    result.value.then( () => next())
  }

  next()
}

const g = function* () {
	yield getPromise(f1)
	yield getPromise(f2)
	yield getPromise(f3)
}

run(g)

