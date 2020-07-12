let name = "John Wick"

function first(){
	let a = "Hello there "
	second()
	let x = a + name
	console.log(x)
}

function second(){
	let b = "Hi there "
	third()
	let y = b + name
	console.log(y)
}

function third(){
	let c = "Hey there "
	let z = c + name
	console.log(z)
}

first()