webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BookLanding/Subscribe.js":
/*!*********************************************!*\
  !*** ./components/BookLanding/Subscribe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar MailerLite = __webpack_require__(/*! mailerlite-api-v2-node */ \"./node_modules/mailerlite-api-v2-node/dist/index.js\")[\"default\"];\n\nvar mailerLite = MailerLite(\"fcdfb0c2d2ceece7eeb88b3362f051bb\");\nvar newSub = \"utnalove@gmail.com\";\n\nvar getTheSubscriberId = function getTheSubscriberId(newSubEmail) {\n  mailerLite.getSubscribers().then(function (subList) {\n    subList.filter(function (singleSub) {\n      if (singleSub.email === newSubEmail) {\n        return singleSub.id;\n      }\n    });\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n}; // const checkSubscriberStatus = (aa) => {\n//   console.log(aa);\n// };\n// checkSubscriberStatus(subScriberId);\n// mailerLite\n//   .addSubscriber({email: newSub})\n//   .catch((error) => {\n//     console.log(error);\n//   });\n\n\nvar Subscribe = function Subscribe() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      subScriberId = _useState[0],\n      setSubscriberId = _useState[1];\n\n  setSubscriberId(getTheSubscriberId(newSub));\n  console.log(subScriberId);\n  return __jsx(\"section\", {\n    className: \"subscribe-area ptb-100\"\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, __jsx(\"div\", {\n    className: \"section-title\"\n  }, __jsx(\"h2\", null, \"Do\\u0142\\u0105cz spo\\u0142eczno\\u015Bci Sergio S Dorje\"), __jsx(\"div\", {\n    className: \"bar\"\n  }), __jsx(\"p\", null, \"Zapisz si\\u0119 do newslettera. Otrzymasz warto\\u015Bciowe informajce bezpo\\u015Brednio od Autora\")), __jsx(\"form\", {\n    className: \"newsletter-form\"\n  }, __jsx(\"input\", {\n    type: \"email\",\n    className: \"form-control\",\n    placeholder: \"Tw\\xF3j adre email\",\n    name: \"EMAIL\",\n    required: true\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    type: \"submit\"\n  }, \"Subscribe\"))));\n};\n\n_s(Subscribe, \"RedkbRLT/bx5ft+fPszv3l2N8dQ=\");\n\n_c = Subscribe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subscribe);\n\nvar _c;\n\n$RefreshReg$(_c, \"Subscribe\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanM/ZDAyOSJdLCJuYW1lcyI6WyJNYWlsZXJMaXRlIiwicmVxdWlyZSIsIm1haWxlckxpdGUiLCJuZXdTdWIiLCJnZXRUaGVTdWJzY3JpYmVySWQiLCJuZXdTdWJFbWFpbCIsImdldFN1YnNjcmliZXJzIiwidGhlbiIsInN1Ykxpc3QiLCJmaWx0ZXIiLCJzaW5nbGVTdWIiLCJlbWFpbCIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiU3Vic2NyaWJlIiwidXNlU3RhdGUiLCJzdWJTY3JpYmVySWQiLCJzZXRTdWJzY3JpYmVySWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxtRkFBRCxDQUFQLFdBQW5COztBQUVBLElBQU1DLFVBQVUsR0FBR0YsVUFBVSxDQUFDLGtDQUFELENBQTdCO0FBQ0EsSUFBTUcsTUFBTSxHQUFHLG9CQUFmOztBQUVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsV0FBRCxFQUFpQjtBQUMxQ0gsWUFBVSxDQUNQSSxjQURILEdBRUdDLElBRkgsQ0FFUSxVQUFDQyxPQUFELEVBQWE7QUFDakJBLFdBQU8sQ0FBQ0MsTUFBUixDQUFlLFVBQUNDLFNBQUQsRUFBZTtBQUM1QixVQUFJQSxTQUFTLENBQUNDLEtBQVYsS0FBb0JOLFdBQXhCLEVBQXFDO0FBQ25DLGVBQU9LLFNBQVMsQ0FBQ0UsRUFBakI7QUFDRDtBQUNGLEtBSkQ7QUFLRCxHQVJILFdBU1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEdBWEg7QUFZRCxDQWJELEMsQ0FlQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsSUFBRCxDQUQxQjtBQUFBLE1BQ2ZDLFlBRGU7QUFBQSxNQUNEQyxlQURDOztBQUd0QkEsaUJBQWUsQ0FBQ2Ysa0JBQWtCLENBQUNELE1BQUQsQ0FBbkIsQ0FBZjtBQUVBVyxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsWUFBWjtBQUdBLFNBQ0U7QUFBUyxhQUFTLEVBQUM7QUFBbkIsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLDJFQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixJQUZGLEVBR0UscUhBSEYsQ0FERixFQVVFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQ0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLGFBQVMsRUFBQyxjQUZaO0FBR0UsZUFBVyxFQUFDLG9CQUhkO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxZQUFRLEVBQUU7QUFMWixJQURGLEVBUUU7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFFBQUksRUFBQztBQUF6QyxpQkFSRixDQVZGLENBREYsQ0FERjtBQTJCRCxDQW5DRDs7R0FBTUYsUzs7S0FBQUEsUztBQXFDU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tMYW5kaW5nL1N1YnNjcmliZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBNYWlsZXJMaXRlID0gcmVxdWlyZShcIm1haWxlcmxpdGUtYXBpLXYyLW5vZGVcIikuZGVmYXVsdDtcblxuY29uc3QgbWFpbGVyTGl0ZSA9IE1haWxlckxpdGUoXCJmY2RmYjBjMmQyY2VlY2U3ZWViODhiMzM2MmYwNTFiYlwiKTtcbmNvbnN0IG5ld1N1YiA9IFwidXRuYWxvdmVAZ21haWwuY29tXCI7XG5cbmNvbnN0IGdldFRoZVN1YnNjcmliZXJJZCA9IChuZXdTdWJFbWFpbCkgPT4ge1xuICBtYWlsZXJMaXRlXG4gICAgLmdldFN1YnNjcmliZXJzKClcbiAgICAudGhlbigoc3ViTGlzdCkgPT4ge1xuICAgICAgc3ViTGlzdC5maWx0ZXIoKHNpbmdsZVN1YikgPT4ge1xuICAgICAgICBpZiAoc2luZ2xlU3ViLmVtYWlsID09PSBuZXdTdWJFbWFpbCkge1xuICAgICAgICAgIHJldHVybiBzaW5nbGVTdWIuaWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xufTtcblxuLy8gY29uc3QgY2hlY2tTdWJzY3JpYmVyU3RhdHVzID0gKGFhKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGFhKTtcbi8vIH07XG4vLyBjaGVja1N1YnNjcmliZXJTdGF0dXMoc3ViU2NyaWJlcklkKTtcblxuLy8gbWFpbGVyTGl0ZVxuLy8gICAuYWRkU3Vic2NyaWJlcih7ZW1haWw6IG5ld1N1Yn0pXG4vLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgIH0pO1xuXG5jb25zdCBTdWJzY3JpYmUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdWJTY3JpYmVySWQsIHNldFN1YnNjcmliZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBzZXRTdWJzY3JpYmVySWQoZ2V0VGhlU3Vic2NyaWJlcklkKG5ld1N1YikpO1xuXG4gIGNvbnNvbGUubG9nKHN1YlNjcmliZXJJZCk7XG5cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1YnNjcmliZS1hcmVhIHB0Yi0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgIDxoMj5Eb8WCxIVjeiBzcG/FgmVjem5vxZtjaSBTZXJnaW8gUyBEb3JqZTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFphcGlzeiBzacSZIGRvIG5ld3NsZXR0ZXJhLiBPdHJ6eW1hc3ogd2FydG/Fm2Npb3dlIGluZm9ybWFqY2VcbiAgICAgICAgICAgIGJlenBvxZtyZWRuaW8gb2QgQXV0b3JhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLWZvcm1cIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUd8OzaiBhZHJlIGVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJFTUFJTFwiXG4gICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU3Vic2NyaWJlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BookLanding/Subscribe.js\n");

/***/ })

})