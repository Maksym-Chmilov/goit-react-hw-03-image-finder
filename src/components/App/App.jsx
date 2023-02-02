import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { AppBox } from './App.styled';
import { Loader } from 'components/Loader/Loader';
import { addFotoObj } from 'services/image-api';
import { Errors } from 'components/Errors/Errors';
import { Button } from 'components/Button/Button';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    inputSearch: 'random',
    response: [],
    loading: false,
    pageNumber: 1,
    button: false,
    modal: false,
    largeImageUrl: '',
    errorMessage: false,
    isLoading: false,
  };

  formSubmitHandler = input => {
    this.cleanState();

    this.setState({
      inputSearch: input,
    });

    if (this.state.inputSearch === '') {
      this.setState({
        inputSearch: 'random',
      });
    }
  };

  getFotos = async input => {
    this.setState({ loading: true });
    try {
      const fotoObj = await addFotoObj(input, this.state.pageNumber);

      if (this.state.response.length === 0) {
        this.setState({
          response: fotoObj,
          errorMessage: false,
          isLoading: false,
        });

        if (fotoObj.length === 0) {
          this.setState({
            errorMessage: true,
          });
        }
      } else {
        this.setState(prevState => ({
          response: [...prevState.response, ...fotoObj],
          isLoading: false,
        }));
      }

      if (fotoObj.length === 12) {
        this.setState({
          button: true,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  handleModal = event => {
    if (event === 'Escape' || event === undefined) {
      this.setState({ modal: false });
    }
  };

  onImageClick = largeImage => {
    this.setState({
      modal: true,
      largeImageUrl: largeImage,
    });
  };

  cleanState = () => {
    this.setState({
      response: [],
      pageNumber: 1,
      button: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { pageNumber, inputSearch } = this.state;

    if (
      prevState.pageNumber !== pageNumber ||
      prevState.inputSearch !== inputSearch
    ) {
      if (!this.state.isLoading) {
        this.getFotos(inputSearch);
      }
    }
  }

  render() {
    const { response, largeImageUrl, button, modal, errorMessage, isLoading } = this.state;
    return (
      <AppBox>
        <Searchbar clickSubmit={this.formSubmitHandler} />

        {isLoading && <Loader />}

        <ImageGallery images={response} clickImage={this.onImageClick} />

        {errorMessage && <Errors />}

        {button && <Button clickMore={this.loadMore} />}

        {modal && (
          <Modal clickModal={this.handleModal} imgUrl={largeImageUrl} />
        )}
      </AppBox>
    );
  }
}
