//* Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((film) => film.director);
  return result;
}

//* Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((film) => film.director === director);
  return result;
}

//* Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = array.filter((film) => film.director === director);
  let total = result.reduce((totalScore, film) => totalScore + film.score, 0);
  result = Number((total / result.length).toFixed(2));
  return result;
}

//* Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = array.map((film) => film.title);
  result.sort((a, b) => a.localeCompare(b));
  result = result.slice(0, 20);
  return result;
}

//* Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArray = [...array]; // Crear una copia del array original
  let result = newArray.sort((a, b) =>
    a.year == b.year ? a.title.localeCompare(b.title) : a.year - b.year
  );
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

//* Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map((film) => {
    let hours = 0;
    let min = 0;

    if (typeof film.duration === 'string') {
      const durationParts = film.duration.split(' ');
      for (const part of durationParts) {
        if (part.includes('h')) {
          //part.split() => [number, h] ,  part.split()[0] => number
          hours += Number(part.split('h')[0]) * 60;
        } else if (part.includes('min')) {
          min += Number(part.split('min')[0]);
        }
      }
    }
    //copy of the film
    let filmCopy = { ...film };
    filmCopy.duration = hours + min;
    return filmCopy;
  });
  //reult is diferent of array
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  //result: the first film
  let result = [{ ...array[0] }];
  for (i = 0; i < array.length; i++) {
    //lenght-1: the last position in the array
    if (i < array.length - 1) {
      if (result[0].score < array[i + 1].score) {
        result[0] = { ...array[i + 1] };
      }
    }
  }
  return result;
}
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
