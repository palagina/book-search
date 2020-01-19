import React from "react";
import Book from "./Book";
import { Container, List, Pagination  } from "semantic-ui-react"
import '../styles/book.css'

const BookList = (props) => {
  const {totalPages, pageChange } = props
  const books = props.books

  const bookList = () => {
    if(!books) {
      return (
      <Container>
        <Pagination defaultActivePage={0} totalPages={totalPages} onPageChange={pageChange} />
        <Container>List is empty</Container>
      </Container>
   )}
    else if (books!==[] && books.length > 0) {
      return (
        <Container>
          <Pagination defaultActivePage={0} totalPages={totalPages} onPageChange={pageChange} />
          <List>
            {books.map((book, id) => (
              <Book book={book} key={id}/>
            ))}
          </List>
        </Container>
      );
    }
  };

  return (
    <Container>
      {bookList()}
    </Container>
  );
};

export default BookList;