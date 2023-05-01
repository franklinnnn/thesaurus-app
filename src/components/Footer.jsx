import React from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Footer = ({ theme, toggleTheme }) => {
  return (
    <footer className="footer">
      <section className="footer__links">
        <a href="https://www.datamuse.com/api/" target="_blank">
          Datamuse API
        </a>
        <a href="https://dictionaryapi.dev/" target="_blank">
          Dictionary API
        </a>
        <a href="https://github.com/franklinnnn/thesaurus-app" target="_blank">
          GitHub
        </a>
      </section>
      <section className="footer__theme">
        {theme === "dark" ? (
          <div onClick={toggleTheme} className="icon__light">
            <BsSunFill />
          </div>
        ) : (
          <div onClick={toggleTheme} className="icon__dark">
            <BsMoonFill />
          </div>
        )}
      </section>
    </footer>
  );
};

export default Footer;
