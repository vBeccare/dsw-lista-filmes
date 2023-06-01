import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { newMovie } from "../../../services/filme";

const useNovoFilme = ({ setAddedMovie }) => {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [anoLancamento, setAnoLancamento] = useState("");

  const [tituloErro, setTituloErro] = useState();
  const [generoErro, setGeneroErro] = useState();
  const [anoLancamentoErro, setAnoLancamentoErro] = useState();

  const router = useRouter();

  const handleSubmit = () => {
    setTituloErro(null);

    setGeneroErro(null);

    setAnoLancamentoErro(null);

    const payload = { titulo, genero, anoLancamento };
    newMovie(payload)
      .then(() => {
        setAddedMovie(true);
        router.push("/");
      })
      .catch((err) => {
        const error = err.response.data.message;

        const extractInterpolatedMessageAndPropertyPath = (inputString) => {
          const regex = /interpolatedMessage='(.*?)', propertyPath=(.*?),/g;
          const matches = inputString.matchAll(regex);
          const results = [];

          for (const match of matches) {
            const interpolatedMessage = match[1];
            const propertyPath = match[2];
            results.push({ interpolatedMessage, propertyPath });
          }

          return results;
        };

        const results = extractInterpolatedMessageAndPropertyPath(error);
        let tituloErro = "";
        let generoErro = "";
        let anoLancamentoErro = "";

        results.map((result) => {
          if (result.propertyPath === "titulo") {
            tituloErro = `${tituloErro} | ${result.interpolatedMessage}`;
          }
          if (result.propertyPath === "genero") {
            generoErro = `${generoErro} | ${result.interpolatedMessage}`;
          }
          if (result.propertyPath === "anoLancamento") {
            anoLancamentoErro = `${anoLancamentoErro} | ${result.interpolatedMessage}`;
          }

          setTituloErro(tituloErro);
          setGeneroErro(generoErro);
          setAnoLancamentoErro(anoLancamentoErro);
        });
        console.log(results);
      });
  };

  const handleCancel = () => {
    router.push("/");
  };

  useEffect(() => {
    setTituloErro(false);
  }, [titulo]);

  useEffect(() => {
    setGeneroErro(false);
  }, [genero]);

  useEffect(() => {
    setAnoLancamentoErro(false);
  }, [anoLancamento]);

  return {
    titulo,
    genero,
    anoLancamento,
    setTitulo,
    setGenero,
    setAnoLancamento,
    handleCancel,
    handleSubmit,
    tituloErro,
    generoErro,
    anoLancamentoErro,
  };
};

export default useNovoFilme;
