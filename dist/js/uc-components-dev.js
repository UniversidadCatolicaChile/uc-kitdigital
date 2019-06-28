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

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/*! exports provided: Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Accordion =
/*#__PURE__*/
function () {
  function Accordion() {
    _classCallCheck(this, Accordion);

    this.titleClass = 'js-Accordion-title';
    this.contentClass = 'js-Accordion-content';
    this.render();
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var _this = this;

      /* Obtendremos a todos los elementos  */
      this.elements = document.querySelectorAll('[data-target]');
      this.elements.forEach(function (element) {
        element.classList.add(_this.titleClass);
        element.addEventListener('click', function (e) {
          return _this.onClick(e);
        });
        element.href = 'javascript:void(0);';
      });
      this.closeAll();
    }
  }, {
    key: "getParent",
    value: function getParent(element) {
      return typeof element.parentElement == 'undefined' || element.parentElement == null ? null : typeof element.parentElement.dataset.accordion != 'undefined' ? element.parentElement : this.getParent(element.parentElement);
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var _this2 = this;

      var element = e.target;
      var parent = this.getParent(element);

      if (parent == null) {
        var _targets = document.querySelectorAll('[data-toggle="' + element.dataset.target + '"]');

        _targets.forEach(function (item) {
          _this2.toggle(item);
        });

        return;
      }

      var targets = parent.querySelectorAll('[data-toggle="' + element.dataset.target + '"]');

      if (element.dataset.open == "true") {
        this.toggle(element);
        return;
      }
      /* SALVANDO ESTADOS */


      this.closeAll(parent, targets);
      targets.forEach(function (item) {
        _this2.toggle(item);
      });
    }
  }, {
    key: "closeAll",
    value: function closeAll(parent, objectives) {
      var _this3 = this;

      var isFirst = typeof parent == 'undefined';
      var container = isFirst ? document : parent;
      var targets = container.querySelectorAll('[data-toggle]');
      targets.forEach(function (item) {
        if (typeof objectives == 'undefined') {
          /*
          if (isFirst){
              item.classList.add(this.contentClass);
              if (typeof(item.dataset.open) != 'undefined' && item.dataset.open != "false"){
                  this.toggle(item);
                  return;
              }
          }
          item.dataset.open = false;
          item.style.height = 0; */
          _this3.operate(item, isFirst);

          return;
        }

        objectives.forEach(function (obj) {
          if (obj == item) {
            return;
          }

          _this3.operate(item, isFirst);
          /*
          if (isFirst){
              item.classList.add(this.contentClass);
              if (typeof(item.dataset.open) != 'undefined' && item.dataset.open != "false"){
                  this.toggle(item);
                  return;
              }
          }
          item.dataset.open = false;
          item.style.height = 0; */

        });
      });
    }
  }, {
    key: "operate",
    value: function operate(item, isFirst) {
      if (isFirst) {
        item.classList.add(this.contentClass);

        if (typeof item.dataset.open != 'undefined' && item.dataset.open != "false") {
          this.toggle(item);
          return;
        }
      }

      item.dataset.open = false;
      item.style.height = 0;
    }
  }, {
    key: "toggle",
    value: function toggle(el) {
      // getting the height every time in case
      // the content was updated dynamically
      var height = el.scrollHeight;

      if (el.style.height === '0px' || el.style.height === '') {
        el.style.height = height + 'px';
        el.setAttribute('data-open', 'true');
      } else {
        el.style.height = 0;
        el.setAttribute('data-open', 'false');
      }
    }
  }]);

  return Accordion;
}();



/***/ }),

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dropdown =
/*#__PURE__*/
function () {
  function Dropdown() {
    var _this = this;

    _classCallCheck(this, Dropdown);

    /* Obtendremos a todos los botones que abren modales  */
    this.elements = document.querySelectorAll('[data-dtarget]');
    this.elements.forEach(function (element) {
      element.addEventListener('click', function (e) {
        return _this.onClick(e);
      });
    });
    this.prepareDropButtons();
    this.prepareClose();
  }

  _createClass(Dropdown, [{
    key: "onClick",
    value: function onClick(e) {
      var element = e.target;
      var target = document.querySelector("[data-dropdown='" + element.dataset.dtarget + "']");
      target.classList.toggle("show");
    }
  }, {
    key: "prepareDropButtons",
    value: function prepareDropButtons() {
      var dropdowns = document.querySelector("[data-dropdown]");

      if (dropdowns == null) {
        return;
      }

      if (!Array.isArray(dropdowns)) {
        dropdowns.classList.add('dropbtn');
        return;
      }

      dropdowns.forEach(function (element) {
        element.classList.add('dropbtn');
      });
    }
  }, {
    key: "prepareClose",
    value: function prepareClose() {
      var w_click = window.onclick;

      window.onclick = function (e) {
        if (typeof w_click == 'function') {
          w_click(event);
        }

        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.querySelector("[data-dropdown]");

          if (dropdowns == null) {
            return;
          }

          if (!Array.isArray(dropdowns)) {
            if (dropdowns.classList.contains('show')) {
              dropdowns.classList.remove('show');
            }

            return;
          }

          for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      };
    }
  }]);

  return Dropdown;
}();



