var answerArray = [5, 0]
//only variable is set of answers


//function makes the userArray of answers put in by user.
function makeUserArray() {
    var usersArray = [];
    var user = document.getElementsByClassName('input');
    //for loop to store user input into an array
    for (i = 0; i <= 1; i++) {
        usersArray.push(user[i].value);
    };
    return usersArray;
}

//function colors the answers green or red
function colorAnswers(anArray) {
    var question = document.getElementsByClassName('question');
    for (i = 0; i <= answerArray.length; i++) {
        if (anArray[i] == answerArray[i] && anArray[i] !== "") {
            question[i].style.color = "limegreen";
        } else {
            question[i].style.color = "red";
        }
    }
}

//function creates correctArray and wrongArray, uses the number returned from push to add answer to the page.
function scoreQuiz(anArray) {
    var correctArray = [];
    var wrongArray = [];
    for (i = 0; i < answerArray.length; i++) {
        if (anArray[i] == answerArray[i] && anArray[i] !== "") {
            var countRight = correctArray.push(anArray[i]);
            var p1 = document.getElementById('p1');
            p1.innerText = countRight;
            if (countRight == anArray.length) {
                var p2 = document.getElementById('p2');
                p2.innerText = "0";
            }
        } else {
            var countWrong = wrongArray.push(anArray[i]);
            var p2 = document.getElementById('p2');
            p2.innerText = countWrong;
            if (countWrong == anArray.length) {
                var p1 = document.getElementById('p1');
                p1.innerText = "0";
            }
        }
    }
}

//main function runs all 3 functions: makes the array, colors the answers, and scores the answers.
function gradeQuiz() {
    var usersArray = makeUserArray();
    scoreQuiz(usersArray);
    colorAnswers(usersArray);
}
