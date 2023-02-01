import { Component } from 'react';
import propTypes from 'prop-types';
import { ModalBox, ModalImg, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEscape);
  }

  handlePressEscape = event => {
    this.props.clickModal(event.code);
  };
  render() {
    const { imgUrl } = this.props;
    return (
      <Overlay onClick={this.handlePressEscape}>
        <ModalBox>
          <ModalImg src={imgUrl} alt="" onClick={e => e.stopPropagation()} />
        </ModalBox>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  imgUrl: propTypes.string.isRequired,
  clickModal: propTypes.func.isRequired,
};
