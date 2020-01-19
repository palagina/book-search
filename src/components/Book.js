import React, { useState } from "react";
import { List, Image, Header, Grid, Container } from "semantic-ui-react"
import '../styles/book.css'

const Book = (props) => {
  const emptyBook = {
    volumeInfo: {
      title: "No title available",
      author: "No author available",
      imageUrl: "No image",
      description: "No description available",
      date: "Date of publication unknown"
    }
  }
  const book = props.book ? props.book : emptyBook
  const title = book.volumeInfo.title || emptyBook.title
  const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : emptyBook.author;
  const imageUrl = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : emptyBook.imageUrl
  const description = book.volumeInfo.description ? book.volumeInfo.description : emptyBook.description ;
  const date = book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : emptyBook.date ;

  const [visible, setVisible] = useState(false);
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const ExtendedInfo = () => {
    return (
      <Container style={showWhenVisible} className="extendedInfo">
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={imageUrl} size="small" />
            </Grid.Column>
            <Grid.Column width={13}>
              <Container>{description}</Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

  return (
    <List.Item className="listItem" as="div">
      <Container onClick={toggleVisibility} className="listItemContent">
        <Header size="large">{title}</Header>
        <Container>{author}</Container>
        <Container>{date}</Container>
      </Container>
      <ExtendedInfo/>
    </List.Item>
  );
};

export default Book;