webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BookLanding/Subscribe.js":
/*!*********************************************!*\
  !*** ./components/BookLanding/Subscribe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar MailerLite = __webpack_require__(/*! mailerlite-api-v2-node */ \"./node_modules/mailerlite-api-v2-node/dist/index.js\")[\"default\"];\n\nvar mailerLite = MailerLite(\"fcdfb0c2d2ceece7eeb88b3362f051bb\");\nvar newSub = \"utnalove@gmail.com\";\n\nvar getTheSubscriberId = function getTheSubscriberId(newSubEmail) {\n  mailerLite.getSubscribers().then(function (subList) {\n    subList.filter(function (singleSub) {\n      if (singleSub.email === newSubEmail) {\n        return singleSub.id;\n      }\n    });\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n}; // getTheSubscriberId(newSub);\n// const checkSubscriberStatus = (subID) => {\n//     console.log(subID);\n// }\n// checkSubscriberStatus(getTheSubscriberId(newSub));\n// mailerLite\n//   .addSubscriber({email: newSub})\n//   .catch((error) => {\n//     console.log(error);\n//   });\n\n\nvar Subscribe = /*#__PURE__*/function (_Component) {\n  Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Subscribe, _Component);\n\n  var _super = _createSuper(Subscribe);\n\n  function Subscribe() {\n    Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Subscribe);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Subscribe, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"section\", {\n        className: \"subscribe-area ptb-100\"\n      }, __jsx(\"div\", {\n        className: \"container\"\n      }, __jsx(\"div\", {\n        className: \"section-title\"\n      }, __jsx(\"h2\", null, \"Do\\u0142\\u0105cz spo\\u0142eczno\\u015Bci Sergio S Dorje\"), __jsx(\"div\", {\n        className: \"bar\"\n      }), __jsx(\"p\", null, \"Zapisz si\\u0119 do newslettera. Otrzymasz warto\\u015Bciowe informajce bezpo\\u015Brednio od Autora\")), __jsx(\"form\", {\n        className: \"newsletter-form\"\n      }, __jsx(\"input\", {\n        type: \"email\",\n        className: \"form-control\",\n        placeholder: \"Tw\\xF3j adre email\",\n        name: \"EMAIL\",\n        required: true\n      }), __jsx(\"button\", {\n        className: \"btn btn-primary\",\n        type: \"submit\"\n      }, \"Subscribe\"))));\n    }\n  }]);\n\n  return Subscribe;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subscribe);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanM/ZDAyOSJdLCJuYW1lcyI6WyJNYWlsZXJMaXRlIiwicmVxdWlyZSIsIm1haWxlckxpdGUiLCJuZXdTdWIiLCJnZXRUaGVTdWJzY3JpYmVySWQiLCJuZXdTdWJFbWFpbCIsImdldFN1YnNjcmliZXJzIiwidGhlbiIsInN1Ykxpc3QiLCJmaWx0ZXIiLCJzaW5nbGVTdWIiLCJlbWFpbCIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiU3Vic2NyaWJlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLG1GQUFELENBQVAsV0FBbkI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHRixVQUFVLENBQUMsa0NBQUQsQ0FBN0I7QUFDQSxJQUFNRyxNQUFNLEdBQUcsb0JBQWY7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxXQUFELEVBQWlCO0FBQzFDSCxZQUFVLENBQ1BJLGNBREgsR0FFR0MsSUFGSCxDQUVRLFVBQUNDLE9BQUQsRUFBYTtBQUNqQkEsV0FBTyxDQUFDQyxNQUFSLENBQWUsVUFBQ0MsU0FBRCxFQUFlO0FBQzVCLFVBQUlBLFNBQVMsQ0FBQ0MsS0FBVixLQUFvQk4sV0FBeEIsRUFBcUM7QUFDbkMsZUFBT0ssU0FBUyxDQUFDRSxFQUFqQjtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBUkgsV0FTUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsR0FYSDtBQVlELENBYkQsQyxDQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFFTUcsUzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBUyxpQkFBUyxFQUFDO0FBQW5CLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLDJFQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFGRixFQUdFLHFIQUhGLENBREYsRUFVRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FDRTtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsaUJBQVMsRUFBQyxjQUZaO0FBR0UsbUJBQVcsRUFBQyxvQkFIZDtBQUlFLFlBQUksRUFBQyxPQUpQO0FBS0UsZ0JBQVEsRUFBRTtBQUxaLFFBREYsRUFRRTtBQUFRLGlCQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFlBQUksRUFBQztBQUF6QyxxQkFSRixDQVZGLENBREYsQ0FERjtBQTJCRDs7OztFQTdCcUJDLCtDOztBQWdDVEQsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tMYW5kaW5nL1N1YnNjcmliZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IE1haWxlckxpdGUgPSByZXF1aXJlKFwibWFpbGVybGl0ZS1hcGktdjItbm9kZVwiKS5kZWZhdWx0O1xuXG5jb25zdCBtYWlsZXJMaXRlID0gTWFpbGVyTGl0ZShcImZjZGZiMGMyZDJjZWVjZTdlZWI4OGIzMzYyZjA1MWJiXCIpO1xuY29uc3QgbmV3U3ViID0gXCJ1dG5hbG92ZUBnbWFpbC5jb21cIjtcblxuY29uc3QgZ2V0VGhlU3Vic2NyaWJlcklkID0gKG5ld1N1YkVtYWlsKSA9PiB7XG4gIG1haWxlckxpdGVcbiAgICAuZ2V0U3Vic2NyaWJlcnMoKVxuICAgIC50aGVuKChzdWJMaXN0KSA9PiB7XG4gICAgICBzdWJMaXN0LmZpbHRlcigoc2luZ2xlU3ViKSA9PiB7XG4gICAgICAgIGlmIChzaW5nbGVTdWIuZW1haWwgPT09IG5ld1N1YkVtYWlsKSB7XG4gICAgICAgICAgcmV0dXJuIHNpbmdsZVN1Yi5pZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG59O1xuXG4vLyBnZXRUaGVTdWJzY3JpYmVySWQobmV3U3ViKTtcblxuLy8gY29uc3QgY2hlY2tTdWJzY3JpYmVyU3RhdHVzID0gKHN1YklEKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coc3ViSUQpO1xuLy8gfVxuLy8gY2hlY2tTdWJzY3JpYmVyU3RhdHVzKGdldFRoZVN1YnNjcmliZXJJZChuZXdTdWIpKTtcblxuXG4vLyBtYWlsZXJMaXRlXG4vLyAgIC5hZGRTdWJzY3JpYmVyKHtlbWFpbDogbmV3U3VifSlcbi8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgfSk7XG5cbmNsYXNzIFN1YnNjcmliZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3Vic2NyaWJlLWFyZWEgcHRiLTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgPGgyPkRvxYLEhWN6IHNwb8WCZWN6bm/Fm2NpIFNlcmdpbyBTIERvcmplPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgWmFwaXN6IHNpxJkgZG8gbmV3c2xldHRlcmEuIE90cnp5bWFzeiB3YXJ0b8WbY2lvd2UgaW5mb3JtYWpjZVxuICAgICAgICAgICAgICBiZXpwb8WbcmVkbmlvIG9kIEF1dG9yYVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibmV3c2xldHRlci1mb3JtXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUd8OzaiBhZHJlIGVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cIkVNQUlMXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIFN1YnNjcmliZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BookLanding/Subscribe.js\n");

/***/ })

})