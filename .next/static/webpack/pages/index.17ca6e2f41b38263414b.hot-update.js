webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BookLanding/Subscribe.js":
/*!*********************************************!*\
  !*** ./components/BookLanding/Subscribe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar MailerLite = __webpack_require__(/*! mailerlite-api-v2-node */ \"./node_modules/mailerlite-api-v2-node/dist/index.js\")[\"default\"];\n\nvar mailerLite = MailerLite(\"fcdfb0c2d2ceece7eeb88b3362f051bb\");\nvar newSub = \"utnalove@gmail.com\"; // const getTheSubscriberId = (newSubEmail) => {\n//   mailerLite\n//     .getSubscribers()\n//     .then((subList) => {\n//       subList.filter((singleSub) => {\n//         if (singleSub.email === newSubEmail) {\n//           return singleSub.id;\n//         }\n//       });\n//     })\n//     .catch((error) => {\n//       console.log(error);\n//     });\n// };\n\nvar Subscribe = function Subscribe() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      userID = _useState2[0],\n      setUserID = _useState2[1];\n\n  var _handleSubmit = function _handleSubmit(e) {\n    e.preventDefault();\n\n    var getTheSubscriberId = function getTheSubscriberId(newSubEmail) {\n      mailerLite.getSubscribers().then(function (subList) {\n        subList.filter(function (singleSub) {\n          if (singleSub.email === newSubEmail) {\n            return singleSub.id;\n          }\n        });\n      })[\"catch\"](function (error) {\n        console.log(error);\n      });\n    };\n\n    getTheSubscriberId(email);\n  };\n\n  return __jsx(\"section\", {\n    className: \"subscribe-area ptb-100\"\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, __jsx(\"div\", {\n    className: \"section-title\"\n  }, __jsx(\"h2\", null, \"Do\\u0142\\u0105cz spo\\u0142eczno\\u015Bci Sergio S Dorje\"), __jsx(\"div\", {\n    className: \"bar\"\n  }), __jsx(\"p\", null, \"Zapisz si\\u0119 do newslettera. Otrzymasz warto\\u015Bciowe informajce bezpo\\u015Brednio od Autora\")), __jsx(\"form\", {\n    className: \"newsletter-form\",\n    onSubmit: _handleSubmit\n  }, __jsx(\"input\", {\n    type: \"email\",\n    className: \"form-control\",\n    placeholder: \"Tw\\xF3j adre email\",\n    name: \"EMAIL\",\n    required: true,\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    }\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    type: \"submit\"\n  }, \"Subscribe\"))));\n};\n\n_s(Subscribe, \"rHUDs6Ey0wE+DLPh4aY2rty4cLE=\");\n\n_c = Subscribe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subscribe);\n\nvar _c;\n\n$RefreshReg$(_c, \"Subscribe\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanM/ZDAyOSJdLCJuYW1lcyI6WyJNYWlsZXJMaXRlIiwicmVxdWlyZSIsIm1haWxlckxpdGUiLCJuZXdTdWIiLCJTdWJzY3JpYmUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJfaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0VGhlU3Vic2NyaWJlcklkIiwibmV3U3ViRW1haWwiLCJnZXRTdWJzY3JpYmVycyIsInRoZW4iLCJzdWJMaXN0IiwiZmlsdGVyIiwic2luZ2xlU3ViIiwiaWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLG1GQUFELENBQVAsV0FBbkI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHRixVQUFVLENBQUMsa0NBQUQsQ0FBN0I7QUFDQSxJQUFNRyxNQUFNLEdBQUcsb0JBQWYsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ2ZDLEtBRGU7QUFBQSxNQUNSQyxRQURROztBQUFBLG1CQUVNRixzREFBUSxDQUFDLEVBQUQsQ0FGZDtBQUFBLE1BRWZHLE1BRmU7QUFBQSxNQUVQQyxTQUZPOztBQUl0QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUMzQkEsS0FBQyxDQUFDQyxjQUFGOztBQUNELFFBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsV0FBRCxFQUFpQjtBQUN2Q1osZ0JBQVUsQ0FDUGEsY0FESCxHQUVHQyxJQUZILENBRVEsVUFBQ0MsT0FBRCxFQUFhO0FBQ2pCQSxlQUFPLENBQUNDLE1BQVIsQ0FBZSxVQUFDQyxTQUFELEVBQWU7QUFDNUIsY0FBSUEsU0FBUyxDQUFDYixLQUFWLEtBQW9CUSxXQUF4QixFQUFxQztBQUNuQyxtQkFBT0ssU0FBUyxDQUFDQyxFQUFqQjtBQUNEO0FBQ0YsU0FKRDtBQUtELE9BUkgsV0FTUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsT0FYSDtBQVlELEtBYko7O0FBY0dSLHNCQUFrQixDQUFDUCxLQUFELENBQWxCO0FBQ0gsR0FqQkQ7O0FBbUJBLFNBQ0U7QUFBUyxhQUFTLEVBQUM7QUFBbkIsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLDJFQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixJQUZGLEVBR0UscUhBSEYsQ0FERixFQVVFO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxZQUFRLEVBQUVJO0FBQTVDLEtBQ0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLGFBQVMsRUFBQyxjQUZaO0FBR0UsZUFBVyxFQUFDLG9CQUhkO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxZQUFRLEVBQUUsSUFMWjtBQU1FLFNBQUssRUFBRUosS0FOVDtBQU9FLFlBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLGFBQU9KLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDYSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBUFosSUFERixFQVVFO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxRQUFJLEVBQUM7QUFBekMsaUJBVkYsQ0FWRixDQURGLENBREY7QUE2QkQsQ0FwREQ7O0dBQU1yQixTOztLQUFBQSxTO0FBc0RTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQm9va0xhbmRpbmcvU3Vic2NyaWJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBNYWlsZXJMaXRlID0gcmVxdWlyZShcIm1haWxlcmxpdGUtYXBpLXYyLW5vZGVcIikuZGVmYXVsdDtcblxuY29uc3QgbWFpbGVyTGl0ZSA9IE1haWxlckxpdGUoXCJmY2RmYjBjMmQyY2VlY2U3ZWViODhiMzM2MmYwNTFiYlwiKTtcbmNvbnN0IG5ld1N1YiA9IFwidXRuYWxvdmVAZ21haWwuY29tXCI7XG5cbi8vIGNvbnN0IGdldFRoZVN1YnNjcmliZXJJZCA9IChuZXdTdWJFbWFpbCkgPT4ge1xuLy8gICBtYWlsZXJMaXRlXG4vLyAgICAgLmdldFN1YnNjcmliZXJzKClcbi8vICAgICAudGhlbigoc3ViTGlzdCkgPT4ge1xuLy8gICAgICAgc3ViTGlzdC5maWx0ZXIoKHNpbmdsZVN1YikgPT4ge1xuLy8gICAgICAgICBpZiAoc2luZ2xlU3ViLmVtYWlsID09PSBuZXdTdWJFbWFpbCkge1xuLy8gICAgICAgICAgIHJldHVybiBzaW5nbGVTdWIuaWQ7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0pO1xuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgIH0pO1xuLy8gfTtcblxuXG5cbmNvbnN0IFN1YnNjcmliZSA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXJJRCwgc2V0VXNlcklEXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IF9oYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgIGNvbnN0IGdldFRoZVN1YnNjcmliZXJJZCA9IChuZXdTdWJFbWFpbCkgPT4ge1xuICAgICAgICBtYWlsZXJMaXRlXG4gICAgICAgICAgLmdldFN1YnNjcmliZXJzKClcbiAgICAgICAgICAudGhlbigoc3ViTGlzdCkgPT4ge1xuICAgICAgICAgICAgc3ViTGlzdC5maWx0ZXIoKHNpbmdsZVN1YikgPT4ge1xuICAgICAgICAgICAgICBpZiAoc2luZ2xlU3ViLmVtYWlsID09PSBuZXdTdWJFbWFpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaW5nbGVTdWIuaWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGdldFRoZVN1YnNjcmliZXJJZChlbWFpbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdWJzY3JpYmUtYXJlYSBwdGItMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICA8aDI+RG/FgsSFY3ogc3BvxYJlY3pub8WbY2kgU2VyZ2lvIFMgRG9yamU8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBaYXBpc3ogc2nEmSBkbyBuZXdzbGV0dGVyYS4gT3RyenltYXN6IHdhcnRvxZtjaW93ZSBpbmZvcm1hamNlXG4gICAgICAgICAgICBiZXpwb8WbcmVkbmlvIG9kIEF1dG9yYVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibmV3c2xldHRlci1mb3JtXCIgb25TdWJtaXQ9e19oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR3w7NqIGFkcmUgZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cIkVNQUlMXCJcbiAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFN1YnNjcmliZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpYmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BookLanding/Subscribe.js\n");

/***/ })

})