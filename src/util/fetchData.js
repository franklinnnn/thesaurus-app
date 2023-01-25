const API_URL = `https://api.datamuse.com`;

export const fetchSynonym = async (input) => {
  const data = await fetch(`${API_URL}/words?rel_syn=${input}&max=25&md=d`);
  const response = await data.json();
  return response;
};

export const fetchSoundsLike = async (input) => {
  const data = await fetch(`${API_URL}/words?sl=${input}&max=25`);
  const response = await data.json();
  return response;
};

export const fetchRhymesWith = async (input) => {
  const data = await fetch(`${API_URL}/words?rel_rhy=${input}&max=25`);
  const response = await data.json();
  return response;
};

export const fetchDefinition = async (input) => {
  const data = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
  );
  const response = await data.json();
  return response;
};
