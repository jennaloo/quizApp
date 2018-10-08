//array of strings (answers)//
//compare user input to answer[i]//
//if true add to correct array//
//if false add to false array//
//correct: counts length of correct array//
//inccorect: counts length of incorect array//

//Questions//
//1. 10/5
//2. -100+100
//3. 9-6
//4. Which spacecraft has left the solar system?
//5. Which method adds an element to the end of an array?
//6. Which method adds an element to the beginning of an array?
//7. Which method removes an element at the end of an array?
//8. Which method removes an element at the beginning of an array?
//9. What speed did the saturn V rocket reach in MPH?
answerArray = [5, 0, -3, 'Voyager 1', 'push', 'shift', 'unshift', 'pop', 47000, 'blue']

var user = document.getElementsByClassName('input');

var usersArray = [];

function grade() {
    //push input to usersArray
    //color questions simple version
    usersArray.push(user[0].value);
    usersArray.push(user[1].value);
    console.log(usersArray);

    for (i = 0; i < 3; i++) {
        //add a counter Id to each question
        var newId = 'question' + (i + 1);
        var questionDiv = document.getElementsByClassName('question')[i];
        questionDiv.setAttribute('id', newId);

        //compare for coloring
        //status: if and else are not running for second number in the array
        if (usersArray[i] == answerArray[i] && usersArray[i] !== "") {
            document.getElementById(newId).style.color = 'green';
        } else {
            document.getElementById(newId).style.color = 'red'
        }
        return usersArray = [];
    }
}
