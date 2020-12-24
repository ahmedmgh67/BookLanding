webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BookLanding/Subscribe.js":
/*!*********************************************!*\
  !*** ./components/BookLanding/Subscribe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar MailerLite = __webpack_require__(/*! mailerlite-api-v2-node */ \"./node_modules/mailerlite-api-v2-node/dist/index.js\")[\"default\"];\n\nvar mailerLite = MailerLite(\"fcdfb0c2d2ceece7eeb88b3362f051bb\");\nmailerLite.getSubscriber(922660804057212200);\n\nvar Subscribe = function Subscribe() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      userID = _useState2[0],\n      setUserID = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      userType = _useState3[0],\n      setUserType = _useState3[1]; // GET THE SUBSCRIBER ID\n\n\n  var getTheSubscriberId = function getTheSubscriberId(newSubEmail) {\n    var _s = $RefreshSig$();\n\n    mailerLite.getSubscribers().then(function (subList) {\n      subList.filter(function (singleSub) {\n        if (singleSub.email === newSubEmail) {\n          setUserID(singleSub.id);\n        }\n      });\n    })[\"catch\"](_s(function (error) {\n      _s();\n\n      Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n        console.log(userID);\n      }, [userID]);\n      console.log(error);\n    }, \"OD7bBpZva5O2jO+Puf00hKivP7c=\"));\n  }; //GET THE USER TYPE\n  // const getUserType = (id) => {\n  //     if (id) {\n  //         console.log(mailerLite.getSubscriber(id));\n  //     }\n  // }\n\n\n  var _handleSubmit = function _handleSubmit(e) {\n    e.preventDefault();\n    getTheSubscriberId(email);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(userID); // getUserType(userID);\n  }, [userID]);\n  return __jsx(\"section\", {\n    className: \"subscribe-area ptb-100\"\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, __jsx(\"div\", {\n    className: \"section-title\"\n  }, __jsx(\"h2\", null, \"Do\\u0142\\u0105cz spo\\u0142eczno\\u015Bci Sergio S Dorje\"), __jsx(\"div\", {\n    className: \"bar\"\n  }), __jsx(\"p\", null, \"Zapisz si\\u0119 do newslettera. Otrzymasz warto\\u015Bciowe informajce bezpo\\u015Brednio od Autora\")), __jsx(\"form\", {\n    className: \"newsletter-form\",\n    onSubmit: _handleSubmit\n  }, __jsx(\"input\", {\n    type: \"email\",\n    className: \"form-control\",\n    placeholder: \"Tw\\xF3j adre email\",\n    name: \"EMAIL\",\n    required: true,\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    }\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    type: \"submit\"\n  }, \"Subscribe\"))));\n};\n\n_s2(Subscribe, \"gpSZQ4B4V8wXCMc4HcgzE3qyjBs=\");\n\n_c = Subscribe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subscribe);\n\nvar _c;\n\n$RefreshReg$(_c, \"Subscribe\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rTGFuZGluZy9TdWJzY3JpYmUuanM/ZDAyOSJdLCJuYW1lcyI6WyJNYWlsZXJMaXRlIiwicmVxdWlyZSIsIm1haWxlckxpdGUiLCJnZXRTdWJzY3JpYmVyIiwiU3Vic2NyaWJlIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlcklEIiwic2V0VXNlcklEIiwidXNlclR5cGUiLCJzZXRVc2VyVHlwZSIsImdldFRoZVN1YnNjcmliZXJJZCIsIm5ld1N1YkVtYWlsIiwiZ2V0U3Vic2NyaWJlcnMiLCJ0aGVuIiwic3ViTGlzdCIsImZpbHRlciIsInNpbmdsZVN1YiIsImlkIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiX2hhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsbUZBQUQsQ0FBUCxXQUFuQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUdGLFVBQVUsQ0FBQyxrQ0FBRCxDQUE3QjtBQUVBRSxVQUFVLENBQUNDLGFBQVgsQ0FBeUIsa0JBQXpCOztBQUdBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNmQyxLQURlO0FBQUEsTUFDUkMsUUFEUTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVmRyxNQUZlO0FBQUEsTUFFUEMsU0FGTzs7QUFBQSxtQkFHVUosc0RBQVEsQ0FBQyxFQUFELENBSGxCO0FBQUEsTUFHZkssUUFIZTtBQUFBLE1BR0xDLFdBSEssa0JBTXhCOzs7QUFDRSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFdBQUQsRUFBaUI7QUFBQTs7QUFDMUNYLGNBQVUsQ0FDUFksY0FESCxHQUVHQyxJQUZILENBRVEsVUFBQ0MsT0FBRCxFQUFhO0FBQ2pCQSxhQUFPLENBQUNDLE1BQVIsQ0FBZSxVQUFDQyxTQUFELEVBQWU7QUFDNUIsWUFBSUEsU0FBUyxDQUFDWixLQUFWLEtBQW9CTyxXQUF4QixFQUFxQztBQUNuQ0osbUJBQVMsQ0FBQ1MsU0FBUyxDQUFDQyxFQUFYLENBQVQ7QUFDRDtBQUNGLE9BSkQ7QUFLRCxLQVJILGNBU1MsVUFBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUtDLDZEQUFTLENBQUMsWUFBTTtBQUNuQ0MsZUFBTyxDQUFDQyxHQUFSLENBQVlmLE1BQVo7QUFDRCxPQUY2QixFQUUzQixDQUFDQSxNQUFELENBRjJCLENBQVQ7QUFHckJjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0QsS0FiSDtBQWNELEdBZkQsQ0FQc0IsQ0F5QnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUUsTUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDM0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBZCxzQkFBa0IsQ0FBQ04sS0FBRCxDQUFsQjtBQUlELEdBUEQ7O0FBYUFlLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsTUFBWixFQURjLENBRWQ7QUFDRCxHQUhRLEVBR04sQ0FBQ0EsTUFBRCxDQUhNLENBQVQ7QUFLQSxTQUNFO0FBQVMsYUFBUyxFQUFDO0FBQW5CLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSwyRUFERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFGRixFQUdFLHFIQUhGLENBREYsRUFVRTtBQUFNLGFBQVMsRUFBQyxpQkFBaEI7QUFBa0MsWUFBUSxFQUFFZ0I7QUFBNUMsS0FDRTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSxlQUFXLEVBQUMsb0JBSGQ7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLFlBQVEsRUFBRSxJQUxaO0FBTUUsU0FBSyxFQUFFbEIsS0FOVDtBQU9FLFlBQVEsRUFBRSxrQkFBQ21CLENBQUQ7QUFBQSxhQUFPbEIsUUFBUSxDQUFDa0IsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBUFosSUFERixFQVVFO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxRQUFJLEVBQUM7QUFBekMsaUJBVkYsQ0FWRixDQURGLENBREY7QUE2QkQsQ0EvRUQ7O0lBQU14QixTOztLQUFBQSxTO0FBaUZTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQm9va0xhbmRpbmcvU3Vic2NyaWJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IE1haWxlckxpdGUgPSByZXF1aXJlKFwibWFpbGVybGl0ZS1hcGktdjItbm9kZVwiKS5kZWZhdWx0O1xuXG5jb25zdCBtYWlsZXJMaXRlID0gTWFpbGVyTGl0ZShcImZjZGZiMGMyZDJjZWVjZTdlZWI4OGIzMzYyZjA1MWJiXCIpO1xuXG5tYWlsZXJMaXRlLmdldFN1YnNjcmliZXIoOTIyNjYwODA0MDU3MjEyMjAwKTsgICBcblxuXG5jb25zdCBTdWJzY3JpYmUgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VySUQsIHNldFVzZXJJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXJUeXBlLCBzZXRVc2VyVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG4vLyBHRVQgVEhFIFNVQlNDUklCRVIgSURcbiAgY29uc3QgZ2V0VGhlU3Vic2NyaWJlcklkID0gKG5ld1N1YkVtYWlsKSA9PiB7XG4gICAgbWFpbGVyTGl0ZVxuICAgICAgLmdldFN1YnNjcmliZXJzKClcbiAgICAgIC50aGVuKChzdWJMaXN0KSA9PiB7XG4gICAgICAgIHN1Ykxpc3QuZmlsdGVyKChzaW5nbGVTdWIpID0+IHtcbiAgICAgICAgICBpZiAoc2luZ2xlU3ViLmVtYWlsID09PSBuZXdTdWJFbWFpbCkge1xuICAgICAgICAgICAgc2V0VXNlcklEKHNpbmdsZVN1Yi5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7ICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codXNlcklEKTtcbiAgICAgICAgfSwgW3VzZXJJRF0pO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuXG4vL0dFVCBUSEUgVVNFUiBUWVBFXG4vLyBjb25zdCBnZXRVc2VyVHlwZSA9IChpZCkgPT4ge1xuLy8gICAgIGlmIChpZCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhtYWlsZXJMaXRlLmdldFN1YnNjcmliZXIoaWQpKTtcbi8vICAgICB9XG4vLyB9XG5cbiAgY29uc3QgX2hhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZ2V0VGhlU3Vic2NyaWJlcklkKGVtYWlsKTtcbiAgICBcblxuICAgIFxuICB9O1xuXG5cblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VySUQpO1xuICAgIC8vIGdldFVzZXJUeXBlKHVzZXJJRCk7XG4gIH0sIFt1c2VySURdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1YnNjcmliZS1hcmVhIHB0Yi0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgIDxoMj5Eb8WCxIVjeiBzcG/FgmVjem5vxZtjaSBTZXJnaW8gUyBEb3JqZTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFphcGlzeiBzacSZIGRvIG5ld3NsZXR0ZXJhLiBPdHJ6eW1hc3ogd2FydG/Fm2Npb3dlIGluZm9ybWFqY2VcbiAgICAgICAgICAgIGJlenBvxZtyZWRuaW8gb2QgQXV0b3JhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLWZvcm1cIiBvblN1Ym1pdD17X2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHfDs2ogYWRyZSBlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiRU1BSUxcIlxuICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU3Vic2NyaWJlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BookLanding/Subscribe.js\n");

/***/ })

})