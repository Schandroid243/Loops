var todos = [
    "Clean room",
    "brush teeth",
    "exercises",
    "study javascript",
    "eat healthy"
];
var todosLength =todos.length;

/* The For Loop */

for(var i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}

for(var i = 0; i < todosLength; i++) {
    todos.pop();
}

/* The While Loop */

var counterOne =  0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}

//Here we're doing a countdown
var counterTwo =  10;
while (counterTwo > 0) {
    console.log(counterOne);
    counterTwo--;
}

/* Do While Loop*/

var counter3 = 10;
do {
    console.log(counter3);
    counter3--;
} while(counter3 > 0);