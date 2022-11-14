const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
let myUrls = [];
// changes urls to an array from a string
const urlsLocalStorage = JSON.parse(localStorage.getItem("myUrls"));

if (urlsLocalStorage) {
  myUrls = urlsLocalStorage;
  renderUrls();
}

// clears local storage, myUrls and DOM on double click
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myUrls = [];
  renderUrls()
});

// pushes user inputs to the page
inputBtn.addEventListener("click", function () {
  myUrls.push(inputEl.value);
  inputEl.value = "";
  // saves Urls to local storage as strings
  localStorage.setItem("myUrls", JSON.stringify(myUrls));
  renderUrls();
});

// creates <li>'s with urls from user inputs
function renderUrls() {
  let listItems = "";
  for (let i = 0; i < myUrls.length; i++) {
    listItems += `
    <li>
        <a target='_blank' href='${myUrls[i]}'>
            ${myUrls[i]}
        </a>
    </li>
`;
  }
  ulEl.innerHTML = listItems;
}
