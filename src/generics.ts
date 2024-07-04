


// Generics
// Generics provide variables to types. A common example is an array. 
// An array without generics could contain anything.
// An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

let string_list: StringArray = ['1', '45', '34'];
let num_list: NumberArray = [1, 4, 6, 7];
let obj_list: ObjectWithNameArray = [{ name: "haider" }]


// GENRIC COULD BE OF ANYTYPE


interface Backpack<Type> {
  add: (param1: Type, param2: Type) => Type;
  getResult: () => Type;
  setValues: (param1: Type, param2: Type) => void;
}

class School_Accessories implements Backpack<string> {
  private value: string;

  constructor(initialValue: string) {
    this.value = initialValue;
  }

  add(param1: string, param2: string): string {
    this.value = param1 + param2;
    return this.value;
  }

  getResult(): string {
    return this.value;
  }

  setValues(param1: string, param2: string): void {
    this.value = param1 + param2;
  }
}


const myAccessories = new School_Accessories("Notebook");
console.log(myAccessories.add("Pencil", " Case")); 

console.log(myAccessories.getResult()); 

myAccessories.setValues("pencil", " pen");
console.log(myAccessories.getResult()); 


