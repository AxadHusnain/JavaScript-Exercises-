function make_shirt(size) {
  console.log(
    "the size of the shirt should be " +
      size +
      " and the sentence printed on should be i Love JavaScript"
  );
}
function make_shirt(size, text) {
  console.log(
    "the size of the shirt should be " +
      size +
      " and the sentence printed on should be " +
      text
  );
}
make_shirt("large");
make_shirt("medium");
make_shirt("small", "i love coding");
