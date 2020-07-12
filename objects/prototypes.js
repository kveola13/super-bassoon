let personProto = {
	calculateAge: function () {
		console.log(2020-this.yearOfBirth)
	}
}

let john = Object.create(personProto)
john.name = "john"
john.yearOfBirth = "1991"
john.job = "fisher"

let lux = Object.create(personProto, {
	name: {value: "Lux"},
	yearOfBirth: {value: 2001},
	job: {value: "illustrator"},

})

let years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc(arr, fn){
	let arrRes = []
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]))
	}
	return arrRes
}

function calculateAge(el){
	return 2020-el
}

function isFullAge(el){
	return 2020-el >= 18
}

function maxHeartRate(el){
	if(el >= 18 && el <= 81){
		return Math.round(206.9 - (0.67 * el))
	} 
	return -1
}

let ages = arrayCalc(years, calculateAge)
let fullAges = arrayCalc(ages, isFullAge)
let rates = arrayCalc(ages, maxHeartRate)
console.log(ages)
console.log(fullAges)
console.log(rates)