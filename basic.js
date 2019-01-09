
// Privacy through IIFE (our code can be included by anyone and it will not interfere with theirs!)

(function() {

	// function constructor
	function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	// adding methods using prototype chain
	Question.prototype.displayQuestion = function() {
		console.log(this.question);

		for(var i=0; i<this.answers.length; i++)
			console.log(i + ': ' + this.answers[i]);

	}

	Question.prototype.checkAnswer = function(ans) {
		if(ans === this.correct) {
			console.log('Correct answer!');
		} else {
			console.log('Wrong answer. Try again :)')
		}
	}


	// creating questions
	var q1 = new Question('Is this the best JS course ever?', ['No', 'Yes, hands down!', 'I can\'t say'], 1);
	var q2 = new Question('How to define coding?', ['Fun', 'Easy', 'Hard'], 0);
	var q3 = new Question('Who is most respected cricketer?', ['Shoaib Akhtar', 'Chris Gayle', 'Rahul Dravid'], 2);


	// storing them inside an array
	var questions = [q1, q2, q3];

	// select a random question from array
	var n = Math.floor(Math.random()*questions.length);

	// call display method
	questions[n].displayQuestion();

	// ask for input from pop-up
	var answer = parseInt(prompt('Please select the correct option. \nType "exit" to quit the game.')); // answer will give us a 'string', not a number, so we convert this to number

	// call check answer method
	questions[n].checkAnswer(answer);

})();





