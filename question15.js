const guestList=["ali","hamza","shahbaz","rehan"];
console.log(guestList[0]+" won't be able to make it to dinner");
guestList[0]="faizan";
guestList.map((i)=>console.log("Hi "+i + ", I would like you to join me for dinner tomorrow at 7pm."));