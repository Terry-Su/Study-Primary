import {f1, f2, f3} from '../util'


// define thunk function
const thunkify = fn => {
  return function() {
    var args = new Array(arguments.length)
    var ctx = this

    for (var i = 0; i < args.length; ++i) {
      args[i] = arguments[i]
    }

    return function (done) {
      var called

      args.push(function () {
        if (called) return
        called = true
        done.apply(null, arguments)
      })

      try {
        fn.apply(ctx, args)
      } catch (err) {
        done(err)
      }
    }
  }
}

const thunkF1 = thunkify(f1)
const thunkF2 = thunkify(f2)
const thunkF3 = thunkify(f3)

const run = function (fn) {
  const gen = fn()

  const next = () => {
  	// recurrent callback
    const result = gen.next()
    if (result.done) return
    result.value(next)
  }

  next()
}

const g = function* () {
	yield thunkF1()
	yield thunkF2()
	yield thunkF3()
}

run(g)

