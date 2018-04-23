import React from 'react'
import PropTypes from 'prop-types';

// Code Product Component Here
// In the components/Product.js file, create a Product React component.
class Product extends React.Component{
  render(){
    return(

      <div className="product">
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark ? "Yes" : "No"}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
        // <li>this.props.}</li>
      </div>
    )
  }
}
Product.defaultProps = { hasWatermark: false}
// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!
let weightCheck = createChainableTypeChecker(weightChecker);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  // weight: PropTypes.number.isRequired.weightCheck
  weight: weightCheck.isRequired
}
export default Product;
//REMEMEBER INSTALL npm prop

//https://www.ian-thomas.net/custom-proptype-validation-with-react/
function weightChecker(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
      if (value >= 80 && value <= 300){ return null}
         return  new Error(propName + ' in ' + componentName + " is not in range 80 to 300");
        // return value.length <= 140 ? null : new Error(propName + ' in ' + componentName + " is longer than 140 characters");
    }
    else {
        return new Error(propName + ' in ' + componentName + " is not a number")
    }
  }
  // assume all ok
  return null;
  // return new Error(propName + ' in ' + componentName + " is not a number")
}


function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location) {
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error(
          ("Required " + locationName + " `" + propName + "` was not specified in ") +
          ("`" + componentName + "`.")
        );
      }
      return null;
    } else {
      return validate(props, propName, componentName, location);
    }
  }

  let chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
