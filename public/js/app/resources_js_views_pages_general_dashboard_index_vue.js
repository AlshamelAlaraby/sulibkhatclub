(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_general_dashboard_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Footer Component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      version: "v2.3.9"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Horizontal-navbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Horizontal-navbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


/**
 * Horiontal-navbar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      menuItems: []
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["layout"]),
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      required: true
    }
  },
  watch: {
    type: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar-color", "light");
              break;
            default:
              document.body.setAttribute("data-topbar-color", "dark");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-width", "boxed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-mode", "horizontal");
              document.body.removeAttribute("data-layout-width");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    },
    menu: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
            case "scrollable":
              document.body.setAttribute("data-layout-menu-position", "scrollable");
              break;
            default:
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
          }
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.activateParentDropdown();
    this.$router.afterEach(function (routeTo, routeFrom) {
      _this.activateParentDropdown();
    });
  },
  methods: {
    activateParentDropdown: function activateParentDropdown() {
      var resetParent = function resetParent(el) {
        var parent = el.parentElement;
        if (parent) {
          parent.classList.remove("active");
          var parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.remove("active");
            var parent3 = parent2.parentElement;
            parent3.classList.remove("show");
            if (parent3) {
              parent3.classList.remove("active");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("active");
                var parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.remove("active");
                }
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      for (var _i = 0; _i < links.length; _i++) {
        // reset menu
        resetParent(links[_i]);
      }
      for (var i = 0; i < links.length; i++) {
        if (window.location.pathname === links[i].pathname) {
          matchingMenuItem = links[i];
          break;
        }
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;
        if (parent) {
          parent.classList.add("active");
          var parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.add("active");
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add("active");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.add("active");
                var parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.add("active");
                }
              }
            }
          }
        }
      }
    },
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems: function hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    /**
     * Menu clicked show the submenu
     */
    onMenuClick: function onMenuClick(event) {
      event.preventDefault();
      var nextEl = event.target.nextSibling;
      var isHorizontal = document.getElementById("wrapper").hasAttribute("layout");
      if (isHorizontal) {
        nextEl.parentElement.classList.add("show");
        nextEl.nextSibling.classList.add("show");
      } else {
        if (nextEl && nextEl.classList && !nextEl.classList.contains("show")) {
          var parentEl = event.target.parentNode;
          if (parentEl) {
            parentEl.classList.remove("show");
          }
          nextEl.classList.add("show");
        } else if (nextEl && nextEl.classList) {
          nextEl.classList.remove("show");
        }
      }
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * Page-header component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed)
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Rightbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Rightbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * Right-sidebar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      },
      checked: false,
      layout: this.$store ? this.$store.state.layout.layoutType : {} || {},
      width: this.$store ? this.$store.state.layout.layoutWidth : {} || {},
      topbar: this.$store ? this.$store.state.layout.topbar : {} || {},
      sidebarType: this.$store ? this.$store.state.layout.leftSidebarType : {} || {},
      sidebarSize: this.$store ? this.$store.state.layout.leftSidebarSize : {} || {},
      menu: this.$store ? this.$store.state.layout.menuPosition : {} || {}
    };
  },
  methods: _objectSpread(_objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutMethods), {}, {
    handleRightBarClick: function handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    middleware: function middleware(event, el) {
      return !event.target.classList.contains("toggle-right");
    },
    changeLayout: function changeLayout(layout) {
      this.$store.dispatch("layout/changeLayoutType", {
        layoutType: layout
      });
    },
    changeWidth: function changeWidth(width) {
      this.$store.dispatch("layout/changeLayoutWidth", {
        layoutWidth: width
      });
    },
    changeTopbartype: function changeTopbartype(value) {
      this.$store.dispatch("layout/changeTopbar", {
        topbar: value
      });
    },
    changeType: function changeType(type) {
      this.$store.dispatch("layout/changeLeftSidebarType", {
        leftSidebarType: type
      });
    },
    changeSize: function changeSize(size) {
      this.$store.dispatch("layout/changeLeftSidebarSize", {
        leftSidebarSize: size
      });
    },
    changemenuPosition: function changemenuPosition(position) {
      this.$store.dispatch("layout/changeMenuPosition", {
        menuPosition: position
      });
    },
    enableInfo: function enableInfo() {
      if (this.checked) document.body.setAttribute("data-sidebar-showuser", "true");else document.body.removeAttribute("data-sidebar-showuser");
    },
    reset: function reset() {
      this.width = "fluid";
      this.menu = "fixed";
      this.sidebarType = "light";
      this.sidebarSize = "default";
      this.topbar = "dark";
      this.checked = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helper_allRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/allRoute.js */ "./resources/js/helper/allRoute.js");
/* harmony import */ var _helper_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/global.js */ "./resources/js/helper/global.js");
/* harmony import */ var _helper_Rule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/Rule.js */ "./resources/js/helper/Rule.js");
/* harmony import */ var _recursive_menu_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recursive_menu.vue */ "./resources/js/components/general/recursive_menu.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inject: ["isRouteClicked", "menuLoadedCounter"],
  components: {
    recursive_menu: _recursive_menu_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      menuItems: [],
      companies: [],
      workFlowTree: [],
      allWorkFlowTree: []
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      required: true
    },
    topbar: {
      type: String,
      required: true
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(["layout"])), {}, {
    routeMod: function routeMod() {
      return _helper_Rule_js__WEBPACK_IMPORTED_MODULE_2__["default"].value;
    }
  }),
  watch: {
    type: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-sidebar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-sidebar-color", "light");
              break;
            case "brand":
              document.body.setAttribute("data-sidebar-color", "brand");
              break;
            case "gradient":
              document.body.setAttribute("data-sidebar-color", "gradient");
              break;
            default:
              document.body.setAttribute("data-sidebar-color", "light");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-width", "boxed");
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-width", "fluid");
              document.body.removeAttribute("data-sidebar-size");
              document.body.removeAttribute("data-layout-width");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    },
    size: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "default":
              document.body.setAttribute("data-sidebar-size", "default");
              break;
            case "condensed":
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "compact":
              document.body.setAttribute("data-sidebar-size", "compact");
              break;
            default:
              document.body.setAttribute("data-sidebar-size", "default");
              break;
          }
        }
      }
    },
    routeMod: {
      handler: function handler(newV, old) {
        this.menuItems = _helper_Rule_js__WEBPACK_IMPORTED_MODULE_2__["default"].value;
      }
    },
    menu: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
            case "scrollable":
              document.body.setAttribute("data-layout-menu-position", "scrollable");
              break;
            default:
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
          }
        }
      }
    },
    topbar: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar-color", "light");
              break;
            default:
              document.body.setAttribute("data-topbar-color", "dark");
              break;
          }
        }
      }
    }
  },
  mounted: function mounted() {
    this.companies = _helper_global_js__WEBPACK_IMPORTED_MODULE_1__._companies.value;
    this.workFlowTree = this.$store.state.auth.work_flow_trees;
    this.allWorkFlowTree = this.$store.state.auth.allWorkFlow;
    if (_helper_global_js__WEBPACK_IMPORTED_MODULE_1__.selectedParents.value.length) {
      var is_web = 0;
      this.$store.state.auth.parentModule.forEach(function (program, index) {
        if (program.id == _helper_global_js__WEBPACK_IMPORTED_MODULE_1__.selectedParents.value[0]) {
          program.modules.forEach(function (module_node) {
            if (module_node.project_program_module.id == _helper_global_js__WEBPACK_IMPORTED_MODULE_1__.selectedParents.value[1]) {
              is_web = module_node.is_web;
            }
          });
        }
      });
      this.$store.commit("auth/editIsWeb", is_web);
      this.menuItems = _helper_Rule_js__WEBPACK_IMPORTED_MODULE_2__["default"].value;
    } else {
      this.menuItems = [];
    }
    localStorage.setItem("menuLoaded", true);
    // this._activateMenuDropdown();
    // this.$router.afterEach((routeTo, routeFrom) => {
    //   this._activateMenuDropdown();
    // });
  },

  methods: {
    _activateMenuDropdown: function _activateMenuDropdown() {
      var resetParent = function resetParent(el) {
        el.classList.remove("active");
        var parent = el.parentElement;
        if (parent) {
          parent.classList.remove("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.remove("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("menuitem-active");
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      var paths = [];
      for (var _i = 0; _i < links.length; _i++) {
        // reset menu
        resetParent(links[_i]);
      }
      for (var i = 0; i < links.length; i++) {
        paths.push(links[i]["pathname"]);
      }
      var itemIndex = paths.indexOf(window.location.pathname);
      if (itemIndex === -1) {
        var strIndex = window.location.pathname.lastIndexOf("/");
        var item = window.location.pathname.substr(0, strIndex).toString();
        matchingMenuItem = links[paths.indexOf(item)];
      } else {
        matchingMenuItem = links[itemIndex];
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;

        /**
         * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
         * We should come up with non hard coded approach
         */
        if (parent) {
          parent.classList.add("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.add("menuitem-active");
              }
            }
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_adminAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/adminAxios */ "./resources/js/api/adminAxios.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification */ "./resources/js/components/general/notification.vue");
/* harmony import */ var _helper_allRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/allRoute.js */ "./resources/js/helper/allRoute.js");
/* harmony import */ var _helper_Rule_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/Rule.js */ "./resources/js/helper/Rule.js");
/* harmony import */ var _helper_global_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/global.js */ "./resources/js/helper/global.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loader_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader.vue */ "./resources/js/components/general/loader.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/**
 * Topbar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoader: false,
      languages: [{
        flag: "/assets/images/us.jpg",
        language: "en",
        title: "English"
      }, {
        flag: "/assets/images/arabic.png",
        language: "ar",
        title: "Arabic"
      }],
      selectedParents: _helper_global_js__WEBPACK_IMPORTED_MODULE_5__.selectedParents,
      current_language: this.$i18n.locale,
      text: null,
      flag: null,
      value: null,
      currentParentId: null,
      relates: {
        archiving: ["arch-departments", "archiving screen", "arch-doc-status", "document-fields", "gen-arch-doc-types"]
      },
      module: {},
      allRouteModule: []
    };
  },
  components: {
    loader: _loader_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Notification: _notification__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    var _this = this;
    this.value = this.languages.find(function (x) {
      return x.language === _this.$i18n.locale;
    });
    this.text = this.value.title;
    this.flag = this.value.flag;
    this.allRouteModule = _helper_allRoute_js__WEBPACK_IMPORTED_MODULE_3__["default"].value;
  },
  methods: {
    getMenu: function getMenu(prog_id, prog_module_id, dashboard_id) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.isLoader = true;
              _helper_global_js__WEBPACK_IMPORTED_MODULE_5__.selectedParents.value = [prog_id, prog_module_id, dashboard_id];
              localStorage.setItem("selectedParents", JSON.stringify(_helper_global_js__WEBPACK_IMPORTED_MODULE_5__.selectedParents.value));
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().get("".concat("https://admin.alshamelalaraby2.com/", "api/partners/get_children_inside_module_for_partner_sidebar_menu/").concat(prog_module_id)).then( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
                  var folders_and_pages, folders_and_pages_after_appended_show_property;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        folders_and_pages = [];
                        _context.next = 3;
                        return res.data.data.forEach(function (element) {
                          folders_and_pages.push(element);
                        });
                      case 3:
                        if (!(_this2.$store.state.auth.type == 'admin')) {
                          _context.next = 6;
                          break;
                        }
                        _context.next = 6;
                        return _this2.getWorkflows(folders_and_pages);
                      case 6:
                        _context.next = 8;
                        return _this2.appendShowProperty(folders_and_pages);
                      case 8:
                        folders_and_pages_after_appended_show_property = _context.sent;
                        localStorage.setItem('routeModules', JSON.stringify(folders_and_pages_after_appended_show_property));
                        _helper_Rule_js__WEBPACK_IMPORTED_MODULE_4__["default"].value = folders_and_pages_after_appended_show_property;
                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }())["finally"](function () {
                _this2.isLoader = false;
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    appendShowProperty: function appendShowProperty(folders_and_pages) {
      var _this3 = this;
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      folders_and_pages.forEach(function (element) {
        var _element$page$middlew;
        if (element.type == 'page' && _this3.$store.state.auth.work_flow_trees.includes((_element$page$middlew = element.page.middleware) !== null && _element$page$middlew !== void 0 ? _element$page$middlew : element.page.name_e)) {
          //
          if (parent) parent.isUserMenu = 1;
          element.isUserMenu = 1;
        }
        if (element.childrens) {
          _this3.appendShowProperty(element.childrens, element);
        }
        if (element && element.isUserMenu && parent) {
          parent.isUserMenu = 1;
        }
      });
      return folders_and_pages;
    },
    getWorkflows: function getWorkflows(folders_and_pages) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              data = [];
              data = _this4.get_all_pages_names(folders_and_pages);
              _this4.$store.commit("auth/editWorkFlowTrees", ["dictionary", "home", "Company"].concat(_toConsumableArray(data[0])));
              _this4.$store.commit("auth/editCustomModules", data[1]);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    get_all_pages_names: function get_all_pages_names(folders_and_pages) {
      var _this5 = this;
      var names = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var custom_modules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['General'];
      folders_and_pages.forEach(function (element) {
        if (element.type == 'page') {
          var _element$page$middlew2;
          names.push((_element$page$middlew2 = element.page.middleware) !== null && _element$page$middlew2 !== void 0 ? _element$page$middlew2 : element.page.name_e);
          if (element.page.module_screen && !custom_modules.includes(element.page.module_screen.name_e)) {
            custom_modules.push(element.page.module_screen.name_e);
          }
        } else _this5.get_all_pages_names(element.childrens, names, custom_modules);
      });
      return [names, custom_modules];
    },
    /**
     * Toggle menu
     */
    toggleMenu: function toggleMenu() {
      this.$parent.toggleMenu();
    },
    /**
     * Full screen
     */
    initFullScreen: function initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (!document.fullscreenElement && /* alternative standard method */
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    /**
     * Toggle rightbar
     */
    toggleRightSidebar: function toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    /**
     * Set languages
     */
    setLanguage: function setLanguage(locale, country, flag) {
      this.$i18n.locale = locale;
      this.current_language = locale;
      this.text = country;
      this.flag = flag;
      localStorage.setItem("lang", locale);
      if (locale == "ar") {
        document.body.style.textAlign = "right";
        document.body.classList.add("rtl");
        document.querySelector("html").style.direction = "rtl";
        document.querySelector("html").setAttribute("lang", locale || "ar");
        var style_dashboard = document.getElementById("style_dashboard");
        style_dashboard.setAttribute("href", window.location.origin + "/css/custom.css");
      } else {
        document.body.style.textAlign = "left";
        document.body.classList.remove("rtl");
        document.querySelector("html").style.direction = "ltr";
        document.querySelector("html").setAttribute("lang", locale || "ar");
        var _style_dashboard = document.getElementById("style_dashboard");
        _style_dashboard.setAttribute("href", "");
      }
    },
    /**
     * Horizontal-toggle menu
     */
    horizonalmenu: function horizonalmenu() {
      var element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
    /**
     *  Logout Dashboard
     */
    logout: function logout() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(_this6.$store.state.auth.type != "admin")) {
                _context4.next = 5;
                break;
              }
              _context4.next = 3;
              return _api_adminAxios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/auth/logout").then(function (res) {
                _this6.$store.commit("auth/logoutToken");
                return _this6.$router.push({
                  name: "login"
                });
              })["catch"](function (err) {
                _this6.$store.commit("auth/logoutToken");
                return _this6.$router.push({
                  name: "login"
                });
              })["finally"](function () {});
            case 3:
              _context4.next = 7;
              break;
            case 5:
              _this6.$store.commit("auth/logoutToken");
              return _context4.abrupt("return", _this6.$router.push({
                name: "login"
              }));
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Two-column-sidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Two-column-sidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      activetab: 1
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      required: true
    },
    topbar: {
      type: String,
      required: true
    }
  },
  watch: {
    type: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-sidebar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-sidebar-color", "light");
              break;
            case "brand":
              document.body.setAttribute("data-sidebar-color", "brand");
              break;
            case "gradient":
              document.body.setAttribute("data-sidebar-color", "gradient");
              break;
            default:
              document.body.setAttribute("data-sidebar-color", "light");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-width", "boxed");
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-width", "fluid");
              document.body.removeAttribute("data-sidebar-size");
              document.body.removeAttribute("data-layout-width");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    },
    size: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "default":
              document.body.setAttribute("data-sidebar-size", "default");
              break;
            case "condensed":
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "compact":
              document.body.setAttribute("data-sidebar-size", "compact");
              break;
            default:
              document.body.setAttribute("data-sidebar-size", "default");
              break;
          }
        }
      }
    },
    menu: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
            case "scrollable":
              document.body.setAttribute("data-layout-menu-position", "scrollable");
              break;
            default:
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
          }
        }
      }
    },
    topbar: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar-color", "light");
              break;
            default:
              document.body.setAttribute("data-topbar-color", "dark");
              break;
          }
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this._activateMenuDropdown();
    this.$router.afterEach(function (routeTo, routeFrom) {
      _this._activateMenuDropdown();
    });
  },
  methods: {
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems: function hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    _activateMenuDropdown: function _activateMenuDropdown() {
      var resetParent = function resetParent(el) {
        el.classList.remove("active");
        var parent = el.parentElement;
        if (parent) {
          parent.classList.remove("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.remove("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("menuitem-active");
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      var paths = [];
      for (var _i = 0; _i < links.length; _i++) {
        // reset menu
        resetParent(links[_i]);
      }
      for (var i = 0; i < links.length; i++) {
        paths.push(links[i]["pathname"]);
      }
      var itemIndex = paths.indexOf(window.location.pathname);
      if (itemIndex === -1) {
        var strIndex = window.location.pathname.lastIndexOf("/");
        var item = window.location.pathname.substr(0, strIndex).toString();
        matchingMenuItem = links[paths.indexOf(item)];
      } else {
        matchingMenuItem = links[itemIndex];
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;

        /**
         * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
         * We should come up with non hard coded approach
         */
        if (parent) {
          parent.classList.add("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.add("menuitem-active");
              }
            }
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "loader",
  props: {
    size: {
      "default": 'small',
      type: String,
      validator: function validator(value) {
        return ['large', 'small', 'middle'].indexOf(value) != -1;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_adminAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/adminAxios */ "./resources/js/api/adminAxios.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "notification",
  data: function data() {
    return {
      notifications: [],
      count: 0
    };
  },
  computed: {
    deleteNot: function deleteNot() {
      return this.$store.state.auth.notification;
    }
  },
  watch: {
    deleteNot: function deleteNot(newDeleteNot, oldDeleteNot) {
      this.notifications = [];
      this.count = 0;
    }
  },
  methods: {
    notificationNotRead: function notificationNotRead() {
      var _this = this;
      if (localStorage.getItem("user")) {
        _api_adminAxios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/getNotNotRead").then(function (res) {
          _this.notifications = res.data.data.notifications;
          _this.count = res.data.data.count;
        })["catch"](function (err) {});
      }
    },
    clearItem: function clearItem(id, index) {
      var _this2 = this;
      if (localStorage.getItem("user")) {
        _api_adminAxios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/clearItem/".concat(id)).then(function (res) {
          _this2.notifications.splice(index, 1);
          _this2.count -= 1;
        })["catch"](function (err) {});
      }
    },
    clearAll: function clearAll() {
      var _this3 = this;
      if (localStorage.getItem("user")) {
        _api_adminAxios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/getNotNotRead").then(function (res) {
          _this3.notifications = [];
          _this3.count = 0;
        })["catch"](function (err) {});
      }
    },
    pusherNotification: function pusherNotification() {
      if (localStorage.getItem("user")) {
        // Echo.private('App.Models.User.'+JSON.parse(localStorage.getItem("user")).id)
        //     .notification((notification) => {
        //         this.notifications.unshift(notification);
        //         this.count += 1;
        //         console.log(notification);
        //     });
      }
    }
  },
  mounted: function mounted() {
    this.notificationNotRead();
    this.pusherNotification();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/recursive_menu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/recursive_menu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper_PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/PageTitle */ "./resources/js/helper/PageTitle.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inject: ["isRouteClicked", "menuLoadedCounter"],
  name: 'recursive_menu',
  props: ['menuItems', 'companies'],
  mounted: function mounted() {
    $(document).on('click', '.page_item', function () {
      var data = {
        "title": $(this).data('title'),
        "title_e": $(this).data('title_e'),
        "url": $(this).data('url')
      };
      localStorage.setItem('page_title', JSON.stringify(data));
      _helper_PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"].value = data;
    });
  },
  methods: {
    checkUserOrAdminPermission: function checkUserOrAdminPermission(isUserMenu) {
      if (this.$store.state.auth.type != "admin") {
        return isUserMenu;
      }
      return true;
    },
    checkPermission: function checkPermission(name) {
      return this.$store.state.auth.work_flow_trees.includes(name);
    },
    clickOnMenuToCollapseChildrens: function clickOnMenuToCollapseChildrens(index) {
      var _this = this;
      this.$set(this.menuItems[index], 'collapsed', !this.menuItems[index]['collapsed'] ? 1 : 0);
      if (this.menuItems[index]['collapsed']) this.menuItems.forEach(function (element, i) {
        if (index != i) {
          _this.$set(_this.menuItems[i], 'collapsed', 0);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widgets_Widget_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/Widget-chart */ "./resources/js/components/widgets/Widget-chart.vue");
/* harmony import */ var _general_Page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/Page-header */ "./resources/js/components/general/Page-header.vue");
/* harmony import */ var _widgets_Revenue_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/Revenue-report */ "./resources/js/components/widgets/Revenue-report.vue");
/* harmony import */ var _widgets_Products_sales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/Products-sales */ "./resources/js/components/widgets/Products-sales.vue");
/* harmony import */ var _widgets_Marketing_reports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/Marketing-reports */ "./resources/js/components/widgets/Marketing-reports.vue");
/* harmony import */ var _widgets_Portlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/Portlet */ "./resources/js/components/widgets/Portlet.vue");
/* harmony import */ var _widgets_Revenue_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Revenue-history */ "./resources/js/components/widgets/Revenue-history.vue");
/* harmony import */ var _widgets_Projections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/Projections */ "./resources/js/components/widgets/Projections.vue");
/* harmony import */ var _api_adminAxios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/adminAxios */ "./resources/js/api/adminAxios.js");
/* harmony import */ var _helper_startDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helper/startDate */ "./resources/js/helper/startDate.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import Layout from "../../views/layouts/main";














/**
 * Sales-Dashboard component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BookingStatistics",
  components: {
    // Layout,
    WidgetChart: _widgets_Widget_chart__WEBPACK_IMPORTED_MODULE_1__["default"],
    PageHeader: _general_Page_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    RevenueReport: _widgets_Revenue_report__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProductsSales: _widgets_Products_sales__WEBPACK_IMPORTED_MODULE_4__["default"],
    MarketingReports: _widgets_Marketing_reports__WEBPACK_IMPORTED_MODULE_5__["default"],
    Portlet: _widgets_Portlet__WEBPACK_IMPORTED_MODULE_6__["default"],
    RevenueHistory: _widgets_Revenue_history__WEBPACK_IMPORTED_MODULE_7__["default"],
    Projections: _widgets_Projections__WEBPACK_IMPORTED_MODULE_8__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      title: "Welcome !",
      items: [{
        text: "Minton"
      }, {
        text: "Dashboards"
      }, {
        text: "Sales",
        active: true
      }],
      tableTitle: "Top Selling Products",
      productData: [{
        name: "ASOS Ridley High Waist",
        price: "$79.49",
        quantity: 82,
        amount: "$6,518.18",
        date: "Sep 1, 2018",
        sales: 54,
        productid: 200125
      }, {
        name: "Marco Lightweight Shirt",
        price: "$128.50",
        quantity: 37,
        amount: "$4,754.50",
        date: "Sep 15, 2018",
        sales: 28,
        productid: 200130
      }, {
        name: "Half Sleeve Shirt",
        price: "$39.99",
        quantity: 64,
        amount: "$2,559.36",
        date: "Nov 1, 2018",
        sales: 55,
        productid: 200140
      }, {
        name: "Lightweight Jacket",
        price: "$20.00",
        quantity: 184,
        amount: "$3,680.00",
        date: "Nov 15, 2018",
        sales: 85,
        productid: 200250
      }, {
        name: "Marco Shoes",
        price: "$28.49",
        quantity: 69,
        amount: "$1,965.81",
        date: "Jan 1, 2019",
        sales: 49,
        productid: 200256
      }, {
        name: "ASOS Ridley High Waist",
        price: "$79.49",
        quantity: 82,
        amount: "$6,518.18",
        date: "Sep 1, 2018",
        sales: 54,
        productid: 200125
      }, {
        name: "Half Sleeve Shirt",
        price: "$39.99",
        quantity: 64,
        amount: "$2,559.36",
        date: "Nov 1, 2018",
        sales: 55,
        productid: 200140
      }, {
        name: "Lightweight Jacket",
        price: "$20.00",
        quantity: 184,
        amount: "$3,680.00",
        date: "Nov 15, 2018",
        sales: 85,
        productid: 200250
      }],
      isLoader: false,
      statices: {},
      documents: [],
      create: {
        date: this.formatDate(new Date()),
        header_id: null,
        detail_ids: []
      },
      is_disabled: false,
      errors: {}
    };
  },
  validations: {
    create: {
      date: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_12__.required
      }
    }
  },
  mounted: function mounted() {
    this.getStatices();
    this.getCheckInCustomer();
  },
  methods: {
    getStatices: function getStatices() {
      var _this = this;
      this.isLoader = true;
      _api_adminAxios__WEBPACK_IMPORTED_MODULE_9__["default"].get("/booking/statistics").then(function (res) {
        var l = res.data.data;
        _this.statices = l;
      })["catch"](function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'error',
          title: "".concat(_this.$t('general.Error')),
          text: "".concat(_this.$t('general.Thereisanerrorinthesystem'))
        });
      })["finally"](function () {
        _this.isLoader = false;
      });
    },
    getCheckInCustomer: function getCheckInCustomer() {
      var _this2 = this;
      this.isLoader = true;
      _api_adminAxios__WEBPACK_IMPORTED_MODULE_9__["default"].get("/document-headers/check-in-customer").then(function (res) {
        var l = res.data;
        _this2.documents = l;
      })["catch"](function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: "error",
          title: "".concat(_this2.$t("general.Error")),
          text: "".concat(_this2.$t("general.Thereisanerrorinthesystem"))
        });
      })["finally"](function () {
        _this2.isLoader = false;
      });
    },
    formatDate: function formatDate(value) {
      return (0,_helper_startDate__WEBPACK_IMPORTED_MODULE_10__.formatDateOnly)(value);
    },
    resetModalHidden: function resetModalHidden(id) {
      var _this3 = this;
      this.create = {
        date: this.formatDate(new Date()),
        header_id: null,
        detail_ids: []
      };
      this.$nextTick(function () {
        _this3.$v.$reset();
      });
      this.is_disabled = false;
      this.errors = {};
      this.$bvModal.hide(id);
    },
    resetModal: function resetModal(id) {
      var _this4 = this;
      var data = this.documents.find(function (e) {
        return id == e.id;
      });
      this.create = {
        date: this.formatDate(new Date()),
        header_id: data.id,
        detail_ids: [data.document_header_details[0].id]
      };
      this.$nextTick(function () {
        _this4.$v.$reset();
      });
      this.is_disabled = false;
      this.errors = {};
    },
    AddSubmit: function AddSubmit() {
      var _this5 = this;
      this.$v.create.$touch();
      if (this.$v.create.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        this.is_disabled = false;
        _api_adminAxios__WEBPACK_IMPORTED_MODULE_9__["default"].post("document-headers/update-check-in-customer", _objectSpread({}, this.create)).then(function (res) {
          _this5.getCheckInCustomer();
          _this5.is_disabled = true;
          setTimeout(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              icon: "success",
              text: "".concat(_this5.$t("general.Addedsuccessfully")),
              showConfirmButton: false,
              timer: 1500
            });
          }, 500);
        })["catch"](function (err) {
          if (err.response.data) {
            _this5.errors = err.response.data.errors;
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              icon: "error",
              title: "".concat(_this5.$t("general.Error")),
              text: "".concat(_this5.$t("general.Thereisanerrorinthesystem"))
            });
          }
        })["finally"](function () {
          _this5.isLoader = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widgets_Widget_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/Widget-chart */ "./resources/js/components/widgets/Widget-chart.vue");
/* harmony import */ var _general_Page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/Page-header */ "./resources/js/components/general/Page-header.vue");
/* harmony import */ var _widgets_Revenue_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/Revenue-report */ "./resources/js/components/widgets/Revenue-report.vue");
/* harmony import */ var _widgets_Products_sales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/Products-sales */ "./resources/js/components/widgets/Products-sales.vue");
/* harmony import */ var _widgets_Marketing_reports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/Marketing-reports */ "./resources/js/components/widgets/Marketing-reports.vue");
/* harmony import */ var _widgets_Portlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/Portlet */ "./resources/js/components/widgets/Portlet.vue");
/* harmony import */ var _widgets_Revenue_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Revenue-history */ "./resources/js/components/widgets/Revenue-history.vue");
/* harmony import */ var _widgets_Projections_club__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/Projections-club */ "./resources/js/components/widgets/Projections-club.vue");
/* harmony import */ var _api_adminAxios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/adminAxios */ "./resources/js/api/adminAxios.js");
/* harmony import */ var _widgets_Crm_widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/Crm-widget */ "./resources/js/components/widgets/Crm-widget.vue");
// import Layout from "../../views/layouts/main";












/**
 * Sales-Dashboard component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ClubStatistics",
  components: {
    // Layout,
    WidgetChart: _widgets_Widget_chart__WEBPACK_IMPORTED_MODULE_1__["default"],
    PageHeader: _general_Page_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    RevenueReport: _widgets_Revenue_report__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProductsSales: _widgets_Products_sales__WEBPACK_IMPORTED_MODULE_4__["default"],
    MarketingReports: _widgets_Marketing_reports__WEBPACK_IMPORTED_MODULE_5__["default"],
    Portlet: _widgets_Portlet__WEBPACK_IMPORTED_MODULE_6__["default"],
    RevenueHistory: _widgets_Revenue_history__WEBPACK_IMPORTED_MODULE_7__["default"],
    Projections: _widgets_Projections_club__WEBPACK_IMPORTED_MODULE_8__["default"],
    CrmWidget: _widgets_Crm_widget__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      title: "Welcome !",
      items: [{
        text: "Minton"
      }, {
        text: "Dashboards"
      }, {
        text: "Sales",
        active: true
      }],
      tableTitle: "Top Selling Products",
      productData: [{
        name: "ASOS Ridley High Waist",
        price: "$79.49",
        quantity: 82,
        amount: "$6,518.18",
        date: "Sep 1, 2018",
        sales: 54,
        productid: 200125
      }, {
        name: "Marco Lightweight Shirt",
        price: "$128.50",
        quantity: 37,
        amount: "$4,754.50",
        date: "Sep 15, 2018",
        sales: 28,
        productid: 200130
      }, {
        name: "Half Sleeve Shirt",
        price: "$39.99",
        quantity: 64,
        amount: "$2,559.36",
        date: "Nov 1, 2018",
        sales: 55,
        productid: 200140
      }, {
        name: "Lightweight Jacket",
        price: "$20.00",
        quantity: 184,
        amount: "$3,680.00",
        date: "Nov 15, 2018",
        sales: 85,
        productid: 200250
      }, {
        name: "Marco Shoes",
        price: "$28.49",
        quantity: 69,
        amount: "$1,965.81",
        date: "Jan 1, 2019",
        sales: 49,
        productid: 200256
      }, {
        name: "ASOS Ridley High Waist",
        price: "$79.49",
        quantity: 82,
        amount: "$6,518.18",
        date: "Sep 1, 2018",
        sales: 54,
        productid: 200125
      }, {
        name: "Half Sleeve Shirt",
        price: "$39.99",
        quantity: 64,
        amount: "$2,559.36",
        date: "Nov 1, 2018",
        sales: 55,
        productid: 200140
      }, {
        name: "Lightweight Jacket",
        price: "$20.00",
        quantity: 184,
        amount: "$3,680.00",
        date: "Nov 15, 2018",
        sales: 85,
        productid: 200250
      }],
      isLoader: false,
      statices: {},
      normalDetails: [],
      dismissedDetails: [],
      foundingDetails: []
    };
  },
  mounted: function mounted() {
    this.getStatices();
  },
  methods: {
    getStatices: function getStatices() {
      var _this = this;
      this.isLoader = true;
      _api_adminAxios__WEBPACK_IMPORTED_MODULE_9__["default"].get("/club-members/statics/get-members-valid").then(function (res) {
        var l = res.data.data;
        _this.statices = l;
        _this.staticesHandel();
      })["catch"](function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'error',
          title: "".concat(_this.$t('general.Error')),
          text: "".concat(_this.$t('general.Thereisanerrorinthesystem'))
        });
      })["finally"](function () {
        _this.isLoader = false;
      });
    },
    staticesHandel: function staticesHandel() {
      this.normalDetails = [{
        "name": 'InTheListOfMembers',
        "value": this.statices.InTheListOfMembers
      }, {
        "name": 'stopped',
        "value": this.statices.stopped
      }, {
        "name": 'HeHasTheRightToRun',
        "value": this.statices.HeHasTheRightToRun
      }, {
        "name": 'HeHasTheRightToVote',
        "value": this.statices.HeHasTheRightToVote
      }, {
        "name": 'HeHasNoRightToVote',
        "value": this.statices.HeHasNoRightToVote
      }, {
        "name": 'PaidPersonHasNoRightToAttend',
        "value": this.statices.PaidPersonHasNoRightToAttend
      }];
      this.dismissedDetails = [{
        "name": 'DeletedAtHisRequest',
        "value": this.statices.DeletedAtHisRequest
      }, {
        "name": 'CancellationDueToDeath',
        "value": this.statices.CancellationDueToDeath
      }, {
        "name": 'CancellationPursuantToMinisterialDecision',
        "value": this.statices.CancellationPursuantToMinisterialDecision
      }, {
        "name": 'CancellationAccordingToTheAuthoritySLetter',
        "value": this.statices.CancellationAccordingToTheAuthoritySLetter
      }, {
        "name": 'WriteOffForNonPayment',
        "value": this.statices.WriteOffForNonPayment
      }];
      this.foundingDetails = [{
        "name": 'FoundingMemberDetail',
        "value": this.statices.FoundingMemberDetail
      }, {
        "name": 'HeHasTheRightToRunAndVoteDetail',
        "value": this.statices.HeHasTheRightToRunAndVoteDetail
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widgets_Widget_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/Widget-chart */ "./resources/js/components/widgets/Widget-chart.vue");
/* harmony import */ var _general_Page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/Page-header */ "./resources/js/components/general/Page-header.vue");
/* harmony import */ var _widgets_Revenue_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/Revenue-report */ "./resources/js/components/widgets/Revenue-report.vue");
/* harmony import */ var _widgets_Products_sales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/Products-sales */ "./resources/js/components/widgets/Products-sales.vue");
/* harmony import */ var _widgets_Marketing_reports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/Marketing-reports */ "./resources/js/components/widgets/Marketing-reports.vue");
/* harmony import */ var _widgets_Portlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/Portlet */ "./resources/js/components/widgets/Portlet.vue");
/* harmony import */ var _widgets_Revenue_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Revenue-history */ "./resources/js/components/widgets/Revenue-history.vue");
/* harmony import */ var _widgets_Projections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/Projections */ "./resources/js/components/widgets/Projections.vue");
/* harmony import */ var _api_adminAxios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/adminAxios */ "./resources/js/api/adminAxios.js");
// import Layout from "../../views/layouts/main";











/**
 * Sales-Dashboard component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "default_dashboard",
  components: {
    // Layout,
    WidgetChart: _widgets_Widget_chart__WEBPACK_IMPORTED_MODULE_1__["default"],
    PageHeader: _general_Page_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    RevenueReport: _widgets_Revenue_report__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProductsSales: _widgets_Products_sales__WEBPACK_IMPORTED_MODULE_4__["default"],
    MarketingReports: _widgets_Marketing_reports__WEBPACK_IMPORTED_MODULE_5__["default"],
    Portlet: _widgets_Portlet__WEBPACK_IMPORTED_MODULE_6__["default"],
    RevenueHistory: _widgets_Revenue_history__WEBPACK_IMPORTED_MODULE_7__["default"],
    Projections: _widgets_Projections__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      title: "Welcome !",
      items: [{
        text: "Minton"
      }, {
        text: "Dashboards"
      }, {
        text: "Sales",
        active: true
      }],
      tableTitle: "Top Selling Products",
      productData: [{
        name: "ASOS Ridley High Waist",
        price: "$79.49",
        quantity: 82,
        amount: "$6,518.18",
        date: "Sep 1, 2018",
        sales: 54,
        productid: 200125
      }, {
        name: "Marco Lightweight Shirt",
        price: "$128.50",
        quantity: 37,
        amount: "$4,754.50",
        date: "Sep 15, 2018",
        sales: 28,
        productid: 200130
      }, {
        name: "Half Sleeve Shirt",
        price: "$39.99",
        quantity: 64,
        amount: "$2,559.36",
        date: "Nov 1, 2018",
        sales: 55,
        productid: 200140
      }, {
        name: "Lightweight Jacket",
        price: "$20.00",
        quantity: 184,
        amount: "$3,680.00",
        date: "Nov 15, 2018",
        sales: 85,
        productid: 200250
      }, {
        name: "Marco Shoes",
        price: "$28.49",
        quantity: 69,
        amount: "$1,965.81",
        date: "Jan 1, 2019",
        sales: 49,
        productid: 200256
      }, {
        name: "ASOS Ridley High Waist",
        price: "$79.49",
        quantity: 82,
        amount: "$6,518.18",
        date: "Sep 1, 2018",
        sales: 54,
        productid: 200125
      }, {
        name: "Half Sleeve Shirt",
        price: "$39.99",
        quantity: 64,
        amount: "$2,559.36",
        date: "Nov 1, 2018",
        sales: 55,
        productid: 200140
      }, {
        name: "Lightweight Jacket",
        price: "$20.00",
        quantity: 184,
        amount: "$3,680.00",
        date: "Nov 15, 2018",
        sales: 85,
        productid: 200250
      }],
      isLoader: false,
      statices: {}
    };
  },
  mounted: function mounted() {
    this.getStatices();
  },
  methods: {
    getStatices: function getStatices() {
      var _this = this;
      this.isLoader = true;
      _api_adminAxios__WEBPACK_IMPORTED_MODULE_9__["default"].get("/statices").then(function (res) {
        var l = res.data.data;
        _this.statices = l;
      })["catch"](function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'error',
          title: "".concat(_this.$t('general.Error')),
          text: "".concat(_this.$t('general.Thereisanerrorinthesystem'))
        });
      })["finally"](function () {
        _this.isLoader = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_Page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general/Page-header */ "./resources/js/components/general/Page-header.vue");
