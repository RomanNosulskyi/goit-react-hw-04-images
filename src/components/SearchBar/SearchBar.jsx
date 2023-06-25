import React, { useState } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './SearchBar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchImg, setSearchImg] = useState('');

  const onInputChange = e => {
    setSearchImg(e.currentTarget.value.toLowerCase());
  };

  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit(searchImg);
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          onChange={onInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};

export default Searchbar;
