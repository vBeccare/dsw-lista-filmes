import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useNovoFilme = () => {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [anoLancamento, setAnoLancamento] = useState("");

  const [tituloErro, setTituloErro] = useState(false);
  const [generoErro, setGeneroErro] = useState(false);
  const [anoLancamentoErro, setAnoLancamentoErro] = useState(false);

  const router = useRouter();

  console.log({ titulo, genero, anoLancamento });

  const handleSubmit = () => {
    if (!titulo) {
      setTituloErro(true);
    }
    if (genero === "") {
      setGeneroErro(true);
    }
    if (!anoLancamento) {
      setAnoLancamentoErro(true);
    }
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