/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal =
/*#__PURE__*/
function () {
  function Modal() {
    var _this = this;

    _classCallCheck(this, Modal);

    /* Obtendremos a todos los botones que abren modales  */
    this.elements = document.querySelectorAll('[data-mtarget]');
    this.elements.forEach(function (element) {
      element.addEventListener('click', function (e) {
        return _this.onClick(e);
      });
    });
    this.modalOpen = null;
    this.initModals();
    this.setClosedButtons();
  }

  _createClass(Modal, [{
    key: "initModals",
    value: function initModals() {
      this.modals = document.querySelectorAll('[data-modal]');
      this.closeAll();
    }
  }, {
    key: "closeAll",
    value: function closeAll() {
      this.modals.forEach(function (element) {
        element.style.display = 'none';
      });
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var element = e.target;
      var target = document.querySelector("[data-modal='" + element.dataset.mtarget + "']");
      this.open(target);
    }
  }, {
    key: "open",
    value: function open(target) {
      if (target == null) {
        return;
      }

      target.style.display = 'block';
      this.modalOpen = target;
    }
  }, {
    key: "close",
    value: function close(target) {
      target.style.display = 'none';
      this.modalOpen = null;
    }
  }, {
    key: "getParent",
    value: function getParent(element) {
      return typeof element.parentElement == 'undefined' ? null : typeof element.parentElement.dataset.modal != 'undefined' ? element.parentElement : this.getParent(element.parentElement);
    }
  }, {
    key: "setClosedButtons",
    value: function setClosedButtons() {
      var _this2 = this;

      var closed_buttons = document.querySelectorAll('[data-mclosed]');
      closed_buttons.forEach(function (element) {
        var parent = _this2.getParent(element);

        element.addEventListener('click', function (e) {
          return _this2.close(parent);
        });
      });
      var w_click = window.onclick;

      window.onclick = function (event) {
        if (typeof w_click == 'function') {
          w_click(event);
        }

        if (event.target == _this2.modalOpen) {
          _this2.modalOpen.style.display = "none";
        }
      };

      document.addEventListener("keydown", function (e) {
        if (e.key == 'Escape') {
          if (_this2.modalOpen == null) {
            return;
          }

          _this2.close(_this2.modalOpen);
        }
      });
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./src/js/components/tab.js":
/*!**********************************!*\
  !*** ./src/js/components/tab.js ***!
  \**********************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tab =
/*#__PURE__*/
function () {
  function Tab() {
    var _this = this;

    _classCallCheck(this, Tab);

    this.tab_panels = document.querySelectorAll('[data-tabpanel]');
    this.tab_buttons = document.querySelectorAll('[data-tabtarget]');
    this.tabs_active = document.querySelectorAll('[data-tabactive]');
    this.tab_buttons.forEach(function (element) {
      element.addEventListener('click', function (e) {
        return _this.onClick(e);
      });
    });
    this.tab_panels.forEach(function (element) {
      _this.closeAll(element);
    });
    this.tabs_active.forEach(function (element) {
      var parent = _this.getParent(element);

      if (parent == null) {
        console.error('Tab fuera de element tabpanel');
        return;
      }

      var target = parent.querySelectorAll('[data-tab="' + element.dataset.tabtarget + '"]');
      element.classList.add('active');

      if (target == null) {
        return;
      }

      target.forEach(function (child) {
        _this.open(child);
      });
    });
  }

  _createClass(Tab, [{
    key: "onClick",
    value: function onClick(e) {
      var element = e.target;
      var parent = this.getParent(element);

      if (parent == null) {
        console.error('Tab fuera de element tabpanel');
        return;
      }

      var buttons = parent.querySelectorAll('[data-tabtarget]');
      buttons.forEach(function (button) {
        button.classList.remove('active');
      });
      element.classList.add('active');
      this.closeAll(parent);
      var targets = parent.querySelectorAll('[data-tab="' + element.dataset.tabtarget + '"]');
      this.action(targets, 'open');
    }
  }, {
    key: "getParent",
    value: function getParent(element) {
      return typeof element.parentElement == 'undefined' || element.parentElement == null ? null : typeof element.parentElement.dataset.tabpanel != 'undefined' ? element.parentElement : this.getParent(element.parentElement);
    }
  }, {
    key: "open",
    value: function open(element) {
      element.style.display = '';
    }
  }, {
    key: "close",
    value: function close(element) {
      element.style.display = 'none';
    }
  }, {
    key: "closeAll",
    value: function closeAll(parent) {
      var buttons = parent.querySelectorAll('[data-tabtarget]');
      var targets = [];
      buttons.forEach(function (element) {
        var objectives = parent.querySelectorAll('[data-tab="' + element.dataset.tabtarget + '"]');
        objectives.forEach(function (child) {
          targets.push(child);
        });
      });
      this.action(targets, 'close');
    }
  }, {
    key: "action",
    value: function action(targets, _action) {
      var _this2 = this;

      if (targets == null) {
        return;
      }

      targets.forEach(function (element) {
        _this2[_action](element);
      });
    }
  }]);

  return Tab;
}();



/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/Object.keys.js":
/*!**************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/Object.keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Object.keys
if (!Object.keys) {
  Object.keys = function (object) {
    var keys = [];

    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }

    return keys;
  };
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/addCSSRule.js":
/*!*************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/addCSSRule.js ***!
  \*************************************************************/
/*! exports provided: addCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCSSRule", function() { return addCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./src/js/components/tiny-slider-helpers/raf.js");
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
  'insertRule' in sheet ? sheet.insertRule(selector + '{' + rules + '}', index) : sheet.addRule(selector, rules, index); // });
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/addClass.js":
/*!***********************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/addClass.js ***!
  \***********************************************************/
/*! exports provided: addClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./src/js/components/tiny-slider-helpers/hasClass.js");

var addClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ? function (el, str) {
  if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.classList.add(str);
  }
} : function (el, str) {
  if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.className += ' ' + str;
  }
};


/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/addEvents.js":
/*!************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/addEvents.js ***!
  \************************************************************/
/*! exports provided: addEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvents", function() { return addEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./src/js/components/tiny-slider-helpers/passiveOption.js");

function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/arrayFromNodeList.js":
/*!********************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/arrayFromNodeList.js ***!
  \********************************************************************/
/*! exports provided: arrayFromNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFromNodeList", function() { return arrayFromNodeList; });
function arrayFromNodeList(nl) {
  var arr = [];

  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }

  return arr;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/caf.js":
/*!******************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/caf.js ***!
  \******************************************************/
/*! exports provided: caf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caf", function() { return caf; });
var win = window;
var caf = win.cancelAnimationFrame || win.mozCancelAnimationFrame || function (id) {
  clearTimeout(id);
};

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/calc.js":
/*!*******************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/calc.js ***!
  \*******************************************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./src/js/components/tiny-slider-helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./src/js/components/tiny-slider-helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./src/js/components/tiny-slider-helpers/resetFakeBody.js");
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 



function calc() {
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'),
      result = false;
  body.appendChild(div);

  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;

    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;

      if (div.offsetWidth === 100) {
        result = val.replace(str, '');
        break;
      }
    }
  } catch (e) {}

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();
  return result;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/checkStorageValue.js":
/*!********************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/checkStorageValue.js ***!
  \********************************************************************/
/*! exports provided: checkStorageValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStorageValue", function() { return checkStorageValue; });
function checkStorageValue(value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/childNode.remove.js":
/*!*******************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/childNode.remove.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ChildNode.remove
if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/classListSupport.js":
/*!*******************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/classListSupport.js ***!
  \*******************************************************************/
/*! exports provided: classListSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return classListSupport; });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/createStyleSheet.js":
/*!*******************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/createStyleSheet.js ***!
  \*******************************************************************/
/*! exports provided: createStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleSheet", function() { return createStyleSheet; });
// create and append style sheet
function createStyleSheet(media) {
  // Create the <style> tag
  var style = document.createElement("style"); // style.setAttribute("type", "text/css");
  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")

  if (media) {
    style.setAttribute("media", media);
  } // WebKit hack :(
  // style.appendChild(document.createTextNode(""));
  // Add the <style> element to the page


  document.querySelector('head').appendChild(style);
  return style.sheet ? style.sheet : style.styleSheet;
}
;

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/docElement.js":
/*!*************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/docElement.js ***!
  \*************************************************************/
/*! exports provided: docElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docElement", function() { return docElement; });
var docElement = document.documentElement;

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/events.js":
/*!*********************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/events.js ***!
  \*********************************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
function Events() {
  return {
    topics: {},
    on: function on(eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function off(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function emit(eventName, data) {
      data.type = eventName;

      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function (fn) {
          fn(data, eventName);
        });
      }
    }
  };
}
;

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/extend.js":
/*!*********************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/extend.js ***!
  \*********************************************************/
/*! exports provided: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
function extend() {
  var obj,
      name,
      copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/forEach.js":
/*!**********************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/forEach.js ***!
  \**********************************************************/
/*! exports provided: forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach(arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/getAttr.js":
/*!**********************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/getAttr.js ***!
  \**********************************************************/
/*! exports provided: getAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttr", function() { return getAttr; });
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/getBody.js":
/*!**********************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/getBody.js ***!
  \**********************************************************/
/*! exports provided: getBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBody", function() { return getBody; });
function getBody() {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/getCssRulesLength.js":
/*!********************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/getCssRulesLength.js ***!
  \********************************************************************/
/*! exports provided: getCssRulesLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssRulesLength", function() { return getCssRulesLength; });
function getCssRulesLength(sheet) {
  var rule = 'insertRule' in sheet ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/getEndProperty.js":
/*!*****************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/getEndProperty.js ***!
  \*****************************************************************/
/*! exports provided: getEndProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndProperty", function() { return getEndProperty; });
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;

  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }

  return endProp;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/getSlideId.js":
/*!*************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/getSlideId.js ***!
  \*************************************************************/
/*! exports provided: getSlideId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideId", function() { return getSlideId; });
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  return 'tns' + window.tnsId;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/getTouchDirection.js":
/*!********************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/getTouchDirection.js ***!
  \********************************************************************/
/*! exports provided: getTouchDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchDirection", function() { return getTouchDirection; });
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));

  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/has3DTransforms.js":
/*!******************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/has3DTransforms.js ***!
  \******************************************************************/
/*! exports provided: has3DTransforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has3DTransforms", function() { return has3DTransforms; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./src/js/components/tiny-slider-helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./src/js/components/tiny-slider-helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./src/js/components/tiny-slider-helpers/resetFakeBody.js");



function has3DTransforms(tf) {
  if (!tf) {
    return false;
  }

  if (!window.getComputedStyle) {
    return false;
  }

  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';
  cssTF += 'transform'; // Add it to the body to get the computed style

  body.insertBefore(el, null);
  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : el.remove();
  return has3d !== undefined && has3d.length > 0 && has3d !== "none";
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/hasAttr.js":
/*!**********************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/hasAttr.js ***!
  \**********************************************************/
/*! exports provided: hasAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return hasAttr; });
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/hasClass.js":
/*!***********************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/hasClass.js ***!
  \***********************************************************/
/*! exports provided: classListSupport, hasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony import */ var _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classListSupport.js */ "./src/js/components/tiny-slider-helpers/classListSupport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"]; });


var hasClass = _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ? function (el, str) {
  return el.classList.contains(str);
} : function (el, str) {
  return el.className.indexOf(str) >= 0;
};


/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/hideElement.js":
/*!**************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/hideElement.js ***!
  \**************************************************************/
/*! exports provided: hideElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideElement", function() { return hideElement; });
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') {
    el.style.display = 'none';
  }
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/isNodeList.js":
/*!*************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/isNodeList.js ***!
  \*************************************************************/
/*! exports provided: isNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeList", function() { return isNodeList; });
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined";
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/isVisible.js":
/*!************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/isVisible.js ***!
  \************************************************************/
/*! exports provided: isVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/jsTransform.js":
/*!**************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/jsTransform.js ***!
  \**************************************************************/
/*! exports provided: jsTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsTransform", function() { return jsTransform; });
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = to.indexOf('%') >= 0 ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;
  setTimeout(moveElement, tick);

  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;

    if (duration > 0) {
      setTimeout(moveElement, tick);
    } else {
      callback();
    }
  }
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/mediaquerySupport.js":
/*!********************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/mediaquerySupport.js ***!
  \********************************************************************/
/*! exports provided: mediaquerySupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaquerySupport", function() { return mediaquerySupport; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./src/js/components/tiny-slider-helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./src/js/components/tiny-slider-helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./src/js/components/tiny-slider-helpers/resetFakeBody.js");



function mediaquerySupport() {
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;
  style.type = 'text/css';
  div.className = 'tns-mq-test';
  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();
  return position === "absolute";
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/passiveOption.js":
/*!****************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/passiveOption.js ***!
  \****************************************************************/
/*! exports provided: passiveOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveOption", function() { return passiveOption; });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

var passiveOption = supportsPassive ? {
  passive: true
} : false;

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/percentageLayout.js":
/*!*******************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/percentageLayout.js ***!
  \*******************************************************************/
/*! exports provided: percentageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentageLayout", function() { return percentageLayout; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./src/js/components/tiny-slider-helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./src/js/components/tiny-slider-helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./src/js/components/tiny-slider-helpers/resetFakeBody.js");
// get subpixel support value
// @return - boolean



function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;
  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);
  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : wrapper.remove();
  return supported;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/raf.js":
/*!******************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/raf.js ***!
  \******************************************************/
/*! exports provided: raf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
var win = window;
var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function (cb) {
  return setTimeout(cb, 16);
};

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/removeAttrs.js":
/*!**************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/removeAttrs.js ***!
  \**************************************************************/
/*! exports provided: removeAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttrs", function() { return removeAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./src/js/components/tiny-slider-helpers/isNodeList.js");

function removeAttrs(els, attrs) {
  els = Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array ? els : [els];
  attrs = attrs instanceof Array ? attrs : [attrs];
  var attrLength = attrs.length;

  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/removeCSSRule.js":
/*!****************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/removeCSSRule.js ***!
  \****************************************************************/
/*! exports provided: removeCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCSSRule", function() { return removeCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./src/js/components/tiny-slider-helpers/raf.js");
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
  'deleteRule' in sheet ? sheet.deleteRule(index) : sheet.removeRule(index); // });
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/removeClass.js":
/*!**************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/removeClass.js ***!
  \**************************************************************/
/*! exports provided: removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./src/js/components/tiny-slider-helpers/hasClass.js");

var removeClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ? function (el, str) {
  if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.classList.remove(str);
  }
} : function (el, str) {
  if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.className = el.className.replace(str, '');
  }
};


/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/removeEvents.js":
/*!***************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/removeEvents.js ***!
  \***************************************************************/
/*! exports provided: removeEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvents", function() { return removeEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./src/js/components/tiny-slider-helpers/passiveOption.js");

function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/resetFakeBody.js":
/*!****************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/resetFakeBody.js ***!
  \****************************************************************/
/*! exports provided: resetFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFakeBody", function() { return resetFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./src/js/components/tiny-slider-helpers/docElement.js");

function resetFakeBody(body, docOverflow) {
  if (body.fake) {
    body.remove();
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = docOverflow; // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line

    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].offsetHeight;
  }
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/setAttrs.js":
/*!***********************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/setAttrs.js ***!
  \***********************************************************/
/*! exports provided: setAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttrs", function() { return setAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./src/js/components/tiny-slider-helpers/isNodeList.js");

function setAttrs(els, attrs) {
  els = Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array ? els : [els];

  if (Object.prototype.toString.call(attrs) !== '[object Object]') {
    return;
  }

  for (var i = els.length; i--;) {
    for (var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/setFakeBody.js":
/*!**************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/setFakeBody.js ***!
  \**************************************************************/
/*! exports provided: setFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFakeBody", function() { return setFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./src/js/components/tiny-slider-helpers/docElement.js");

function setFakeBody(body) {
  var docOverflow = '';

  if (body.fake) {
    docOverflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow; //avoid crashing IE8, if background image is used

    body.style.background = ''; //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible

    body.style.overflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = 'hidden';
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].appendChild(body);
  }

  return docOverflow;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/setLocalStorage.js":
/*!******************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/setLocalStorage.js ***!
  \******************************************************************/
/*! exports provided: setLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try {
      storage.setItem(key, value);
    } catch (e) {}
  }

  return value;
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/showElement.js":
/*!**************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/showElement.js ***!
  \**************************************************************/
/*! exports provided: showElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showElement", function() { return showElement; });
function showElement(el, forceHide) {
  if (el.style.display === 'none') {
    el.style.display = '';
  }
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/toDegree.js":
/*!***********************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/toDegree.js ***!
  \***********************************************************/
/*! exports provided: toDegree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegree", function() { return toDegree; });
function toDegree(y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),

/***/ "./src/js/components/tiny-slider-helpers/whichProperty.js":
/*!****************************************************************!*\
  !*** ./src/js/components/tiny-slider-helpers/whichProperty.js ***!
  \****************************************************************/
/*! exports provided: whichProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whichProperty", function() { return whichProperty; });
function whichProperty(props) {
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
    prefixes.forEach(function (prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });
    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;

  for (var i = 0; i < props.length; i++) {
    var prop = props[i];

    if (el.style[prop] !== undefined) {
      return prop;
    }
  }

  return false; // explicit for ie9-
}

/***/ }),

