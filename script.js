
var score = 0;


// function constructor for Question
var Question = function (ques, options, answer) {
	this.ques = ques;
	this.options = options;
	this.answer = answer; 
};

// adding method to check if entered option is correct
Question.prototype.isCorrect = function(choice) {
	if(choice !== 'exit') {
		if(choice == this.answer) {
			console.log('You\'re right!');
			score += 1; 
			console.log('Score: ' + score);
			console.log('*********************************');
		} else {
			console.log('Sorry, incorrect. Try next one :)');
			console.log('Score: ' + score);
			console.log('*********************************');
		}

		nextQuestion(); // call fn for next ques
	}
	else {
		console.log('Thanks for playing, bye! :D')
	}
	
};

// creating questions
var ques1 = new Question('Is this the best JS course ever?', ['0. No', '1. Yes, hands down!', '2. I can\'t say'], 1);
var ques2 = new Question('How to define coding?', ['0. Fun', '1. Easy', '2. Hard'], 0);
var ques3 = new Question('Who is most respected cricketer?', ['0. Shoaib Akhtar', '1. Chris Gayle', '2. Rahul Dravid'], 2);

// storing them inside an array
var quiz = [ques1, ques2, ques3];

function nextQuestion() {
	// select a random question from quiz array
	var questionSelected = quiz[Math.floor(Math.random()*3)];

	// display the question along with it's options
	console.log(questionSelected.ques);

	for(var i=0; i<3; i++) {
		console.log(questionSelected.options[i]);
	}

	// ask the user for input
	var chosenOption = prompt("Select your answer...");

	// check if his answer is correct
	questionSelected.isCorrect(chosenOption);	
};

nextQuestion();