import "./styles.css";

const SearchBar = () => {
  return (
    <form className="form-search">
      <label className="search-bar">
        <input type="text" placeholder="Digite a cidade" />
        <button type="submit">
          <img src="./search.svg" alt="ícone de busca" />
        </button>
      </label>
    </form>
  );
};

export default SearchBar;
