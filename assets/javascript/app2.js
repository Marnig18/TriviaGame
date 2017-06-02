

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
	}


var questions = []
questions.push(question1, question2, question3, question4)
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
var unanswered = 10;




// // array of correct answers
var correctAnswers = [questions[0].answers[0]
, questions[1].answers[3], questions[2].answers[1], questions[3].answers[2]]
console.log("correct answers: " + correctAnswers)

// // function to check answers
function end(){
	$("#correct").html(numberCorrect)
	$("#wrong").html(wrong)
	$("#unanswered").html(unanswered)

}


function getValues(){
	console.log(this);
	var value = ($(this).attr("data_name"));
	console.log(value);
	checkAnswers(value);
}

$("#gameDiv").hide();
$("#correct").hide();	
$("#wrong").hide();	
$("#unanswered").hide();	
$("#timer").hide();

//function to start quiz
$("#start").on("click", function(){
	$("#start").hide()
	$("#gameDiv").show();
	$("#timer").show();
	run();
	onClick();
	});


 var number = 120;

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
    }


   

  

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
					  	var questionDiv = $("<div>")
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

onClick();



											
										
				
									
	  




	







