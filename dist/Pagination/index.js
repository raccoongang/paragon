function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable max-len */
import { between } from 'airbnb-prop-types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import MediaQuery from 'react-responsive';
import { Button } from '..';
import Icon from '../Icon';
import breakpoints from '../utils/breakpoints';
import newId from '../utils/newId';
import { ELLIPSIS } from './constants';
import getPaginationRange from './getPaginationRange';

var Pagination = /*#__PURE__*/function (_React$Component) {
  _inherits(Pagination, _React$Component);

  var _super = _createSuper(Pagination);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this, props);
    _this.previousButtonRef = null;
    _this.nextButtonRef = null;
    _this.pageRefs = {};
    _this.state = {
      currentPage: _this.props.currentPage,
      pageButtonSelected: false
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // Update only when the props and currentPage state changes to avoid re-render
      // if only the pageButtonSelected state is changed.
      return nextProps !== this.props || nextState.currentPage !== this.state.currentPage;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$state = this.state,
          currentPage = _this$state.currentPage,
          pageButtonSelected = _this$state.pageButtonSelected;
      var currentPageRef = this.pageRefs[currentPage];

      if (currentPageRef && pageButtonSelected) {
        currentPageRef.focus();
        this.setPageButtonSelectedState(false);
      }
      /* eslint-disable react/no-did-update-set-state */


      if (this.state.currentPage === prevState.currentPage && (this.props.currentPage !== prevProps.currentPage || this.props.currentPage !== this.state.currentPage)) {
        this.setState({
          currentPage: this.props.currentPage
        });
      }
    }
  }, {
    key: "handlePageSelect",
    value: function handlePageSelect(page) {
      if (page !== this.state.currentPage) {
        this.setState({
          currentPage: page,
          pageButtonSelected: true
        });
        this.props.onPageSelect(page);
      }
    }
  }, {
    key: "handlePreviousNextButtonClick",
    value: function handlePreviousNextButtonClick(page) {
      var pageCount = this.props.pageCount;

      if (page === 1) {
        this.nextButtonRef.focus();
      } else if (page === pageCount) {
        this.previousButtonRef.focus();
      }

      this.setState({
        currentPage: page
      });
      this.props.onPageSelect(page);
    }
  }, {
    key: "setPageButtonSelectedState",
    value: function setPageButtonSelectedState(value) {
      this.setState({
        pageButtonSelected: value
      });
    }
  }, {
    key: "renderEllipsisButton",
    value: function renderEllipsisButton() {
      return /*#__PURE__*/React.createElement("li", {
        className: classNames(['page-item', 'disabled']),
        key: newId('pagination-ellipsis-')
      }, /*#__PURE__*/React.createElement("span", {
        className: classNames(['btn', 'page-link', 'ml-0', 'border-0'])
      }, "..."));
    }
  }, {
    key: "renderPageButton",
    value: function renderPageButton(page) {
      var _this2 = this;

      var buttonLabels = this.props.buttonLabels;
      var active = page === this.state.currentPage || null;
      var ariaLabel = "".concat(buttonLabels.page, " ").concat(page);

      if (active) {
        ariaLabel += ", ".concat(buttonLabels.currentPage);
      }

      return /*#__PURE__*/React.createElement("li", {
        className: classNames(['page-item', {
          active: active
        }]),
        key: page
      }, /*#__PURE__*/React.createElement(Button.Deprecated, {
        className: "page-link",
        "aria-label": ariaLabel,
        inputRef: function inputRef(element) {
          _this2.pageRefs[page] = element;
        },
        onClick: function onClick() {
          _this2.handlePageSelect(page);
        }
      }, page.toString()));
    }
  }, {
    key: "renderPageOfCountButton",
    value: function renderPageOfCountButton() {
      var currentPage = this.state.currentPage;
      var _this$props = this.props,
          pageCount = _this$props.pageCount,
          buttonLabels = _this$props.buttonLabels;
      var ariaLabel = "".concat(buttonLabels.page, " ").concat(currentPage, ", ").concat(buttonLabels.currentPage, ", ").concat(buttonLabels.pageOfCount, " ").concat(pageCount);
      var label = /*#__PURE__*/React.createElement("span", null, "".concat(currentPage, " "), buttonLabels.pageOfCount, " ".concat(pageCount));
      return /*#__PURE__*/React.createElement("li", {
        className: classNames(['page-item', 'disabled']),
        key: currentPage
      }, /*#__PURE__*/React.createElement("span", {
        className: classNames(['btn', 'page-link', 'mx-2', 'border-0']),
        "aria-label": ariaLabel
      }, label));
    }
  }, {
    key: "renderPreviousButton",
    value: function renderPreviousButton() {
      var _this3 = this;

      var _this$props2 = this.props,
          buttonLabels = _this$props2.buttonLabels,
          icons = _this$props2.icons;
      var currentPage = this.state.currentPage;
      var isFirstPage = currentPage === 1;
      var previousPage = isFirstPage ? null : currentPage - 1;
      var ariaLabel = "".concat(buttonLabels.previous);

      if (previousPage) {
        ariaLabel += ", ".concat(buttonLabels.page, " ").concat(previousPage);
      }

      return /*#__PURE__*/React.createElement("li", {
        className: classNames('page-item', {
          disabled: isFirstPage
        })
      }, /*#__PURE__*/React.createElement(Button.Deprecated, {
        className: "previous page-link",
        "aria-label": ariaLabel,
        tabIndex: isFirstPage ? '-1' : undefined,
        onClick: function onClick() {
          _this3.handlePreviousNextButtonClick(previousPage);
        },
        inputRef: function inputRef(element) {
          _this3.previousButtonRef = element;
        },
        disabled: isFirstPage
      }, /*#__PURE__*/React.createElement("div", null, icons.leftIcon, buttonLabels.previous)));
    }
  }, {
    key: "renderNextButton",
    value: function renderNextButton() {
      var _this4 = this;

      var _this$props3 = this.props,
          buttonLabels = _this$props3.buttonLabels,
          pageCount = _this$props3.pageCount,
          icons = _this$props3.icons;
      var currentPage = this.state.currentPage;
      var isLastPage = currentPage === pageCount;
      var nextPage = isLastPage ? null : currentPage + 1;
      var ariaLabel = "".concat(buttonLabels.next);

      if (nextPage) {
        ariaLabel += ", ".concat(buttonLabels.page, " ").concat(nextPage);
      }

      return /*#__PURE__*/React.createElement("li", {
        className: classNames('page-item', {
          disabled: isLastPage
        })
      }, /*#__PURE__*/React.createElement(Button.Deprecated, {
        className: "next page-link",
        "aria-label": ariaLabel,
        tabIndex: isLastPage ? '-1' : undefined,
        onClick: function onClick() {
          _this4.handlePreviousNextButtonClick(nextPage);
        },
        inputRef: function inputRef(element) {
          _this4.nextButtonRef = element;
        },
        disabled: isLastPage
      }, /*#__PURE__*/React.createElement("div", null, buttonLabels.next, icons.rightIcon)));
    }
  }, {
    key: "renderScreenReaderSection",
    value: function renderScreenReaderSection() {
      var currentPage = this.state.currentPage;
      var _this$props4 = this.props,
          buttonLabels = _this$props4.buttonLabels,
          pageCount = _this$props4.pageCount;
      var description = "".concat(buttonLabels.page, " ").concat(currentPage, ", ").concat(buttonLabels.currentPage, ", ").concat(buttonLabels.pageOfCount, " ").concat(pageCount);
      return /*#__PURE__*/React.createElement("div", {
        className: "sr-only",
        "aria-live": "polite",
        "aria-relevant": "text",
        "aria-atomic": true
      }, description);
    }
  }, {
    key: "renderPageButtons",
    value: function renderPageButtons() {
      var _this5 = this;

      var currentPage = this.state.currentPage;
      var _this$props5 = this.props,
          pageCount = _this$props5.pageCount,
          maxPagesDisplayed = _this$props5.maxPagesDisplayed;
      var pages = getPaginationRange({
        currentIndex: currentPage,
        count: pageCount,
        length: maxPagesDisplayed,
        requireFirstAndLastPages: true
      });
      return pages.map(function (pageIndex) {
        if (pageIndex === ELLIPSIS) {
          return _this5.renderEllipsisButton();
        }

        return _this5.renderPageButton(pageIndex + 1);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("nav", {
        "aria-label": this.props.paginationLabel,
        className: this.props.className
      }, this.renderScreenReaderSection(), /*#__PURE__*/React.createElement("ul", {
        className: "pagination"
      }, this.renderPreviousButton(), /*#__PURE__*/React.createElement(MediaQuery, {
        maxWidth: breakpoints.extraSmall.maxWidth
      }, this.renderPageOfCountButton()), /*#__PURE__*/React.createElement(MediaQuery, {
        minWidth: breakpoints.small.minWidth
      }, this.renderPageButtons()), this.renderNextButton()));
    }
  }]);

  return Pagination;
}(React.Component);

