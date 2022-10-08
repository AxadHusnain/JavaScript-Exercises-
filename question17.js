const guestList=["ali","hamza","shahbaz","rehan"];
guestList.map((i)=>console.log("Hi "+i + " it is with a very sad heart that i've to tell you that i'm only getting two seats at the table for dinner"));
for (let index = guestList.length; index > 2; index--) {
  console.log("hi "+ guestList.pop() + " i'm sorry i can’t invite you to dinner.");
}
guestList.map((i)=>console.log("Hi "+i + " really looking forward for that dinner tomorrow evening."));
guestList.pop();
guestList.pop();
console.log("empty guest list",guestList);