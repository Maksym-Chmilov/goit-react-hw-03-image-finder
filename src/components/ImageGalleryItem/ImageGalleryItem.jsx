import propTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallFoto, largeFoto, alt }) => {
  return (
    <GalleryItem>
      <GalleryItemImg
        src={smallFoto}
        alt={alt}
        id={largeFoto}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  smallFoto: propTypes.string.isRequired,
  largeFoto: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};
