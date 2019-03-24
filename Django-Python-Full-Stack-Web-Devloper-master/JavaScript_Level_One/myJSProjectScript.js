//Initial prompts
var fname = prompt("What is your first name?")
var lname = prompt("What is your last name?")
var age = prompt("How old are you?")
var height = prompt("How tall are you (in centimeters)?")
var pet = prompt("What is your pet's name?")


//Initial conditions
var nameCondition = null;
var ageCondition = null;
var heightCondition = null;
var petCondition = null;


//Logic tests
if(fname[0]===lname[0]){
  nameCondition = true;
}

if(age > 20 && age < 30){
  ageCondition = true;
}

if(height >= 170){
  heightCondition = true;
}

if(pet[pet.length-1]==="y"){
  petCondition = true;
}


//Console output based on conditions
if(nameCondition == true && ageCondition == true && heightCondition == true && petCondition == true){
  console.log("Welcome, Comrade! Location orange has the drop.");
}else {
  console.log("Nothing logged.");
}
