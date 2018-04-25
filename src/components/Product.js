// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component {
  render (){
    const {name, producer, hasWatermark, color, weight} = this.props
    return (
      <div>
        <h1> {name} </h1>
        <p> {producer} </p>
        <p> {hasWatermark} </p>
        <p> {color} </p>
        <p> {weight} </p>
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
  weight: (props, propName, componentName) => {
    const weight = props[propName]
    if (!weight) {
      return new Error('no prop')
    } else if (isNaN(weight)) {
      return new Error('NaN')
    } else if (!(weight > 80 && weight < 300)) {
      return new Error('out of range')
    }
  }
}


export default Product
