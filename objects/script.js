var john = {
	name: "John",
	yearOfBirth: 1992,
	job: "Assassin"
}

console.log(john)

let Person = function(name, yearOfBirth, job){
	this.name = name
	this.yearOfBirth = yearOfBirth
	this.job = job
}

Person.prototype.calculateAge = function(){
	console.log(2020-this.yearOfBirth)
}
Person.prototype.lastName = "Demacia"

var john = new Person("John", 1992, "Assassino")
let lux = new Person("Lux", 2000, "Illuminator")
let garen = new Person("Garen", 1998, "Veteran")

john.calculateAge()
lux.calculateAge()
garen.calculateAge()

console.log(john.lastName)
console.log(lux.lastName)
console.log(garen.lastName)
