var _excluded = ["defaultMessage", "isLink", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/index';
import ModalPopup from '../Modal/ModalPopup';
import useToggle from '../hooks/useToggle';
import Menu from '.';
import { ExpandMore } from '../../icons';

var SelectMenu = function SelectMenu(_ref) {
  var defaultMessage = _ref.defaultMessage,
      isLink = _ref.isLink,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var triggerTarget = React.useRef(null);
  var itemsCollection = React.useMemo(function () {
    return Array.from({
      length: children.length
    }).map(function () {
      return /*#__PURE__*/React.createRef();
    });
  }, []);
  var className = classNames(props.className, 'pgn__menu-select');

  function defaultIndex() {
    for (var i = 0; i < children.length; i++) {
      if (children[i].props && children[i].props.defaultSelected) {
        return i;
      }
    }

    return undefined;
  }

  var _useState = useState(defaultIndex()),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useToggle = useToggle(false),
      _useToggle2 = _slicedToArray(_useToggle, 3),
      isOpen = _useToggle2[0],
      open = _useToggle2[1],
      close = _useToggle2[2];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      vertOffset = _useState4[0],
      setOffset = _useState4[1];

  var createMenuItems = function createMenuItems() {
    var elements = [];
    React.Children.map(children, function (child, index) {
      var newProps = {
        onClick: function onClick(e) {
          if (child.props.onClick) {
            child.props.onClick(e);
          }

          setSelected(index);
          close();
          triggerTarget.current.focus();
        },
        id: "".concat(index.toString(), "_pgn__menu-item"),
        role: 'link'
      };

      if (selected === index) {
        newProps['aria-current'] = 'page';
      }

      elements.push( /*#__PURE__*/React.cloneElement(child, newProps));
    });
    return elements;
  };

  var link = isLink; // allow inline link styling

  var prevOpenRef = React.useRef();
  useEffect(function () {
    // logic to always center the selected item.
    if (isOpen && selected) {
      var numItems = children.length;
      var boundingRect = itemsCollection[selected].current.parentElement.getBoundingClientRect();

      if (boundingRect.bottom >= window.innerHeight - 150 || boundingRect.top <= 150) {
        setOffset(0); // if too close to the edge, don't do centering fancyness
      } else {
        switch (true) {
          case numItems < 6:
            {
              // on small lists, center each element
              setOffset(selected * -48);
              break;
            }

          case selected < 2:
            {
              // On first two elements, set offset based on position
              setOffset(selected * -48);
              break;
            }

          case numItems - selected < 3:
            {
              // on n-1 and n-2 elelements, set offset to put most modal elements on top.
              setOffset((6 - (numItems - selected)) * -48);
              break;
            }

          case selected > 1 && numItems - selected > 2:
            {
              // on "middle elements", set offset to center of block and scroll to center
              itemsCollection[selected].current.children[0].scrollIntoView({
                block: 'center'
              });
              setOffset(2 * -48);
              break;
            }

          default:
            break;
        }
      }
    } // set focus on open


    if (isOpen && !prevOpenRef.current && selected) {
      itemsCollection[selected].current.children[0].focus({
        preventScroll: defaultIndex() === selected
      });
    }

    prevOpenRef.current = isOpen;
  }, [isOpen]);
  return /*#__PURE__*/React.createElement(className, _objectSpread(_objectSpread({}, props), {}, {
    className: className
  }), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    "aria-haspopup": "true",
    "aria-expanded": isOpen,
    ref: triggerTarget,
    className: "pgn__menu-select-trigger-btn",
    variant: link ? 'link' : 'tertiary',
    iconAfter: link ? undefined : ExpandMore,
    onClick: open
  }, selected !== undefined && children[selected] ? children[selected].props.children : defaultMessage), /*#__PURE__*/React.createElement("div", {
    className: "pgn__menu-select-popup"
  }, /*#__PURE__*/React.createElement(ModalPopup, {
    placement: "right-start",
    positionRef: triggerTarget,
    isOpen: isOpen,
    onClose: close,
    modifiers: [{
      name: 'flip',
      enabled: true
    }, {
      name: 'offset',
      options: {
        enabled: true,
        offset: [vertOffset, triggerTarget.current ? -1 * triggerTarget.current.offsetWidth : 0]
      }
    }]
  }, /*#__PURE__*/React.createElement(Menu, {
    "aria-label": "Select Menu"
  }, createMenuItems().map(function (child, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: child.props.id,
      ref: itemsCollection[index]
    }, child);
  }))))));
};

SelectMenu.propTypes = {
  /** String that is displayed for default value of the ``SelectMenu`` */
  defaultMessage: PropTypes.string,

  /** Displays chosen value of the ``SelectMenu`` as a link */
  isLink: PropTypes.bool,

  /** Specifies the content of the ``SelectMenu`` */
  children: PropTypes.node.isRequired,

  /** Specifies class name to append to the base element */
  className: PropTypes.string
};
SelectMenu.defaultProps = {
  defaultMessage: 'Select...',
  isLink: false,
  className: undefined
};
export default SelectMenu;
//# sourceMappingURL=SelectMenu.js.map