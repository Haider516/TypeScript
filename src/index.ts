//let id: number = 5;
let company: string = "DevTak";
let isPublished: true;

let id_number: number[] = [1, 3, 5, 6];
console.log(id_number);

// id_number.push("haider") commits error

id_number.push(23);
id_number.pop();
console.log();

let new_arr: any[] = ['string', 34, true];

let persons: [number, string, boolean] = [1, 'string', true]

let employee: [number, string][];

employee = [[1, 'frees'],
[3, 'haider']]


interface User {
  name: string,
  id: number,
}


class userData {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new userData("Murphy", 1);
console.log(user);
console.log("a new log");


let pid: number | string;
pid = 12;
pid = "23";

//enums
enum Direction {
  up = 1,
  down,
  right,
  left,
}


console.log(Direction.right);


// use-case for union types 

type WindowStates = "open" | "closed" | "minimized";

let currentState: WindowStates;

currentState = "open";       // Valid
currentState = "closed";     // Valid
currentState = "minimized";  // Valid
// currentState = "maximized"; // Error: Type '"maximized"' is not assignable to type 'WindowStates'

function setWindowState(state: WindowStates) {
  console.log(`The window is now ${state}`);
}

setWindowState("open");       // Valid
setWindowState("closed");     // Valid
setWindowState("minimized");  // Valid


if (currentState === 'minimized') {
  console.log("this  is  open");

} else {
  console.log("not  opened");

}


function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];

  //  (parameter) obj: string
  }
  return obj;
}

console.log("the  function return string array or number",wrapInArray(['1','7']));
