import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect } from "react";
import useHooks from "./hooks/useHooks";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const { setAddedMovie, addedMovie } = useHooks();
  return (
    <Component
      {...pageProps}
      setAddedMovie={setAddedMovie}
      addedMovie={addedMovie}
    />
  );
};

export default App;
