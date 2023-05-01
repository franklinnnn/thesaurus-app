import { useState } from "react";
import Definition from "./Definition";
import {
  fetchSynonym,
  fetchSoundsLike,
  fetchRhymesWith,
  fetchDefinition,
} from "../util/fetchData";

const Results = ({
  results,
  searched,
  definition,
  setInput,
  setSearched,
  setResults,
  setDefinition,
  activeButton,
  setActiveButton,
}) => {
  const [loading, setLoading] = useState(false);
  const handleClickWord = (word) => {
    setLoading(true);
    fetchSynonym(word).then(setResults);
    fetchDefinition(word).then(setDefinition);
    setInput(word);
    setSearched(word);
    setActiveButton("synonyms");
    setLoading(false);
  };
  const handleSynonyms = (e, word) => {
    setLoading(true);
    setActiveButton(e.target.id);
    fetchSynonym(word).then(setResults);
    setLoading(false);
  };
  const handleSoundsLike = (e, word) => {
    setLoading(true);
    setActiveButton(e.target.id);
    fetchSoundsLike(word).then(setResults);
    setLoading(false);
  };
  const handleRhymesWith = (e, word) => {
    setLoading(true);
    setActiveButton(e.target.id);
    fetchRhymesWith(word).then(setResults);
    setLoading(false);
  };
  return (
    <section className="results" id="results">
      <div className="results__searched">
        <h2>{searched}</h2>
        <Definition definition={definition} searched={searched} />
      </div>

      <section className="results__options">
        <button
          className={activeButton === "synonyms" ? "active" : undefined}
          id={"synonyms"}
          onClick={(e) => handleSynonyms(e, searched)}
        >
          synonyms
        </button>
        <button
          className={activeButton === "sounds" ? "active" : undefined}
          id={"sounds"}
          onClick={(e) => handleSoundsLike(e, searched)}
        >
          sounds like
        </button>
        <button
          className={activeButton === "rhymes" ? "active" : undefined}
          id={"rhymes"}
          onClick={(e) => handleRhymesWith(e, searched)}
        >
          rhymes with
        </button>
      </section>

      {loading ? (
        <h2>loading...</h2>
      ) : (
        <section>
          {results.length < 1 ? (
            <div className="results__list">No results found</div>
          ) : (
            <div className="results__list">
              {results.map((word) => (
                <div
                  className="results__word"
                  key={word.word}
                  onClick={() => handleClickWord(word.word)}
                >
                  <span>{word.word}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </section>
  );
};

export default Results;
