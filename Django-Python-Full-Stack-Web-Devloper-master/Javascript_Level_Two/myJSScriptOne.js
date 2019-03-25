var v = "Global Variable"
var stuff = "Global Stuff"

function fun(stuff) {
  console.log(v);
  stuff ="Reassign stuff inside function"
  console.log(stuff);

}

console.log(stuff);
fun();
