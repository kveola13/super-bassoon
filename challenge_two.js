let johnTeamScore = [89, 120, 103]
let johnTeamTotal = 0

let mikeTeamScore = [116, 94, 123]
let mikeTeamTotal = 0

let maryTeamScore = [97, 134, 105]
let maryTeamTotal = 0

if(johnTeamScore.length === mikeTeamScore.length && 
	johnTeamScore.length === maryTeamScore.length){
	for (var i = 0; i < johnTeamScore.length; i++) {
		johnTeamTotal += johnTeamScore[i]
		mikeTeamTotal += mikeTeamScore[i]
		maryTeamTotal += maryTeamScore[i]
	}
}

let johnTeamAverage = johnTeamTotal / johnTeamScore.length
let mikeTeamAverage = mikeTeamTotal / mikeTeamScore.length
let maryTeamAverage = maryTeamTotal / maryTeamScore.length

console.log("average for John\'s team: " + johnTeamAverage)
console.log("average for Mike\'s team: " + mikeTeamAverage)
console.log("average for Mary\'s team: " + maryTeamAverage)

if(mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage){
	console.log("Mike\'s team wins!")
} else if (johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage){
	console.log("John\'s team wins!")
} else if (maryTeamAverage > mikeTeamAverage && maryTeamAverage > johnTeamAverage){
	console.log("Mary\'s team wins!")
} else {
	console.log("Draw!")
}