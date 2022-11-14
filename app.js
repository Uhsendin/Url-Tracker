const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
let myUrls = [];
// changes urls to an array from a string
const urlsLocalStorage = JSON.parse(localStorage.getItem("myUrls"));

if (urlsLocalStorage) {
  myUrls = urlsLocalStorage;
  render(myUrls);
}

// creates <li>'s with urls from user inputs
function render(urls) {
  let listItems = "";
  for (let i = 0; i < urls.length; i++) {
    listItems += `
    <li>
        <a target='_blank' href='${urls[i]}'>
            ${urls[i]}
        </a>
    </li>
`;
  }
  ulEl.innerHTML = listItems;
}

// selects current tab url and renders to page as <li>'s
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    myUrls.push(tabs[0].url);
    localStorage.setItem("myUrls", JSON.stringify(myUrls));
    render(myUrls);
  });
});

// clears local storage, myUrls and DOM on double click
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myUrls = [];
  render(myUrls);
});

// pushes user inputs to the page
inputBtn.addEventListener("click", function () {
  myUrls.push(inputEl.value);
  inputEl.value = "";
  // saves Urls to local storage as strings
  localStorage.setItem("myUrls", JSON.stringify(myUrls));
  render(myUrls);
});
