// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {
  render() {

  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]

    if (weight === undefined || isNaN(weight)) {
      return "The weight prop is required"
    }

    if (weight < 80 || weight > 300) {
      return "The weight must be between 80 and 300"
    }
  }
}

Product.defaultProps = {
  hasWatermark: false
}

export default Product;


// Order.propTypes = {
//   cone: PropTypes.bool,
//   size: PropTypes.string,
//   scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
//   orderInfo: PropTypes.shape({
//     customerName: PropTypes.string.isRequired,
//     orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
//   }).isRequired
// };