/* harmony import */ var _widgets_Marketing_reports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/Marketing-reports */ "./resources/js/components/widgets/Marketing-reports.vue");
/* harmony import */ var _api_adminAxios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/adminAxios */ "./resources/js/api/adminAxios.js");
/* harmony import */ var _widgets_h_m_s_patients_age_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/h_m_s_patients_age.vue */ "./resources/js/components/widgets/h_m_s_patients_age.vue");
/* harmony import */ var _widgets_h_m_s_patients_blood_type_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/h_m_s_patients_blood_type.vue */ "./resources/js/components/widgets/h_m_s_patients_blood_type.vue");
/* harmony import */ var _widgets_h_m_s_appointments_times_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/h_m_s_appointments_times.vue */ "./resources/js/components/widgets/h_m_s_appointments_times.vue");
/* harmony import */ var _widgets_h_m_s_appointments_for_current_and_last_month_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/h_m_s_appointments_for_current_and_last_month.vue */ "./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue");
/* harmony import */ var _widgets_h_m_s_total_amount_for_each_month_in_year_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/h_m_s_total_amount_for_each_month_in_year.vue */ "./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue");
/* harmony import */ var _widgets_h_m_s_total_and_paid_amount_for_each_doctors_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue */ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue");
/* harmony import */ var _widgets_h_m_s_total_and_paid_amount_for_each_company_insurance_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue */ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue");
// import Layout from "../../views/layouts/main";












/**
 * Sales-Dashboard component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "h_m_s_dashboard",
  components: {
    // Layout,
    PageHeader: _general_Page_header__WEBPACK_IMPORTED_MODULE_1__["default"],
    MarketingReports: _widgets_Marketing_reports__WEBPACK_IMPORTED_MODULE_2__["default"],
    h_m_s_patients_ageVue: _widgets_h_m_s_patients_age_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    h_m_s_patients_blood_typeVue: _widgets_h_m_s_patients_blood_type_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    h_m_s_appointments_timesVue: _widgets_h_m_s_appointments_times_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    h_m_s_appointments_for_current_and_last_monthVue: _widgets_h_m_s_appointments_for_current_and_last_month_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    h_m_s_total_amount_for_each_month_in_yearVue: _widgets_h_m_s_total_amount_for_each_month_in_year_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    h_m_s_total_and_paid_amount_for_each_doctorsVue: _widgets_h_m_s_total_and_paid_amount_for_each_doctors_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    h_m_s_total_and_paid_amount_for_each_company_insuranceVue: _widgets_h_m_s_total_and_paid_amount_for_each_company_insurance_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      title: "Welcome !",
      items: [{
        text: "Minton"
      }, {
        text: "Dashboards"
      }, {
        text: "Sales",
        active: true
      }],
      tableTitle: "HMS Statistics",
      productData: [],
      isLoader: false,
      statices: {}
    };
  },
  mounted: function mounted() {
    this.getStatices();
  },
  methods: {
    getStatices: function getStatices() {
      var _this = this;
      this.isLoader = true;
      _api_adminAxios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/h_m_s/dashboard").then(function (res) {
        var l = res.data.data;
        _this.statices = l;
      })["catch"](function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'error',
          title: "".concat(_this.$t('general.Error')),
          text: "".concat(_this.$t('general.Thereisanerrorinthesystem'))
        });
      })["finally"](function () {
        _this.isLoader = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Crm-widget.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Crm-widget.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Marketing-reports.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Marketing-reports.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Marketing-reports component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      series: [{
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20]
      }, {
        name: "Series 2",
        data: [20, 30, 40, 80, 20, 80]
      }, {
        name: "Series 3",
        data: [44, 76, 78, 13, 43, 10]
      }],
      chartOptions: {
        chart: {
          height: 274,
          type: "radar",
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: 0
        },
        fill: {
          opacity: 0.4
        },
        markers: {
          size: 0
        },
        legend: {
          show: false
        },
        colors: ["#3bafda", "#1abc9c", "#f7b84b"],
        labels: ["2011", "2012", "2013", "2014", "2015", "2016"]
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Portlet.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Portlet.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * portlet component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    headertitle: {
      type: String,
      "default": ""
    },
    portletclass: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      isVisible: true,
      showCollapse: true,
      isLoading: false
    };
  },
  methods: {
    refreshContent: function refreshContent() {
      var _this = this;
      this.isLoading = true;
      setTimeout(function () {
        _this.isLoading = false;
      }, 2000);
    },
    remove: function remove() {
      this.isVisible = false;
    },
    collapse: function collapse() {
      this.showCollapse = !this.showCollapse;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Products-sales.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Products-sales.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Products-sales component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      series: [{
        name: "Desktops",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
        name: "Laptops",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }],
      chartOptions: {
        chart: {
          type: "line",
          padding: {
            right: 0,
            left: 0
          },
          stacked: false,
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: [1, 2],
          curve: "smooth"
        },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        colors: ["#3bafda", "#1abc9c", "#f7b84b"],
        fill: {
          opacity: [0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ["01/01/2020", "02/01/2020", "03/01/2020", "04/01/2020", "05/01/2020", "06/01/2020", "07/01/2020", "08/01/2020", "09/01/2020", "10/01/2020", "11/01/2020"],
        markers: {
          size: 0
        },
        legend: {
          offsetY: 5
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          labels: {
            formatter: function formatter(val) {
              return val + "k";
            },
            offsetX: -10
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function formatter(y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " Dollars";
              }
              return y;
            }
          }
        },
        grid: {
          borderColor: "#f1f3fa",
          padding: {
            bottom: 10
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Portlet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portlet */ "./resources/js/components/widgets/Portlet.vue");

/**
 * Projections component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      colors: ["#3bafda", "#1abc9c", "#f7b84b", "#675aa9", "#f1556c", "#fd7e14"],
      series1: [],
      chartOptions1: {
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: 7
        },
        labels: [],
        colors: [],
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            }
          }
        }]
      },
      series3: [],
      chartOptions3: {
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: 7
        },
        labels: [],
        colors: [],
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            }
          }
        }]
      },
      series2: [],
      chartOptions2: {
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: 7
        },
        labels: [],
        colors: [],
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            }
          }
        }]
      },
      series4: [],
      chartOptions4: {
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: 7
        },
        labels: [],
        colors: [],
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            }
          }
        }]
      },
      series5: [],
      chartOptions5: {
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: 7
        },
        labels: [this.$t('general.Deletedathisrequest'), this.$t('general.Cancellationduetodeath'), this.$t('general.Cancellationaccordingtotheministerialdecision'), this.$t('general.WrittenoffaccordingtotheAuthorityletter'), this.$t('general.Writtenofffornonpayment')],
        colors: ["#3bafda", "#1abc9c", "#f7b84b", "#675aa9", "#f1556c"],
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            }
          }
        }]
      },
      series6: [],
      chartOptions6: {
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: 7
        },
        labels: [],
        colors: ["#3bafda", "#1abc9c", "#f7b84b", "#675aa9", "#f1556c"],
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            }
          }
        }]
      },
      series7: [],
      chartOptions7: {
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: 7
        },
        labels: [this.$t('general.SubscriptionsWaiting'), this.$t('general.SubscriptionsRejected')],
        colors: ["#675aa9", "#f1556c"],
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            }
          }
        }]
      }
    };
  },
  props: ['statices'],
  watch: {
    statices: function statices(newDa, old) {
      var _this = this;
      newDa.member_types_data.forEach(function (el, index) {
        _this.series1.push(el.percentage);
        _this.chartOptions1.labels.push(_this.$i18n.locale == 'ar' ? el.name : el.name_e);
        _this.chartOptions1.colors.push(_this.colors[index]);
      });
      newDa.financial_statuses_data.forEach(function (el, index) {
        _this.series3.push(el.percentage);
        _this.chartOptions3.labels.push(_this.$i18n.locale == 'ar' ? el.name : el.name_e);
        _this.chartOptions3.colors.push(_this.colors[index]);
      });
      newDa.member_permissions_data.forEach(function (el, index) {
        _this.series2.push(el.percentage);
        _this.chartOptions2.labels.push(_this.$i18n.locale == 'ar' ? el.name : el.name_e);
        _this.chartOptions2.colors.push(_this.colors[index]);
      });
      newDa.member_types.forEach(function (el, index) {
        _this.series4.push(el.percentage);
        _this.chartOptions4.labels.push(_this.$i18n.locale == 'ar' ? el.name : el.name_e);
        _this.chartOptions4.colors.push(_this.colors[index]);
      });
      newDa.sponsors_group.forEach(function (el, index) {
        _this.series6.push(el.percentage);
        _this.chartOptions6.labels.push(_this.$i18n.locale == 'ar' ? el.name : el.name_e);
        _this.chartOptions6.colors.push(_this.colors[index]);
      });
      this.series5 = [newDa.Percentage_6, newDa.Percentage_7, newDa.Percentage_8, newDa.Percentage_9, newDa.Percentage_18];
      this.series7 = [newDa.member_requests_waiting_percentage, newDa.member_requests_rejected_percentage];
    }
  },
  components: {
    Portlet: _Portlet__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Portlet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portlet */ "./resources/js/components/widgets/Portlet.vue");

/**
 * Projections component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      colors: ["#3bafda", "#1abc9c", "#f7b84b", "#675aa9", "#f1556c", "#fd7e14", "#02a8b5", "#98a6ad", "#323a46", "#f672a7", "#37cde6"],
      series1: [],
      chartOptions1: {
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: 7
        },
        labels: [],
        colors: [],
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            }
          }
        }]
      }
    };
  },
  props: ['statices'],
  watch: {
    statices: function statices(newDa, old) {
      var _this = this;
      newDa.unitsWithStatusWithDetailsCount.forEach(function (el, index) {
        _this.series1.push(el.percentage);
        _this.chartOptions1.labels.push(_this.$i18n.locale == 'ar' ? el.name : el.name_e);
        _this.chartOptions1.colors.push(_this.colors[index]);
      });
    }
  },
  components: {
    Portlet: _Portlet__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-history.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-history.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Revenue history component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      revenueData: [{
        marketplaces: "Themes Market",
        date: "Oct 15, 2018",
        tax: "$125.23",
        payout: "$5848.68",
        status: "Upcoming"
      }, {
        marketplaces: "Freelance",
        date: "Oct 12, 2018",
        tax: "$78.03",
        payout: "$5848.68",
        status: "Paid"
      }, {
        marketplaces: "Share Holding",
        date: "Oct 10, 2018",
        tax: "$358.24",
        payout: "$815.89",
        status: "Paid"
      }, {
        marketplaces: "Envato's Affiliates",
        date: "Oct 03, 2018",
        tax: "$18.78",
        payout: "$248.75",
        status: "Overdue"
      }, {
        marketplaces: "Marketing Revenue",
        date: "Sep 21, 2018",
        tax: "$185.36",
        payout: "$978.21",
        status: "Upcoming"
      }, {
        marketplaces: "Advertise Revenue",
        date: "Sep 15, 2018",
        tax: "$29.56",
        payout: "$358.10",
        status: "Paid"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-report.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-report.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Revenue-report component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
          stacked: true,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "25%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        zoom: {
          enabled: false
        },
        legend: {
          show: false
        },
        colors: ["#3bafda", "#e3eaef"],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          axisBorder: {
            show: false
          }
        },
        yaxis: {
          labels: {
            formatter: function formatter(val) {
              return val + "k";
            },
            offsetX: -15
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return "$" + val + "k";
            }
          }
        }
      },
      series: [{
        name: "Actual",
        data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
      }, {
        name: "Projection",
        data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Widget-chart component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    number: {
      type: Number,
      required: true,
      "default": 0
    },
    chartColor: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      chartOptions: {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        grid: {
          padding: {
            top: 10
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          width: 3
        },
        colors: [this.chartColor]
      },
      series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['appointments_for_current_month', 'appointments_for_last_month'],
  data: function data() {
    return {
      series: [],
      options: {
        chart: {
          type: 'bar',
          height: 320
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        yaxis: {
          title: {
            text: this.$t('general.Number of Appointments')
          }
        },
        xaxis: {
          categories: [this.$t('general.First Week'), this.$t('general.Second Week'), this.$t('general.Third Week'), this.$t('general.Fourth Week'), this.$t('general.Fifth Week')]
        }
      }
    };
  },
  watch: {
    appointments_for_current_month: {
      handler: function handler(newV, old) {
        var _this = this;
        setTimeout(function () {
          var weeks = ['First Week', 'Second Week', 'Third Week', 'Fourth Week', 'Fifth Week'];
          var current = [];
          var last = [];
          weeks.forEach(function (week) {
            var check_exists = 0;
            _this.appointments_for_current_month.forEach(function (element) {
              if (element.week == week) {
                check_exists = 1;
                current.push(element.count);
              }
            });
            if (check_exists == 0) current.push(0);
            check_exists = 0;
            _this.appointments_for_last_month.forEach(function (element) {
              if (element.week == week) {
                check_exists = 1;
                last.push(element.count);
              }
            });
            if (check_exists == 0) last.push(0);
          });
          _this.series = [{
            data: current,
            name: _this.$t("general.Current Month")
          }, {
            data: last,
            name: _this.$t("general.Last Month")
          }];
        }, 500);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['peak_appointment_periods'],
  data: function data() {
    return {
      series: [],
      options: {
        chart: {
          height: 350,
          type: 'rangeArea',
          animations: {
            speed: 500
          }
        },
        colors: ['#000'],
        dataLabels: {
          enabled: false,
          style: {
            fontSize: '20px',
            fontWeight: 'bold'
          }
        },
        fill: {
          opacity: [1]
        },
        forecastDataPoints: {
          count: 2
        },
        stroke: {
          curve: 'straight',
          width: [2]
        },
        legend: {
          show: true,
          customLegendItems: [''],
          inverseOrder: true
        },
        title: {
          text: ''
        },
        yaxis: {
          title: {
            text: this.$t('general.Number of Appointments')
          }
        },
        markers: {
          hover: {
            sizeOffset: 5
          }
        }
      }
    };
  },
  watch: {
    peak_appointment_periods: {
      handler: function handler(newV, old) {
        var data = [];
        this.peak_appointment_periods.forEach(function (element) {
          data.push({
            x: element.period_group,
            y: element.count
          });
        });
        this.series = [{
          type: 'line',
          name: '',
          data: data
        }];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['patient_group_by_age'],
  data: function data() {
    return {
      series: [],
      options: {
        chart: {
          type: "bar",
          height: 440,
          stacked: true
        },
        colors: ["#008FFB", "#FF4560"],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%"
          }
        },
        dataLabels: {
          enabled: false,
          style: {
            fontSize: '20px',
            fontWeight: 'bold'
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          title: {
            text: this.$t('general.Age')
          }
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function formatter(val) {
              return val;
            }
          },
          y: {
            formatter: function formatter(val) {
              return Math.abs(val);
            }
          }
        },
        title: {
          text: ''
        },
        xaxis: {
          categories: [],
          title: {
            text: this.$t('general.The Number')
          },
          labels: {
            formatter: function formatter(val) {
              return Math.abs(Math.round(val));
            }
          }
        }
      }
    };
  },
  watch: {
    patient_group_by_age: {
      handler: function handler(newV, old) {
        var _this = this;
        var max = 0;
        var males_data = [];
        var females_data = [];
        this.patient_group_by_age.forEach(function (element) {
          if (!_this.options.xaxis.categories.includes(element.age_group)) _this.options.xaxis.categories.push(element.age_group);
          if (element.gender == 'Male') males_data.push(element.count);else females_data.push(-element.count);
          if (element.count > max) max = element.count;
        });
        this.options.yaxis.min = -1 * max;
        this.options.yaxis.max = max;
        this.series = [{
          name: this.$t("general.Males"),
          data: males_data
        }, {
          name: this.$t("general.Females"),
          data: females_data
        }];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['patient_group_by_blood_type'],
  data: function data() {
    return {
      series: [],
      options: {
        chart: {
          width: 380,
          type: 'pie'
        },
        colors: ['#F44336', '#E91E63', '#9C27B0', '#065c08', '#1421b9', '#14b990', '#aeda3b', '#3bafda'],
        fill: {
          colors: ['#F44336', '#E91E63', '#9C27B0', '#065c08', '#1421b9', '#14b990', '#aeda3b', '#3bafda']
        },
        labels: [],
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '20px',
            fontWeight: 'bold'
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    };
  },
  watch: {
    patient_group_by_blood_type: {
      handler: function handler(newV, old) {
        var _this = this;
        this.patient_group_by_blood_type.forEach(function (element) {
          _this.series.push(parseInt(element.count));
          _this.options.labels.push(element.blood);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['total_amount_for_each_month_in_year'],
  data: function data() {
    return {
      series: [],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false,
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            colors: ['#1421b9']
          }
        },
        colors: ['#1421b9'],
        stroke: {
          curve: 'straight'
        },
        title: {
          align: 'left'
        },
        yaxis: {
          title: {
            text: this.$t('general.Amount in KD')
          }
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [this.$t('month.1'), this.$t('month.2'), this.$t('month.3'), this.$t('month.4'), this.$t('month.5'), this.$t('month.6'), this.$t('month.7'), this.$t('month.8'), this.$t('month.9'), this.$t('month.10'), this.$t('month.11'), this.$t('month.12')]
        }
      }
    };
  },
  watch: {
    total_amount_for_each_month_in_year: {
      handler: function handler(newV, old) {
        var _this = this;
        console.log(newV);
        setTimeout(function () {
          var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          var current = [];
          monthNames.forEach(function (month) {
            var check_exists = 0;
            _this.total_amount_for_each_month_in_year.forEach(function (element) {
              if (element.month == month) {
                check_exists = 1;
                current.push(element.total_amount);
              }
            });
            if (check_exists == 0) current.push(0);
            check_exists = 0;
          });
          _this.series = [{
            data: current
          }];
        }, 500);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['total_and_paid_amount_for_each_insurance_company'],
  data: function data() {
    return {
      series: [],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false,
          style: {
            fontSize: '20px',
            fontWeight: 'bold'
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          title: {
            text: this.$t('general.KD')
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return val;
            }
          }
        }
      }
    };
  },
  watch: {
    total_and_paid_amount_for_each_insurance_company: {
      handler: function handler(newV, old) {
        var _this = this;
        var doctors_names = [];
        this.series = [{
          data: [],
          name: this.$t('general.Total Amount')
        }, {
          data: [],
          name: this.$t('general.paid')
        }];
        this.total_and_paid_amount_for_each_insurance_company.forEach(function (element) {
          _this.series[0].data.push(element.total_amount);
          _this.series[1].data.push(element.total_paid);
          doctors_names.push(_this.$i18n.locale == 'ar' ? element.name : element.name_e);
        });
        this.options.xaxis.categories = doctors_names;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['total_and_paid_amount_for_each_doctors'],
  data: function data() {
    return {
      series: [],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false,
          style: {
            fontSize: '20px',
            fontWeight: 'bold'
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          title: {
            text: this.$t('general.KD')
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return val;
            }
          }
        }
      }
    };
  },
  watch: {
    total_and_paid_amount_for_each_doctors: {
      handler: function handler(newV, old) {
        var _this = this;
        this.series = [{
          data: [],
          name: this.$t("general.Total Amount")
        }, {
          data: [],
          name: this.$t("general.paid")
        }];
        var doctors_names = [];
        this.total_and_paid_amount_for_each_doctors.forEach(function (element) {
          _this.series[0].data.push(element.total_amount);
          _this.series[1].data.push(element.total_paid);
          doctors_names.push(_this.$i18n.locale == 'ar' ? element.name : element.name_e);
        });
        this.options.xaxis.categories = doctors_names;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_general_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general/Sidebar */ "./resources/js/components/general/Sidebar.vue");
/* harmony import */ var _components_general_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/general/Topbar */ "./resources/js/components/general/Topbar.vue");
/* harmony import */ var _components_general_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/general/Rightbar */ "./resources/js/components/general/Rightbar.vue");
/* harmony import */ var _components_general_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/general/Footer */ "./resources/js/components/general/Footer.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Detached layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {
    Sidebar: _components_general_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Topbar: _components_general_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_general_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_general_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu: function toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      if (this.isMenuCondensed) document.body.setAttribute("data-sidebar-size", "condensed");else document.body.removeAttribute("data-sidebar-size", "condensed");
      if (window.screen.width >= 992) {
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      } else {
        document.body.setAttribute("data-sidebar-size", "default");
        document.body.classList.toggle("sidebar-enable");
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      }
    }
  },
  mounted: function mounted() {
    document.body.setAttribute("data-layout-mode", "detached");
    document.body.setAttribute("data-sidebar-showuser", "true");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_general_Topbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general/Topbar */ "./resources/js/components/general/Topbar.vue");
/* harmony import */ var _components_general_Horizontal_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/general/Horizontal-navbar */ "./resources/js/components/general/Horizontal-navbar.vue");
/* harmony import */ var _components_general_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/general/Rightbar */ "./resources/js/components/general/Rightbar.vue");
/* harmony import */ var _components_general_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/general/Footer */ "./resources/js/components/general/Footer.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Horizontal layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {
    Topbar: _components_general_Topbar__WEBPACK_IMPORTED_MODULE_1__["default"],
    HorizontalNavbar: _components_general_Horizontal_navbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_general_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_general_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  mounted: function mounted() {
    document.body.setAttribute("data-layout-mode", "horizontal");
  },
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical */ "./resources/js/views/layouts/vertical.vue");
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal */ "./resources/js/views/layouts/horizontal.vue");
/* harmony import */ var _detached__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detached */ "./resources/js/views/layouts/detached.vue");
/* harmony import */ var _two_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./two-column */ "./resources/js/views/layouts/two-column.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Main layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Vertical: _vertical__WEBPACK_IMPORTED_MODULE_1__["default"],
    Horizontal: _horizontal__WEBPACK_IMPORTED_MODULE_2__["default"],
    Detached: _detached__WEBPACK_IMPORTED_MODULE_3__["default"],
    TwoColumn: _two_column__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed)
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_general_Two_column_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general/Two-column-sidebar */ "./resources/js/components/general/Two-column-sidebar.vue");
/* harmony import */ var _components_general_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/general/Topbar */ "./resources/js/components/general/Topbar.vue");
/* harmony import */ var _components_general_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/general/Rightbar */ "./resources/js/components/general/Rightbar.vue");
/* harmony import */ var _components_general_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/general/Footer */ "./resources/js/components/general/Footer.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Two-column layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TwoColumnSidebar: _components_general_Two_column_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Topbar: _components_general_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_general_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_general_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isMenuCondensed: false
    };
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu: function toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      if (this.isMenuCondensed) document.body.setAttribute("data-sidebar-size", "condensed");else document.body.removeAttribute("data-sidebar-size", "condensed");
      if (window.screen.width >= 992) {
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      } else {
        document.body.setAttribute("data-sidebar-size", "default");
        document.body.classList.toggle("sidebar-enable");
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      }
    }
  },
  mounted: function mounted() {
    document.body.setAttribute("data-layout-mode", "two-column");
    document.body.setAttribute("data-topbar-color", "light");
    document.body.removeAttribute("data-sidebar-showuser");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_general_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general/Sidebar */ "./resources/js/components/general/Sidebar.vue");
/* harmony import */ var _components_general_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/general/Topbar */ "./resources/js/components/general/Topbar.vue");
/* harmony import */ var _components_general_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/general/Rightbar */ "./resources/js/components/general/Rightbar.vue");
/* harmony import */ var _components_general_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/general/Footer */ "./resources/js/components/general/Footer.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Vertical layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Sidebar: _components_general_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Topbar: _components_general_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_general_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_general_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isMenuCondensed: false
    };
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  mounted: function mounted() {
    document.body.removeAttribute("data-layout-mode");
    document.body.removeAttribute("data-sidebar-showuser");
  },
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu: function toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      if (this.isMenuCondensed) document.body.setAttribute("data-sidebar-size", "condensed");else document.body.removeAttribute("data-sidebar-size", "condensed");
      if (window.screen.width >= 992) {
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      } else {
        document.body.setAttribute("data-sidebar-size", "default");
        document.body.classList.toggle("sidebar-enable");
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helper/global.js */ "./resources/js/helper/global.js");
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/main */ "./resources/js/views/layouts/main.vue");
/* harmony import */ var _components_statistic_booking_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/statistic/booking.vue */ "./resources/js/components/statistic/booking.vue");
/* harmony import */ var _components_statistic_club_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/statistic/club.vue */ "./resources/js/components/statistic/club.vue");
/* harmony import */ var _components_statistic_h_m_s_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/statistic/h_m_s.vue */ "./resources/js/components/statistic/h_m_s.vue");
/* harmony import */ var _components_statistic_defaultDashboard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/statistic/defaultDashboard.vue */ "./resources/js/components/statistic/defaultDashboard.vue");
/* harmony import */ var _helper_permission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helper/permission */ "./resources/js/helper/permission.js");








