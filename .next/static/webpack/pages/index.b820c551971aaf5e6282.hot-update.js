webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BookLanding/Subscribe.js":
/*!*********************************************!*\
  !*** ./components/BookLanding/Subscribe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar MailerLite = __webpack_require__(/*! mailerlite-api-v2-node */ \"./node_modules/mailerlite-api-v2-node/dist/index.js\")[\"default\"];\n\nvar mailerLite = MailerLite(\"fcdfb0c2d2ceece7eeb88b3362f051bb\");\nvar newSub = \"utnalove@gmail.com\";\n\nvar getTheSubscriberId = function getTheSubscriberId(newSubEmail) {\n  mailerLite.getSubscribers().then(function (subList) {\n    subList.filter(function (singleSub) {\n      if (singleSub.email === newSubEmail) {\n        return singleSub.id;\n      }\n    });\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n}; // const checkSubscriberStatus = (aa) => {\n//   console.log(aa);\n// };\n// checkSubscriberStatus(subScriberId);\n// mailerLite\n//   .addSubscriber({email: newSub})\n//   .catch((error) => {\n//     console.log(error);\n//   });\n\n\nvar Subscribe = function Subscribe() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      subScriberId = _useState[0],\n      setSubscriberId = _useState[1];\n\n  setSubscriberId(\"aaa\");\n  console.log(subScriberId);\n  return __jsx(\"section\", {\n    className: \"subscribe-area ptb-100\"\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, __jsx(\"div\", {\n    className: \"section-title\"\n  }, __jsx(\"h2\", null, \"Do\\u0142\\u0105cz spo\\u0142eczno\\u015Bci Sergio S Dorje\"), __jsx(\"div\", {\n    className: \"bar\"\n  }), __jsx(\"p\", null, \"Zapisz si\\u0119 do newslettera. Otrzymasz warto\\u015Bciowe informajce bezpo\\u015Brednio od Autora\")), __jsx(\"form\", {\n    className: \"newsletter-form\"\n  }, __jsx(\"input\", {\n    type: \"email\",\n    className: \"form-control\",\n    placeholder: \"Tw\\xF3j adre email\",\n    name: \"EMAIL\",\n    required: true,\n    onChange: function onChange(e) {\n      return setFName(e.target.value);\n    }\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    type: \"submit\"\n  }, \"Subscribe\"))));\n};\n\n_s(Subscribe, \"RedkbRLT/bx5ft+fPszv3l2N8dQ=\");\n\n_c = Subscribe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subscribe);\n\nvar _c;\n\n$RefreshReg$(_c, \"Subscribe\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanM/ZDAyOSJdLCJuYW1lcyI6WyJNYWlsZXJMaXRlIiwicmVxdWlyZSIsIm1haWxlckxpdGUiLCJuZXdTdWIiLCJnZXRUaGVTdWJzY3JpYmVySWQiLCJuZXdTdWJFbWFpbCIsImdldFN1YnNjcmliZXJzIiwidGhlbiIsInN1Ykxpc3QiLCJmaWx0ZXIiLCJzaW5nbGVTdWIiLCJlbWFpbCIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiU3Vic2NyaWJlIiwidXNlU3RhdGUiLCJzdWJTY3JpYmVySWQiLCJzZXRTdWJzY3JpYmVySWQiLCJlIiwic2V0Rk5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLG1GQUFELENBQVAsV0FBbkI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHRixVQUFVLENBQUMsa0NBQUQsQ0FBN0I7QUFDQSxJQUFNRyxNQUFNLEdBQUcsb0JBQWY7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxXQUFELEVBQWlCO0FBQzFDSCxZQUFVLENBQ1BJLGNBREgsR0FFR0MsSUFGSCxDQUVRLFVBQUNDLE9BQUQsRUFBYTtBQUNqQkEsV0FBTyxDQUFDQyxNQUFSLENBQWUsVUFBQ0MsU0FBRCxFQUFlO0FBQzVCLFVBQUlBLFNBQVMsQ0FBQ0MsS0FBVixLQUFvQk4sV0FBeEIsRUFBcUM7QUFDbkMsZUFBT0ssU0FBUyxDQUFDRSxFQUFqQjtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBUkgsV0FTUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsR0FYSDtBQVlELENBYkQsQyxDQWVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNvQkMsc0RBQVEsQ0FBQyxJQUFELENBRDVCO0FBQUEsTUFDYkMsWUFEYTtBQUFBLE1BQ0NDLGVBREQ7O0FBSXBCQSxpQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNGTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsWUFBWjtBQUdBLFNBQ0U7QUFBUyxhQUFTLEVBQUM7QUFBbkIsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLDJFQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixJQUZGLEVBR0UscUhBSEYsQ0FERixFQVVFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQ0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLGFBQVMsRUFBQyxjQUZaO0FBR0UsZUFBVyxFQUFDLG9CQUhkO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxZQUFRLEVBQUUsSUFMWjtBQU1FLFlBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGFBQU9DLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBTlosSUFERixFQVNFO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxRQUFJLEVBQUM7QUFBekMsaUJBVEYsQ0FWRixDQURGLENBREY7QUE0QkQsQ0FwQ0Q7O0dBQU1QLFM7O0tBQUFBLFM7QUFzQ1NBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgTWFpbGVyTGl0ZSA9IHJlcXVpcmUoXCJtYWlsZXJsaXRlLWFwaS12Mi1ub2RlXCIpLmRlZmF1bHQ7XG5cbmNvbnN0IG1haWxlckxpdGUgPSBNYWlsZXJMaXRlKFwiZmNkZmIwYzJkMmNlZWNlN2VlYjg4YjMzNjJmMDUxYmJcIik7XG5jb25zdCBuZXdTdWIgPSBcInV0bmFsb3ZlQGdtYWlsLmNvbVwiO1xuXG5jb25zdCBnZXRUaGVTdWJzY3JpYmVySWQgPSAobmV3U3ViRW1haWwpID0+IHtcbiAgbWFpbGVyTGl0ZVxuICAgIC5nZXRTdWJzY3JpYmVycygpXG4gICAgLnRoZW4oKHN1Ykxpc3QpID0+IHtcbiAgICAgIHN1Ykxpc3QuZmlsdGVyKChzaW5nbGVTdWIpID0+IHtcbiAgICAgICAgaWYgKHNpbmdsZVN1Yi5lbWFpbCA9PT0gbmV3U3ViRW1haWwpIHtcbiAgICAgICAgICByZXR1cm4gc2luZ2xlU3ViLmlkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbn07XG5cbi8vIGNvbnN0IGNoZWNrU3Vic2NyaWJlclN0YXR1cyA9IChhYSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhhYSk7XG4vLyB9O1xuLy8gY2hlY2tTdWJzY3JpYmVyU3RhdHVzKHN1YlNjcmliZXJJZCk7XG5cbi8vIG1haWxlckxpdGVcbi8vICAgLmFkZFN1YnNjcmliZXIoe2VtYWlsOiBuZXdTdWJ9KVxuLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICB9KTtcblxuY29uc3QgU3Vic2NyaWJlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzdWJTY3JpYmVySWQsIHNldFN1YnNjcmliZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuXG4gICAgc2V0U3Vic2NyaWJlcklkKFwiYWFhXCIpO1xuICBjb25zb2xlLmxvZyhzdWJTY3JpYmVySWQpO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdWJzY3JpYmUtYXJlYSBwdGItMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICA8aDI+RG/FgsSFY3ogc3BvxYJlY3pub8WbY2kgU2VyZ2lvIFMgRG9yamU8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBaYXBpc3ogc2nEmSBkbyBuZXdzbGV0dGVyYS4gT3RyenltYXN6IHdhcnRvxZtjaW93ZSBpbmZvcm1hamNlXG4gICAgICAgICAgICBiZXpwb8WbcmVkbmlvIG9kIEF1dG9yYVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibmV3c2xldHRlci1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHfDs2ogYWRyZSBlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiRU1BSUxcIlxuICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU3Vic2NyaWJlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BookLanding/Subscribe.js\n");

/***/ })

})