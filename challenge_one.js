var markKilo = 90
var johnKilo = 85

var markHeight = 1.90
var johnHeight = 2.00

var markBMI = markKilo / (markHeight * markHeight)
var johnBMI = johnKilo / (johnHeight * johnHeight)

if(markBMI > johnBMI){
	console.log("Mark has a higher BMI with " + markBMI)
	console.log("John has the lesser BMI with " + johnBMI)
} else {
	console.log("John has the higher BMI with " + johnBMI)
	console.log("Mark has a lower BMI with " + markBMI)
}