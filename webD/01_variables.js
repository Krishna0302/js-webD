const accountId = 144553;
let accountEmail = "krishna@gmailo.com";
var Password = "12345";
accountCity = "jaipur";
let accountState;

accountEmail = "kt@gmail.com";
Password = "344556";
accountCity = "Bengaluru";

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, Password, accountCity, accountState])