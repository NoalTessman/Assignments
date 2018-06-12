var pass = "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM123456789!@#$%^&*()_+,./;";
var passgen = function(){
var password = "";
for(i = 0; i < 10;i++){
    password += pass.charAt(Math.floor(Math.random()* pass.length))
}
console.log(password);
}
passgen();