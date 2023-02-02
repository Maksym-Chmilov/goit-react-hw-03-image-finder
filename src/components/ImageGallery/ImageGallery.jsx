import { GalleryList } from './ImageGallery.styled';
import propTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

export class ImageGallery extends Component {
  handleImageClick = () => {
    this.props.clickImage();
  };

  render() {
    const { images, clickImage } = this.props;
    return (
      <GalleryList>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallPhoto={webformatURL}
              largePhoto={largeImageURL}
              alt={tags}
              clickImage={clickImage}
            />
          );
        })}
      </GalleryList>
    );
  }
}

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.number,
      smallPhoto: propTypes.string,
      largePhoto: propTypes.string,
      alt: propTypes.string,
    })
  ),
};
