import { useState, FormEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import something(s)
import NavBar from "../NavBar/NavBar";
import SearchImage from "./SearchImage";
import { products } from "../../assets/products";

/**
 * This is what is doing "the search".
 * It's filtering the products based on the user input.
 * If the user didn't type anything yet, it returns all of the products.
 */
const search = (newQuery: string) => {
  return newQuery
    ? products.filter((product) =>
        [...product.name.split(" "), ...product.tags].some((p) =>
          p.toLowerCase().match(new RegExp(`^${newQuery.toLowerCase()}`))
        )
      )
    : products;
};

function Search() {
  /**
   * Initializes navigate and location
   */
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Here is where I am making the page "back button" and "refresh" proof.
   * If the user navigates back and forth, or refreshes the screen, this will
   * populates the search textbox with what the user searched with.
   *
   * Every time the form is submitted, the search query is pushed to history.
   * (See code below).
   * The location.state?.query retrieves the search query from history.
   * and falls back to an empty string if it isn't there.
   */
  const [query, setQuery] = useState(location.state?.query || "");
  /**
   * And this populates the search results.
   */
  const [results, setResults] = useState(search(query));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setResults(search(query));

    /**
     * This is pushing what the user searched with to history.
     */
    navigate("", {
      replace: true,
      state: {
        query,
      },
    });
  };

  return (
    <>
      <NavBar>
        <div className="uk-navbar-item">
          <form onSubmit={handleSubmit}>
            <input
              className="uk-input uk-form-width-small"
              type="search"
              placeholder="Search"
              aria-label="Search"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="uk-button uk-button-secondary">
              Search
            </button>
          </form>
        </div>
      </NavBar>

      <div className="uk-container">
        <div className="uk-grid uk-child-width-expand@m uk-text-center">
          {results.map((product, idx) => {
            return (
              <div key={`product-search-${idx}`}>
                <div className="uk-card uk-card-default uk-card-hover uk-card-small">
                  <Link
                    to={`/product/${product.id}/${product.name
                      .replace(/\s/g, "-")
                      .replace(/[^A-Za-z/-]/g, "")
                      .toLowerCase()}`}
                  >
                    <div className="uk-card-media-top">
                      <SearchImage url={product.image} />
                    </div>
                    <div className="uk-card-body">
                      <div className="uk-align-center">
                        {product.name.toUpperCase()}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
