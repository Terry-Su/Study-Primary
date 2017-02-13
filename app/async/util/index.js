export const f1 = callback => setTimeout(() => { 
  console.log("f1")
  if (callback) {
    callback()
  }
}, 1000)

export const f2 = callback => setTimeout(() => { 
  console.log("f2")
  if (callback) {
    callback()
  }
}, 1000)

export const f3 = callback => setTimeout(() => { 
  console.log("f3")
  if (callback) {
    callback()
  }
}, 1000)