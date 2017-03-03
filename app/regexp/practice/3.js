

// Target: Validate user's name: only support the input with 1-30 chracters
const getResult = (target) => {
	if (target) {
		const r = /^([a-zA-Z]){1,30}$/
		return r.test(target)
	}
}
 
// test
console.log( getResult('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA') )    // false
console.log( getResult(1) )    // false
console.log( getResult('a') )    // true
console.log( getResult('aaaaaaaaaaaaaaaaaaaaaaaaaaaaA') )    // true
