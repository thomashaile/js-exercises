/* Password Validation
   This program should check if each passwords in the array ("password[]") 
   contains valid Password (see below for password criterias) and return 
   new array ("PasswordValidationResult[]") with True/False booleans.

LEVEL 1: 

Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, true, true, true]

LEVEL 2:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Expected Result:
PasswordValidationResult= [false, false, false, true, true]

LEVEL 3:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in previousPassword Array. 
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/
/*function PasswordValidationResult(password) {
    var validPass = [];
    password.forEach(function (element) {

        validPass.push((element.length >= 5 && element.match(/[A-Z]+/) && element.match(/[0-9]+/) && element.match(/[a-z]+/) && element.match(/[$@#&!%.]+/)) ? true : false);

    });
    return validPass;
}*/

function PasswordValidation(pass) 
{ 

if (pass.length >= 5 && pass.match(/[A-Z]+/) && pass.match(/[0-9]+/) && pass.match(/[a-z]+/) && pass.match(/[!#$%.]+/)){
    return true;
}
else {
return false;
}

}

var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];
var PasswordValidationResult = password.map(PasswordValidation);

console.log(PasswordValidationResult)