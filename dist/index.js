/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tasks = [\n  {\n    description: 'Eat dinner',\n    completed: false,\n    index: 0,\n  },\n  {\n    description: 'Reading',\n    completed: false,\n    index: 1,\n  },\n];\n\nconst addtask = (task) => `<li>${tasks[task].description}</li>`;\n\nconst display = () => {\n  const tasklist = document.querySelector('.task');\n  for (let i = 0; i <= Object.keys(tasks).length; i += 1) {\n    const ul = document.createElement('ul');\n    ul.classList = 'task-list';\n    ul.innerHTML = addtask(i);\n    tasklist.appendChild(ul);\n  }\n};\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;