let nameCase="asad husnain";
console.log("Upper Case",nameCase.toUpperCase());
console.log("Lower Case", nameCase.toLowerCase());
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  console.log("title case",  toTitleCase(nameCase));