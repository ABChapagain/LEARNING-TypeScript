"use strict";
// Basic Types
let id = 5;
let company = 'ABCompany';
let isPublished = true;
let x = 'Hello';
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let names = ['Achyut', 'Chapagain'];
let arr = [1, true, 'C', 'Achyut'];
// Tuple
let person = [1, 'Achyut Chapagain', true];
// Tuple Array
let employee = [
    [1, 'Achyut'],
    [2, 'Chapagain'],
];
// Union
let pid = 22;
pid = '8784sjahfhskj';
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
const user = {
    id: 1,
    name: 'John Doe',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
customerId = 1;
// functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 1.5));
function log(message) {
    console.log(message);
}
log('heheh');
const user1 = {
    id: 1,
    name: 'John Doe',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const achyut = new Person(1, 'Achyut Chapagain');
console.log(achyut.register());
console.log(achyut);
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Alu', 'Developer & Designer');
console.log(emp.register());
// GENERICS
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['jimmy', 'john', 'jill']);
numArray.push(9);
