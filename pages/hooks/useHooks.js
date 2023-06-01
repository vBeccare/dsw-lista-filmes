import { useState } from "react";

const useHooks = () => {
  const [addedMovie, setAddedMovie] = useState(false);
  return {
    setAddedMovie,
    addedMovie,
  };
};

export default useHooks;
