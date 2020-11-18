import { makeObservable, observable } from "mobx";
import movies from "../components/movies";
import watchedmovies from "../components/watchedmovies";

class MovieStore {
  movies = movies;
  watchedmovies = watchedmovies;

  constructor() {
    makeObservable(this, {
      movies: observable,
      watchedmovies: observable,
    });
  }
}

const movieStore = new MovieStore();
export default movieStore;
