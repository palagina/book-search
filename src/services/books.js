import axios from "axios";
const baseUrl = 'https://www.googleapis.com/books/v1/volumes?maxResults=20&q=';

//search everywhere, no sort
const getByEverything = async (searchWord, startIndex ) => {
  const response = await axios.get(`${baseUrl}books&startIndex=${startIndex}`);
  return response.data;
};

//search everywhere, sort by relevance
const getAndSortByRel = async (searchWord, startIndex) => {
  const response = await axios.get(
    `${baseUrl}${searchWord}&startIndex=${startIndex}&orderBy=relevance`
  );
  return response.data;
};

//search everywhere, sort by date
const getAndSortByDate = async (searchWord, startIndex) => {
  const response = await axios.get(
    `${baseUrl}${searchWord}&startIndex=${startIndex}&orderBy=newest`
  );
  return response.data;
};

//search by author, no sorting
const getByAuthor = async (author, startIndex ) => {
  if (author !== "") {
    const response = await axios.get(`${baseUrl}${author}+inauthor:${author}&startIndex=${startIndex}`);
    return response.data;
  } else {
      return null
  }
};

//search by author, sort by relevance
const getByAuthorRel = async (author, startIndex ) => {
  if (author !== "") {
    const response = await axios.get(`${baseUrl}${author}+inauthor:${author}&startIndex=${startIndex}&orderBy=relevance`);
    return response.data;
  } else {
      return null
  }
};

//search by title, sort by date of publication
const getByAuthorDate = async (author, startIndex ) => {
  if (author !== "") {
    const response = await axios.get(`${baseUrl}${author}+inauthor:${author}&startIndex=${startIndex}&orderBy=newest`);
    return response.data;
  } else {
      return null
  }
};

//search by title, no sorting
const getByTitle = async (title, startIndex ) => {
  if (title !== "") {
    const response = await axios.get(`${baseUrl}${title}+intitle:${title}&startIndex=${startIndex}`);
    return response.data;
  } else {
      return null
  }
};

//search by title, sort by relevance
const getByTitleRel = async (title, startIndex ) => {
  if (title !== "") {
    const response = await axios.get(`${baseUrl}${title}+intitle:${title}&startIndex=${startIndex}&orderBy=relevance`);
    return response.data;
  } else {
      return null
  }
};

//search by title, sort by date of publication
const getByTitleDate = async (title, startIndex ) => {
  if (title !== "") {
    const response = await axios.get(`${baseUrl}${title}+intitle:${title}&startIndex=${startIndex}&orderBy=newest`);
    return response.data;
  } else {
      return null
  }
};


export default {
  getByEverything,
  getAndSortByRel,
  getAndSortByDate,
  getByAuthor,
  getByTitle,
  getByAuthorRel,
  getByTitleRel,
  getByAuthorDate,
  getByTitleDate
};