$(document).ready(function() {

	$(".answer-box").hide();
	$(".progress-box").hide();
	$(".quote-box").hide();


	//Questions
	var questions = [
	{quest: "Where and when was Hemingway born?",
	choices: ["Ketchum, ID in 1905", "Oak Park, IL in 1899", "Havana, Cuba in 1912", "Chicago, IL in 1895"],
	answer: 1, 
	qNumber: 1,
	quote: '"There is nothing to writing. All you do is sit down at a typewriter and bleed."'},

	{quest: "During WWI, Hemingway signed up to be an Ambulance Driver for which country?",
	choices: ["Italy", "United States", "France", "Great Britain"],
	answer: 0, 
	qNumber: 2,
	quote: '"Happiness in intelligent people is the rarest thing I know."'},

	{quest: "Hemingway once said that 'Courage is' what?",
	choices: ['"fear evolved"', '"being sober early"', '"grace under pressure"', '"facing a lion"'],
	answer: 2, 
	qNumber: 3,
	quote: '"Write drunk, edit sober."'},	

	{quest: "In 1954, Hemingway received the Nobel Prize shortly after winning the Pulitzer Prize for which novel?",
	choices: ["A Farewell to Arms", "For Whom the Bell Tolls", "The Sun Also Rises", "The Old Man and the Sea"],
	answer: 3, 
	qNumber: 4,
	quote: '"Always do sober what you said you’d do drunk. That will teach you to keep your mouth shut."'},

	{quest: "Hemingway once wrote that this city is a 'moveable feast', in that it stays with you wherever you go in life.",
	choices: ["Barcelona", "Paris", "New York", "Madrid"],
	answer: 1, 
	qNumber: 5,
	quote: '"The world breaks everyone, and afterward, some are strong at the broken places."'},
	];

	

	//Global Variables
	var curQuestion = 1;
	var questionIndex = 0;
	var correctAnswers = 0;
	var counter = 0;
	var counter = questions.length;

	//Click Begin
	$(".begin").click(function() {
  		// 	hide introduction
  		$(".intro-text").fadeOut("fast");
  		$(".begin").fadeOut("fast");
  		$(".answer-box").show("slow");
		$(".progress-box").show("slow");
		$(".quote-box").show("slow");
		getQuestion();
  	});

	//Starting Game
  	function startGame() {
	  curQuestion = 1;
		correctAnswers = 0;
		questionIndex = 0;
		quoteIndex = 1;
		$('input:radio[name=radio]').attr('checked',false);
	  	getQuestion();
 	};

 	//Get Question
 	function getQuestion() {
	 	$(".question").text(questions[questionIndex].quest);
	 	$("#choice0").text(questions[questionIndex].choices[0]);
	 	$("#choice1").text(questions[questionIndex].choices[1]);
	 	$("#choice2").text(questions[questionIndex].choices[2]);
	 	$("#choice3").text(questions[questionIndex].choices[3]);
	 	$(".quote").text(questions[questionIndex].quote);
 	};

 	//Next Question
 	$(".submit").click(function() {
		nextQuestion();
		$('input:radio[name=radios]').attr('checked',false);
	});

 	function nextQuestion() {
		curQuestion++;
		questionIndex++;
		quoteIndex++;
		getQuestion();
	};

});