/**
 * Sales-Dashboard component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Layout: _layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"],
    clubDashboard: _components_statistic_club_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    hmsDashboard: _components_statistic_h_m_s_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    bookingDashboard: _components_statistic_booking_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    defaultDashboard: _components_statistic_defaultDashboard_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      selectedParents: _helper_global_js__WEBPACK_IMPORTED_MODULE_0__.selectedParents.value
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      return (0,_helper_permission__WEBPACK_IMPORTED_MODULE_6__["default"])(vm, "Dashboard", "Dashboard");
    });
  },
  mounted: function mounted() {
    // this.selectedParents = selectedParents.value
  },
  watch: {
    selectedParentsComputed: {
      handler: function handler(newV, old) {
        console.log(_helper_global_js__WEBPACK_IMPORTED_MODULE_0__.selectedParents.value);
        this.selectedParents = _helper_global_js__WEBPACK_IMPORTED_MODULE_0__.selectedParents.value;
      }
    }
  },
  computed: {
    selectedParentsComputed: function selectedParentsComputed() {
      return _helper_global_js__WEBPACK_IMPORTED_MODULE_0__.selectedParents.value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=template&id=57a7a2cd&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=template&id=57a7a2cd& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("footer", {
    staticClass: "footer"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 color"
  }, [_vm._v("\r\n                " + _vm._s(new Date().getFullYear()) + " © Al Shamel Al Araby\r\n                "), _c("span", {
    staticStyle: {
      margin: "0px 30px"
    }
  }, [_vm._v(_vm._s(_vm.version))])]), _vm._v(" "), _vm._m(0)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "text-md-right footer-links d-none d-sm-block"
  }, [_c("a", {
    staticClass: "color",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("About Us")]), _vm._v(" "), _c("a", {
    staticClass: "color",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("Help")]), _vm._v(" "), _c("a", {
    staticClass: "color",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("Contact Us")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Horizontal-navbar.vue?vue&type=template&id=2d453397&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Horizontal-navbar.vue?vue&type=template&id=2d453397& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "topnav"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("nav", {
    staticClass: "navbar navbar-light navbar-expand-lg topnav-menu"
  }, [_c("div", {
    staticClass: "collapse navbar-collapse",
    attrs: {
      id: "topnav-menu-content"
    }
  }, [_c("ul", {
    staticClass: "navbar-nav"
  }, _vm._l(_vm.menuItems, function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "nav-item dropdown"
    }, [!item.subItems ? _c("router-link", {
      staticClass: "nav-link dropdown-toggle arrow-none side-nav-link-ref",
      attrs: {
        tag: "a",
        to: item.link
      }
    }, [_c("i", {
      "class": "".concat(item.icon, " mr-1")
    }), _vm._v("\r\n                                " + _vm._s(_vm.$t(item.label)) + "\r\n                            ")]) : _vm._e(), _vm._v(" "), item.subItems ? _c("a", {
      staticClass: "nav-link dropdown-toggle arrow-none",
      attrs: {
        href: "javascript: void(0);",
        id: "topnav-components",
        role: "button"
      },
      on: {
        click: _vm.onMenuClick
      }
    }, [_c("i", {
      "class": "".concat(item.icon, " mr-1")
    }), _vm._v("\r\n                                " + _vm._s(_vm.$t(item.label)) + "\r\n                                "), _c("div", {
      staticClass: "arrow-down"
    })]) : _vm._e(), _vm._v(" "), _vm.hasItems(item) ? _c("div", {
      staticClass: "dropdown-menu row",
      attrs: {
        "aria-labelledby": "topnav-dashboard"
      }
    }, [_vm._l(item.subItems, function (subitem, index) {
      return [!_vm.hasItems(subitem) ? _c("router-link", {
        key: index,
        staticClass: "col dropdown-item side-nav-link-ref",
        attrs: {
          to: subitem.link
        }
      }, [_vm._v(_vm._s(_vm.$t(subitem.label)))]) : _vm._e(), _vm._v(" "), _vm.hasItems(subitem) ? _c("div", {
        key: index,
        staticClass: "dropdown"
      }, [_c("a", {
        staticClass: "dropdown-item dropdown-toggle",
        attrs: {
          href: "javascript: void(0);"
        },
        on: {
          click: _vm.onMenuClick
        }
      }, [_vm._v("\r\n                                            " + _vm._s(_vm.$t(subitem.label)) + "\r\n                                            "), _c("div", {
        staticClass: "arrow-down"
      })]), _vm._v(" "), _c("div", {
        staticClass: "dropdown-menu"
      }, _vm._l(subitem.subItems, function (subSubitem, index) {
        return _c("router-link", {
          key: index,
          staticClass: "dropdown-item side-nav-link-ref",
          attrs: {
            to: subSubitem.link
          }
        }, [_vm._v(_vm._s(_vm.$t(subSubitem.label)))]);
      }), 1)]) : _vm._e()];
    })], 2) : _vm._e()], 1);
  }), 0)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=template&id=23f830c9&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=template&id=23f830c9& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "page-title-box",
    "class": {
      "page-title-box-alt": _vm.layoutType !== "vertical" && _vm.layoutType !== "two-column"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Rightbar.vue?vue&type=template&id=743db529&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Rightbar.vue?vue&type=template&id=743db529& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.config,
      expression: "config"
    }],
    staticClass: "right-bar"
  }, [_c("simplebar", {
    staticClass: "h-100"
  }, [_c("b-tabs", {
    staticClass: "nav-bordered",
    attrs: {
      "content-class": "pt-0",
      justified: ""
    }
  }, [_c("b-tab", {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("i", {
          staticClass: "mdi mdi-message-text-outline d-block font-22 my-1"
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("form", {
    staticClass: "search-bar p-3"
  }, [_c("div", {
    staticClass: "position-relative"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Search..."
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "mdi mdi-magnify"
  })])]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium px-3 mt-2 text-uppercase"
  }, [_vm._v("\n            Group Chats\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "p-2"
  }, [_c("a", {
    staticClass: "text-reset notification-item pl-3 mb-2 d-block",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-checkbox-blank-circle-outline mr-1 text-success"
  }), _vm._v(" "), _c("span", {
    staticClass: "mb-0 mt-1"
  }, [_vm._v("App Development")])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item pl-3 mb-2 d-block",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-checkbox-blank-circle-outline mr-1 text-warning"
  }), _vm._v(" "), _c("span", {
    staticClass: "mb-0 mt-1"
  }, [_vm._v("Office Work")])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item pl-3 mb-2 d-block",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-checkbox-blank-circle-outline mr-1 text-danger"
  }), _vm._v(" "), _c("span", {
    staticClass: "mb-0 mt-1"
  }, [_vm._v("Personal Group")])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item pl-3 d-block",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-checkbox-blank-circle-outline mr-1"
  }), _vm._v(" "), _c("span", {
    staticClass: "mb-0 mt-1"
  }, [_vm._v("Freelance")])])]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium px-3 mt-3 text-uppercase"
  }, [_vm._v("\n            Favourites\n            "), _c("a", {
    staticClass: "font-18 text-danger",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "float-right mdi mdi-plus-circle"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "p-2"
  }, [_c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-10.jpg */ "./resources/js/assets/images/users/avatar-10.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Andrew Mackie")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      It will seem like simplified English.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-1.jpg */ "./resources/js/assets/images/users/avatar-1.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Rory Dalyell")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      To an English person, it will seem like simplified\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status busy"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-9.jpg */ "./resources/js/assets/images/users/avatar-9.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Jaxon Dunhill")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      To achieve this, it would be necessary.\n                    ")])])])])])]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium px-3 mt-3 text-uppercase"
  }, [_vm._v("\n            Other Chats\n            "), _c("a", {
    staticClass: "font-18 text-danger",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "float-right mdi mdi-plus-circle"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "p-2 pb-4"
  }, [_c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status online"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-2.jpg */ "./resources/js/assets/images/users/avatar-2.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Jackson Therry")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      Everyone realizes why a new common language.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status away"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-4.jpg */ "./resources/js/assets/images/users/avatar-4.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Charles Deakin")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      The languages only differ in their grammar.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status online"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-5.jpg */ "./resources/js/assets/images/users/avatar-5.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Ryan Salting")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      If several languages coalesce the grammar of the\n                      resulting.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status online"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-6.jpg */ "./resources/js/assets/images/users/avatar-6.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Sean Howse")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      It will seem like simplified English.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status busy"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-7.jpg */ "./resources/js/assets/images/users/avatar-7.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Dean Coward")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      The new common language will be more simple.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status away"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-8.jpg */ "./resources/js/assets/images/users/avatar-8.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Hayley East")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      One could refuse to pay expensive translators.\n                    ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-3"
  }, [_c("a", {
    staticClass: "btn btn-sm btn-white",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-spin mdi-loading mr-2"
  }), _vm._v("\n                Load more\n              ")])])])]), _vm._v(" "), _c("b-tab", {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("i", {
          staticClass: "mdi mdi-format-list-checkbox d-block font-22 my-1"
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium p-3 m-0 text-uppercase"
  }, [_vm._v("\n            Working Tasks\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "px-2"
  }, [_c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                App Development"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("75%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      width: "75%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "75",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                Database Repair"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("37%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      width: "37%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "37",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                Backup Create"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("52%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-warning",
    staticStyle: {
      width: "52%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "52",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium px-3 mb-0 mt-4 text-uppercase"
  }, [_vm._v("\n            Upcoming Tasks\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "p-2"
  }, [_c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                Sales Reporting"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("12%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      width: "12%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "12",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                Redesign Website"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("67%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-primary",
    staticStyle: {
      width: "67%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "67",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                New Admin Design"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("84%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      width: "84%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "84",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "p-3 mt-2"
  }, [_c("a", {
    staticClass: "btn btn-success btn-block waves-effect waves-light",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_vm._v("Create Task")])])]), _vm._v(" "), _c("b-tab", {
    attrs: {
      active: ""
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("i", {
          staticClass: "mdi mdi-cog-outline d-block font-22 my-1"
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium px-3 m-0 py-2 font-13 text-uppercase bg-light"
  }, [_c("span", {
    staticClass: "d-block py-1"
  }, [_vm._v("Theme Settings")])]), _vm._v(" "), _c("div", {
    staticClass: "p-3"
  }, [_c("div", {
    staticClass: "alert alert-warning",
    attrs: {
      role: "alert"
    }
  }, [_c("strong", [_vm._v("Customize ")]), _vm._v(" the overall color scheme, sidebar\n              menu, etc.\n            ")]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("Layout")]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changeLayout($event);
      }
    },
    model: {
      value: _vm.layout,
      callback: function callback($$v) {
        _vm.layout = $$v;
      },
      expression: "layout"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "vertical"
    }
  }, [_vm._v("Vertical")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "horizontal"
    }
  }, [_vm._v("Horizontal")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "detached"
    }
  }, [_vm._v("Detached")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "two-column"
    }
  }, [_vm._v("Two Column")])], 1), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("Width")]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changeWidth($event);
      }
    },
    model: {
      value: _vm.width,
      callback: function callback($$v) {
        _vm.width = $$v;
      },
      expression: "width"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "fluid"
    }
  }, [_vm._v("Fluid")]), _vm._v(" "), _c("b-form-radio", {
    attrs: {
      value: "boxed"
    }
  }, [_vm._v("Boxed")])], 1), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("Topbar")]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changeTopbartype($event);
      }
    },
    model: {
      value: _vm.topbar,
      callback: function callback($$v) {
        _vm.topbar = $$v;
      },
      expression: "topbar"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "dark"
    }
  }, [_vm._v("Dark")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "light"
    }
  }, [_vm._v("Light")])], 1), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("\n              Menus Positon "), _c("small", [_vm._v("(Leftsidebar and Topbar)")])]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changemenuPosition($event);
      }
    },
    model: {
      value: _vm.menu,
      callback: function callback($$v) {
        _vm.menu = $$v;
      },
      expression: "menu"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "fixed"
    }
  }, [_vm._v("Fixed")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "scrollable"
    }
  }, [_vm._v("Scrollable")])], 1), _vm._v(" "), _vm.layout !== "horizontal" ? _c("div", [_c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("\n                Left Sidebar Color\n              ")]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changeType($event);
      }
    },
    model: {
      value: _vm.sidebarType,
      callback: function callback($$v) {
        _vm.sidebarType = $$v;
      },
      expression: "sidebarType"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "dark"
    }
  }, [_vm._v("Dark")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "light"
    }
  }, [_vm._v("Light")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "brand"
    }
  }, [_vm._v("Brand")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "gradient"
    }
  }, [_vm._v("Gradient")])], 1), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("\n                Left Sidebar Size\n              ")]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changeSize($event);
      }
    },
    model: {
      value: _vm.sidebarSize,
      callback: function callback($$v) {
        _vm.sidebarSize = $$v;
      },
      expression: "sidebarSize"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "default"
    }
  }, [_vm._v("Default")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "condensed"
    }
  }, [_vm._v("Condensed "), _c("small", [_vm._v("(Extra Small size)")])]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "compact"
    }
  }, [_vm._v("Compact "), _c("small", [_vm._v("(Small size)")])])], 1)], 1) : _vm._e(), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("\n              Sidebar User Info\n            ")]), _vm._v(" "), _c("b-form-checkbox", {
    attrs: {
      name: "check-button",
      "switch": ""
    },
    on: {
      input: function input($event) {
        return _vm.enableInfo();
      }
    },
    model: {
      value: _vm.checked,
      callback: function callback($$v) {
        _vm.checked = $$v;
      },
      expression: "checked"
    }
  }, [_vm._v("\n              Enable\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-block mt-4",
    attrs: {
      id: "resetBtn"
    },
    on: {
      click: function click($event) {
        return _vm.reset();
      }
    }
  }, [_vm._v("\n              Reset to Default\n            ")]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-danger btn-block mt-2",
    attrs: {
      href: "https://wrapbootstrap.com/theme/minton-admin-dashboard-landing-template-WB0858DB6?ref=themesbrand",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-basket mr-1"
  }), _vm._v(" Purchase Now")])], 1)])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "rightbar-overlay"
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=template&id=45f7331a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=template&id=45f7331a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "left-side-menu"
  }, [_c("div", {
    staticClass: "logo-box"
  }, [_c("router-link", {
    staticClass: "logo logo-dark text-center",
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-sm"
  }, [_c("img", {
    attrs: {
      src: "/images/shamel-logo-006.png",
      alt: "",
      height: "24"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: "/images/shamel-logo-006.png",
      alt: "",
      height: "20"
    }
  })])]), _vm._v(" "), _c("router-link", {
    staticClass: "logo logo-light text-center",
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-sm"
  }, [_c("img", {
    attrs: {
      src: "/images/shamel-logo-006.png",
      alt: "",
      height: "24"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: "/images/shamel-logo-006.png",
      alt: "",
      height: "20"
    }
  })])])], 1), _vm._v(" "), _c("simplebar", {
    staticClass: "h-100",
    attrs: {
      "data-simplebar": ""
    }
  }, [_c("div", {
    staticClass: "user-box text-center"
  }, [_c("img", {
    staticClass: "rounded-circle avatar-md",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-1.jpg */ "./resources/js/assets/images/users/avatar-1.jpg"),
      alt: "user-img",
      title: "Mat Helme"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "dropdown"
  }, [_c("a", {
    staticClass: "text-reset dropdown-toggle h5 mt-2 mb-1 d-block",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("Nik Patel")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu user-pro-dropdown"
  }, [_c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "fe-user mr-1"
  }), _vm._v(" "), _c("span", [_vm._v("My Account")])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "fe-settings mr-1"
  }), _vm._v(" "), _c("span", [_vm._v("Settings")])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "fe-lock mr-1"
  }), _vm._v(" "), _c("span", [_vm._v("Lock Screen")])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "fe-log-out mr-1"
  }), _vm._v(" "), _c("span", [_vm._v("Logout")])])])]), _vm._v(" "), _c("p", {
    staticClass: "text-reset"
  }, [_vm._v("Admin Head")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "sidebar-menu"
    }
  }, [_c("recursive_menu", {
    attrs: {
      menuItems: _vm.menuItems,
      companies: _vm.companies
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=template&id=5c897250&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=template&id=5c897250& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.isLoader ? _c("loader", {
    attrs: {
      size: "large"
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "navbar-custom"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("ul", {
    staticClass: "list-unstyled topnav-menu float-right mb-0"
  }, [_c("li", {
    staticClass: "dropdown d-lg-inline-block"
  }, [_c("a", {
    staticClass: "nav-link dropdown-toggle arrow-none waves-effect waves-light",
    attrs: {
      "data-toggle": "fullscreen",
      href: "#"
    },
    on: {
      click: _vm.initFullScreen
    }
  }, [_c("i", {
    staticClass: "fe-maximize noti-icon"
  })])]), _vm._v(" "), _c("b-nav-item-dropdown", {
    staticClass: "d-lg-inline-block",
    attrs: {
      variant: "white",
      right: "",
      "toggle-class": "header-item"
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("img", {
          attrs: {
            src: _vm.flag,
            alt: "Header Language",
            height: "16"
          }
        }), _vm._v("\n                        " + _vm._s(_vm.text) + "\n                    ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._l(_vm.languages, function (entry, i) {
    return _c("b-dropdown-item", {
      key: "Lang".concat(i),
      staticClass: "notify-item",
      attrs: {
        value: entry,
        "link-class": {
          active: entry.language === _vm.current_language
        }
      },
      on: {
        click: function click($event) {
          return _vm.setLanguage(entry.language, entry.title, entry.flag);
        }
      }
    }, [_c("img", {
      staticClass: "mr-1",
      attrs: {
        src: "".concat(entry.flag),
        alt: "user-image",
        height: "12"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "align-middle"
    }, [_vm._v(_vm._s(entry.title))])]);
  })], 2), _vm._v(" "), _c("Notification"), _vm._v(" "), _c("b-nav-item-dropdown", {
    staticClass: "notification-list topbar-dropdown",
    attrs: {
      right: "",
      "menu-class": "profile-dropdown",
      "toggle-class": "p-0"
    }
  }, [_c("template", {
    staticClass: "nav-link dropdown-toggle",
    slot: "button-content"
  }, [_c("div", {
    staticClass: "nav-user mr-0"
  }, [_c("img", {
    staticClass: "rounded-circle",
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/users/avatar-1.jpg */ "./resources/js/assets/images/users/avatar-1.jpg"),
      alt: "user-image"
    }
  }), _vm._v(" "), _vm.$store.state.auth.type == "admin" ? _c("span", {
    staticClass: "pro-user-name ml-1"
  }, [_vm._v("\n                                " + _vm._s(_vm.$i18n.locale ? _vm.$store.getters["auth/partner"].name : _vm.$store.getters["auth/partner"].name_e) + "\n                                "), _c("i", {
    staticClass: "mdi mdi-chevron-down"
  })]) : _c("span", {
    staticClass: "pro-user-name ml-1"
  }, [_vm._v("\n                                " + _vm._s(_vm.$i18n.locale ? _vm.$store.state.auth.user.name : _vm.$store.state.auth.user.name_e) + "\n                                "), _c("i", {
    staticClass: "mdi mdi-chevron-down"
  })])])]), _vm._v(" "), _c("b-dropdown-header", [_c("h6", {
    staticClass: "text-overflow m-0 py-2"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("navbar.dropdown.name.list.greet")) + "\n                        ")])]), _vm._v(" "), _c("b-dropdown-item", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "remixicon-account-circle-line"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.account")))])]), _vm._v(" "), _c("b-dropdown-item", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "remixicon-settings-3-line"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.settings")))])]), _vm._v(" "), _c("b-dropdown-item", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "remixicon-lock-line"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.lockscreen")))])]), _vm._v(" "), _c("b-dropdown-divider"), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "javascript:void(0)"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.logout.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fe-log-out mr-1"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.logout")))])])], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "logo-box"
  }, [_c("router-link", {
    staticClass: "logo logo-dark text-center",
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-sm"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/logo-sm-dark.png */ "./resources/js/assets/images/logo-sm-dark.png"),
      alt: "",
      height: "24"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/logo-dark.png */ "./resources/js/assets/images/logo-dark.png"),
      alt: "",
      height: "20"
    }
  })])]), _vm._v(" "), _c("router-link", {
    staticClass: "logo logo-light text-center",
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-sm"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/logo-sm.png */ "./resources/js/assets/images/logo-sm.png"),
      alt: "",
      height: "24"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/logo-light.png */ "./resources/js/assets/images/logo-light.png"),
      alt: "",
      height: "20"
    }
  })])])], 1), _vm._v(" "), _c("ul", {
    staticClass: "list-unstyled topnav-menu topnav-menu-left m-0"
  }, [_c("li", [_c("button", {
    staticClass: "button-menu-mobile waves-effect waves-light",
    on: {
      click: _vm.toggleMenu
    }
  }, [_c("i", {
    staticClass: "fe-menu"
  })])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "navbar-toggle nav-link",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#topnav-menu-content"
    },
    on: {
      click: function click($event) {
        return _vm.horizonalmenu();
      }
    }
  }, [_vm._m(0)])]), _vm._v(" "), [_vm.$store.state.auth.parentModule.length > 0 ? _c("li", {
    staticClass: "nav-route-related d-none d-md-block"
  }, [_c("div", [_c("ul", {
    staticClass: "list-unstyled"
  }, _vm._l(_vm.$store.state.auth.parentModule, function (prog, index) {
    return _c("li", {
      key: index,
      "class": ["d-inline"],
      staticStyle: {
        margin: "0 0.5rem"
      }
    }, [_c("b-dropdown", {
      ref: "dropdown",
      refInFor: true,
      attrs: {
        variant: _vm.selectedParents.value.length && _vm.selectedParents.value[0] == prog.id ? "secondary" : "primary",
        html: (prog.icon ? "<i class='".concat(prog.icon, "' style='background:none!important;color:#000'></i> ") : "") + (_vm.$i18n.locale == "ar" ? prog.name : prog.name_e)
      }
    }, [_vm._l(prog.modules, function (prog_module, index) {
      return [prog_module.isUserTopBar || _vm.$store.state.auth.type == "admin" ? _c("b-dropdown-item", {
        "class": _vm.selectedParents.value.length && _vm.selectedParents.value[1] == prog_module.project_program_module.id ? "selected-program" : "",
        on: {
          click: function click($event) {
            $event.preventDefault();
            return _vm.getMenu(prog.id, prog_module.project_program_module.id, prog_module.project_program_module.module_dashboard_id);
          }
        }
      }, [_c("i", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: prog_module.project_program_module.icon,
          expression: "prog_module.project_program_module.icon"
        }],
        "class": prog_module.project_program_module.icon,
        staticStyle: {
          background: "none!important",
          color: "#000"
        }
      }), _vm._v(" " + _vm._s(_vm.$i18n.locale == "ar" ? prog_module.project_program_module.name : prog_module.project_program_module.name_e) + "\n                                            ")]) : _vm._e()];
    })], 2)], 1);
  }), 0)])]) : _vm._e()]], 2), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "lines"
  }, [_c("span"), _vm._v(" "), _c("span"), _vm._v(" "), _c("span")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Two-column-sidebar.vue?vue&type=template&id=15b93e38&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Two-column-sidebar.vue?vue&type=template&id=15b93e38& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "left-side-menu"
  }, [_c("div", {
    staticClass: "h-100"
  }, [_c("div", {
    staticClass: "sidebar-content"
  }, [_c("simplebar", {
    staticClass: "sidebar-icon-menu h-100",
    attrs: {
      "data-simplebar": ""
    }
  }, [_c("a", {
    staticClass: "logo",
    attrs: {
      href: "/"
    }
  }, [_c("span", [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/logo-sm.png */ "./resources/js/assets/images/logo-sm.png"),
      alt: "",
      height: "28"
    }
  })])]), _vm._v(" "), _c("nav", {
    staticClass: "nav flex-column",
    attrs: {
      id: "two-col-sidenav-main"
    }
  }, [_c("a", {
    staticClass: "nav-link",
    "class": [_vm.activetab === 1 ? "active" : ""],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "Dashboard",
      "data-trigger": "hover"
    },
    on: {
      click: function click($event) {
        _vm.activetab = 1;
      }
    }
  }, [_c("i", {
    staticClass: "ri-dashboard-line"
  })]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    "class": [_vm.activetab === 2 ? "active" : ""],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "Apps",
      "data-trigger": "hover"
    },
    on: {
      click: function click($event) {
        _vm.activetab = 2;
      }
    }
  }, [_c("i", {
    staticClass: "ri-apps-2-line"
  })]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    "class": [_vm.activetab === 3 ? "active" : ""],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "Pages",
      "data-trigger": "hover"
    },
    on: {
      click: function click($event) {
        _vm.activetab = 3;
      }
    }
  }, [_c("i", {
    staticClass: "ri-pages-line"
  })]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    "class": [_vm.activetab === 4 ? "active" : ""],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "UI Elements",
      "data-trigger": "hover"
    },
    on: {
      click: function click($event) {
        _vm.activetab = 4;
      }
    }
  }, [_c("i", {
    staticClass: "ri-pencil-ruler-2-line"
  })]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    "class": [_vm.activetab === 5 ? "active" : ""],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "Components",
      "data-trigger": "hover"
    },
    on: {
      click: function click($event) {
        _vm.activetab = 5;
      }
    }
  }, [_c("i", {
    staticClass: "ri-stack-line"
  })]), _vm._v(" "), _c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/widgets"
    }
  }, [_c("i", {
    staticClass: "ri-honour-line align-middle"
  })])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "sidebar-main-menu"
  }, [_c("simplebar", {
    staticClass: "h-100",
    attrs: {
      id: "two-col-menu",
      "data-simplebar": ""
    }
  }, [_vm.activetab === 1 ? _c("div", {
    staticClass: "twocolumn-menu-item d-block",
    attrs: {
      id: "dashboard"
    }
  }, [_c("div", {
    staticClass: "title-box"
  }, [_c("h5", {
    staticClass: "menu-title"
  }, [_vm._v("Dashboards")]), _vm._v(" "), _c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "home"
      }
    }
  }, [_vm._v("\r\n                                        Sales\r\n                                    ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: _defineProperty({
      to: {
        name: "crm-dashboard"
      }
    }, "to", "/dashboard/crm")
  }, [_vm._v("\r\n                                        CRM\r\n                                    ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: _defineProperty({
      to: "/dashboard/analytics"
    }, "to", {
      name: "analytics-dashboard"
    })
  }, [_vm._v("\r\n                                        Analytics\r\n                                    ")])], 1)])])]) : _vm._e(), _vm._v(" "), _vm.activetab === 2 ? _c("div", {
    staticClass: "twocolumn-menu-item d-block",
    attrs: {
      id: "apps"
    }
  }, [_c("h5", {
    staticClass: "menu-title"
  }, [_vm._v("Apps")]), _vm._v(" "), _c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "calendar"
      }
    }
  }, [_vm._v("\r\n                                    Calendar\r\n                                ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "chat"
      }
    }
  }, [_vm._v("\r\n                                    Chat\r\n                                ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarEcommerce",
      modifiers: {
        sidebarEcommerce: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Ecommerce")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarEcommerce"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "products"
      }
    }
  }, [_vm._v("\r\n                                                Products List\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "products-grid"
      }
    }
  }, [_vm._v("\r\n                                                Products Grid\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "product-detail"
      }
    }
  }, [_vm._v("\r\n                                                Product Detail\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "product-create"
      }
    }
  }, [_vm._v("\r\n                                                Create Product\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "customers"
      }
    }
  }, [_vm._v("\r\n                                                Customers\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "orders"
      }
    }
  }, [_vm._v("\r\n                                                Orders\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "order-detail"
      }
    }
  }, [_vm._v("\r\n                                                Order Detail\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "sellers"
      }
    }
  }, [_vm._v("\r\n                                                Sellers\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "cart"
      }
    }
  }, [_vm._v("\r\n                                                Shopping Cart\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "checkout"
      }
    }
  }, [_vm._v("\r\n                                                Checkout\r\n                                            ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarEmail",
      modifiers: {
        sidebarEmail: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "#sidebarEmail",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Email")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarEmail"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "email-inbox"
      }
    }
  }, [_vm._v("\r\n                                                Inbox\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "reademail"
      }
    }
  }, [_vm._v("\r\n                                                Read Email\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: _defineProperty({
      to: "/email/templates"
    }, "to", {
      name: "email-templates"
    })
  }, [_vm._v("\r\n                                                Email Templates\r\n                                            ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: _defineProperty({
      to: "companies"
    }, "to", {
      name: ""
    })
  }, [_vm._v("\r\n                                    Companies\r\n                                ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarTasks",
      modifiers: {
        sidebarTasks: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "#sidebarTasks",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Tasks")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarTasks"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "task-list"
      }
    }
  }, [_vm._v("\r\n                                                List\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "task-detail"
      }
    }
  }, [_vm._v("\r\n                                                Details\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "kanban-board"
      }
    }
  }, [_vm._v("\r\n                                                Kanban Board\r\n                                            ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarContacts",
      modifiers: {
        sidebarContacts: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Contacts")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarContacts"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "contacts-list"
      }
    }
  }, [_vm._v("\r\n                                                Members List\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "contacts-profile"
      }
    }
  }, [_vm._v("\r\n                                                Profile\r\n                                            ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "file-manager"
      }
    }
  }, [_vm._v("\r\n                                    File Manager\r\n                                ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "tickets"
      }
    }
  }, [_vm._v("\r\n                                    Tickets\r\n                                ")])], 1)])]) : _vm._e(), _vm._v(" "), _vm.activetab === 3 ? _c("div", {
    staticClass: "twocolumn-menu-item d-block",
    attrs: {
      id: "pages"
    }
  }, [_c("div", {
    staticClass: "title-box"
  }, [_c("h5", {
    staticClass: "menu-title"
  }, [_vm._v("Pages")]), _vm._v(" "), _c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-starter"
      }
    }
  }, [_vm._v("Starter")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-timeline"
      }
    }
  }, [_vm._v("Timeline")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-sitemap"
      }
    }
  }, [_vm._v("Sitemap")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-invoice"
      }
    }
  }, [_vm._v("Invoice")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-faqs"
      }
    }
  }, [_vm._v("FAQs")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-search-results"
      }
    }
  }, [_vm._v("Search Results")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-pricing"
      }
    }
  }, [_vm._v("Pricing")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-maintenance"
      }
    }
  }, [_vm._v("Maintenance")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-coming-soon"
      }
    }
  }, [_vm._v("Coming Soon")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-lightbox"
      }
    }
  }, [_vm._v("Lightbox")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarAuth",
      modifiers: {
        sidebarAuth: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Auth Pages")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    staticClass: "collapse",
    attrs: {
      id: "sidebarAuth"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-login-1"
      }
    }
  }, [_vm._v("Log In")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-login-2"
      }
    }
  }, [_vm._v("Log In 2")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-register-1"
      }
    }
  }, [_vm._v("Register")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-register-2"
      }
    }
  }, [_vm._v("Register 2")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-signin-signup"
      }
    }
  }, [_vm._v("Signin - Signup")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-signin-signup-2"
      }
    }
  }, [_vm._v("Signin - Signup 2")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-recoverpwd"
      }
    }
  }, [_vm._v("Recover Password")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-recoverpwd-2"
      }
    }
  }, [_vm._v("Recover Password 2")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-lock-screen"
      }
    }
  }, [_vm._v("Lock Screen")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-lock-screen-2"
      }
    }
  }, [_vm._v("Lock Screen 2")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-logout-1"
      }
    }
  }, [_vm._v("Logout")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-logout-2"
      }
    }
  }, [_vm._v("Logout 2")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarErrors",
      modifiers: {
        sidebarErrors: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_vm._v("\r\n                                        Error Pages\r\n                                        "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarErrors"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "error-404"
      }
    }
  }, [_vm._v("Error 404")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "error-404-alt"
      }
    }
  }, [_vm._v("Error 404-alt")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "error-500"
      }
    }
  }, [_vm._v("Error 500")])], 1)])])], 1)])])]) : _vm._e(), _vm._v(" "), _vm.activetab === 4 ? _c("div", {
    staticClass: "twocolumn-menu-item d-block",
    attrs: {
      id: "uielements"
    }
  }, [_c("div", {
    staticClass: "title-box"
  }, [_c("h5", {
    staticClass: "menu-title"
  }, [_vm._v("UI Elements")]), _vm._v(" "), _c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-avatars"
      }
    }
  }, [_vm._v("Avatars")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-buttons"
      }
    }
  }, [_vm._v("Buttons")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-cards"
      }
    }
  }, [_vm._v("Cards")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-carousel"
      }
    }
  }, [_vm._v("Carousel")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-dropdowns"
      }
    }
  }, [_vm._v("Dropdowns")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-video"
      }
    }
  }, [_vm._v("Embed Video")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-general"
      }
    }
  }, [_vm._v("General UI")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-grid"
      }
    }
  }, [_vm._v("Grid")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-images"
      }
    }
  }, [_vm._v("Images")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-list-group"
      }
    }
  }, [_vm._v("List Group")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-modals"
      }
    }
  }, [_vm._v("Modals")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-notifications"
      }
    }
  }, [_vm._v("Notifications")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-portlets"
      }
    }
  }, [_vm._v("Portlets")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-progress"
      }
    }
  }, [_vm._v("Progress")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-ribbons"
      }
    }
  }, [_vm._v("Ribbons")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-spinners"
      }
    }
  }, [_vm._v("Spinners")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-tabs-accordions"
      }
    }
  }, [_vm._v("Tabs & Accordions")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-tooltips-popovers"
      }
    }
  }, [_vm._v("Tooltips & Popovers")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-typography"
      }
    }
  }, [_vm._v("Typography")])], 1)])])]) : _vm._e(), _vm._v(" "), _vm.activetab === 5 ? _c("div", {
    staticClass: "twocolumn-menu-item d-block",
    attrs: {
      id: "components"
    }
  }, [_c("div", {
    staticClass: "title-box"
  }, [_c("h5", {
    staticClass: "menu-title"
  }, [_vm._v("Components")]), _vm._v(" "), _c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarExtendedui",
      modifiers: {
        sidebarExtendedui: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", {
    staticClass: "badge badge-info float-right"
  }, [_vm._v("Hot")]), _vm._v(" "), _c("span", [_vm._v("Extended UI")])]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarExtendedui"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "rangeslider"
      }
    }
  }, [_vm._v("Range Slider")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "sweet-alert"
      }
    }
  }, [_vm._v("Sweet Alert")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "tour"
      }
    }
  }, [_vm._v("Tour Page")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "scrollspy"
      }
    }
  }, [_vm._v("Scrollspy")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarIcons",
      modifiers: {
        sidebarIcons: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Icons")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarIcons"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "feather"
      }
    }
  }, [_vm._v("Feather")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "remix"
      }
    }
  }, [_vm._v("Remix")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "boxicons"
      }
    }
  }, [_vm._v("Boxicons")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "mdi"
      }
    }
  }, [_vm._v("Material Design")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "font-awesome"
      }
    }
  }, [_vm._v("Font Awesome 5")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "weather"
      }
    }
  }, [_vm._v("Weather")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarForms",
      modifiers: {
        sidebarForms: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Forms")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarForms"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "elements"
      }
    }
  }, [_vm._v("\r\n                                                    General Elements\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "advanced-form"
      }
    }
  }, [_vm._v("\r\n                                                    Advanced\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "validation"
      }
    }
  }, [_vm._v("\r\n                                                    Validation\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "wizard"
      }
    }
  }, [_vm._v("\r\n                                                    Wizard\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "mask"
      }
    }
  }, [_vm._v("\r\n                                                    Masks\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "quill"
      }
    }
  }, [_vm._v("\r\n                                                    Quill Editor\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: _defineProperty({
      to: "/forms/file-uploads"
    }, "to", {
      name: "file-uploads"
    })
  }, [_vm._v("\r\n                                                    File Uploads\r\n                                                ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarTables",
      modifiers: {
        sidebarTables: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Tables")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarTables"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "basic"
      }
    }
  }, [_vm._v("\r\n                                                    Basic Tables\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "advanced"
      }
    }
  }, [_vm._v("\r\n                                                    Advanced Tables\r\n                                                ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarCharts",
      modifiers: {
        sidebarCharts: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Charts")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarCharts"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "charts-apex"
      }
    }
  }, [_vm._v("\r\n                                                    Apex Charts\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "charts-chartjs"
      }
    }
  }, [_vm._v("\r\n                                                    Chartjs Charts\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "charts-c3"
      }
    }
  }, [_vm._v("\r\n                                                    C3 Charts\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "charts-chartist"
      }
    }
  }, [_vm._v("\r\n                                                    Chartist Charts\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "charts-knob"
      }
    }
  }, [_vm._v("\r\n                                                    Knob Charts\r\n                                                ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarMaps",
      modifiers: {
        sidebarMaps: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Maps")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarMaps"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "maps-google"
      }
    }
  }, [_vm._v("\r\n                                                    Google Maps\r\n                                                ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarMultilevel",
      modifiers: {
        sidebarMultilevel: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Multi Level")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    staticClass: "collapse",
    attrs: {
      id: "sidebarMultilevel"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarMultilevel2",
      modifiers: {
        sidebarMultilevel2: true
      }
    }],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_vm._v("\r\n                                                    Second Level\r\n                                                    "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarMultilevel2"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_vm._v("Item 1")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_vm._v("Item 2")])])])])], 1), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#sidebarMultilevel3",
      "data-toggle": "collapse"
    }
  }, [_vm._v("Second Level 1")])])])])], 1)])])]) : _vm._e()])], 1), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=template&id=c44b75b6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=template&id=c44b75b6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center align-items-center position-absolute loader"
  }, [_c("b-spinner", {
    "class": ["m-2", "loader-".concat(_vm.size)],
    attrs: {
      variant: "success",
      role: "status"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=template&id=cd71e306&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=template&id=cd71e306&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-nav-item-dropdown", {
    staticClass: "notification-list",
    attrs: {
      right: "",
      "menu-class": ["dropdown-lg"]
    }
  }, [_c("template", {
    staticClass: "nav-link dropdown-toggle",
    slot: "button-content"
  }, [_c("i", {
    staticClass: "fe-bell noti-icon"
  }), _vm._v(" "), _vm.count ? _c("span", {
    staticClass: "badge badge-danger rounded-circle noti-icon-badge"
  }, [_vm._v(_vm._s(_vm.count))]) : _vm._e()]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item noti-title",
    attrs: {
      href: "#"
    }
  }, [_c("h5", {
    staticClass: "m-0"
  }, [_c("span", {
    staticClass: "float-right"
  }, [_c("a", {
    staticClass: "text-dark",
    attrs: {
      href: ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.clearAll.apply(null, arguments);
      }
    }
  }, [_c("small", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.notification.subtext")))])])]), _vm._v("\n          " + _vm._s(_vm.$t("navbar.dropdown.notification.text")) + "\n        ")])]), _vm._v(" "), _c("simplebar", {
    staticStyle: {
      "max-height": "230px"
    }
  }, [_vm._l(_vm.notifications, function (notification, index) {
    return [_c("router-link", {
      key: index,
      staticClass: "dropdown-item notify-item",
      attrs: {
        to: {
          name: notification.data.name,
          params: {
            id: notification.data.id
          }
        }
      }
    }, [_c("div", {
      on: {
        click: function click($event) {
          return _vm.clearItem(notification.id, index);
        }
      }
    }, [_c("div", {
      staticClass: "notify-icon bg-soft-primary text-primary"
    }, [_c("i", {
      staticClass: "mdi mdi-comment-account-outline"
    })]), _vm._v(" "), _c("p", {
      staticClass: "notify-details"
    }, [_vm._v("\n                        " + _vm._s(notification.data.message) + "\n                        "), _c("small", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(notification.data.timeDate) + "\n                        ")])])])])];
  })], 2), _vm._v(" "), _c("router-link", {
    staticClass: "dropdown-item text-center text-primary notify-item notify-all",
    attrs: {
      to: {
        name: "notifications"
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("navbar.dropdown.notification.button")) + "\n        "), _c("i", {
    staticClass: "fi-arrow-right"
  })])], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/recursive_menu.vue?vue&type=template&id=7d9f6fde&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/recursive_menu.vue?vue&type=template&id=7d9f6fde& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "list-unstyled",
    attrs: {
      id: "side-menu"
    }
  }, [_vm.$store.state.auth.type == "admin" && _vm.companies.length > 1 ? _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: "/dashboard/company"
    }
  }, [_c("i", {
    staticClass: "fas fa-city"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("menuitems.company.text")))])])], 1) : _vm._e(), _vm._v(" "), _vm._l(_vm.menuItems, function (item, i) {
    var _item$isUserMenu, _item$page$middleware, _item$page$name;
    return [_vm.checkUserOrAdminPermission((_item$isUserMenu = item.isUserMenu) !== null && _item$isUserMenu !== void 0 ? _item$isUserMenu : false) ? _c("li", {
      key: i + " " + item.id
    }, [item.type == "folder" ? [_c("a", {
      "class": ["has-arrow", "has-dropdown"],
      attrs: {
        href: "javascript:void(0);"
      },
      on: {
        click: function click($event) {
          return _vm.clickOnMenuToCollapseChildrens(i);
        }
      }
    }, [_c("span", {
      staticClass: "menu-arrow",
      staticStyle: {
        position: "static"
      },
      style: item.collapsed ? _vm.$i18n.locale == "ar" ? "transform: rotate(-90deg)!important" : "transform: rotate(90deg)!important" : ""
    }), _vm._v(" "), _c("i", {
      staticClass: "fa fa-folder",
      staticStyle: {
        color: "#d5aa20",
        "font-size": "20px"
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$i18n.locale == "ar" ? item.name : item.name_e))])]), _vm._v(" "), _c("div", {
      staticClass: "collapse",
      "class": {
        show: item.collapsed == 1
      },
      attrs: {
        id: "sidebarTasks".concat(i)
      }
    }, [_c("ul", {
      staticClass: "sub-menu nav-second-level",
      attrs: {
        "aria-expanded": "false"
      }
    }, [_c("recursive_menu", {
      attrs: {
        menuItems: item.childrens,
        companies: []
      }
    })], 1)])] : [_vm.checkPermission((_item$page$middleware = item.page.middleware) !== null && _item$page$middleware !== void 0 ? _item$page$middleware : item.page.name_e) ? _c("router-link", {
      staticClass: "side-nav-link-ref page_item",
      attrs: {
        "data-title": item.page.title,
        "data-title_e": item.page.title_e,
        "data-url": "/dashboard/".concat(item.page.middleware_url),
        to: "/dashboard/".concat(item.page.middleware_url == "/" ? "" : item.page.middleware_url)
      },
      on: {
        click: function click($event) {
          _vm.isRouteClicked = true;
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-file",
      staticStyle: {
        color: "#000"
      }
    }), _vm._v(" " + _vm._s(_vm.$i18n.locale == "ar" ? (_item$page$name = item.page.name) !== null && _item$page$name !== void 0 ? _item$page$name : item.page.name_e : item.page.name_e) + "\n                ")]) : _vm._e()]], 2) : _vm._e()];
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=template&id=d745e242&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=template&id=d745e242&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("PageHeader", {
    attrs: {
      title: _vm.title,
      items: _vm.items
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "dashboard-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-xl-6 col-md-12"
  }, [_c("WidgetChart", {
    attrs: {
      number: _vm.statices.statusCount,
      text: "departments",
      "chart-color": "#1abc9c"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6 col-md-12"
  }, [_c("WidgetChart", {
    attrs: {
      number: _vm.statices.UnitsCount,
      text: "rooms",
      "chart-color": "#f1556c"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-12 col-md-12"
  }, [_c("Projections", {
    attrs: {
      statices: _vm.statices
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title mb-3"
  }, [_vm._v(_vm._s(_vm.$t("general.extendReservation")))]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("table", {
    staticClass: "table table-borderless table-hover table-centered m-0"
  }, [_c("thead", {
    staticClass: "thead-light"
  }, [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.$t("general.serial_number")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("general.room")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("general.Arival")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("general.DepartureDate")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("general.guest")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("general.Action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.documents, function (data) {
    return _c("tr", {
      key: data.id
    }, [_c("td", [_c("h5", {
      staticClass: "m-0 font-weight-normal"
    }, [_vm._v(_vm._s(data.prefix))])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.$i18n.locale == "ar" ? data.document_header_details[0].unit.name : data.document_header_details[0].unit.name_e))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(data.document_header_details[0].date_from))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(data.document_header_details[0].date_to))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.$i18n.locale == "ar" ? data.customer.name : data.customer.name_e) + " ")]), _vm._v(" "), _c("td", [_c("a", {
      staticClass: "btn btn-xs btn-primary",
      attrs: {
        href: "javascript: void(0);"
      },
      on: {
        click: function click($event) {
          return _vm.$bvModal.show("".concat(data.id + ""));
        }
      }
    }, [_c("i", {
      staticClass: "mdi mdi-square-edit-outline"
    })])]), _vm._v(" "), _c("b-modal", {
      attrs: {
        id: data.id + "",
        title: _vm.$t("general.ExtendingTheReservationPeriod"),
        "title-class": "font-18",
        "body-class": "p-4 ",
        "hide-footer": true
      },
      on: {
        show: function show($event) {
          return _vm.resetModal(data.id);
        },
        hidden: function hidden($event) {
          _vm.resetModalHidden(data.id);
        }
      }
    }, [_c("form", [_c("div", {
      staticClass: "mb-3 d-flex justify-content-end"
    }, [!_vm.is_disabled ? [!_vm.isLoader ? _c("b-button", {
      staticClass: "mx-1",
      attrs: {
        variant: "success",
        type: "button"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.AddSubmit.apply(null, arguments);
        }
      }
    }, [_vm._v("\n                                                        " + _vm._s(_vm.$t("general.edit")) + "\n                                                    ")]) : _c("b-button", {
      staticClass: "mx-1",
      attrs: {
        variant: "success",
        disabled: ""
      }
    }, [_c("b-spinner", {
      attrs: {
        small: ""
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "sr-only"
    }, [_vm._v(_vm._s(_vm.$t("login.Loading")) + "...")])], 1)] : _vm._e(), _vm._v(" "), _c("b-button", {
      attrs: {
        variant: "danger",
        type: "button"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.resetModalHidden(data.id + "");
        }
      }
    }, [_vm._v("\n                                                    " + _vm._s(_vm.$t("general.Cancel")) + "\n                                                ")])], 2), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-12"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      staticClass: "control-label"
    }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("general.Date")) + "\n                                                            "), _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _vm._v(" "), _c("date-picker", {
      "class": {
        "is-invalid": _vm.$v.create.date.$error || _vm.errors.date
      },
      attrs: {
        type: "date",
        format: "YYYY-MM-DD",
        valueType: "format",
        confirm: false
      },
      model: {
        value: _vm.create.date,
        callback: function callback($$v) {
          _vm.$set(_vm.create, "date", $$v);
        },
        expression: "create.date"
      }
    }), _vm._v(" "), !_vm.$v.create.date.required ? _c("div", {
      staticClass: "invalid-feedback"
    }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("general.fieldIsRequired")) + "\n                                                        ")]) : _vm._e(), _vm._v(" "), _vm.errors.date ? _vm._l(_vm.errors.date, function (errorMessage, index) {
      return _c("ErrorMessage", {
        key: index
      }, [_vm._v("\n                                                                " + _vm._s(errorMessage) + "\n                                                            ")]);
    }) : _vm._e()], 2)])])])])], 1);
  }), 0)])])])])])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=template&id=158f6aa0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=template&id=158f6aa0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("PageHeader", {
    attrs: {
      title: _vm.title,
      items: _vm.items
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "dashboard-fluid mb-3"
  }, [_c("Projections", {
    attrs: {
      statices: _vm.statices
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=template&id=139bf1bd&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=template&id=139bf1bd& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("PageHeader", {
    attrs: {
      title: _vm.title,
      items: _vm.items
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "dashboard-fluid my-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-3 col-md-6"
  }, [_c("WidgetChart", {
    attrs: {
      number: _vm.statices.branches,
      text: "branches",
      "chart-color": "#1abc9c"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-6"
  }, [_c("WidgetChart", {
    attrs: {
      number: _vm.statices.users,
      text: "users",
      "chart-color": "#f1556c"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-6"
  }, [_c("WidgetChart", {
    attrs: {
      number: _vm.statices.employees,
      text: "employees",
      "chart-color": "#f1556c"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-6"
  }, [_c("WidgetChart", {
    attrs: {
      number: _vm.statices.salesmen,
      text: "salesmen",
      "chart-color": "#1abc9c"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-4 col-lg-6"
  }, [_c("RevenueReport")], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-4 col-lg-6"
  }, [_c("ProductsSales")], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-4 col-lg-6"
  }, [_c("MarketingReports")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-12"
  }, [_c("Portlet", {
    attrs: {
      headertitle: _vm.tableTitle
    }
  }, [_c("div", {
    staticClass: "card-body pt-0"
  }, [_c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("table", {
    staticClass: "table table-hover table-centered mb-0"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Product Id")]), _vm._v(" "), _c("th", [_vm._v("Product Name")]), _vm._v(" "), _c("th", [_vm._v("Price")]), _vm._v(" "), _c("th", [_vm._v("Quantity")]), _vm._v(" "), _c("th", [_vm._v("Amount")]), _vm._v(" "), _c("th", [_vm._v("Date")]), _vm._v(" "), _c("th", [_vm._v("Sales")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.productData, function (sellingData) {
    return _c("tr", {
      key: sellingData.id
    }, [_c("td", [_vm._v(_vm._s(sellingData.productid))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.price))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.quantity))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.amount))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.date))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.sales))])]);
  }), 0)])])])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-8"
  }, [_c("RevenueHistory")], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-4"
  }, [_c("Projections")], 1)])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=template&id=dabfeb60&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=template&id=dabfeb60& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$statices$total_ap, _vm$statices$total_ap2, _vm$statices$total_up, _vm$statices$total_ro, _vm$statices$total_ro2, _vm$statices$total_up2, _vm$statices$total_in, _vm$statices$total_ou, _vm$statices$total_in2, _vm$statices$total_ou2, _vm$statices$total_sp, _vm$statices$total_dr, _vm$statices$total_pr, _vm$statices$total_di, _vm$statices$total_se, _vm$statices$total_in3, _vm$statices$total_br, _vm$statices$total_ro3, _vm$statices$total_nu, _vm$statices$total_am, _vm$statices$total_am2, _vm$statices$patients, _vm$statices$total_am3, _vm$statices$doctors_, _vm$statices$total_am4, _vm$statices$insuranc;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("PageHeader", {
    attrs: {
      title: _vm.title,
      items: _vm.items
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "dashboard-fluid my-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/appointments"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.All Appointments")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.All Appointments")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_ap = _vm.statices.total_appointments) !== null && _vm$statices$total_ap !== void 0 ? _vm$statices$total_ap : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-primary rounded"
  }, [_c("i", {
    staticClass: "far fa-calendar-check font-28 text-primary"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/appointments/waiting_rooms"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Today Appointments")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Today Appointments")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_ap2 = _vm.statices.total_appointments_today) !== null && _vm$statices$total_ap2 !== void 0 ? _vm$statices$total_ap2 : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-warning rounded"
  }, [_c("i", {
    staticClass: "fa fa-calendar-day font-28 text-warning"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/appointments/upcoming_appointments"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Upcoming Appointments")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Upcoming Appointments")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_up = _vm.statices.total_upcoming_appointments) !== null && _vm$statices$total_up !== void 0 ? _vm$statices$total_up : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-danger rounded"
  }, [_c("i", {
    staticClass: "far fa-calendar-alt font-28 text-danger"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/rooms_reservation"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Rooms Reservations")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Rooms Reservations")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_ro = _vm.statices.total_rooms_reservations) !== null && _vm$statices$total_ro !== void 0 ? _vm$statices$total_ro : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-info rounded"
  }, [_c("i", {
    staticClass: "fas fa-clipboard-list font-28 text-info"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/rooms_reservation"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Today Reservations")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Today Reservations")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_ro2 = _vm.statices.total_rooms_reservations_today) !== null && _vm$statices$total_ro2 !== void 0 ? _vm$statices$total_ro2 : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-dark rounded"
  }, [_c("i", {
    staticClass: "fa fa-calendar-day font-28 text-dark"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/rooms_reservation"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Upcoming Reservations")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Upcoming Reservations")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_up2 = _vm.statices.total_upcoming_rooms_reservations) !== null && _vm$statices$total_up2 !== void 0 ? _vm$statices$total_up2 : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-success rounded"
  }, [_c("i", {
    staticClass: "far fa-calendar-alt font-28 text-success"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/patients"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Inpatients")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Inpatients")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_in = _vm.statices.total_in_patients) !== null && _vm$statices$total_in !== void 0 ? _vm$statices$total_in : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-warning rounded"
  }, [_c("i", {
    staticClass: "fas fa-user-injured font-28 text-warning"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/patients"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Outpatients")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Outpatients")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_ou = _vm.statices.total_out_patients) !== null && _vm$statices$total_ou !== void 0 ? _vm$statices$total_ou : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-danger rounded"
  }, [_c("i", {
    staticClass: "fas fa-ambulance font-28 text-danger"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/doctors"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Internal Doctors")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Internal Doctors")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_in2 = _vm.statices.total_in_doctors) !== null && _vm$statices$total_in2 !== void 0 ? _vm$statices$total_in2 : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-primary rounded"
  }, [_c("i", {
    staticClass: "fas fa-user-md font-28 text-primary"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/doctors"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Outdoctors")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Outdoctors")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_ou2 = _vm.statices.total_out_doctors) !== null && _vm$statices$total_ou2 !== void 0 ? _vm$statices$total_ou2 : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-info rounded"
  }, [_c("i", {
    staticClass: "fa fa-user-md font-28 text-info"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/specialties"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Specialties")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Specialties")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_sp = _vm.statices.total_specialties) !== null && _vm$statices$total_sp !== void 0 ? _vm$statices$total_sp : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-dark rounded"
  }, [_c("i", {
    staticClass: "fas fa-stethoscope font-28 text-dark"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/drugs"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Drugs")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Drugs")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_dr = _vm.statices.total_drugs) !== null && _vm$statices$total_dr !== void 0 ? _vm$statices$total_dr : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-success rounded"
  }, [_c("i", {
    staticClass: "fas fa-pills font-28 text-success"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/prescriptions"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Prescriptions")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Prescriptions")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_pr = _vm.statices.total_prescriptions) !== null && _vm$statices$total_pr !== void 0 ? _vm$statices$total_pr : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-info rounded"
  }, [_c("i", {
    staticClass: "fas fa-prescription-bottle-alt font-28 text-info"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/diagnosis_tests"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Diagnosis Tests")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Diagnosis Tests")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_di = _vm.statices.total_diagnosis_tests) !== null && _vm$statices$total_di !== void 0 ? _vm$statices$total_di : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-warning rounded"
  }, [_c("i", {
    staticClass: "fas fa-vial font-28 text-warning"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/services_types"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Services Types")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Services Types")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_se = _vm.statices.total_services_types) !== null && _vm$statices$total_se !== void 0 ? _vm$statices$total_se : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-success rounded"
  }, [_c("i", {
    staticClass: "fas fa-medkit font-28 text-success"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/insurance-companies"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Insurance Companies")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Insurance Companies")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_in3 = _vm.statices.total_insurances_companies) !== null && _vm$statices$total_in3 !== void 0 ? _vm$statices$total_in3 : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-dark rounded"
  }, [_c("i", {
    staticClass: "fas fa-shield-alt font-28 text-dark"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/branch"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.branches")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.branches")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_br = _vm.statices.total_branches) !== null && _vm$statices$total_br !== void 0 ? _vm$statices$total_br : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-danger rounded"
  }, [_c("i", {
    staticClass: "fas fa-building font-28 text-danger"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/rooms"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Rooms")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Rooms")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_ro3 = _vm.statices.total_rooms) !== null && _vm$statices$total_ro3 !== void 0 ? _vm$statices$total_ro3 : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-primary rounded"
  }, [_c("i", {
    staticClass: "fas fa-bed font-28 text-primary"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard/h_m_s/invoices"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Number of Invoices")
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("general.Number of Invoices")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_nu = _vm.statices.total_number_invocies) !== null && _vm$statices$total_nu !== void 0 ? _vm$statices$total_nu : 0,
      duration: 3000
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-warning rounded"
  }, [_c("i", {
    staticClass: "fas fa-file-invoice font-28 text-warning"
  })])])], 1)])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Total Amount of Invoices")
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("general.Total Amount of Invoices")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("span", {
    staticClass: "pt-2"
  }, [_c("countTo", {
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_am = _vm.statices.total_amount_of_invocies) !== null && _vm$statices$total_am !== void 0 ? _vm$statices$total_am : 0,
      duration: 3000
    }
  }), _vm._v(" " + _vm._s(_vm.$t("general.KD")) + "\n                                        ")], 1), _vm._v(" "), _vm._m(0)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Total Amount for Patients")
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("general.Total Amount for Patients")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("span", {
    staticClass: "pt-2"
  }, [_c("countTo", {
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_am2 = _vm.statices.total_amount_for_patients) !== null && _vm$statices$total_am2 !== void 0 ? _vm$statices$total_am2 : 0,
      duration: 3000
    }
  }), _vm._v(" " + _vm._s(_vm.$t("general.KD")) + "\n                                        ")], 1), _vm._v(" "), _vm._m(1)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Paid Amount for Patients")
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("general.Paid Amount for Patients")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("span", {
    staticClass: "pt-2"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$patients = _vm.statices.patients_paid_amount) !== null && _vm$statices$patients !== void 0 ? _vm$statices$patients : 0,
      duration: 3000
    }
  }), _vm._v(" " + _vm._s(_vm.$t("general.KD")) + "\n                                        ")], 1), _vm._v(" "), _vm._m(2)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.$bvModal.show("h_m_s_total_and_paid_amount_for_each_doctors");
      }
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Total Amount for Doctors")
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("general.Total Amount for Doctors")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("span", {
    staticClass: "pt-2"
  }, [_c("countTo", {
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_am3 = _vm.statices.total_amount_for_doctors) !== null && _vm$statices$total_am3 !== void 0 ? _vm$statices$total_am3 : 0,
      duration: 3000
    }
  }), _vm._v(" " + _vm._s(_vm.$t("general.KD")) + "\n                                        ")], 1), _vm._v(" "), _vm._m(3)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.$bvModal.show("h_m_s_total_and_paid_amount_for_each_doctors");
      }
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Paid Amount for Doctors")
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("general.Paid Amount for Doctors")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("span", {
    staticClass: "pt-2"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$doctors_ = _vm.statices.doctors_paid_amount) !== null && _vm$statices$doctors_ !== void 0 ? _vm$statices$doctors_ : 0,
      duration: 3000
    }
  }), _vm._v(" " + _vm._s(_vm.$t("general.KD")) + "\n                                        ")], 1), _vm._v(" "), _vm._m(4)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.$bvModal.show("h_m_s_total_and_paid_amount_for_each_insurance_company");
      }
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Total Amount for Insurance Companies")
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("general.Total Amount for Insurance Companies")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("span", {
    staticClass: "pt-2"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$total_am4 = _vm.statices.total_amount_for_insurance_companies) !== null && _vm$statices$total_am4 !== void 0 ? _vm$statices$total_am4 : 0,
      duration: 3000
    }
  }), _vm._v(" " + _vm._s(_vm.$t("general.KD")) + "\n                                        ")], 1), _vm._v(" "), _vm._m(5)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-3"
  }, [_c("div", {
    staticClass: "card py-0 mb-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between p-3 bg-white",
    staticStyle: {
      "border-radius": "4px",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.$bvModal.show("h_m_s_total_and_paid_amount_for_each_insurance_company");
      }
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("h4", {
    staticClass: "font-weight-normal mt-0 text-truncate",
    attrs: {
      title: _vm.$t("general.Paid Amount for Insurance Companies")
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t("general.Paid Amount for Insurance Companies")))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1 d-flex flex-wrap justify-content-between"
  }, [_c("span", {
    staticClass: "pt-2"
  }, [_c("countTo", {
    "class": "pt-2",
    attrs: {
      startVal: 0,
      endVal: (_vm$statices$insuranc = _vm.statices.insurance_companies_paid_amount) !== null && _vm$statices$insuranc !== void 0 ? _vm$statices$insuranc : 0,
      duration: 3000
    }
  }), _vm._v(" " + _vm._s(_vm.$t("general.KD")) + "\n                                        ")], 1), _vm._v(" "), _vm._m(6)])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-xl-4"
  }, [_c("h_m_s_patients_blood_typeVue", {
    attrs: {
      patient_group_by_blood_type: _vm.statices.patient_group_by_blood_type
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-4"
  }, [_c("h_m_s_patients_ageVue", {
    attrs: {
      patient_group_by_age: _vm.statices.patient_group_by_age
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-4"
  }, [_c("h_m_s_appointments_timesVue", {
    attrs: {
      peak_appointment_periods: _vm.statices.peak_appointment_periods
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-4"
  }, [_c("h_m_s_appointments_for_current_and_last_monthVue", {
    attrs: {
      appointments_for_current_month: _vm.statices.appointments_for_current_month,
      appointments_for_last_month: _vm.statices.appointments_for_last_month
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-xl-8"
  }, [_c("h_m_s_total_amount_for_each_month_in_yearVue", {
    attrs: {
      total_amount_for_each_month_in_year: _vm.statices.total_amount_for_each_month_in_year
    }
  })], 1)])]), _vm._v(" "), _c("h_m_s_total_and_paid_amount_for_each_doctorsVue", {
    attrs: {
      total_and_paid_amount_for_each_doctors: _vm.statices.total_and_paid_amount_for_each_doctors
    }
  }), _vm._v(" "), _c("h_m_s_total_and_paid_amount_for_each_company_insuranceVue", {
    attrs: {
      total_and_paid_amount_for_each_insurance_company: _vm.statices.total_and_paid_amount_for_each_insurance_company
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-danger rounded"
  }, [_c("i", {
    staticClass: "fas fa-money-bill-wave font-28 text-danger"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-dark rounded"
  }, [_c("i", {
    staticClass: "fas fa-money-bill font-28 text-dark"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-primary rounded"
  }, [_c("i", {
    staticClass: "fas fa-money-bill-wave font-28 text-primary"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-success rounded"
  }, [_c("i", {
    staticClass: "fas fa-money-bill font-28 text-success"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-warning rounded"
  }, [_c("i", {
    staticClass: "fas fa-money-bill-wave font-28 text-warning"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-info rounded"
  }, [_c("i", {
    staticClass: "fas fa-money-bill-wave font-28 text-info"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "avatar-md"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-danger rounded"
  }, [_c("i", {
    staticClass: "fas fa-money-bill font-28 text-danger"
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Crm-widget.vue?vue&type=template&id=207e56c4&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Crm-widget.vue?vue&type=template&id=207e56c4& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", [_c("h5", {
    staticClass: "text-muted font-weight-normal mt-0 text-truncate",
    attrs: {
      title: "Campaign Sent"
    }
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("h3", {
    staticClass: "my-2 py-1"
  }, [_c("span", {
    attrs: {
      "data-plugin": "counterup"
    }
  }, [_vm._v(_vm._s(_vm.value))])]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 text-muted"
  }, [_c("span", {
    staticClass: "text-success mr-2"
  }, [_c("span", {
    staticClass: "mdi mdi-arrow-up-bold"
  }), _vm._v("\r\n                        " + _vm._s(_vm.text) + "\r\n                    ")]), _vm._v(" "), _c("span", {
    staticClass: "text-nowrap"
  }, [_vm._v("Since last month")])])]), _vm._v(" "), _c("div", {
    staticClass: "avatar-sm"
  }, [_c("span", {
    staticClass: "avatar-title bg-soft-primary rounded"
  }, [_c("i", {
    "class": "".concat(_vm.icon, " font-20 text-primary")
  })])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Marketing-reports.vue?vue&type=template&id=9e291c46&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Marketing-reports.vue?vue&type=template&id=9e291c46& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("b-dropdown", {
    staticClass: "float-right",
    attrs: {
      variant: "black",
      "toggle-class": "arrow-none card-drop",
      right: ""
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("i", {
          staticClass: "mdi mdi-dots-horizontal"
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-dropdown-item", [_vm._v("Settings")]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Download")]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Upload")]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Action")])], 1), _vm._v(" "), _c("h4", {
    staticClass: "header-title"
  }, [_vm._v("Marketing Reports")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("1 Mar - 31 Mar Showing Data")]), _vm._v(" "), _c("div", {
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "radar",
      options: _vm.chartOptions,
      height: "274",
      series: _vm.series
    }
  })], 1), _vm._v(" "), _vm._m(0)], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row text-center"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("p", {
    staticClass: "text-muted mb-1"
  }, [_vm._v("This Month")]), _vm._v(" "), _c("h3", {
    staticClass: "mt-0 font-20"
  }, [_vm._v("\r\n                    $120,254\r\n                    "), _c("small", {
    staticClass: "badge badge-soft-success font-12"
  }, [_vm._v("+15%")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("p", {
    staticClass: "text-muted mb-1"
  }, [_vm._v("Last Month")]), _vm._v(" "), _c("h3", {
    staticClass: "mt-0 font-20"
  }, [_vm._v("\r\n                    $98,741 "), _c("small", {
    staticClass: "badge badge-soft-danger font-12"
  }, [_vm._v("-5%")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Portlet.vue?vue&type=template&id=65966c02&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Portlet.vue?vue&type=template&id=65966c02& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isVisible ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-widgets"
  }, [_c("a", {
    attrs: {
      href: "javascript: void(0);"
    },
    on: {
      click: _vm.refreshContent
    }
  }, [_c("i", {
    staticClass: "mdi mdi-refresh"
  })]), _vm._v(" "), _c("a", {
    "class": [_vm.showCollapse ? "collapsed" : null, _vm.showCollapse ? "mdi mdi-minus" : "mdi mdi-plus"],
    attrs: {
      "aria-expanded": _vm.showCollapse ? "true" : "false",
      "aria-controls": "collapse-1"
    },
    on: {
      click: _vm.collapse
    }
  }), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript: void(0);"
    },
    on: {
      click: _vm.remove
    }
  }, [_c("i", {
    staticClass: "mdi mdi-close"
  })])]), _vm._v(" "), _c("h4", {
    staticClass: "header-title mb-0",
    "class": _vm.portletclass
  }, [_vm._v(_vm._s(_vm.headertitle))])]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-1"
    },
    model: {
      value: _vm.showCollapse,
      callback: function callback($$v) {
        _vm.showCollapse = $$v;
      },
      expression: "showCollapse"
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "card-disabled"
  }, [_vm._m(0)]) : _vm._e()], 1) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-portlets-loader"
  }, [_c("div", {
    staticClass: "spinner-border text-primary m-2",
    attrs: {
      role: "status"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Products-sales.vue?vue&type=template&id=6db5416e&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Products-sales.vue?vue&type=template&id=6db5416e& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("b-dropdown", {
    staticClass: "float-right",
    attrs: {
      variant: "black",
      "toggle-class": "arrow-none card-drop",
      right: ""
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("i", {
          staticClass: "mdi mdi-dots-horizontal"
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-dropdown-item", [_vm._v("Settings")]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Download")]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Upload")]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Action")])], 1), _vm._v(" "), _c("h4", {
    staticClass: "header-title"
  }, [_vm._v("Products Sales")]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "line",
      options: _vm.chartOptions,
      height: "265",
      series: _vm.series
    }
  })], 1)])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row pt-2"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v("Target")]), _vm._v(" "), _c("h4", [_vm._v("$56,214")])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v("Last week")]), _vm._v(" "), _c("h4", [_c("i", {
    staticClass: "fe-arrow-up text-success"
  }), _vm._v(" $840")])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v("Last Month")]), _vm._v(" "), _c("h4", [_c("i", {
    staticClass: "fe-arrow-down text-danger"
  }), _vm._v(" $7,845")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=template&id=48b1c82a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=template&id=48b1c82a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h1", {
    staticClass: "header-title text-center my-3"
  }, [_vm._v(_vm._s(_vm.$t("general.fffmembers")) + " : " + _vm._s(_vm.statices.validMembersCount))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.Typesofpayment")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "donut",
      options: _vm.chartOptions3,
      height: "312",
      series: _vm.series3
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, _vm._l(_vm.statices.financial_statuses_data, function (item) {
    return _c("div", {
      staticClass: "col-4"
    }, [_c("p", {
      staticClass: "font-15 mb-1 text-truncate"
    }, [_vm._v(_vm._s(_vm.$i18n.locale == "ar" ? item.name : item.name_e))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(item.count))])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.Memberrights")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "donut",
      options: _vm.chartOptions2,
      height: "312",
      series: _vm.series2
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, _vm._l(_vm.statices.member_permissions_data, function (item) {
    return _c("div", {
      staticClass: "col-4"
    }, [_c("p", {
      staticClass: "font-15 mb-1 text-truncate"
    }, [_vm._v(_vm._s(_vm.$i18n.locale == "ar" ? item.name : item.name_e))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(item.count))])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.memberType")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "donut",
      options: _vm.chartOptions1,
      height: "312",
      series: _vm.series1
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, _vm._l(_vm.statices.member_types_data, function (item) {
    return _c("div", {
      staticClass: "col-4"
    }, [_c("p", {
      staticClass: "font-15 mb-1 text-truncate"
    }, [_vm._v(_vm._s(_vm.$i18n.locale == "ar" ? item.name : item.name_e))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(item.count))])]);
  }), 0)])])])]), _vm._v(" "), _c("h1", {
    staticClass: "header-title text-center my-3"
  }, [_vm._v(_vm._s(_vm.$t("general.dismissedMemberCount")) + ": " + _vm._s(_vm.statices.DeletedMember))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body ordinaryMember"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.memberType")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "donut",
      options: _vm.chartOptions4,
      height: "312",
      series: _vm.series4
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, _vm._l(_vm.statices.member_types, function (item) {
    return _c("div", {
      staticClass: "col-4"
    }, [_c("p", {
      staticClass: "font-15 mb-1 text-truncate"
    }, [_vm._v(_vm._s(_vm.$i18n.locale == "ar" ? item.name : item.name_e))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(item.count))])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.Reasonsfordeletion")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "donut",
      options: _vm.chartOptions5,
      height: "312",
      series: _vm.series5
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v(_vm._s(_vm.$t("general.Deletedathisrequest")))]), _vm._v(" "), _c("h4", [_vm._v(" " + _vm._s(_vm.statices.count_6) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v(_vm._s(_vm.$t("general.Cancellationduetodeath")))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.statices.count_7))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v(_vm._s(_vm.$t("general.Cancellationaccordingtotheministerialdecision")))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.statices.count_8))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v(_vm._s(_vm.$t("general.WrittenoffaccordingtotheAuthorityletter")))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.statices.count_9))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v(_vm._s(_vm.$t("general.Writtenofffornonpayment")))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.statices.count_18))])])])])])])]), _vm._v(" "), _c("h1", {
    staticClass: "header-title text-center my-3"
  }, [_vm._v(_vm._s(_vm.$t("general.Subscriptions")) + ": " + _vm._s(_vm.statices.member_requests_count))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.SubscriptionsRequest")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "donut",
      options: _vm.chartOptions7,
      height: "312",
      series: _vm.series7
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "font-15 mb-1 text-truncate"
  }, [_vm._v(_vm._s(_vm.$t("general.SubscriptionsWaiting")))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.statices.member_requests_waiting_count))])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "font-15 mb-1 text-truncate"
  }, [_vm._v(_vm._s(_vm.$t("general.SubscriptionsRejected")))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.statices.member_requests_rejected_count))])])])])])])]), _vm._v(" "), _c("h1", {
    staticClass: "header-title text-center my-3"
  }, [_vm._v(_vm._s(_vm.$t("general.sponsors")) + ": " + _vm._s(_vm.statices.sponsors))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.groupSponer")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "donut",
      options: _vm.chartOptions6,
      height: "312",
      series: _vm.series6
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, _vm._l(_vm.statices.sponsors_group, function (item) {
    return _c("div", {
      staticClass: "col-4"
    }, [_c("p", {
      staticClass: "font-15 mb-1 text-truncate"
    }, [_vm._v(_vm._s(_vm.$i18n.locale == "ar" ? item.name : item.name_e))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(item.count))])]);
  }), 0)])])])]), _vm._v(" "), _c("div", {
    staticClass: "row mt-1"
  }, [_c("div", {
    staticClass: "col-xl-12"
  }, [_c("Portlet", {
    attrs: {
      headertitle: "Sponsormembersbyrights"
    }
  }, [_c("div", {
    staticClass: "card-body pt-0"
  }, [_c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("table", {
    staticClass: "table table-hover table-centered mb-0"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t("general.name")))]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t("general.NoRightToAttend")))]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t("general.RightToAttend")))]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t("general.RightToAttendAndVote")))]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t("general.RightToAttendAndVoteAndRun")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.statices.sponsors_members_permissions, function (sellingData) {
    return _c("tr", {
      key: sellingData.id
    }, [_c("td", [_vm._v(_vm._s(sellingData.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.permissions_counts[0].count))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.permissions_counts[1].count))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.permissions_counts[2].count))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.permissions_counts[3].count))])]);
  }), 0)])])])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row mt-1"
  }, [_c("div", {
    staticClass: "col-xl-12"
  }, [_c("Portlet", {
    attrs: {
      headertitle: "Thenumberofmemberswithineachsponsor"
    }
  }, [_c("div", {
    staticClass: "card-body pt-0"
  }, [_c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("table", {
    staticClass: "table table-hover table-centered mb-0"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t("general.name")))]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t("general.count")))]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t("general.percentage")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.statices.sponsors_members, function (sellingData) {
    return _c("tr", {
      key: sellingData.id
    }, [_c("td", [_vm._v(_vm._s(sellingData.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.count))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(sellingData.percentage) + " %")])]);
  }), 0)])])])])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=template&id=37818889&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=template&id=37818889&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.unitsWithStatusCount")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "donut",
      options: _vm.chartOptions1,
      height: "312",
      series: _vm.series1
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, _vm._l(_vm.statices.unitsWithStatusWithDetailsCount, function (item) {
    return _c("div", {
      staticClass: "col-4"
    }, [_c("p", {
      staticClass: "font-15 mb-1 text-truncate"
    }, [_vm._v(_vm._s(_vm.$i18n.locale == "ar" ? item.name : item.name_e))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(item.count))])]);
  }), 0)])]), _vm._v(" "), _vm._v("\n\n    <\n")]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-history.vue?vue&type=template&id=47311b30&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-history.vue?vue&type=template&id=47311b30& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("b-dropdown", {
    staticClass: "float-right",
    attrs: {
      variant: "black",
      right: "",
      "toggle-class": "arrow-none card-drop"
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("i", {
          staticClass: "mdi mdi-dots-horizontal"
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("Settings")]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("Download")]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("Upload")]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c("h4", {
    staticClass: "header-title mb-3"
  }, [_vm._v("Revenue History")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("table", {
    staticClass: "table table-borderless table-hover table-centered m-0"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.revenueData, function (data) {
    return _c("tr", {
      key: data.date
    }, [_c("td", [_c("h5", {
      staticClass: "m-0 font-weight-normal"
    }, [_vm._v(_vm._s(data.marketplaces))])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(data.date))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(data.tax))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(data.payout))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge",
      "class": {
        "bg-soft-success text-success": "".concat(data.status) === "Paid",
        "bg-soft-warning text-warning": "".concat(data.status) === "Upcoming",
        "bg-soft-danger  text-danger": "".concat(data.status) === "Overdue"
      }
    }, [_vm._v(_vm._s(data.status))])]), _vm._v(" "), _vm._m(1, true)]);
  }), 0)])])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "thead-light"
  }, [_c("tr", [_c("th", [_vm._v("Marketplaces")]), _vm._v(" "), _c("th", [_vm._v("Date")]), _vm._v(" "), _c("th", [_vm._v("US Tax Hold")]), _vm._v(" "), _c("th", [_vm._v("Payouts")]), _vm._v(" "), _c("th", [_vm._v("Status")]), _vm._v(" "), _c("th", [_vm._v("Action")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("a", {
    staticClass: "btn btn-xs btn-secondary",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-pencil"
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-report.vue?vue&type=template&id=58747110&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-report.vue?vue&type=template&id=58747110& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("b-dropdown", {
    staticClass: "float-right",
    attrs: {
      variant: "black",
      "toggle-class": "arrow-none card-drop",
      right: ""
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("i", {
          staticClass: "mdi mdi-dots-horizontal"
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-dropdown-item", [_vm._v("Settings")]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Download")]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Upload")]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Action")])], 1), _vm._v(" "), _c("h4", {
    staticClass: "header-title"
  }, [_vm._v("Revenue Report")]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    attrs: {
      dir: "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      type: "bar",
      options: _vm.chartOptions,
      height: "265",
      series: _vm.series
    }
  })], 1)])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row pt-2"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v("Target")]), _vm._v(" "), _c("h4", [_vm._v("$12,365")])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v("Last week")]), _vm._v(" "), _c("h4", [_c("i", {
    staticClass: "fe-arrow-down text-danger"
  }), _vm._v(" $365")])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("p", {
    staticClass: "text-muted font-15 mb-1 text-truncate"
  }, [_vm._v("Last Month")]), _vm._v(" "), _c("h4", [_c("i", {
    staticClass: "fe-arrow-up text-success"
  }), _vm._v(" $8,501")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=template&id=5f47a8e0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=template&id=5f47a8e0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "float-left",
    attrs: {
      dir: "ltr"
    }
  }, [_c("div", [_c("apexchart", {
    attrs: {
      type: "line",
      width: "140",
      height: "54",
      series: _vm.series,
      options: _vm.chartOptions
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("h3", {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.number))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-1"
  }, [_vm._v(_vm._s(_vm.$t("general.".concat(_vm.text))))])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=template&id=4ffd64d4&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=template&id=4ffd64d4& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body ordinaryMember"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.Number of appointments and reservations for this month and last month for each week")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: _vm.$i18n.locale == "ar" ? "rtl" : "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      options: _vm.options,
      height: "320",
      series: _vm.series
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=template&id=3750a13b&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=template&id=3750a13b& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body ordinaryMember"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.Clarifying peak periods for appointments and reservations")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: _vm.$i18n.locale == "ar" ? "rtl" : "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      options: _vm.options,
      height: "320",
      series: _vm.series
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=template&id=8a038de4&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=template&id=8a038de4& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body ordinaryMember"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.Classification of patients according to age")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: _vm.$i18n.locale == "ar" ? "rtl" : "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      options: _vm.options,
      height: "320",
      series: _vm.series
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=template&id=1a887ec0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=template&id=1a887ec0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body ordinaryMember"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.Classification of patients according to blood types")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: _vm.$i18n.locale == "ar" ? "rtl" : "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      options: _vm.options,
      height: "320",
      series: _vm.series
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=template&id=cd158168&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=template&id=cd158168& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body ordinaryMember"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("general.Total amount for each month in the year")))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: _vm.$i18n.locale == "ar" ? "rtl" : "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      options: _vm.options,
      height: "320",
      series: _vm.series
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=template&id=6a69f327&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=template&id=6a69f327& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    attrs: {
      id: "h_m_s_total_and_paid_amount_for_each_insurance_company",
      "title-class": "font-18",
      size: "xlll",
      "body-class": "p-4 ",
      "hide-footer": true,
      title: _vm.$t("general.Total and paid amount for each insurance company")
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body ordinaryMember"
  }, [_c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: _vm.$i18n.locale == "ar" ? "rtl" : "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      options: _vm.options,
      height: "600",
      series: _vm.series
    }
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=template&id=529fa8fa&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=template&id=529fa8fa& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    attrs: {
      id: "h_m_s_total_and_paid_amount_for_each_doctors",
      "title-class": "font-18",
      size: "xlll",
      "body-class": "p-4 ",
      "hide-footer": true,
      title: _vm.$t("general.Total and paid amount for each doctor")
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body ordinaryMember"
  }, [_c("div", {
    staticClass: "mt-3 text-center",
    attrs: {
      dir: _vm.$i18n.locale == "ar" ? "rtl" : "ltr"
    }
  }, [_c("apexchart", {
    staticClass: "apex-charts",
    attrs: {
      options: _vm.options,
      height: "600",
      series: _vm.series
    }
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "wrapper"
    }
  }, [_c("Sidebar", {
    attrs: {
      type: _vm.leftSidebarType,
      width: _vm.layoutWidth,
      size: _vm.leftSidebarSize,
      menu: _vm.menuPosition,
      topbar: _vm.topbar
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "content-page"
  }, [_c("div", {
    staticClass: "content"
  }, [_c("Topbar"), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_vm._t("default")], 2)], 1), _vm._v(" "), _c("Footer")], 1), _vm._v(" "), _c("Rightbar")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "wrapper"
    }
  }, [_c("Topbar"), _vm._v(" "), _c("HorizontalNavbar", {
    attrs: {
      type: _vm.topbar,
      width: _vm.layoutWidth,
      menu: _vm.menuPosition
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "content-page"
  }, [_c("div", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c("Footer")], 1), _vm._v(" "), _c("Rightbar")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Vertical", [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "wrapper"
    }
  }, [_c("Topbar"), _vm._v(" "), _c("TwoColumnSidebar", {
    attrs: {
      type: _vm.leftSidebarType,
      width: _vm.layoutWidth,
      size: _vm.leftSidebarSize,
      menu: _vm.menuPosition,
      topbar: _vm.topbar
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "content-page"
  }, [_c("div", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c("Footer")], 1), _vm._v(" "), _c("Rightbar")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "wrapper"
    }
  }, [_c("Sidebar", {
    attrs: {
      type: _vm.leftSidebarType,
      width: _vm.layoutWidth,
      size: _vm.leftSidebarSize,
      menu: _vm.menuPosition,
      topbar: _vm.topbar
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "content-page"
  }, [_c("div", {
    staticClass: "content"
  }, [_c("Topbar"), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_vm._t("default")], 2)], 1), _vm._v(" "), _c("Footer")], 1), _vm._v(" "), _c("Rightbar")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=template&id=135f7e36&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=template&id=135f7e36& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("Layout", [_vm.selectedParents && _vm.selectedParents[2] == "4" ? _c("hmsDashboard") : _vm._e(), _vm._v(" "), _vm.selectedParents && _vm.selectedParents[2] == "3" ? _c("clubDashboard") : _vm._e(), _vm._v(" "), _vm.selectedParents && _vm.selectedParents[2] == "2" ? _c("bookingDashboard") : _vm._e(), _vm._v(" "), _vm.selectedParents && _vm.selectedParents[2] == "1" ? _c("defaultDashboard") : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/helper/PageTitle.js":
/*!******************************************!*\
  !*** ./resources/js/helper/PageTitle.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var page_title = vue__WEBPACK_IMPORTED_MODULE_0__["default"].observable({
  value: localStorage.getItem("page_title") ? JSON.parse(localStorage.getItem("page_title")) : []
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page_title);

/***/ }),

/***/ "./resources/js/helper/startDate.js":
/*!******************************************!*\
  !*** ./resources/js/helper/startDate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDateOnly": () => (/* binding */ formatDateOnly),
/* harmony export */   "formatDateTime": () => (/* binding */ formatDateTime),
/* harmony export */   "formatTime": () => (/* binding */ formatTime),
/* harmony export */   "tConvert": () => (/* binding */ tConvert)
/* harmony export */ });
function formatDateTime(item) {
  var now = new Date(item);
  var st = now.toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/);
  return st[1] + ' ' + st[2];
}
;
function formatDateOnly(item) {
  var now = new Date(item);
  var st = now.toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/);
  return st[1];
}
;
function formatTime(item) {
  var d = new Date(item); // for now
  return "".concat(d.getHours(), ":").concat(d.getMinutes(), ":").concat(d.getSeconds());
}
function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }

  return time.join(''); // return adjusted time or original string
}

