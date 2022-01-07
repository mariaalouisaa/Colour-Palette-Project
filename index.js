const characters = "abcdef0123456789";

function generateCode() {
  let code = [];
  let i = 0;

  do {
    code[i] = characters[Math.floor(Math.random() * 16)];
    i = i + 1;
  } while (i < 6);
  return "#" + code.join("");
}

//select the colour divs from the html
const divs = document.getElementsByClassName("colour-div");
// turn the HTMLCollection into an array that is mappable
const divsArr = [...divs];
divsArr.map((div) => {
  let code = generateCode();
  div.childNodes[3].innerText = code;
  div.childNodes[1].style.backgroundColor = code;
  div.children[0].children[0].addEventListener("click", changeColour);
});

function changeColour() {
  let code = generateCode();
  this.parentNode.style.backgroundColor = code;
  this.parentNode.parentNode.children[1].innerText = code;
}