Pagination.propTypes = {
  /**
   * Specifies a callback function that is executed when the
   * user selects a page button or the `Previous`/`Next` buttons. For example:
   *
   * ```jsx
   *  <Pagination onPageSelect={(pageNumber) => { console.log(pageNumber); } />
   * ```
   */
  onPageSelect: PropTypes.func.isRequired,

  /** Specifies the total number of pages in the `Pagination` component. */
  pageCount: PropTypes.number.isRequired,

  /** Specifies the `aria-label` for the `<nav>` element that wraps the pagination button list. */
  paginationLabel: PropTypes.string.isRequired,

  /**
   * Specifies the labels to use for the `Previous`/`Next`
   * buttons as well as the various parts of `aria-label`
   * on the page buttons for accessibility. All button labels
   * accept both string or elements. The button label options are as follows:
   *
   * `previous`: Text for the `Previous` button;
   *
   * `next`: Text for the `Next` button;
   *
   * `page`: Text in the `aria-label` on page buttons to describe the button (e.g., "**Page** 1");
   *
   * `currentPage`: Text to depict the selected page in the `aria-label`
   * on page buttons (e.g., "Page 1, **Current Page**");
   *
   * `pageOfCount`: Text that separates the current page and total page count
   * for the mobile UI (e.g., "Page 1 **of** 20").
   *
   * The default is:
   * ```javascript
   * {
   *   previous: 'Previous',
   *   next: 'Next',
   *   page: 'Page',
   *   currentPage: 'Current Page',
   *   pageOfCount: 'of',
   * }
   * ```
   */
  buttonLabels: PropTypes.shape({
    previous: PropTypes.string,
    next: PropTypes.string,
    page: PropTypes.string,
    currentPage: PropTypes.string,
    pageOfCount: PropTypes.string
  }),

  /** Specifies any class name(s) for the `Pagination` component. The default is an empty string. */
  className: PropTypes.string,

  /** specifies the page that the `Pagination` component will automatically select. The default is `1`. */
  currentPage: PropTypes.number,

  /**
   * Specifies the number of page buttons to display in between the `Previous`
   * and `Next` buttons. This number also includes any ellipses in the total count.
   * Also, to ensure that at least one clickable page button is shown when both ellipses
   * are displayed, this value must be greater than `4`. The default is `7`.
   */
  maxPagesDisplayed: between({
    gt: 4
  }),

  /**
   * Specifies icons used to indicate previous and next page. Can be an element,
   * string, symbol, etc. Default is chevrons rendered using fa-css.
   */
  icons: PropTypes.shape({
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node
  })
};
Pagination.defaultProps = {
  icons: {
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      className: "fa fa-chevron-left mr-2"
    }),
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      className: "fa fa-chevron-right ml-2"
    })
  },
  buttonLabels: {
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    currentPage: 'Current Page',
    pageOfCount: 'of'
  },
  className: undefined,
  currentPage: 1,
  maxPagesDisplayed: 7
};
export default Pagination;
//# sourceMappingURL=index.js.map