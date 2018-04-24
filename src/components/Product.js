import React from 'react';
import PropTypes from 'prop-types';

function checkWeight(props, propName){
	let weight = props[propName]

	if (weight === undefined) {
		return new Error('weight is required')
	} else if (isNaN(weight)) {
		return new Error('weight must be a number')
	} else if (typeof(weight) === 'number') {
		return (weight >= 80 && weight <= 300) ? null : new Error('weight out of range')
	}
}

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: checkWeight
}

Product.defaultProps = { hasWatermark: false }
