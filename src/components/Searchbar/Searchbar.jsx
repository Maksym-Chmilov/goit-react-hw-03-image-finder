import { Component } from 'react';
import propTypes from 'prop-types';
import {
  SearchbarBox,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    input: '',
  };
  handleChange = e => {
    this.setState({
      input: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.clickSubmit(this.state.input);
  };

  render() {
    return (
      <SearchbarBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarBox>
    );
  }
}

Searchbar.propTypes = {
  clickSubmit: propTypes.func.isRequired,
};
