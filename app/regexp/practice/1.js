

// Target: Write a JavaScript program to test the first character of a string is uppercase or not

const getResult = (str) => {
	const r = /^[A-Z]/
	return r.test(str)
}

// test
console.log( getResult('abc') )	// false
console.log( getResult('Abc') )	// true