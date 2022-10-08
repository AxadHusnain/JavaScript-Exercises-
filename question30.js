let userNames=["admin","ahmed","ali","hashim","usman"];
userNames.map((i)=>{
  if(i=="admin"){

    console.log("Hello admin, would you like to see a status report?");
  }else{
    console.log("Hello "+ i+", thank you for logging in again.");
  }
}
)