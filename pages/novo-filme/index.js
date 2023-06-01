import useNovoFilme from "./hooks/useNovoFilme";

import style from "./style.module.css";

const NovoFilme = ({ setAddedMovie }) => {
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
  } = useNovoFilme({setAddedMovie});
  return (
    <div className="container">
      <h1>Novo Filme</h1>
      <div novalidate>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className={`form-control ${!!tituloErro && `is-invalid`}`}
          />
          <div className="invalid-feedback">{tituloErro}</div>
        </div>

        <label htmlFor="genero">Gênero</label>
        <select
          id="genero"
          name="genero"
          value={genero}
          className={`form-select ${!!generoErro && `is-invalid`}`}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Acão">Ação</option>
          <option value="Aventura">Aventura</option>
          <option value="Comédia">Comédia</option>
          <option value="Drama">Drama</option>
          <option value="Fantasia">Fantasia</option>
          <option value="Ficção">Ficção</option>
          <option value="Romance">Romance</option>
          <option value="Suspense">Suspense</option>
          <option value="Terror">Terror</option>
        </select>
        <div className="invalid-feedback">{generoErro}</div>
        <label htmlFor="anoLancamento">Ano de lançamento</label>
        <input
          type="text"
          id="anoLancamento"
          value={anoLancamento}
          name="anoLancamento"
          className={`form-control ${!!anoLancamentoErro && `is-invalid`}`}
          onChange={(e) => setAnoLancamento(e.target.value)}
        />
        <div className="invalid-feedback">{anoLancamentoErro}</div>
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
