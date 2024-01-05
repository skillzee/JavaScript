const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountcity = "jaipur" //Possible but don't use
let accountState

// accountId = 2 //Not allowed
accountEmail = "cba@.com"
accountPassword = "0987"
accountcity= "Pilibhit"

// Don't Use Var because of issue in block and functional scope


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountcity, accountState])