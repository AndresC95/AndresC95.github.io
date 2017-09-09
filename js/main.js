/*******************************************************************
Javascript Quiz
 ********************************************************************/
var allQuestions = [{
		question: "Which of the following is an animal?",
		answers: ["dog", "track", "meow", "all the above"],
		correctAnswer: 0,
	},
	{
		question: "Which of the following is a number?",
		answers: ["number", "1", "zimbabwe", "all the above"],
		correctAnswer: 1,
	},
	{
		question: "Which of the following is a name?",
		answers: ["asdf", "69", "Elizabeth", "all the above"],
		correctAnswer: 2,
	}
];
var answerCounter = 0;
var questionCounter = 0;
var questionIndex = allQuestions.length;
var isChecked = false;
//globals^

window.onload = questionWriter();

//button
var button = document.querySelector("button");
button.addEventListener("click", nextQuestion);

function nextQuestion()
{
	checkedRadioBtn();
	if(!isChecked)
		return;
    questionCounter += 1;
	questionIndex -= 1;
	if(questionIndex === 1)
	{		
		button.addEventListener("click", function(){
		if(isChecked)
		{
			document.querySelector("h1").textContent = "You got " + answerCounter + " correct out of " + allQuestions.length;
		}
		});
	}

	if(questionIndex === 0)
	{

		button.removeEventListener("click", nextQuestion);
		return;
	}
    questionWriter();
}

function questionWriter()
{
	//writes question
	var question = document.querySelector("h3");

	question.textContent = allQuestions[questionCounter].question;
	// writes answers

	for(var j = 0; j <= (allQuestions[questionCounter].answers.length - 1); j++)
	{
		var answer = document.querySelectorAll("label")[j];
		answer.textContent = allQuestions[questionCounter].answers[j];
	}
}

function checkedRadioBtn()
{
	var group = document.getElementsByName("groupz");
	radioValidation();

	for ( var i = 0; i < group.length; i++) 
	{
		if (group.item(i).checked) 
		{
			isChecked = true;
			if(group.item(i).value == allQuestions[questionCounter].correctAnswer)
			{
				clearRadioBtn();
				return (answerCounter += 1);			
			}
        }
        if (group[0].type !== 'radio') 
        {
        //if you find any in the group not a radio button return null
        return null;
        }
    }
    clearRadioBtn();
}

function clearRadioBtn()
{
	var ele = document.getElementsByName("groupz");
	for(var i=0;i<ele.length;i++)
	{
      ele[i].checked = false;

	}
}

function radioValidation()
{
    var gender = document.getElementsByName('groupz');
    var genValue = false;

    for(var i=0; i<gender.length;i++){
            if(gender[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            alert("Please select an answer");
                  isChecked = false;
            return false;
        }

    }