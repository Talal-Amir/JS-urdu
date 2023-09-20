const accountId = 237857
let accountEmail = "talal@google.com"
var accountPassword = "54321"
accountCity = "Lahore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ts@ts.com"
accountPassword = "6554788"
accountCity = "Karachi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])