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
exports.id = "pages/admin/boek/[id]";
exports.ids = ["pages/admin/boek/[id]"];
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

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fadmin%2Fboek%2F%5Bid%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fadmin%2Fboek%2F%5Bid%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fadmin%2Fboek%2F%5Bid%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fadmin%2Fboek%2F%5Bid%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var _pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/admin/boek/[id].js */ \"(pages-dir-node)/./pages/admin/boek/[id].js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__]);\n_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/admin/boek/[id]\",\n        pathname: \"/admin/boek/[id]\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_admin_boek_id_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZhZG1pbiUyRmJvZWslMkYlNUJpZCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYWRtaW4lMkZib2VrJTJGJTVCaWQlNUQuanMmYWJzb2x1dGVBcHBQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9hcHAmYWJzb2x1dGVEb2N1bWVudFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2RvY3VtZW50Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RjtBQUNoQztBQUNFO0FBQzFEO0FBQ3lEO0FBQ1Y7QUFDL0M7QUFDdUQ7QUFDdkQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLG9EQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLG9EQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLG9EQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLG9EQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyxvREFBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyxvREFBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLG9EQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLG9EQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLG9EQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLG9EQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLG9EQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLGtHQUFnQjtBQUMvQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw4REFBVztBQUN4QixrQkFBa0Isb0VBQWdCO0FBQ2xDLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpQyIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCAqIGFzIGRvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hZG1pbi9ib2VrL1tpZF0uanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgY29tcG9uZW50IChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IGhvaXN0KHVzZXJsYW5kLCAncmVwb3J0V2ViVml0YWxzJyk7XG4vLyBSZS1leHBvcnQgbGVnYWN5IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVMsXG4gICAgICAgIHBhZ2U6IFwiL2FkbWluL2JvZWsvW2lkXVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYWRtaW4vYm9lay9baWRdXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAvLyBkZWZhdWx0IGV4cG9ydCBtaWdodCBub3QgZXhpc3Qgd2hlbiBvcHRpbWl6ZWQgZm9yIGRhdGEgb25seVxuICAgICAgICBBcHA6IGFwcC5kZWZhdWx0LFxuICAgICAgICBEb2N1bWVudDogZG9jdW1lbnQuZGVmYXVsdFxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fadmin%2Fboek%2F%5Bid%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fadmin%2Fboek%2F%5Bid%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/supabase */ \"(pages-dir-node)/./lib/supabase.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation */ \"(pages-dir-node)/./components/Navigation.js\");\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Controleer of de huidige route de loginpagina is\n    const isLoginPage = router.pathname === \"/login\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"App.useEffect\": ()=>{\n            const checkUser = {\n                \"App.useEffect.checkUser\": async ()=>{\n                    try {\n                        const { data: { user } } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getUser();\n                        if (user) {\n                            setUser(user);\n                        } else if (!isLoginPage) {\n                            // Als geen gebruiker is ingelogd EN het is niet de loginpagina\n                            router.replace(\"/login\");\n                        }\n                    } catch (error) {\n                        console.error(\"Fout bij het controleren van gebruiker:\", error);\n                        if (!isLoginPage) {\n                            router.replace(\"/login\");\n                        }\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"App.useEffect.checkUser\"];\n            // Luister naar veranderingen in authenticatiestatus\n            const { data: authListener } = _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange({\n                \"App.useEffect\": (event, session)=>{\n                    if (event === 'SIGNED_OUT') {\n                        setUser(null);\n                        if (!isLoginPage) {\n                            router.replace(\"/login\");\n                        }\n                    } else if (event === 'SIGNED_IN') {\n                        setUser(session?.user || null);\n                    }\n                }\n            }[\"App.useEffect\"]);\n            // Controleer gebruiker bij initiële laadbeurt\n            checkUser();\n            // Opruimen van listener\n            return ({\n                \"App.useEffect\": ()=>{\n                    authListener.subscription.unsubscribe();\n                }\n            })[\"App.useEffect\"];\n        }\n    }[\"App.useEffect\"], [\n        router,\n        isLoginPage\n    ]);\n    // Toon niets tijdens het laden en als geen gebruiker is\n    if (loading || !user && !isLoginPage) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                !isLoginPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/_app.js\",\n                    lineNumber: 69,\n                    columnNumber: 28\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps,\n                    user: user\n                }, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/_app.js\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : // Render alleen de login component als er geen gebruiker is\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/runner/workspace/pages/_app.js\",\n            lineNumber: 75,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDRztBQUNiO0FBQ29CO0FBRW5DLFNBQVNLLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNWSxTQUFTVixzREFBU0E7SUFFeEIsbURBQW1EO0lBQ25ELE1BQU1XLGNBQWNELE9BQU9FLFFBQVEsS0FBSztJQUV4Q2IsZ0RBQVNBO3lCQUFDO1lBQ1IsTUFBTWM7MkNBQVk7b0JBQ2hCLElBQUk7d0JBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVSLElBQUksRUFBRSxFQUFFLEdBQUcsTUFBTUwsbURBQVFBLENBQUNjLElBQUksQ0FBQ0MsT0FBTzt3QkFFdEQsSUFBSVYsTUFBTTs0QkFDUkMsUUFBUUQ7d0JBQ1YsT0FBTyxJQUFJLENBQUNLLGFBQWE7NEJBQ3ZCLCtEQUErRDs0QkFDL0RELE9BQU9PLE9BQU8sQ0FBQzt3QkFDakI7b0JBQ0YsRUFBRSxPQUFPQyxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMkNBQTJDQTt3QkFDekQsSUFBSSxDQUFDUCxhQUFhOzRCQUNoQkQsT0FBT08sT0FBTyxDQUFDO3dCQUNqQjtvQkFDRixTQUFVO3dCQUNSUixXQUFXO29CQUNiO2dCQUNGOztZQUVBLG9EQUFvRDtZQUNwRCxNQUFNLEVBQUVLLE1BQU1NLFlBQVksRUFBRSxHQUFHbkIsbURBQVFBLENBQUNjLElBQUksQ0FBQ00saUJBQWlCO2lDQUM1RCxDQUFDQyxPQUFPQztvQkFDTixJQUFJRCxVQUFVLGNBQWM7d0JBQzFCZixRQUFRO3dCQUNSLElBQUksQ0FBQ0ksYUFBYTs0QkFDaEJELE9BQU9PLE9BQU8sQ0FBQzt3QkFDakI7b0JBQ0YsT0FBTyxJQUFJSyxVQUFVLGFBQWE7d0JBQ2hDZixRQUFRZ0IsU0FBU2pCLFFBQVE7b0JBQzNCO2dCQUNGOztZQUdGLDhDQUE4QztZQUM5Q087WUFFQSx3QkFBd0I7WUFDeEI7aUNBQU87b0JBQ0xPLGFBQWFJLFlBQVksQ0FBQ0MsV0FBVztnQkFDdkM7O1FBQ0Y7d0JBQUc7UUFBQ2Y7UUFBUUM7S0FBWTtJQUV4Qix3REFBd0Q7SUFDeEQsSUFBSUgsV0FBWSxDQUFDRixRQUFRLENBQUNLLGFBQWM7UUFDdEMsT0FBTztJQUNUO0lBRUEscUJBQ0U7a0JBQ0dMLHFCQUNDOztnQkFFRyxDQUFDSyw2QkFBZSw4REFBQ1QsOERBQVVBOzs7Ozs4QkFFNUIsOERBQUNFO29CQUFXLEdBQUdDLFNBQVM7b0JBQUVDLE1BQU1BOzs7Ozs7OzJCQUdsQyw0REFBNEQ7c0JBQzVELDhEQUFDRjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9saWIvc3VwYWJhc2VcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBDb250cm9sZWVyIG9mIGRlIGh1aWRpZ2Ugcm91dGUgZGUgbG9naW5wYWdpbmEgaXNcbiAgY29uc3QgaXNMb2dpblBhZ2UgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2xvZ2luXCI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1VzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcblxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTG9naW5QYWdlKSB7XG4gICAgICAgICAgLy8gQWxzIGdlZW4gZ2VicnVpa2VyIGlzIGluZ2Vsb2dkIEVOIGhldCBpcyBuaWV0IGRlIGxvZ2lucGFnaW5hXG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGb3V0IGJpaiBoZXQgY29udHJvbGVyZW4gdmFuIGdlYnJ1aWtlcjpcIiwgZXJyb3IpO1xuICAgICAgICBpZiAoIWlzTG9naW5QYWdlKSB7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBMdWlzdGVyIG5hYXIgdmVyYW5kZXJpbmdlbiBpbiBhdXRoZW50aWNhdGllc3RhdHVzXG4gICAgY29uc3QgeyBkYXRhOiBhdXRoTGlzdGVuZXIgfSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoXG4gICAgICAoZXZlbnQsIHNlc3Npb24pID0+IHtcbiAgICAgICAgaWYgKGV2ZW50ID09PSAnU0lHTkVEX09VVCcpIHtcbiAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICAgIGlmICghaXNMb2dpblBhZ2UpIHtcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ1NJR05FRF9JTicpIHtcbiAgICAgICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIgfHwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gQ29udHJvbGVlciBnZWJydWlrZXIgYmlqIGluaXRpw6tsZSBsYWFkYmV1cnRcbiAgICBjaGVja1VzZXIoKTtcblxuICAgIC8vIE9wcnVpbWVuIHZhbiBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhdXRoTGlzdGVuZXIuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3JvdXRlciwgaXNMb2dpblBhZ2VdKTtcblxuICAvLyBUb29uIG5pZXRzIHRpamRlbnMgaGV0IGxhZGVuIGVuIGFscyBnZWVuIGdlYnJ1aWtlciBpc1xuICBpZiAobG9hZGluZyB8fCAoIXVzZXIgJiYgIWlzTG9naW5QYWdlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXIgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgey8qIEFsbGVlbiB3ZWVyZ2V2ZW4gYWxzIGRlIHBhZ2luYSBuaWV0IGRlIGxvZ2lucGFnaW5hIGlzICovfVxuICAgICAgICAgIHshaXNMb2dpblBhZ2UgJiYgPE5hdmlnYXRpb24gLz59XG4gICAgICAgICAgey8qIEdlZWYgZGUgZ2VicnVpa2VyIGRvb3IgYWxzIHByb3AgYWFuIGFsbGUgcGFnaW5hJ3MgKi99XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIC8vIFJlbmRlciBhbGxlZW4gZGUgbG9naW4gY29tcG9uZW50IGFscyBlciBnZWVuIGdlYnJ1aWtlciBpc1xuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN1cGFiYXNlIiwiTmF2aWdhdGlvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJpc0xvZ2luUGFnZSIsInBhdGhuYW1lIiwiY2hlY2tVc2VyIiwiZGF0YSIsImF1dGgiLCJnZXRVc2VyIiwicmVwbGFjZSIsImVycm9yIiwiY29uc29sZSIsImF1dGhMaXN0ZW5lciIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiZXZlbnQiLCJzZXNzaW9uIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/admin/boek/[id].js":
/*!**********************************!*\
  !*** ./pages/admin/boek/[id].js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookEditPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/supabase */ \"(pages-dir-node)/./lib/supabase.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,MenuItem,Select,TextField!=!@mui/material */ \"(pages-dir-node)/__barrel_optimize__?names=Box,Button,MenuItem,Select,TextField!=!./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-data-grid */ \"@mui/x-data-grid\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/Admin.module.css */ \"(pages-dir-node)/./styles/Admin.module.css\");\n/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__]);\n_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction BookEditPage() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const isNew = id === \"new\";\n    const [boek, setBoek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        titel: \"\",\n        beschrijving: \"\",\n        categorie_id: \"\"\n    });\n    const [lessen, setLessen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newLesson, setNewLesson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        titel: \"\",\n        les_url: \"\",\n        volgorde_nummer: 1\n    });\n    const [playlistUrl, setPlaylistUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"BookEditPage.useEffect\": ()=>{\n            const loadBoek = {\n                \"BookEditPage.useEffect.loadBoek\": async ()=>{\n                    if (!isNew && id) {\n                        const { data } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"boeken\").select(\"*\").eq(\"id\", id).single();\n                        if (data) setBoek(data);\n                        const { data: lessonData } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").select(\"*\").eq(\"boek_id\", id).order(\"volgorde_nummer\", {\n                            ascending: true\n                        });\n                        setLessen(lessonData || []);\n                    }\n                }\n            }[\"BookEditPage.useEffect.loadBoek\"];\n            loadBoek();\n            loadCategories();\n        }\n    }[\"BookEditPage.useEffect\"], [\n        id,\n        isNew\n    ]);\n    const loadCategories = async ()=>{\n        const { data } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"categorieen\").select(\"*\");\n        setCategories(data || []);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            if (isNew) {\n                await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"boeken\").insert(boek);\n            } else {\n                await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"boeken\").update(boek).eq(\"id\", id);\n            }\n            router.push(\"/admin-dashboard\");\n        } catch (error) {\n            console.error(\"Error saving book:\", error);\n        }\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setBoek((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleProcessPlaylist = async ()=>{\n        if (!playlistUrl) return;\n        try {\n            // Extract video IDs from playlist URL\n            let playlistId = \"\";\n            if (playlistUrl.includes(\"youtube.com\") || playlistUrl.includes(\"youtu.be\")) {\n                playlistId = playlistUrl.match(/[?&]list=([^&]+)/)?.[1];\n                if (!playlistId) {\n                    alert(\"Ongeldige YouTube playlist URL\");\n                    return;\n                }\n                // Fetch playlist data from YouTube API\n                const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${\"AIzaSyAZdVUeiDo4333xxgbKzJQsqO90fL-HME8\"}`);\n                const data = await response.json();\n                // Create lessons from playlist items\n                const newLessons = data.items.map((item, index)=>({\n                        titel: item.snippet.title,\n                        les_url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,\n                        volgorde_nummer: index + 1,\n                        boek_id: id\n                    }));\n                // Insert all lessons into database\n                const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").insert(newLessons);\n                if (error) throw error;\n                // Update local state\n                setLessen((prev)=>[\n                        ...prev,\n                        ...newLessons\n                    ]);\n                alert(\"Lessen succesvol aangemaakt van playlist!\");\n            } else if (playlistUrl.includes(\"soundcloud.com\")) {\n                console.log(\"SoundCloud playlist URL detected\");\n                // Call the scraping API\n                const res = await fetch(\"/api/scrape?url=\" + encodeURIComponent(playlistUrl));\n                const data = await res.json();\n                if (!data.tracks) {\n                    throw new Error(\"Geen tracks gevonden in playlist\");\n                }\n                console.log(\"Tracks:\", data.tracks);\n                const newLessons = data.tracks.map((track, index)=>({\n                        id: `temp_${Date.now()}_${index}`,\n                        titel: track.title,\n                        les_url: track.url,\n                        volgorde_nummer: index + 1,\n                        boek_id: id\n                    }));\n                // Insert all lessons into the database\n                const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").insert(newLessons);\n                if (error) throw error;\n                // Update local state\n                setLessen((prev)=>[\n                        ...prev,\n                        ...newLessons\n                    ]);\n                alert(\"Lessen succesvol aangemaakt van SoundCloud playlist!\");\n            } else {\n                alert(\"Voer een geldige YouTube of SoundCloud playlist URL in\");\n            }\n        } catch (error) {\n            console.error(\"Error processing playlist:\", error);\n            alert(\"Er is een fout opgetreden bij het verwerken van de playlist\");\n        }\n    };\n    const handleAddLesson = async ()=>{\n        const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").insert({\n            ...newLesson,\n            boek_id: id\n        });\n        if (!error) {\n            setLessen((prev)=>[\n                    ...prev,\n                    {\n                        ...newLesson,\n                        id: Math.random().toString()\n                    }\n                ]); // Temporary ID for local display\n            setNewLesson({\n                titel: \"\",\n                les_url: \"\",\n                volgorde_nummer: 1\n            });\n        }\n    };\n    const handleDeleteLesson = async (lessonId)=>{\n        const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").delete().eq(\"id\", lessonId);\n        if (!error) {\n            setLessen((prev)=>prev.filter((les)=>les.id !== lessonId));\n        }\n    };\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 90\n        },\n        {\n            field: \"titel\",\n            headerName: \"Titel\",\n            width: 200\n        },\n        {\n            field: \"les_url\",\n            headerName: \"Les URL\",\n            width: 200\n        },\n        {\n            field: \"volgorde_nummer\",\n            headerName: \"Volgorde Nummer\",\n            width: 150\n        },\n        {\n            field: \"actions\",\n            headerName: \"Acties\",\n            width: 200,\n            renderCell: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    variant: \"contained\",\n                    color: \"error\",\n                    size: \"small\",\n                    onClick: ()=>handleDeleteLesson(params.row.id),\n                    children: \"Verwijderen\"\n                }, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                    lineNumber: 181,\n                    columnNumber: 9\n                }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: isNew ? \"Nieuw Boek\" : \"Boek Bewerken\"\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                lineNumber: 195,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                component: \"form\",\n                onSubmit: handleSubmit,\n                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        fullWidth: true,\n                        label: \"Titel\",\n                        name: \"titel\",\n                        value: boek.titel,\n                        onChange: handleChange,\n                        margin: \"normal\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 197,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        fullWidth: true,\n                        label: \"Beschrijving\",\n                        name: \"beschrijving\",\n                        value: boek.beschrijving,\n                        onChange: handleChange,\n                        margin: \"normal\",\n                        multiline: true,\n                        rows: 4\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 205,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Select, {\n                        fullWidth: true,\n                        label: \"Categorie\",\n                        name: \"categorie_id\",\n                        value: boek.categorie_id,\n                        onChange: handleChange,\n                        margin: \"normal\",\n                        children: categories.map((cat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                                value: cat.id,\n                                children: cat.naam\n                            }, cat.id, false, {\n                                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                                lineNumber: 224,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 215,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        type: \"submit\",\n                        variant: \"contained\",\n                        color: \"primary\",\n                        children: isNew ? \"Toevoegen\" : \"Opslaan\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 229,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                lineNumber: 196,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                sx: {\n                    mt: 4,\n                    mb: 2\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Playlist Toevoegen\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 235,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        fullWidth: true,\n                        label: \"Playlist URL (YouTube/SoundCloud)\",\n                        variant: \"outlined\",\n                        sx: {\n                            mb: 2\n                        },\n                        onChange: (e)=>setPlaylistUrl(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 236,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        variant: \"contained\",\n                        color: \"secondary\",\n                        onClick: handleProcessPlaylist,\n                        sx: {\n                            mr: 2\n                        },\n                        children: \"Playlist Verwerken\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 243,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                lineNumber: 234,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                component: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Titel\",\n                        value: newLesson.titel,\n                        onChange: (e)=>setNewLesson({\n                                ...newLesson,\n                                titel: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 254,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Les URL\",\n                        value: newLesson.les_url,\n                        onChange: (e)=>setNewLesson({\n                                ...newLesson,\n                                les_url: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 262,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        placeholder: \"Volgorde Nummer\",\n                        value: newLesson.volgorde_nummer,\n                        onChange: (e)=>setNewLesson({\n                                ...newLesson,\n                                volgorde_nummer: Number(e.target.value)\n                            })\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 270,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        variant: \"contained\",\n                        onClick: handleAddLesson,\n                        children: \"Voeg Les Toe\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 281,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                lineNumber: 253,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_MenuItem_Select_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                sx: {\n                    height: 400,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__.DataGrid, {\n                    rows: lessen,\n                    columns: columns,\n                    pageSize: 5,\n                    rowsPerPageOptions: [\n                        5\n                    ],\n                    getRowId: (row)=>row.id\n                }, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                    lineNumber: 287,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                lineNumber: 286,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n        lineNumber: 194,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2FkbWluL2JvZWsvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ1M7QUFDd0I7QUFDN0I7QUFDVTtBQUV2QyxTQUFTVztJQUN0QixNQUFNQyxTQUFTVixzREFBU0E7SUFDeEIsTUFBTSxFQUFFVyxFQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUMzQixNQUFNQyxRQUFRRixPQUFPO0lBRXJCLE1BQU0sQ0FBQ0csTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7UUFDL0JpQixPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsY0FBYztJQUNoQjtJQUNBLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHckIsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNzQixZQUFZQyxjQUFjLEdBQUd2QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ3dCLFdBQVdDLGFBQWEsR0FBR3pCLCtDQUFRQSxDQUFDO1FBQ3pDaUIsT0FBTztRQUNQUyxTQUFTO1FBQ1RDLGlCQUFpQjtJQUNuQjtJQUNBLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHN0IsK0NBQVFBLENBQUM7SUFFL0NELGdEQUFTQTtrQ0FBQztZQUNSLE1BQU0rQjttREFBVztvQkFDZixJQUFJLENBQUNoQixTQUFTRixJQUFJO3dCQUNoQixNQUFNLEVBQUVtQixJQUFJLEVBQUUsR0FBRyxNQUFNN0IsbURBQVFBLENBQzVCOEIsSUFBSSxDQUFDLFVBQ0xDLE1BQU0sQ0FBQyxLQUNQQyxFQUFFLENBQUMsTUFBTXRCLElBQ1R1QixNQUFNO3dCQUNULElBQUlKLE1BQU1mLFFBQVFlO3dCQUVsQixNQUFNLEVBQUVBLE1BQU1LLFVBQVUsRUFBRSxHQUFHLE1BQU1sQyxtREFBUUEsQ0FDeEM4QixJQUFJLENBQUMsVUFDTEMsTUFBTSxDQUFDLEtBQ1BDLEVBQUUsQ0FBQyxXQUFXdEIsSUFDZHlCLEtBQUssQ0FBQyxt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Ozs7a0NBR3ZELDhEQUFDMEU7d0JBQ0NOLE1BQUs7d0JBQ0xPLGFBQVk7d0JBQ1ozRSxPQUFPMUIsVUFBVUUsT0FBTzt3QkFDeEJzRixVQUFVLENBQUN2RSxJQUNUaEIsYUFBYTtnQ0FBRSxHQUFHRCxTQUFTO2dDQUFFRSxTQUFTZSxFQUFFVSxNQUFNLENBQUNELEtBQUs7NEJBQUM7Ozs7OztrQ0FHekQsOERBQUMwRTt3QkFDQ04sTUFBSzt3QkFDTE8sYUFBWTt3QkFDWjNFLE9BQU8xQixVQUFVRyxlQUFlO3dCQUNoQ3FGLFVBQVUsQ0FBQ3ZFLElBQ1RoQixhQUFhO2dDQUNYLEdBQUdELFNBQVM7Z0NBQ1pHLGlCQUFpQm1HLE9BQU9yRixFQUFFVSxNQUFNLENBQUNELEtBQUs7NEJBQ3hDOzs7Ozs7a0NBR0osOERBQUM5Qyw0R0FBTUE7d0JBQUM4RixTQUFRO3dCQUFZRyxTQUFTbEI7a0NBQWlCOzs7Ozs7Ozs7Ozs7MEJBS3hELDhEQUFDOUUseUdBQUdBO2dCQUFDa0gsSUFBSTtvQkFBRVEsUUFBUTtvQkFBS2hDLE9BQU87Z0JBQU87MEJBQ3BDLDRFQUFDdkYsc0RBQVFBO29CQUNQMkcsTUFBTS9GO29CQUNOd0UsU0FBU0E7b0JBQ1RvQyxVQUFVO29CQUNWQyxvQkFBb0I7d0JBQUM7cUJBQUU7b0JBQ3ZCQyxVQUFVLENBQUM1QixNQUFRQSxJQUFJMUYsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkMiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvcGFnZXMvYWRtaW4vYm9lay9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgQm94LCBTZWxlY3QsIE1lbnVJdGVtIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IERhdGFHcmlkIH0gZnJvbSBcIkBtdWkveC1kYXRhLWdyaWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9BZG1pbi5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tFZGl0UGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgaXNOZXcgPSBpZCA9PT0gXCJuZXdcIjtcblxuICBjb25zdCBbYm9laywgc2V0Qm9la10gPSB1c2VTdGF0ZSh7XG4gICAgdGl0ZWw6IFwiXCIsXG4gICAgYmVzY2hyaWp2aW5nOiBcIlwiLFxuICAgIGNhdGVnb3JpZV9pZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtsZXNzZW4sIHNldExlc3Nlbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld0xlc3Nvbiwgc2V0TmV3TGVzc29uXSA9IHVzZVN0YXRlKHtcbiAgICB0aXRlbDogXCJcIixcbiAgICBsZXNfdXJsOiBcIlwiLFxuICAgIHZvbGdvcmRlX251bW1lcjogMSxcbiAgfSk7XG4gIGNvbnN0IFtwbGF5bGlzdFVybCwgc2V0UGxheWxpc3RVcmxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQm9layA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghaXNOZXcgJiYgaWQpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgIC5mcm9tKFwiYm9la2VuXCIpXG4gICAgICAgICAgLnNlbGVjdChcIipcIilcbiAgICAgICAgICAuZXEoXCJpZFwiLCBpZClcbiAgICAgICAgICAuc2luZ2xlKCk7XG4gICAgICAgIGlmIChkYXRhKSBzZXRCb2VrKGRhdGEpO1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YTogbGVzc29uRGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAuZnJvbShcImxlc3NlblwiKVxuICAgICAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAgICAgLmVxKFwiYm9la19pZFwiLCBpZClcbiAgICAgICAgICAub3JkZXIoXCJ2b2xnb3JkZV9udW1tZXJcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG4gICAgICAgIHNldExlc3NlbihsZXNzb25EYXRhIHx8IFtdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZEJvZWsoKTtcbiAgICBsb2FkQ2F0ZWdvcmllcygpO1xuICB9LCBbaWQsIGlzTmV3XSk7XG5cbiAgY29uc3QgbG9hZENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiY2F0ZWdvcmllZW5cIikuc2VsZWN0KFwiKlwiKTtcbiAgICBzZXRDYXRlZ29yaWVzKGRhdGEgfHwgW10pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChpc05ldykge1xuICAgICAgICBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiYm9la2VuXCIpLmluc2VydChib2VrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHN1cGFiYXNlLmZyb20oXCJib2VrZW5cIikudXBkYXRlKGJvZWspLmVxKFwiaWRcIiwgaWQpO1xuICAgICAgfVxuICAgICAgcm91dGVyLnB1c2goXCIvYWRtaW4tZGFzaGJvYXJkXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIGJvb2s6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRCb2VrKChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByb2Nlc3NQbGF5bGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXBsYXlsaXN0VXJsKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgLy8gRXh0cmFjdCB2aWRlbyBJRHMgZnJvbSBwbGF5bGlzdCBVUkxcbiAgICAgIGxldCBwbGF5bGlzdElkID0gXCJcIjtcbiAgICAgIGlmIChcbiAgICAgICAgcGxheWxpc3RVcmwuaW5jbHVkZXMoXCJ5b3V0dWJlLmNvbVwiKSB8fFxuICAgICAgICBwbGF5bGlzdFVybC5pbmNsdWRlcyhcInlvdXR1LmJlXCIpXG4gICAgICApIHtcbiAgICAgICAgcGxheWxpc3RJZCA9IHBsYXlsaXN0VXJsLm1hdGNoKC9bPyZdbGlzdD0oW14mXSspLyk/LlsxXTtcbiAgICAgICAgaWYgKCFwbGF5bGlzdElkKSB7XG4gICAgICAgICAgYWxlcnQoXCJPbmdlbGRpZ2UgWW91VHViZSBwbGF5bGlzdCBVUkxcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmV0Y2ggcGxheWxpc3QgZGF0YSBmcm9tIFlvdVR1YmUgQVBJXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvcGxheWxpc3RJdGVtcz9wYXJ0PXNuaXBwZXQmbWF4UmVzdWx0cz01MCZwbGF5bGlzdElkPSR7cGxheWxpc3RJZH0ma2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfWU9VVFVCRV9BUElfS0VZfWAsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxlc3NvbnMgZnJvbSBwbGF5bGlzdCBpdGVtc1xuICAgICAgICBjb25zdCBuZXdMZXNzb25zID0gZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgICAgICAgIHRpdGVsOiBpdGVtLnNuaXBwZXQudGl0bGUsXG4gICAgICAgICAgbGVzX3VybDogYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7aXRlbS5zbmlwcGV0LnJlc291cmNlSWQudmlkZW9JZH1gLFxuICAgICAgICAgIHZvbGdvcmRlX251bW1lcjogaW5kZXggKyAxLFxuICAgICAgICAgIGJvZWtfaWQ6IGlkLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gSW5zZXJ0IGFsbCBsZXNzb25zIGludG8gZGF0YWJhc2VcbiAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImxlc3NlblwiKS5pbnNlcnQobmV3TGVzc29ucyk7XG5cbiAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcblxuICAgICAgICAvLyBVcGRhdGUgbG9jYWwgc3RhdGVcbiAgICAgICAgc2V0TGVzc2VuKChwcmV2KSA9PiBbLi4ucHJldiwgLi4ubmV3TGVzc29uc10pO1xuICAgICAgICBhbGVydChcIkxlc3NlbiBzdWNjZXN2b2wgYWFuZ2VtYWFrdCB2YW4gcGxheWxpc3QhXCIpO1xuICAgICAgfSBlbHNlIGlmIChwbGF5bGlzdFVybC5pbmNsdWRlcyhcInNvdW5kY2xvdWQuY29tXCIpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU291bmRDbG91ZCBwbGF5bGlzdCBVUkwgZGV0ZWN0ZWRcIik7XG5cbiAgICAgICAgLy8gQ2FsbCB0aGUgc2NyYXBpbmcgQVBJXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIFwiL2FwaS9zY3JhcGU/dXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHBsYXlsaXN0VXJsKSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgaWYgKCFkYXRhLnRyYWNrcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlZW4gdHJhY2tzIGdldm9uZGVuIGluIHBsYXlsaXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJhY2tzOlwiLCBkYXRhLnRyYWNrcyk7XG4gICAgICAgIGNvbnN0IG5ld0xlc3NvbnMgPSBkYXRhLnRyYWNrcy5tYXAoKHRyYWNrLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICBpZDogYHRlbXBfJHtEYXRlLm5vdygpfV8ke2luZGV4fWAsXG4gICAgICAgICAgdGl0ZWw6IHRyYWNrLnRpdGxlLFxuICAgICAgICAgIGxlc191cmw6IHRyYWNrLnVybCwgLy8gVVJMIHRvIHRoZSBTb3VuZENsb3VkIHRyYWNrXG4gICAgICAgICAgdm9sZ29yZGVfbnVtbWVyOiBpbmRleCArIDEsXG4gICAgICAgICAgYm9la19pZDogaWQsXG4gICAgICAgIH0pKTtcbiAgICAgICAgLy8gSW5zZXJ0IGFsbCBsZXNzb25zIGludG8gdGhlIGRhdGFiYXNlXG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJsZXNzZW5cIikuaW5zZXJ0KG5ld0xlc3NvbnMpO1xuICAgICAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xuICAgICAgICAvLyBVcGRhdGUgbG9jYWwgc3RhdGVcbiAgICAgICAgc2V0TGVzc2VuKChwcmV2KSA9PiBbLi4ucHJldiwgLi4ubmV3TGVzc29uc10pO1xuICAgICAgICBhbGVydChcIkxlc3NlbiBzdWNjZXN2b2wgYWFuZ2VtYWFrdCB2YW4gU291bmRDbG91ZCBwbGF5bGlzdCFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlZvZXIgZWVuIGdlbGRpZ2UgWW91VHViZSBvZiBTb3VuZENsb3VkIHBsYXlsaXN0IFVSTCBpblwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHByb2Nlc3NpbmcgcGxheWxpc3Q6XCIsIGVycm9yKTtcbiAgICAgIGFsZXJ0KFwiRXIgaXMgZWVuIGZvdXQgb3BnZXRyZWRlbiBiaWogaGV0IHZlcndlcmtlbiB2YW4gZGUgcGxheWxpc3RcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZExlc3NvbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJsZXNzZW5cIilcbiAgICAgIC5pbnNlcnQoeyAuLi5uZXdMZXNzb24sIGJvZWtfaWQ6IGlkIH0pO1xuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHNldExlc3NlbigocHJldikgPT4gW1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICB7IC4uLm5ld0xlc3NvbiwgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSB9LFxuICAgICAgXSk7IC8vIFRlbXBvcmFyeSBJRCBmb3IgbG9jYWwgZGlzcGxheVxuICAgICAgc2V0TmV3TGVzc29uKHsgdGl0ZWw6IFwiXCIsIGxlc191cmw6IFwiXCIsIHZvbGdvcmRlX251bW1lcjogMSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlTGVzc29uID0gYXN5bmMgKGxlc3NvbklkKSA9PiB7XG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImxlc3NlblwiKS5kZWxldGUoKS5lcShcImlkXCIsIGxlc3NvbklkKTtcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBzZXRMZXNzZW4oKHByZXYpID0+IHByZXYuZmlsdGVyKChsZXMpID0+IGxlcy5pZCAhPT0gbGVzc29uSWQpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7IGZpZWxkOiBcImlkXCIsIGhlYWRlck5hbWU6IFwiSURcIiwgd2lkdGg6IDkwIH0sXG4gICAgeyBmaWVsZDogXCJ0aXRlbFwiLCBoZWFkZXJOYW1lOiBcIlRpdGVsXCIsIHdpZHRoOiAyMDAgfSxcbiAgICB7IGZpZWxkOiBcImxlc191cmxcIiwgaGVhZGVyTmFtZTogXCJMZXMgVVJMXCIsIHdpZHRoOiAyMDAgfSxcbiAgICB7IGZpZWxkOiBcInZvbGdvcmRlX251bW1lclwiLCBoZWFkZXJOYW1lOiBcIlZvbGdvcmRlIE51bW1lclwiLCB3aWR0aDogMTUwIH0sXG4gICAge1xuICAgICAgZmllbGQ6IFwiYWN0aW9uc1wiLFxuICAgICAgaGVhZGVyTmFtZTogXCJBY3RpZXNcIixcbiAgICAgIHdpZHRoOiAyMDAsXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZUxlc3NvbihwYXJhbXMucm93LmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIFZlcndpamRlcmVuXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxPntpc05ldyA/IFwiTmlldXcgQm9la1wiIDogXCJCb2VrIEJld2Vya2VuXCJ9PC9oMT5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgbGFiZWw9XCJUaXRlbFwiXG4gICAgICAgICAgbmFtZT1cInRpdGVsXCJcbiAgICAgICAgICB2YWx1ZT17Ym9lay50aXRlbH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBsYWJlbD1cIkJlc2NocmlqdmluZ1wiXG4gICAgICAgICAgbmFtZT1cImJlc2NocmlqdmluZ1wiXG4gICAgICAgICAgdmFsdWU9e2JvZWsuYmVzY2hyaWp2aW5nfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAvPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgbGFiZWw9XCJDYXRlZ29yaWVcIlxuICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVfaWRcIlxuICAgICAgICAgIHZhbHVlPXtib2VrLmNhdGVnb3JpZV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgID5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdCkgPT4gKFxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Y2F0LmlkfSB2YWx1ZT17Y2F0LmlkfT5cbiAgICAgICAgICAgICAge2NhdC5uYWFtfVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICB7aXNOZXcgPyBcIlRvZXZvZWdlblwiIDogXCJPcHNsYWFuXCJ9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggc3g9e3sgbXQ6IDQsIG1iOiAyIH19PlxuICAgICAgICA8aDM+UGxheWxpc3QgVG9ldm9lZ2VuPC9oMz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGxhYmVsPVwiUGxheWxpc3QgVVJMIChZb3VUdWJlL1NvdW5kQ2xvdWQpXCJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgIHN4PXt7IG1iOiAyIH19XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQbGF5bGlzdFVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUHJvY2Vzc1BsYXlsaXN0fVxuICAgICAgICAgIHN4PXt7IG1yOiAyIH19XG4gICAgICAgID5cbiAgICAgICAgICBQbGF5bGlzdCBWZXJ3ZXJrZW5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGVsXCJcbiAgICAgICAgICB2YWx1ZT17bmV3TGVzc29uLnRpdGVsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgIHNldE5ld0xlc3Nvbih7IC4uLm5ld0xlc3NvbiwgdGl0ZWw6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZXMgVVJMXCJcbiAgICAgICAgICB2YWx1ZT17bmV3TGVzc29uLmxlc191cmx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgc2V0TmV3TGVzc29uKHsgLi4ubmV3TGVzc29uLCBsZXNfdXJsOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb2xnb3JkZSBOdW1tZXJcIlxuICAgICAgICAgIHZhbHVlPXtuZXdMZXNzb24udm9sZ29yZGVfbnVtbWVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgIHNldE5ld0xlc3Nvbih7XG4gICAgICAgICAgICAgIC4uLm5ld0xlc3NvbixcbiAgICAgICAgICAgICAgdm9sZ29yZGVfbnVtbWVyOiBOdW1iZXIoZS50YXJnZXQudmFsdWUpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUFkZExlc3Nvbn0+XG4gICAgICAgICAgVm9lZyBMZXMgVG9lXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA0MDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgPERhdGFHcmlkXG4gICAgICAgICAgcm93cz17bGVzc2VufVxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgcGFnZVNpemU9ezV9XG4gICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbNV19XG4gICAgICAgICAgZ2V0Um93SWQ9eyhyb3cpID0+IHJvdy5pZH1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwic3VwYWJhc2UiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJCb3giLCJTZWxlY3QiLCJNZW51SXRlbSIsIkRhdGFHcmlkIiwic3R5bGVzIiwiQm9va0VkaXRQYWdlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImlzTmV3IiwiYm9layIsInNldEJvZWsiLCJ0aXRlbCIsImJlc2NocmlqdmluZyIsImNhdGVnb3JpZV9pZCIsImxlc3NlbiIsInNldExlc3NlbiIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwibmV3TGVzc29uIiwic2V0TmV3TGVzc29uIiwibGVzX3VybCIsInZvbGdvcmRlX251bW1lciIsInBsYXlsaXN0VXJsIiwic2V0UGxheWxpc3RVcmwiLCJsb2FkQm9layIsImRhdGEiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJsZXNzb25EYXRhIiwib3JkZXIiLCJhc2NlbmRpbmciLCJsb2FkQ2F0ZWdvcmllcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImluc2VydCIsInVwZGF0ZSIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2IiwiaGFuZGxlUHJvY2Vzc1BsYXlsaXN0IiwicGxheWxpc3RJZCIsImluY2x1ZGVzIiwibWF0Y2giLCJhbGVydCIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfWU9VVFVCRV9BUElfS0VZIiwianNvbiIsIm5ld0xlc3NvbnMiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNuaXBwZXQiLCJ0aXRsZSIsInJlc291cmNlSWQiLCJ2aWRlb0lkIiwiYm9la19pZCIsImxvZyIsInJlcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInRyYWNrcyIsIkVycm9yIiwidHJhY2siLCJEYXRlIiwibm93IiwidXJsIiwiaGFuZGxlQWRkTGVzc29uIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwiaGFuZGxlRGVsZXRlTGVzc29uIiwibGVzc29uSWQiLCJkZWxldGUiLCJmaWx0ZXIiLCJsZXMiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwidmFyaWFudCIsImNvbG9yIiwic2l6ZSIsIm9uQ2xpY2siLCJyb3ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImNvbXBvbmVudCIsIm9uU3VibWl0IiwiZm9ybSIsImZ1bGxXaWR0aCIsImxhYmVsIiwib25DaGFuZ2UiLCJtYXJnaW4iLCJtdWx0aWxpbmUiLCJyb3dzIiwiY2F0IiwibmFhbSIsInR5cGUiLCJzeCIsIm10IiwibWIiLCJoMyIsIm1yIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIk51bWJlciIsImhlaWdodCIsInBhZ2VTaXplIiwicm93c1BlclBhZ2VPcHRpb25zIiwiZ2V0Um93SWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/admin/boek/[id].js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/Admin.module.css":
