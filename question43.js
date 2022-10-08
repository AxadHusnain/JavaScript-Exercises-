let copyMagicianName = ["ali", "zafar", "bilal", "usman"];
function make_great(name) {
  for (let index = 0; index < name.length; index++) {
    name[index] = name[index] + " the great";
  }
}
function show_magicians(name) {
  name.map((i) => {
    console.log(i);
  });
}
make_great(copyMagicianName);
show_magicians(magicianName);
show_magicians(copyMagicianName);
