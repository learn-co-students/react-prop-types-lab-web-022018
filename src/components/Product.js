import React from 'react'
class Product extends React.Component{
  render(){
    return(
    <div>
      <li>{this.props.name}</li>
      <li>{this.props.producer}</li>
      <li>{this.props.hasWatermark}</li>
      <li>{this.props.color}</li>
      <li>{this.props.weight}</li>
    </div>
    )
  }
}
Product.defaultProps ={
  hasWatermark: false
}

Product.propTypes ={
  name: propTypes.string.isRequired,
  producer: propTypes.string,
  hasWatermark: propTypes.bool,
  color: propTypes.string.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

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
  }

}

export default Product

// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
