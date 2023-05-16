import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect } from "react";

const App = ({ Component, pageProps }) => {
	useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />;
};

export default App;