/*!*********************************!*\
  !*** ./styles/Admin.module.css ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Admin_container__UrLIB\",\n\t\"section\": \"Admin_section__Xp50y\",\n\t\"form\": \"Admin_form__xSbSa\",\n\t\"boekOverzicht\": \"Admin_boekOverzicht__KQZUC\",\n\t\"quizSection\": \"Admin_quizSection__6KrLG\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0eWxlcy9BZG1pbi5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2Uvc3R5bGVzL0FkbWluLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQWRtaW5fY29udGFpbmVyX19VckxJQlwiLFxuXHRcInNlY3Rpb25cIjogXCJBZG1pbl9zZWN0aW9uX19YcDUweVwiLFxuXHRcImZvcm1cIjogXCJBZG1pbl9mb3JtX194U2JTYVwiLFxuXHRcImJvZWtPdmVyemljaHRcIjogXCJBZG1pbl9ib2VrT3ZlcnppY2h0X19LUVpVQ1wiLFxuXHRcInF1aXpTZWN0aW9uXCI6IFwiQWRtaW5fcXVpelNlY3Rpb25fXzZLckxHXCJcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/Admin.module.css\n");

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

/***/ "(pages-dir-node)/__barrel_optimize__?names=Box,Button,MenuItem,Select,TextField!=!./node_modules/@mui/material/esm/index.js":
/*!******************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,Button,MenuItem,Select,TextField!=!./node_modules/@mui/material/esm/index.js ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Button: () => (/* reexport safe */ _Button_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   MenuItem: () => (/* reexport safe */ _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   Select: () => (/* reexport safe */ _Select_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   TextField: () => (/* reexport safe */ _TextField_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _Button_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/MenuItem/index.js\");\n/* harmony import */ var _Select_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Select/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Select/index.js\");\n/* harmony import */ var _TextField_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextField/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/TextField/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_1__, _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_2__, _Select_index_js__WEBPACK_IMPORTED_MODULE_3__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_4__]);\n([_Box_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_1__, _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_2__, _Select_index_js__WEBPACK_IMPORTED_MODULE_3__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUJveCxCdXR0b24sTWVudUl0ZW0sU2VsZWN0LFRleHRGaWVsZCE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ007QUFDSTtBQUNKIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2VzbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSBcIi4vQm94L2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVudUl0ZW0gfSBmcm9tIFwiLi9NZW51SXRlbS9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL1NlbGVjdC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRGaWVsZCB9IGZyb20gXCIuL1RleHRGaWVsZC9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=Box,Button,MenuItem,Select,TextField!=!./node_modules/@mui/material/esm/index.js\n");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system");;

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/DefaultPropsProvider");;

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/InitColorSchemeScript");;

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/RtlProvider");;

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/colorManipulator");;

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createBreakpoints");;

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createStyled");;

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createTheme");;

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/cssVars");;

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/spacing");;

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/styleFunctionSx");;

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/useThemeProps");;

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils");;

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/HTMLElementType");;

/***/ }),

