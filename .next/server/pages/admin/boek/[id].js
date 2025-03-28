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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookEdit)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/supabase */ \"(pages-dir-node)/./lib/supabase.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-data-grid */ \"@mui/x-data-grid\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField!=!@mui/material */ \"(pages-dir-node)/__barrel_optimize__?names=Box,Button,TextField!=!./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/Admin.module.css */ \"(pages-dir-node)/./styles/Admin.module.css\");\n/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__]);\n_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction BookEdit() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const isNew = id === \"new\";\n    const [lessen, setLessen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [playlistUrl, setPlaylistUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleProcessPlaylist = async ()=>{\n        if (!playlistUrl) return;\n        try {\n            // Extract video IDs from playlist URL\n            let playlistId = \"\";\n            if (playlistUrl.includes(\"youtube.com\") || playlistUrl.includes(\"youtu.be\")) {\n                playlistId = playlistUrl.match(/[?&]list=([^&]+)/)?.[1];\n                if (!playlistId) {\n                    alert(\"Ongeldige YouTube playlist URL\");\n                    return;\n                }\n                // Fetch playlist data from YouTube API\n                const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${\"AIzaSyAZdVUeiDo4333xxgbKzJQsqO90fL-HME8\"}`);\n                const data = await response.json();\n                // Create lessons from playlist items\n                const newLessons = data.items.map((item, index)=>({\n                        titel: item.snippet.title,\n                        les_url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,\n                        volgorde_nummer: index + 1,\n                        boek_id: id\n                    }));\n                // Insert all lessons into database\n                const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").insert(newLessons);\n                if (error) throw error;\n                // Update local state\n                setLessen((prev)=>[\n                        ...prev,\n                        ...newLessons\n                    ]);\n                alert(\"Lessen succesvol aangemaakt van playlist!\");\n            } else if (playlistUrl.includes(\"soundcloud.com\")) {\n                alert(\"SoundCloud playlist verwerking komt binnenkort!\");\n            } else {\n                alert(\"Voer een geldige YouTube of SoundCloud playlist URL in\");\n            }\n        } catch (error) {\n            console.error(\"Error processing playlist:\", error);\n            alert(\"Er is een fout opgetreden bij het verwerken van de playlist\");\n        }\n    };\n    const [newLesson, setNewLesson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        titel: \"\",\n        les_url: \"\",\n        volgorde_nummer: 1\n    });\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        titel: \"\",\n        beschrijving: \"\",\n        categorie_id: \"\",\n        pdf_url: \"\",\n        volgorde_nummer: \"\"\n    });\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"BookEdit.useEffect\": ()=>{\n            loadCategories();\n            if (!isNew && id) {\n                loadBoek();\n                loadLessen();\n            }\n        }\n    }[\"BookEdit.useEffect\"], [\n        id\n    ]);\n    const loadLessen = async ()=>{\n        const { data: lessonData } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").select(\"*\").eq(\"boek_id\", id).order(\"volgorde_nummer\", {\n            ascending: true\n        });\n        setLessen(lessonData || []);\n    };\n    const loadCategories = async ()=>{\n        const { data, error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"categorieen\").select(\"*\");\n        if (data) {\n            setCategories(data);\n        }\n        if (error) {\n            console.error(\"Error loading categories:\", error);\n        }\n    };\n    const loadBoek = async ()=>{\n        const { data } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"boeken\").select(\"*\").eq(\"id\", id).single();\n        if (data) {\n            setFormData(data);\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (isNew) {\n            const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"boeken\").insert(formData);\n            if (error) console.error(\"Error adding book:\", error);\n        } else {\n            const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"boeken\").update(formData).eq(\"id\", id);\n            if (error) console.error(\"Error updating book:\", error);\n        }\n        router.push(\"/admin-dashboard\");\n    };\n    const handleChange = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleAddLesson = async ()=>{\n        const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").insert({\n            ...newLesson,\n            boek_id: id\n        });\n        if (!error) {\n            setLessen((prev)=>[\n                    ...prev,\n                    {\n                        ...newLesson,\n                        id: Math.random().toString()\n                    }\n                ]); // Temporary ID for local display\n            setNewLesson({\n                titel: \"\",\n                les_url: \"\",\n                volgorde_nummer: 1\n            });\n        }\n    };\n    const handleDeleteLesson = async (lessonId)=>{\n        const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").delete().eq(\"id\", lessonId);\n        if (!error) {\n            setLessen((prev)=>prev.filter((les)=>les.id !== lessonId));\n        }\n    };\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 90\n        },\n        {\n            field: \"titel\",\n            headerName: \"Titel\",\n            width: 200\n        },\n        {\n            field: \"les_url\",\n            headerName: \"Les URL\",\n            width: 200\n        },\n        {\n            field: \"volgorde_nummer\",\n            headerName: \"Volgorde Nummer\",\n            width: 150\n        },\n        {\n            field: \"actions\",\n            headerName: \"Acties\",\n            width: 200,\n            renderCell: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    variant: \"contained\",\n                    color: \"error\",\n                    size: \"small\",\n                    onClick: ()=>handleDeleteLesson(params.row.id),\n                    children: \"Verwijderen\"\n                }, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                    lineNumber: 163,\n                    columnNumber: 9\n                }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: isNew ? \"Nieuw Boek\" : \"Boek Bewerken\"\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                component: \"form\",\n                onSubmit: handleSubmit,\n                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        fullWidth: true,\n                        label: \"Titel\",\n                        name: \"titel\",\n                        value: formData.titel,\n                        onChange: handleChange,\n                        margin: \"normal\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 179,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        fullWidth: true,\n                        label: \"Beschrijving\",\n                        name: \"beschrijving\",\n                        value: formData.beschrijving,\n                        onChange: handleChange,\n                        margin: \"normal\",\n                        multiline: true,\n                        rows: 4\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 188,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"categorie_id\",\n                        value: formData.categorie_id,\n                        onChange: handleChange,\n                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().select),\n                        required: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                disabled: true,\n                                children: \"Kies een categorie\"\n                            }, void 0, false, {\n                                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                                lineNumber: 205,\n                                columnNumber: 11\n                            }, this),\n                            categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: category.id,\n                                    children: category.naam\n                                }, category.id, false, {\n                                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                                    lineNumber: 209,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 198,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        fullWidth: true,\n                        label: \"PDF URL\",\n                        name: \"pdf_url\",\n                        value: formData.pdf_url,\n                        onChange: handleChange,\n                        margin: \"normal\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 214,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        fullWidth: true,\n                        label: \"Volgorde Nummer\",\n                        name: \"volgorde_nummer\",\n                        type: \"number\",\n                        value: formData.volgorde_nummer,\n                        onChange: handleChange,\n                        margin: \"normal\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 222,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        type: \"submit\",\n                        variant: \"contained\",\n                        color: \"primary\",\n                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().submitButton),\n                        children: isNew ? \"Toevoegen\" : \"Opslaan\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 232,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                sx: {\n                    mt: 4,\n                    mb: 2\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Playlist Toevoegen\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 243,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        fullWidth: true,\n                        label: \"Playlist URL (YouTube/SoundCloud)\",\n                        variant: \"outlined\",\n                        sx: {\n                            mb: 2\n                        },\n                        onChange: (e)=>setPlaylistUrl(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 244,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        variant: \"contained\",\n                        color: \"secondary\",\n                        onClick: handleProcessPlaylist,\n                        sx: {\n                            mr: 2\n                        },\n                        children: \"Playlist Verwerken\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 251,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                lineNumber: 242,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                component: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Titel\",\n                        value: newLesson.titel,\n                        onChange: (e)=>setNewLesson({\n                                ...newLesson,\n                                titel: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 262,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Les URL\",\n                        value: newLesson.les_url,\n                        onChange: (e)=>setNewLesson({\n                                ...newLesson,\n                                les_url: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 270,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        placeholder: \"Volgorde Nummer\",\n                        value: newLesson.volgorde_nummer,\n                        onChange: (e)=>setNewLesson({\n                                ...newLesson,\n                                volgorde_nummer: Number(e.target.value)\n                            })\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 278,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        variant: \"contained\",\n                        onClick: handleAddLesson,\n                        children: \"Voeg Les Toe\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 289,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                lineNumber: 261,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                sx: {\n                    height: 400,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__.DataGrid, {\n                    rows: lessen,\n                    columns: columns,\n                    pageSize: 5,\n                    rowsPerPageOptions: [\n                        5\n                    ],\n                    getRowId: (row)=>row.id\n                }, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                    lineNumber: 295,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                lineNumber: 294,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n        lineNumber: 176,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2FkbWluL2JvZWsvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ1M7QUFDTDtBQUNXO0FBQ0Q7QUFFdkMsU0FBU1M7SUFDdEIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsTUFBTUMsUUFBUUYsT0FBTztJQUNyQixNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1pQix3QkFBd0I7UUFDNUIsSUFBSSxDQUFDRixhQUFhO1FBRWxCLElBQUk7WUFDRixzQ0FBc0M7WUFDdEMsSUFBSUcsYUFBYTtZQUNqQixJQUFJSCxZQUFZSSxRQUFRLENBQUMsa0JBQWtCSixZQUFZSSxRQUFRLENBQUMsYUFBYTtnQkFDM0VELGFBQWFILFlBQVlLLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUNGLFlBQVk7b0JBQ2ZHLE1BQU07b0JBQ047Z0JBQ0Y7Z0JBRUEsdUNBQXVDO2dCQUN2QyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sQ0FBQywwRkFBMEYsRUFBRUwsV0FBVyxLQUFLLEVBQUVNLHlDQUF1QyxFQUFFO2dCQUNyTCxNQUFNRyxPQUFPLE1BQU1MLFNBQVNNLElBQUk7Z0JBRWhDLHFDQUFxQztnQkFDckMsTUFBTUMsYUFBYUYsS0FBS0csS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVzt3QkFDbERDLE9BQU9GLEtBQUtHLE9BQU8sQ0FBQ0MsS0FBSzt3QkFDekJDLFNBQVMsQ0FBQyw4QkFBOEIsRUFBRUwsS0FBS0csT0FBTyxDQUFDRyxVQUFVLENBQUNDLE9BQU8sRUFBRTt3QkFDM0VDLGlCQUFpQlAsUUFBUTt3QkFDekJRLFNB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QUs7NEJBQUM7Ozs7OztrQ0FHekQsOERBQUM4Qzt3QkFDQ1AsTUFBSzt3QkFDTFEsYUFBWTt3QkFDWi9DLE9BQU8xQixVQUFVUCxlQUFlO3dCQUNoQytELFVBQVUsQ0FBQ3JDLElBQ1RsQixhQUFhO2dDQUNYLEdBQUdELFNBQVM7Z0NBQ1pQLGlCQUFpQmlGLE9BQU92RCxFQUFFSyxNQUFNLENBQUNFLEtBQUs7NEJBQ3hDOzs7Ozs7a0NBR0osOERBQUNwRSw0RkFBTUE7d0JBQUNvRixTQUFRO3dCQUFZRyxTQUFTbEI7a0NBQWlCOzs7Ozs7Ozs7Ozs7MEJBS3hELDhEQUFDcEUseUZBQUdBO2dCQUFDNEcsSUFBSTtvQkFBRVEsUUFBUTtvQkFBS3BDLE9BQU87Z0JBQU87MEJBQ3BDLDRFQUFDbkYsc0RBQVFBO29CQUNQd0csTUFBTTlGO29CQUNOc0UsU0FBU0E7b0JBQ1R3QyxVQUFVO29CQUNWQyxvQkFBb0I7d0JBQUM7cUJBQUU7b0JBQ3ZCQyxVQUFVLENBQUNoQyxNQUFRQSxJQUFJbkYsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkMiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvcGFnZXMvYWRtaW4vYm9lay9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBEYXRhR3JpZCB9IGZyb20gXCJAbXVpL3gtZGF0YS1ncmlkXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9BZG1pbi5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tFZGl0KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBpc05ldyA9IGlkID09PSBcIm5ld1wiO1xuICBjb25zdCBbbGVzc2VuLCBzZXRMZXNzZW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcGxheWxpc3RVcmwsIHNldFBsYXlsaXN0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVByb2Nlc3NQbGF5bGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXBsYXlsaXN0VXJsKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgLy8gRXh0cmFjdCB2aWRlbyBJRHMgZnJvbSBwbGF5bGlzdCBVUkxcbiAgICAgIGxldCBwbGF5bGlzdElkID0gXCJcIjtcbiAgICAgIGlmIChwbGF5bGlzdFVybC5pbmNsdWRlcyhcInlvdXR1YmUuY29tXCIpIHx8IHBsYXlsaXN0VXJsLmluY2x1ZGVzKFwieW91dHUuYmVcIikpIHtcbiAgICAgICAgcGxheWxpc3RJZCA9IHBsYXlsaXN0VXJsLm1hdGNoKC9bPyZdbGlzdD0oW14mXSspLyk/LlsxXTtcbiAgICAgICAgaWYgKCFwbGF5bGlzdElkKSB7XG4gICAgICAgICAgYWxlcnQoXCJPbmdlbGRpZ2UgWW91VHViZSBwbGF5bGlzdCBVUkxcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBGZXRjaCBwbGF5bGlzdCBkYXRhIGZyb20gWW91VHViZSBBUElcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdEl0ZW1zP3BhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTUwJnBsYXlsaXN0SWQ9JHtwbGF5bGlzdElkfSZrZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ZT1VUVUJFX0FQSV9LRVl9YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgbGVzc29ucyBmcm9tIHBsYXlsaXN0IGl0ZW1zXG4gICAgICAgIGNvbnN0IG5ld0xlc3NvbnMgPSBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgdGl0ZWw6IGl0ZW0uc25pcHBldC50aXRsZSxcbiAgICAgICAgICBsZXNfdXJsOiBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtpdGVtLnNuaXBwZXQucmVzb3VyY2VJZC52aWRlb0lkfWAsXG4gICAgICAgICAgdm9sZ29yZGVfbnVtbWVyOiBpbmRleCArIDEsXG4gICAgICAgICAgYm9la19pZDogaWRcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIEluc2VydCBhbGwgbGVzc29ucyBpbnRvIGRhdGFiYXNlXG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgLmZyb20oXCJsZXNzZW5cIilcbiAgICAgICAgICAuaW5zZXJ0KG5ld0xlc3NvbnMpO1xuXG4gICAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgbG9jYWwgc3RhdGVcbiAgICAgICAgc2V0TGVzc2VuKHByZXYgPT4gWy4uLnByZXYsIC4uLm5ld0xlc3NvbnNdKTtcbiAgICAgICAgYWxlcnQoXCJMZXNzZW4gc3VjY2Vzdm9sIGFhbmdlbWFha3QgdmFuIHBsYXlsaXN0IVwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGxheWxpc3RVcmwuaW5jbHVkZXMoXCJzb3VuZGNsb3VkLmNvbVwiKSkge1xuICAgICAgICBhbGVydChcIlNvdW5kQ2xvdWQgcGxheWxpc3QgdmVyd2Vya2luZyBrb210IGJpbm5lbmtvcnQhXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJWb2VyIGVlbiBnZWxkaWdlIFlvdVR1YmUgb2YgU291bmRDbG91ZCBwbGF5bGlzdCBVUkwgaW5cIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwcm9jZXNzaW5nIHBsYXlsaXN0OlwiLCBlcnJvcik7XG4gICAgICBhbGVydChcIkVyIGlzIGVlbiBmb3V0IG9wZ2V0cmVkZW4gYmlqIGhldCB2ZXJ3ZXJrZW4gdmFuIGRlIHBsYXlsaXN0XCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgW25ld0xlc3Nvbiwgc2V0TmV3TGVzc29uXSA9IHVzZVN0YXRlKHtcbiAgICB0aXRlbDogXCJcIixcbiAgICBsZXNfdXJsOiBcIlwiLFxuICAgIHZvbGdvcmRlX251bW1lcjogMSxcbiAgfSk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIHRpdGVsOiBcIlwiLFxuICAgIGJlc2NocmlqdmluZzogXCJcIixcbiAgICBjYXRlZ29yaWVfaWQ6IFwiXCIsXG4gICAgcGRmX3VybDogXCJcIixcbiAgICB2b2xnb3JkZV9udW1tZXI6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkQ2F0ZWdvcmllcygpO1xuICAgIGlmICghaXNOZXcgJiYgaWQpIHtcbiAgICAgIGxvYWRCb2VrKCk7XG4gICAgICBsb2FkTGVzc2VuKCk7XG4gICAgfVxuICB9LCBbaWRdKTtcblxuICBjb25zdCBsb2FkTGVzc2VuID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YTogbGVzc29uRGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKFwibGVzc2VuXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiYm9la19pZFwiLCBpZClcbiAgICAgIC5vcmRlcihcInZvbGdvcmRlX251bW1lclwiLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcbiAgICBzZXRMZXNzZW4obGVzc29uRGF0YSB8fCBbXSk7XG4gIH07XG4gIGNvbnN0IGxvYWRDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJjYXRlZ29yaWVlblwiKS5zZWxlY3QoXCIqXCIpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xuICAgIH1cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9hZEJvZWsgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJib2VrZW5cIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpZFwiLCBpZClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRGb3JtRGF0YShkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJib2VrZW5cIikuaW5zZXJ0KGZvcm1EYXRhKTtcbiAgICAgIGlmIChlcnJvcikgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBib29rOlwiLCBlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiYm9la2VuXCIpXG4gICAgICAgIC51cGRhdGUoZm9ybURhdGEpXG4gICAgICAgIC5lcShcImlkXCIsIGlkKTtcbiAgICAgIGlmIChlcnJvcikgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGJvb2s6XCIsIGVycm9yKTtcbiAgICB9XG5cbiAgICByb3V0ZXIucHVzaChcIi9hZG1pbi1kYXNoYm9hcmRcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAuLi5mb3JtRGF0YSxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUFkZExlc3NvbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJsZXNzZW5cIilcbiAgICAgIC5pbnNlcnQoeyAuLi5uZXdMZXNzb24sIGJvZWtfaWQ6IGlkIH0pO1xuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHNldExlc3NlbigocHJldikgPT4gW1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICB7IC4uLm5ld0xlc3NvbiwgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSB9LFxuICAgICAgXSk7IC8vIFRlbXBvcmFyeSBJRCBmb3IgbG9jYWwgZGlzcGxheVxuICAgICAgc2V0TmV3TGVzc29uKHsgdGl0ZWw6IFwiXCIsIGxlc191cmw6IFwiXCIsIHZvbGdvcmRlX251bW1lcjogMSB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZURlbGV0ZUxlc3NvbiA9IGFzeW5jIChsZXNzb25JZCkgPT4ge1xuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJsZXNzZW5cIikuZGVsZXRlKCkuZXEoXCJpZFwiLCBsZXNzb25JZCk7XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgc2V0TGVzc2VuKChwcmV2KSA9PiBwcmV2LmZpbHRlcigobGVzKSA9PiBsZXMuaWQgIT09IGxlc3NvbklkKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHsgZmllbGQ6IFwiaWRcIiwgaGVhZGVyTmFtZTogXCJJRFwiLCB3aWR0aDogOTAgfSxcbiAgICB7IGZpZWxkOiBcInRpdGVsXCIsIGhlYWRlck5hbWU6IFwiVGl0ZWxcIiwgd2lkdGg6IDIwMCB9LFxuICAgIHsgZmllbGQ6IFwibGVzX3VybFwiLCBoZWFkZXJOYW1lOiBcIkxlcyBVUkxcIiwgd2lkdGg6IDIwMCB9LFxuICAgIHsgZmllbGQ6IFwidm9sZ29yZGVfbnVtbWVyXCIsIGhlYWRlck5hbWU6IFwiVm9sZ29yZGUgTnVtbWVyXCIsIHdpZHRoOiAxNTAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogXCJhY3Rpb25zXCIsXG4gICAgICBoZWFkZXJOYW1lOiBcIkFjdGllc1wiLFxuICAgICAgd2lkdGg6IDIwMCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlTGVzc29uKHBhcmFtcy5yb3cuaWQpfVxuICAgICAgICA+XG4gICAgICAgICAgVmVyd2lqZGVyZW5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDE+e2lzTmV3ID8gXCJOaWV1dyBCb2VrXCIgOiBcIkJvZWsgQmV3ZXJrZW5cIn08L2gxPlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBsYWJlbD1cIlRpdGVsXCJcbiAgICAgICAgICBuYW1lPVwidGl0ZWxcIlxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS50aXRlbH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGxhYmVsPVwiQmVzY2hyaWp2aW5nXCJcbiAgICAgICAgICBuYW1lPVwiYmVzY2hyaWp2aW5nXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuYmVzY2hyaWp2aW5nfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAvPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cImNhdGVnb3JpZV9pZFwiXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNhdGVnb3JpZV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlxuICAgICAgICAgICAgS2llcyBlZW4gY2F0ZWdvcmllXG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NhdGVnb3J5LmlkfSB2YWx1ZT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFhbX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGxhYmVsPVwiUERGIFVSTFwiXG4gICAgICAgICAgbmFtZT1cInBkZl91cmxcIlxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wZGZfdXJsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGxhYmVsPVwiVm9sZ29yZGUgTnVtbWVyXCJcbiAgICAgICAgICBuYW1lPVwidm9sZ29yZGVfbnVtbWVyXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudm9sZ29yZGVfbnVtbWVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259XG4gICAgICAgID5cbiAgICAgICAgICB7aXNOZXcgPyBcIlRvZXZvZWdlblwiIDogXCJPcHNsYWFuXCJ9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgICBcbiAgICAgIDxCb3ggc3g9e3sgbXQ6IDQsIG1iOiAyIH19PlxuICAgICAgICA8aDM+UGxheWxpc3QgVG9ldm9lZ2VuPC9oMz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGxhYmVsPVwiUGxheWxpc3QgVVJMIChZb3VUdWJlL1NvdW5kQ2xvdWQpXCJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgIHN4PXt7IG1iOiAyIH19XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQbGF5bGlzdFVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcm9jZXNzUGxheWxpc3R9XG4gICAgICAgICAgc3g9e3sgbXI6IDIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFBsYXlsaXN0IFZlcndlcmtlblxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0ZWxcIlxuICAgICAgICAgIHZhbHVlPXtuZXdMZXNzb24udGl0ZWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgc2V0TmV3TGVzc29uKHsgLi4ubmV3TGVzc29uLCB0aXRlbDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlcyBVUkxcIlxuICAgICAgICAgIHZhbHVlPXtuZXdMZXNzb24ubGVzX3VybH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICBzZXROZXdMZXNzb24oeyAuLi5uZXdMZXNzb24sIGxlc191cmw6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvbGdvcmRlIE51bW1lclwiXG4gICAgICAgICAgdmFsdWU9e25ld0xlc3Nvbi52b2xnb3JkZV9udW1tZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgc2V0TmV3TGVzc29uKHtcbiAgICAgICAgICAgICAgLi4ubmV3TGVzc29uLFxuICAgICAgICAgICAgICB2b2xnb3JkZV9udW1tZXI6IE51bWJlcihlLnRhcmdldC52YWx1ZSksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQWRkTGVzc29ufT5cbiAgICAgICAgICBWb2VnIExlcyBUb2VcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDQwMCwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICA8RGF0YUdyaWRcbiAgICAgICAgICByb3dzPXtsZXNzZW59XG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICBwYWdlU2l6ZT17NX1cbiAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1s1XX1cbiAgICAgICAgICBnZXRSb3dJZD17KHJvdykgPT4gcm93LmlkfSAvLyBab3JnIGVydm9vciBkYXQgZGl0IG9uZGVyIGRlIHJvd3MgaXNcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwic3VwYWJhc2UiLCJEYXRhR3JpZCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIkJveCIsInN0eWxlcyIsIkJvb2tFZGl0Iiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImlzTmV3IiwibGVzc2VuIiwic2V0TGVzc2VuIiwicGxheWxpc3RVcmwiLCJzZXRQbGF5bGlzdFVybCIsImhhbmRsZVByb2Nlc3NQbGF5bGlzdCIsInBsYXlsaXN0SWQiLCJpbmNsdWRlcyIsIm1hdGNoIiwiYWxlcnQiLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1lPVVRVQkVfQVBJX0tFWSIsImRhdGEiLCJqc29uIiwibmV3TGVzc29ucyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwidGl0ZWwiLCJzbmlwcGV0IiwidGl0bGUiLCJsZXNfdXJsIiwicmVzb3VyY2VJZCIsInZpZGVvSWQiLCJ2b2xnb3JkZV9udW1tZXIiLCJib2VrX2lkIiwiZXJyb3IiLCJmcm9tIiwiaW5zZXJ0IiwicHJldiIsImNvbnNvbGUiLCJuZXdMZXNzb24iLCJzZXROZXdMZXNzb24iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiYmVzY2hyaWp2aW5nIiwiY2F0ZWdvcmllX2lkIiwicGRmX3VybCIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwibG9hZENhdGVnb3JpZXMiLCJsb2FkQm9layIsImxvYWRMZXNzZW4iLCJsZXNzb25EYXRhIiwic2VsZWN0IiwiZXEiLCJvcmRlciIsImFzY2VuZGluZyIsInNpbmdsZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZSIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVBZGRMZXNzb24iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJoYW5kbGVEZWxldGVMZXNzb24iLCJsZXNzb25JZCIsImRlbGV0ZSIsImZpbHRlciIsImxlcyIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsInJlbmRlckNlbGwiLCJwYXJhbXMiLCJ2YXJpYW50IiwiY29sb3IiLCJzaXplIiwib25DbGljayIsInJvdyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwiY29tcG9uZW50Iiwib25TdWJtaXQiLCJmb3JtIiwiZnVsbFdpZHRoIiwibGFiZWwiLCJvbkNoYW5nZSIsIm1hcmdpbiIsInJlcXVpcmVkIiwibXVsdGlsaW5lIiwicm93cyIsIm9wdGlvbiIsImRpc2FibGVkIiwiY2F0ZWdvcnkiLCJuYWFtIiwidHlwZSIsInN1Ym1pdEJ1dHRvbiIsInN4IiwibXQiLCJtYiIsImgzIiwibXIiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiTnVtYmVyIiwiaGVpZ2h0IiwicGFnZVNpemUiLCJyb3dzUGVyUGFnZU9wdGlvbnMiLCJnZXRSb3dJZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/admin/boek/[id].js\n");

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

/***/ "(pages-dir-node)/__barrel_optimize__?names=Box,Button,TextField!=!./node_modules/@mui/material/esm/index.js":
/*!**************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,Button,TextField!=!./node_modules/@mui/material/esm/index.js ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Button: () => (/* reexport safe */ _Button_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   TextField: () => (/* reexport safe */ _TextField_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _Button_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _TextField_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/TextField/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_1__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_2__]);\n([_Box_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_1__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUJveCxCdXR0b24sVGV4dEZpZWxkIT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNNIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2VzbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSBcIi4vQm94L2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEZpZWxkIH0gZnJvbSBcIi4vVGV4dEZpZWxkL2luZGV4LmpzXCIiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=Box,Button,TextField!=!./node_modules/@mui/material/esm/index.js\n");

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