/***/ }),

/***/ "./resources/js/state/helpers.js":
/*!***************************************!*\
  !*** ./resources/js/state/helpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authComputed": () => (/* binding */ authComputed),
/* harmony export */   "authFackMethods": () => (/* binding */ authFackMethods),
/* harmony export */   "authMethods": () => (/* binding */ authMethods),
/* harmony export */   "layoutComputed": () => (/* binding */ layoutComputed),
/* harmony export */   "layoutMethods": () => (/* binding */ layoutMethods),
/* harmony export */   "notificationMethods": () => (/* binding */ notificationMethods)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var authComputed = _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('auth', {
  currentUser: function currentUser(state) {
    return state.currentUser;
  }
})), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('auth', ['loggedIn']));
var layoutComputed = _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('layout', {
  layoutType: function layoutType(state) {
    return state.layoutType;
  },
  leftSidebarType: function leftSidebarType(state) {
    return state.leftSidebarType;
  },
  layoutWidth: function layoutWidth(state) {
    return state.layoutWidth;
  },
  leftSidebarSize: function leftSidebarSize(state) {
    return state.leftSidebarSize;
  },
  menuPosition: function menuPosition(state) {
    return state.menuPosition;
  },
  topbar: function topbar(state) {
    return state.topbar;
  },
  loader: function loader(state) {
    return state.loader;
  }
}));
var authMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('auth', ['logIn', 'logOut', 'register', 'resetPassword']);
var layoutMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('layout', ['changeLayoutType', 'changeLayoutWidth', 'changeLeftSidebarType', 'changeLeftSidebarSize', 'changeTopbar', 'changeLoaderValue', 'changeMenuPosition']);
var authFackMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('authfack', ['login', 'registeruser', 'logout']);
var notificationMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('notification', ['success', 'error', 'clear']);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.color {\r\n    color: #6c757d !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-title-box {\n    margin: 0 !important;\n    padding: 0 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.logo-lg img[data-v-45f7331a] {\r\n  width: 70px;\r\n  height: 45px;\n}\n.logo-sm img[data-v-45f7331a] {\r\n  width: 70px;\r\n  height: 45px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.selected-program .dropdown-item {\r\n    background: #f1f5f7 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.loader[data-v-c44b75b6] {\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    opacity: .6;\n    z-index: 100;\n}\n.loader-large[data-v-c44b75b6] {\n    width: 4rem;\n    height: 4rem\n}\n.loader-small[data-v-c44b75b6] {\n    width: 1rem;\n    height: 1rem\n}\n.loader-middle[data-v-c44b75b6] {\n    width: 2.25rem;\n    height: 2.25rem\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropdown .dropdown-menu.dropdown-menu-custom[data-v-cd71e306] {\r\n    padding: 0 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.content-page[data-v-d745e242] {\r\n    padding: 70px 15px 5px !important;\n}\n.dashboard-fluid[data-v-d745e242] {\r\n    padding: 0 10px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.content-page[data-v-158f6aa0] {\r\n    padding: 70px 15px 5px !important;\n}\n.dashboard-fluid[data-v-158f6aa0] {\r\n    padding: 0 10px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.content-page {\r\n    padding: 70px 15px 5px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content-page {\r\n    padding: 70px 15px 5px !important;\n}\n.card {\r\n    margin-bottom: 24px;\r\n    box-shadow: 0 0.75rem 6rem rgba(56, 65, 74, .03);\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid #e7eaed;\r\n    border-radius: 0.25rem;\n}\n.apexcharts-legend-text,tspan {\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    color:#000\n}\n.apexcharts-tooltip.apexcharts-theme-light.apexcharts-active {\r\n    z-index: 99999999999 !important\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-body[data-v-48b1c82a] {\n    background-color: #bee3fe !important;\n}\nh1[data-v-48b1c82a] {\n    font-size: 30px;\n}\n.card-body[data-v-48b1c82a] {\n    color: #000 !important;\n}\n.ordinaryMember[data-v-48b1c82a]{\n    min-height: 522px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-body[data-v-37818889] {\r\n    background-color: #bee3fe !important;\n}\nh1[data-v-37818889] {\r\n    font-size: 30px;\n}\n.card-body[data-v-37818889] {\r\n    color: #000 !important;\n}\n.ordinaryMember[data-v-37818889]{\r\n    min-height: 522px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-body[data-v-5f47a8e0] {\r\n    background-color: #bee3fe;\r\n    padding: 1.5rem 10px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.apexcharts-legend-text[data-v-1a887ec0]{\r\n    font-size: 15px;\r\n    font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container-fluid {\n    padding: unset;\n    margin: unset;\n}\n.content-page {\n    padding: 70px 0 65px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.content-page {\r\n    padding: 70px 15px 5px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/date-format-parse/es/format.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-format-parse/es/format.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/date-format-parse/es/util.js");
/* harmony import */ var _locale_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale/en */ "./node_modules/date-format-parse/es/locale/en.js");


