

// Target: Validate postal code
// * contains 6 digits
const getResult = (target) => {
	const r = /^\d{6}$/
	return r.test(target)
}
 
// test
console.log( getResult(12345) )    // false
console.log( getResult(123456) )    // true