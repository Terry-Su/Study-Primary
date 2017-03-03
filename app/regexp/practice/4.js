

// Target: Validate password: only support 6-12 characters,digits or underline
const getResult = (target) => {
	if (target) {
		const r = /^([a-zA-Z]|\d|\_){6,12}$/
		return r.test(target)
	}
}
 
// test
console.log( getResult('12345') )    // false
console.log( getResult('123456#') )    // false
console.log( getResult('123456_a') )    // true