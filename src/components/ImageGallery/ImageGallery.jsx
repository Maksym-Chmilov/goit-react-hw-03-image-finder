import {Component} from 'react';
import { GalleryList } from './ImageGallery.styled';
import propTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export class ImageGallery extends Component {
  handleImageClick = (e) => {
     this.props.clickImage(e.target.id)
  }
  render() {
    const { images } = this.props;
    return (
      <GalleryList onClick={this.handleImageClick}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              id={image.id}
              key={image.id}
              smallFoto={image.webformatURL}
              largeFoto={image.largeImageURL}
              alt={image.tags}
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
      id: propTypes.number,
      key: propTypes.number,
      smallFoto: propTypes.string,
      largeFoto: propTypes.string,
      alt: propTypes.string,
    })
  ),
  clickImage: propTypes.func.isRequired,
};

