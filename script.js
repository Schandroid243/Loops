var todos = [
    "Clean room",
    "brush teeth",
    "exercises",
    "study javascript",
    "eat healthy"
];
var todosLength =todos.length;
for(var i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}

for(var i = 0; i < todosLength; i++) {
    todos.pop();
}