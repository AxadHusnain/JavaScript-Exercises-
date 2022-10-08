let magicianName=["ali","zafar","bilal","usman"]
function make_great(name){
    for (let index = 0; index < name.length; index++) {
     name[index]=name[index]+" the great"
    }
  }
  
  make_great(magicianName);
  show_magicians(magicianName);