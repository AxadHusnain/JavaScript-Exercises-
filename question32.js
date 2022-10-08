let current_users=["Asad","husnain","ali","hamza","talha"];
let new_users=["asad","talha","hashir","tahir","ashar"]
new_users.map((i)=>{
  if(current_users.find((element)=>element.toLowerCase()===i.toLowerCase() )){
    console.log("the person will need to enter a new username.");
  }
  else{
    console.log("the username is available");
  }
})