import { useEffect, useState } from "react";
import { getAllMovies } from "../../services/filme";

const useHome = ({ addedMovie, setAddedMovie }) => {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    if (addedMovie) {
      const toastLiveExample = document.getElementById("liveToast");
      const { Toast } = require("bootstrap");
      const toastBootstrap = new Toast(toastLiveExample);
      toastBootstrap.show();
      setAddedMovie(false);
    }
  }, [addedMovie]);

  useEffect(() => {
    getAllMovies().then((res) => {
      setMoviesList(res.data);
    });
  }, [addedMovie]);

  return {
    moviesList,
  };
};

export default useHome;
