/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/supabase */ \"(pages-dir-node)/./lib/supabase.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Navigation.module.css */ \"(pages-dir-node)/./styles/Navigation.module.css\");\n/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Navigation() {\n    const [isAdmin, setIsAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Toevoegen om te controleren of de gebruiker geladen is\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Navigation.useEffect\": ()=>{\n            // Haal de ingelogde gebruiker op en kijk of ze admin zijn\n            const fetchUser = {\n                \"Navigation.useEffect.fetchUser\": async ()=>{\n                    const { data: { user } } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.getUser();\n                    const { data: adminData, error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"admins\").select(\"*\").eq(\"user_id\", user.id).single();\n                    if (adminData) {\n                        setIsAdmin(true);\n                    }\n                    setLoading(false);\n                }\n            }[\"Navigation.useEffect.fetchUser\"];\n            fetchUser();\n        }\n    }[\"Navigation.useEffect\"], []);\n    const handleLogout = async ()=>{\n        await _lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.signOut();\n        router.push(\"/login\");\n    };\n    if (loading) return null; // Wacht tot de gebruiker geladen is voordat de UI wordt weergegeven\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/components/Navigation.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/mijn-boeken\",\n                children: \"Mijn Boeken\"\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/components/Navigation.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/voortgang\",\n                children: \"Voortgang\"\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/components/Navigation.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            isAdmin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/admin-dashboard\",\n                children: \"Admin Dashboard\"\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/components/Navigation.js\",\n                lineNumber: 49,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                children: \"Uitloggen\"\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/components/Navigation.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/workspace/components/Navigation.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Q7QUFDZDtBQUNXO0FBQ2E7QUFFdEMsU0FBU007SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQyxPQUFPLHlEQUF5RDtJQUN2RyxNQUFNVSxTQUFTUCxzREFBU0E7SUFFeEJKLGdEQUFTQTtnQ0FBQztZQUNSLDBEQUEwRDtZQUMxRCxNQUFNWTtrREFBWTtvQkFDaEIsTUFBTSxFQUNKQyxNQUFNLEVBQUVDLElBQUksRUFBRSxFQUNmLEdBQUcsTUFBTVosbURBQVFBLENBQUNhLElBQUksQ0FBQ0MsT0FBTztvQkFFL0IsTUFBTSxFQUFFSCxNQUFNSSxTQUFTLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1oQixtREFBUUEsQ0FDOUNpQixJQUFJLENBQUMsVUFDTEMsTUFBTSxDQUFDLEtBQ1BDLEVBQUUsQ0FBQyxXQUFXUCxLQUFLUSxFQUFFLEVBQ3JCQyxNQUFNO29CQUVULElBQUlOLFdBQVc7d0JBQ2JULFdBQVc7b0JBQ2I7b0JBRUFFLFdBQVc7Z0JBQ2I7O1lBRUFFO1FBQ0Y7K0JBQUcsRUFBRTtJQUVMLE1BQU1ZLGVBQWU7UUFDbkIsTUFBTXRCLG1EQUFRQSxDQUFDYSxJQUFJLENBQUNVLE9BQU87UUFDM0JkLE9BQU9lLElBQUksQ0FBQztJQUNkO0lBRUEsSUFBSWpCLFNBQVMsT0FBTyxNQUFNLG9FQUFvRTtJQUU5RixxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVd2QiwwRUFBVTs7MEJBQ3hCLDhEQUFDRixrREFBSUE7Z0JBQUMwQixNQUFLOzBCQUFJOzs7Ozs7MEJBQ2YsOERBQUMxQixrREFBSUE7Z0JBQUMwQixNQUFLOzBCQUFlOzs7Ozs7MEJBQzFCLDhEQUFDMUIsa0RBQUlBO2dCQUFDMEIsTUFBSzswQkFBYTs7Ozs7O1lBR3ZCdEIseUJBQVcsOERBQUNKLGtEQUFJQTtnQkFBQzBCLE1BQUs7MEJBQW1COzs7Ozs7MEJBRTFDLDhEQUFDQztnQkFBT0MsU0FBU1A7MEJBQWM7Ozs7Ozs7Ozs7OztBQUdyQyIsInNvdXJjZXMiOlsiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jb21wb25lbnRzL05hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vbGliL3N1cGFiYXNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9OYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgW2lzQWRtaW4sIHNldElzQWRtaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gVG9ldm9lZ2VuIG9tIHRlIGNvbnRyb2xlcmVuIG9mIGRlIGdlYnJ1aWtlciBnZWxhZGVuIGlzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSGFhbCBkZSBpbmdlbG9nZGUgZ2VicnVpa2VyIG9wIGVuIGtpamsgb2YgemUgYWRtaW4gemlqblxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyB1c2VyIH0sXG4gICAgICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YTogYWRtaW5EYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJhZG1pbnNcIilcbiAgICAgICAgLnNlbGVjdChcIipcIilcbiAgICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgICAgICAuc2luZ2xlKCk7XG5cbiAgICAgIGlmIChhZG1pbkRhdGEpIHtcbiAgICAgICAgc2V0SXNBZG1pbih0cnVlKTtcbiAgICAgIH1cblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcblxuICAgIGZldGNoVXNlcigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbk91dCgpO1xuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gbnVsbDsgLy8gV2FjaHQgdG90IGRlIGdlYnJ1aWtlciBnZWxhZGVuIGlzIHZvb3JkYXQgZGUgVUkgd29yZHQgd2VlcmdlZ2V2ZW5cblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvbWlqbi1ib2VrZW5cIj5NaWpuIEJvZWtlbjwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvdm9vcnRnYW5nXCI+Vm9vcnRnYW5nPC9MaW5rPlxuXG4gICAgICB7LyogQ29udHJvbGVlciBoaWVyIG9mIGRlIGdlYnJ1aWtlciBlZW4gYWRtaW4gaXMgKi99XG4gICAgICB7aXNBZG1pbiAmJiA8TGluayBocmVmPVwiL2FkbWluLWRhc2hib2FyZFwiPkFkbWluIERhc2hib2FyZDwvTGluaz59XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5VaXRsb2dnZW48L2J1dHRvbj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN1cGFiYXNlIiwiTGluayIsInVzZVJvdXRlciIsInN0eWxlcyIsIk5hdmlnYXRpb24iLCJpc0FkbWluIiwic2V0SXNBZG1pbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiZmV0Y2hVc2VyIiwiZGF0YSIsInVzZXIiLCJhdXRoIiwiZ2V0VXNlciIsImFkbWluRGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsImVxIiwiaWQiLCJzaW5nbGUiLCJoYW5kbGVMb2dvdXQiLCJzaWduT3V0IiwicHVzaCIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Navigation.js\n");

