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
var answerArray = [5, 0]
var user = document.getElementsByClassName('input');
var usersArray = [];
var question = document.getElementsByClassName('question');


function grade() {
    usersArray.pop();
    usersArray.pop();
    //for loop to store in array
    for (i = 0; i <= 1; i++) {
        console.log(user[i].value);
        usersArray.push(user[i].value);
    };
    console.log(usersArray);

    //for loop to compare arrays
    for (i = 0; i <= answerArray.length; i++) {
        if (usersArray[i] == answerArray[i] && usersArray[i] !== "") {

            question[i].style.color = "limegreen";

        } else {

            question[i].style.color = "red";
        }
    };

    for (i = 0; i < usersArray.length; i++) {
        usersArray.shift();
    }
}

//Status: Need to make it so usersArray gets cleared of any input on click so that it can be filled with appropriate new material, and thus be compared for those new materials.
