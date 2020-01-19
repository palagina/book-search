import React, { useState } from "react";
import booksService from "./services/books";
import BookList from "./components/BookList";
import Search from "./components/Search";
import { Container, Header} from "semantic-ui-react"

const App = () => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("");
  const [sort, setSort] = useState("");
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const pageChange = async (e, pageInfo) => {
    let startIndex;
    let activePage = pageInfo.activePage
    if (activePage===0) {
      activePage = 1
      startIndex = 0
    } else {
      startIndex = activePage*20-19
    }
    await doSearch(startIndex)
  };

  const setSearchDetails = async (startIndex) => {
    switch (searchType) {
      case "author": 
        switch(sort){
          case "relevance": return await booksService.getByAuthorRel(search, startIndex);
          case "date": return await booksService.getByAuthorDate(search, startIndex);
          default: return await booksService.getByAuthor(search, startIndex);
        }
      case "title": {
        switch(sort){
          case "relevance": return await booksService.getByTitleRel(search, startIndex);
          case "date": return await booksService.getByTitleDate(search, startIndex);
          default: return await booksService.getByTitle(search, startIndex);
        }
      }
      default: {
        switch(sort){
          case "relevance": return await booksService.getAndSortByRel(search, startIndex);
          case "date": return await booksService.getAndSortByDate(search, startIndex);
          default: return await booksService.getByEverything(search, startIndex);
        }
      }
    }
  }

  const doSearch = async (startIndex) => {
    if (isNaN(startIndex)){
      startIndex = 0
    }
    const foundBooks = await setSearchDetails(startIndex)
    setBooks(foundBooks ? foundBooks.items : null )
    if (foundBooks && (totalPages===0 || foundBooks.totalItems<totalPages*20)) {
      const totalItems = await foundBooks.totalItems;
      const totalPages = Math.ceil(totalItems / 20);
      setTotalPages(totalPages);
    }
  };

  return (
    <Container>
      <Header as="h1">Book Search</Header>
      <Container>
        The book search can be performed according to the author or the title of the book.<br></br> 
        The sorting is done by the date of publication or the relevance to the search word.
        <br></br> 
        <br></br> 
      </Container>
      <Search
        search={search}
        searchType={searchType}
        doSearch={doSearch}
        setSearchType={setSearchType}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />
      <BookList books={books} totalPages={totalPages} pageChange={pageChange} />
    </Container>
  );
};

export default App;