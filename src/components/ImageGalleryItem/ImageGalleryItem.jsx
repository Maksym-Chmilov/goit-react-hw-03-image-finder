import propTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  smallPhoto,
  largePhoto,
  alt,
  clickImage,
}) => {
  return (
    <GalleryItem onClick={() => clickImage(largePhoto)}>
      <GalleryItemImg src={smallPhoto} alt={alt} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  smallPhoto: propTypes.string.isRequired,
  largePhoto: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  clickImage: propTypes.func.isRequired,
};
