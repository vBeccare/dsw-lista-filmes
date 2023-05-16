import { useEffect, useState } from "react";

const useHome = () => {
  const [filmeAdicionado, setFilmeAdicionado] = useState(false);

  useEffect(() => {
    if (filmeAdicionado) {
      const toastLiveExample = document.getElementById("liveToast");
      const { Toast } = require("bootstrap");
      const toastBootstrap = new Toast(toastLiveExample);
      toastBootstrap.show();
			setFilmeAdicionado(false);
    }
  }, [filmeAdicionado]);

  return {
		setFilmeAdicionado,
    listaFilmes: [
      {
        titulo: "O Poderoso Chefão",
        genero: "Drama",
        ano: 1972,
      },
      {
        titulo: "Batman: O Cavaleiro das Trevas",
        genero: "Ação",
        ano: 2008,
      },
      {
        titulo: "Pulp Fiction: Tempo de Violência",
        genero: "Suspense",
        ano: 1994,
      },
      {
        titulo: "O Senhor dos Anéis: O Retorno do Rei",
        genero: "Fantasia",
        ano: 2003,
      },
    ],
  };
};

export default useHome;
