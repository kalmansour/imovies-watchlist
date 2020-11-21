import { makeObservable, observable, action } from "mobx";
import movies from "../movies";

class MovieStore {
  movies = movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
      deleteMovie: action,
      watchedMovie: action,
      addMovie: action,
    });
  }

  addMovie = (newMovie) => {
    newMovie.id = this.movies[this.movies.length - 1].id + 1;
    newMovie.watched = false;
    this.movies.push(newMovie);
  };

  deleteMovie = (_movie) => {
    this.movies = this.movies.filter((movie) => movie !== _movie);
  };

  watchedMovie = (movieWatched) => {
    const movie = this.movies.find((movie) => movie.id === movieWatched.id);
    movie.watched = !movie.watched;
  };
}

const movieStore = new MovieStore();
export default movieStore;
