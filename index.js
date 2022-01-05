let characters = "abcdef0123456789";

function generatecode() {
  let code = [];
  let i = 0;

  do {
    code[i] = characters[Math.floor(Math.random() * 16)];
    i = i + 1;
  } while (i < 6);
  return code.join("");
}

let colourOne = generatecode();
let colourTwo = generatecode();
let colourThree = generatecode();
let colourFour = generatecode();
let colourOnFive = generatecode();

console.log(colourOne);