var REGEX_FORMAT = /\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;

function pad(val) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var output = "".concat(Math.abs(val));
  var sign = val < 0 ? '-' : '';

  while (output.length < len) {
    output = "0".concat(output);
  }

  return sign + output;
}

function getOffset(date) {
  return Math.round(date.getTimezoneOffset() / 15) * 15;
}

function formatTimezone(offset) {
  var delimeter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  return sign + pad(hours, 2) + delimeter + pad(minutes, 2);
}

var meridiem = function meridiem(h, _, isLowercase) {
  var word = h < 12 ? 'AM' : 'PM';
  return isLowercase ? word.toLocaleLowerCase() : word;
};

var formatFlags = {
  Y: function Y(date) {
    var y = date.getFullYear();
    return y <= 9999 ? "".concat(y) : "+".concat(y);
  },
  // Year: 00, 01, ..., 99
  YY: function YY(date) {
    return pad(date.getFullYear(), 4).substr(2);
  },
  // Year: 1900, 1901, ..., 2099
  YYYY: function YYYY(date) {
    return pad(date.getFullYear(), 4);
  },
  // Month: 1, 2, ..., 12
  M: function M(date) {
    return date.getMonth() + 1;
  },
  // Month: 01, 02, ..., 12
  MM: function MM(date) {
    return pad(date.getMonth() + 1, 2);
  },
  MMM: function MMM(date, locale) {
    return locale.monthsShort[date.getMonth()];
  },
  MMMM: function MMMM(date, locale) {
    return locale.months[date.getMonth()];
  },
  // Day of month: 1, 2, ..., 31
  D: function D(date) {
    return date.getDate();
  },
  // Day of month: 01, 02, ..., 31
  DD: function DD(date) {
    return pad(date.getDate(), 2);
  },
  // Hour: 0, 1, ... 23
  H: function H(date) {
    return date.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH: function HH(date) {
    return pad(date.getHours(), 2);
  },
  // Hour: 1, 2, ..., 12
  h: function h(date) {
    var hours = date.getHours();

    if (hours === 0) {
      return 12;
    }

    if (hours > 12) {
      return hours % 12;
    }

    return hours;
  },
  // Hour: 01, 02, ..., 12
  hh: function hh() {
    var hours = formatFlags.h.apply(formatFlags, arguments);
    return pad(hours, 2);
  },
  // Minute: 0, 1, ..., 59
  m: function m(date) {
    return date.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm: function mm(date) {
    return pad(date.getMinutes(), 2);
  },
  // Second: 0, 1, ..., 59
  s: function s(date) {
    return date.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss: function ss(date) {
    return pad(date.getSeconds(), 2);
  },
  // 1/10 of second: 0, 1, ..., 9
  S: function S(date) {
    return Math.floor(date.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS: function SS(date) {
    return pad(Math.floor(date.getMilliseconds() / 10), 2);
  },
  // Millisecond: 000, 001, ..., 999
  SSS: function SSS(date) {
    return pad(date.getMilliseconds(), 3);
  },
  // Day of week: 0, 1, ..., 6
  d: function d(date) {
    return date.getDay();
  },
  // Day of week: 'Su', 'Mo', ..., 'Sa'
  dd: function dd(date, locale) {
    return locale.weekdaysMin[date.getDay()];
  },
  // Day of week: 'Sun', 'Mon',..., 'Sat'
  ddd: function ddd(date, locale) {
    return locale.weekdaysShort[date.getDay()];
  },
  // Day of week: 'Sunday', 'Monday', ...,'Saturday'
  dddd: function dddd(date, locale) {
    return locale.weekdays[date.getDay()];
  },
  // AM, PM
  A: function A(date, locale) {
    var meridiemFunc = locale.meridiem || meridiem;
    return meridiemFunc(date.getHours(), date.getMinutes(), false);
  },
  // am, pm
  a: function a(date, locale) {
    var meridiemFunc = locale.meridiem || meridiem;
    return meridiemFunc(date.getHours(), date.getMinutes(), true);
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z: function Z(date) {
    return formatTimezone(getOffset(date), ':');
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ: function ZZ(date) {
    return formatTimezone(getOffset(date));
  },
  // Seconds timestamp: 512969520
  X: function X(date) {
    return Math.floor(date.getTime() / 1000);
  },
  // Milliseconds timestamp: 512969520900
  x: function x(date) {
    return date.getTime();
  },
  w: function w(date, locale) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.getWeek)(date, {
      firstDayOfWeek: locale.firstDayOfWeek,
      firstWeekContainsDate: locale.firstWeekContainsDate
    });
  },
  ww: function ww(date, locale) {
    return pad(formatFlags.w(date, locale), 2);
  }
};
function format(val, str) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var formatStr = str ? String(str) : 'YYYY-MM-DDTHH:mm:ss.SSSZ';
  var date = (0,_util__WEBPACK_IMPORTED_MODULE_0__.toDate)(val);

  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isValidDate)(date)) {
    return 'Invalid Date';
  }

  var locale = options.locale || _locale_en__WEBPACK_IMPORTED_MODULE_1__["default"];
  return formatStr.replace(REGEX_FORMAT, function (match, p1) {
    if (p1) {
      return p1;
    }

    if (typeof formatFlags[match] === 'function') {
      return "".concat(formatFlags[match](date, locale));
    }

    return match;
  });
}

/***/ }),

/***/ "./node_modules/date-format-parse/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-format-parse/es/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_0__.format),
/* harmony export */   "getWeek": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.getWeek),
/* harmony export */   "isDate": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isDate),
/* harmony export */   "isValidDate": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isValidDate),
/* harmony export */   "parse": () => (/* reexport safe */ _parse__WEBPACK_IMPORTED_MODULE_1__.parse),
/* harmony export */   "toDate": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.toDate)
/* harmony export */ });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format */ "./node_modules/date-format-parse/es/format.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ "./node_modules/date-format-parse/es/parse.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/date-format-parse/es/util.js");




/***/ }),

/***/ "./node_modules/date-format-parse/es/locale/en.js":
/*!********************************************************!*\
  !*** ./node_modules/date-format-parse/es/locale/en.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var locale = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-format-parse/es/parse.js":
/*!****************************************************!*\
  !*** ./node_modules/date-format-parse/es/parse.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _locale_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale/en */ "./node_modules/date-format-parse/es/locale/en.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/date-format-parse/es/util.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var formattingTokens = /(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g;
var match1 = /\d/; // 0 - 9

var match2 = /\d\d/; // 00 - 99

var match3 = /\d{3}/; // 000 - 999

var match4 = /\d{4}/; // 0000 - 9999

var match1to2 = /\d\d?/; // 0 - 99

var matchShortOffset = /[+-]\d\d:?\d\d/; // +00:00 -00:00 +0000 or -0000

var matchSigned = /[+-]?\d+/; // -inf - inf

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// const matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i; // Word

var YEAR = 'year';
var MONTH = 'month';
var DAY = 'day';
var HOUR = 'hour';
var MINUTE = 'minute';
var SECOND = 'second';
var MILLISECOND = 'millisecond';
var parseFlags = {};

var addParseFlag = function addParseFlag(token, regex, callback) {
  var tokens = Array.isArray(token) ? token : [token];
  var func;

  if (typeof callback === 'string') {
    func = function func(input) {
      var value = parseInt(input, 10);
      return _defineProperty({}, callback, value);
    };
  } else {
    func = callback;
  }

  tokens.forEach(function (key) {
    parseFlags[key] = [regex, func];
  });
};

var escapeStringRegExp = function escapeStringRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
};

var matchWordRegExp = function matchWordRegExp(localeKey) {
  return function (locale) {
    var array = locale[localeKey];

    if (!Array.isArray(array)) {
      throw new Error("Locale[".concat(localeKey, "] need an array"));
    }

    return new RegExp(array.map(escapeStringRegExp).join('|'));
  };
};

var matchWordCallback = function matchWordCallback(localeKey, key) {
  return function (input, locale) {
    var array = locale[localeKey];

    if (!Array.isArray(array)) {
      throw new Error("Locale[".concat(localeKey, "] need an array"));
    }

    var index = array.indexOf(input);

    if (index < 0) {
      throw new Error('Invalid Word');
    }

    return _defineProperty({}, key, index);
  };
};

addParseFlag('Y', matchSigned, YEAR);
addParseFlag('YY', match2, function (input) {
  var year = new Date().getFullYear();
  var cent = Math.floor(year / 100);
  var value = parseInt(input, 10);
  value = (value > 68 ? cent - 1 : cent) * 100 + value;
  return _defineProperty({}, YEAR, value);
});
addParseFlag('YYYY', match4, YEAR);
addParseFlag('M', match1to2, function (input) {
  return _defineProperty({}, MONTH, parseInt(input, 10) - 1);
});
addParseFlag('MM', match2, function (input) {
  return _defineProperty({}, MONTH, parseInt(input, 10) - 1);
});
addParseFlag('MMM', matchWordRegExp('monthsShort'), matchWordCallback('monthsShort', MONTH));
addParseFlag('MMMM', matchWordRegExp('months'), matchWordCallback('months', MONTH));
addParseFlag('D', match1to2, DAY);
addParseFlag('DD', match2, DAY);
addParseFlag(['H', 'h'], match1to2, HOUR);
addParseFlag(['HH', 'hh'], match2, HOUR);
addParseFlag('m', match1to2, MINUTE);
addParseFlag('mm', match2, MINUTE);
addParseFlag('s', match1to2, SECOND);
addParseFlag('ss', match2, SECOND);
addParseFlag('S', match1, function (input) {
  return _defineProperty({}, MILLISECOND, parseInt(input, 10) * 100);
});
addParseFlag('SS', match2, function (input) {
  return _defineProperty({}, MILLISECOND, parseInt(input, 10) * 10);
});
addParseFlag('SSS', match3, MILLISECOND);

function matchMeridiem(locale) {
  return locale.meridiemParse || /[ap]\.?m?\.?/i;
}

function defaultIsPM(input) {
  return "".concat(input).toLowerCase().charAt(0) === 'p';
}

addParseFlag(['A', 'a'], matchMeridiem, function (input, locale) {
  var isPM = typeof locale.isPM === 'function' ? locale.isPM(input) : defaultIsPM(input);
  return {
    isPM: isPM
  };
});

function offsetFromString(str) {
  var _ref8 = str.match(/([+-]|\d\d)/g) || ['-', '0', '0'],
      _ref9 = _slicedToArray(_ref8, 3),
      symbol = _ref9[0],
      hour = _ref9[1],
      minute = _ref9[2];

  var minutes = parseInt(hour, 10) * 60 + parseInt(minute, 10);

  if (minutes === 0) {
    return 0;
  }

  return symbol === '+' ? -minutes : +minutes;
}

addParseFlag(['Z', 'ZZ'], matchShortOffset, function (input) {
  return {
    offset: offsetFromString(input)
  };
});
addParseFlag('x', matchSigned, function (input) {
  return {
    date: new Date(parseInt(input, 10))
  };
});
addParseFlag('X', matchTimestamp, function (input) {
  return {
    date: new Date(parseFloat(input) * 1000)
  };
});
addParseFlag('d', match1, 'weekday');
addParseFlag('dd', matchWordRegExp('weekdaysMin'), matchWordCallback('weekdaysMin', 'weekday'));
addParseFlag('ddd', matchWordRegExp('weekdaysShort'), matchWordCallback('weekdaysShort', 'weekday'));
addParseFlag('dddd', matchWordRegExp('weekdays'), matchWordCallback('weekdays', 'weekday'));
addParseFlag('w', match1to2, 'week');
addParseFlag('ww', match2, 'week');

function to24hour(hour, isPM) {
  if (hour !== undefined && isPM !== undefined) {
    if (isPM) {
      if (hour < 12) {
        return hour + 12;
      }
    } else if (hour === 12) {
      return 0;
    }
  }

  return hour;
}

function getFullInputArray(input) {
  var backupDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var result = [0, 0, 1, 0, 0, 0, 0];
  var backupArr = [backupDate.getFullYear(), backupDate.getMonth(), backupDate.getDate(), backupDate.getHours(), backupDate.getMinutes(), backupDate.getSeconds(), backupDate.getMilliseconds()];
  var useBackup = true;

  for (var i = 0; i < 7; i++) {
    if (input[i] === undefined) {
      result[i] = useBackup ? backupArr[i] : result[i];
    } else {
      result[i] = input[i];
      useBackup = false;
    }
  }

  return result;
}

function createDate(y, m, d, h, M, s, ms) {
  var date;

  if (y < 100 && y >= 0) {
    date = new Date(y + 400, m, d, h, M, s, ms);

    if (isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
  } else {
    date = new Date(y, m, d, h, M, s, ms);
  }

  return date;
}

function createUTCDate() {
  var date;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var y = args[0];

  if (y < 100 && y >= 0) {
    args[0] += 400;
    date = new Date(Date.UTC.apply(Date, args)); // eslint-disable-next-line no-restricted-globals

    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
  } else {
    date = new Date(Date.UTC.apply(Date, args));
  }

  return date;
}

function makeParser(dateString, format, locale) {
  var tokens = format.match(formattingTokens);

  if (!tokens) {
    throw new Error();
  }

  var length = tokens.length;
  var mark = {};

  for (var i = 0; i < length; i += 1) {
    var token = tokens[i];
    var parseTo = parseFlags[token];

    if (!parseTo) {
      var word = token.replace(/^\[|\]$/g, '');

      if (dateString.indexOf(word) === 0) {
        dateString = dateString.substr(word.length);
      } else {
        throw new Error('not match');
      }
    } else {
      var regex = typeof parseTo[0] === 'function' ? parseTo[0](locale) : parseTo[0];
      var parser = parseTo[1];
      var value = (regex.exec(dateString) || [])[0];
      var obj = parser(value, locale);
      mark = _objectSpread({}, mark, {}, obj);
      dateString = dateString.replace(value, '');
    }
  }

  return mark;
}

function parse(str, format) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  try {
    var _options$locale = options.locale,
        _locale = _options$locale === void 0 ? _locale_en__WEBPACK_IMPORTED_MODULE_0__["default"] : _options$locale,
        _options$backupDate = options.backupDate,
        backupDate = _options$backupDate === void 0 ? new Date() : _options$backupDate;

    var parseResult = makeParser(str, format, _locale);
    var year = parseResult.year,
        month = parseResult.month,
        day = parseResult.day,
        hour = parseResult.hour,
        minute = parseResult.minute,
        second = parseResult.second,
        millisecond = parseResult.millisecond,
        isPM = parseResult.isPM,
        date = parseResult.date,
        offset = parseResult.offset,
        weekday = parseResult.weekday,
        week = parseResult.week;

    if (date) {
      return date;
    }

    var inputArray = [year, month, day, hour, minute, second, millisecond];
    inputArray[3] = to24hour(inputArray[3], isPM); // check week

    if (week !== undefined && month === undefined && day === undefined) {
      // new Date(year, 3) make sure in current year
      var firstDate = (0,_util__WEBPACK_IMPORTED_MODULE_1__.startOfWeekYear)(year === undefined ? backupDate : new Date(year, 3), {
        firstDayOfWeek: _locale.firstDayOfWeek,
        firstWeekContainsDate: _locale.firstWeekContainsDate
      });
      return new Date(firstDate.getTime() + (week - 1) * 7 * 24 * 3600 * 1000);
    }

    var parsedDate;
    var result = getFullInputArray(inputArray, backupDate);

    if (offset !== undefined) {
      result[6] += offset * 60 * 1000;
      parsedDate = createUTCDate.apply(void 0, _toConsumableArray(result));
    } else {
      parsedDate = createDate.apply(void 0, _toConsumableArray(result));
    } // check weekday


    if (weekday !== undefined && parsedDate.getDay() !== weekday) {
      return new Date(NaN);
    }

    return parsedDate;
  } catch (e) {
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/date-format-parse/es/util.js":
/*!***************************************************!*\
  !*** ./node_modules/date-format-parse/es/util.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeek": () => (/* binding */ getWeek),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isValidDate": () => (/* binding */ isValidDate),
/* harmony export */   "startOfWeek": () => (/* binding */ startOfWeek),
/* harmony export */   "startOfWeekYear": () => (/* binding */ startOfWeekYear),
/* harmony export */   "toDate": () => (/* binding */ toDate)
/* harmony export */ });
function isDate(value) {
  return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
function toDate(value) {
  if (isDate(value)) {
    return new Date(value.getTime());
  }

  if (value == null) {
    return new Date(NaN);
  }

  return new Date(value);
}
function isValidDate(value) {
  return isDate(value) && !isNaN(value.getTime());
}
function startOfWeek(value) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!(firstDayOfWeek >= 0 && firstDayOfWeek <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6');
  }

  var date = toDate(value);
  var day = date.getDay();
  var diff = (day + 7 - firstDayOfWeek) % 7;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfWeekYear(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$firstDayOfWeek = _ref.firstDayOfWeek,
      firstDayOfWeek = _ref$firstDayOfWeek === void 0 ? 0 : _ref$firstDayOfWeek,
      _ref$firstWeekContain = _ref.firstWeekContainsDate,
      firstWeekContainsDate = _ref$firstWeekContain === void 0 ? 1 : _ref$firstWeekContain;

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7');
  }

  var date = toDate(value);
  var year = date.getFullYear();
  var firstDateOfFirstWeek = new Date(0);

  for (var i = year + 1; i >= year - 1; i--) {
    firstDateOfFirstWeek.setFullYear(i, 0, firstWeekContainsDate);
    firstDateOfFirstWeek.setHours(0, 0, 0, 0);
    firstDateOfFirstWeek = startOfWeek(firstDateOfFirstWeek, firstDayOfWeek);

    if (date.getTime() >= firstDateOfFirstWeek.getTime()) {
      break;
    }
  }

  return firstDateOfFirstWeek;
}
function getWeek(value) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$firstDayOfWeek = _ref2.firstDayOfWeek,
      firstDayOfWeek = _ref2$firstDayOfWeek === void 0 ? 0 : _ref2$firstDayOfWeek,
      _ref2$firstWeekContai = _ref2.firstWeekContainsDate,
      firstWeekContainsDate = _ref2$firstWeekContai === void 0 ? 1 : _ref2$firstWeekContai;

  var date = toDate(value);
  var firstDateOfThisWeek = startOfWeek(date, firstDayOfWeek);
  var firstDateOfFirstWeek = startOfWeekYear(date, {
    firstDayOfWeek: firstDayOfWeek,
    firstWeekContainsDate: firstWeekContainsDate
  });
  var diff = firstDateOfThisWeek.getTime() - firstDateOfFirstWeek.getTime();
  return Math.round(diff / (7 * 24 * 3600 * 1000)) + 1;
}

/***/ }),

/***/ "./resources/js/assets/images/logo-dark.png":
/*!**************************************************!*\
  !*** ./resources/js/assets/images/logo-dark.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/logo-dark.png?f85dba6d884d32a2f6b6c5404bb19748";

/***/ }),

/***/ "./resources/js/assets/images/logo-light.png":
/*!***************************************************!*\
  !*** ./resources/js/assets/images/logo-light.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/logo-light.png?3f7305d328f1b7c3f96726eaf20a45d3";

/***/ }),

/***/ "./resources/js/assets/images/logo-sm-dark.png":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/logo-sm-dark.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/logo-sm-dark.png?3acb546899038322f9b0bf5fc0f038ba";

/***/ }),

/***/ "./resources/js/assets/images/logo-sm.png":
/*!************************************************!*\
  !*** ./resources/js/assets/images/logo-sm.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/logo-sm.png?d0b4aaf8358a778085086603d32d666e";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-1.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-1.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-1.jpg?cefbe3d21660cf096fd067ef2dc5b773";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-10.jpg":
/*!********************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-10.jpg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-10.jpg?36fcf292e489198725b24e95176ced89";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-2.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-2.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-2.jpg?d8247dbf6a9e498e033f445ef6992b64";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-4.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-4.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-4.jpg?a2e1eb529e4e11f36fb1765321c57ec0";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-5.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-5.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-5.jpg?59af67849fd28e58abe9dfc634772192";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-6.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-6.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-6.jpg?d98a113b0a21674ffd70a754735b7ecc";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-7.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-7.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-7.jpg?3fec102cae56f3caa3f62758767a5763";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-8.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-8.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-8.jpg?40b8158c02ea476b9c54cac14387b8cb";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-9.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-9.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-9.jpg?effcd89f3d82672513777065799fcfec";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_57a7a2cd_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_57a7a2cd_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_57a7a2cd_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_id_23f830c9_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_id_23f830c9_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_id_23f830c9_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_45f7331a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_45f7331a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_45f7331a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_5c897250_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_5c897250_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_5c897250_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_c44b75b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_c44b75b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_c44b75b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_style_index_0_id_cd71e306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_style_index_0_id_cd71e306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_style_index_0_id_cd71e306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_style_index_0_id_d745e242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_style_index_0_id_d745e242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_style_index_0_id_d745e242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_style_index_0_id_158f6aa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_style_index_0_id_158f6aa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_style_index_0_id_158f6aa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultDashboard_vue_vue_type_style_index_0_id_139bf1bd_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultDashboard_vue_vue_type_style_index_0_id_139bf1bd_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultDashboard_vue_vue_type_style_index_0_id_139bf1bd_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_vue_vue_type_style_index_0_id_dabfeb60_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_vue_vue_type_style_index_0_id_dabfeb60_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_vue_vue_type_style_index_0_id_dabfeb60_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_club_vue_vue_type_style_index_0_id_48b1c82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_club_vue_vue_type_style_index_0_id_48b1c82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_club_vue_vue_type_style_index_0_id_48b1c82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_vue_vue_type_style_index_0_id_37818889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_vue_vue_type_style_index_0_id_37818889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_vue_vue_type_style_index_0_id_37818889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_chart_vue_vue_type_style_index_0_id_5f47a8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_chart_vue_vue_type_style_index_0_id_5f47a8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_chart_vue_vue_type_style_index_0_id_5f47a8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_blood_type_vue_vue_type_style_index_0_id_1a887ec0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_blood_type_vue_vue_type_style_index_0_id_1a887ec0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_blood_type_vue_vue_type_style_index_0_id_1a887ec0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_id_7397033b_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_id_7397033b_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_id_7397033b_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_135f7e36_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_135f7e36_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_135f7e36_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/general/Footer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/general/Footer.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_57a7a2cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=57a7a2cd& */ "./resources/js/components/general/Footer.vue?vue&type=template&id=57a7a2cd&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/general/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _Footer_vue_vue_type_style_index_0_id_57a7a2cd_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css& */ "./resources/js/components/general/Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_57a7a2cd___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_57a7a2cd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/Horizontal-navbar.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/general/Horizontal-navbar.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Horizontal_navbar_vue_vue_type_template_id_2d453397___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Horizontal-navbar.vue?vue&type=template&id=2d453397& */ "./resources/js/components/general/Horizontal-navbar.vue?vue&type=template&id=2d453397&");
/* harmony import */ var _Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Horizontal-navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/general/Horizontal-navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Horizontal_navbar_vue_vue_type_template_id_2d453397___WEBPACK_IMPORTED_MODULE_0__.render,
  _Horizontal_navbar_vue_vue_type_template_id_2d453397___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/Horizontal-navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/Page-header.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/general/Page-header.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Page_header_vue_vue_type_template_id_23f830c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page-header.vue?vue&type=template&id=23f830c9& */ "./resources/js/components/general/Page-header.vue?vue&type=template&id=23f830c9&");
/* harmony import */ var _Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page-header.vue?vue&type=script&lang=js& */ "./resources/js/components/general/Page-header.vue?vue&type=script&lang=js&");
/* harmony import */ var _Page_header_vue_vue_type_style_index_0_id_23f830c9_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css& */ "./resources/js/components/general/Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Page_header_vue_vue_type_template_id_23f830c9___WEBPACK_IMPORTED_MODULE_0__.render,
  _Page_header_vue_vue_type_template_id_23f830c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/Page-header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/Rightbar.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/general/Rightbar.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rightbar_vue_vue_type_template_id_743db529___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rightbar.vue?vue&type=template&id=743db529& */ "./resources/js/components/general/Rightbar.vue?vue&type=template&id=743db529&");
/* harmony import */ var _Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rightbar.vue?vue&type=script&lang=js& */ "./resources/js/components/general/Rightbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rightbar_vue_vue_type_template_id_743db529___WEBPACK_IMPORTED_MODULE_0__.render,
  _Rightbar_vue_vue_type_template_id_743db529___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/Rightbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/Sidebar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/general/Sidebar.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_45f7331a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=45f7331a&scoped=true& */ "./resources/js/components/general/Sidebar.vue?vue&type=template&id=45f7331a&scoped=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/general/Sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _Sidebar_vue_vue_type_style_index_0_id_45f7331a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css& */ "./resources/js/components/general/Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_45f7331a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_45f7331a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "45f7331a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/Sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/Topbar.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/general/Topbar.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Topbar_vue_vue_type_template_id_5c897250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar.vue?vue&type=template&id=5c897250& */ "./resources/js/components/general/Topbar.vue?vue&type=template&id=5c897250&");
/* harmony import */ var _Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Topbar.vue?vue&type=script&lang=js& */ "./resources/js/components/general/Topbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _Topbar_vue_vue_type_style_index_0_id_5c897250_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css& */ "./resources/js/components/general/Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Topbar_vue_vue_type_template_id_5c897250___WEBPACK_IMPORTED_MODULE_0__.render,
  _Topbar_vue_vue_type_template_id_5c897250___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/Topbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/Two-column-sidebar.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/general/Two-column-sidebar.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Two_column_sidebar_vue_vue_type_template_id_15b93e38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Two-column-sidebar.vue?vue&type=template&id=15b93e38& */ "./resources/js/components/general/Two-column-sidebar.vue?vue&type=template&id=15b93e38&");
/* harmony import */ var _Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Two-column-sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/general/Two-column-sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Two_column_sidebar_vue_vue_type_template_id_15b93e38___WEBPACK_IMPORTED_MODULE_0__.render,
  _Two_column_sidebar_vue_vue_type_template_id_15b93e38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/Two-column-sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/loader.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/general/loader.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_vue_vue_type_template_id_c44b75b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.vue?vue&type=template&id=c44b75b6&scoped=true& */ "./resources/js/components/general/loader.vue?vue&type=template&id=c44b75b6&scoped=true&");
/* harmony import */ var _loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.vue?vue&type=script&lang=js& */ "./resources/js/components/general/loader.vue?vue&type=script&lang=js&");
/* harmony import */ var _loader_vue_vue_type_style_index_0_id_c44b75b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css& */ "./resources/js/components/general/loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loader_vue_vue_type_template_id_c44b75b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _loader_vue_vue_type_template_id_c44b75b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c44b75b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/loader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/notification.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/general/notification.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notification_vue_vue_type_template_id_cd71e306_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.vue?vue&type=template&id=cd71e306&scoped=true& */ "./resources/js/components/general/notification.vue?vue&type=template&id=cd71e306&scoped=true&");
/* harmony import */ var _notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.vue?vue&type=script&lang=js& */ "./resources/js/components/general/notification.vue?vue&type=script&lang=js&");
/* harmony import */ var _notification_vue_vue_type_style_index_0_id_cd71e306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css& */ "./resources/js/components/general/notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notification_vue_vue_type_template_id_cd71e306_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _notification_vue_vue_type_template_id_cd71e306_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cd71e306",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/notification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/recursive_menu.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/general/recursive_menu.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recursive_menu_vue_vue_type_template_id_7d9f6fde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recursive_menu.vue?vue&type=template&id=7d9f6fde& */ "./resources/js/components/general/recursive_menu.vue?vue&type=template&id=7d9f6fde&");
/* harmony import */ var _recursive_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recursive_menu.vue?vue&type=script&lang=js& */ "./resources/js/components/general/recursive_menu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _recursive_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _recursive_menu_vue_vue_type_template_id_7d9f6fde___WEBPACK_IMPORTED_MODULE_0__.render,
  _recursive_menu_vue_vue_type_template_id_7d9f6fde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/recursive_menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/statistic/booking.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/statistic/booking.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _booking_vue_vue_type_template_id_d745e242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.vue?vue&type=template&id=d745e242&scoped=true& */ "./resources/js/components/statistic/booking.vue?vue&type=template&id=d745e242&scoped=true&");
/* harmony import */ var _booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.vue?vue&type=script&lang=js& */ "./resources/js/components/statistic/booking.vue?vue&type=script&lang=js&");
/* harmony import */ var _booking_vue_vue_type_style_index_0_id_d745e242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css& */ "./resources/js/components/statistic/booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _booking_vue_vue_type_template_id_d745e242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _booking_vue_vue_type_template_id_d745e242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d745e242",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/statistic/booking.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/statistic/club.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/statistic/club.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _club_vue_vue_type_template_id_158f6aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club.vue?vue&type=template&id=158f6aa0&scoped=true& */ "./resources/js/components/statistic/club.vue?vue&type=template&id=158f6aa0&scoped=true&");
/* harmony import */ var _club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club.vue?vue&type=script&lang=js& */ "./resources/js/components/statistic/club.vue?vue&type=script&lang=js&");
/* harmony import */ var _club_vue_vue_type_style_index_0_id_158f6aa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css& */ "./resources/js/components/statistic/club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _club_vue_vue_type_template_id_158f6aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _club_vue_vue_type_template_id_158f6aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "158f6aa0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/statistic/club.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/statistic/defaultDashboard.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/statistic/defaultDashboard.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultDashboard_vue_vue_type_template_id_139bf1bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultDashboard.vue?vue&type=template&id=139bf1bd& */ "./resources/js/components/statistic/defaultDashboard.vue?vue&type=template&id=139bf1bd&");
/* harmony import */ var _defaultDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultDashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/statistic/defaultDashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _defaultDashboard_vue_vue_type_style_index_0_id_139bf1bd_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css& */ "./resources/js/components/statistic/defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _defaultDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _defaultDashboard_vue_vue_type_template_id_139bf1bd___WEBPACK_IMPORTED_MODULE_0__.render,
  _defaultDashboard_vue_vue_type_template_id_139bf1bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/statistic/defaultDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/statistic/h_m_s.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/statistic/h_m_s.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _h_m_s_vue_vue_type_template_id_dabfeb60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h_m_s.vue?vue&type=template&id=dabfeb60& */ "./resources/js/components/statistic/h_m_s.vue?vue&type=template&id=dabfeb60&");
/* harmony import */ var _h_m_s_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h_m_s.vue?vue&type=script&lang=js& */ "./resources/js/components/statistic/h_m_s.vue?vue&type=script&lang=js&");
/* harmony import */ var _h_m_s_vue_vue_type_style_index_0_id_dabfeb60_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css& */ "./resources/js/components/statistic/h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _h_m_s_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _h_m_s_vue_vue_type_template_id_dabfeb60___WEBPACK_IMPORTED_MODULE_0__.render,
  _h_m_s_vue_vue_type_template_id_dabfeb60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/statistic/h_m_s.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Crm-widget.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/widgets/Crm-widget.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Crm_widget_vue_vue_type_template_id_207e56c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Crm-widget.vue?vue&type=template&id=207e56c4& */ "./resources/js/components/widgets/Crm-widget.vue?vue&type=template&id=207e56c4&");
/* harmony import */ var _Crm_widget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Crm-widget.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Crm-widget.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Crm_widget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Crm_widget_vue_vue_type_template_id_207e56c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Crm_widget_vue_vue_type_template_id_207e56c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Crm-widget.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Marketing-reports.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/widgets/Marketing-reports.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Marketing_reports_vue_vue_type_template_id_9e291c46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Marketing-reports.vue?vue&type=template&id=9e291c46& */ "./resources/js/components/widgets/Marketing-reports.vue?vue&type=template&id=9e291c46&");
/* harmony import */ var _Marketing_reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marketing-reports.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Marketing-reports.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Marketing_reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Marketing_reports_vue_vue_type_template_id_9e291c46___WEBPACK_IMPORTED_MODULE_0__.render,
  _Marketing_reports_vue_vue_type_template_id_9e291c46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Marketing-reports.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Portlet.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/widgets/Portlet.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Portlet_vue_vue_type_template_id_65966c02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portlet.vue?vue&type=template&id=65966c02& */ "./resources/js/components/widgets/Portlet.vue?vue&type=template&id=65966c02&");
/* harmony import */ var _Portlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Portlet.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Portlet.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Portlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Portlet_vue_vue_type_template_id_65966c02___WEBPACK_IMPORTED_MODULE_0__.render,
  _Portlet_vue_vue_type_template_id_65966c02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Portlet.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Products-sales.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/widgets/Products-sales.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_sales_vue_vue_type_template_id_6db5416e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products-sales.vue?vue&type=template&id=6db5416e& */ "./resources/js/components/widgets/Products-sales.vue?vue&type=template&id=6db5416e&");
/* harmony import */ var _Products_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products-sales.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Products-sales.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_sales_vue_vue_type_template_id_6db5416e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_sales_vue_vue_type_template_id_6db5416e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Products-sales.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Projections-club.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/widgets/Projections-club.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projections_club_vue_vue_type_template_id_48b1c82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projections-club.vue?vue&type=template&id=48b1c82a&scoped=true& */ "./resources/js/components/widgets/Projections-club.vue?vue&type=template&id=48b1c82a&scoped=true&");
/* harmony import */ var _Projections_club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projections-club.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Projections-club.vue?vue&type=script&lang=js&");
/* harmony import */ var _Projections_club_vue_vue_type_style_index_0_id_48b1c82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css& */ "./resources/js/components/widgets/Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Projections_club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projections_club_vue_vue_type_template_id_48b1c82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Projections_club_vue_vue_type_template_id_48b1c82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "48b1c82a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Projections-club.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Projections.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/widgets/Projections.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projections_vue_vue_type_template_id_37818889_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projections.vue?vue&type=template&id=37818889&scoped=true& */ "./resources/js/components/widgets/Projections.vue?vue&type=template&id=37818889&scoped=true&");
/* harmony import */ var _Projections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projections.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Projections.vue?vue&type=script&lang=js&");
/* harmony import */ var _Projections_vue_vue_type_style_index_0_id_37818889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css& */ "./resources/js/components/widgets/Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Projections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projections_vue_vue_type_template_id_37818889_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Projections_vue_vue_type_template_id_37818889_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "37818889",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Projections.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Revenue-history.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/widgets/Revenue-history.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Revenue_history_vue_vue_type_template_id_47311b30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Revenue-history.vue?vue&type=template&id=47311b30& */ "./resources/js/components/widgets/Revenue-history.vue?vue&type=template&id=47311b30&");
/* harmony import */ var _Revenue_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Revenue-history.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Revenue-history.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Revenue_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Revenue_history_vue_vue_type_template_id_47311b30___WEBPACK_IMPORTED_MODULE_0__.render,
  _Revenue_history_vue_vue_type_template_id_47311b30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Revenue-history.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Revenue-report.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/widgets/Revenue-report.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Revenue_report_vue_vue_type_template_id_58747110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Revenue-report.vue?vue&type=template&id=58747110& */ "./resources/js/components/widgets/Revenue-report.vue?vue&type=template&id=58747110&");
