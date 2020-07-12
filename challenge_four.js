let markObject = {
	"firstname": "Mark",
	"height" : 1.8,
	"weight" : 100,
	calculateBMI: function(){
		this.bmi = this.weight / (this.height * this.height)
		return this.bmi
	}
}

let johnObject = {
	"firstname": "John",
	"height" : 1.9,
	"weight" : 90,
	calculateBMI: function(){
		this.bmi = this.weight / (this.height * this.height)
		return this.bmi
	}
}

if(johnObject.calculateBMI() < markObject.calculateBMI()){
	console.log("Mark has the higher bmi with " + markObject.calculateBMI().toFixed(2))
} else if (johnObject.calculateBMI() > markObject.calculateBMI()){
	console.log("John has the higher bmi with " + johnObject.calculateBMI().toFixed(2))
} else {
	console.log("It's a draw!")
}