// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    // console.log(props)
    return (
      <div className="Product">
        <h3>{this.props.name}</h3>
        <h3>{this.props.producer}</h3>
        <h3>{this.props.hasWatermark}</h3>
        <h3>{this.props.color}</h3>
        <h3>{this.props.weight}</h3>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    // if (weight===undefined || typeof weight!=="number" || weight < 80 || weight > 300) {
    //   return new Error('weight value is invalid')
    // }

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
  // weight: function(props, propName){
  //   const weight = props[propName];
  //   // if (props.weight===undefined){
  //   //       return new Error(
  //   //           'weight is invalid'
  //   //         )
  //   //   if (typeof props.weight!=="number"){
  //   //     return new Error(
  //   //         'weight is invalid'
  //   //       )
  //   //   }
  //   // }
  //   //
  //   // if (props.weight > 300 || props.weight < 80){
  //   //   return new Error(
  //   //       'weight is invalid'
  //   //     )
  //   // }
  //
  //   // console.log(typeof props.weight!=="number")
  //   // console.log(props.weight > 300 || props.weight < 80 || props.weight===undefined || typeof props.weight!=="number")
  //   if (props.weight > 300 || props.weight < 80 || props.weight===undefined || typeof props.weight!=="number") {
  //       return new Error(
  //           'weight is invalid'
  //         )
  //   }
  // }
}

export default Product;
