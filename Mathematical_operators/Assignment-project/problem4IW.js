//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let data_user = "venky";
let data_passw = 123457;

let user = "venky";
let passw = 123457;

if(data_user == user){
  if(data_passw == passw) {
    console.log("Login Success") 

  } else {
    console.log("Wrong Password")
    } 
} else {
  console.log(" ⚠ Wrong Credentials, please check and try again")
    }
