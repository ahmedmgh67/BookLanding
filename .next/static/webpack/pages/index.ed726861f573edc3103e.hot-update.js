webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BookLanding/Subscribe.js":
/*!*********************************************!*\
  !*** ./components/BookLanding/Subscribe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar MailerLite = __webpack_require__(/*! mailerlite-api-v2-node */ \"./node_modules/mailerlite-api-v2-node/dist/index.js\")[\"default\"];\n\nvar mailerLite = MailerLite(\"fcdfb0c2d2ceece7eeb88b3362f051bb\");\nvar newSub = \"utnalove@gmail.com\";\n\nvar getTheSubscriberId = function getTheSubscriberId(newSubEmail) {\n  mailerLite.getSubscribers().then(function (subList) {\n    subList.filter(function (singleSub) {\n      if (singleSub.email === newSubEmail) {\n        return singleSub.id;\n      }\n    });\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n}; // const checkSubscriberStatus = (aa) => {\n//   console.log(aa);\n// };\n// checkSubscriberStatus(subScriberId);\n// mailerLite\n//   .addSubscriber({email: newSub})\n//   .catch((error) => {\n//     console.log(error);\n//   });\n\n\nvar Subscribe = function Subscribe() {\n  return __jsx(\"section\", {\n    className: \"subscribe-area ptb-100\"\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, __jsx(\"div\", {\n    className: \"section-title\"\n  }, __jsx(\"h2\", null, \"Do\\u0142\\u0105cz spo\\u0142eczno\\u015Bci Sergio S Dorje\"), __jsx(\"div\", {\n    className: \"bar\"\n  }), __jsx(\"p\", null, \"Zapisz si\\u0119 do newslettera. Otrzymasz warto\\u015Bciowe informajce bezpo\\u015Brednio od Autora\")), __jsx(\"form\", {\n    className: \"newsletter-form\"\n  }, __jsx(\"input\", {\n    type: \"email\",\n    className: \"form-control\",\n    placeholder: \"Tw\\xF3j adre email\",\n    name: \"EMAIL\",\n    required: true\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    type: \"submit\"\n  }, \"Subscribe\"))));\n};\n\n_c = Subscribe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subscribe);\n\nvar _c;\n\n$RefreshReg$(_c, \"Subscribe\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanM/ZDAyOSJdLCJuYW1lcyI6WyJNYWlsZXJMaXRlIiwicmVxdWlyZSIsIm1haWxlckxpdGUiLCJuZXdTdWIiLCJnZXRUaGVTdWJzY3JpYmVySWQiLCJuZXdTdWJFbWFpbCIsImdldFN1YnNjcmliZXJzIiwidGhlbiIsInN1Ykxpc3QiLCJmaWx0ZXIiLCJzaW5nbGVTdWIiLCJlbWFpbCIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiU3Vic2NyaWJlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLG1GQUFELENBQVAsV0FBbkI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHRixVQUFVLENBQUMsa0NBQUQsQ0FBN0I7QUFDQSxJQUFNRyxNQUFNLEdBQUcsb0JBQWY7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxXQUFELEVBQWlCO0FBQzFDSCxZQUFVLENBQ1BJLGNBREgsR0FFR0MsSUFGSCxDQUVRLFVBQUNDLE9BQUQsRUFBYTtBQUNqQkEsV0FBTyxDQUFDQyxNQUFSLENBQWUsVUFBQ0MsU0FBRCxFQUFlO0FBQzVCLFVBQUlBLFNBQVMsQ0FBQ0MsS0FBVixLQUFvQk4sV0FBeEIsRUFBcUM7QUFDbkMsZUFBT0ssU0FBUyxDQUFDRSxFQUFqQjtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBUkgsV0FTUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsR0FYSDtBQVlELENBYkQsQyxDQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFFcEIsU0FDRTtBQUFTLGFBQVMsRUFBQztBQUFuQixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsMkVBREYsRUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBRkYsRUFHRSxxSEFIRixDQURGLEVBVUU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FDRTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSxlQUFXLEVBQUMsb0JBSGQ7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLFlBQVEsRUFBRTtBQUxaLElBREYsRUFRRTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBb0MsUUFBSSxFQUFDO0FBQXpDLGlCQVJGLENBVkYsQ0FERixDQURGO0FBMkJELENBN0JIOztLQUFNQSxTO0FBZ0NTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQm9va0xhbmRpbmcvU3Vic2NyaWJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IE1haWxlckxpdGUgPSByZXF1aXJlKFwibWFpbGVybGl0ZS1hcGktdjItbm9kZVwiKS5kZWZhdWx0O1xuXG5jb25zdCBtYWlsZXJMaXRlID0gTWFpbGVyTGl0ZShcImZjZGZiMGMyZDJjZWVjZTdlZWI4OGIzMzYyZjA1MWJiXCIpO1xuY29uc3QgbmV3U3ViID0gXCJ1dG5hbG92ZUBnbWFpbC5jb21cIjtcblxuY29uc3QgZ2V0VGhlU3Vic2NyaWJlcklkID0gKG5ld1N1YkVtYWlsKSA9PiB7XG4gIG1haWxlckxpdGVcbiAgICAuZ2V0U3Vic2NyaWJlcnMoKVxuICAgIC50aGVuKChzdWJMaXN0KSA9PiB7XG4gICAgICBzdWJMaXN0LmZpbHRlcigoc2luZ2xlU3ViKSA9PiB7XG4gICAgICAgIGlmIChzaW5nbGVTdWIuZW1haWwgPT09IG5ld1N1YkVtYWlsKSB7XG4gICAgICAgICAgcmV0dXJuIHNpbmdsZVN1Yi5pZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG59O1xuXG5cblxuLy8gY29uc3QgY2hlY2tTdWJzY3JpYmVyU3RhdHVzID0gKGFhKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGFhKTtcbi8vIH07XG4vLyBjaGVja1N1YnNjcmliZXJTdGF0dXMoc3ViU2NyaWJlcklkKTtcblxuLy8gbWFpbGVyTGl0ZVxuLy8gICAuYWRkU3Vic2NyaWJlcih7ZW1haWw6IG5ld1N1Yn0pXG4vLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgIH0pO1xuXG5jb25zdCBTdWJzY3JpYmUgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3Vic2NyaWJlLWFyZWEgcHRiLTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgPGgyPkRvxYLEhWN6IHNwb8WCZWN6bm/Fm2NpIFNlcmdpbyBTIERvcmplPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgWmFwaXN6IHNpxJkgZG8gbmV3c2xldHRlcmEuIE90cnp5bWFzeiB3YXJ0b8WbY2lvd2UgaW5mb3JtYWpjZVxuICAgICAgICAgICAgICBiZXpwb8WbcmVkbmlvIG9kIEF1dG9yYVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibmV3c2xldHRlci1mb3JtXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUd8OzaiBhZHJlIGVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cIkVNQUlMXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIFN1YnNjcmliZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BookLanding/Subscribe.js\n");

/***/ })

})