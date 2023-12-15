function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("harsh"))

// Cart example

function calculateCartPrice(...num1){
    return num1
}

// Another case - It return the first two values in val1 and val2 and remaining in array.
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }


console.log(calculateCartPrice(2, 20, 200, 2000));

// Rest Operator - While we pass parameter we can use (...) which store all values inside array
// Output - [ 2, 20, 200, 2000 ]

// Object Passing in function

const user = {
    user1: "Harsh",
    price: 209
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.user1} and price is ${anyobject.price}`);
}

// handleObject(user)
// we can also directly pass object
handleObject({
    username1: "sam",
    price: 399
})

// Array Passing in function

const newArray = [300, 150, 75, 50, 15]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));