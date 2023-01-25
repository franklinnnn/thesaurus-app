import React from "react";

const Search = ({ handleSubmit, input, setInput }) => {
  return (
    <div className="search" id="search">
      <form onSubmit={handleSubmit} action="/word" className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="enter word or phrase"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span
          className="search__clear"
          onClick={() => {
            setInput("");
          }}
        >
          X
        </span>
        <button className="search__button" type="submit">
          GO
        </button>
      </form>
    </div>
  );
};

export default Search;
