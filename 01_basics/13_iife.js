// Immediately Invoked Function Expressions (IIFE)

// IIFE is used to remove pollution which is happen by global scope's declarations
// IIFE also used to execute immediately

// Named iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// Un-named iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Harsh') // parameter passed
