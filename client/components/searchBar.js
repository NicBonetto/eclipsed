import React, { Component } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  z-index: 3;
  background: transparent;
  font-size: 15px;
  letter-spacing: 0.7px;
  border: 0;
  border-bottom: 1px white;
  outline: none;
  padding: 8px 0;
  font-size: 16px;
  color: white;

  &::-webkit-input-placeholder {
    text-align: center;
  }
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.searchAutocomplete = debounce(async term => {
      const result = await fetch(`/spotify/autocomplete?term=${this.state.inputValue}`);
      return result.json();
    }, 300);
  }

  async handleSubmit (event) {
    event.preventDefault();
    const result = await fetch(`/spotify/artist?artist=${this.state.inputValue}`);
    const artist = await result.json();
    console.log(artist)
  }

  async handleChange (event) {
    event.persist();
    this.setState({ inputValue: event.target.value });
    const suggestions = await this.searchAutocomplete(this.state.inputValue);
    console.log(suggestions);
  } 

  render () {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Input placeholder="Artist name" autofocus="true" value={ this.state.inputValue } onChange={ this.handleChange.bind(this) }/>
        </form>
      </Wrapper>
    );
  }
}

export default SearchBar;