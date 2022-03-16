var _excluded = ["to", "cc", "bcc", "subject", "body", "children", "target", "onClick", "externalLink", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable max-len */
import React from 'react'; // eslint-disable-line no-unused-vars

import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';
import isRequiredIf from 'react-proptype-conditional-require';
import mailtoLink from 'mailto-link';
import classNames from 'classnames';
import Hyperlink from '../Hyperlink';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';
var MailtoLink = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var to = props.to,
      cc = props.cc,
      bcc = props.bcc,
      subject = props.subject,
      body = props.body,
      children = props.children,
      target = props.target,
      onClick = props.onClick,
      externalLink = props.externalLink,
      className = props.className,
      attrs = _objectWithoutProperties(props, _excluded);

  var externalLinkAlternativeText = externalLink.alternativeText;
  var externalLinkTitle = externalLink.title;
  var destination = mailtoLink({
    to: to,
    cc: cc,
    bcc: bcc,
    subject: subject,
    body: body
  });

  var hyperlinkProps = _objectSpread({
    destination: destination,
    target: target,
    onClick: onClick,
    externalLinkAlternativeText: externalLinkAlternativeText,
    externalLinkTitle: externalLinkTitle
  }, attrs);

  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: classNames('pgn__mailtolink', className)
  }, /*#__PURE__*/React.createElement(Hyperlink, hyperlinkProps, children));
});
MailtoLink.defaultProps = {
  to: [],
  cc: [],
  bcc: [],
  subject: '',
  body: '',
  target: '_self',
  onClick: null,
  externalLink: {
    alternativeText: 'in a new tab',
    title: 'Opens in a new tab'
  },
  className: undefined
};
MailtoLink.propTypes = {
  /** Content of the ``MailToLink`` */
  children: PropTypes.node.isRequired,

  /** Custom class names for the ``MailToLink`` */
  className: PropTypes.string,

  /** Specifies the email's recipients */
  to: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),

  /** Specifies the email's carbon copy recipients */
  cc: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),

  /** Specifies the email's blind carbon copy recipients */
  bcc: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),

  /** Specifies the email's subject */
  subject: PropTypes.string,

  /** Specifies the email's body */
  body: PropTypes.string,

  /** Specifies where the link should open. The default behavior is `_self`, which means that the URL will be loaded into the same browsing context as the current one */
  target: PropTypes.string,

  /** Specifies the callback function when the link is clicked */
  onClick: PropTypes.func,

  /** The object that contains the `alternativeText` and `title` fields which specify the text and title for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLink: PropTypes.shape({
    alternativeText: isRequiredIf(PropTypes.string, function (props) {
      return props.target === '_blank';
    }),
    title: isRequiredIf(PropTypes.string, function (props) {
      return props.target === '_blank';
    })
  })
};
export default withDeprecatedProps(MailtoLink, 'MailtoLink', {
  content: {
    deprType: DEPR_TYPES.MOVED,
    newName: 'children'
  }
});
//# sourceMappingURL=index.js.map