const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myUrls = [];

inputBtn.addEventListener("click", function () {
  myUrls.push(inputEl.value);
  inputEl.value = ""
  renderUrls()
});

function renderUrls() {
  let listItems = "";
  for (let i = 0; i < myUrls.length; i++) {
    listItems += "<li><a target= '_blank' href=' " + myUrls + "'>" + myUrls[i] + "</a></li>";
  }
  ulEl.innerHTML = listItems;
}
