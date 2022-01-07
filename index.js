let characters = "abcdef0123456789";

function generatecode() {
  let code = [];
  let i = 0;

  do {
    code[i] = characters[Math.floor(Math.random() * 16)];
    i = i + 1;
  } while (i < 6);
  return "#" + code.join("");
}

let colourOne = generatecode();
let colourTwo = generatecode();
let colourThree = generatecode();
let colourFour = generatecode();
let colourFive = generatecode();

document.getElementById("text-1").innerHTML = colourOne;
document.getElementById("text-2").innerHTML = colourTwo;
document.getElementById("text-3").innerHTML = colourThree;
document.getElementById("text-4").innerHTML = colourFour;
document.getElementById("text-5").innerHTML = colourFive;

document.getElementById("colour-1").style.backgroundColor = colourOne;
document.getElementById("colour-2").style.backgroundColor = colourTwo;
document.getElementById("colour-3").style.backgroundColor = colourThree;
document.getElementById("colour-4").style.backgroundColor = colourFour;
document.getElementById("colour-5").style.backgroundColor = colourFive;
