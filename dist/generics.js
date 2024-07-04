"use strict";
// Generics
// Generics provide variables to types. A common example is an array. 
// An array without generics could contain anything.
// An array with generics can describe the values that the array contains.
let string_list = ['1', '45', '34'];
let num_list = [1, 4, 6, 7];
let obj_list = [{ name: "haider" }];
class School_Accessories {
    constructor(initialValue) {
        this.value = initialValue;
    }
    add(param1, param2) {
        this.value = param1 + param2;
        return this.value;
    }
    getResult() {
        return this.value;
    }
    setValues(param1, param2) {
        this.value = param1 + param2;
    }
}
const myAccessories = new School_Accessories("Notebook");
console.log(myAccessories.add("Pencil", " Case"));
console.log(myAccessories.getResult());
myAccessories.setValues("pencil", " pen");
console.log(myAccessories.getResult());
