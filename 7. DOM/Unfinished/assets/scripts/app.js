const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
const cancelAddMoveButton = addMovieModal.querySelector('.btn--passive');
const addAddMoveButton = addMovieModal.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');

const entryTextSection = document.getElementById('entry-text');
const movies = [];

function toggleMovieModal() {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
}

function updateUI() {
  if (movies.length > 0) {
    entryTextSection.style.display = 'none';
  } else {
    entryTextSection.style.display = 'block';
  }
}

function deleteMovieHandler(movieId){
    let movieIndex = 0;
    for (const movie of movies){
        if (movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.removeChild(listRoot.children[movieIndex]);
}

function renderNewMovieElement(id, title, imageUrl, rating){
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
          <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
          <h2>${title}</h2>
          <p>${rating}/5 stars</p>
          </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.appendChild(newMovieElement);
}

function toggleBackdrop() {
  backdrop.classList.toggle('visible');
}

function clearInputs() {
  for (const input of userInputs) {
    input.value = '';
  }
}

function cancelAddMovieHandler() {
  clearInputs();
  toggleMovieModal();
}

function addMovieHandler() {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    ratingValue > 5
  ) {
    alert('Please enter valid values.');
    return;
  }

  const newMovie = {
    id: Math.random(),
    title: titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(newMovie);
  toggleMovieModal();
  clearInputs();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.imageUrl, newMovie.rating);
  updateUI();
}

function backdropClickHandler() {
  toggleMovieModal();
}

// Handlers
startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMoveButton.addEventListener('click', cancelAddMovieHandler);
addAddMoveButton.addEventListener('click', addMovieHandler);
