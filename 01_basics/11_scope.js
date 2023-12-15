// we should not use var beause it is available out of local scope which is not a good thing
// Nested Scope
// Scope -{}

function one{}{
    const username = "Harsh"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

if (true) {
    const username = "harsh"
    if (username === "harsh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//Function declaration and mini hoisting

// this will work 
console.log(addone(5))

function addone(num){
    return num + 1
}


// this will not
addTwo(5)
const addTwo = function(num){
    return num + 2
}