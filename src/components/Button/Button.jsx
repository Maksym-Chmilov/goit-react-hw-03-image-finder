import { Component } from 'react';
import propTypes from 'prop-types';
import { LoadmoreBox, LoadMoreBtn } from './Button.styled';

export class Button extends Component {
  render() {
    return (
      <LoadmoreBox>
        <LoadMoreBtn onClick={this.props.clickMore}>Load more</LoadMoreBtn>
      </LoadmoreBox>
    );
  }
}

Button.propTypes = {
  clickMore: propTypes.func.isRequired,
};
