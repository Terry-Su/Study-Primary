import {f1, f2, f3} from '../util'

f1( () => {
  f2( () => {
    f3()
  } )
} )