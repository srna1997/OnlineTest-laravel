/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] C:\\xampp\\htdocs\\OnlineTest\\resources\\js\\bootstrap.js: Cannot find module '@babel/parser'\nRequire stack:\n- C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\index.js\n- C:\\xampp\\htdocs\\OnlineTest\\node_modules\\laravel-mix\\src\\FileCollection.js\n- C:\\xampp\\htdocs\\OnlineTest\\node_modules\\laravel-mix\\src\\tasks\\ConcatenateFilesTask.js\n- C:\\xampp\\htdocs\\OnlineTest\\node_modules\\laravel-mix\\src\\components\\Combine.js\n- C:\\xampp\\htdocs\\OnlineTest\\node_modules\\laravel-mix\\src\\components\\ComponentFactory.js\n- C:\\xampp\\htdocs\\OnlineTest\\node_modules\\laravel-mix\\setup\\webpack.config.js\n- C:\\xampp\\htdocs\\OnlineTest\\node_modules\\webpack-cli\\bin\\utils\\convert-argv.js\n- C:\\xampp\\htdocs\\OnlineTest\\node_modules\\webpack-cli\\bin\\cli.js\n- C:\\xampp\\htdocs\\OnlineTest\\node_modules\\webpack\\bin\\webpack.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:982:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:864:27)\n    at Module.require (internal/modules/cjs/loader.js:1044:19)\n    at require (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\v8-compile-cache\\v8-compile-cache.js:161:20)\n    at _parser (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\index.js:205:16)\n    at Object.get [as tokTypes] (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\index.js:46:12)\n    at Function.assign (<anonymous>)\n    at C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\config\\full.js:196:24\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\gensync-utils\\async.js:26:3)\n    at Generator.next (<anonymous>)\n    at step (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\gensync\\index.js:254:32)\n    at evaluateAsync (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\gensync\\index.js:284:5)\n    at Function.errback (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\gensync\\index.js:108:7)\n    at errback (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\gensync-utils\\async.js:70:18)\n    at async (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\gensync\\index.js:183:31)\n    at onFirstPause (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\gensync\\index.js:209:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\config\\caching.js:68:46)\n    at cachedFunction.next (<anonymous>)\n    at loadPluginDescriptor (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\config\\full.js:235:43)\n    at loadPluginDescriptor.next (<anonymous>)\n    at recurseDescriptors (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\config\\full.js:88:34)\n    at recurseDescriptors.next (<anonymous>)\n    at loadFullConfig (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\config\\full.js:142:6)\n    at loadFullConfig.next (<anonymous>)\n    at Function.transform (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\@babel\\core\\lib\\transform.js:25:45)\n    at transform.next (<anonymous>)\n    at step (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\gensync\\index.js:262:25)\n    at C:\\xampp\\htdocs\\OnlineTest\\node_modules\\gensync\\index.js:266:13\n    at async.call.result.err.err (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\gensync\\index.js:216:11)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n8 │ @import '~bootstrap/scss/bootstrap';\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  C:\\xampp\\htdocs\\OnlineTest\\resources\\sass\\app.scss 8:9  root stylesheet\n    at C:\\xampp\\htdocs\\OnlineTest\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\xampp\\htdocs\\OnlineTest\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\xampp\\htdocs\\OnlineTest\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:87203:16)\n    at _render_closure1.call$2 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:76994:12)\n    at _RootZone.runBinary$3$3 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:25521:18)\n    at _RootZone.runBinary$3 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:25525:19)\n    at _FutureListener.handleError$1 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:23975:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:24271:40)\n    at Object._Future__propagateToListeners (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:3500:88)\n    at _Future._completeError$2 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:24099:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:23491:12)\n    at Object._asyncRethrow (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:3256:17)\n    at C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:13326:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:3279:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:23512:12)\n    at _awaitOnObject_closure0.call$2 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:23504:25)\n    at _RootZone.runBinary$3$3 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:25521:18)\n    at _RootZone.runBinary$3 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:25525:19)\n    at _FutureListener.handleError$1 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:23975:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:24271:40)\n    at Object._Future__propagateToListeners (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:3500:88)\n    at _Future._completeError$2 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:24099:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:23491:12)\n    at Object._asyncRethrow (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:3256:17)\n    at C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:15981:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:3279:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:23512:12)\n    at _awaitOnObject_closure0.call$2 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:23504:25)\n    at _RootZone.runBinary$3$3 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:25521:18)\n    at _RootZone.runBinary$3 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:25525:19)\n    at _FutureListener.handleError$1 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:23975:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:24271:40)\n    at Object._Future__propagateToListeners (C:\\xampp\\htdocs\\OnlineTest\\node_modules\\sass\\sass.dart.js:3500:88)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\OnlineTest\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\OnlineTest\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });