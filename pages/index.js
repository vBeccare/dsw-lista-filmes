import { useRouter } from "next/router";
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
      className="toast text-bg-primary  position-fixed top-0 end-0 p-3"
      role="alert"
      id="liveToast"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">Filme adicionado com sucesso!</div>
      </div>
    </div>
  );
};

const HomePage = ({ addedMovie, setAddedMovie }) => {
  const { moviesList } = useHome({ addedMovie, setAddedMovie });
  const router = useRouter();
  return (
    <main className="container">
      <Toast />
      <h1>Listagem de filmes</h1>
      {moviesList.length === 0 && <p>Não há filmes cadastrados</p>}

      {moviesList.length > 0 && (
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
            {moviesList.map(({ titulo, genero, anoLancamento, id }) => {
              return (
                <FilmeItem
                  key={id}
                  titulo={titulo}
                  genero={genero}
                  ano={anoLancamento}
                  id={id}
                />
              );
            })}
          </tbody>
        </table>
      )}
      <button
        className="btn btn-success"
        onClick={() => router.push("/novo-filme")}
      >
        Incluir novo
      </button>
    </main>
  );
};
export default HomePage;
