
// Privacy through IIFE (our code can be included by anyone and it will not interfere with theirs!)

(function() {

	// function constructor
	function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

//*********************************

	// adding methods using prototype chain
	Question.prototype.displayQuestion = function() {
		console.log(this.question);

		for(var i=0; i<this.answers.length; i++)
			console.log(i + ': ' + this.answers[i]);

	}

	Question.prototype.checkAnswer = function(ans, callback) {
		var sc; // we will display score irrespective of fact that answer was correct or not

		if(ans === this.correct) {
			console.log('Correct answer!');
			sc = callback(true); // keepScore is the callback fn here, see line 58
		} else {
			console.log('Wrong answer. Try again :)');
			sc = callback(false);
		}

		this.displayScore(sc);
	}

	Question.prototype.displayScore = function(score) {
		console.log('Your current score is: ' + score);
		console.log('-------------------------------');
	}

//*********************************//

	// creating questions
	var q1 = new Question('Is this the best JS course ever?', ['No', 'Yes, hands down!', 'I can\'t say'], 1);
	var q2 = new Question('How to define coding?', ['Fun', 'Easy', 'Hard'], 0);
	var q3 = new Question('Who is most respected cricketer?', ['Shoaib Akhtar', 'Chris Gayle', 'Rahul Dravid'], 2);


	var questions = [q1, q2, q3]; // storing them inside an array

	
//************** POWER OF CLOSURES *******************//

	function score() {
		var sc = 0;
		return function(correct) { // this fn here accepts a boolean value, named correct
			if(correct) {
				sc++;
			}
			return sc;
		}	
	};
	var keepScore = score(); // keepScore stores the fn, returned by score(), which has access to it's variables : thanks to closures!


//*********************************

	function nextQuestion() {
	
		var n = Math.floor(Math.random()*questions.length); // select a random question from array

		questions[n].displayQuestion(); // call display method

		// ask for input from pop-up
		var answer = prompt('Please select the correct option. \nType "exit" to quit the game OR to reload.'); // answer will give us a 'string', not a number, so we convert this to number

		if(answer !== 'exit') {
			questions[n].checkAnswer(parseInt(answer), keepScore); 
			// calling check answer method as well as passing keepScore fn, to be called later by checkAnswer(callback fn) : fns first class ojects which can be passed			
			nextQuestion(); // calling again after checking answer
		}

	}

	nextQuestion(); // initial call

})();





