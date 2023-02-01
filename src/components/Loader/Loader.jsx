import propTypes from 'prop-types';
import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="200"
      width="200"
      ariaLabel="vortex-loading"
      wrapperStyle={{ position: 'absolute', top: '45%', left: '45%' }}
      wrapperClass="vortex-wrapper"
      colors={['blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow']}
    />
  );
};

Loader.propTypes = {
  color: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired,
  size: propTypes.number.isRequired,
};
