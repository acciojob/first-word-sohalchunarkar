function firstWord(s) {
  if (!s) return "";

  s = s.trim();  // remove leading & trailing spaces

  let spaceIndex = s.indexOf(" ");

  if (spaceIndex === -1) {
    return s; // no space found
  }

  return s.slice(0, spaceIndex);
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
