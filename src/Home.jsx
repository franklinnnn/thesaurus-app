import React, { useState } from "react";
import { fetchDefinition, fetchSynonym } from "./util/fetchData";

import "./App.css";
import Results from "./Results";
import Footer from "./Footer";
import Search from "./Search";

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
    <div className="home" id={theme}>
      <h1>find words</h1>
      <Search handleSubmit={handleSubmit} input={input} setInput={setInput} />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
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
        </div>
      )}
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Home;
