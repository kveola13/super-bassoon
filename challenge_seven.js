(function(){
	function Question(question, answers, correct){
		this.question = question
		this.answers = answers
		this.correct = correct
	}

	Question.prototype.displayQuestion = function(){
		console.log(this.question)
		for (var i = 0; i < this.answers.length; i++) {
			console.log(i + 1 + " : " + this.answers[i])
		}
	}

	Question.prototype.checkAnswer = function(answer, checkScore){
		let score
		if(answer === this.correct + 1){
			console.log("That\'s correct!")
			score = checkScore(true)
		} else {
			console.log("Sorry, that\'s wrong")
			score = checkScore(false)
		}
		this.displayScore(score)
	}

	Question.prototype.displayScore = 
	function(score){
		console.log("Your current score is: " + score)
	}

	let questionOne = 
		new Question
		("Who is the main character of the Witcher", ["Geralt", "Ciri", "Yennefer"], 1)

	let questionTwo = 
	new Question
	("Who is the leader of Skellige?",["Ardal", "Iorveth", "Crach an Craite"], 2)

	let questionThree = 
	new Question
	("Who lives in Brokilon?", ["Skelligers", "Nilfgaardians", "Dryads"], 2)

	let questions = [questionOne, questionTwo, questionThree]

	function calcScore(){
		let score = 0
		return function(correct){
			if(correct){
				score++
			}
			return score
		}
	}

	let checkScore = calcScore()	
	
	function nextQuestion(){

		let random = Math.floor(Math.random() * questions.length)

		questions[random].displayQuestion()

		let answer = prompt("What\'s your answer?")

		if(answer !== "exit"){
			questions[random].checkAnswer(parseInt(answer), checkScore)
			nextQuestion()
		}
		console.log("Thank you for playing")
	}

	nextQuestion()
	
})()

