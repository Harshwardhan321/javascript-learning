// Object Literals

// Object.create - It is a constructor method

// In object, Parameters are assigned as key-value pairs
// By default system processes keys as strings

// Symbol Declaration

const sym1 = Symbol("key1")
// to use symbol in object the syntax is : [sym1]: mykey1 (Any desired value)

// Creating a Object :-
const User = {
    name: "Harsh",
    "Full Name": "Harshwardhan",
    [sym1]: "mykey1",
    age: 24,
    location: "Patna",
    email: "harshwardhan321@gmail.com",
    isLoggedin: false,
    LastLoginDays: ["Monday", "Tuesday", "Wednesday"] 
}

// Accessing a Object
// Two method to access objects and both are important
// To access full name from the object we have to use 2nd method to acess an object because there is no way we can access this in first method.

console.log(User.email); // Method 1
console.log(User["Full Name"]); // Method 2

// To access symbol we have to use second method

console.log(User[sym1]);

// Value Overwrite - changing the value 
User.email = "harsh@google.com"

// Value freeze - Locking the value, Cannot be chnages
// Object.freeze(User)

// Function 
User.greeting = function(){
    console.log("Hello User");
}

console.log(User.greeting());
console.log(User.greeting); // This will return function and reference of fun. - [Function (anonymous)] 

// This Operator - It gives the reference of the properties inside the object 
User.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(User.greetingTwo());

// Singleton Objects or Declaring objects using constructor

const bumbleUser = {}

bumbleUser.id = "ap12k"
bumbleUser.name = "Harry"
bumbleUser.isLoggedin = false

// console.log(bumbleUser);

// Objects Nesting -:
const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "harsh",
            lastname: "wardhan"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = {obj1, obj2}
const obj5 = Object.assign({}, obj1, obj2, obj3)
//console.log(obj5);

// Object assign - a static method copies that copies all the properties from one or more source objects. It returns modified object
// There is a concept of target and source in assign method in which first object is always considered as target followed by source objects
// that is why blank object is added 

// Spread Operator in Object-

const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(bumbleUser);

console.log(Object.keys(bumbleUser));
console.log(Object.values(bumbleUser));
console.log(Object.entries(bumbleUser));

console.log(bumbleUser.hasOwnProperty('isLoggedIn'));

// OBjects Destructuring

const course = {
    coursename: "Javascript one",
    price: "875",
    courseInstructor: "Hitesh"
}
// course.courseInstructor
// Another syntax:

const {courseInstructor: Inst} = course
// console.log(courseInstructor);
console.log(Inst);

// API - JSON Format
 
// {
//     "name": "Harsh",
//     "Course": "Javascript",
//     "Price": "free"
// }