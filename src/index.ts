// Basic Types
let id: number = 5
let company: string = 'ABCompany'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number
age = 30

let ids: number[] = [1, 2, 3, 4, 5]
let names: string[] = ['Achyut', 'Chapagain']
let arr: any[] = [1, true, 'C', 'Achyut']

// Tuple
let person: [number, string, boolean] = [1, 'Achyut Chapagain', true]

// Tuple Array
let employee: [number, string][] = [
  [1, 'Achyut'],
  [2, 'Chapagain'],
]

// Union
let pid: string | number = 22
pid = '8784sjahfhskj'

// Enum
enum Direction1 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
console.log(Direction1.Down)

// Objects
type User = {
  id: number
  name: string
}
const user: User = {
  id: 1,
  name: 'John Doe',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number
customerId = 1

// functions
function addNum(x: number, y: number): number {
  return x + y
}
console.log(addNum(1, 1.5))

function log(message: string | number): void {
  console.log(message)
}
log('heheh')

// Only with non preemitive types
// Interfaces
interface UserInterface {
  readonly id: number // Cannot re assign
  name: string
  age?: number // ?: Optional
}
const user1: UserInterface = {
  id: 1,
  name: 'John Doe',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const achyut = new Person(1, 'Achyut Chapagain')
console.log(achyut.register())
console.log(achyut)

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Alu', 'Developer & Designer')

console.log(emp.register())

// GENERICS

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['jimmy', 'john', 'jill'])

numArray.push(9)
