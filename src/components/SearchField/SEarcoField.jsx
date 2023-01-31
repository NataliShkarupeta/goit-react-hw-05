import { FormSearch } from 'pages/Movies/Movies.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchField = props => {
  const [word, setWord] = useState('');


  const searchWord = e => {
    setWord(e.target.value);
  };

  const onSearch = e => {
    e.preventDefault();
    props.searchWord(word);
  };


  return (
    <FormSearch onSubmit={onSearch}>
      <input type="text" onChange={searchWord} value={word} />
      <button type="submit">Search</button>
    </FormSearch>
  );
};


SearchField.propTypes = {
  searchWord:PropTypes.func.isRequired,
};