let alien_color1="red";
if (alien_color1=='green') {
  console.log("the player just earned 5 points for shooting the alien.");  
}
else{
  console.log("the player just earned 10 points.");
}
//// second version 
if (alien_color1=='green') {
  console.log("the player just earned 5 points for shooting the alien.");  
}
if(alien_color1!="green"){
  console.log("the player just earned 10 points.");
}