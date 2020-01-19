import React from "react";
import { Container, Button, Form, Select } from "semantic-ui-react"

const Search = props => {
  const {search, searchType, setSearchType, setSearch, doSearch, sort, setSort} = props;

  const searchOptions = [
    { key: 1, value: 'author', text: 'author' },
    { key: 2, value: 'title', text: 'title' },
  ]
  const sortOptions = [
    { key: 1, value: 'relevance', text: 'relevance' },
    { key: 2, value: 'date', text: 'date' },
  ]

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchTypeChange = (e , { value }) => {
    setSearchType(value);
  };

  const handleSortChange = (e , { value }) => {
    setSort(value);
  };

  return (
    <Container>
      <Form onSubmit={doSearch} id="searchForm">
        <Form.Field>
          <Select
            placeholder="Search by"
            options={searchOptions}
            onChange={handleSearchTypeChange}
            value={searchType}
          />
        </Form.Field>
        <Form.Field>
          <Select
            placeholder="Sort By"
            options={sortOptions}
            onChange={handleSortChange}
            value={sort}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Enter your search word"
            value={search}
            onChange={handleSearchChange}
          />
        </Form.Field>
        <Button type="submit" color="violet">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default Search;