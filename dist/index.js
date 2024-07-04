"use strict";
//let id: number = 5;
let company = "DevTak";
let isPublished;
let id_number = [1, 3, 5, 6];
console.log(id_number);
// id_number.push("haider") commits error
id_number.push(23);
id_number.pop();
console.log();
let new_arr = ['string', 34, true];
let persons = [1, 'string', true];
let employee;
employee = [[1, 'frees'],
    [3, 'haider']];
class userData {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new userData("Murphy", 1);
console.log(user);
console.log("a new log");
let pid;
pid = 12;
pid = "23";
//enums
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["right"] = 3] = "right";
    Direction[Direction["left"] = 4] = "left";
})(Direction || (Direction = {}));
console.log(Direction.right);
let currentState;
currentState = "open"; // Valid
currentState = "closed"; // Valid
currentState = "minimized"; // Valid
// currentState = "maximized"; // Error: Type '"maximized"' is not assignable to type 'WindowStates'
function setWindowState(state) {
    console.log(`The window is now ${state}`);
}
setWindowState("open"); // Valid
setWindowState("closed"); // Valid
setWindowState("minimized"); // Valid
if (currentState === 'minimized') {
    console.log("this  is  open");
}
else {
    console.log("not  opened");
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
        //  (parameter) obj: string
    }
    return obj;
}
console.log("the  function return string array or number", wrapInArray(['1', '7']));
