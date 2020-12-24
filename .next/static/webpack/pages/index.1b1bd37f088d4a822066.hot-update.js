webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BookLanding/Subscribe.js":
/*!*********************************************!*\
  !*** ./components/BookLanding/Subscribe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar MailerLite = __webpack_require__(/*! mailerlite-api-v2-node */ \"./node_modules/mailerlite-api-v2-node/dist/index.js\")[\"default\"];\n\nvar mailerLite = MailerLite(\"fcdfb0c2d2ceece7eeb88b3362f051bb\");\n\nvar Subscribe = function Subscribe() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      userID = _useState2[0],\n      setUserID = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      userType = _useState3[0],\n      setUserType = _useState3[1]; // GET THE SUBSCRIBER ID\n\n\n  var getTheSubscriberId = function getTheSubscriberId(newSubEmail) {\n    var _s = $RefreshSig$();\n\n    mailerLite.getSubscribers().then(function (subList) {\n      subList.filter(function (singleSub) {\n        if (singleSub.email === newSubEmail) {\n          setUserID(singleSub.id);\n        }\n      });\n    })[\"catch\"](_s(function (error) {\n      _s();\n\n      Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n        console.log(userID);\n      }, [userID]);\n      console.log(error);\n    }, \"OD7bBpZva5O2jO+Puf00hKivP7c=\"));\n  }; //GET THE USER TYPE\n\n\n  var getUserType = function getUserType(id) {\n    if (id) {\n      console.log(mailerLite.getSubscriber(id));\n    }\n  };\n\n  var _handleSubmit = function _handleSubmit(e) {\n    e.preventDefault();\n    getTheSubscriberId(email);\n    getUserType(userID);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(userID);\n  }, [userID]);\n  return __jsx(\"section\", {\n    className: \"subscribe-area ptb-100\"\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, __jsx(\"div\", {\n    className: \"section-title\"\n  }, __jsx(\"h2\", null, \"Do\\u0142\\u0105cz spo\\u0142eczno\\u015Bci Sergio S Dorje\"), __jsx(\"div\", {\n    className: \"bar\"\n  }), __jsx(\"p\", null, \"Zapisz si\\u0119 do newslettera. Otrzymasz warto\\u015Bciowe informajce bezpo\\u015Brednio od Autora\")), __jsx(\"form\", {\n    className: \"newsletter-form\",\n    onSubmit: _handleSubmit\n  }, __jsx(\"input\", {\n    type: \"email\",\n    className: \"form-control\",\n    placeholder: \"Tw\\xF3j adre email\",\n    name: \"EMAIL\",\n    required: true,\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    }\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    type: \"submit\"\n  }, \"Subscribe\"))));\n};\n\n_s2(Subscribe, \"gpSZQ4B4V8wXCMc4HcgzE3qyjBs=\");\n\n_c = Subscribe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subscribe);\n\nvar _c;\n\n$RefreshReg$(_c, \"Subscribe\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanM/ZDAyOSJdLCJuYW1lcyI6WyJNYWlsZXJMaXRlIiwicmVxdWlyZSIsIm1haWxlckxpdGUiLCJTdWJzY3JpYmUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJ1c2VyVHlwZSIsInNldFVzZXJUeXBlIiwiZ2V0VGhlU3Vic2NyaWJlcklkIiwibmV3U3ViRW1haWwiLCJnZXRTdWJzY3JpYmVycyIsInRoZW4iLCJzdWJMaXN0IiwiZmlsdGVyIiwic2luZ2xlU3ViIiwiaWQiLCJlcnJvciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyVHlwZSIsImdldFN1YnNjcmliZXIiLCJfaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxtRkFBRCxDQUFQLFdBQW5COztBQUVBLElBQU1DLFVBQVUsR0FBR0YsVUFBVSxDQUFDLGtDQUFELENBQTdCOztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNmQyxLQURlO0FBQUEsTUFDUkMsUUFEUTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVmRyxNQUZlO0FBQUEsTUFFUEMsU0FGTzs7QUFBQSxtQkFHVUosc0RBQVEsQ0FBQyxFQUFELENBSGxCO0FBQUEsTUFHZkssUUFIZTtBQUFBLE1BR0xDLFdBSEssa0JBTXhCOzs7QUFDRSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFdBQUQsRUFBaUI7QUFBQTs7QUFDMUNWLGNBQVUsQ0FDUFcsY0FESCxHQUVHQyxJQUZILENBRVEsVUFBQ0MsT0FBRCxFQUFhO0FBQ2pCQSxhQUFPLENBQUNDLE1BQVIsQ0FBZSxVQUFDQyxTQUFELEVBQWU7QUFDNUIsWUFBSUEsU0FBUyxDQUFDWixLQUFWLEtBQW9CTyxXQUF4QixFQUFxQztBQUNuQ0osbUJBQVMsQ0FBQ1MsU0FBUyxDQUFDQyxFQUFYLENBQVQ7QUFDRDtBQUNGLE9BSkQ7QUFLRCxLQVJILGNBU1MsVUFBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUtDLDZEQUFTLENBQUMsWUFBTTtBQUNuQ0MsZUFBTyxDQUFDQyxHQUFSLENBQVlmLE1BQVo7QUFDRCxPQUY2QixFQUUzQixDQUFDQSxNQUFELENBRjJCLENBQVQ7QUFHckJjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0QsS0FiSDtBQWNELEdBZkQsQ0FQc0IsQ0F5QnhCOzs7QUFDQSxNQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTCxFQUFELEVBQVE7QUFDeEIsUUFBSUEsRUFBSixFQUFRO0FBQ0pHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsVUFBVSxDQUFDc0IsYUFBWCxDQUF5Qk4sRUFBekIsQ0FBWjtBQUNIO0FBQ0osR0FKRDs7QUFNRSxNQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUMzQkEsS0FBQyxDQUFDQyxjQUFGO0FBRUFoQixzQkFBa0IsQ0FBQ04sS0FBRCxDQUFsQjtBQUNBa0IsZUFBVyxDQUFDaEIsTUFBRCxDQUFYO0FBR0QsR0FQRDs7QUFhQWEseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZixNQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNBLE1BQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFTLGFBQVMsRUFBQztBQUFuQixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsMkVBREYsRUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBRkYsRUFHRSxxSEFIRixDQURGLEVBVUU7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFlBQVEsRUFBRWtCO0FBQTVDLEtBQ0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLGFBQVMsRUFBQyxjQUZaO0FBR0UsZUFBVyxFQUFDLG9CQUhkO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxZQUFRLEVBQUUsSUFMWjtBQU1FLFNBQUssRUFBRXBCLEtBTlQ7QUFPRSxZQUFRLEVBQUUsa0JBQUNxQixDQUFEO0FBQUEsYUFBT3BCLFFBQVEsQ0FBQ29CLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQVBaLElBREYsRUFVRTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBb0MsUUFBSSxFQUFDO0FBQXpDLGlCQVZGLENBVkYsQ0FERixDQURGO0FBNkJELENBOUVEOztJQUFNMUIsUzs7S0FBQUEsUztBQWdGU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tMYW5kaW5nL1N1YnNjcmliZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBNYWlsZXJMaXRlID0gcmVxdWlyZShcIm1haWxlcmxpdGUtYXBpLXYyLW5vZGVcIikuZGVmYXVsdDtcblxuY29uc3QgbWFpbGVyTGl0ZSA9IE1haWxlckxpdGUoXCJmY2RmYjBjMmQyY2VlY2U3ZWViODhiMzM2MmYwNTFiYlwiKTtcblxuY29uc3QgU3Vic2NyaWJlID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlcklELCBzZXRVc2VySURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VyVHlwZSwgc2V0VXNlclR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuLy8gR0VUIFRIRSBTVUJTQ1JJQkVSIElEXG4gIGNvbnN0IGdldFRoZVN1YnNjcmliZXJJZCA9IChuZXdTdWJFbWFpbCkgPT4ge1xuICAgIG1haWxlckxpdGVcbiAgICAgIC5nZXRTdWJzY3JpYmVycygpXG4gICAgICAudGhlbigoc3ViTGlzdCkgPT4ge1xuICAgICAgICBzdWJMaXN0LmZpbHRlcigoc2luZ2xlU3ViKSA9PiB7XG4gICAgICAgICAgaWYgKHNpbmdsZVN1Yi5lbWFpbCA9PT0gbmV3U3ViRW1haWwpIHtcbiAgICAgICAgICAgIHNldFVzZXJJRChzaW5nbGVTdWIuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4geyAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJJRCk7XG4gICAgICAgIH0sIFt1c2VySURdKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cblxuLy9HRVQgVEhFIFVTRVIgVFlQRVxuY29uc3QgZ2V0VXNlclR5cGUgPSAoaWQpID0+IHtcbiAgICBpZiAoaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobWFpbGVyTGl0ZS5nZXRTdWJzY3JpYmVyKGlkKSk7XG4gICAgfVxufVxuXG4gIGNvbnN0IF9oYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGdldFRoZVN1YnNjcmliZXJJZChlbWFpbCk7XG4gICAgZ2V0VXNlclR5cGUodXNlcklEKVxuXG4gICAgXG4gIH07XG5cblxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHVzZXJJRCk7XG4gIH0sIFt1c2VySURdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1YnNjcmliZS1hcmVhIHB0Yi0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgIDxoMj5Eb8WCxIVjeiBzcG/FgmVjem5vxZtjaSBTZXJnaW8gUyBEb3JqZTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFphcGlzeiBzacSZIGRvIG5ld3NsZXR0ZXJhLiBPdHJ6eW1hc3ogd2FydG/Fm2Npb3dlIGluZm9ybWFqY2VcbiAgICAgICAgICAgIGJlenBvxZtyZWRuaW8gb2QgQXV0b3JhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLWZvcm1cIiBvblN1Ym1pdD17X2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHfDs2ogYWRyZSBlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiRU1BSUxcIlxuICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU3Vic2NyaWJlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BookLanding/Subscribe.js\n");

/***/ })

})