/* harmony import */ var _Revenue_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Revenue-report.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Revenue-report.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Revenue_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Revenue_report_vue_vue_type_template_id_58747110___WEBPACK_IMPORTED_MODULE_0__.render,
  _Revenue_report_vue_vue_type_template_id_58747110___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Revenue-report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Widget-chart.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/widgets/Widget-chart.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Widget_chart_vue_vue_type_template_id_5f47a8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget-chart.vue?vue&type=template&id=5f47a8e0&scoped=true& */ "./resources/js/components/widgets/Widget-chart.vue?vue&type=template&id=5f47a8e0&scoped=true&");
/* harmony import */ var _Widget_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget-chart.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Widget-chart.vue?vue&type=script&lang=js&");
/* harmony import */ var _Widget_chart_vue_vue_type_style_index_0_id_5f47a8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css& */ "./resources/js/components/widgets/Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Widget_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Widget_chart_vue_vue_type_template_id_5f47a8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Widget_chart_vue_vue_type_template_id_5f47a8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5f47a8e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Widget-chart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _h_m_s_appointments_for_current_and_last_month_vue_vue_type_template_id_4ffd64d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h_m_s_appointments_for_current_and_last_month.vue?vue&type=template&id=4ffd64d4& */ "./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=template&id=4ffd64d4&");
/* harmony import */ var _h_m_s_appointments_for_current_and_last_month_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h_m_s_appointments_for_current_and_last_month.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _h_m_s_appointments_for_current_and_last_month_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _h_m_s_appointments_for_current_and_last_month_vue_vue_type_template_id_4ffd64d4___WEBPACK_IMPORTED_MODULE_0__.render,
  _h_m_s_appointments_for_current_and_last_month_vue_vue_type_template_id_4ffd64d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_appointments_times.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_appointments_times.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _h_m_s_appointments_times_vue_vue_type_template_id_3750a13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h_m_s_appointments_times.vue?vue&type=template&id=3750a13b& */ "./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=template&id=3750a13b&");
/* harmony import */ var _h_m_s_appointments_times_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h_m_s_appointments_times.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _h_m_s_appointments_times_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _h_m_s_appointments_times_vue_vue_type_template_id_3750a13b___WEBPACK_IMPORTED_MODULE_0__.render,
  _h_m_s_appointments_times_vue_vue_type_template_id_3750a13b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/h_m_s_appointments_times.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_patients_age.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_patients_age.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _h_m_s_patients_age_vue_vue_type_template_id_8a038de4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h_m_s_patients_age.vue?vue&type=template&id=8a038de4& */ "./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=template&id=8a038de4&");
/* harmony import */ var _h_m_s_patients_age_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h_m_s_patients_age.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _h_m_s_patients_age_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _h_m_s_patients_age_vue_vue_type_template_id_8a038de4___WEBPACK_IMPORTED_MODULE_0__.render,
  _h_m_s_patients_age_vue_vue_type_template_id_8a038de4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/h_m_s_patients_age.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_patients_blood_type.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_patients_blood_type.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _h_m_s_patients_blood_type_vue_vue_type_template_id_1a887ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h_m_s_patients_blood_type.vue?vue&type=template&id=1a887ec0&scoped=true& */ "./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=template&id=1a887ec0&scoped=true&");
/* harmony import */ var _h_m_s_patients_blood_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h_m_s_patients_blood_type.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=script&lang=js&");
/* harmony import */ var _h_m_s_patients_blood_type_vue_vue_type_style_index_0_id_1a887ec0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css& */ "./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _h_m_s_patients_blood_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _h_m_s_patients_blood_type_vue_vue_type_template_id_1a887ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _h_m_s_patients_blood_type_vue_vue_type_template_id_1a887ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1a887ec0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/h_m_s_patients_blood_type.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _h_m_s_total_amount_for_each_month_in_year_vue_vue_type_template_id_cd158168___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h_m_s_total_amount_for_each_month_in_year.vue?vue&type=template&id=cd158168& */ "./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=template&id=cd158168&");
/* harmony import */ var _h_m_s_total_amount_for_each_month_in_year_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h_m_s_total_amount_for_each_month_in_year.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _h_m_s_total_amount_for_each_month_in_year_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _h_m_s_total_amount_for_each_month_in_year_vue_vue_type_template_id_cd158168___WEBPACK_IMPORTED_MODULE_0__.render,
  _h_m_s_total_amount_for_each_month_in_year_vue_vue_type_template_id_cd158168___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _h_m_s_total_and_paid_amount_for_each_company_insurance_vue_vue_type_template_id_6a69f327___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=template&id=6a69f327& */ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=template&id=6a69f327&");
/* harmony import */ var _h_m_s_total_and_paid_amount_for_each_company_insurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _h_m_s_total_and_paid_amount_for_each_company_insurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _h_m_s_total_and_paid_amount_for_each_company_insurance_vue_vue_type_template_id_6a69f327___WEBPACK_IMPORTED_MODULE_0__.render,
  _h_m_s_total_and_paid_amount_for_each_company_insurance_vue_vue_type_template_id_6a69f327___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _h_m_s_total_and_paid_amount_for_each_doctors_vue_vue_type_template_id_529fa8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=template&id=529fa8fa& */ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=template&id=529fa8fa&");
/* harmony import */ var _h_m_s_total_and_paid_amount_for_each_doctors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _h_m_s_total_and_paid_amount_for_each_doctors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _h_m_s_total_and_paid_amount_for_each_doctors_vue_vue_type_template_id_529fa8fa___WEBPACK_IMPORTED_MODULE_0__.render,
  _h_m_s_total_and_paid_amount_for_each_doctors_vue_vue_type_template_id_529fa8fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/detached.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/layouts/detached.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detached.vue?vue&type=template&id=7032c937& */ "./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&");
/* harmony import */ var _detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detached.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.render,
  _detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/detached.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/horizontal.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/layouts/horizontal.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal.vue?vue&type=template&id=29c46cae& */ "./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&");
/* harmony import */ var _horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.render,
  _horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/horizontal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/main.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/layouts/main.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=de3c3304& */ "./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.render,
  _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/two-column.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/layouts/two-column.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./two-column.vue?vue&type=template&id=ffe4ac08& */ "./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&");
/* harmony import */ var _two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-column.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.render,
  _two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/two-column.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertical.vue?vue&type=template&id=7397033b& */ "./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&");
/* harmony import */ var _vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&");
/* harmony import */ var _vertical_vue_vue_type_style_index_0_id_7397033b_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& */ "./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.render,
  _vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/vertical.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/general/dashboard/index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/pages/general/dashboard/index.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_135f7e36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=135f7e36& */ "./resources/js/views/pages/general/dashboard/index.vue?vue&type=template&id=135f7e36&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/general/dashboard/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_135f7e36_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css& */ "./resources/js/views/pages/general/dashboard/index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_135f7e36___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_135f7e36___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/general/dashboard/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/general/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/Horizontal-navbar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/general/Horizontal-navbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Horizontal-navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Horizontal-navbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/Page-header.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/general/Page-header.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/Rightbar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/general/Rightbar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rightbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Rightbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/general/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/Topbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/general/Topbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/Two-column-sidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/general/Two-column-sidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Two-column-sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Two-column-sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/loader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/general/loader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/notification.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/general/notification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/recursive_menu.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/general/recursive_menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recursive_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./recursive_menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/recursive_menu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recursive_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/statistic/booking.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/statistic/booking.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./booking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/statistic/club.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/statistic/club.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./club.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/statistic/defaultDashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/statistic/defaultDashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./defaultDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/statistic/h_m_s.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/statistic/h_m_s.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Crm-widget.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/widgets/Crm-widget.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Crm_widget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Crm-widget.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Crm-widget.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Crm_widget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Marketing-reports.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/widgets/Marketing-reports.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marketing_reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Marketing-reports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Marketing-reports.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marketing_reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Portlet.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/widgets/Portlet.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Portlet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Portlet.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Products-sales.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/widgets/Products-sales.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products-sales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Products-sales.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Projections-club.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/widgets/Projections-club.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projections-club.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Projections.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/widgets/Projections.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projections.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Revenue-history.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/widgets/Revenue-history.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Revenue_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Revenue-history.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-history.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Revenue_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Revenue-report.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/widgets/Revenue-report.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Revenue_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Revenue-report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-report.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Revenue_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Widget-chart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/widgets/Widget-chart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Widget-chart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_appointments_for_current_and_last_month_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_appointments_for_current_and_last_month.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_appointments_for_current_and_last_month_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_appointments_times_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_appointments_times.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_appointments_times_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_age_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_patients_age.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_age_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_blood_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_patients_blood_type.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_blood_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_amount_for_each_month_in_year_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_total_amount_for_each_month_in_year.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_amount_for_each_month_in_year_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_and_paid_amount_for_each_company_insurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_and_paid_amount_for_each_company_insurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_and_paid_amount_for_each_doctors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_and_paid_amount_for_each_doctors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/layouts/detached.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detached.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./horizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/main.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/layouts/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./two-column.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/general/dashboard/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/pages/general/dashboard/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/Footer.vue?vue&type=template&id=57a7a2cd&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/general/Footer.vue?vue&type=template&id=57a7a2cd& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_57a7a2cd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_57a7a2cd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_57a7a2cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=57a7a2cd& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=template&id=57a7a2cd&");


/***/ }),

/***/ "./resources/js/components/general/Horizontal-navbar.vue?vue&type=template&id=2d453397&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/general/Horizontal-navbar.vue?vue&type=template&id=2d453397& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_template_id_2d453397___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_template_id_2d453397___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_template_id_2d453397___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Horizontal-navbar.vue?vue&type=template&id=2d453397& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Horizontal-navbar.vue?vue&type=template&id=2d453397&");


/***/ }),

/***/ "./resources/js/components/general/Page-header.vue?vue&type=template&id=23f830c9&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/general/Page-header.vue?vue&type=template&id=23f830c9& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_template_id_23f830c9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_template_id_23f830c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_template_id_23f830c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=template&id=23f830c9& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=template&id=23f830c9&");


/***/ }),

/***/ "./resources/js/components/general/Rightbar.vue?vue&type=template&id=743db529&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/general/Rightbar.vue?vue&type=template&id=743db529& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_template_id_743db529___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_template_id_743db529___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_template_id_743db529___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rightbar.vue?vue&type=template&id=743db529& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Rightbar.vue?vue&type=template&id=743db529&");


/***/ }),

/***/ "./resources/js/components/general/Sidebar.vue?vue&type=template&id=45f7331a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/general/Sidebar.vue?vue&type=template&id=45f7331a&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_45f7331a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_45f7331a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_45f7331a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=45f7331a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=template&id=45f7331a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/general/Topbar.vue?vue&type=template&id=5c897250&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/general/Topbar.vue?vue&type=template&id=5c897250& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_5c897250___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_5c897250___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_5c897250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topbar.vue?vue&type=template&id=5c897250& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=template&id=5c897250&");


/***/ }),

/***/ "./resources/js/components/general/Two-column-sidebar.vue?vue&type=template&id=15b93e38&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/general/Two-column-sidebar.vue?vue&type=template&id=15b93e38& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_template_id_15b93e38___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_template_id_15b93e38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_template_id_15b93e38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Two-column-sidebar.vue?vue&type=template&id=15b93e38& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Two-column-sidebar.vue?vue&type=template&id=15b93e38&");


/***/ }),

/***/ "./resources/js/components/general/loader.vue?vue&type=template&id=c44b75b6&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/general/loader.vue?vue&type=template&id=c44b75b6&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_c44b75b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_c44b75b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_c44b75b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=template&id=c44b75b6&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=template&id=c44b75b6&scoped=true&");


/***/ }),

/***/ "./resources/js/components/general/notification.vue?vue&type=template&id=cd71e306&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/general/notification.vue?vue&type=template&id=cd71e306&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_cd71e306_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_cd71e306_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_cd71e306_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification.vue?vue&type=template&id=cd71e306&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=template&id=cd71e306&scoped=true&");


/***/ }),

/***/ "./resources/js/components/general/recursive_menu.vue?vue&type=template&id=7d9f6fde&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/general/recursive_menu.vue?vue&type=template&id=7d9f6fde& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recursive_menu_vue_vue_type_template_id_7d9f6fde___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recursive_menu_vue_vue_type_template_id_7d9f6fde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recursive_menu_vue_vue_type_template_id_7d9f6fde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./recursive_menu.vue?vue&type=template&id=7d9f6fde& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/recursive_menu.vue?vue&type=template&id=7d9f6fde&");


/***/ }),

/***/ "./resources/js/components/statistic/booking.vue?vue&type=template&id=d745e242&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/statistic/booking.vue?vue&type=template&id=d745e242&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_template_id_d745e242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_template_id_d745e242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_template_id_d745e242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./booking.vue?vue&type=template&id=d745e242&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=template&id=d745e242&scoped=true&");


/***/ }),

/***/ "./resources/js/components/statistic/club.vue?vue&type=template&id=158f6aa0&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/statistic/club.vue?vue&type=template&id=158f6aa0&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_template_id_158f6aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_template_id_158f6aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_template_id_158f6aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./club.vue?vue&type=template&id=158f6aa0&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=template&id=158f6aa0&scoped=true&");


/***/ }),

/***/ "./resources/js/components/statistic/defaultDashboard.vue?vue&type=template&id=139bf1bd&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/statistic/defaultDashboard.vue?vue&type=template&id=139bf1bd& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultDashboard_vue_vue_type_template_id_139bf1bd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultDashboard_vue_vue_type_template_id_139bf1bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultDashboard_vue_vue_type_template_id_139bf1bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./defaultDashboard.vue?vue&type=template&id=139bf1bd& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=template&id=139bf1bd&");


/***/ }),

/***/ "./resources/js/components/statistic/h_m_s.vue?vue&type=template&id=dabfeb60&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/statistic/h_m_s.vue?vue&type=template&id=dabfeb60& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_vue_vue_type_template_id_dabfeb60___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_vue_vue_type_template_id_dabfeb60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_vue_vue_type_template_id_dabfeb60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s.vue?vue&type=template&id=dabfeb60& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=template&id=dabfeb60&");


/***/ }),

/***/ "./resources/js/components/widgets/Crm-widget.vue?vue&type=template&id=207e56c4&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/widgets/Crm-widget.vue?vue&type=template&id=207e56c4& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crm_widget_vue_vue_type_template_id_207e56c4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crm_widget_vue_vue_type_template_id_207e56c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crm_widget_vue_vue_type_template_id_207e56c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Crm-widget.vue?vue&type=template&id=207e56c4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Crm-widget.vue?vue&type=template&id=207e56c4&");


/***/ }),

/***/ "./resources/js/components/widgets/Marketing-reports.vue?vue&type=template&id=9e291c46&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/widgets/Marketing-reports.vue?vue&type=template&id=9e291c46& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Marketing_reports_vue_vue_type_template_id_9e291c46___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Marketing_reports_vue_vue_type_template_id_9e291c46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Marketing_reports_vue_vue_type_template_id_9e291c46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Marketing-reports.vue?vue&type=template&id=9e291c46& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Marketing-reports.vue?vue&type=template&id=9e291c46&");


/***/ }),

/***/ "./resources/js/components/widgets/Portlet.vue?vue&type=template&id=65966c02&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/widgets/Portlet.vue?vue&type=template&id=65966c02& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Portlet_vue_vue_type_template_id_65966c02___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Portlet_vue_vue_type_template_id_65966c02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Portlet_vue_vue_type_template_id_65966c02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Portlet.vue?vue&type=template&id=65966c02& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Portlet.vue?vue&type=template&id=65966c02&");


/***/ }),

/***/ "./resources/js/components/widgets/Products-sales.vue?vue&type=template&id=6db5416e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/widgets/Products-sales.vue?vue&type=template&id=6db5416e& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_sales_vue_vue_type_template_id_6db5416e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_sales_vue_vue_type_template_id_6db5416e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_sales_vue_vue_type_template_id_6db5416e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products-sales.vue?vue&type=template&id=6db5416e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Products-sales.vue?vue&type=template&id=6db5416e&");


/***/ }),

/***/ "./resources/js/components/widgets/Projections-club.vue?vue&type=template&id=48b1c82a&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/widgets/Projections-club.vue?vue&type=template&id=48b1c82a&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_club_vue_vue_type_template_id_48b1c82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_club_vue_vue_type_template_id_48b1c82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_club_vue_vue_type_template_id_48b1c82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projections-club.vue?vue&type=template&id=48b1c82a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=template&id=48b1c82a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/widgets/Projections.vue?vue&type=template&id=37818889&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/widgets/Projections.vue?vue&type=template&id=37818889&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_vue_vue_type_template_id_37818889_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_vue_vue_type_template_id_37818889_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_vue_vue_type_template_id_37818889_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projections.vue?vue&type=template&id=37818889&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=template&id=37818889&scoped=true&");


/***/ }),

/***/ "./resources/js/components/widgets/Revenue-history.vue?vue&type=template&id=47311b30&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/widgets/Revenue-history.vue?vue&type=template&id=47311b30& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revenue_history_vue_vue_type_template_id_47311b30___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revenue_history_vue_vue_type_template_id_47311b30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revenue_history_vue_vue_type_template_id_47311b30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Revenue-history.vue?vue&type=template&id=47311b30& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-history.vue?vue&type=template&id=47311b30&");


/***/ }),

/***/ "./resources/js/components/widgets/Revenue-report.vue?vue&type=template&id=58747110&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/widgets/Revenue-report.vue?vue&type=template&id=58747110& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revenue_report_vue_vue_type_template_id_58747110___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revenue_report_vue_vue_type_template_id_58747110___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revenue_report_vue_vue_type_template_id_58747110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Revenue-report.vue?vue&type=template&id=58747110& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Revenue-report.vue?vue&type=template&id=58747110&");


/***/ }),

/***/ "./resources/js/components/widgets/Widget-chart.vue?vue&type=template&id=5f47a8e0&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/widgets/Widget-chart.vue?vue&type=template&id=5f47a8e0&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_chart_vue_vue_type_template_id_5f47a8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_chart_vue_vue_type_template_id_5f47a8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_chart_vue_vue_type_template_id_5f47a8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Widget-chart.vue?vue&type=template&id=5f47a8e0&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=template&id=5f47a8e0&scoped=true&");


/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=template&id=4ffd64d4&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=template&id=4ffd64d4& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_appointments_for_current_and_last_month_vue_vue_type_template_id_4ffd64d4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_appointments_for_current_and_last_month_vue_vue_type_template_id_4ffd64d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_appointments_for_current_and_last_month_vue_vue_type_template_id_4ffd64d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_appointments_for_current_and_last_month.vue?vue&type=template&id=4ffd64d4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_for_current_and_last_month.vue?vue&type=template&id=4ffd64d4&");


/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=template&id=3750a13b&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=template&id=3750a13b& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_appointments_times_vue_vue_type_template_id_3750a13b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_appointments_times_vue_vue_type_template_id_3750a13b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_appointments_times_vue_vue_type_template_id_3750a13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_appointments_times.vue?vue&type=template&id=3750a13b& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_appointments_times.vue?vue&type=template&id=3750a13b&");


/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=template&id=8a038de4&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=template&id=8a038de4& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_age_vue_vue_type_template_id_8a038de4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_age_vue_vue_type_template_id_8a038de4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_age_vue_vue_type_template_id_8a038de4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_patients_age.vue?vue&type=template&id=8a038de4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_age.vue?vue&type=template&id=8a038de4&");


/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=template&id=1a887ec0&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=template&id=1a887ec0&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_blood_type_vue_vue_type_template_id_1a887ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_blood_type_vue_vue_type_template_id_1a887ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_blood_type_vue_vue_type_template_id_1a887ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_patients_blood_type.vue?vue&type=template&id=1a887ec0&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=template&id=1a887ec0&scoped=true&");


/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=template&id=cd158168&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=template&id=cd158168& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_amount_for_each_month_in_year_vue_vue_type_template_id_cd158168___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_amount_for_each_month_in_year_vue_vue_type_template_id_cd158168___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_amount_for_each_month_in_year_vue_vue_type_template_id_cd158168___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_total_amount_for_each_month_in_year.vue?vue&type=template&id=cd158168& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_amount_for_each_month_in_year.vue?vue&type=template&id=cd158168&");


/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=template&id=6a69f327&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=template&id=6a69f327& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_and_paid_amount_for_each_company_insurance_vue_vue_type_template_id_6a69f327___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_and_paid_amount_for_each_company_insurance_vue_vue_type_template_id_6a69f327___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_and_paid_amount_for_each_company_insurance_vue_vue_type_template_id_6a69f327___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=template&id=6a69f327& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_company_insurance.vue?vue&type=template&id=6a69f327&");


/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=template&id=529fa8fa&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=template&id=529fa8fa& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_and_paid_amount_for_each_doctors_vue_vue_type_template_id_529fa8fa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_and_paid_amount_for_each_doctors_vue_vue_type_template_id_529fa8fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_total_and_paid_amount_for_each_doctors_vue_vue_type_template_id_529fa8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=template&id=529fa8fa& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_total_and_paid_amount_for_each_doctors.vue?vue&type=template&id=529fa8fa&");


/***/ }),

/***/ "./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detached.vue?vue&type=template&id=7032c937& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&");


/***/ }),

/***/ "./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./horizontal.vue?vue&type=template&id=29c46cae& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&");


/***/ }),

/***/ "./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=de3c3304& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&");


/***/ }),

/***/ "./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./two-column.vue?vue&type=template&id=ffe4ac08& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&");


/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=template&id=7397033b& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&");


/***/ }),

/***/ "./resources/js/views/pages/general/dashboard/index.vue?vue&type=template&id=135f7e36&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/pages/general/dashboard/index.vue?vue&type=template&id=135f7e36& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_135f7e36___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_135f7e36___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_135f7e36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=135f7e36& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=template&id=135f7e36&");


/***/ }),

/***/ "./resources/js/components/general/Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/general/Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_57a7a2cd_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Footer.vue?vue&type=style&index=0&id=57a7a2cd&scope=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/general/Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/general/Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_id_23f830c9_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Page-header.vue?vue&type=style&index=0&id=23f830c9&lang=css&");


/***/ }),

/***/ "./resources/js/components/general/Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/general/Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_45f7331a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Sidebar.vue?vue&type=style&index=0&id=45f7331a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/general/Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/general/Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_5c897250_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/Topbar.vue?vue&type=style&index=0&id=5c897250&lang=css&");


/***/ }),

/***/ "./resources/js/components/general/loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/general/loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_c44b75b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/loader.vue?vue&type=style&index=0&id=c44b75b6&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/general/notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/general/notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_style_index_0_id_cd71e306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/general/notification.vue?vue&type=style&index=0&id=cd71e306&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/statistic/booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/statistic/booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_style_index_0_id_d745e242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/booking.vue?vue&type=style&index=0&id=d745e242&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/statistic/club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/statistic/club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_style_index_0_id_158f6aa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/club.vue?vue&type=style&index=0&id=158f6aa0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/statistic/defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/statistic/defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultDashboard_vue_vue_type_style_index_0_id_139bf1bd_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/defaultDashboard.vue?vue&type=style&index=0&id=139bf1bd&scope=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/statistic/h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/statistic/h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_vue_vue_type_style_index_0_id_dabfeb60_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/statistic/h_m_s.vue?vue&type=style&index=0&id=dabfeb60&scope=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/widgets/Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_club_vue_vue_type_style_index_0_id_48b1c82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections-club.vue?vue&type=style&index=0&id=48b1c82a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/widgets/Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projections_vue_vue_type_style_index_0_id_37818889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Projections.vue?vue&type=style&index=0&id=37818889&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/widgets/Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_chart_vue_vue_type_style_index_0_id_5f47a8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/Widget-chart.vue?vue&type=style&index=0&id=5f47a8e0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_h_m_s_patients_blood_type_vue_vue_type_style_index_0_id_1a887ec0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/widgets/h_m_s_patients_blood_type.vue?vue&type=style&index=0&id=1a887ec0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_id_7397033b_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&");


/***/ }),

/***/ "./resources/js/views/pages/general/dashboard/index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/views/pages/general/dashboard/index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_135f7e36_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/general/dashboard/index.vue?vue&type=style&index=0&id=135f7e36&scope=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue2-datepicker/index.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/vue2-datepicker/index.esm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_format_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-format-parse */ "./node_modules/date-format-parse/es/index.js");


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _extends$1() {
  return _extends$1 = Object.assign || function (a) {
    for (var b, c = 1; c < arguments.length; c++) {
      for (var d in b = arguments[c], b) {
        Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
      }
    }

    return a;
  }, _extends$1.apply(this, arguments);
}

var normalMerge = ["attrs", "props", "domProps"],
    toArrayMerge = ["class", "style", "directives"],
    functionalMerge = ["on", "nativeOn"],
    mergeJsxProps = function mergeJsxProps(a) {
  return a.reduce(function (c, a) {
    for (var b in a) {
      if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends$1({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
        var d = c[b] instanceof Array ? c[b] : [c[b]],
            e = a[b] instanceof Array ? a[b] : [a[b]];
        c[b] = d.concat(e);
      } else if (-1 !== functionalMerge.indexOf(b)) {
        for (var f in a[b]) {
          if (c[b][f]) {
            var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
            c[b][f] = g.concat(h);
          } else c[b][f] = a[b][f];
        }
      } else if ("hook" == b) for (var i in a[b]) {
        c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];
      } else c[b] = a[b];
    }

    return c;
  }, {});
},
    mergeFn = function mergeFn(a, b) {
  return function () {
    a && a.apply(this, arguments), b && b.apply(this, arguments);
  };
};

var helper = mergeJsxProps;

// new Date(10, 0, 1) The year from 0 to 99 will be incremented by 1900 automatically.
function createDate(y) {
  var M = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var date = new Date(y, M, d, h, m, s, ms);

  if (y < 100 && y >= 0) {
    date.setFullYear(y);
  }

  return date;
}
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}
function isValidRangeDate(date) {
  return Array.isArray(date) && date.length === 2 && date.every(isValidDate) && date[0] <= date[1];
}
function isValidDates(dates) {
  return Array.isArray(dates) && dates.every(isValidDate);
}
function getValidDate(value) {
  var date = new Date(value);

  if (isValidDate(date)) {
    return date;
  }

  for (var _len = arguments.length, backup = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    backup[_key - 1] = arguments[_key];
  }

  if (backup.length) {
    return getValidDate.apply(void 0, backup);
  }

  return new Date();
}
function startOfYear(value) {
  var date = new Date(value);
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfMonth(value) {
  var date = new Date(value);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfDay(value) {
  var date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getCalendar(_ref) {
  var firstDayOfWeek = _ref.firstDayOfWeek,
      year = _ref.year,
      month = _ref.month;
  var arr = []; // change to the last day of the last month

  var calendar = createDate(year, month, 0);
  var lastDayInLastMonth = calendar.getDate(); // getDay() 0 is Sunday, 1 is Monday

  var firstDayInLastMonth = lastDayInLastMonth - (calendar.getDay() + 7 - firstDayOfWeek) % 7;

  for (var i = firstDayInLastMonth; i <= lastDayInLastMonth; i++) {
    arr.push(createDate(year, month, i - lastDayInLastMonth));
  } // change to the last day of the current month


  calendar.setMonth(month + 1, 0);
  var lastDayInCurrentMonth = calendar.getDate();

  for (var _i = 1; _i <= lastDayInCurrentMonth; _i++) {
    arr.push(createDate(year, month, _i));
  }

  var lastMonthLength = lastDayInLastMonth - firstDayInLastMonth + 1;
  var nextMonthLength = 6 * 7 - lastMonthLength - lastDayInCurrentMonth;

  for (var _i2 = 1; _i2 <= nextMonthLength; _i2++) {
    arr.push(createDate(year, month, lastDayInCurrentMonth + _i2));
  }

  return arr;
}
function setMonth(dirtyDate, dirtyMonth) {
  var date = new Date(dirtyDate);
  var month = typeof dirtyMonth === 'function' ? dirtyMonth(date.getMonth()) : Number(dirtyMonth);
  var year = date.getFullYear();
  var daysInMonth = createDate(year, month + 1, 0).getDate();
  var day = date.getDate();
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}
function setYear(dirtyDate, dirtyYear) {
  var date = new Date(dirtyDate);
  var year = typeof dirtyYear === 'function' ? dirtyYear(date.getFullYear()) : dirtyYear;
  date.setFullYear(year);
  return date;
}
function assignTime(target, source) {
  var date = new Date(target);
  var time = new Date(source);
  date.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
  return date;
}

/**
 * chunk the array
 * @param {Array} arr
 * @param {Number} size
 */
function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    return [];
  }

  var result = [];
  var len = arr.length;
  var i = 0;
  size = size || len;

  while (i < len) {
    result.push(arr.slice(i, i += size));
  }

  return result;
}
/**
 * isObject
 * @param {*} obj
 * @returns {Boolean}
 */

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * pick object
 * @param {Object} obj
 * @param {Array|String} props
 */

function pick(obj, props) {
  if (!isObject(obj)) return {};

  if (!Array.isArray(props)) {
    props = [props];
  }

  var res = {};
  props.forEach(function (prop) {
    if (prop in obj) {
      res[prop] = obj[prop];
    }
  });
  return res;
}
/**
 * deep merge two object without merging array
 * @param {object} target
 * @param {object} source
 */

function mergeDeep(target, source) {
  if (!isObject(target)) {
    return {};
  }

  var result = target;

  if (isObject(source)) {
    Object.keys(source).forEach(function (key) {
      var value = source[key];

      if (isObject(value) && isObject(target[key])) {
        value = mergeDeep(target[key], value);
      }

      result = _objectSpread2({}, result, _defineProperty({}, key, value));
    });
  }

  return result;
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var en = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
};
var _default = locale;
exports["default"] = _default;
module.exports = exports.default;
});

var en$1 = unwrapExports(en);

var lang = {
  formatLocale: en$1,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true
};

var defaultLocale = 'en';
var locales = {};
locales[defaultLocale] = lang;
function locale(name, object, isLocal) {
  if (typeof name !== 'string') return locales[defaultLocale];
  var l = defaultLocale;

  if (locales[name]) {
    l = name;
  }

  if (object) {
    locales[name] = object;
    l = name;
  }

  if (!isLocal) {
    defaultLocale = l;
  }

  return locales[name] || locales[defaultLocale];
}
/**
 * get locale object
 * @param {string} name lang
 */

function getLocale(name) {
  return locale(name, null, true);
}

/* istanbul ignore file */
function rafThrottle(fn) {
  var isRunning = false;
  return function fnBinfRaf() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isRunning) return;
    isRunning = true;
    requestAnimationFrame(function () {
      isRunning = false;
      fn.apply(_this, args);
    });
  };
}

/**
 * get the hidden element width, height
 * @param {HTMLElement} element dom
 */
function getPopupElementSize(element) {
  var originalDisplay = element.style.display;
  var originalVisibility = element.style.visibility;
  element.style.display = 'block';
  element.style.visibility = 'hidden';
  var styles = window.getComputedStyle(element);
  var width = element.offsetWidth + parseInt(styles.marginLeft, 10) + parseInt(styles.marginRight, 10);
  var height = element.offsetHeight + parseInt(styles.marginTop, 10) + parseInt(styles.marginBottom, 10);
  element.style.display = originalDisplay;
  element.style.visibility = originalVisibility;
  return {
    width: width,
    height: height
  };
}
/**
 * get the popup position
 * @param {HTMLElement} el relative element
 * @param {Number} targetWidth target element's width
 * @param {Number} targetHeight target element's height
 * @param {Boolean} fixed
 */

function getRelativePosition(el, targetWidth, targetHeight, fixed) {
  var left = 0;
  var top = 0;
  var offsetX = 0;
  var offsetY = 0;
  var relativeRect = el.getBoundingClientRect();
  var dw = document.documentElement.clientWidth;
  var dh = document.documentElement.clientHeight;

  if (fixed) {
    offsetX = window.pageXOffset + relativeRect.left;
    offsetY = window.pageYOffset + relativeRect.top;
  }

  if (dw - relativeRect.left < targetWidth && relativeRect.right < targetWidth) {
    left = offsetX - relativeRect.left + 1;
  } else if (relativeRect.left + relativeRect.width / 2 <= dw / 2) {
    left = offsetX;
  } else {
    left = offsetX + relativeRect.width - targetWidth;
  }

  if (relativeRect.top <= targetHeight && dh - relativeRect.bottom <= targetHeight) {
    top = offsetY + dh - relativeRect.top - targetHeight;
  } else if (relativeRect.top + relativeRect.height / 2 <= dh / 2) {
    top = offsetY + relativeRect.height;
  } else {
    top = offsetY - targetHeight;
  }

  return {
    left: "".concat(left, "px"),
    top: "".concat(top, "px")
  };
}
function getScrollParent(node) {
  var until = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

  if (!node || node === until) {
    return null;
  }

  var style = function style(value, prop) {
    return getComputedStyle(value, null).getPropertyValue(prop);
  };

  var regex = /(auto|scroll)/;
  var scroll = regex.test(style(node, 'overflow') + style(node, 'overflow-y') + style(node, 'overflow-x'));
  return scroll ? node : getScrollParent(node.parentNode, until);
}

