const Definition = ({ definition, searched }) => {
  return (
    <div className="definition" id="definition">
      {/* {definition?.map((word) => (
        <div className="definition__word">
          {word?.meanings.slice(0, 1).map((meaning) => (
            <div className="definition__part">
              <span>{meaning.partOfSpeech}</span>
              <div className="definition__list">
                {meaning.definitions.slice(0, 1).map((def) => (
                  <div>{def.definition}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))} */}
      {Array.isArray(definition) ? (
        <div>
          {definition?.map((word) => (
            <div className="definition__word">
              {word?.meanings.slice(0, 2).map((meaning) => (
                <div className="definition__part">
                  <span>{meaning.partOfSpeech}</span>
                  <div className="definition__list">
                    {meaning.definitions.slice(0, 1).map((def) => (
                      <div>{def.definition}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {definition.title}
          <p>
            Find results on{" "}
            <a
              target="blank"
              href={`https://www.google.com/search?q=${searched}`}
            >
              Google
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
export default Definition;
