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
