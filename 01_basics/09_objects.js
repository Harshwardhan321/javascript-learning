// Object Literals

// Object.create - It is a constructor method

// In object, Parameters are assigned as key-value pairs
// By default system processes keys as strings

// Creating a Object :-
const User = {
    name: "Harsh",
    age: 24,
    location: "Patna",
    email: "harshwardhan321@gmail.com",
    isLoggedin: false,
    LastLoginDays: ["Monday", "Tuesday", "Wednesday"] 
}

// Accessing a Object
// Two ways to access objects and both are important

console.log(User.email);
console.log(User[email]);
