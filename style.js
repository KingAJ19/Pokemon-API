const container = document.querySelector('.container');
const row = document.querySelector('.row');
let ul = document.getElementById('pokemonli');

const prevButton = document.createElement('button');
prevButton.classList = 'btn btn-outline-primary btn-sm mr-3 mb-5 mt-3';
prevButton.innerHTML = 'Prev';
prevButton.id = 'prev';
prevButton.dataset.url = '';

const nextButton = document.createElement('button');
nextButton.classList = 'btn btn-outline-primary btn-sm mr-3 mb-5 mt-3';
nextButton.innerHTML = 'Next';
nextButton.id = 'next';
nextButton.dataset.url = '';

container.appendChild(prevButton);
container.appendChild(nextButton);

const fetcFunc = (url = 'https://pokeapi.co/api/v2/pokemon?limit=15') => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let pokelist = data.results;
      console.log(data.results);

      return pokelist.map((pokemon) => {
        let li = document.createElement('li');
        li.className = 'pokestyle';

        let a = document.createElement('a');
        a.innerHTML = pokemon.name;
        a.href = pokemon.results;

        li.appendChild(a);
        ul.appendChild(li);

        nextButton.dataset.url = data.next;
        prevButton.dataset.url = data.previous;
      });
    });
};
window.onload = fetcFunc();
if (prevButton.dataset.url === null) {
  prevButton.innerHTML = '';}
nextButton.addEventListener('click', function () {
  console.log(nextButton);
  ul.innerHTML = '';
  let nextUrl = nextButton.dataset.url;
  fetcFunc(nextUrl);
});
prevButton.addEventListener('click', function () {
  ul.innerHTML = '';
  let prevUrl = prevButton.dataset.url;
  fetcFunc(prevUrl);
});
