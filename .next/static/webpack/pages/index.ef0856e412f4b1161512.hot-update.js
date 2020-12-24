webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BookLanding/Subscribe.js":
/*!*********************************************!*\
  !*** ./components/BookLanding/Subscribe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar MailerLite = __webpack_require__(/*! mailerlite-api-v2-node */ \"./node_modules/mailerlite-api-v2-node/dist/index.js\")[\"default\"];\n\nvar mailerLite = MailerLite(\"fcdfb0c2d2ceece7eeb88b3362f051bb\");\n\nvar Subscribe = function Subscribe() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      userID = _useState2[0],\n      setUserID = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      userType = _useState3[0],\n      setUserType = _useState3[1]; // GET THE SUBSCRIBER ID\n\n\n  var getTheSubscriberId = function getTheSubscriberId(newSubEmail) {\n    var _s = $RefreshSig$();\n\n    mailerLite.getSubscribers().then(function (subList) {\n      subList.filter(function (singleSub) {\n        if (singleSub.email === newSubEmail) {\n          setUserType(singleSub.type);\n          setUserID(singleSub.id);\n        }\n      });\n    })[\"catch\"](_s(function (error) {\n      _s();\n\n      Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n        console.log(userID);\n      }, [userID]);\n      console.log(error);\n    }, \"OD7bBpZva5O2jO+Puf00hKivP7c=\"));\n  }; //GET THE USER TYPE\n  // const getUserType = (id) => {\n  //     if (id) {\n  //         console.log(mailerLite.getSubscriber(id));\n  //     }\n  // }\n\n\n  var _handleSubmit = function _handleSubmit(e) {\n    e.preventDefault();\n    getTheSubscriberId(email);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(userID); // getUserType(userID);\n  }, [userID]);\n  return __jsx(\"section\", {\n    className: \"subscribe-area ptb-100\"\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, __jsx(\"div\", {\n    className: \"section-title\"\n  }, __jsx(\"h2\", null, \"Do\\u0142\\u0105cz spo\\u0142eczno\\u015Bci Sergio S Dorje\"), __jsx(\"div\", {\n    className: \"bar\"\n  }), __jsx(\"p\", null, \"Zapisz si\\u0119 do newslettera. Otrzymasz warto\\u015Bciowe informajce bezpo\\u015Brednio od Autora\")), __jsx(\"form\", {\n    className: \"newsletter-form\",\n    onSubmit: _handleSubmit\n  }, __jsx(\"input\", {\n    type: \"email\",\n    className: \"form-control\",\n    placeholder: \"Tw\\xF3j adre email\",\n    name: \"EMAIL\",\n    required: true,\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    }\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    type: \"submit\"\n  }, \"Subscribe\"))));\n};\n\n_s2(Subscribe, \"gpSZQ4B4V8wXCMc4HcgzE3qyjBs=\");\n\n_c = Subscribe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subscribe);\n\nvar _c;\n\n$RefreshReg$(_c, \"Subscribe\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanM/ZDAyOSJdLCJuYW1lcyI6WyJNYWlsZXJMaXRlIiwicmVxdWlyZSIsIm1haWxlckxpdGUiLCJTdWJzY3JpYmUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJ1c2VyVHlwZSIsInNldFVzZXJUeXBlIiwiZ2V0VGhlU3Vic2NyaWJlcklkIiwibmV3U3ViRW1haWwiLCJnZXRTdWJzY3JpYmVycyIsInRoZW4iLCJzdWJMaXN0IiwiZmlsdGVyIiwic2luZ2xlU3ViIiwidHlwZSIsImlkIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiX2hhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsbUZBQUQsQ0FBUCxXQUFuQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUdGLFVBQVUsQ0FBQyxrQ0FBRCxDQUE3Qjs7QUFJQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUMsRUFBRCxDQUZkO0FBQUEsTUFFZkcsTUFGZTtBQUFBLE1BRVBDLFNBRk87O0FBQUEsbUJBR1VKLHNEQUFRLENBQUMsRUFBRCxDQUhsQjtBQUFBLE1BR2ZLLFFBSGU7QUFBQSxNQUdMQyxXQUhLLGtCQU14Qjs7O0FBQ0UsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxXQUFELEVBQWlCO0FBQUE7O0FBQzFDVixjQUFVLENBQ1BXLGNBREgsR0FFR0MsSUFGSCxDQUVRLFVBQUNDLE9BQUQsRUFBYTtBQUNqQkEsYUFBTyxDQUFDQyxNQUFSLENBQWUsVUFBQ0MsU0FBRCxFQUFlO0FBQzVCLFlBQUlBLFNBQVMsQ0FBQ1osS0FBVixLQUFvQk8sV0FBeEIsRUFBcUM7QUFDbkNGLHFCQUFXLENBQUNPLFNBQVMsQ0FBQ0MsSUFBWCxDQUFYO0FBQ0FWLG1CQUFTLENBQUNTLFNBQVMsQ0FBQ0UsRUFBWCxDQUFUO0FBQ0Q7QUFDRixPQUxEO0FBTUQsS0FUSCxjQVVTLFVBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFLQyw2REFBUyxDQUFDLFlBQU07QUFDbkNDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsTUFBWjtBQUNELE9BRjZCLEVBRTNCLENBQUNBLE1BQUQsQ0FGMkIsQ0FBVDtBQUdyQmUsYUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDRCxLQWRIO0FBZUQsR0FoQkQsQ0FQc0IsQ0EwQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUUsTUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDM0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBZixzQkFBa0IsQ0FBQ04sS0FBRCxDQUFsQjtBQUlELEdBUEQ7O0FBYUFnQix5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVloQixNQUFaLEVBRGMsQ0FFZDtBQUNELEdBSFEsRUFHTixDQUFDQSxNQUFELENBSE0sQ0FBVDtBQUtBLFNBQ0U7QUFBUyxhQUFTLEVBQUM7QUFBbkIsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLDJFQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixJQUZGLEVBR0UscUhBSEYsQ0FERixFQVVFO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxZQUFRLEVBQUVpQjtBQUE1QyxLQUNFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxhQUFTLEVBQUMsY0FGWjtBQUdFLGVBQVcsRUFBQyxvQkFIZDtBQUlFLFFBQUksRUFBQyxPQUpQO0FBS0UsWUFBUSxFQUFFLElBTFo7QUFNRSxTQUFLLEVBQUVuQixLQU5UO0FBT0UsWUFBUSxFQUFFLGtCQUFDb0IsQ0FBRDtBQUFBLGFBQU9uQixRQUFRLENBQUNtQixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFQWixJQURGLEVBVUU7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFFBQUksRUFBQztBQUF6QyxpQkFWRixDQVZGLENBREYsQ0FERjtBQTZCRCxDQWhGRDs7SUFBTXpCLFM7O0tBQUFBLFM7QUFrRlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgTWFpbGVyTGl0ZSA9IHJlcXVpcmUoXCJtYWlsZXJsaXRlLWFwaS12Mi1ub2RlXCIpLmRlZmF1bHQ7XG5cbmNvbnN0IG1haWxlckxpdGUgPSBNYWlsZXJMaXRlKFwiZmNkZmIwYzJkMmNlZWNlN2VlYjg4YjMzNjJmMDUxYmJcIik7XG5cblxuXG5jb25zdCBTdWJzY3JpYmUgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VySUQsIHNldFVzZXJJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXJUeXBlLCBzZXRVc2VyVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG4vLyBHRVQgVEhFIFNVQlNDUklCRVIgSURcbiAgY29uc3QgZ2V0VGhlU3Vic2NyaWJlcklkID0gKG5ld1N1YkVtYWlsKSA9PiB7XG4gICAgbWFpbGVyTGl0ZVxuICAgICAgLmdldFN1YnNjcmliZXJzKClcbiAgICAgIC50aGVuKChzdWJMaXN0KSA9PiB7XG4gICAgICAgIHN1Ykxpc3QuZmlsdGVyKChzaW5nbGVTdWIpID0+IHtcbiAgICAgICAgICBpZiAoc2luZ2xlU3ViLmVtYWlsID09PSBuZXdTdWJFbWFpbCkge1xuICAgICAgICAgICAgc2V0VXNlclR5cGUoc2luZ2xlU3ViLnR5cGUpXG4gICAgICAgICAgICBzZXRVc2VySUQoc2luZ2xlU3ViLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VySUQpO1xuICAgICAgICB9LCBbdXNlcklEXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG5cbi8vR0VUIFRIRSBVU0VSIFRZUEVcbi8vIGNvbnN0IGdldFVzZXJUeXBlID0gKGlkKSA9PiB7XG4vLyAgICAgaWYgKGlkKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG1haWxlckxpdGUuZ2V0U3Vic2NyaWJlcihpZCkpO1xuLy8gICAgIH1cbi8vIH1cblxuICBjb25zdCBfaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBnZXRUaGVTdWJzY3JpYmVySWQoZW1haWwpO1xuICAgIFxuXG4gICAgXG4gIH07XG5cblxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHVzZXJJRCk7XG4gICAgLy8gZ2V0VXNlclR5cGUodXNlcklEKTtcbiAgfSwgW3VzZXJJRF0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3Vic2NyaWJlLWFyZWEgcHRiLTEwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgPGgyPkRvxYLEhWN6IHNwb8WCZWN6bm/Fm2NpIFNlcmdpbyBTIERvcmplPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjwvZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgWmFwaXN6IHNpxJkgZG8gbmV3c2xldHRlcmEuIE90cnp5bWFzeiB3YXJ0b8WbY2lvd2UgaW5mb3JtYWpjZVxuICAgICAgICAgICAgYmV6cG/Fm3JlZG5pbyBvZCBBdXRvcmFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItZm9ybVwiIG9uU3VibWl0PXtfaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUd8OzaiBhZHJlIGVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJFTUFJTFwiXG4gICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTdWJzY3JpYmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BookLanding/Subscribe.js\n");

/***/ })

})