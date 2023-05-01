import React from "react";

const Search = ({ handleSubmit, input, setInput }) => {
  return (
    <section className="search" id="search">
      <form onSubmit={handleSubmit} action="/word" className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="enter word or phrase"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          role="search bar"
        />
        <span
          className="search__clear"
          onClick={() => {
            setInput("");
          }}
          role="clear search"
        >
          X
        </span>
        <button className="search__button" type="submit">
          GO
        </button>
      </form>
    </section>
  );
};

export default Search;
