import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";

class Movie extends Component {
  state = { movies: getMovies(), page: 1 };

  handleDelete = movie => {
    const moviesWithoutDeleted = this.state.movies.filter(
      m => m._id !== movie._id
    );
    // deleteMovie(id);
    this.setState({ movies: moviesWithoutDeleted });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  render() {
    const { length: movieCount } = this.state.movies;
    if (movieCount === 0) return <p>There are no movies in the database</p>;

    return (
      <React.Fragment>
        <p>Showing {movieCount} movies in the datebase</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    key={movie._id}
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-small"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

// title, genre, stock, rate
export default Movie;
