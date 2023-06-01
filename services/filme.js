import axios from "axios";

export const newMovie = (payload) => {
  return axios.post("http://localhost:8080/filmes/cadastrar", payload);
};

export const getAllMovies = () => {
  return axios.get("http://localhost:8080/filmes/all");
};
