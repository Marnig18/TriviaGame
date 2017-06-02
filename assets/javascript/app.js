//CREATE OBEJCTS OF QUESTIONS
  function answers(a, b, c, d){
    	this.a = a;
    	this.b = b;
    	this.c = c;
    	this.d = d;

  }

  var answers1 = new answers("keeper", "seeker", "beater", "chaser")
  	

function questions(question, answer){
    this.questions = question; 
    this.answer = answer
  
    }
var question1 = new questions("What position does Harry play on his Quidditch Team?", answers1)

console.log("way 1:"  + question1)
console.log("way 2 " + question1.answers1)
    

var questions = {
	question1: {
		ques: "Who is the headmaster at Hogwarts?",
		answers: {
			a: "Dumbledore",
			b: "Professor McGonagall",
			c: "Voldemort",
			d: "Sirius Black",
		}
	},	
	
	question2: {
		ques: "What position does Harry play on his Quidditch Team?",	
		answers: { 
			a: "keeper",
			b: "beater",
			c: "chaser",
			d: "seeker",
		}
	}	
}



for (k in questions){
	console.log("key: " + k);
	console.log(typeof questions[k])
	if(typeof questions[k] === "object"){
		var indivQuestions = questions[k]
		for (j in indivQuestions){
			console.log("key of indivQuestions: " + j)
			console.log(indivQuestions[j])
			if(typeof indivQuestions === "object"){
				var answers = indivQuestions[j]
				for (m in answers){
				console.log("key of answers: " + m);
				console.log(answers[m])

			}
			}

		}
	}

}
	




//PUT EACH QUESTION INTO SLIDESHOW
	
	var questionDiv = $("<div>")
	questionDiv.html(indivQuestions.ques)
	$("#game").append(questionDiv);

	var answerDiv1 = $("<div>");
	answerDiv1.html(answers.a);
	$("#game").append(answerDiv1);
		
	var answerDiv2 = $("<div>");
	answerDiv2.html(answers.b);
	$("#game").append(answerDiv2);

	var answerDiv3 = $("<div>");
	answerDiv3.html(answers.c);
	$("#game").append(answerDiv3);

	var answerDiv4 = $("<div>");
	answerDiv4.html(answers.d);
	$("#game").append(answerDiv4);



// //variable to Hold setInterval for each question
var showQuestion;

// // count to keep track of question index

var questionIndex = 0

// //function to replace question
	// for loop?



// VARIBALE TO SET INTERVAL FOR EACH QUESTION

// /FUNCTION TO CLEAR THE INTERVAL


//FUCNTION FOR CORRECT/INCORRECT ANSWERS



//FUCNTION FOR TIME UP
























// 
 
//  console.log(question1.questions);
//  console.log(question1.answers);






// 


