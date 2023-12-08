const accountId = 22355
let accountEmail = "harsh@google.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState; // variable declared but value not assigned then javascript consider it as undefined.

// accountId = 2 // not allowed - Const Keyword cannot be changed


accountEmail = "harsh@op.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// console.table can be used to print all the variables in table format
