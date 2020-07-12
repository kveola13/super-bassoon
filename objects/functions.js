function interviewQuestion(job){
	if(job === "designer"){
		return function(name){
			console.log(name + ", can you please explain what UX design is?")
		}
	} else if (job === "teacher"){
		return function(name){
			console.log(name + ", what subject do you teach?")
		}
	} else return function(name){
		console.log("Hello " + name + " what do you do?")
	}
}

let teacherQuestion = interviewQuestion("teacher")
let designerQuestion = interviewQuestion("designer")

teacherQuestion("John")
designerQuestion("John")
interviewQuestion("designer")("Mark")

function game(){
	let score = Math.random() * 10
	console.log(score >= 5)
}

(function (goodLuck) {
	let score = Math.random () *10
	console.log(score >= 5 - goodLuck)
})(5)

game()