//* Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((film) => film.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

//* Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((film) => film.director === director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

//* Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = array.filter((film) => film.director === director);
  let total = result.reduce((totalScore, film) => totalScore + film.score, 0);
  result = Number((total / result.length).toFixed(2));
  console.log('EXERCICE 3 ->', result);
  return result;
}

//* Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = array.map((film) => film.title);
  result.sort((a, b) => a.localeCompare(b));
  result = result.slice(0, 20);
  console.log('EXERCICE 4 ->', result);
  return result;
}

//* Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArray = [...array]; // Crear una copia del array original
  let result = newArray.sort((a, b) =>
    a.year == b.year ? a.title.localeCompare(b.title) : a.year - b.year
  );

  console.log('EXERCICE 5 ->', result);
  return result;
}

//* Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  // empty string or undefined
  if (!genre) {
    return 0;
  }
  //includes searching for an element in an array
  let result = array.filter((film) => film.genre.includes(genre));
  // If there are any movies with the genre, return 0
  if (result.length === 0) {
    return 0;
  }
  // return a number
  let total = result.reduce((totalScore, film) => totalScore + film.score, 0);
  total = Number((total / result.length).toFixed(2));
  return total;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
