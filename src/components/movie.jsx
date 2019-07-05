import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movie extends Component {
  state = { movies: getMovies() };

  handleDelete = id => {
    deleteMovie(id);
    this.setState({ movies: getMovies() });
  };

  render() {
    return this.state.movies == 0 ? (
      <h4>There are no movies in the database</h4>
    ) : (
      this.renderIfMoviesFound()
    );
  }

  renderSummary() {
    return this.state.movies.length == 1 ? (
      <h4>Showing {this.state.movies.length} movie in the database</h4>
    ) : (
      <h4>Showing {this.state.movies.length} movies in the datebase</h4>
    );
  }

  renderIfMoviesFound() {
    return (
      <React.Fragment>
        {this.renderSummary()}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
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
                  <button
                    onClick={() => this.handleDelete(movie._id)}
                    type="button"
                    className="btn btn-danger"
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
