import { makeObservable, observable, action } from "mobx";
import movies from "../components/movies";

class MovieStore {
  movies = movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
      deleteMovie: action,
      watchedMovie: action,
    });
  }

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
