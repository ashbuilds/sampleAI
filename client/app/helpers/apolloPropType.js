import { check } from 'graphql-anywhere';

function PropTypeError(message) {
  this.message = message;
  this.stack = '';
}
// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype = Error.prototype;

const apolloPropType = (apolloObject) => {
  const returnFunction = (props, propName, componentName) => {
    if (!props.data || !Object.prototype.hasOwnProperty.call(props.data, 'loading')) {
      return new PropTypeError(`No loading prop found in component ${componentName}`);
    }
    if (!props.data.loading) {
      try {
        check(apolloObject, props.data);
        return null;
      } catch (e) {
        return e;
      }
    }
    return null;
  };
  // hack so we can call .isRequired
  // to not encounter eslint react/require-default-props
  returnFunction.isRequired = returnFunction;
  return returnFunction;
};

export default apolloPropType;
