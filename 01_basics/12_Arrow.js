const user = {
    username: "Harsh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
user.username = "sam" // we are changing value in 11th line than context will be changed
// user.welcomeMessage()

//console.log(this); // it gives output based on current context or values in the scope

// The story behind all this is, In previous time the only engine which can run javascipt code
// is found in web browsers only like V8 engine in chrome, But we are using node which is standalone 
// engine. When we console log "this opertor" in browsers it returns window object but in node JS,
// it returns empty object if not global scope is empty or it will return the values inside the scope.

// Arrow Function :- It was introduced in ES 6 (2015)

// function toast(){
//     let user = "harsh"
//     console.log(this.user); // Undefined
// }

// const toast = () => {
//     let user = "harsh"
//     console.log(this);
// }
// toast() 

// Explicit Return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) =>  ({username: "Harsh"})
console.log(addTwo(45, 9));