/***/ "./src/js/components/tiny-slider.js":
/*!******************************************!*\
  !*** ./src/js/components/tiny-slider.js ***!
  \******************************************/
/*! exports provided: tns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tns", function() { return tns; });
/* harmony import */ var _tiny_slider_helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiny-slider-helpers/Object.keys */ "./src/js/components/tiny-slider-helpers/Object.keys.js");
/* harmony import */ var _tiny_slider_helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tiny_slider_helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tiny_slider_helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiny-slider-helpers/childNode.remove */ "./src/js/components/tiny-slider-helpers/childNode.remove.js");
/* harmony import */ var _tiny_slider_helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tiny_slider_helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tiny_slider_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiny-slider-helpers/raf.js */ "./src/js/components/tiny-slider-helpers/raf.js");
/* harmony import */ var _tiny_slider_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiny-slider-helpers/caf.js */ "./src/js/components/tiny-slider-helpers/caf.js");
/* harmony import */ var _tiny_slider_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tiny-slider-helpers/extend.js */ "./src/js/components/tiny-slider-helpers/extend.js");
/* harmony import */ var _tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tiny-slider-helpers/checkStorageValue.js */ "./src/js/components/tiny-slider-helpers/checkStorageValue.js");
/* harmony import */ var _tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tiny-slider-helpers/setLocalStorage.js */ "./src/js/components/tiny-slider-helpers/setLocalStorage.js");
/* harmony import */ var _tiny_slider_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tiny-slider-helpers/getSlideId.js */ "./src/js/components/tiny-slider-helpers/getSlideId.js");
/* harmony import */ var _tiny_slider_helpers_calc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tiny-slider-helpers/calc.js */ "./src/js/components/tiny-slider-helpers/calc.js");
/* harmony import */ var _tiny_slider_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tiny-slider-helpers/percentageLayout.js */ "./src/js/components/tiny-slider-helpers/percentageLayout.js");
/* harmony import */ var _tiny_slider_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tiny-slider-helpers/mediaquerySupport.js */ "./src/js/components/tiny-slider-helpers/mediaquerySupport.js");
/* harmony import */ var _tiny_slider_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tiny-slider-helpers/createStyleSheet.js */ "./src/js/components/tiny-slider-helpers/createStyleSheet.js");
/* harmony import */ var _tiny_slider_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tiny-slider-helpers/addCSSRule.js */ "./src/js/components/tiny-slider-helpers/addCSSRule.js");
/* harmony import */ var _tiny_slider_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tiny-slider-helpers/removeCSSRule.js */ "./src/js/components/tiny-slider-helpers/removeCSSRule.js");
/* harmony import */ var _tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tiny-slider-helpers/getCssRulesLength.js */ "./src/js/components/tiny-slider-helpers/getCssRulesLength.js");
/* harmony import */ var _tiny_slider_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tiny-slider-helpers/toDegree.js */ "./src/js/components/tiny-slider-helpers/toDegree.js");
/* harmony import */ var _tiny_slider_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tiny-slider-helpers/getTouchDirection.js */ "./src/js/components/tiny-slider-helpers/getTouchDirection.js");
/* harmony import */ var _tiny_slider_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tiny-slider-helpers/forEach.js */ "./src/js/components/tiny-slider-helpers/forEach.js");
/* harmony import */ var _tiny_slider_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tiny-slider-helpers/hasClass.js */ "./src/js/components/tiny-slider-helpers/hasClass.js");
/* harmony import */ var _tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tiny-slider-helpers/addClass.js */ "./src/js/components/tiny-slider-helpers/addClass.js");
/* harmony import */ var _tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tiny-slider-helpers/removeClass.js */ "./src/js/components/tiny-slider-helpers/removeClass.js");
/* harmony import */ var _tiny_slider_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tiny-slider-helpers/hasAttr.js */ "./src/js/components/tiny-slider-helpers/hasAttr.js");
/* harmony import */ var _tiny_slider_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tiny-slider-helpers/getAttr.js */ "./src/js/components/tiny-slider-helpers/getAttr.js");
/* harmony import */ var _tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tiny-slider-helpers/setAttrs.js */ "./src/js/components/tiny-slider-helpers/setAttrs.js");
/* harmony import */ var _tiny_slider_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tiny-slider-helpers/removeAttrs.js */ "./src/js/components/tiny-slider-helpers/removeAttrs.js");
/* harmony import */ var _tiny_slider_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tiny-slider-helpers/arrayFromNodeList.js */ "./src/js/components/tiny-slider-helpers/arrayFromNodeList.js");
/* harmony import */ var _tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tiny-slider-helpers/hideElement.js */ "./src/js/components/tiny-slider-helpers/hideElement.js");
/* harmony import */ var _tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tiny-slider-helpers/showElement.js */ "./src/js/components/tiny-slider-helpers/showElement.js");
/* harmony import */ var _tiny_slider_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tiny-slider-helpers/isVisible.js */ "./src/js/components/tiny-slider-helpers/isVisible.js");
/* harmony import */ var _tiny_slider_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./tiny-slider-helpers/whichProperty.js */ "./src/js/components/tiny-slider-helpers/whichProperty.js");
/* harmony import */ var _tiny_slider_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tiny-slider-helpers/has3DTransforms.js */ "./src/js/components/tiny-slider-helpers/has3DTransforms.js");
/* harmony import */ var _tiny_slider_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./tiny-slider-helpers/getEndProperty.js */ "./src/js/components/tiny-slider-helpers/getEndProperty.js");
/* harmony import */ var _tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./tiny-slider-helpers/addEvents.js */ "./src/js/components/tiny-slider-helpers/addEvents.js");
/* harmony import */ var _tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./tiny-slider-helpers/removeEvents.js */ "./src/js/components/tiny-slider-helpers/removeEvents.js");
/* harmony import */ var _tiny_slider_helpers_events_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./tiny-slider-helpers/events.js */ "./src/js/components/tiny-slider-helpers/events.js");
/* harmony import */ var _tiny_slider_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./tiny-slider-helpers/jsTransform.js */ "./src/js/components/tiny-slider-helpers/jsTransform.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





































