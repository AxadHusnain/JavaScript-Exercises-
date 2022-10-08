const guestList=["ali","hamza","shahbaz","rehan"];
guestList.map((i)=>console.log("Hi "+i + ", I've found a bigger table for us."));
guestList.unshift("khurram")
guestList.splice( (guestList.length/2), 0,"shaheer")
guestList.push("john")
guestList.map((i)=>console.log("Hi "+i + " i would like to invite you to dinner tomorrow night at ginyaki."));