function solve() {
  let inputText = document.getElementById("input").value;
  let splitText = inputText.split(".").filter(e => e != "");
  let output = document.getElementById("output");

  for (let index = 0; index < splitText.length; index += 3) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      if (splitText[index + i]) {
        arr.push(splitText[index + i]);
      }
    }
    let paragraph = arr.join(". ") + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}