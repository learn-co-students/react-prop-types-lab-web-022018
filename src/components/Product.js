// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
    <div>Product</div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined || isNaN(weight)) {
      return 'The `weight` prop is required.'
    }

    if (weight < 80 || weight > 300) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
}

Product.defaultProps = {
  hasWatermark: false
}

export default Product;
