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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* !
 * Vue.js v2.4.0
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function(global, factory) {
   true ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global.Vue = factory());
}(this, function() {
  'use strict';

    /*  */

    // these helpers produces better vm code in JS engines due to their
    // explicitness and function inlining
  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }

    /**
     * Check if value is primitive
     */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number';
  }

    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }

  const _toString = Object.prototype.toString;

    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }

    /**
     * Check if val is a valid array index.
     */
  function isValidArrayIndex(val) {
    const n = parseFloat(val);
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

    /**
     * Convert a value to a string that is actually rendered.
     */
  function toString(val) {
    return val == null ?
            '' :
            typeof val === 'object' ?
            JSON.stringify(val, null, 2) :
            String(val);
  }

    /**
     * Convert a input value to a number for persistence.
     * If the conversion fails, return original string.
     */
  function toNumber(val) {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */
  function makeMap(
        str,
        expectsLowerCase
    ) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ?
            function(val) {
              return map[val.toLowerCase()];
            } :
            function(val) {
              return map[val];
            };
  }

    /**
     * Check if a tag is a built-in tag.
     */
  const isBuiltInTag = makeMap('slot,component', true);

    /**
     * Check if a attribute is a reserved attribute.
     */
  const isReservedAttribute = makeMap('key,ref,slot,is');

    /**
     * Remove an item from an array
     */
  function remove(arr, item) {
    if (arr.length) {
      const index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

    /**
     * Check whether the object has the property.
     */
  const hasOwnProperty = Object.prototype.hasOwnProperty;

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

    /**
     * Create a cached version of a pure function.
     */
  function cached(fn) {
    const cache = Object.create(null);
    return function cachedFn(str) {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

    /**
     * Camelize a hyphen-delimited string.
     */
  const camelizeRE = /-(\w)/g;
  const camelize = cached(function(str) {
    return str.replace(camelizeRE, function(_, c) {
      return c ? c.toUpperCase() : '';
    });
  });

    /**
     * Capitalize a string.
     */
  const capitalize = cached(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

    /**
     * Hyphenate a camelCase string.
     */
  const hyphenateRE = /([^-])([A-Z])/g;
  const hyphenate = cached(function(str) {
    return str
            .replace(hyphenateRE, '$1-$2')
            .replace(hyphenateRE, '$1-$2')
            .toLowerCase();
  });

    /**
     * Simple bind, faster than native
     */
  function bind(fn, ctx) {
    function boundFn(a) {
      const l = arguments.length;
      return l ?
                l > 1 ?
                fn.apply(ctx, arguments) :
                fn.call(ctx, a) :
                fn.call(ctx);
    }
        // record original fn length
    boundFn._length = fn.length;
    return boundFn;
  }

    /**
     * Convert an Array-like object to a real Array.
     */
  function toArray(list, start) {
    start = start || 0;
    let i = list.length - start;
    const ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

    /**
     * Mix properties into target object.
     */
  function extend(to, _from) {
    for (const key in _from) {
      to[key] = _from[key];
    }
    return to;
  }

    /**
     * Merge an Array of Objects into a single Object.
     */
  function toObject(arr) {
    const res = {};
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  }

    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
     */
  function noop(a, b, c) {}

    /**
     * Always return false.
     */
  const no = function(a, b, c) {
    return false;
  };

    /**
     * Return same value
     */
  const identity = function(_) {
    return _;
  };

    /**
     * Generate a static keys string from compiler modules.
     */
  function genStaticKeys(modules) {
    return modules.reduce(function(keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }

    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */
  function looseEqual(a, b) {
    const isObjectA = isObject(a);
    const isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        return JSON.stringify(a) === JSON.stringify(b);
      } catch (e) {
                // possible circular reference
        return a === b;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  function looseIndexOf(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

    /**
     * Ensure a function is called only once.
     */
  function once(fn) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  const SSR_ATTR = 'data-server-rendered';

  const ASSET_TYPES = [
    'component',
    'directive',
    'filter',
  ];

  const LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
  ];

    /*  */

  const config = ({
        /**
         * Option merge strategies (used in core/util/options)
         */
    optionMergeStrategies: Object.create(null),

        /**
         * Whether to suppress warnings.
         */
    silent: false,

        /**
         * Show production mode tip message on boot?
         */
    productionTip: 'development' !== 'production',

        /**
         * Whether to enable devtools
         */
    devtools: 'development' !== 'production',

        /**
         * Whether to record perf
         */
    performance: false,

        /**
         * Error handler for watcher errors
         */
    errorHandler: null,

        /**
         * Warn handler for watcher warns
         */
    warnHandler: null,

        /**
         * Ignore certain custom elements
         */
    ignoredElements: [],

        /**
         * Custom user key aliases for v-on
         */
    keyCodes: Object.create(null),

        /**
         * Check if a tag is reserved so that it cannot be registered as a
         * component. This is platform-dependent and may be overwritten.
         */
    isReservedTag: no,

        /**
         * Check if an attribute is reserved so that it cannot be used as a component
         * prop. This is platform-dependent and may be overwritten.
         */
    isReservedAttr: no,

        /**
         * Check if a tag is an unknown element.
         * Platform-dependent.
         */
    isUnknownElement: no,

        /**
         * Get the namespace of an element
         */
    getTagNamespace: noop,

        /**
         * Parse the real tag name for the specific platform.
         */
    parsePlatformTagName: identity,

        /**
         * Check if an attribute must be bound using property, e.g. value
         * Platform-dependent.
         */
    mustUseProp: no,

        /**
         * Exposed for legacy reasons
         */
    _lifecycleHooks: LIFECYCLE_HOOKS,
  });

    /*  */

  const emptyObject = Object.freeze({});

    /**
     * Check if a string starts with $ or _
     */
  function isReserved(str) {
    const c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

    /**
     * Define a property.
     */
  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true,
    });
  }

    /**
     * Parse simple path.
     */
  const bailRE = /[^\w.$]/;

  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }
    const segments = path.split('.');
    return function(obj) {
      for (let i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }

    /*  */

  let warn = noop;
  let tip = noop;
  let formatComponentName = (null); // work around flow check

  {
    const hasConsole = typeof console !== 'undefined';
    const classifyRE = /(?:^|[-_])(\w)/g;
    const classify = function(str) {
      return str
                .replace(classifyRE, function(c) {
                  return c.toUpperCase();
                })
                .replace(/[-_]/g, '');
    };

    warn = function(msg, vm) {
      const trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(('[Vue warn]: ' + msg + trace));
      }
    };

    tip = function(msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn('[Vue tip]: ' + msg + (
                    vm ? generateComponentTrace(vm) : ''
                ));
      }
    };

    formatComponentName = function(vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }
      let name = typeof vm === 'string' ?
                vm :
                typeof vm === 'function' && vm.options ?
                vm.options.name :
                vm._isVue ?
                vm.$options.name || vm.$options._componentTag :
                vm.name;

      const file = vm._isVue && vm.$options.__file;
      if (!name && file) {
        const match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
                (name ? ('<' + (classify(name)) + '>') : '<Anonymous>') +
                (file && includeFile !== false ? (' at ' + file) : '')
      );
    };

    const repeat = function(str, n) {
      let res = '';
      while (n) {
        if (n % 2 === 1) {
          res += str;
        }
        if (n > 1) {
          str += str;
        }
        n >>= 1;
      }
      return res;
    };

    var generateComponentTrace = function(vm) {
      if (vm._isVue && vm.$parent) {
        const tree = [];
        let currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            const last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [ last, currentRecursiveSequence ];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
                    .map(function(vm, i) {
                      return ('' + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ?
                            ((formatComponentName(vm[0])) + '... (' + (vm[1]) + ' recursive calls)') :
                            formatComponentName(vm)));
                    })
                    .join('\n');
      }
      return ('\n\n(found in ' + (formatComponentName(vm)) + ')');

    };
  }

    /*  */

  function handleError(err, vm, info) {
    if (config.errorHandler) {
      config.errorHandler.call(null, err, vm, info);
    } else {
      {
        warn(('Error in ' + info + ': "' + (err.toString()) + '"'), vm);
      }
            /* istanbul ignore else */
      if (inBrowser && typeof console !== 'undefined') {
        console.error(err);
      } else {
        throw err;
      }
    }
  }

    /*  */
    /* globals MutationObserver */

    // can we use __proto__?
  const hasProto = '__proto__' in {};

    // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  const UA = inBrowser && window.navigator.userAgent.toLowerCase();
  const isIE = UA && /msie|trident/.test(UA);
  const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  const isEdge = UA && UA.indexOf('edge/') > 0;
  const isAndroid = UA && UA.indexOf('android') > 0;
  const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
  const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

    // Firefix has a "watch" function on Object.prototype...
  const nativeWatch = ({}).watch;

  let supportsPassive = false;
  if (inBrowser) {
    try {
      const opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get() {
                    /* istanbul ignore next */
          supportsPassive = true;
        },
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

    // this needs to be lazy-evaled because vue may be required before
    // vue-server-renderer can set VUE_ENV
  let _isServer;
  const isServerRendering = function() {
    if (_isServer === undefined) {
            /* istanbul ignore if */
      if (!inBrowser && typeof global !== 'undefined') {
                // detect presence of vue-server-renderer and avoid
                // Webpack shimming the process
        _isServer = global.process.env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer;
  };

    // detect devtools
  const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    /* istanbul ignore next */
  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  const hasSymbol =
        typeof Symbol !== 'undefined' && isNative(Symbol) &&
        typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

    /**
     * Defer a task to execute it asynchronously.
     */
  const nextTick = (function() {
    const callbacks = [];
    let pending = false;
    let timerFunc;

    function nextTickHandler() {
      pending = false;
      const copies = callbacks.slice(0);
      callbacks.length = 0;
      for (let i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }

        // the nextTick behavior leverages the microtask queue, which can be accessed
        // via either native Promise.then or MutationObserver.
        // MutationObserver has wider support, however it is seriously bugged in
        // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
        // completely stops working after triggering a few times... so, if native
        // Promise is available, we will use it:
        /* istanbul ignore if */
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      const p = Promise.resolve();
      const logError = function(err) {
        console.error(err);
      };
      timerFunc = function() {
        p.then(nextTickHandler).catch(logError);
                // in problematic UIWebViews, Promise.then doesn't completely break, but
                // it can get stuck in a weird state where callbacks are pushed into the
                // microtask queue but the queue isn't being flushed, until the browser
                // needs to do some other work, e.g. handle a timer. Therefore we can
                // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) {
          setTimeout(noop);
        }
      };
    } else if (typeof MutationObserver !== 'undefined' && (
                isNative(MutationObserver) ||
                // PhantomJS and iOS 7.x
                MutationObserver.toString() === '[object MutationObserverConstructor]'
            )) {
            // use MutationObserver where native Promise is not available,
            // e.g. PhantomJS IE11, iOS7, Android 4.4
      let counter = 1;
      const observer = new MutationObserver(nextTickHandler);
      const textNode = document.createTextNode(String(counter));
      observer.observe(textNode, {
        characterData: true,
      });
      timerFunc = function() {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
      };
    } else {
            // fallback to setTimeout
            /* istanbul ignore next */
      timerFunc = function() {
        setTimeout(nextTickHandler, 0);
      };
    }

    return function queueNextTick(cb, ctx) {
      let _resolve;
      callbacks.push(function() {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, 'nextTick');
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });
      if (!pending) {
        pending = true;
        timerFunc();
      }
      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function(resolve, reject) {
          _resolve = resolve;
        });
      }
    };
  })();

  let _Set;
    /* istanbul ignore if */
  if (typeof Set !== 'undefined' && isNative(Set)) {
        // use native Set when available.
    _Set = Set;
  } else {
        // a non-standard Set polyfill that only works with primitive keys.
    _Set = (function() {
      function Set() {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };
      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

    /*  */


  let uid = 0;

    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */
  const Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
        // stabilize the subscriber list first
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

    // the current target watcher being evaluated.
    // this is globally unique because there could be only one
    // watcher being evaluated at any time.
  Dep.target = null;
  const targetStack = [];

  function pushTarget(_target) {
    if (Dep.target) {
      targetStack.push(Dep.target);
    }
    Dep.target = _target;
  }

  function popTarget() {
    Dep.target = targetStack.pop();
  }

    /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */

  const arrayProto = Array.prototype;
  const arrayMethods = Object.create(arrayProto);
  [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse',
  ]
    .forEach(function(method) {
        // cache original method
      const original = arrayProto[method];
      def(arrayMethods, method, function mutator() {
        let args = [],
          len = arguments.length;
        while (len--) args[len] = arguments[len];

        const result = original.apply(this, args);
        const ob = this.__ob__;
        let inserted;
        switch (method) {
          case 'push':
          case 'unshift':
            inserted = args;
            break;
          case 'splice':
            inserted = args.slice(2);
            break;
        }
        if (inserted) {
          ob.observeArray(inserted);
        }
            // notify change
        ob.dep.notify();
        return result;
      });
    });

    /*  */

  const arrayKeys = Object.getOwnPropertyNames(arrayMethods);

    /**
     * By default, when a reactive property is set, the new value is
     * also converted to become reactive. However when passing down props,
     * we don't want to force conversion because the value may be a nested value
     * under a frozen data structure. Converting it would defeat the optimization.
     */
  const observerState = {
    shouldConvert: true,
  };

    /**
     * Observer class that are attached to each observed
     * object. Once attached, the observer converts target
     * object's property keys into getter/setters that
     * collect dependencies and dispatches updates.
     */
  const Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      const augment = hasProto ?
                protoAugment :
                copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

    /**
     * Walk through each property and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
  Observer.prototype.walk = function walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i], obj[keys[i]]);
    }
  };

    /**
     * Observe a list of Array items.
     */
  Observer.prototype.observeArray = function observeArray(items) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

    // helpers

    /**
     * Augment an target Object or Array by intercepting
     * the prototype chain using __proto__
     */
  function protoAugment(target, src, keys) {
        /* eslint-disable no-proto */
    target.__proto__ = src;
        /* eslint-enable no-proto */
  }

    /**
     * Augment an target Object or Array by defining
     * hidden properties.
     */
    /* istanbul ignore next */
  function copyAugment(target, src, keys) {
    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i];
      def(target, key, src[key]);
    }
  }

    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */
  function observe(value, asRootData) {
    if (!isObject(value)) {
      return;
    }
    let ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
            observerState.shouldConvert &&
            !isServerRendering() &&
            (Array.isArray(value) || isPlainObject(value)) &&
            Object.isExtensible(value) &&
            !value._isVue
        ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob;
  }

    /**
     * Define a reactive property on an Object.
     */
  function defineReactive$$1(
        obj,
        key,
        val,
        customSetter,
        shallow
    ) {
    const dep = new Dep();

    const property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return;
    }

        // cater for pre-defined getter/setters
    const getter = property && property.get;
    const setter = property && property.set;

    let childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        const value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
          }
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        const value = getter ? getter.call(obj) : val;
                /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return;
        }
                /* eslint-enable no-self-compare */
        if ('development' !== 'production' && customSetter) {
          customSetter();
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      },
    });
  }

    /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */
  function set(target, key, val) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    if (hasOwn(target, key)) {
      target[key] = val;
      return val;
    }
    const ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      'development' !== 'production' && warn(
                'Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.'
            );
      return val;
    }
    if (!ob) {
      target[key] = val;
      return val;
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

    /**
     * Delete a property and trigger change if necessary.
     */
  function del(target, key) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }
    const ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      'development' !== 'production' && warn(
                'Avoid deleting properties on a Vue instance or its root $data ' +
                '- just set it to null.'
            );
      return;
    }
    if (!hasOwn(target, key)) {
      return;
    }
    delete target[key];
    if (!ob) {
      return;
    }
    ob.dep.notify();
  }

    /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */
  function dependArray(value) {
    for (let e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

    /*  */

    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
  const strats = config.optionMergeStrategies;

    /**
     * Options with restrictions
     */
  {
    strats.el = strats.propsData = function(parent, child, vm, key) {
      if (!vm) {
        warn(
                    'option "' + key + '" can only be used during instance ' +
                    'creation with the `new` keyword.'
                );
      }
      return defaultStrat(parent, child);
    };
  }

    /**
     * Helper that recursively merges two data objects together.
     */
  function mergeData(to, from) {
    if (!from) {
      return to;
    }
    let key,
      toVal,
      fromVal;
    const keys = Object.keys(from);
    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

    /**
     * Data
     */
  function mergeDataOrFn(
        parentVal,
        childVal,
        vm
    ) {
    if (!vm) {
            // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
            // when parentVal & childVal are both present,
            // we need to return a function that returns the
            // merged result of both functions... no need to
            // check if parentVal is a function here because
            // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(
                    typeof childVal === 'function' ? childVal.call(this) : childVal,
                    parentVal.call(this)
                );
      };
    } else if (parentVal || childVal) {
      return function mergedInstanceDataFn() {
                // instance merge
        const instanceData = typeof childVal === 'function' ?
                    childVal.call(vm) :
                    childVal;
        const defaultData = typeof parentVal === 'function' ?
                    parentVal.call(vm) :
                    undefined;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        }
        return defaultData;

      };
    }
  }

  strats.data = function(
        parentVal,
        childVal,
        vm
    ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        'development' !== 'production' && warn(
                    'The "data" option should be a function ' +
                    'that returns a per-instance value in component ' +
                    'definitions.',
                    vm
                );

        return parentVal;
      }
      return mergeDataOrFn.call(this, parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };

    /**
     * Hooks and props are merged as arrays.
     */
  function mergeHook(
        parentVal,
        childVal
    ) {
    return childVal ?
            parentVal ?
            parentVal.concat(childVal) :
            Array.isArray(childVal) ?
            childVal :
            [ childVal ] :
            parentVal;
  }

  LIFECYCLE_HOOKS.forEach(function(hook) {
    strats[hook] = mergeHook;
  });

    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */
  function mergeAssets(parentVal, childVal) {
    const res = Object.create(parentVal || null);
    return childVal ?
            extend(res, childVal) :
            res;
  }

  ASSET_TYPES.forEach(function(type) {
    strats[type + 's'] = mergeAssets;
  });

    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */
  strats.watch = function(parentVal, childVal) {
        // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }
    if (childVal === nativeWatch) {
      childVal = undefined;
    }
        /* istanbul ignore if */
    if (!childVal) {
      return Object.create(parentVal || null);
    }
    if (!parentVal) {
      return childVal;
    }
    const ret = {};
    extend(ret, parentVal);
    for (const key in childVal) {
      let parent = ret[key];
      const child = childVal[key];
      if (parent && !Array.isArray(parent)) {
        parent = [ parent ];
      }
      ret[key] = parent ?
                parent.concat(child) :
                Array.isArray(child) ? child : [ child ];
    }
    return ret;
  };

    /**
     * Other object hashes.
     */
  strats.props =
        strats.methods =
        strats.inject =
        strats.computed = function(parentVal, childVal) {
          if (!childVal) {
            return Object.create(parentVal || null);
          }
          if (!parentVal) {
            return childVal;
          }
          const ret = Object.create(null);
          extend(ret, parentVal);
          extend(ret, childVal);
          return ret;
        };
  strats.provide = mergeDataOrFn;

    /**
     * Default strategy.
     */
  var defaultStrat = function(parentVal, childVal) {
    return childVal === undefined ?
            parentVal :
            childVal;
  };

    /**
     * Validate component names
     */
  function checkComponents(options) {
    for (const key in options.components) {
      const lower = key.toLowerCase();
      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
        warn(
                    'Do not use built-in or reserved HTML elements as component ' +
                    'id: ' + key
                );
      }
    }
  }

    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */
  function normalizeProps(options) {
    const props = options.props;
    if (!props) {
      return;
    }
    const res = {};
    let i,
      val,
      name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = {
            type: null,
          };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (const key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ?
                    val :
        {
          type: val,
        };
      }
    }
    options.props = res;
  }

    /**
     * Normalize all injections into Object-based format
     */
  function normalizeInject(options) {
    const inject = options.inject;
    if (Array.isArray(inject)) {
      const normalized = options.inject = {};
      for (let i = 0; i < inject.length; i++) {
        normalized[inject[i]] = inject[i];
      }
    }
  }

    /**
     * Normalize raw function directives into object format.
     */
  function normalizeDirectives(options) {
    const dirs = options.directives;
    if (dirs) {
      for (const key in dirs) {
        const def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = {
            bind: def,
            update: def,
          };
        }
      }
    }
  }

    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */
  function mergeOptions(
        parent,
        child,
        vm
    ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child);
    normalizeInject(child);
    normalizeDirectives(child);
    const extendsFrom = child.extends;
    if (extendsFrom) {
      parent = mergeOptions(parent, extendsFrom, vm);
    }
    if (child.mixins) {
      for (let i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
    const options = {};
    let key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }

    function mergeField(key) {
      const strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */
  function resolveAsset(
        options,
        type,
        id,
        warnMissing
    ) {
        /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    const assets = options[type];
        // check local registration variations first
    if (hasOwn(assets, id)) {
      return assets[id];
    }
    const camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }
    const PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }
        // fallback to prototype chain
    const res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ('development' !== 'production' && warnMissing && !res) {
      warn(
                'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
                options
            );
    }
    return res;
  }

    /*  */

  function validateProp(
        key,
        propOptions,
        propsData,
        vm
    ) {
    const prop = propOptions[key];
    const absent = !hasOwn(propsData, key);
    let value = propsData[key];
        // handle boolean props
    if (isType(Boolean, prop.type)) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
        value = true;
      }
    }
        // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
            // since the default value is a fresh copy,
            // make sure to observe it.
      const prevShouldConvert = observerState.shouldConvert;
      observerState.shouldConvert = true;
      observe(value);
      observerState.shouldConvert = prevShouldConvert;
    } {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }

    /**
     * Get the default value of a prop.
     */
  function getPropDefaultValue(vm, prop, key) {
        // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }
    const def = prop.default;
        // warn against non-factory defaults for Object & Array
    if ('development' !== 'production' && isObject(def)) {
      warn(
                'Invalid default value for prop "' + key + '": ' +
                'Props with type Object/Array must use a factory function ' +
                'to return the default value.',
                vm
            );
    }
        // the raw prop value was also undefined from previous render,
        // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
            vm.$options.propsData[key] === undefined &&
            vm._props[key] !== undefined
        ) {
      return vm._props[key];
    }
        // call factory function for non-Function types
        // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function' ?
            def.call(vm) :
            def;
  }

    /**
     * Assert whether a prop is valid.
     */
  function assertProp(
        prop,
        name,
        value,
        vm,
        absent
    ) {
    if (prop.required && absent) {
      warn(
                'Missing required prop: "' + name + '"',
                vm
            );
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    let type = prop.type;
    let valid = !type || type === true;
    const expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [ type ];
      }
      for (let i = 0; i < type.length && !valid; i++) {
        const assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }
    if (!valid) {
      warn(
                'Invalid prop: type check failed for prop "' + name + '".' +
                ' Expected ' + expectedTypes.map(capitalize).join(', ') +
                ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
                vm
            );
      return;
    }
    const validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
                    'Invalid prop: custom validator check failed for prop "' + name + '".',
                    vm
                );
      }
    }
  }

  const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      valid = typeof value === expectedType.toLowerCase();
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid,
      expectedType,
    };
  }

    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */
  function getType(fn) {
    const match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isType(type, fn) {
    if (!Array.isArray(fn)) {
      return getType(fn) === getType(type);
    }
    for (let i = 0, len = fn.length; i < len; i++) {
      if (getType(fn[i]) === getType(type)) {
        return true;
      }
    }
        /* istanbul ignore next */
    return false;
  }

    /*  */

  let mark;
  let measure;

  {
    const perf = inBrowser && window.performance;
        /* istanbul ignore if */
    if (
            perf &&
            perf.mark &&
            perf.measure &&
            perf.clearMarks &&
            perf.clearMeasures
        ) {
      mark = function(tag) {
        return perf.mark(tag);
      };
      measure = function(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        perf.clearMeasures(name);
      };
    }
  }

    /* not type checking this file because flow doesn't play well with Proxy */

  let initProxy;

  {
    const allowedGlobals = makeMap(
            'Infinity,undefined,NaN,isFinite,isNaN,' +
            'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
            'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
            'require' // for Webpack/Browserify
        );

    const warnNonPresent = function(target, key) {
      warn(
                'Property or method "' + key + '" is not defined on the instance but ' +
                'referenced during render. Make sure to declare reactive data ' +
                'properties in the data option.',
                target
            );
    };

    const hasProxy =
            typeof Proxy !== 'undefined' &&
            Proxy.toString().match(/native code/);

    if (hasProxy) {
      const isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(('Avoid overwriting built-in modifier in config.keyCodes: .' + key));
            return false;
          }
          target[key] = value;
          return true;

        },
      });
    }

    const hasHandler = {
      has: function has(target, key) {
        const has = key in target;
        const isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
        if (!has && !isAllowed) {
          warnNonPresent(target, key);
        }
        return has || !isAllowed;
      },
    };

    const getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          warnNonPresent(target, key);
        }
        return target[key];
      },
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
                // determine which proxy handler to use
        const options = vm.$options;
        const handlers = options.render && options.render._withStripped ?
                    getHandler :
                    hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

    /*  */

  const VNode = function VNode(
        tag,
        data,
        children,
        text,
        elm,
        context,
        componentOptions,
        asyncFactory
    ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.functionalContext = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  const prototypeAccessors = {
    child: {},
  };

    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */
  prototypeAccessors.child.get = function() {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  const createEmptyVNode = function(text) {
    if (text === void 0) text = '';

    const node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

    // optimized shallow clone
    // used for static nodes and slot nodes because they may be reused across
    // multiple renders, cloning them avoids errors when DOM manipulations rely
    // on their elm reference.
  function cloneVNode(vnode) {
    const cloned = new VNode(
            vnode.tag,
            vnode.data,
            vnode.children,
            vnode.text,
            vnode.elm,
            vnode.context,
            vnode.componentOptions,
            vnode.asyncFactory
        );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.isCloned = true;
    return cloned;
  }

  function cloneVNodes(vnodes) {
    const len = vnodes.length;
    const res = new Array(len);
    for (let i = 0; i < len; i++) {
      res[i] = cloneVNode(vnodes[i]);
    }
    return res;
  }

    /*  */

  const normalizeEvent = cached(function(name) {
    const passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    const once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    const capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name,
      once: once$$1,
      capture,
      passive,
    };
  });

  function createFnInvoker(fns) {
    function invoker() {
      const arguments$1 = arguments;

      const fns = invoker.fns;
      if (Array.isArray(fns)) {
        const cloned = fns.slice();
        for (let i = 0; i < cloned.length; i++) {
          cloned[i].apply(null, arguments$1);
        }
      } else {
                // return handler return value for single handlers
        return fns.apply(null, arguments);
      }
    }
    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(
        on,
        oldOn,
        add,
        remove$$1,
        vm
    ) {
    let name,
      cur,
      old,
      event;
    for (name in on) {
      cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        'development' !== 'production' && warn(
                    'Invalid handler for event "' + (event.name) + '": got ' + String(cur),
                    vm
                );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }
        add(event.name, cur, event.once, event.capture, event.passive);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

    /*  */

  function mergeVNodeHook(def, hookKey, hook) {
    let invoker;
    const oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments);
            // important: remove merged hook to ensure it's called only once
            // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
            // no existing hook
      invoker = createFnInvoker([ wrappedHook ]);
    } else {
            /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
                // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
                // existing plain hook
        invoker = createFnInvoker([ oldHook, wrappedHook ]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

    /*  */

  function extractPropsFromVNodeData(
        data,
        Ctor,
        tag
    ) {
        // we are only extracting raw values here.
        // validation and default values are handled in the child
        // component itself.
    const propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return;
    }
    const res = {};
    const attrs = data.attrs;
    const props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (const key in propOptions) {
        const altKey = hyphenate(key); {
          const keyInLowerCase = key.toLowerCase();
          if (
                        key !== keyInLowerCase &&
                        attrs && hasOwn(attrs, keyInLowerCase)
                    ) {
            tip(
                            'Prop "' + keyInLowerCase + '" is passed to component ' +
                            (formatComponentName(tag || Ctor)) + ', but the declared prop name is' +
                            ' "' + key + '". ' +
                            'Note that HTML attributes are case-insensitive and camelCased ' +
                            'props need to use their kebab-case equivalents when using in-DOM ' +
                            'templates. You should probably use "' + altKey + '" instead of "' + key + '".'
                        );
          }
        }
        checkProp(res, props, key, altKey, true) ||
                    checkProp(res, attrs, key, altKey, false);
      }
    }
    return res;
  }

  function checkProp(
        res,
        hash,
        key,
        altKey,
        preserve
    ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true;
      }
    }
    return false;
  }

    /*  */

    // The template compiler attempts to minimize the need for normalization by
    // statically analyzing the template at compile time.
    //
    // For plain HTML markup, normalization can be completely skipped because the
    // generated render function is guaranteed to return Array<VNode>. There are
    // two cases where extra normalization is needed:

    // 1. When the children contains components - because a functional component
    // may return an Array instead of a single root. In this case, just a simple
    // normalization is needed - if any child is an Array, we flatten the whole
    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
    // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
    for (let i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }
    return children;
  }

    // 2. When the children contains constructs that always generated nested Arrays,
    // e.g. <template>, <slot>, v-for, or when the children is provided by user
    // with hand-written render functions / JSX. In such cases a full normalization
    // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
    return isPrimitive(children) ?
            [ createTextVNode(children) ] :
            Array.isArray(children) ?
            normalizeArrayChildren(children) :
            undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    const res = [];
    let i,
      c,
      last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }
      last = res[res.length - 1];
            //  nested
      if (Array.isArray(c)) {
        res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + '_' + i)));
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
                    // merge adjacent text nodes
                    // this is necessary for SSR hydration because text nodes are
                    // essentially merged when rendered to HTML strings
          (last).text += String(c);
        } else if (c !== '') {
                    // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
                    // merge adjacent text nodes
          res[res.length - 1] = createTextVNode(last.text + c.text);
        } else {
                    // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
                        isDef(c.tag) &&
                        isUndef(c.key) &&
                        isDef(nestedIndex)) {
            c.key = '__vlist' + nestedIndex + '_' + i + '__';
          }
          res.push(c);
        }
      }
    }
    return res;
  }

    /*  */

  function ensureCtor(comp, base) {
    if (comp.__esModule && comp.default) {
      comp = comp.default;
    }
    return isObject(comp) ?
            base.extend(comp) :
            comp;
  }

  function createAsyncPlaceholder(
        factory,
        data,
        context,
        children,
        tag
    ) {
    const node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = {
      data,
      context,
      children,
      tag,
    };
    return node;
  }

  function resolveAsyncComponent(
        factory,
        baseCtor,
        context
    ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (isDef(factory.contexts)) {
            // already pending
      factory.contexts.push(context);
    } else {
      const contexts = factory.contexts = [ context ];
      let sync = true;

      const forceRender = function() {
        for (let i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }
      };

      const resolve = once(function(res) {
                // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
                // invoke callbacks only if this is not a synchronous resolve
                // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender();
        }
      });

      const reject = once(function(reason) {
        'development' !== 'production' && warn(
                    'Failed to resolve async component: ' + (String(factory)) +
                    (reason ? ('\nReason: ' + reason) : '')
                );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender();
        }
      });

      const res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === 'function') {
                    // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isDef(res.component) && typeof res.component.then === 'function') {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function() {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                    factory.loading = true;
                    forceRender();
                  }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function() {
              if (isUndef(factory.resolved)) {
                reject(
                                    'timeout (' + (res.timeout) + 'ms)'
                                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
            // return in case resolved synchronously
      return factory.loading ?
                factory.loadingComp :
                factory.resolved;
    }
  }

    /*  */

  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; i++) {
        const c = children[i];
        if (isDef(c) && isDef(c.componentOptions)) {
          return c;
        }
      }
    }
  }

    /*  */

    /*  */

  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
        // init parent attached events
    const listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  let target;

  function add(event, fn, once$$1) {
    if (once$$1) {
      target.$once(event, fn);
    } else {
      target.$on(event, fn);
    }
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function updateComponentListeners(
        vm,
        listeners,
        oldListeners
    ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  }

  function eventsMixin(Vue) {
    const hookRE = /^hook:/;
    Vue.prototype.$on = function(event, fn) {
      const this$1 = this;

      const vm = this;
      if (Array.isArray(event)) {
        for (let i = 0, l = event.length; i < l; i++) {
          this$1.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
                // optimize hook:event cost by using a boolean flag marked at registration
                // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm;
    };

    Vue.prototype.$once = function(event, fn) {
      const vm = this;

      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function(event, fn) {
      const this$1 = this;

      const vm = this;
            // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      }
            // array of events
      if (Array.isArray(event)) {
        for (let i$1 = 0, l = event.length; i$1 < l; i$1++) {
          this$1.$off(event[i$1], fn);
        }
        return vm;
      }
            // specific event
      const cbs = vm._events[event];
      if (!cbs) {
        return vm;
      }
      if (arguments.length === 1) {
        vm._events[event] = null;
        return vm;
      }
            // specific handler
      let cb;
      let i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }
      return vm;
    };

    Vue.prototype.$emit = function(event) {
      const vm = this; {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
                        'Event "' + lowerCaseEvent + '" is emitted in component ' +
                        (formatComponentName(vm)) + ' but the handler is registered for "' + event + '". ' +
                        'Note that HTML attributes are case-insensitive and you cannot use ' +
                        'v-on to listen to camelCase events when using in-DOM templates. ' +
                        'You should probably use "' + (hyphenate(event)) + '" instead of "' + event + '".'
                    );
        }
      }
      let cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        const args = toArray(arguments, 1);
        for (let i = 0, l = cbs.length; i < l; i++) {
          try {
            cbs[i].apply(vm, args);
          } catch (e) {
            handleError(e, vm, ('event handler for "' + event + '"'));
          }
        }
      }
      return vm;
    };
  }

    /*  */

    /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */
  function resolveSlots(
        children,
        context
    ) {
    const slots = {};
    if (!children) {
      return slots;
    }
    const defaultSlot = [];
    for (let i = 0, l = children.length; i < l; i++) {
      const child = children[i];
            // named slots should only be respected if the vnode was rendered in the
            // same context.
      if ((child.context === context || child.functionalContext === context) &&
                child.data && child.data.slot != null
            ) {
        const name = child.data.slot;
        const slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children);
        } else {
          slot.push(child);
        }
      } else {
        defaultSlot.push(child);
      }
    }
        // ignore whitespace
    if (!defaultSlot.every(isWhitespace)) {
      slots.default = defaultSlot;
    }
    return slots;
  }

  function isWhitespace(node) {
    return node.isComment || node.text === ' ';
  }

  function resolveScopedSlots(
        fns, // see flow/vnode
        res
    ) {
    res = res || {};
    for (let i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }
    return res;
  }

    /*  */

  let activeInstance = null;
  let isUpdatingChildComponent = false;

  function initLifecycle(vm) {
    const options = vm.$options;

        // locate first non-abstract parent
    let parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function(vnode, hydrating) {
      const vm = this;
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate');
      }
      const prevEl = vm.$el;
      const prevVnode = vm._vnode;
      const prevActiveInstance = activeInstance;
      activeInstance = vm;
      vm._vnode = vnode;
            // Vue.prototype.__patch__ is injected in entry points
            // based on the rendering backend used.
      if (!prevVnode) {
                // initial render
        vm.$el = vm.__patch__(
                    vm.$el, vnode, hydrating, false /* removeOnly */,
                    vm.$options._parentElm,
                    vm.$options._refElm
                );
                // no need for the ref nodes after initial patch
                // this prevents keeping a detached DOM tree in memory (#5851)
        vm.$options._parentElm = vm.$options._refElm = null;
      } else {
                // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      activeInstance = prevActiveInstance;
            // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
            // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
            // updated hook is called by the scheduler to ensure that children are
            // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function() {
      const vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function() {
      const vm = this;
      if (vm._isBeingDestroyed) {
        return;
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
            // remove self from parent
      const parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
            // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      let i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
            // remove reference from data ob
            // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
            // call the last hook...
      vm._isDestroyed = true;
            // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
            // fire destroyed hook
      callHook(vm, 'destroyed');
            // turn off all instance listeners.
      vm.$off();
            // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
    };
  }

  function mountComponent(
        vm,
        el,
        hydrating
    ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode; {
                /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
                    vm.$options.el || el) {
          warn(
                        'You are using the runtime-only build of Vue where the template ' +
                        'compiler is not available. Either pre-compile the templates into ' +
                        'render functions, or use the compiler-included build.',
                        vm
                    );
        } else {
          warn(
                        'Failed to mount component: template or render function not defined.',
                        vm
                    );
        }
      }
    }
    callHook(vm, 'beforeMount');

    let updateComponent;
        /* istanbul ignore if */
    if ('development' !== 'production' && config.performance && mark) {
      updateComponent = function() {
        const name = vm._name;
        const id = vm._uid;
        const startTag = 'vue-perf-start:' + id;
        const endTag = 'vue-perf-end:' + id;

        mark(startTag);
        const vnode = vm._render();
        mark(endTag);
        measure((name + ' render'), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure((name + ' patch'), startTag, endTag);
      };
    } else {
      updateComponent = function() {
        vm._update(vm._render(), hydrating);
      };
    }

    vm._watcher = new Watcher(vm, updateComponent, noop);
    hydrating = false;

        // manually mounted instance, call mounted on self
        // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm;
  }

  function updateChildComponent(
        vm,
        propsData,
        listeners,
        parentVnode,
        renderChildren
    ) {
    {
      isUpdatingChildComponent = true;
    }

        // determine whether component has slot children
        // we need to do this before overwriting $options._renderChildren
    const hasChildren = !!(
            renderChildren || // has new static slots
            vm.$options._renderChildren || // has old static slots
            parentVnode.data.scopedSlots || // has new scoped slots
            vm.$scopedSlots !== emptyObject // has old scoped slots
        );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

        // update $attrs and $listensers hash
        // these are also reactive so they may trigger child update if the child
        // used them during render
    vm.$attrs = parentVnode.data && parentVnode.data.attrs;
    vm.$listeners = listeners;

        // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      const props = vm._props;
      const propKeys = vm.$options._propKeys || [];
      for (let i = 0; i < propKeys.length; i++) {
        const key = propKeys[i];
        props[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
            // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

        // update listeners
    if (listeners) {
      const oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
    }
        // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }
    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (let i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return;
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (let i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    const handlers = vm.$options[hook];
    if (handlers) {
      for (let i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, (hook + ' hook'));
        }
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
  }

    /*  */


  const MAX_UPDATE_COUNT = 100;

  const queue = [];
  const activatedChildren = [];
  let has = {};
  let circular = {};
  let waiting = false;
  let flushing = false;
  let index = 0;

    /**
     * Reset the scheduler's state.
     */
  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {}; {
      circular = {};
    }
    waiting = flushing = false;
  }

    /**
     * Flush both queues and run the watchers.
     */
  function flushSchedulerQueue() {
    flushing = true;
    let watcher,
      id;

        // Sort queue before flush.
        // This ensures that:
        // 1. Components are updated from parent to child. (because parent is always
        //    created before the child)
        // 2. A component's user watchers are run before its render watcher (because
        //    user watchers are created before the render watcher)
        // 3. If a component is destroyed during a parent component's watcher run,
        //    its watchers can be skipped.
    queue.sort(function(a, b) {
      return a.id - b.id;
    });

        // do not cache length because more watchers might be pushed
        // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      id = watcher.id;
      has[id] = null;
      watcher.run();
            // in dev build, check and stop circular updates.
      if ('development' !== 'production' && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
                        'You may have an infinite update loop ' + (
                            watcher.user ?
                            ('in watcher with expression "' + (watcher.expression) + '"') :
                            'in a component render function.'
                        ),
                        watcher.vm
                    );
          break;
        }
      }
    }

        // keep copies of post queues before resetting state
    const activatedQueue = activatedChildren.slice();
    const updatedQueue = queue.slice();

    resetSchedulerState();

        // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

        // devtool hook
        /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    let i = queue.length;
    while (i--) {
      const watcher = queue[i];
      const vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted) {
        callHook(vm, 'updated');
      }
    }
  }

    /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */
  function queueActivatedComponent(vm) {
        // setting _inactive to false here so that a render function can
        // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (let i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */
  function queueWatcher(watcher) {
    const id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
                // if already flushing, splice the watcher based on its id
                // if already past its id, it will be run next immediately.
        let i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
            // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }

    /*  */

  let uid$2 = 0;

    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */
  var Watcher = function Watcher(
        vm,
        expOrFn,
        cb,
        options
    ) {
    this.vm = vm;
    vm._watchers.push(this);
        // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
        // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = function() {};
        'development' !== 'production' && warn(
                    'Failed watching path: "' + expOrFn + '" ' +
                    'Watcher only accepts simple dot-delimited paths. ' +
                    'For full control, use a function instead.',
                    vm
                );
      }
    }
    this.value = this.lazy ?
            undefined :
            this.get();
  };

    /**
     * Evaluate the getter, and re-collect dependencies.
     */
  Watcher.prototype.get = function get() {
    pushTarget(this);
    let value;
    const vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ('getter for watcher "' + (this.expression) + '"'));
      } else {
        throw e;
      }
    } finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  };

    /**
     * Add a dependency to this directive.
     */
  Watcher.prototype.addDep = function addDep(dep) {
    const id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

    /**
     * Clean up for dependency collection.
     */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    const this$1 = this;

    let i = this.deps.length;
    while (i--) {
      const dep = this$1.deps[i];
      if (!this$1.newDepIds.has(dep.id)) {
        dep.removeSub(this$1);
      }
    }
    let tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
  Watcher.prototype.update = function update() {
        /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
  Watcher.prototype.run = function run() {
    if (this.active) {
      const value = this.get();
      if (
                value !== this.value ||
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) ||
                this.deep
            ) {
                // set new value
        const oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ('callback for watcher "' + (this.expression) + '"'));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

    /**
     * Depend on all deps collected by this watcher.
     */
  Watcher.prototype.depend = function depend() {
    const this$1 = this;

    let i = this.deps.length;
    while (i--) {
      this$1.deps[i].depend();
    }
  };

    /**
     * Remove self from all dependencies' subscriber list.
     */
  Watcher.prototype.teardown = function teardown() {
    const this$1 = this;

    if (this.active) {
            // remove self from vm's watcher list
            // this is a somewhat expensive operation so we skip it
            // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      let i = this.deps.length;
      while (i--) {
        this$1.deps[i].removeSub(this$1);
      }
      this.active = false;
    }
  };

    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */
  const seenObjects = new _Set();

  function traverse(val) {
    seenObjects.clear();
    _traverse(val, seenObjects);
  }

  function _traverse(val, seen) {
    let i,
      keys;
    const isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
      return;
    }
    if (val.__ob__) {
      const depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

    /*  */

  const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop,
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    const opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function checkOptionType(vm, name) {
    const option = vm.$options[name];
    if (!isPlainObject(option)) {
      warn(
                ('component option "' + name + '" should be an object.'),
                vm
            );
    }
  }

  function initProps(vm, propsOptions) {
    const propsData = vm.$options.propsData || {};
    const props = vm._props = {};
        // cache prop keys so that future props updates can iterate using Array
        // instead of dynamic object key enumeration.
    const keys = vm.$options._propKeys = [];
    const isRoot = !vm.$parent;
        // root instance props should be converted
    observerState.shouldConvert = isRoot;
    const loop = function(key) {
      keys.push(key);
      const value = validateProp(key, propsOptions, propsData, vm);
            /* istanbul ignore else */
      {
        if (isReservedAttribute(key) || config.isReservedAttr(key)) {
          warn(
                        ('"' + key + '" is a reserved attribute and cannot be used as component prop.'),
                        vm
                    );
        }
        defineReactive$$1(props, key, value, function() {
          if (vm.$parent && !isUpdatingChildComponent) {
            warn(
                            'Avoid mutating a prop directly since the value will be ' +
                            'overwritten whenever the parent component re-renders. ' +
                            "Instead, use a data or computed property based on the prop's " +
                            'value. Prop being mutated: "' + key + '"',
                            vm
                        );
          }
        });
      }
            // static props are already proxied on the component's prototype
            // during Vue.extend(). We only need to proxy props defined at
            // instantiation here.
      if (!(key in vm)) {
        proxy(vm, '_props', key);
      }
    };

    for (const key in propsOptions) loop(key);
    observerState.shouldConvert = true;
  }

  function initData(vm) {
    let data = vm.$options.data;
    data = vm._data = typeof data === 'function' ?
            getData(data, vm) :
            data || {};
    if (!isPlainObject(data)) {
      data = {};
      'development' !== 'production' && warn(
                'data functions should return an object:\n' +
                'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
                vm
            );
    }
        // proxy data on instance
    const keys = Object.keys(data);
    const props = vm.$options.props;
    const methods = vm.$options.methods;
    let i = keys.length;
    while (i--) {
      const key = keys[i]; {
        if (methods && hasOwn(methods, key)) {
          warn(
                        ('method "' + key + '" has already been defined as a data property.'),
                        vm
                    );
        }
      }
      if (props && hasOwn(props, key)) {
        'development' !== 'production' && warn(
                    'The data property "' + key + '" is already declared as a prop. ' +
                    'Use prop default value instead.',
                    vm
                );
      } else if (!isReserved(key)) {
        proxy(vm, '_data', key);
      }
    }
        // observe data
    observe(data, true /* asRootData */);
  }

  function getData(data, vm) {
    try {
      return data.call(vm);
    } catch (e) {
      handleError(e, vm, 'data()');
      return {};
    }
  }

  const computedWatcherOptions = {
    lazy: true,
  };

  function initComputed(vm, computed) {
    'development' !== 'production' && checkOptionType(vm, 'computed');
    const watchers = vm._computedWatchers = Object.create(null);

    for (const key in computed) {
      const userDef = computed[key];
      let getter = typeof userDef === 'function' ? userDef : userDef.get; {
        if (getter === undefined) {
          warn(
                        ('No getter function has been defined for computed property "' + key + '".'),
                        vm
                    );
          getter = noop;
        }
      }
            // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

            // component-defined computed properties are already defined on the
            // component prototype. We only need to define computed properties defined
            // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(('The computed property "' + key + '" is already defined in data.'), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(('The computed property "' + key + '" is already defined as a prop.'), vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = createComputedGetter(key);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ?
                userDef.cache !== false ?
                createComputedGetter(key) :
                userDef.get :
                noop;
      sharedPropertyDefinition.set = userDef.set ?
                userDef.set :
                noop;
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      const watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      }
    };
  }

  function initMethods(vm, methods) {
    'development' !== 'production' && checkOptionType(vm, 'methods');
    const props = vm.$options.props;
    for (const key in methods) {
      vm[key] = methods[key] == null ? noop : bind(methods[key], vm); {
        if (methods[key] == null) {
          warn(
                        'method "' + key + '" has an undefined value in the component definition. ' +
                        'Did you reference the function correctly?',
                        vm
                    );
        }
        if (props && hasOwn(props, key)) {
          warn(
                        ('method "' + key + '" has already been defined as a prop.'),
                        vm
                    );
        }
      }
    }
  }

  function initWatch(vm, watch) {
    'development' !== 'production' && checkOptionType(vm, 'watch');
    for (const key in watch) {
      const handler = watch[key];
      if (Array.isArray(handler)) {
        for (let i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(
        vm,
        keyOrFn,
        handler,
        options
    ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(keyOrFn, handler, options);
  }

  function stateMixin(Vue) {
        // flow somehow has problems with directly declared definition object
        // when using Object.defineProperty, so we have to procedurally build up
        // the object here.
    const dataDef = {};
    dataDef.get = function() {
      return this._data;
    };
    const propsDef = {};
    propsDef.get = function() {
      return this._props;
    }; {
      dataDef.set = function(newData) {
        warn(
                    'Avoid replacing instance root $data. ' +
                    'Use nested data properties instead.',
                    this
                );
      };
      propsDef.set = function() {
        warn('$props is readonly.', this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function(
            expOrFn,
            cb,
            options
        ) {
      const vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }
      options = options || {};
      options.user = true;
      const watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        cb.call(vm, watcher.value);
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

    /*  */

  function initProvide(vm) {
    const provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function' ?
                provide.call(vm) :
                provide;
    }
  }

  function initInjections(vm) {
    const result = resolveInject(vm.$options.inject, vm);
    if (result) {
      observerState.shouldConvert = false;
      Object.keys(result).forEach(function(key) {
                /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function() {
            warn(
                            'Avoid mutating an injected value directly since the changes will be ' +
                            'overwritten whenever the provided component re-renders. ' +
                            'injection being mutated: "' + key + '"',
                            vm
                        );
          });
        }
      });
      observerState.shouldConvert = true;
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
            // inject is :any because flow is not smart enough to figure out cached
      const result = Object.create(null);
      const keys = hasSymbol ?
                Reflect.ownKeys(inject) :
                Object.keys(inject);

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const provideKey = inject[key];
        let source = vm;
        while (source) {
          if (source._provided && provideKey in source._provided) {
            result[key] = source._provided[provideKey];
            break;
          }
          source = source.$parent;
        }
        if ('development' !== 'production' && !hasOwn(result, key)) {
          warn(('Injection "' + key + '" not found'), vm);
        }
      }
      return result;
    }
  }

    /*  */

  function createFunctionalComponent(
        Ctor,
        propsData,
        data,
        context,
        children
    ) {
    const props = {};
    const propOptions = Ctor.options.props;
    if (isDef(propOptions)) {
      for (const key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || {});
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }
      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }
        // ensure the createElement function in functional components
        // gets a unique context - this is necessary for correct named slot check
    const _context = Object.create(context);
    const h = function(a, b, c, d) {
      return createElement(_context, a, b, c, d, true);
    };
    const vnode = Ctor.options.render.call(null, h, {
      data,
      props,
      children,
      parent: context,
      listeners: data.on || {},
      injections: resolveInject(Ctor.options.inject, context),
      slots() {
        return resolveSlots(children, context);
      },
    });
    if (vnode instanceof VNode) {
      vnode.functionalContext = context;
      vnode.functionalOptions = Ctor.options;
      if (data.slot) {
        (vnode.data || (vnode.data = {})).slot = data.slot;
      }
    }
    return vnode;
  }

  function mergeProps(to, from) {
    for (const key in from) {
      to[camelize(key)] = from[key];
    }
  }

    /*  */

    // hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init(
            vnode,
            hydrating,
            parentElm,
            refElm
        ) {
      if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
        const child = vnode.componentInstance = createComponentInstanceForVnode(
                    vnode,
                    activeInstance,
                    parentElm,
                    refElm
                );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      } else if (vnode.data.keepAlive) {
                // kept-alive components, treat as a patch
        const mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      }
    },

    prepatch: function prepatch(oldVnode, vnode) {
      const options = vnode.componentOptions;
      const child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
                child,
                options.propsData, // updated props
                options.listeners, // updated listeners
                vnode, // new parent vnode
                options.children // new children
            );
    },

    insert: function insert(vnode) {
      const context = vnode.context;
      const componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
                    // vue-router#1212
                    // During updates, a kept-alive component's child components may
                    // change, so directly walking the tree here may call activated hooks
                    // on incorrect children. Instead we push them into a queue which will
                    // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy(vnode) {
      const componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    },
  };

  const hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(
        Ctor,
        data,
        context,
        children,
        tag
    ) {
    if (isUndef(Ctor)) {
      return;
    }

    const baseCtor = context.$options._base;

        // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

        // if at this stage it's not a constructor or an async component factory,
        // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(('Invalid Component definition: ' + (String(Ctor))), context);
      }
      return;
    }

        // async component
    let asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
      if (Ctor === undefined) {
                // return a placeholder node for async component, which is rendered
                // as a comment node but preserves all the raw information for the node.
                // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
                    asyncFactory,
                    data,
                    context,
                    children,
                    tag
                );
      }
    }

    data = data || {};

        // resolve constructor options in case global mixins are applied after
        // component constructor creation
    resolveConstructorOptions(Ctor);

        // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

        // extract props
    const propsData = extractPropsFromVNodeData(data, Ctor, tag);

        // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    }

        // keep listeners
    const listeners = data.on;

    if (isTrue(Ctor.options.abstract)) {
            // abstract components do not keep anything
            // other than props & listeners & slot

            // work around flow
      const slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

        // merge component management hooks onto the placeholder node
    mergeHooks(data);

        // return a placeholder vnode
    const name = Ctor.options.name || tag;
    const vnode = new VNode(
            ('vue-component-' + (Ctor.cid) + (name ? ('-' + name) : '')),
            data, undefined, undefined, undefined, context, {
              Ctor,
              propsData,
              listeners,
              tag,
              children,
            },
            asyncFactory
        );
    return vnode;
  }

  function createComponentInstanceForVnode(
        vnode, // we know it's MountedComponentVNode but flow doesn't
        parent, // activeInstance in lifecycle state
        parentElm,
        refElm
    ) {
    const vnodeComponentOptions = vnode.componentOptions;
    const options = {
      _isComponent: true,
      parent,
      propsData: vnodeComponentOptions.propsData,
      _componentTag: vnodeComponentOptions.tag,
      _parentVnode: vnode,
      _parentListeners: vnodeComponentOptions.listeners,
      _renderChildren: vnodeComponentOptions.children,
      _parentElm: parentElm || null,
      _refElm: refElm || null,
    };
        // check inline-template render functions
    const inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnodeComponentOptions.Ctor(options);
  }

  function mergeHooks(data) {
    if (!data.hook) {
      data.hook = {};
    }
    for (let i = 0; i < hooksToMerge.length; i++) {
      const key = hooksToMerge[i];
      const fromParent = data.hook[key];
      const ours = componentVNodeHooks[key];
      data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }
  }

  function mergeHook$1(one, two) {
    return function(a, b, c, d) {
      one(a, b, c, d);
      two(a, b, c, d);
    };
  }

    // transform component v-model info (value and callback) into
    // prop and event handler respectively.
  function transformModel(options, data) {
    const prop = (options.model && options.model.prop) || 'value';
    const event = (options.model && options.model.event) || 'input';
    (data.props || (data.props = {}))[prop] = data.model.value;
    const on = data.on || (data.on = {});
    if (isDef(on[event])) {
      on[event] = [ data.model.callback ].concat(on[event]);
    } else {
      on[event] = data.model.callback;
    }
  }

    /*  */

  const SIMPLE_NORMALIZE = 1;
  const ALWAYS_NORMALIZE = 2;

    // wrapper function for providing a more flexible interface
    // without getting yelled at by flow
  function createElement(
        context,
        tag,
        data,
        children,
        normalizationType,
        alwaysNormalize
    ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(
        context,
        tag,
        data,
        children,
        normalizationType
    ) {
    if (isDef(data) && isDef((data).__ob__)) {
      'development' !== 'production' && warn(
                'Avoid using observed data object as vnode data: ' + (JSON.stringify(data)) + '\n' +
                'Always create fresh vnode data objects in each render!',
                context
            );
      return createEmptyVNode();
    }
        // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
            // in case of component :is set to falsy value
      return createEmptyVNode();
    }
        // warn against non-primitive key
    if ('development' !== 'production' &&
            isDef(data) && isDef(data.key) && !isPrimitive(data.key)
        ) {
      warn(
                'Avoid using non-primitive value as key, ' +
                'use string/number value instead.',
                context
            );
    }
        // support single function children as default scoped slot
    if (Array.isArray(children) &&
            typeof children[0] === 'function'
        ) {
      data = data || {};
      data.scopedSlots = {
        default: children[0],
      };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    let vnode,
      ns;
    if (typeof tag === 'string') {
      let Ctor;
      ns = config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
                // platform built-in elements
        vnode = new VNode(
                    config.parsePlatformTagName(tag), data, children,
                    undefined, undefined, context
                );
      } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
                // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
                // unknown or unlisted namespaced elements
                // check at runtime because it may get assigned a namespace when its
                // parent normalizes children
        vnode = new VNode(
                    tag, data, children,
                    undefined, undefined, context
                );
      }
    } else {
            // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (isDef(vnode)) {
      if (ns) {
        applyNS(vnode, ns);
      }
      return vnode;
    }
    return createEmptyVNode();

  }

  function applyNS(vnode, ns) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
            // use default namespace inside foreignObject
      return;
    }
    if (isDef(vnode.children)) {
      for (let i = 0, l = vnode.children.length; i < l; i++) {
        const child = vnode.children[i];
        if (isDef(child.tag) && isUndef(child.ns)) {
          applyNS(child, ns);
        }
      }
    }
  }

    /*  */

    /**
     * Runtime helper for rendering v-for lists.
     */
  function renderList(
        val,
        render
    ) {
    let ret,
      i,
      l,
      keys,
      key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    if (isDef(ret)) {
      (ret)._isVList = true;
    }
    return ret;
  }

    /*  */

    /**
     * Runtime helper for rendering <slot>
     */
  function renderSlot(
        name,
        fallback,
        props,
        bindObject
    ) {
    const scopedSlotFn = this.$scopedSlots[name];
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        props = extend(extend({}, bindObject), props);
      }
      return scopedSlotFn(props) || fallback;
    }
    const slotNodes = this.$slots[name];
            // warn duplicate slot usage
    if (slotNodes && 'development' !== 'production') {
      slotNodes._rendered && warn(
                    'Duplicate presence of slot "' + name + '" found in the same render tree ' +
                    '- this will likely cause render errors.',
                    this
                );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback;

  }

    /*  */

    /**
     * Runtime helper for resolving filters
     */
  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }

    /*  */

    /**
     * Runtime helper for checking keyCodes from config.
     */
  function checkKeyCodes(
        eventKeyCode,
        key,
        builtInAlias
    ) {
    const keyCodes = config.keyCodes[key] || builtInAlias;
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1;
    }
    return keyCodes !== eventKeyCode;

  }

    /*  */

    /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */
  function bindObjectProps(
        data,
        tag,
        value,
        asProp,
        isSync
    ) {
    if (value) {
      if (!isObject(value)) {
        'development' !== 'production' && warn(
                    'v-bind without argument expects an Object or Array value',
                    this
                );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        let hash;
        const loop = function(key) {
          if (
                        key === 'class' ||
                        key === 'style' ||
                        isReservedAttribute(key)
                    ) {
            hash = data;
          } else {
            const type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ?
                            data.domProps || (data.domProps = {}) :
                            data.attrs || (data.attrs = {});
          }
          if (!(key in hash)) {
            hash[key] = value[key];

            if (isSync) {
              const on = data.on || (data.on = {});
              on[('update:' + key)] = function($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (const key in value) loop(key);
      }
    }
    return data;
  }

    /*  */

    /**
     * Runtime helper for rendering static trees.
     */
  function renderStatic(
        index,
        isInFor
    ) {
    let tree = this._staticTrees[index];
        // if has already-rendered static tree and not inside v-for,
        // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree) ?
                cloneVNodes(tree) :
                cloneVNode(tree);
    }
        // otherwise, render a fresh tree.
    tree = this._staticTrees[index] =
            this.$options.staticRenderFns[index].call(this._renderProxy);
    markStatic(tree, ('__static__' + index), false);
    return tree;
  }

    /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */
  function markOnce(
        tree,
        index,
        key
    ) {
    markStatic(tree, ('__once__' + index + (key ? ('_' + key) : '')), true);
    return tree;
  }

  function markStatic(
        tree,
        key,
        isOnce
    ) {
    if (Array.isArray(tree)) {
      for (let i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + '_' + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

    /*  */

  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        'development' !== 'production' && warn(
                    'v-on without argument expects an Object value',
                    this
                );
      } else {
        const on = data.on = data.on ? extend({}, data.on) : {};
        for (const key in value) {
          const existing = on[key];
          const ours = value[key];
          on[key] = existing ? [].concat(ours, existing) : ours;
        }
      }
    }
    return data;
  }

    /*  */

  function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null;
    const parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
    const renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
        // bind the createElement fn to this instance
        // so that we get proper render context inside it.
        // args order: tag, data, children, normalizationType, alwaysNormalize
        // internal version is used by render functions compiled from templates
    vm._c = function(a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
        // normalization is always applied for the public version, used in
        // user-written render functions.
    vm.$createElement = function(a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };

        // $attrs & $listeners are exposed for easier HOC creation.
        // they need to be reactive so that HOCs using them are always updated
    const parentData = parentVnode && parentVnode.data;
        /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function() {
        !isUpdatingChildComponent && warn('$attrs is readonly.', vm);
      }, true);
      defineReactive$$1(vm, '$listeners', parentData && parentData.on, function() {
        !isUpdatingChildComponent && warn('$listeners is readonly.', vm);
      }, true);
    }
  }

  function renderMixin(Vue) {
    Vue.prototype.$nextTick = function(fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function() {
      const vm = this;
      const ref = vm.$options;
      const render = ref.render;
      const staticRenderFns = ref.staticRenderFns;
      const _parentVnode = ref._parentVnode;

      if (vm._isMounted) {
                // clone slot nodes on re-renders
        for (const key in vm.$slots) {
          vm.$slots[key] = cloneVNodes(vm.$slots[key]);
        }
      }

      vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

      if (staticRenderFns && !vm._staticTrees) {
        vm._staticTrees = [];
      }
            // set parent vnode. this allows render functions to have access
            // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
            // render self
      let vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, 'render function');
                // return error render result,
                // or previous vnode to prevent render error causing blank component
                /* istanbul ignore else */
        {
          vnode = vm.$options.renderError ?
                        vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e) :
                        vm._vnode;
        }
      }
            // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if ('development' !== 'production' && Array.isArray(vnode)) {
          warn(
                        'Multiple root nodes returned from render function. Render function ' +
                        'should return a single root node.',
                        vm
                    );
        }
        vnode = createEmptyVNode();
      }
            // set parent
      vnode.parent = _parentVnode;
      return vnode;
    };

        // internal render helpers.
        // these are exposed on the instance prototype to reduce generated render
        // code size.
    Vue.prototype._o = markOnce;
    Vue.prototype._n = toNumber;
    Vue.prototype._s = toString;
    Vue.prototype._l = renderList;
    Vue.prototype._t = renderSlot;
    Vue.prototype._q = looseEqual;
    Vue.prototype._i = looseIndexOf;
    Vue.prototype._m = renderStatic;
    Vue.prototype._f = resolveFilter;
    Vue.prototype._k = checkKeyCodes;
    Vue.prototype._b = bindObjectProps;
    Vue.prototype._v = createTextVNode;
    Vue.prototype._e = createEmptyVNode;
    Vue.prototype._u = resolveScopedSlots;
    Vue.prototype._g = bindObjectListeners;
  }

    /*  */

  let uid$1 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function(options) {
      const vm = this;
            // a uid
      vm._uid = uid$1++;

      let startTag,
        endTag;
            /* istanbul ignore if */
      if ('development' !== 'production' && config.performance && mark) {
        startTag = 'vue-perf-init:' + (vm._uid);
        endTag = 'vue-perf-end:' + (vm._uid);
        mark(startTag);
      }

            // a flag to avoid this being observed
      vm._isVue = true;
            // merge options
      if (options && options._isComponent) {
                // optimize internal component instantiation
                // since dynamic options merging is pretty slow, and none of the
                // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
                    resolveConstructorOptions(vm.constructor),
                    options || {},
                    vm
                );
      }
            /* istanbul ignore else */
      {
        initProxy(vm);
      }
            // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

            /* istanbul ignore if */
      if ('development' !== 'production' && config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(((vm._name) + ' init'), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    const opts = vm.$options = Object.create(vm.constructor.options);
        // doing this because it's faster than dynamic enumeration.
    opts.parent = options.parent;
    opts.propsData = options.propsData;
    opts._parentVnode = options._parentVnode;
    opts._parentListeners = options._parentListeners;
    opts._renderChildren = options._renderChildren;
    opts._componentTag = options._componentTag;
    opts._parentElm = options._parentElm;
    opts._refElm = options._refElm;
    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    let options = Ctor.options;
    if (Ctor.super) {
      const superOptions = resolveConstructorOptions(Ctor.super);
      const cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
                // super option changed,
                // need to resolve new options.
        Ctor.superOptions = superOptions;
                // check if there are any late-modified/attached options (#4976)
        const modifiedOptions = resolveModifiedOptions(Ctor);
                // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }

  function resolveModifiedOptions(Ctor) {
    let modified;
    const latest = Ctor.options;
    const extended = Ctor.extendOptions;
    const sealed = Ctor.sealedOptions;
    for (const key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }
        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }
    return modified;
  }

  function dedupe(latest, extended, sealed) {
        // compare latest and sealed to ensure lifecycle hooks won't be duplicated
        // between merges
    if (Array.isArray(latest)) {
      const res = [];
      sealed = Array.isArray(sealed) ? sealed : [ sealed ];
      extended = Array.isArray(extended) ? extended : [ extended ];
      for (let i = 0; i < latest.length; i++) {
                // push original options and not sealed options to exclude duplicated options
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }
      return res;
    }
    return latest;

  }

  function Vue$3(options) {
    if ('development' !== 'production' &&
            !(this instanceof Vue$3)
        ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue$3);
  stateMixin(Vue$3);
  eventsMixin(Vue$3);
  lifecycleMixin(Vue$3);
  renderMixin(Vue$3);

    /*  */

  function initUse(Vue) {
    Vue.use = function(plugin) {
      const installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      }

            // additional parameters
      const args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this;
    };
  }

    /*  */

  function initMixin$1(Vue) {
    Vue.mixin = function(mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }

    /*  */

  function initExtend(Vue) {
        /**
         * Each instance constructor, including Vue, has a unique
         * cid. This enables us to create wrapped "child
         * constructors" for prototypal inheritance and cache them.
         */
    Vue.cid = 0;
    let cid = 1;

        /**
         * Class inheritance
         */
    Vue.extend = function(extendOptions) {
      extendOptions = extendOptions || {};
      const Super = this;
      const SuperId = Super.cid;
      const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      const name = extendOptions.name || Super.options.name; {
        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
          warn(
                        'Invalid component name: "' + name + '". Component names ' +
                        'can only contain alphanumeric characters and the hyphen, ' +
                        'and must start with a letter.'
                    );
        }
      }

      const Sub = function VueComponent(options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
                Super.options,
                extendOptions
            );
      Sub.super = Super;

            // For props and computed properties, we define the proxy getters on
            // the Vue instances at extension time, on the extended prototype. This
            // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

            // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

            // create asset registers, so extended classes
            // can have their private assets too.
      ASSET_TYPES.forEach(function(type) {
        Sub[type] = Super[type];
      });
            // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

            // keep a reference to the super options at extension time.
            // later at instantiation we can check if Super's options have
            // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

            // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    const props = Comp.options.props;
    for (const key in props) {
      proxy(Comp.prototype, '_props', key);
    }
  }

  function initComputed$1(Comp) {
    const computed = Comp.options.computed;
    for (const key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

    /*  */

  function initAssetRegisters(Vue) {
        /**
         * Create asset registration methods.
         */
    ASSET_TYPES.forEach(function(type) {
      Vue[type] = function(
                id,
                definition
            ) {
        if (!definition) {
          return this.options[type + 's'][id];
        }
                    /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
                                'Do not use built-in or reserved HTML elements as component ' +
                                'id: ' + id
                            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition,
          };
        }
        this.options[type + 's'][id] = definition;
        return definition;

      };
    });
  }

    /*  */

  const patternTypes = [ String, RegExp, Array ];

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
        /* istanbul ignore next */
    return false;
  }

  function pruneCache(cache, current, filter) {
    for (const key in cache) {
      const cachedNode = cache[key];
      if (cachedNode) {
        const name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          if (cachedNode !== current) {
            pruneCacheEntry(cachedNode);
          }
          cache[key] = null;
        }
      }
    }
  }

  function pruneCacheEntry(vnode) {
    if (vnode) {
      vnode.componentInstance.$destroy();
    }
  }

  const KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
    },

    created: function created() {
      this.cache = Object.create(null);
    },

    destroyed: function destroyed() {
      const this$1 = this;

      for (const key in this$1.cache) {
        pruneCacheEntry(this$1.cache[key]);
      }
    },

    watch: {
      include: function include(val) {
        pruneCache(this.cache, this._vnode, function(name) {
          return matches(val, name);
        });
      },
      exclude: function exclude(val) {
        pruneCache(this.cache, this._vnode, function(name) {
          return !matches(val, name);
        });
      },
    },

    render: function render() {
      const vnode = getFirstComponentChild(this.$slots.default);
      const componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
                // check pattern
        const name = getComponentName(componentOptions);
        if (name && (
                        (this.include && !matches(this.include, name)) ||
                        (this.exclude && matches(this.exclude, name))
                    )) {
          return vnode;
        }
        const key = vnode.key == null
                    // same constructor may get registered as different local components
                    // so cid alone is not enough (#3269)
                    ?
                    componentOptions.Ctor.cid + (componentOptions.tag ? ('::' + (componentOptions.tag)) : '') :
                    vnode.key;
        if (this.cache[key]) {
          vnode.componentInstance = this.cache[key].componentInstance;
        } else {
          this.cache[key] = vnode;
        }
        vnode.data.keepAlive = true;
      }
      return vnode;
    },
  };

  const builtInComponents = {
    KeepAlive,
  };

    /*  */

  function initGlobalAPI(Vue) {
        // config
    const configDef = {};
    configDef.get = function() {
      return config;
    }; {
      configDef.set = function() {
        warn(
                    'Do not replace the Vue.config object, set individual fields instead.'
                );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

        // exposed util methods.
        // NOTE: these are not considered part of the public API - avoid relying on
        // them unless you are aware of the risk.
    Vue.util = {
      warn,
      extend,
      mergeOptions,
      defineReactive: defineReactive$$1,
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function(type) {
      Vue.options[type + 's'] = Object.create(null);
    });

        // this is used to identify the "base" constructor to extend all plain-object
        // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue$3);

  Object.defineProperty(Vue$3.prototype, '$isServer', {
    get: isServerRendering,
  });

  Object.defineProperty(Vue$3.prototype, '$ssrContext', {
    get: function get() {
            /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    },
  });

  Vue$3.version = '2.4.0';

    /*  */

    // these are reserved for web because they are directly compiled away
    // during template compilation
  const isReservedAttr = makeMap('style,class');

    // attributes that should be using props for binding
  const acceptValue = makeMap('input,textarea,option,select');
  const mustUseProp = function(tag, type, attr) {
    return (
            (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
            (attr === 'selected' && tag === 'option') ||
            (attr === 'checked' && tag === 'input') ||
            (attr === 'muted' && tag === 'video')
    );
  };

  const isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  const isBooleanAttr = makeMap(
        'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
        'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
        'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
        'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
        'required,reversed,scoped,seamless,selected,sortable,translate,' +
        'truespeed,typemustmatch,visible'
    );

  const xlinkNS = 'http://www.w3.org/1999/xlink';

  const isXlink = function(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  const getXlinkProp = function(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  const isFalsyAttrValue = function(val) {
    return val == null || val === false;
  };

    /*  */

  function genClassForVnode(vnode) {
    let data = vnode.data;
    let parentNode = vnode;
    let childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ?
                [ child.class, parent.class ] :
                parent.class,
    };
  }

  function renderClass(
        staticClass,
        dynamicClass
    ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
        /* istanbul ignore next */
    return '';
  }

  function concat(a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '');
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }
    if (isObject(value)) {
      return stringifyObject(value);
    }
    if (typeof value === 'string') {
      return value;
    }
        /* istanbul ignore next */
    return '';
  }

  function stringifyArray(value) {
    let res = '';
    let stringified;
    for (let i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }
        res += stringified;
      }
    }
    return res;
  }

  function stringifyObject(value) {
    let res = '';
    for (const key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }
        res += key;
      }
    }
    return res;
  }

    /*  */

  const namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML',
  };

  const isHTMLTag = makeMap(
        'html,body,base,head,link,meta,style,title,' +
        'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
        'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
        'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
        's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
        'embed,object,param,source,canvas,script,noscript,del,ins,' +
        'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
        'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
        'output,progress,select,textarea,' +
        'details,dialog,menu,menuitem,summary,' +
        'content,element,shadow,template,blockquote,iframe,tfoot'
    );

    // this map is intentionally selective, only covering SVG elements that may
    // contain child elements.
  const isSVG = makeMap(
        'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
        'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
        'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
        true
    );

  const isPreTag = function(tag) {
    return tag === 'pre';
  };

  const isReservedTag = function(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    }
        // basic support for MathML
        // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math';
    }
  }

  const unknownElementCache = Object.create(null);

  function isUnknownElement(tag) {
        /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }
    if (isReservedTag(tag)) {
      return false;
    }
    tag = tag.toLowerCase();
        /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }
    const el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
            // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
                el.constructor === window.HTMLUnknownElement ||
                el.constructor === window.HTMLElement
            ));
    }
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));

  }

    /*  */

    /**
     * Query an element selector if it's not an element already.
     */
  function query(el) {
    if (typeof el === 'string') {
      const selected = document.querySelector(el);
      if (!selected) {
        'development' !== 'production' && warn(
                    'Cannot find element: ' + el
                );
        return document.createElement('div');
      }
      return selected;
    }
    return el;

  }

    /*  */

  function createElement$1(tagName, vnode) {
    const elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm;
    }
        // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setAttribute(node, key, val) {
    node.setAttribute(key, val);
  }


  const nodeOps = Object.freeze({
    createElement: createElement$1,
    createElementNS,
    createTextNode,
    createComment,
    insertBefore,
    removeChild,
    appendChild,
    parentNode,
    nextSibling,
    tagName,
    setTextContent,
    setAttribute,
  });

    /*  */

  const ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    },
  };

  function registerRef(vnode, isRemoval) {
    const key = vnode.data.ref;
    if (!key) {
      return;
    }

    const vm = vnode.context;
    const ref = vnode.componentInstance || vnode.elm;
    const refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ ref ];
        } else if (refs[key].indexOf(ref) < 0) {
                    // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
     *
     * modified by Evan You (@yyx990803)
     *

    /*
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */

  const emptyNode = new VNode('', {}, []);

  const hooks = [ 'create', 'activate', 'update', 'remove', 'destroy' ];

  function sameVnode(a, b) {
    return (
            a.key === b.key && (
                (
                    a.tag === b.tag &&
                    a.isComment === b.isComment &&
                    isDef(a.data) === isDef(b.data) &&
                    sameInputType(a, b)
                ) || (
                    isTrue(a.isAsyncPlaceholder) &&
                    a.asyncFactory === b.asyncFactory &&
                    isUndef(b.asyncFactory.error)
                )
            )
    );
  }

    // Some browsers do not support dynamically changing type for <input>
    // so they need to be treated as different nodes
  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }
    let i;
    const typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    const typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB;
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    let i,
      key;
    const map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) {
        map[key] = i;
      }
    }
    return map;
  }

  function createPatchFunction(backend) {
    let i,
      j;
    const cbs = {};

    const modules = backend.modules;
    const nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1;
    }

    function removeNode(el) {
      const parent = nodeOps.parentNode(el);
            // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    let inPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      const data = vnode.data;
      const children = vnode.children;
      const tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            inPre++;
          }
          if (!inPre &&
                        !vnode.ns &&
                        !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
                        config.isUnknownElement(tag)
                    ) {
            warn(
                            'Unknown custom element: <' + tag + '> - did you ' +
                            'register the component correctly? For recursive components, ' +
                            'make sure to provide the "name" option.',
                            vnode.context
                        );
          }
        }
        vnode.elm = vnode.ns ?
                    nodeOps.createElementNS(vnode.ns, tag) :
                    nodeOps.createElement(tag, vnode);
        setScope(vnode);

                /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if ('development' !== 'production' && data && data.pre) {
          inPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      let i = vnode.data;
      if (isDef(i)) {
        const isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */, parentElm, refElm);
        }
                // after calling the init hook, if the vnode is a child component
                // it should've created a child instance and mounted it. the child
                // component also has set the placeholder vnode's elm.
                // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
                // empty component root.
                // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
                // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      let i;
            // hack for #4339: a reactivated component with inner transition
            // does not trigger because the inner node's created hooks are not called
            // again. It's not ideal to involve module-specific logic in here but
            // there doesn't seem to be a better way to do it.
      let innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break;
        }
      }
            // unlike a newly created component,
            // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (ref$$1.parentNode === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        for (let i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (let i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }
        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

        // set scope id attribute for scoped CSS.
        // this is implemented as a special case to avoid the overhead
        // of going through the normal attribute patching process.
    function setScope(vnode) {
      let i;
      let ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
            // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
                i !== vnode.context &&
                isDef(i = i.$options._scopeId)
            ) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
      }
    }

    function invokeDestroyHook(vnode) {
      let i,
        j;
      const data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        const ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        let i;
        const listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
                    // we have a recursively passed down rm callback
                    // increase the listeners count
          rm.listeners += listeners;
        } else {
                    // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
                // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      let oldStartIdx = 0;
      let newStartIdx = 0;
      let oldEndIdx = oldCh.length - 1;
      let oldStartVnode = oldCh[0];
      let oldEndVnode = oldCh[oldEndIdx];
      let newEndIdx = newCh.length - 1;
      let newStartVnode = newCh[0];
      let newEndVnode = newCh[newEndIdx];
      let oldKeyToIdx,
        idxInOld,
        elmToMove,
        refElm;

            // removeOnly is a special flag used only by <transition-group>
            // to ensure removed elements stay in correct relative positions
            // during leaving transitions
      const canMove = !removeOnly;

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
          } else {
            if (isUndef(oldKeyToIdx)) {
                oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
              }
            idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
            if (isUndef(idxInOld)) { // New element
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
                newStartVnode = newCh[++newStartIdx];
              } else {
                elmToMove = oldCh[idxInOld];
                        /* istanbul ignore if */
                if ('development' !== 'production' && !elmToMove) {
                    warn(
                                'It seems there are duplicate keys that is causing an update error. ' +
                                'Make sure each v-for item has a unique key.'
                            );
                  }
                if (sameVnode(elmToMove, newStartVnode)) {
                    patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                    oldCh[idxInOld] = undefined;
                    canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                  } else {
                            // same key but different element. treat as new element
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                  }
              }
          }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      const elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return;
      }

            // reuse element for static trees.
            // note we only do this if the vnode is cloned -
            // if the new node is not cloned it means the render functions have been
            // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
                isTrue(oldVnode.isStatic) &&
                vnode.key === oldVnode.key &&
                (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
            ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      let i;
      const data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      const oldCh = oldVnode.children;
      const ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
            // delay insert hooks for component root nodes, invoke them after the
            // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (let i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    let bailed = false;
        // list of modules that can skip create hook during hydration because they
        // are already rendered on the client or has no need for initialization
    const isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

        // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue) {
      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.elm = elm;
        vnode.isAsyncPlaceholder = true;
        return true;
      } {
        if (!assertNodeMatch(elm, vnode)) {
          return false;
        }
      }
      vnode.elm = elm;
      const tag = vnode.tag;
      const data = vnode.data;
      const children = vnode.children;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true /* hydrating */);
        }
        if (isDef(i = vnode.componentInstance)) {
                    // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
                    // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            let childrenMatch = true;
            let childNode = elm.firstChild;
            for (let i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              if ('development' !== 'production' &&
                                typeof console !== 'undefined' &&
                                !bailed
                            ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false;
            }
          }
        }
        if (isDef(data)) {
          for (const key in data) {
            if (!isRenderedModule(key)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true;
    }

    function assertNodeMatch(node, vnode) {
      if (isDef(vnode.tag)) {
        return (
                    vnode.tag.indexOf('vue-component') === 0 ||
                    vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        );
      }
      return node.nodeType === (vnode.isComment ? 8 : 3);

    }

    return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }
        return;
      }

      let isInitialPatch = false;
      const insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
                // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
      } else {
        const isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
                    // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
        } else {
          if (isRealElement) {
                        // mounting to a real element
                        // check if this is server-rendered content and if we can perform
                        // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              }
              warn(
                                    'The client-side rendered virtual DOM tree is not matching ' +
                                    'server-rendered content. This is likely caused by incorrect ' +
                                    'HTML markup, for example nesting block-level elements inside ' +
                                    '<p>, or missing <tbody>. Bailing hydration and performing ' +
                                    'full client-side render.'
                                );

            }
                        // either not server-rendered, or hydration failed.
                        // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }
                    // replacing existing element
          const oldElm = oldVnode.elm;
          const parentElm$1 = nodeOps.parentNode(oldElm);
          createElm(
                        vnode,
                        insertedVnodeQueue,
                        // extremely rare edge case: do not insert if old element is in a
                        // leaving transition. Only happens when combining transition +
                        // keep-alive + HOCs. (#4590)
                        oldElm._leaveCb ? null : parentElm$1,
                        nodeOps.nextSibling(oldElm)
                    );

          if (isDef(vnode.parent)) {
                        // component root element replaced.
                        // update parent placeholder node element, recursively
            let ancestor = vnode.parent;
            while (ancestor) {
              ancestor.elm = vnode.elm;
              ancestor = ancestor.parent;
            }
            if (isPatchable(vnode)) {
              for (let i = 0; i < cbs.create.length; ++i) {
                cbs.create[i](emptyNode, vnode.parent);
              }
            }
          }

          if (isDef(parentElm$1)) {
            removeVnodes(parentElm$1, [ oldVnode ], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

    /*  */

  const directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    },
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    const isCreate = oldVnode === emptyNode;
    const isDestroy = vnode === emptyNode;
    const oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    const newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    const dirsWithInsert = [];
    const dirsWithPostpatch = [];

    let key,
      oldDir,
      dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
                // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
                // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      const callInsert = function() {
        for (let i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function() {
        for (let i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
                    // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  const emptyModifiers = Object.create(null);

  function normalizeDirectives$1(
        dirs,
        vm
    ) {
    const res = Object.create(null);
    if (!dirs) {
      return res;
    }
    let i,
      dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || ((dir.name) + '.' + (Object.keys(dir.modifiers || {}).join('.')));
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    const fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ('directive ' + (dir.name) + ' ' + hook + ' hook'));
      }
    }
  }

  const baseModules = [
    ref,
    directives,
  ];

    /*  */

  function updateAttrs(oldVnode, vnode) {
    const opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }
    let key,
      cur,
      old;
    const elm = vnode.elm;
    const oldAttrs = oldVnode.data.attrs || {};
    let attrs = vnode.data.attrs || {};
        // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
        // #4391: in IE9, setting type can reset value for input[type=radio]
        /* istanbul ignore if */
    if (isIE9 && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (isBooleanAttr(key)) {
            // set attribute for blank value
            // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, key);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  const attrs = {
    create: updateAttrs,
    update: updateAttrs,
  };

    /*  */

  function updateClass(oldVnode, vnode) {
    const el = vnode.elm;
    const data = vnode.data;
    const oldData = oldVnode.data;
    if (
            isUndef(data.staticClass) &&
            isUndef(data.class) && (
                isUndef(oldData) || (
                    isUndef(oldData.staticClass) &&
                    isUndef(oldData.class)
                )
            )
        ) {
      return;
    }

    let cls = genClassForVnode(vnode);

        // handle transition classes
    const transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

        // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  const klass = {
    create: updateClass,
    update: updateClass,
  };

    /*  */

  const validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    let inSingle = false;
    let inDouble = false;
    let inTemplateString = false;
    let inRegex = false;
    let curly = 0;
    let square = 0;
    let paren = 0;
    let lastFilterIndex = 0;
    let c,
      prev,
      i,
      expression,
      filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (
                c === 0x7C && // pipe
                exp.charCodeAt(i + 1) !== 0x7C &&
                exp.charCodeAt(i - 1) !== 0x7C &&
                !curly && !square && !paren
            ) {
        if (expression === undefined) {
                    // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;
            break; // "
          case 0x27:
            inSingle = true;
            break; // '
          case 0x60:
            inTemplateString = true;
            break; // `
          case 0x28:
            paren++;
            break; // (
          case 0x29:
            paren--;
            break; // )
          case 0x5B:
            square++;
            break; // [
          case 0x5D:
            square--;
            break; // ]
          case 0x7B:
            curly++;
            break; // {
          case 0x7D:
            curly--;
            break; // }
        }
        if (c === 0x2f) { // /
          let j = i - 1;
          let p = (void 0);
                    // find first non-whitespace prev char
          for (; j >= 0; j--) {
              p = exp.charAt(j);
              if (p !== ' ') {
                  break;
                }
            }
          if (!p || !validDivisionCharRE.test(p)) {
              inRegex = true;
            }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    const i = filter.indexOf('(');
    if (i < 0) {
            // _f: resolveFilter
      return ('_f("' + filter + '")(' + exp + ')');
    }
    const name = filter.slice(0, i);
    const args = filter.slice(i + 1);
    return ('_f("' + name + '")(' + exp + ',' + args);

  }

    /*  */

  function baseWarn(msg) {
    console.error(('[Vue compiler]: ' + msg));
  }

  function pluckModuleFunction(
        modules,
        key
    ) {
    return modules ?
            modules.map(function(m) {
              return m[key];
            }).filter(function(_) {
              return _;
            }) :
            [];
  }

  function addProp(el, name, value) {
    (el.props || (el.props = [])).push({
      name,
      value,
    });
  }

  function addAttr(el, name, value) {
    (el.attrs || (el.attrs = [])).push({
      name,
      value,
    });
  }

  function addDirective(
        el,
        name,
        rawName,
        value,
        arg,
        modifiers
    ) {
    (el.directives || (el.directives = [])).push({
      name,
      rawName,
      value,
      arg,
      modifiers,
    });
  }

  function addHandler(
        el,
        name,
        value,
        modifiers,
        important,
        warn
    ) {
        // warn prevent and passive modifier
        /* istanbul ignore if */
    if (
            'development' !== 'production' && warn &&
            modifiers && modifiers.prevent && modifiers.passive
        ) {
      warn(
                'passive and prevent can\'t be used together. ' +
                'Passive handler can\'t prevent default event.'
            );
    }
        // check capture modifier
    if (modifiers && modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers && modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
        /* istanbul ignore if */
    if (modifiers && modifiers.passive) {
      delete modifiers.passive;
      name = '&' + name; // mark the event as passive
    }
    let events;
    if (modifiers && modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }
    const newHandler = {
      value,
      modifiers,
    };
    const handlers = events[name];
        /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [ newHandler, handlers ] : [ handlers, newHandler ];
    } else {
      events[name] = newHandler;
    }
  }

  function getBindingAttr(
        el,
        name,
        getStatic
    ) {
    const dynamicValue =
            getAndRemoveAttr(el, ':' + name) ||
            getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      const staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue);
      }
    }
  }

  function getAndRemoveAttr(el, name) {
    let val;
    if ((val = el.attrsMap[name]) != null) {
      const list = el.attrsList;
      for (let i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }
    return val;
  }

    /*  */

    /**
     * Cross-platform code generation for component v-model
     */
  function genComponentModel(
        el,
        value,
        modifiers
    ) {
    const ref = modifiers || {};
    const number = ref.number;
    const trim = ref.trim;

    const baseValueExpression = '$$v';
    let valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
                '(typeof ' + baseValueExpression + " === 'string'" +
                '? ' + baseValueExpression + '.trim()' +
                ': ' + baseValueExpression + ')';
    }
    if (number) {
      valueExpression = '_n(' + valueExpression + ')';
    }
    const assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ('(' + value + ')'),
      expression: ('"' + value + '"'),
      callback: ('function (' + baseValueExpression + ') {' + assignment + '}'),
    };
  }

    /**
     * Cross-platform codegen helper for generating v-model value assignment code.
     */
  function genAssignmentCode(
        value,
        assignment
    ) {
    const modelRs = parseModel(value);
    if (modelRs.idx === null) {
      return (value + '=' + assignment);
    }
    return ('$set(' + (modelRs.exp) + ', ' + (modelRs.idx) + ', ' + assignment + ')');

  }

    /**
     * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
     *
     * for loop possible cases:
     *
     * - test
     * - test[idx]
     * - test[test1[idx]]
     * - test["a"][idx]
     * - xxx.test[a[a].test1[idx]]
     * - test.xxx.a["asa"][test1[idx]]
     *
     */

  let len;
  let str;
  let chr;
  let index$1;
  let expressionPos;
  let expressionEndPos;

  function parseModel(val) {
    str = val;
    len = str.length;
    index$1 = expressionPos = expressionEndPos = 0;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      return {
        exp: val,
        idx: null,
      };
    }

    while (!eof()) {
      chr = next();
            /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.substring(0, expressionPos),
      idx: val.substring(expressionPos + 1, expressionEndPos),
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    let inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    const stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break;
      }
    }
  }

    /*  */

  let warn$1;

    // in some cases, the event used has to be determined at runtime
    // so we used some reserved tokens during compile.
  const RANGE_TOKEN = '__r';
  const CHECKBOX_RADIO_TOKEN = '__c';

  function model(
        el,
        dir,
        _warn
    ) {
    warn$1 = _warn;
    const value = dir.value;
    const modifiers = dir.modifiers;
    const tag = el.tag;
    const type = el.attrsMap.type;

    {
      const dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (tag === 'input' && dynamicType) {
        warn$1(
                    '<input :type="' + dynamicType + '" v-model="' + value + '">:\n' +
                    'v-model does not support dynamic input types. Use v-if branches instead.'
                );
      }
            // inputs with type="file" are read only and setting the input's
            // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
                    '<' + (el.tag) + ' v-model="' + value + '" type="file">:\n' +
                    'File inputs are read only. Use a v-on:change listener instead.'
                );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
            // component v-model doesn't need extra runtime
      return false;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
            // component v-model doesn't need extra runtime
      return false;
    } else {
      warn$1(
                '<' + (el.tag) + ' v-model="' + value + '">: ' +
                'v-model is not supported on this element type. ' +
                'If you are working with contenteditable, it\'s recommended to ' +
                'wrap a library dedicated for that purpose inside a custom component.'
            );
    }

        // ensure runtime directive metadata
    return true;
  }

  function genCheckboxModel(
        el,
        value,
        modifiers
    ) {
    const number = modifiers && modifiers.number;
    const valueBinding = getBindingAttr(el, 'value') || 'null';
    const trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    const falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
            'Array.isArray(' + value + ')' +
            '?_i(' + value + ',' + valueBinding + ')>-1' + (
                trueValueBinding === 'true' ?
                (':(' + value + ')') :
                (':_q(' + value + ',' + trueValueBinding + ')')
            )
        );
    addHandler(el, CHECKBOX_RADIO_TOKEN,
            'var $$a=' + value + ',' +
            '$$el=$event.target,' +
            '$$c=$$el.checked?(' + trueValueBinding + '):(' + falseValueBinding + ');' +
            'if(Array.isArray($$a)){' +
            'var $$v=' + (number ? '_n(' + valueBinding + ')' : valueBinding) + ',' +
            '$$i=_i($$a,$$v);' +
            'if($$c){$$i<0&&(' + value + '=$$a.concat($$v))}' +
            'else{$$i>-1&&(' + value + '=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}' +
            '}else{' + (genAssignmentCode(value, '$$c')) + '}',
            null, true
        );
  }

  function genRadioModel(
        el,
        value,
        modifiers
    ) {
    const number = modifiers && modifiers.number;
    let valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ('_n(' + valueBinding + ')') : valueBinding;
    addProp(el, 'checked', ('_q(' + value + ',' + valueBinding + ')'));
    addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(
        el,
        value,
        modifiers
    ) {
    const number = modifiers && modifiers.number;
    const selectedVal = 'Array.prototype.filter' +
            '.call($event.target.options,function(o){return o.selected})' +
            '.map(function(o){var val = "_value" in o ? o._value : o.value;' +
            'return ' + (number ? '_n(val)' : 'val') + '})';

    const assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    let code = 'var $$selectedVal = ' + selectedVal + ';';
    code = code + ' ' + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(
        el,
        value,
        modifiers
    ) {
    const type = el.attrsMap.type;
    const ref = modifiers || {};
    const lazy = ref.lazy;
    const number = ref.number;
    const trim = ref.trim;
    const needCompositionGuard = !lazy && type !== 'range';
    const event = lazy ?
            'change' :
            type === 'range' ?
            RANGE_TOKEN :
            'input';

    let valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = '$event.target.value.trim()';
    }
    if (number) {
      valueExpression = '_n(' + valueExpression + ')';
    }

    let code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = 'if($event.target.composing)return;' + code;
    }

    addProp(el, 'value', ('(' + value + ')'));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

    /*  */

    // normalize v-model event tokens that can only be determined at runtime.
    // it's important to place the event as the first in the array because
    // the whole point is ensuring the v-model callback gets called before
    // user-attached handlers.
  function normalizeEvents(on) {
    let event;
        /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
            // IE input[type=range] only supports `change` event
      event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
            // Chrome fires microtasks in between click/change, leads to #4521
      event = isChrome ? 'click' : 'change';
      on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  let target$1;

  function add$1(
        event,
        handler,
        once$$1,
        capture,
        passive
    ) {
    if (once$$1) {
      const oldHandler = handler;
      const _target = target$1; // save current target element in closure
      handler = function(ev) {
        const res = arguments.length === 1 ?
                    oldHandler(ev) :
                    oldHandler.apply(null, arguments);
        if (res !== null) {
          remove$2(event, handler, capture, _target);
        }
      };
    }
    target$1.addEventListener(
            event,
            handler,
            supportsPassive ?
            {
              capture,
              passive,
            } :
            capture
        );
  }

  function remove$2(
        event,
        handler,
        capture,
        _target
    ) {
    (_target || target$1).removeEventListener(event, handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    const isComponentRoot = isDef(vnode.componentOptions);
    let oldOn = isComponentRoot ? oldVnode.data.nativeOn : oldVnode.data.on;
    let on = isComponentRoot ? vnode.data.nativeOn : vnode.data.on;
    if (isUndef(oldOn) && isUndef(on)) {
      return;
    }
    on = on || {};
    oldOn = oldOn || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  }

  const events = {
    create: updateDOMListeners,
    update: updateDOMListeners,
  };

    /*  */

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }
    let key,
      cur;
    const elm = vnode.elm;
    const oldProps = oldVnode.data.domProps || {};
    let props = vnode.data.domProps || {};
        // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
            // ignore children if the node has textContent or innerHTML,
            // as these will throw away existing DOM nodes and cause removal errors
            // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue;
        }
      }

      if (key === 'value') {
                // store value as _value as well since
                // non-string values will be stringified
        elm._value = cur;
                // avoid resetting cursor position when value is the same
        const strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, vnode, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
  }

    // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(
        elm,
        vnode,
        checkVal
    ) {
    return (!elm.composing && (
            vnode.tag === 'option' ||
            isDirty(elm, checkVal) ||
            isInputChanged(elm, checkVal)
        ));
  }

  function isDirty(elm, checkVal) {
        // return true when textbox (.number and .trim) loses focus and its value is
        // not equal to the updated value
    return document.activeElement !== elm && elm.value !== checkVal;
  }

  function isInputChanged(elm, newVal) {
    const value = elm.value;
    const modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers) && modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }
    if (isDef(modifiers) && modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
    return value !== newVal;
  }

  const domProps = {
    create: updateDOMProps,
    update: updateDOMProps,
  };

    /*  */

  const parseStyleText = cached(function(cssText) {
    const res = {};
    const listDelimiter = /;(?![^(]*\))/g;
    const propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function(item) {
      if (item) {
        const tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  });

    // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
    const style = normalizeStyleBinding(data.style);
        // static style is pre-processed into an object during compilation
        // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ?
            extend(data.staticStyle, style) :
            style;
  }

    // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }
    return bindingStyle;
  }

    /**
     * parent component style should be after child's
     * so that parent component's style could override it
     */
  function getStyle(vnode, checkChild) {
    const res = {};
    let styleData;

    if (checkChild) {
      let childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    let parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res;
  }

    /*  */

  const cssVarRE = /^--/;
  const importantRE = /\s*!important$/;
  const setProp = function(el, name, val) {
        /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      const normalizedName = normalize(name);
      if (Array.isArray(val)) {
                // Support values array created by autoprefixer, e.g.
                // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
                // Set them one by one, and the browser will only set those it can recognize
        for (let i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  const vendorNames = [ 'Webkit', 'Moz', 'ms' ];

  let emptyStyle;
  var normalize = cached(function(prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop;
    }
    const capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (let i = 0; i < vendorNames.length; i++) {
      const name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    const data = vnode.data;
    const oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
            isUndef(oldData.staticStyle) && isUndef(oldData.style)
        ) {
      return;
    }

    let cur,
      name;
    const el = vnode.elm;
    const oldStaticStyle = oldData.staticStyle;
    const oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

        // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    const oldStyle = oldStaticStyle || oldStyleBinding;

    const style = normalizeStyleBinding(vnode.data.style) || {};

        // store normalized style under a different key for next diff
        // make sure to clone it if it's reactive, since the user likley wants
        // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ?
            extend({}, style) :
            style;

    const newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
                // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  const style = {
    create: updateStyle,
    update: updateStyle,
  };

    /*  */

    /**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
  function addClass(el, cls) {
        /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

        /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function(c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      const cur = ' ' + (el.getAttribute('class') || '') + ' ';
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

    /**
     * Remove class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
  function removeClass(el, cls) {
        /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

        /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function(c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      let cur = ' ' + (el.getAttribute('class') || '') + ' ';
      const tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

    /*  */

  function resolveTransition(def$$1) {
    if (!def$$1) {
      return;
    }
        /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      const res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res;
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1);
    }
  }

  var autoCssTransition = cached(function(name) {
    return {
      enterClass: (name + '-enter'),
      enterToClass: (name + '-enter-to'),
      enterActiveClass: (name + '-enter-active'),
      leaveClass: (name + '-leave'),
      leaveToClass: (name + '-leave-to'),
      leaveActiveClass: (name + '-leave-active'),
    };
  });

  const hasTransition = inBrowser && !isIE9;
  const TRANSITION = 'transition';
  const ANIMATION = 'animation';

    // Transition property/event sniffing
  let transitionProp = 'transition';
  let transitionEndEvent = 'transitionend';
  let animationProp = 'animation';
  let animationEndEvent = 'animationend';
  if (hasTransition) {
        /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
            window.onwebkittransitionend !== undefined
        ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
            window.onwebkitanimationend !== undefined
        ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

    // binding to window is necessary to make hot reload work in IE in strict mode
  const raf = inBrowser && window.requestAnimationFrame ?
        window.requestAnimationFrame.bind(window) :
        setTimeout;

  function nextFrame(fn) {
    raf(function() {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    const transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds(
        el,
        expectedType,
        cb
    ) {
    const ref = getTransitionInfo(el, expectedType);
    const type = ref.type;
    const timeout = ref.timeout;
    const propCount = ref.propCount;
    if (!type) {
      return cb();
    }
    const event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    let ended = 0;
    const end = function() {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function() {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  const transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const transitionDelays = styles[transitionProp + 'Delay'].split(', ');
    const transitionDurations = styles[transitionProp + 'Duration'].split(', ');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = styles[animationProp + 'Delay'].split(', ');
    const animationDurations = styles[animationProp + 'Duration'].split(', ');
    const animationTimeout = getTimeout(animationDelays, animationDurations);

    let type;
    let timeout = 0;
    let propCount = 0;
        /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ?
                transitionTimeout > animationTimeout ?
                TRANSITION :
                ANIMATION :
                null;
      propCount = type ?
                type === TRANSITION ?
                transitionDurations.length :
                animationDurations.length :
                0;
    }
    const hasTransform =
            type === TRANSITION &&
            transformRE.test(styles[transitionProp + 'Property']);
    return {
      type,
      timeout,
      propCount,
      hasTransform,
    };
  }

  function getTimeout(delays, durations) {
        /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function(d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  }

  function toMs(s) {
    return Number(s.slice(0, -1)) * 1000;
  }

    /*  */

  function enter(vnode, toggleDisplay) {
    const el = vnode.elm;

        // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    const data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return;
    }

        /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    const css = data.css;
    const type = data.type;
    const enterClass = data.enterClass;
    const enterToClass = data.enterToClass;
    const enterActiveClass = data.enterActiveClass;
    const appearClass = data.appearClass;
    const appearToClass = data.appearToClass;
    const appearActiveClass = data.appearActiveClass;
    const beforeEnter = data.beforeEnter;
    const enter = data.enter;
    const afterEnter = data.afterEnter;
    const enterCancelled = data.enterCancelled;
    const beforeAppear = data.beforeAppear;
    const appear = data.appear;
    const afterAppear = data.afterAppear;
    const appearCancelled = data.appearCancelled;
    const duration = data.duration;

        // activeInstance will always be the <transition> component managing this
        // transition. One edge case to check is when the <transition> is placed
        // as the root node of a child component. In that case we need to check
        // <transition>'s parent for appear check.
    let context = activeInstance;
    let transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    const isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    const startClass = isAppear && appearClass ?
            appearClass :
            enterClass;
    const activeClass = isAppear && appearActiveClass ?
            appearActiveClass :
            enterActiveClass;
    const toClass = isAppear && appearToClass ?
            appearToClass :
            enterToClass;

    const beforeEnterHook = isAppear ?
            (beforeAppear || beforeEnter) :
            beforeEnter;
    const enterHook = isAppear ?
            (typeof appear === 'function' ? appear : enter) :
            enter;
    const afterEnterHook = isAppear ?
            (afterAppear || afterEnter) :
            afterEnter;
    const enterCancelledHook = isAppear ?
            (appearCancelled || enterCancelled) :
            enterCancelled;

    const explicitEnterDuration = toNumber(
            isObject(duration) ?
            duration.enter :
            duration
        );

    if ('development' !== 'production' && explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    const expectsCSS = css !== false && !isIE9;
    const userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function() {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
            // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function() {
        const parent = el.parentNode;
        const pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
                    pendingNode.tag === vnode.tag &&
                    pendingNode.elm._leaveCb
                ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

        // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function() {
        addTransitionClass(el, toClass);
        removeTransitionClass(el, startClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    const el = vnode.elm;

        // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    const data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return rm();
    }

        /* istanbul ignore if */
    if (isDef(el._leaveCb) || el.nodeType !== 1) {
      return;
    }

    const css = data.css;
    const type = data.type;
    const leaveClass = data.leaveClass;
    const leaveToClass = data.leaveToClass;
    const leaveActiveClass = data.leaveActiveClass;
    const beforeLeave = data.beforeLeave;
    const leave = data.leave;
    const afterLeave = data.afterLeave;
    const leaveCancelled = data.leaveCancelled;
    const delayLeave = data.delayLeave;
    const duration = data.duration;

    const expectsCSS = css !== false && !isIE9;
    const userWantsControl = getHookArgumentsLength(leave);

    const explicitLeaveDuration = toNumber(
            isObject(duration) ?
            duration.leave :
            duration
        );

    if ('development' !== 'production' && isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function() {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
            // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      }
            // record leaving element
      if (!vnode.data.show) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function() {
          addTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled && !userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

    // only used in dev mode
  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
                '<transition> explicit ' + name + ' duration is not a valid number - ' +
                'got ' + (JSON.stringify(val)) + '.',
                vnode.context
            );
    } else if (isNaN(val)) {
      warn(
                '<transition> explicit ' + name + ' duration is NaN - ' +
                'the duration expression might be incorrect.',
                vnode.context
            );
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }

    /**
     * Normalize a transition hook's argument length. The hook may be:
     * - a merged hook (invoker) with the original in .fns
     * - a wrapped component method (check ._length)
     * - a plain function (.length)
     */
  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }
    const invokerFns = fn.fns;
    if (isDef(invokerFns)) {
            // invoker
      return getHookArgumentsLength(
                Array.isArray(invokerFns) ?
                invokerFns[0] :
                invokerFns
            );
    }
    return (fn._length || fn.length) > 1;

  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  const transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
            /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    },
  } : {};

  const platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition,
  ];

    /*  */

    // the directive module should be applied last, after all
    // built-in modules have been applied.
  const modules = platformModules.concat(baseModules);

  const patch = createPatchFunction({
    nodeOps,
    modules,
  });

    /**
     * Not type checking this file because flow doesn't like attaching
     * properties to Elements.
     */

  const isTextInputType = makeMap('text,number,password,search,email,tel,url');

    /* istanbul ignore if */
  if (isIE9) {
        // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function() {
      const el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  const model$1 = {
    inserted: function inserted(el, binding, vnode) {
      if (vnode.tag === 'select') {
        const cb = function() {
          setSelected(el, binding, vnode.context);
        };
        cb();
                /* istanbul ignore if */
        if (isIE || isEdge) {
          setTimeout(cb, 0);
        }
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
                    // Safari < 10.2 & UIWebView doesn't fire compositionend when
                    // switching focus before confirming composition choice
                    // this also fixes the issue where some browsers e.g. iOS Chrome
                    // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          if (!isAndroid) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
          }
                    /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
                // in case the options rendered by v-for have changed,
                // it's possible that the value is out-of-sync with the rendered options.
                // detect such cases and filter out values that no longer has a matching
                // option in the DOM.
        const needReset = el.multiple ?
                    binding.value.some(function(v) {
                      return hasNoMatchingOption(v, el.options);
                    }) :
                    binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    },
  };

  function setSelected(el, binding, vm) {
    const value = binding.value;
    const isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      'development' !== 'production' && warn(
                '<select multiple v-model="' + (binding.expression) + '"> ' +
                'expects an Array value for its binding, but got ' + (Object.prototype.toString.call(value).slice(8, -1)),
                vm
            );
      return;
    }
    let selected,
      option;
    for (let i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    for (let i = 0, l = options.length; i < l; i++) {
      if (looseEqual(getValue(options[i]), value)) {
        return false;
      }
    }
    return true;
  }

  function getValue(option) {
    return '_value' in option ?
            option._value :
            option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
        // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

    /*  */

    // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ?
            locateNode(vnode.componentInstance._vnode) :
            vnode;
  }

  const show = {
    bind: function bind(el, ref, vnode) {
      const value = ref.value;

      vnode = locateNode(vnode);
      const transition$$1 = vnode.data && vnode.data.transition;
      const originalDisplay = el.__vOriginalDisplay =
                el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1 && !isIE9) {
        vnode.data.show = true;
        enter(vnode, function() {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update(el, ref, vnode) {
      const value = ref.value;
      const oldValue = ref.oldValue;

            /* istanbul ignore if */
      if (value === oldValue) {
        return;
      }
      vnode = locateNode(vnode);
      const transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1 && !isIE9) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function() {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function() {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind(
            el,
            binding,
            vnode,
            oldVnode,
            isDestroy
        ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    },
  };

  const platformDirectives = {
    model: model$1,
    show,
  };

    /*  */

    // Provides transition support for a single element/component.
    // supports transition mode (out-in / in-out)

  const transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [ Number, String, Object ],
  };

    // in case the child is also an abstract component, e.g. <keep-alive>
    // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
    const compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    }
    return vnode;

  }

  function extractTransitionData(comp) {
    const data = {};
    const options = comp.$options;
        // props
    for (const key in options.propsData) {
      data[key] = comp[key];
    }
        // events.
        // extract listeners and pass them directly to the transition methods
    const listeners = options._parentListeners;
    for (const key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData,
      });
    }
  }

  function hasParentTransition(vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }

  const Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {
      const this$1 = this;

      let children = this.$options._renderChildren;
      if (!children) {
        return;
      }

            // filter out text nodes (possible whitespaces)
      children = children.filter(function(c) {
        return c.tag || isAsyncPlaceholder(c);
      });
            /* istanbul ignore if */
      if (!children.length) {
        return;
      }

            // warn multiple elements
      if ('development' !== 'production' && children.length > 1) {
        warn(
                    '<transition> can only be used on a single element. Use ' +
                    '<transition-group> for lists.',
                    this.$parent
                );
      }

      const mode = this.mode;

            // warn invalid mode
      if ('development' !== 'production' &&
                mode && mode !== 'in-out' && mode !== 'out-in'
            ) {
        warn(
                    'invalid <transition> mode: ' + mode,
                    this.$parent
                );
      }

      const rawChild = children[0];

            // if this is a component root node and the component's
            // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

            // apply transition data to child
            // use getRealChild() to ignore abstract components e.g. keep-alive
      const child = getRealChild(rawChild);
            /* istanbul ignore if */
      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

            // ensure a key that is unique to the vnode type and to this transition
            // component instance. This key will be used to remove pending leaving nodes
            // during entering.
      const id = '__transition-' + (this._uid) + '-';
      child.key = child.key == null ?
                child.isComment ?
                id + 'comment' :
                id + child.tag :
                isPrimitive(child.key) ?
                (String(child.key).indexOf(id) === 0 ? child.key : id + child.key) :
                child.key;

      const data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      const oldRawChild = this._vnode;
      const oldChild = getRealChild(oldRawChild);

            // mark v-show
            // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(function(d) {
        return d.name === 'show';
      })) {
        child.data.show = true;
      }

      if (
                oldChild &&
                oldChild.data &&
                !isSameChild(child, oldChild) &&
                !isAsyncPlaceholder(oldChild)
            ) {
                // replace old child transition data with fresh one
                // important for dynamic transitions!
        const oldData = oldChild && (oldChild.data.transition = extend({}, data));
                // handle transition mode
        if (mode === 'out-in') {
                    // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function() {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }
          let delayedLeave;
          const performLeave = function() {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function(leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    },
  };

    /*  */

    // Provides transition support for list items.
    // supports move transitions using the FLIP technique.

    // Because the vdom's children update algorithm is "unstable" - i.e.
    // it doesn't guarantee the relative positioning of removed elements,
    // we force transition-group to update its children into two passes:
    // in the first pass, we remove all nodes that need to be removed,
    // triggering their leaving transition; in the second pass, we insert/move
    // into the final desired state. This way in the second pass removed
    // nodes will remain where they should be.

  const props = extend({
    tag: String,
    moveClass: String,
  }, transitionProps);

  delete props.mode;

  const TransitionGroup = {
    props,

    render: function render(h) {
      const tag = this.tag || this.$vnode.data.tag || 'span';
      const map = Object.create(null);
      const prevChildren = this.prevChildren = this.children;
      const rawChildren = this.$slots.default || [];
      const children = this.children = [];
      const transitionData = extractTransitionData(this);

      for (let i = 0; i < rawChildren.length; i++) {
        const c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;
            (c.data || (c.data = {})).transition = transitionData;
          } else {
            const opts = c.componentOptions;
            const name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(('<transition-group> children must be keyed: <' + name + '>'));
          }
        }
      }

      if (prevChildren) {
        const kept = [];
        const removed = [];
        for (let i$1 = 0; i$1 < prevChildren.length; i$1++) {
          const c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },

    beforeUpdate: function beforeUpdate() {
            // force removing pass
      this.__patch__(
                this._vnode,
                this.kept,
                false, // hydrating
                true // removeOnly (!important, avoids unnecessary moves)
            );
      this._vnode = this.kept;
    },

    updated: function updated() {
      const children = this.prevChildren;
      const moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      }

            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

            // force reflow to put everything in position
      const body = document.body;
            var f = body.offsetHeight; // eslint-disable-line

      children.forEach(function(c) {
        if (c.data.moved) {
          const el = c.elm;
          const s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {
                /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
                /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove;
        }
                // Detect whether an element with the move class applied has
                // CSS transitions. Since the element may be inside an entering
                // transition at this very moment, we make a clone of it and remove
                // all other transition classes applied to ensure only the move class
                // is applied.
        const clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function(cls) {
            removeClass(clone, cls);
          });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        const info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform);
      },
    },
  };

  function callPendingCbs(c) {
        /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
        /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    const oldPos = c.data.pos;
    const newPos = c.data.newPos;
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      const s = c.elm.style;
      s.transform = s.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)';
      s.transitionDuration = '0s';
    }
  }

  const platformComponents = {
    Transition,
    TransitionGroup,
  };

    /*  */

    // install platform specific utils
  Vue$3.config.mustUseProp = mustUseProp;
  Vue$3.config.isReservedTag = isReservedTag;
  Vue$3.config.isReservedAttr = isReservedAttr;
  Vue$3.config.getTagNamespace = getTagNamespace;
  Vue$3.config.isUnknownElement = isUnknownElement;

    // install platform runtime directives & components
  extend(Vue$3.options.directives, platformDirectives);
  extend(Vue$3.options.components, platformComponents);

    // install platform patch function
  Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

    // public mount method
  Vue$3.prototype.$mount = function(
        el,
        hydrating
    ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  };

    // devtools global hook
    /* istanbul ignore next */
  setTimeout(function() {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue$3);
      } else if ('development' !== 'production' && isChrome) {
        console[console.info ? 'info' : 'log'](
                    'Download the Vue Devtools extension for a better development experience:\n' +
                    'https://github.com/vuejs/vue-devtools'
                );
      }
    }
    if ('development' !== 'production' &&
            config.productionTip !== false &&
            inBrowser && typeof console !== 'undefined'
        ) {
      console[console.info ? 'info' : 'log'](
                'You are running Vue in development mode.\n' +
                'Make sure to turn on production mode when deploying for production.\n' +
                'See more tips at https://vuejs.org/guide/deployment.html'
            );
    }
  }, 0);

    /*  */

    // check whether current browser encodes a char inside attribute values
  function shouldDecode(content, encoded) {
    const div = document.createElement('div');
    div.innerHTML = '<div a="' + content + '"/>';
    return div.innerHTML.indexOf(encoded) > 0;
  }

    // #3663
    // IE encodes newlines inside attribute values while other browsers don't
  const shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

    /*  */

  const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
  const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  const buildRegex = cached(function(delimiters) {
    const open = delimiters[0].replace(regexEscapeRE, '\\$&');
    const close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(
        text,
        delimiters
    ) {
    const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return;
    }
    const tokens = [];
    let lastIndex = tagRE.lastIndex = 0;
    let match,
      index;
    while ((match = tagRE.exec(text))) {
      index = match.index;
            // push text token
      if (index > lastIndex) {
        tokens.push(JSON.stringify(text.slice(lastIndex, index)));
      }
            // tag token
      const exp = parseFilters(match[1].trim());
      tokens.push(('_s(' + exp + ')'));
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      tokens.push(JSON.stringify(text.slice(lastIndex)));
    }
    return tokens.join('+');
  }

    /*  */

  function transformNode(el, options) {
    const warn = options.warn || baseWarn;
    const staticClass = getAndRemoveAttr(el, 'class');
    if ('development' !== 'production' && staticClass) {
      const expression = parseText(staticClass, options.delimiters);
      if (expression) {
        warn(
                    'class="' + staticClass + '": ' +
                    'Interpolation inside attributes has been removed. ' +
                    'Use v-bind or the colon shorthand instead. For example, ' +
                    'instead of <div class="{{ val }}">, use <div :class="val">.'
                );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    const classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    let data = '';
    if (el.staticClass) {
      data += 'staticClass:' + (el.staticClass) + ',';
    }
    if (el.classBinding) {
      data += 'class:' + (el.classBinding) + ',';
    }
    return data;
  }

  const klass$1 = {
    staticKeys: [ 'staticClass' ],
    transformNode,
    genData,
  };

    /*  */

  function transformNode$1(el, options) {
    const warn = options.warn || baseWarn;
    const staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
            /* istanbul ignore if */
      {
        const expression = parseText(staticStyle, options.delimiters);
        if (expression) {
          warn(
                        'style="' + staticStyle + '": ' +
                        'Interpolation inside attributes has been removed. ' +
                        'Use v-bind or the colon shorthand instead. For example, ' +
                        'instead of <div style="{{ val }}">, use <div :style="val">.'
                    );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    const styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    let data = '';
    if (el.staticStyle) {
      data += 'staticStyle:' + (el.staticStyle) + ',';
    }
    if (el.styleBinding) {
      data += 'style:(' + (el.styleBinding) + '),';
    }
    return data;
  }

  const style$1 = {
    staticKeys: [ 'staticStyle' ],
    transformNode: transformNode$1,
    genData: genData$1,
  };

  const modules$1 = [
    klass$1,
    style$1,
  ];

    /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ('_s(' + (dir.value) + ')'));
    }
  }

    /*  */

  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ('_s(' + (dir.value) + ')'));
    }
  }

  const directives$1 = {
    model,
    text,
    html,
  };

    /*  */

  const isUnaryTag = makeMap(
        'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
        'link,meta,param,source,track,wbr'
    );

    // Elements that you can, intentionally, leave open
    // (and which close themselves)
  const canBeLeftOpenTag = makeMap(
        'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
    );

    // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
    // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  const isNonPhrasingTag = makeMap(
        'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
        'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
        'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
        'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
        'title,tr,track'
    );

    /*  */

  const baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag,
    isUnaryTag,
    mustUseProp,
    canBeLeftOpenTag,
    isReservedTag,
    getTagNamespace,
    staticKeys: genStaticKeys(modules$1),
  };

    /*  */

  let decoder;

  const he = {
    decode: function decode(html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent;
    },
  };

    /**
     * Not type-checking this file because it's mostly vendor code.
     */

    /* !
     * HTML Parser By John Resig (ejohn.org)
     * Modified by Juriy "kangax" Zaytsev
     * Original code by Erik Arvidsson, Mozilla Public License
     * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
     */

    // Regular Expressions for parsing tags and attributes
  const singleAttrIdentifier = /([^\s"'<>/=]+)/;
  const singleAttrAssign = /(?:=)/;
  const singleAttrValues = [
  // attr value double quotes
    /"([^"]*)"+/.source,
  // attr value, single quotes
    /'([^']*)'+/.source,
  // attr value, no quotes
    /([^\s"'=<>`]+)/.source,
  ];
  const attribute = new RegExp(
        '^\\s*' + singleAttrIdentifier.source +
        '(?:\\s*(' + singleAttrAssign.source + ')' +
        '\\s*(?:' + singleAttrValues.join('|') + '))?'
    );

    // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
    // but for Vue templates we can enforce a simple charset
  const ncname = '[a-zA-Z_][\\w\\-\\.]*';
  const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
  const startTagOpen = new RegExp('^<' + qnameCapture);
  const startTagClose = /^\s*(\/?)>/;
  const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
  const doctype = /^<!DOCTYPE [^>]+>/i;
  const comment = /^<!--/;
  const conditionalComment = /^<!\[/;

  let IS_REGEX_CAPTURING_BROKEN = false;
  'x'.replace(/x(.)?/g, function(m, g) {
    IS_REGEX_CAPTURING_BROKEN = g === '';
  });

    // Special Elements (can contain anything)
  const isPlainTextElement = makeMap('script,style,textarea', true);
  const reCache = {};

  const decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
  };
  const encodedAttr = /&(?:lt|gt|quot|amp);/g;
  const encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

    // #5992
  const isIgnoreNewlineTag = makeMap('pre,textarea', true);
  const shouldIgnoreFirstNewline = function(tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    const re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function(match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    const stack = [];
    const expectHTML = options.expectHTML;
    const isUnaryTag$$1 = options.isUnaryTag || no;
    const canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    let index = 0;
    let last,
      lastTag;
    while (html) {
      last = html;
            // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        if (shouldIgnoreFirstNewline(lastTag, html)) {
          advance(1);
        }
        let textEnd = html.indexOf('<');
        if (textEnd === 0) {
                    // Comment:
          if (comment.test(html)) {
            const commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd));
              }
              advance(commentEnd + 3);
              continue;
            }
          }

                    // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            const conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          }

                    // Doctype:
          const doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          }

                    // End tag:
          const endTagMatch = html.match(endTag);
          if (endTagMatch) {
            const curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          }

                    // Start tag:
          const startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            continue;
          }
        }

        let text = (void 0),
          rest = (void 0),
          next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (!endTag.test(rest) &&
                        !startTagOpen.test(rest) &&
                        !comment.test(rest) &&
                        !conditionalComment.test(rest)
                    ) {
                        // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) {
              break;
            }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        const reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        const rest$1 = html.replace(reStackedTag, function(all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
                            .replace(/<!--([\s\S]*?)-->/g, '$1')
                            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return '';
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if ('development' !== 'production' && !stack.length && options.warn) {
          options.warn(('Mal-formatted tag at end of template: "' + html + '"'));
        }
        break;
      }
    }

        // Clean up any remaining tags
    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      const start = html.match(startTagOpen);
      if (start) {
        const match = {
          tagName: start[1],
          attrs: [],
          start: index,
        };
        advance(start[0].length);
        let end,
          attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      const tagName = match.tagName;
      const unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      const unary = isUnaryTag$$1(tagName) || !!unarySlash;

      const l = match.attrs.length;
      const attrs = new Array(l);
      for (let i = 0; i < l; i++) {
        const args = match.attrs[i];
                // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
        if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
          if (args[3] === '') {
            delete args[3];
          }
          if (args[4] === '') {
            delete args[4];
          }
          if (args[5] === '') {
            delete args[5];
          }
        }
        const value = args[3] || args[4] || args[5] || '';
        attrs[i] = {
          name: args[1],
          value: decodeAttr(
                        value,
                        options.shouldDecodeNewlines
                    ),
        };
      }

      if (!unary) {
        stack.push({
          tag: tagName,
          lowerCasedTag: tagName.toLowerCase(),
          attrs,
        });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      let pos,
        lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
      }

            // Find the closest opened tag of the same type
      if (tagName) {
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
                // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
                // Close all the open elements, up the stack
        for (let i = stack.length - 1; i >= pos; i--) {
          if ('development' !== 'production' &&
                        (i > pos || !tagName) &&
                        options.warn
                    ) {
            options.warn(
                            ('tag <' + (stack[i].tag) + '> has no matching end tag.')
                        );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

                // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

    /*  */

  const onRE = /^@|^v-on:/;
  const dirRE = /^v-|^@|^:/;
  const forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
  const forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

  const argRE = /:(.*)$/;
  const bindRE = /^:|^v-bind:/;
  const modifierRE = /\.[^.]+/g;

  const decodeHTMLCached = cached(he.decode);

    // configurable state
  let warn$2;
  let delimiters;
  let transforms;
  let preTransforms;
  let postTransforms;
  let platformIsPreTag;
  let platformMustUseProp;
  let platformGetTagNamespace;

    /**
     * Convert HTML string to AST.
     */
  function parse(
        template,
        options
    ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    const stack = [];
    const preserveWhitespace = options.preserveWhitespace !== false;
    let root;
    let currentParent;
    let inVPre = false;
    let inPre = false;
    let warned = false;

    function warnOnce(msg) {
      if (!warned) {
        warned = true;
        warn$2(msg);
      }
    }

    function endPre(element) {
            // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldKeepComment: options.comments,
      start: function start(tag, attrs, unary) {
                // check namespace.
                // inherit parent ns if there is one
        const ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

                // handle IE svg bug
                /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        const element = {
          type: 1,
          tag,
          attrsList: attrs,
          attrsMap: makeAttrsMap(attrs),
          parent: currentParent,
          children: [],
        };
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          'development' !== 'production' && warn$2(
                        'Templates should only be responsible for mapping the state to the ' +
                        'UI. Avoid placing tags with side-effects in your templates, such as ' +
                        '<' + tag + '>' + ', as they will not be parsed.'
                    );
        }

                // apply pre-transforms
        for (let i = 0; i < preTransforms.length; i++) {
          preTransforms[i](element, options);
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else {
          processFor(element);
          processIf(element);
          processOnce(element);
          processKey(element);

                    // determine whether this is a plain element after
                    // removing structural attributes
          element.plain = !element.key && !attrs.length;

          processRef(element);
          processSlot(element);
          processComponent(element);
          for (let i$1 = 0; i$1 < transforms.length; i$1++) {
            transforms[i$1](element, options);
          }
          processAttrs(element);
        }

        function checkRootConstraints(el) {
          {
            if (el.tag === 'slot' || el.tag === 'template') {
              warnOnce(
                                'Cannot use <' + (el.tag) + '> as component root element because it may ' +
                                'contain multiple nodes.'
                            );
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
              warnOnce(
                                'Cannot use v-for on stateful component root element because ' +
                                'it renders multiple elements.'
                            );
            }
          }
        }

                // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
                    // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element,
            });
          } else {
            warnOnce(
                            'Component template should contain exactly one root element. ' +
                            'If you are using v-if on multiple elements, ' +
                            'use v-else-if to chain them instead.'
                        );
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) { // scoped slot
            currentParent.plain = false;
            const name = element.slotTarget || '"default"';
            (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          endPre(element);
        }
                // apply post-transforms
        for (let i$2 = 0; i$2 < postTransforms.length; i$2++) {
          postTransforms[i$2](element, options);
        }
      },

      end: function end() {
                // remove trailing whitespace
        const element = stack[stack.length - 1];
        const lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
          element.children.pop();
        }
                // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        endPre(element);
      },

      chars: function chars(text) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                                'Component template requires a root element, rather than just text.'
                            );
            } else if ((text = text.trim())) {
              warnOnce(
                                ('text "' + text + '" outside root element will be ignored.')
                            );
            }
          }
          return;
        }
                // IE textarea placeholder bug
                /* istanbul ignore if */
        if (isIE &&
                    currentParent.tag === 'textarea' &&
                    currentParent.attrsMap.placeholder === text
                ) {
          return;
        }
        const children = currentParent.children;
        text = inPre || text.trim() ?
                    isTextTag(currentParent) ? text : decodeHTMLCached(text)
                    // only preserve whitespace if its not right after a starting tag
                    :
                    preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          let expression;
          if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression,
              text,
            });
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            children.push({
              type: 3,
              text,
            });
          }
        }
      },
      comment: function comment(text) {
        currentParent.children.push({
          type: 3,
          text,
          isComment: true,
        });
      },
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    const l = el.attrsList.length;
    if (l) {
      const attrs = el.attrs = new Array(l);
      for (let i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: JSON.stringify(el.attrsList[i].value),
        };
      }
    } else if (!el.pre) {
            // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processKey(el) {
    const exp = getBindingAttr(el, 'key');
    if (exp) {
      if ('development' !== 'production' && el.tag === 'template') {
        warn$2('<template> cannot be keyed. Place the key on real elements instead.');
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    const ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    let exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      const inMatch = exp.match(forAliasRE);
      if (!inMatch) {
        'development' !== 'production' && warn$2(
                    ('Invalid v-for expression: ' + exp)
                );
        return;
      }
      el.for = inMatch[2].trim();
      const alias = inMatch[1].trim();
      const iteratorMatch = alias.match(forIteratorRE);
      if (iteratorMatch) {
        el.alias = iteratorMatch[1].trim();
        el.iterator1 = iteratorMatch[2].trim();
        if (iteratorMatch[3]) {
          el.iterator2 = iteratorMatch[3].trim();
        }
      } else {
        el.alias = alias;
      }
    }
  }

  function processIf(el) {
    const exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp,
        block: el,
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      const elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    const prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el,
      });
    } else {
      warn$2(
                'v-' + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + ' ' +
                'used on element <' + (el.tag) + '> without corresponding v-if.'
            );
    }
  }

  function findPrevElement(children) {
    let i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      }
      if ('development' !== 'production' && children[i].text !== ' ') {
        warn$2(
                        'text "' + (children[i].text.trim()) + '" between v-if and v-else(-if) ' +
                        'will be ignored.'
                    );
      }
      children.pop();

    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    const once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  function processSlot(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if ('development' !== 'production' && el.key) {
        warn$2(
                    '`key` does not work on <slot> because slots are abstract outlets ' +
                    'and can possibly expand into multiple elements. ' +
                    'Use the key on a wrapping element instead.'
                );
      }
    } else {
      const slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      }
      if (el.tag === 'template') {
        el.slotScope = getAndRemoveAttr(el, 'scope');
      }
    }
  }

  function processComponent(el) {
    let binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    const list = el.attrsList;
    let i,
      l,
      name,
      rawName,
      value,
      modifiers,
      isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
                // mark element as dynamic
        el.hasBindings = true;
                // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              addHandler(
                                el,
                                ('update:' + (camelize(name))),
                                genAssignmentCode(value, '$event')
                            );
            }
          }
          if (!el.component && (
                            isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)
                        )) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers, false, warn$2);
        } else { // normal directives
          name = name.replace(dirRE, '');
                    // parse arg
          const argMatch = name.match(argRE);
          const arg = argMatch && argMatch[1];
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if ('development' !== 'production' && name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
                // literal attribute
        {
          const expression = parseText(value, delimiters);
          if (expression) {
            warn$2(
                            name + '="' + value + '": ' +
                            'Interpolation inside attributes has been removed. ' +
                            'Use v-bind or the colon shorthand instead. For example, ' +
                            'instead of <div id="{{ val }}">, use <div :id="val">.'
                        );
          }
        }
        addAttr(el, name, JSON.stringify(value));
      }
    }
  }

  function checkInFor(el) {
    let parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  function parseModifiers(name) {
    const match = name.match(modifierRE);
    if (match) {
      const ret = {};
      match.forEach(function(m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    const map = {};
    for (let i = 0, l = attrs.length; i < l; i++) {
      if (
                'development' !== 'production' &&
                map[attrs[i].name] && !isIE && !isEdge
            ) {
        warn$2('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }

    // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return (
            el.tag === 'style' ||
            (el.tag === 'script' && (!el.attrsMap.type ||
                el.attrsMap.type === 'text/javascript'
            ))
    );
  }

  const ieNSBug = /^xmlns:NS\d+/;
  const ieNSPrefix = /^NS\d+:/;

    /* istanbul ignore next */
  function guardIESVGBug(attrs) {
    const res = [];
    for (let i = 0; i < attrs.length; i++) {
      const attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res;
  }

  function checkForAliasModel(el, value) {
    let _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
                    '<' + (el.tag) + ' v-model="' + value + '">: ' +
                    'You are binding v-model directly to a v-for iteration alias. ' +
                    'This will not be able to modify the v-for source array because ' +
                    'writing to the alias is like modifying a function local variable. ' +
                    'Consider using an array of objects and use v-model on an object property instead.'
                );
      }
      _el = _el.parent;
    }
  }

    /*  */

  let isStaticKey;
  let isPlatformReservedTag;

  const genStaticKeysCached = cached(genStaticKeys$1);

    /**
     * Goal of the optimizer: walk the generated template AST tree
     * and detect sub-trees that are purely static, i.e. parts of
     * the DOM that never needs to change.
     *
     * Once we detect these sub-trees, we can:
     *
     * 1. Hoist them into constants, so that we no longer need to
     *    create fresh nodes for them on each re-render;
     * 2. Completely skip them in the patching process.
     */
  function optimize(root, options) {
    if (!root) {
      return;
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
        // first pass: mark all non-static nodes.
    markStatic$1(root);
        // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap(
            'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
            (keys ? ',' + keys : '')
        );
  }

  function markStatic$1(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
            // do not make component slot content static. this avoids
            // 1. components not able to mutate slot nodes
            // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) &&
                node.tag !== 'slot' &&
                node.attrsMap['inline-template'] == null
            ) {
        return;
      }
      for (let i = 0, l = node.children.length; i < l; i++) {
        const child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (let i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          const block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
            // For a node to qualify as a static root, it should have children that
            // are not just static text. Otherwise the cost of hoisting out will
            // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
                    node.children.length === 1 &&
                    node.children[0].type === 3
                )) {
        node.staticRoot = true;
        return;
      }
      node.staticRoot = false;

      if (node.children) {
        for (let i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (let i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    if (node.type === 2) { // expression
      return false;
    }
    if (node.type === 3) { // text
      return true;
    }
    return !!(node.pre || (!node.hasBindings && // no dynamic bindings
            !node.if && !node.for && // not v-if or v-for or v-else
            !isBuiltInTag(node.tag) && // not a built-in
            isPlatformReservedTag(node.tag) && // not a component
            !isDirectChildOfTemplateFor(node) &&
            Object.keys(node).every(isStaticKey)
        ));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false;
      }
      if (node.for) {
        return true;
      }
    }
    return false;
  }

    /*  */

  const fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  const simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

    // keyCode aliases
  const keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    delete: [ 8, 46 ],
  };

    // #4868: modifiers that prevent the execution of the listener
    // need to explicitly return null so that we can determine whether to remove
    // the listener for .once
  const genGuard = function(condition) {
    return ('if(' + condition + ')return null;');
  };

  const modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard('$event.target !== $event.currentTarget'),
    ctrl: genGuard('!$event.ctrlKey'),
    shift: genGuard('!$event.shiftKey'),
    alt: genGuard('!$event.altKey'),
    meta: genGuard('!$event.metaKey'),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2"),
  };

  function genHandlers(
        events,
        isNative,
        warn
    ) {
    let res = isNative ? 'nativeOn:{' : 'on:{';
    for (const name in events) {
      const handler = events[name];
            // #5330: warn click.right, since right clicks do not actually fire click events.
      if ('development' !== 'production' &&
                name === 'click' &&
                handler && handler.modifiers && handler.modifiers.right
            ) {
        warn(
                    'Use "contextmenu" instead of "click.right" since right clicks ' +
                    'do not actually fire "click" events.'
                );
      }
      res += '"' + name + '":' + (genHandler(name, handler)) + ',';
    }
    return res.slice(0, -1) + '}';
  }

  function genHandler(
        name,
        handler
    ) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return ('[' + (handler.map(function(handler) {
        return genHandler(name, handler);
      }).join(',')) + ']');
    }

    const isMethodPath = simplePathRE.test(handler.value);
    const isFunctionExpression = fnExpRE.test(handler.value);

    if (!handler.modifiers) {
      return isMethodPath || isFunctionExpression ?
                handler.value :
                ('function($event){' + (handler.value) + '}'); // inline statement
    }
    let code = '';
    let genModifierCode = '';
    const keys = [];
    for (const key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
                    // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
            // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    const handlerCode = isMethodPath ?
                handler.value + '($event)' :
                isFunctionExpression ?
                ('(' + (handler.value) + ')($event)') :
                handler.value;
    return ('function($event){' + code + handlerCode + '}');

  }

  function genKeyFilter(keys) {
    return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ')return null;');
  }

  function genFilterCode(key) {
    const keyVal = parseInt(key, 10);
    if (keyVal) {
      return ('$event.keyCode!==' + keyVal);
    }
    const alias = keyCodes[key];
    return ('_k($event.keyCode,' + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ')');
  }

    /*  */

  function on(el, dir) {
    if ('development' !== 'production' && dir.modifiers) {
      warn('v-on without argument does not support modifiers.');
    }
    el.wrapListeners = function(code) {
      return ('_g(' + code + ',' + (dir.value) + ')');
    };
  }

    /*  */

  function bind$1(el, dir) {
    el.wrapData = function(code) {
      return ('_b(' + code + ",'" + (el.tag) + "'," + (dir.value) + ',' + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ')');
    };
  }

    /*  */

  const baseDirectives = {
    on,
    bind: bind$1,
    cloak: noop,
  };

    /*  */

  const CodegenState = function CodegenState(options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    const isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function(el) {
      return !isReservedTag(el.tag);
    };
    this.onceId = 0;
    this.staticRenderFns = [];
  };


  function generate(
        ast,
        options
    ) {
    const state = new CodegenState(options);
    const code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ('with(this){return ' + code + '}'),
      staticRenderFns: state.staticRenderFns,
    };
  }

  function genElement(el, state) {
    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state);
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget) {
      return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el, state);
    }
            // component or element
    let code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      const data = el.plain ? undefined : genData$2(el, state);

      const children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? (',' + data) : '') + (children ? (',' + children) : '') + ')';
    }
            // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code;

  }

    // hoist static sub-trees out
  function genStatic(el, state) {
    el.staticProcessed = true;
    state.staticRenderFns.push(('with(this){return ' + (genElement(el, state)) + '}'));
    return ('_m(' + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ')');
  }

    // v-once
  function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.staticInFor) {
      let key = '';
      let parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }
        parent = parent.parent;
      }
      if (!key) {
        'development' !== 'production' && state.warn(
                    'v-once can only be used inside v-for that is keyed. '
                );
        return genElement(el, state);
      }
      return ('_o(' + (genElement(el, state)) + ',' + (state.onceId++) + (key ? (',' + key) : '') + ')');
    }
    return genStatic(el, state);

  }

  function genIf(
        el,
        state,
        altGen,
        altEmpty
    ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }

  function genIfConditions(
        conditions,
        state,
        altGen,
        altEmpty
    ) {
    if (!conditions.length) {
      return altEmpty || '_e()';
    }

    const condition = conditions.shift();
    if (condition.exp) {
      return ('(' + (condition.exp) + ')?' + (genTernaryExp(condition.block)) + ':' + (genIfConditions(conditions, state, altGen, altEmpty)));
    }
    return ('' + (genTernaryExp(condition.block)));


        // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
      return altGen ?
                altGen(el, state) :
                el.once ?
                genOnce(el, state) :
                genElement(el, state);
    }
  }

  function genFor(
        el,
        state,
        altGen,
        altHelper
    ) {
    const exp = el.for;
    const alias = el.alias;
    const iterator1 = el.iterator1 ? (',' + (el.iterator1)) : '';
    const iterator2 = el.iterator2 ? (',' + (el.iterator2)) : '';

    if ('development' !== 'production' &&
            state.maybeComponent(el) &&
            el.tag !== 'slot' &&
            el.tag !== 'template' &&
            !el.key
        ) {
      state.warn(
                '<' + (el.tag) + ' v-for="' + alias + ' in ' + exp + '">: component lists rendered with ' +
                'v-for should have explicit keys. ' +
                'See https://vuejs.org/guide/list.html#key for more info.',
                true /* tip */
            );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + '((' + exp + '),' +
            'function(' + alias + iterator1 + iterator2 + '){' +
            'return ' + ((altGen || genElement)(el, state)) +
            '})';
  }

  function genData$2(el, state) {
    let data = '{';

        // directives first.
        // directives may mutate the el's other properties before they are generated.
    const dirs = genDirectives(el, state);
    if (dirs) {
      data += dirs + ',';
    }

        // key
    if (el.key) {
      data += 'key:' + (el.key) + ',';
    }
        // ref
    if (el.ref) {
      data += 'ref:' + (el.ref) + ',';
    }
    if (el.refInFor) {
      data += 'refInFor:true,';
    }
        // pre
    if (el.pre) {
      data += 'pre:true,';
    }
        // record original tag name for components using "is" attribute
    if (el.component) {
      data += 'tag:"' + (el.tag) + '",';
    }
        // module data generation functions
    for (let i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
        // attributes
    if (el.attrs) {
      data += 'attrs:{' + (genProps(el.attrs)) + '},';
    }
        // DOM props
    if (el.props) {
      data += 'domProps:{' + (genProps(el.props)) + '},';
    }
        // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false, state.warn)) + ',';
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true, state.warn)) + ',';
    }
        // slot target
    if (el.slotTarget) {
      data += 'slot:' + (el.slotTarget) + ',';
    }
        // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el.scopedSlots, state)) + ',';
    }
        // component v-model
    if (el.model) {
      data += 'model:{value:' + (el.model.value) + ',callback:' + (el.model.callback) + ',expression:' + (el.model.expression) + '},';
    }
        // inline-template
    if (el.inlineTemplate) {
      const inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ',';
      }
    }
    data = data.replace(/,$/, '') + '}';
        // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
        // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data;
  }

  function genDirectives(el, state) {
    const dirs = el.directives;
    if (!dirs) {
      return;
    }
    let res = 'directives:[';
    let hasRuntime = false;
    let i,
      l,
      dir,
      needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      const gen = state.directives[dir.name];
      if (gen) {
                // compile-time directive that manipulates AST.
                // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += '{name:"' + (dir.name) + '",rawName:"' + (dir.rawName) + '"' + (dir.value ? (',value:(' + (dir.value) + '),expression:' + (JSON.stringify(dir.value))) : '') + (dir.arg ? (',arg:"' + (dir.arg) + '"') : '') + (dir.modifiers ? (',modifiers:' + (JSON.stringify(dir.modifiers))) : '') + '},';
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el, state) {
    const ast = el.children[0];
    if ('development' !== 'production' && (
                el.children.length > 1 || ast.type !== 1
            )) {
      state.warn('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      const inlineRenderFns = generate(ast, state.options);
      return ('inlineTemplate:{render:function(){' + (inlineRenderFns.render) + '},staticRenderFns:[' + (inlineRenderFns.staticRenderFns.map(function(code) {
        return ('function(){' + code + '}');
      }).join(',')) + ']}');
    }
  }

  function genScopedSlots(
        slots,
        state
    ) {
    return ('scopedSlots:_u([' + (Object.keys(slots).map(function(key) {
      return genScopedSlot(key, slots[key], state);
    }).join(',')) + '])');
  }

  function genScopedSlot(
        key,
        el,
        state
    ) {
    if (el.for && !el.forProcessed) {
      return genForScopedSlot(key, el, state);
    }
    return '{key:' + key + ',fn:function(' + (String(el.attrsMap.scope)) + '){' +
            'return ' + (el.tag === 'template' ?
                genChildren(el, state) || 'void 0' :
                genElement(el, state)) + '}}';
  }

  function genForScopedSlot(
        key,
        el,
        state
    ) {
    const exp = el.for;
    const alias = el.alias;
    const iterator1 = el.iterator1 ? (',' + (el.iterator1)) : '';
    const iterator2 = el.iterator2 ? (',' + (el.iterator2)) : '';
    el.forProcessed = true; // avoid recursion
    return '_l((' + exp + '),' +
            'function(' + alias + iterator1 + iterator2 + '){' +
            'return ' + (genScopedSlot(key, el, state)) +
            '})';
  }

  function genChildren(
        el,
        state,
        checkSkip,
        altGenElement,
        altGenNode
    ) {
    const children = el.children;
    if (children.length) {
      const el$1 = children[0];
            // optimize single v-for
      if (children.length === 1 &&
                el$1.for &&
                el$1.tag !== 'template' &&
                el$1.tag !== 'slot'
            ) {
        return (altGenElement || genElement)(el$1, state);
      }
      const normalizationType = checkSkip ?
                getNormalizationType(children, state.maybeComponent) :
                0;
      const gen = altGenNode || genNode;
      return ('[' + (children.map(function(c) {
        return gen(c, state);
      }).join(',')) + ']' + (normalizationType ? (',' + normalizationType) : ''));
    }
  }

    // determine the normalization needed for the children array.
    // 0: no normalization needed
    // 1: simple normalization needed (possible 1-level deep nested array)
    // 2: full normalization needed
  function getNormalizationType(
        children,
        maybeComponent
    ) {
    let res = 0;
    for (let i = 0; i < children.length; i++) {
      const el = children[i];
      if (el.type !== 1) {
        continue;
      }
      if (needsNormalization(el) ||
                (el.ifConditions && el.ifConditions.some(function(c) {
                  return needsNormalization(c.block);
                }))) {
        res = 2;
        break;
      }
      if (maybeComponent(el) ||
                (el.ifConditions && el.ifConditions.some(function(c) {
                  return maybeComponent(c.block);
                }))) {
        res = 1;
      }
    }
    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function genNode(node, state) {
    if (node.type === 1) {
      return genElement(node, state);
    }
    if (node.type === 3 && node.isComment) {
      return genComment(node);
    }
    return genText(node);

  }

  function genText(text) {
    return ('_v(' + (text.type === 2 ?
            text.expression // no need for () because already wrapped in _s()
            :
            transformSpecialNewlines(JSON.stringify(text.text))) + ')');
  }

  function genComment(comment) {
    return ("_e('" + (comment.text) + "')");
  }

  function genSlot(el, state) {
    const slotName = el.slotName || '"default"';
    const children = genChildren(el, state);
    let res = '_t(' + slotName + (children ? (',' + children) : '');
    const attrs = el.attrs && ('{' + (el.attrs.map(function(a) {
      return ((camelize(a.name)) + ':' + (a.value));
    }).join(',')) + '}');
    const bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ',null';
    }
    if (attrs) {
      res += ',' + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + ',' + bind$$1;
    }
    return res + ')';
  }

    // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(
        componentName,
        el,
        state
    ) {
    const children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ('_c(' + componentName + ',' + (genData$2(el, state)) + (children ? (',' + children) : '') + ')');
  }

  function genProps(props) {
    let res = '';
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      res += '"' + (prop.name) + '":' + (transformSpecialNewlines(prop.value)) + ',';
    }
    return res.slice(0, -1);
  }

    // #3895, #4268
  function transformSpecialNewlines(text) {
    return text
            .replace(/\u2028/g, '\\u2028')
            .replace(/\u2029/g, '\\u2029');
  }

    /*  */

    // these keywords should not appear inside expressions, but operators like
    // typeof, instanceof and in are allowed
  const prohibitedKeywordRE = new RegExp('\\b' + (
        'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
        'super,throw,while,yield,delete,export,import,return,switch,default,' +
        'extends,finally,continue,debugger,function,arguments'
    ).split(',').join('\\b|\\b') + '\\b');

    // these unary operators should not be used as property/method names
  const unaryOperatorsRE = new RegExp('\\b' + (
        'delete,typeof,void'
    ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

    // check valid identifier for v-for
  const identRE = /[A-Za-z_$][\w$]*/;

    // strip strings in expressions
  const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

    // detect problematic expressions in a template
  function detectErrors(ast) {
    const errors = [];
    if (ast) {
      checkNode(ast, errors);
    }
    return errors;
  }

  function checkNode(node, errors) {
    if (node.type === 1) {
      for (const name in node.attrsMap) {
        if (dirRE.test(name)) {
          const value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, ('v-for="' + value + '"'), errors);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + '="' + value + '"'), errors);
            } else {
              checkExpression(value, (name + '="' + value + '"'), errors);
            }
          }
        }
      }
      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }
  }

  function checkEvent(exp, text, errors) {
    const stipped = exp.replace(stripStringRE, '');
    const keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      errors.push(
                'avoid using JavaScript unary operator as property name: ' +
                '"' + (keywordMatch[0]) + '" in expression ' + (text.trim())
            );
    }
    checkExpression(exp, text, errors);
  }

  function checkFor(node, text, errors) {
    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
  }

  function checkIdentifier(ident, type, text, errors) {
    if (typeof ident === 'string' && !identRE.test(ident)) {
      errors.push(('invalid ' + type + ' "' + ident + '" in expression: ' + (text.trim())));
    }
  }

  function checkExpression(exp, text, errors) {
    try {
      new Function(('return ' + exp));
    } catch (e) {
      const keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push(
                    'avoid using JavaScript keyword as property name: ' +
                    '"' + (keywordMatch[0]) + '" in expression ' + (text.trim())
                );
      } else {
        errors.push(('invalid expression: ' + (text.trim())));
      }
    }
  }

    /*  */

  function createFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({
        err,
        code,
      });
      return noop;
    }
  }

  function createCompileToFunctionFn(compile) {
    const cache = Object.create(null);

    return function compileToFunctions(
            template,
            options,
            vm
        ) {
      options = options || {};

            /* istanbul ignore if */
      {
                // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn(
                            'It seems you are using the standalone build of Vue.js in an ' +
                            'environment with Content Security Policy that prohibits unsafe-eval. ' +
                            'The template compiler cannot work in this environment. Consider ' +
                            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                            'templates into render functions.'
                        );
          }
        }
      }

            // check cache
      const key = options.delimiters ?
                String(options.delimiters) + template :
                template;
      if (cache[key]) {
        return cache[key];
      }

            // compile
      const compiled = compile(template, options);

            // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          warn(
                        'Error compiling template:\n\n' + template + '\n\n' +
                        compiled.errors.map(function(e) {
                          return ('- ' + e);
                        }).join('\n') + '\n',
                        vm
                    );
        }
        if (compiled.tips && compiled.tips.length) {
          compiled.tips.forEach(function(msg) {
            return tip(msg, vm);
          });
        }
      }

            // turn code into functions
      const res = {};
      const fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function(code) {
        return createFunction(code, fnGenErrors);
      });

            // check function generation errors.
            // this should only happen if there is a bug in the compiler itself.
            // mostly for codegen development use
            /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn(
                        'Failed to generate render function:\n\n' +
                        fnGenErrors.map(function(ref) {
                          const err = ref.err;
                          const code = ref.code;

                          return ((err.toString()) + ' in\n\n' + code + '\n');
                        }).join('\n'),
                        vm
                    );
        }
      }

      return (cache[key] = res);
    };
  }

    /*  */

  function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
      function compile(
                template,
                options
            ) {
        const finalOptions = Object.create(baseOptions);
        const errors = [];
        const tips = [];
        finalOptions.warn = function(msg, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
                    // merge custom modules
          if (options.modules) {
            finalOptions.modules =
                            (baseOptions.modules || []).concat(options.modules);
          }
                    // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
                            Object.create(baseOptions.directives),
                            options.directives
                        );
          }
                    // copy other options
          for (const key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        const compiled = baseCompile(template, finalOptions); {
          errors.push.apply(errors, detectErrors(compiled.ast));
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled;
      }

      return {
        compile,
        compileToFunctions: createCompileToFunctionFn(compile),
      };
    };
  }

    /*  */

    // `createCompilerCreator` allows creating compilers that use alternative
    // parser/optimizer/codegen, e.g the SSR optimizing compiler.
    // Here we just export a default compiler using the default parts.
  const createCompiler = createCompilerCreator(function baseCompile(
        template,
        options
    ) {
    const ast = parse(template.trim(), options);
    optimize(ast, options);
    const code = generate(ast, options);
    return {
      ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns,
    };
  });

    /*  */

  const ref$1 = createCompiler(baseOptions);
  const compileToFunctions = ref$1.compileToFunctions;

    /*  */

  const idToTemplate = cached(function(id) {
    const el = query(id);
    return el && el.innerHTML;
  });

  const mount = Vue$3.prototype.$mount;
  Vue$3.prototype.$mount = function(
        el,
        hydrating
    ) {
    el = el && query(el);

        /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      'development' !== 'production' && warn(
                'Do not mount Vue to <html> or <body> - mount to normal elements instead.'
            );
      return this;
    }

    const options = this.$options;
        // resolve template/el and convert to render function
    if (!options.render) {
      let template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
                        /* istanbul ignore if */
            if ('development' !== 'production' && !template) {
              warn(
                                ('Template element not found or is empty: ' + (options.template)),
                                this
                            );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
                /* istanbul ignore if */
        if ('development' !== 'production' && config.performance && mark) {
          mark('compile');
        }

        const ref = compileToFunctions(template, {
          shouldDecodeNewlines,
          delimiters: options.delimiters,
          comments: options.comments,
        }, this);
        const render = ref.render;
        const staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

                /* istanbul ignore if */
        if ('development' !== 'production' && config.performance && mark) {
          mark('compile end');
          measure(((this._name) + ' compile'), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating);
  };

    /**
     * Get outerHTML of elements, taking care
     * of SVG elements in IE as well.
     */
  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    }
    const container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;

  }

  Vue$3.compile = compileToFunctions;

  return Vue$3;

}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_js_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_js_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_js_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuex__ = __webpack_require__(35);






new __WEBPACK_IMPORTED_MODULE_0__public_js_vue___default.a({
	el: '#app',
	data: {
		ctx:'{{ctx.csrf}}'
	},

	beforeMount() {
		__WEBPACK_IMPORTED_MODULE_2__vuex__["a" /* default */].commit('str')
		
		
	},
	store: __WEBPACK_IMPORTED_MODULE_2__vuex__["a" /* default */],
	router: __WEBPACK_IMPORTED_MODULE_1__src_router__["a" /* default */],
	/*    render: h => h(App),
	    template: '<App/>',
	    components: {
	        App
	    }*/

})

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_js_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_js_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_js_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_js_vue_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_js_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__public_js_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_login_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_components_login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_hello_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_hello_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_components_hello_vue__);








__WEBPACK_IMPORTED_MODULE_0__public_js_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1__public_js_vue_router___default.a)

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1__public_js_vue_router___default.a({
    routes: [
        {
            path: '/',
            redirect: '/0'
        },
        {
            path: '/',
            name: 'app',
            component: __WEBPACK_IMPORTED_MODULE_2__app_vue___default.a,
            children: [
                {
                    path: '/:id',
                    name: 'home',
                    components: {
                        default: __WEBPACK_IMPORTED_MODULE_3__src_components_login_vue___default.a,
                        hello: __WEBPACK_IMPORTED_MODULE_4__src_components_hello_vue___default.a
                    },
                    beforeEnter: (to, from, next) => {
                        console.log(to)
                        console.log(from)
                        next()
                        
                    }
                }
            ]
        }
    ]
}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * vue-router v2.7.0
 * (c) 2017 Evan You
 * @license MIT
 */
(function(global, factory) {
   true ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global.VueRouter = factory());
}(this, function() {
  'use strict';

    /*  */

  function assert(condition, message) {
    if (!condition) {
      throw new Error(('[vue-router] ' + message));
    }
  }

  function warn(condition, message) {
    if ('development' !== 'production' && !condition) {
      typeof console !== 'undefined' && console.warn(('[vue-router] ' + message));
    }
  }

  function isError(err) {
    return Object.prototype.toString.call(err).indexOf('Error') > -1;
  }

  const View = {
    name: 'router-view',
    functional: true,
    props: {
      name: {
        type: String,
        default: 'default',
      },
    },
    render: function render(_, ref) {
      const props = ref.props;
      const children = ref.children;
      let parent = ref.parent;
      const data = ref.data;

      data.routerView = true;

            // directly use parent context's createElement() function
            // so that components rendered by router-view can resolve named slots
      const h = parent.$createElement;
      const name = props.name;
      const route = parent.$route;
      const cache = parent._routerViewCache || (parent._routerViewCache = {});

            // determine current view depth, also check to see if the tree
            // has been toggled inactive but kept-alive.
      let depth = 0;
      let inactive = false;
      while (parent && parent._routerRoot !== parent) {
        if (parent.$vnode && parent.$vnode.data.routerView) {
          depth++;
        }
        if (parent._inactive) {
          inactive = true;
        }
        parent = parent.$parent;
      }
      data.routerViewDepth = depth;

            // render previous view if the tree is inactive and kept-alive
      if (inactive) {
        return h(cache[name], data, children);
      }

      const matched = route.matched[depth];
            // render empty node if no matched route
      if (!matched) {
        cache[name] = null;
        return h();
      }

      const component = cache[name] = matched.components[name];

            // attach instance registration hook
            // this will be called in the instance's injected lifecycle hooks
      data.registerRouteInstance = function(vm, val) {
                // val could be undefined for unregistration
        const current = matched.instances[name];
        if (
                    (val && current !== vm) ||
                    (!val && current === vm)
                ) {
          matched.instances[name] = val;
        }
      }

            // also regiseter instance in prepatch hook
            // in case the same component instance is reused across different routes
            ;
      (data.hook || (data.hook = {})).prepatch = function(_, vnode) {
        matched.instances[name] = vnode.componentInstance;
      };

            // resolve props
      data.props = resolveProps(route, matched.props && matched.props[name]);

      return h(component, data, children);
    },
  };

  function resolveProps(route, config) {
    switch (typeof config) {
      case 'undefined':
        return;
      case 'object':
        return config;
      case 'function':
        return config(route);
      case 'boolean':
        return config ? route.params : undefined;
      default:
        {
          warn(
                        false,
                        'props in "' + (route.path) + '" is a ' + (typeof config) + ', ' +
                        'expecting an object, function or boolean.'
                    );
        }
    }
  }

    /*  */

  const encodeReserveRE = /[!'()*]/g;
  const encodeReserveReplacer = function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  };
  const commaRE = /%2C/g;

    // fixed encodeURIComponent which is more conformant to RFC3986:
    // - escapes [!'()*]
    // - preserve commas
  const encode = function(str) {
    return encodeURIComponent(str)
            .replace(encodeReserveRE, encodeReserveReplacer)
            .replace(commaRE, ',');
  };

  const decode = decodeURIComponent;

  function resolveQuery(
        query,
        extraQuery,
        _parseQuery
    ) {
    if (extraQuery === void 0) extraQuery = {};

    const parse = _parseQuery || parseQuery;
    let parsedQuery;
    try {
      parsedQuery = parse(query || '');
    } catch (e) {
      'development' !== 'production' && warn(false, e.message);
      parsedQuery = {};
    }
    for (const key in extraQuery) {
      const val = extraQuery[key];
      parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
    }
    return parsedQuery;
  }

  function parseQuery(query) {
    const res = {};

    query = query.trim().replace(/^(\?|#|&)/, '');

    if (!query) {
      return res;
    }

    query.split('&').forEach(function(param) {
      const parts = param.replace(/\+/g, ' ').split('=');
      const key = decode(parts.shift());
      const val = parts.length > 0 ?
                decode(parts.join('=')) :
                null;

      if (res[key] === undefined) {
        res[key] = val;
      } else if (Array.isArray(res[key])) {
        res[key].push(val);
      } else {
        res[key] = [ res[key], val ];
      }
    });

    return res;
  }

  function stringifyQuery(obj) {
    const res = obj ? Object.keys(obj).map(function(key) {
      const val = obj[key];

      if (val === undefined) {
        return '';
      }

      if (val === null) {
        return encode(key);
      }

      if (Array.isArray(val)) {
        const result = [];
        val.forEach(function(val2) {
          if (val2 === undefined) {
            return;
          }
          if (val2 === null) {
            result.push(encode(key));
          } else {
            result.push(encode(key) + '=' + encode(val2));
          }
        });
        return result.join('&');
      }

      return encode(key) + '=' + encode(val);
    }).filter(function(x) {
      return x.length > 0;
    }).join('&') : null;
    return res ? ('?' + res) : '';
  }

    /*  */


  const trailingSlashRE = /\/?$/;

  function createRoute(
        record,
        location,
        redirectedFrom,
        router
    ) {
    const stringifyQuery$$1 = router && router.options.stringifyQuery;
    const route = {
      name: location.name || (record && record.name),
      meta: (record && record.meta) || {},
      path: location.path || '/',
      hash: location.hash || '',
      query: location.query || {},
      params: location.params || {},
      fullPath: getFullPath(location, stringifyQuery$$1),
      matched: record ? formatMatch(record) : [],
    };
    if (redirectedFrom) {
      route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
    }
    return Object.freeze(route);
  }

    // the starting route that represents the initial state
  const START = createRoute(null, {
    path: '/',
  });

  function formatMatch(record) {
    const res = [];
    while (record) {
      res.unshift(record);
      record = record.parent;
    }
    return res;
  }

  function getFullPath(
        ref,
        _stringifyQuery
    ) {
    const path = ref.path;
    let query = ref.query;
    if (query === void 0) query = {};
    let hash = ref.hash;
    if (hash === void 0) hash = '';

    const stringify = _stringifyQuery || stringifyQuery;
    return (path || '/') + stringify(query) + hash;
  }

  function isSameRoute(a, b) {
    if (b === START) {
      return a === b;
    } else if (!b) {
      return false;
    } else if (a.path && b.path) {
      return (
                a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
                a.hash === b.hash &&
                isObjectEqual(a.query, b.query)
      );
    } else if (a.name && b.name) {
      return (
                a.name === b.name &&
                a.hash === b.hash &&
                isObjectEqual(a.query, b.query) &&
                isObjectEqual(a.params, b.params)
      );
    }
    return false;

  }

  function isObjectEqual(a, b) {
    if (a === void 0) a = {};
    if (b === void 0) b = {};

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    return aKeys.every(function(key) {
      const aVal = a[key];
      const bVal = b[key];
            // check nested equality
      if (typeof aVal === 'object' && typeof bVal === 'object') {
        return isObjectEqual(aVal, bVal);
      }
      return String(aVal) === String(bVal);
    });
  }

  function isIncludedRoute(current, target) {
    return (
            current.path.replace(trailingSlashRE, '/').indexOf(
                target.path.replace(trailingSlashRE, '/')
            ) === 0 &&
            (!target.hash || current.hash === target.hash) &&
            queryIncludes(current.query, target.query)
    );
  }

  function queryIncludes(current, target) {
    for (const key in target) {
      if (!(key in current)) {
        return false;
      }
    }
    return true;
  }

    /*  */

    // work around weird flow bug
  const toTypes = [ String, Object ];
  const eventTypes = [ String, Array ];

  const Link = {
    name: 'router-link',
    props: {
      to: {
        type: toTypes,
        required: true,
      },
      tag: {
        type: String,
        default: 'a',
      },
      exact: Boolean,
      append: Boolean,
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      event: {
        type: eventTypes,
        default: 'click',
      },
    },
    render: function render(h) {
      const this$1 = this;

      const router = this.$router;
      const current = this.$route;
      const ref = router.resolve(this.to, current, this.append);
      const location = ref.location;
      const route = ref.route;
      const href = ref.href;

      const classes = {};
      const globalActiveClass = router.options.linkActiveClass;
      const globalExactActiveClass = router.options.linkExactActiveClass;
            // Support global empty active class
      const activeClassFallback = globalActiveClass == null ?
                'router-link-active' :
                globalActiveClass;
      const exactActiveClassFallback = globalExactActiveClass == null ?
                'router-link-exact-active' :
                globalExactActiveClass;
      const activeClass = this.activeClass == null ?
                activeClassFallback :
                this.activeClass;
      const exactActiveClass = this.exactActiveClass == null ?
                exactActiveClassFallback :
                this.exactActiveClass;
      const compareTarget = location.path ?
                createRoute(null, location, null, router) :
                route;

      classes[exactActiveClass] = isSameRoute(current, compareTarget);
      classes[activeClass] = this.exact ?
                classes[exactActiveClass] :
                isIncludedRoute(current, compareTarget);

      const handler = function(e) {
        if (guardEvent(e)) {
          if (this$1.replace) {
            router.replace(location);
          } else {
            router.push(location);
          }
        }
      };

      const on = {
        click: guardEvent,
      };
      if (Array.isArray(this.event)) {
        this.event.forEach(function(e) {
          on[e] = handler;
        });
      } else {
        on[this.event] = handler;
      }

      const data = {
        class: classes,
      };

      if (this.tag === 'a') {
        data.on = on;
        data.attrs = {
          href,
        };
      } else {
                // find the first <a> child and apply listener and href
        const a = findAnchor(this.$slots.default);
        if (a) {
                    // in case the <a> is a static node
          a.isStatic = false;
          const extend = _Vue.util.extend;
          const aData = a.data = extend({}, a.data);
          aData.on = on;
          const aAttrs = a.data.attrs = extend({}, a.data.attrs);
          aAttrs.href = href;
        } else {
                    // doesn't have <a> child, apply listener to self
          data.on = on;
        }
      }

      return h(this.tag, data, this.$slots.default);
    },
  };

  function guardEvent(e) {
        // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
      return;
    }
        // don't redirect when preventDefault called
    if (e.defaultPrevented) {
      return;
    }
        // don't redirect on right click
    if (e.button !== undefined && e.button !== 0) {
      return;
    }
        // don't redirect if `target="_blank"`
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(target)) {
        return;
      }
    }
        // this may be a Weex event which doesn't have this method
    if (e.preventDefault) {
      e.preventDefault();
    }
    return true;
  }

  function findAnchor(children) {
    if (children) {
      let child;
      for (let i = 0; i < children.length; i++) {
        child = children[i];
        if (child.tag === 'a') {
          return child;
        }
        if (child.children && (child = findAnchor(child.children))) {
          return child;
        }
      }
    }
  }

  let _Vue;

  function install(Vue) {
    if (install.installed) {
      return;
    }
    install.installed = true;

    _Vue = Vue;

    const isDef = function(v) {
      return v !== undefined;
    };

    const registerInstance = function(vm, callVal) {
      let i = vm.$options._parentVnode;
      if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
        i(vm, callVal);
      }
    };

    Vue.mixin({
      beforeCreate: function beforeCreate() {
        if (isDef(this.$options.router)) {
          this._routerRoot = this;
          this._router = this.$options.router;
          this._router.init(this);
          Vue.util.defineReactive(this, '_route', this._router.history.current);
        } else {
          this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
        }
        registerInstance(this, this);
      },
      destroyed: function destroyed() {
        registerInstance(this);
      },
    });

    Object.defineProperty(Vue.prototype, '$router', {
      get: function get() {
        return this._routerRoot._router;
      },
    });

    Object.defineProperty(Vue.prototype, '$route', {
      get: function get() {
        return this._routerRoot._route;
      },
    });

    Vue.component('router-view', View);
    Vue.component('router-link', Link);

    const strats = Vue.config.optionMergeStrategies;
        // use the same hook merging strategy for route hooks
    strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
  }

    /*  */

  const inBrowser = typeof window !== 'undefined';

    /*  */

  function resolvePath(
        relative,
        base,
        append
    ) {
    const firstChar = relative.charAt(0);
    if (firstChar === '/') {
      return relative;
    }

    if (firstChar === '?' || firstChar === '#') {
      return base + relative;
    }

    const stack = base.split('/');

        // remove trailing segment if:
        // - not appending
        // - appending to trailing slash (last segment is empty)
    if (!append || !stack[stack.length - 1]) {
      stack.pop();
    }

        // resolve relative path
    const segments = relative.replace(/^\//, '').split('/');
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      if (segment === '..') {
        stack.pop();
      } else if (segment !== '.') {
        stack.push(segment);
      }
    }

        // ensure leading slash
    if (stack[0] !== '') {
      stack.unshift('');
    }

    return stack.join('/');
  }

  function parsePath(path) {
    let hash = '';
    let query = '';

    const hashIndex = path.indexOf('#');
    if (hashIndex >= 0) {
      hash = path.slice(hashIndex);
      path = path.slice(0, hashIndex);
    }

    const queryIndex = path.indexOf('?');
    if (queryIndex >= 0) {
      query = path.slice(queryIndex + 1);
      path = path.slice(0, queryIndex);
    }

    return {
      path,
      query,
      hash,
    };
  }

  function cleanPath(path) {
    return path.replace(/\/\//g, '/');
  }

  const index$1 = Array.isArray || function(arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };

    /**
     * Expose `pathToRegexp`.
     */
  const index = pathToRegexp;
  const parse_1 = parse;
  const compile_1 = compile;
  const tokensToFunction_1 = tokensToFunction;
  const tokensToRegExp_1 = tokensToRegExp;

    /**
     * The main path matching regexp utility.
     *
     * @type {RegExp}
     */
  const PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
  ].join('|'), 'g');

    /**
     * Parse a string for the raw tokens.
     *
     * @param  {string}  str
     * @param  {Object=} options
     * @return {!Array}
     */
  function parse(str, options) {
    const tokens = [];
    let key = 0;
    let index = 0;
    let path = '';
    const defaultDelimiter = options && options.delimiter || '/';
    let res;

    while ((res = PATH_REGEXP.exec(str)) != null) {
      const m = res[0];
      const escaped = res[1];
      const offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;

            // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1];
        continue;
      }

      const next = str[index];
      const prefix = res[2];
      const name = res[3];
      const capture = res[4];
      const group = res[5];
      const modifier = res[6];
      const asterisk = res[7];

            // Push the current path onto the tokens.
      if (path) {
        tokens.push(path);
        path = '';
      }

      const partial = prefix != null && next != null && next !== prefix;
      const repeat = modifier === '+' || modifier === '*';
      const optional = modifier === '?' || modifier === '*';
      const delimiter = res[2] || defaultDelimiter;
      const pattern = capture || group;

      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter,
        optional,
        repeat,
        partial,
        asterisk: !!asterisk,
        pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'),
      });
    }

        // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index);
    }

        // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path);
    }

    return tokens;
  }

    /**
     * Compile a string to a template function for the path.
     *
     * @param  {string}             str
     * @param  {Object=}            options
     * @return {!function(Object=, Object=)}
     */
  function compile(str, options) {
    return tokensToFunction(parse(str, options));
  }

    /**
     * Prettier encoding of URI path segments.
     *
     * @param  {string}
     * @return {string}
     */
  function encodeURIComponentPretty(str) {
    return encodeURI(str).replace(/[\/?#]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

    /**
     * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
     *
     * @param  {string}
     * @return {string}
     */
  function encodeAsterisk(str) {
    return encodeURI(str).replace(/[?#]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

    /**
     * Expose a method for transforming tokens into the path function.
     */
  function tokensToFunction(tokens) {
        // Compile all the tokens into regexps.
    const matches = new Array(tokens.length);

        // Compile all the patterns before compilation.
    for (let i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
      }
    }

    return function(obj, opts) {
      let path = '';
      const data = obj || {};
      const options = opts || {};
      const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (typeof token === 'string') {
          path += token;

          continue;
        }

        const value = data[token.name];
        var segment;

        if (value == null) {
          if (token.optional) {
                        // Prepend partial segment prefixes.
            if (token.partial) {
              path += token.prefix;
            }

            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined');
          }
        }

        if (index$1(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
          }

          if (value.length === 0) {
            if (token.optional) {
              continue;
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty');
            }
          }

          for (let j = 0; j < value.length; j++) {
            segment = encode(value[j]);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }

          continue;
        }

        segment = token.asterisk ? encodeAsterisk(value) : encode(value);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
        }

        path += token.prefix + segment;
      }

      return path;
    };
  }

    /**
     * Escape a regular expression string.
     *
     * @param  {string} str
     * @return {string}
     */
  function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
  }

    /**
     * Escape the capturing group by escaping special characters and meaning.
     *
     * @param  {string} group
     * @return {string}
     */
  function escapeGroup(group) {
    return group.replace(/([=!:$\/()])/g, '\\$1');
  }

    /**
     * Attach the keys as a property of the regexp.
     *
     * @param  {!RegExp} re
     * @param  {Array}   keys
     * @return {!RegExp}
     */
  function attachKeys(re, keys) {
    re.keys = keys;
    return re;
  }

    /**
     * Get the flags for a regexp from the options.
     *
     * @param  {Object} options
     * @return {string}
     */
  function flags(options) {
    return options.sensitive ? '' : 'i';
  }

    /**
     * Pull out keys from a regexp.
     *
     * @param  {!RegExp} path
     * @param  {!Array}  keys
     * @return {!RegExp}
     */
  function regexpToRegexp(path, keys) {
        // Use a negative lookahead to match only capturing groups.
    const groups = path.source.match(/\((?!\?)/g);

    if (groups) {
      for (let i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          partial: false,
          asterisk: false,
          pattern: null,
        });
      }
    }

    return attachKeys(path, keys);
  }

    /**
     * Transform an array into a regexp.
     *
     * @param  {!Array}  path
     * @param  {Array}   keys
     * @param  {!Object} options
     * @return {!RegExp}
     */
  function arrayToRegexp(path, keys, options) {
    const parts = [];

    for (let i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source);
    }

    const regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

    return attachKeys(regexp, keys);
  }

    /**
     * Create a path regexp from string input.
     *
     * @param  {string}  path
     * @param  {!Array}  keys
     * @param  {!Object} options
     * @return {!RegExp}
     */
  function stringToRegexp(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
  }

    /**
     * Expose a function for taking tokens and returning a RegExp.
     *
     * @param  {!Array}          tokens
     * @param  {(Array|Object)=} keys
     * @param  {Object=}         options
     * @return {!RegExp}
     */
  function tokensToRegExp(tokens, keys, options) {
    if (!index$1(keys)) {
      options = /** @type {!Object} */ (keys || options);
      keys = [];
    }

    options = options || {};

    const strict = options.strict;
    const end = options.end !== false;
    let route = '';

        // Iterate over the tokens and create our regexp string.
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        route += escapeString(token);
      } else {
        const prefix = escapeString(token.prefix);
        let capture = '(?:' + token.pattern + ')';

        keys.push(token);

        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*';
        }

        if (token.optional) {
          if (!token.partial) {
            capture = '(?:' + prefix + '(' + capture + '))?';
          } else {
            capture = prefix + '(' + capture + ')?';
          }
        } else {
          capture = prefix + '(' + capture + ')';
        }

        route += capture;
      }
    }

    const delimiter = escapeString(options.delimiter || '/');
    const endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

        // In non-strict mode we allow a slash at the end of match. If the path to
        // match already ends with a slash, we remove it for consistency. The slash
        // is valid at the end of a path match, not in the middle. This is important
        // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
    }

    if (end) {
      route += '$';
    } else {
            // In non-ending mode, we need the capturing groups to match as much as
            // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
    }

    return attachKeys(new RegExp('^' + route, flags(options)), keys);
  }

    /**
     * Normalize the given path string, returning a regular expression.
     *
     * An empty array can be passed in for the keys, which will hold the
     * placeholder key descriptions. For example, using `/user/:id`, `keys` will
     * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
     *
     * @param  {(string|RegExp|Array)} path
     * @param  {(Array|Object)=}       keys
     * @param  {Object=}               options
     * @return {!RegExp}
     */
  function pathToRegexp(path, keys, options) {
    if (!index$1(keys)) {
      options = /** @type {!Object} */ (keys || options);
      keys = [];
    }

    options = options || {};

    if (path instanceof RegExp) {
      return regexpToRegexp(path, /** @type {!Array} */ (keys));
    }

    if (index$1(path)) {
      return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options);
    }

    return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options);
  }

  index.parse = parse_1;
  index.compile = compile_1;
  index.tokensToFunction = tokensToFunction_1;
  index.tokensToRegExp = tokensToRegExp_1;

    /*  */

  const regexpCompileCache = Object.create(null);

  function fillParams(
        path,
        params,
        routeMsg
    ) {
    try {
      const filler =
                regexpCompileCache[path] ||
                (regexpCompileCache[path] = index.compile(path));
      return filler(params || {}, {
        pretty: true,
      });
    } catch (e) {
      {
        warn(false, ('missing param for ' + routeMsg + ': ' + (e.message)));
      }
      return '';
    }
  }

    /*  */

  function createRouteMap(
        routes,
        oldPathList,
        oldPathMap,
        oldNameMap
    ) {
        // the path list is used to control path matching priority
    const pathList = oldPathList || [];
    const pathMap = oldPathMap || Object.create(null);
    const nameMap = oldNameMap || Object.create(null);

    routes.forEach(function(route) {
      addRouteRecord(pathList, pathMap, nameMap, route);
    });

        // ensure wildcard routes are always at the end
    for (let i = 0, l = pathList.length; i < l; i++) {
      if (pathList[i] === '*') {
        pathList.push(pathList.splice(i, 1)[0]);
        l--;
        i--;
      }
    }

    return {
      pathList,
      pathMap,
      nameMap,
    };
  }

  function addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        route,
        parent,
        matchAs
    ) {
    const path = route.path;
    const name = route.name; {
      assert(path != null, '"path" is required in a route configuration.');
      assert(
                typeof route.component !== 'string',
                'route config "component" for path: ' + (String(path || name)) + ' cannot be a ' +
                'string id. Use an actual component instead.'
            );
    }

    const normalizedPath = normalizePath(path, parent);
    const pathToRegexpOptions = route.pathToRegexpOptions || {};

    if (typeof route.caseSensitive === 'boolean') {
      pathToRegexpOptions.sensitive = route.caseSensitive;
    }

    const record = {
      path: normalizedPath,
      regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
      components: route.components || {
        default: route.component,
      },
      instances: {},
      name,
      parent,
      matchAs,
      redirect: route.redirect,
      beforeEnter: route.beforeEnter,
      meta: route.meta || {},
      props: route.props == null ?
                {} :
                route.components ?
                route.props :
                {
                  default: route.props,
                },
    };

    if (route.children) {
            // Warn if route is named, does not redirect and has a default child route.
            // If users navigate to this route by name, the default child will
            // not be rendered (GH Issue #629)
      {
        if (route.name && !route.redirect && route.children.some(function(child) {
          return /^\/?$/.test(child.path);
        })) {
          warn(
                        false,
                        "Named Route '" + (route.name) + "' has a default child route. " +
                        "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
                        'the default child route will not be rendered. Remove the name from ' +
                        'this route and use the name of the default child route for named ' +
                        'links instead.'
                    );
        }
      }
      route.children.forEach(function(child) {
        const childMatchAs = matchAs ?
                    cleanPath((matchAs + '/' + (child.path))) :
                    undefined;
        addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
      });
    }

    if (route.alias !== undefined) {
      const aliases = Array.isArray(route.alias) ?
                route.alias :
                [ route.alias ];

      aliases.forEach(function(alias) {
        const aliasRoute = {
          path: alias,
          children: route.children,
        };
        addRouteRecord(
                    pathList,
                    pathMap,
                    nameMap,
                    aliasRoute,
                    parent,
                    record.path || '/' // matchAs
                );
      });
    }

    if (!pathMap[record.path]) {
      pathList.push(record.path);
      pathMap[record.path] = record;
    }

    if (name) {
      if (!nameMap[name]) {
        nameMap[name] = record;
      } else if ('development' !== 'production' && !matchAs) {
        warn(
                    false,
                    'Duplicate named routes definition: ' +
                    '{ name: "' + name + '", path: "' + (record.path) + '" }'
                );
      }
    }
  }

  function compileRouteRegex(path, pathToRegexpOptions) {
    const regex = index(path, [], pathToRegexpOptions); {
      const keys = {};
      regex.keys.forEach(function(key) {
        warn(!keys[key.name], ('Duplicate param keys in route with path: "' + path + '"'));
        keys[key.name] = true;
      });
    }
    return regex;
  }

  function normalizePath(path, parent) {
    path = path.replace(/\/$/, '');
    if (path[0] === '/') {
      return path;
    }
    if (parent == null) {
      return path;
    }
    return cleanPath(((parent.path) + '/' + path));
  }

    /*  */


  function normalizeLocation(
        raw,
        current,
        append,
        router
    ) {
    let next = typeof raw === 'string' ? {
      path: raw,
    } : raw;
        // named target
    if (next.name || next._normalized) {
      return next;
    }

        // relative params
    if (!next.path && next.params && current) {
      next = assign({}, next);
      next._normalized = true;
      const params = assign(assign({}, current.params), next.params);
      if (current.name) {
        next.name = current.name;
        next.params = params;
      } else if (current.matched.length) {
        const rawPath = current.matched[current.matched.length - 1].path;
        next.path = fillParams(rawPath, params, ('path ' + (current.path)));
      } else {
        warn(false, 'relative params navigation requires a current route.');
      }
      return next;
    }

    const parsedPath = parsePath(next.path || '');
    const basePath = (current && current.path) || '/';
    const path = parsedPath.path ?
            resolvePath(parsedPath.path, basePath, append || next.append) :
            basePath;

    const query = resolveQuery(
            parsedPath.query,
            next.query,
            router && router.options.parseQuery
        );

    let hash = next.hash || parsedPath.hash;
    if (hash && hash.charAt(0) !== '#') {
      hash = '#' + hash;
    }

    return {
      _normalized: true,
      path,
      query,
      hash,
    };
  }

  function assign(a, b) {
    for (const key in b) {
      a[key] = b[key];
    }
    return a;
  }

    /*  */


  function createMatcher(
        routes,
        router
    ) {
    const ref = createRouteMap(routes);
    const pathList = ref.pathList;
    const pathMap = ref.pathMap;
    const nameMap = ref.nameMap;

    function addRoutes(routes) {
      createRouteMap(routes, pathList, pathMap, nameMap);
    }

    function match(
            raw,
            currentRoute,
            redirectedFrom
        ) {
      const location = normalizeLocation(raw, currentRoute, false, router);
      const name = location.name;

      if (name) {
        const record = nameMap[name]; {
          warn(record, ("Route with name '" + name + "' does not exist"));
        }
        if (!record) {
          return _createRoute(null, location);
        }
        const paramNames = record.regex.keys
                    .filter(function(key) {
                      return !key.optional;
                    })
                    .map(function(key) {
                      return key.name;
                    });

        if (typeof location.params !== 'object') {
          location.params = {};
        }

        if (currentRoute && typeof currentRoute.params === 'object') {
          for (const key in currentRoute.params) {
            if (!(key in location.params) && paramNames.indexOf(key) > -1) {
              location.params[key] = currentRoute.params[key];
            }
          }
        }

        if (record) {
          location.path = fillParams(record.path, location.params, ('named route "' + name + '"'));
          return _createRoute(record, location, redirectedFrom);
        }
      } else if (location.path) {
        location.params = {};
        for (let i = 0; i < pathList.length; i++) {
          const path = pathList[i];
          const record$1 = pathMap[path];
          if (matchRoute(record$1.regex, location.path, location.params)) {
            return _createRoute(record$1, location, redirectedFrom);
          }
        }
      }
            // no match
      return _createRoute(null, location);
    }

    function redirect(
            record,
            location
        ) {
      const originalRedirect = record.redirect;
      let redirect = typeof originalRedirect === 'function' ?
                originalRedirect(createRoute(record, location, null, router)) :
                originalRedirect;

      if (typeof redirect === 'string') {
        redirect = {
          path: redirect,
        };
      }

      if (!redirect || typeof redirect !== 'object') {
        {
          warn(
                        false, ('invalid redirect option: ' + (JSON.stringify(redirect)))
                    );
        }
        return _createRoute(null, location);
      }

      const re = redirect;
      const name = re.name;
      const path = re.path;
      let query = location.query;
      let hash = location.hash;
      let params = location.params;
      query = re.hasOwnProperty('query') ? re.query : query;
      hash = re.hasOwnProperty('hash') ? re.hash : hash;
      params = re.hasOwnProperty('params') ? re.params : params;

      if (name) {
                // resolved named direct
        const targetRecord = nameMap[name]; {
          assert(targetRecord, ('redirect failed: named route "' + name + '" not found.'));
        }
        return match({
          _normalized: true,
          name,
          query,
          hash,
          params,
        }, undefined, location);
      } else if (path) {
                // 1. resolve relative redirect
        const rawPath = resolveRecordPath(path, record);
                // 2. resolve params
        const resolvedPath = fillParams(rawPath, params, ('redirect route with path "' + rawPath + '"'));
                // 3. rematch with existing query and hash
        return match({
          _normalized: true,
          path: resolvedPath,
          query,
          hash,
        }, undefined, location);
      }
      {
        warn(false, ('invalid redirect option: ' + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location);

    }

    function alias(
            record,
            location,
            matchAs
        ) {
      const aliasedPath = fillParams(matchAs, location.params, ('aliased route with path "' + matchAs + '"'));
      const aliasedMatch = match({
        _normalized: true,
        path: aliasedPath,
      });
      if (aliasedMatch) {
        const matched = aliasedMatch.matched;
        const aliasedRecord = matched[matched.length - 1];
        location.params = aliasedMatch.params;
        return _createRoute(aliasedRecord, location);
      }
      return _createRoute(null, location);
    }

    function _createRoute(
            record,
            location,
            redirectedFrom
        ) {
      if (record && record.redirect) {
        return redirect(record, redirectedFrom || location);
      }
      if (record && record.matchAs) {
        return alias(record, location, record.matchAs);
      }
      return createRoute(record, location, redirectedFrom, router);
    }

    return {
      match,
      addRoutes,
    };
  }

  function matchRoute(
        regex,
        path,
        params
    ) {
    const m = path.match(regex);

    if (!m) {
      return false;
    } else if (!params) {
      return true;
    }

    for (let i = 1, len = m.length; i < len; ++i) {
      const key = regex.keys[i - 1];
      const val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
      if (key) {
        params[key.name] = val;
      }
    }

    return true;
  }

  function resolveRecordPath(path, record) {
    return resolvePath(path, record.parent ? record.parent.path : '/', true);
  }

    /*  */


  const positionStore = Object.create(null);

  function setupScroll() {
    window.addEventListener('popstate', function(e) {
      saveScrollPosition();
      if (e.state && e.state.key) {
        setStateKey(e.state.key);
      }
    });
  }

  function handleScroll(
        router,
        to,
        from,
        isPop
    ) {
    if (!router.app) {
      return;
    }

    const behavior = router.options.scrollBehavior;
    if (!behavior) {
      return;
    }

    {
      assert(typeof behavior === 'function', 'scrollBehavior must be a function');
    }

        // wait until re-render finishes before scrolling
    router.app.$nextTick(function() {
      let position = getScrollPosition();
      const shouldScroll = behavior(to, from, isPop ? position : null);
      if (!shouldScroll) {
        return;
      }
      const isObject = typeof shouldScroll === 'object';
      if (isObject && typeof shouldScroll.selector === 'string') {
        const el = document.querySelector(shouldScroll.selector);
        if (el) {
          let offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
          offset = normalizeOffset(offset);
          position = getElementPosition(el, offset);
        } else if (isValidPosition(shouldScroll)) {
          position = normalizePosition(shouldScroll);
        }
      } else if (isObject && isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }

      if (position) {
        window.scrollTo(position.x, position.y);
      }
    });
  }

  function saveScrollPosition() {
    const key = getStateKey();
    if (key) {
      positionStore[key] = {
        x: window.pageXOffset,
        y: window.pageYOffset,
      };
    }
  }

  function getScrollPosition() {
    const key = getStateKey();
    if (key) {
      return positionStore[key];
    }
  }

  function getElementPosition(el, offset) {
    const docEl = document.documentElement;
    const docRect = docEl.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
      x: elRect.left - docRect.left - offset.x,
      y: elRect.top - docRect.top - offset.y,
    };
  }

  function isValidPosition(obj) {
    return isNumber(obj.x) || isNumber(obj.y);
  }

  function normalizePosition(obj) {
    return {
      x: isNumber(obj.x) ? obj.x : window.pageXOffset,
      y: isNumber(obj.y) ? obj.y : window.pageYOffset,
    };
  }

  function normalizeOffset(obj) {
    return {
      x: isNumber(obj.x) ? obj.x : 0,
      y: isNumber(obj.y) ? obj.y : 0,
    };
  }

  function isNumber(v) {
    return typeof v === 'number';
  }

    /*  */

  const supportsPushState = inBrowser && (function() {
    const ua = window.navigator.userAgent;

    if (
            (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
            ua.indexOf('Mobile Safari') !== -1 &&
            ua.indexOf('Chrome') === -1 &&
            ua.indexOf('Windows Phone') === -1
        ) {
      return false;
    }

    return window.history && 'pushState' in window.history;
  })();

    // use User Timing api (if present) for more accurate key precision
  const Time = inBrowser && window.performance && window.performance.now ?
        window.performance :
        Date;

  let _key = genKey();

  function genKey() {
    return Time.now().toFixed(3);
  }

  function getStateKey() {
    return _key;
  }

  function setStateKey(key) {
    _key = key;
  }

  function pushState(url, replace) {
    saveScrollPosition();
        // try...catch the pushState call to get around Safari
        // DOM Exception 18 where it limits to 100 pushState calls
    const history = window.history;
    try {
      if (replace) {
        history.replaceState({
          key: _key,
        }, '', url);
      } else {
        _key = genKey();
        history.pushState({
          key: _key,
        }, '', url);
      }
    } catch (e) {
      window.location[replace ? 'replace' : 'assign'](url);
    }
  }

  function replaceState(url) {
    pushState(url, true);
  }

    /*  */

  function runQueue(queue, fn, cb) {
    var step = function(index) {
      if (index >= queue.length) {
        cb();
      } else {
        if (queue[index]) {
          fn(queue[index], function() {
            step(index + 1);
          });
        } else {
          step(index + 1);
        }
      }
    };
    step(0);
  }

    /*  */

  function resolveAsyncComponents(matched) {
    return function(to, from, next) {
      let hasAsync = false;
      let pending = 0;
      let error = null;

      flatMapComponents(matched, function(def, _, match, key) {
                // if it's a function and doesn't have cid attached,
                // assume it's an async component resolve function.
                // we are not using Vue's default async resolving mechanism because
                // we want to halt the navigation until the incoming component has been
                // resolved.
        if (typeof def === 'function' && def.cid === undefined) {
          hasAsync = true;
          pending++;

          const resolve = once(function(resolvedDef) {
            if (resolvedDef.__esModule && resolvedDef.default) {
              resolvedDef = resolvedDef.default;
            }
                        // save resolved on async factory in case it's used elsewhere
            def.resolved = typeof resolvedDef === 'function' ?
                            resolvedDef :
                            _Vue.extend(resolvedDef);
            match.components[key] = resolvedDef;
            pending--;
            if (pending <= 0) {
              next();
            }
          });

          const reject = once(function(reason) {
            const msg = 'Failed to resolve async component ' + key + ': ' + reason;
            'development' !== 'production' && warn(false, msg);
            if (!error) {
              error = isError(reason) ?
                                reason :
                                new Error(msg);
              next(error);
            }
          });

          let res;
          try {
            res = def(resolve, reject);
          } catch (e) {
            reject(e);
          }
          if (res) {
            if (typeof res.then === 'function') {
              res.then(resolve, reject);
            } else {
                            // new syntax in Vue 2.3
              const comp = res.component;
              if (comp && typeof comp.then === 'function') {
                comp.then(resolve, reject);
              }
            }
          }
        }
      });

      if (!hasAsync) {
        next();
      }
    };
  }

  function flatMapComponents(
        matched,
        fn
    ) {
    return flatten(matched.map(function(m) {
      return Object.keys(m.components).map(function(key) {
        return fn(
                    m.components[key],
                    m.instances[key],
                    m, key
                );
      });
    }));
  }

  function flatten(arr) {
    return Array.prototype.concat.apply([], arr);
  }

    // in Webpack 2, require.ensure now also returns a Promise
    // so the resolve/reject functions may get called an extra time
    // if the user uses an arrow function shorthand that happens to
    // return that Promise.
  function once(fn) {
    let called = false;
    return function() {
      let args = [],
        len = arguments.length;
      while (len--) args[len] = arguments[len];

      if (called) {
        return;
      }
      called = true;
      return fn.apply(this, args);
    };
  }

    /*  */

  const History = function History(router, base) {
    this.router = router;
    this.base = normalizeBase(base);
        // start with a route object that stands for "nowhere"
    this.current = START;
    this.pending = null;
    this.ready = false;
    this.readyCbs = [];
    this.readyErrorCbs = [];
    this.errorCbs = [];
  };

  History.prototype.listen = function listen(cb) {
    this.cb = cb;
  };

  History.prototype.onReady = function onReady(cb, errorCb) {
    if (this.ready) {
      cb();
    } else {
      this.readyCbs.push(cb);
      if (errorCb) {
        this.readyErrorCbs.push(errorCb);
      }
    }
  };

  History.prototype.onError = function onError(errorCb) {
    this.errorCbs.push(errorCb);
  };

  History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
    const this$1 = this;

    const route = this.router.match(location, this.current);
    this.confirmTransition(route, function() {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();

            // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function(cb) {
          cb(route);
        });
      }
    }, function(err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        this$1.ready = true;
        this$1.readyErrorCbs.forEach(function(cb) {
          cb(err);
        });
      }
    });
  };

  History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
    const this$1 = this;

    const current = this.current;
    const abort = function(err) {
      if (isError(err)) {
        if (this$1.errorCbs.length) {
          this$1.errorCbs.forEach(function(cb) {
            cb(err);
          });
        } else {
          warn(false, 'uncaught error during route navigation:');
          console.error(err);
        }
      }
      onAbort && onAbort(err);
    };
    if (
            isSameRoute(route, current) &&
            // in the case the route map has been dynamically appended to
            route.matched.length === current.matched.length
        ) {
      this.ensureURL();
      return abort();
    }

    const ref = resolveQueue(this.current.matched, route.matched);
    const updated = ref.updated;
    const deactivated = ref.deactivated;
    const activated = ref.activated;

    const queue = [].concat(
            // in-component leave guards
            extractLeaveGuards(deactivated),
            // global before hooks
            this.router.beforeHooks,
            // in-component update hooks
            extractUpdateHooks(updated),
            // in-config enter guards
            activated.map(function(m) {
              return m.beforeEnter;
            }),
            // async components
            resolveAsyncComponents(activated)
        );

    this.pending = route;
    const iterator = function(hook, next) {
      if (this$1.pending !== route) {
        return abort();
      }
      try {
        hook(route, current, function(to) {
          if (to === false || isError(to)) {
                        // next(false) -> abort navigation, ensure current URL
            this$1.ensureURL(true);
            abort(to);
          } else if (
                        typeof to === 'string' ||
                        (typeof to === 'object' && (
                            typeof to.path === 'string' ||
                            typeof to.name === 'string'
                        ))
                    ) {
                        // next('/') or next({ path: '/' }) -> redirect
            abort();
            if (typeof to === 'object' && to.replace) {
              this$1.replace(to);
            } else {
              this$1.push(to);
            }
          } else {
                        // confirm transition and pass on the value
            next(to);
          }
        });
      } catch (e) {
        abort(e);
      }
    };

    runQueue(queue, iterator, function() {
      const postEnterCbs = [];
      const isValid = function() {
        return this$1.current === route;
      };
            // wait until async components are resolved before
            // extracting in-component enter guards
      const enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
      const queue = enterGuards.concat(this$1.router.resolveHooks);
      runQueue(queue, iterator, function() {
        if (this$1.pending !== route) {
          return abort();
        }
        this$1.pending = null;
        onComplete(route);
        if (this$1.router.app) {
          this$1.router.app.$nextTick(function() {
            postEnterCbs.forEach(function(cb) {
              cb();
            });
          });
        }
      });
    });
  };

  History.prototype.updateRoute = function updateRoute(route) {
    const prev = this.current;
    this.current = route;
    this.cb && this.cb(route);
    this.router.afterHooks.forEach(function(hook) {
      hook && hook(route, prev);
    });
  };

  function normalizeBase(base) {
    if (!base) {
      if (inBrowser) {
                // respect <base> tag
        const baseEl = document.querySelector('base');
        base = (baseEl && baseEl.getAttribute('href')) || '/';
                // strip full URL origin
        base = base.replace(/^https?:\/\/[^\/]+/, '');
      } else {
        base = '/';
      }
    }
        // make sure there's the starting slash
    if (base.charAt(0) !== '/') {
      base = '/' + base;
    }
        // remove trailing slash
    return base.replace(/\/$/, '');
  }

  function resolveQueue(
        current,
        next
    ) {
    let i;
    const max = Math.max(current.length, next.length);
    for (i = 0; i < max; i++) {
      if (current[i] !== next[i]) {
        break;
      }
    }
    return {
      updated: next.slice(0, i),
      activated: next.slice(i),
      deactivated: current.slice(i),
    };
  }

  function extractGuards(
        records,
        name,
        bind,
        reverse
    ) {
    const guards = flatMapComponents(records, function(def, instance, match, key) {
      const guard = extractGuard(def, name);
      if (guard) {
        return Array.isArray(guard) ?
                    guard.map(function(guard) {
                      return bind(guard, instance, match, key);
                    }) :
                    bind(guard, instance, match, key);
      }
    });
    return flatten(reverse ? guards.reverse() : guards);
  }

  function extractGuard(
        def,
        key
    ) {
    if (typeof def !== 'function') {
            // extend now so that global mixins are applied.
      def = _Vue.extend(def);
    }
    return def.options[key];
  }

  function extractLeaveGuards(deactivated) {
    return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
  }

  function extractUpdateHooks(updated) {
    return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
  }

  function bindGuard(guard, instance) {
    if (instance) {
      return function boundRouteGuard() {
        return guard.apply(instance, arguments);
      };
    }
  }

  function extractEnterGuards(
        activated,
        cbs,
        isValid
    ) {
    return extractGuards(activated, 'beforeRouteEnter', function(guard, _, match, key) {
      return bindEnterGuard(guard, match, key, cbs, isValid);
    });
  }

  function bindEnterGuard(
        guard,
        match,
        key,
        cbs,
        isValid
    ) {
    return function routeEnterGuard(to, from, next) {
      return guard(to, from, function(cb) {
        next(cb);
        if (typeof cb === 'function') {
          cbs.push(function() {
                        // #750
                        // if a router-view is wrapped with an out-in transition,
                        // the instance may not have been registered at this time.
                        // we will need to poll for registration until current route
                        // is no longer valid.
            poll(cb, match.instances, key, isValid);
          });
        }
      });
    };
  }

  function poll(
        cb, // somehow flow cannot infer this is a function
        instances,
        key,
        isValid
    ) {
    if (instances[key]) {
      cb(instances[key]);
    } else if (isValid()) {
      setTimeout(function() {
        poll(cb, instances, key, isValid);
      }, 16);
    }
  }

    /*  */


  const HTML5History = (function(History$$1) {
    function HTML5History(router, base) {
      const this$1 = this;

      History$$1.call(this, router, base);

      const expectScroll = router.options.scrollBehavior;

      if (expectScroll) {
        setupScroll();
      }

      window.addEventListener('popstate', function(e) {
        const current = this$1.current;
        this$1.transitionTo(getLocation(this$1.base), function(route) {
          if (expectScroll) {
            handleScroll(router, route, current, true);
          }
        });
      });
    }

    if (History$$1) HTML5History.__proto__ = History$$1;
    HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
    HTML5History.prototype.constructor = HTML5History;

    HTML5History.prototype.go = function go(n) {
      window.history.go(n);
    };

    HTML5History.prototype.push = function push(location, onComplete, onAbort) {
      const this$1 = this;

      const ref = this;
      const fromRoute = ref.current;
      this.transitionTo(location, function(route) {
        pushState(cleanPath(this$1.base + route.fullPath));
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      }, onAbort);
    };

    HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
      const this$1 = this;

      const ref = this;
      const fromRoute = ref.current;
      this.transitionTo(location, function(route) {
        replaceState(cleanPath(this$1.base + route.fullPath));
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      }, onAbort);
    };

    HTML5History.prototype.ensureURL = function ensureURL(push) {
      if (getLocation(this.base) !== this.current.fullPath) {
        const current = cleanPath(this.base + this.current.fullPath);
        push ? pushState(current) : replaceState(current);
      }
    };

    HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
      return getLocation(this.base);
    };

    return HTML5History;
  }(History));

  function getLocation(base) {
    let path = window.location.pathname;
    if (base && path.indexOf(base) === 0) {
      path = path.slice(base.length);
    }
    return (path || '/') + window.location.search + window.location.hash;
  }

    /*  */


  const HashHistory = (function(History$$1) {
    function HashHistory(router, base, fallback) {
      History$$1.call(this, router, base);
            // check history fallback deeplinking
      if (fallback && checkFallback(this.base)) {
        return;
      }
      ensureSlash();
    }

    if (History$$1) HashHistory.__proto__ = History$$1;
    HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
    HashHistory.prototype.constructor = HashHistory;

        // this is delayed until the app mounts
        // to avoid the hashchange listener being fired too early
    HashHistory.prototype.setupListeners = function setupListeners() {
      const this$1 = this;

      window.addEventListener('hashchange', function() {
        if (!ensureSlash()) {
          return;
        }
        this$1.transitionTo(getHash(), function(route) {
          replaceHash(route.fullPath);
        });
      });
    };

    HashHistory.prototype.push = function push(location, onComplete, onAbort) {
      this.transitionTo(location, function(route) {
        pushHash(route.fullPath);
        onComplete && onComplete(route);
      }, onAbort);
    };

    HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
      this.transitionTo(location, function(route) {
        replaceHash(route.fullPath);
        onComplete && onComplete(route);
      }, onAbort);
    };

    HashHistory.prototype.go = function go(n) {
      window.history.go(n);
    };

    HashHistory.prototype.ensureURL = function ensureURL(push) {
      const current = this.current.fullPath;
      if (getHash() !== current) {
        push ? pushHash(current) : replaceHash(current);
      }
    };

    HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
      return getHash();
    };

    return HashHistory;
  }(History));

  function checkFallback(base) {
    const location = getLocation(base);
    if (!/^\/#/.test(location)) {
      window.location.replace(
                cleanPath(base + '/#' + location)
            );
      return true;
    }
  }

  function ensureSlash() {
    const path = getHash();
    if (path.charAt(0) === '/') {
      return true;
    }
    replaceHash('/' + path);
    return false;
  }

  function getHash() {
        // We can't use window.location.hash here because it's not
        // consistent across browsers - Firefox will pre-decode it!
    const href = window.location.href;
    const index = href.indexOf('#');
    return index === -1 ? '' : href.slice(index + 1);
  }

  function pushHash(path) {
    window.location.hash = path;
  }

  function replaceHash(path) {
    const href = window.location.href;
    const i = href.indexOf('#');
    const base = i >= 0 ? href.slice(0, i) : href;
    window.location.replace((base + '#' + path));
  }

    /*  */


  const AbstractHistory = (function(History$$1) {
    function AbstractHistory(router, base) {
      History$$1.call(this, router, base);
      this.stack = [];
      this.index = -1;
    }

    if (History$$1) AbstractHistory.__proto__ = History$$1;
    AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
    AbstractHistory.prototype.constructor = AbstractHistory;

    AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
      const this$1 = this;

      this.transitionTo(location, function(route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      }, onAbort);
    };

    AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
      const this$1 = this;

      this.transitionTo(location, function(route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      }, onAbort);
    };

    AbstractHistory.prototype.go = function go(n) {
      const this$1 = this;

      const targetIndex = this.index + n;
      if (targetIndex < 0 || targetIndex >= this.stack.length) {
        return;
      }
      const route = this.stack[targetIndex];
      this.confirmTransition(route, function() {
        this$1.index = targetIndex;
        this$1.updateRoute(route);
      });
    };

    AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
      const current = this.stack[this.stack.length - 1];
      return current ? current.fullPath : '/';
    };

    AbstractHistory.prototype.ensureURL = function ensureURL() {
            // noop
    };

    return AbstractHistory;
  }(History));

    /*  */

  const VueRouter = function VueRouter(options) {
    if (options === void 0) options = {};

    this.app = null;
    this.apps = [];
    this.options = options;
    this.beforeHooks = [];
    this.resolveHooks = [];
    this.afterHooks = [];
    this.matcher = createMatcher(options.routes || [], this);

    let mode = options.mode || 'hash';
    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
    if (this.fallback) {
      mode = 'hash';
    }
    if (!inBrowser) {
      mode = 'abstract';
    }
    this.mode = mode;

    switch (mode) {
      case 'history':
        this.history = new HTML5History(this, options.base);
        break;
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback);
        break;
      case 'abstract':
        this.history = new AbstractHistory(this, options.base);
        break;
      default:
        {
          assert(false, ('invalid mode: ' + mode));
        }
    }
  };

  const prototypeAccessors = {
    currentRoute: {},
  };

  VueRouter.prototype.match = function match(
        raw,
        current,
        redirectedFrom
    ) {
    return this.matcher.match(raw, current, redirectedFrom);
  };

  prototypeAccessors.currentRoute.get = function() {
    return this.history && this.history.current;
  };

  VueRouter.prototype.init = function init(app /* Vue component instance */) {
    const this$1 = this;

    'development' !== 'production' && assert(
            install.installed,
            'not installed. Make sure to call `Vue.use(VueRouter)` ' +
            'before creating root instance.'
        );

    this.apps.push(app);

        // main app already initialized.
    if (this.app) {
      return;
    }

    this.app = app;

    const history = this.history;

    if (history instanceof HTML5History) {
      history.transitionTo(history.getCurrentLocation());
    } else if (history instanceof HashHistory) {
      const setupHashListener = function() {
        history.setupListeners();
      };
      history.transitionTo(
                history.getCurrentLocation(),
                setupHashListener,
                setupHashListener
            );
    }

    history.listen(function(route) {
      this$1.apps.forEach(function(app) {
        app._route = route;
      });
    });
  };

  VueRouter.prototype.beforeEach = function beforeEach(fn) {
    return registerHook(this.beforeHooks, fn);
  };

  VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
    return registerHook(this.resolveHooks, fn);
  };

  VueRouter.prototype.afterEach = function afterEach(fn) {
    return registerHook(this.afterHooks, fn);
  };

  VueRouter.prototype.onReady = function onReady(cb, errorCb) {
    this.history.onReady(cb, errorCb);
  };

  VueRouter.prototype.onError = function onError(errorCb) {
    this.history.onError(errorCb);
  };

  VueRouter.prototype.push = function push(location, onComplete, onAbort) {
    this.history.push(location, onComplete, onAbort);
  };

  VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
    this.history.replace(location, onComplete, onAbort);
  };

  VueRouter.prototype.go = function go(n) {
    this.history.go(n);
  };

  VueRouter.prototype.back = function back() {
    this.go(-1);
  };

  VueRouter.prototype.forward = function forward() {
    this.go(1);
  };

  VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
    const route = to ?
            to.matched ?
            to :
            this.resolve(to).route :
            this.currentRoute;
    if (!route) {
      return [];
    }
    return [].concat.apply([], route.matched.map(function(m) {
      return Object.keys(m.components).map(function(key) {
        return m.components[key];
      });
    }));
  };

  VueRouter.prototype.resolve = function resolve(
        to,
        current,
        append
    ) {
    const location = normalizeLocation(
            to,
            current || this.history.current,
            append,
            this
        );
    const route = this.match(location, current);
    const fullPath = route.redirectedFrom || route.fullPath;
    const base = this.history.base;
    const href = createHref(base, fullPath, this.mode);
    return {
      location,
      route,
      href,
            // for backwards compat
      normalizedTo: location,
      resolved: route,
    };
  };

  VueRouter.prototype.addRoutes = function addRoutes(routes) {
    this.matcher.addRoutes(routes);
    if (this.history.current !== START) {
      this.history.transitionTo(this.history.getCurrentLocation());
    }
  };

  Object.defineProperties(VueRouter.prototype, prototypeAccessors);

  function registerHook(list, fn) {
    list.push(fn);
    return function() {
      const i = list.indexOf(fn);
      if (i > -1) {
        list.splice(i, 1);
      }
    };
  }

  function createHref(base, fullPath, mode) {
    const path = mode === 'hash' ? '#' + fullPath : fullPath;
    return base ? cleanPath(base + '/' + path) : path;
  }

  VueRouter.install = install;
  VueRouter.version = '2.7.0';

  if (inBrowser && window.Vue) {
    window.Vue.use(VueRouter);
  }

  return VueRouter;

}));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(23),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\vue\\egg\\egg-vue-blog\\app\\src\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e91e550", Component.options)
  } else {
    hotAPI.reload("data-v-1e91e550", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3c86d37f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e91e550\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e91e550\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\nbody{\n\tbackground: #ccc;\n}\n.head {\n\theight: 200px;\n\toverflow: hidden;\n}\n.news {\n\theight: 40px;\n\tbackground: #0f0;\n}\n.appul {\n\theight: 40px;\n}\n.appul li {\n\tdisplay: inline-block;\n\tborder: 1px solid red;\n\tbackground: rgba(255, 0, 45, 0.5);\n}\n.appul li a {\n\tdisplay: inline-block;\n\twidth: 100px;\n\tcolor: black;\n\ttext-align: center;\n\tline-height: 38px;\n\tfont-size: 20px;\n}\n.appul .router-link-active {\n\tcolor: aliceblue;\n}\n.hello{\n\tbackground: #fff;\n}\n\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_css_bootstrap_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_js_bootstrap_min_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_js_bootstrap_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__public_js_bootstrap_min_js__);
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

	
	


	/* harmony default export */ __webpack_exports__["default"] = ({

		name: 'app',
		data() {
			return {
				error: null
			}
		},
		props: [' message '],
		beforeMount() {
            
            
		},
        mounted(){
            console.log(4)
        },
        beforeUpdate(){
            console.log(5)
        },
        updated(){
            console.log(6)
        },
        activated(){
            console.log(7)
        },
		computed:{
            news(){
                return this.$store.state.lanmu
            }
		},
		methods: {
			projects() {
				
				
			},
			zc() {

			}

		}
	});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(20)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./bootstrap.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./bootstrap.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(16) + ") format('woff2'), url(" + __webpack_require__(17) + ") format('woff'), url(" + __webpack_require__(18) + ") format('truetype'), url(" + __webpack_require__(19) + "#glyphicons_halflingsregular) format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"*\";\n}\n.glyphicon-plus:before {\n  content: \"+\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270F\";\n}\n.glyphicon-glass:before {\n  content: \"\\E001\";\n}\n.glyphicon-music:before {\n  content: \"\\E002\";\n}\n.glyphicon-search:before {\n  content: \"\\E003\";\n}\n.glyphicon-heart:before {\n  content: \"\\E005\";\n}\n.glyphicon-star:before {\n  content: \"\\E006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\E007\";\n}\n.glyphicon-user:before {\n  content: \"\\E008\";\n}\n.glyphicon-film:before {\n  content: \"\\E009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\E010\";\n}\n.glyphicon-th:before {\n  content: \"\\E011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\E012\";\n}\n.glyphicon-ok:before {\n  content: \"\\E013\";\n}\n.glyphicon-remove:before {\n  content: \"\\E014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\E015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\E016\";\n}\n.glyphicon-off:before {\n  content: \"\\E017\";\n}\n.glyphicon-signal:before {\n  content: \"\\E018\";\n}\n.glyphicon-cog:before {\n  content: \"\\E019\";\n}\n.glyphicon-trash:before {\n  content: \"\\E020\";\n}\n.glyphicon-home:before {\n  content: \"\\E021\";\n}\n.glyphicon-file:before {\n  content: \"\\E022\";\n}\n.glyphicon-time:before {\n  content: \"\\E023\";\n}\n.glyphicon-road:before {\n  content: \"\\E024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\E025\";\n}\n.glyphicon-download:before {\n  content: \"\\E026\";\n}\n.glyphicon-upload:before {\n  content: \"\\E027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\E028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\E029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\E030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\E031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\E032\";\n}\n.glyphicon-lock:before {\n  content: \"\\E033\";\n}\n.glyphicon-flag:before {\n  content: \"\\E034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\E035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\E036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\E037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\E038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\E039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\E040\";\n}\n.glyphicon-tag:before {\n  content: \"\\E041\";\n}\n.glyphicon-tags:before {\n  content: \"\\E042\";\n}\n.glyphicon-book:before {\n  content: \"\\E043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\E044\";\n}\n.glyphicon-print:before {\n  content: \"\\E045\";\n}\n.glyphicon-camera:before {\n  content: \"\\E046\";\n}\n.glyphicon-font:before {\n  content: \"\\E047\";\n}\n.glyphicon-bold:before {\n  content: \"\\E048\";\n}\n.glyphicon-italic:before {\n  content: \"\\E049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\E050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\E051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\E052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\E053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\E054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\E055\";\n}\n.glyphicon-list:before {\n  content: \"\\E056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\E057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\E058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\E059\";\n}\n.glyphicon-picture:before {\n  content: \"\\E060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\E062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\E063\";\n}\n.glyphicon-tint:before {\n  content: \"\\E064\";\n}\n.glyphicon-edit:before {\n  content: \"\\E065\";\n}\n.glyphicon-share:before {\n  content: \"\\E066\";\n}\n.glyphicon-check:before {\n  content: \"\\E067\";\n}\n.glyphicon-move:before {\n  content: \"\\E068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\E069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\E070\";\n}\n.glyphicon-backward:before {\n  content: \"\\E071\";\n}\n.glyphicon-play:before {\n  content: \"\\E072\";\n}\n.glyphicon-pause:before {\n  content: \"\\E073\";\n}\n.glyphicon-stop:before {\n  content: \"\\E074\";\n}\n.glyphicon-forward:before {\n  content: \"\\E075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\E076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\E077\";\n}\n.glyphicon-eject:before {\n  content: \"\\E078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\E079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\E080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\E081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\E082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\E083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\E084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\E085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\E086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\E087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\E088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\E089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\E090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\E091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\E092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\E093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\E094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\E095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\E096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\E097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\";\n}\n.glyphicon-gift:before {\n  content: \"\\E102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\E103\";\n}\n.glyphicon-fire:before {\n  content: \"\\E104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\E105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\E106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\E107\";\n}\n.glyphicon-plane:before {\n  content: \"\\E108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\E109\";\n}\n.glyphicon-random:before {\n  content: \"\\E110\";\n}\n.glyphicon-comment:before {\n  content: \"\\E111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\E112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\E113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\E114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\E115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\E117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\E118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\E121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\E122\";\n}\n.glyphicon-bell:before {\n  content: \"\\E123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\E124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\E127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\E128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\E129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\E130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\";\n}\n.glyphicon-globe:before {\n  content: \"\\E135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\E136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\E137\";\n}\n.glyphicon-filter:before {\n  content: \"\\E138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\E139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\E140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\E141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\E142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\E143\";\n}\n.glyphicon-link:before {\n  content: \"\\E144\";\n}\n.glyphicon-phone:before {\n  content: \"\\E145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\E146\";\n}\n.glyphicon-usd:before {\n  content: \"\\E148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\E149\";\n}\n.glyphicon-sort:before {\n  content: \"\\E150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\E157\";\n}\n.glyphicon-expand:before {\n  content: \"\\E158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\E159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\E160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\E161\";\n}\n.glyphicon-flash:before {\n  content: \"\\E162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\E163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\E164\";\n}\n.glyphicon-record:before {\n  content: \"\\E165\";\n}\n.glyphicon-save:before {\n  content: \"\\E166\";\n}\n.glyphicon-open:before {\n  content: \"\\E167\";\n}\n.glyphicon-saved:before {\n  content: \"\\E168\";\n}\n.glyphicon-import:before {\n  content: \"\\E169\";\n}\n.glyphicon-export:before {\n  content: \"\\E170\";\n}\n.glyphicon-send:before {\n  content: \"\\E171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\E175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\E176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\E177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\E178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\E179\";\n}\n.glyphicon-header:before {\n  content: \"\\E180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\E181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\E182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\E183\";\n}\n.glyphicon-tower:before {\n  content: \"\\E184\";\n}\n.glyphicon-stats:before {\n  content: \"\\E185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\E186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\E187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\E188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\E195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\E197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\";\n}\n.glyphicon-cd:before {\n  content: \"\\E201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\E202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\E203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\E204\";\n}\n.glyphicon-copy:before {\n  content: \"\\E205\";\n}\n.glyphicon-paste:before {\n  content: \"\\E206\";\n}\n.glyphicon-alert:before {\n  content: \"\\E209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\E210\";\n}\n.glyphicon-king:before {\n  content: \"\\E211\";\n}\n.glyphicon-queen:before {\n  content: \"\\E212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\E213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\E214\";\n}\n.glyphicon-knight:before {\n  content: \"\\E215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\E216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26FA\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\E218\";\n}\n.glyphicon-bed:before {\n  content: \"\\E219\";\n}\n.glyphicon-apple:before {\n  content: \"\\F8FF\";\n}\n.glyphicon-erase:before {\n  content: \"\\E221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231B\";\n}\n.glyphicon-lamp:before {\n  content: \"\\E223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\E224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\E226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\E227\";\n}\n.glyphicon-btc:before {\n  content: \"\\E227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\E227\";\n}\n.glyphicon-yen:before {\n  content: \"\\A5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\A5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20BD\";\n}\n.glyphicon-rub:before {\n  content: \"\\20BD\";\n}\n.glyphicon-scale:before {\n  content: \"\\E230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\";\n}\n.glyphicon-education:before {\n  content: \"\\E233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\E235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\E237\";\n}\n.glyphicon-oil:before {\n  content: \"\\E238\";\n}\n.glyphicon-grain:before {\n  content: \"\\E239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\E240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\E241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\E242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\E243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\E244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\E247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\E249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\E250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\E251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\E253\";\n}\n.glyphicon-console:before {\n  content: \"\\E254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\E255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\E256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\E257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\E258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\E259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\E260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n       -o-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: .65;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n       -o-transition: opacity .15s linear;\n          transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n       -o-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus {\n  z-index: 3;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\A0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  padding-right: 15px;\n  padding-left: 15px;\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border .2s ease-in-out;\n       -o-transition: border .2s ease-in-out;\n          transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  -webkit-transition: width .6s ease;\n       -o-transition: width .6s ease;\n          transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 40px 40px;\n          background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n       -o-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n       -o-transition:      -o-transform .3s ease-out;\n          transition:         transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n      -ms-transform: translate(0, -25%);\n       -o-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  filter: alpha(opacity=0);\n  opacity: 0;\n\n  line-break: auto;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n\n  line-break: auto;\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n       -o-transition: .6s ease-in-out left;\n          transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n         -o-transition:      -o-transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  background-color: rgba(0, 0, 0, 0);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff2;base64,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"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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JbwmFCZ+JuYnUCe8J/goNChwKKwpoCnMKiYqSiqEKworeiwILGgsuizsLRwtiC30LiguZi6iLtgvDi9GL34vsi/4MD4whDDSMRIxYDGuMegyJDJeMpoy3jMiMz4zaDO2NBg0YDSoNNI1LDWeNeg2PjZ8Ntw3GjdON5I31DgQOEI4hjjIOQo5SjmIOcw6HDpsOpo63jugO9w8GDxQPKI8+D0yPew+Oj6MPtQ/KD9uP6o/+kBIQIBAxkECQX5CGEKoQu5DGENCQ3ZDoEPKRBBEYESuRPZFWkW2RgZGdEa0RvZHNkd2R7ZH9kgWSDJITkhqSIZIzEkSSThJXkmESapKAkouSlIAAQAAARcApwARAAAAAAACAAAAAQABAAAAQAAuAAAAAAAAABAAxgABAAAAAAATABIAAAADAAEECQAAAGoAEgADAAEECQABACgAfAADAAEECQACAA4ApAADAAEECQADAEwAsgADAAEECQAEADgA/gADAAEECQAFAHgBNgADAAEECQAGADYBrgADAAEECQAIABYB5AADAAEECQAJABYB+gADAAEECQALACQCEAADAAEECQAMACQCNAADAAEECQATACQCWAADAAEECQDIABYCfAADAAEECQDJADACkgADAAEECdkDABoCwnd3dy5nbHlwaGljb25zLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMQA0ACAAYgB5ACAASgBhAG4AIABLAG8AdgBhAHIAaQBrAC4AIABBAGwAbAAgAHIAaQBnAGgAdABzACAAcgBlAHMAZQByAHYAZQBkAC4ARwBMAFkAUABIAEkAQwBPAE4AUwAgAEgAYQBsAGYAbABpAG4AZwBzAFIAZQBnAHUAbABhAHIAMQAuADAAMAA5ADsAVQBLAFcATgA7AEcATABZAFAASABJAEMATwBOAFMASABhAGwAZgBsAGkAbgBnAHMALQBSAGUAZwB1AGwAYQByAEcATABZAFAASABJAEMATwBOAFMAIABIAGEAbABmAGwAaQBuAGcAcwAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwADAAOQA7AFAAUwAgADAAMAAxAC4AMAAwADkAOwBoAG8AdABjAG8AbgB2ACAAMQAuADAALgA3ADAAOwBtAGEAawBlAG8AdABmAC4AbABpAGIAMgAuADUALgA1ADgAMwAyADkARwBMAFkAUABIAEkAQwBPAE4AUwBIAGEAbABmAGwAaQBuAGcAcwAtAFIAZQBnAHUAbABhAHIASgBhAG4AIABLAG8AdgBhAHIAaQBrAEoAYQBuACAASwBvAHYAYQByAGkAawB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQBXAGUAYgBmAG8AbgB0ACAAMQAuADAAVwBlAGQAIABPAGMAdAAgADIAOQAgADAANgA6ADMANgA6ADAANwAgADIAMAAxADQARgBvAG4AdAAgAFMAcQB1AGkAcgByAGUAbAAAAAIAAAAAAAD/tQAyAAAAAAAAAAAAAAAAAAAAAAAAAAABFwAAAQIBAwADAA0ADgEEAJYBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMA7wEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BfwGAAYEBggGDAYQBhQGGAYcBiAGJAYoBiwGMAY0BjgGPAZABkQGSAZMBlAGVAZYBlwGYAZkBmgGbAZwBnQGeAZ8BoAGhAaIBowGkAaUBpgGnAagBqQGqAasBrAGtAa4BrwGwAbEBsgGzAbQBtQG2AbcBuAG5AboBuwG8Ab0BvgG/AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHUAdUB1gHXAdgB2QHaAdsB3AHdAd4B3wHgAeEB4gHjAeQB5QHmAecB6AHpAeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+Af8CAAIBAgICAwIEAgUCBgIHAggCCQIKAgsCDAINAg4CDwIQAhECEgZnbHlwaDEGZ2x5cGgyB3VuaTAwQTAHdW5pMjAwMAd1bmkyMDAxB3VuaTIwMDIHdW5pMjAwMwd1bmkyMDA0B3VuaTIwMDUHdW5pMjAwNgd1bmkyMDA3B3VuaTIwMDgHdW5pMjAwOQd1bmkyMDBBB3VuaTIwMkYHdW5pMjA1RgRFdXJvB3VuaTIwQkQHdW5pMjMxQgd1bmkyNUZDB3VuaTI2MDEHdW5pMjZGQQd1bmkyNzA5B3VuaTI3MEYHdW5pRTAwMQd1bmlFMDAyB3VuaUUwMDMHdW5pRTAwNQd1bmlFMDA2B3VuaUUwMDcHdW5pRTAwOAd1bmlFMDA5B3VuaUUwMTAHdW5pRTAxMQd1bmlFMDEyB3VuaUUwMTMHdW5pRTAxNAd1bmlFMDE1B3VuaUUwMTYHdW5pRTAxNwd1bmlFMDE4B3VuaUUwMTkHdW5pRTAyMAd1bmlFMDIxB3VuaUUwMjIHdW5pRTAyMwd1bmlFMDI0B3VuaUUwMjUHdW5pRTAyNgd1bmlFMDI3B3VuaUUwMjgHdW5pRTAyOQd1bmlFMDMwB3VuaUUwMzEHdW5pRTAzMgd1bmlFMDMzB3VuaUUwMzQHdW5pRTAzNQd1bmlFMDM2B3VuaUUwMzcHdW5pRTAzOAd1bmlFMDM5B3VuaUUwNDAHdW5pRTA0MQd1bmlFMDQyB3VuaUUwNDMHdW5pRTA0NAd1bmlFMDQ1B3VuaUUwNDYHdW5pRTA0Nwd1bmlFMDQ4B3VuaUUwNDkHdW5pRTA1MAd1bmlFMDUxB3VuaUUwNTIHdW5pRTA1Mwd1bmlFMDU0B3VuaUUwNTUHdW5pRTA1Ngd1bmlFMDU3B3VuaUUwNTgHdW5pRTA1OQd1bmlFMDYwB3VuaUUwNjIHdW5pRTA2Mwd1bmlFMDY0B3VuaUUwNjUHdW5pRTA2Ngd1bmlFMDY3B3VuaUUwNjgHdW5pRTA2OQd1bmlFMDcwB3VuaUUwNzEHdW5pRTA3Mgd1bmlFMDczB3VuaUUwNzQHdW5pRTA3NQd1bmlFMDc2B3VuaUUwNzcHdW5pRTA3OAd1bmlFMDc5B3VuaUUwODAHdW5pRTA4MQd1bmlFMDgyB3VuaUUwODMHdW5pRTA4NAd1bmlFMDg1B3VuaUUwODYHdW5pRTA4Nwd1bmlFMDg4B3VuaUUwODkHdW5pRTA5MAd1bmlFMDkxB3VuaUUwOTIHdW5pRTA5Mwd1bmlFMDk0B3VuaUUwOTUHdW5pRTA5Ngd1bmlFMDk3B3VuaUUxMDEHdW5pRTEwMgd1bmlFMTAzB3VuaUUxMDQHdW5pRTEwNQd1bmlFMTA2B3VuaUUxMDcHdW5pRTEwOAd1bmlFMTA5B3VuaUUxMTAHdW5pRTExMQd1bmlFMTEyB3VuaUUxMTMHdW5pRTExNAd1bmlFMTE1B3VuaUUxMTYHdW5pRTExNwd1bmlFMTE4B3VuaUUxMTkHdW5pRTEyMAd1bmlFMTIxB3VuaUUxMjIHdW5pRTEyMwd1bmlFMTI0B3VuaUUxMjUHdW5pRTEyNgd1bmlFMTI3B3VuaUUxMjgHdW5pRTEyOQd1bmlFMTMwB3VuaUUxMzEHdW5pRTEzMgd1bmlFMTMzB3VuaUUxMzQHdW5pRTEzNQd1bmlFMTM2B3VuaUUxMzcHdW5pRTEzOAd1bmlFMTM5B3VuaUUxNDAHdW5pRTE0MQd1bmlFMTQyB3VuaUUxNDMHdW5pRTE0NAd1bmlFMTQ1B3VuaUUxNDYHdW5pRTE0OAd1bmlFMTQ5B3VuaUUxNTAHdW5pRTE1MQd1bmlFMTUyB3VuaUUxNTMHdW5pRTE1NAd1bmlFMTU1B3VuaUUxNTYHdW5pRTE1Nwd1bmlFMTU4B3VuaUUxNTkHdW5pRTE2MAd1bmlFMTYxB3VuaUUxNjIHdW5pRTE2Mwd1bmlFMTY0B3VuaUUxNjUHdW5pRTE2Ngd1bmlFMTY3B3VuaUUxNjgHdW5pRTE2OQd1bmlFMTcwB3VuaUUxNzEHdW5pRTE3Mgd1bmlFMTczB3VuaUUxNzQHdW5pRTE3NQd1bmlFMTc2B3VuaUUxNzcHdW5pRTE3OAd1bmlFMTc5B3VuaUUxODAHdW5pRTE4MQd1bmlFMTgyB3VuaUUxODMHdW5pRTE4NAd1bmlFMTg1B3VuaUUxODYHdW5pRTE4Nwd1bmlFMTg4B3VuaUUxODkHdW5pRTE5MAd1bmlFMTkxB3VuaUUxOTIHdW5pRTE5Mwd1bmlFMTk0B3VuaUUxOTUHdW5pRTE5Nwd1bmlFMTk4B3VuaUUxOTkHdW5pRTIwMAd1bmlFMjAxB3VuaUUyMDIHdW5pRTIwMwd1bmlFMjA0B3VuaUUyMDUHdW5pRTIwNgd1bmlFMjA5B3VuaUUyMTAHdW5pRTIxMQd1bmlFMjEyB3VuaUUyMTMHdW5pRTIxNAd1bmlFMjE1B3VuaUUyMTYHdW5pRTIxOAd1bmlFMjE5B3VuaUUyMjEHdW5pRTIyMwd1bmlFMjI0B3VuaUUyMjUHdW5pRTIyNgd1bmlFMjI3B3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTIzNAd1bmlFMjM1B3VuaUUyMzYHdW5pRTIzNwd1bmlFMjM4B3VuaUUyMzkHdW5pRTI0MAd1bmlFMjQxB3VuaUUyNDIHdW5pRTI0Mwd1bmlFMjQ0B3VuaUUyNDUHdW5pRTI0Ngd1bmlFMjQ3B3VuaUUyNDgHdW5pRTI0OQd1bmlFMjUwB3VuaUUyNTEHdW5pRTI1Mgd1bmlFMjUzB3VuaUUyNTQHdW5pRTI1NQd1bmlFMjU2B3VuaUUyNTcHdW5pRTI1OAd1bmlFMjU5B3VuaUUyNjAHdW5pRjhGRgZ1MUY1MTEGdTFGNkFBAAAAAAFUUMMXAAA="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+PC9tZXRhZGF0YT4KPGRlZnM+Cjxmb250IGlkPSJnbHlwaGljb25zX2hhbGZsaW5nc3JlZ3VsYXIiIGhvcml6LWFkdi14PSIxMjAwIiA+Cjxmb250LWZhY2UgdW5pdHMtcGVyLWVtPSIxMjAwIiBhc2NlbnQ9Ijk2MCIgZGVzY2VudD0iLTI0MCIgLz4KPG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjUwMCIgLz4KPGdseXBoIGhvcml6LWFkdi14PSIwIiAvPgo8Z2x5cGggaG9yaXotYWR2LXg9IjQwMCIgLz4KPGdseXBoIHVuaWNvZGU9IiAiIC8+CjxnbHlwaCB1bmljb2RlPSIqIiBkPSJNNjAwIDExMDBxMTUgMCAzNCAtMS41dDMwIC0zLjVsMTEgLTFxMTAgLTIgMTcuNSAtMTAuNXQ3LjUgLTE4LjV2LTIyNGwxNTggMTU4cTcgNyAxOCA4dDE5IC02bDEwNiAtMTA2cTcgLTggNiAtMTl0LTggLTE4bC0xNTggLTE1OGgyMjRxMTAgMCAxOC41IC03LjV0MTAuNSAtMTcuNXE2IC00MSA2IC03NXEwIC0xNSAtMS41IC0zNHQtMy41IC0zMGwtMSAtMTFxLTIgLTEwIC0xMC41IC0xNy41dC0xOC41IC03LjVoLTIyNGwxNTggLTE1OCBxNyAtNyA4IC0xOHQtNiAtMTlsLTEwNiAtMTA2cS04IC03IC0xOSAtNnQtMTggOGwtMTU4IDE1OHYtMjI0cTAgLTEwIC03LjUgLTE4LjV0LTE3LjUgLTEwLjVxLTQxIC02IC03NSAtNnEtMTUgMCAtMzQgMS41dC0zMCAzLjVsLTExIDFxLTEwIDIgLTE3LjUgMTAuNXQtNy41IDE4LjV2MjI0bC0xNTggLTE1OHEtNyAtNyAtMTggLTh0LTE5IDZsLTEwNiAxMDZxLTcgOCAtNiAxOXQ4IDE4bDE1OCAxNThoLTIyNHEtMTAgMCAtMTguNSA3LjUgdC0xMC41IDE3LjVxLTYgNDEgLTYgNzVxMCAxNSAxLjUgMzR0My41IDMwbDEgMTFxMiAxMCAxMC41IDE3LjV0MTguNSA3LjVoMjI0bC0xNTggMTU4cS03IDcgLTggMTh0NiAxOWwxMDYgMTA2cTggNyAxOSA2dDE4IC04bDE1OCAtMTU4djIyNHEwIDEwIDcuNSAxOC41dDE3LjUgMTAuNXE0MSA2IDc1IDZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iKyIgZD0iTTQ1MCAxMTAwaDIwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMzUwaDM1MHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0zNTB2LTM1MHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMjAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYzNTBoLTM1MHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MjAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNSBoMzUwdjM1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4YTA7IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4YTU7IiBkPSJNODI1IDExMDBoMjUwcTEwIDAgMTIuNSAtNXQtNS41IC0xM2wtMzY0IC0zNjRxLTYgLTYgLTExIC0xOGgyNjhxMTAgMCAxMyAtNnQtMyAtMTRsLTEyMCAtMTYwcS02IC04IC0xOCAtMTR0LTIyIC02aC0xMjV2LTEwMGgyNzVxMTAgMCAxMyAtNnQtMyAtMTRsLTEyMCAtMTYwcS02IC04IC0xOCAtMTR0LTIyIC02aC0xMjV2LTE3NHEwIC0xMSAtNy41IC0xOC41dC0xOC41IC03LjVoLTE0OHEtMTEgMCAtMTguNSA3LjV0LTcuNSAxOC41djE3NCBoLTI3NXEtMTAgMCAtMTMgNnQzIDE0bDEyMCAxNjBxNiA4IDE4IDE0dDIyIDZoMTI1djEwMGgtMjc1cS0xMCAwIC0xMyA2dDMgMTRsMTIwIDE2MHE2IDggMTggMTR0MjIgNmgxMThxLTUgMTIgLTExIDE4bC0zNjQgMzY0cS04IDggLTUuNSAxM3QxMi41IDVoMjUwcTI1IDAgNDMgLTE4bDE2NCAtMTY0cTggLTggMTggLTh0MTggOGwxNjQgMTY0cTE4IDE4IDQzIDE4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDA7IiBob3Jpei1hZHYteD0iNjUwIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjAwMTsiIGhvcml6LWFkdi14PSIxMzAwIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjAwMjsiIGhvcml6LWFkdi14PSI2NTAiIC8+CjxnbHlwaCB1bmljb2RlPSImI3gyMDAzOyIgaG9yaXotYWR2LXg9IjEzMDAiIC8+CjxnbHlwaCB1bmljb2RlPSImI3gyMDA0OyIgaG9yaXotYWR2LXg9IjQzMyIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDU7IiBob3Jpei1hZHYteD0iMzI1IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjAwNjsiIGhvcml6LWFkdi14PSIyMTYiIC8+CjxnbHlwaCB1bmljb2RlPSImI3gyMDA3OyIgaG9yaXotYWR2LXg9IjIxNiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDg7IiBob3Jpei1hZHYteD0iMTYyIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjAwOTsiIGhvcml6LWFkdi14PSIyNjAiIC8+CjxnbHlwaCB1bmljb2RlPSImI3gyMDBhOyIgaG9yaXotYWR2LXg9IjcyIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjAyZjsiIGhvcml6LWFkdi14PSIyNjAiIC8+CjxnbHlwaCB1bmljb2RlPSImI3gyMDVmOyIgaG9yaXotYWR2LXg9IjMyNSIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwYWM7IiBkPSJNNzQ0IDExOThxMjQyIDAgMzU0IC0xODlxNjAgLTEwNCA2NiAtMjA5aC0xODFxMCA0NSAtMTcuNSA4Mi41dC00My41IDYxLjV0LTU4IDQwLjV0LTYwLjUgMjR0LTUxLjUgNy41cS0xOSAwIC00MC41IC01LjV0LTQ5LjUgLTIwLjV0LTUzIC0zOHQtNDkgLTYyLjV0LTM5IC04OS41aDM3OWwtMTAwIC0xMDBoLTMwMHEtNiAtNTAgLTYgLTEwMGg0MDZsLTEwMCAtMTAwaC0zMDBxOSAtNzQgMzMgLTEzMnQ1Mi41IC05MXQ2MS41IC01NC41dDU5IC0yOSB0NDcgLTcuNXEyMiAwIDUwLjUgNy41dDYwLjUgMjQuNXQ1OCA0MXQ0My41IDYxdDE3LjUgODBoMTc0cS0zMCAtMTcxIC0xMjggLTI3OHEtMTA3IC0xMTcgLTI3NCAtMTE3cS0yMDYgMCAtMzI0IDE1OHEtMzYgNDggLTY5IDEzM3QtNDUgMjA0aC0yMTdsMTAwIDEwMGgxMTJxMSA0NyA2IDEwMGgtMjE4bDEwMCAxMDBoMTM0cTIwIDg3IDUxIDE1My41dDYyIDEwMy41cTExNyAxNDEgMjk3IDE0MXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3gyMGJkOyIgZD0iTTQyOCAxMjAwaDM1MHE2NyAwIDEyMCAtMTN0ODYgLTMxdDU3IC00OS41dDM1IC01Ni41dDE3IC02NC41dDYuNSAtNjAuNXQwLjUgLTU3di0xNi41di0xNi41cTAgLTM2IC0wLjUgLTU3dC02LjUgLTYxdC0xNyAtNjV0LTM1IC01N3QtNTcgLTUwLjV0LTg2IC0zMS41dC0xMjAgLTEzaC0xNzhsLTIgLTEwMGgyODhxMTAgMCAxMyAtNnQtMyAtMTRsLTEyMCAtMTYwcS02IC04IC0xOCAtMTR0LTIyIC02aC0xMzh2LTE3NXEwIC0xMSAtNS41IC0xOCB0LTE1LjUgLTdoLTE0OXEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djE3NWgtMjY3cS0xMCAwIC0xMyA2dDMgMTRsMTIwIDE2MHE2IDggMTggMTR0MjIgNmgxMTd2MTAwaC0yNjdxLTEwIDAgLTEzIDZ0MyAxNGwxMjAgMTYwcTYgOCAxOCAxNHQyMiA2aDExN3Y0NzVxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXpNNjAwIDEwMDB2LTMwMGgyMDNxNjQgMCA4Ni41IDMzdDIyLjUgMTE5cTAgODQgLTIyLjUgMTE2dC04Ni41IDMyaC0yMDN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjIxMjsiIGQ9Ik0yNTAgNzAwaDgwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC04MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjMxYjsiIGQ9Ik0xMDAwIDEyMDB2LTE1MHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNTB2LTEwMHEwIC05MSAtNDkuNSAtMTY1LjV0LTEzMC41IC0xMDkuNXE4MSAtMzUgMTMwLjUgLTEwOS41dDQ5LjUgLTE2NS41di0xNTBoNTBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTE1MGgtODAwdjE1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjVoNTB2MTUwcTAgOTEgNDkuNSAxNjUuNXQxMzAuNSAxMDkuNXEtODEgMzUgLTEzMC41IDEwOS41IHQtNDkuNSAxNjUuNXYxMDBoLTUwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxNTBoODAwek00MDAgMTAwMHYtMTAwcTAgLTYwIDMyLjUgLTEwOS41dDg3LjUgLTczLjVxMjggLTEyIDQ0IC0zN3QxNiAtNTV0LTE2IC01NXQtNDQgLTM3cS01NSAtMjQgLTg3LjUgLTczLjV0LTMyLjUgLTEwOS41di0xNTBoNDAwdjE1MHEwIDYwIC0zMi41IDEwOS41dC04Ny41IDczLjVxLTI4IDEyIC00NCAzN3QtMTYgNTV0MTYgNTV0NDQgMzcgcTU1IDI0IDg3LjUgNzMuNXQzMi41IDEwOS41djEwMGgtNDAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDI1ZmM7IiBob3Jpei1hZHYteD0iNTAwIiBkPSJNMCAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDI2MDE7IiBkPSJNNTAzIDEwODlxMTEwIDAgMjAwLjUgLTU5LjV0MTM0LjUgLTE1Ni41cTQ0IDE0IDkwIDE0cTEyMCAwIDIwNSAtODYuNXQ4NSAtMjA2LjVxMCAtMTIxIC04NSAtMjA3LjV0LTIwNSAtODYuNWgtNzUwcS03OSAwIC0xMzUuNSA1N3QtNTYuNSAxMzdxMCA2OSA0Mi41IDEyMi41dDEwOC41IDY3LjVxLTIgMTIgLTIgMzdxMCAxNTMgMTA4IDI2MC41dDI2MCAxMDcuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3gyNmZhOyIgZD0iTTc3NCAxMTkzLjVxMTYgLTkuNSAyMC41IC0yN3QtNS41IC0zMy41bC0xMzYgLTE4N2w0NjcgLTc0NmgzMHEyMCAwIDM1IC0xOC41dDE1IC0zOS41di00MmgtMTIwMHY0MnEwIDIxIDE1IDM5LjV0MzUgMTguNWgzMGw0NjggNzQ2bC0xMzUgMTgzcS0xMCAxNiAtNS41IDM0dDIwLjUgMjh0MzQgNS41dDI4IC0yMC41bDExMSAtMTQ4bDExMiAxNTBxOSAxNiAyNyAyMC41dDM0IC01ek02MDAgMjAwaDM3N2wtMTgyIDExMmwtMTk1IDUzNHYtNjQ2eiAiIC8+CjxnbHlwaCB1bmljb2RlPSImI3gyNzA5OyIgZD0iTTI1IDExMDBoMTE1MHExMCAwIDEyLjUgLTV0LTUuNSAtMTNsLTU2NCAtNTY3cS04IC04IC0xOCAtOHQtMTggOGwtNTY0IDU2N3EtOCA4IC01LjUgMTN0MTIuNSA1ek0xOCA4ODJsMjY0IC0yNjRxOCAtOCA4IC0xOHQtOCAtMThsLTI2NCAtMjY0cS04IC04IC0xMyAtNS41dC01IDEyLjV2NTUwcTAgMTAgNSAxMi41dDEzIC01LjV6TTkxOCA2MThsMjY0IDI2NHE4IDggMTMgNS41dDUgLTEyLjV2LTU1MHEwIC0xMCAtNSAtMTIuNXQtMTMgNS41IGwtMjY0IDI2NHEtOCA4IC04IDE4dDggMTh6TTgxOCA0ODJsMzY0IC0zNjRxOCAtOCA1LjUgLTEzdC0xMi41IC01aC0xMTUwcS0xMCAwIC0xMi41IDV0NS41IDEzbDM2NCAzNjRxOCA4IDE4IDh0MTggLThsMTY0IC0xNjRxOCAtOCAxOCAtOHQxOCA4bDE2NCAxNjRxOCA4IDE4IDh0MTggLTh6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjcwZjsiIGQ9Ik0xMDExIDEyMTBxMTkgMCAzMyAtMTNsMTUzIC0xNTNxMTMgLTE0IDEzIC0zM3QtMTMgLTMzbC05OSAtOTJsLTIxNCAyMTRsOTUgOTZxMTMgMTQgMzIgMTR6TTEwMTMgODAwbC02MTUgLTYxNGwtMjE0IDIxNGw2MTQgNjE0ek0zMTcgOTZsLTMzMyAtMTEybDExMCAzMzV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAwMTsiIGQ9Ik03MDAgNjUwdi01NTBoMjUwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di01MGgtODAwdjUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNWgyNTB2NTUwbC01MDAgNTUwaDEyMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAwMjsiIGQ9Ik0zNjggMTAxN2w2NDUgMTYzcTM5IDE1IDYzIDB0MjQgLTQ5di04MzFxMCAtNTUgLTQxLjUgLTk1LjV0LTExMS41IC02My41cS03OSAtMjUgLTE0NyAtNC41dC04NiA3NXQyNS41IDExMS41dDEyMi41IDgycTcyIDI0IDEzOCA4djUyMWwtNjAwIC0xNTV2LTYwNnEwIC00MiAtNDQgLTkwdC0xMDkgLTY5cS03OSAtMjYgLTE0NyAtNS41dC04NiA3NS41dDI1LjUgMTExLjV0MTIyLjUgODIuNXE3MiAyNCAxMzggN3Y2MzlxMCAzOCAxNC41IDU5IHQ1My41IDM0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMDM7IiBkPSJNNTAwIDExOTFxMTAwIDAgMTkxIC0zOXQxNTYuNSAtMTA0LjV0MTA0LjUgLTE1Ni41dDM5IC0xOTFsLTEgLTJsMSAtNXEwIC0xNDEgLTc4IC0yNjJsMjc1IC0yNzRxMjMgLTI2IDIyLjUgLTQ0LjV0LTIyLjUgLTQyLjVsLTU5IC01OHEtMjYgLTIwIC00Ni41IC0yMHQtMzkuNSAyMGwtMjc1IDI3NHEtMTE5IC03NyAtMjYxIC03N2wtNSAxbC0yIC0xcS0xMDAgMCAtMTkxIDM5dC0xNTYuNSAxMDQuNXQtMTA0LjUgMTU2LjV0LTM5IDE5MSB0MzkgMTkxdDEwNC41IDE1Ni41dDE1Ni41IDEwNC41dDE5MSAzOXpNNTAwIDEwMjJxLTg4IDAgLTE2MiAtNDN0LTExNyAtMTE3dC00MyAtMTYydDQzIC0xNjJ0MTE3IC0xMTd0MTYyIC00M3QxNjIgNDN0MTE3IDExN3Q0MyAxNjJ0LTQzIDE2MnQtMTE3IDExN3QtMTYyIDQzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMDU7IiBkPSJNNjQ5IDk0OXE0OCA2OCAxMDkuNSAxMDR0MTIxLjUgMzguNXQxMTguNSAtMjB0MTAyLjUgLTY0dDcxIC0xMDAuNXQyNyAtMTIzcTAgLTU3IC0zMy41IC0xMTcuNXQtOTQgLTEyNC41dC0xMjYuNSAtMTI3LjV0LTE1MCAtMTUyLjV0LTE0NiAtMTc0cS02MiA4NSAtMTQ1LjUgMTc0dC0xNTAgMTUyLjV0LTEyNi41IDEyNy41dC05My41IDEyNC41dC0zMy41IDExNy41cTAgNjQgMjggMTIzdDczIDEwMC41dDEwNCA2NHQxMTkgMjAgdDEyMC41IC0zOC41dDEwNC41IC0xMDR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAwNjsiIGQ9Ik00MDcgODAwbDEzMSAzNTNxNyAxOSAxNy41IDE5dDE3LjUgLTE5bDEyOSAtMzUzaDQyMXEyMSAwIDI0IC04LjV0LTE0IC0yMC41bC0zNDIgLTI0OWwxMzAgLTQwMXE3IC0yMCAtMC41IC0yNS41dC0yNC41IDYuNWwtMzQzIDI0NmwtMzQyIC0yNDdxLTE3IC0xMiAtMjQuNSAtNi41dC0wLjUgMjUuNWwxMzAgNDAwbC0zNDcgMjUxcS0xNyAxMiAtMTQgMjAuNXQyMyA4LjVoNDI5eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMDc7IiBkPSJNNDA3IDgwMGwxMzEgMzUzcTcgMTkgMTcuNSAxOXQxNy41IC0xOWwxMjkgLTM1M2g0MjFxMjEgMCAyNCAtOC41dC0xNCAtMjAuNWwtMzQyIC0yNDlsMTMwIC00MDFxNyAtMjAgLTAuNSAtMjUuNXQtMjQuNSA2LjVsLTM0MyAyNDZsLTM0MiAtMjQ3cS0xNyAtMTIgLTI0LjUgLTYuNXQtMC41IDI1LjVsMTMwIDQwMGwtMzQ3IDI1MXEtMTcgMTIgLTE0IDIwLjV0MjMgOC41aDQyOXpNNDc3IDcwMGgtMjQwbDE5NyAtMTQybC03NCAtMjI2IGwxOTMgMTM5bDE5NSAtMTQwbC03NCAyMjlsMTkyIDE0MGgtMjM0bC03OCAyMTF6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAwODsiIGQ9Ik02MDAgMTIwMHExMjQgMCAyMTIgLTg4dDg4IC0yMTJ2LTI1MHEwIC00NiAtMzEgLTk4dC02OSAtNTJ2LTc1cTAgLTEwIDYgLTIxLjV0MTUgLTE3LjVsMzU4IC0yMzBxOSAtNSAxNSAtMTYuNXQ2IC0yMS41di05M3EwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTExNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY5M3EwIDEwIDYgMjEuNXQxNSAxNi41bDM1OCAyMzBxOSA2IDE1IDE3LjV0NiAyMS41djc1cS0zOCAwIC02OSA1MiB0LTMxIDk4djI1MHEwIDEyNCA4OCAyMTJ0MjEyIDg4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMDk7IiBkPSJNMjUgMTEwMGgxMTUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtMTA1MHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTExNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYxMDUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6TTEwMCAxMDAwdi0xMDBoMTAwdjEwMGgtMTAwek04NzUgMTAwMGgtNTUwcS0xMCAwIC0xNy41IC03LjV0LTcuNSAtMTcuNXYtMzUwcTAgLTEwIDcuNSAtMTcuNXQxNy41IC03LjVoNTUwIHExMCAwIDE3LjUgNy41dDcuNSAxNy41djM1MHEwIDEwIC03LjUgMTcuNXQtMTcuNSA3LjV6TTEwMDAgMTAwMHYtMTAwaDEwMHYxMDBoLTEwMHpNMTAwIDgwMHYtMTAwaDEwMHYxMDBoLTEwMHpNMTAwMCA4MDB2LTEwMGgxMDB2MTAwaC0xMDB6TTEwMCA2MDB2LTEwMGgxMDB2MTAwaC0xMDB6TTEwMDAgNjAwdi0xMDBoMTAwdjEwMGgtMTAwek04NzUgNTAwaC01NTBxLTEwIDAgLTE3LjUgLTcuNXQtNy41IC0xNy41di0zNTBxMCAtMTAgNy41IC0xNy41IHQxNy41IC03LjVoNTUwcTEwIDAgMTcuNSA3LjV0Ny41IDE3LjV2MzUwcTAgMTAgLTcuNSAxNy41dC0xNy41IDcuNXpNMTAwIDQwMHYtMTAwaDEwMHYxMDBoLTEwMHpNMTAwMCA0MDB2LTEwMGgxMDB2MTAwaC0xMDB6TTEwMCAyMDB2LTEwMGgxMDB2MTAwaC0xMDB6TTEwMDAgMjAwdi0xMDBoMTAwdjEwMGgtMTAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMTA7IiBkPSJNNTAgMTEwMGg0MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTQwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNDAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXY0MDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek02NTAgMTEwMGg0MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTQwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNDAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXY0MDAgcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNTAgNTAwaDQwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNDAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC00MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djQwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTY1MCA1MDBoNDAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di00MDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTQwMCBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djQwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAxMTsiIGQ9Ik01MCAxMTAwaDIwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0yMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTQ1MCAxMTAwaDIwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0yMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMCBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek04NTAgMTEwMGgyMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTIwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMjAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYyMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek01MCA3MDBoMjAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0yMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTIwMCBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTQ1MCA3MDBoMjAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0yMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTIwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MjAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNODUwIDcwMGgyMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTIwMCBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTIwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MjAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNTAgMzAwaDIwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0yMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTQ1MCAzMDBoMjAwIHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0yMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTg1MCAzMDBoMjAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0yMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTIwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MjAwcTAgMjEgMTQuNSAzNS41IHQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAxMjsiIGQ9Ik01MCAxMTAwaDIwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0yMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTQ1MCAxMTAwaDcwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC03MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMCBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek01MCA3MDBoMjAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0yMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTIwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MjAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNDUwIDcwMGg3MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTIwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNzAwIHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MjAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNTAgMzAwaDIwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0yMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTQ1MCAzMDBoNzAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0yMDAgcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC03MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAxMzsiIGQ9Ik00NjUgNDc3bDU3MSA1NzFxOCA4IDE4IDh0MTcgLThsMTc3IC0xNzdxOCAtNyA4IC0xN3QtOCAtMThsLTc4MyAtNzg0cS03IC04IC0xNy41IC04dC0xNy41IDhsLTM4NCAzODRxLTggOCAtOCAxOHQ4IDE3bDE3NyAxNzdxNyA4IDE3IDh0MTggLThsMTcxIC0xNzFxNyAtNyAxOCAtN3QxOCA3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMTQ7IiBkPSJNOTA0IDEwODNsMTc4IC0xNzlxOCAtOCA4IC0xOC41dC04IC0xNy41bC0yNjcgLTI2OGwyNjcgLTI2OHE4IC03IDggLTE3LjV0LTggLTE4LjVsLTE3OCAtMTc4cS04IC04IC0xOC41IC04dC0xNy41IDhsLTI2OCAyNjdsLTI2OCAtMjY3cS03IC04IC0xNy41IC04dC0xOC41IDhsLTE3OCAxNzhxLTggOCAtOCAxOC41dDggMTcuNWwyNjcgMjY4bC0yNjcgMjY4cS04IDcgLTggMTcuNXQ4IDE4LjVsMTc4IDE3OHE4IDggMTguNSA4dDE3LjUgLTggbDI2OCAtMjY3bDI2OCAyNjhxNyA3IDE3LjUgN3QxOC41IC03eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMTU7IiBkPSJNNTA3IDExNzdxOTggMCAxODcuNSAtMzguNXQxNTQuNSAtMTAzLjV0MTAzLjUgLTE1NC41dDM4LjUgLTE4Ny41cTAgLTE0MSAtNzggLTI2MmwzMDAgLTI5OXE4IC04IDggLTE4LjV0LTggLTE4LjVsLTEwOSAtMTA4cS03IC04IC0xNy41IC04dC0xOC41IDhsLTMwMCAyOTlxLTExOSAtNzcgLTI2MSAtNzdxLTk4IDAgLTE4OCAzOC41dC0xNTQuNSAxMDN0LTEwMyAxNTQuNXQtMzguNSAxODh0MzguNSAxODcuNXQxMDMgMTU0LjUgdDE1NC41IDEwMy41dDE4OCAzOC41ek01MDYuNSAxMDIzcS04OS41IDAgLTE2NS41IC00NHQtMTIwIC0xMjAuNXQtNDQgLTE2NnQ0NCAtMTY1LjV0MTIwIC0xMjB0MTY1LjUgLTQ0dDE2NiA0NHQxMjAuNSAxMjB0NDQgMTY1LjV0LTQ0IDE2NnQtMTIwLjUgMTIwLjV0LTE2NiA0NHpNNDI1IDkwMGgxNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di03NWg3NXExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTE1MHEwIC0xMCAtNy41IC0xNy41IHQtMTcuNSAtNy41aC03NXYtNzVxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0xNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY3NWgtNzVxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYxNTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNWg3NXY3NXEwIDEwIDcuNSAxNy41dDE3LjUgNy41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMTY7IiBkPSJNNTA3IDExNzdxOTggMCAxODcuNSAtMzguNXQxNTQuNSAtMTAzLjV0MTAzLjUgLTE1NC41dDM4LjUgLTE4Ny41cTAgLTE0MSAtNzggLTI2MmwzMDAgLTI5OXE4IC04IDggLTE4LjV0LTggLTE4LjVsLTEwOSAtMTA4cS03IC04IC0xNy41IC04dC0xOC41IDhsLTMwMCAyOTlxLTExOSAtNzcgLTI2MSAtNzdxLTk4IDAgLTE4OCAzOC41dC0xNTQuNSAxMDN0LTEwMyAxNTQuNXQtMzguNSAxODh0MzguNSAxODcuNXQxMDMgMTU0LjUgdDE1NC41IDEwMy41dDE4OCAzOC41ek01MDYuNSAxMDIzcS04OS41IDAgLTE2NS41IC00NHQtMTIwIC0xMjAuNXQtNDQgLTE2NnQ0NCAtMTY1LjV0MTIwIC0xMjB0MTY1LjUgLTQ0dDE2NiA0NHQxMjAuNSAxMjB0NDQgMTY1LjV0LTQ0IDE2NnQtMTIwLjUgMTIwLjV0LTE2NiA0NHpNMzI1IDgwMGgzNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di0xNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0zNTBxLTEwIDAgLTE3LjUgNy41IHQtNy41IDE3LjV2MTUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAxNzsiIGQ9Ik01NTAgMTIwMGgxMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTQwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXY0MDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek04MDAgOTc1djE2NnExNjcgLTYyIDI3MiAtMjA5LjV0MTA1IC0zMzEuNXEwIC0xMTcgLTQ1LjUgLTIyNHQtMTIzIC0xODQuNXQtMTg0LjUgLTEyM3QtMjI0IC00NS41dC0yMjQgNDUuNSB0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNHEwIDE4NCAxMDUgMzMxLjV0MjcyIDIwOS41di0xNjZxLTEwMyAtNTUgLTE2NSAtMTU1dC02MiAtMjIwcTAgLTExNiA1NyAtMjE0LjV0MTU1LjUgLTE1NS41dDIxNC41IC01N3QyMTQuNSA1N3QxNTUuNSAxNTUuNXQ1NyAyMTQuNXEwIDEyMCAtNjIgMjIwdC0xNjUgMTU1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMTg7IiBkPSJNMTAyNSAxMjAwaDE1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTExNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0xNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYxMTUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6TTcyNSA4MDBoMTUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtNzUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtMTUwcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2NzUwIHEwIDEwIDcuNSAxNy41dDE3LjUgNy41ek00MjUgNTAwaDE1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTQ1MHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTE1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djQ1MHEwIDEwIDcuNSAxNy41dDE3LjUgNy41ek0xMjUgMzAwaDE1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTI1MHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTE1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41IHYyNTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDE5OyIgZD0iTTYwMCAxMTc0cTMzIDAgNzQgLTVsMzggLTE1Mmw1IC0xcTQ5IC0xNCA5NCAtMzlsNSAtMmwxMzQgODBxNjEgLTQ4IDEwNCAtMTA1bC04MCAtMTM0bDMgLTVxMjUgLTQ0IDM5IC05M2wxIC02bDE1MiAtMzhxNSAtNDMgNSAtNzNxMCAtMzQgLTUgLTc0bC0xNTIgLTM4bC0xIC02cS0xNSAtNDkgLTM5IC05M2wtMyAtNWw4MCAtMTM0cS00OCAtNjEgLTEwNCAtMTA1bC0xMzQgODFsLTUgLTNxLTQ0IC0yNSAtOTQgLTM5bC01IC0ybC0zOCAtMTUxIHEtNDMgLTUgLTc0IC01cS0zMyAwIC03NCA1bC0zOCAxNTFsLTUgMnEtNDkgMTQgLTk0IDM5bC01IDNsLTEzNCAtODFxLTYwIDQ4IC0xMDQgMTA1bDgwIDEzNGwtMyA1cS0yNSA0NSAtMzggOTNsLTIgNmwtMTUxIDM4cS02IDQyIC02IDc0cTAgMzMgNiA3M2wxNTEgMzhsMiA2cTEzIDQ4IDM4IDkzbDMgNWwtODAgMTM0cTQ3IDYxIDEwNSAxMDVsMTMzIC04MGw1IDJxNDUgMjUgOTQgMzlsNSAxbDM4IDE1MnE0MyA1IDc0IDV6TTYwMCA4MTUgcS04OSAwIC0xNTIgLTYzdC02MyAtMTUxLjV0NjMgLTE1MS41dDE1MiAtNjN0MTUyIDYzdDYzIDE1MS41dC02MyAxNTEuNXQtMTUyIDYzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMjA7IiBkPSJNNTAwIDEzMDBoMzAwcTQxIDAgNzAuNSAtMjkuNXQyOS41IC03MC41di0xMDBoMjc1cTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtNzVoLTExMDB2NzVxMCAxMCA3LjUgMTcuNXQxNy41IDcuNWgyNzV2MTAwcTAgNDEgMjkuNSA3MC41dDcwLjUgMjkuNXpNNTAwIDEyMDB2LTEwMGgzMDB2MTAwaC0zMDB6TTExMDAgOTAwdi04MDBxMCAtNDEgLTI5LjUgLTcwLjV0LTcwLjUgLTI5LjVoLTcwMHEtNDEgMCAtNzAuNSAyOS41dC0yOS41IDcwLjUgdjgwMGg5MDB6TTMwMCA4MDB2LTcwMGgxMDB2NzAwaC0xMDB6TTUwMCA4MDB2LTcwMGgxMDB2NzAwaC0xMDB6TTcwMCA4MDB2LTcwMGgxMDB2NzAwaC0xMDB6TTkwMCA4MDB2LTcwMGgxMDB2NzAwaC0xMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAyMTsiIGQ9Ik0xOCA2MThsNjIwIDYwOHE4IDcgMTguNSA3dDE3LjUgLTdsNjA4IC02MDhxOCAtOCA1LjUgLTEzdC0xMi41IC01aC0xNzV2LTU3NXEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTI1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djM3NWgtMzAwdi0zNzVxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0yNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY1NzVoLTE3NXEtMTAgMCAtMTIuNSA1dDUuNSAxM3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDIyOyIgZD0iTTYwMCAxMjAwdi00MDBxMCAtNDEgMjkuNSAtNzAuNXQ3MC41IC0yOS41aDMwMHYtNjUwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC04MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djExMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDQ1MHpNMTAwMCA4MDBoLTI1MHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MjUweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMjM7IiBkPSJNNjAwIDExNzdxMTE3IDAgMjI0IC00NS41dDE4NC41IC0xMjN0MTIzIC0xODQuNXQ0NS41IC0yMjR0LTQ1LjUgLTIyNHQtMTIzIC0xODQuNXQtMTg0LjUgLTEyM3QtMjI0IC00NS41dC0yMjQgNDUuNXQtMTg0LjUgMTIzdC0xMjMgMTg0LjV0LTQ1LjUgMjI0dDQ1LjUgMjI0dDEyMyAxODQuNXQxODQuNSAxMjN0MjI0IDQ1LjV6TTYwMCAxMDI3cS0xMTYgMCAtMjE0LjUgLTU3dC0xNTUuNSAtMTU1LjV0LTU3IC0yMTQuNXQ1NyAtMjE0LjUgdDE1NS41IC0xNTUuNXQyMTQuNSAtNTd0MjE0LjUgNTd0MTU1LjUgMTU1LjV0NTcgMjE0LjV0LTU3IDIxNC41dC0xNTUuNSAxNTUuNXQtMjE0LjUgNTd6TTUyNSA5MDBoNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di0yNzVoMTc1cTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0yNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYzNTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDI0OyIgZD0iTTEzMDAgMGgtNTM4bC00MSA0MDBoLTI0MmwtNDEgLTQwMGgtNTM4bDQzMSAxMjAwaDIwOWwtMjEgLTMwMGgxNjJsLTIwIDMwMGgyMDh6TTUxNSA4MDBsLTI3IC0zMDBoMjI0bC0yNyAzMDBoLTE3MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDI1OyIgZD0iTTU1MCAxMjAwaDIwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNDUwaDE5MXEyMCAwIDI1LjUgLTExLjV0LTcuNSAtMjcuNWwtMzI3IC00MDBxLTEzIC0xNiAtMzIgLTE2dC0zMiAxNmwtMzI3IDQwMHEtMTMgMTYgLTcuNSAyNy41dDI1LjUgMTEuNWgxOTF2NDUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNMTEyNSA0MDBoNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di0zNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41IGgtMTA1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djM1MHEwIDEwIDcuNSAxNy41dDE3LjUgNy41aDUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtMTc1aDkwMHYxNzVxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDI2OyIgZD0iTTYwMCAxMTc3cTExNyAwIDIyNCAtNDUuNXQxODQuNSAtMTIzdDEyMyAtMTg0LjV0NDUuNSAtMjI0dC00NS41IC0yMjR0LTEyMyAtMTg0LjV0LTE4NC41IC0xMjN0LTIyNCAtNDUuNXQtMjI0IDQ1LjV0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNHQ0NS41IDIyNHQxMjMgMTg0LjV0MTg0LjUgMTIzdDIyNCA0NS41ek02MDAgMTAyN3EtMTE2IDAgLTIxNC41IC01N3QtMTU1LjUgLTE1NS41dC01NyAtMjE0LjV0NTcgLTIxNC41IHQxNTUuNSAtMTU1LjV0MjE0LjUgLTU3dDIxNC41IDU3dDE1NS41IDE1NS41dDU3IDIxNC41dC01NyAyMTQuNXQtMTU1LjUgMTU1LjV0LTIxNC41IDU3ek01MjUgOTAwaDE1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTI3NWgxMzdxMjEgMCAyNiAtMTEuNXQtOCAtMjcuNWwtMjIzIC0yNzVxLTEzIC0xNiAtMzIgLTE2dC0zMiAxNmwtMjIzIDI3NXEtMTMgMTYgLTggMjcuNXQyNiAxMS41aDEzN3YyNzVxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXogIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAyNzsiIGQ9Ik02MDAgMTE3N3ExMTcgMCAyMjQgLTQ1LjV0MTg0LjUgLTEyM3QxMjMgLTE4NC41dDQ1LjUgLTIyNHQtNDUuNSAtMjI0dC0xMjMgLTE4NC41dC0xODQuNSAtMTIzdC0yMjQgLTQ1LjV0LTIyNCA0NS41dC0xODQuNSAxMjN0LTEyMyAxODQuNXQtNDUuNSAyMjR0NDUuNSAyMjR0MTIzIDE4NC41dDE4NC41IDEyM3QyMjQgNDUuNXpNNjAwIDEwMjdxLTExNiAwIC0yMTQuNSAtNTd0LTE1NS41IC0xNTUuNXQtNTcgLTIxNC41dDU3IC0yMTQuNSB0MTU1LjUgLTE1NS41dDIxNC41IC01N3QyMTQuNSA1N3QxNTUuNSAxNTUuNXQ1NyAyMTQuNXQtNTcgMjE0LjV0LTE1NS41IDE1NS41dC0yMTQuNSA1N3pNNjMyIDkxNGwyMjMgLTI3NXExMyAtMTYgOCAtMjcuNXQtMjYgLTExLjVoLTEzN3YtMjc1cTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtMTUwcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2Mjc1aC0xMzdxLTIxIDAgLTI2IDExLjV0OCAyNy41bDIyMyAyNzVxMTMgMTYgMzIgMTYgdDMyIC0xNnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDI4OyIgZD0iTTIyNSAxMjAwaDc1MHExMCAwIDE5LjUgLTd0MTIuNSAtMTdsMTg2IC02NTJxNyAtMjQgNyAtNDl2LTQyNXEwIC0xMiAtNCAtMjd0LTkgLTE3cS0xMiAtNiAtMzcgLTZoLTExMDBxLTEyIDAgLTI3IDR0LTE3IDhxLTYgMTMgLTYgMzhsMSA0MjVxMCAyNSA3IDQ5bDE4NSA2NTJxMyAxMCAxMi41IDE3dDE5LjUgN3pNODc4IDEwMDBoLTU1NnEtMTAgMCAtMTkgLTd0LTExIC0xOGwtODcgLTQ1MHEtMiAtMTEgNCAtMTh0MTYgLTdoMTUwIHExMCAwIDE5LjUgLTd0MTEuNSAtMTdsMzggLTE1MnEyIC0xMCAxMS41IC0xN3QxOS41IC03aDI1MHExMCAwIDE5LjUgN3QxMS41IDE3bDM4IDE1MnEyIDEwIDExLjUgMTd0MTkuNSA3aDE1MHExMCAwIDE2IDd0NCAxOGwtODcgNDUwcS0yIDExIC0xMSAxOHQtMTkgN3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDI5OyIgZD0iTTYwMCAxMTc3cTExNyAwIDIyNCAtNDUuNXQxODQuNSAtMTIzdDEyMyAtMTg0LjV0NDUuNSAtMjI0dC00NS41IC0yMjR0LTEyMyAtMTg0LjV0LTE4NC41IC0xMjN0LTIyNCAtNDUuNXQtMjI0IDQ1LjV0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNHQ0NS41IDIyNHQxMjMgMTg0LjV0MTg0LjUgMTIzdDIyNCA0NS41ek02MDAgMTAyN3EtMTE2IDAgLTIxNC41IC01N3QtMTU1LjUgLTE1NS41dC01NyAtMjE0LjV0NTcgLTIxNC41IHQxNTUuNSAtMTU1LjV0MjE0LjUgLTU3dDIxNC41IDU3dDE1NS41IDE1NS41dDU3IDIxNC41dC01NyAyMTQuNXQtMTU1LjUgMTU1LjV0LTIxNC41IDU3ek01NDAgODIwbDI1MyAtMTkwcTE3IC0xMiAxNyAtMzB0LTE3IC0zMGwtMjUzIC0xOTBxLTE2IC0xMiAtMjggLTYuNXQtMTIgMjYuNXY0MDBxMCAyMSAxMiAyNi41dDI4IC02LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAzMDsiIGQ9Ik05NDcgMTA2MGwxMzUgMTM1cTcgNyAxMi41IDV0NS41IC0xM3YtMzYycTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtMzYycS0xMSAwIC0xMyA1LjV0NSAxMi41bDEzMyAxMzNxLTEwOSA3NiAtMjM4IDc2cS0xMTYgMCAtMjE0LjUgLTU3dC0xNTUuNSAtMTU1LjV0LTU3IC0yMTQuNXQ1NyAtMjE0LjV0MTU1LjUgLTE1NS41dDIxNC41IC01N3QyMTQuNSA1N3QxNTUuNSAxNTUuNXQ1NyAyMTQuNWgxNTBxMCAtMTE3IC00NS41IC0yMjQgdC0xMjMgLTE4NC41dC0xODQuNSAtMTIzdC0yMjQgLTQ1LjV0LTIyNCA0NS41dC0xODQuNSAxMjN0LTEyMyAxODQuNXQtNDUuNSAyMjR0NDUuNSAyMjR0MTIzIDE4NC41dDE4NC41IDEyM3QyMjQgNDUuNXExOTIgMCAzNDcgLTExN3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDMxOyIgZD0iTTk0NyAxMDYwbDEzNSAxMzVxNyA3IDEyLjUgNXQ1LjUgLTEzdi0zNjFxMCAtMTEgLTcuNSAtMTguNXQtMTguNSAtNy41aC0zNjFxLTExIDAgLTEzIDUuNXQ1IDEyLjVsMTM0IDEzNHEtMTEwIDc1IC0yMzkgNzVxLTExNiAwIC0yMTQuNSAtNTd0LTE1NS41IC0xNTUuNXQtNTcgLTIxNC41aC0xNTBxMCAxMTcgNDUuNSAyMjR0MTIzIDE4NC41dDE4NC41IDEyM3QyMjQgNDUuNXExOTIgMCAzNDcgLTExN3pNMTAyNyA2MDBoMTUwIHEwIC0xMTcgLTQ1LjUgLTIyNHQtMTIzIC0xODQuNXQtMTg0LjUgLTEyM3QtMjI0IC00NS41cS0xOTIgMCAtMzQ4IDExOGwtMTM0IC0xMzRxLTcgLTggLTEyLjUgLTUuNXQtNS41IDEyLjV2MzYwcTAgMTEgNy41IDE4LjV0MTguNSA3LjVoMzYwcTEwIDAgMTIuNSAtNS41dC01LjUgLTEyLjVsLTEzMyAtMTMzcTExMCAtNzYgMjQwIC03NnExMTYgMCAyMTQuNSA1N3QxNTUuNSAxNTUuNXQ1NyAyMTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDMyOyIgZD0iTTEyNSAxMjAwaDEwNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di0xMTUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtMTA1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djExNTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXpNMTA3NSAxMDAwaC04NTBxLTEwIDAgLTE3LjUgLTcuNXQtNy41IC0xNy41di04NTBxMCAtMTAgNy41IC0xNy41dDE3LjUgLTcuNWg4NTBxMTAgMCAxNy41IDcuNXQ3LjUgMTcuNXY4NTAgcTAgMTAgLTcuNSAxNy41dC0xNy41IDcuNXpNMzI1IDkwMGg1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY1MHEwIDEwIDcuNSAxNy41dDE3LjUgNy41ek01MjUgOTAwaDQ1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtNDUwcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2NTAgcTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6TTMyNSA3MDBoNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di01MHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTUwcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2NTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXpNNTI1IDcwMGg0NTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di01MHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTQ1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djUwIHEwIDEwIDcuNSAxNy41dDE3LjUgNy41ek0zMjUgNTAwaDUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC01MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6TTUyNSA1MDBoNDUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC00NTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY1MCBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXpNMzI1IDMwMGg1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY1MHEwIDEwIDcuNSAxNy41dDE3LjUgNy41ek01MjUgMzAwaDQ1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtNDUwcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2NTAgcTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAzMzsiIGQ9Ik05MDAgODAwdjIwMHEwIDgzIC01OC41IDE0MS41dC0xNDEuNSA1OC41aC0zMDBxLTgyIDAgLTE0MSAtNTl0LTU5IC0xNDF2LTIwMGgtMTAwcS00MSAwIC03MC41IC0yOS41dC0yOS41IC03MC41di02MDBxMCAtNDEgMjkuNSAtNzAuNXQ3MC41IC0yOS41aDkwMHE0MSAwIDcwLjUgMjkuNXQyOS41IDcwLjV2NjAwcTAgNDEgLTI5LjUgNzAuNXQtNzAuNSAyOS41aC0xMDB6TTQwMCA4MDB2MTUwcTAgMjEgMTUgMzUuNXQzNSAxNC41aDIwMCBxMjAgMCAzNSAtMTQuNXQxNSAtMzUuNXYtMTUwaC0zMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAzNDsiIGQ9Ik0xMjUgMTEwMGg1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTEwNzVoLTEwMHYxMDc1cTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6TTEwNzUgMTA1MnE0IDAgOSAtMnExNiAtNiAxNiAtMjN2LTQyMXEwIC02IC0zIC0xMnEtMzMgLTU5IC02Ni41IC05OXQtNjUuNSAtNTh0LTU2LjUgLTI0LjV0LTUyLjUgLTYuNXEtMjYgMCAtNTcuNSA2LjV0LTUyLjUgMTMuNXQtNjAgMjFxLTQxIDE1IC02MyAyMi41dC01Ny41IDE1dC02NS41IDcuNSBxLTg1IDAgLTE2MCAtNTdxLTcgLTUgLTE1IC01cS02IDAgLTExIDNxLTE0IDcgLTE0IDIydjQzOHEyMiA1NSA4MiA5OC41dDExOSA0Ni41cTIzIDIgNDMgMC41dDQzIC03dDMyLjUgLTguNXQzOCAtMTN0MzIuNSAtMTFxNDEgLTE0IDYzLjUgLTIxdDU3IC0xNHQ2My41IC03cTEwMyAwIDE4MyA4N3E3IDggMTggOHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDM1OyIgZD0iTTYwMCAxMTc1cTExNiAwIDIyNyAtNDkuNXQxOTIuNSAtMTMxdDEzMSAtMTkyLjV0NDkuNSAtMjI3di0zMDBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC01MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djMwMHEwIDEyNyAtNzAuNSAyMzEuNXQtMTg0LjUgMTYxLjV0LTI0NSA1N3QtMjQ1IC01N3QtMTg0LjUgLTE2MS41dC03MC41IC0yMzEuNXYtMzAwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtNTAgcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2MzAwcTAgMTE2IDQ5LjUgMjI3dDEzMSAxOTIuNXQxOTIuNSAxMzF0MjI3IDQ5LjV6TTIyMCA1MDBoMTYwcTggMCAxNCAtNnQ2IC0xNHYtNDYwcTAgLTggLTYgLTE0dC0xNCAtNmgtMTYwcS04IDAgLTE0IDZ0LTYgMTR2NDYwcTAgOCA2IDE0dDE0IDZ6TTgyMCA1MDBoMTYwcTggMCAxNCAtNnQ2IC0xNHYtNDYwcTAgLTggLTYgLTE0dC0xNCAtNmgtMTYwcS04IDAgLTE0IDZ0LTYgMTR2NDYwIHEwIDggNiAxNHQxNCA2eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMzY7IiBkPSJNMzIxIDgxNGwyNTggMTcycTkgNiAxNSAyLjV0NiAtMTMuNXYtNzUwcTAgLTEwIC02IC0xMy41dC0xNSAyLjVsLTI1OCAxNzJxLTIxIDE0IC00NiAxNGgtMjUwcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2MzUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjVoMjUwcTI1IDAgNDYgMTR6TTkwMCA2NjhsMTIwIDEyMHE3IDcgMTcgN3QxNyAtN2wzNCAtMzRxNyAtNyA3IC0xN3QtNyAtMTdsLTEyMCAtMTIwbDEyMCAtMTIwcTcgLTcgNyAtMTcgdC03IC0xN2wtMzQgLTM0cS03IC03IC0xNyAtN3QtMTcgN2wtMTIwIDExOWwtMTIwIC0xMTlxLTcgLTcgLTE3IC03dC0xNyA3bC0zNCAzNHEtNyA3IC03IDE3dDcgMTdsMTE5IDEyMGwtMTE5IDEyMHEtNyA3IC03IDE3dDcgMTdsMzQgMzRxNyA4IDE3IDh0MTcgLTh6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTAzNzsiIGQ9Ik0zMjEgODE0bDI1OCAxNzJxOSA2IDE1IDIuNXQ2IC0xMy41di03NTBxMCAtMTAgLTYgLTEzLjV0LTE1IDIuNWwtMjU4IDE3MnEtMjEgMTQgLTQ2IDE0aC0yNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYzNTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNWgyNTBxMjUgMCA0NiAxNHpNNzY2IDkwMGg0cTEwIC0xIDE2IC0xMHE5NiAtMTI5IDk2IC0yOTBxMCAtMTU0IC05MCAtMjgxcS02IC05IC0xNyAtMTBsLTMgLTFxLTkgMCAtMTYgNiBsLTI5IDIzcS03IDcgLTguNSAxNi41dDQuNSAxNy41cTcyIDEwMyA3MiAyMjlxMCAxMzIgLTc4IDIzOHEtNiA4IC00LjUgMTh0OS41IDE3bDI5IDIycTcgNSAxNSA1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwMzg7IiBkPSJNOTY3IDEwMDRoM3ExMSAtMSAxNyAtMTBxMTM1IC0xNzkgMTM1IC0zOTZxMCAtMTA1IC0zNCAtMjA2LjV0LTk4IC0xODUuNXEtNyAtOSAtMTcgLTEwaC0zcS05IDAgLTE2IDZsLTQyIDM0cS04IDYgLTkgMTZ0NSAxOHExMTEgMTUwIDExMSAzMjhxMCA5MCAtMjkuNSAxNzZ0LTg0LjUgMTU3cS02IDkgLTUgMTl0MTAgMTZsNDIgMzNxNyA1IDE1IDV6TTMyMSA4MTRsMjU4IDE3MnE5IDYgMTUgMi41dDYgLTEzLjV2LTc1MHEwIC0xMCAtNiAtMTMuNSB0LTE1IDIuNWwtMjU4IDE3MnEtMjEgMTQgLTQ2IDE0aC0yNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYzNTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNWgyNTBxMjUgMCA0NiAxNHpNNzY2IDkwMGg0cTEwIC0xIDE2IC0xMHE5NiAtMTI5IDk2IC0yOTBxMCAtMTU0IC05MCAtMjgxcS02IC05IC0xNyAtMTBsLTMgLTFxLTkgMCAtMTYgNmwtMjkgMjNxLTcgNyAtOC41IDE2LjV0NC41IDE3LjVxNzIgMTAzIDcyIDIyOXEwIDEzMiAtNzggMjM4IHEtNiA4IC00LjUgMTguNXQ5LjUgMTYuNWwyOSAyMnE3IDUgMTUgNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDM5OyIgZD0iTTUwMCA5MDBoMTAwdi0xMDBoLTEwMHYtMTAwaC00MDB2LTEwMGgtMTAwdjYwMGg1MDB2LTMwMHpNMTIwMCA3MDBoLTIwMHYtMTAwaDIwMHYtMjAwaC0zMDB2MzAwaC0yMDB2MzAwaC0xMDB2MjAwaDYwMHYtNTAwek0xMDAgMTEwMHYtMzAwaDMwMHYzMDBoLTMwMHpNODAwIDExMDB2LTMwMGgzMDB2MzAwaC0zMDB6TTMwMCA5MDBoLTEwMHYxMDBoMTAwdi0xMDB6TTEwMDAgOTAwaC0xMDB2MTAwaDEwMHYtMTAwek0zMDAgNTAwaDIwMHYtNTAwIGgtNTAwdjUwMGgyMDB2MTAwaDEwMHYtMTAwek04MDAgMzAwaDIwMHYtMTAwaC0xMDB2LTEwMGgtMjAwdjEwMGgtMTAwdjEwMGgxMDB2MjAwaC0yMDB2MTAwaDMwMHYtMzAwek0xMDAgNDAwdi0zMDBoMzAwdjMwMGgtMzAwek0zMDAgMjAwaC0xMDB2MTAwaDEwMHYtMTAwek0xMjAwIDIwMGgtMTAwdjEwMGgxMDB2LTEwMHpNNzAwIDBoLTEwMHYxMDBoMTAwdi0xMDB6TTEyMDAgMGgtMzAwdjEwMGgzMDB2LTEwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDQwOyIgZD0iTTEwMCAyMDBoLTEwMHYxMDAwaDEwMHYtMTAwMHpNMzAwIDIwMGgtMTAwdjEwMDBoMTAwdi0xMDAwek03MDAgMjAwaC0yMDB2MTAwMGgyMDB2LTEwMDB6TTkwMCAyMDBoLTEwMHYxMDAwaDEwMHYtMTAwMHpNMTIwMCAyMDBoLTIwMHYxMDAwaDIwMHYtMTAwMHpNNDAwIDBoLTMwMHYxMDBoMzAwdi0xMDB6TTYwMCAwaC0xMDB2OTFoMTAwdi05MXpNODAwIDBoLTEwMHY5MWgxMDB2LTkxek0xMTAwIDBoLTIwMHY5MWgyMDB2LTkxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwNDE7IiBkPSJNNTAwIDEyMDBsNjgyIC02ODJxOCAtOCA4IC0xOHQtOCAtMThsLTQ2NCAtNDY0cS04IC04IC0xOCAtOHQtMTggOGwtNjgyIDY4MmwxIDQ3NXEwIDEwIDcuNSAxNy41dDE3LjUgNy41aDQ3NHpNMzE5LjUgMTAyNC41cS0yOS41IDI5LjUgLTcxIDI5LjV0LTcxIC0yOS41dC0yOS41IC03MS41dDI5LjUgLTcxLjV0NzEgLTI5LjV0NzEgMjkuNXQyOS41IDcxLjV0LTI5LjUgNzEuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDQyOyIgZD0iTTUwMCAxMjAwbDY4MiAtNjgycTggLTggOCAtMTh0LTggLTE4bC00NjQgLTQ2NHEtOCAtOCAtMTggLTh0LTE4IDhsLTY4MiA2ODJsMSA0NzVxMCAxMCA3LjUgMTcuNXQxNy41IDcuNWg0NzR6TTgwMCAxMjAwbDY4MiAtNjgycTggLTggOCAtMTh0LTggLTE4bC00NjQgLTQ2NHEtOCAtOCAtMTggLTh0LTE4IDhsLTU2IDU2bDQyNCA0MjZsLTcwMCA3MDBoMTUwek0zMTkuNSAxMDI0LjVxLTI5LjUgMjkuNSAtNzEgMjkuNXQtNzEgLTI5LjUgdC0yOS41IC03MS41dDI5LjUgLTcxLjV0NzEgLTI5LjV0NzEgMjkuNXQyOS41IDcxLjV0LTI5LjUgNzEuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDQzOyIgZD0iTTMwMCAxMjAwaDgyNXE3NSAwIDc1IC03NXYtOTAwcTAgLTI1IC0xOCAtNDNsLTY0IC02NHEtOCAtOCAtMTMgLTUuNXQtNSAxMi41djk1MHEwIDEwIC03LjUgMTcuNXQtMTcuNSA3LjVoLTcwMHEtMjUgMCAtNDMgLTE4bC02NCAtNjRxLTggLTggLTUuNSAtMTN0MTIuNSAtNWg3MDBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di05NTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC04NTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY5NzUgcTAgMjUgMTggNDNsMTM5IDEzOXExOCAxOCA0MyAxOHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDQ0OyIgZD0iTTI1MCAxMjAwaDgwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTE1MGwtNDUwIDQ0NGwtNDUwIC00NDV2MTE1MXEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA0NTsiIGQ9Ik04MjIgMTIwMGgtNDQ0cS0xMSAwIC0xOSAtNy41dC05IC0xNy41bC03OCAtMzAxcS03IC0yNCA3IC00NWw1NyAtMTA4cTYgLTkgMTcuNSAtMTV0MjEuNSAtNmg0NTBxMTAgMCAyMS41IDZ0MTcuNSAxNWw2MiAxMDhxMTQgMjEgNyA0NWwtODMgMzAxcS0xIDEwIC05IDE3LjV0LTE5IDcuNXpNMTE3NSA4MDBoLTE1MHEtMTAgMCAtMjEgLTYuNXQtMTUgLTE1LjVsLTc4IC0xNTZxLTQgLTkgLTE1IC0xNS41dC0yMSAtNi41aC01NTAgcS0xMCAwIC0yMSA2LjV0LTE1IDE1LjVsLTc4IDE1NnEtNCA5IC0xNSAxNS41dC0yMSA2LjVoLTE1MHEtMTAgMCAtMTcuNSAtNy41dC03LjUgLTE3LjV2LTY1MHEwIC0xMCA3LjUgLTE3LjV0MTcuNSAtNy41aDE1MHExMCAwIDE3LjUgNy41dDcuNSAxNy41djE1MHEwIDEwIDcuNSAxNy41dDE3LjUgNy41aDc1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTE1MHEwIC0xMCA3LjUgLTE3LjV0MTcuNSAtNy41aDE1MHExMCAwIDE3LjUgNy41IHQ3LjUgMTcuNXY2NTBxMCAxMCAtNy41IDE3LjV0LTE3LjUgNy41ek04NTAgMjAwaC01MDBxLTEwIDAgLTE5LjUgLTd0LTExLjUgLTE3bC0zOCAtMTUycS0yIC0xMCAzLjUgLTE3dDE1LjUgLTdoNjAwcTEwIDAgMTUuNSA3dDMuNSAxN2wtMzggMTUycS0yIDEwIC0xMS41IDE3dC0xOS41IDd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA0NjsiIGQ9Ik01MDAgMTEwMGgyMDBxNTYgMCAxMDIuNSAtMjAuNXQ3Mi41IC01MHQ0NCAtNTl0MjUgLTUwLjVsNiAtMjBoMTUwcTQxIDAgNzAuNSAtMjkuNXQyOS41IC03MC41di02MDBxMCAtNDEgLTI5LjUgLTcwLjV0LTcwLjUgLTI5LjVoLTEwMDBxLTQxIDAgLTcwLjUgMjkuNXQtMjkuNSA3MC41djYwMHEwIDQxIDI5LjUgNzAuNXQ3MC41IDI5LjVoMTUwcTIgOCA2LjUgMjEuNXQyNCA0OHQ0NSA2MXQ3MiA0OHQxMDIuNSAyMS41ek05MDAgODAwdi0xMDAgaDEwMHYxMDBoLTEwMHpNNjAwIDczMHEtOTUgMCAtMTYyLjUgLTY3LjV0LTY3LjUgLTE2Mi41dDY3LjUgLTE2Mi41dDE2Mi41IC02Ny41dDE2Mi41IDY3LjV0NjcuNSAxNjIuNXQtNjcuNSAxNjIuNXQtMTYyLjUgNjcuNXpNNjAwIDYwM3E0MyAwIDczIC0zMHQzMCAtNzN0LTMwIC03M3QtNzMgLTMwdC03MyAzMHQtMzAgNzN0MzAgNzN0NzMgMzB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA0NzsiIGQ9Ik02ODEgMTE5OWwzODUgLTk5OHEyMCAtNTAgNjAgLTkycTE4IC0xOSAzNi41IC0yOS41dDI3LjUgLTExLjVsMTAgLTJ2LTY2aC00MTd2NjZxNTMgMCA3NSA0My41dDUgODguNWwtODIgMjIyaC0zOTFxLTU4IC0xNDUgLTkyIC0yMzRxLTExIC0zNCAtNi41IC01N3QyNS41IC0zN3Q0NiAtMjB0NTUgLTZ2LTY2aC0zNjV2NjZxNTYgMjQgODQgNTJxMTIgMTIgMjUgMzAuNXQyMCAzMS41bDcgMTNsMzk5IDEwMDZoOTN6TTQxNiA1MjFoMzQwIGwtMTYyIDQ1N3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDQ4OyIgZD0iTTc1MyA2NDFxNSAtMSAxNC41IC00LjV0MzYgLTE1LjV0NTAuNSAtMjYuNXQ1My41IC00MHQ1MC41IC01NC41dDM1LjUgLTcwdDE0LjUgLTg3cTAgLTY3IC0yNy41IC0xMjUuNXQtNzEuNSAtOTcuNXQtOTguNSAtNjYuNXQtMTA4LjUgLTQwLjV0LTEwMiAtMTNoLTUwMHY4OXE0MSA3IDcwLjUgMzIuNXQyOS41IDY1LjV2ODI3cTAgMjQgLTAuNSAzNHQtMy41IDI0dC04LjUgMTkuNXQtMTcgMTMuNXQtMjggMTIuNXQtNDIuNSAxMS41djcxIGw0NzEgLTFxNTcgMCAxMTUuNSAtMjAuNXQxMDggLTU3dDgwLjUgLTk0dDMxIC0xMjQuNXEwIC01MSAtMTUuNSAtOTYuNXQtMzggLTc0LjV0LTQ1IC01MC41dC0zOC41IC0zMC41ek00MDAgNzAwaDEzOXE3OCAwIDEzMC41IDQ4LjV0NTIuNSAxMjIuNXEwIDQxIC04LjUgNzAuNXQtMjkuNSA1NS41dC02Mi41IDM5LjV0LTEwMy41IDEzLjVoLTExOHYtMzUwek00MDAgMjAwaDIxNnE4MCAwIDEyMSA1MC41dDQxIDEzMC41cTAgOTAgLTYyLjUgMTU0LjUgdC0xNTYuNSA2NC41aC0xNTl2LTQwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDQ5OyIgZD0iTTg3NyAxMjAwbDIgLTU3cS04MyAtMTkgLTExNiAtNDUuNXQtNDAgLTY2LjVsLTEzMiAtODM5cS05IC00OSAxMyAtNjl0OTYgLTI2di05N2gtNTAwdjk3cTE4NiAxNiAyMDAgOThsMTczIDgzMnEzIDE3IDMgMzB0LTEuNSAyMi41dC05IDE3LjV0LTEzLjUgMTIuNXQtMjEuNSAxMHQtMjYgOC41dC0zMy41IDEwcS0xMyAzIC0xOSA1djU3aDQyNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDUwOyIgZD0iTTEzMDAgOTAwaC01MHEwIDIxIC00IDM3dC05LjUgMjYuNXQtMTggMTcuNXQtMjIgMTF0LTI4LjUgNS41dC0zMSAydC0zNyAwLjVoLTIwMHYtODUwcTAgLTIyIDI1IC0zNC41dDUwIC0xMy41bDI1IC0ydi0xMDBoLTQwMHYxMDBxNCAwIDExIDAuNXQyNCAzdDMwIDd0MjQgMTV0MTEgMjQuNXY4NTBoLTIwMHEtMjUgMCAtMzcgLTAuNXQtMzEgLTJ0LTI4LjUgLTUuNXQtMjIgLTExdC0xOCAtMTcuNXQtOS41IC0yNi41dC00IC0zN2gtNTB2MzAwIGgxMDAwdi0zMDB6TTE3NSAxMDAwaC03NXYtODAwaDc1bC0xMjUgLTE2N2wtMTI1IDE2N2g3NXY4MDBoLTc1bDEyNSAxNjd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA1MTsiIGQ9Ik0xMTAwIDkwMGgtNTBxMCAyMSAtNCAzN3QtOS41IDI2LjV0LTE4IDE3LjV0LTIyIDExdC0yOC41IDUuNXQtMzEgMnQtMzcgMC41aC0yMDB2LTY1MHEwIC0yMiAyNSAtMzQuNXQ1MCAtMTMuNWwyNSAtMnYtMTAwaC00MDB2MTAwcTQgMCAxMSAwLjV0MjQgM3QzMCA3dDI0IDE1dDExIDI0LjV2NjUwaC0yMDBxLTI1IDAgLTM3IC0wLjV0LTMxIC0ydC0yOC41IC01LjV0LTIyIC0xMXQtMTggLTE3LjV0LTkuNSAtMjYuNXQtNCAtMzdoLTUwdjMwMCBoMTAwMHYtMzAwek0xMTY3IDUwbC0xNjcgLTEyNXY3NWgtODAwdi03NWwtMTY3IDEyNWwxNjcgMTI1di03NWg4MDB2NzV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA1MjsiIGQ9Ik01MCAxMTAwaDYwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC02MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTUwIDgwMGgxMDAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTEwMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMCBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek01MCA1MDBoODAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTgwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNTAgMjAwaDExMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTEwMCBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA1MzsiIGQ9Ik0yNTAgMTEwMGg3MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNzAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek01MCA4MDBoMTEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDAgcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNMjUwIDUwMGg3MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNzAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek01MCAyMDBoMTEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMTAwIHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDU0OyIgZD0iTTUwMCA5NTB2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNWg2MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNjAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXpNMTAwIDY1MHYxMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDEwMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTAwMCBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41ek0zMDAgMzUwdjEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjVoODAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTgwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV6TTAgNTB2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNWgxMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xMDAgcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDU1OyIgZD0iTTUwIDExMDBoMTEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek01MCA4MDBoMTEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDAgcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNTAgNTAwaDExMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTEwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNTAgMjAwaDExMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTEwMCBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA1NjsiIGQ9Ik01MCAxMTAwaDEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTM1MCAxMTAwaDgwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC04MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMCBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek01MCA4MDBoMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTEwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNMzUwIDgwMGg4MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtODAwIHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNTAgNTAwaDEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTM1MCA1MDBoODAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xMDAgcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC04MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTUwIDIwMGgxMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek0zNTAgMjAwaDgwMCBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtODAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwNTc7IiBkPSJNNDAwIDBoLTEwMHYxMTAwaDEwMHYtMTEwMHpNNTUwIDExMDBoMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTEwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNTUwIDgwMGg1MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNTAwIHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNMjY3IDU1MGwtMTY3IC0xMjV2NzVoLTIwMHYxMDBoMjAwdjc1ek01NTAgNTAwaDMwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0zMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTU1MCAyMDBoNjAwIHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC02MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA1ODsiIGQ9Ik01MCAxMTAwaDEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTkwMCAwaC0xMDB2MTEwMGgxMDB2LTExMDB6TTUwIDgwMGg1MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNTAwIHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNMTEwMCA2MDBoMjAwdi0xMDBoLTIwMHYtNzVsLTE2NyAxMjVsMTY3IDEyNXYtNzV6TTUwIDUwMGgzMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMzAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek01MCAyMDBoNjAwIHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC02MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA1OTsiIGQ9Ik03NSAxMDAwaDc1MHEzMSAwIDUzIC0yMnQyMiAtNTN2LTY1MHEwIC0zMSAtMjIgLTUzdC01MyAtMjJoLTc1MHEtMzEgMCAtNTMgMjJ0LTIyIDUzdjY1MHEwIDMxIDIyIDUzdDUzIDIyek0xMjAwIDMwMGwtMzAwIDMwMGwzMDAgMzAwdi02MDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA2MDsiIGQ9Ik00NCAxMTAwaDExMTJxMTggMCAzMSAtMTN0MTMgLTMxdi0xMDEycTAgLTE4IC0xMyAtMzF0LTMxIC0xM2gtMTExMnEtMTggMCAtMzEgMTN0LTEzIDMxdjEwMTJxMCAxOCAxMyAzMXQzMSAxM3pNMTAwIDEwMDB2LTczN2wyNDcgMTgybDI5OCAtMTMxbC03NCAxNTZsMjkzIDMxOGwyMzYgLTI4OHY1MDBoLTEwMDB6TTM0MiA4ODRxNTYgMCA5NSAtMzl0MzkgLTk0LjV0LTM5IC05NXQtOTUgLTM5LjV0LTk1IDM5LjV0LTM5IDk1dDM5IDk0LjUgdDk1IDM5eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwNjI7IiBkPSJNNjQ4IDExNjlxMTE3IDAgMjE2IC02MHQxNTYuNSAtMTYxdDU3LjUgLTIxOHEwIC0xMTUgLTcwIC0yNThxLTY5IC0xMDkgLTE1OCAtMjI1LjV0LTE0MyAtMTc5LjVsLTU0IC02MnEtOSA4IC0yNS41IDI0LjV0LTYzLjUgNjcuNXQtOTEgMTAzdC05OC41IDEyOHQtOTUuNSAxNDhxLTYwIDEzMiAtNjAgMjQ5cTAgODggMzQgMTY5LjV0OTEuNSAxNDJ0MTM3IDk2LjV0MTY2LjUgMzZ6TTY1Mi41IDk3NHEtOTEuNSAwIC0xNTYuNSAtNjUgdC02NSAtMTU3dDY1IC0xNTYuNXQxNTYuNSAtNjQuNXQxNTYuNSA2NC41dDY1IDE1Ni41dC02NSAxNTd0LTE1Ni41IDY1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwNjM7IiBkPSJNNjAwIDExNzdxMTE3IDAgMjI0IC00NS41dDE4NC41IC0xMjN0MTIzIC0xODQuNXQ0NS41IC0yMjR0LTQ1LjUgLTIyNHQtMTIzIC0xODQuNXQtMTg0LjUgLTEyM3QtMjI0IC00NS41dC0yMjQgNDUuNXQtMTg0LjUgMTIzdC0xMjMgMTg0LjV0LTQ1LjUgMjI0dDQ1LjUgMjI0dDEyMyAxODQuNXQxODQuNSAxMjN0MjI0IDQ1LjV6TTYwMCAxNzN2ODU0cS0xMTYgMCAtMjE0LjUgLTU3dC0xNTUuNSAtMTU1LjV0LTU3IC0yMTQuNXQ1NyAtMjE0LjUgdDE1NS41IC0xNTUuNXQyMTQuNSAtNTd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA2NDsiIGQ9Ik01NTQgMTI5NXEyMSAtNzIgNTcuNSAtMTQzLjV0NzYgLTEzMHQ4MyAtMTE4dDgyLjUgLTExN3Q3MCAtMTE2dDQ5LjUgLTEyNnQxOC41IC0xMzYuNXEwIC03MSAtMjUuNSAtMTM1dC02OC41IC0xMTF0LTk5IC04MnQtMTE4LjUgLTU0dC0xMjUuNSAtMjNxLTg0IDUgLTE2MS41IDM0dC0xMzkuNSA3OC41dC05OSAxMjV0LTM3IDE2NC41cTAgNjkgMTggMTM2LjV0NDkuNSAxMjYuNXQ2OS41IDExNi41dDgxLjUgMTE3LjV0ODMuNSAxMTkgdDc2LjUgMTMxdDU4LjUgMTQzek0zNDQgNzEwcS0yMyAtMzMgLTQzLjUgLTcwLjV0LTQwLjUgLTEwMi41dC0xNyAtMTIzcTEgLTM3IDE0LjUgLTY5LjV0MzAgLTUydDQxIC0zN3QzOC41IC0yNC41dDMzIC0xNXEyMSAtNyAzMiAtMXQxMyAyMmw2IDM0cTIgMTAgLTIuNSAyMnQtMTMuNSAxOXEtNSA0IC0xNCAxMnQtMjkuNSA0MC41dC0zMi41IDczLjVxLTI2IDg5IDYgMjcxcTIgMTEgLTYgMTFxLTggMSAtMTUgLTEweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwNjU7IiBkPSJNMTAwMCAxMDEzbDEwOCAxMTVxMiAxIDUgMnQxMyAydDIwLjUgLTF0MjUgLTkuNXQyOC41IC0yMS41cTIyIC0yMiAyNyAtNDN0MCAtMzJsLTYgLTEwbC0xMDggLTExNXpNMzUwIDExMDBoNDAwcTUwIDAgMTA1IC0xM2wtMTg3IC0xODdoLTM2OHEtNDEgMCAtNzAuNSAtMjkuNXQtMjkuNSAtNzAuNXYtNTAwcTAgLTQxIDI5LjUgLTcwLjV0NzAuNSAtMjkuNWg1MDBxNDEgMCA3MC41IDI5LjV0MjkuNSA3MC41djE4MmwyMDAgMjAwdi0zMzIgcTAgLTE2NSAtOTMuNSAtMjU3LjV0LTI1Ni41IC05Mi41aC00MDBxLTE2NSAwIC0yNTcuNSA5Mi41dC05Mi41IDI1Ny41djQwMHEwIDE2NSA5Mi41IDI1Ny41dDI1Ny41IDkyLjV6TTEwMDkgODAzbC0zNjIgLTM2MmwtMTYxIC01MGw1NSAxNzBsMzU1IDM1NXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDY2OyIgZD0iTTM1MCAxMTAwaDM2MXEtMTY0IC0xNDYgLTIxNiAtMjAwaC0xOTVxLTQxIDAgLTcwLjUgLTI5LjV0LTI5LjUgLTcwLjV2LTUwMHEwIC00MSAyOS41IC03MC41dDcwLjUgLTI5LjVoNTAwcTQxIDAgNzAuNSAyOS41dDI5LjUgNzAuNWwyMDAgMTUzdi0xMDNxMCAtMTY1IC05Mi41IC0yNTcuNXQtMjU3LjUgLTkyLjVoLTQwMHEtMTY1IDAgLTI1Ny41IDkyLjV0LTkyLjUgMjU3LjV2NDAwcTAgMTY1IDkyLjUgMjU3LjV0MjU3LjUgOTIuNXogTTgyNCAxMDczbDMzOSAtMzAxcTggLTcgOCAtMTcuNXQtOCAtMTcuNWwtMzQwIC0zMDZxLTcgLTYgLTEyLjUgLTR0LTYuNSAxMXYyMDNxLTI2IDEgLTU0LjUgMHQtNzguNSAtNy41dC05MiAtMTcuNXQtODYgLTM1dC03MCAtNTdxMTAgNTkgMzMgMTA4dDUxLjUgODEuNXQ2NSA1OC41dDY4LjUgNDAuNXQ2NyAyNC41dDU2IDEzLjV0NDAgNC41djIxMHExIDEwIDYuNSAxMi41dDEzLjUgLTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDY3OyIgZD0iTTM1MCAxMTAwaDM1MHE2MCAwIDEyNyAtMjNsLTE3OCAtMTc3aC0zNDlxLTQxIDAgLTcwLjUgLTI5LjV0LTI5LjUgLTcwLjV2LTUwMHEwIC00MSAyOS41IC03MC41dDcwLjUgLTI5LjVoNTAwcTQxIDAgNzAuNSAyOS41dDI5LjUgNzAuNXY2OWwyMDAgMjAwdi0yMTlxMCAtMTY1IC05Mi41IC0yNTcuNXQtMjU3LjUgLTkyLjVoLTQwMHEtMTY1IDAgLTI1Ny41IDkyLjV0LTkyLjUgMjU3LjV2NDAwcTAgMTY1IDkyLjUgMjU3LjV0MjU3LjUgOTIuNXogTTY0MyA2MzlsMzk1IDM5NXE3IDcgMTcuNSA3dDE3LjUgLTdsMTAxIC0xMDFxNyAtNyA3IC0xNy41dC03IC0xNy41bC01MzEgLTUzMnEtNyAtNyAtMTcuNSAtN3QtMTcuNSA3bC0yNDggMjQ4cS03IDcgLTcgMTcuNXQ3IDE3LjVsMTAxIDEwMXE3IDcgMTcuNSA3dDE3LjUgLTdsMTExIC0xMTFxOCAtNyAxOCAtN3QxOCA3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwNjg7IiBkPSJNMzE4IDkxOGwyNjQgMjY0cTggOCAxOCA4dDE4IC04bDI2MCAtMjY0cTcgLTggNC41IC0xM3QtMTIuNSAtNWgtMTcwdi0yMDBoMjAwdjE3M3EwIDEwIDUgMTJ0MTMgLTVsMjY0IC0yNjBxOCAtNyA4IC0xNy41dC04IC0xNy41bC0yNjQgLTI2NXEtOCAtNyAtMTMgLTV0LTUgMTJ2MTczaC0yMDB2LTIwMGgxNzBxMTAgMCAxMi41IC01dC00LjUgLTEzbC0yNjAgLTI2NHEtOCAtOCAtMTggLTh0LTE4IDhsLTI2NCAyNjRxLTggOCAtNS41IDEzIHQxMi41IDVoMTc1djIwMGgtMjAwdi0xNzNxMCAtMTAgLTUgLTEydC0xMyA1bC0yNjQgMjY1cS04IDcgLTggMTcuNXQ4IDE3LjVsMjY0IDI2MHE4IDcgMTMgNXQ1IC0xMnYtMTczaDIwMHYyMDBoLTE3NXEtMTAgMCAtMTIuNSA1dDUuNSAxM3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDY5OyIgZD0iTTI1MCAxMTAwaDEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNDM4bDQ2NCA0NTNxMTUgMTQgMjUuNSAxMHQxMC41IC0yNXYtMTAwMHEwIC0yMSAtMTAuNSAtMjV0LTI1LjUgMTBsLTQ2NCA0NTN2LTQzOHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDcwOyIgZD0iTTUwIDExMDBoMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di00MzhsNDY0IDQ1M3ExNSAxNCAyNS41IDEwdDEwLjUgLTI1di00MzhsNDY0IDQ1M3ExNSAxNCAyNS41IDEwdDEwLjUgLTI1di0xMDAwcTAgLTIxIC0xMC41IC0yNXQtMjUuNSAxMGwtNDY0IDQ1M3YtNDM4cTAgLTIxIC0xMC41IC0yNXQtMjUuNSAxMGwtNDY0IDQ1M3YtNDM4cTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMDBxLTIxIDAgLTM1LjUgMTQuNSB0LTE0LjUgMzUuNXYxMDAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDcxOyIgZD0iTTEyMDAgMTA1MHYtMTAwMHEwIC0yMSAtMTAuNSAtMjV0LTI1LjUgMTBsLTQ2NCA0NTN2LTQzOHEwIC0yMSAtMTAuNSAtMjV0LTI1LjUgMTBsLTQ5MiA0ODBxLTE1IDE0IC0xNSAzNXQxNSAzNWw0OTIgNDgwcTE1IDE0IDI1LjUgMTB0MTAuNSAtMjV2LTQzOGw0NjQgNDUzcTE1IDE0IDI1LjUgMTB0MTAuNSAtMjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA3MjsiIGQ9Ik0yNDMgMTA3NGw4MTQgLTQ5OHExOCAtMTEgMTggLTI2dC0xOCAtMjZsLTgxNCAtNDk4cS0xOCAtMTEgLTMwLjUgLTR0LTEyLjUgMjh2MTAwMHEwIDIxIDEyLjUgMjh0MzAuNSAtNHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDczOyIgZD0iTTI1MCAxMDAwaDIwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtODAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0yMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djgwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTY1MCAxMDAwaDIwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtODAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0yMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djgwMCBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwNzQ7IiBkPSJNMTEwMCA5NTB2LTgwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtODAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXY4MDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDgwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDc1OyIgZD0iTTUwMCA2MTJ2NDM4cTAgMjEgMTAuNSAyNXQyNS41IC0xMGw0OTIgLTQ4MHExNSAtMTQgMTUgLTM1dC0xNSAtMzVsLTQ5MiAtNDgwcS0xNSAtMTQgLTI1LjUgLTEwdC0xMC41IDI1djQzOGwtNDY0IC00NTNxLTE1IC0xNCAtMjUuNSAtMTB0LTEwLjUgMjV2MTAwMHEwIDIxIDEwLjUgMjV0MjUuNSAtMTB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA3NjsiIGQ9Ik0xMDQ4IDExMDJsMTAwIDFxMjAgMCAzNSAtMTQuNXQxNSAtMzUuNWw1IC0xMDAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41bC0xMDAgLTFxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41bC0yIDQzN2wtNDYzIC00NTRxLTE0IC0xNSAtMjQuNSAtMTAuNXQtMTAuNSAyNS41bC0yIDQzN2wtNDYyIC00NTVxLTE1IC0xNCAtMjUuNSAtOS41dC0xMC41IDI0LjVsLTUgMTAwMHEwIDIxIDEwLjUgMjUuNXQyNS41IC0xMC41bDQ2NiAtNDUwIGwtMiA0MzhxMCAyMCAxMC41IDI0LjV0MjUuNSAtOS41bDQ2NiAtNDUxbC0yIDQzOHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA3NzsiIGQ9Ik04NTAgMTEwMGgxMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTEwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2NDM4bC00NjQgLTQ1M3EtMTUgLTE0IC0yNS41IC0xMHQtMTAuNSAyNXYxMDAwcTAgMjEgMTAuNSAyNXQyNS41IC0xMGw0NjQgLTQ1M3Y0MzhxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwNzg7IiBkPSJNNjg2IDEwODFsNTAxIC01NDBxMTUgLTE1IDEwLjUgLTI2dC0yNi41IC0xMWgtMTA0MnEtMjIgMCAtMjYuNSAxMXQxMC41IDI2bDUwMSA1NDBxMTUgMTUgMzYgMTV0MzYgLTE1ek0xNTAgNDAwaDEwMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTAwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDc5OyIgZD0iTTg4NSA5MDBsLTM1MiAtMzUzbDM1MiAtMzUzbC0xOTcgLTE5OGwtNTUyIDU1Mmw1NTIgNTUweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwODA7IiBkPSJNMTA2NCA1NDdsLTU1MSAtNTUxbC0xOTggMTk4bDM1MyAzNTNsLTM1MyAzNTNsMTk4IDE5OHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDgxOyIgZD0iTTYwMCAxMTc3cTExNyAwIDIyNCAtNDUuNXQxODQuNSAtMTIzdDEyMyAtMTg0LjV0NDUuNSAtMjI0dC00NS41IC0yMjR0LTEyMyAtMTg0LjV0LTE4NC41IC0xMjN0LTIyNCAtNDUuNXQtMjI0IDQ1LjV0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNHQ0NS41IDIyNHQxMjMgMTg0LjV0MTg0LjUgMTIzdDIyNCA0NS41ek02NTAgOTAwaC0xMDBxLTIxIDAgLTM1LjUgLTE0LjV0LTE0LjUgLTM1LjV2LTE1MGgtMTUwIHEtMjEgMCAtMzUuNSAtMTQuNXQtMTQuNSAtMzUuNXYtMTAwcTAgLTIxIDE0LjUgLTM1LjV0MzUuNSAtMTQuNWgxNTB2LTE1MHEwIC0yMSAxNC41IC0zNS41dDM1LjUgLTE0LjVoMTAwcTIxIDAgMzUuNSAxNC41dDE0LjUgMzUuNXYxNTBoMTUwcTIxIDAgMzUuNSAxNC41dDE0LjUgMzUuNXYxMDBxMCAyMSAtMTQuNSAzNS41dC0zNS41IDE0LjVoLTE1MHYxNTBxMCAyMSAtMTQuNSAzNS41dC0zNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA4MjsiIGQ9Ik02MDAgMTE3N3ExMTcgMCAyMjQgLTQ1LjV0MTg0LjUgLTEyM3QxMjMgLTE4NC41dDQ1LjUgLTIyNHQtNDUuNSAtMjI0dC0xMjMgLTE4NC41dC0xODQuNSAtMTIzdC0yMjQgLTQ1LjV0LTIyNCA0NS41dC0xODQuNSAxMjN0LTEyMyAxODQuNXQtNDUuNSAyMjR0NDUuNSAyMjR0MTIzIDE4NC41dDE4NC41IDEyM3QyMjQgNDUuNXpNODUwIDcwMGgtNTAwcS0yMSAwIC0zNS41IC0xNC41dC0xNC41IC0zNS41di0xMDBxMCAtMjEgMTQuNSAtMzUuNSB0MzUuNSAtMTQuNWg1MDBxMjEgMCAzNS41IDE0LjV0MTQuNSAzNS41djEwMHEwIDIxIC0xNC41IDM1LjV0LTM1LjUgMTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDgzOyIgZD0iTTYwMCAxMTc3cTExNyAwIDIyNCAtNDUuNXQxODQuNSAtMTIzdDEyMyAtMTg0LjV0NDUuNSAtMjI0dC00NS41IC0yMjR0LTEyMyAtMTg0LjV0LTE4NC41IC0xMjN0LTIyNCAtNDUuNXQtMjI0IDQ1LjV0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNHQ0NS41IDIyNHQxMjMgMTg0LjV0MTg0LjUgMTIzdDIyNCA0NS41ek03NDEuNSA5MTNxLTEyLjUgMCAtMjEuNSAtOWwtMTIwIC0xMjBsLTEyMCAxMjBxLTkgOSAtMjEuNSA5IHQtMjEuNSAtOWwtMTQxIC0xNDFxLTkgLTkgLTkgLTIxLjV0OSAtMjEuNWwxMjAgLTEyMGwtMTIwIC0xMjBxLTkgLTkgLTkgLTIxLjV0OSAtMjEuNWwxNDEgLTE0MXE5IC05IDIxLjUgLTl0MjEuNSA5bDEyMCAxMjBsMTIwIC0xMjBxOSAtOSAyMS41IC05dDIxLjUgOWwxNDEgMTQxcTkgOSA5IDIxLjV0LTkgMjEuNWwtMTIwIDEyMGwxMjAgMTIwcTkgOSA5IDIxLjV0LTkgMjEuNWwtMTQxIDE0MXEtOSA5IC0yMS41IDl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA4NDsiIGQ9Ik02MDAgMTE3N3ExMTcgMCAyMjQgLTQ1LjV0MTg0LjUgLTEyM3QxMjMgLTE4NC41dDQ1LjUgLTIyNHQtNDUuNSAtMjI0dC0xMjMgLTE4NC41dC0xODQuNSAtMTIzdC0yMjQgLTQ1LjV0LTIyNCA0NS41dC0xODQuNSAxMjN0LTEyMyAxODQuNXQtNDUuNSAyMjR0NDUuNSAyMjR0MTIzIDE4NC41dDE4NC41IDEyM3QyMjQgNDUuNXpNNTQ2IDYyM2wtODQgODVxLTcgNyAtMTcuNSA3dC0xOC41IC03bC0xMzkgLTEzOXEtNyAtOCAtNyAtMTh0NyAtMTggbDI0MiAtMjQxcTcgLTggMTcuNSAtOHQxNy41IDhsMzc1IDM3NXE3IDcgNyAxNy41dC03IDE4LjVsLTEzOSAxMzlxLTcgNyAtMTcuNSA3dC0xNy41IC03eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwODU7IiBkPSJNNjAwIDExNzdxMTE3IDAgMjI0IC00NS41dDE4NC41IC0xMjN0MTIzIC0xODQuNXQ0NS41IC0yMjR0LTQ1LjUgLTIyNHQtMTIzIC0xODQuNXQtMTg0LjUgLTEyM3QtMjI0IC00NS41dC0yMjQgNDUuNXQtMTg0LjUgMTIzdC0xMjMgMTg0LjV0LTQ1LjUgMjI0dDQ1LjUgMjI0dDEyMyAxODQuNXQxODQuNSAxMjN0MjI0IDQ1LjV6TTU4OCA5NDFxLTI5IDAgLTU5IC01LjV0LTYzIC0yMC41dC01OCAtMzguNXQtNDEuNSAtNjN0LTE2LjUgLTg5LjUgcTAgLTI1IDIwIC0yNWgxMzFxMzAgLTUgMzUgMTFxNiAyMCAyMC41IDI4dDQ1LjUgOHEyMCAwIDMxLjUgLTEwLjV0MTEuNSAtMjguNXEwIC0yMyAtNyAtMzR0LTI2IC0xOHEtMSAwIC0xMy41IC00dC0xOS41IC03LjV0LTIwIC0xMC41dC0yMiAtMTd0LTE4LjUgLTI0dC0xNS41IC0zNXQtOCAtNDZxLTEgLTggNS41IC0xNi41dDIwLjUgLTguNWgxNzNxNyAwIDIyIDh0MzUgMjh0MzcuNSA0OHQyOS41IDc0dDEyIDEwMHEwIDQ3IC0xNyA4MyB0LTQyLjUgNTd0LTU5LjUgMzQuNXQtNjQgMTh0LTU5IDQuNXpNNjc1IDQwMGgtMTUwcS0xMCAwIC0xNy41IC03LjV0LTcuNSAtMTcuNXYtMTUwcTAgLTEwIDcuNSAtMTcuNXQxNy41IC03LjVoMTUwcTEwIDAgMTcuNSA3LjV0Ny41IDE3LjV2MTUwcTAgMTAgLTcuNSAxNy41dC0xNy41IDcuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDg2OyIgZD0iTTYwMCAxMTc3cTExNyAwIDIyNCAtNDUuNXQxODQuNSAtMTIzdDEyMyAtMTg0LjV0NDUuNSAtMjI0dC00NS41IC0yMjR0LTEyMyAtMTg0LjV0LTE4NC41IC0xMjN0LTIyNCAtNDUuNXQtMjI0IDQ1LjV0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNHQ0NS41IDIyNHQxMjMgMTg0LjV0MTg0LjUgMTIzdDIyNCA0NS41ek02NzUgMTAwMGgtMTUwcS0xMCAwIC0xNy41IC03LjV0LTcuNSAtMTcuNXYtMTUwcTAgLTEwIDcuNSAtMTcuNSB0MTcuNSAtNy41aDE1MHExMCAwIDE3LjUgNy41dDcuNSAxNy41djE1MHEwIDEwIC03LjUgMTcuNXQtMTcuNSA3LjV6TTY3NSA3MDBoLTI1MHEtMTAgMCAtMTcuNSAtNy41dC03LjUgLTE3LjV2LTUwcTAgLTEwIDcuNSAtMTcuNXQxNy41IC03LjVoNzV2LTIwMGgtNzVxLTEwIDAgLTE3LjUgLTcuNXQtNy41IC0xNy41di01MHEwIC0xMCA3LjUgLTE3LjV0MTcuNSAtNy41aDM1MHExMCAwIDE3LjUgNy41dDcuNSAxNy41djUwcTAgMTAgLTcuNSAxNy41IHQtMTcuNSA3LjVoLTc1djI3NXEwIDEwIC03LjUgMTcuNXQtMTcuNSA3LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA4NzsiIGQ9Ik01MjUgMTIwMGgxNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di0xOTRxMTAzIC0yNyAxNzguNSAtMTAyLjV0MTAyLjUgLTE3OC41aDE5NHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTE1MHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTE5NHEtMjcgLTEwMyAtMTAyLjUgLTE3OC41dC0xNzguNSAtMTAyLjV2LTE5NHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTE1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djE5NCBxLTEwMyAyNyAtMTc4LjUgMTAyLjV0LTEwMi41IDE3OC41aC0xOTRxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYxNTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNWgxOTRxMjcgMTAzIDEwMi41IDE3OC41dDE3OC41IDEwMi41djE5NHEwIDEwIDcuNSAxNy41dDE3LjUgNy41ek03MDAgODkzdi0xNjhxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0xNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYxNjhxLTY4IC0yMyAtMTE5IC03NCB0LTc0IC0xMTloMTY4cTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtMTUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtMTY4cTIzIC02OCA3NCAtMTE5dDExOSAtNzR2MTY4cTAgMTAgNy41IDE3LjV0MTcuNSA3LjVoMTUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtMTY4cTY4IDIzIDExOSA3NHQ3NCAxMTloLTE2OHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djE1MHEwIDEwIDcuNSAxNy41dDE3LjUgNy41aDE2OCBxLTIzIDY4IC03NCAxMTl0LTExOSA3NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDg4OyIgZD0iTTYwMCAxMTc3cTExNyAwIDIyNCAtNDUuNXQxODQuNSAtMTIzdDEyMyAtMTg0LjV0NDUuNSAtMjI0dC00NS41IC0yMjR0LTEyMyAtMTg0LjV0LTE4NC41IC0xMjN0LTIyNCAtNDUuNXQtMjI0IDQ1LjV0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNHQ0NS41IDIyNHQxMjMgMTg0LjV0MTg0LjUgMTIzdDIyNCA0NS41ek02MDAgMTAyN3EtMTE2IDAgLTIxNC41IC01N3QtMTU1LjUgLTE1NS41dC01NyAtMjE0LjV0NTcgLTIxNC41IHQxNTUuNSAtMTU1LjV0MjE0LjUgLTU3dDIxNC41IDU3dDE1NS41IDE1NS41dDU3IDIxNC41dC01NyAyMTQuNXQtMTU1LjUgMTU1LjV0LTIxNC41IDU3ek03NTkgODIzbDY0IC02NHE3IC03IDcgLTE3LjV0LTcgLTE3LjVsLTEyNCAtMTI0bDEyNCAtMTI0cTcgLTcgNyAtMTcuNXQtNyAtMTcuNWwtNjQgLTY0cS03IC03IC0xNy41IC03dC0xNy41IDdsLTEyNCAxMjRsLTEyNCAtMTI0cS03IC03IC0xNy41IC03dC0xNy41IDdsLTY0IDY0IHEtNyA3IC03IDE3LjV0NyAxNy41bDEyNCAxMjRsLTEyNCAxMjRxLTcgNyAtNyAxNy41dDcgMTcuNWw2NCA2NHE3IDcgMTcuNSA3dDE3LjUgLTdsMTI0IC0xMjRsMTI0IDEyNHE3IDcgMTcuNSA3dDE3LjUgLTd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA4OTsiIGQ9Ik02MDAgMTE3N3ExMTcgMCAyMjQgLTQ1LjV0MTg0LjUgLTEyM3QxMjMgLTE4NC41dDQ1LjUgLTIyNHQtNDUuNSAtMjI0dC0xMjMgLTE4NC41dC0xODQuNSAtMTIzdC0yMjQgLTQ1LjV0LTIyNCA0NS41dC0xODQuNSAxMjN0LTEyMyAxODQuNXQtNDUuNSAyMjR0NDUuNSAyMjR0MTIzIDE4NC41dDE4NC41IDEyM3QyMjQgNDUuNXpNNjAwIDEwMjdxLTExNiAwIC0yMTQuNSAtNTd0LTE1NS41IC0xNTUuNXQtNTcgLTIxNC41dDU3IC0yMTQuNSB0MTU1LjUgLTE1NS41dDIxNC41IC01N3QyMTQuNSA1N3QxNTUuNSAxNTUuNXQ1NyAyMTQuNXQtNTcgMjE0LjV0LTE1NS41IDE1NS41dC0yMTQuNSA1N3pNNzgyIDc4OGwxMDYgLTEwNnE3IC03IDcgLTE3LjV0LTcgLTE3LjVsLTMyMCAtMzIxcS04IC03IC0xOCAtN3QtMTggN2wtMjAyIDIwM3EtOCA3IC04IDE3LjV0OCAxNy41bDEwNiAxMDZxNyA4IDE3LjUgOHQxNy41IC04bDc5IC03OWwxOTcgMTk3cTcgNyAxNy41IDd0MTcuNSAtN3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDkwOyIgZD0iTTYwMCAxMTc3cTExNyAwIDIyNCAtNDUuNXQxODQuNSAtMTIzdDEyMyAtMTg0LjV0NDUuNSAtMjI0dC00NS41IC0yMjR0LTEyMyAtMTg0LjV0LTE4NC41IC0xMjN0LTIyNCAtNDUuNXQtMjI0IDQ1LjV0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNHQ0NS41IDIyNHQxMjMgMTg0LjV0MTg0LjUgMTIzdDIyNCA0NS41ek02MDAgMTAyN3EtMTE2IDAgLTIxNC41IC01N3QtMTU1LjUgLTE1NS41dC01NyAtMjE0LjVxMCAtMTIwIDY1IC0yMjUgbDU4NyA1ODdxLTEwNSA2NSAtMjI1IDY1ek05NjUgODE5bC01ODQgLTU4NHExMDQgLTYyIDIxOSAtNjJxMTE2IDAgMjE0LjUgNTd0MTU1LjUgMTU1LjV0NTcgMjE0LjVxMCAxMTUgLTYyIDIxOXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDkxOyIgZD0iTTM5IDU4Mmw1MjIgNDI3cTE2IDEzIDI3LjUgOHQxMS41IC0yNnYtMjkxaDU1MHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC01NTB2LTI5MXEwIC0yMSAtMTEuNSAtMjZ0LTI3LjUgOGwtNTIyIDQyN3EtMTYgMTMgLTE2IDMydDE2IDMyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUwOTI7IiBkPSJNNjM5IDEwMDlsNTIyIC00MjdxMTYgLTEzIDE2IC0zMnQtMTYgLTMybC01MjIgLTQyN3EtMTYgLTEzIC0yNy41IC04dC0xMS41IDI2djI5MWgtNTUwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYyMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDU1MHYyOTFxMCAyMSAxMS41IDI2dDI3LjUgLTh6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA5MzsiIGQ9Ik02ODIgMTE2MWw0MjcgLTUyMnExMyAtMTYgOCAtMjcuNXQtMjYgLTExLjVoLTI5MXYtNTUwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0yMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djU1MGgtMjkxcS0yMSAwIC0yNiAxMS41dDggMjcuNWw0MjcgNTIycTEzIDE2IDMyIDE2dDMyIC0xNnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDk0OyIgZD0iTTU1MCAxMjAwaDIwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNTUwaDI5MXEyMSAwIDI2IC0xMS41dC04IC0yNy41bC00MjcgLTUyMnEtMTMgLTE2IC0zMiAtMTZ0LTMyIDE2bC00MjcgNTIycS0xMyAxNiAtOCAyNy41dDI2IDExLjVoMjkxdjU1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTA5NTsiIGQ9Ik02MzkgMTEwOWw1MjIgLTQyN3ExNiAtMTMgMTYgLTMydC0xNiAtMzJsLTUyMiAtNDI3cS0xNiAtMTMgLTI3LjUgLTh0LTExLjUgMjZ2MjkxcS05NCAtMiAtMTgyIC0yMHQtMTcwLjUgLTUydC0xNDcgLTkyLjV0LTEwMC41IC0xMzUuNXE1IDEwNSAyNyAxOTMuNXQ2Ny41IDE2N3QxMTMgMTM1dDE2NyA5MS41dDIyNS41IDQydjI2MnEwIDIxIDExLjUgMjZ0MjcuNSAtOHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDk2OyIgZD0iTTg1MCAxMjAwaDMwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMzAwcTAgLTIxIC0xMC41IC0yNXQtMjQuNSAxMGwtOTQgOTRsLTI0OSAtMjQ5cS04IC03IC0xOCAtN3QtMTggN2wtMTA2IDEwNnEtNyA4IC03IDE4dDcgMThsMjQ5IDI0OWwtOTQgOTRxLTE0IDE0IC0xMCAyNC41dDI1IDEwLjV6TTM1MCAwaC0zMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djMwMHEwIDIxIDEwLjUgMjV0MjQuNSAtMTBsOTQgLTk0bDI0OSAyNDkgcTggNyAxOCA3dDE4IC03bDEwNiAtMTA2cTcgLTggNyAtMTh0LTcgLTE4bC0yNDkgLTI0OWw5NCAtOTRxMTQgLTE0IDEwIC0yNC41dC0yNSAtMTAuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMDk3OyIgZD0iTTEwMTQgMTEyMGwxMDYgLTEwNnE3IC04IDcgLTE4dC03IC0xOGwtMjQ5IC0yNDlsOTQgLTk0cTE0IC0xNCAxMCAtMjQuNXQtMjUgLTEwLjVoLTMwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MzAwcTAgMjEgMTAuNSAyNXQyNC41IC0xMGw5NCAtOTRsMjQ5IDI0OXE4IDcgMTggN3QxOCAtN3pNMjUwIDYwMGgzMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTMwMHEwIC0yMSAtMTAuNSAtMjV0LTI0LjUgMTBsLTk0IDk0IGwtMjQ5IC0yNDlxLTggLTcgLTE4IC03dC0xOCA3bC0xMDYgMTA2cS03IDggLTcgMTh0NyAxOGwyNDkgMjQ5bC05NCA5NHEtMTQgMTQgLTEwIDI0LjV0MjUgMTAuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTAxOyIgZD0iTTYwMCAxMTc3cTExNyAwIDIyNCAtNDUuNXQxODQuNSAtMTIzdDEyMyAtMTg0LjV0NDUuNSAtMjI0dC00NS41IC0yMjR0LTEyMyAtMTg0LjV0LTE4NC41IC0xMjN0LTIyNCAtNDUuNXQtMjI0IDQ1LjV0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNHQ0NS41IDIyNHQxMjMgMTg0LjV0MTg0LjUgMTIzdDIyNCA0NS41ek03MDQgOTAwaC0yMDhxLTIwIDAgLTMyIC0xNC41dC04IC0zNC41bDU4IC0zMDJxNCAtMjAgMjEuNSAtMzQuNSB0MzcuNSAtMTQuNWg1NHEyMCAwIDM3LjUgMTQuNXQyMS41IDM0LjVsNTggMzAycTQgMjAgLTggMzQuNXQtMzIgMTQuNXpNNjc1IDQwMGgtMTUwcS0xMCAwIC0xNy41IC03LjV0LTcuNSAtMTcuNXYtMTUwcTAgLTEwIDcuNSAtMTcuNXQxNy41IC03LjVoMTUwcTEwIDAgMTcuNSA3LjV0Ny41IDE3LjV2MTUwcTAgMTAgLTcuNSAxNy41dC0xNy41IDcuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTAyOyIgZD0iTTI2MCAxMjAwcTkgMCAxOSAtMnQxNSAtNGw1IC0ycTIyIC0xMCA0NCAtMjNsMTk2IC0xMThxMjEgLTEzIDM2IC0yNHEyOSAtMjEgMzcgLTEycTExIDEzIDQ5IDM1bDE5NiAxMThxMjIgMTMgNDUgMjNxMTcgNyAzOCA3cTIzIDAgNDcgLTE2LjV0MzcgLTMzLjVsMTMgLTE2cTE0IC0yMSAxOCAtNDVsMjUgLTEyM2w4IC00NHExIC05IDguNSAtMTQuNXQxNy41IC01LjVoNjFxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di01MCBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC01MHEtMTAgMCAtMTcuNSAtNy41dC03LjUgLTE3LjV2LTE3NWgtNDAwdjMwMGgtMjAwdi0zMDBoLTQwMHYxNzVxMCAxMCAtNy41IDE3LjV0LTE3LjUgNy41aC01MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjVoNjFxMTEgMCAxOCAzdDcgOHEwIDQgOSA1MmwyNSAxMjhxNSAyNSAxOSA0NXEyIDMgNSA3dDEzLjUgMTV0MjEuNSAxOS41dDI2LjUgMTUuNSB0MjkuNSA3ek05MTUgMTA3OWwtMTY2IC0xNjJxLTcgLTcgLTUgLTEydDEyIC01aDIxOXExMCAwIDE1IDd0MiAxN2wtNTEgMTQ5cS0zIDEwIC0xMSAxMnQtMTUgLTZ6TTQ2MyA5MTdsLTE3NyAxNTdxLTggNyAtMTYgNXQtMTEgLTEybC01MSAtMTQzcS0zIC0xMCAyIC0xN3QxNSAtN2gyMzFxMTEgMCAxMi41IDV0LTUuNSAxMnpNNTAwIDBoLTM3NXEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djM3NWg0MDB2LTQwMHpNMTEwMCA0MDB2LTM3NSBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0zNzV2NDAwaDQwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTAzOyIgZD0iTTExNjUgMTE5MHE4IDMgMjEgLTYuNXQxMyAtMTcuNXEtMiAtMTc4IC0yNC41IC0zMjMuNXQtNTUuNSAtMjQ1LjV0LTg3IC0xNzQuNXQtMTAyLjUgLTExOC41dC0xMTggLTY4LjV0LTExOC41IC0zM3QtMTIwIC00LjV0LTEwNSA5LjV0LTkwIDE2LjVxLTYxIDEyIC03OCAxMXEtNCAxIC0xMi41IDB0LTM0IC0xNC41dC01Mi41IC00MC41bC0xNTMgLTE1M3EtMjYgLTI0IC0zNyAtMTQuNXQtMTEgNDMuNXEwIDY0IDQyIDEwMnE4IDggNTAuNSA0NSB0NjYuNSA1OHExOSAxNyAzNSA0N3QxMyA2MXEtOSA1NSAtMTAgMTAyLjV0NyAxMTF0MzcgMTMwdDc4IDEyOS41cTM5IDUxIDgwIDg4dDg5LjUgNjMuNXQ5NC41IDQ1dDExMy41IDM2dDEyOSAzMXQxNTcuNSAzN3QxODIgNDcuNXpNMTExNiAxMDk4cS04IDkgLTIyLjUgLTN0LTQ1LjUgLTUwcS0zOCAtNDcgLTExOSAtMTAzLjV0LTE0MiAtODkuNWwtNjIgLTMzcS01NiAtMzAgLTEwMiAtNTd0LTEwNCAtNjh0LTEwMi41IC04MC41dC04NS41IC05MSB0LTY0IC0xMDQuNXEtMjQgLTU2IC0zMSAtODZ0MiAtMzJ0MzEuNSAxNy41dDU1LjUgNTkuNXEyNSAzMCA5NCA3NS41dDEyNS41IDc3LjV0MTQ3LjUgODFxNzAgMzcgMTE4LjUgNjl0MTAyIDc5LjV0OTkgMTExdDg2LjUgMTQ4LjVxMjIgNTAgMjQgNjB0LTYgMTl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEwNDsiIGQ9Ik02NTMgMTIzMXEtMzkgLTY3IC01NC41IC0xMzF0LTEwLjUgLTExNC41dDI0LjUgLTk2LjV0NDcuNSAtODB0NjMuNSAtNjIuNXQ2OC41IC00Ni41dDY1IC0zMHEtNCA3IC0xNy41IDM1dC0xOC41IDM5LjV0LTE3IDM5LjV0LTE3IDQzdC0xMyA0MnQtOS41IDQ0LjV0LTIgNDJ0NCA0M3QxMy41IDM5dDIzIDM4LjVxOTYgLTQyIDE2NSAtMTA3LjV0MTA1IC0xMzh0NTIgLTE1NnQxMyAtMTU5dC0xOSAtMTQ5LjVxLTEzIC01NSAtNDQgLTEwNi41IHQtNjggLTg3dC03OC41IC02NC41dC03Mi41IC00NXQtNTMgLTIycS03MiAtMjIgLTEyNyAtMTFxLTMxIDYgLTEzIDE5cTYgMyAxNyA3cTEzIDUgMzIuNSAyMXQ0MSA0NHQzOC41IDYzLjV0MjEuNSA4MS41dC02LjUgOTQuNXQtNTAgMTA3dC0xMDQgMTE1LjVxMTAgLTEwNCAtMC41IC0xODl0LTM3IC0xNDAuNXQtNjUgLTkzdC04NCAtNTJ0LTkzLjUgLTExdC05NSAyNC41cS04MCAzNiAtMTMxLjUgMTE0dC01My41IDE3MXEtMiAyMyAwIDQ5LjUgdDQuNSA1Mi41dDEzLjUgNTZ0MjcuNSA2MHQ0NiA2NC41dDY5LjUgNjguNXEtOCAtNTMgLTUgLTEwMi41dDE3LjUgLTkwdDM0IC02OC41dDQ0LjUgLTM5dDQ5IC0ycTMxIDEzIDM4LjUgMzZ0LTQuNSA1NXQtMjkgNjQuNXQtMzYgNzV0LTI2IDc1LjVxLTE1IDg1IDIgMTYxLjV0NTMuNSAxMjguNXQ4NS41IDkyLjV0OTMuNSA2MXQ4MS41IDI1LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEwNTsiIGQ9Ik02MDAgMTA5NHE4MiAwIDE2MC41IC0yMi41dDE0MCAtNTl0MTE2LjUgLTgyLjV0OTQuNSAtOTV0NjggLTk1dDQyLjUgLTgyLjV0MTQgLTU3LjV0LTE0IC01Ny41dC00MyAtODIuNXQtNjguNSAtOTV0LTk0LjUgLTk1dC0xMTYuNSAtODIuNXQtMTQwIC01OXQtMTU5LjUgLTIyLjV0LTE1OS41IDIyLjV0LTE0MCA1OXQtMTE2LjUgODIuNXQtOTQuNSA5NXQtNjguNSA5NXQtNDMgODIuNXQtMTQgNTcuNXQxNCA1Ny41dDQyLjUgODIuNXQ2OCA5NSB0OTQuNSA5NXQxMTYuNSA4Mi41dDE0MCA1OXQxNjAuNSAyMi41ek04ODggODI5cS0xNSAxNSAtMTggMTJ0NSAtMjJxMjUgLTU3IDI1IC0xMTlxMCAtMTI0IC04OCAtMjEydC0yMTIgLTg4dC0yMTIgODh0LTg4IDIxMnEwIDU5IDIzIDExNHE4IDE5IDQuNSAyMnQtMTcuNSAtMTJxLTcwIC02OSAtMTYwIC0xODRxLTEzIC0xNiAtMTUgLTQwLjV0OSAtNDIuNXEyMiAtMzYgNDcgLTcxdDcwIC04MnQ5Mi41IC04MXQxMTMgLTU4LjV0MTMzLjUgLTI0LjUgdDEzMy41IDI0dDExMyA1OC41dDkyLjUgODEuNXQ3MCA4MS41dDQ3IDcwLjVxMTEgMTggOSA0Mi41dC0xNCA0MS41cS05MCAxMTcgLTE2MyAxODl6TTQ0OCA3MjdsLTM1IC0zNnEtMTUgLTE1IC0xOS41IC0zOC41dDQuNSAtNDEuNXEzNyAtNjggOTMgLTExNnExNiAtMTMgMzguNSAtMTF0MzYuNSAxN2wzNSAzNHExNCAxNSAxMi41IDMzLjV0LTE2LjUgMzMuNXEtNDQgNDQgLTg5IDExN3EtMTEgMTggLTI4IDIwdC0zMiAtMTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEwNjsiIGQ9Ik01OTIgMGgtMTQ4bDMxIDEyMHEtOTEgMjAgLTE3NS41IDY4LjV0LTE0My41IDEwNi41dC0xMDMuNSAxMTl0LTY2LjUgMTEwdC0yMiA3NnEwIDIxIDE0IDU3LjV0NDIuNSA4Mi41dDY4IDk1dDk0LjUgOTV0MTE2LjUgODIuNXQxNDAgNTl0MTYwLjUgMjIuNXE2MSAwIDEyNiAtMTVsMzIgMTIxaDE0OHpNOTQ0IDc3MGw0NyAxODFxMTA4IC04NSAxNzYuNSAtMTkydDY4LjUgLTE1OXEwIC0yNiAtMTkuNSAtNzF0LTU5LjUgLTEwMnQtOTMgLTExMiB0LTEyOSAtMTA0LjV0LTE1OCAtNzUuNWw0NiAxNzNxNzcgNDkgMTM2IDExN3Q5NyAxMzFxMTEgMTggOSA0Mi41dC0xNCA0MS41cS01NCA3MCAtMTA3IDEzMHpNMzEwIDgyNHEtNzAgLTY5IC0xNjAgLTE4NHEtMTMgLTE2IC0xNSAtNDAuNXQ5IC00Mi41cTE4IC0zMCAzOSAtNjB0NTcgLTcwLjV0NzQgLTczdDkwIC02MXQxMDUgLTQxLjVsNDEgMTU0cS0xMDcgMTggLTE3OC41IDEwMS41dC03MS41IDE5My41cTAgNTkgMjMgMTE0cTggMTkgNC41IDIyIHQtMTcuNSAtMTJ6TTQ0OCA3MjdsLTM1IC0zNnEtMTUgLTE1IC0xOS41IC0zOC41dDQuNSAtNDEuNXEzNyAtNjggOTMgLTExNnExNiAtMTMgMzguNSAtMTF0MzYuNSAxN2wxMiAxMWwyMiA4NmwtMyA0cS00NCA0NCAtODkgMTE3cS0xMSAxOCAtMjggMjB0LTMyIC0xMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTA3OyIgZD0iTS05MCAxMDBsNjQyIDEwNjZxMjAgMzEgNDggMjguNXQ0OCAtMzUuNWw2NDIgLTEwNTZxMjEgLTMyIDcuNSAtNjcuNXQtNTAuNSAtMzUuNWgtMTI5NHEtMzcgMCAtNTAuNSAzNHQ3LjUgNjZ6TTE1NSAyMDBoMzQ1djc1cTAgMTAgNy41IDE3LjV0MTcuNSA3LjVoMTUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtNzVoMzQ1bC00NDUgNzIzek00OTYgNzAwaDIwOHEyMCAwIDMyIC0xNC41dDggLTM0LjVsLTU4IC0yNTIgcS00IC0yMCAtMjEuNSAtMzQuNXQtMzcuNSAtMTQuNWgtNTRxLTIwIDAgLTM3LjUgMTQuNXQtMjEuNSAzNC41bC01OCAyNTJxLTQgMjAgOCAzNC41dDMyIDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEwODsiIGQ9Ik02NTAgMTIwMHE2MiAwIDEwNiAtNDR0NDQgLTEwNnYtMzM5bDM2MyAtMzI1cTE1IC0xNCAyNiAtMzguNXQxMSAtNDQuNXYtNDFxMCAtMjAgLTEyIC0yNi41dC0yOSA1LjVsLTM1OSAyNDl2LTI2M3ExMDAgLTkzIDEwMCAtMTEzdi02NHEwIC0yMSAtMTMgLTI5dC0zMiAxbC0yMDUgMTI4bC0yMDUgLTEyOHEtMTkgLTkgLTMyIC0xdC0xMyAyOXY2NHEwIDIwIDEwMCAxMTN2MjYzbC0zNTkgLTI0OXEtMTcgLTEyIC0yOSAtNS41dC0xMiAyNi41djQxIHEwIDIwIDExIDQ0LjV0MjYgMzguNWwzNjMgMzI1djMzOXEwIDYyIDQ0IDEwNnQxMDYgNDR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEwOTsiIGQ9Ik04NTAgMTIwMGgxMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTUwaDUwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xNTBoLTExMDB2MTUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNWg1MHY1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjVoMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di01MGg1MDB2NTBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek0xMTAwIDgwMHYtNzUwcTAgLTIxIC0xNC41IC0zNS41IHQtMzUuNSAtMTQuNWgtMTAwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2NzUwaDExMDB6TTEwMCA2MDB2LTEwMGgxMDB2MTAwaC0xMDB6TTMwMCA2MDB2LTEwMGgxMDB2MTAwaC0xMDB6TTUwMCA2MDB2LTEwMGgxMDB2MTAwaC0xMDB6TTcwMCA2MDB2LTEwMGgxMDB2MTAwaC0xMDB6TTkwMCA2MDB2LTEwMGgxMDB2MTAwaC0xMDB6TTEwMCA0MDB2LTEwMGgxMDB2MTAwaC0xMDB6TTMwMCA0MDB2LTEwMGgxMDB2MTAwaC0xMDB6TTUwMCA0MDAgdi0xMDBoMTAwdjEwMGgtMTAwek03MDAgNDAwdi0xMDBoMTAwdjEwMGgtMTAwek05MDAgNDAwdi0xMDBoMTAwdjEwMGgtMTAwek0xMDAgMjAwdi0xMDBoMTAwdjEwMGgtMTAwek0zMDAgMjAwdi0xMDBoMTAwdjEwMGgtMTAwek01MDAgMjAwdi0xMDBoMTAwdjEwMGgtMTAwek03MDAgMjAwdi0xMDBoMTAwdjEwMGgtMTAwek05MDAgMjAwdi0xMDBoMTAwdjEwMGgtMTAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMTA7IiBkPSJNMTEzNSAxMTY1bDI0OSAtMjMwcTE1IC0xNCAxNSAtMzV0LTE1IC0zNWwtMjQ5IC0yMzBxLTE0IC0xNCAtMjQuNSAtMTB0LTEwLjUgMjV2MTUwaC0xNTlsLTYwMCAtNjAwaC0yOTFxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjVoMjA5bDYwMCA2MDBoMjQxdjE1MHEwIDIxIDEwLjUgMjV0MjQuNSAtMTB6TTUyMiA4MTlsLTE0MSAtMTQxbC0xMjIgMTIyaC0yMDlxLTIxIDAgLTM1LjUgMTQuNSB0LTE0LjUgMzUuNXYxMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDI5MXpNMTEzNSA1NjVsMjQ5IC0yMzBxMTUgLTE0IDE1IC0zNXQtMTUgLTM1bC0yNDkgLTIzMHEtMTQgLTE0IC0yNC41IC0xMHQtMTAuNSAyNXYxNTBoLTI0MWwtMTgxIDE4MWwxNDEgMTQxbDEyMiAtMTIyaDE1OXYxNTBxMCAyMSAxMC41IDI1dDI0LjUgLTEweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMTE7IiBkPSJNMTAwIDExMDBoMTAwMHE0MSAwIDcwLjUgLTI5LjV0MjkuNSAtNzAuNXYtNjAwcTAgLTQxIC0yOS41IC03MC41dC03MC41IC0yOS41aC01OTZsLTMwNCAtMzAwdjMwMGgtMTAwcS00MSAwIC03MC41IDI5LjV0LTI5LjUgNzAuNXY2MDBxMCA0MSAyOS41IDcwLjV0NzAuNSAyOS41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMTI7IiBkPSJNMTUwIDEyMDBoMjAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0yNTBoLTMwMHYyNTBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek04NTAgMTIwMGgyMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTI1MGgtMzAwdjI1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTExMDAgODAwdi0zMDBxMCAtNDEgLTMgLTc3LjV0LTE1IC04OS41dC0zMiAtOTZ0LTU4IC04OXQtODkgLTc3dC0xMjkgLTUxdC0xNzQgLTIwdC0xNzQgMjAgdC0xMjkgNTF0LTg5IDc3dC01OCA4OXQtMzIgOTZ0LTE1IDg5LjV0LTMgNzcuNXYzMDBoMzAwdi0yNTB2LTI3di00Mi41dDEuNSAtNDF0NSAtMzh0MTAgLTM1dDE2LjUgLTMwdDI1LjUgLTI0LjV0MzUgLTE5dDQ2LjUgLTEydDYwIC00dDYwIDQuNXQ0Ni41IDEyLjV0MzUgMTkuNXQyNSAyNS41dDE3IDMwLjV0MTAgMzV0NSAzOHQyIDQwLjV0LTAuNSA0MnYyNXYyNTBoMzAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMTM7IiBkPSJNMTEwMCA0MTFsLTE5OCAtMTk5bC0zNTMgMzUzbC0zNTMgLTM1M2wtMTk3IDE5OWw1NTEgNTUxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMTQ7IiBkPSJNMTEwMSA3ODlsLTU1MCAtNTUxbC01NTEgNTUxbDE5OCAxOTlsMzUzIC0zNTNsMzUzIDM1M3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTE1OyIgZD0iTTQwNCAxMDAwaDc0NnEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNTUxaDE1MHEyMSAwIDI1IC0xMC41dC0xMCAtMjQuNWwtMjMwIC0yNDlxLTE0IC0xNSAtMzUgLTE1dC0zNSAxNWwtMjMwIDI0OXEtMTQgMTQgLTEwIDI0LjV0MjUgMTAuNWgxNTB2NDAxaC0zODF6TTEzNSA5ODRsMjMwIC0yNDlxMTQgLTE0IDEwIC0yNC41dC0yNSAtMTAuNWgtMTUwdi00MDBoMzg1bDIxNSAtMjAwaC03NTBxLTIxIDAgLTM1LjUgMTQuNSB0LTE0LjUgMzUuNXY1NTBoLTE1MHEtMjEgMCAtMjUgMTAuNXQxMCAyNC41bDIzMCAyNDlxMTQgMTUgMzUgMTV0MzUgLTE1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMTY7IiBkPSJNNTYgMTIwMGg5NHExNyAwIDMxIC0xMXQxOCAtMjdsMzggLTE2Mmg4OTZxMjQgMCAzOSAtMTguNXQxMCAtNDIuNWwtMTAwIC00NzVxLTUgLTIxIC0yNyAtNDIuNXQtNTUgLTIxLjVoLTYzM2w0OCAtMjAwaDUzNXEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXQtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNTB2LTUwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41dC0zNS41IDE0LjV0LTE0LjUgMzUuNXY1MGgtMzAwdi01MCBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjV0LTM1LjUgMTQuNXQtMTQuNSAzNS41djUwaC0zMXEtMTggMCAtMzIuNSAxMHQtMjAuNSAxOWwtNSAxMGwtMjAxIDk2MWgtNTRxLTIwIDAgLTM1IDE0LjV0LTE1IDM1LjV0MTUgMzUuNXQzNSAxNC41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMTc7IiBkPSJNMTIwMCAxMDAwdi0xMDBoLTEyMDB2MTAwaDIwMHEwIDQxIDI5LjUgNzAuNXQ3MC41IDI5LjVoMzAwcTQxIDAgNzAuNSAtMjkuNXQyOS41IC03MC41aDUwMHpNMCA4MDBoMTIwMHYtODAwaC0xMjAwdjgwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTE4OyIgZD0iTTIwMCA4MDBsLTIwMCAtNDAwdjYwMGgyMDBxMCA0MSAyOS41IDcwLjV0NzAuNSAyOS41aDMwMHE0MiAwIDcxIC0yOS41dDI5IC03MC41aDUwMHYtMjAwaC0xMDAwek0xNTAwIDcwMGwtMzAwIC03MDBoLTEyMDBsMzAwIDcwMGgxMjAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMTk7IiBkPSJNNjM1IDExODRsMjMwIC0yNDlxMTQgLTE0IDEwIC0yNC41dC0yNSAtMTAuNWgtMTUwdi02MDFoMTUwcTIxIDAgMjUgLTEwLjV0LTEwIC0yNC41bC0yMzAgLTI0OXEtMTQgLTE1IC0zNSAtMTV0LTM1IDE1bC0yMzAgMjQ5cS0xNCAxNCAtMTAgMjQuNXQyNSAxMC41aDE1MHY2MDFoLTE1MHEtMjEgMCAtMjUgMTAuNXQxMCAyNC41bDIzMCAyNDlxMTQgMTUgMzUgMTV0MzUgLTE1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMjA7IiBkPSJNOTM2IDg2NGwyNDkgLTIyOXExNCAtMTUgMTQgLTM1LjV0LTE0IC0zNS41bC0yNDkgLTIyOXEtMTUgLTE1IC0yNS41IC0xMC41dC0xMC41IDI0LjV2MTUxaC02MDB2LTE1MXEwIC0yMCAtMTAuNSAtMjQuNXQtMjUuNSAxMC41bC0yNDkgMjI5cS0xNCAxNSAtMTQgMzUuNXQxNCAzNS41bDI0OSAyMjlxMTUgMTUgMjUuNSAxMC41dDEwLjUgLTI1LjV2LTE0OWg2MDB2MTQ5cTAgMjEgMTAuNSAyNS41dDI1LjUgLTEwLjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEyMTsiIGQ9Ik0xMTY5IDQwMGwtMTcyIDczMnEtNSAyMyAtMjMgNDUuNXQtMzggMjIuNWgtNjcycS0yMCAwIC0zOCAtMjB0LTIzIC00MWwtMTcyIC03MzloMTEzOHpNMTEwMCAzMDBoLTEwMDBxLTQxIDAgLTcwLjUgLTI5LjV0LTI5LjUgLTcwLjV2LTEwMHEwIC00MSAyOS41IC03MC41dDcwLjUgLTI5LjVoMTAwMHE0MSAwIDcwLjUgMjkuNXQyOS41IDcwLjV2MTAwcTAgNDEgLTI5LjUgNzAuNXQtNzAuNSAyOS41ek04MDAgMTAwdjEwMGgxMDB2LTEwMGgtMTAwIHpNMTAwMCAxMDB2MTAwaDEwMHYtMTAwaC0xMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEyMjsiIGQ9Ik0xMTUwIDExMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTg1MHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNXQtMzUuNSAxNC41dC0xNC41IDM1LjV2ODUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNMTAwMCAyMDBsLTY3NSAyMDBoLTM4bDQ3IC0yNzZxMyAtMTYgLTUuNSAtMjB0LTI5LjUgLTRoLTdoLTg0cS0yMCAwIC0zNC41IDE0dC0xOC41IDM1cS01NSAzMzcgLTU1IDM1MXYyNTB2NnEwIDE2IDEgMjMuNXQ2LjUgMTQgdDE3LjUgNi41aDIwMGw2NzUgMjUwdi04NTB6TTAgNzUwdi0yNTBxLTQgMCAtMTEgMC41dC0yNCA2dC0zMCAxNXQtMjQgMzB0LTExIDQ4LjV2NTBxMCAyNiAxMC41IDQ2dDI1IDMwdDI5IDE2dDI1LjUgN3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTIzOyIgZD0iTTU1MyAxMjAwaDk0cTIwIDAgMjkgLTEwLjV0MyAtMjkuNWwtMTggLTM3cTgzIC0xOSAxNDQgLTgyLjV0NzYgLTE0MC41bDYzIC0zMjdsMTE4IC0xNzNoMTdxMTkgMCAzMyAtMTQuNXQxNCAtMzV0LTEzIC00MC41dC0zMSAtMjdxLTggLTQgLTIzIC05LjV0LTY1IC0xOS41dC0xMDMgLTI1dC0xMzIuNSAtMjB0LTE1OC41IC05cS01NyAwIC0xMTUgNXQtMTA0IDEydC04OC41IDE1LjV0LTczLjUgMTcuNXQtNTQuNSAxNnQtMzUuNSAxMmwtMTEgNCBxLTE4IDggLTMxIDI4dC0xMyA0MC41dDE0IDM1dDMzIDE0LjVoMTdsMTE4IDE3M2w2MyAzMjdxMTUgNzcgNzYgMTQwdDE0NCA4M2wtMTggMzJxLTYgMTkgMy41IDMydDI4LjUgMTN6TTQ5OCAxMTBxNTAgLTYgMTAyIC02cTUzIDAgMTAyIDZxLTEyIC00OSAtMzkuNSAtNzkuNXQtNjIuNSAtMzAuNXQtNjMgMzAuNXQtMzkgNzkuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTI0OyIgZD0iTTgwMCA5NDZsMjI0IDc4bC03OCAtMjI0bDIzNCAtNDVsLTE4MCAtMTU1bDE4MCAtMTU1bC0yMzQgLTQ1bDc4IC0yMjRsLTIyNCA3OGwtNDUgLTIzNGwtMTU1IDE4MGwtMTU1IC0xODBsLTQ1IDIzNGwtMjI0IC03OGw3OCAyMjRsLTIzNCA0NWwxODAgMTU1bC0xODAgMTU1bDIzNCA0NWwtNzggMjI0bDIyNCAtNzhsNDUgMjM0bDE1NSAtMTgwbDE1NSAxODB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEyNTsiIGQ9Ik02NTAgMTIwMGg1MHE0MCAwIDcwIC00MC41dDMwIC04NC41di0xNTBsLTI4IC0xMjVoMzI4cTQwIDAgNzAgLTQwLjV0MzAgLTg0LjV2LTEwMHEwIC00NSAtMjkgLTc0bC0yMzggLTM0NHEtMTYgLTI0IC0zOCAtNDAuNXQtNDUgLTE2LjVoLTI1MHEtNyAwIC00MiAyNXQtNjYgNTBsLTMxIDI1aC02MXEtNDUgMCAtNzIuNSAxOHQtMjcuNSA1N3Y0MDBxMCAzNiAyMCA2M2wxNDUgMTk2bDk2IDE5OHExMyAyOCAzNy41IDQ4dDUxLjUgMjB6IE02NTAgMTEwMGwtMTAwIC0yMTJsLTE1MCAtMjEzdi0zNzVoMTAwbDEzNiAtMTAwaDIxNGwyNTAgMzc1djEyNWgtNDUwbDUwIDIyNXYxNzVoLTUwek01MCA4MDBoMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di01MDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTEwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2NTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTI2OyIgZD0iTTYwMCAxMTAwaDI1MHEyMyAwIDQ1IC0xNi41dDM4IC00MC41bDIzOCAtMzQ0cTI5IC0yOSAyOSAtNzR2LTEwMHEwIC00NCAtMzAgLTg0LjV0LTcwIC00MC41aC0zMjhxMjggLTExOCAyOCAtMTI1di0xNTBxMCAtNDQgLTMwIC04NC41dC03MCAtNDAuNWgtNTBxLTI3IDAgLTUxLjUgMjB0LTM3LjUgNDhsLTk2IDE5OGwtMTQ1IDE5NnEtMjAgMjcgLTIwIDYzdjQwMHEwIDM5IDI3LjUgNTd0NzIuNSAxOGg2MXExMjQgMTAwIDEzOSAxMDB6IE01MCAxMDAwaDEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djUwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTYzNiAxMDAwbC0xMzYgLTEwMGgtMTAwdi0zNzVsMTUwIC0yMTNsMTAwIC0yMTJoNTB2MTc1bC01MCAyMjVoNDUwdjEyNWwtMjUwIDM3NWgtMjE0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMjc7IiBkPSJNMzU2IDg3M2wzNjMgMjMwcTMxIDE2IDUzIC02bDExMCAtMTEycTEzIC0xMyAxMy41IC0zMnQtMTEuNSAtMzRsLTg0IC0xMjFoMzAycTg0IDAgMTM4IC0zOHQ1NCAtMTEwdC01NSAtMTExdC0xMzkgLTM5aC0xMDZsLTEzMSAtMzM5cS02IC0yMSAtMTkuNSAtNDF0LTI4LjUgLTIwaC0zNDJxLTcgMCAtOTAgODF0LTgzIDk0djUyNXEwIDE3IDE0IDM1LjV0MjggMjguNXpNNDAwIDc5MnYtNTAzbDEwMCAtODloMjkzbDEzMSAzMzkgcTYgMjEgMTkuNSA0MXQyOC41IDIwaDIwM3EyMSAwIDMwLjUgMjV0MC41IDUwdC0zMSAyNWgtNDU2aC03aC02aC01LjV0LTYgMC41dC01IDEuNXQtNSAydC00IDIuNXQtNCA0dC0yLjUgNC41cS0xMiAyNSA1IDQ3bDE0NiAxODNsLTg2IDgzek01MCA4MDBoMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di01MDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTEwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2NTAwIHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEyODsiIGQ9Ik00NzUgMTEwM2wzNjYgLTIzMHEyIC0xIDYgLTMuNXQxNCAtMTAuNXQxOCAtMTYuNXQxNC41IC0yMHQ2LjUgLTIyLjV2LTUyNXEwIC0xMyAtODYgLTk0dC05MyAtODFoLTM0MnEtMTUgMCAtMjguNSAyMHQtMTkuNSA0MWwtMTMxIDMzOWgtMTA2cS04NSAwIC0xMzkuNSAzOXQtNTQuNSAxMTF0NTQgMTEwdDEzOCAzOGgzMDJsLTg1IDEyMXEtMTEgMTUgLTEwLjUgMzR0MTMuNSAzMmwxMTAgMTEycTIyIDIyIDUzIDZ6TTM3MCA5NDVsMTQ2IC0xODMgcTE3IC0yMiA1IC00N3EtMiAtMiAtMy41IC00LjV0LTQgLTR0LTQgLTIuNXQtNSAtMnQtNSAtMS41dC02IC0wLjVoLTZoLTYuNWgtNmgtNDc1di0xMDBoMjIxcTE1IDAgMjkgLTIwdDIwIC00MWwxMzAgLTMzOWgyOTRsMTA2IDg5djUwM2wtMzQyIDIzNnpNMTA1MCA4MDBoMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di01MDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTEwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjUgdjUwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEyOTsiIGQ9Ik01NTAgMTI5NHE3MiAwIDExMSAtNTV0MzkgLTEzOXYtMTA2bDMzOSAtMTMxcTIxIC02IDQxIC0xOS41dDIwIC0yOC41di0zNDJxMCAtNyAtODEgLTkwdC05NCAtODNoLTUyNXEtMTcgMCAtMzUuNSAxNHQtMjguNSAyOGwtOSAxNGwtMjMwIDM2M3EtMTYgMzEgNiA1M2wxMTIgMTEwcTEzIDEzIDMyIDEzLjV0MzQgLTExLjVsMTIxIC04NHYzMDJxMCA4NCAzOCAxMzh0MTEwIDU0ek02MDAgOTcydjIwM3EwIDIxIC0yNSAzMC41dC01MCAwLjUgdC0yNSAtMzF2LTQ1NnYtN3YtNnYtNS41dC0wLjUgLTZ0LTEuNSAtNXQtMiAtNXQtMi41IC00dC00IC00dC00LjUgLTIuNXEtMjUgLTEyIC00NyA1bC0xODMgMTQ2bC04MyAtODZsMjM2IC0zMzloNTAzbDg5IDEwMHYyOTNsLTMzOSAxMzFxLTIxIDYgLTQxIDE5LjV0LTIwIDI4LjV6TTQ1MCAyMDBoNTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTUwMCBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEzMDsiIGQ9Ik0zNTAgMTEwMGg1MDBxMjEgMCAzNS41IDE0LjV0MTQuNSAzNS41djEwMHEwIDIxIC0xNC41IDM1LjV0LTM1LjUgMTQuNWgtNTAwcS0yMSAwIC0zNS41IC0xNC41dC0xNC41IC0zNS41di0xMDBxMCAtMjEgMTQuNSAtMzUuNXQzNS41IC0xNC41ek02MDAgMzA2di0xMDZxMCAtODQgLTM5IC0xMzl0LTExMSAtNTV0LTExMCA1NHQtMzggMTM4djMwMmwtMTIxIC04NHEtMTUgLTEyIC0zNCAtMTEuNXQtMzIgMTMuNWwtMTEyIDExMCBxLTIyIDIyIC02IDUzbDIzMCAzNjNxMSAyIDMuNSA2dDEwLjUgMTMuNXQxNi41IDE3dDIwIDEzLjV0MjIuNSA2aDUyNXExMyAwIDk0IC04M3Q4MSAtOTB2LTM0MnEwIC0xNSAtMjAgLTI4LjV0LTQxIC0xOS41ek0zMDggOTAwbC0yMzYgLTMzOWw4MyAtODZsMTgzIDE0NnEyMiAxNyA0NyA1cTIgLTEgNC41IC0yLjV0NCAtNHQyLjUgLTR0MiAtNXQxLjUgLTV0MC41IC02di01LjV2LTZ2LTd2LTQ1NnEwIC0yMiAyNSAtMzF0NTAgMC41dDI1IDMwLjUgdjIwM3EwIDE1IDIwIDI4LjV0NDEgMTkuNWwzMzkgMTMxdjI5M2wtODkgMTAwaC01MDN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEzMTsiIGQ9Ik02MDAgMTE3OHExMTggMCAyMjUgLTQ1LjV0MTg0LjUgLTEyM3QxMjMgLTE4NC41dDQ1LjUgLTIyNXQtNDUuNSAtMjI1dC0xMjMgLTE4NC41dC0xODQuNSAtMTIzdC0yMjUgLTQ1LjV0LTIyNSA0NS41dC0xODQuNSAxMjN0LTEyMyAxODQuNXQtNDUuNSAyMjV0NDUuNSAyMjV0MTIzIDE4NC41dDE4NC41IDEyM3QyMjUgNDUuNXpNOTE0IDYzMmwtMjc1IDIyM3EtMTYgMTMgLTI3LjUgOHQtMTEuNSAtMjZ2LTEzN2gtMjc1IHEtMTAgMCAtMTcuNSAtNy41dC03LjUgLTE3LjV2LTE1MHEwIC0xMCA3LjUgLTE3LjV0MTcuNSAtNy41aDI3NXYtMTM3cTAgLTIxIDExLjUgLTI2dDI3LjUgOGwyNzUgMjIzcTE2IDEzIDE2IDMydC0xNiAzMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTMyOyIgZD0iTTYwMCAxMTc4cTExOCAwIDIyNSAtNDUuNXQxODQuNSAtMTIzdDEyMyAtMTg0LjV0NDUuNSAtMjI1dC00NS41IC0yMjV0LTEyMyAtMTg0LjV0LTE4NC41IC0xMjN0LTIyNSAtNDUuNXQtMjI1IDQ1LjV0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNXQ0NS41IDIyNXQxMjMgMTg0LjV0MTg0LjUgMTIzdDIyNSA0NS41ek01NjEgODU1bC0yNzUgLTIyM3EtMTYgLTEzIC0xNiAtMzJ0MTYgLTMybDI3NSAtMjIzcTE2IC0xMyAyNy41IC04IHQxMS41IDI2djEzN2gyNzVxMTAgMCAxNy41IDcuNXQ3LjUgMTcuNXYxNTBxMCAxMCAtNy41IDE3LjV0LTE3LjUgNy41aC0yNzV2MTM3cTAgMjEgLTExLjUgMjZ0LTI3LjUgLTh6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEzMzsiIGQ9Ik02MDAgMTE3OHExMTggMCAyMjUgLTQ1LjV0MTg0LjUgLTEyM3QxMjMgLTE4NC41dDQ1LjUgLTIyNXQtNDUuNSAtMjI1dC0xMjMgLTE4NC41dC0xODQuNSAtMTIzdC0yMjUgLTQ1LjV0LTIyNSA0NS41dC0xODQuNSAxMjN0LTEyMyAxODQuNXQtNDUuNSAyMjV0NDUuNSAyMjV0MTIzIDE4NC41dDE4NC41IDEyM3QyMjUgNDUuNXpNODU1IDYzOWwtMjIzIDI3NXEtMTMgMTYgLTMyIDE2dC0zMiAtMTZsLTIyMyAtMjc1cS0xMyAtMTYgLTggLTI3LjUgdDI2IC0xMS41aDEzN3YtMjc1cTAgLTEwIDcuNSAtMTcuNXQxNy41IC03LjVoMTUwcTEwIDAgMTcuNSA3LjV0Ny41IDE3LjV2Mjc1aDEzN3EyMSAwIDI2IDExLjV0LTggMjcuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTM0OyIgZD0iTTYwMCAxMTc4cTExOCAwIDIyNSAtNDUuNXQxODQuNSAtMTIzdDEyMyAtMTg0LjV0NDUuNSAtMjI1dC00NS41IC0yMjV0LTEyMyAtMTg0LjV0LTE4NC41IC0xMjN0LTIyNSAtNDUuNXQtMjI1IDQ1LjV0LTE4NC41IDEyM3QtMTIzIDE4NC41dC00NS41IDIyNXQ0NS41IDIyNXQxMjMgMTg0LjV0MTg0LjUgMTIzdDIyNSA0NS41ek02NzUgOTAwaC0xNTBxLTEwIDAgLTE3LjUgLTcuNXQtNy41IC0xNy41di0yNzVoLTEzN3EtMjEgMCAtMjYgLTExLjUgdDggLTI3LjVsMjIzIC0yNzVxMTMgLTE2IDMyIC0xNnQzMiAxNmwyMjMgMjc1cTEzIDE2IDggMjcuNXQtMjYgMTEuNWgtMTM3djI3NXEwIDEwIC03LjUgMTcuNXQtMTcuNSA3LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTEzNTsiIGQ9Ik02MDAgMTE3NnExMTYgMCAyMjIuNSAtNDZ0MTg0IC0xMjMuNXQxMjMuNSAtMTg0dDQ2IC0yMjIuNXQtNDYgLTIyMi41dC0xMjMuNSAtMTg0dC0xODQgLTEyMy41dC0yMjIuNSAtNDZ0LTIyMi41IDQ2dC0xODQgMTIzLjV0LTEyMy41IDE4NHQtNDYgMjIyLjV0NDYgMjIyLjV0MTIzLjUgMTg0dDE4NCAxMjMuNXQyMjIuNSA0NnpNNjI3IDExMDFxLTE1IC0xMiAtMzYuNSAtMjAuNXQtMzUuNSAtMTJ0LTQzIC04dC0zOSAtNi41IHEtMTUgLTMgLTQ1LjUgMHQtNDUuNSAtMnEtMjAgLTcgLTUxLjUgLTI2LjV0LTM0LjUgLTM0LjVxLTMgLTExIDYuNSAtMjIuNXQ4LjUgLTE4LjVxLTMgLTM0IC0yNy41IC05MXQtMjkuNSAtNzlxLTkgLTM0IDUgLTkzdDggLTg3cTAgLTkgMTcgLTQ0LjV0MTYgLTU5LjVxMTIgMCAyMyAtNXQyMy41IC0xNXQxOS41IC0xNHExNiAtOCAzMyAtMTV0NDAuNSAtMTV0MzQuNSAtMTJxMjEgLTkgNTIuNSAtMzJ0NjAgLTM4dDU3LjUgLTExIHE3IC0xNSAtMyAtMzR0LTIyLjUgLTQwdC05LjUgLTM4cTEzIC0yMSAyMyAtMzQuNXQyNy41IC0yNy41dDM2LjUgLTE4cTAgLTcgLTMuNSAtMTZ0LTMuNSAtMTR0NSAtMTdxMTA0IC0yIDIyMSAxMTJxMzAgMjkgNDYuNSA0N3QzNC41IDQ5dDIxIDYzcS0xMyA4IC0zNyA4LjV0LTM2IDcuNXEtMTUgNyAtNDkuNSAxNXQtNTEuNSAxOXEtMTggMCAtNDEgLTAuNXQtNDMgLTEuNXQtNDIgLTYuNXQtMzggLTE2LjVxLTUxIC0zNSAtNjYgLTEyIHEtNCAxIC0zLjUgMjUuNXQwLjUgMjUuNXEtNiAxMyAtMjYuNSAxNy41dC0yNC41IDYuNXExIDE1IC0wLjUgMzAuNXQtNyAyOHQtMTguNSAxMS41dC0zMSAtMjFxLTIzIC0yNSAtNDIgNHEtMTkgMjggLTggNThxNiAxNiAyMiAyMnE2IC0xIDI2IC0xLjV0MzMuNSAtNHQxOS41IC0xMy41cTcgLTEyIDE4IC0yNHQyMS41IC0yMC41dDIwIC0xNXQxNS41IC0xMC41bDUgLTNxMiAxMiA3LjUgMzAuNXQ4IDM0LjV0LTAuNSAzMnEtMyAxOCAzLjUgMjkgdDE4IDIyLjV0MTUuNSAyNC41cTYgMTQgMTAuNSAzNXQ4IDMxdDE1LjUgMjIuNXQzNCAyMi41cS02IDE4IDEwIDM2cTggMCAyNCAtMS41dDI0LjUgLTEuNXQyMCA0LjV0MjAuNSAxNS41cS0xMCAyMyAtMzEgNDIuNXQtMzcuNSAyOS41dC00OSAyN3QtNDMuNSAyM3EwIDEgMiA4dDMgMTEuNXQxLjUgMTAuNXQtMSA5LjV0LTQuNSA0LjVxMzEgLTEzIDU4LjUgLTE0LjV0MzguNSAyLjVsMTIgNXE1IDI4IC05LjUgNDZ0LTM2LjUgMjR0LTUwIDE1IHQtNDEgMjBxLTE4IC00IC0zNyAwek02MTMgOTk0cTAgLTE3IDggLTQydDE3IC00NXQ5IC0yM3EtOCAxIC0zOS41IDUuNXQtNTIuNSAxMHQtMzcgMTYuNXEzIDExIDE2IDI5LjV0MTYgMjUuNXExMCAtMTAgMTkgLTEwdDE0IDZ0MTMuNSAxNC41dDE2LjUgMTIuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTM2OyIgZD0iTTc1NiAxMTU3cTE2NCA5MiAzMDYgLTlsLTI1OSAtMTM4bDE0NSAtMjMybDI1MSAxMjZxNiAtODkgLTM0IC0xNTYuNXQtMTE3IC0xMTAuNXEtNjAgLTM0IC0xMjcgLTM5LjV0LTEyNiAxNi41bC01OTYgLTU5NnEtMTUgLTE2IC0zNi41IC0xNnQtMzYuNSAxNmwtMTExIDExMHEtMTUgMTUgLTE1IDM2LjV0MTUgMzcuNWw2MDAgNTk5cS0zNCAxMDEgNS41IDIwMS41dDEzNS41IDE1NC41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMzc7IiBob3Jpei1hZHYteD0iMTIyMCIgZD0iTTEwMCAxMTk2aDEwMDBxNDEgMCA3MC41IC0yOS41dDI5LjUgLTcwLjV2LTEwMHEwIC00MSAtMjkuNSAtNzAuNXQtNzAuNSAtMjkuNWgtMTAwMHEtNDEgMCAtNzAuNSAyOS41dC0yOS41IDcwLjV2MTAwcTAgNDEgMjkuNSA3MC41dDcwLjUgMjkuNXpNMTEwMCAxMDk2aC0yMDB2LTEwMGgyMDB2MTAwek0xMDAgNzk2aDEwMDBxNDEgMCA3MC41IC0yOS41dDI5LjUgLTcwLjV2LTEwMHEwIC00MSAtMjkuNSAtNzAuNXQtNzAuNSAtMjkuNWgtMTAwMCBxLTQxIDAgLTcwLjUgMjkuNXQtMjkuNSA3MC41djEwMHEwIDQxIDI5LjUgNzAuNXQ3MC41IDI5LjV6TTExMDAgNjk2aC01MDB2LTEwMGg1MDB2MTAwek0xMDAgMzk2aDEwMDBxNDEgMCA3MC41IC0yOS41dDI5LjUgLTcwLjV2LTEwMHEwIC00MSAtMjkuNSAtNzAuNXQtNzAuNSAtMjkuNWgtMTAwMHEtNDEgMCAtNzAuNSAyOS41dC0yOS41IDcwLjV2MTAwcTAgNDEgMjkuNSA3MC41dDcwLjUgMjkuNXpNMTEwMCAyOTZoLTMwMHYtMTAwaDMwMHYxMDB6ICIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxMzg7IiBkPSJNMTUwIDEyMDBoOTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41dC0xNC41IC0zNS41dC0zNS41IC0xNC41aC05MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41dDE0LjUgMzUuNXQzNS41IDE0LjV6TTcwMCA1MDB2LTMwMGwtMjAwIC0yMDB2NTAwbC0zNTAgNTAwaDkwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTM5OyIgZD0iTTUwMCAxMjAwaDIwMHE0MSAwIDcwLjUgLTI5LjV0MjkuNSAtNzAuNXYtMTAwaDMwMHE0MSAwIDcwLjUgLTI5LjV0MjkuNSAtNzAuNXYtNDAwaC01MDB2MTAwaC0yMDB2LTEwMGgtNTAwdjQwMHEwIDQxIDI5LjUgNzAuNXQ3MC41IDI5LjVoMzAwdjEwMHEwIDQxIDI5LjUgNzAuNXQ3MC41IDI5LjV6TTUwMCAxMTAwdi0xMDBoMjAwdjEwMGgtMjAwek0xMjAwIDQwMHYtMjAwcTAgLTQxIC0yOS41IC03MC41dC03MC41IC0yOS41aC0xMDAwIHEtNDEgMCAtNzAuNSAyOS41dC0yOS41IDcwLjV2MjAwaDEyMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE0MDsiIGQ9Ik01MCAxMjAwaDMwMHEyMSAwIDI1IC0xMC41dC0xMCAtMjQuNWwtOTQgLTk0bDE5OSAtMTk5cTcgLTggNyAtMTh0LTcgLTE4bC0xMDYgLTEwNnEtOCAtNyAtMTggLTd0LTE4IDdsLTE5OSAxOTlsLTk0IC05NHEtMTQgLTE0IC0yNC41IC0xMHQtMTAuNSAyNXYzMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek04NTAgMTIwMGgzMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTMwMHEwIC0yMSAtMTAuNSAtMjV0LTI0LjUgMTBsLTk0IDk0IGwtMTk5IC0xOTlxLTggLTcgLTE4IC03dC0xOCA3bC0xMDYgMTA2cS03IDggLTcgMTh0NyAxOGwxOTkgMTk5bC05NCA5NHEtMTQgMTQgLTEwIDI0LjV0MjUgMTAuNXpNMzY0IDQ3MGwxMDYgLTEwNnE3IC04IDcgLTE4dC03IC0xOGwtMTk5IC0xOTlsOTQgLTk0cTE0IC0xNCAxMCAtMjQuNXQtMjUgLTEwLjVoLTMwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MzAwcTAgMjEgMTAuNSAyNXQyNC41IC0xMGw5NCAtOTRsMTk5IDE5OSBxOCA3IDE4IDd0MTggLTd6TTEwNzEgMjcxbDk0IDk0cTE0IDE0IDI0LjUgMTB0MTAuNSAtMjV2LTMwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMzAwcS0yMSAwIC0yNSAxMC41dDEwIDI0LjVsOTQgOTRsLTE5OSAxOTlxLTcgOCAtNyAxOHQ3IDE4bDEwNiAxMDZxOCA3IDE4IDd0MTggLTd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE0MTsiIGQ9Ik01OTYgMTE5MnExMjEgMCAyMzEuNSAtNDcuNXQxOTAgLTEyN3QxMjcgLTE5MHQ0Ny41IC0yMzEuNXQtNDcuNSAtMjMxLjV0LTEyNyAtMTkwLjV0LTE5MCAtMTI3dC0yMzEuNSAtNDd0LTIzMS41IDQ3dC0xOTAuNSAxMjd0LTEyNyAxOTAuNXQtNDcgMjMxLjV0NDcgMjMxLjV0MTI3IDE5MHQxOTAuNSAxMjd0MjMxLjUgNDcuNXpNNTk2IDEwMTBxLTExMiAwIC0yMDcuNSAtNTUuNXQtMTUxIC0xNTF0LTU1LjUgLTIwNy41dDU1LjUgLTIwNy41IHQxNTEgLTE1MXQyMDcuNSAtNTUuNXQyMDcuNSA1NS41dDE1MSAxNTF0NTUuNSAyMDcuNXQtNTUuNSAyMDcuNXQtMTUxIDE1MXQtMjA3LjUgNTUuNXpNNDU0LjUgOTA1cTIyLjUgMCAzOC41IC0xNnQxNiAtMzguNXQtMTYgLTM5dC0zOC41IC0xNi41dC0zOC41IDE2LjV0LTE2IDM5dDE2IDM4LjV0MzguNSAxNnpNNzU0LjUgOTA1cTIyLjUgMCAzOC41IC0xNnQxNiAtMzguNXQtMTYgLTM5dC0zOCAtMTYuNXEtMTQgMCAtMjkgMTBsLTU1IC0xNDUgcTE3IC0yMyAxNyAtNTFxMCAtMzYgLTI1LjUgLTYxLjV0LTYxLjUgLTI1LjV0LTYxLjUgMjUuNXQtMjUuNSA2MS41cTAgMzIgMjAuNSA1Ni41dDUxLjUgMjkuNWwxMjIgMTI2bDEgMXEtOSAxNCAtOSAyOHEwIDIzIDE2IDM5dDM4LjUgMTZ6TTM0NS41IDcwOXEyMi41IDAgMzguNSAtMTZ0MTYgLTM4LjV0LTE2IC0zOC41dC0zOC41IC0xNnQtMzguNSAxNnQtMTYgMzguNXQxNiAzOC41dDM4LjUgMTZ6TTg1NC41IDcwOXEyMi41IDAgMzguNSAtMTYgdDE2IC0zOC41dC0xNiAtMzguNXQtMzguNSAtMTZ0LTM4LjUgMTZ0LTE2IDM4LjV0MTYgMzguNXQzOC41IDE2eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNDI7IiBkPSJNNTQ2IDE3M2w0NjkgNDcwcTkxIDkxIDk5IDE5MnE3IDk4IC01MiAxNzUuNXQtMTU0IDk0LjVxLTIyIDQgLTQ3IDRxLTM0IDAgLTY2LjUgLTEwdC01Ni41IC0yM3QtNTUuNSAtMzh0LTQ4IC00MS41dC00OC41IC00Ny41cS0zNzYgLTM3NSAtMzkxIC0zOTBxLTMwIC0yNyAtNDUgLTQxLjV0LTM3LjUgLTQxdC0zMiAtNDYuNXQtMTYgLTQ3LjV0LTEuNSAtNTYuNXE5IC02MiA1My41IC05NXQ5OS41IC0zM3E3NCAwIDEyNSA1MWw1NDggNTQ4IHEzNiAzNiAyMCA3NXEtNyAxNiAtMjEuNSAyNnQtMzIuNSAxMHEtMjYgMCAtNTAgLTIzcS0xMyAtMTIgLTM5IC0zOGwtMzQxIC0zMzhxLTE1IC0xNSAtMzUuNSAtMTUuNXQtMzQuNSAxMy41dC0xNCAzNC41dDE0IDM0LjVxMzI3IDMzMyAzNjEgMzY3cTM1IDM1IDY3LjUgNTEuNXQ3OC41IDE2LjVxMTQgMCAyOSAtMXE0NCAtOCA3NC41IC0zNS41dDQzLjUgLTY4LjVxMTQgLTQ3IDIgLTk2LjV0LTQ3IC04NC41cS0xMiAtMTEgLTMyIC0zMiB0LTc5LjUgLTgxdC0xMTQuNSAtMTE1dC0xMjQuNSAtMTIzLjV0LTEyMyAtMTE5LjV0LTk2LjUgLTg5dC01NyAtNDVxLTU2IC0yNyAtMTIwIC0yN3EtNzAgMCAtMTI5IDMydC05MyA4OXEtNDggNzggLTM1IDE3M3Q4MSAxNjNsNTExIDUxMXE3MSA3MiAxMTEgOTZxOTEgNTUgMTk4IDU1cTgwIDAgMTUyIC0zM3E3OCAtMzYgMTI5LjUgLTEwM3Q2Ni41IC0xNTRxMTcgLTkzIC0xMSAtMTgzLjV0LTk0IC0xNTYuNWwtNDgyIC00NzYgcS0xNSAtMTUgLTM2IC0xNnQtMzcgMTR0LTE3LjUgMzR0MTQuNSAzNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTQzOyIgZD0iTTY0OSA5NDlxNDggNjggMTA5LjUgMTA0dDEyMS41IDM4LjV0MTE4LjUgLTIwdDEwMi41IC02NHQ3MSAtMTAwLjV0MjcgLTEyM3EwIC01NyAtMzMuNSAtMTE3LjV0LTk0IC0xMjQuNXQtMTI2LjUgLTEyNy41dC0xNTAgLTE1Mi41dC0xNDYgLTE3NHEtNjIgODUgLTE0NS41IDE3NHQtMTUwIDE1Mi41dC0xMjYuNSAxMjcuNXQtOTMuNSAxMjQuNXQtMzMuNSAxMTcuNXEwIDY0IDI4IDEyM3Q3MyAxMDAuNXQxMDQgNjR0MTE5IDIwIHQxMjAuNSAtMzguNXQxMDQuNSAtMTA0ek04OTYgOTcycS0zMyAwIC02NC41IC0xOXQtNTYuNSAtNDZ0LTQ3LjUgLTUzLjV0LTQzLjUgLTQ1LjV0LTM3LjUgLTE5dC0zNiAxOXQtNDAgNDUuNXQtNDMgNTMuNXQtNTQgNDZ0LTY1LjUgMTlxLTY3IDAgLTEyMi41IC01NS41dC01NS41IC0xMzIuNXEwIC0yMyAxMy41IC01MXQ0NiAtNjV0NTcuNSAtNjN0NzYgLTc1bDIyIC0yMnExNSAtMTQgNDQgLTQ0dDUwLjUgLTUxdDQ2IC00NHQ0MSAtMzV0MjMgLTEyIHQyMy41IDEydDQyLjUgMzZ0NDYgNDR0NTIuNSA1MnQ0NCA0M3E0IDQgMTIgMTNxNDMgNDEgNjMuNSA2MnQ1MiA1NXQ0NiA1NXQyNiA0NnQxMS41IDQ0cTAgNzkgLTUzIDEzMy41dC0xMjAgNTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTQ0OyIgZD0iTTc3Ni41IDEyMTRxOTMuNSAwIDE1OS41IC02NmwxNDEgLTE0MXE2NiAtNjYgNjYgLTE2MHEwIC00MiAtMjggLTk1LjV0LTYyIC04Ny41bC0yOSAtMjlxLTMxIDUzIC03NyA5OWwtMTggMThsOTUgOTVsLTI0NyAyNDhsLTM4OSAtMzg5bDIxMiAtMjEybC0xMDUgLTEwNmwtMTkgMThsLTE0MSAxNDFxLTY2IDY2IC02NiAxNTl0NjYgMTU5bDI4MyAyODNxNjUgNjYgMTU4LjUgNjZ6TTYwMCA3MDZsMTA1IDEwNXExMCAtOCAxOSAtMTdsMTQxIC0xNDEgcTY2IC02NiA2NiAtMTU5dC02NiAtMTU5bC0yODMgLTI4M3EtNjYgLTY2IC0xNTkgLTY2dC0xNTkgNjZsLTE0MSAxNDFxLTY2IDY2IC02NiAxNTkuNXQ2NiAxNTkuNWw1NSA1NXEyOSAtNTUgNzUgLTEwMmwxOCAtMTdsLTk1IC05NWwyNDcgLTI0OGwzODkgMzg5eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNDU7IiBkPSJNNjAzIDEyMDBxODUgMCAxNjIgLTE1dDEyNyAtMzh0NzkgLTQ4dDI5IC00NnYtOTUzcTAgLTQxIC0yOS41IC03MC41dC03MC41IC0yOS41aC02MDBxLTQxIDAgLTcwLjUgMjkuNXQtMjkuNSA3MC41djk1M3EwIDIxIDMwIDQ2LjV0ODEgNDh0MTI5IDM3LjV0MTYzIDE1ek0zMDAgMTAwMHYtNzAwaDYwMHY3MDBoLTYwMHpNNjAwIDI1NHEtNDMgMCAtNzMuNSAtMzAuNXQtMzAuNSAtNzMuNXQzMC41IC03My41dDczLjUgLTMwLjV0NzMuNSAzMC41IHQzMC41IDczLjV0LTMwLjUgNzMuNXQtNzMuNSAzMC41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNDY7IiBkPSJNOTAyIDExODVsMjgzIC0yODJxMTUgLTE1IDE1IC0zNnQtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNXQtMzUgMTVsLTM2IDM1bC0yNzkgLTI2N3YtMzAwbC0yMTIgMjEwbC0zMDggLTMwN2wtMjgwIC0yMDNsMjAzIDI4MGwzMDcgMzA4bC0yMTAgMjEyaDMwMGwyNjcgMjc5bC0zNSAzNnEtMTUgMTQgLTE1IDM1dDE0LjUgMzUuNXQzNS41IDE0LjV0MzUgLTE1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNDg7IiBkPSJNNzAwIDEyNDh2LTc4cTM4IC01IDcyLjUgLTE0LjV0NzUuNSAtMzEuNXQ3MSAtNTMuNXQ1MiAtODR0MjQgLTExOC41aC0xNTlxLTQgMzYgLTEwLjUgNTl0LTIxIDQ1dC00MCAzNS41dC02NC41IDIwLjV2LTMwN2w2NCAtMTNxMzQgLTcgNjQgLTE2LjV0NzAgLTMydDY3LjUgLTUyLjV0NDcuNSAtODB0MjAgLTExMnEwIC0xMzkgLTg5IC0yMjR0LTI0NCAtOTd2LTc3aC0xMDB2NzlxLTE1MCAxNiAtMjM3IDEwM3EtNDAgNDAgLTUyLjUgOTMuNSB0LTE1LjUgMTM5LjVoMTM5cTUgLTc3IDQ4LjUgLTEyNnQxMTcuNSAtNjV2MzM1bC0yNyA4cS00NiAxNCAtNzkgMjYuNXQtNzIgMzZ0LTYzIDUydC00MCA3Mi41dC0xNiA5OHEwIDcwIDI1IDEyNnQ2Ny41IDkydDk0LjUgNTd0MTEwIDI3djc3aDEwMHpNNjAwIDc1NHYyNzRxLTI5IC00IC01MCAtMTF0LTQyIC0yMS41dC0zMS41IC00MS41dC0xMC41IC02NXEwIC0yOSA3IC01MC41dDE2LjUgLTM0dDI4LjUgLTIyLjV0MzEuNSAtMTR0MzcuNSAtMTAgcTkgLTMgMTMgLTR6TTcwMCA1NDd2LTMxMHEyMiAyIDQyLjUgNi41dDQ1IDE1LjV0NDEuNSAyN3QyOSA0MnQxMiA1OS41dC0xMi41IDU5LjV0LTM4IDQ0LjV0LTUzIDMxdC02Ni41IDI0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE0OTsiIGQ9Ik01NjEgMTE5N3E4NCAwIDE2MC41IC00MHQxMjMuNSAtMTA5LjV0NDcgLTE0Ny41aC0xNTNxMCA0MCAtMTkuNSA3MS41dC00OS41IDQ4LjV0LTU5LjUgMjZ0LTU1LjUgOXEtMzcgMCAtNzkgLTE0LjV0LTYyIC0zNS41cS00MSAtNDQgLTQxIC0xMDFxMCAtMjYgMTMuNSAtNjN0MjYuNSAtNjF0MzcgLTY2cTYgLTkgOSAtMTRoMjQxdi0xMDBoLTE5N3E4IC01MCAtMi41IC0xMTV0LTMxLjUgLTk1cS00NSAtNjIgLTk5IC0xMTIgcTM0IDEwIDgzIDE3LjV0NzEgNy41cTMyIDEgMTAyIC0xNnQxMDQgLTE3cTgzIDAgMTM2IDMwbDUwIC0xNDdxLTMxIC0xOSAtNTggLTMwLjV0LTU1IC0xNS41dC00MiAtNC41dC00NiAtMC41cS0yMyAwIC03NiAxN3QtMTExIDMyLjV0LTk2IDExLjVxLTM5IC0zIC04MiAtMTZ0LTY3IC0yNWwtMjMgLTExbC01NSAxNDVxNCAzIDE2IDExdDE1LjUgMTAuNXQxMyA5dDE1LjUgMTJ0MTQuNSAxNHQxNy41IDE4LjVxNDggNTUgNTQgMTI2LjUgdC0zMCAxNDIuNWgtMjIxdjEwMGgxNjZxLTIzIDQ3IC00NCAxMDRxLTcgMjAgLTEyIDQxLjV0LTYgNTUuNXQ2IDY2LjV0MjkuNSA3MC41dDU4LjUgNzFxOTcgODggMjYzIDg4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNTA7IiBkPSJNNDAwIDMwMGgxNTBxMjEgMCAyNSAtMTF0LTEwIC0yNWwtMjMwIC0yNTBxLTE0IC0xNSAtMzUgLTE1dC0zNSAxNWwtMjMwIDI1MHEtMTQgMTQgLTEwIDI1dDI1IDExaDE1MHY5MDBoMjAwdi05MDB6TTkzNSAxMTg0bDIzMCAtMjQ5cTE0IC0xNCAxMCAtMjQuNXQtMjUgLTEwLjVoLTE1MHYtOTAwaC0yMDB2OTAwaC0xNTBxLTIxIDAgLTI1IDEwLjV0MTAgMjQuNWwyMzAgMjQ5cTE0IDE1IDM1IDE1dDM1IC0xNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTUxOyIgZD0iTTEwMDAgNzAwaC0xMDB2MTAwaC0xMDB2LTEwMGgtMTAwdjUwMGgzMDB2LTUwMHpNNDAwIDMwMGgxNTBxMjEgMCAyNSAtMTF0LTEwIC0yNWwtMjMwIC0yNTBxLTE0IC0xNSAtMzUgLTE1dC0zNSAxNWwtMjMwIDI1MHEtMTQgMTQgLTEwIDI1dDI1IDExaDE1MHY5MDBoMjAwdi05MDB6TTgwMSAxMTAwdi0yMDBoMTAwdjIwMGgtMTAwek0xMDAwIDM1MGwtMjAwIC0yNTBoMjAwdi0xMDBoLTMwMHYxNTBsMjAwIDI1MGgtMjAwdjEwMGgzMDB2LTE1MHogIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE1MjsiIGQ9Ik00MDAgMzAwaDE1MHEyMSAwIDI1IC0xMXQtMTAgLTI1bC0yMzAgLTI1MHEtMTQgLTE1IC0zNSAtMTV0LTM1IDE1bC0yMzAgMjUwcS0xNCAxNCAtMTAgMjV0MjUgMTFoMTUwdjkwMGgyMDB2LTkwMHpNMTAwMCAxMDUwbC0yMDAgLTI1MGgyMDB2LTEwMGgtMzAwdjE1MGwyMDAgMjUwaC0yMDB2MTAwaDMwMHYtMTUwek0xMDAwIDBoLTEwMHYxMDBoLTEwMHYtMTAwaC0xMDB2NTAwaDMwMHYtNTAwek04MDEgNDAwdi0yMDBoMTAwdjIwMGgtMTAweiAiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTUzOyIgZD0iTTQwMCAzMDBoMTUwcTIxIDAgMjUgLTExdC0xMCAtMjVsLTIzMCAtMjUwcS0xNCAtMTUgLTM1IC0xNXQtMzUgMTVsLTIzMCAyNTBxLTE0IDE0IC0xMCAyNXQyNSAxMWgxNTB2OTAwaDIwMHYtOTAwek0xMDAwIDcwMGgtMTAwdjQwMGgtMTAwdjEwMGgyMDB2LTUwMHpNMTEwMCAwaC0xMDB2MTAwaC0yMDB2NDAwaDMwMHYtNTAwek05MDEgNDAwdi0yMDBoMTAwdjIwMGgtMTAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNTQ7IiBkPSJNNDAwIDMwMGgxNTBxMjEgMCAyNSAtMTF0LTEwIC0yNWwtMjMwIC0yNTBxLTE0IC0xNSAtMzUgLTE1dC0zNSAxNWwtMjMwIDI1MHEtMTQgMTQgLTEwIDI1dDI1IDExaDE1MHY5MDBoMjAwdi05MDB6TTExMDAgNzAwaC0xMDB2MTAwaC0yMDB2NDAwaDMwMHYtNTAwek05MDEgMTEwMHYtMjAwaDEwMHYyMDBoLTEwMHpNMTAwMCAwaC0xMDB2NDAwaC0xMDB2MTAwaDIwMHYtNTAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNTU7IiBkPSJNNDAwIDMwMGgxNTBxMjEgMCAyNSAtMTF0LTEwIC0yNWwtMjMwIC0yNTBxLTE0IC0xNSAtMzUgLTE1dC0zNSAxNWwtMjMwIDI1MHEtMTQgMTQgLTEwIDI1dDI1IDExaDE1MHY5MDBoMjAwdi05MDB6TTkwMCAxMDAwaC0yMDB2MjAwaDIwMHYtMjAwek0xMDAwIDcwMGgtMzAwdjIwMGgzMDB2LTIwMHpNMTEwMCA0MDBoLTQwMHYyMDBoNDAwdi0yMDB6TTEyMDAgMTAwaC01MDB2MjAwaDUwMHYtMjAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNTY7IiBkPSJNNDAwIDMwMGgxNTBxMjEgMCAyNSAtMTF0LTEwIC0yNWwtMjMwIC0yNTBxLTE0IC0xNSAtMzUgLTE1dC0zNSAxNWwtMjMwIDI1MHEtMTQgMTQgLTEwIDI1dDI1IDExaDE1MHY5MDBoMjAwdi05MDB6TTEyMDAgMTAwMGgtNTAwdjIwMGg1MDB2LTIwMHpNMTEwMCA3MDBoLTQwMHYyMDBoNDAwdi0yMDB6TTEwMDAgNDAwaC0zMDB2MjAwaDMwMHYtMjAwek05MDAgMTAwaC0yMDB2MjAwaDIwMHYtMjAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNTc7IiBkPSJNMzUwIDExMDBoNDAwcTE2MiAwIDI1NiAtOTMuNXQ5NCAtMjU2LjV2LTQwMHEwIC0xNjUgLTkzLjUgLTI1Ny41dC0yNTYuNSAtOTIuNWgtNDAwcS0xNjUgMCAtMjU3LjUgOTIuNXQtOTIuNSAyNTcuNXY0MDBxMCAxNjUgOTIuNSAyNTcuNXQyNTcuNSA5Mi41ek04MDAgOTAwaC01MDBxLTQxIDAgLTcwLjUgLTI5LjV0LTI5LjUgLTcwLjV2LTUwMHEwIC00MSAyOS41IC03MC41dDcwLjUgLTI5LjVoNTAwcTQxIDAgNzAuNSAyOS41dDI5LjUgNzAuNSB2NTAwcTAgNDEgLTI5LjUgNzAuNXQtNzAuNSAyOS41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNTg7IiBkPSJNMzUwIDExMDBoNDAwcTE2NSAwIDI1Ny41IC05Mi41dDkyLjUgLTI1Ny41di00MDBxMCAtMTY1IC05Mi41IC0yNTcuNXQtMjU3LjUgLTkyLjVoLTQwMHEtMTYzIDAgLTI1Ni41IDkyLjV0LTkzLjUgMjU3LjV2NDAwcTAgMTYzIDk0IDI1Ni41dDI1NiA5My41ek04MDAgOTAwaC01MDBxLTQxIDAgLTcwLjUgLTI5LjV0LTI5LjUgLTcwLjV2LTUwMHEwIC00MSAyOS41IC03MC41dDcwLjUgLTI5LjVoNTAwcTQxIDAgNzAuNSAyOS41dDI5LjUgNzAuNSB2NTAwcTAgNDEgLTI5LjUgNzAuNXQtNzAuNSAyOS41ek00NDAgNzcwbDI1MyAtMTkwcTE3IC0xMiAxNyAtMzB0LTE3IC0zMGwtMjUzIC0xOTBxLTE2IC0xMiAtMjggLTYuNXQtMTIgMjYuNXY0MDBxMCAyMSAxMiAyNi41dDI4IC02LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE1OTsiIGQ9Ik0zNTAgMTEwMGg0MDBxMTYzIDAgMjU2LjUgLTk0dDkzLjUgLTI1NnYtNDAwcTAgLTE2NSAtOTIuNSAtMjU3LjV0LTI1Ny41IC05Mi41aC00MDBxLTE2NSAwIC0yNTcuNSA5Mi41dC05Mi41IDI1Ny41djQwMHEwIDE2MyA5Mi41IDI1Ni41dDI1Ny41IDkzLjV6TTgwMCA5MDBoLTUwMHEtNDEgMCAtNzAuNSAtMjkuNXQtMjkuNSAtNzAuNXYtNTAwcTAgLTQxIDI5LjUgLTcwLjV0NzAuNSAtMjkuNWg1MDBxNDEgMCA3MC41IDI5LjV0MjkuNSA3MC41IHY1MDBxMCA0MSAtMjkuNSA3MC41dC03MC41IDI5LjV6TTM1MCA3MDBoNDAwcTIxIDAgMjYuNSAtMTJ0LTYuNSAtMjhsLTE5MCAtMjUzcS0xMiAtMTcgLTMwIC0xN3QtMzAgMTdsLTE5MCAyNTNxLTEyIDE2IC02LjUgMjh0MjYuNSAxMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTYwOyIgZD0iTTM1MCAxMTAwaDQwMHExNjUgMCAyNTcuNSAtOTIuNXQ5Mi41IC0yNTcuNXYtNDAwcTAgLTE2MyAtOTIuNSAtMjU2LjV0LTI1Ny41IC05My41aC00MDBxLTE2MyAwIC0yNTYuNSA5NHQtOTMuNSAyNTZ2NDAwcTAgMTY1IDkyLjUgMjU3LjV0MjU3LjUgOTIuNXpNODAwIDkwMGgtNTAwcS00MSAwIC03MC41IC0yOS41dC0yOS41IC03MC41di01MDBxMCAtNDEgMjkuNSAtNzAuNXQ3MC41IC0yOS41aDUwMHE0MSAwIDcwLjUgMjkuNXQyOS41IDcwLjUgdjUwMHEwIDQxIC0yOS41IDcwLjV0LTcwLjUgMjkuNXpNNTgwIDY5M2wxOTAgLTI1M3ExMiAtMTYgNi41IC0yOHQtMjYuNSAtMTJoLTQwMHEtMjEgMCAtMjYuNSAxMnQ2LjUgMjhsMTkwIDI1M3ExMiAxNyAzMCAxN3QzMCAtMTd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE2MTsiIGQ9Ik01NTAgMTEwMGg0MDBxMTY1IDAgMjU3LjUgLTkyLjV0OTIuNSAtMjU3LjV2LTQwMHEwIC0xNjUgLTkyLjUgLTI1Ny41dC0yNTcuNSAtOTIuNWgtNDAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDQ1MHE0MSAwIDcwLjUgMjkuNXQyOS41IDcwLjV2NTAwcTAgNDEgLTI5LjUgNzAuNXQtNzAuNSAyOS41aC00NTBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMCBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek0zMzggODY3bDMyNCAtMjg0cTE2IC0xNCAxNiAtMzN0LTE2IC0zM2wtMzI0IC0yODRxLTE2IC0xNCAtMjcgLTl0LTExIDI2djE1MGgtMjUwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYyMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDI1MHYxNTBxMCAyMSAxMSAyNnQyNyAtOXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTYyOyIgZD0iTTc5MyAxMTgybDkgLTlxOCAtMTAgNSAtMjdxLTMgLTExIC03OSAtMjI1LjV0LTc4IC0yMjEuNWwzMDAgMXEyNCAwIDMyLjUgLTE3LjV0LTUuNSAtMzUuNXEtMSAwIC0xMzMuNSAtMTU1dC0yNjcgLTMxMi41dC0xMzguNSAtMTYyLjVxLTEyIC0xNSAtMjYgLTE1aC05bC05IDhxLTkgMTEgLTQgMzJxMiA5IDQyIDEyMy41dDc5IDIyNC41bDM5IDExMGgtMzAycS0yMyAwIC0zMSAxOXEtMTAgMjEgNiA0MXE3NSA4NiAyMDkuNSAyMzcuNSB0MjI4IDI1N3Q5OC41IDExMS41cTkgMTYgMjUgMTZoOXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTYzOyIgZD0iTTM1MCAxMTAwaDQwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC00NTBxLTQxIDAgLTcwLjUgLTI5LjV0LTI5LjUgLTcwLjV2LTUwMHEwIC00MSAyOS41IC03MC41dDcwLjUgLTI5LjVoNDUwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xMDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTQwMHEtMTY1IDAgLTI1Ny41IDkyLjV0LTkyLjUgMjU3LjV2NDAwIHEwIDE2NSA5Mi41IDI1Ny41dDI1Ny41IDkyLjV6TTkzOCA4NjdsMzI0IC0yODRxMTYgLTE0IDE2IC0zM3QtMTYgLTMzbC0zMjQgLTI4NHEtMTYgLTE0IC0yNyAtOXQtMTEgMjZ2MTUwaC0yNTBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djIwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjVoMjUwdjE1MHEwIDIxIDExIDI2dDI3IC05eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNjQ7IiBkPSJNNzUwIDEyMDBoNDAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di00MDBxMCAtMjEgLTEwLjUgLTI1dC0yNC41IDEwbC0xMDkgMTA5bC0zMTIgLTMxMnEtMTUgLTE1IC0zNS41IC0xNXQtMzUuNSAxNWwtMTQxIDE0MXEtMTUgMTUgLTE1IDM1LjV0MTUgMzUuNWwzMTIgMzEybC0xMDkgMTA5cS0xNCAxNCAtMTAgMjQuNXQyNSAxMC41ek00NTYgOTAwaC0xNTZxLTQxIDAgLTcwLjUgLTI5LjV0LTI5LjUgLTcwLjV2LTUwMCBxMCAtNDEgMjkuNSAtNzAuNXQ3MC41IC0yOS41aDUwMHE0MSAwIDcwLjUgMjkuNXQyOS41IDcwLjV2MTQ4bDIwMCAyMDB2LTI5OHEwIC0xNjUgLTkzLjUgLTI1Ny41dC0yNTYuNSAtOTIuNWgtNDAwcS0xNjUgMCAtMjU3LjUgOTIuNXQtOTIuNSAyNTcuNXY0MDBxMCAxNjUgOTIuNSAyNTcuNXQyNTcuNSA5Mi41aDMwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTY1OyIgZD0iTTYwMCAxMTg2cTExOSAwIDIyNy41IC00Ni41dDE4NyAtMTI1dDEyNSAtMTg3dDQ2LjUgLTIyNy41dC00Ni41IC0yMjcuNXQtMTI1IC0xODd0LTE4NyAtMTI1dC0yMjcuNSAtNDYuNXQtMjI3LjUgNDYuNXQtMTg3IDEyNXQtMTI1IDE4N3QtNDYuNSAyMjcuNXQ0Ni41IDIyNy41dDEyNSAxODd0MTg3IDEyNXQyMjcuNSA0Ni41ek02MDAgMTAyMnEtMTE1IDAgLTIxMiAtNTYuNXQtMTUzLjUgLTE1My41dC01Ni41IC0yMTJ0NTYuNSAtMjEyIHQxNTMuNSAtMTUzLjV0MjEyIC01Ni41dDIxMiA1Ni41dDE1My41IDE1My41dDU2LjUgMjEydC01Ni41IDIxMnQtMTUzLjUgMTUzLjV0LTIxMiA1Ni41ek02MDAgNzk0cTgwIDAgMTM3IC01N3Q1NyAtMTM3dC01NyAtMTM3dC0xMzcgLTU3dC0xMzcgNTd0LTU3IDEzN3Q1NyAxMzd0MTM3IDU3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNjY7IiBkPSJNNDUwIDEyMDBoMjAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0zNTBoMjQ1cTIwIDAgMjUgLTExdC05IC0yNmwtMzgzIC00MjZxLTE0IC0xNSAtMzMuNSAtMTV0LTMyLjUgMTVsLTM3OSA0MjZxLTEzIDE1IC04LjUgMjZ0MjUuNSAxMWgyNTB2MzUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNTAgMzAwaDEwMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTI1MGgtMTEwMHYyNTBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41eiBNOTAwIDIwMHYtNTBoMTAwdjUwaC0xMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE2NzsiIGQ9Ik01ODMgMTE4MmwzNzggLTQzNXExNCAtMTUgOSAtMzF0LTI2IC0xNmgtMjQ0di0yNTBxMCAtMjAgLTE3IC0zNXQtMzkgLTE1aC0yMDBxLTIwIDAgLTMyIDE0LjV0LTEyIDM1LjV2MjUwaC0yNTBxLTIwIDAgLTI1LjUgMTYuNXQ4LjUgMzEuNWwzODMgNDMxcTE0IDE2IDMzLjUgMTd0MzMuNSAtMTR6TTUwIDMwMGgxMDAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0yNTBoLTExMDB2MjUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXogTTkwMCAyMDB2LTUwaDEwMHY1MGgtMTAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNjg7IiBkPSJNMzk2IDcyM2wzNjkgMzY5cTcgNyAxNy41IDd0MTcuNSAtN2wxMzkgLTEzOXE3IC04IDcgLTE4LjV0LTcgLTE3LjVsLTUyNSAtNTI1cS03IC04IC0xNy41IC04dC0xNy41IDhsLTI5MiAyOTFxLTcgOCAtNyAxOHQ3IDE4bDEzOSAxMzlxOCA3IDE4LjUgN3QxNy41IC03ek01MCAzMDBoMTAwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjUwaC0xMTAwdjI1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTkwMCAyMDB2LTUwaDEwMHY1MCBoLTEwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTY5OyIgZD0iTTEzNSAxMDIzbDE0MiAxNDJxMTQgMTQgMzUgMTR0MzUgLTE0bDc3IC03N2wtMjEyIC0yMTJsLTc3IDc2cS0xNCAxNSAtMTQgMzZ0MTQgMzV6TTY1NSA4NTVsMjEwIDIxMHExNCAxNCAyNC41IDEwdDEwLjUgLTI1bC0yIC01OTlxLTEgLTIwIC0xNS41IC0zNXQtMzUuNSAtMTVsLTU5NyAtMXEtMjEgMCAtMjUgMTAuNXQxMCAyNC41bDIwOCAyMDhsLTE1NCAxNTVsMjEyIDIxMnpNNTAgMzAwaDEwMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjUgdi0yNTBoLTExMDB2MjUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNOTAwIDIwMHYtNTBoMTAwdjUwaC0xMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE3MDsiIGQ9Ik0zNTAgMTIwMGw1OTkgLTJxMjAgLTEgMzUgLTE1LjV0MTUgLTM1LjVsMSAtNTk3cTAgLTIxIC0xMC41IC0yNXQtMjQuNSAxMGwtMjA4IDIwOGwtMTU1IC0xNTRsLTIxMiAyMTJsMTU1IDE1NGwtMjEwIDIxMHEtMTQgMTQgLTEwIDI0LjV0MjUgMTAuNXpNNTI0IDUxMmwtNzYgLTc3cS0xNSAtMTQgLTM2IC0xNHQtMzUgMTRsLTE0MiAxNDJxLTE0IDE0IC0xNCAzNXQxNCAzNWw3NyA3N3pNNTAgMzAwaDEwMDBxMjEgMCAzNS41IC0xNC41IHQxNC41IC0zNS41di0yNTBoLTExMDB2MjUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNOTAwIDIwMHYtNTBoMTAwdjUwaC0xMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE3MTsiIGQ9Ik0xMjAwIDEwM2wtNDgzIDI3NmwtMzE0IC0zOTl2NDIzaC0zOTlsMTE5NiA3OTZ2LTEwOTZ6TTQ4MyA0MjR2LTIzMGw2ODMgOTUzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNzI7IiBkPSJNMTEwMCAxMDAwdi04NTBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTE1MHY0MDBoLTcwMHYtNDAwaC0xNTBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMDBxMCAyMCAxNC41IDM1dDM1LjUgMTVoMjUwdi0zMDBoNTAwdjMwMGgxMDB6TTcwMCAxMDAwaC0xMDB2MjAwaDEwMHYtMjAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNzM7IiBkPSJNMTEwMCAxMDAwbC0yIC0xNDlsLTI5OSAtMjk5bC05NSA5NXEtOSA5IC0yMS41IDl0LTIxLjUgLTlsLTE0OSAtMTQ3aC0zMTJ2LTQwMGgtMTUwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDAwcTAgMjAgMTQuNSAzNXQzNS41IDE1aDI1MHYtMzAwaDUwMHYzMDBoMTAwek03MDAgMTAwMGgtMTAwdjIwMGgxMDB2LTIwMHpNMTEzMiA2MzhsMTA2IC0xMDZxNyAtNyA3IC0xNy41dC03IC0xNy41bC00MjAgLTQyMXEtOCAtNyAtMTggLTcgdC0xOCA3bC0yMDIgMjAzcS04IDcgLTggMTcuNXQ4IDE3LjVsMTA2IDEwNnE3IDggMTcuNSA4dDE3LjUgLThsNzkgLTc5bDI5NyAyOTdxNyA3IDE3LjUgN3QxNy41IC03eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNzQ7IiBkPSJNMTEwMCAxMDAwdi0yNjlsLTEwMyAtMTAzbC0xMzQgMTM0cS0xNSAxNSAtMzMuNSAxNi41dC0zNC41IC0xMi41bC0yNjYgLTI2NmgtMzI5di00MDBoLTE1MHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwMHEwIDIwIDE0LjUgMzV0MzUuNSAxNWgyNTB2LTMwMGg1MDB2MzAwaDEwMHpNNzAwIDEwMDBoLTEwMHYyMDBoMTAwdi0yMDB6TTEyMDIgNTcybDcwIC03MHExNSAtMTUgMTUgLTM1LjV0LTE1IC0zNS41bC0xMzEgLTEzMSBsMTMxIC0xMzFxMTUgLTE1IDE1IC0zNS41dC0xNSAtMzUuNWwtNzAgLTcwcS0xNSAtMTUgLTM1LjUgLTE1dC0zNS41IDE1bC0xMzEgMTMxbC0xMzEgLTEzMXEtMTUgLTE1IC0zNS41IC0xNXQtMzUuNSAxNWwtNzAgNzBxLTE1IDE1IC0xNSAzNS41dDE1IDM1LjVsMTMxIDEzMWwtMTMxIDEzMXEtMTUgMTUgLTE1IDM1LjV0MTUgMzUuNWw3MCA3MHExNSAxNSAzNS41IDE1dDM1LjUgLTE1bDEzMSAtMTMxbDEzMSAxMzFxMTUgMTUgMzUuNSAxNSB0MzUuNSAtMTV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE3NTsiIGQ9Ik0xMTAwIDEwMDB2LTMwMGgtMzUwcS0yMSAwIC0zNS41IC0xNC41dC0xNC41IC0zNS41di0xNTBoLTUwMHYtNDAwaC0xNTBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMDBxMCAyMCAxNC41IDM1dDM1LjUgMTVoMjUwdi0zMDBoNTAwdjMwMGgxMDB6TTcwMCAxMDAwaC0xMDB2MjAwaDEwMHYtMjAwek04NTAgNjAwaDEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMjUwaDE1MHEyMSAwIDI1IC0xMC41dC0xMCAtMjQuNSBsLTIzMCAtMjMwcS0xNCAtMTQgLTM1IC0xNHQtMzUgMTRsLTIzMCAyMzBxLTE0IDE0IC0xMCAyNC41dDI1IDEwLjVoMTUwdjI1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE3NjsiIGQ9Ik0xMTAwIDEwMDB2LTQwMGwtMTY1IDE2NXEtMTQgMTUgLTM1IDE1dC0zNSAtMTVsLTI2MyAtMjY1aC00MDJ2LTQwMGgtMTUwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDAwcTAgMjAgMTQuNSAzNXQzNS41IDE1aDI1MHYtMzAwaDUwMHYzMDBoMTAwek03MDAgMTAwMGgtMTAwdjIwMGgxMDB2LTIwMHpNOTM1IDU2NWwyMzAgLTIyOXExNCAtMTUgMTAgLTI1LjV0LTI1IC0xMC41aC0xNTB2LTI1MHEwIC0yMCAtMTQuNSAtMzUgdC0zNS41IC0xNWgtMTAwcS0yMSAwIC0zNS41IDE1dC0xNC41IDM1djI1MGgtMTUwcS0yMSAwIC0yNSAxMC41dDEwIDI1LjVsMjMwIDIyOXExNCAxNSAzNSAxNXQzNSAtMTV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE3NzsiIGQ9Ik01MCAxMTAwaDExMDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTE1MGgtMTIwMHYxNTBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek0xMjAwIDgwMHYtNTUwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXY1NTBoMTIwMHpNMTAwIDUwMHYtMjAwaDQwMHYyMDBoLTQwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTc4OyIgZD0iTTkzNSAxMTY1bDI0OCAtMjMwcTE0IC0xNCAxNCAtMzV0LTE0IC0zNWwtMjQ4IC0yMzBxLTE0IC0xNCAtMjQuNSAtMTB0LTEwLjUgMjV2MTUwaC00MDB2MjAwaDQwMHYxNTBxMCAyMSAxMC41IDI1dDI0LjUgLTEwek0yMDAgODAwaC01MHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNWg1MHYtMjAwek00MDAgODAwaC0xMDB2MjAwaDEwMHYtMjAwek0xOCA0MzVsMjQ3IDIzMCBxMTQgMTQgMjQuNSAxMHQxMC41IC0yNXYtMTUwaDQwMHYtMjAwaC00MDB2LTE1MHEwIC0yMSAtMTAuNSAtMjV0LTI0LjUgMTBsLTI0NyAyMzBxLTE1IDE0IC0xNSAzNXQxNSAzNXpNOTAwIDMwMGgtMTAwdjIwMGgxMDB2LTIwMHpNMTAwMCA1MDBoNTFxMjAgMCAzNC41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzQuNSAtMTQuNWgtNTF2MjAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxNzk7IiBkPSJNODYyIDEwNzNsMjc2IDExNnEyNSAxOCA0My41IDh0MTguNSAtNDF2LTExMDZxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTIwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2Mzk3cS00IDEgLTExIDV0LTI0IDE3LjV0LTMwIDI5dC0yNCA0MnQtMTEgNTYuNXYzNTlxMCAzMSAxOC41IDY1dDQzLjUgNTJ6TTU1MCAxMjAwcTIyIDAgMzQuNSAtMTIuNXQxNC41IC0yNC41bDEgLTEzdi00NTBxMCAtMjggLTEwLjUgLTU5LjUgdC0yNSAtNTZ0LTI5IC00NXQtMjUuNSAtMzEuNWwtMTAgLTExdi00NDdxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTIwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2NDQ3cS00IDQgLTExIDExLjV0LTI0IDMwLjV0LTMwIDQ2dC0yNCA1NXQtMTEgNjB2NDUwcTAgMiAwLjUgNS41dDQgMTJ0OC41IDE1dDE0LjUgMTJ0MjIuNSA1LjVxMjAgMCAzMi41IC0xMi41dDE0LjUgLTI0LjVsMyAtMTN2LTM1MGgxMDB2MzUwdjUuNXQyLjUgMTIgdDcgMTV0MTUgMTJ0MjUuNSA1LjVxMjMgMCAzNS41IC0xMi41dDEzLjUgLTI0LjVsMSAtMTN2LTM1MGgxMDB2MzUwcTAgMiAwLjUgNS41dDMgMTJ0NyAxNXQxNSAxMnQyNC41IDUuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTgwOyIgZD0iTTEyMDAgMTEwMHYtNTZxLTQgMCAtMTEgLTAuNXQtMjQgLTN0LTMwIC03LjV0LTI0IC0xNXQtMTEgLTI0di04ODhxMCAtMjIgMjUgLTM0LjV0NTAgLTEzLjVsMjUgLTJ2LTU2aC00MDB2NTZxNzUgMCA4Ny41IDYuNXQxMi41IDQzLjV2Mzk0aC01MDB2LTM5NHEwIC0zNyAxMi41IC00My41dDg3LjUgLTYuNXYtNTZoLTQwMHY1NnE0IDAgMTEgMC41dDI0IDN0MzAgNy41dDI0IDE1dDExIDI0djg4OHEwIDIyIC0yNSAzNC41dC01MCAxMy41IGwtMjUgMnY1Nmg0MDB2LTU2cS03NSAwIC04Ny41IC02LjV0LTEyLjUgLTQzLjV2LTM5NGg1MDB2Mzk0cTAgMzcgLTEyLjUgNDMuNXQtODcuNSA2LjV2NTZoNDAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxODE7IiBkPSJNNjc1IDEwMDBoMzc1cTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xNTBoLTEwNWwtMjk1IC05OHY5OGwtMjAwIDIwMGgtNDAwbDEwMCAxMDBoMzc1ek0xMDAgOTAwaDMwMHE0MSAwIDcwLjUgLTI5LjV0MjkuNSAtNzAuNXYtNTAwcTAgLTQxIC0yOS41IC03MC41dC03MC41IC0yOS41aC0zMDBxLTQxIDAgLTcwLjUgMjkuNXQtMjkuNSA3MC41djUwMHEwIDQxIDI5LjUgNzAuNXQ3MC41IDI5LjV6TTEwMCA4MDB2LTIwMGgzMDB2MjAwIGgtMzAwek0xMTAwIDUzNWwtNDAwIC0xMzN2MTYzbDQwMCAxMzN2LTE2M3pNMTAwIDUwMHYtMjAwaDMwMHYyMDBoLTMwMHpNMTEwMCAzOTh2LTI0OHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMzc1bC0xMDAgLTEwMGgtMzc1bC0xMDAgMTAwaDQwMGwyMDAgMjAwaDEwNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTgyOyIgZD0iTTE3IDEwMDdsMTYyIDE2MnExNyAxNyA0MCAxNHQzNyAtMjJsMTM5IC0xOTRxMTQgLTIwIDExIC00NC41dC0yMCAtNDEuNWwtMTE5IC0xMThxMTAyIC0xNDIgMjI4IC0yNjh0MjY3IC0yMjdsMTE5IDExOHExNyAxNyA0Mi41IDE5dDQ0LjUgLTEybDE5MiAtMTM2cTE5IC0xNCAyMi41IC0zNy41dC0xMy41IC00MC41bC0xNjMgLTE2MnEtMyAtMSAtOS41IC0xdC0yOS41IDJ0LTQ3LjUgNnQtNjIuNSAxNC41dC03Ny41IDI2LjV0LTkwIDQyLjUgdC0xMDEuNSA2MHQtMTExIDgzdC0xMTkgMTA4LjVxLTc0IDc0IC0xMzMuNSAxNTAuNXQtOTQuNSAxMzguNXQtNjAgMTE5LjV0LTM0LjUgMTAwdC0xNSA3NC41dC00LjUgNDh6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE4MzsiIGQ9Ik02MDAgMTEwMHE5MiAwIDE3NSAtMTAuNXQxNDEuNSAtMjd0MTA4LjUgLTM2LjV0ODEuNSAtNDB0NTMuNSAtMzd0MzEgLTI3bDkgLTEwdi0yMDBxMCAtMjEgLTE0LjUgLTMzdC0zNC41IC05bC0yMDIgMzRxLTIwIDMgLTM0LjUgMjB0LTE0LjUgMzh2MTQ2cS0xNDEgMjQgLTMwMCAyNHQtMzAwIC0yNHYtMTQ2cTAgLTIxIC0xNC41IC0zOHQtMzQuNSAtMjBsLTIwMiAtMzRxLTIwIC0zIC0zNC41IDl0LTE0LjUgMzN2MjAwcTMgNCA5LjUgMTAuNSB0MzEgMjZ0NTQgMzcuNXQ4MC41IDM5LjV0MTA5IDM3LjV0MTQxIDI2LjV0MTc1IDEwLjV6TTYwMCA3OTVxNTYgMCA5NyAtOS41dDYwIC0yMy41dDMwIC0yOHQxMiAtMjRsMSAtMTB2LTUwbDM2NSAtMzAzcTE0IC0xNSAyNC41IC00MHQxMC41IC00NXYtMjEycTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYyMTJxMCAyMCAxMC41IDQ1dDI0LjUgNDBsMzY1IDMwM3Y1MCBxMCA0IDEgMTAuNXQxMiAyM3QzMCAyOXQ2MCAyMi41dDk3IDEweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxODQ7IiBkPSJNMTEwMCA3MDBsLTIwMCAtMjAwaC02MDBsLTIwMCAyMDB2NTAwaDIwMHYtMjAwaDIwMHYyMDBoMjAwdi0yMDBoMjAwdjIwMGgyMDB2LTUwMHpNMjUwIDQwMGg3MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV0LTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTEybDEzNyAtMTAwaC05NTBsMTM3IDEwMGgtMTJxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41dDE0LjUgMzUuNXQzNS41IDE0LjV6TTUwIDEwMGgxMTAwcTIxIDAgMzUuNSAtMTQuNSB0MTQuNSAtMzUuNXYtNTBoLTEyMDB2NTBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxODU7IiBkPSJNNzAwIDExMDBoLTEwMHEtNDEgMCAtNzAuNSAtMjkuNXQtMjkuNSAtNzAuNXYtMTAwMGgzMDB2MTAwMHEwIDQxIC0yOS41IDcwLjV0LTcwLjUgMjkuNXpNMTEwMCA4MDBoLTEwMHEtNDEgMCAtNzAuNSAtMjkuNXQtMjkuNSAtNzAuNXYtNzAwaDMwMHY3MDBxMCA0MSAtMjkuNSA3MC41dC03MC41IDI5LjV6TTQwMCAwaC0zMDB2NDAwcTAgNDEgMjkuNSA3MC41dDcwLjUgMjkuNWgxMDBxNDEgMCA3MC41IC0yOS41dDI5LjUgLTcwLjV2LTQwMHogIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE4NjsiIGQ9Ik0yMDAgMTEwMGg3MDBxMTI0IDAgMjEyIC04OHQ4OCAtMjEydi01MDBxMCAtMTI0IC04OCAtMjEydC0yMTIgLTg4aC03MDBxLTEyNCAwIC0yMTIgODh0LTg4IDIxMnY1MDBxMCAxMjQgODggMjEydDIxMiA4OHpNMTAwIDkwMHYtNzAwaDkwMHY3MDBoLTkwMHpNNTAwIDcwMGgtMjAwdi0xMDBoMjAwdi0zMDBoLTMwMHYxMDBoMjAwdjEwMGgtMjAwdjMwMGgzMDB2LTEwMHpNOTAwIDcwMHYtMzAwbC0xMDAgLTEwMGgtMjAwdjUwMGgyMDB6IE03MDAgNzAwdi0zMDBoMTAwdjMwMGgtMTAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxODc7IiBkPSJNMjAwIDExMDBoNzAwcTEyNCAwIDIxMiAtODh0ODggLTIxMnYtNTAwcTAgLTEyNCAtODggLTIxMnQtMjEyIC04OGgtNzAwcS0xMjQgMCAtMjEyIDg4dC04OCAyMTJ2NTAwcTAgMTI0IDg4IDIxMnQyMTIgODh6TTEwMCA5MDB2LTcwMGg5MDB2NzAwaC05MDB6TTUwMCAzMDBoLTEwMHYyMDBoLTEwMHYtMjAwaC0xMDB2NTAwaDEwMHYtMjAwaDEwMHYyMDBoMTAwdi01MDB6TTkwMCA3MDB2LTMwMGwtMTAwIC0xMDBoLTIwMHY1MDBoMjAweiBNNzAwIDcwMHYtMzAwaDEwMHYzMDBoLTEwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTg4OyIgZD0iTTIwMCAxMTAwaDcwMHExMjQgMCAyMTIgLTg4dDg4IC0yMTJ2LTUwMHEwIC0xMjQgLTg4IC0yMTJ0LTIxMiAtODhoLTcwMHEtMTI0IDAgLTIxMiA4OHQtODggMjEydjUwMHEwIDEyNCA4OCAyMTJ0MjEyIDg4ek0xMDAgOTAwdi03MDBoOTAwdjcwMGgtOTAwek01MDAgNzAwaC0yMDB2LTMwMGgyMDB2LTEwMGgtMzAwdjUwMGgzMDB2LTEwMHpNOTAwIDcwMGgtMjAwdi0zMDBoMjAwdi0xMDBoLTMwMHY1MDBoMzAwdi0xMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE4OTsiIGQ9Ik0yMDAgMTEwMGg3MDBxMTI0IDAgMjEyIC04OHQ4OCAtMjEydi01MDBxMCAtMTI0IC04OCAtMjEydC0yMTIgLTg4aC03MDBxLTEyNCAwIC0yMTIgODh0LTg4IDIxMnY1MDBxMCAxMjQgODggMjEydDIxMiA4OHpNMTAwIDkwMHYtNzAwaDkwMHY3MDBoLTkwMHpNNTAwIDQwMGwtMzAwIDE1MGwzMDAgMTUwdi0zMDB6TTkwMCA1NTBsLTMwMCAtMTUwdjMwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTkwOyIgZD0iTTIwMCAxMTAwaDcwMHExMjQgMCAyMTIgLTg4dDg4IC0yMTJ2LTUwMHEwIC0xMjQgLTg4IC0yMTJ0LTIxMiAtODhoLTcwMHEtMTI0IDAgLTIxMiA4OHQtODggMjEydjUwMHEwIDEyNCA4OCAyMTJ0MjEyIDg4ek0xMDAgOTAwdi03MDBoOTAwdjcwMGgtOTAwek05MDAgMzAwaC03MDB2NTAwaDcwMHYtNTAwek04MDAgNzAwaC0xMzBxLTM4IDAgLTY2LjUgLTQzdC0yOC41IC0xMDh0MjcgLTEwN3Q2OCAtNDJoMTMwdjMwMHpNMzAwIDcwMHYtMzAwIGgxMzBxNDEgMCA2OCA0MnQyNyAxMDd0LTI4LjUgMTA4dC02Ni41IDQzaC0xMzB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE5MTsiIGQ9Ik0yMDAgMTEwMGg3MDBxMTI0IDAgMjEyIC04OHQ4OCAtMjEydi01MDBxMCAtMTI0IC04OCAtMjEydC0yMTIgLTg4aC03MDBxLTEyNCAwIC0yMTIgODh0LTg4IDIxMnY1MDBxMCAxMjQgODggMjEydDIxMiA4OHpNMTAwIDkwMHYtNzAwaDkwMHY3MDBoLTkwMHpNNTAwIDcwMGgtMjAwdi0xMDBoMjAwdi0zMDBoLTMwMHYxMDBoMjAwdjEwMGgtMjAwdjMwMGgzMDB2LTEwMHpNOTAwIDMwMGgtMTAwdjQwMGgtMTAwdjEwMGgyMDB2LTUwMHogTTcwMCAzMDBoLTEwMHYxMDBoMTAwdi0xMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE5MjsiIGQ9Ik0yMDAgMTEwMGg3MDBxMTI0IDAgMjEyIC04OHQ4OCAtMjEydi01MDBxMCAtMTI0IC04OCAtMjEydC0yMTIgLTg4aC03MDBxLTEyNCAwIC0yMTIgODh0LTg4IDIxMnY1MDBxMCAxMjQgODggMjEydDIxMiA4OHpNMTAwIDkwMHYtNzAwaDkwMHY3MDBoLTkwMHpNMzAwIDcwMGgyMDB2LTQwMGgtMzAwdjUwMGgxMDB2LTEwMHpNOTAwIDMwMGgtMTAwdjQwMGgtMTAwdjEwMGgyMDB2LTUwMHpNMzAwIDYwMHYtMjAwaDEwMHYyMDBoLTEwMHogTTcwMCAzMDBoLTEwMHYxMDBoMTAwdi0xMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE5MzsiIGQ9Ik0yMDAgMTEwMGg3MDBxMTI0IDAgMjEyIC04OHQ4OCAtMjEydi01MDBxMCAtMTI0IC04OCAtMjEydC0yMTIgLTg4aC03MDBxLTEyNCAwIC0yMTIgODh0LTg4IDIxMnY1MDBxMCAxMjQgODggMjEydDIxMiA4OHpNMTAwIDkwMHYtNzAwaDkwMHY3MDBoLTkwMHpNNTAwIDUwMGwtMTk5IC0yMDBoLTEwMHY1MGwxOTkgMjAwdjE1MGgtMjAwdjEwMGgzMDB2LTMwMHpNOTAwIDMwMGgtMTAwdjQwMGgtMTAwdjEwMGgyMDB2LTUwMHpNNzAxIDMwMGgtMTAwIHYxMDBoMTAwdi0xMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTE5NDsiIGQ9Ik02MDAgMTE5MXExMjAgMCAyMjkuNSAtNDd0MTg4LjUgLTEyNnQxMjYgLTE4OC41dDQ3IC0yMjkuNXQtNDcgLTIyOS41dC0xMjYgLTE4OC41dC0xODguNSAtMTI2dC0yMjkuNSAtNDd0LTIyOS41IDQ3dC0xODguNSAxMjZ0LTEyNiAxODguNXQtNDcgMjI5LjV0NDcgMjI5LjV0MTI2IDE4OC41dDE4OC41IDEyNnQyMjkuNSA0N3pNNjAwIDEwMjFxLTExNCAwIC0yMTEgLTU2LjV0LTE1My41IC0xNTMuNXQtNTYuNSAtMjExdDU2LjUgLTIxMSB0MTUzLjUgLTE1My41dDIxMSAtNTYuNXQyMTEgNTYuNXQxNTMuNSAxNTMuNXQ1Ni41IDIxMXQtNTYuNSAyMTF0LTE1My41IDE1My41dC0yMTEgNTYuNXpNODAwIDcwMGgtMzAwdi0yMDBoMzAwdi0xMDBoLTMwMGwtMTAwIDEwMHYyMDBsMTAwIDEwMGgzMDB2LTEwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTk1OyIgZD0iTTYwMCAxMTkxcTEyMCAwIDIyOS41IC00N3QxODguNSAtMTI2dDEyNiAtMTg4LjV0NDcgLTIyOS41dC00NyAtMjI5LjV0LTEyNiAtMTg4LjV0LTE4OC41IC0xMjZ0LTIyOS41IC00N3QtMjI5LjUgNDd0LTE4OC41IDEyNnQtMTI2IDE4OC41dC00NyAyMjkuNXQ0NyAyMjkuNXQxMjYgMTg4LjV0MTg4LjUgMTI2dDIyOS41IDQ3ek02MDAgMTAyMXEtMTE0IDAgLTIxMSAtNTYuNXQtMTUzLjUgLTE1My41dC01Ni41IC0yMTF0NTYuNSAtMjExIHQxNTMuNSAtMTUzLjV0MjExIC01Ni41dDIxMSA1Ni41dDE1My41IDE1My41dDU2LjUgMjExdC01Ni41IDIxMXQtMTUzLjUgMTUzLjV0LTIxMSA1Ni41ek04MDAgNzAwdi0xMDBsLTUwIC01MGwxMDAgLTEwMHYtNTBoLTEwMGwtMTAwIDEwMGgtMTUwdi0xMDBoLTEwMHY0MDBoMzAwek01MDAgNzAwdi0xMDBoMjAwdjEwMGgtMjAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxOTc7IiBkPSJNNTAzIDEwODlxMTEwIDAgMjAwLjUgLTU5LjV0MTM0LjUgLTE1Ni41cTQ0IDE0IDkwIDE0cTEyMCAwIDIwNSAtODYuNXQ4NSAtMjA3dC04NSAtMjA3dC0yMDUgLTg2LjVoLTEyOHYyNTBxMCAyMSAtMTQuNSAzNS41dC0zNS41IDE0LjVoLTMwMHEtMjEgMCAtMzUuNSAtMTQuNXQtMTQuNSAtMzUuNXYtMjUwaC0yMjJxLTgwIDAgLTEzNiA1Ny41dC01NiAxMzYuNXEwIDY5IDQzIDEyMi41dDEwOCA2Ny41cS0yIDE5IC0yIDM3cTAgMTAwIDQ5IDE4NSB0MTM0IDEzNHQxODUgNDl6TTUyNSA1MDBoMTUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtMjc1aDEzN3EyMSAwIDI2IC0xMS41dC04IC0yNy41bC0yMjMgLTI0NHEtMTMgLTE2IC0zMiAtMTZ0LTMyIDE2bC0yMjMgMjQ0cS0xMyAxNiAtOCAyNy41dDI2IDExLjVoMTM3djI3NXEwIDEwIDcuNSAxNy41dDE3LjUgNy41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUxOTg7IiBkPSJNNTAyIDEwODlxMTEwIDAgMjAxIC01OS41dDEzNSAtMTU2LjVxNDMgMTUgODkgMTVxMTIxIDAgMjA2IC04Ni41dDg2IC0yMDYuNXEwIC05OSAtNjAgLTE4MXQtMTUwIC0xMTBsLTM3OCAzNjBxLTEzIDE2IC0zMS41IDE2dC0zMS41IC0xNmwtMzgxIC0zNjVoLTlxLTc5IDAgLTEzNS41IDU3LjV0LTU2LjUgMTM2LjVxMCA2OSA0MyAxMjIuNXQxMDggNjcuNXEtMiAxOSAtMiAzOHEwIDEwMCA0OSAxODQuNXQxMzMuNSAxMzR0MTg0LjUgNDkuNXogTTYzMiA0NjdsMjIzIC0yMjhxMTMgLTE2IDggLTI3LjV0LTI2IC0xMS41aC0xMzd2LTI3NXEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTE1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djI3NWgtMTM3cS0yMSAwIC0yNiAxMS41dDggMjcuNXExOTkgMjA0IDIyMyAyMjhxMTkgMTkgMzEuNSAxOXQzMi41IC0xOXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTk5OyIgZD0iTTcwMCAxMDB2MTAwaDQwMGwtMjcwIDMwMGgxNzBsLTI3MCAzMDBoMTcwbC0zMDAgMzMzbC0zMDAgLTMzM2gxNzBsLTI3MCAtMzAwaDE3MGwtMjcwIC0zMDBoNDAwdi0xMDBoLTUwcS0yMSAwIC0zNS41IC0xNC41dC0xNC41IC0zNS41di01MGg0MDB2NTBxMCAyMSAtMTQuNSAzNS41dC0zNS41IDE0LjVoLTUweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMDA7IiBkPSJNNjAwIDExNzlxOTQgMCAxNjcuNSAtNTYuNXQ5OS41IC0xNDUuNXE4OSAtNiAxNTAuNSAtNzEuNXQ2MS41IC0xNTUuNXEwIC02MSAtMjkuNSAtMTEyLjV0LTc5LjUgLTgyLjVxOSAtMjkgOSAtNTVxMCAtNzQgLTUyLjUgLTEyNi41dC0xMjYuNSAtNTIuNXEtNTUgMCAtMTAwIDMwdi0yNTFxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTUwaC0zMDB2NTBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41djI1MXEtNDUgLTMwIC0xMDAgLTMwIHEtNzQgMCAtMTI2LjUgNTIuNXQtNTIuNSAxMjYuNXEwIDE4IDQgMzhxLTQ3IDIxIC03NS41IDY1dC0yOC41IDk3cTAgNzQgNTIuNSAxMjYuNXQxMjYuNSA1Mi41cTUgMCAyMyAtMnEwIDIgLTEgMTB0LTEgMTNxMCAxMTYgODEuNSAxOTcuNXQxOTcuNSA4MS41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMDE7IiBkPSJNMTAxMCAxMDEwcTExMSAtMTExIDE1MC41IC0yNjAuNXQwIC0yOTl0LTE1MC41IC0yNjAuNXEtODMgLTgzIC0xOTEuNSAtMTI2LjV0LTIxOC41IC00My41dC0yMTguNSA0My41dC0xOTEuNSAxMjYuNXEtMTExIDExMSAtMTUwLjUgMjYwLjV0MCAyOTl0MTUwLjUgMjYwLjVxODMgODMgMTkxLjUgMTI2LjV0MjE4LjUgNDMuNXQyMTguNSAtNDMuNXQxOTEuNSAtMTI2LjV6TTQ3NiAxMDY1cS00IDAgLTggLTFxLTEyMSAtMzQgLTIwOS41IC0xMjIuNSB0LTEyMi41IC0yMDkuNXEtNCAtMTIgMi41IC0yM3QxOC41IC0xNGwzNiAtOXEzIC0xIDcgLTFxMjMgMCAyOSAyMnEyNyA5NiA5OCAxNjZxNzAgNzEgMTY2IDk4cTExIDMgMTcuNSAxMy41dDMuNSAyMi41bC05IDM1cS0zIDEzIC0xNCAxOXEtNyA0IC0xNSA0ek01MTIgOTIwcS00IDAgLTkgLTJxLTgwIC0yNCAtMTM4LjUgLTgyLjV0LTgyLjUgLTEzOC41cS00IC0xMyAyIC0yNHQxOSAtMTRsMzQgLTlxNCAtMSA4IC0xcTIyIDAgMjggMjEgcTE4IDU4IDU4LjUgOTguNXQ5Ny41IDU4LjVxMTIgMyAxOCAxMy41dDMgMjEuNWwtOSAzNXEtMyAxMiAtMTQgMTlxLTcgNCAtMTUgNHpNNzE5LjUgNzE5LjVxLTQ5LjUgNDkuNSAtMTE5LjUgNDkuNXQtMTE5LjUgLTQ5LjV0LTQ5LjUgLTExOS41dDQ5LjUgLTExOS41dDExOS41IC00OS41dDExOS41IDQ5LjV0NDkuNSAxMTkuNXQtNDkuNSAxMTkuNXpNODU1IDU1MXEtMjIgMCAtMjggLTIxcS0xOCAtNTggLTU4LjUgLTk4LjV0LTk4LjUgLTU3LjUgcS0xMSAtNCAtMTcgLTE0LjV0LTMgLTIxLjVsOSAtMzVxMyAtMTIgMTQgLTE5cTcgLTQgMTUgLTRxNCAwIDkgMnE4MCAyNCAxMzguNSA4Mi41dDgyLjUgMTM4LjVxNCAxMyAtMi41IDI0dC0xOC41IDE0bC0zNCA5cS00IDEgLTggMXpNMTAwMCA1MTVxLTIzIDAgLTI5IC0yMnEtMjcgLTk2IC05OCAtMTY2cS03MCAtNzEgLTE2NiAtOThxLTExIC0zIC0xNy41IC0xMy41dC0zLjUgLTIyLjVsOSAtMzVxMyAtMTMgMTQgLTE5cTcgLTQgMTUgLTQgcTQgMCA4IDFxMTIxIDM0IDIwOS41IDEyMi41dDEyMi41IDIwOS41cTQgMTIgLTIuNSAyM3QtMTguNSAxNGwtMzYgOXEtMyAxIC03IDF6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIwMjsiIGQ9Ik03MDAgODAwaDMwMHYtMzgwaC0xODB2MjAwaC0zNDB2LTIwMGgtMzgwdjc1NXEwIDEwIDcuNSAxNy41dDE3LjUgNy41aDU3NXYtNDAwek0xMDAwIDkwMGgtMjAwdjIwMHpNNzAwIDMwMGgxNjJsLTIxMiAtMjEybC0yMTIgMjEyaDE2MnYyMDBoMTAwdi0yMDB6TTUyMCAwaC0zOTVxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYzOTV6TTEwMDAgMjIwdi0xOTVxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0xOTV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIwMzsiIGQ9Ik03MDAgODAwaDMwMHYtNTIwbC0zNTAgMzUwbC01NTAgLTU1MHYxMDk1cTAgMTAgNy41IDE3LjV0MTcuNSA3LjVoNTc1di00MDB6TTEwMDAgOTAwaC0yMDB2MjAwek04NjIgMjAwaC0xNjJ2LTIwMGgtMTAwdjIwMGgtMTYybDIxMiAyMTJ6TTQ4MCAwaC0zNTVxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY1NWgzODB2LTgwek0xMDAwIDgwdi01NXEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTE1NXY4MGgxODB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIwNDsiIGQ9Ik0xMTYyIDgwMGgtMTYydi0yMDBoMTAwbDEwMCAtMTAwaC0zMDB2MzAwaC0xNjJsMjEyIDIxMnpNMjAwIDgwMGgyMDBxMjcgMCA0MCAtMnQyOS41IC0xMC41dDIzLjUgLTMwdDcgLTU3LjVoMzAwdi0xMDBoLTYwMGwtMjAwIC0zNTB2NDUwaDEwMHEwIDM2IDcgNTcuNXQyMy41IDMwdDI5LjUgMTAuNXQ0MCAyek04MDAgNDAwaDI0MGwtMjQwIC00MDBoLTgwMGwzMDAgNTAwaDUwMHYtMTAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMDU7IiBkPSJNNjUwIDExMDBoMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di01MGg1MHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0zMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djEwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjVoNTB2NTBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek0xMDAwIDg1MHYxNTBxNDEgMCA3MC41IC0yOS41dDI5LjUgLTcwLjV2LTgwMCBxMCAtNDEgLTI5LjUgLTcwLjV0LTcwLjUgLTI5LjVoLTYwMHEtMSAwIC0yMCA0bDI0NiAyNDZsLTMyNiAzMjZ2MzI0cTAgNDEgMjkuNSA3MC41dDcwLjUgMjkuNXYtMTUwcTAgLTYyIDQ0IC0xMDZ0MTA2IC00NGgzMDBxNjIgMCAxMDYgNDR0NDQgMTA2ek00MTIgMjUwbC0yMTIgLTIxMnYxNjJoLTIwMHYxMDBoMjAwdjE2MnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjA2OyIgZD0iTTQ1MCAxMTAwaDEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNTBoNTBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMzAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDUwdjUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNODAwIDg1MHYxNTBxNDEgMCA3MC41IC0yOS41dDI5LjUgLTcwLjV2LTUwMCBoLTIwMHYtMzAwaDIwMHEwIC0zNiAtNyAtNTcuNXQtMjMuNSAtMzB0LTI5LjUgLTEwLjV0LTQwIC0yaC02MDBxLTQxIDAgLTcwLjUgMjkuNXQtMjkuNSA3MC41djgwMHEwIDQxIDI5LjUgNzAuNXQ3MC41IDI5LjV2LTE1MHEwIC02MiA0NCAtMTA2dDEwNiAtNDRoMzAwcTYyIDAgMTA2IDQ0dDQ0IDEwNnpNMTIxMiAyNTBsLTIxMiAtMjEydjE2MmgtMjAwdjEwMGgyMDB2MTYyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMDk7IiBkPSJNNjU4IDExOTdsNjM3IC0xMTA0cTIzIC0zOCA3IC02NS41dC02MCAtMjcuNWgtMTI3NnEtNDQgMCAtNjAgMjcuNXQ3IDY1LjVsNjM3IDExMDRxMjIgMzkgNTQgMzl0NTQgLTM5ek03MDQgODAwaC0yMDhxLTIwIDAgLTMyIC0xNC41dC04IC0zNC41bDU4IC0zMDJxNCAtMjAgMjEuNSAtMzQuNXQzNy41IC0xNC41aDU0cTIwIDAgMzcuNSAxNC41dDIxLjUgMzQuNWw1OCAzMDJxNCAyMCAtOCAzNC41dC0zMiAxNC41ek01MDAgMzAwdi0xMDBoMjAwIHYxMDBoLTIwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjEwOyIgZD0iTTQyNSAxMTAwaDI1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTE1MHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTI1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djE1MHEwIDEwIDcuNSAxNy41dDE3LjUgNy41ek00MjUgODAwaDI1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTE1MHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTI1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djE1MHEwIDEwIDcuNSAxNy41IHQxNy41IDcuNXpNODI1IDgwMGgyNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di0xNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0yNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYxNTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXpNMjUgNTAwaDI1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTE1MHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTI1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djE1MCBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXpNNDI1IDUwMGgyNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di0xNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0yNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYxNTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXpNODI1IDUwMGgyNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di0xNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0yNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNSB2MTUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6TTI1IDIwMGgyNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di0xNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0yNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXYxNTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXpNNDI1IDIwMGgyNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di0xNTBxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0yNTBxLTEwIDAgLTE3LjUgNy41IHQtNy41IDE3LjV2MTUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6TTgyNSAyMDBoMjUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtMTUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtMjUwcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2MTUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIxMTsiIGQ9Ik03MDAgMTIwMGgxMDB2LTIwMGgtMTAwdi0xMDBoMzUwcTYyIDAgODYuNSAtMzkuNXQtMy41IC05NC41bC02NiAtMTMycS00MSAtODMgLTgxIC0xMzRoLTc3MnEtNDAgNTEgLTgxIDEzNGwtNjYgMTMycS0yOCA1NSAtMy41IDk0LjV0ODYuNSAzOS41aDM1MHYxMDBoLTEwMHYyMDBoMTAwdjEwMGgyMDB2LTEwMHpNMjUwIDQwMGg3MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV0LTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTEybDEzNyAtMTAwIGgtOTUwbDEzOCAxMDBoLTEzcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXQxNC41IDM1LjV0MzUuNSAxNC41ek01MCAxMDBoMTEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNTBoLTEyMDB2NTBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMTI7IiBkPSJNNjAwIDEzMDBxNDAgMCA2OC41IC0yOS41dDI4LjUgLTcwLjVoLTE5NHEwIDQxIDI4LjUgNzAuNXQ2OC41IDI5LjV6TTQ0MyAxMTAwaDMxNHExOCAtMzcgMTggLTc1cTAgLTggLTMgLTI1aDMyOHE0MSAwIDQ0LjUgLTE2LjV0LTMwLjUgLTM4LjVsLTE3NSAtMTQ1aC02NzhsLTE3OCAxNDVxLTM0IDIyIC0yOSAzOC41dDQ2IDE2LjVoMzI4cS0zIDE3IC0zIDI1cTAgMzggMTggNzV6TTI1MCA3MDBoNzAwcTIxIDAgMzUuNSAtMTQuNSB0MTQuNSAtMzUuNXQtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTUwdi0yMDBsMjc1IC0yMDBoLTk1MGwyNzUgMjAwdjIwMGgtMTUwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXQxNC41IDM1LjV0MzUuNSAxNC41ek01MCAxMDBoMTEwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNTBoLTEyMDB2NTBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMTM7IiBkPSJNNjAwIDExODFxNzUgMCAxMjggLTUzdDUzIC0xMjh0LTUzIC0xMjh0LTEyOCAtNTN0LTEyOCA1M3QtNTMgMTI4dDUzIDEyOHQxMjggNTN6TTYwMiA3OThoNDZxMzQgMCA1NS41IC0yOC41dDIxLjUgLTg2LjVxMCAtNzYgMzkgLTE4M2gtMzI0cTM5IDEwNyAzOSAxODNxMCA1OCAyMS41IDg2LjV0NTYuNSAyOC41aDQ1ek0yNTAgNDAwaDcwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXQtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTMgbDEzOCAtMTAwaC05NTBsMTM3IDEwMGgtMTJxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41dDE0LjUgMzUuNXQzNS41IDE0LjV6TTUwIDEwMGgxMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di01MGgtMTIwMHY1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIxNDsiIGQ9Ik02MDAgMTMwMHE0NyAwIDkyLjUgLTUzLjV0NzEgLTEyM3QyNS41IC0xMjMuNXEwIC03OCAtNTUuNSAtMTMzLjV0LTEzMy41IC01NS41dC0xMzMuNSA1NS41dC01NS41IDEzMy41cTAgNjIgMzQgMTQzbDE0NCAtMTQzbDExMSAxMTFsLTE2MyAxNjNxMzQgMjYgNjMgMjZ6TTYwMiA3OThoNDZxMzQgMCA1NS41IC0yOC41dDIxLjUgLTg2LjVxMCAtNzYgMzkgLTE4M2gtMzI0cTM5IDEwNyAzOSAxODNxMCA1OCAyMS41IDg2LjV0NTYuNSAyOC41aDQ1IHpNMjUwIDQwMGg3MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV0LTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTEzbDEzOCAtMTAwaC05NTBsMTM3IDEwMGgtMTJxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41dDE0LjUgMzUuNXQzNS41IDE0LjV6TTUwIDEwMGgxMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di01MGgtMTIwMHY1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIxNTsiIGQ9Ik02MDAgMTIwMGwzMDAgLTE2MXYtMTM5aC0zMDBxMCAtNTcgMTguNSAtMTA4dDUwIC05MS41dDYzIC03MnQ3MCAtNjcuNXQ1Ny41IC02MWgtNTMwcS02MCA4MyAtOTAuNSAxNzcuNXQtMzAuNSAxNzguNXQzMyAxNjQuNXQ4Ny41IDEzOS41dDEyNiA5Ni41dDE0NS41IDQxLjV2LTk4ek0yNTAgNDAwaDcwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXQtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTNsMTM4IC0xMDBoLTk1MGwxMzcgMTAwIGgtMTJxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41dDE0LjUgMzUuNXQzNS41IDE0LjV6TTUwIDEwMGgxMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di01MGgtMTIwMHY1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIxNjsiIGQ9Ik02MDAgMTMwMHE0MSAwIDcwLjUgLTI5LjV0MjkuNSAtNzAuNXYtNzhxNDYgLTI2IDczIC03MnQyNyAtMTAwdi01MGgtNDAwdjUwcTAgNTQgMjcgMTAwdDczIDcydjc4cTAgNDEgMjkuNSA3MC41dDcwLjUgMjkuNXpNNDAwIDgwMGg0MDBxNTQgMCAxMDAgLTI3dDcyIC03M2gtMTcydi0xMDBoMjAwdi0xMDBoLTIwMHYtMTAwaDIwMHYtMTAwaC0yMDB2LTEwMGgyMDBxMCAtODMgLTU4LjUgLTE0MS41dC0xNDEuNSAtNTguNWgtNDAwIHEtODMgMCAtMTQxLjUgNTguNXQtNTguNSAxNDEuNXY0MDBxMCA4MyA1OC41IDE0MS41dDE0MS41IDU4LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIxODsiIGQ9Ik0xNTAgMTEwMGg5MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTUwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtOTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXY1MDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek0xMjUgNDAwaDk1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtMjgzbDIyNCAtMjI0cTEzIC0xMyAxMyAtMzEuNXQtMTMgLTMyIHQtMzEuNSAtMTMuNXQtMzEuNSAxM2wtODggODhoLTUyNGwtODcgLTg4cS0xMyAtMTMgLTMyIC0xM3QtMzIgMTMuNXQtMTMgMzJ0MTMgMzEuNWwyMjQgMjI0aC0yODlxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY1MHEwIDEwIDcuNSAxNy41dDE3LjUgNy41ek01NDEgMzAwbC0xMDAgLTEwMGgzMjRsLTEwMCAxMDBoLTEyNHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjE5OyIgZD0iTTIwMCAxMTAwaDgwMHE4MyAwIDE0MS41IC01OC41dDU4LjUgLTE0MS41di0yMDBoLTEwMHEwIDQxIC0yOS41IDcwLjV0LTcwLjUgMjkuNWgtMjUwcS00MSAwIC03MC41IC0yOS41dC0yOS41IC03MC41aC0xMDBxMCA0MSAtMjkuNSA3MC41dC03MC41IDI5LjVoLTI1MHEtNDEgMCAtNzAuNSAtMjkuNXQtMjkuNSAtNzAuNWgtMTAwdjIwMHEwIDgzIDU4LjUgMTQxLjV0MTQxLjUgNTguNXpNMTAwIDYwMGgxMDAwcTQxIDAgNzAuNSAtMjkuNSB0MjkuNSAtNzAuNXYtMzAwaC0xMjAwdjMwMHEwIDQxIDI5LjUgNzAuNXQ3MC41IDI5LjV6TTMwMCAxMDB2LTUwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djUwaDIwMHpNMTEwMCAxMDB2LTUwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djUwaDIwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjIxOyIgZD0iTTQ4MCAxMTY1bDY4MiAtNjgzcTMxIC0zMSAzMSAtNzUuNXQtMzEgLTc1LjVsLTEzMSAtMTMxaC00ODFsLTUxNyA1MThxLTMyIDMxIC0zMiA3NS41dDMyIDc1LjVsMjk1IDI5NnEzMSAzMSA3NS41IDMxdDc2LjUgLTMxek0xMDggNzk0bDM0MiAtMzQybDMwMyAzMDRsLTM0MSAzNDF6TTI1MCAxMDBoODAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di01MGgtOTAwdjUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjIzOyIgZD0iTTEwNTcgNjQ3bC0xODkgNTA2cS04IDE5IC0yNy41IDMzdC00MC41IDE0aC00MDBxLTIxIDAgLTQwLjUgLTE0dC0yNy41IC0zM2wtMTg5IC01MDZxLTggLTE5IDEuNSAtMzN0MzAuNSAtMTRoNjI1di0xNTBxMCAtMjEgMTQuNSAtMzUuNXQzNS41IC0xNC41dDM1LjUgMTQuNXQxNC41IDM1LjV2MTUwaDEyNXEyMSAwIDMwLjUgMTR0MS41IDMzek04OTcgMGgtNTk1djUwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNWg1MHY1MCBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDQ4djMwMGgyMDB2LTMwMGg0N3EyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNTBoNTBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTUweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMjQ7IiBkPSJNOTAwIDgwMGgzMDB2LTU3NXEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTM3NXY1OTFsLTMwMCAzMDB2ODRxMCAxMCA3LjUgMTcuNXQxNy41IDcuNWgzNzV2LTQwMHpNMTIwMCA5MDBoLTIwMHYyMDB6TTQwMCA2MDBoMzAwdi01NzVxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC02NTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY5NTBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNWgzNzV2LTQwMHpNNzAwIDcwMGgtMjAwdjIwMHogIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIyNTsiIGQ9Ik00ODQgMTA5NWgxOTVxNzUgMCAxNDYgLTMyLjV0MTI0IC04NnQ4OS41IC0xMjIuNXQ0OC41IC0xNDJxMTggLTE0IDM1IC0yMHEzMSAtMTAgNjQuNSA2LjV0NDMuNSA0OC41cTEwIDM0IC0xNSA3MXEtMTkgMjcgLTkgNDNxNSA4IDEyLjUgMTF0MTkgLTF0MjMuNSAtMTZxNDEgLTQ0IDM5IC0xMDVxLTMgLTYzIC00NiAtMTA2LjV0LTEwNCAtNDMuNWgtNjJxLTcgLTU1IC0zNSAtMTE3dC01NiAtMTAwbC0zOSAtMjM0cS0zIC0yMCAtMjAgLTM0LjUgdC0zOCAtMTQuNWgtMTAwcS0yMSAwIC0zMyAxNC41dC05IDM0LjVsMTIgNzBxLTQ5IC0xNCAtOTEgLTE0aC0xOTVxLTI0IDAgLTY1IDhsLTExIC02NHEtMyAtMjAgLTIwIC0zNC41dC0zOCAtMTQuNWgtMTAwcS0yMSAwIC0zMyAxNC41dC05IDM0LjVsMjYgMTU3cS04NCA3NCAtMTI4IDE3NWwtMTU5IDUzcS0xOSA3IC0zMyAyNnQtMTQgNDB2NTBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDEyNHExMSA4NyA1NiAxNjZsLTExMSA5NSBxLTE2IDE0IC0xMi41IDIzLjV0MjQuNSA5LjVoMjAzcTExNiAxMDEgMjUwIDEwMXpNNjc1IDEwMDBoLTI1MHEtMTAgMCAtMTcuNSAtNy41dC03LjUgLTE3LjV2LTUwcTAgLTEwIDcuNSAtMTcuNXQxNy41IC03LjVoMjUwcTEwIDAgMTcuNSA3LjV0Ny41IDE3LjV2NTBxMCAxMCAtNy41IDE3LjV0LTE3LjUgNy41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMjY7IiBkPSJNNjQxIDkwMGw0MjMgMjQ3cTE5IDggNDIgMi41dDM3IC0yMS41bDMyIC0zOHExNCAtMTUgMTIuNSAtMzZ0LTE3LjUgLTM0bC0xMzkgLTEyMGgtMzkwek01MCAxMTAwaDEwNnE2NyAwIDEwMyAtMTd0NjYgLTcxbDEwMiAtMjEyaDgyM3EyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNTBxMCAtMjEgLTE0IC00MHQtMzMgLTI2bC03MzcgLTEzMnEtMjMgLTQgLTQwIDZ0LTI2IDI1cS00MiA2NyAtMTAwIDY3aC0zMDBxLTYyIDAgLTEwNiA0NCB0LTQ0IDEwNnYyMDBxMCA2MiA0NCAxMDZ0MTA2IDQ0ek0xNzMgOTI4aC04MHEtMTkgMCAtMjggLTE0dC05IC0zNXYtNTZxMCAtNTEgNDIgLTUxaDEzNHExNiAwIDIxLjUgOHQ1LjUgMjRxMCAxMSAtMTYgNDV0LTI3IDUxcS0xOCAyOCAtNDMgMjh6TTU1MCA3MjdxLTMyIDAgLTU0LjUgLTIyLjV0LTIyLjUgLTU0LjV0MjIuNSAtNTQuNXQ1NC41IC0yMi41dDU0LjUgMjIuNXQyMi41IDU0LjV0LTIyLjUgNTQuNXQtNTQuNSAyMi41ek0xMzAgMzg5IGwxNTIgMTMwcTE4IDE5IDM0IDI0dDMxIC0zLjV0MjQuNSAtMTcuNXQyNS41IC0yOHEyOCAtMzUgNTAuNSAtNTF0NDguNSAtMTNsNjMgNWw0OCAtMTc5cTEzIC02MSAtMy41IC05Ny41dC02Ny41IC03OS41bC04MCAtNjlxLTQ3IC00MCAtMTA5IC0zNS41dC0xMDMgNTEuNWwtMTMwIDE1MXEtNDAgNDcgLTM1LjUgMTA5LjV0NTEuNSAxMDIuNXpNMzgwIDM3N2wtMTAyIC04OHEtMzEgLTI3IDIgLTY1bDM3IC00M3ExMyAtMTUgMjcuNSAtMTkuNSB0MzEuNSA2LjVsNjEgNTNxMTkgMTYgMTQgNDlxLTIgMjAgLTEyIDU2dC0xNyA0NXEtMTEgMTIgLTE5IDE0dC0yMyAtOHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjI3OyIgZD0iTTYyNSAxMjAwaDE1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTEwOXE3OSAtMzMgMTMxIC04Ny41dDUzIC0xMjguNXExIC00NiAtMTUgLTg0LjV0LTM5IC02MXQtNDYgLTM4dC0zOSAtMjEuNWwtMTcgLTZxNiAwIDE1IC0xLjV0MzUgLTl0NTAgLTE3LjV0NTMgLTMwdDUwIC00NXQzNS41IC02NHQxNC41IC04NHEwIC01OSAtMTEuNSAtMTA1LjV0LTI4LjUgLTc2LjV0LTQ0IC01MXQtNDkuNSAtMzEuNXQtNTQuNSAtMTZ0LTQ5LjUgLTYuNSB0LTQzLjUgLTF2LTc1cTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtMTUwcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2NzVoLTEwMHYtNzVxMCAtMTAgLTcuNSAtMTcuNXQtMTcuNSAtNy41aC0xNTBxLTEwIDAgLTE3LjUgNy41dC03LjUgMTcuNXY3NWgtMTc1cS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2MTUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjVoNzV2NjAwaC03NXEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djE1MCBxMCAxMCA3LjUgMTcuNXQxNy41IDcuNWgxNzV2NzVxMCAxMCA3LjUgMTcuNXQxNy41IDcuNWgxNTBxMTAgMCAxNy41IC03LjV0Ny41IC0xNy41di03NWgxMDB2NzVxMCAxMCA3LjUgMTcuNXQxNy41IDcuNXpNNDAwIDkwMHYtMjAwaDI2M3EyOCAwIDQ4LjUgMTAuNXQzMCAyNXQxNSAyOXQ1LjUgMjUuNWwxIDEwcTAgNCAtMC41IDExdC02IDI0dC0xNSAzMHQtMzAgMjR0LTQ4LjUgMTFoLTI2M3pNNDAwIDUwMHYtMjAwaDM2M3EyOCAwIDQ4LjUgMTAuNSB0MzAgMjV0MTUgMjl0NS41IDI1LjVsMSAxMHEwIDQgLTAuNSAxMXQtNiAyNHQtMTUgMzB0LTMwIDI0dC00OC41IDExaC0zNjN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIzMDsiIGQ9Ik0yMTIgMTE5OGg3ODBxODYgMCAxNDcgLTYxdDYxIC0xNDd2LTQxNnEwIC01MSAtMTggLTE0Mi41dC0zNiAtMTU3LjVsLTE4IC02NnEtMjkgLTg3IC05My41IC0xNDYuNXQtMTQ2LjUgLTU5LjVoLTU3MnEtODIgMCAtMTQ3IDU5dC05MyAxNDdxLTggMjggLTIwIDczdC0zMiAxNDMuNXQtMjAgMTQ5LjV2NDE2cTAgODYgNjEgMTQ3dDE0NyA2MXpNNjAwIDEwNDVxLTcwIDAgLTEzMi41IC0xMS41dC0xMDUuNSAtMzAuNXQtNzguNSAtNDEuNSB0LTU3IC00NXQtMzYgLTQxdC0yMC41IC0zMC41bC02IC0xMmwxNTYgLTI0M2g1NjBsMTU2IDI0M3EtMiA1IC02IDEyLjV0LTIwIDI5LjV0LTM2LjUgNDJ0LTU3IDQ0LjV0LTc5IDQydC0xMDUgMjkuNXQtMTMyLjUgMTJ6TTc2MiA3MDNoLTE1N2wxOTUgMjYxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMzE7IiBkPSJNNDc1IDEzMDBoMTUwcTEwMyAwIDE4OSAtODZ0ODYgLTE4OXYtNTAwcTAgLTQxIC00MiAtODN0LTgzIC00MmgtNDUwcS00MSAwIC04MyA0MnQtNDIgODN2NTAwcTAgMTAzIDg2IDE4OXQxODkgODZ6TTcwMCAzMDB2LTIyNXEwIC0yMSAtMjcgLTQ4dC00OCAtMjdoLTE1MHEtMjEgMCAtNDggMjd0LTI3IDQ4djIyNWgzMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIzMjsiIGQ9Ik00NzUgMTMwMGg5NnEwIC0xNTAgODkuNSAtMjM5LjV0MjM5LjUgLTg5LjV2LTQ0NnEwIC00MSAtNDIgLTgzdC04MyAtNDJoLTQ1MHEtNDEgMCAtODMgNDJ0LTQyIDgzdjUwMHEwIDEwMyA4NiAxODl0MTg5IDg2ek03MDAgMzAwdi0yMjVxMCAtMjEgLTI3IC00OHQtNDggLTI3aC0xNTBxLTIxIDAgLTQ4IDI3dC0yNyA0OHYyMjVoMzAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMzM7IiBkPSJNMTI5NCA3NjdsLTYzOCAtMjgzbC0zNzggMTcwbC03OCAtNjB2LTIyNGwxMDAgLTE1MHYtMTk5bC0xNTAgMTQ4bC0xNTAgLTE0OXYyMDBsMTAwIDE1MHYyNTBxMCA0IC0wLjUgMTAuNXQwIDkuNXQxIDh0MyA4dDYuNSA2bDQ3IDQwbC0xNDcgNjVsNjQyIDI4M3pNMTAwMCAzODBsLTM1MCAtMTY2bC0zNTAgMTY2djE0N2wzNTAgLTE2NWwzNTAgMTY1di0xNDd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIzNDsiIGQ9Ik0yNTAgODAwcTYyIDAgMTA2IC00NHQ0NCAtMTA2dC00NCAtMTA2dC0xMDYgLTQ0dC0xMDYgNDR0LTQ0IDEwNnQ0NCAxMDZ0MTA2IDQ0ek02NTAgODAwcTYyIDAgMTA2IC00NHQ0NCAtMTA2dC00NCAtMTA2dC0xMDYgLTQ0dC0xMDYgNDR0LTQ0IDEwNnQ0NCAxMDZ0MTA2IDQ0ek0xMDUwIDgwMHE2MiAwIDEwNiAtNDR0NDQgLTEwNnQtNDQgLTEwNnQtMTA2IC00NHQtMTA2IDQ0dC00NCAxMDZ0NDQgMTA2dDEwNiA0NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjM1OyIgZD0iTTU1MCAxMTAwcTYyIDAgMTA2IC00NHQ0NCAtMTA2dC00NCAtMTA2dC0xMDYgLTQ0dC0xMDYgNDR0LTQ0IDEwNnQ0NCAxMDZ0MTA2IDQ0ek01NTAgNzAwcTYyIDAgMTA2IC00NHQ0NCAtMTA2dC00NCAtMTA2dC0xMDYgLTQ0dC0xMDYgNDR0LTQ0IDEwNnQ0NCAxMDZ0MTA2IDQ0ek01NTAgMzAwcTYyIDAgMTA2IC00NHQ0NCAtMTA2dC00NCAtMTA2dC0xMDYgLTQ0dC0xMDYgNDR0LTQ0IDEwNnQ0NCAxMDZ0MTA2IDQ0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMzY7IiBkPSJNMTI1IDExMDBoOTUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtMTUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtOTUwcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2MTUwcTAgMTAgNy41IDE3LjV0MTcuNSA3LjV6TTEyNSA3MDBoOTUwcTEwIDAgMTcuNSAtNy41dDcuNSAtMTcuNXYtMTUwcTAgLTEwIC03LjUgLTE3LjV0LTE3LjUgLTcuNWgtOTUwcS0xMCAwIC0xNy41IDcuNXQtNy41IDE3LjV2MTUwcTAgMTAgNy41IDE3LjUgdDE3LjUgNy41ek0xMjUgMzAwaDk1MHExMCAwIDE3LjUgLTcuNXQ3LjUgLTE3LjV2LTE1MHEwIC0xMCAtNy41IC0xNy41dC0xNy41IC03LjVoLTk1MHEtMTAgMCAtMTcuNSA3LjV0LTcuNSAxNy41djE1MHEwIDEwIDcuNSAxNy41dDE3LjUgNy41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMzc7IiBkPSJNMzUwIDEyMDBoNTAwcTE2MiAwIDI1NiAtOTMuNXQ5NCAtMjU2LjV2LTUwMHEwIC0xNjUgLTkzLjUgLTI1Ny41dC0yNTYuNSAtOTIuNWgtNTAwcS0xNjUgMCAtMjU3LjUgOTIuNXQtOTIuNSAyNTcuNXY1MDBxMCAxNjUgOTIuNSAyNTcuNXQyNTcuNSA5Mi41ek05MDAgMTAwMGgtNjAwcS00MSAwIC03MC41IC0yOS41dC0yOS41IC03MC41di02MDBxMCAtNDEgMjkuNSAtNzAuNXQ3MC41IC0yOS41aDYwMHE0MSAwIDcwLjUgMjkuNSB0MjkuNSA3MC41djYwMHEwIDQxIC0yOS41IDcwLjV0LTcwLjUgMjkuNXpNMzUwIDkwMGg1MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTMwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYzMDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek00MDAgODAwdi0yMDBoNDAwdjIwMGgtNDAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyMzg7IiBkPSJNMTUwIDExMDBoMTAwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXQtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNTB2LTIwMGg1MHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXQtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNTB2LTIwMGg1MHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXQtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNTB2LTIwMGg1MHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXQtMTQuNSAtMzUuNSB0LTM1LjUgLTE0LjVoLTEwMDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41dDE0LjUgMzUuNXQzNS41IDE0LjVoNTB2MjAwaC01MHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV0MTQuNSAzNS41dDM1LjUgMTQuNWg1MHYyMDBoLTUwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXQxNC41IDM1LjV0MzUuNSAxNC41aDUwdjIwMGgtNTBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41dDE0LjUgMzUuNXQzNS41IDE0LjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTIzOTsiIGQ9Ik02NTAgMTE4N3E4NyAtNjcgMTE4LjUgLTE1NnQwIC0xNzh0LTExOC41IC0xNTVxLTg3IDY2IC0xMTguNSAxNTV0MCAxNzh0MTE4LjUgMTU2ek0zMDAgODAwcTEyNCAwIDIxMiAtODh0ODggLTIxMnEtMTI0IDAgLTIxMiA4OHQtODggMjEyek0xMDAwIDgwMHEwIC0xMjQgLTg4IC0yMTJ0LTIxMiAtODhxMCAxMjQgODggMjEydDIxMiA4OHpNMzAwIDUwMHExMjQgMCAyMTIgLTg4dDg4IC0yMTJxLTEyNCAwIC0yMTIgODh0LTg4IDIxMnogTTEwMDAgNTAwcTAgLTEyNCAtODggLTIxMnQtMjEyIC04OHEwIDEyNCA4OCAyMTJ0MjEyIDg4ek03MDAgMTk5di0xNDRxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjV0LTM1LjUgMTQuNXQtMTQuNSAzNS41djE0MnE0MCAtNCA0MyAtNHExNyAwIDU3IDZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTI0MDsiIGQ9Ik03NDUgODc4bDY5IDE5cTI1IDYgNDUgLTEybDI5OCAtMjk1cTExIC0xMSAxNSAtMjYuNXQtMiAtMzAuNXEtNSAtMTQgLTE4IC0yMy41dC0yOCAtOS41aC04cTEgMCAxIC0xM3EwIC0yOSAtMiAtNTZ0LTguNSAtNjJ0LTIwIC02M3QtMzMgLTUzdC01MSAtMzl0LTcyLjUgLTE0aC0xNDZxLTE4NCAwIC0xODQgMjg4cTAgMjQgMTAgNDdxLTIwIDQgLTYyIDR0LTYzIC00cTExIC0yNCAxMSAtNDdxMCAtMjg4IC0xODQgLTI4OGgtMTQyIHEtNDggMCAtODQuNSAyMXQtNTYgNTF0LTMyIDcxLjV0LTE2IDc1dC0zLjUgNjguNXEwIDEzIDIgMTNoLTdxLTE1IDAgLTI3LjUgOS41dC0xOC41IDIzLjVxLTYgMTUgLTIgMzAuNXQxNSAyNS41bDI5OCAyOTZxMjAgMTggNDYgMTFsNzYgLTE5cTIwIC01IDMwLjUgLTIyLjV0NS41IC0zNy41dC0yMi41IC0zMXQtMzcuNSAtNWwtNTEgMTJsLTE4MiAtMTkzaDg5MWwtMTgyIDE5M2wtNDQgLTEycS0yMCAtNSAtMzcuNSA2dC0yMi41IDMxdDYgMzcuNSB0MzEgMjIuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjQxOyIgZD0iTTEyMDAgOTAwaC01MHEwIDIxIC00IDM3dC05LjUgMjYuNXQtMTggMTcuNXQtMjIgMTF0LTI4LjUgNS41dC0zMSAydC0zNyAwLjVoLTIwMHYtODUwcTAgLTIyIDI1IC0zNC41dDUwIC0xMy41bDI1IC0ydi0xMDBoLTQwMHYxMDBxNCAwIDExIDAuNXQyNCAzdDMwIDd0MjQgMTV0MTEgMjQuNXY4NTBoLTIwMHEtMjUgMCAtMzcgLTAuNXQtMzEgLTJ0LTI4LjUgLTUuNXQtMjIgLTExdC0xOCAtMTcuNXQtOS41IC0yNi41dC00IC0zN2gtNTB2MzAwIGgxMDAwdi0zMDB6TTUwMCA0NTBoLTI1cTAgMTUgLTQgMjQuNXQtOSAxNC41dC0xNyA3LjV0LTIwIDN0LTI1IDAuNWgtMTAwdi00MjVxMCAtMTEgMTIuNSAtMTcuNXQyNS41IC03LjVoMTJ2LTUwaC0yMDB2NTBxNTAgMCA1MCAyNXY0MjVoLTEwMHEtMTcgMCAtMjUgLTAuNXQtMjAgLTN0LTE3IC03LjV0LTkgLTE0LjV0LTQgLTI0LjVoLTI1djE1MGg1MDB2LTE1MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjQyOyIgZD0iTTEwMDAgMzAwdjUwcS0yNSAwIC01NSAzMnEtMTQgMTQgLTI1IDMxdC0xNiAyN2wtNCAxMWwtMjg5IDc0N2gtNjlsLTMwMCAtNzU0cS0xOCAtMzUgLTM5IC01NnEtOSAtOSAtMjQuNSAtMTguNXQtMjYuNSAtMTQuNWwtMTEgLTV2LTUwaDI3M3Y1MHEtNDkgMCAtNzguNSAyMS41dC0xMS41IDY3LjVsNjkgMTc2aDI5M2w2MSAtMTY2cTEzIC0zNCAtMy41IC02Ni41dC01NS41IC0zMi41di01MGgzMTJ6TTQxMiA2OTFsMTM0IDM0MmwxMjEgLTM0MiBoLTI1NXpNMTEwMCAxNTB2LTEwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtMTAwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2MTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNWgxMDAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyNDM7IiBkPSJNNTAgMTIwMGgxMTAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xMTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xMTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXYxMTAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNjExIDExMThoLTcwcS0xMyAwIC0xOCAtMTJsLTI5OSAtNzUzcS0xNyAtMzIgLTM1IC01MXEtMTggLTE4IC01NiAtMzRxLTEyIC01IC0xMiAtMTh2LTUwcTAgLTggNS41IC0xNHQxNC41IC02IGgyNzNxOCAwIDE0IDZ0NiAxNHY1MHEwIDggLTYgMTR0LTE0IDZxLTU1IDAgLTcxIDIzcS0xMCAxNCAwIDM5bDYzIDE2M2gyNjZsNTcgLTE1M3ExMSAtMzEgLTYgLTU1cS0xMiAtMTcgLTM2IC0xN3EtOCAwIC0xNCAtNnQtNiAtMTR2LTUwcTAgLTggNiAtMTR0MTQgLTZoMzEzcTggMCAxNCA2dDYgMTR2NTBxMCA3IC01LjUgMTN0LTEzLjUgN3EtMTcgMCAtNDIgMjVxLTI1IDI3IC00MCA2M2gtMWwtMjg4IDc0OHEtNSAxMiAtMTkgMTJ6TTYzOSA2MTEgaC0xOTdsMTAzIDI2NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjQ0OyIgZD0iTTEyMDAgMTEwMGgtMTIwMHYxMDBoMTIwMHYtMTAwek01MCAxMDAwaDQwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtOTAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC00MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djkwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTY1MCAxMDAwaDQwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNDAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC00MDAgcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXY0MDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek03MDAgOTAwdi0zMDBoMzAwdjMwMGgtMzAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyNDU7IiBkPSJNNTAgMTIwMGg0MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTkwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNDAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXY5MDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek02NTAgNzAwaDQwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNDAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC00MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djQwMCBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek03MDAgNjAwdi0zMDBoMzAwdjMwMGgtMzAwek0xMjAwIDBoLTEyMDB2MTAwaDEyMDB2LTEwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjQ2OyIgZD0iTTUwIDEwMDBoNDAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0zNTBoMTAwdjE1MHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjVoNDAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di0xNTBoMTAwdi0xMDBoLTEwMHYtMTUwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC00MDBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djE1MGgtMTAwdi0zNTBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTQwMCBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djgwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTcwMCA3MDB2LTMwMGgzMDB2MzAwaC0zMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTI0NzsiIGQ9Ik0xMDAgMGgtMTAwdjEyMDBoMTAwdi0xMjAwek0yNTAgMTEwMGg0MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTQwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtNDAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXY0MDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41ek0zMDAgMTAwMHYtMzAwaDMwMHYzMDBoLTMwMHpNMjUwIDUwMGg5MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTQwMCBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTkwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2NDAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjQ4OyIgZD0iTTYwMCAxMTAwaDE1MHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNDAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xNTB2LTEwMGg0NTBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTQwMHEwIC0yMSAtMTQuNSAtMzUuNXQtMzUuNSAtMTQuNWgtOTAwcS0yMSAwIC0zNS41IDE0LjV0LTE0LjUgMzUuNXY0MDBxMCAyMSAxNC41IDM1LjV0MzUuNSAxNC41aDM1MHYxMDBoLTE1MHEtMjEgMCAtMzUuNSAxNC41IHQtMTQuNSAzNS41djQwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjVoMTUwdjEwMGgxMDB2LTEwMHpNNDAwIDEwMDB2LTMwMGgzMDB2MzAwaC0zMDB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTI0OTsiIGQ9Ik0xMjAwIDBoLTEwMHYxMjAwaDEwMHYtMTIwMHpNNTUwIDExMDBoNDAwcTIxIDAgMzUuNSAtMTQuNXQxNC41IC0zNS41di00MDBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTQwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2NDAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXpNNjAwIDEwMDB2LTMwMGgzMDB2MzAwaC0zMDB6TTUwIDUwMGg5MDBxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM1LjV2LTQwMCBxMCAtMjEgLTE0LjUgLTM1LjV0LTM1LjUgLTE0LjVoLTkwMHEtMjEgMCAtMzUuNSAxNC41dC0xNC41IDM1LjV2NDAwcTAgMjEgMTQuNSAzNS41dDM1LjUgMTQuNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjUwOyIgZD0iTTg2NSA1NjVsLTQ5NCAtNDk0cS0yMyAtMjMgLTQxIC0yM3EtMTQgMCAtMjIgMTMuNXQtOCAzOC41djEwMDBxMCAyNSA4IDM4LjV0MjIgMTMuNXExOCAwIDQxIC0yM2w0OTQgLTQ5NHExNCAtMTQgMTQgLTM1dC0xNCAtMzV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTI1MTsiIGQ9Ik0zMzUgNjM1bDQ5NCA0OTRxMjkgMjkgNTAgMjAuNXQyMSAtNDkuNXYtMTAwMHEwIC00MSAtMjEgLTQ5LjV0LTUwIDIwLjVsLTQ5NCA0OTRxLTE0IDE0IC0xNCAzNXQxNCAzNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjUyOyIgZD0iTTEwMCA5MDBoMTAwMHE0MSAwIDQ5LjUgLTIxdC0yMC41IC01MGwtNDk0IC00OTRxLTE0IC0xNCAtMzUgLTE0dC0zNSAxNGwtNDk0IDQ5NHEtMjkgMjkgLTIwLjUgNTB0NDkuNSAyMXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjUzOyIgZD0iTTYzNSA4NjVsNDk0IC00OTRxMjkgLTI5IDIwLjUgLTUwdC00OS41IC0yMWgtMTAwMHEtNDEgMCAtNDkuNSAyMXQyMC41IDUwbDQ5NCA0OTRxMTQgMTQgMzUgMTR0MzUgLTE0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyNTQ7IiBkPSJNNzAwIDc0MXYtMTgybC02OTIgLTMyM3YyMjFsNDEzIDE5M2wtNDEzIDE5M3YyMjF6TTEyMDAgMGgtODAwdjIwMGg4MDB2LTIwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjU1OyIgZD0iTTEyMDAgOTAwaC0yMDB2LTEwMGgyMDB2LTEwMGgtMzAwdjMwMGgyMDB2MTAwaC0yMDB2MTAwaDMwMHYtMzAwek0wIDcwMGg1MHEwIDIxIDQgMzd0OS41IDI2LjV0MTggMTcuNXQyMiAxMXQyOC41IDUuNXQzMSAydDM3IDAuNWgxMDB2LTU1MHEwIC0yMiAtMjUgLTM0LjV0LTUwIC0xMy41bC0yNSAtMnYtMTAwaDQwMHYxMDBxLTQgMCAtMTEgMC41dC0yNCAzdC0zMCA3dC0yNCAxNXQtMTEgMjQuNXY1NTBoMTAwcTI1IDAgMzcgLTAuNXQzMSAtMiB0MjguNSAtNS41dDIyIC0xMXQxOCAtMTcuNXQ5LjUgLTI2LjV0NCAtMzdoNTB2MzAwaC04MDB2LTMwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjU2OyIgZD0iTTgwMCA3MDBoLTUwcTAgMjEgLTQgMzd0LTkuNSAyNi41dC0xOCAxNy41dC0yMiAxMXQtMjguNSA1LjV0LTMxIDJ0LTM3IDAuNWgtMTAwdi01NTBxMCAtMjIgMjUgLTM0LjV0NTAgLTE0LjVsMjUgLTF2LTEwMGgtNDAwdjEwMHE0IDAgMTEgMC41dDI0IDN0MzAgN3QyNCAxNXQxMSAyNC41djU1MGgtMTAwcS0yNSAwIC0zNyAtMC41dC0zMSAtMnQtMjguNSAtNS41dC0yMiAtMTF0LTE4IC0xNy41dC05LjUgLTI2LjV0LTQgLTM3aC01MHYzMDAgaDgwMHYtMzAwek0xMTAwIDIwMGgtMjAwdi0xMDBoMjAwdi0xMDBoLTMwMHYzMDBoMjAwdjEwMGgtMjAwdjEwMGgzMDB2LTMwMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjU3OyIgZD0iTTcwMSAxMDk4aDE2MHExNiAwIDIxIC0xMXQtNyAtMjNsLTQ2NCAtNDY0bDQ2NCAtNDY0cTEyIC0xMiA3IC0yM3QtMjEgLTExaC0xNjBxLTEzIDAgLTIzIDlsLTQ3MSA0NzFxLTcgOCAtNyAxOHQ3IDE4bDQ3MSA0NzFxMTAgOSAyMyA5eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGUyNTg7IiBkPSJNMzM5IDEwOThoMTYwcTEzIDAgMjMgLTlsNDcxIC00NzFxNyAtOCA3IC0xOHQtNyAtMThsLTQ3MSAtNDcxcS0xMCAtOSAtMjMgLTloLTE2MHEtMTYgMCAtMjEgMTF0NyAyM2w0NjQgNDY0bC00NjQgNDY0cS0xMiAxMiAtNyAyM3QyMSAxMXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjU5OyIgZD0iTTEwODcgODgycTExIC01IDExIC0yMXYtMTYwcTAgLTEzIC05IC0yM2wtNDcxIC00NzFxLTggLTcgLTE4IC03dC0xOCA3bC00NzEgNDcxcS05IDEwIC05IDIzdjE2MHEwIDE2IDExIDIxdDIzIC03bDQ2NCAtNDY0bDQ2NCA0NjRxMTIgMTIgMjMgN3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMjYwOyIgZD0iTTYxOCA5OTNsNDcxIC00NzFxOSAtMTAgOSAtMjN2LTE2MHEwIC0xNiAtMTEgLTIxdC0yMyA3bC00NjQgNDY0bC00NjQgLTQ2NHEtMTIgLTEyIC0yMyAtN3QtMTEgMjF2MTYwcTAgMTMgOSAyM2w0NzEgNDcxcTggNyAxOCA3dDE4IC03eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGY4ZmY7IiBkPSJNMTAwMCAxMjAwcTAgLTEyNCAtODggLTIxMnQtMjEyIC04OHEwIDEyNCA4OCAyMTJ0MjEyIDg4ek00NTAgMTAwMGgxMDBxMjEgMCA0MCAtMTR0MjYgLTMzbDc5IC0xOTRxNSAxIDE2IDNxMzQgNiA1NCA5LjV0NjAgN3Q2NS41IDF0NjEgLTEwdDU2LjUgLTIzdDQyLjUgLTQydDI5IC02NHQ1IC05MnQtMTkuNSAtMTIxLjVxLTEgLTcgLTMgLTE5LjV0LTExIC01MHQtMjAuNSAtNzN0LTMyLjUgLTgxLjV0LTQ2LjUgLTgzdC02NCAtNzAgdC04Mi41IC01MHEtMTMgLTUgLTQyIC01dC02NS41IDIuNXQtNDcuNSAyLjVxLTE0IDAgLTQ5LjUgLTMuNXQtNjMgLTMuNXQtNDMuNSA3cS01NyAyNSAtMTA0LjUgNzguNXQtNzUgMTExLjV0LTQ2LjUgMTEydC0yNiA5MGwtNyAzNXEtMTUgNjMgLTE4IDExNXQ0LjUgODguNXQyNiA2NHQzOS41IDQzLjV0NTIgMjUuNXQ1OC41IDEzdDYyLjUgMnQ1OS41IC00LjV0NTUuNSAtOGwtMTQ3IDE5MnEtMTIgMTggLTUuNSAzMHQyNy41IDEyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDFmNTExOyIgZD0iTTI1MCAxMjAwaDYwMHEyMSAwIDM1LjUgLTE0LjV0MTQuNSAtMzUuNXYtNDAwcTAgLTIxIC0xNC41IC0zNS41dC0zNS41IC0xNC41aC0xNTB2LTUwMGwtMjU1IC0xNzhxLTE5IC05IC0zMiAtMXQtMTMgMjl2NjUwaC0xNTBxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNS41djQwMHEwIDIxIDE0LjUgMzUuNXQzNS41IDE0LjV6TTQwMCAxMTAwdi0xMDBoMzAwdjEwMGgtMzAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDFmNmFhOyIgZD0iTTI1MCAxMjAwaDc1MHEzOSAwIDY5LjUgLTQwLjV0MzAuNSAtODQuNXYtOTMzbC03MDAgLTExN3Y5NTBsNjAwIDEyNWgtNzAwdi0xMDAwaC0xMDB2MTAyNXEwIDIzIDE1LjUgNDl0MzQuNSAyNnpNNTAwIDUyNXYtMTAwbDEwMCAyMHYxMDB6IiAvPgo8L2ZvbnQ+CjwvZGVmcz48L3N2Zz4g"

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(21);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/* !
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if (typeof jQuery === 'undefined') throw new Error("Bootstrap's JavaScript requires jQuery"); +function(a) { 'use strict'; const b = a.fn.jquery.split(' ')[0].split('.'); if (b[0] < 2 && b[1] < 9 || b[0] == 1 && b[1] == 9 && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"); }(jQuery), +function(a) {
  'use strict'; function b() {
    let a = document.createElement('bootstrap'),
      b = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd otransitionend', transition: 'transitionend' }; for (const c in b) if (void 0 !== a.style[c]) return { end: b[c] }; return !1;
  }a.fn.emulateTransitionEnd = function(b) {
    let c = !1,
      d = this; a(this).one('bsTransitionEnd', function() { c = !0; }); const e = function() { c || a(d).trigger(a.support.transition.end); }; return setTimeout(e, b), this;
  }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle(b) { if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments); } }); });
}(jQuery), +function(a) {
  'use strict'; function b(b) {
    return this.each(function() {
      let c = a(this),
        e = c.data('bs.alert'); e || c.data('bs.alert', e = new d(this)), typeof b === 'string' && e[b].call(c);
    });
  } var c = '[data-dismiss="alert"]',
    d = function(b) { a(b).on('click', c, this.close); }; d.VERSION = '3.3.7', d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
      function c() { g.detach().trigger('closed.bs.alert').remove(); } let e = a(this),
        f = e.attr('data-target'); f || (f = e.attr('href'), f = f && f.replace(/.*(?=#[^\s]*$)/, '')); var g = a(f === '#' ? [] : f); b && b.preventDefault(), g.length || (g = e.closest('.alert')), g.trigger(b = a.Event('close.bs.alert')), b.isDefaultPrevented() || (g.removeClass('in'), a.support.transition && g.hasClass('fade') ? g.one('bsTransitionEnd', c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
    }; const e = a.fn.alert; a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this; }, a(document).on('click.bs.alert.data-api', c, d.prototype.close);
}(jQuery), +function(a) {
  'use strict'; function b(b) {
    return this.each(function() {
      let d = a(this),
        e = d.data('bs.button'),
        f = typeof b === 'object' && b; e || d.data('bs.button', e = new c(this, f)), b == 'toggle' ? e.toggle() : b && e.setState(b);
    });
  } var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1; }; c.VERSION = '3.3.7', c.DEFAULTS = { loadingText: 'loading...' }, c.prototype.setState = function(b) {
    let c = 'disabled',
      d = this.$element,
      e = d.is('input') ? 'val' : 'html',
      f = d.data(); b += 'Text', f.resetText == null && d.data('resetText', d[e]()), setTimeout(a.proxy(function() { d[e](f[b] == null ? this.options[b] : f[b]), b == 'loadingText' ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1)); }, this), 0);
  }, c.prototype.toggle = function() {
    let a = !0,
      b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { const c = this.$element.find('input'); c.prop('type') == 'radio' ? (c.prop('checked') && (a = !1), b.find('.active').removeClass('active'), this.$element.addClass('active')) : c.prop('type') == 'checkbox' && (c.prop('checked') !== this.$element.hasClass('active') && (a = !1), this.$element.toggleClass('active')), c.prop('checked', this.$element.hasClass('active')), a && c.trigger('change'); } else this.$element.attr('aria-pressed', !this.$element.hasClass('active')), this.$element.toggleClass('active');
  }; const d = a.fn.button; a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this; }, a(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function(c) { const d = a(c.target).closest('.btn'); b.call(d, 'toggle'), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is('input,button') ? d.trigger('focus') : d.find('input:visible,button:visible').first().trigger('focus')); }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function(b) { a(b.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(b.type)); });
}(jQuery), +function(a) {
  'use strict'; function b(b) {
    return this.each(function() {
      let d = a(this),
        e = d.data('bs.carousel'),
        f = a.extend({}, c.DEFAULTS, d.data(), typeof b === 'object' && b),
        g = typeof b === 'string' ? b : f.slide; e || d.data('bs.carousel', e = new c(this, f)), typeof b === 'number' ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  } var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find('.carousel-indicators'), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on('keydown.bs.carousel', a.proxy(this.keydown, this)), this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', a.proxy(this.pause, this)).on('mouseleave.bs.carousel', a.proxy(this.cycle, this)); }; c.VERSION = '3.3.7', c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: 'hover', wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) { case 37:this.prev(); break; case 39:this.next(); break; default:return; }a.preventDefault(); } }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this; }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children('.item'), this.$items.index(a || this.$active); }, c.prototype.getItemForDirection = function(a, b) {
    let c = this.getItemIndex(b),
      d = a == 'prev' && c === 0 || a == 'next' && c == this.$items.length - 1; if (d && !this.options.wrap) return b; let e = a == 'prev' ? -1 : 1,
        f = (c + e) % this.$items.length; return this.$items.eq(f);
  }, c.prototype.to = function(a) {
    let b = this,
      c = this.getItemIndex(this.$active = this.$element.find('.item.active')); if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one('slid.bs.carousel', function() { b.to(a); }) : c == a ? this.pause().cycle() : this.slide(a > c ? 'next' : 'prev', this.$items.eq(a));
  }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find('.next, .prev').length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this; }, c.prototype.next = function() { if (!this.sliding) return this.slide('next'); }, c.prototype.prev = function() { if (!this.sliding) return this.slide('prev'); }, c.prototype.slide = function(b, d) {
    let e = this.$element.find('.item.active'),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = b == 'next' ? 'left' : 'right',
        i = this; if (f.hasClass('active')) return this.sliding = !1; let j = f[0],
        k = a.Event('slide.bs.carousel', { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find('.active').removeClass('active'); const l = a(this.$indicators.children()[this.getItemIndex(f)]); l && l.addClass('active'); } const m = a.Event('slid.bs.carousel', { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass('slide') ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one('bsTransitionEnd', function() { f.removeClass([ b, h ].join(' ')).addClass('active'), e.removeClass([ 'active', h ].join(' ')), i.sliding = !1, setTimeout(function() { i.$element.trigger(m); }, 0); }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass('active'), f.addClass('active'), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this; }
  }; const d = a.fn.carousel; a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this; }; const e = function(c) {
      let d,
      e = a(this),
      f = a(e.attr('data-target') || (d = e.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, '')); if (f.hasClass('carousel')) {
          let g = a.extend({}, f.data(), e.data()),
        h = e.attr('data-slide-to'); h && (g.interval = !1), b.call(f, g), h && f.data('bs.carousel').to(h), c.preventDefault();
        }
    }; a(document).on('click.bs.carousel.data-api', '[data-slide]', e).on('click.bs.carousel.data-api', '[data-slide-to]', e), a(window).on('load', function() { a('[data-ride="carousel"]').each(function() { const c = a(this); b.call(c, c.data()); }); });
}(jQuery), +function(a) {
  'use strict'; function b(b) {
    let c,
      d = b.attr('data-target') || (c = b.attr('href')) && c.replace(/.*(?=#[^\s]+$)/, ''); return a(d);
  } function c(b) {
    return this.each(function() {
      let c = a(this),
          e = c.data('bs.collapse'),
          f = a.extend({}, d.DEFAULTS, c.data(), typeof b === 'object' && b); !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data('bs.collapse', e = new d(this, f)), typeof b === 'string' && e[b]();
    });
  } var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle(); }; d.VERSION = '3.3.7', d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { const a = this.$element.hasClass('width'); return a ? 'width' : 'height'; }, d.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass('in')) {
        let b,
        e = this.$parent && this.$parent.children('.panel').children('.in, .collapsing'); if (!(e && e.length && (b = e.data('bs.collapse'), b && b.transitioning))) { const f = a.Event('show.bs.collapse'); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, 'hide'), b || e.data('bs.collapse', null)); const g = this.dimension(); this.$element.removeClass('collapse').addClass('collapsing')[g](0).attr('aria-expanded', !0), this.$trigger.removeClass('collapsed').attr('aria-expanded', !0), this.transitioning = 1; const h = function() { this.$element.removeClass('collapsing').addClass('collapse in')[g](''), this.transitioning = 0, this.$element.trigger('shown.bs.collapse'); }; if (!a.support.transition) return h.call(this); const i = a.camelCase([ 'scroll', g ].join('-')); this.$element.one('bsTransitionEnd', a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]); } }
      }
  }, d.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass('in')) { const b = a.Event('hide.bs.collapse'); if (this.$element.trigger(b), !b.isDefaultPrevented()) { const c = this.dimension(); this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', !1), this.$trigger.addClass('collapsed').attr('aria-expanded', !1), this.transitioning = 1; const e = function() { this.transitioning = 0, this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse'); }; return a.support.transition ? void this.$element[c](0).one('bsTransitionEnd', a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this); } } }, d.prototype.toggle = function() { this[this.$element.hasClass('in') ? 'hide' : 'show'](); }, d.prototype.getParent = function() { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) { const e = a(d); this.addAriaAndCollapsedClass(b(e), e); }, this)).end(); }, d.prototype.addAriaAndCollapsedClass = function(a, b) { const c = a.hasClass('in'); a.attr('aria-expanded', c), b.toggleClass('collapsed', !c).attr('aria-expanded', c); }; const e = a.fn.collapse; a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this; }, a(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function(d) {
      const e = a(this); e.attr('data-target') || d.preventDefault(); let f = b(e),
      g = f.data('bs.collapse'),
      h = g ? 'toggle' : e.data(); c.call(f, h);
    });
}(jQuery), +function(a) {
  'use strict'; function b(b) { let c = b.attr('data-target'); c || (c = b.attr('href'), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, '')); const d = c && a(c); return d && d.length ? d : b.parent(); } function c(c) {
    c && c.which === 3 || (a(e).remove(), a(f).each(function() {
      let d = a(this),
          e = b(d),
          f = { relatedTarget: this }; e.hasClass('open') && (c && c.type == 'click' && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event('hide.bs.dropdown', f)), c.isDefaultPrevented() || (d.attr('aria-expanded', 'false'), e.removeClass('open').trigger(a.Event('hidden.bs.dropdown', f)))));
    }));
  } function d(b) {
    return this.each(function() {
        let c = a(this),
        d = c.data('bs.dropdown'); d || c.data('bs.dropdown', d = new g(this)), typeof b === 'string' && d[b].call(c);
      });
  } var e = '.dropdown-backdrop',
      f = '[data-toggle="dropdown"]',
      g = function(b) { a(b).on('click.bs.dropdown', this.toggle); }; g.VERSION = '3.3.7', g.prototype.toggle = function(d) {
      const e = a(this); if (!e.is('.disabled, :disabled')) {
        let f = b(e),
          g = f.hasClass('open'); if (c(), !g) { 'ontouchstart' in document.documentElement && !f.closest('.navbar-nav').length && a(document.createElement('div')).addClass('dropdown-backdrop').insertAfter(a(this)).on('click', c); const h = { relatedTarget: this }; if (f.trigger(d = a.Event('show.bs.dropdown', h)), d.isDefaultPrevented()) return; e.trigger('focus').attr('aria-expanded', 'true'), f.toggleClass('open').trigger(a.Event('shown.bs.dropdown', h)); } return !1;
      }
    }, g.prototype.keydown = function(c) {
      if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
        const d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is('.disabled, :disabled')) {
          let e = b(d),
          g = e.hasClass('open'); if (!g && c.which != 27 || g && c.which == 27) return c.which == 27 && e.find(f).trigger('focus'), d.trigger('click'); let h = ' li:not(.disabled):visible a',
            i = e.find('.dropdown-menu' + h); if (i.length) { let j = i.index(c.target); c.which == 38 && j > 0 && j--, c.which == 40 && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger('focus'); }
        }
      }
    }; const h = a.fn.dropdown; a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this; }, a(document).on('click.bs.dropdown.data-api', c).on('click.bs.dropdown.data-api', '.dropdown form', function(a) { a.stopPropagation(); }).on('click.bs.dropdown.data-api', f, g.prototype.toggle).on('keydown.bs.dropdown.data-api', f, g.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', g.prototype.keydown);
}(jQuery), +function(a) {
  'use strict'; function b(b, d) {
    return this.each(function() {
        let e = a(this),
        f = e.data('bs.modal'),
        g = a.extend({}, c.DEFAULTS, e.data(), typeof b === 'object' && b); f || e.data('bs.modal', f = new c(this, g)), typeof b === 'string' ? f[b](d) : g.show && f.show(d);
      });
  } var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find('.modal-dialog'), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find('.modal-content').load(this.options.remote, a.proxy(function() { this.$element.trigger('loaded.bs.modal'); }, this)); }; c.VERSION = '3.3.7', c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a); }, c.prototype.show = function(b) {
      let d = this,
      e = a.Event('show.bs.modal', { relatedTarget: b }); this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass('modal-open'), this.escape(), this.resize(), this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on('mousedown.dismiss.bs.modal', function() { d.$element.one('mouseup.dismiss.bs.modal', function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0); }); }), this.backdrop(function() { const e = a.support.transition && d.$element.hasClass('fade'); d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass('in'), d.enforceFocus(); const f = a.Event('shown.bs.modal', { relatedTarget: b }); e ? d.$dialog.one('bsTransitionEnd', function() { d.$element.trigger('focus').trigger(f); }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger('focus').trigger(f); }));
    }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event('hide.bs.modal'), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off('focusin.bs.modal'), this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal'), this.$dialog.off('mousedown.dismiss.bs.modal'), a.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()); }, c.prototype.enforceFocus = function() { a(document).off('focusin.bs.modal').on('focusin.bs.modal', a.proxy(function(a) { document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger('focus'); }, this)); }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on('keydown.dismiss.bs.modal', a.proxy(function(a) { a.which == 27 && this.hide(); }, this)) : this.isShown || this.$element.off('keydown.dismiss.bs.modal'); }, c.prototype.resize = function() { this.isShown ? a(window).on('resize.bs.modal', a.proxy(this.handleUpdate, this)) : a(window).off('resize.bs.modal'); }, c.prototype.hideModal = function() { const a = this; this.$element.hide(), this.backdrop(function() { a.$body.removeClass('modal-open'), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger('hidden.bs.modal'); }); }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null; }, c.prototype.backdrop = function(b) {
    let d = this,
      e = this.$element.hasClass('fade') ? 'fade' : ''; if (this.isShown && this.options.backdrop) { const f = a.support.transition && e; if (this.$backdrop = a(document.createElement('div')).addClass('modal-backdrop ' + e).appendTo(this.$body), this.$element.on('click.dismiss.bs.modal', a.proxy(function(a) { return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && (this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide())); }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass('in'), !b) return; f ? this.$backdrop.one('bsTransitionEnd', b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b(); } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass('in'); const g = function() { d.removeBackdrop(), b && b(); }; a.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g(); } else b && b();
  }, c.prototype.handleUpdate = function() { this.adjustDialog(); }, c.prototype.adjustDialog = function() { const a = this.$element[0].scrollHeight > document.documentElement.clientHeight; this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : '', paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : '' }); }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: '', paddingRight: '' }); }, c.prototype.checkScrollbar = function() { let a = window.innerWidth; if (!a) { const b = document.documentElement.getBoundingClientRect(); a = b.right - Math.abs(b.left); } this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar(); }, c.prototype.setScrollbar = function() { const a = parseInt(this.$body.css('padding-right') || 0, 10); this.originalBodyPad = document.body.style.paddingRight || '', this.bodyIsOverflowing && this.$body.css('padding-right', a + this.scrollbarWidth); }, c.prototype.resetScrollbar = function() { this.$body.css('padding-right', this.originalBodyPad); }, c.prototype.measureScrollbar = function() { const a = document.createElement('div'); a.className = 'modal-scrollbar-measure', this.$body.append(a); const b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b; }; const d = a.fn.modal; a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this; }, a(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(c) {
    let d = a(this),
      e = d.attr('href'),
      f = a(d.attr('data-target') || e && e.replace(/.*(?=#[^\s]+$)/, '')),
      g = f.data('bs.modal') ? 'toggle' : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data()); d.is('a') && c.preventDefault(), f.one('show.bs.modal', function(a) { a.isDefaultPrevented() || f.one('hidden.bs.modal', function() { d.is(':visible') && d.trigger('focus'); }); }), b.call(f, g, this);
  });
}(jQuery), +function(a) {
  'use strict'; function b(b) {
      return this.each(function() {
      let d = a(this),
        e = d.data('bs.tooltip'),
        f = typeof b === 'object' && b; !e && /destroy|hide/.test(b) || (e || d.data('bs.tooltip', e = new c(this, f)), typeof b === 'string' && e[b]());
    });
    } var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init('tooltip', a, b); }; c.VERSION = '3.3.7', c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: 'top', selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: 'hover focus', title: '', delay: 0, html: !1, container: !1, viewport: { selector: 'body', padding: 0 } }, c.prototype.init = function(b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!'); for (let e = this.options.trigger.split(' '), f = e.length; f--;) {
      const g = e[f]; if (g == 'click') this.$element.on('click.' + this.type, this.options.selector, a.proxy(this.toggle, this)); else if (g != 'manual') {
        let h = g == 'hover' ? 'mouseenter' : 'focusin',
          i = g == 'hover' ? 'mouseleave' : 'focusout'; this.$element.on(h + '.' + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + '.' + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    } this.options.selector ? this._options = a.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
  }, c.prototype.getDefaults = function() { return c.DEFAULTS; }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && typeof b.delay === 'number' && (b.delay = { show: b.delay, hide: b.delay }), b; }, c.prototype.getDelegateOptions = function() {
    let b = {},
      c = this.getDefaults(); return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d); }), b;
  }, c.prototype.enter = function(b) { let c = b instanceof this.constructor ? b : a(b.currentTarget).data('bs.' + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data('bs.' + this.type, c)), b instanceof a.Event && (c.inState[b.type == 'focusin' ? 'focus' : 'hover'] = !0), c.tip().hasClass('in') || c.hoverState == 'in' ? void (c.hoverState = 'in') : (clearTimeout(c.timeout), c.hoverState = 'in', c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() { c.hoverState == 'in' && c.show(); }, c.options.delay.show)) : c.show()); }, c.prototype.isInStateTrue = function() { for (const a in this.inState) if (this.inState[a]) return !0; return !1; }, c.prototype.leave = function(b) { let c = b instanceof this.constructor ? b : a(b.currentTarget).data('bs.' + this.type); if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data('bs.' + this.type, c)), b instanceof a.Event && (c.inState[b.type == 'focusout' ? 'focus' : 'hover'] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = 'out', c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() { c.hoverState == 'out' && c.hide(); }, c.options.delay.hide)) : c.hide(); }, c.prototype.show = function() {
    const b = a.Event('show.bs.' + this.type); if (this.hasContent() && this.enabled) {
      this.$element.trigger(b); const d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; let e = this,
        f = this.tip(),
        g = this.getUID(this.type); this.setContent(), f.attr('id', g), this.$element.attr('aria-describedby', g), this.options.animation && f.addClass('fade'); let h = typeof this.options.placement === 'function' ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h); j && (h = h.replace(i, '') || 'top'), f.detach().css({ top: 0, left: 0, display: 'block' }).addClass(h).data('bs.' + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger('inserted.bs.' + this.type); let k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight; if (j) {
            let n = h,
              o = this.getPosition(this.$viewport); h = h == 'bottom' && k.bottom + m > o.bottom ? 'top' : h == 'top' && k.top - m < o.top ? 'bottom' : h == 'right' && k.right + l > o.width ? 'left' : h == 'left' && k.left - l < o.left ? 'right' : h, f.removeClass(n).addClass(h);
          } const p = this.getCalculatedOffset(h, k, l, m); this.applyPlacement(p, h); const q = function() { const a = e.hoverState; e.$element.trigger('shown.bs.' + e.type), e.hoverState = null, a == 'out' && e.leave(e); }; a.support.transition && this.$tip.hasClass('fade') ? f.one('bsTransitionEnd', q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function(b, c) {
    let d = this.tip(),
      e = d[0].offsetWidth,
      f = d[0].offsetHeight,
      g = parseInt(d.css('margin-top'), 10),
      h = parseInt(d.css('margin-left'), 10); isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }); } }, b), 0), d.addClass('in'); let i = d[0].offsetWidth,
        j = d[0].offsetHeight; c == 'top' && j != f && (b.top = b.top + f - j); const k = this.getViewportAdjustedDelta(c, b, i, j); k.left ? b.left += k.left : b.top += k.top; let l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? 'offsetWidth' : 'offsetHeight'; d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? 'left' : 'top', 50 * (1 - a / b) + '%').css(c ? 'top' : 'left', ''); }, c.prototype.setContent = function() {
    let a = this.tip(),
      b = this.getTitle(); a.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](b), a.removeClass('fade in top bottom left right');
  }, c.prototype.hide = function(b) {
    function d() { e.hoverState != 'in' && f.detach(), e.$element && e.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + e.type), b && b(); } var e = this,
    f = a(this.$tip),
    g = a.Event('hide.bs.' + this.type); if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass('in'), a.support.transition && f.hasClass('fade') ? f.one('bsTransitionEnd', d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
  }, c.prototype.fixTitle = function() { const a = this.$element; (a.attr('title') || typeof a.attr('data-original-title') !== 'string') && a.attr('data-original-title', a.attr('title') || '').attr('title', ''); }, c.prototype.hasContent = function() { return this.getTitle(); }, c.prototype.getPosition = function(b) {
  b = b || this.$element; let c = b[0],
    d = c.tagName == 'BODY',
    e = c.getBoundingClientRect(); e.width == null && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); let f = window.SVGElement && c instanceof window.SVGElement,
      g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
      h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
      i = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, h, i, g);
}, c.prototype.getCalculatedOffset = function(a, b, c, d) { return a == 'bottom' ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : a == 'top' ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : a == 'left' ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width }; }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
  const e = { top: 0, left: 0 }; if (!this.$viewport) return e; let f = this.options.viewport && this.options.viewport.padding || 0,
    g = this.getPosition(this.$viewport); if (/right|left/.test(a)) {
        let h = b.top - f - g.scroll,
        i = b.top + f - g.scroll + d; h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
      } else {
        let j = b.left - f,
        k = b.left + f + c; j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
      } return e;
}, c.prototype.getTitle = function() {
  let a,
      b = this.$element,
      c = this.options; return a = b.attr('data-original-title') || (typeof c.title === 'function' ? c.title.call(b[0]) : c.title);
}, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a));return a; }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), this.$tip.length != 1)) throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!'); return this.$tip; }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'); }, c.prototype.enable = function() { this.enabled = !0; }, c.prototype.disable = function() { this.enabled = !1; }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled; }, c.prototype.toggle = function(b) { let c = this; b && (c = a(b.currentTarget).data('bs.' + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data('bs.' + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass('in') ? c.leave(c) : c.enter(c); }, c.prototype.destroy = function() { const a = this; clearTimeout(this.timeout), this.hide(function() { a.$element.off('.' + a.type).removeData('bs.' + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null; }); }; const d = a.fn.tooltip; a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this; };
}(jQuery), +function(a) {
    'use strict'; function b(b) {
    return this.each(function() {
      let d = a(this),
        e = d.data('bs.popover'),
        f = typeof b === 'object' && b; !e && /destroy|hide/.test(b) || (e || d.data('bs.popover', e = new c(this, f)), typeof b === 'string' && e[b]());
    });
  } var c = function(a, b) { this.init('popover', a, b); }; if (!a.fn.tooltip) throw new Error('Popover requires tooltip.js'); c.VERSION = '3.3.7', c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: 'right', trigger: 'click', content: '', template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS; }, c.prototype.setContent = function() {
    let a = this.tip(),
      b = this.getTitle(),
      c = this.getContent(); a.find('.popover-title')[this.options.html ? 'html' : 'text'](b), a.find('.popover-content').children().detach().end()[this.options.html ? typeof c === 'string' ? 'html' : 'append' : 'text'](c), a.removeClass('fade top bottom left right in'), a.find('.popover-title').html() || a.find('.popover-title').hide();
  }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent(); }, c.prototype.getContent = function() {
    let a = this.$element,
      b = this.options; return a.attr('data-content') || (typeof b.content === 'function' ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find('.arrow'); }; const d = a.fn.popover; a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this; };
  }(jQuery), +function(a) {
  'use strict'; function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || '') + ' .nav li > a', this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on('scroll.bs.scrollspy', a.proxy(this.process, this)), this.refresh(), this.process(); } function c(c) {
    return this.each(function() {
      let d = a(this),
        e = d.data('bs.scrollspy'),
        f = typeof c === 'object' && c; e || d.data('bs.scrollspy', e = new b(this, f)), typeof c === 'string' && e[c]();
    });
  }b.VERSION = '3.3.7', b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight); }, b.prototype.refresh = function() {
    let b = this,
      c = 'offset',
      d = 0; this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = 'position', d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
        let b = a(this),
          e = b.data('target') || b.attr('href'),
          f = /^#./.test(e) && a(e); return f && f.length && f.is(':visible') && [[ f[c]().top + d, e ]] || null;
      }).sort(function(a, b) { return a[0] - b[0]; }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]); });
  }, b.prototype.process = function() {
    let a,
      b = this.$scrollElement.scrollTop() + this.options.offset,
      c = this.getScrollHeight(),
      d = this.options.offset + c - this.$scrollElement.height(),
      e = this.offsets,
      f = this.targets,
      g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;)g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
  }, b.prototype.activate = function(b) {
    this.activeTarget = b, this.clear(); let c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
      d = a(c).parents('li').addClass('active'); d.parent('.dropdown-menu').length && (d = d.closest('li.dropdown').addClass('active')), d.trigger('activate.bs.scrollspy');
  }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, '.active').removeClass('active'); }; const d = a.fn.scrollspy; a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this; }, a(window).on('load.bs.scrollspy.data-api', function() { a('[data-spy="scroll"]').each(function() { const b = a(this); c.call(b, b.data()); }); });
}(jQuery), +function(a) {
  'use strict'; function b(b) {
    return this.each(function() {
      let d = a(this),
        e = d.data('bs.tab'); e || d.data('bs.tab', e = new c(this)), typeof b === 'string' && e[b]();
    });
  } var c = function(b) { this.element = a(b); }; c.VERSION = '3.3.7', c.TRANSITION_DURATION = 150, c.prototype.show = function() {
    let b = this.element,
      c = b.closest('ul:not(.dropdown-menu)'),
      d = b.data('target'); if (d || (d = b.attr('href'), d = d && d.replace(/.*(?=#[^\s]*$)/, '')), !b.parent('li').hasClass('active')) {
        let e = c.find('.active:last a'),
          f = a.Event('hide.bs.tab', { relatedTarget: b[0] }),
          g = a.Event('show.bs.tab', { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { const h = a(d); this.activate(b.closest('li'), c), this.activate(h, h.parent(), function() { e.trigger({ type: 'hidden.bs.tab', relatedTarget: b[0] }), b.trigger({ type: 'shown.bs.tab', relatedTarget: e[0] }); }); }
      }
  }, c.prototype.activate = function(b, d, e) {
    function f() { g.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !1), b.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', !0), h ? (b[0].offsetWidth, b.addClass('in')) : b.removeClass('fade'), b.parent('.dropdown-menu').length && b.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !0), e && e(); } var g = d.find('> .active'),
      h = e && a.support.transition && (g.length && g.hasClass('fade') || !!d.find('> .fade').length); g.length && h ? g.one('bsTransitionEnd', f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass('in');
  }; const d = a.fn.tab; a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this; }; const e = function(c) { c.preventDefault(), b.call(a(this), 'show'); }; a(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', e).on('click.bs.tab.data-api', '[data-toggle="pill"]', e);
}(jQuery), +function(a) {
  'use strict'; function b(b) {
    return this.each(function() {
      let d = a(this),
        e = d.data('bs.affix'),
        f = typeof b === 'object' && b; e || d.data('bs.affix', e = new c(this, f)), typeof b === 'string' && e[b]();
    });
  } var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on('scroll.bs.affix.data-api', a.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition(); }; c.VERSION = '3.3.7', c.RESET = 'affix affix-top affix-bottom', c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) {
    let e = this.$target.scrollTop(),
      f = this.$element.offset(),
      g = this.$target.height(); if (c != null && this.affixed == 'top') return e < c && 'top'; if (this.affixed == 'bottom') return c != null ? !(e + this.unpin <= f.top) && 'bottom' : !(e + g <= a - d) && 'bottom'; let h = this.affixed == null,
        i = h ? e : f.top,
        j = h ? g : b; return c != null && e <= c ? 'top' : d != null && i + j >= a - d && 'bottom';
  }, c.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset; this.$element.removeClass(c.RESET).addClass('affix'); let a = this.$target.scrollTop(),
      b = this.$element.offset(); return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1); }, c.prototype.checkPosition = function() {
    if (this.$element.is(':visible')) {
      let b = this.$element.height(),
        d = this.options.offset,
        e = d.top,
        f = d.bottom,
        g = Math.max(a(document).height(), a(document.body).height()); typeof d !== 'object' && (f = e = d), typeof e === 'function' && (e = d.top(this.$element)), typeof f === 'function' && (f = d.bottom(this.$element)); const h = this.getState(g, b, e, f); if (this.affixed != h) {
          this.unpin != null && this.$element.css('top', ''); let i = 'affix' + (h ? '-' + h : ''),
          j = a.Event(i + '.bs.affix'); if (this.$element.trigger(j), j.isDefaultPrevented()) return; this.affixed = h, this.unpin = h == 'bottom' ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace('affix', 'affixed') + '.bs.affix');
        }h == 'bottom' && this.$element.offset({ top: g - b - f });
    }
  }; const d = a.fn.affix; a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this; }, a(window).on('load', function() {
    a('[data-spy="affix"]').each(function() {
      let c = a(this),
        d = c.data(); d.offset = d.offset || {}, d.offsetBottom != null && (d.offset.bottom = d.offsetBottom), d.offsetTop != null && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-fluid",
    attrs: {
      "id": "app"
    }
  }, [_c('header', {
    staticClass: "head"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(24),
      "width": "100%",
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.projects(1)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "row news"
  }, [_c('ul', {
    staticClass: "appul container"
  }, [_c('li', [_c('router-link', {
    attrs: {
      "to": {
        name: 'home',
        params: {
          id: '0'
        }
      }
    }
  }, [_vm._v("推荐")])], 1), _vm._v(" "), _vm._l((_vm.news), function(v, i) {
    return _c('li', [_c('router-link', {
      attrs: {
        "to": {
          name: 'home',
          params: {
            id: v.id
          }
        }
      },
      domProps: {
        "textContent": _vm._s(v.name)
      }
    })], 1)
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-9"
  }, [_c('router-view', {
    staticClass: "panel  hello",
    attrs: {
      "name": "hello"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('router-view')], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1e91e550", module.exports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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61U82jzaOUfOW9wpdw9apeZS+Z70cge0Lm4etG4VT82l800uQftC5uHrRuFU/NNHnUcge0LmRRketU/OpfOo5A9oi3ketGRVTzqPOo5B+0RcyKMiqfnUedRyB7RFvI9aXIqn51Hne9HIHtEW8ijI9aqedR51HIHtEW8j1oyPWqnnUnnUcge0RcyPWjI9ap+dR5tHIL2iKu+jfVffRvraxzljfRvqvvo30WAsb6N9V99G+iwFjdRuqvv96N9FgLG+jfVffRvosBY30b6r76N9FgLG6jfVffRv96LAWN9G6q+/3o30WAsb6N9V99G/3osBY3Ub6r76N9FgLG+jfVffRvosBY30b6r7/ejfRYCxvo31X30b6LAWN9G+q++jfRYCxvo31X30b6LAWN9G+q++jfRYCxvo31X30b6LAWN9G+q++jfRYCxvo3VX3+9G/wB6LAWN9G+q++jfRYCxvo31X30b6LAWN9G+q++jfRYCxvo31X30b6LAWN9G+q++jfRYCxvo31X30b6LAWN9G+q++l30WAn30b6r76N9FgLG+jfVffRvosBY30b6r76N9FgLG+jfVff70b6LAWN9G+q++jf70WAsb6N9V99G+iwFjfRvqvvo30WAsb6N9V99G+iwFjfRvqvvo3+9FgLG+jfVffRvosBY30b6r76N9FgLG+jfVffRvosBY30b6r76N9FgLG+jdVff70b/AHosBY30b6r76N9FgLG+jfVffRvosBY30b6r76N/vRYCxvo3VX30b6LAWN1G+q++jfRYCxvo3VX30b6LAWN9G+q++jfRYCxvo31X30b6LAWN9G+q++jfRYCxvo31X30b6LAWN9G+q++jfRYCxvo31X30b6LAWN9G+q++jfRYCxuo31X30b6LAWN9G+q++jfRYCxvo31X30b/AHosBY30b6r76N9FgLG+jfVffRvosBY30b6r76N/vRYCxvo31X30b6LAWN9G+q++jfRYCxvo31X30b/eiwFjdRvqvvo30WAsb6N9V99G+iwFjfRvqvv96N/vRYCxvo3+9V99G/3osBX3+9G/3qrv96N9aWEWt/vRv96q+ZR5nvRYC1vo3+9VfM96PM96LAWt/vRvqrvo30WAtb/ejfVXzPejzPeiwFrf70b/AHqr5nvR5nvRYC1v96N/vVXfRvosBa3+9G/3qr5nvS+Z70WAs7/ejfVXzPejzPeiwFrfRvqr5nvR5lFgLW/3o3+9VfM96XzKLAWd/vRvqr5nvR5nvRYC1v8Aejf71V8z3o8yiwFrf70b/eqvmUb6LAWt/vRv96q7/ejzPeiwFrfRvqr5nvR5lFgLW/3o3+9Vd9Hme9FgLW/3o3+9VfMo30WAtb/ejf71V8yjzPeiwFrf70b6q+ZR5lFgLW+jf71V8yjfRYC1v96N/vVXzPejzKLAWt/vRv8AeqvmUeZ70WAtb6N/vVXfR5lFgLW/3o3+9Vd/vR5lFgLW/wB6N/vVXzPejzKLAWt/vRv96q76PMosBa3+9G/3qr5nvR5lFgLW/wB6N/vVXzKPM96LAWt/vRv96q+Z70eZ70WAtb/ejf71V3+9G+iwFrf70b/equ+jzKLAWt/vRv8Aeqvme9Hme9FgLW/3o3+9VfMo8z3osBa3+9G/3qr5nvR5lFgLW/3o31V8z3o3+9FgLW/3o3+9VfMo8z3osBa3+9G/3qrvo8yiwFrfRv8Aeqvme9Hme9FgLW/3o3+9VfM96N9FgLW+jfVXfR5nvRYC1v8Aejf71V8z3o8yiwFrf70b6q+ZR5nvRYC1v96N/vVXzKPM96LAWt/vRv8Aeqvme9G/3osBa30b/eqvme9HmUWAtb/ejf71V8z3o8yiwFrf70b/AHqr5nvR5nvRYC1v96N/vVXzPejzPeiwFrfRv96q+ZS+Z70WAs7/AHo3+9VfM96PM96LAWt9G/3qr5nvR5lFgLW/3o3+9VfMo8z3osBa3+9G/wB6q+Z70vme9FgLO/3o3+9VfMpfM96LAWd9G/3qr5lHmUWAtb/ejf71V8yjzPeiwFrf70b/AHqr5nvRv96LAWt9G+qvmUeZRYC1v96N/vVXzKN/vRYC1v8Aejf71W8yk8z3osBa3+9G/wB6q+ZR5lFgLW/3o31V8z3o8z3osBa3+9G+qvme9HmUWAtb/ejf71V8z3o8z3osBa3+9G/3qr5lG+iwFbfRvqrvo31pYktb6N9Vd9G+iwFrfRvqrvo30WAtb6N9Vd9G+iwFnfS76q76N9FgLW+jfVXfRvosBa30b6q76N9FgLW+jfVXfRvosBa30b6q76N9FgLW+jfVXfRvosBa30b6q76N9FgLW+jfVXfRvosBa30b6q76N9FgLW+jfVXfRvosBa30b6q76N9FgLO+l31V30b6LAWt9G+qu+jfRYC1vpN9Vt9G+iwFrfRvqrv96N9FgLW+jfVXfRvosBZ30u+qu+jfRYC1vo31V3+9G+iwFrfRvqrvo30WAtb6N9Vd9G+iwFrfRvqrvo30WAs76XfVXfRvosBa30m+q2/3o30WAtb6N9Vd9G+iwFrfRvqrvo3+9FgLW+jfVXfRvosBa30m+q2+jfRYC1vo31V30b6LAWt9G+qu+jfRYC1vo31V30b6LAWt9G+qu+jfRYC1vo31V30b6LAWt9G+qu+jfRYCzvpd9Vd9G+iwFrfRvqrvo30WAtb6N9Vd9G+iwFrfSb6rb6N9FgLW+jfVXfRvosBa30b6q76N9FgLW+jfVXfRvosBa30b6q76N9FgLW+jfVXfRv8AeiwFrfRvqrv96N9FgLW+jfVXfRvosBa30b6q76N9FgLW+jfVXfRvosBa30b6q76N9FgLO+l31V30b6LAWt9G+qu+jfRYC1vo31V30b/eiwFrfRvqrvo30WAtb6TfVbfRvosBa30b6q76N9FgLW+jfVXfRvosBa30b6q7/ejfRYCzvpd9Vd/vRvosBa30b6q76N9FgLW+jfVXfRvosBa30b6q76N9FgLW+jfVXfRvosBa30b6q76N9FgLW+jfVXfRvosBW8yjfVffSb60sIs+Z70b6rb6N9FgLO/3o31X30b6LAWPMo8yq++k30WAs76PMqtv96XfRYCxvo31X30b6LAWPMo31W30b6LAWd9G/wB6rb6N9FgLO+jfVffRvosBY30b/eq++k30WAs76PMqvvo30WAsb6N9V99JvosBZ8yjfVbf70b6LAWfMo31W30u+iwFjzKN9Vt9G+iwFnfRvqvvpN9FgLO+jfVffRvosBY30eZVffSb6LAWd9G+q2/3o30WAs+ZRvqvvpN9FgLO+jfVbfRvosBZ8yjfVffSb6LAWd9G+q++k30WAs+ZRvqtvo30WAs76N9Vt9G+iwFnfRvqvvpN9FgLO+jfVbfRvosBZ3+9G/3qvvpN9FgLO+jfVffSb6LAWd9G+q2+jfRYCzvo31W30b/eiwFnfRvqvvpN9FgLO+jfVbfRvosBZ8yjzKrb6N9FgLO+jfVbfS76LAWN9G+q++k30WAs76N9Vt9G+iwFnfRvqvvpN9FgLO+jzKrb6N9FgLPmUeZVbfS76LAWN9G+q2+jfRYCz5lG+q2+jfRYCz5lG+q2+l30WAsb6N9V99JvosBZ30b6rb6N9FgLO/3o31W30b6LAWd9G+q2+l30WAsb6N9Vt9LvosBY30b6rb6XfRYCxvo31W30b6LAWd9G+q2/3pd9FgLG+jzPeq++k30WAs76N9Vt9G+iwFnfRvqtvo30WAs+ZRvqtvo30WAs+ZRvqtvo3+9FgLO+jfVbf70b6LAWd9G+q2+l30WAsb6N9Vt9G+iwFnf70b6rb6N9FgLO/wB6N9Vt9G+iwFnfR5lVt9G+iwFnfRv96rb6N9FgLO+jfVffSb6LAWd/vRvqvvo30WAseZR5lVt9Hme9FgK++jfVXzKN9aWEWt9G+qvmUeZRYC1vo31V8yjzKLAWt9G+qu+jzKLAWt9G+qvmUvmUWAs76N9VfMo30WAtb6N9VfMo30WAtb6N9Vd9G+iwFrfRvqr5lG+iwFrfRvqt5lJvosBa30b6q+ZR5lFgLW+jfVXfRvosBa30b6q+ZRvosBa30b6q76PMosBa30b6q+ZR5lFgLO+jfVbzKPMosBa30b6q+ZR5lFgLW+jfVbzKTzKLAWt9Jvqtvo30WAtb6N9Vd9HmUWAtb6N9VvMpPMosBa30b6q+ZR5lFgLO+l31V8yjzKLAWt9G+qu+jzPeiwFrfRvqr5nvRvosBa30b6q+ZR5lFgLW+jfVXfR5nvRYC1vo31V8yjfRYC1vpN9Vt9G+iwFnfS76q+ZR5lFguWt9Jvqtvo30WAtb6N9VfM96XzKLAWd9G+qvmUeZRYC1vo31V8yjfRYC1vo31V30eZRYC1vo31V30eZRYC1vo3+9VfM96PMosBa30b6q76PMosBa30b6q+ZR5lFgLW+jfVXzKPM96LAWt9G+qu+jfRYC1vo31V30eZRYC1vo31V8z3o8yiwFrfRvqrvo30WAtb6N9Vd9L5lFgLO+jfVXfR5lFgLW+jfVXzKPMosBa30b6q+ZR5lFgLW+jfVXzKPMosBa30b6q76PMosBa30b6q76N9FgLW+jf71V30u+iwFnfRvqrvo8yiwFrfRvqr5lHmUWAs76XfVXzKPMosBa30b6q+ZRvosBa30b6q76PMosBa30b6q+ZRvosBa30b6q76PMosBa30b6q+Z70b6LAWd9Lvqr5lHmUWAtb6N9VfMo30WAtb6N9Vd9HmUWAtb6N9Vd/vR5lFgLW+jfVXfRvosBa30b6q+ZR5lFgKvme9L5nvVXfR5laWJLXme9HmVV30eZRYC15lHme9Vd9HmUWAs+ZS7/AHqrvo30WAteZR5nvVXzKPMosBa8z3o8yqu+jzKLAWvMo8yqu+jzKLAWfM96XzKq+ZR5lFgLXmUeZVXfR5lFgLXme9Hme9Vd9HmUWAteZ70eZVXfRvosBa8yjzKq76N9FgLXme9Hme9VfMo8yiwFrzPejf71V8yjzKLAWvMo8yqvmUeZRYC15lJv96rb6N9FgLXme9J5lVt9G+iwFrzPejf71V30eZRYC15nvR5nvVXfR5lFgLXmUnme9Vt9HmUWAteZ70eZ71V8yjzKLAWvM96PMqrvo8yiwFrzPejzKq76PMosBa8yjzKq76N9FgLXmUb6q76N9FgLXme9Hme9VfMo30WAteZSeZVbzKN9FgLXme9J5nvVbzKN9FgLXme9HmVV30eZRYC15lHmVV8yjfRYC15lHme9VfMo30WAtb6N9Vd9HmUWAteZSeZVbzKPMosBa8yk8z3qtvo30WAteZ70eZ71V30eZRYC15lHmVV30b6LAWvMo31V8yjzKLAWvM96PM96q76PMosBa8z3o8z3qr5lHmUWAteZR5nvVXfRvosBa3+9HmVV8yjfRYC15nvSeZ71W30eZRYC15lHmVV8yjzKLAWt9Hme9VfMo8yiwFrzPejzPeqvmUb6LAWvM96TzKrb6N9FgLPmUeZ71W30b6LAWt/vR5lVfMo30WAteZR5lVd9HmUWAtb6PM96q+ZR5lFgLXmUb6q76PMosBa8z3o8yqvmUb6LAWvMo8z3qr5lHmUWAs+ZS+Z71V8yjzKLAWfM96XzKq+ZRvosBZ8yl8yqvmUeZRYC15lHme9VfMo30WAtb/ejzKq76N9FgLXmUnme9Vt9HmUWAteZR5lVfMo30WAteZR5lVd9HmUWAteZR5lVfMo8yiwFrzKTzPeq2+jfRYCz5nvS+Z71V30eZRYC15lHmVV30eZRYCz5nvR5nvVbfR5lFgK3mUeZVffRvrSwix5lHmVX30b/AHosBY8yjzKr76N9FgLHmUb6r76TfRYCz5lHmVX3+9G+iwFjzKN9V99G+iwFjfRvqvvo30WAseZR5lV99G/3osBY8yjzKr76N9FgLG+jfVffRvosBY30eZVffRvosBY8yjzKr76N9FgLHmUeZVffRvosBY30eZVffRvosBY8yjzKr7/ejfRYCx5lHmVX30b6LAWPMo8yq++jfRYCx5lHmVX3+9G/3osBY8yjzKr76N9FgLG+jzKr76N9FgLHmUeZVffRvosBY30eZVffRvosBY8yjzKr76N9FgLHmUeZVffRvosBY8yjzKr76N9FgLHmUeZVffRvosBY8yjzKr76N9FgLHmUb6r76N/vRYCx5lHmVX3+9G+iwFjzKPMqvvo30WAsb6PMqvvo3+9FgLHmUeZVffRvosBY30eZVffRvosBY30eZVffRvosBY8yjzKr76N/vRYCx5lG+q++jfRYCx5lHmVX30b6LAWPMo8yq++jfRYCxvo8yq++jfRYCxvo8yq++jfRYCx5lHmVX30b6LAWPMo31X30b/eiwFjzKPMqvvo30WAseZR5lV99G+iwFjzKPMqvvo30WAseZR5lV99G+iwFjzKPMqvvo30WAseZR5lV99G+iwFjzKPMqvvo30WAseZRvqvvo30WAseZR5lV99G/3osBY30eZVffRvosBY30eZVffRvosBY8yjfVffRvosBY8yjzKr76N9FgLHmUeZVffRvosBY8yjzKr7/ejfRYCx5lHmVX30b6LAWPMo8yq++jfRYCxvo8yq++jfRYCx5lHmVX30b6LAWPMo8yq++jfRYCx5lHmVX30b6LAWPMo8yq++jfRYCxvo8yq++jfRYCx5lHmVX30b6LAR7W9RRtb1FFFWSG1vaja3qKKKADa3tRtb1FFFAXDa3qKNre1FFABtb1FG0+1FFABtb1FG1vUUUUAG1vajY3qKKKAuG1vUUbW9qKKADa3qKNreooooC4bW9RRtb1FFFAXDY3qKNreooop2QBtb1FG1vaiikAbW9RRtb1FFFABtb1FG1vUUUUBcNreoo2t6iiigLhtb1FG1vUUUUBcNreoo2t6iiigLhtb1FG1vaiigLhtb1FG0+1FFABtb1FG1vUUUUBcNreoo2t6iiigA2t7UbW9RRRQFw2t6ija3qKKKADa3qKNreooooANreoo2t6iiigLhtb1FG1vUUUUAG1vUUbW9RRRQFw2t6ija3qKKKADa3tRtb1FFFAXDa3tRtb2oooANre1G1vUUUUAG1vUUbW9RRRQFw2t6ija3qKKKAuG1vUUbW9qKKAuG1vUUbW9RRRQFw2N6ija3qKKKADa3qKNreooooANreoo2t6iiigA2t7UbW9RRRQAbW9RRtb2oooANreoo2t6iiigLhtb1FG1vUUUUBcNreoo2n2oooC4bW9qNreooooANreoo2t7UUUAG1vaja3qKKKADa3qKNreooooANreoo2t6iiigLhtb2o2t6iiigA2t7UbW9RRRQAbW9RRtb1FFFABtb1FG1vaiigLhtb1FG1vaiigA2t7UbW9RRRQAbW9RRtb2oooC4bW9RRtb1FFFABtb1FG1vUUUUAG1vUUbW9RRRQAbT7UbW9RRRQAbW9RRtb1FFFABtb2o2t6iiigA2t6ija3qKKKAuG1vaja3tRRQFw2t6ija3qKKKAuG1vaja3qKKKADa3qKo/2tZf8/A/74b/AAooqJtq1ho//9k="

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(29),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-464ddb09",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\vue\\egg\\egg-vue-blog\\app\\src\\components\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-464ddb09", Component.options)
  } else {
    hotAPI.reload("data-v-464ddb09", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("71914fb2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-464ddb09\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-464ddb09\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.login[data-v-464ddb09] {\n\theight: 350px;\n\tpadding: 15px;\n}\n.login header[data-v-464ddb09] {\n\theight: 60px;\n\tpadding: -15px;\n}\n.cen div[data-v-464ddb09] {\n\tmargin-top: 25px;\n\tpadding: -15px;\n}\n.foot[data-v-464ddb09] {\n\ttext-align: right;\n}\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//

	/* harmony default export */ __webpack_exports__["default"] = ({
		name: 'login',
		data() {
			return {
				lo: {
					du: '',
					ds: '',
					zu: '',
					zs: ''
				},
				show: {
					a1: 1,
					a2: 0,
					a3: 0,
					a4: 1
				}
			}
		},
		watch: {
			'$route': 'lofin'

		},
		computed: {
			name() {
				return this.$store.state.name
			}
		},
		beforeMount() {
			
			
		},
		 updated(){
            this.lofin()
        },
		methods: {
			lofin() {
					if (this.$store.state.name) {
						this.fun1(2)
						
					}
					
				},
				fun1(a) {
					if (a == 0) {
						this.show.a1 = true
						this.show.a2 = false
						this.show.a3 = false
						this.show.a4 = true

					} else if (a == 1) {
						this.show.a1 = false
						this.show.a2 = true
						this.show.a3 = false
						this.show.a4 = true

					} else {
						this.show.a1 = false
						this.show.a2 = false
						this.show.a3 = true
						this.show.a4 = false
					}
				},
				dl() {
					var data = {
						name: this.lo.du,
						pwd: this.lo.ds,
						_csrf: csrf.value
					}

					this.$http.post('/user', data).then(response => {
						if (response.body.status == 0) {
							alert('用户名或密码不正确')
						} else {
							this.fun1(2)
							this.$store.state.name = this.lo.du
							this.$store.state.id = response.body.message
						}

					}, response => {
						alert('服务器连接失败')
					});
				},
				zc() {
					var data = {
						name: this.lo.zu,
						pwd: this.lo.zs,
						_csrf: csrf.value
					}
					this.$http.post('/user/add', data).then(response => {
						if (response.body.status == 0) {
							alert('用户名或密码不正确')
						} else {
							this.fun1(2)
							this.$store.state.name = this.lo.du
							this.$store.state.id = response.body.message
						}

					}, response => {
						alert('服务器连接失败')
					});

				},
				post(data) {

				}
		}

	});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n\t这是login\n\t"), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show.a4),
      expression: "show.a4"
    }],
    staticClass: "login bg-warning"
  }, [_c('header', {
    staticClass: "row"
  }, [_c('h3', {
    staticClass: "col-xs-6",
    on: {
      "click": function($event) {
        _vm.fun1(0)
      }
    }
  }, [_vm._v("账户登录")]), _vm._v(" "), _c('h3', {
    staticClass: "col-xs-6",
    on: {
      "click": function($event) {
        _vm.fun1(1)
      }
    }
  }, [_vm._v("用户注册")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show.a1),
      expression: "show.a1"
    }],
    staticClass: "cen"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon glyphicon glyphicon-user",
    attrs: {
      "id": "basic-addon1"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lo.du),
      expression: "lo.du"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "用户名",
      "aria-describedby": "basic-addon1"
    },
    domProps: {
      "value": (_vm.lo.du)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.lo.du = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon glyphicon glyphicon-lock",
    attrs: {
      "id": "basic-addon2"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lo.ds),
      expression: "lo.ds"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "placeholder": "密码",
      "aria-describedby": "basic-addon2"
    },
    domProps: {
      "value": (_vm.lo.ds)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.lo.ds = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "btn btn-primary btn-lg btn-block",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.dl()
      }
    }
  }, [_vm._v("登录")])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show.a2),
      expression: "show.a2"
    }],
    staticClass: "cen"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon glyphicon glyphicon-user",
    attrs: {
      "id": "basic-addon1"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lo.zu),
      expression: "lo.zu"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "用户名",
      "aria-describedby": "basic-addon1 "
    },
    domProps: {
      "value": (_vm.lo.zu)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.lo.zu = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon glyphicon glyphicon-lock",
    attrs: {
      "id": "basic-addon2"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lo.zs),
      expression: "lo.zs"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "placeholder": "密码",
      "aria-describedby": "basic-addon2"
    },
    domProps: {
      "value": (_vm.lo.zs)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.lo.zs = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_vm._v("\n\t\t\t\t忘记密码\n\t\t\t")]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "btn btn-primary btn-lg btn-block",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.zc()
      }
    }
  }, [_vm._v("注册")])])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show.a3),
      expression: "show.a3"
    }],
    staticClass: "login bg-warning"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.name) + "\n\n\t")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "foot"
  }, [_c('span', [_vm._v("忘记密码")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-464ddb09", module.exports)
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(31)
}
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(34),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-17c7b01c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\vue\\egg\\egg-vue-blog\\app\\src\\components\\hello.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] hello.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17c7b01c", Component.options)
  } else {
    hotAPI.reload("data-v-17c7b01c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4c37ff86", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-17c7b01c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./hello.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-17c7b01c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./hello.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'hello',
    data() {
        return {
            article: ''
        }
    },
    beforeMount() {
        let id = this.$route.params.id

        this.$http.get('/article/' + id).then(response => {
            // get body data
            if (response.body.status == 1) {
                this.article = response.body.message;

            } else {
                alert('请求失败')
            }

        }, response => {
            // error callback
        });
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            let id = this.$route.params.id

            this.$http.get('/article/' + id).then(response => {
                // get body data
                if (response.body.status == 1) {
                    this.article = response.body.message;

                } else {
                    alert('请求失败')
                }
            }, response => {
                // error callback
            });
        }
    }
});



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, _vm._l((_vm.article), function(v, i) {
    return _c('tr', [_c('td', {
      attrs: {
        "width": "10%"
      }
    }, [_c('strong', {
      domProps: {
        "textContent": _vm._s(v.user_id)
      }
    })]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "75%"
      }
    }, [_c('span', [_c('router-link', {
      attrs: {
        "to": {
          name: 'article',
          params: {
            id: v.id
          }
        }
      },
      domProps: {
        "textContent": _vm._s(v.biaoti)
      }
    })], 1)]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "15%"
      }
    }, [_c('span', {
      staticClass: "badge",
      domProps: {
        "textContent": _vm._s(v.intime)
      }
    })])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17c7b01c", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_js_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_js_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_js_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_js_vuex__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_js_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__public_js_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__(37);



__WEBPACK_IMPORTED_MODULE_0__public_js_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0__public_js_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1__public_js_vuex___default.a)
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1__public_js_vuex___default.a.Store({
    state: {
        id: 0,
		name:'',
        lanmu: '',
		//csrf:'{{ctx.crsf}}'
    },
    mutations: {
        //用户进入要获取的数据
        str(state) {
            __WEBPACK_IMPORTED_MODULE_0__public_js_vue___default.a.http.get('/news').then(response => {
                // get body data
                state.lanmu = response.body.lanmu;
				state.name = response.body.user
				state.id = response.body.id
            }, response => {
                // error callback
            });
        }

    },
    actions:{
        getalist(context,a,b,c){
            console.log(context)
            console.log(a)
            console.log(b)
            console.log(c)
        }
    }
}));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * vuex v2.0.0
 * (c) 2016 Evan You
 * @license MIT
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vuex = factory());
}(this, (function () { 'use strict';

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook

  devtoolHook.emit('vuex:init', store)

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState)
  })

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state)
  })
}

function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0])

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit })
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit
      _init.call(this, options)
    }
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options
    // store injection
    if (options.store) {
      this.$store = options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
  }
}

function mapState (states) {
  var res = {}
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      return typeof val === 'function'
        ? val.call(this, this.$store.state, this.$store.getters)
        : this.$store.state[val]
    }
  })
  return res
}

function mapMutations (mutations) {
  var res = {}
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return this.$store.commit.apply(this.$store, [val].concat(args))
    }
  })
  return res
}

function mapGetters (getters) {
  var res = {}
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedGetter () {
      if (!(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val))
      }
      return this.$store.getters[val]
    }
  })
  return res
}

function mapActions (actions) {
  var res = {}
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return this.$store.dispatch.apply(this.$store, [val].concat(args))
    }
  })
  return res
}

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Vue // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.")
  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.")

  var state = options.state; if ( state === void 0 ) state = {};
  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._options = options
  this._committing = false
  this._actions = Object.create(null)
  this._mutations = Object.create(null)
  this._wrappedGetters = Object.create(null)
  this._runtimeModules = Object.create(null)
  this._subscribers = []
  this._watcherVM = new Vue()

    // bind commit and dispatch to self
  var store = this
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
    }
    this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  }

  // strict mode
  this.strict = strict

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], options)

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state)

  // apply plugins
  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); })
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm.state
};

prototypeAccessors.state.set = function (v) {
  assert(false, "Use store.replaceState() to explicit replace store state.")
};

Store.prototype.commit = function commit (type, payload, options) {
    var this$1 = this;

  // check object-style commit
  if (isObject(type) && type.type) {
    options = payload
    payload = type
    type = type.type
  }
  var mutation = { type: type, payload: payload }
  var entry = this._mutations[type]
  if (!entry) {
    console.error(("[vuex] unknown mutation type: " + type))
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload)
    })
  })
  if (!options || !options.silent) {
    this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); })
  }
};

Store.prototype.dispatch = function dispatch (type, payload) {
  // check object-style dispatch
  if (isObject(type) && type.type) {
    payload = type
    type = type.type
  }
  var entry = this._actions[type]
  if (!entry) {
    console.error(("[vuex] unknown action type: " + type))
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers
  if (subs.indexOf(fn) < 0) {
    subs.push(fn)
  }
  return function () {
    var i = subs.indexOf(fn)
    if (i > -1) {
      subs.splice(i, 1)
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  assert(typeof getter === 'function', "store.watch only accepts a function.")
  return this._watcherVM.$watch(function () { return getter(this$1.state); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm.state = state
  })
};

Store.prototype.registerModule = function registerModule (path, module) {
  if (typeof path === 'string') { path = [path] }
  assert(Array.isArray(path), "module path must be a string or an Array.")
  this._runtimeModules[path.join('.')] = module
  installModule(this, this.state, path, module)
  // reset store to update getters...
  resetStoreVM(this, this.state)
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path] }
  assert(Array.isArray(path), "module path must be a string or an Array.")
    delete this._runtimeModules[path.join('.')]
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1))
    Vue.delete(parentState, path[path.length - 1])
  })
  resetStore(this)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  updateModule(this._options, newOptions)
  resetStore(this)
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing
  this._committing = true
  fn()
  this._committing = committing
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function updateModule (targetModule, newModule) {
  if (newModule.actions) {
    targetModule.actions = newModule.actions
  }
  if (newModule.mutations) {
    targetModule.mutations = newModule.mutations
  }
  if (newModule.getters) {
    targetModule.getters = newModule.getters
  }
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!(targetModule.modules && targetModule.modules[key])) {
        console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed'
        )
        return
      }
      updateModule(targetModule.modules[key], newModule.modules[key])
    }
  }
}

function resetStore (store) {
  store._actions = Object.create(null)
  store._mutations = Object.create(null)
  store._wrappedGetters = Object.create(null)
  var state = store.state
  // init root module
  installModule(store, state, [], store._options, true)
  // init all runtime modules
  Object.keys(store._runtimeModules).forEach(function (key) {
    installModule(store, state, key.split('.'), store._runtimeModules[key], true)
  })
  // reset vm
  resetStoreVM(store, state)
}

function resetStoreVM (store, state) {
  var oldVm = store._vm

  // bind store public getters
  store.getters = {}
  var wrappedGetters = store._wrappedGetters
  var computed = {}
  Object.keys(wrappedGetters).forEach(function (key) {
    var fn = wrappedGetters[key]
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); }
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; }
    })
  })

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent
  Vue.config.silent = true
  store._vm = new Vue({
    data: { state: state },
    computed: computed
  })
  Vue.config.silent = silent

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store)
  }

  if (oldVm) {
    // dispatch changes in all subscribed watchers
    // to force getter re-evaluation.
    store._withCommit(function () {
      oldVm.state = null
    })
    Vue.nextTick(function () { return oldVm.$destroy(); })
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length
  var state = module.state;
  var actions = module.actions;
  var mutations = module.mutations;
  var getters = module.getters;
  var modules = module.modules;

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1))
    var moduleName = path[path.length - 1]
    store._withCommit(function () {
      Vue.set(parentState, moduleName, state || {})
    })
  }

  if (mutations) {
    Object.keys(mutations).forEach(function (key) {
      registerMutation(store, key, mutations[key], path)
    })
  }

  if (actions) {
    Object.keys(actions).forEach(function (key) {
      registerAction(store, key, actions[key], path)
    })
  }

  if (getters) {
    wrapGetters(store, getters, path)
  }

  if (modules) {
    Object.keys(modules).forEach(function (key) {
      installModule(store, rootState, path.concat(key), modules[key], hot)
    })
  }
}

function registerMutation (store, type, handler, path) {
  if ( path === void 0 ) path = [];

  var entry = store._mutations[type] || (store._mutations[type] = [])
  entry.push(function wrappedMutationHandler (payload) {
    handler(getNestedState(store.state, path), payload)
  })
}

function registerAction (store, type, handler, path) {
  if ( path === void 0 ) path = [];

  var entry = store._actions[type] || (store._actions[type] = [])
  var dispatch = store.dispatch;
  var commit = store.commit;
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler({
      dispatch: dispatch,
      commit: commit,
      getters: store.getters,
      state: getNestedState(store.state, path),
      rootState: store.state
    }, payload, cb)
    if (!isPromise(res)) {
      res = Promise.resolve(res)
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err)
        throw err
      })
    } else {
      return res
    }
  })
}

function wrapGetters (store, moduleGetters, modulePath) {
  Object.keys(moduleGetters).forEach(function (getterKey) {
    var rawGetter = moduleGetters[getterKey]
    if (store._wrappedGetters[getterKey]) {
      console.error(("[vuex] duplicate getter key: " + getterKey))
      return
    }
    store._wrappedGetters[getterKey] = function wrappedGetter (store) {
      return rawGetter(
        getNestedState(store.state, modulePath), // local state
        store.getters, // getters
        store.state // root state
      )
    }
  })
}

function enableStrictMode (store) {
  store._vm.$watch('state', function () {
    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.")
  }, { deep: true, sync: true })
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function install (_Vue) {
  if (Vue) {
    console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
    )
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

var index = {
  Store: Store,
  install: install,
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions
}

return index;

})));

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Url */
/* unused harmony export Http */
/* unused harmony export Resource */
/*!
 * vue-resource v1.3.4
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING  = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p$1 = Promise$1.prototype;

p$1.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p$1.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p$1.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p$1.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p$1.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p = PromiseObj.prototype;

p.bind = function (context) {
    this.context = context;
    return this;
};

p.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p.finally = function (callback) {

    return this.then(function (value) {
            callback.call(this);
            return value;
        }, function (reason) {
            callback.call(this);
            return Promise.reject(reason);
        }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;

var ref$1 = [];
var slice = ref$1.slice;
var debug = false;
var ntick;

var inBrowser = typeof window !== 'undefined';

var Util = function (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
};

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function trimEnd(str, chars) {

    if (str && chars === undefined) {
        return str.replace(/\s+$/, '');
    }

    if (!str || !chars) {
        return str;
    }

    return str.replace(new RegExp(("[" + chars + "]+$")), '');
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}



function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

var root = function (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
        url = trimEnd(options$$1.root, '/') + '/' + url;
    }

    return url;
};

/**
 * Query Parameter Transform.
 */

var query = function (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
};

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

var template = function (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
};

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

var xdrClient = function (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load') {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            resolve(request.respondWith(xdr.responseText, {status: status}));
        };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
};

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

var cors = function (request, next) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

    next();
};

/**
 * Form data Interceptor.
 */

var form = function (request, next) {

    if (isFormData(request.body)) {

        request.headers.delete('Content-Type');

    } else if (isObject(request.body) && request.emulateJSON) {

        request.body = Url.params(request.body);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

    next();
};

/**
 * JSON Interceptor.
 */

var json = function (request, next) {

    var type = request.headers.get('Content-Type') || '';

    if (isObject(request.body) && type.indexOf('application/json') === 0) {
        request.body = JSON.stringify(request.body);
    }

    next(function (response) {

        return response.bodyText ? when(response.text(), function (text) {

            type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    });
};

function isJson(str) {

    var start = str.match(/^\[|^\{(?!\{)/), end = {'[': /]$/, '{': /}$/};

    return start && end[start[0]].test(str);
}

/**
 * JSONP client (Browser).
 */

var jsonpClient = function (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
};

/**
 * JSONP Interceptor.
 */

var jsonp = function (request, next) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

    next();
};

/**
 * Before Interceptor.
 */

var before = function (request, next) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

    next();
};

/**
 * HTTP method override Interceptor.
 */

var method = function (request, next) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

    next();
};

/**
 * Header Interceptor.
 */

var header = function (request, next) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

    next();
};

/**
 * XMLHttp client (Browser).
 */

var xhrClient = function (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

            var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                }
            );

            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
            });

            resolve(response);
        };

        request.abort = function () { return xhr.abort(); };

        if (request.progress) {
            if (request.method === 'GET') {
                xhr.addEventListener('progress', request.progress);
            } else if (/^(POST|PUT)$/i.test(request.method)) {
                xhr.upload.addEventListener('progress', request.progress);
            }
        }

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
};

/**
 * Http client (Node).
 */

var nodeClient = function (request) {

    var client = __webpack_require__(38);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                    status: resp.statusCode,
                    statusText: trim(resp.statusMessage)
                }
            );

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
};

/**
 * Base client.
 */

var Client = function (context) {

    var reqHandlers = [sendRequest], resHandlers = [], handler;

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        return new PromiseObj(function (resolve, reject) {

            function exec() {

                handler = reqHandlers.pop();

                if (isFunction(handler)) {
                    handler.call(context, request, next);
                } else {
                    warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
                    next();
                }
            }

            function next(response) {

                if (isFunction(response)) {

                    resHandlers.unshift(response);

                } else if (isObject(response)) {

                    resHandlers.forEach(function (handler) {
                        response = when(response, function (response) {
                            return handler.call(context, response) || response;
                        }, reject);
                    });

                    when(response, resolve, reject);

                    return;
                }

                exec();
            }

            exec();

        }, context);
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
};

function sendRequest(request, resolve) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    resolve(client(request));
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value){

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name){
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll (){
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

Object.defineProperty(Response.prototype, 'data', {

    get: function get() {
        return this.body;
    },

    set: function set(body) {
        this.body = body;
    }

});

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl (){
    return Url(this);
};

Request.prototype.getBody = function getBody (){
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);



/***/ }),
/* 38 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);