const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((mv) => mv.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const newMovie = document.createElement('li');
    const { info , otherProps} = movie; // destructing with and extracting info. The object MUST have prop with name 'info'
    const { getFormattedTitle } = movie
    let text = movie.getFormattedTitle() + '-';
    for (const key in info) {
      if (key !== 'title') { // IMPORTANT: the value "title" should be string literal
        text = text + `${key}: ${info[key]}`;
      }
    }
    newMovie.textContent = text;
    movieList.appendChild(newMovie);
  });
};
const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(value){
        if(value.trim === ''){
          this._title = 'DEFAULT';
          return;
        }
        this._title = value;
      },
      get title(){
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle: function() {
      return this.info.title.toUpperCase();
    }  
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieFilter = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieFilter);
