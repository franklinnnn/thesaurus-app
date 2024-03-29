import React, { useState } from "react";
import { fetchDefinition, fetchSynonym } from "../util/fetchData";

import "../App.css";
import Results from "../components/Results";
import Footer from "../components/Footer";
import Search from "../components/Search";

const Home = ({ theme, toggleTheme }) => {
  const [input, setInput] = useState("");
  const [searched, setSearched] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [definition, setDefinition] = useState([]);
  const [activeButton, setActiveButton] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    fetchSynonym(input).then(setResults);
    fetchDefinition(input).then(setDefinition);
    setSearched(input);
    setShowResults(true);
    setActiveButton("synonyms");
    setLoading(false);
  };
  return (
    <article className="home" id={theme}>
      <header>
        <h1>find words</h1>
      </header>
      <Search handleSubmit={handleSubmit} input={input} setInput={setInput} />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <section>
          {showResults && (
            <Results
              results={results}
              searched={searched}
              definition={definition}
              setInput={setInput}
              setResults={setResults}
              setSearched={setSearched}
              setDefinition={setDefinition}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          )}
        </section>
      )}
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </article>
  );
};

export default Home;