/***/ }),

/***/ "(pages-dir-node)/./lib/supabase.js":
/*!*************************!*\
  !*** ./lib/supabase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://lsqlcvhmurbjutqksony.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzcWxjdmhtdXJianV0cWtzb255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MzM3MjUsImV4cCI6MjA1ODMwOTcyNX0.274n45piIhiRcHdIE5atDP8JYMAY-AsThwbVWAgufmU\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9zdXBhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDcUQ7QUFFckQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGtCQUFrQkgsa05BQXlDO0FBRTFELE1BQU1LLFdBQVdQLG1FQUFZQSxDQUFDQyxhQUFhSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvbGliL3N1cGFiYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkw7XG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWTtcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/supabase.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/supabase */ \"(pages-dir-node)/./lib/supabase.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation */ \"(pages-dir-node)/./components/Navigation.js\");\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Controleer of de huidige route de loginpagina is\n    const isLoginPage = router.pathname === \"/login\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"App.useEffect\": ()=>{\n            const checkUser = {\n                \"App.useEffect.checkUser\": async ()=>{\n                    try {\n                        const { data: { user } } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getUser();\n                        if (user) {\n                            setUser(user);\n                        } else if (!isLoginPage) {\n                            // Als geen gebruiker is ingelogd EN het is niet de loginpagina\n                            router.replace(\"/login\");\n                        }\n                    } catch (error) {\n                        console.error(\"Fout bij het controleren van gebruiker:\", error);\n                        if (!isLoginPage) {\n                            router.replace(\"/login\");\n                        }\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"App.useEffect.checkUser\"];\n            // Luister naar veranderingen in authenticatiestatus\n            const { data: authListener } = _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange({\n                \"App.useEffect\": (event, session)=>{\n                    if (event === 'SIGNED_OUT') {\n                        setUser(null);\n                        if (!isLoginPage) {\n                            router.replace(\"/login\");\n                        }\n                    } else if (event === 'SIGNED_IN') {\n                        setUser(session?.user || null);\n                    }\n                }\n            }[\"App.useEffect\"]);\n            // Controleer gebruiker bij initiële laadbeurt\n            checkUser();\n            // Opruimen van listener\n            return ({\n                \"App.useEffect\": ()=>{\n                    authListener.subscription.unsubscribe();\n                }\n            })[\"App.useEffect\"];\n        }\n    }[\"App.useEffect\"], [\n        router,\n        isLoginPage\n    ]);\n    // Toon niets tijdens het laden en als geen gebruiker is\n    if (loading || !user && !isLoginPage) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                !isLoginPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/_app.js\",\n                    lineNumber: 69,\n                    columnNumber: 28\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps,\n                    user: user\n                }, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/_app.js\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : // Render alleen de login component als er geen gebruiker is\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/runner/workspace/pages/_app.js\",\n            lineNumber: 75,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDRztBQUNiO0FBQ29CO0FBRW5DLFNBQVNLLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNWSxTQUFTVixzREFBU0E7SUFFeEIsbURBQW1EO0lBQ25ELE1BQU1XLGNBQWNELE9BQU9FLFFBQVEsS0FBSztJQUV4Q2IsZ0RBQVNBO3lCQUFDO1lBQ1IsTUFBTWM7MkNBQVk7b0JBQ2hCLElBQUk7d0JBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVSLElBQUksRUFBRSxFQUFFLEdBQUcsTUFBTUwsbURBQVFBLENBQUNjLElBQUksQ0FBQ0MsT0FBTzt3QkFFdEQsSUFBSVYsTUFBTTs0QkFDUkMsUUFBUUQ7d0JBQ1YsT0FBTyxJQUFJLENBQUNLLGFBQWE7NEJBQ3ZCLCtEQUErRDs0QkFDL0RELE9BQU9PLE9BQU8sQ0FBQzt3QkFDakI7b0JBQ0YsRUFBRSxPQUFPQyxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMkNBQTJDQTt3QkFDekQsSUFBSSxDQUFDUCxhQUFhOzRCQUNoQkQsT0FBT08sT0FBTyxDQUFDO3dCQUNqQjtvQkFDRixTQUFVO3dCQUNSUixXQUFXO29CQUNiO2dCQUNGOztZQUVBLG9EQUFvRDtZQUNwRCxNQUFNLEVBQUVLLE1BQU1NLFlBQVksRUFBRSxHQUFHbkIsbURBQVFBLENBQUNjLElBQUksQ0FBQ00saUJBQWlCO2lDQUM1RCxDQUFDQyxPQUFPQztvQkFDTixJQUFJRCxVQUFVLGNBQWM7d0JBQzFCZixRQUFRO3dCQUNSLElBQUksQ0FBQ0ksYUFBYTs0QkFDaEJELE9BQU9PLE9BQU8sQ0FBQzt3QkFDakI7b0JBQ0YsT0FBTyxJQUFJSyxVQUFVLGFBQWE7d0JBQ2hDZixRQUFRZ0IsU0FBU2pCLFFBQVE7b0JBQzNCO2dCQUNGOztZQUdGLDhDQUE4QztZQUM5Q087WUFFQSx3QkFBd0I7WUFDeEI7aUNBQU87b0JBQ0xPLGFBQWFJLFlBQVksQ0FBQ0MsV0FBVztnQkFDdkM7O1FBQ0Y7d0JBQUc7UUFBQ2Y7UUFBUUM7S0FBWTtJQUV4Qix3REFBd0Q7SUFDeEQsSUFBSUgsV0FBWSxDQUFDRixRQUFRLENBQUNLLGFBQWM7UUFDdEMsT0FBTztJQUNUO0lBRUEscUJBQ0U7a0JBQ0dMLHFCQUNDOztnQkFFRyxDQUFDSyw2QkFBZSw4REFBQ1QsOERBQVVBOzs7Ozs4QkFFNUIsOERBQUNFO29CQUFXLEdBQUdDLFNBQVM7b0JBQUVDLE1BQU1BOzs7Ozs7OzJCQUdsQyw0REFBNEQ7c0JBQzVELDhEQUFDRjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9saWIvc3VwYWJhc2VcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBDb250cm9sZWVyIG9mIGRlIGh1aWRpZ2Ugcm91dGUgZGUgbG9naW5wYWdpbmEgaXNcbiAgY29uc3QgaXNMb2dpblBhZ2UgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2xvZ2luXCI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1VzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcblxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTG9naW5QYWdlKSB7XG4gICAgICAgICAgLy8gQWxzIGdlZW4gZ2VicnVpa2VyIGlzIGluZ2Vsb2dkIEVOIGhldCBpcyBuaWV0IGRlIGxvZ2lucGFnaW5hXG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGb3V0IGJpaiBoZXQgY29udHJvbGVyZW4gdmFuIGdlYnJ1aWtlcjpcIiwgZXJyb3IpO1xuICAgICAgICBpZiAoIWlzTG9naW5QYWdlKSB7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBMdWlzdGVyIG5hYXIgdmVyYW5kZXJpbmdlbiBpbiBhdXRoZW50aWNhdGllc3RhdHVzXG4gICAgY29uc3QgeyBkYXRhOiBhdXRoTGlzdGVuZXIgfSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoXG4gICAgICAoZXZlbnQsIHNlc3Npb24pID0+IHtcbiAgICAgICAgaWYgKGV2ZW50ID09PSAnU0lHTkVEX09VVCcpIHtcbiAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICAgIGlmICghaXNMb2dpblBhZ2UpIHtcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ1NJR05FRF9JTicpIHtcbiAgICAgICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIgfHwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gQ29udHJvbGVlciBnZWJydWlrZXIgYmlqIGluaXRpw6tsZSBsYWFkYmV1cnRcbiAgICBjaGVja1VzZXIoKTtcblxuICAgIC8vIE9wcnVpbWVuIHZhbiBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhdXRoTGlzdGVuZXIuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3JvdXRlciwgaXNMb2dpblBhZ2VdKTtcblxuICAvLyBUb29uIG5pZXRzIHRpamRlbnMgaGV0IGxhZGVuIGVuIGFscyBnZWVuIGdlYnJ1aWtlciBpc1xuICBpZiAobG9hZGluZyB8fCAoIXVzZXIgJiYgIWlzTG9naW5QYWdlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXIgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgey8qIEFsbGVlbiB3ZWVyZ2V2ZW4gYWxzIGRlIHBhZ2luYSBuaWV0IGRlIGxvZ2lucGFnaW5hIGlzICovfVxuICAgICAgICAgIHshaXNMb2dpblBhZ2UgJiYgPE5hdmlnYXRpb24gLz59XG4gICAgICAgICAgey8qIEdlZWYgZGUgZ2VicnVpa2VyIGRvb3IgYWxzIHByb3AgYWFuIGFsbGUgcGFnaW5hJ3MgKi99XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIC8vIFJlbmRlciBhbGxlZW4gZGUgbG9naW4gY29tcG9uZW50IGFscyBlciBnZWVuIGdlYnJ1aWtlciBpc1xuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN1cGFiYXNlIiwiTmF2aWdhdGlvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJpc0xvZ2luUGFnZSIsInBhdGhuYW1lIiwiY2hlY2tVc2VyIiwiZGF0YSIsImF1dGgiLCJnZXRVc2VyIiwicmVwbGFjZSIsImVycm9yIiwiY29uc29sZSIsImF1dGhMaXN0ZW5lciIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiZXZlbnQiLCJzZXNzaW9uIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/Navigation.module.css":
/*!**************************************!*\
  !*** ./styles/Navigation.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"nav\": \"Navigation_nav__facdA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0eWxlcy9OYXZpZ2F0aW9uLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2Uvc3R5bGVzL05hdmlnYXRpb24ubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZcIjogXCJOYXZpZ2F0aW9uX25hdl9fZmFjZEFcIlxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/Navigation.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();