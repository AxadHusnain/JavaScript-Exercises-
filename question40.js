function make_album(name,title,noOfSongs=0){
    return{
      "Artist Name":name,
      "Album Title":title,
      "Number of songs" : noOfSongs
    }
  }
  let dictionary1=make_album("name1","title1");
  let dictionary2=make_album("name2","title2");
  let dictionary3=make_album("name3","title3");
  let dictionary4=make_album("name4","title4",16)
  console.log(dictionary1);
  console.log(dictionary2);
  console.log(dictionary3);
  console.log(dictionary4);