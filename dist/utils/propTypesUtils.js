/**
 * Returns the passed target PropType (targetType) if the conditionFn returns true
 * when called with the props object.
 * If the conditional is false and the associated prop is not included, raise an error,
 * giving the provided filterString as the explanation for the failure.
 * @param {func} targetType - target PropType method
 * @param {func} isRequiredFn - function taking the props object and returning whether or
 *   not the associated prop should be required
 * @param {string} filterString - string explanation of the isRequiredFn condition for error
 *   messages.
 * @return {func} - PropType based on targetType that is required if conditionFn returns true
 *   when called with the props object.
 */
export var customPropTypeRequirement = function customPropTypeRequirement(targetType, conditionFn, filterString) {
  return function (props, propName, componentName) {
    if (conditionFn(props) && props[propName] === undefined) {
      return new Error("".concat(componentName, ": ").concat(propName, " is required when ").concat(filterString));
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return targetType.apply(void 0, [props, propName, componentName].concat(rest));
  };
};
/**
 * Returns a PropType entry with the given propType that is required if otherPropName
 * is truthy.
 * @param {func} propType - target PropType
 * @param {string} otherPropName - string name for prop that, if true, marks the
 *   associated prop as required
 * @return {func} - PropType based on propType that is required if otherPropName is
 *   set to true.
 */

export var requiredWhen = function requiredWhen(propType, otherPropName) {
  return customPropTypeRequirement(propType, function (props) {
    return props[otherPropName] === true;
  }, "".concat(otherPropName, " is truthy"));
};
/**
 * Returns a PropType entry with the given propType that is required if otherPropName
 * is false-y.
 * @param {func} propType - target PropType
 * @param {string} otherPropName - string name for prop that, if false-y, marks the
 *   associated prop as required
 * @return {func} - PropType based on propType that is required if otherPropName is
*    false-y
 */

export var requiredWhenNot = function requiredWhenNot(propType, otherPropName) {
  return customPropTypeRequirement(propType, function (props) {
    return !props[otherPropName];
  }, "not ".concat(otherPropName));
};
//# sourceMappingURL=propTypesUtils.js.map