var tns = function tns(options) {
  options = Object(_tiny_slider_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true
  }, options || {});
  var doc = document,
      win = window,
      KEYS = {
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39
  },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date();

    try {
      tnsStorage = win.localStorage;

      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }

      if (!localStorageAccess) {
        tnsStorage = {};
      }
    } catch (e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function (item) {
          tnsStorage.removeItem(item);
        });
      } // update browserInfo


      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tC']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tC', Object(_tiny_slider_helpers_calc_js__WEBPACK_IMPORTED_MODULE_8__["calc"])(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tPL']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tPL', Object(_tiny_slider_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_9__["percentageLayout"])(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tMQ']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tMQ', Object(_tiny_slider_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_10__["mediaquerySupport"])(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTf']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTf', Object(_tiny_slider_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['t3D']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 't3D', Object(_tiny_slider_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_30__["has3DTransforms"])(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTDu']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTDu', Object(_tiny_slider_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTDe']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTDe', Object(_tiny_slider_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tADu']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tADu', Object(_tiny_slider_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tADe']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tADe', Object(_tiny_slider_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTE']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTE', Object(_tiny_slider_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__["getEndProperty"])(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? Object(_tiny_slider_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tAE']) : Object(_tiny_slider_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tAE', Object(_tiny_slider_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__["getEndProperty"])(ANIMATIONDURATION, 'Animation'), localStorageAccess); // get element nodes from selectors

  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
      optionsElements = {};
  tnsList.forEach(function (item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) {
          console.warn('Can\'t find', options[item]);
        }

        return;
      }
    }
  }); // make sure at least 1 slide

  if (options.container.children.length < 1) {
    if (supportConsoleWarn) {
      console.warn('No slides found in', options.container);
    }

    return;
  } // update options


  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = Object(_tiny_slider_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};

    for (var key in responsive) {
      var val = responsive[key]; // update responsive
      // from: 300: 2
      // to: 
      //   300: { 
      //     items: 2 
      //   } 

      val = typeof val === 'number' ? {
        items: val
      } : val;
      responsiveTem[key] = val;
    }

    responsive = responsiveTem;
    responsiveTem = null;
  } // update options


  function updateOptions(obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') {
          obj[key] = 'page';
        }

        if (key === 'edgePadding') {
          obj[key] = false;
        }

        if (key === 'autoHeight') {
          obj[key] = false;
        }
      } // update responsive options


      if (key === 'responsive') {
        updateOptions(obj[key]);
      }
    }
  }

  if (!carousel) {
    updateOptions(options);
  } // === define and set variables ===


  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;
    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;

  if (responsive) {
    setBreakpointZone();
  }

  if (carousel) {
    container.className += ' tns-vpfix';
  } // fixedWidth: viewport > rightBoundary > indexMax


  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = Object(_tiny_slider_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_11__["createStyleSheet"])(),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions,
      // collection of slide positions
  slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = !carousel || !loop ? true : false,
      // transform
  transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
  getIndexMax = function () {
    if (fixedWidth) {
      return function () {
        return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
      };
    } else if (autoWidth) {
      return function () {
        for (var i = slideCountNew; i--;) {
          if (slidePositions[i] >= -rightBoundary) {
            return i;
          }
        }
      };
    } else {
      return function () {
        if (center && carousel && !loop) {
          return slideCount - 1;
        } else {
          return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
        }
      };
    }
  }(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
  resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new _tiny_slider_helpers_events_js__WEBPACK_IMPORTED_MODULE_34__["Events"](),
      // id, class
  newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || Object(_tiny_slider_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_7__["getSlideId"])(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
    'click': onControlsClick,
    'keydown': onControlsKeydown
  },
      navEvents = {
    'click': onNavClick,
    'keydown': onNavKeydown
  },
      hoverEvents = {
    'mouseover': mouseoverPause,
    'mouseout': mouseoutRestart
  },
      visibilityEvent = {
    'visibilitychange': onVisibilityChange
  },
      docmentKeydownEvent = {
    'keydown': onDocumentKeydown
  },
      touchEvents = {
    'touchstart': onPanStart,
    'touchmove': onPanMove,
    'touchend': onPanEnd,
    'touchcancel': onPanEnd
  },
      dragEvents = {
    'mousedown': onPanStart,
    'mousemove': onPanMove,
    'mouseup': onPanEnd,
    'mouseleave': onPanEnd
  },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
    'load': onImgLoaded,
    'error': onImgFailed
  },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false; // controls


  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  } // nav


  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  } // autoplay


  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
    /*  ASIMOV */

    var dateInitPlayTimer = 0; //Variable usada para almacenar la fecha en la que inicia una animación. De esta manera, si se coloca pausa, se puede calcular cuanto tiempo transcurrió.

    var dateFinishPlayTimer = 0;
    var asimovautoTimer;
    /* FIN ASIMOV */
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ? function (a, b) {
      return a.x - b.x;
    } : function (a, b) {
      return a.y - b.y;
    };
  } // disable slider when slidecount <= items


  if (!autoWidth) {
    resetVariblesWhenDisable(disable || freeze);
  }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }
  }

  if (carousel) {
    container.className = container.className.replace('tns-vpfix', '');
  }

  initStructure();
  initSheet();
  initSliderTransform(); // === COMMON FUNCTIONS === //

  function resetVariblesWhenDisable(condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide() {
    var tem = carousel ? index - cloneCount : index;

    while (tem < 0) {
      tem += slideCount;
    }

    return tem % slideCount + 1;
  }

  function getStartIndex(ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex(i) {
    if (i == null) {
      i = index;
    }

    if (carousel) {
      i -= cloneCount;
    }

    while (i < 0) {
      i += slideCount;
    }

    return Math.floor(i % slideCount);
  }

  function getCurrentNavIndex() {
    var absIndex = getAbsIndex(),
        result;
    result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items); // set active nav to the last one when reaches the right edge

    if (!loop && carousel && index === indexMax) {
      result = pages - 1;
    }

    return result;
  }

  function getItemsMax() {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || fixedWidth && !viewportMax) {
      return slideCount - 1; // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) {
        arr.push(options[str]);
      }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];

          if (tem && (fixedWidth || tem < slideCount)) {
            arr.push(tem);
          }
        }
      }

      if (!arr.length) {
        arr.push(0);
      }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop() {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
    result = Math.max(itemsMax, result);
    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth() {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition(pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth(el) {
    var div = doc.createElement('div'),
        rect,
        width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth() {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption(item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) {
            return true;
          }
        }
      }

      return false;
    }
  } // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy


  function getOption(item, ww) {
    if (ww == null) {
      ww = windowWidth;
    }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) {
              result = responsive[bp][item];
            }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') {
        result = getOption('items');
      }

      if (!carousel && (item === 'slideBy' || item === 'items')) {
        result = Math.floor(result);
      }

      return result;
    }
  }

  function getSlideMarginLeft(i) {
    return CALC ? CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;

      if (gutterTem) {
        gap -= gutterTem;
      }

      str = horizontal ? 'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' : 'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';';
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) {
      str += getTransitionDurationStyle(speedTem);
    }

    return str;
  }

  function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ? CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' : slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = fixedWidthTem + gutterTem + 'px';
    } else {
      if (!carousel) {
        itemsTem = Math.floor(itemsTem);
      }

      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ? CALC + '(100% / ' + dividend + ')' : 100 / dividend + '%';
    }

    width = 'width:' + width; // inner slider: overwrite outer slider styles

    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle(gutterTem) {
    var str = ''; // gutter maybe interger || 0
    // so can't use 'if (gutter)'

    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop + dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix(name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();

    if (prefix) {
      prefix = '-' + prefix + '-';
    }

    return prefix;
  }

  function getTransitionDurationStyle(speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle(speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure() {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');
    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw'; // set container properties

    if (container.id === '') {
      container.id = slideId;
    }

    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';

    if (autoWidth) {
      newContainerClasses += ' tns-autowidth';
    }

    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses; // add constrain layer for carousel

    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';
      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container); // add id, class, aria attributes 
    // before clone slides

    Object(_tiny_slider_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (item, i) {
      Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, 'tns-item');

      if (!item.id) {
        item.id = slideId + '-item' + i;
      }

      if (!carousel && animateNormal) {
        Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
      }

      Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    }); // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n

    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j % slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        Object(_tiny_slider_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          Object(_tiny_slider_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }
  }

  function initSliderTransform() {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img'); // add complete class if all images are loaded/failed

      Object(_tiny_slider_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(imgs, function (img) {
        var src = img.src;

        if (src && src.indexOf('data:image') < 0) {
          Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, imgEvents);
          img.src = '';
          img.src = src;
          Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loading');
        } else if (!lazyload) {
          imgLoaded(img);
        }
      }); // All imgs are completed

      Object(_tiny_slider_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
        imgsLoadedCheck(Object(_tiny_slider_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__["arrayFromNodeList"])(imgs), function () {
          imgsComplete = true;
        });
      }); // Check imgs in window only for auto height

      if (!autoWidth && horizontal) {
        imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
      }

      lazyload ? initSliderTransformStyleCheck() : Object(_tiny_slider_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
        imgsLoadedCheck(Object(_tiny_slider_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__["arrayFromNodeList"])(imgs), initSliderTransformStyleCheck);
      });
    } else {
      // set container transform property
      if (carousel) {
        doContainerTransformSilent();
      } // update slider tools and events


      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck() {
    if (autoWidth) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ? initSliderTransformCore() : setTimeout(function () {
          stylesApplicationCheck();
        }, 16);
      })();
    } else {
      initSliderTransformCore();
    }
  }

  function initSliderTransformCore() {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();

        if (freezable) {
          freeze = getFreeze();
        }

        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=

        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    } // set container transform property


    if (carousel) {
      doContainerTransformSilent();
    } // update slider tools and events


    initTools();
    initEvents();
  }

  function initSheet() {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateIn);
        Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      }
    } // #### LAYOUT
    // ## INLINE-BLOCK VS FLOAT
    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0
    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~
    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing


    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        Object(_tiny_slider_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(_tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
        Object(_tiny_slider_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId, 'font-size:0;', Object(_tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } else if (carousel) {
        Object(_tiny_slider_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    } // ## BASIC STYLES


    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        Object(_tiny_slider_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + '-mw', str, Object(_tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } // inner wrapper styles


      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      Object(_tiny_slider_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + '-iw', str, Object(_tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet)); // container styles

      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';

        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }

        Object(_tiny_slider_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId, str, Object(_tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } // slide styles


      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';

      if (options.gutter) {
        str += getSlideGutterStyle(options.gutter);
      } // set gallery items transition-duration


      if (!carousel) {
        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }

        if (ANIMATIONDURATION) {
          str += getAnimationDurationStyle(speed);
        }
      }

      if (str) {
        Object(_tiny_slider_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } // non CSS mediaqueries: IE8
      // ## update inner wrapper, container, slides if needed
      // set inline styles for inner wrapper & container
      // insert stylesheet (one line) for slides only (since slides are many)

    } else {
      // middle wrapper styles
      update_carousel_transition_duration(); // inner wrapper styles

      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight); // container styles

      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      } // slide styles


      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';

      if (gutter) {
        str += getSlideGutterStyle(gutter);
      } // append to the last line


      if (str) {
        Object(_tiny_slider_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      }
    } // ## MEDIAQUERIES


    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);
        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp); // middle wrapper string

        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        } // inner wrapper string


        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        } // container string


        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || fixedWidth && 'gutter' in opts)) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }

        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }

        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        } // slide string


        if ('fixedWidth' in opts || fixedWidth && 'gutter' in opts || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }

        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        } // set gallery items transition-duration


        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) {
            slideStr += getTransitionDurationStyle(speedBP);
          }

          if (ANIMATIONDURATION) {
            slideStr += getAnimationDurationStyle(speedBP);
          }
        }

        if (slideStr) {
          slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}';
        } // add up


        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools() {
    // == slides ==
    updateSlideStatus(); // == live region ==

    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current'); // == autoplayInit ==

    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';

      if (autoplayButton) {
        Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(autoplayButton, {
          'data-action': txt
        });
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      } // add event


      if (autoplayButton) {
        Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(autoplayButton, {
          'click': toggleAutoplay
        });
      }

      if (autoplay) {
        startAutoplay();

        if (autoplayHoverPause) {
          Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, hoverEvents);
        }

        if (autoplayResetOnVisibility) {
          Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, visibilityEvent);
        }
      }
    } // == navInit ==


    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount; // customized nav
      // will not hide the navs in case they're thumbnails

      if (navContainer) {
        Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navContainer, {
          'aria-label': 'Carousel Pagination'
        });
        navItems = navContainer.children;
        Object(_tiny_slider_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(navItems, function (item, i) {
          Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId
          });
        }); // generated nav 
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';

        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
        }

        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility(); // add transition

      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        Object(_tiny_slider_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(_tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      }

      Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navItems[navCurrentIndex], {
        'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent
      });
      Object(_tiny_slider_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(navItems[navCurrentIndex], 'tabindex');
      Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(navItems[navCurrentIndex], navActiveClass); // add events

      Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(navContainer, navEvents);
    } // == controlsInit ==


    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + '</button></div>');
        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || options.prevButton && options.nextButton) {
        Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1'
        });
      }

      if (options.controlsContainer || options.prevButton && options.nextButton) {
        Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(prevButton, {
          'data-controls': 'prev'
        });
        Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(nextButton, {
          'data-controls': 'next'
        });
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);
      updateControlsStatus(); // add events

      if (controlsContainer) {
        Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(controlsContainer, controlsEvents);
      } else {
        Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(prevButton, controlsEvents);
        Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(nextButton, controlsEvents);
      }
    } // hide tools if needed


    disableUI();
  }

  function initEvents() {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, eve);
    }

    if (touch) {
      Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, touchEvents, options.preventScrollOnTouch);
    }

    if (mouseDrag) {
      Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, dragEvents);
    }

    if (arrowKeys) {
      Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, docmentKeydownEvent);
    }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(win, {
        'resize': onResize
      });
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) {
        doAutoHeight();
      }
    }

    doLazyLoad();

    if (disable) {
      disableSlider();
    } else if (freeze) {
      freezeSlider();
    }

    events.on('indexChanged', additionalUpdates);

    if (nested === 'inner') {
      events.emit('innerLoaded', info());
    }

    if (typeof onInit === 'function') {
      onInit(info());
    }

    isOn = true;
  }

  function destroy() {
    // sheet
    sheet.disabled = true;

    if (sheet.ownerNode) {
      sheet.ownerNode.remove();
    } // remove win event listeners


    Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(win, {
      'resize': onResize
    }); // arrowKeys, controls, nav

    if (arrowKeys) {
      Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, docmentKeydownEvent);
    }

    if (controlsContainer) {
      Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(controlsContainer, controlsEvents);
    }

    if (navContainer) {
      Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(navContainer, navEvents);
    } // autoplay


    Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, hoverEvents);
    Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, visibilityEvent);

    if (autoplayButton) {
      Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(autoplayButton, {
        'click': toggleAutoplay
      });
    }

    if (autoplay) {
      clearInterval(autoplayTimer);
    } // container


    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, eve);
    }

    if (touch) {
      Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, touchEvents);
    }

    if (mouseDrag) {
      Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, dragEvents);
    } // cache Object values in options && reset HTML


    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
    tnsList.forEach(function (item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (_typeof(el) === 'object') {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    }); // reset variables

    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null; // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') {
        this[a] = null;
      }
    }

    isOn = false;
  } // === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal


  function onResize(e) {
    Object(_tiny_slider_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
      resizeTasks(getEvent(e));
    });
  }

  function resizeTasks(e) {
    if (!isOn) {
      return;
    }

    if (nested === 'outer') {
      events.emit('outerResized', info(e));
    }

    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone; // if (hasRightDeadZone) { needContainerTransform = true; } // *?

      if (bpChanged) {
        events.emit('newBreakpointStart', info(e));
      }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    } // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy


    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    } // update options


    resetVariblesWhenDisable(disable);
    viewport = getViewportWidth(); // <= edgePadding, gutter

    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();

      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions

        needContainerTransform = true;
      }
    }

    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
      // fixedWidth: <= viewport, fixedWidth, gutter

      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
      // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) {
          indexMax = getIndexMax();
        } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger


        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
      // <= fixedWidth: fixedWidth, gutter, rightBoundary
      // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility

    if (!autoplay) {
      autoplayHoverPause = autoplayResetOnVisibility = false;
    }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ? Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, docmentKeydownEvent) : Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, docmentKeydownEvent);
    }

    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(controlsContainer);
        } else {
          if (prevButton) {
            Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(prevButton);
          }

          if (nextButton) {
            Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(nextButton);
          }
        }
      } else {
        if (controlsContainer) {
          Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(controlsContainer);
        } else {
          if (prevButton) {
            Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(prevButton);
          }

          if (nextButton) {
            Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(nextButton);
          }
        }
      }
    }

    if (nav !== navTem) {
      nav ? Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(navContainer) : Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(navContainer);
    }

    if (touch !== touchTem) {
      touch ? Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, touchEvents, options.preventScrollOnTouch) : Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, touchEvents);
    }

    if (mouseDrag !== mouseDragTem) {
      mouseDrag ? Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, dragEvents) : Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, dragEvents);
    }

    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) {
          Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(autoplayButton);
        }

        if (!animating && !autoplayUserPaused) {
          startAutoplay();
        }
      } else {
        if (autoplayButton) {
          Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(autoplayButton);
        }

        if (animating) {
          stopAutoplay();
        }
      }
    }

    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ? Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, hoverEvents) : Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, hoverEvents);
    }

    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ? Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, visibilityEvent) : Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) {
        needContainerTransform = true;
      }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) {
          innerWrapper.style.height = '';
        }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;

        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) {
        needContainerTransform = true;
      }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;

    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) {
        additionalUpdates();
      }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged || !carousel) {
      updateGallerySlidePositions();
    }

    if (!disable && !freeze) {
      // non-meduaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles
        if (autoHeight !== autoheightTem || speed !== speedTem) {
          update_carousel_transition_duration();
        } // inner wrapper styles


        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          } // slide styles


          var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter); // remove the last line and
          // add new styles

          Object(_tiny_slider_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_13__["removeCSSRule"])(sheet, Object(_tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet) - 1);
          Object(_tiny_slider_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_tiny_slider_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
        }
      } // auto height


      if (autoHeight) {
        doAutoHeight();
      }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) {
      events.emit('newBreakpointEnd', info(e));
    }
  } // === INITIALIZATION FUNCTIONS === //


  function getFreeze() {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone() {
    breakpointZone = 0;

    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number

      if (windowWidth >= bp) {
        breakpointZone = bp;
      }
    }
  } // (slideBy, indexMin, indexMax) => index


  var updateIndex = function () {
    return loop ? carousel ? // loop + carousel
    function () {
      var leftEdge = indexMin,
          rightEdge = indexMax;
      leftEdge += slideBy;
      rightEdge -= slideBy; // adjust edges when has edge paddings
      // or fixed-width slider with extra space on the right side

      if (edgePadding) {
        leftEdge += 1;
        rightEdge -= 1;
      } else if (fixedWidth) {
        if ((viewport + gutter) % (fixedWidth + gutter)) {
          rightEdge -= 1;
        }
      }

      if (cloneCount) {
        if (index > rightEdge) {
          index -= slideCount;
        } else if (index < leftEdge) {
          index += slideCount;
        }
      }
    } : // loop + gallery
    function () {
      if (index > indexMax) {
        while (index >= indexMin + slideCount) {
          index -= slideCount;
        }
      } else if (index < indexMin) {
        while (index <= indexMax - slideCount) {
          index += slideCount;
        }
      }
    } : // non-loop
    function () {
      index = Math.max(indexMin, Math.min(indexMax, index));
    };
  }();

  function disableUI() {
    if (!autoplay && autoplayButton) {
      Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(autoplayButton);
    }

    if (!nav && navContainer) {
      Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(navContainer);
    }

    if (!controls) {
      if (controlsContainer) {
        Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(controlsContainer);
      } else {
        if (prevButton) {
          Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(prevButton);
        }

        if (nextButton) {
          Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(nextButton);
        }
      }
    }
  }

  function enableUI() {
    if (autoplay && autoplayButton) {
      Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(autoplayButton);
    }

    if (nav && navContainer) {
      Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(navContainer);
    }

    if (controls) {
      if (controlsContainer) {
        Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(controlsContainer);
      } else {
        if (prevButton) {
          Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(prevButton);
        }

        if (nextButton) {
          Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(nextButton);
        }
      }
    }
  }

  function freezeSlider() {
    if (frozen) {
      return;
    } // remove edge padding from inner wrapper


    if (edgePadding) {
      innerWrapper.style.margin = '0px';
    } // add class tns-transparent to cloned slides


    if (cloneCount) {
      var str = 'tns-transparent';

      for (var i = cloneCount; i--;) {
        if (carousel) {
          Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(slideItems[i], str);
        }

        Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(slideItems[slideCountNew - i - 1], str);
      }
    } // update tools


    disableUI();
    frozen = true;
  }

  function unfreezeSlider() {
    if (!frozen) {
      return;
    } // restore edge padding for inner wrapper
    // for mordern browsers


    if (edgePadding && CSSMQ) {
      innerWrapper.style.margin = '';
    } // remove class tns-transparent to cloned slides


    if (cloneCount) {
      var str = 'tns-transparent';

      for (var i = cloneCount; i--;) {
        if (carousel) {
          Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(slideItems[i], str);
        }

        Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(slideItems[slideCountNew - i - 1], str);
      }
    } // update tools


    enableUI();
    frozen = false;
  }

  function disableSlider() {
    if (disabled) {
      return;
    }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    Object(_tiny_slider_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(container, ['style']);

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) {
          Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(slideItems[j]);
        }

        Object(_tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(slideItems[slideCountNew - j - 1]);
      }
    } // vertical slider


    if (!horizontal || !carousel) {
      Object(_tiny_slider_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(innerWrapper, ['style']);
    } // gallery


    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        Object(_tiny_slider_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(item, ['style']);
        Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateIn);
        Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      }
    } // update tools


    disableUI();
    disabled = true;
  }

  function enableSlider() {
    if (!disabled) {
      return;
    }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) {
          Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(slideItems[j]);
        }

        Object(_tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(slideItems[slideCountNew - j - 1]);
      }
    } // gallery


    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, classN);
      }
    } // update tools


    enableUI();
    disabled = false;
  }

  function updateLiveRegion() {
    var str = getLiveRegionStr();

    if (liveregionCurrent.innerHTML !== str) {
      liveregionCurrent.innerHTML = str;
    }
  }

  function getLiveRegionStr() {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange(val) {
    if (val == null) {
      val = getContainerTransformValue();
    }

    var start = index,
        end,
        rangestart,
        rangeend; // get range start, range end for autoWidth and fixedWidth

    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = -(parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    } // get start, end
    // - check auto width


    if (autoWidth) {
      slidePositions.forEach(function (point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) {
            start = i;
          }

          if (rangeend - point >= 0.5) {
            end = i;
          }
        }
      }); // - check percentage width, fixed width
    } else {
      if (fixedWidth) {
        var cell = fixedWidth + gutter;

        if (center || edgePadding) {
          start = Math.floor(rangestart / cell);
          end = Math.ceil(rangeend / cell - 1);
        } else {
          end = start + Math.ceil(viewport / cell) - 1;
        }
      } else {
        if (center || edgePadding) {
          var a = items - 1;

          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad() {
    if (lazyload && !disable) {
      getImageArray.apply(null, getVisibleSlideRange()).forEach(function (img) {
        if (!Object(_tiny_slider_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__["hasClass"])(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};

          eve[TRANSITIONEND] = function (e) {
            e.stopPropagation();
          };

          Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, eve);
          Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, imgEvents); // update src

          img.src = Object(_tiny_slider_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(img, 'data-src'); // update srcset

          var srcset = Object(_tiny_slider_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(img, 'data-srcset');

          if (srcset) {
            img.srcset = srcset;
          }

          Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded(e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed(e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded(img) {
    Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed(img) {
    Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted(img) {
    Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'tns-complete');
    Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(img, 'loading');
    Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(img, imgEvents);
  }

  function getImageArray(start, end) {
    var imgs = [];

    while (start <= end) {
      Object(_tiny_slider_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems[start].querySelectorAll('img'), function (img) {
        imgs.push(img);
      });
      start++;
    }

    return imgs;
  } // check if all visible images are loaded
  // and update container height if it's done


  function doAutoHeight() {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    Object(_tiny_slider_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
      imgsLoadedCheck(imgs, updateInnerWrapperHeight);
    });
  }

  function imgsLoadedCheck(imgs, cb) {
    // directly execute callback function if all images are complete
    if (imgsComplete) {
      return cb();
    } // check selected image classes otherwise


    imgs.forEach(function (img, index) {
      if (Object(_tiny_slider_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__["hasClass"])(img, imgCompleteClass)) {
        imgs.splice(index, 1);
      }
    }); // execute callback function if selected images are all complete

    if (!imgs.length) {
      return cb();
    } // otherwise execute this functiona again


    Object(_tiny_slider_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
      imgsLoadedCheck(imgs, cb);
    });
  }

  function additionalUpdates() {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }

  function update_carousel_transition_duration() {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight(slideStart, slideRange) {
    var heights = [];

    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  } // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done


  function updateInnerWrapperHeight() {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) {
      wp.style.height = maxHeight + 'px';
    }
  } // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions


  function setSlidePositions() {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];
    Object(_tiny_slider_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (item, i) {
      // skip the first slide
      if (i) {
        slidePositions.push(item.getBoundingClientRect()[attr] - base);
      } // add the end edge


      if (i === slideCountNew - 1) {
        slidePositions.push(item.getBoundingClientRect()[attr2] - base);
      }
    });
  } // update slide


  function updateSlideStatus() {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];
    Object(_tiny_slider_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (Object(_tiny_slider_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(item, 'aria-hidden')) {
          Object(_tiny_slider_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(item, ['aria-hidden', 'tabindex']);
          Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, slideActiveClass);
        } // hide slides

      } else {
        if (!Object(_tiny_slider_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(item, 'aria-hidden')) {
          Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, slideActiveClass);
        }
      }
    });
  } // gallery: update slide position


  function updateGallerySlidePositions() {
    var l = index + Math.min(slideCount, items);

    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, 'tns-moving');
        item.style.left = (i - index) * 100 / items + '%';
        Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateIn);
        Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
        Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateIn);
      } // remove outlet animation


      Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateOut);
    } // removing '.tns-moving'


    setTimeout(function () {
      Object(_tiny_slider_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (el) {
        Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(el, 'tns-moving');
      });
    }, 300);
  } // set tabindex on Nav


  function updateNavStatus() {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];
        Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(navPrev, navActiveClass);
        Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navCurrent, {
          'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent
        });
        Object(_tiny_slider_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(navCurrent, 'tabindex');
        Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(navCurrent, navActiveClass);
        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName(el) {
    return el.nodeName.toLowerCase();
  }

  function isButton(el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled(el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement(isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  } // set 'disabled' to true on controls when reach the edges


  function updateControlsStatus() {
    if (!controls || rewind || loop) {
      return;
    }

    var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = index <= indexMin ? true : false,
        disableNext = !rewind && index >= indexMax ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }

    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }

    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }

    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  } // set duration


  function resetDuration(el, str) {
    if (TRANSITIONDURATION) {
      el.style[TRANSITIONDURATION] = str;
    }
  }

  function getSliderWidth() {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap(num) {
    if (num == null) {
      num = index;
    }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
  }

  function getRightBoundary() {
    var gap = edgePadding ? gutter : 0,
        result = viewport + gap - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }

    if (result > 0) {
      result = 0;
    }

    return result;
  }

  function getContainerTransformValue(num) {
    if (num == null) {
      num = index;
    }

    var val;

    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = -(fixedWidth + gutter) * num;

        if (center) {
          val += getCenterGap();
        }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;

        if (center) {
          num -= getCenterGap();
        }

        val = -num * 100 / denominator;
      }
    } else {
      val = -slidePositions[num];

      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) {
      val = Math.max(val, rightBoundary);
    }

    val += horizontal && !autoWidth && !fixedWidth ? '%' : 'px';
    return val;
  }

  function doContainerTransformSilent(val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform(val) {
    if (val == null) {
      val = getContainerTransformValue();
    }

    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide(number, classOut, classIn, isOut) {
    var l = number + items;

    if (!loop) {
      l = Math.min(l, slideCountNew);
    }

    for (var i = number; i < l; i++) {
      var item = slideItems[i]; // set item positions

      if (!isOut) {
        item.style.left = (i - index) * 100 / items + '%';
      }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }

      Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, classOut);
      Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, classIn);

      if (isOut) {
        slideItemsOut.push(item);
      }
    }
  } // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers


  var transformCore = function () {
    return carousel ? function () {
      resetDuration(container, '');

      if (TRANSITIONDURATION || !speed) {
        // for morden browsers with non-zero duration or 
        // zero duration for all browsers
        doContainerTransform(); // run fallback function manually 
        // when duration is 0 / container is hidden

        if (!speed || !Object(_tiny_slider_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__["isVisible"])(container)) {
          onTransitionEnd();
        }
      } else {
        // for old browser with non-zero duration
        Object(_tiny_slider_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_35__["jsTransform"])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
      }

      if (!horizontal) {
        updateContentWrapperHeight();
      }
    } : function () {
      slideItemsOut = [];
      var eve = {};
      eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
      Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(slideItems[indexCached], eve);
      Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(slideItems[index], eve);
      animateSlide(indexCached, animateIn, animateOut, true);
      animateSlide(index, animateNormal, animateIn); // run fallback function manually 
      // when transition or animation not supported / duration is 0

      if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(_tiny_slider_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__["isVisible"])(container)) {
        onTransitionEnd();
      }
    };
  }();

  function render(e, sliderMoved) {
    if (updateIndexBeforeTransform) {
      updateIndex();
    } // render when slider was moved (touch or drag) even though index may not change


    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());

      if (autoHeight) {
        doAutoHeight();
      } // pause autoplay when click or keydown from user


      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) {
        stopAutoplay();
      }

      running = true;
      transformCore();
    }
  }
  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */


  function strTrans(str) {
    return str.toLowerCase().replace(/-/g, '');
  } // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height


  function onTransitionEnd(event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i]; // set item positions

          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }

          Object(_tiny_slider_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateOut);
          Object(_tiny_slider_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
        }
      }
      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event' 
       *    have to check event first, otherwise event.target will cause an error 
       * => or 'gallery' mode: 
       *   + event target is slide item
       * => or 'carousel' mode: 
       *   + event target is container, 
       *   + event.property is the same with transform attribute
       */


      if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();

          if (index !== indexTem) {
            events.emit('indexChanged', info());
            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') {
          events.emit('innerLoaded', info());
        }

        running = false;
        indexCached = index;
      }
    }
  } // # ACTIONS


  function goTo(targetIndex, e) {
    if (freeze) {
      return;
    } // prev slideBy


    if (targetIndex === 'prev') {
      onControlsClick(e, -1); // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1); // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) {
          return;
        } else {
          onTransitionEnd();
        }
      }

      var absIndex = getAbsIndex(),
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = -absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') {
          targetIndex = parseInt(targetIndex);
        }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) {
            targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
          }

          indexGap = targetIndex - absIndex;
        }
      } // gallery: make sure new page won't overlap with current page


      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap; // make sure index is in range

      if (carousel && loop) {
        if (index < indexMin) {
          index += slideCount;
        }

        if (index > indexMax) {
          index -= slideCount;
        }
      } // if index is changed, start rendering


      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }
    }
  } // on controls click


  function onControlsClick(e, dir) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
        target = target.parentNode;
      }

      var targetIn = [prevButton, nextButton].indexOf(target);

      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;

      if (autoWidth) {
        index = Math.floor(index);
      } // pass e when click control buttons or keydown


      render(passEventObject || e && e.type === 'keydown' ? e : null);
    }
  } // on nav click


  function onNavClick(e) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    e = getEvent(e);
    var target = getTarget(e),
        navIndex; // find the clicked nav item

    while (target !== navContainer && !Object(_tiny_slider_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(target, 'data-nav')) {
      target = target.parentNode;
    }

    if (Object(_tiny_slider_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(target, 'data-nav')) {
      var navIndex = navClicked = Number(Object(_tiny_slider_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) {
          stopAutoplay();
        }

        navClicked = -1; // reset navClicked
      }
    }
  } // autoplay functions


  function setAutoplayTimer() {
    /* ASIMOV */
    dateInitPlayTimer = Date.now();
    /* FIN ASIMOV */

    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);
    animating = true;
  }

  function stopAutoplayTimer() {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton(action, txt) {
    Object(_tiny_slider_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(autoplayButton, {
      'data-action': action
    });
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay() {
    setAutoplayTimer();

    if (autoplayButton) {
      updateAutoplayButton('stop', autoplayText[1]);
    }
  }

  function stopAutoplay() {
    stopAutoplayTimer();

    if (autoplayButton) {
      updateAutoplayButton('start', autoplayText[0]);
    }
  } // programaitcally play/pause the slider


  function play() {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function pause() {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }
  /* ASIMOV */


  function play_asimov() {
    if (autoplay && !animating) {
      startAutoplay_asimov();
      autoplayUserPaused = false;
    }
  }

  function startAutoplay_asimov() {
    setAutoplayTimer_asimov();

    if (autoplayButton) {
      updateAutoplayButton('stop', autoplayText[1]);
    }
  }

  function pause_asimov() {
    if (animating) {
      stopAutoplay_asimov();
      autoplayUserPaused = true;
    }
  }

  function stopAutoplay_asimov() {
    stopAutoplayTimer_asimov();

    if (autoplayButton) {
      updateAutoplayButton('start', autoplayText[0]);
    }
  }

  function stopAutoplayTimer_asimov() {
    clearInterval(autoplayTimer);
    animating = false;
    dateFinishPlayTimer = Date.now();
  }

  function setAutoplayTimer_asimov() {
    var difference = dateFinishPlayTimer - dateInitPlayTimer; //Obtenemos el tiempo transcurrido desde el inicio de la animaión.

    var final_time = autoplayTimeout - difference; //Obtenemos el tiempo restante.

    asimovautoTimer = setInterval(function () {
      dateInitPlayTimer = Date.now();
      clearInterval(asimovautoTimer);
      onControlsClick(null, autoplayDirection);
      autoplayTimer = setInterval(function () {
        dateInitPlayTimer = Date.now();
        onControlsClick(null, autoplayDirection);
      }, autoplayTimeout);
    }, final_time);
    dateFinishPlayTimer = 0;
    animating = true;
  }
  /* FIN ASIMOV */


  function toggleAutoplay() {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange() {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause() {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart() {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  } // keydown events on document 


  function onDocumentKeydown(e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  } // on key control


  function onControlsKeydown(e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) {
          onControlsClick(e, -1);
        }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  } // set focus


  function setFocus(el) {
    el.focus();
  } // on key nav


  function onNavKeydown(e) {
    e = getEvent(e);
    var curElement = doc.activeElement;

    if (!Object(_tiny_slider_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(curElement, 'data-nav')) {
      return;
    } // var code = e.keyCode,


    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number(Object(_tiny_slider_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) {
          setFocus(navItems[navIndex - 1]);
        }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) {
          setFocus(navItems[navIndex + 1]);
        }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent(e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }

  function getTarget(e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent(e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected() {
    return Object(_tiny_slider_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_16__["getTouchDirection"])(Object(_tiny_slider_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_15__["toDegree"])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart(e) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    if (autoplay && animating) {
      stopAutoplayTimer();
    }

    panStart = true;

    if (rafIndex) {
      Object(_tiny_slider_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;

    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove(e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) {
          rafIndex = Object(_tiny_slider_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
            panUpdate(e);
          });
        }
      } else {
        if (moveDirectionExpected === '?') {
          moveDirectionExpected = getMoveDirectionExpected();
        }

        if (moveDirectionExpected) {
          preventScroll = true;
        }
      }

      if (preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate(e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }

    Object(_tiny_slider_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);

    if (panStart) {
      rafIndex = Object(_tiny_slider_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
        panUpdate(e);
      });
    }

    if (moveDirectionExpected === '?') {
      moveDirectionExpected = getMoveDirectionExpected();
    }

    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) {
        preventScroll = true;
      }

      try {
        if (e.type) {
          events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e));
        }
      } catch (err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);

      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd(e) {
    if (panStart) {
      if (rafIndex) {
        Object(_tiny_slider_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);
        rafIndex = null;
      }

      if (carousel) {
        resetDuration(container, '');
      }

      panStart = false;
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          Object(_tiny_slider_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(target, {
            'click': function preventClick(e) {
              preventDefaultBehavior(e);
              Object(_tiny_slider_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(target, {
                'click': preventClick
              });
            }
          });
        }

        if (carousel) {
          rafIndex = Object(_tiny_slider_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
            if (horizontal && !autoWidth) {
              var indexMoved = -dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = -(translateInit + dist);

              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;

                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;

                  if (moved > slidePositions[i] && dist < 0) {
                    index += 1;
                  }

                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    } // reset


    if (options.preventScrollOnTouch === 'auto') {
      preventScroll = false;
    }

    if (swipeAngle) {
      moveDirectionExpected = '?';
    }

    if (autoplay && !animating) {
      setAutoplayTimer();
    }
  } // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height


  function updateContentWrapperHeight() {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages() {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }
  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */


  function updateNavVisibility() {
    if (!nav || navAsThumbnails) {
      return;
    }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = _tiny_slider_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"];

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = _tiny_slider_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"];
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      } // cache pages


      pagesCached = pages;
    }
  }

  function info(e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {}
    };
  }

  return {
    version: '2.9.1',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    pause_asimov: pause_asimov,
    play_asimov: play_asimov,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function rebuild() {
      return tns(Object(_tiny_slider_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, optionsElements));
    }
  };
};

/***/ }),

/***/ "./src/sass/uc-components.scss":
/*!*************************************!*\
  !*** ./src/sass/uc-components.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/uc-components-dev.js":
/*!**********************************!*\
  !*** ./src/uc-components-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_components_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/js/components/tiny-slider */ "./src/js/components/tiny-slider.js");
/* harmony import */ var _src_js_components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/js/components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _src_js_components_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/js/components/accordion */ "./src/js/components/accordion.js");
/* harmony import */ var _src_js_components_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/js/components/dropdown */ "./src/js/components/dropdown.js");
/* harmony import */ var _src_js_components_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/js/components/tab */ "./src/js/components/tab.js");





var homeCarousel = Object(_src_js_components_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
  container: '.home-carousel',
  items: 1,
  controls: false,
  autoplay: true,
  slideBy: 1,
  navPosition: 'bottom',
  autoplayPosition: 'bottom',
  navContainer: '.carousel-nav-list',
  autoplayButtonOutput: false //autoplayButton: '.autoplay-buttons',
  // autoplayText: [
  //     "<i class='material-icons play'>play_circle_filled</i>",
  //     "<i class='material-icons pause'>pause_circle_filled</i>"
  // ]

});
/*
homeCarousel.cache_pause = homeCarousel.pause;

homeCarousel.pause = function(){
    var indicatorBar = document.querySelector('.tns-nav-active .indicator');
    indicatorBar.classList.remove('playing');
    indicatorBar.classList.add('paused');
    this.cache_pause();
}*/
// tomamos el boton
//var boton = document.getElementsByClassName("autoplay-buttons")[0];
// hacemos bind de la funcion click

/*
boton.addEventListener('click', event => {
    var activeIndicator = document.querySelector('.tns-nav-active .indicator');
    activeIndicator.classList.toggle('paused');

    var action = boton.getAttribute("data-action");
    switch (action) {
        case 'start':
            console.log("pausado");
            console.log(activeIndicator);
            break;
        case 'stop':
            activeIndicator.classList.remove('paused');
            console.log("andando");
            break;
    }
}, );
*/

var pauseButton = document.querySelector('.pause-button');
var playButton = document.querySelector('.play-button');
pauseButton.addEventListener('click', function (event) {
  console.log(event.target);
  var indicatorBar = document.querySelector('.tns-nav-active .indicator');
  indicatorBar.classList.remove('playing');
  indicatorBar.classList.add('paused');
  homeCarousel.pause_asimov();
  console.log('paused');
});
playButton.addEventListener('click', function (event) {
  var indicatorBar = document.querySelector('.tns-nav-active .indicator');
  indicatorBar.classList.remove('paused');
  indicatorBar.classList.add('playing');
  homeCarousel.play_asimov();
  console.log('playing');
});
/* INICIALIZANDO COMPONENTES */

var uc_kit_components = {
  ac: new _src_js_components_accordion__WEBPACK_IMPORTED_MODULE_2__["Accordion"](),
  modal: new _src_js_components_modal__WEBPACK_IMPORTED_MODULE_1__["Modal"](),
  drop: new _src_js_components_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"](),
  tab: new _src_js_components_tab__WEBPACK_IMPORTED_MODULE_4__["Tab"]()
};

/***/ }),

/***/ 0:
/*!**********************************************************************!*\
  !*** multi ./src/uc-components-dev.js ./src/sass/uc-components.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/diegoalarcon/Sites/uc-components/src/uc-components-dev.js */"./src/uc-components-dev.js");
module.exports = __webpack_require__(/*! /Users/diegoalarcon/Sites/uc-components/src/sass/uc-components.scss */"./src/sass/uc-components.scss");


/***/ })

/******/ });