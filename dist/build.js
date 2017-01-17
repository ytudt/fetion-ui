/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _alert = __webpack_require__(1);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var components = [_alert2.default];

	var install = function install(Vue) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  /* istanbul ignore if */
	  if (install.installed) return;
	  // locale.use(opts.locale);
	  // locale.i18n(opts.i18n);

	  components.map(function (component) {
	    Vue.component(component.name, component);
	  });

	  // Vue.use(Loading.directive);

	  // Vue.prototype.$loading = Loading.service;
	  // Vue.prototype.$msgbox = MessageBox;
	  // Vue.prototype.$alert = MessageBox.alert;
	  // Vue.prototype.$confirm = MessageBox.confirm;
	  // Vue.prototype.$prompt = MessageBox.prompt;
	  // Vue.prototype.$notify = Notification;
	  // Vue.prototype.$message = Message;
	};

	/* istanbul ignore if */
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	};

	module.exports = {
	  version: '1.0.2',
	  Alert: _alert2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _main = __webpack_require__(2);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/haha/Desktop/fetion-ui/packages/alert/src/main.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2f0085a0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2f0085a0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] main.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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

	var TYPE_CLASSES_MAP = {
	  'success': 'el-icon-circle-check',
	  'warning': 'el-icon-warning',
	  'error': 'el-icon-circle-cross'
	};
	exports.default = {
	  name: 'ElAlert',

	  props: {
	    title: {
	      type: String,
	      default: '',
	      required: true
	    },
	    description: {
	      type: String,
	      default: ''
	    },
	    type: {
	      type: String,
	      default: 'info'
	    },
	    closable: {
	      type: Boolean,
	      default: true
	    },
	    closeText: {
	      type: String,
	      default: ''
	    },
	    showIcon: {
	      type: Boolean,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      visible: true
	    };
	  },


	  methods: {
	    close: function close() {
	      this.visible = false;
	      this.$emit('close');
	    }
	  },

	  computed: {
	    typeClass: function typeClass() {
	      return 'el-alert--' + this.type;
	    },
	    iconClass: function iconClass() {
	      return TYPE_CLASSES_MAP[this.type] || 'el-icon-information';
	    },
	    isBigIcon: function isBigIcon() {
	      return this.description ? 'is-big' : '';
	    },
	    isBoldTitle: function isBoldTitle() {
	      return this.description ? 'is-bold' : '';
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "el-alert-fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-alert",
	    class: [_vm.typeClass]
	  }, [(_vm.showIcon) ? _c('i', {
	    staticClass: "el-alert__icon",
	    class: [_vm.iconClass, _vm.isBigIcon]
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "el-alert__content"
	  }, [(_vm.title) ? _c('span', {
	    staticClass: "el-alert__title",
	    class: [_vm.isBoldTitle]
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm._t("default", [(_vm.description) ? _c('p', {
	    staticClass: "el-alert__description"
	  }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()]), _vm._v(" "), _c('i', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.closable),
	      expression: "closable"
	    }],
	    staticClass: "el-alert__closebtn",
	    class: {
	      'is-customed': _vm.closeText !== '', 'el-icon-close': _vm.closeText === ''
	    },
	    on: {
	      "click": function($event) {
	        _vm.close()
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.closeText))])], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2f0085a0", module.exports)
	  }
	}

/***/ }
/******/ ]);