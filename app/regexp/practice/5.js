

// Target: Validate login name: only support input begining with character and composed by 5-20 characters,digits,underline and "." 
const getResult = (target) => {
	if (target) {
		const r = /^[a-zA-Z]([a-zA-Z]|\d|\_|\.){4,19}/
		return r.test(target)
	}
}
 
// test
console.log( getResult('_aaa11111111') )    // false
console.log( getResult('asdfasdf_.12123') )    // true