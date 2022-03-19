function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { newId } from '../utils';

var omitUndefinedProperties = function omitUndefinedProperties() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (value !== undefined) {
      acc[key] = value;
    }

    return acc;
  }, {});
};

var callAllHandlers = function callAllHandlers() {
  for (var _len = arguments.length, handlers = new Array(_len), _key = 0; _key < _len; _key++) {
    handlers[_key] = arguments[_key];
  }

  var unifiedEventHandler = function unifiedEventHandler(event) {
    handlers.filter(function (handler) {
      return typeof handler === 'function';
    }).forEach(function (handler) {
      return handler(event);
    });
  };

  return unifiedEventHandler;
};

var useHasValue = function useHasValue(_ref3) {
  var defaultValue = _ref3.defaultValue,
      value = _ref3.value;

  var _useState = useState(!!defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      hasUncontrolledValue = _useState2[0],
      setHasUncontrolledValue = _useState2[1];

  var hasValue = !!value || hasUncontrolledValue;

  var handleInputEvent = function handleInputEvent(e) {
    return setHasUncontrolledValue(e.target.value);
  };

  return [hasValue, handleInputEvent];
};

var useIdList = function useIdList(uniqueIdPrefix, initialList) {
  var _useState3 = useState(initialList || []),
      _useState4 = _slicedToArray(_useState3, 2),
      idList = _useState4[0],
      setIdList = _useState4[1];

  var addId = function addId(idToAdd) {
    setIdList(function (oldIdList) {
      return [].concat(_toConsumableArray(oldIdList), [idToAdd]);
    });
    return idToAdd;
  };

  var getNewId = function getNewId() {
    var idToAdd = newId("".concat(uniqueIdPrefix, "-"));
    return addId(idToAdd);
  };

  var removeId = function removeId(idToRemove) {
    setIdList(function (oldIdList) {
      return oldIdList.filter(function (id) {
        return id !== idToRemove;
      });
    });
  };

  var useRegisteredId = function useRegisteredId(explicitlyRegisteredId) {
    var _useState5 = useState(explicitlyRegisteredId),
        _useState6 = _slicedToArray(_useState5, 2),
        registeredId = _useState6[0],
        setRegisteredId = _useState6[1];

    useEffect(function () {
      if (explicitlyRegisteredId) {
        addId(explicitlyRegisteredId);
      } else if (!registeredId) {
        setRegisteredId(getNewId(uniqueIdPrefix));
      }

      return function () {
        return removeId(registeredId);
      };
    }, [registeredId]);
    return registeredId;
  };

  return [idList, useRegisteredId];
};

var mergeAttributeValues = function mergeAttributeValues() {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  var mergedValues = classNames(values);
  return mergedValues || undefined;
};

export { callAllHandlers, useHasValue, mergeAttributeValues, useIdList, omitUndefinedProperties };
//# sourceMappingURL=fieldUtils.js.map