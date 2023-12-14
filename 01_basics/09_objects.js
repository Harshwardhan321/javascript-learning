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