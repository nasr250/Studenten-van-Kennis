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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookEdit)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/supabase */ \"(pages-dir-node)/./lib/supabase.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-data-grid */ \"@mui/x-data-grid\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField!=!@mui/material */ \"(pages-dir-node)/__barrel_optimize__?names=Box,Button,TextField!=!./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/Admin.module.css */ \"(pages-dir-node)/./styles/Admin.module.css\");\n/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__]);\n_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction BookEdit() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const isNew = id === \"new\";\n    const [lessen, setLessen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [playlistUrl, setPlaylistUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleProcessPlaylist = async ()=>{\n        if (!playlistUrl) return;\n        try {\n            // Extract video IDs from playlist URL\n            let playlistId = \"\";\n            if (playlistUrl.includes(\"youtube.com\") || playlistUrl.includes(\"youtu.be\")) {\n                playlistId = playlistUrl.match(/[?&]list=([^&]+)/)?.[1];\n                if (!playlistId) {\n                    alert(\"Ongeldige YouTube playlist URL\");\n                    return;\n                }\n                // Fetch playlist data from YouTube API\n                const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${\"AIzaSyAZdVUeiDo4333xxgbKzJQsqO90fL-HME8\"}`);\n                const data = await response.json();\n                // Create lessons from playlist items\n                const newLessons = data.items.map((item, index)=>({\n                        id: `temp_${Date.now()}_${index}`,\n                        titel: item.snippet.title,\n                        les_url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,\n                        volgorde_nummer: index + 1,\n                        boek_id: id\n                    }));\n                // Insert all lessons into database\n                const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").insert(newLessons);\n                if (error) throw error;\n                // Update local state\n                setLessen((prev)=>[\n                        ...prev,\n                        ...newLessons\n                    ]);\n                alert(\"Lessen succesvol aangemaakt van playlist!\");\n            } else if (playlistUrl.includes(\"soundcloud.com/sets/\")) {\n                // Call the function to fetch playlist data\n                const tracks = await fetchPlaylistData(playlistUrl);\n                const newLessons = tracks.map((track, index)=>({\n                        id: `temp_${Date.now()}_${index}`,\n                        titel: track.title,\n                        les_url: track.permalink_url,\n                        volgorde_nummer: index + 1,\n                        boek_id: id\n                    }));\n                // Insert all lessons into the database\n                const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").insert(newLessons);\n                if (error) throw error;\n                // Update local state\n                setLessen((prev)=>[\n                        ...prev,\n                        ...newLessons\n                    ]);\n                alert(\"Lessen succesvol aangemaakt van SoundCloud playlist!\");\n            } else {\n                alert(\"Voer een geldige YouTube of SoundCloud playlist URL in\");\n            }\n        } catch (error) {\n            console.error(\"Error processing playlist:\", error);\n            alert(\"Er is een fout opgetreden bij het verwerken van de playlist\");\n        }\n        async function fetchPlaylistData(url) {\n            try {\n                const { data: html } = await axios.get(url);\n                const $ = cheerio.load(html);\n                const pageDataScript = $('script:contains(\"window.__sc_hydration\")').html();\n                const matches = pageDataScript.match(/window\\.__sc_hydration = (.*);/);\n                if (matches && matches[1]) {\n                    const scData = JSON.parse(matches[1]);\n                    const tracks = scData.find((item)=>item.hydration?.data?.tracks)?.hydration?.data?.tracks;\n                    if (!tracks) throw new Error(\"Geen tracks gevonden in playlist\");\n                    return tracks.map((track)=>({\n                            title: track.title,\n                            permalink_url: track.permalink_url\n                        }));\n                }\n                throw new Error(\"Geen playlist data gevonden\");\n            } catch (error) {\n                console.error(\"Error scraping playlist:\", error);\n                throw new Error(\"Kon playlist niet laden\");\n            }\n        }\n        const [newLesson, setNewLesson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n            titel: \"\",\n            les_url: \"\",\n            volgorde_nummer: 1\n        });\n        const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n            titel: \"\",\n            beschrijving: \"\",\n            categorie_id: \"\",\n            pdf_url: \"\",\n            volgorde_nummer: \"\"\n        });\n        const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n            \"BookEdit.handleProcessPlaylist.useEffect\": ()=>{\n                loadCategories();\n                if (!isNew && id) {\n                    loadBoek();\n                    loadLessen();\n                }\n            }\n        }[\"BookEdit.handleProcessPlaylist.useEffect\"], [\n            id\n        ]);\n        const loadLessen = async ()=>{\n            const { data: lessonData } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").select(\"*\").eq(\"boek_id\", id).order(\"volgorde_nummer\", {\n                ascending: true\n            });\n            setLessen(lessonData || []);\n        };\n        const loadCategories = async ()=>{\n            const { data, error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"categorieen\").select(\"*\");\n            if (data) {\n                setCategories(data);\n            }\n            if (error) {\n                console.error(\"Error loading categories:\", error);\n            }\n        };\n        const loadBoek = async ()=>{\n            const { data } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"boeken\").select(\"*\").eq(\"id\", id).single();\n            if (data) {\n                setFormData(data);\n            }\n        };\n        const handleSubmit = async (e)=>{\n            e.preventDefault();\n            if (isNew) {\n                const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"boeken\").insert(formData);\n                if (error) console.error(\"Error adding book:\", error);\n            } else {\n                const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"boeken\").update(formData).eq(\"id\", id);\n                if (error) console.error(\"Error updating book:\", error);\n            }\n            router.push(\"/admin-dashboard\");\n        };\n        const handleChange = (e)=>{\n            setFormData({\n                ...formData,\n                [e.target.name]: e.target.value\n            });\n        };\n        const handleAddLesson = async ()=>{\n            const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").insert({\n                ...newLesson,\n                boek_id: id\n            });\n            if (!error) {\n                setLessen((prev)=>[\n                        ...prev,\n                        {\n                            ...newLesson,\n                            id: Math.random().toString()\n                        }\n                    ]); // Temporary ID for local display\n                setNewLesson({\n                    titel: \"\",\n                    les_url: \"\",\n                    volgorde_nummer: 1\n                });\n            }\n        };\n        const handleDeleteLesson = async (lessonId)=>{\n            const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessen\").delete().eq(\"id\", lessonId);\n            if (!error) {\n                setLessen((prev)=>prev.filter((les)=>les.id !== lessonId));\n            }\n        };\n        const columns = [\n            {\n                field: \"id\",\n                headerName: \"ID\",\n                width: 90\n            },\n            {\n                field: \"titel\",\n                headerName: \"Titel\",\n                width: 200\n            },\n            {\n                field: \"les_url\",\n                headerName: \"Les URL\",\n                width: 200\n            },\n            {\n                field: \"volgorde_nummer\",\n                headerName: \"Volgorde Nummer\",\n                width: 150\n            },\n            {\n                field: \"actions\",\n                headerName: \"Acties\",\n                width: 200,\n                renderCell: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        variant: \"contained\",\n                        color: \"error\",\n                        size: \"small\",\n                        onClick: ()=>handleDeleteLesson(params.row.id),\n                        children: \"Verwijderen\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 215,\n                        columnNumber: 11\n                    }, this)\n            }\n        ];\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: isNew ? \"Nieuw Boek\" : \"Boek Bewerken\"\n                }, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                    lineNumber: 229,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    component: \"form\",\n                    onSubmit: handleSubmit,\n                    className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                            fullWidth: true,\n                            label: \"Titel\",\n                            name: \"titel\",\n                            value: formData.titel,\n                            onChange: handleChange,\n                            margin: \"normal\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 231,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                            fullWidth: true,\n                            label: \"Beschrijving\",\n                            name: \"beschrijving\",\n                            value: formData.beschrijving,\n                            onChange: handleChange,\n                            margin: \"normal\",\n                            multiline: true,\n                            rows: 4\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 240,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            name: \"categorie_id\",\n                            value: formData.categorie_id,\n                            onChange: handleChange,\n                            className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().select),\n                            required: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    children: \"Kies een categorie\"\n                                }, void 0, false, {\n                                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                                    lineNumber: 257,\n                                    columnNumber: 13\n                                }, this),\n                                categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: category.id,\n                                        children: category.naam\n                                    }, category.id, false, {\n                                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                                        lineNumber: 261,\n                                        columnNumber: 15\n                                    }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 250,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                            fullWidth: true,\n                            label: \"PDF URL\",\n                            name: \"pdf_url\",\n                            value: formData.pdf_url,\n                            onChange: handleChange,\n                            margin: \"normal\"\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 266,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                            fullWidth: true,\n                            label: \"Volgorde Nummer\",\n                            name: \"volgorde_nummer\",\n                            type: \"number\",\n                            value: formData.volgorde_nummer,\n                            onChange: handleChange,\n                            margin: \"normal\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 274,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            type: \"submit\",\n                            variant: \"contained\",\n                            color: \"primary\",\n                            className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().submitButton),\n                            children: isNew ? \"Toevoegen\" : \"Opslaan\"\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 284,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                    lineNumber: 230,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    sx: {\n                        mt: 4,\n                        mb: 2\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Playlist Toevoegen\"\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 295,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                            fullWidth: true,\n                            label: \"Playlist URL (YouTube/SoundCloud)\",\n                            variant: \"outlined\",\n                            sx: {\n                                mb: 2\n                            },\n                            onChange: (e)=>setPlaylistUrl(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 296,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            variant: \"contained\",\n                            color: \"secondary\",\n                            onClick: handleProcessPlaylist,\n                            sx: {\n                                mr: 2\n                            },\n                            children: \"Playlist Verwerken\"\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 303,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                    lineNumber: 294,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    component: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Titel\",\n                            value: newLesson.titel,\n                            onChange: (e)=>setNewLesson({\n                                    ...newLesson,\n                                    titel: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 314,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Les URL\",\n                            value: newLesson.les_url,\n                            onChange: (e)=>setNewLesson({\n                                    ...newLesson,\n                                    les_url: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 322,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Volgorde Nummer\",\n                            value: newLesson.volgorde_nummer,\n                            onChange: (e)=>setNewLesson({\n                                    ...newLesson,\n                                    volgorde_nummer: Number(e.target.value)\n                                })\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 330,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            variant: \"contained\",\n                            onClick: handleAddLesson,\n                            children: \"Voeg Les Toe\"\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                            lineNumber: 341,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                    lineNumber: 313,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    sx: {\n                        height: 400,\n                        width: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__.DataGrid, {\n                        rows: lessen,\n                        columns: columns,\n                        pageSize: 5,\n                        rowsPerPageOptions: [\n                            5\n                        ],\n                        getRowId: (row)=>row.id\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                        lineNumber: 347,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n                    lineNumber: 346,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/runner/workspace/pages/admin/boek/[id].js\",\n            lineNumber: 228,\n            columnNumber: 7\n        }, this);\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2FkbWluL2JvZWsvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ1M7QUFDTDtBQUNXO0FBQ0Q7QUFFdkMsU0FBU1M7SUFDdEIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsTUFBTUMsUUFBUUYsT0FBTztJQUNyQixNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1pQix3QkFBd0I7UUFDNUIsSUFBSSxDQUFDRixhQUFhO1FBRWxCLElBQUk7WUFDRixzQ0FBc0M7WUFDdEMsSUFBSUcsYUFBYTtZQUNqQixJQUNFSCxZQUFZSSxRQUFRLENBQUMsa0JBQ3JCSixZQUFZSSxRQUFRLENBQUMsYUFDckI7Z0JBQ0FELGFBQWFILFlBQVlLLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUNGLFlBQVk7b0JBQ2ZHLE1BQU07b0JBQ047Z0JBQ0Y7Z0JBRUEsdUNBQXVDO2dCQUN2QyxNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLENBQUMsMEZBQTBGLEVBQUVMLFdBQVcsS0FBSyxFQUFFTSx5Q0FBdUMsRUFBRTtnQkFFMUosTUFBTUcsT0FBTyxNQUFNTCxTQUFTTSxJQUFJO2dCQUVoQyxxQ0FBcUM7Z0JBQ3JDLE1BQU1DLGFBQWFGLEtBQUtHLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVc7d0JBQ2xEdkIsSUFBSSxDQUFDLEtBQUssRUFBRXdCLEtBQUtDLEdBQUcsR0FBRyxDQUFDLEVBQUVGLE9BQU87d0JBQ2pDRyxPQUFPSixLQUFLSyxPQUFPLENBQUNDLEtBQUs7d0JBQ3pCQyxTQUFTLENBQUMsOEJBQThCLEVBQUVQLEtBQUtL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QUFDcUI7NEJBQ0NQLE1BQUs7NEJBQ0xRLGFBQVk7NEJBQ1ovQyxPQUFPMUIsVUFBVWhDLEtBQUs7NEJBQ3RCd0YsVUFBVSxDQUFDckMsSUFDVGxCLGFBQWE7b0NBQUUsR0FBR0QsU0FBUztvQ0FBRWhDLE9BQU9tRCxFQUFFSyxNQUFNLENBQUNFLEtBQUs7Z0NBQUM7Ozs7OztzQ0FHdkQsOERBQUM4Qzs0QkFDQ1AsTUFBSzs0QkFDTFEsYUFBWTs0QkFDWi9DLE9BQU8xQixVQUFVN0IsT0FBTzs0QkFDeEJxRixVQUFVLENBQUNyQyxJQUNUbEIsYUFBYTtvQ0FBRSxHQUFHRCxTQUFTO29DQUFFN0IsU0FBU2dELEVBQUVLLE1BQU0sQ0FBQ0UsS0FBSztnQ0FBQzs7Ozs7O3NDQUd6RCw4REFBQzhDOzRCQUNDUCxNQUFLOzRCQUNMUSxhQUFZOzRCQUNaL0MsT0FBTzFCLFVBQVUxQixlQUFlOzRCQUNoQ2tGLFVBQVUsQ0FBQ3JDLElBQ1RsQixhQUFhO29DQUNYLEdBQUdELFNBQVM7b0NBQ1oxQixpQkFBaUJvRyxPQUFPdkQsRUFBRUssTUFBTSxDQUFDRSxLQUFLO2dDQUN4Qzs7Ozs7O3NDQUdKLDhEQUFDekYsNEZBQU1BOzRCQUFDeUcsU0FBUTs0QkFBWUcsU0FBU2xCO3NDQUFpQjs7Ozs7Ozs7Ozs7OzhCQUt4RCw4REFBQ3pGLHlGQUFHQTtvQkFBQ2lJLElBQUk7d0JBQUVRLFFBQVE7d0JBQUtwQyxPQUFPO29CQUFPOzhCQUNwQyw0RUFBQ3hHLHNEQUFRQTt3QkFDUDZILE1BQU1uSDt3QkFDTjJGLFNBQVNBO3dCQUNUd0MsVUFBVTt3QkFDVkMsb0JBQW9COzRCQUFDO3lCQUFFO3dCQUN2QkMsVUFBVSxDQUFDaEMsTUFBUUEsSUFBSXhHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS25DO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvcGFnZXMvYWRtaW4vYm9lay9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N1cGFiYXNlXCI7XG5pbXBvcnQgeyBEYXRhR3JpZCB9IGZyb20gXCJAbXVpL3gtZGF0YS1ncmlkXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9BZG1pbi5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tFZGl0KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBpc05ldyA9IGlkID09PSBcIm5ld1wiO1xuICBjb25zdCBbbGVzc2VuLCBzZXRMZXNzZW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcGxheWxpc3RVcmwsIHNldFBsYXlsaXN0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVByb2Nlc3NQbGF5bGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXBsYXlsaXN0VXJsKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgLy8gRXh0cmFjdCB2aWRlbyBJRHMgZnJvbSBwbGF5bGlzdCBVUkxcbiAgICAgIGxldCBwbGF5bGlzdElkID0gXCJcIjtcbiAgICAgIGlmIChcbiAgICAgICAgcGxheWxpc3RVcmwuaW5jbHVkZXMoXCJ5b3V0dWJlLmNvbVwiKSB8fFxuICAgICAgICBwbGF5bGlzdFVybC5pbmNsdWRlcyhcInlvdXR1LmJlXCIpXG4gICAgICApIHtcbiAgICAgICAgcGxheWxpc3RJZCA9IHBsYXlsaXN0VXJsLm1hdGNoKC9bPyZdbGlzdD0oW14mXSspLyk/LlsxXTtcbiAgICAgICAgaWYgKCFwbGF5bGlzdElkKSB7XG4gICAgICAgICAgYWxlcnQoXCJPbmdlbGRpZ2UgWW91VHViZSBwbGF5bGlzdCBVUkxcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmV0Y2ggcGxheWxpc3QgZGF0YSBmcm9tIFlvdVR1YmUgQVBJXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvcGxheWxpc3RJdGVtcz9wYXJ0PXNuaXBwZXQmbWF4UmVzdWx0cz01MCZwbGF5bGlzdElkPSR7cGxheWxpc3RJZH0ma2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfWU9VVFVCRV9BUElfS0VZfWAsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxlc3NvbnMgZnJvbSBwbGF5bGlzdCBpdGVtc1xuICAgICAgICBjb25zdCBuZXdMZXNzb25zID0gZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGlkOiBgdGVtcF8ke0RhdGUubm93KCl9XyR7aW5kZXh9YCwgLy8gQWRkIHRlbXBvcmFyeSBJRFxuICAgICAgICAgIHRpdGVsOiBpdGVtLnNuaXBwZXQudGl0bGUsXG4gICAgICAgICAgbGVzX3VybDogYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7aXRlbS5zbmlwcGV0LnJlc291cmNlSWQudmlkZW9JZH1gLFxuICAgICAgICAgIHZvbGdvcmRlX251bW1lcjogaW5kZXggKyAxLFxuICAgICAgICAgIGJvZWtfaWQ6IGlkLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gSW5zZXJ0IGFsbCBsZXNzb25zIGludG8gZGF0YWJhc2VcbiAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImxlc3NlblwiKS5pbnNlcnQobmV3TGVzc29ucyk7XG5cbiAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcblxuICAgICAgICAvLyBVcGRhdGUgbG9jYWwgc3RhdGVcbiAgICAgICAgc2V0TGVzc2VuKChwcmV2KSA9PiBbLi4ucHJldiwgLi4ubmV3TGVzc29uc10pO1xuICAgICAgICBhbGVydChcIkxlc3NlbiBzdWNjZXN2b2wgYWFuZ2VtYWFrdCB2YW4gcGxheWxpc3QhXCIpO1xuICAgICAgfSBlbHNlIGlmIChwbGF5bGlzdFVybC5pbmNsdWRlcyhcInNvdW5kY2xvdWQuY29tL3NldHMvXCIpKSB7XG4gICAgICAgIC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIGZldGNoIHBsYXlsaXN0IGRhdGFcbiAgICAgICAgY29uc3QgdHJhY2tzID0gYXdhaXQgZmV0Y2hQbGF5bGlzdERhdGEocGxheWxpc3RVcmwpO1xuICAgICAgICBjb25zdCBuZXdMZXNzb25zID0gdHJhY2tzLm1hcCgodHJhY2ssIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGlkOiBgdGVtcF8ke0RhdGUubm93KCl9XyR7aW5kZXh9YCwgLy8gQWRkIGEgdW5pcXVlIHRlbXBvcmFyeSBJRFxuICAgICAgICAgIHRpdGVsOiB0cmFjay50aXRsZSxcbiAgICAgICAgICBsZXNfdXJsOiB0cmFjay5wZXJtYWxpbmtfdXJsLCAvLyBVUkwgdG8gdGhlIFNvdW5kQ2xvdWQgdHJhY2tcbiAgICAgICAgICB2b2xnb3JkZV9udW1tZXI6IGluZGV4ICsgMSxcbiAgICAgICAgICBib2VrX2lkOiBpZCxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIEluc2VydCBhbGwgbGVzc29ucyBpbnRvIHRoZSBkYXRhYmFzZVxuICAgICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwibGVzc2VuXCIpLmluc2VydChuZXdMZXNzb25zKTtcblxuICAgICAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZVxuICAgICAgICBzZXRMZXNzZW4oKHByZXYpID0+IFsuLi5wcmV2LCAuLi5uZXdMZXNzb25zXSk7XG4gICAgICAgIGFsZXJ0KFwiTGVzc2VuIHN1Y2Nlc3ZvbCBhYW5nZW1hYWt0IHZhbiBTb3VuZENsb3VkIHBsYXlsaXN0IVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiVm9lciBlZW4gZ2VsZGlnZSBZb3VUdWJlIG9mIFNvdW5kQ2xvdWQgcGxheWxpc3QgVVJMIGluXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcHJvY2Vzc2luZyBwbGF5bGlzdDpcIiwgZXJyb3IpO1xuICAgICAgYWxlcnQoXCJFciBpcyBlZW4gZm91dCBvcGdldHJlZGVuIGJpaiBoZXQgdmVyd2Vya2VuIHZhbiBkZSBwbGF5bGlzdFwiKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFBsYXlsaXN0RGF0YSh1cmwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogaHRtbCB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgICAgIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoaHRtbCk7XG4gICAgICAgIGNvbnN0IHBhZ2VEYXRhU2NyaXB0ID0gJChcbiAgICAgICAgICAnc2NyaXB0OmNvbnRhaW5zKFwid2luZG93Ll9fc2NfaHlkcmF0aW9uXCIpJyxcbiAgICAgICAgKS5odG1sKCk7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBwYWdlRGF0YVNjcmlwdC5tYXRjaCgvd2luZG93XFwuX19zY19oeWRyYXRpb24gPSAoLiopOy8pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHtcbiAgICAgICAgICBjb25zdCBzY0RhdGEgPSBKU09OLnBhcnNlKG1hdGNoZXNbMV0pO1xuICAgICAgICAgIGNvbnN0IHRyYWNrcyA9IHNjRGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmh5ZHJhdGlvbj8uZGF0YT8udHJhY2tzKVxuICAgICAgICAgICAgPy5oeWRyYXRpb24/LmRhdGE/LnRyYWNrcztcblxuICAgICAgICAgIGlmICghdHJhY2tzKSB0aHJvdyBuZXcgRXJyb3IoXCJHZWVuIHRyYWNrcyBnZXZvbmRlbiBpbiBwbGF5bGlzdFwiKTtcblxuICAgICAgICAgIHJldHVybiB0cmFja3MubWFwKCh0cmFjaykgPT4gKHtcbiAgICAgICAgICAgIHRpdGxlOiB0cmFjay50aXRsZSxcbiAgICAgICAgICAgIHBlcm1hbGlua191cmw6IHRyYWNrLnBlcm1hbGlua191cmwsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlZW4gcGxheWxpc3QgZGF0YSBnZXZvbmRlblwiKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzY3JhcGluZyBwbGF5bGlzdDpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJLb24gcGxheWxpc3QgbmlldCBsYWRlblwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBbbmV3TGVzc29uLCBzZXROZXdMZXNzb25dID0gdXNlU3RhdGUoe1xuICAgICAgdGl0ZWw6IFwiXCIsXG4gICAgICBsZXNfdXJsOiBcIlwiLFxuICAgICAgdm9sZ29yZGVfbnVtbWVyOiAxLFxuICAgIH0pO1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgdGl0ZWw6IFwiXCIsXG4gICAgICBiZXNjaHJpanZpbmc6IFwiXCIsXG4gICAgICBjYXRlZ29yaWVfaWQ6IFwiXCIsXG4gICAgICBwZGZfdXJsOiBcIlwiLFxuICAgICAgdm9sZ29yZGVfbnVtbWVyOiBcIlwiLFxuICAgIH0pO1xuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBsb2FkQ2F0ZWdvcmllcygpO1xuICAgICAgaWYgKCFpc05ldyAmJiBpZCkge1xuICAgICAgICBsb2FkQm9laygpO1xuICAgICAgICBsb2FkTGVzc2VuKCk7XG4gICAgICB9XG4gICAgfSwgW2lkXSk7XG5cbiAgICBjb25zdCBsb2FkTGVzc2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhOiBsZXNzb25EYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImxlc3NlblwiKVxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgICAuZXEoXCJib2VrX2lkXCIsIGlkKVxuICAgICAgICAub3JkZXIoXCJ2b2xnb3JkZV9udW1tZXJcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG4gICAgICBzZXRMZXNzZW4obGVzc29uRGF0YSB8fCBbXSk7XG4gICAgfTtcbiAgICBjb25zdCBsb2FkQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJjYXRlZ29yaWVlblwiKS5zZWxlY3QoXCIqXCIpO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKTtcbiAgICAgIH1cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBjYXRlZ29yaWVzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRCb2VrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImJvZWtlblwiKVxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgICAuZXEoXCJpZFwiLCBpZClcbiAgICAgICAgLnNpbmdsZSgpO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBzZXRGb3JtRGF0YShkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJib2VrZW5cIikuaW5zZXJ0KGZvcm1EYXRhKTtcbiAgICAgICAgaWYgKGVycm9yKSBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGJvb2s6XCIsIGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgLmZyb20oXCJib2VrZW5cIilcbiAgICAgICAgICAudXBkYXRlKGZvcm1EYXRhKVxuICAgICAgICAgIC5lcShcImlkXCIsIGlkKTtcbiAgICAgICAgaWYgKGVycm9yKSBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgYm9vazpcIiwgZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXIucHVzaChcIi9hZG1pbi1kYXNoYm9hcmRcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVBZGRMZXNzb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImxlc3NlblwiKVxuICAgICAgICAuaW5zZXJ0KHsgLi4ubmV3TGVzc29uLCBib2VrX2lkOiBpZCB9KTtcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgc2V0TGVzc2VuKChwcmV2KSA9PiBbXG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICB7IC4uLm5ld0xlc3NvbiwgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSB9LFxuICAgICAgICBdKTsgLy8gVGVtcG9yYXJ5IElEIGZvciBsb2NhbCBkaXNwbGF5XG4gICAgICAgIHNldE5ld0xlc3Nvbih7IHRpdGVsOiBcIlwiLCBsZXNfdXJsOiBcIlwiLCB2b2xnb3JkZV9udW1tZXI6IDEgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVEZWxldGVMZXNzb24gPSBhc3luYyAobGVzc29uSWQpID0+IHtcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwibGVzc2VuXCIpXG4gICAgICAgIC5kZWxldGUoKVxuICAgICAgICAuZXEoXCJpZFwiLCBsZXNzb25JZCk7XG4gICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgIHNldExlc3NlbigocHJldikgPT4gcHJldi5maWx0ZXIoKGxlcykgPT4gbGVzLmlkICE9PSBsZXNzb25JZCkpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgIHsgZmllbGQ6IFwiaWRcIiwgaGVhZGVyTmFtZTogXCJJRFwiLCB3aWR0aDogOTAgfSxcbiAgICAgIHsgZmllbGQ6IFwidGl0ZWxcIiwgaGVhZGVyTmFtZTogXCJUaXRlbFwiLCB3aWR0aDogMjAwIH0sXG4gICAgICB7IGZpZWxkOiBcImxlc191cmxcIiwgaGVhZGVyTmFtZTogXCJMZXMgVVJMXCIsIHdpZHRoOiAyMDAgfSxcbiAgICAgIHsgZmllbGQ6IFwidm9sZ29yZGVfbnVtbWVyXCIsIGhlYWRlck5hbWU6IFwiVm9sZ29yZGUgTnVtbWVyXCIsIHdpZHRoOiAxNTAgfSxcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IFwiYWN0aW9uc1wiLFxuICAgICAgICBoZWFkZXJOYW1lOiBcIkFjdGllc1wiLFxuICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVMZXNzb24ocGFyYW1zLnJvdy5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmVyd2lqZGVyZW5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMT57aXNOZXcgPyBcIk5pZXV3IEJvZWtcIiA6IFwiQm9layBCZXdlcmtlblwifTwvaDE+XG4gICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbGFiZWw9XCJUaXRlbFwiXG4gICAgICAgICAgICBuYW1lPVwidGl0ZWxcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRpdGVsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBsYWJlbD1cIkJlc2NocmlqdmluZ1wiXG4gICAgICAgICAgICBuYW1lPVwiYmVzY2hyaWp2aW5nXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5iZXNjaHJpanZpbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgcm93cz17NH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVfaWRcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNhdGVnb3JpZV9pZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgS2llcyBlZW4gY2F0ZWdvcmllXG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NhdGVnb3J5LmlkfSB2YWx1ZT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYWFtfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbGFiZWw9XCJQREYgVVJMXCJcbiAgICAgICAgICAgIG5hbWU9XCJwZGZfdXJsXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wZGZfdXJsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGxhYmVsPVwiVm9sZ29yZGUgTnVtbWVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJ2b2xnb3JkZV9udW1tZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudm9sZ29yZGVfbnVtbWVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTmV3ID8gXCJUb2V2b2VnZW5cIiA6IFwiT3BzbGFhblwifVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IHN4PXt7IG10OiA0LCBtYjogMiB9fT5cbiAgICAgICAgICA8aDM+UGxheWxpc3QgVG9ldm9lZ2VuPC9oMz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGxhYmVsPVwiUGxheWxpc3QgVVJMIChZb3VUdWJlL1NvdW5kQ2xvdWQpXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBzeD17eyBtYjogMiB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQbGF5bGlzdFVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByb2Nlc3NQbGF5bGlzdH1cbiAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGxheWxpc3QgVmVyd2Vya2VuXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRlbFwiXG4gICAgICAgICAgICB2YWx1ZT17bmV3TGVzc29uLnRpdGVsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICBzZXROZXdMZXNzb24oeyAuLi5uZXdMZXNzb24sIHRpdGVsOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlcyBVUkxcIlxuICAgICAgICAgICAgdmFsdWU9e25ld0xlc3Nvbi5sZXNfdXJsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICBzZXROZXdMZXNzb24oeyAuLi5uZXdMZXNzb24sIGxlc191cmw6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb2xnb3JkZSBOdW1tZXJcIlxuICAgICAgICAgICAgdmFsdWU9e25ld0xlc3Nvbi52b2xnb3JkZV9udW1tZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgIHNldE5ld0xlc3Nvbih7XG4gICAgICAgICAgICAgICAgLi4ubmV3TGVzc29uLFxuICAgICAgICAgICAgICAgIHZvbGdvcmRlX251bW1lcjogTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUFkZExlc3Nvbn0+XG4gICAgICAgICAgICBWb2VnIExlcyBUb2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDQwMCwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgIDxEYXRhR3JpZFxuICAgICAgICAgICAgcm93cz17bGVzc2VufVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIHBhZ2VTaXplPXs1fVxuICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbNV19XG4gICAgICAgICAgICBnZXRSb3dJZD17KHJvdykgPT4gcm93LmlkfSAvLyBab3JnIGVydm9vciBkYXQgZGl0IG9uZGVyIGRlIHJvd3MgaXNcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdXBhYmFzZSIsIkRhdGFHcmlkIiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwiQm94Iiwic3R5bGVzIiwiQm9va0VkaXQiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiaXNOZXciLCJsZXNzZW4iLCJzZXRMZXNzZW4iLCJwbGF5bGlzdFVybCIsInNldFBsYXlsaXN0VXJsIiwiaGFuZGxlUHJvY2Vzc1BsYXlsaXN0IiwicGxheWxpc3RJZCIsImluY2x1ZGVzIiwibWF0Y2giLCJhbGVydCIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfWU9VVFVCRV9BUElfS0VZIiwiZGF0YSIsImpzb24iLCJuZXdMZXNzb25zIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJEYXRlIiwibm93IiwidGl0ZWwiLCJzbmlwcGV0IiwidGl0bGUiLCJsZXNfdXJsIiwicmVzb3VyY2VJZCIsInZpZGVvSWQiLCJ2b2xnb3JkZV9udW1tZXIiLCJib2VrX2lkIiwiZXJyb3IiLCJmcm9tIiwiaW5zZXJ0IiwicHJldiIsInRyYWNrcyIsImZldGNoUGxheWxpc3REYXRhIiwidHJhY2siLCJwZXJtYWxpbmtfdXJsIiwiY29uc29sZSIsInVybCIsImh0bWwiLCJheGlvcyIsImdldCIsIiQiLCJjaGVlcmlvIiwibG9hZCIsInBhZ2VEYXRhU2NyaXB0IiwibWF0Y2hlcyIsInNjRGF0YSIsIkpTT04iLCJwYXJzZSIsImZpbmQiLCJoeWRyYXRpb24iLCJFcnJvciIsIm5ld0xlc3NvbiIsInNldE5ld0xlc3NvbiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJiZXNjaHJpanZpbmciLCJjYXRlZ29yaWVfaWQiLCJwZGZfdXJsIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJsb2FkQ2F0ZWdvcmllcyIsImxvYWRCb2VrIiwibG9hZExlc3NlbiIsImxlc3NvbkRhdGEiLCJzZWxlY3QiLCJlcSIsIm9yZGVyIiwiYXNjZW5kaW5nIiwic2luZ2xlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUFkZExlc3NvbiIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsImhhbmRsZURlbGV0ZUxlc3NvbiIsImxlc3NvbklkIiwiZGVsZXRlIiwiZmlsdGVyIiwibGVzIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsInZhcmlhbnQiLCJjb2xvciIsInNpemUiLCJvbkNsaWNrIiwicm93IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJjb21wb25lbnQiLCJvblN1Ym1pdCIsImZvcm0iLCJmdWxsV2lkdGgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwibWFyZ2luIiwicmVxdWlyZWQiLCJtdWx0aWxpbmUiLCJyb3dzIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJjYXRlZ29yeSIsIm5hYW0iLCJ0eXBlIiwic3VibWl0QnV0dG9uIiwic3giLCJtdCIsIm1iIiwiaDMiLCJtciIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJOdW1iZXIiLCJoZWlnaHQiLCJwYWdlU2l6ZSIsInJvd3NQZXJQYWdlT3B0aW9ucyIsImdldFJvd0lkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/admin/boek/[id].js\n");

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