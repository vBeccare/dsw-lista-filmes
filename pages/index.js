import useHome from "./hooks/useHome";

const FilmeItem = ({ titulo, genero, ano, id }) => {
  return (
    <tr>
      <th>{id}</th>
      <td>{titulo}</td>
      <td>{genero}</td>
      <td>{ano}</td>
    </tr>
  );
};

const Toast = () => {
  return (
    <div
      class="toast text-bg-primary  position-fixed top-0 end-0 p-3"
      role="alert"
      id="liveToast"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">Filme adicionado com sucesso!</div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const { listaFilmes, setFilmeAdicionado } = useHome();
  return (
    <main className="container">
      <h1>Listagem de filmes</h1>
      {listaFilmes.length === 0 && <p>Não há filmes cadastrados</p>}

      {listaFilmes.length > 0 && (
        <table className="table">
          <thead className="table-primary">
            <tr>
              <th scope="col">ID </th>
              <th scope="col">Título</th>
              <th scope="col">Gênero</th>
              <th scope="col">Ano de lançamento</th>
            </tr>
          </thead>
          <tbody>
            {listaFilmes.map(({ titulo, genero, ano }, idx) => {
              console.log({ idx });
              return (
                <FilmeItem titulo={titulo} genero={genero} ano={ano} id={idx} />
              );
            })}
          </tbody>
        </table>
      )}
      <Toast />
      <button
        className="btn btn-success"
        onClick={() => setFilmeAdicionado(true)}
      >
        teste toast
      </button>
      <button className="btn btn-success">Incluir novo</button>
    </main>
  );
};
export default HomePage;
