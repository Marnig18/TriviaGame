

	question1 = {
		ques: "Who is the headmaster at Hogwarts?",
		answers: [
			  "Dumbledore",
			  "Professor McGonagall",
			 	"Voldemort",
			  "Sirius Black",
		]
	},	
	
	question2 = {
		ques: "What position does Harry play on his Quidditch Team?",	
		answers: [
			 "keeper",
			 "beater",
			 "chaser",
			 "seeker",
		]
	},
	question3 = {
		ques: "Which school house is Harry potter in?",
		answers: ["Slytherin", "Gryfindor", "Hufflepuff", "Ravenclaw"]
	},

	question4 = {
		ques: "Who did Harry marry at the end of the series?",
		answers: ["Hermione Granger", "Luna Lovegood", "Ginny Weasley", "Lavendor Brown"]
	},
	 question5 = {
	 	ques: "Which of these people was not a defense against the dark arts teacher?",
	 	answers: ["Remus Lupin", "Snape", "Dolores Umbridge", "Filius Flitwick"]
	 },
	 question6 ={
	 	ques: "What is the name of Harry's Owl?",
	 	answers: ["Hedwig", "Crookshanks", "Dobby", "Errol"],
	 },
	 question7 = {
	 	ques: "What is the street address of the Dursley's home?",
	 	answers: ["5 Godrics Hallow", "4 Privet Drive", "12 Grimauld Place", "3 Little Hannington"]
	 }
	 question8 = {
	 	ques: "Which of the Hogwarts founders created the Chamber of Secrets?",
	 	answers: ["Godric Gryfindor", "Rowena Ravenclaw", "Salazar Slytherin", "Helga Hufflepuff"]
	 }
	



var questions = []
questions.push(question1, question2, question3, question4, question5, question6, question7, question8)
console.log(questions)



	function checkAnswers(ans){
			if(correctAnswers.indexOf(ans) === -1){
				numberWrong++;
				console.log("number wrong:" + numberWrong);
			}
			else{
				numberCorrect++;
				console.log("numberCorrect: " + numberCorrect);
				
			}
	}

// // varibales
var numberCorrect = 0;
var numberWrong = 0;
var unanswered = 8;




// // array of correct answers
var correctAnswers = [
	questions[0].answers[0],
 questions[1].answers[3], 
 questions[2].answers[1], 
 questions[3].answers[2], 
 questions[4].answers[3],
 questions[5].answers[0],
 questions[6].answers[1],
 questions[7].answers[2]]
console.log("correct answers: " + correctAnswers)


$("#gameDiv").hide();
$("#correct").hide();	
$("#wrong").hide();	
$("#unanswered").hide();	
$("#timer").hide();
$("#done").hide();
$("#endscreen").hide();


function end(){
	$("#correct").html("<p> Number Correct: " + numberCorrect + "</p>")
	$("#wrong").html("<p> Number Wrong: " + numberWrong + "</p>")
	$("#unanswered").html("<p> Unanswered: " + unanswered + "</p>")

}
// // function to check answers



function getValues(){
	console.log(this);
	var value = ($(this).attr("data_name"));
	console.log(value);
	checkAnswers(value);
}

//function to start quiz
$("#start").on("click", function(){
	$("#start").hide()
	$("#gameDiv").show();
	$("#timer").show();
	$("#done").show();
	run();
	onClick();
	});


 var number = 60;

var intervalId;

function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--
      $("#timer").html("<h2> Time Left: " + number + "</h2>");
      if (number === 0){
        stop();
      
        }
      }
    
  
 function stop() {
   clearInterval(intervalId);
    end();
  	checked();
		$("#correct").show();	
		$("#wrong").show();	
		$("#unanswered").show();
		$("#gameDiv").hide();	
		$("#endscreen").show();
		$("#timer").hide();
		$("#done").hide();	
    }


   function submit(){
   	$("#done").on("click", function(){
   		stop();

   	});
   }

   submit();



  

function checked(){
	$(":checked").each(function(){
		unanswered--
		console.log(unanswered)
	});
	}
		


// debugger
// functions to display questions of the DOM
function insertQuestions(array){
 	for(var i = 0; i < array.length; i++){
 		// debugger
		console.log(array[i]);
		// if(typeof array[i] === "object"){
			var indivObject = array[i];
			console.log(indivObject)
			for(var k in indivObject){
				console.log("key: " + k);
	  			console.log(typeof indivObject[k]);
	  				if(typeof indivObject[k] === "string"){
	  					var q = indivObject[k];
					  	var questionDiv = $('<div class="questions">')
							questionDiv.html(q);
							$("#gameDiv").append(questionDiv);
						}	
			
						 else {
						 	for (var j = 0; j < indivObject[k].length; j++) {
						 	console.log(indivObject[k].length);
						 	var indivAnswers = indivObject[k];
						 	console.log(indivAnswers);
						 	function createButtons(){
						 		// for (var g = 0; g < indivAnswers.length; g++){
									var a = $("#gameDiv").append('<input type="radio" name="radiobtn" data_name="' + indivAnswers[j] + '" class="button">' + indivAnswers[j] +'</input>')
										a.attr("data_name", indivObject[j]);
										console.log[indivObject[j]];
										}
										createButtons();
									}
								}
									
					
									}
									
										
						 		}
						 		
						 	}

						 

						
			


insertQuestions(questions);

function onClick(){
	$(document).on("click", ".button", getValues);
	$(".button").attr("value", correct);
	
}	





											
										
				
									
	  




	