//
var script = {
  name: 'Popup',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      top: '',
      left: ''
    };
  },
  watch: {
    visible: {
      immediate: true,
      handler: function handler(val) {
        var _this = this;

        this.$nextTick(function () {
          if (val) {
            _this.displayPopup();
          }
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }

    this._clickoutEvent = 'ontouchend' in document ? 'touchstart' : 'mousedown';
    document.addEventListener(this._clickoutEvent, this.handleClickOutside); // change the popup position when resize or scroll

    var relativeElement = this.$parent.$el;
    this._displayPopup = rafThrottle(function () {
      return _this2.displayPopup();
    });
    this._scrollParent = getScrollParent(relativeElement) || window;

    this._scrollParent.addEventListener('scroll', this._displayPopup);

    window.addEventListener('resize', this._displayPopup);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.appendToBody && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    document.removeEventListener(this._clickoutEvent, this.handleClickOutside);

    this._scrollParent.removeEventListener('scroll', this._displayPopup);

    window.removeEventListener('resize', this._displayPopup);
  },
  methods: {
    handleClickOutside: function handleClickOutside(evt) {
      if (!this.visible) return;
      var target = evt.target;
      var el = this.$el;

      if (el && !el.contains(target)) {
        this.$emit('clickoutside', evt);
      }
    },
    displayPopup: function displayPopup() {
      if (!this.visible) return;
      var popup = this.$el;
      var relativeElement = this.$parent.$el;
      var appendToBody = this.appendToBody;

      if (!this._popupRect) {
        this._popupRect = getPopupElementSize(popup);
      }

      var _this$_popupRect = this._popupRect,
          width = _this$_popupRect.width,
          height = _this$_popupRect.height;

      var _getRelativePosition = getRelativePosition(relativeElement, width, height, appendToBody),
          left = _getRelativePosition.left,
          top = _getRelativePosition.top;

      this.left = left;
      this.top = top;
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition', {
    attrs: {
      "name": _vm.prefixClass + "-zoom-in-down"
    }
  }, [_vm.visible ? _c('div', {
    class: _vm.prefixClass + "-datepicker-main " + _vm.prefixClass + "-datepicker-popup",
    style: {
      top: _vm.top,
      left: _vm.left,
      position: 'absolute'
    }
  }, [_vm._t("default")], 2) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

/* script */

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 1024 1024",
      "width": "1em",
      "height": "1em"
    }
  }, [_c('path', {
    attrs: {
      "d": "M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
    }
  })]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, {}, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

/* script */

/* template */
var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24",
      "width": "1em",
      "height": "1em"
    }
  }, [_c('path', {
    attrs: {
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
    }
  })]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, {}, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

/* script */

/* template */
var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 1024 1024",
      "width": "1em",
      "height": "1em"
    }
  }, [_c('path', {
    attrs: {
      "d": "M810.005333 274.005333l-237.994667 237.994667 237.994667 237.994667-60.010667 60.010667-237.994667-237.994667-237.994667 237.994667-60.010667-60.010667 237.994667-237.994667-237.994667-237.994667 60.010667-60.010667 237.994667 237.994667 237.994667-237.994667z"
    }
  })]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, {}, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  props: {
    type: String,
    disabled: Boolean
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', _vm._g({
    class: [_vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-btn-icon-" + _vm.type, {
      disabled: _vm.disabled
    }],
    attrs: {
      "type": "button",
      "disabled": _vm.disabled
    }
  }, _vm.$listeners), [_c('i', {
    class: _vm.prefixClass + "-icon-" + _vm.type
  })]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$1, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var script$2 = {
  name: 'TableDate',
  components: {
    IconButton: __vue_component__$4
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    getWeek: {
      default: function _default() {
        return date_format_parse__WEBPACK_IMPORTED_MODULE_0__.getWeek;
      }
    },
    prefixClass: {
      default: 'mx'
    },
    onDateMouseEnter: {
      default: undefined
    },
    onDateMouseLeave: {
      default: undefined
    }
  },
  props: {
    disabledCalendarChanger: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    calendar: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    titleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    getRowClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    firstDayOfWeek: function firstDayOfWeek() {
      return this.getLocale().formatLocale.firstDayOfWeek || 0;
    },
    yearMonth: function yearMonth() {
      var _this$getLocale = this.getLocale(),
          yearFormat = _this$getLocale.yearFormat,
          monthBeforeYear = _this$getLocale.monthBeforeYear,
          _this$getLocale$month = _this$getLocale.monthFormat,
          monthFormat = _this$getLocale$month === void 0 ? 'MMM' : _this$getLocale$month;

      var yearLabel = {
        panel: 'year',
        label: this.formatDate(this.calendar, yearFormat)
      };
      var monthLabel = {
        panel: 'month',
        label: this.formatDate(this.calendar, monthFormat)
      };
      return monthBeforeYear ? [monthLabel, yearLabel] : [yearLabel, monthLabel];
    },
    days: function days() {
      var locale = this.getLocale();
      var days = locale.days || locale.formatLocale.weekdaysMin;
      return days.concat(days).slice(this.firstDayOfWeek, this.firstDayOfWeek + 7);
    },
    dates: function dates() {
      var year = this.calendar.getFullYear();
      var month = this.calendar.getMonth();
      var arr = getCalendar({
        firstDayOfWeek: this.firstDayOfWeek,
        year: year,
        month: month
      });
      return chunk(arr, 7);
    }
  },
  methods: {
    isDisabledArrows: function isDisabledArrows(type) {
      var date = new Date(this.calendar);

      switch (type) {
        case 'last-year':
          date.setFullYear(date.getFullYear() - 1, date.getMonth() + 1, 0);
          date.setHours(23, 59, 59, 999);
          break;

        case 'next-year':
          date.setFullYear(date.getFullYear() + 1);
          break;

        case 'last-month':
          date.setMonth(date.getMonth(), 0);
          date.setHours(23, 59, 59, 999);
          break;

        case 'next-month':
          date.setMonth(date.getMonth() + 1);
          break;
      }

      return this.disabledCalendarChanger(date, type);
    },
    handleIconLeftClick: function handleIconLeftClick() {
      this.$emit('changecalendar', setMonth(this.calendar, function (v) {
        return v - 1;
      }), 'last-month');
    },
    handleIconRightClick: function handleIconRightClick() {
      this.$emit('changecalendar', setMonth(this.calendar, function (v) {
        return v + 1;
      }), 'next-month');
    },
    handleIconDoubleLeftClick: function handleIconDoubleLeftClick() {
      this.$emit('changecalendar', setYear(this.calendar, function (v) {
        return v - 1;
      }), 'last-year');
    },
    handleIconDoubleRightClick: function handleIconDoubleRightClick() {
      this.$emit('changecalendar', setYear(this.calendar, function (v) {
        return v + 1;
      }), 'next-year');
    },
    handlePanelChange: function handlePanelChange(panel) {
      this.$emit('changepanel', panel);
    },
    handleMouseEnter: function handleMouseEnter(cell) {
      if (typeof this.onDateMouseEnter === 'function') {
        this.onDateMouseEnter(cell);
      }
    },
    handleMouseLeave: function handleMouseLeave(cell) {
      if (typeof this.onDateMouseLeave === 'function') {
        this.onDateMouseLeave(cell);
      }
    },
    handleCellClick: function handleCellClick(evt) {
      var target = evt.target;

      if (target.tagName.toUpperCase() === 'DIV') {
        target = target.parentNode;
      }

      var index = target.getAttribute('data-row-col');

      if (index) {
        var _index$split$map = index.split(',').map(function (v) {
          return parseInt(v, 10);
        }),
            _index$split$map2 = _slicedToArray(_index$split$map, 2),
            row = _index$split$map2[0],
            col = _index$split$map2[1];

        var date = this.dates[row][col];
        this.$emit('select', new Date(date));
      }
    },
    formatDate: function formatDate(date, fmt) {
      return (0,date_format_parse__WEBPACK_IMPORTED_MODULE_0__.format)(date, fmt, {
        locale: this.getLocale().formatLocale
      });
    },
    getCellTitle: function getCellTitle(date) {
      var fmt = this.titleFormat;
      return this.formatDate(date, fmt);
    },
    getWeekNumber: function getWeekNumber(date) {
      return this.getWeek(date, this.getLocale().formatLocale);
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-calendar " + _vm.prefixClass + "-calendar-panel-date"
  }, [_c('div', {
    class: _vm.prefixClass + "-calendar-header"
  }, [_c('icon-button', {
    attrs: {
      "type": "double-left",
      "disabled": _vm.isDisabledArrows('last-year')
    },
    on: {
      "click": _vm.handleIconDoubleLeftClick
    }
  }), _vm._v(" "), _c('icon-button', {
    attrs: {
      "type": "left",
      "disabled": _vm.isDisabledArrows('last-month')
    },
    on: {
      "click": _vm.handleIconLeftClick
    }
  }), _vm._v(" "), _c('icon-button', {
    attrs: {
      "type": "double-right",
      "disabled": _vm.isDisabledArrows('next-year')
    },
    on: {
      "click": _vm.handleIconDoubleRightClick
    }
  }), _vm._v(" "), _c('icon-button', {
    attrs: {
      "type": "right",
      "disabled": _vm.isDisabledArrows('next-month')
    },
    on: {
      "click": _vm.handleIconRightClick
    }
  }), _vm._v(" "), _c('span', {
    class: _vm.prefixClass + "-calendar-header-label"
  }, _vm._l(_vm.yearMonth, function (item) {
    return _c('button', {
      key: item.panel,
      class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-btn-current-" + item.panel,
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.handlePanelChange(item.panel);
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.label) + "\n      ")]);
  }), 0)], 1), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-calendar-content"
  }, [_c('table', {
    class: _vm.prefixClass + "-table " + _vm.prefixClass + "-table-date"
  }, [_c('thead', [_c('tr', [_vm.showWeekNumber ? _c('th', {
    class: _vm.prefixClass + "-week-number-header"
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.days, function (day) {
    return _c('th', {
      key: day
    }, [_vm._v(_vm._s(day))]);
  })], 2)]), _vm._v(" "), _c('tbody', {
    on: {
      "click": _vm.handleCellClick
    }
  }, _vm._l(_vm.dates, function (row, i) {
    return _c('tr', {
      key: i,
      class: [_vm.prefixClass + "-date-row", _vm.getRowClasses(row)]
    }, [_vm.showWeekNumber ? _c('td', {
      class: _vm.prefixClass + "-week-number",
      attrs: {
        "data-row-col": i + ",0"
      }
    }, [_vm._v("\n            " + _vm._s(_vm.getWeekNumber(row[0])) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm._l(row, function (cell, j) {
      return _c('td', {
        key: j,
        staticClass: "cell",
        class: _vm.getCellClasses(cell),
        attrs: {
          "data-row-col": i + "," + j,
          "title": _vm.getCellTitle(cell)
        },
        on: {
          "mouseenter": function mouseenter($event) {
            return _vm.handleMouseEnter(cell);
          },
          "mouseleave": function mouseleave($event) {
            return _vm.handleMouseLeave(cell);
          }
        }
      }, [_c('div', [_vm._v(_vm._s(cell.getDate()))])]);
    })], 2);
  }), 0)])])]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$2, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

//
var script$3 = {
  name: 'TableMonth',
  components: {
    IconButton: __vue_component__$4
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    disabledCalendarChanger: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    calendar: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    calendarYear: function calendarYear() {
      return this.calendar.getFullYear();
    },
    months: function months() {
      var locale = this.getLocale();
      var monthsLocale = locale.months || locale.formatLocale.monthsShort;
      var months = monthsLocale.map(function (text, month) {
        return {
          text: text,
          month: month
        };
      });
      return chunk(months, 3);
    }
  },
  methods: {
    isDisabledArrows: function isDisabledArrows(type) {
      var date = new Date(this.calendar);

      switch (type) {
        case 'last-year':
          date.setFullYear(date.getFullYear() - 1, 11, 31);
          date.setHours(23, 59, 59, 999);
          break;

        case 'next-year':
          date.setFullYear(date.getFullYear() + 1, 0, 1);
          break;
      }

      return this.disabledCalendarChanger(date, type);
    },
    handleIconDoubleLeftClick: function handleIconDoubleLeftClick() {
      this.$emit('changecalendar', setYear(this.calendar, function (v) {
        return v - 1;
      }), 'last-year');
    },
    handleIconDoubleRightClick: function handleIconDoubleRightClick() {
      this.$emit('changecalendar', setYear(this.calendar, function (v) {
        return v + 1;
      }), 'next-year');
    },
    handlePanelChange: function handlePanelChange() {
      this.$emit('changepanel', 'year');
    },
    handleClick: function handleClick(evt) {
      var target = evt.target;

      if (target.tagName.toUpperCase() === 'DIV') {
        target = target.parentNode;
      }

      var month = target.getAttribute('data-month');

      if (month && !target.classList.contains('disabled')) {
        this.$emit('select', parseInt(month, 10));
      }
    }
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-calendar " + _vm.prefixClass + "-calendar-panel-month"
  }, [_c('div', {
    class: _vm.prefixClass + "-calendar-header"
  }, [_c('icon-button', {
    attrs: {
      "type": "double-left",
      "disabled": _vm.isDisabledArrows('last-year')
    },
    on: {
      "click": _vm.handleIconDoubleLeftClick
    }
  }), _vm._v(" "), _c('icon-button', {
    attrs: {
      "type": "double-right",
      "disabled": _vm.isDisabledArrows('next-year')
    },
    on: {
      "click": _vm.handleIconDoubleRightClick
    }
  }), _vm._v(" "), _c('span', {
    class: _vm.prefixClass + "-calendar-header-label"
  }, [_c('button', {
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handlePanelChange
    }
  }, [_vm._v("\n        " + _vm._s(_vm.calendarYear) + "\n      ")])])], 1), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-calendar-content"
  }, [_c('table', {
    class: _vm.prefixClass + "-table " + _vm.prefixClass + "-table-month",
    on: {
      "click": _vm.handleClick
    }
  }, _vm._l(_vm.months, function (row, i) {
    return _c('tr', {
      key: i
    }, _vm._l(row, function (cell, j) {
      return _c('td', {
        key: j,
        staticClass: "cell",
        class: _vm.getCellClasses(cell.month),
        attrs: {
          "data-month": cell.month
        }
      }, [_c('div', [_vm._v(_vm._s(cell.text))])]);
    }), 0);
  }), 0)])]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = undefined;
/* scoped */

var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = undefined;
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$3, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

//
var script$4 = {
  name: 'TableYear',
  components: {
    IconButton: __vue_component__$4
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    disabledCalendarChanger: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    calendar: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    getYearPanel: {
      type: Function
    }
  },
  computed: {
    years: function years() {
      var calendar = new Date(this.calendar);

      if (typeof this.getYearPanel === 'function') {
        return this.getYearPanel(calendar);
      }

      return this.getYears(calendar);
    },
    firstYear: function firstYear() {
      return this.years[0][0];
    },
    lastYear: function lastYear() {
      var last = function last(arr) {
        return arr[arr.length - 1];
      };

      return last(last(this.years));
    }
  },
  methods: {
    isDisabledArrows: function isDisabledArrows(type) {
      var date = new Date(this.calendar);

      switch (type) {
        case 'last-decade':
          date.setFullYear(this.firstYear - 1, 11, 31);
          date.setHours(23, 59, 59, 999);
          break;

        case 'next-decade':
          date.setFullYear(this.lastYear + 1, 0, 1);
          break;
      }

      return this.disabledCalendarChanger(date, type);
    },
    getYears: function getYears(calendar) {
      var firstYear = Math.floor(calendar.getFullYear() / 10) * 10;
      var years = [];

      for (var i = 0; i < 10; i++) {
        years.push(firstYear + i);
      }

      return chunk(years, 2);
    },
    handleIconDoubleLeftClick: function handleIconDoubleLeftClick() {
      this.$emit('changecalendar', setYear(this.calendar, function (v) {
        return v - 10;
      }), 'last-decade');
    },
    handleIconDoubleRightClick: function handleIconDoubleRightClick() {
      this.$emit('changecalendar', setYear(this.calendar, function (v) {
        return v + 10;
      }), 'next-decade');
    },
    handleClick: function handleClick(evt) {
      var target = evt.target;

      if (target.tagName.toUpperCase() === 'DIV') {
        target = target.parentNode;
      }

      var year = target.getAttribute('data-year');

      if (year && !target.classList.contains('disabled')) {
        this.$emit('select', parseInt(year, 10));
      }
    }
  }
};

/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-calendar " + _vm.prefixClass + "-calendar-panel-year"
  }, [_c('div', {
    class: _vm.prefixClass + "-calendar-header"
  }, [_c('icon-button', {
    attrs: {
      "type": "double-left",
      "disabled": _vm.isDisabledArrows('last-decade')
    },
    on: {
      "click": _vm.handleIconDoubleLeftClick
    }
  }), _vm._v(" "), _c('icon-button', {
    attrs: {
      "type": "double-right",
      "disabled": _vm.isDisabledArrows('next-decade')
    },
    on: {
      "click": _vm.handleIconDoubleRightClick
    }
  }), _vm._v(" "), _c('span', {
    class: _vm.prefixClass + "-calendar-header-label"
  }, [_c('span', [_vm._v(_vm._s(_vm.firstYear))]), _vm._v(" "), _c('span', {
    class: _vm.prefixClass + "-calendar-decade-separator"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.lastYear))])])], 1), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-calendar-content"
  }, [_c('table', {
    class: _vm.prefixClass + "-table " + _vm.prefixClass + "-table-year",
    on: {
      "click": _vm.handleClick
    }
  }, _vm._l(_vm.years, function (row, i) {
    return _c('tr', {
      key: i
    }, _vm._l(row, function (cell, j) {
      return _c('td', {
        key: j,
        staticClass: "cell",
        class: _vm.getCellClasses(cell),
        attrs: {
          "data-year": cell
        }
      }, [_c('div', [_vm._v(_vm._s(cell))])]);
    }), 0);
  }), 0)])]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = undefined;
/* scoped */

var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = undefined;
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$7 = normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$4, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

var CalendarPanel = {
  name: 'CalendarPanel',
  inject: {
    prefixClass: {
      default: 'mx'
    },
    dispatchDatePicker: {
      default: function _default() {
        return function () {};
      }
    }
  },
  props: {
    value: {},
    defaultValue: {
      default: function _default() {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
      }
    },
    defaultPanel: {
      type: String
    },
    disabledCalendarChanger: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    disabledDate: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    type: {
      type: String,
      default: 'date'
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: undefined
    },
    getYearPanel: {
      type: Function
    },
    titleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    calendar: Date,
    // update date when select year or month
    partialUpdate: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var panels = ['date', 'month', 'year'];
    var index = Math.max(panels.indexOf(this.type), panels.indexOf(this.defaultPanel));
    var panel = index !== -1 ? panels[index] : 'date';
    return {
      panel: panel,
      innerCalendar: new Date()
    };
  },
  computed: {
    innerValue: function innerValue() {
      var value = Array.isArray(this.value) ? this.value : [this.value];
      var map = {
        year: startOfYear,
        month: startOfMonth,
        date: startOfDay
      };
      var start = map[this.type] || map.date;
      return value.filter(isValidDate).map(function (v) {
        return start(v);
      });
    },
    calendarYear: function calendarYear() {
      return this.innerCalendar.getFullYear();
    },
    calendarMonth: function calendarMonth() {
      return this.innerCalendar.getMonth();
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: 'initCalendar'
    },
    calendar: {
      handler: 'initCalendar'
    },
    defaultValue: {
      handler: 'initCalendar'
    }
  },
  methods: {
    initCalendar: function initCalendar() {
      var calendarDate = this.calendar;

      if (!isValidDate(calendarDate)) {
        var length = this.innerValue.length;
        calendarDate = getValidDate(length > 0 ? this.innerValue[length - 1] : this.defaultValue);
      }

      this.innerCalendar = startOfMonth(calendarDate);
    },
    isDisabled: function isDisabled(date) {
      return this.disabledDate(new Date(date), this.innerValue);
    },
    emitDate: function emitDate(date, type) {
      if (!this.isDisabled(date)) {
        this.$emit('select', date, type, this.innerValue); // someone need get the first selected date to set range value. (#429)

        this.dispatchDatePicker('pick', date, type);
      }
    },
    handleCalendarChange: function handleCalendarChange(calendar, type) {
      var oldCalendar = new Date(this.innerCalendar);
      this.innerCalendar = calendar;
      this.$emit('update:calendar', calendar);
      this.dispatchDatePicker('calendar-change', calendar, oldCalendar, type);
    },
    handelPanelChange: function handelPanelChange(panel) {
      var oldPanel = this.panel;
      this.panel = panel;
      this.dispatchDatePicker('panel-change', panel, oldPanel);
    },
    handleSelectYear: function handleSelectYear(year) {
      if (this.type === 'year') {
        var date = this.getYearCellDate(year);
        this.emitDate(date, 'year');
      } else {
        this.handleCalendarChange(createDate(year, this.calendarMonth), 'year');
        this.handelPanelChange('month');

        if (this.partialUpdate && this.innerValue.length === 1) {
          var _date = new Date(this.innerValue[0]);

          _date.setFullYear(year);

          this.emitDate(_date, 'year');
        }
      }
    },
    handleSelectMonth: function handleSelectMonth(month) {
      if (this.type === 'month') {
        var date = this.getMonthCellDate(month);
        this.emitDate(date, 'month');
      } else {
        this.handleCalendarChange(createDate(this.calendarYear, month), 'month');
        this.handelPanelChange('date');

        if (this.partialUpdate && this.innerValue.length === 1) {
          var _date2 = new Date(this.innerValue[0]);

          _date2.setFullYear(this.calendarYear);

          this.emitDate(setMonth(_date2, month), 'month');
        }
      }
    },
    handleSelectDate: function handleSelectDate(date) {
      this.emitDate(date, this.type === 'week' ? 'week' : 'date');
    },
    getMonthCellDate: function getMonthCellDate(month) {
      return createDate(this.calendarYear, month);
    },
    getYearCellDate: function getYearCellDate(year) {
      return createDate(year, 0);
    },
    getDateClasses: function getDateClasses(cellDate) {
      var notCurrentMonth = cellDate.getMonth() !== this.calendarMonth;
      var classes = [];

      if (cellDate.getTime() === new Date().setHours(0, 0, 0, 0)) {
        classes.push('today');
      }

      if (notCurrentMonth) {
        classes.push('not-current-month');
      }

      var state = this.getStateClass(cellDate);

      if (!(state === 'active' && notCurrentMonth)) {
        classes.push(state);
      }

      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getMonthClasses: function getMonthClasses(month) {
      var classes = [];

      if (this.type !== 'month') {
        if (this.calendarMonth === month) {
          classes.push('active');
        }

        var _cellDate = this.getMonthCellDate(month);

        if (this.disabledCalendarChanger(_cellDate, 'month')) {
          classes.push('disabled');
        }

        return classes;
      }

      var cellDate = this.getMonthCellDate(month);
      classes.push(this.getStateClass(cellDate));
      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getYearClasses: function getYearClasses(year) {
      var classes = [];

      if (this.type !== 'year') {
        if (this.calendarYear === year) {
          classes.push('active');
        }

        var _cellDate2 = this.getYearCellDate(year);

        if (this.disabledCalendarChanger(_cellDate2, 'year')) {
          classes.push('disabled');
        }

        return classes;
      }

      var cellDate = this.getYearCellDate(year);
      classes.push(this.getStateClass(cellDate));
      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getStateClass: function getStateClass(cellDate) {
      if (this.isDisabled(cellDate)) {
        return 'disabled';
      }

      if (this.innerValue.some(function (v) {
        return v.getTime() === cellDate.getTime();
      })) {
        return 'active';
      }

      return '';
    },
    getWeekState: function getWeekState(row) {
      if (this.type !== 'week') return '';
      var start = row[0].getTime();
      var end = row[6].getTime();
      var active = this.innerValue.some(function (v) {
        var time = v.getTime();
        return time >= start && time <= end;
      });
      return active ? "".concat(this.prefixClass, "-active-week") : '';
    }
  },
  render: function render() {
    var h = arguments[0];
    var panel = this.panel,
        innerCalendar = this.innerCalendar;

    if (panel === 'year') {
      return h(__vue_component__$7, {
        "attrs": {
          "disabledCalendarChanger": this.disabledCalendarChanger,
          "calendar": innerCalendar,
          "getCellClasses": this.getYearClasses,
          "getYearPanel": this.getYearPanel
        },
        "on": {
          "select": this.handleSelectYear,
          "changecalendar": this.handleCalendarChange
        }
      });
    }

    if (panel === 'month') {
      return h(__vue_component__$6, {
        "attrs": {
          "disabledCalendarChanger": this.disabledCalendarChanger,
          "calendar": innerCalendar,
          "getCellClasses": this.getMonthClasses
        },
        "on": {
          "select": this.handleSelectMonth,
          "changepanel": this.handelPanelChange,
          "changecalendar": this.handleCalendarChange
        }
      });
    }

    return h(__vue_component__$5, {
      "attrs": {
        "disabledCalendarChanger": this.disabledCalendarChanger,
        "calendar": innerCalendar,
        "getCellClasses": this.getDateClasses,
        "getRowClasses": this.getWeekState,
        "titleFormat": this.titleFormat,
        "showWeekNumber": typeof this.showWeekNumber === 'boolean' ? this.showWeekNumber : this.type === 'week'
      },
      "class": _defineProperty({}, "".concat(this.prefixClass, "-calendar-week-mode"), this.type === 'week'),
      "on": {
        "select": this.handleSelectDate,
        "changepanel": this.handelPanelChange,
        "changecalendar": this.handleCalendarChange
      }
    });
  }
};

var CalendarRange = {
  name: 'CalendarRange',
  components: {
    CalendarPanel: CalendarPanel
  },
  provide: function provide() {
    return {
      onDateMouseEnter: this.onDateMouseEnter,
      onDateMouseLeave: this.onDateMouseLeave
    };
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2({}, CalendarPanel.props),
  data: function data() {
    return {
      innerValue: [],
      calendars: [],
      hoveredValue: null
    };
  },
  computed: {
    // Minimum difference between start and end calendars
    calendarMinDiff: function calendarMinDiff() {
      var map = {
        date: 1,
        // type:date  min 1 month
        month: 1 * 12,
        // type:month min 1 year
        year: 10 * 12 // type:year  min 10 year

      };
      return map[this.type] || map.date;
    },
    calendarMaxDiff: function calendarMaxDiff() {
      return Infinity;
    },
    defaultValues: function defaultValues() {
      return Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler() {
        var _this = this;

        this.innerValue = isValidRangeDate(this.value) ? this.value : [new Date(NaN), new Date(NaN)];
        var calendars = this.innerValue.map(function (v, i) {
          return startOfMonth(getValidDate(v, _this.defaultValues[i]));
        });
        this.updateCalendars(calendars);
      }
    }
  },
  methods: {
    handleSelect: function handleSelect(date, type) {
      var _this$innerValue = _slicedToArray(this.innerValue, 2),
          startValue = _this$innerValue[0],
          endValue = _this$innerValue[1];

      if (isValidDate(startValue) && !isValidDate(endValue)) {
        if (startValue.getTime() > date.getTime()) {
          this.innerValue = [date, startValue];
        } else {
          this.innerValue = [startValue, date];
        }

        this.emitDate(this.innerValue, type);
      } else {
        this.innerValue = [date, new Date(NaN)];
      }
    },
    onDateMouseEnter: function onDateMouseEnter(cell) {
      this.hoveredValue = cell;
    },
    onDateMouseLeave: function onDateMouseLeave() {
      this.hoveredValue = null;
    },
    emitDate: function emitDate(dates, type) {
      this.$emit('select', dates, type);
    },
    updateStartCalendar: function updateStartCalendar(value) {
      this.updateCalendars([value, this.calendars[1]], 1);
    },
    updateEndCalendar: function updateEndCalendar(value) {
      this.updateCalendars([this.calendars[0], value], 0);
    },
    updateCalendars: function updateCalendars(calendars) {
      var adjustIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var gap = this.getCalendarGap(calendars);

      if (gap) {
        var calendar = new Date(calendars[adjustIndex]);
        calendar.setMonth(calendar.getMonth() + (adjustIndex === 0 ? -gap : gap));
        calendars[adjustIndex] = calendar;
      }

      this.calendars = calendars;
    },
    getCalendarGap: function getCalendarGap(calendars) {
      var _calendars = _slicedToArray(calendars, 2),
          calendarLeft = _calendars[0],
          calendarRight = _calendars[1];

      var yearDiff = calendarRight.getFullYear() - calendarLeft.getFullYear();
      var monthDiff = calendarRight.getMonth() - calendarLeft.getMonth();
      var diff = yearDiff * 12 + monthDiff;
      var min = this.calendarMinDiff;
      var max = this.calendarMaxDiff;

      if (diff < min) {
        return min - diff;
      }

      if (diff > max) {
        return max - diff;
      }

      return 0;
    },
    getRangeClasses: function getRangeClasses(cellDate, currentDates, classnames) {
      var classes = [].concat(this.getClasses(cellDate, currentDates, classnames));
      if (/disabled|active/.test(classnames)) return classes;

      var inRange = function inRange(data, range) {
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v) {
          return v.getTime();
        };
        var value = fn(data);

        var _range$map = range.map(fn),
            _range$map2 = _slicedToArray(_range$map, 2),
            min = _range$map2[0],
            max = _range$map2[1];

        if (min > max) {
          var _ref = [max, min];
          min = _ref[0];
          max = _ref[1];
        }

        return value > min && value < max;
      };

      if (currentDates.length === 2 && inRange(cellDate, currentDates)) {
        return classes.concat('in-range');
      }

      if (currentDates.length === 1 && this.hoveredValue && inRange(cellDate, [currentDates[0], this.hoveredValue])) {
        return classes.concat('hover-in-range');
      }

      return classes;
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var calendarRange = this.calendars.map(function (calendar, index) {
      var props = _objectSpread2({}, _this2.$props, {
        calendar: calendar,
        value: _this2.innerValue,
        defaultValue: _this2.defaultValues[index],
        getClasses: _this2.getRangeClasses,
        // don't update when range is true
        partialUpdate: false
      });

      var on = {
        select: _this2.handleSelect,
        'update:calendar': index === 0 ? _this2.updateStartCalendar : _this2.updateEndCalendar
      };
      return h("calendar-panel", {
        "props": _objectSpread2({}, props),
        "on": _objectSpread2({}, on)
      });
    });
    var prefixClass = this.prefixClass;
    return h("div", {
      "class": "".concat(prefixClass, "-range-wrapper")
    }, [calendarRange]);
  }
};

var scrollBarWidth;
function getScrollbarWidth () {
  if (typeof window === 'undefined') return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  scrollBarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return scrollBarWidth;
}

//
var script$5 = {
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  data: function data() {
    return {
      scrollbarWidth: 0,
      thumbTop: '',
      thumbHeight: ''
    };
  },
  created: function created() {
    this.scrollbarWidth = getScrollbarWidth();
    document.addEventListener('mouseup', this.handleDragend);
  },
  beforeDestroy: function beforeDestroy() {
    document.addEventListener('mouseup', this.handleDragend);
  },
  mounted: function mounted() {
    this.$nextTick(this.getThumbSize);
  },
  methods: {
    getThumbSize: function getThumbSize() {
      var wrap = this.$refs.wrap;
      if (!wrap) return;
      var heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      this.thumbHeight = heightPercentage < 100 ? "".concat(heightPercentage, "%") : '';
    },
    handleScroll: function handleScroll(evt) {
      var el = evt.currentTarget;
      var scrollHeight = el.scrollHeight,
          scrollTop = el.scrollTop;
      this.thumbTop = "".concat(scrollTop * 100 / scrollHeight, "%");
    },
    handleDragstart: function handleDragstart(evt) {
      evt.stopImmediatePropagation();
      this._draggable = true;
      var offsetTop = this.$refs.thumb.offsetTop;
      this._prevY = evt.clientY - offsetTop;
      document.addEventListener('mousemove', this.handleDraging);
    },
    handleDraging: function handleDraging(evt) {
      if (!this._draggable) return;
      var clientY = evt.clientY;
      var wrap = this.$refs.wrap;
      var scrollHeight = wrap.scrollHeight,
          clientHeight = wrap.clientHeight;
      var offsetY = clientY - this._prevY;
      var top = offsetY * scrollHeight / clientHeight;
      wrap.scrollTop = top;
    },
    handleDragend: function handleDragend() {
      if (this._draggable) {
        this._draggable = false;
        document.removeEventListener('mousemove', this.handleDraging);
      }
    }
  }
};

/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-scrollbar",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, [_c('div', {
    ref: "wrap",
    class: _vm.prefixClass + "-scrollbar-wrap",
    style: {
      marginRight: "-" + _vm.scrollbarWidth + "px"
    },
    on: {
      "scroll": _vm.handleScroll
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-scrollbar-track"
  }, [_c('div', {
    ref: "thumb",
    class: _vm.prefixClass + "-scrollbar-thumb",
    style: {
      height: _vm.thumbHeight,
      top: _vm.thumbTop
    },
    on: {
      "mousedown": _vm.handleDragstart
    }
  })])]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = undefined;
/* scoped */

var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = undefined;
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$5, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

//

var padNumber = function padNumber(value) {
  value = parseInt(value, 10);
  return value < 10 ? "0".concat(value) : "".concat(value);
};

var generateOptions = function generateOptions(length, step, options) {
  if (Array.isArray(options)) {
    return options.filter(function (v) {
      return v >= 0 && v < length;
    });
  }

  if (step <= 0) {
    step = 1;
  }

  var arr = [];

  for (var i = 0; i < length; i += step) {
    arr.push(i);
  }

  return arr;
};

var scrollTo = function scrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  // jump to target if duration zero
  if (duration <= 0) {
    requestAnimationFrame(function () {
      element.scrollTop = to;
    });
    return;
  }

  var difference = to - element.scrollTop;
  var tick = difference / duration * 10;
  requestAnimationFrame(function () {
    var scrollTop = element.scrollTop + tick;

    if (scrollTop >= to) {
      element.scrollTop = to;
      return;
    }

    element.scrollTop = scrollTop;
    scrollTo(element, to, duration - 10);
  });
};

var script$6 = {
  name: 'ListColumns',
  components: {
    ScrollbarVertical: __vue_component__$8
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    date: Date,
    scrollDuration: {
      type: Number,
      default: 100
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    showHour: {
      type: Boolean,
      default: true
    },
    showMinute: {
      type: Boolean,
      default: true
    },
    showSecond: {
      type: Boolean,
      default: true
    },
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    secondStep: {
      type: Number,
      default: 1
    },
    use12h: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    columns: function columns() {
      var cols = [];
      if (this.showHour) cols.push({
        type: 'hour',
        list: this.getHoursList()
      });
      if (this.showMinute) cols.push({
        type: 'minute',
        list: this.getMinutesList()
      });
      if (this.showSecond) cols.push({
        type: 'second',
        list: this.getSecondsList()
      });
      if (this.use12h) cols.push({
        type: 'ampm',
        list: this.getAMPMList()
      });
      return cols.filter(function (v) {
        return v.list.length > 0;
      });
    }
  },
  watch: {
    date: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          _this.scrollToSelected(_this.scrollDuration);
        });
      }
    }
  },
  mounted: function mounted() {
    this.scrollToSelected(0);
  },
  methods: {
    getHoursList: function getHoursList() {
      var _this2 = this;

      return generateOptions(this.use12h ? 12 : 24, this.hourStep, this.hourOptions).map(function (num) {
        var date = new Date(_this2.date);
        var text = padNumber(num);

        if (_this2.use12h) {
          if (num === 0) {
            text = '12';
          }

          if (date.getHours() >= 12) {
            num += 12;
          }
        }

        var value = date.setHours(num);
        return {
          value: value,
          text: text
        };
      });
    },
    getMinutesList: function getMinutesList() {
      var _this3 = this;

      return generateOptions(60, this.minuteStep, this.minuteOptions).map(function (num) {
        var value = new Date(_this3.date).setMinutes(num);
        return {
          value: value,
          text: padNumber(num)
        };
      });
    },
    getSecondsList: function getSecondsList() {
      var _this4 = this;

      return generateOptions(60, this.secondStep, this.secondOptions).map(function (num) {
        var value = new Date(_this4.date).setSeconds(num);
        return {
          value: value,
          text: padNumber(num)
        };
      });
    },
    getAMPMList: function getAMPMList() {
      var _this5 = this;

      return ['AM', 'PM'].map(function (text, i) {
        var date = new Date(_this5.date);
        var value = date.setHours(date.getHours() % 12 + i * 12);
        return {
          text: text,
          value: value
        };
      });
    },
    scrollToSelected: function scrollToSelected(duration) {
      var elements = this.$el.querySelectorAll('.active');

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var scrollElement = getScrollParent(element, this.$el);

        if (scrollElement) {
          var to = element.offsetTop;
          scrollTo(scrollElement, to, duration);
        }
      }
    },
    handleSelect: function handleSelect(evt) {
      var target = evt.target,
          currentTarget = evt.currentTarget;
      if (target.tagName.toUpperCase() !== 'LI') return;
      var type = currentTarget.getAttribute('data-type');
      var colIndex = parseInt(currentTarget.getAttribute('data-index'), 10);
      var cellIndex = parseInt(target.getAttribute('data-index'), 10);
      var value = this.columns[colIndex].list[cellIndex].value;
      this.$emit('select', value, type);
    }
  }
};

/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-time-columns"
  }, _vm._l(_vm.columns, function (col, i) {
    return _c('scrollbar-vertical', {
      key: i,
      class: _vm.prefixClass + "-time-column"
    }, [_c('ul', {
      class: _vm.prefixClass + "-time-list",
      attrs: {
        "data-type": col.type,
        "data-index": i
      },
      on: {
        "click": _vm.handleSelect
      }
    }, _vm._l(col.list, function (item, j) {
      return _c('li', {
        key: item.value,
        class: [_vm.prefixClass + "-time-item", _vm.getClasses(item.value, col.type)],
        attrs: {
          "data-index": j
        }
      }, [_vm._v("\n        " + _vm._s(item.text) + "\n      ")]);
    }), 0)]);
  }), 1);
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = undefined;
/* scoped */

var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = undefined;
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$9 = normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$6, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

//

function parseOption() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var values = time.split(':');

  if (values.length >= 2) {
    var hours = parseInt(values[0], 10);
    var minutes = parseInt(values[1], 10);
    return {
      hours: hours,
      minutes: minutes
    };
  }

  return null;
}

var scrollTo$1 = function scrollTo(element, to) {
  if (element) {
    element.scrollTop = to;
  }
};

