webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BookLanding/Subscribe.js":
/*!*********************************************!*\
  !*** ./components/BookLanding/Subscribe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar MailerLite = __webpack_require__(/*! mailerlite-api-v2-node */ \"./node_modules/mailerlite-api-v2-node/dist/index.js\")[\"default\"];\n\nvar mailerLite = MailerLite(\"fcdfb0c2d2ceece7eeb88b3362f051bb\");\nvar newSub = \"utnalove@gmail.com\";\n\nvar getTheSubscriberId = function getTheSubscriberId(newSubEmail) {\n  mailerLite.getSubscribers().then(function (subList) {\n    subList.filter(function (singleSub) {\n      if (singleSub.email === newSubEmail) {\n        return singleSub.id;\n      }\n    });\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n};\n\nvar _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n    subScriberId = _useState[0],\n    setSubscriberId = _useState[1];\n\nsetSubscriberId(getTheSubscriberId(newSub));\nconsole.log(subScriberId); // const checkSubscriberStatus = (aa) => {\n//     console.log(aa);\n// }\n// const id = getTheSubscriberId(newSub);\n// checkSubscriberStatus(id);\n// mailerLite\n//   .addSubscriber({email: newSub})\n//   .catch((error) => {\n//     console.log(error);\n//   });\n\nvar Subscribe = /*#__PURE__*/function (_Component) {\n  Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Subscribe, _Component);\n\n  var _super = _createSuper(Subscribe);\n\n  function Subscribe() {\n    Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Subscribe);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_home_sergio_Dokumenty_priv_book_landing_sekrety_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Subscribe, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"section\", {\n        className: \"subscribe-area ptb-100\"\n      }, __jsx(\"div\", {\n        className: \"container\"\n      }, __jsx(\"div\", {\n        className: \"section-title\"\n      }, __jsx(\"h2\", null, \"Do\\u0142\\u0105cz spo\\u0142eczno\\u015Bci Sergio S Dorje\"), __jsx(\"div\", {\n        className: \"bar\"\n      }), __jsx(\"p\", null, \"Zapisz si\\u0119 do newslettera. Otrzymasz warto\\u015Bciowe informajce bezpo\\u015Brednio od Autora\")), __jsx(\"form\", {\n        className: \"newsletter-form\"\n      }, __jsx(\"input\", {\n        type: \"email\",\n        className: \"form-control\",\n        placeholder: \"Tw\\xF3j adre email\",\n        name: \"EMAIL\",\n        required: true\n      }), __jsx(\"button\", {\n        className: \"btn btn-primary\",\n        type: \"submit\"\n      }, \"Subscribe\"))));\n    }\n  }]);\n\n  return Subscribe;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subscribe);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanM/ZDAyOSJdLCJuYW1lcyI6WyJNYWlsZXJMaXRlIiwicmVxdWlyZSIsIm1haWxlckxpdGUiLCJuZXdTdWIiLCJnZXRUaGVTdWJzY3JpYmVySWQiLCJuZXdTdWJFbWFpbCIsImdldFN1YnNjcmliZXJzIiwidGhlbiIsInN1Ykxpc3QiLCJmaWx0ZXIiLCJzaW5nbGVTdWIiLCJlbWFpbCIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJzdWJTY3JpYmVySWQiLCJzZXRTdWJzY3JpYmVySWQiLCJTdWJzY3JpYmUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsbUZBQUQsQ0FBUCxXQUFuQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUdGLFVBQVUsQ0FBQyxrQ0FBRCxDQUE3QjtBQUNBLElBQU1HLE1BQU0sR0FBRyxvQkFBZjs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFdBQUQsRUFBaUI7QUFDMUNILFlBQVUsQ0FDUEksY0FESCxHQUVHQyxJQUZILENBRVEsVUFBQ0MsT0FBRCxFQUFhO0FBQ2pCQSxXQUFPLENBQUNDLE1BQVIsQ0FBZSxVQUFDQyxTQUFELEVBQWU7QUFDNUIsVUFBSUEsU0FBUyxDQUFDQyxLQUFWLEtBQW9CTixXQUF4QixFQUFxQztBQUNuQyxlQUFPSyxTQUFTLENBQUNFLEVBQWpCO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FSSCxXQVNTLFVBQUNDLEtBQUQsRUFBVztBQUNoQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxHQVhIO0FBWUQsQ0FiRDs7Z0JBZXdDRyxzREFBUSxDQUFDLElBQUQsQztJQUF6Q0MsWTtJQUFjQyxlOztBQUVyQkEsZUFBZSxDQUFDZCxrQkFBa0IsQ0FBQ0QsTUFBRCxDQUFuQixDQUFmO0FBRUFXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxZQUFaLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUUsUzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBUyxpQkFBUyxFQUFDO0FBQW5CLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLDJFQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFGRixFQUdFLHFIQUhGLENBREYsRUFVRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FDRTtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsaUJBQVMsRUFBQyxjQUZaO0FBR0UsbUJBQVcsRUFBQyxvQkFIZDtBQUlFLFlBQUksRUFBQyxPQUpQO0FBS0UsZ0JBQVEsRUFBRTtBQUxaLFFBREYsRUFRRTtBQUFRLGlCQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFlBQUksRUFBQztBQUF6QyxxQkFSRixDQVZGLENBREYsQ0FERjtBQTJCRDs7OztFQTdCcUJDLCtDOztBQWdDVEQsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tMYW5kaW5nL1N1YnNjcmliZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBNYWlsZXJMaXRlID0gcmVxdWlyZShcIm1haWxlcmxpdGUtYXBpLXYyLW5vZGVcIikuZGVmYXVsdDtcblxuY29uc3QgbWFpbGVyTGl0ZSA9IE1haWxlckxpdGUoXCJmY2RmYjBjMmQyY2VlY2U3ZWViODhiMzM2MmYwNTFiYlwiKTtcbmNvbnN0IG5ld1N1YiA9IFwidXRuYWxvdmVAZ21haWwuY29tXCI7XG5cbmNvbnN0IGdldFRoZVN1YnNjcmliZXJJZCA9IChuZXdTdWJFbWFpbCkgPT4ge1xuICBtYWlsZXJMaXRlXG4gICAgLmdldFN1YnNjcmliZXJzKClcbiAgICAudGhlbigoc3ViTGlzdCkgPT4ge1xuICAgICAgc3ViTGlzdC5maWx0ZXIoKHNpbmdsZVN1YikgPT4ge1xuICAgICAgICBpZiAoc2luZ2xlU3ViLmVtYWlsID09PSBuZXdTdWJFbWFpbCkge1xuICAgICAgICAgIHJldHVybiBzaW5nbGVTdWIuaWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xufTtcblxuY29uc3QgW3N1YlNjcmliZXJJZCwgc2V0U3Vic2NyaWJlcklkXSA9IHVzZVN0YXRlKG51bGwpXG5cbnNldFN1YnNjcmliZXJJZChnZXRUaGVTdWJzY3JpYmVySWQobmV3U3ViKSk7XG5cbmNvbnNvbGUubG9nKHN1YlNjcmliZXJJZCk7XG5cbi8vIGNvbnN0IGNoZWNrU3Vic2NyaWJlclN0YXR1cyA9IChhYSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGFhKTtcbi8vIH1cbi8vIGNvbnN0IGlkID0gZ2V0VGhlU3Vic2NyaWJlcklkKG5ld1N1Yik7XG4vLyBjaGVja1N1YnNjcmliZXJTdGF0dXMoaWQpO1xuXG5cbi8vIG1haWxlckxpdGVcbi8vICAgLmFkZFN1YnNjcmliZXIoe2VtYWlsOiBuZXdTdWJ9KVxuLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICB9KTtcblxuY2xhc3MgU3Vic2NyaWJlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdWJzY3JpYmUtYXJlYSBwdGItMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICA8aDI+RG/FgsSFY3ogc3BvxYJlY3pub8WbY2kgU2VyZ2lvIFMgRG9yamU8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBaYXBpc3ogc2nEmSBkbyBuZXdzbGV0dGVyYS4gT3RyenltYXN6IHdhcnRvxZtjaW93ZSBpbmZvcm1hamNlXG4gICAgICAgICAgICAgIGJlenBvxZtyZWRuaW8gb2QgQXV0b3JhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLWZvcm1cIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR3w7NqIGFkcmUgZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiRU1BSUxcIlxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgU3Vic2NyaWJlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BookLanding/Subscribe.js\n");

/***/ })

})