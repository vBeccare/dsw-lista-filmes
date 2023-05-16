import useNovoFilme from "./hooks/useNovoFilme";

import style from "./style.module.css";

const NovoFilme = () => {
  const {
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
  } = useNovoFilme();
  return (
    <div className="container">
      <h1>Novo Filme</h1>
      <div novalidate>
        <div class="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className={`form-control ${tituloErro && `is-invalid`}`}
          />
          <div class="invalid-feedback">Preencha o título</div>
        </div>

        <label htmlFor="genero">Gênero</label>
        <select
          id="genero"
          name="genero"
          value={genero}
          className={`form-select ${generoErro && `is-invalid`}`}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="acao">Ação</option>
          <option value="aventura">Aventura</option>
          <option value="comedia">Comédia</option>
          <option value="drama">Drama</option>
          <option value="fantasia">Fantasia</option>
          <option value="ficcao">Ficção</option>
          <option value="romance">Romance</option>
          <option value="suspense">Suspense</option>
          <option value="terror">Terror</option>
        </select>
        <div class="invalid-feedback">Selecione um gênero</div>
        <label htmlFor="anoLancamento">Ano de lançamento</label>
        <input
          type="text"
          id="anoLancamento"
          value={anoLancamento}
          name="anoLancamento"
          className={`form-control ${anoLancamentoErro && `is-invalid`}`}
          onChange={(e) => setAnoLancamento(e.target.value)}
        />
        <div class="invalid-feedback">Preencha o ano de lançamento</div>
      </div>
      <div className={style.buttonAction}>
        <button onClick={handleCancel} className="btn btn-light">
          Cancelar
        </button>
        <button onClick={handleSubmit} className="btn btn-success">
          Salvar
        </button>
      </div>
    </div>
  );
};

export default NovoFilme;
