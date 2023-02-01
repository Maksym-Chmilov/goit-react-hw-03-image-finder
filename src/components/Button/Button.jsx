import {Component} from 'react';
import propTypes from 'prop-types';
import { LoadmoreBox, LoadMoreBtn } from './Button.styled';

export class Button extends Component {

    handleLoadMore = (e) => {
    this.props.clickMore(e)
}

  render() {
    return (
      <LoadmoreBox>
            <LoadMoreBtn
            onClick={() => this.handleLoadMore()} >Load more</LoadMoreBtn>
      </LoadmoreBox>
    );
  }
}

Button.propTypes = {
  clickMore: propTypes.func.isRequired,
};