/***/ "@mui/utils/appendOwnerState":
/*!**********************************************!*\
  !*** external "@mui/utils/appendOwnerState" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/appendOwnerState");;

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/capitalize");;

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/chainPropTypes");;

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/composeClasses");;

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/createChainedFunction");;

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/debounce");;

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/deepmerge");;

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/deprecatedPropType");;

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/elementAcceptingRef");;

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/elementTypeAcceptingRef");;

/***/ }),

/***/ "@mui/utils/extractEventHandlers":
/*!**************************************************!*\
  !*** external "@mui/utils/extractEventHandlers" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/extractEventHandlers");;

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/formatMuiErrorMessage");;

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/generateUtilityClass");;

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/generateUtilityClasses");;

/***/ }),

/***/ "@mui/utils/getReactElementRef":
/*!************************************************!*\
  !*** external "@mui/utils/getReactElementRef" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/getReactElementRef");;

/***/ }),

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/getScrollbarSize");;

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/integerPropType");;

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/isFocusVisible");;

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/isMuiElement");;

/***/ }),

/***/ "@mui/utils/mergeSlotProps":
/*!********************************************!*\
  !*** external "@mui/utils/mergeSlotProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/mergeSlotProps");;

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/ownerDocument");;

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/ownerWindow");;

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/refType");;

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/requirePropFactory");;

/***/ }),

/***/ "@mui/utils/resolveComponentProps":
/*!***************************************************!*\
  !*** external "@mui/utils/resolveComponentProps" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/resolveComponentProps");;

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/resolveProps");;

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/setRef");;

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/unsupportedProp");;

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useControlled");;

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useEnhancedEffect");;

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useEventCallback");;

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useForkRef");;

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useId");;

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useLazyRef");;

/***/ }),

/***/ "@mui/utils/useSlotProps":
/*!******************************************!*\
  !*** external "@mui/utils/useSlotProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useSlotProps");;

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useTimeout");;

/***/ }),

/***/ "@mui/x-data-grid":
/*!***********************************!*\
  !*** external "@mui/x-data-grid" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-data-grid");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fadmin%2Fboek%2F%5Bid%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fadmin%2Fboek%2F%5Bid%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();