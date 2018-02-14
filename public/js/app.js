const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;
// Agregándole al formulario el evento submit
form.addEventListener('submit', function(event) {
  event.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  const url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=f94208e7ec01409c9864a5ca6f2ba4e5`;
  getNews();
});

function addNews() {
  // const data = JSON.parse(this.responseText);
  // console.log(data.response);
  // const article = data.response.docs[0];
  // const title = article.headline.main;
  // const snippet = article.snippet;

  // let li = document.createElement('li');
  // li.className = 'articleClass';
  // li.innerText = snippet;

  // responseContainer.appendChild(li);
}

function getNews() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(addNews);
}

function handleErrors() {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
}
