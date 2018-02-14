const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
const btn = document.getElementById('submit-btn');
let searchedForText;
// Agregándole al formulario el evento submit
form.addEventListener('submit', function(event) {
  event.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  btn.addEventListener('click', function() {
    getNews();
  });
});

function getNews() {
  const url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=f94208e7ec01409c9864a5ca6f2ba4e5`;
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(addNews);
}

function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
}

function parseJSON(res) {
  return res.json()
    .then(function(parsedData) {
      return parsedData.response.docs[0];
    });
}

function addNews(data) {
  // const data = JSON.parse(this.responseText);
  // console.log(data.response);
  // const article = data.response.docs[0];
  const title = data.headline.main;
  const snippet = data.snippet;

  let li = document.createElement('li');
  li.className = 'articleClass';
  li.innerText = snippet;

  responseContainer.appendChild(li);
}

