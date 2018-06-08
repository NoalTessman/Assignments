var form = document.demoForm;
form.addEventListener("submit", function(e){
    document.getElementById("DBZ").innerHTML = "";
    e.preventDefault();
    var output = {};
    output.name  = this.name.value;
    output.email = this.email.value;
    output.password = this.password.value; 
    output.gender = this.Gender.value;
    output.powerlevel = this.dbz.value + " You are weak " + this.name.value;
    output.date = "Will " + this.date.value + " be when do you want to stop being so WEAK " + output.name + "?";
    output.occupation = `YOU WILL NEVER BE A ${this.occupation.value} AT YOUR WEAK POWER LEVEL OF ${this.dbz.value}`;
    arrray1 = Object.keys(output);
    array2 = Object.values(output);
    var array3 = [];
    for(i = 0; i < array2.length; i++){
        array3[i] = (arrray1[i] + ": " + array2[i] + "\n");
    }
    for (i= 0; i< array3.length; i++){
  document.getElementById("DBZ").innerHTML += array3[i] + "<br>";}
});