var script$7 = {
  name: 'ListOptions',
  components: {
    ScrollbarVertical: __vue_component__$8
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    date: Date,
    options: {
      type: [Object, Function],
      default: function _default() {
        return [];
      }
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    list: function list() {
      var result = [];
      var options = this.options;

      if (typeof options === 'function') {
        return options() || [];
      }

      var start = parseOption(options.start);
      var end = parseOption(options.end);
      var step = parseOption(options.step);
      var fmt = options.format || this.format;

      if (start && end && step) {
        var startMinutes = start.minutes + start.hours * 60;
        var endMinutes = end.minutes + end.hours * 60;
        var stepMinutes = step.minutes + step.hours * 60;
        var len = Math.floor((endMinutes - startMinutes) / stepMinutes);

        for (var i = 0; i <= len; i++) {
          var timeMinutes = startMinutes + i * stepMinutes;
          var hours = Math.floor(timeMinutes / 60);
          var minutes = timeMinutes % 60;
          var value = new Date(this.date).setHours(hours, minutes, 0);
          result.push({
            value: value,
            text: this.formatDate(value, fmt)
          });
        }
      }

      return result;
    }
  },
  mounted: function mounted() {
    this.scrollToSelected();
  },
  methods: {
    formatDate: function formatDate(date, fmt) {
      return (0,date_format_parse__WEBPACK_IMPORTED_MODULE_0__.format)(date, fmt, {
        locale: this.getLocale().formatLocale
      });
    },
    scrollToSelected: function scrollToSelected() {
      var element = this.$el.querySelector('.active');
      if (!element) return;
      var scrollElement = getScrollParent(element, this.$el);
      if (!scrollElement) return;
      var to = element.offsetTop;
      scrollTo$1(scrollElement, to);
    },
    handleSelect: function handleSelect(value) {
      this.$emit('select', value, 'time');
    }
  }
};

/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('scrollbar-vertical', _vm._l(_vm.list, function (item) {
    return _c('div', {
      key: item.value,
      class: [_vm.prefixClass + "-time-option", _vm.getClasses(item.value)],
      on: {
        "click": function click($event) {
          return _vm.handleSelect(item.value);
        }
      }
    }, [_vm._v("\n    " + _vm._s(item.text) + "\n  ")]);
  }), 0);
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = undefined;
/* scoped */

var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = undefined;
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$a = normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$7, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

//
var script$8 = {
  name: 'TimePanel',
  components: {
    ListColumns: __vue_component__$9,
    ListOptions: __vue_component__$a
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    value: {},
    defaultValue: {
      default: function _default() {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
      }
    },
    format: {
      default: 'HH:mm:ss'
    },
    timeTitleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    showTimeHeader: {
      type: Boolean,
      default: false
    },
    disabledTime: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    timePickerOptions: {
      type: [Object, Function],
      default: function _default() {
        return null;
      }
    },
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    secondStep: {
      type: Number,
      default: 1
    },
    showHour: {
      type: Boolean,
      default: undefined
    },
    showMinute: {
      type: Boolean,
      default: undefined
    },
    showSecond: {
      type: Boolean,
      default: undefined
    },
    use12h: {
      type: Boolean,
      default: undefined
    },
    scrollDuration: {
      type: Number,
      default: 100
    }
  },
  data: function data() {
    return {
      innerValue: getValidDate(this.value, this.defaultValue)
    };
  },
  computed: {
    title: function title() {
      var titleFormat = this.timeTitleFormat;
      var date = new Date(this.innerValue);
      return this.formatDate(date, titleFormat);
    },
    innerForamt: function innerForamt() {
      return typeof this.format === 'string' ? this.format : 'HH:mm:ss';
    },
    ShowHourMinuteSecondAMPM: function ShowHourMinuteSecondAMPM() {
      var _this = this;

      var fmt = this.innerForamt;
      var defaultProps = {
        showHour: /[HhKk]/.test(fmt),
        showMinute: /m/.test(fmt),
        showSecond: /s/.test(fmt),
        use12h: /a/i.test(fmt)
      };
      var obj = {};
      Object.keys(defaultProps).forEach(function (key) {
        obj[key] = typeof _this[key] === 'boolean' ? _this[key] : defaultProps[key];
      });
      return obj;
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler() {
        this.innerValue = getValidDate(this.value, this.defaultValue);
      }
    }
  },
  methods: {
    formatDate: function formatDate(date, fmt) {
      return (0,date_format_parse__WEBPACK_IMPORTED_MODULE_0__.format)(date, fmt, {
        locale: this.getLocale().formatLocale
      });
    },
    isDisabledTime: function isDisabledTime(value) {
      return this.disabledTime(new Date(value));
    },
    isDisabledHour: function isDisabledHour(date) {
      var value = new Date(date);
      return this.isDisabledTime(value) && this.isDisabledTime(value.setMinutes(0, 0, 0)) && this.isDisabledTime(value.setMinutes(59, 59, 999));
    },
    isDisabledMinute: function isDisabledMinute(date) {
      var value = new Date(date);
      return this.isDisabledTime(value) && this.isDisabledTime(value.setSeconds(0, 0)) && this.isDisabledTime(value.setSeconds(59, 999));
    },
    isDisabledAMPM: function isDisabledAMPM(date) {
      var value = new Date(date);
      var minHour = value.getHours() < 12 ? 0 : 12;
      var maxHour = minHour + 11;
      return this.isDisabledTime(value) && this.isDisabledTime(value.setHours(minHour, 0, 0, 0)) && this.isDisabledTime(value.setHours(maxHour, 59, 59, 999));
    },
    isDisabled: function isDisabled(date, type) {
      if (type === 'hour') {
        return this.isDisabledHour(date);
      }

      if (type === 'minute') {
        return this.isDisabledMinute(date);
      }

      if (type === 'ampm') {
        return this.isDisabledAMPM(date);
      }

      return this.isDisabledTime(date);
    },
    handleSelect: function handleSelect(value, type) {
      var date = new Date(value);

      if (!this.isDisabled(value, type)) {
        this.innerValue = date;

        if (!this.isDisabledTime(date)) {
          this.$emit('select', date, type);
        }
      }
    },
    handleClickTitle: function handleClickTitle() {
      this.$emit('clicktitle');
    },
    getClasses: function getClasses(value, type) {
      var cellDate = new Date(value);

      if (this.isDisabled(value, type)) {
        return 'disabled';
      }

      if (cellDate.getTime() === this.innerValue.getTime()) {
        return 'active';
      }

      return '';
    }
  }
};

/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-time"
  }, [_vm.showTimeHeader ? _c('div', {
    class: _vm.prefixClass + "-time-header"
  }, [_c('button', {
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-time-header-title",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleClickTitle
    }
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-time-content"
  }, [_vm.timePickerOptions ? _c('list-options', {
    attrs: {
      "date": _vm.innerValue,
      "get-classes": _vm.getClasses,
      "options": _vm.timePickerOptions,
      "format": _vm.innerForamt
    },
    on: {
      "select": _vm.handleSelect
    }
  }) : _c('list-columns', _vm._b({
    attrs: {
      "date": _vm.innerValue,
      "get-classes": _vm.getClasses,
      "hour-options": _vm.hourOptions,
      "minute-options": _vm.minuteOptions,
      "second-options": _vm.secondOptions,
      "hour-step": _vm.hourStep,
      "minute-step": _vm.minuteStep,
      "second-step": _vm.secondStep,
      "scroll-duration": _vm.scrollDuration
    },
    on: {
      "select": _vm.handleSelect
    }
  }, 'list-columns', _vm.ShowHourMinuteSecondAMPM, false))], 1)]);
};

var __vue_staticRenderFns__$b = [];
/* style */

var __vue_inject_styles__$b = undefined;
/* scoped */

var __vue_scope_id__$b = undefined;
/* module identifier */

var __vue_module_identifier__$b = undefined;
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$b = normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$8, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);

var TimeRange = {
  name: 'TimeRange',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2({}, __vue_component__$b.props),
  data: function data() {
    return {
      startValue: new Date(NaN),
      endValue: new Date(NaN)
    };
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler() {
        if (isValidRangeDate(this.value)) {
          var _this$value = _slicedToArray(this.value, 2),
              startValue = _this$value[0],
              endValue = _this$value[1];

          this.startValue = startValue;
          this.endValue = endValue;
        } else {
          this.startValue = new Date(NaN);
          this.endValue = new Date(NaN);
        }
      }
    }
  },
  methods: {
    emitChange: function emitChange(type, index) {
      var date = [this.startValue, this.endValue];
      this.$emit('select', date, type === 'time' ? 'time-range' : type, index);
    },
    handleSelectStart: function handleSelectStart(date, type) {
      this.startValue = date; // check the NaN

      if (!(this.endValue.getTime() >= date.getTime())) {
        this.endValue = date;
      }

      this.emitChange(type, 0);
    },
    handleSelectEnd: function handleSelectEnd(date, type) {
      // check the NaN
      this.endValue = date;

      if (!(this.startValue.getTime() <= date.getTime())) {
        this.startValue = date;
      }

      this.emitChange(type, 1);
    },
    disabledStartTime: function disabledStartTime(date) {
      return this.disabledTime(date, 0);
    },
    disabledEndTime: function disabledEndTime(date) {
      return date.getTime() < this.startValue.getTime() || this.disabledTime(date, 1);
    }
  },
  render: function render() {
    var h = arguments[0];
    var defaultValues = Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
    var prefixClass = this.prefixClass;
    return h("div", {
      "class": "".concat(prefixClass, "-range-wrapper")
    }, [h(__vue_component__$b, {
      "props": _objectSpread2({}, _objectSpread2({}, this.$props, {
        value: this.startValue,
        defaultValue: defaultValues[0],
        disabledTime: this.disabledStartTime
      })),
      "on": _objectSpread2({}, _objectSpread2({}, this.$listeners, {
        select: this.handleSelectStart
      }))
    }), h(__vue_component__$b, {
      "props": _objectSpread2({}, _objectSpread2({}, this.$props, {
        value: this.endValue,
        defaultValue: defaultValues[1],
        disabledTime: this.disabledEndTime
      })),
      "on": _objectSpread2({}, _objectSpread2({}, this.$listeners, {
        select: this.handleSelectEnd
      }))
    })]);
  }
};

var DatetimePanel = {
  name: 'DatetimePanel',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  emits: ['select', 'update:show-time-panel'],
  props: _objectSpread2({}, CalendarPanel.props, {}, __vue_component__$b.props, {
    showTimePanel: {
      type: Boolean,
      default: undefined
    }
  }),
  data: function data() {
    return {
      defaultTimeVisible: false,
      currentValue: this.value
    };
  },
  computed: {
    timeVisible: function timeVisible() {
      return typeof this.showTimePanel === 'boolean' ? this.showTimePanel : this.defaultTimeVisible;
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    closeTimePanel: function closeTimePanel() {
      this.defaultTimeVisible = false;
      this.$emit('update:show-time-panel', false);
    },
    openTimePanel: function openTimePanel() {
      this.defaultTimeVisible = true;
      this.$emit('update:show-time-panel', true);
    },
    emitDate: function emitDate(date, type) {
      this.$emit('select', date, type);
    },
    handleSelect: function handleSelect(date, type) {
      if (type === 'date') {
        this.openTimePanel();
      }

      var datetime = assignTime(date, getValidDate(this.value, this.defaultValue));

      if (this.disabledTime(new Date(datetime))) {
        // set the time of defalutValue;
        datetime = assignTime(date, this.defaultValue);

        if (this.disabledTime(new Date(datetime))) {
          // if disabled don't emit date
          this.currentValue = datetime;
          return;
        }
      }

      this.emitDate(datetime, type);
    }
  },
  render: function render() {
    var h = arguments[0];
    var calendarProps = {
      props: _objectSpread2({}, pick(this.$props, Object.keys(CalendarPanel.props)), {
        type: 'date',
        value: this.currentValue
      }),
      on: {
        select: this.handleSelect
      }
    };
    var timeProps = {
      props: _objectSpread2({}, pick(this.$props, Object.keys(__vue_component__$b.props)), {
        showTimeHeader: true,
        value: this.currentValue
      }),
      on: {
        select: this.emitDate,
        clicktitle: this.closeTimePanel
      }
    };
    var prefixClass = this.prefixClass;
    return h("div", [h(CalendarPanel, helper([{}, calendarProps])), this.timeVisible && h(__vue_component__$b, helper([{
      "class": "".concat(prefixClass, "-calendar-time")
    }, timeProps]))]);
  }
};

var DatetimeRange = {
  name: 'DatetimeRange',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  emits: ['select', 'update:show-time-panel'],
  props: _objectSpread2({}, CalendarRange.props, {}, TimeRange.props, {
    showTimePanel: {
      type: Boolean,
      default: undefined
    }
  }),
  data: function data() {
    return {
      defaultTimeVisible: false,
      currentValue: this.value
    };
  },
  computed: {
    timeVisible: function timeVisible() {
      return typeof this.showTimePanel === 'boolean' ? this.showTimePanel : this.defaultTimeVisible;
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    closeTimePanel: function closeTimePanel() {
      this.defaultTimeVisible = false;
      this.$emit('update:show-time-panel', false);
    },
    openTimePanel: function openTimePanel() {
      this.defaultTimeVisible = true;
      this.$emit('update:show-time-panel', true);
    },
    emitDate: function emitDate(dates, type) {
      this.$emit('select', dates, type);
    },
    handleSelect: function handleSelect(dates, type) {
      var _this = this;

      if (type === 'date') {
        this.openTimePanel();
      }

      var defaultValues = Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
      var datetimes = dates.map(function (date, i) {
        var time = isValidRangeDate(_this.value) ? _this.value[i] : defaultValues[i];
        return assignTime(date, time);
      });

      if (datetimes[1].getTime() < datetimes[0].getTime()) {
        datetimes = [datetimes[0], datetimes[0]];
      }

      if (datetimes.some(this.disabledTime)) {
        datetimes = dates.map(function (date, i) {
          return assignTime(date, defaultValues[i]);
        });

        if (datetimes.some(this.disabledTime)) {
          this.currentValue = datetimes;
          return;
        }
      }

      this.emitDate(datetimes, type);
    }
  },
  render: function render() {
    var h = arguments[0];
    var calendarProps = {
      props: _objectSpread2({}, pick(this.$props, Object.keys(CalendarRange.props)), {
        type: 'date',
        value: this.currentValue
      }),
      on: {
        select: this.handleSelect
      }
    };
    var timeProps = {
      props: _objectSpread2({}, pick(this.$props, Object.keys(TimeRange.props)), {
        value: this.currentValue,
        showTimeHeader: true
      }),
      on: {
        select: this.emitDate,
        clicktitle: this.closeTimePanel
      }
    };
    var prefixClass = this.prefixClass;
    return h("div", [h(CalendarRange, helper([{}, calendarProps])), this.timeVisible && h(TimeRange, helper([{
      "class": "".concat(prefixClass, "-calendar-time")
    }, timeProps]))]);
  }
};

var componentMap = {
  default: CalendarPanel,
  time: __vue_component__$b,
  datetime: DatetimePanel
};
var componentRangeMap = {
  default: CalendarRange,
  time: TimeRange,
  datetime: DatetimeRange
};
var DatePicker = {
  name: 'DatePicker',
  provide: function provide() {
    var _this = this;

    return {
      // make locale reactive
      getLocale: function getLocale() {
        return _this.locale;
      },
      getWeek: this.getWeek,
      prefixClass: this.prefixClass,
      dispatchDatePicker: this.$emit.bind(this)
    };
  },
  props: _objectSpread2({}, DatetimePanel.props, {
    value: {},
    valueType: {
      type: String,
      default: 'date' // date, format, timestamp, or token like 'YYYY-MM-DD'

    },
    type: {
      type: String,
      // ['date', 'datetime', 'time', 'year', 'month', 'week']
      default: 'date'
    },
    format: {
      type: String
    },
    formatter: {
      type: Object
    },
    range: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    rangeSeparator: {
      type: String
    },
    lang: {
      type: [String, Object]
    },
    placeholder: {
      type: String,
      default: ''
    },
    editable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    prefixClass: {
      type: String,
      default: 'mx'
    },
    inputClass: {},
    inputAttr: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    open: {
      type: Boolean,
      default: undefined
    },
    popupClass: {},
    popupStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    inline: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: 'OK'
    },
    renderInputText: {
      type: Function
    },
    shortcuts: {
      type: Array,
      validator: function validator(value) {
        return Array.isArray(value) && value.every(function (v) {
          return isObject(v) && typeof v.text === 'string' && typeof v.onClick === 'function';
        });
      },
      default: function _default() {
        return [];
      }
    }
  }),
  data: function data() {
    return {
      // cache the innervalue, wait to confirm
      currentValue: null,
      userInput: null,
      defaultOpen: false,
      mouseInInput: false
    };
  },
  computed: {
    popupVisible: function popupVisible() {
      return !this.disabled && (typeof this.open === 'boolean' ? this.open : this.defaultOpen);
    },
    innerRangeSeparator: function innerRangeSeparator() {
      return this.rangeSeparator || (this.multiple ? ',' : ' ~ ');
    },
    innerFormat: function innerFormat() {
      var map = {
        date: 'YYYY-MM-DD',
        datetime: 'YYYY-MM-DD HH:mm:ss',
        year: 'YYYY',
        month: 'YYYY-MM',
        time: 'HH:mm:ss',
        week: 'w'
      };
      return this.format || map[this.type] || map.date;
    },
    innerValue: function innerValue() {
      var value = this.value;

      if (this.validMultipleType) {
        value = Array.isArray(value) ? value : [];
        return value.map(this.value2date);
      }

      if (this.range) {
        value = Array.isArray(value) ? value.slice(0, 2) : [null, null];
        return value.map(this.value2date);
      }

      return this.value2date(value);
    },
    text: function text() {
      var _this2 = this;

      if (this.userInput !== null) {
        return this.userInput;
      }

      if (typeof this.renderInputText === 'function') {
        return this.renderInputText(this.innerValue);
      }

      if (!this.isValidValue(this.innerValue)) {
        return '';
      }

      if (Array.isArray(this.innerValue)) {
        return this.innerValue.map(function (v) {
          return _this2.formatDate(v);
        }).join(this.innerRangeSeparator);
      }

      return this.formatDate(this.innerValue);
    },
    showClearIcon: function showClearIcon() {
      return !this.disabled && this.clearable && this.text && this.mouseInInput;
    },
    locale: function locale() {
      if (isObject(this.lang)) {
        return mergeDeep(getLocale(), this.lang);
      }

      return getLocale(this.lang);
    },
    validMultipleType: function validMultipleType() {
      var types = ['date', 'month', 'year'];
      return this.multiple && !this.range && types.indexOf(this.type) !== -1;
    }
  },
  watch: {
    innerValue: {
      immediate: true,
      handler: function handler(val) {
        this.currentValue = val;
      }
    },
    popupVisible: {
      handler: function handler(val) {
        if (val) {
          this.currentValue = this.innerValue;
        }
      }
    }
  },
  created: function created() {
    if (_typeof(this.format) === 'object') {
      console.warn("[vue2-datepicker]: The prop `format` don't support Object any more. You can use the new prop `formatter` to replace it");
    }
  },
  methods: {
    handleMouseEnter: function handleMouseEnter() {
      this.mouseInInput = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.mouseInInput = false;
    },
    handleClickOutSide: function handleClickOutSide(evt) {
      var target = evt.target;

      if (!this.$el.contains(target)) {
        this.closePopup();
      }
    },
    getFormatter: function getFormatter(key) {
      return isObject(this.formatter) && this.formatter[key] || isObject(this.format) && this.format[key];
    },
    getWeek: function getWeek$1(date, options) {
      if (typeof this.getFormatter('getWeek') === 'function') {
        return this.getFormatter('getWeek')(date, options);
      }

      return (0,date_format_parse__WEBPACK_IMPORTED_MODULE_0__.getWeek)(date, options);
    },
    parseDate: function parseDate(value, fmt) {
      fmt = fmt || this.innerFormat;

      if (typeof this.getFormatter('parse') === 'function') {
        return this.getFormatter('parse')(value, fmt);
      }

      var backupDate = new Date();
      return (0,date_format_parse__WEBPACK_IMPORTED_MODULE_0__.parse)(value, fmt, {
        locale: this.locale.formatLocale,
        backupDate: backupDate
      });
    },
    formatDate: function formatDate(date, fmt) {
      fmt = fmt || this.innerFormat;

      if (typeof this.getFormatter('stringify') === 'function') {
        return this.getFormatter('stringify')(date, fmt);
      }

      return (0,date_format_parse__WEBPACK_IMPORTED_MODULE_0__.format)(date, fmt, {
        locale: this.locale.formatLocale
      });
    },
    // transform the outer value to inner date
    value2date: function value2date(value) {
      switch (this.valueType) {
        case 'date':
          return value instanceof Date ? new Date(value.getTime()) : new Date(NaN);

        case 'timestamp':
          return typeof value === 'number' ? new Date(value) : new Date(NaN);

        case 'format':
          return typeof value === 'string' ? this.parseDate(value) : new Date(NaN);

        default:
          return typeof value === 'string' ? this.parseDate(value, this.valueType) : new Date(NaN);
      }
    },
    // transform the inner date to outer value
    date2value: function date2value(date) {
      if (!isValidDate(date)) return null;

      switch (this.valueType) {
        case 'date':
          return date;

        case 'timestamp':
          return date.getTime();

        case 'format':
          return this.formatDate(date);

        default:
          return this.formatDate(date, this.valueType);
      }
    },
    emitValue: function emitValue(date, type) {
      var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      // fix IE11/10 trigger input event when input is focused. (placeholder !== '')
      this.userInput = null;
      var value = Array.isArray(date) ? date.map(this.date2value) : this.date2value(date);
      this.$emit('input', value);
      this.$emit('change', value, type);

      if (close) {
        this.closePopup();
      }

      return value;
    },
    isValidValue: function isValidValue(value) {
      if (this.validMultipleType) {
        return isValidDates(value);
      }

      if (this.range) {
        return isValidRangeDate(value);
      }

      return isValidDate(value);
    },
    isValidValueAndNotDisabled: function isValidValueAndNotDisabled(value) {
      if (!this.isValidValue(value)) {
        return false;
      }

      var disabledDate = typeof this.disabledDate === 'function' ? this.disabledDate : function () {
        return false;
      };
      var disabledTime = typeof this.disabledTime === 'function' ? this.disabledTime : function () {
        return false;
      };

      if (!Array.isArray(value)) {
        value = [value];
      }

      return value.every(function (v) {
        return !disabledDate(v) && !disabledTime(v);
      });
    },
    handleMultipleDates: function handleMultipleDates(date, dates) {
      if (this.validMultipleType && dates) {
        var nextDates = dates.filter(function (v) {
          return v.getTime() !== date.getTime();
        });

        if (nextDates.length === dates.length) {
          nextDates.push(date);
        }

        return nextDates;
      }

      return date;
    },
    handleSelectDate: function handleSelectDate(val, type, dates) {
      val = this.handleMultipleDates(val, dates);

      if (this.confirm) {
        this.currentValue = val;
      } else {
        this.emitValue(val, type, // this.type === 'datetime', click the time should close popup
        !this.validMultipleType && (type === this.type || type === 'time'));
      }
    },
    clear: function clear() {
      this.emitValue(this.range ? [null, null] : null);
      this.$emit('clear');
    },
    handleClear: function handleClear(evt) {
      evt.stopPropagation();
      this.clear();
    },
    handleConfirmDate: function handleConfirmDate() {
      var value = this.emitValue(this.currentValue);
      this.$emit('confirm', value);
    },
    handleSelectShortcut: function handleSelectShortcut(evt) {
      var index = evt.currentTarget.getAttribute('data-index');
      var item = this.shortcuts[parseInt(index, 10)];

      if (isObject(item) && typeof item.onClick === 'function') {
        var date = item.onClick(this);

        if (date) {
          this.emitValue(date);
        }
      }
    },
    openPopup: function openPopup(evt) {
      if (this.popupVisible || this.disabled) return;
      this.defaultOpen = true;
      this.$emit('open', evt);
      this.$emit('update:open', true);
    },
    closePopup: function closePopup() {
      if (!this.popupVisible) return;
      this.defaultOpen = false;
      this.$emit('close');
      this.$emit('update:open', false);
    },
    blur: function blur() {
      // when use slot input
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    handleInputChange: function handleInputChange() {
      var _this3 = this;

      if (!this.editable || this.userInput === null) return;
      var text = this.userInput.trim();
      this.userInput = null;

      if (text === '') {
        this.clear();
        return;
      }

      var date;

      if (this.validMultipleType) {
        date = text.split(this.innerRangeSeparator).map(function (v) {
          return _this3.parseDate(v.trim());
        });
      } else if (this.range) {
        var arr = text.split(this.innerRangeSeparator);

        if (arr.length !== 2) {
          // Maybe the separator during the day is the same as the separator for the date
          // eg: 2019-10-09-2020-01-02
          arr = text.split(this.innerRangeSeparator.trim());
        }

        date = arr.map(function (v) {
          return _this3.parseDate(v.trim());
        });
      } else {
        date = this.parseDate(text);
      }

      if (this.isValidValueAndNotDisabled(date)) {
        this.emitValue(date);
        this.blur();
      } else {
        this.$emit('input-error', text);
      }
    },
    handleInputInput: function handleInputInput(evt) {
      // slot input v-model
      this.userInput = typeof evt === 'string' ? evt : evt.target.value;
    },
    handleInputKeydown: function handleInputKeydown(evt) {
      var keyCode = evt.keyCode; // Tab 9 or Enter 13

      if (keyCode === 9) {
        this.closePopup();
      } else if (keyCode === 13) {
        this.handleInputChange();
      }
    },
    handleInputBlur: function handleInputBlur(evt) {
      // tab close
      this.$emit('blur', evt);
    },
    handleInputFocus: function handleInputFocus(evt) {
      this.openPopup(evt);
      this.$emit('focus', evt);
    },
    hasSlot: function hasSlot(name) {
      return !!(this.$slots[name] || this.$scopedSlots[name]);
    },
    renderSlot: function renderSlot(name, fallback, props) {
      var slotFn = this.$scopedSlots[name];

      if (slotFn) {
        return slotFn(props) || fallback;
      }

      return this.$slots[name] || fallback;
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var prefixClass = this.prefixClass;

      var props = _objectSpread2({
        name: 'date',
        type: 'text',
        autocomplete: 'off',
        value: this.text,
        class: this.inputClass || "".concat(this.prefixClass, "-input"),
        readonly: !this.editable,
        disabled: this.disabled,
        placeholder: this.placeholder
      }, this.inputAttr);

      var value = props.value,
          className = props.class,
          attrs = _objectWithoutProperties(props, ["value", "class"]);

      var events = {
        keydown: this.handleInputKeydown,
        focus: this.handleInputFocus,
        blur: this.handleInputBlur,
        input: this.handleInputInput,
        change: this.handleInputChange
      };
      var input = this.renderSlot('input', h("input", {
        "domProps": {
          "value": value
        },
        "class": className,
        "attrs": _objectSpread2({}, attrs),
        "on": _objectSpread2({}, events),
        "ref": "input"
      }), {
        props: props,
        events: events
      });
      var calendarIcon = this.type === 'time' ? h(__vue_component__$2) : h(__vue_component__$1); // remove touchstart event to avoid opens the popup while scrolling in mobile #469

      return h("div", {
        "class": "".concat(prefixClass, "-input-wrapper"),
        "on": {
          "mouseenter": this.handleMouseEnter,
          "mouseleave": this.handleMouseLeave,
          "click": this.openPopup
        },
        "ref": "inputWrapper"
      }, [input, this.showClearIcon ? h("i", {
        "class": "".concat(prefixClass, "-icon-clear"),
        "on": {
          "click": this.handleClear
        }
      }, [this.renderSlot('icon-clear', h(__vue_component__$3))]) : h("i", {
        "class": "".concat(prefixClass, "-icon-calendar")
      }, [this.renderSlot('icon-calendar', calendarIcon)])]);
    },
    renderContent: function renderContent() {
      var h = this.$createElement;
      var map = this.range ? componentRangeMap : componentMap;
      var Component = map[this.type] || map.default;

      var props = _objectSpread2({}, pick(this.$props, Object.keys(Component.props)), {
        value: this.currentValue
      });

      var on = _objectSpread2({}, pick(this.$listeners, Component.emits || []), {
        select: this.handleSelectDate
      });

      var content = h(Component, helper([{}, {
        props: props,
        on: on,
        ref: 'picker'
      }]));
      return h("div", {
        "class": "".concat(this.prefixClass, "-datepicker-body")
      }, [this.renderSlot('content', content, {
        value: this.currentValue,
        emit: this.handleSelectDate
      })]);
    },
    renderSidebar: function renderSidebar() {
      var _this4 = this;

      var h = this.$createElement;
      var prefixClass = this.prefixClass;
      return h("div", {
        "class": "".concat(prefixClass, "-datepicker-sidebar")
      }, [this.renderSlot('sidebar', null, {
        value: this.currentValue,
        emit: this.handleSelectDate
      }), this.shortcuts.map(function (v, i) {
        return h("button", {
          "key": i,
          "attrs": {
            "data-index": i,
            "type": "button"
          },
          "class": "".concat(prefixClass, "-btn ").concat(prefixClass, "-btn-text ").concat(prefixClass, "-btn-shortcut"),
          "on": {
            "click": _this4.handleSelectShortcut
          }
        }, [v.text]);
      })]);
    },
    renderHeader: function renderHeader() {
      var h = this.$createElement;
      return h("div", {
        "class": "".concat(this.prefixClass, "-datepicker-header")
      }, [this.renderSlot('header', null, {
        value: this.currentValue,
        emit: this.handleSelectDate
      })]);
    },
    renderFooter: function renderFooter() {
      var h = this.$createElement;
      var prefixClass = this.prefixClass;
      return h("div", {
        "class": "".concat(prefixClass, "-datepicker-footer")
      }, [this.renderSlot('footer', null, {
        value: this.currentValue,
        emit: this.handleSelectDate
      }), this.confirm ? h("button", {
        "attrs": {
          "type": "button"
        },
        "class": "".concat(prefixClass, "-btn ").concat(prefixClass, "-datepicker-btn-confirm"),
        "on": {
          "click": this.handleConfirmDate
        }
      }, [this.confirmText]) : null]);
    }
  },
  render: function render() {
    var _class;

    var h = arguments[0];
    var prefixClass = this.prefixClass,
        inline = this.inline,
        disabled = this.disabled;
    var sidedar = this.hasSlot('sidebar') || this.shortcuts.length ? this.renderSidebar() : null;
    var content = h("div", {
      "class": "".concat(prefixClass, "-datepicker-content")
    }, [this.hasSlot('header') ? this.renderHeader() : null, this.renderContent(), this.hasSlot('footer') || this.confirm ? this.renderFooter() : null]);
    return h("div", {
      "class": (_class = {}, _defineProperty(_class, "".concat(prefixClass, "-datepicker"), true), _defineProperty(_class, "".concat(prefixClass, "-datepicker-range"), this.range), _defineProperty(_class, "".concat(prefixClass, "-datepicker-inline"), inline), _defineProperty(_class, "disabled", disabled), _class)
    }, [!inline ? this.renderInput() : null, !inline ? h(__vue_component__, {
      "ref": "popup",
      "class": this.popupClass,
      "style": this.popupStyle,
      "attrs": {
        "visible": this.popupVisible,
        "appendToBody": this.appendToBody
      },
      "on": {
        "clickoutside": this.handleClickOutSide
      }
    }, [sidedar, content]) : h("div", {
      "class": "".concat(prefixClass, "-datepicker-main")
    }, [sidedar, content])]);
  }
};

DatePicker.locale = locale;

DatePicker.install = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

if (typeof window !== 'undefined' && window.Vue) {
  DatePicker.install(window.Vue);
}

_extends(DatePicker, {
  CalendarPanel: CalendarPanel,
  CalendarRange: CalendarRange,
  TimePanel: __vue_component__$b,
  TimeRange: TimeRange,
  DatetimePanel: DatetimePanel,
  DatetimeRange: DatetimeRange
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePicker);


/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alpha.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alpha.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alphaNum.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alphaNum.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/and.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/and.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'and'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/between.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/between.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min, max) {
  return (0, _common.withParams)({
    type: 'between',
    min: min,
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/common.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.req = exports.regex = exports.ref = exports.len = void 0;
Object.defineProperty(exports, "withParams", ({
  enumerable: true,
  get: function get() {
    return _withParams.default;
  }
}));

var _withParams = _interopRequireDefault(__webpack_require__(/*! ../withParams */ "./node_modules/vuelidate/lib/withParams.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var req = function req(value) {
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};

exports.req = req;

var len = function len(value) {
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};

exports.len = len;

var ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

exports.ref = ref;

var regex = function regex(type, expr) {
  return (0, _withParams.default)({
    type: type
  }, function (value) {
    return !req(value) || expr.test(value);
  });
};

exports.regex = regex;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/decimal.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/decimal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/email.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/email.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

var _default = (0, _common.regex)('email', emailRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/index.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "alpha", ({
  enumerable: true,
  get: function get() {
    return _alpha.default;
  }
}));
Object.defineProperty(exports, "alphaNum", ({
  enumerable: true,
  get: function get() {
    return _alphaNum.default;
  }
}));
Object.defineProperty(exports, "and", ({
  enumerable: true,
  get: function get() {
    return _and.default;
  }
}));
Object.defineProperty(exports, "between", ({
  enumerable: true,
  get: function get() {
    return _between.default;
  }
}));
Object.defineProperty(exports, "decimal", ({
  enumerable: true,
  get: function get() {
    return _decimal.default;
  }
}));
Object.defineProperty(exports, "email", ({
  enumerable: true,
  get: function get() {
    return _email.default;
  }
}));
exports.helpers = void 0;
Object.defineProperty(exports, "integer", ({
  enumerable: true,
  get: function get() {
    return _integer.default;
  }
}));
Object.defineProperty(exports, "ipAddress", ({
  enumerable: true,
  get: function get() {
    return _ipAddress.default;
  }
}));
Object.defineProperty(exports, "macAddress", ({
  enumerable: true,
  get: function get() {
    return _macAddress.default;
  }
}));
Object.defineProperty(exports, "maxLength", ({
  enumerable: true,
  get: function get() {
    return _maxLength.default;
  }
}));
Object.defineProperty(exports, "maxValue", ({
  enumerable: true,
  get: function get() {
    return _maxValue.default;
  }
}));
Object.defineProperty(exports, "minLength", ({
  enumerable: true,
  get: function get() {
    return _minLength.default;
  }
}));
Object.defineProperty(exports, "minValue", ({
  enumerable: true,
  get: function get() {
    return _minValue.default;
  }
}));
Object.defineProperty(exports, "not", ({
  enumerable: true,
  get: function get() {
    return _not.default;
  }
}));
Object.defineProperty(exports, "numeric", ({
  enumerable: true,
  get: function get() {
    return _numeric.default;
  }
}));
Object.defineProperty(exports, "or", ({
  enumerable: true,
  get: function get() {
    return _or.default;
  }
}));
Object.defineProperty(exports, "required", ({
  enumerable: true,
  get: function get() {
    return _required.default;
  }
}));
Object.defineProperty(exports, "requiredIf", ({
  enumerable: true,
  get: function get() {
    return _requiredIf.default;
  }
}));
Object.defineProperty(exports, "requiredUnless", ({
  enumerable: true,
  get: function get() {
    return _requiredUnless.default;
  }
}));
Object.defineProperty(exports, "sameAs", ({
  enumerable: true,
  get: function get() {
    return _sameAs.default;
  }
}));
Object.defineProperty(exports, "url", ({
  enumerable: true,
  get: function get() {
    return _url.default;
  }
}));

var _alpha = _interopRequireDefault(__webpack_require__(/*! ./alpha */ "./node_modules/vuelidate/lib/validators/alpha.js"));

var _alphaNum = _interopRequireDefault(__webpack_require__(/*! ./alphaNum */ "./node_modules/vuelidate/lib/validators/alphaNum.js"));

var _numeric = _interopRequireDefault(__webpack_require__(/*! ./numeric */ "./node_modules/vuelidate/lib/validators/numeric.js"));

var _between = _interopRequireDefault(__webpack_require__(/*! ./between */ "./node_modules/vuelidate/lib/validators/between.js"));

var _email = _interopRequireDefault(__webpack_require__(/*! ./email */ "./node_modules/vuelidate/lib/validators/email.js"));

var _ipAddress = _interopRequireDefault(__webpack_require__(/*! ./ipAddress */ "./node_modules/vuelidate/lib/validators/ipAddress.js"));

var _macAddress = _interopRequireDefault(__webpack_require__(/*! ./macAddress */ "./node_modules/vuelidate/lib/validators/macAddress.js"));

var _maxLength = _interopRequireDefault(__webpack_require__(/*! ./maxLength */ "./node_modules/vuelidate/lib/validators/maxLength.js"));

var _minLength = _interopRequireDefault(__webpack_require__(/*! ./minLength */ "./node_modules/vuelidate/lib/validators/minLength.js"));

var _required = _interopRequireDefault(__webpack_require__(/*! ./required */ "./node_modules/vuelidate/lib/validators/required.js"));

var _requiredIf = _interopRequireDefault(__webpack_require__(/*! ./requiredIf */ "./node_modules/vuelidate/lib/validators/requiredIf.js"));

var _requiredUnless = _interopRequireDefault(__webpack_require__(/*! ./requiredUnless */ "./node_modules/vuelidate/lib/validators/requiredUnless.js"));

var _sameAs = _interopRequireDefault(__webpack_require__(/*! ./sameAs */ "./node_modules/vuelidate/lib/validators/sameAs.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! ./url */ "./node_modules/vuelidate/lib/validators/url.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./node_modules/vuelidate/lib/validators/or.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/vuelidate/lib/validators/and.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./node_modules/vuelidate/lib/validators/not.js"));

var _minValue = _interopRequireDefault(__webpack_require__(/*! ./minValue */ "./node_modules/vuelidate/lib/validators/minValue.js"));

var _maxValue = _interopRequireDefault(__webpack_require__(/*! ./maxValue */ "./node_modules/vuelidate/lib/validators/maxValue.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/vuelidate/lib/validators/integer.js"));

var _decimal = _interopRequireDefault(__webpack_require__(/*! ./decimal */ "./node_modules/vuelidate/lib/validators/decimal.js"));

var helpers = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js"));

exports.helpers = helpers;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/integer.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/integer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('integer', /(^[0-9]*$)|(^-[0-9]+$)/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/ipAddress.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/ipAddress.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'ipAddress'
}, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});

exports["default"] = _default;

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/macAddress.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/macAddress.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({
    type: 'macAddress'
  }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

exports["default"] = _default;

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxLength.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'maxLength',
    max: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(max) {
  return (0, _common.withParams)({
    type: 'maxValue',
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minLength.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'minLength',
    min: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min) {
  return (0, _common.withParams)({
    type: 'minValue',
    min: min
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/not.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/not.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/numeric.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/numeric.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/or.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/or.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'or'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/required.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/required.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'required'
}, function (value) {
  if (typeof value === 'string') {
    return (0, _common.req)(value.trim());
  }

  return (0, _common.req)(value);
});

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredIf.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredIf.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredIf',
    prop: prop
  }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredUnless.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredUnless.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredUnless',
    prop: prop
  }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/sameAs.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/sameAs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(equalTo) {
  return (0, _common.withParams)({
    type: 'sameAs',
    eq: equalTo
  }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/url.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/url.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParams.js":
/*!**************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParams.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var withParams = process.env.BUILD === 'web' ? (__webpack_require__(/*! ./withParamsBrowser */ "./node_modules/vuelidate/lib/withParamsBrowser.js").withParams) : (__webpack_require__(/*! ./params */ "./node_modules/vuelidate/lib/params.js").withParams);
var _default = withParams;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParamsBrowser.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParamsBrowser.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withParams = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return maybeValidator;
  }

  return paramsOrClosure(function () {});
};

var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
exports.withParams = withParams;

/***/ })

}]);