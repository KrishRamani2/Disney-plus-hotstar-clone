import React, { useState } from 'react';
import styled from 'styled-components';

const FancySearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <FancyForm onSubmit={handleSubmit}>
      <FancyInput
        type="text"
        placeholder="🔍 Search movies..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <FancyButton type="submit">Search</FancyButton>
    </FancyForm>
  );
};

export default FancySearchBar;

const FancyForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  border: 2px solid #0071eb;
  border-radius: 10px;
  overflow: hidden;
`;

const FancyInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
`;

const FancyButton = styled.button`
  background-color: #0071eb;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 0 10px 10px 0;
`;
