function puzzle(){
  var response=prompt("Which letter is an animal?");
  if(response==='b')
  alert("You got it right!");
  else if(response==='B')
  alert("You got it right!");
else {
  alert("Sorry, that's not the answer");}
}
function answer(){
  var x=document.getElementById("demo");
  x.innerHTML="The answer is 'b/B' (bee)";}
function like(){
  alert("Thank you for your admiration!")
}
function suggestion(){
  var response=prompt("Welcome to say anything!");
  alert("Thank you! Your advice will be considered")}
