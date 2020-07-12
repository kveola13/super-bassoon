let john = {
	name: "John",
	age: 28,
	job: "Assassin",
	presentation: function(style, timeOfDay){
		if(style === "formal"){
			console.log("Good morning, my name is " + this.name + " I\'m not working today.")
		} else if (style === "friendly"){
			console.log("Yeah, I\'m thinking I\'m not quite back yet. Have a nice " + timeOfDay
		}
	}
}

let lux = {
	name: "Lux",
	age: 20,
	job: "illustrator"
}

john.presentation("formal")
john.presentation("friendly", "evening")

john.presentation.call(lux, "friendly", "evening")
john.presentation.apply(lux, ["formal", "afternoon"])

let johnFriendly = john.presentation.bind(john, "friendly")

johnFriendly("morning")
johnFriendly("night")