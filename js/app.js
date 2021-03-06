$(document).ready(function() {

	$(".answer-box").hide();
	$(".progress-box").hide();
	$(".quote-box").hide();

	//Questions
	var questions = [
	{quest: "Where and when was Hemingway born?",
	choices: ["Ketchum, ID in 1905", "Oak Park, IL in 1899", "Havana, Cuba in 1912", "Chicago, IL in 1895"],
	answer: 2, 
	qNumber: 1,
	quote: '"There is nothing to writing. All you do is sit down at a typewriter and bleed."'},

	{quest: "During WWI, Hemingway signed up to be an Ambulance Driver for which country?",
	choices: ["Italy", "United States", "France", "Great Britain"],
	answer: 1, 
	qNumber: 2,
	quote: '"Happiness in intelligent people is the rarest thing I know."'},

	{quest: 'Hemingway once said that "Courage is" what?',
	choices: ['"fear evolved"', '"being sober early"', '"grace under pressure"', '"facing a lion"'],
	answer: 3, 
	qNumber: 3,
	quote: '"Write drunk, edit sober."'},	

	{quest: "In 1954, Hemingway received the Nobel Prize shortly after winning the Pulitzer Prize for which novel?",
	choices: ["A Farewell to Arms", "For Whom the Bell Tolls", "The Sun Also Rises", "The Old Man and the Sea"],
	answer: 4, 
	qNumber: 4,
	quote: '"Always do sober what you said you’d do drunk. That will teach you to keep your mouth shut."'},

	{quest: "Hemingway once wrote that this city is a 'moveable feast', in that it stays with you wherever you go in life.",
	choices: ["Barcelona", "Paris", "New York", "Madrid"],
	answer: 2, 
	qNumber: 5,
	quote: '"The world breaks everyone, and afterward, some are strong at the broken places."'},

	];

	//Global Variables
	var curQuestion = 1;
	var questionIndex = 0;
	var score = 0;

	//Click Begin
	$(".begin").click(startGame);

	//Starting Game
  	function startGame() {
	  curQuestion = 1;
		score = 0;
		questionIndex = 0;
		quoteIndex = 1;
		$('input:radio[name=radio]').attr('checked',false);
	  	$(".intro-text").fadeOut("fast");
  		$(".begin").fadeOut("fast");
  		$(".nextQ").hide();
  		$(".answer-box").show("slow");
		$(".progress-box").show("slow");
		$(".checkAnswer").show();
		$(".quote-box").show("slow");
		$(".results").hide();
		$(".play-again").hide();
		getQuestion();
 	};

 	//Get Question
 	function getQuestion() {
	 	$(".question").text(questions[questionIndex].quest);
	 	$("#choice1").text(questions[questionIndex].choices[0]);
	 	$("#choice2").text(questions[questionIndex].choices[1]);
	 	$("#choice3").text(questions[questionIndex].choices[2]);
	 	$("#choice4").text(questions[questionIndex].choices[3]);
	 	$(".quote").text(questions[questionIndex].quote);
 	};

 	//Check Answer
 	$(".checkAnswer").click(function() {
 		checkAnswer();
 	});

 	//Move to Next Question
 	$(".nextQ").click(function() {
		nextQuestion();
		$('input:radio[name=radio]').attr('checked',false);
	});

 	function nextQuestion() {
		curQuestion++;
		questionIndex++;
		$(".nextQ").hide();
		$(".checkAnswer").show("fast");
		$(".answers span").removeClass("correctText");
		getQuestion();
	};

	//Get Quiz Results
 	$(".results").click(showResults);

	function showResults() {
		$(".results").hide();
		$(".play-again").show();
		$(".answer-box").hide();
		$(".question").text("That's it! You got " + score + " questions out of " + questions.length + " total questions correct! If you want to master The Ernest Hemingway Quiz, go ahead and play again!");
		$(".quote").text('"The best way to find out if you can trust somebody is to trust them.”');
	};

	//Play Again
 	$(".play-again").click(function() {
 		startGame();
 		$(".wrong").removeClass("wrong").addClass("to-be-completed");
 		$(".correct").removeClass("correct").addClass("to-be-completed");
 	});

	//Check Answer function
	function checkAnswer() {
		var radioValue = false;
		var userChoice = document.getElementsByName("radio");
		for (var i = 0; i < userChoice.length; i++) {
			if(userChoice[i].checked) {
				radioValue = userChoice[i].value;
			}
		}

		//Check that user selected a choice
		if (radioValue === false) {
			alert("Please select an answer");
			return;
		}

		// If correct
		var resultClass;
		if (radioValue == questions[questionIndex].answer) {
			// Apply correct class to number bubble and increase score
			score++;
			resultClass = "correct";
			
		// If wrong
		} else {
			// Apply wrong class to number bubble
			resultClass = "wrong";
			$("#choice"+questions[questionIndex].answer).addClass("correctText");
		} 

		$(".to-be-completed[value=" + questionIndex + "]")
			.removeClass("to-be-completed")
			.addClass(resultClass);

		
		$(".nextQ").show("fast");
		$(".checkAnswer").hide("fast");

		if (questions.length === questionIndex + 1) {
			$(".nextQ").hide();
			$(".results").show("fast");
		}
	} 

});







