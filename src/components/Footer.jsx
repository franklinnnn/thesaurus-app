import React from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Footer = ({ theme, toggleTheme }) => {
  return (
    <div className="footer">
      <div className="footer__links">
        <a href="https://www.datamuse.com/api/" target="_blank">
          Datamuse API
        </a>
        <a href="https://dictionaryapi.dev/" target="_blank">
          Dictionary API
        </a>
        <a href="https://github.com/franklinnnn/thesaurus-app" target="_blank">
          GitHub
        </a>
      </div>
      <div className="footer__theme">
        {theme === "dark" ? (
          <div onClick={toggleTheme} className="icon__light">
            <BsSunFill />
          </div>
        ) : (
          <div onClick={toggleTheme} className="icon__dark">
            <BsMoonFill />
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
