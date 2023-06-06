(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["Zui"] = factory(require("vue"));
	else
		root["Zui"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/vue-router/dist/vue-router.esm.js":
/*!***********************************************************************************************!*\
  !*** /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/vue-router/dist/vue-router.esm.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
  * vue-router v3.5.1
  * (c) 2021 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
    .replace(encodeReserveRE, encodeReserveReplacer)
    .replace(commaRE, ','); };

function decode (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    if (true) {
      warn(false, ("Error decoding \"" + str + "\". Leaving it intact."));
    }
  }
  return str
}

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var value = extraQuery[key];
    parsedQuery[key] = Array.isArray(value)
      ? value.map(castQueryParamValue)
      : castQueryParamValue(value);
  }
  return parsedQuery
}

var castQueryParamValue = function (value) { return (value == null || typeof value === 'object' ? value : String(value)); };

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj
    ? Object.keys(obj)
      .map(function (key) {
        var val = obj[key];

        if (val === undefined) {
          return ''
        }

        if (val === null) {
          return encode(key)
        }

        if (Array.isArray(val)) {
          var result = [];
          val.forEach(function (val2) {
            if (val2 === undefined) {
              return
            }
            if (val2 === null) {
              result.push(encode(key));
            } else {
              result.push(encode(key) + '=' + encode(val2));
            }
          });
          return result.join('&')
        }

        return encode(key) + '=' + encode(val)
      })
      .filter(function (x) { return x.length > 0; })
      .join('&')
    : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b, onlyPath) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && (onlyPath ||
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query))
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      (onlyPath || (
        a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params))
      )
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key, i) {
    var aVal = a[key];
    var bKey = bKeys[i];
    if (bKey !== key) { return false }
    var bVal = b[key];
    // query values can be null and undefined
    if (aVal == null || bVal == null) { return aVal === bVal }
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

function handleRouteEntered (route) {
  for (var i = 0; i < route.matched.length; i++) {
    var record = route.matched[i];
    for (var name in record.instances) {
      var instance = record.instances[name];
      var cbs = record.enteredCbs[name];
      if (!instance || !cbs) { continue }
      delete record.enteredCbs[name];
      for (var i$1 = 0; i$1 < cbs.length; i$1++) {
        if (!instance._isBeingDestroyed) { cbs[i$1](instance); }
      }
    }
  }
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }

      // if the route transition has already been confirmed then we weren't
      // able to call the cbs during confirmation as the component was not
      // registered yet, so we call it here.
      handleRouteEntered(route);
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cache
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
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

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
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

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

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

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

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

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
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
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (true) {
      // Fix #3072 no warn if `pathMatch` is string
      warn(typeof params.pathMatch === 'string', ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var warnedCustomSlot;
var warnedTagProp;
var warnedEventProp;

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    custom: Boolean,
    exact: Boolean,
    exactPath: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
    classes[activeClass] = this.exact || this.exactPath
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if ( true && !this.custom) {
        !warnedCustomSlot && warn(false, 'In Vue Router 4, the v-slot API will by default wrap its content with an <a> element. Use the custom prop to remove this warning:\n<router-link v-slot="{ navigate, href }" custom></router-link>\n');
        warnedCustomSlot = true;
      }
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (true) {
          warn(
            false,
            ("<router-link> with to=\"" + (this.to) + "\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element.")
          );
        }
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (true) {
      if ('tag' in this.$options.propsData && !warnedTagProp) {
        warn(
          false,
          "<router-link>'s tag prop is deprecated and has been removed in Vue Router 4. Use the v-slot API to remove this warning: https://next.router.vuejs.org/guide/migration/#removal-of-event-and-tag-props-in-router-link."
        );
        warnedTagProp = true;
      }
      if ('event' in this.$options.propsData && !warnedEventProp) {
        warn(
          false,
          "<router-link>'s event prop is deprecated and has been removed in Vue Router 4. Use the v-slot API to remove this warning: https://next.router.vuejs.org/guide/migration/#removal-of-event-and-tag-props-in-router-link."
        );
        warnedEventProp = true;
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href, 'aria-current': ariaCurrentValue };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
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
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap,
  parentRoute
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (true) {
    // warn if routes do not include leading slashes
    var found = pathList
    // check for missing leading slash
      .filter(function (path) { return path && path.charAt(0) !== '*' && path.charAt(0) !== '/'; });

    if (found.length > 0) {
      var pathNames = found.map(function (path) { return ("- " + path); }).join('\n');
      warn(false, ("Non-nested routes must include a leading slash character. Fix the following routes: \n" + pathNames));
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(
        path || name
      )) + " cannot be a " + "string id. Use an actual component instead."
    );

    warn(
      // eslint-disable-next-line no-control-regex
      !/[^\u0000-\u007F]+/.test(path),
      "Route with path \"" + path + "\" contains unencoded characters, make sure " +
        "your path is correctly encoded before passing it to the router. Use " +
        "encodeURI to encode static segments of your path."
    );
  }

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    alias: route.alias
      ? typeof route.alias === 'string'
        ? [route.alias]
        : route.alias
      : [],
    instances: {},
    enteredCbs: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (
        route.name &&
        !route.redirect &&
        route.children.some(function (child) { return /^\/?$/.test(child.path); })
      ) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
            "the default child route will not be rendered. Remove the name from " +
            "this route and use the name of the default child route for named " +
            "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if ( true && alias === path) {
        warn(
          false,
          ("Found an alias with the same value as the path: \"" + path + "\". You have to remove that alias. It will be ignored in development.")
        );
        // skip in dev to make it work
        continue
      }

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
          "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(
        !keys[key.name],
        ("Duplicate param keys in route with path: \"" + path + "\"")
      );
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function addRoute (parentOrRoute, route) {
    var parent = (typeof parentOrRoute !== 'object') ? nameMap[parentOrRoute] : undefined;
    // $flow-disable-line
    createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent);

    // add aliases of parent
    if (parent) {
      createRouteMap(
        // $flow-disable-line route is defined if parent is
        parent.alias.map(function (alias) { return ({ path: alias, children: [route] }); }),
        pathList,
        pathMap,
        nameMap,
        parent
      );
    }
  }

  function getRoutes () {
    return pathList.map(function (path) { return pathMap[path]; })
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoute: addRoute,
    getRoutes: getRoutes,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = typeof m[i] === 'string' ? decode(m[i]) : m[i];
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Prevent browser scroll behavior on History popstate
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', handlePopState);
  return function () {
    window.removeEventListener('popstate', handlePopState);
  }
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (true) {
            assert(false, err.toString());
          }
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function handlePopState (e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    // $flow-disable-line
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        left: position.x,
        top: position.y,
        // $flow-disable-line
        behavior: shouldScroll.behavior
      });
    } else {
      window.scrollTo(position.x, position.y);
    }
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && typeof window.history.pushState === 'function'
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

// When changing thing, also edit router.d.ts
var NavigationFailureType = {
  redirected: 2,
  aborted: 4,
  cancelled: 8,
  duplicated: 16
};

function createNavigationRedirectedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.redirected,
    ("Redirected when going from \"" + (from.fullPath) + "\" to \"" + (stringifyRoute(
      to
    )) + "\" via a navigation guard.")
  )
}

function createNavigationDuplicatedError (from, to) {
  var error = createRouterError(
    from,
    to,
    NavigationFailureType.duplicated,
    ("Avoided redundant navigation to current location: \"" + (from.fullPath) + "\".")
  );
  // backwards compatible with the first introduction of Errors
  error.name = 'NavigationDuplicated';
  return error
}

function createNavigationCancelledError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.cancelled,
    ("Navigation cancelled from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" with a new navigation.")
  )
}

function createNavigationAbortedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.aborted,
    ("Navigation aborted from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" via a navigation guard.")
  )
}

function createRouterError (from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;

  return error
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute (to) {
  if (typeof to === 'string') { return to }
  if ('path' in to) { return to.path }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) { location[key] = to[key]; }
  });
  return JSON.stringify(location, null, 2)
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isNavigationFailure (err, errorType) {
  return (
    isError(err) &&
    err._isRouter &&
    (errorType == null || err.type === errorType)
  )
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
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
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route;
  // catch redirect option https://github.com/vuejs/vue-router/issues/3201
  try {
    route = this.router.match(location, this.current);
  } catch (e) {
    this.errorCbs.forEach(function (cb) {
      cb(e);
    });
    // Exception should still be thrown
    throw e
  }
  var prev = this.current;
  this.confirmTransition(
    route,
    function () {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();
      this$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        // Initial redirection should not mark the history as ready yet
        // because it's triggered by the redirection instead
        // https://github.com/vuejs/vue-router/issues/3225
        // https://github.com/vuejs/vue-router/issues/3331
        if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
          this$1.ready = true;
          this$1.readyErrorCbs.forEach(function (cb) {
            cb(err);
          });
        }
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  this.pending = route;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isNavigationFailure(err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    lastRouteIndex === lastCurrentIndex &&
    route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]
  ) {
    this.ensureURL();
    return abort(createNavigationDuplicatedError(current, route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
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

  runQueue(queue, iterator, function () {
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route))
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          handleRouteEntered(route);
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  this.current = route;
  this.cb && this.cb(route);
};

History.prototype.setupListeners = function setupListeners () {
  // Default implementation is empty
};

History.prototype.teardown = function teardown () {
  // clean up event listeners
  // https://github.com/vuejs/vue-router/issues/2341
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];

  // reset current history route
  // https://github.com/vuejs/vue-router/issues/3294
  this.current = START;
  this.pending = null;
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
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
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        if (!match.enteredCbs[key]) {
          match.enteredCbs[key] = [];
        }
        match.enteredCbs[key].push(cb);
      }
      next(cb);
    })
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    History.call(this, router, base);

    this._startLocation = getLocation(this.base);
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === this$1._startLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(
      eventType,
      handleRoutingEvent
    );
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        var prev = this$1.current;
        this$1.index = targetIndex;
        this$1.updateRoute(route);
        this$1.router.afterHooks.forEach(function (hook) {
          hook && hook(route, prev);
        });
      },
      function (err) {
        if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback =
    mode === 'history' && !supportsPushState && options.fallback !== false;
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
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   true &&
    assert(
      install.installed,
      "not installed. Make sure to call `Vue.use(VueRouter)` " +
        "before creating root instance."
    );

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }

    if (!this$1.app) { this$1.history.teardown(); }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History || history instanceof HashHistory) {
    var handleInitialScroll = function (routeOrError) {
      var from = history.current;
      var expectScroll = this$1.options.scrollBehavior;
      var supportsScroll = supportsPushState && expectScroll;

      if (supportsScroll && 'fullPath' in routeOrError) {
        handleScroll(this$1, routeOrError, from, false);
      }
    };
    var setupListeners = function (routeOrError) {
      history.setupListeners();
      handleInitialScroll(routeOrError);
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupListeners,
      setupListeners
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply(
    [],
    route.matched.map(function (m) {
      return Object.keys(m.components).map(function (key) {
        return m.components[key]
      })
    })
  )
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(to, current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.getRoutes = function getRoutes () {
  return this.matcher.getRoutes()
};

VueRouter.prototype.addRoute = function addRoute (parentOrRoute, route) {
  this.matcher.addRoute(parentOrRoute, route);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  if (true) {
    warn(false, 'router.addRoutes() is deprecated and has been removed in Vue Router 4. Use router.addRoute() instead.');
  }
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.5.1';
VueRouter.isNavigationFailure = isNavigationFailure;
VueRouter.NavigationFailureType = NavigationFailureType;
VueRouter.START_LOCATION = START;

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),

/***/ "./src/components/VApp/VApp.ts":
/*!*************************************!*\
  !*** ./src/components/VApp/VApp.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/components/VApp/ZApp.ts":
/*!*************************************!*\
  !*** ./src/components/VApp/ZApp.ts ***!
  \*************************************/
/*! exports provided: ZApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZApp", function() { return ZApp; });
/* harmony import */ var _VApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VApp */ "./src/components/VApp/VApp.ts");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./src/util/mixins.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};



var ZApp = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_VApp__WEBPACK_IMPORTED_MODULE_0__["default"]).extend({
  name: 'z-app',
  props: {
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.$ui.emit('ready');
  },
  render: function render(h) {
    var wrapper = [];

    if (this.noWrap) {
      wrapper = this.$slots.default || [];
    } else {
      wrapper = [h('div', {
        staticClass: 'v-application--wrap'
      }, this.$slots.default)];
    }

    return h('div', {
      staticClass: 'v-application',
      class: __assign({
        'v-application--is-rtl': this.$vuetify.rtl,
        'v-application--is-ltr': !this.$vuetify.rtl
      }, this.themeClasses),
      attrs: {
        'data-app': true
      },
      domProps: {
        id: this.id
      }
    }, __spread(wrapper));
  }
});

/* harmony default export */ __webpack_exports__["default"] = (ZApp);

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: ZWindow, ZWindowItem, VCarouselTransition, VCarouselReverseTransition, VTabTransition, VTabReverseTransition, VMenuTransition, VFabTransition, VDialogTransition, VDialogBottomTransition, VDialogTopTransition, VFadeTransition, VScaleTransition, VScrollXTransition, VScrollXReverseTransition, VScrollYTransition, VScrollYReverseTransition, VSlideXTransition, VSlideXReverseTransition, VSlideYTransition, VSlideYReverseTransition, VExpandTransition, VExpandXTransition, ZApp, ZAppBar, ZAppBarNavIcon, ZAppBarTitle, ZAlert, ZAutocomplete, ZAvatar, ZBadge, ZBanner, ZBottomNavigation, ZBottomSheet, ZBreadcrumbs, ZBreadcrumbsItem, ZBreadcrumbsDivider, ZBtn, ZBtnToggle, ZCalendar, ZCalendarCategory, ZCalendarDaily, ZCalendarWeekly, ZCalendarMonthly, ZCard, ZCardActions, ZCardSubtitle, ZCardText, ZCardTitle, ZCarousel, ZCarouselItem, ZCheckbox, ZSimpleCheckbox, ZChip, ZChipGroup, ZColorPicker, ZContent, ZCombobox, ZCounter, ZData, ZDataIterator, ZDataFooter, ZDataTable, ZDataTableHeader, ZEditDialog, ZTableOverflow, ZSimpleTable, ZVirtualTable, ZDatePicker, ZDatePickerTitle, ZDatePickerHeader, ZDatePickerDateTable, ZDatePickerMonthTable, ZDatePickerYears, ZDialog, ZDivider, ZExpansionPanels, ZExpansionPanel, ZExpansionPanelHeader, ZExpansionPanelContent, ZFileInput, ZFooter, ZForm, ZContainer, ZCol, ZRow, ZSpacer, ZLayout, ZFlex, ZHover, ZIcon, ZImg, ZInput, ZItem, ZItemGroup, ZLabel, ZLazy, ZList, ZListGroup, ZListItem, ZListItemAction, ZListItemAvatar, ZListItemGroup, ZListItemIcon, ZListItemActionText, ZListItemContent, ZListItemSubtitle, ZListItemTitle, ZMain, ZMenu, ZMessages, ZNavigationDrawer, ZOverflowBtn, ZOverlay, ZPagination, ZSheet, ZParallax, ZPicker, ZProgressCircular, ZProgressLinear, ZRadioGroup, ZRadio, ZRangeSlider, ZRating, ZResponsive, ZSelect, ZSkeletonLoader, ZSlider, ZSlideGroup, ZSlideItem, ZSnackbar, ZSparkline, ZSpeedDial, ZStepper, ZStepperContent, ZStepperStep, ZStepperHeader, ZStepperItems, ZSubheader, ZSwitch, ZSystemBar, ZTabs, ZTab, ZTabsItems, ZTabItem, ZTabsSlider, ZTextarea, ZTextField, ZThemeProvider, ZTimeline, ZTimelineItem, ZTimePicker, ZTimePickerClock, ZTimePickerTitle, ZToolbar, ZToolbarItems, ZToolbarTitle, ZTooltip, ZTreeview, ZTreeviewNode, ZVirtualScroll, ZColorSelector, ZColorSelectorRect, ZColorSelectorTextField, ZDateTimePicker, ZAdmin, ZAdminApp, ZView403, ZView404, ZView500, ZDefaultLogin */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/directives/click-outside/index.ts":
/*!***********************************************!*\
  !*** ./src/directives/click-outside/index.ts ***!
  \***********************************************/
/*! exports provided: ClickOutside, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/directives/index.ts":
/*!*********************************!*\
  !*** ./src/directives/index.ts ***!
  \*********************************/
/*! exports provided: ClickOutside, Intersect, Mutate, Resize, Ripple, Scroll, Touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-outside */ "./src/directives/click-outside/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClickOutside", function() { return _click_outside__WEBPACK_IMPORTED_MODULE_0__["ClickOutside"]; });

/* harmony import */ var _intersect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intersect */ "./src/directives/intersect/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Intersect", function() { return _intersect__WEBPACK_IMPORTED_MODULE_1__["Intersect"]; });

/* harmony import */ var _mutate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutate */ "./src/directives/mutate/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mutate", function() { return _mutate__WEBPACK_IMPORTED_MODULE_2__["Mutate"]; });

/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resize */ "./src/directives/resize/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resize", function() { return _resize__WEBPACK_IMPORTED_MODULE_3__["Resize"]; });

/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ripple */ "./src/directives/ripple/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return _ripple__WEBPACK_IMPORTED_MODULE_4__["Ripple"]; });

/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll */ "./src/directives/scroll/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_5__["Scroll"]; });

/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./touch */ "./src/directives/touch/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return _touch__WEBPACK_IMPORTED_MODULE_6__["Touch"]; });









/***/ }),

/***/ "./src/directives/intersect/index.ts":
/*!*******************************************!*\
  !*** ./src/directives/intersect/index.ts ***!
  \*******************************************/
/*! exports provided: Intersect, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/directives/mutate/index.ts":
/*!****************************************!*\
  !*** ./src/directives/mutate/index.ts ***!
  \****************************************/
/*! exports provided: Mutate, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/directives/resize/index.ts":
/*!****************************************!*\
  !*** ./src/directives/resize/index.ts ***!
  \****************************************/
/*! exports provided: Resize, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/directives/ripple/index.ts":
/*!****************************************!*\
  !*** ./src/directives/ripple/index.ts ***!
  \****************************************/
/*! exports provided: Ripple, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/directives/scroll/index.ts":
/*!****************************************!*\
  !*** ./src/directives/scroll/index.ts ***!
  \****************************************/
/*! exports provided: Scroll, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/directives/touch/index.ts":
/*!***************************************!*\
  !*** ./src/directives/touch/index.ts ***!
  \***************************************/
/*! exports provided: Touch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/helpers */ "./src/util/helpers.ts");


var handleGesture = function handleGesture(wrapper) {
  var touchstartX = wrapper.touchstartX,
      touchendX = wrapper.touchendX,
      touchstartY = wrapper.touchstartY,
      touchendY = wrapper.touchendY;
  var dirRatio = 0.5;
  var minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;

  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }

  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};

function _touchstart(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  wrapper.start && wrapper.start(Object.assign(event, wrapper));
}

function _touchend(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  wrapper.end && wrapper.end(Object.assign(event, wrapper));
  handleGesture(wrapper);
}

function _touchmove(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  wrapper.move && wrapper.move(Object.assign(event, wrapper));
}

function createHandlers(value) {
  var wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: function touchstart(e) {
      return _touchstart(e, wrapper);
    },
    touchend: function touchend(e) {
      return _touchend(e, wrapper);
    },
    touchmove: function touchmove(e) {
      return _touchmove(e, wrapper);
    }
  };
}

function inserted(el, binding, vnode) {
  var value = binding.value;
  var target = value.parent ? el.parentElement : el;
  var options = value.options || {
    passive: true
  }; // Needed to pass unit tests

  if (!target) return;
  var handlers = createHandlers(binding.value);
  target._touchHandlers = Object(target._touchHandlers);
  target._touchHandlers[vnode.context._uid] = handlers;
  Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["keys"])(handlers).forEach(function (eventName) {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}

function unbind(el, binding, vnode) {
  var target = binding.value.parent ? el.parentElement : el;
  if (!target || !target._touchHandlers) return;
  var handlers = target._touchHandlers[vnode.context._uid];
  Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["keys"])(handlers).forEach(function (eventName) {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[vnode.context._uid];
}

var Touch = {
  inserted: inserted,
  unbind: unbind
};
/* harmony default export */ __webpack_exports__["default"] = (Touch);

/***/ }),

/***/ "./src/framework.ts":
/*!**************************!*\
  !*** ./src/framework.ts ***!
  \**************************/
/*! exports provided: Zui, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zui", function() { return Zui; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ "./src/directives/index.ts");
/* harmony import */ var _install__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./install */ "./src/install.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/services/index.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};



 // Services



var Zui =
/** @class */
function () {
  function Zui(userPreset) {
    if (userPreset === void 0) {
      userPreset = {};
    }

    this.framework = {
      isHydrating: false
    };
    this.installed = [];
    this.preset = {};
    this.userPreset = {};
    this.userPreset = userPreset;
    this.use(_services__WEBPACK_IMPORTED_MODULE_3__["Presets"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_3__["Application"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_3__["Goto"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_3__["Icons"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_3__["Lang"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_3__["Theme"]);
  } // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available


  Zui.prototype.init = function (root, ssrContext) {
    var _this = this;

    this.installed.forEach(function (property) {
      var service = _this.framework[property];
      service.framework = _this.framework;
      service.init(root, ssrContext);
    }); // rtl is not installed and
    // will never be called by
    // the init process

    this.framework.rtl = Boolean(this.preset.rtl);
  }; // Instantiate a VuetifyService


  Zui.prototype.use = function (Service) {
    var property = Service.property;
    if (this.installed.includes(property)) return; // TODO maybe a specific type for arg 2?

    this.framework[property] = new Service(this.preset, this);
    this.installed.push(property);
  };

  Zui.installed = false;
  Zui.version = "2.5.824-beta.10";
  Zui.config = {
    silent: false
  };
  return Zui;
}();



Zui.install = function (IVue, options) {
  _install__WEBPACK_IMPORTED_MODULE_2__["install"].call(Zui, IVue, __assign({
    components: _components__WEBPACK_IMPORTED_MODULE_0__,
    directives: _directives__WEBPACK_IMPORTED_MODULE_1__
  }, options));
};

/* harmony default export */ __webpack_exports__["default"] = (Zui);

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework */ "./src/framework.ts");
/* harmony import */ var _zui_createApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zui/createApp */ "./src/zui/createApp.ts");
/* harmony import */ var _zui_createAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zui/createAdmin */ "./src/zui/createAdmin.ts");
/* harmony import */ var _zui_createMenus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zui/createMenus */ "./src/zui/createMenus.ts");
/* harmony import */ var _zui_createRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zui/createRouter */ "./src/zui/createRouter.ts");
/* harmony import */ var _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zui/ZuiCore */ "./src/zui/ZuiCore.ts");
/* harmony import */ var _zui_ZIconLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zui/ZIconLoader */ "./src/zui/ZIconLoader.ts");








if (typeof window !== 'undefined') {
  window.Vue && window.Vue.use(_framework__WEBPACK_IMPORTED_MODULE_0__["Zui"]);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  Zui: _framework__WEBPACK_IMPORTED_MODULE_0__["Zui"],
  createApp: _zui_createApp__WEBPACK_IMPORTED_MODULE_1__["createApp"],
  createAdmin: _zui_createAdmin__WEBPACK_IMPORTED_MODULE_2__["createAdmin"],
  createMenus: _zui_createMenus__WEBPACK_IMPORTED_MODULE_3__["createMenus"],
  createRouter: _zui_createRouter__WEBPACK_IMPORTED_MODULE_4__["createRouter"],
  createAdminRouter: _zui_createRouter__WEBPACK_IMPORTED_MODULE_4__["createAdminRouter"],
  ZIconLoader: _zui_ZIconLoader__WEBPACK_IMPORTED_MODULE_6__["ZIconLoader"],

  get $zui() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance();
  },

  get ZuiCore() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance();
  },

  get $message() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance().$message;
  },

  get ZMessage() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance().$message;
  },

  get $modal() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance().$modal;
  },

  get ZModal() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance().$modal;
  },

  get $menu() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance().$menu;
  },

  get ZMenu() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance().$menu;
  },

  get $theme() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance().$theme;
  },

  get ZTheme() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance().$theme;
  },

  get $router() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance().$router;
  },

  get ZRouter() {
    return _zui_ZuiCore__WEBPACK_IMPORTED_MODULE_5__["ZuiCoreClass"].genInstance().$router;
  }

});

/***/ }),

/***/ "./src/install.ts":
/*!************************!*\
  !*** ./src/install.ts ***!
  \************************/
/*! exports provided: install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/console */ "./src/util/console.ts");


var cache = {
  $vuetify: null
};
function install(Vue, args) {
  if (args === void 0) {
    args = {};
  }

  if (install.installed) return;
  install.installed = true;

  if (vue__WEBPACK_IMPORTED_MODULE_0___default.a !== Vue) {
    Object(_util_console__WEBPACK_IMPORTED_MODULE_1__["consoleError"])("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");
  }

  var components = args.components || {};
  var directives = args.directives || {};

  for (var name in directives) {
    var directive = directives[name];
    Vue.directive(name, directive);
  }

  (function registerComponents(components) {
    if (components) {
      for (var key in components) {
        var component = components[key];

        if (component && !registerComponents(component.$_vuetify_subcomponents)) {
          Vue.component(key, component);
        }
      }

      return true;
    }

    return false;
  })(components); // Used to avoid multiple mixins being setup
  // when in dev mode and hot module reload
  // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111


  if (Vue.$_vuetify_installed) return;
  Vue.$_vuetify_installed = true;
  Vue.mixin({
    beforeCreate: function beforeCreate() {
      var options = this.$options;

      if (options.vuetify) {
        options.vuetify.init(this, this.$ssrContext);
        var $vuetify = Vue.observable(options.vuetify.framework);
        this.$vuetify = $vuetify;
        cache.$vuetify = $vuetify;
      } else {
        this.$vuetify = options.parent && options.parent.$vuetify || cache.$vuetify || this;
      }
    },
    beforeMount: function beforeMount() {
      // @ts-ignore
      if (this.$options.vuetify && this.$el && this.$el.hasAttribute('data-server-rendered')) {
        // @ts-ignore
        this.$vuetify.isHydrating = true; // @ts-ignore

        this.$vuetify.breakpoint.update(true);
      }
    },
    mounted: function mounted() {
      // @ts-ignore
      if (this.$options.vuetify && this.$vuetify.isHydrating) {
        // @ts-ignore
        this.$vuetify.isHydrating = false; // @ts-ignore

        this.$vuetify.breakpoint.update();
      }
    }
  });
}

/***/ }),

/***/ "./src/presets/default/index.ts":
/*!**************************************!*\
  !*** ./src/presets/default/index.ts ***!
  \**************************************/
/*! exports provided: preset */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/services/application/index.ts":
/*!*******************************************!*\
  !*** ./src/services/application/index.ts ***!
  \*******************************************/
/*! exports provided: Application */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/services/breakpoint/index.ts":
/*!******************************************!*\
  !*** ./src/services/breakpoint/index.ts ***!
  \******************************************/
/*! exports provided: Breakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoint", function() { return Breakpoint; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./src/services/service/index.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}(); // Extensions




var Breakpoint =
/** @class */
function (_super) {
  __extends(Breakpoint, _super);

  function Breakpoint(preset) {
    var _this = _super.call(this) || this; // Public


    _this.xs = false;
    _this.sm = false;
    _this.md = false;
    _this.lg = false;
    _this.xl = false;
    _this.xsOnly = false;
    _this.smOnly = false;
    _this.smAndDown = false;
    _this.smAndUp = false;
    _this.mdOnly = false;
    _this.mdAndDown = false;
    _this.mdAndUp = false;
    _this.lgOnly = false;
    _this.lgAndDown = false;
    _this.lgAndUp = false;
    _this.xlOnly = false; // Value is xs to match v2.x functionality

    _this.name = 'xs';
    _this.height = 0;
    _this.width = 0; // TODO: Add functionality to detect this dynamically in v3
    // Value is true to match v2.x functionality

    _this.mobile = true;
    _this.resizeTimeout = 0;
    var _a = preset[Breakpoint.property],
        mobileBreakpoint = _a.mobileBreakpoint,
        scrollBarWidth = _a.scrollBarWidth,
        thresholds = _a.thresholds;
    _this.mobileBreakpoint = mobileBreakpoint;
    _this.scrollBarWidth = scrollBarWidth;
    _this.thresholds = thresholds;
    return _this;
  }

  Breakpoint.prototype.init = function () {
    this.update();
    /* istanbul ignore if */

    if (typeof window === 'undefined') return;
    window.addEventListener('resize', this.onResize.bind(this), {
      passive: true
    });
  };
  /* eslint-disable-next-line max-statements */


  Breakpoint.prototype.update = function (ssr) {
    if (ssr === void 0) {
      ssr = false;
    }

    var height = ssr ? 0 : this.getClientHeight();
    var width = ssr ? 0 : this.getClientWidth();
    var xs = width < this.thresholds.xs;
    var sm = width < this.thresholds.sm && !xs;
    var md = width < this.thresholds.md - this.scrollBarWidth && !(sm || xs);
    var lg = width < this.thresholds.lg - this.scrollBarWidth && !(md || sm || xs);
    var xl = width >= this.thresholds.lg - this.scrollBarWidth;
    this.height = height;
    this.width = width;
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
    this.xsOnly = xs;
    this.smOnly = sm;
    this.smAndDown = (xs || sm) && !(md || lg || xl);
    this.smAndUp = !xs && (sm || md || lg || xl);
    this.mdOnly = md;
    this.mdAndDown = (xs || sm || md) && !(lg || xl);
    this.mdAndUp = !(xs || sm) && (md || lg || xl);
    this.lgOnly = lg;
    this.lgAndDown = (xs || sm || md || lg) && !xl;
    this.lgAndUp = !(xs || sm || md) && (lg || xl);
    this.xlOnly = xl;

    switch (true) {
      case xs:
        this.name = 'xs';
        break;

      case sm:
        this.name = 'sm';
        break;

      case md:
        this.name = 'md';
        break;

      case lg:
        this.name = 'lg';
        break;

      default:
        this.name = 'xl';
        break;
    }

    if (typeof this.mobileBreakpoint === 'number') {
      this.mobile = width < parseInt(this.mobileBreakpoint, 10);
      return;
    }

    var breakpoints = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    };
    var current = breakpoints[this.name];
    var max = breakpoints[this.mobileBreakpoint];
    this.mobile = current <= max;
  };

  Breakpoint.prototype.onResize = function () {
    clearTimeout(this.resizeTimeout); // Added debounce to match what
    // v-resize used to do but was
    // removed due to a memory leak
    // https://github.com/vuetifyjs/vuetify/pull/2997

    this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  }; // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081


  Breakpoint.prototype.getClientWidth = function () {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  };

  Breakpoint.prototype.getClientHeight = function () {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  };

  Breakpoint.property = 'breakpoint';
  return Breakpoint;
}(_service__WEBPACK_IMPORTED_MODULE_0__["Service"]);



/***/ }),

/***/ "./src/services/goto/index.ts":
/*!************************************!*\
  !*** ./src/services/goto/index.ts ***!
  \************************************/
/*! exports provided: default, Goto */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/services/icons/index.ts":
/*!*************************************!*\
  !*** ./src/services/icons/index.ts ***!
  \*************************************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./src/services/service/index.ts");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./src/util/helpers.ts");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presets */ "./src/services/icons/presets/index.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}(); // Extensions


 // Utilities

 // Presets



var Icons =
/** @class */
function (_super) {
  __extends(Icons, _super);

  function Icons(preset) {
    var _this = _super.call(this) || this;

    var _a = preset[Icons.property],
        iconfont = _a.iconfont,
        values = _a.values,
        component = _a.component;
    _this.component = component;
    _this.iconfont = iconfont;
    _this.values = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(_presets__WEBPACK_IMPORTED_MODULE_2__["default"][iconfont], values);
    return _this;
  }

  Icons.property = 'icons';
  return Icons;
}(_service__WEBPACK_IMPORTED_MODULE_0__["Service"]);



/***/ }),

/***/ "./src/services/icons/presets/fa-svg.ts":
/*!**********************************************!*\
  !*** ./src/services/icons/presets/fa-svg.ts ***!
  \**********************************************/
/*! exports provided: convertToComponentDeclarations, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/services/icons/presets/fa.ts":
/*!******************************************!*\
  !*** ./src/services/icons/presets/fa.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/services/icons/presets/fa4.ts":
/*!*******************************************!*\
  !*** ./src/services/icons/presets/fa4.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/services/icons/presets/index.ts":
/*!*********************************************!*\
  !*** ./src/services/icons/presets/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mdi-svg */ "./src/services/icons/presets/mdi-svg.ts");
/* harmony import */ var _md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md */ "./src/services/icons/presets/md.ts");
/* harmony import */ var _mdi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdi */ "./src/services/icons/presets/mdi.ts");
/* harmony import */ var _fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fa */ "./src/services/icons/presets/fa.ts");
/* harmony import */ var _fa4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fa4 */ "./src/services/icons/presets/fa4.ts");
/* harmony import */ var _fa_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fa-svg */ "./src/services/icons/presets/fa-svg.ts");






/* harmony default export */ __webpack_exports__["default"] = (Object.freeze({
  mdiSvg: _mdi_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  md: _md__WEBPACK_IMPORTED_MODULE_1__["default"],
  mdi: _mdi__WEBPACK_IMPORTED_MODULE_2__["default"],
  fa: _fa__WEBPACK_IMPORTED_MODULE_3__["default"],
  fa4: _fa4__WEBPACK_IMPORTED_MODULE_4__["default"],
  faSvg: _fa_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/services/icons/presets/md.ts":
/*!******************************************!*\
  !*** ./src/services/icons/presets/md.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/services/icons/presets/mdi-svg.ts":
/*!***********************************************!*\
  !*** ./src/services/icons/presets/mdi-svg.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/services/icons/presets/mdi.ts":
/*!*******************************************!*\
  !*** ./src/services/icons/presets/mdi.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: Application, Breakpoint, Goto, Icons, Lang, Presets, Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./src/services/application/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony import */ var _breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoint */ "./src/services/breakpoint/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breakpoint", function() { return _breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"]; });

/* harmony import */ var _goto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goto */ "./src/services/goto/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Goto", function() { return _goto__WEBPACK_IMPORTED_MODULE_2__["Goto"]; });

/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/services/icons/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return _icons__WEBPACK_IMPORTED_MODULE_3__["Icons"]; });

/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang */ "./src/services/lang/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lang", function() { return _lang__WEBPACK_IMPORTED_MODULE_4__["Lang"]; });

/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presets */ "./src/services/presets/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Presets", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["Presets"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./src/services/theme/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return _theme__WEBPACK_IMPORTED_MODULE_6__["Theme"]; });









/***/ }),

/***/ "./src/services/lang/index.ts":
/*!************************************!*\
  !*** ./src/services/lang/index.ts ***!
  \************************************/
/*! exports provided: Lang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lang", function() { return Lang; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./src/services/service/index.ts");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./src/util/helpers.ts");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/console */ "./src/util/console.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}; // Extensions


 // Utilities



var LANG_PREFIX = '$vuetify.';
var fallback = Symbol('Lang fallback');

function getTranslation(locale, key, usingDefault, defaultLocale) {
  if (usingDefault === void 0) {
    usingDefault = false;
  }

  var shortKey = key.replace(LANG_PREFIX, '');
  var translation = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["getObjectValueByPath"])(locale, shortKey, fallback);

  if (translation === fallback) {
    if (usingDefault) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__["consoleError"])("Translation key \"" + shortKey + "\" not found in fallback");
      translation = key;
    } else {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__["consoleWarn"])("Translation key \"" + shortKey + "\" not found, falling back to default");
      translation = getTranslation(defaultLocale, key, true, defaultLocale);
    }
  }

  return translation;
}

var Lang =
/** @class */
function (_super) {
  __extends(Lang, _super);

  function Lang(preset) {
    var _this = _super.call(this) || this;

    _this.defaultLocale = 'en';
    var _a = preset[Lang.property],
        current = _a.current,
        locales = _a.locales,
        t = _a.t;
    _this.current = current;
    _this.locales = locales;
    _this.translator = t || _this.defaultTranslator;
    return _this;
  }

  Lang.prototype.currentLocale = function (key) {
    var translation = this.locales[this.current];
    var defaultLocale = this.locales[this.defaultLocale];
    return getTranslation(translation, key, false, defaultLocale);
  };

  Lang.prototype.t = function (key) {
    var params = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }

    if (!key.startsWith(LANG_PREFIX)) return this.replace(key, params);
    return this.translator.apply(this, __spread([key], params));
  };

  Lang.prototype.defaultTranslator = function (key) {
    var params = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }

    return this.replace(this.currentLocale(key), params);
  };

  Lang.prototype.replace = function (str, params) {
    return str.replace(/\{(\d+)\}/g, function (match, index) {
      /* istanbul ignore next */
      return String(params[+index]);
    });
  };

  Lang.property = 'lang';
  return Lang;
}(_service__WEBPACK_IMPORTED_MODULE_0__["Service"]);



/***/ }),

/***/ "./src/services/presets/index.ts":
/*!***************************************!*\
  !*** ./src/services/presets/index.ts ***!
  \***************************************/
/*! exports provided: Presets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presets", function() { return Presets; });
/* harmony import */ var _presets_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../presets/default */ "./src/presets/default/index.ts");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/console */ "./src/util/console.ts");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/helpers */ "./src/util/helpers.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/services/service/index.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}; // Preset


 // Utilities





var Presets =
/** @class */
function (_super) {
  __extends(Presets, _super);

  function Presets(parentPreset, parent) {
    var _this = _super.call(this) || this; // The default preset


    var defaultPreset = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["mergeDeep"])({}, _presets_default__WEBPACK_IMPORTED_MODULE_0__["preset"]); // The user provided preset

    var userPreset = parent.userPreset; // The user provided global preset

    var _a = userPreset.preset,
        globalPreset = _a === void 0 ? {} : _a,
        preset = __rest(userPreset, ["preset"]);

    if (globalPreset.preset != null) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_1__["consoleWarn"])('Global presets do not support the **preset** option, it can be safely omitted');
    }

    parent.preset = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["mergeDeep"])(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["mergeDeep"])(defaultPreset, globalPreset), preset);
    return _this;
  }

  Presets.property = 'presets';
  return Presets;
}(_service__WEBPACK_IMPORTED_MODULE_3__["Service"]);



/***/ }),

/***/ "./src/services/service/index.ts":
/*!***************************************!*\
  !*** ./src/services/service/index.ts ***!
  \***************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
var Service =
/** @class */
function () {
  function Service() {
    this.framework = {};
  }

  Service.prototype.init = function (root, ssrContext) {};

  return Service;
}();



/***/ }),

/***/ "./src/services/theme/index.ts":
/*!*************************************!*\
  !*** ./src/services/theme/index.ts ***!
  \*************************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./src/services/service/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/services/theme/utils.ts");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/helpers */ "./src/util/helpers.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/* eslint-disable no-multi-spaces */
// Extensions


 // Utilities


 // Types



var Theme =
/** @class */
function (_super) {
  __extends(Theme, _super);

  function Theme(preset) {
    var _this = _super.call(this) || this;

    _this.disabled = false;
    _this.isDark = null;
    _this.unwatch = null;
    _this.vueMeta = null;
    var _a = preset[Theme.property],
        dark = _a.dark,
        disable = _a.disable,
        options = _a.options,
        themes = _a.themes;
    _this.dark = Boolean(dark);
    _this.defaults = _this.themes = themes;
    _this.options = options;

    if (disable) {
      _this.disabled = true;
      return _this;
    }

    _this.themes = {
      dark: _this.fillVariant(themes.dark, true),
      light: _this.fillVariant(themes.light, false)
    };
    return _this;
  }

  Object.defineProperty(Theme.prototype, "css", {
    // When setting css, check for element and apply new values

    /* eslint-disable-next-line accessor-pairs */
    set: function set(val) {
      if (this.vueMeta) {
        if (this.isVueMeta23) {
          this.applyVueMeta23();
        }

        return;
      }

      this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = val);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Theme.prototype, "dark", {
    get: function get() {
      return Boolean(this.isDark);
    },
    set: function set(val) {
      var oldDark = this.isDark;
      this.isDark = val; // Only apply theme after dark
      // has already been set before

      oldDark != null && this.applyTheme();
    },
    enumerable: false,
    configurable: true
  }); // Apply current theme default
  // only called on client side

  Theme.prototype.applyTheme = function () {
    if (this.disabled) return this.clearCss();
    this.css = this.generatedStyles;
  };

  Theme.prototype.clearCss = function () {
    this.css = '';
  }; // Initialize theme for SSR and SPA
  // Attach to ssrContext head or
  // apply new theme to document


  Theme.prototype.init = function (root, ssrContext) {
    if (this.disabled) return;
    /* istanbul ignore else */

    if (root.$meta) {
      this.initVueMeta(root);
    } else if (ssrContext) {
      this.initSSR(ssrContext);
    }

    this.initTheme(root);
  }; // Allows for you to set target theme


  Theme.prototype.setTheme = function (theme, value) {
    this.themes[theme] = Object.assign(this.themes[theme], value);
    this.applyTheme();
  }; // Reset theme defaults


  Theme.prototype.resetThemes = function () {
    this.themes.light = Object.assign({}, this.defaults.light);
    this.themes.dark = Object.assign({}, this.defaults.dark);
    this.applyTheme();
  }; // Check for existence of style element


  Theme.prototype.checkOrCreateStyleElement = function () {
    this.styleEl = document.getElementById('vuetify-theme-stylesheet');
    /* istanbul ignore next */

    if (this.styleEl) return true;
    this.genStyleElement(); // If doesn't have it, create it

    return Boolean(this.styleEl);
  };

  Theme.prototype.fillVariant = function (theme, dark) {
    if (theme === void 0) {
      theme = {};
    }

    var defaultTheme = this.themes[dark ? 'dark' : 'light'];
    return Object.assign({}, defaultTheme, theme);
  }; // Generate the style element
  // if applicable


  Theme.prototype.genStyleElement = function () {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return;
    /* istanbul ignore next */

    this.styleEl = document.createElement('style');
    this.styleEl.type = 'text/css';
    this.styleEl.id = 'vuetify-theme-stylesheet';

    if (this.options.cspNonce) {
      this.styleEl.setAttribute('nonce', this.options.cspNonce);
    }

    document.head.appendChild(this.styleEl);
  };

  Theme.prototype.initVueMeta = function (root) {
    var _this = this;

    this.vueMeta = root.$meta();

    if (this.isVueMeta23) {
      // vue-meta needs to apply after mounted()
      root.$nextTick(function () {
        _this.applyVueMeta23();
      });
      return;
    }

    var metaKeyName = typeof this.vueMeta.getOptions === 'function' ? this.vueMeta.getOptions().keyName : 'metaInfo';
    var metaInfo = root.$options[metaKeyName] || {};

    root.$options[metaKeyName] = function () {
      metaInfo.style = metaInfo.style || [];
      var vuetifyStylesheet = metaInfo.style.find(function (s) {
        return s.id === 'vuetify-theme-stylesheet';
      });

      if (!vuetifyStylesheet) {
        metaInfo.style.push({
          cssText: _this.generatedStyles,
          type: 'text/css',
          id: 'vuetify-theme-stylesheet',
          nonce: (_this.options || {}).cspNonce
        });
      } else {
        vuetifyStylesheet.cssText = _this.generatedStyles;
      }

      return metaInfo;
    };
  };

  Theme.prototype.applyVueMeta23 = function () {
    var set = this.vueMeta.addApp('vuetify').set;
    set({
      style: [{
        cssText: this.generatedStyles,
        type: 'text/css',
        id: 'vuetify-theme-stylesheet',
        nonce: this.options.cspNonce
      }]
    });
  };

  Theme.prototype.initSSR = function (ssrContext) {
    // SSR
    var nonce = this.options.cspNonce ? " nonce=\"" + this.options.cspNonce + "\"" : '';
    ssrContext.head = ssrContext.head || '';
    ssrContext.head += "<style type=\"text/css\" id=\"vuetify-theme-stylesheet\"" + nonce + ">" + this.generatedStyles + "</style>";
  };

  Theme.prototype.initTheme = function (root) {
    var _this = this; // Only watch for reactivity on client side


    if (typeof document === 'undefined') return; // If we get here somehow, ensure
    // existing instance is removed

    if (this.unwatch) {
      this.unwatch();
      this.unwatch = null;
    } // TODO: Update to use RFC if merged
    // https://github.com/vuejs/rfcs/blob/advanced-reactivity-api/active-rfcs/0000-advanced-reactivity-api.md


    root.$once('hook:created', function () {
      var obs = vue__WEBPACK_IMPORTED_MODULE_3___default.a.observable({
        themes: _this.themes
      });
      _this.unwatch = root.$watch(function () {
        return obs.themes;
      }, function () {
        return _this.applyTheme();
      }, {
        deep: true
      });
    });
    this.applyTheme();
  };

  Object.defineProperty(Theme.prototype, "currentTheme", {
    get: function get() {
      var target = this.dark ? 'dark' : 'light';
      return this.themes[target];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Theme.prototype, "generatedStyles", {
    get: function get() {
      var theme = this.parsedTheme;
      /* istanbul ignore next */

      var options = this.options || {};
      var css;

      if (options.themeCache != null) {
        css = options.themeCache.get(theme);
        /* istanbul ignore if */

        if (css != null) return css;
      }

      css = _utils__WEBPACK_IMPORTED_MODULE_1__["genStyles"](theme, options.customProperties);

      if (options.minifyTheme != null) {
        css = options.minifyTheme(css);
      }

      if (options.themeCache != null) {
        options.themeCache.set(theme, css);
      }

      return css;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Theme.prototype, "parsedTheme", {
    get: function get() {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["parse"](this.currentTheme || {}, undefined, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["getNestedValue"])(this.options, ['variations'], true));
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Theme.prototype, "isVueMeta23", {
    // Is using v2.3 of vue-meta
    // https://github.com/nuxt/vue-meta/releases/tag/v2.3.0
    get: function get() {
      return typeof this.vueMeta.addApp === 'function';
    },
    enumerable: false,
    configurable: true
  });
  Theme.property = 'theme';
  return Theme;
}(_service__WEBPACK_IMPORTED_MODULE_0__["Service"]);



/***/ }),

/***/ "./src/services/theme/utils.ts":
/*!*************************************!*\
  !*** ./src/services/theme/utils.ts ***!
  \*************************************/
/*! exports provided: parse, genStyles, genVariations, lighten, darken */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/util/console.ts":
/*!*****************************!*\
  !*** ./src/util/console.ts ***!
  \*****************************/
/*! exports provided: consoleInfo, consoleWarn, consoleError, deprecate, breaking, removed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleInfo", function() { return consoleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleWarn", function() { return consoleWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleError", function() { return consoleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breaking", function() { return breaking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removed", function() { return removed; });
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework */ "./src/framework.ts");
/* eslint-disable no-console */


function createMessage(message, vm, parent) {
  if (_framework__WEBPACK_IMPORTED_MODULE_0__["Zui"].config.silent) return;

  if (parent) {
    vm = {
      _isVue: true,
      $parent: parent,
      $options: vm
    };
  }

  if (vm) {
    // Only show each message once per instance
    vm.$_alreadyWarned = vm.$_alreadyWarned || [];
    if (vm.$_alreadyWarned.includes(message)) return;
    vm.$_alreadyWarned.push(message);
  }

  return "[Vuetify] " + message + (vm ? generateComponentTrace(vm) : '');
}

function consoleInfo(message, vm, parent) {
  var newMessage = createMessage(message, vm, parent);
  newMessage != null && console.info(newMessage);
}
function consoleWarn(message, vm, parent) {
  var newMessage = createMessage(message, vm, parent);
  newMessage != null && console.warn(newMessage);
}
function consoleError(message, vm, parent) {
  var newMessage = createMessage(message, vm, parent);
  newMessage != null && console.error(newMessage);
}
function deprecate(original, replacement, vm, parent) {
  consoleWarn("[UPGRADE] '" + original + "' is deprecated, use '" + replacement + "' instead.", vm, parent);
}
function breaking(original, replacement, vm, parent) {
  consoleError("[BREAKING] '" + original + "' has been removed, use '" + replacement + "' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide", vm, parent);
}
function removed(original, vm, parent) {
  consoleWarn("[REMOVED] '" + original + "' has been removed. You can safely omit it.", vm, parent);
}
/**
 * Shamelessly stolen from vuejs/vue/blob/dev/src/core/util/debug.js
 */

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};

function formatComponentName(vm, includeFile) {
  if (vm.$root === vm) {
    return '<Root>';
  }

  var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
  var name = options.name || options._componentTag;
  var file = options.__file;

  if (!name && file) {
    var match = file.match(/([^/\\]+)\.vue$/);
    name = match && match[1];
  }

  return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
}

function generateComponentTrace(vm) {
  if (vm._isVue && vm.$parent) {
    var tree = [];
    var currentRecursiveSequence = 0;

    while (vm) {
      if (tree.length > 0) {
        var last = tree[tree.length - 1];

        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++;
          vm = vm.$parent;
          continue;
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence];
          currentRecursiveSequence = 0;
        }
      }

      tree.push(vm);
      vm = vm.$parent;
    }

    return '\n\nfound in\n\n' + tree.map(function (vm, i) {
      return "" + (i === 0 ? '---> ' : ' '.repeat(5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
    }).join('\n');
  } else {
    return "\n\n(found in " + formatComponentName(vm) + ")";
  }
}

/***/ }),

/***/ "./src/util/helpers.ts":
/*!*****************************!*\
  !*** ./src/util/helpers.ts ***!
  \*****************************/
/*! exports provided: createSimpleFunctional, directiveConfig, addOnceEventListener, passiveSupported, addPassiveEventListener, getNestedValue, deepEqual, getObjectValueByPath, getPropertyFromItem, createRange, getZIndex, escapeHTML, filterObjectOnKeys, convertToUnit, kebabCase, isObject, keyCodes, remapInternalIcon, keys, camelize, arrayDiff, upperFirst, groupItems, wrapInArray, sortItems, defaultFilter, searchItems, getSlotType, debounce, throttle, getPrefixedScopedSlots, getSlot, clamp, padEnd, chunk, humanReadableFileSize, camelizeObjectKeys, mergeDeep, fillArray */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/util/mixins.ts":
/*!****************************!*\
  !*** ./src/util/mixins.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mixins; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable max-len, import/export, no-use-before-define */

function mixins() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    mixins: args
  });
}

/***/ }),

/***/ "./src/zui/ZAuth.ts":
/*!**************************!*\
  !*** ./src/zui/ZAuth.ts ***!
  \**************************/
/*! exports provided: ZAuthClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAuthClass", function() { return ZAuthClass; });
/* harmony import */ var _events_UIEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/UIEvent */ "./src/zui/events/UIEvent.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();


var instance;

var ZAuthClass =
/** @class */
function (_super) {
  __extends(ZAuthClass, _super);

  function ZAuthClass() {
    var _this = _super.call(this) || this;

    if (!instance) {
      instance = _this;
    }

    return instance;
  }

  ZAuthClass.prototype.login = function (data) {
    var login = ZAuthClass.options.login;
    return login ? login(data) : new Promise(function (resolve) {
      return resolve();
    });
  };

  ZAuthClass.prototype.logout = function () {
    var logout = ZAuthClass.options.logout;
    return logout ? logout() : new Promise(function (resolve) {
      return resolve();
    });
  };

  ZAuthClass.prototype.verifyLogin = function (data) {
    var verifyLogin = ZAuthClass.options.verifyLogin;
    return verifyLogin ? verifyLogin(data) : true;
  };

  ZAuthClass.prototype.verifyLoginStatus = function () {
    var verifyLoginStatus = ZAuthClass.options.verifyLoginStatus;
    return verifyLoginStatus ? verifyLoginStatus() : true;
  };

  ZAuthClass.prototype.verifyPermission = function (key) {
    var verifyPermission = ZAuthClass.options.verifyPermission;
    return verifyPermission ? verifyPermission(key) : true;
  };

  ZAuthClass.prototype.setting = function (options) {
    ZAuthClass.options = options;
  };

  ZAuthClass.genInstance = function () {
    if (!instance) {
      instance = new ZAuthClass();
    }

    return instance;
  };

  return ZAuthClass;
}(_events_UIEvent__WEBPACK_IMPORTED_MODULE_0__["UIEvent"]);



/***/ }),

/***/ "./src/zui/ZIconLoader.ts":
/*!********************************!*\
  !*** ./src/zui/ZIconLoader.ts ***!
  \********************************/
/*! exports provided: ZIconLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZIconLoader", function() { return ZIconLoader; });
var ZIconLoader =
/** @class */
function () {
  function ZIconLoader() {
    this.defaultIcon = '';
    this.defaultOpacity = 1;
  }
  /**
   * 格式化图标名，如果存在不合法的字符，则进行处理后返回
   * @param iconName
   */


  ZIconLoader.prototype.format = function (iconName) {
    return iconName;
  };
  /**
   * 检查图标是否需要加载
   * @param iconName
   */


  ZIconLoader.prototype.check = function (iconName) {
    return false;
  };
  /**
   * 加载图标
   * @param vm
   * @param iconName
   * @param fileName
   */


  ZIconLoader.prototype.load = function (vm, iconName, fileName) {
    return Promise.resolve(iconName);
  };

  return ZIconLoader;
}();



/***/ }),

/***/ "./src/zui/ZMenu.ts":
/*!**************************!*\
  !*** ./src/zui/ZMenu.ts ***!
  \**************************/
/*! exports provided: ZMenuClass, ZMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZMenuClass", function() { return ZMenuClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZMenu", function() { return ZMenu; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ZRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ZRouter */ "./src/zui/ZRouter.ts");
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __values = undefined && undefined.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};




function filterMenusData(list, level, parent) {
  if (level === void 0) {
    level = 0;
  }

  if (parent === void 0) {
    parent = null;
  }

  if (list && list.length > 0) {
    var menus_1 = [];
    list.forEach(function (item) {
      item.level = level;

      if (item.visible === false) {
        return;
      }

      var parents = parent ? __spread(parent.parents, [parent]) : [];
      var parentPaths = parent ? __spread(parent.parentPaths || [], [parent.path || '']) : [];
      var info = {
        path: item.path,
        name: item.name,
        children: item.children,
        redirect: item.redirect,
        alias: item.alias,
        meta: item.meta,
        title: item.title || item.name,
        icon: item.icon,
        roles: item.roles,
        href: item.href,
        target: item.target,
        visible: item.visible,
        query: item.query,
        level: item.level,
        active: false,
        key: (item.path || '').replace(/\//g, '-'),
        parent: parent,
        parents: parents,
        parentPaths: parentPaths
      };

      if (info.path && info.path.indexOf('/') !== 0) {
        var parentPath = parent ? parent.path : '';
        info.path = parentPath + "/" + info.path;
        info.path = info.path.replace(/\/{2,}/g, '/');
      } // const parentPaths = [...info.parentPaths, (info.path || '')]


      info.children = filterMenusData(item.children || [], level + 1, info);
      delete info.component;
      menus_1.push(info);
    });
    return menus_1;
  }

  return [];
}
/**
 * 根据指定路径获取所有需要展开和选中的菜单
 * @param menus 菜单列表
 * @param path 指定的路径
 */


function findMenuByUrl(menus, path) {
  var e_1, _a;

  if (path === void 0) {
    path = '';
  }

  if (!path) {
    return null;
  }

  var menu = null;

  try {
    for (var menus_2 = __values(menus), menus_2_1 = menus_2.next(); !menus_2_1.done; menus_2_1 = menus_2.next()) {
      var item = menus_2_1.value;

      if (item.path === path) {
        menu = item;
        break;
      }

      if (item.children && item.children.length > 0) {
        var child = findMenuByUrl(item.children, path);
        child && (menu = child);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (menus_2_1 && !menus_2_1.done && (_a = menus_2.return)) _a.call(menus_2);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return menu;
}
/**
 * 重置所有选中的菜单，不包含可展开节点
 * @param menus
 */


function resetSelectedStatus(menus) {
  menus.forEach(function (m) {
    if (m.children && m.children.length > 0) {
      resetSelectedStatus(m.children);
    } else {
      m.active && (m.active = false);
    }
  });
}

var __events = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();

var instance;

var ZMenuClass =
/** @class */
function () {
  function ZMenuClass() {
    this.selectedMenu = null;

    if (!instance) {
      instance = this;
    }

    return instance;
  }

  Object.defineProperty(ZMenuClass.prototype, "menusData", {
    get: function get() {
      return ZMenuClass.__menusData;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZMenuClass.prototype, "$router", {
    get: function get() {
      return _ZRouter__WEBPACK_IMPORTED_MODULE_1__["ZRouterClass"].genInstance();
    },
    enumerable: false,
    configurable: true
  });

  ZMenuClass.prototype.settingMenus = function (menus, autoGenRoute) {
    if (autoGenRoute === void 0) {
      autoGenRoute = true;
    }

    if (menus && menus.length > 0) {
      if (autoGenRoute) {
        this.$router.addRoutesByMenus(menus);
      }

      var menusData = filterMenusData(menus);
      ZMenuClass.__menusData = menusData;

      __events.$emit('update-menus', menusData);
    }
  };

  ZMenuClass.prototype.resetStatus = function (menus) {
    var _this = this;

    var list = menus || this.menusData || [];
    list.forEach(function (item) {
      item.active = false;

      if (item.children && item.children.length > 0) {
        _this.resetStatus(item.children);
      }
    });
  };

  ZMenuClass.prototype.resetSelectedStatus = function () {
    resetSelectedStatus(this.menusData || []);
  };

  ZMenuClass.prototype.activeByRoute = function (route) {
    route = route || this.$router.currentRoutePath;
    var menu = null;

    if (typeof route === 'string') {
      menu = findMenuByUrl(this.menusData, route || this.$router.currentRoutePath);
    } else {
      menu = route;
    }

    if (menu) {
      menu.active = true;

      if (menu.parents) {
        menu.parents.forEach(function (p) {
          p.active = true;
        });
      }

      this.selectedMenu = menu;
    }
  };

  ZMenuClass.prototype.closeSiblingMenus = function (menu) {
    var siblings = menu.parent ? menu.parent.children || [] : this.menusData;
    siblings.forEach(function (m) {
      if (m.path !== menu.path && m.children && m.children.length > 0) {
        m.active = false;
      }
    });
  };
  /**
   * 子级是否有选中的菜单
   * @param menu
   */


  ZMenuClass.prototype.checkActivatedChildren = function (menu) {
    var _this = this;

    if (!menu.children || menu.children.length === 0) {
      return menu.active || false;
    }

    var active = false;
    menu.children.forEach(function (m) {
      if (!m.children || m.children.length === 0) {
        active = m.active || false;
      } else {
        active = _this.checkActivatedChildren(m);
      }
    });
    return active;
  };

  ZMenuClass.prototype.onUpdateMenus = function (callback) {
    __events.$on('update-menus', callback);
  };

  ZMenuClass.prototype.offUpdateMenus = function (callback) {
    __events.$off('update-menus', callback);
  };

  ZMenuClass.genInstance = function () {
    if (!instance) {
      instance = new ZMenuClass();
    }

    return instance;
  };

  ZMenuClass.__menusData = [];
  return ZMenuClass;
}();


var ZMenu = ZMenuClass.genInstance();

/***/ }),

/***/ "./src/zui/ZMessage.ts":
/*!*****************************!*\
  !*** ./src/zui/ZMessage.ts ***!
  \*****************************/
/*! exports provided: ZMessageClass, ZMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZMessageClass", function() { return ZMessageClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZMessage", function() { return ZMessage; });
/* harmony import */ var _components_ZMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ZMessage */ "./src/zui/components/ZMessage/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


var instance;
/**
 * 消息管理器
 */

var ZMessageClass =
/** @class */
function () {
  function ZMessageClass() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  ZMessageClass.genWrapper = function () {
    if (!ZMessageClass.__wrapper) {
      var app = document.getElementById(ZMessageClass.appId);
      var div = document.createElement('div');
      app && app.appendChild(div);
      ZMessageClass.__wrapper = new _components_ZMessage__WEBPACK_IMPORTED_MODULE_0__["ZMessageContainer"]({}).$mount(div);
    }

    return ZMessageClass.__wrapper;
  };
  /**
   * 显示消息
   * @param options
   */


  ZMessageClass.prototype.show = function (options) {
    var content = '';

    if (_typeof(options) !== 'object') {
      content = options + '';
      options = {
        type: 'info',
        message: content,
        icon: 'mdi-information'
      };
    } else {
      content = options.message || '';
    }

    switch (options.type) {
      case 'info':
        return this.info(content, options);

      case 'success':
        return this.success(content, options);

      case 'warn':
      case 'warning':
        return this.warning(content, options);

      case 'error':
        return this.error(content, options);

      default:
        break;
    }
  };
  /**
   * 常规消息
   * @param message
   * @param options
   */


  ZMessageClass.prototype.info = function (message, options) {
    var container = ZMessageClass.genWrapper();
    var comp = new _components_ZMessage__WEBPACK_IMPORTED_MODULE_0__["ZMessageSingle"]({
      propsData: __assign(__assign({}, options), {
        message: message || '',
        type: 'info',
        icon: 'mdi-information'
      }),
      parent: container
    }).$mount();
    container && container.$el.appendChild(comp.$el);
  };
  /**
   * 成功消息
   * @param message
   * @param options
   */


  ZMessageClass.prototype.success = function (message, options) {
    var container = ZMessageClass.genWrapper();
    var comp = new _components_ZMessage__WEBPACK_IMPORTED_MODULE_0__["ZMessageSingle"]({
      propsData: __assign(__assign({}, options), {
        message: message || '',
        type: 'success',
        icon: 'mdi-check-circle'
      }),
      parent: container
    }).$mount();
    container && container.$el.appendChild(comp.$el);
  };
  /**
   * 告警消息
   * @param message
   * @param options
   */


  ZMessageClass.prototype.warn = function (message, options) {
    return this.warning(message, options);
  };
  /**
   * 告警消息
   * @param message
   * @param options
   */


  ZMessageClass.prototype.warning = function (message, options) {
    var container = ZMessageClass.genWrapper();
    var comp = new _components_ZMessage__WEBPACK_IMPORTED_MODULE_0__["ZMessageSingle"]({
      propsData: __assign(__assign({}, options), {
        message: message || '',
        type: 'warning',
        icon: 'mdi-alert-circle'
      }),
      parent: container
    }).$mount();
    container && container.$el.appendChild(comp.$el);
  };
  /**
   * 错误消息
   * @param message
   * @param options
   */


  ZMessageClass.prototype.error = function (message, options) {
    var container = ZMessageClass.genWrapper();
    var comp = new _components_ZMessage__WEBPACK_IMPORTED_MODULE_0__["ZMessageSingle"]({
      propsData: __assign(__assign({}, options), {
        message: message || '',
        type: 'error',
        icon: 'mdi-close-circle'
      }),
      parent: container
    }).$mount();
    container && container.$el.appendChild(comp.$el);
  };

  ZMessageClass.prototype.getMessageList = function () {
    var list = ZMessageClass.MESSAGE_LIST;

    if (!list) {
      list = [];
      ZMessageClass.MESSAGE_LIST = list;
    }

    return list;
  };

  ZMessageClass.genInstance = function () {
    if (!instance) {
      instance = new ZMessageClass();
    }

    return instance;
  };

  ZMessageClass.MESSAGE_LIST = [];
  ZMessageClass.appId = 'app';
  return ZMessageClass;
}();


/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$message` <br>
 * 2. 可引入使用 `import {ZMessage} = '@zwd/z-ui';`
 */

var ZMessage = ZMessageClass.genInstance();

/***/ }),

/***/ "./src/zui/ZModal.ts":
/*!***************************!*\
  !*** ./src/zui/ZModal.ts ***!
  \***************************/
/*! exports provided: ZModalClass, ZModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZModalClass", function() { return ZModalClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZModal", function() { return ZModal; });
/* harmony import */ var _components_ZModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ZModal */ "./src/zui/components/ZModal/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


var instance;
/**
 * 消息管理器
 */

var ZModalClass =
/** @class */
function () {
  function ZModalClass() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }
  /**
   * 显示消息
   * @param options
   */


  ZModalClass.prototype.show = function (options) {
    var propsData = {
      message: ''
    };

    if (typeof options === 'string') {
      propsData.message = options;
    }

    if (_typeof(options) === 'object') {
      propsData = options;
      propsData.top = options.top ? options.top + '' : '';
    }

    var comp = new _components_ZModal__WEBPACK_IMPORTED_MODULE_0__["ZModalSingle"]({
      propsData: propsData
    }).$mount();
    var result = {
      close: function close() {
        comp.closeForceFun();
        return result;
      },
      then: function then(handle) {
        comp.setSureBeforeFun(handle);
        return result;
      },
      catch: function _catch(handle) {
        comp.setCancelBeforeFun(handle);
        return result;
      }
    };
    return result;
  };
  /**
   * 常规消息
   * @param message
   * @param options
   */


  ZModalClass.prototype.info = function (message, options) {
    return this.show(__assign(__assign({}, options), {
      message: message || '',
      type: 'info',
      icon: 'mdi-information',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false
    }));
  };
  /**
   * 成功消息
   * @param message
   * @param options
   */


  ZModalClass.prototype.success = function (message, options) {
    return this.show(__assign(__assign({}, options), {
      message: message || '',
      type: 'success',
      icon: 'mdi-check-circle',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false
    }));
  };
  /**
   * 告警消息
   * @param message
   * @param options
   */


  ZModalClass.prototype.warn = function (message, options) {
    return this.warning(message, options);
  };
  /**
   * 告警消息
   * @param message
   * @param options
   */


  ZModalClass.prototype.warning = function (message, options) {
    return this.show(__assign(__assign({}, options), {
      message: message || '',
      type: 'warning',
      icon: 'mdi-alert-circle',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false
    }));
  };
  /**
   * 错误消息
   * @param message
   * @param options
   */


  ZModalClass.prototype.error = function (message, options) {
    return this.show(__assign(__assign({}, options), {
      message: message || '',
      type: 'error',
      icon: 'mdi-close-circle',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false
    }));
  };
  /**
   * 系统提示
   * @param message
   * @param options
   */


  ZModalClass.prototype.system = function (message, options) {
    return this.show(__assign(__assign({}, options), {
      title: options ? options.title : '提示',
      message: message || '',
      type: 'system',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false
    }));
  };
  /**
   * 确认
   * @param message
   * @param options
   */


  ZModalClass.prototype.confirm = function (message, options) {
    return this.show(__assign(__assign({}, options), {
      message: message || '',
      type: 'confirm'
    }));
  };
  /**
   * 关闭所有
   */


  ZModalClass.prototype.closeAll = function () {// 关闭所以弹窗;
  };

  ZModalClass.prototype.getModalList = function () {
    var list = ZModalClass.MODAL_LIST;

    if (!list) {
      list = [];
      ZModalClass.MODAL_LIST = list;
    }

    return list;
  };

  ZModalClass.genInstance = function () {
    if (!instance) {
      instance = new ZModalClass();
    }

    return instance;
  };

  ZModalClass.MODAL_LIST = [];
  return ZModalClass;
}();


/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$modal` <br>
 * 2. 可引入使用 `import {ZModal} = '@zwd/z-ui';`
 */

var ZModal = ZModalClass.genInstance();

/***/ }),

/***/ "./src/zui/ZRouter.ts":
/*!****************************!*\
  !*** ./src/zui/ZRouter.ts ***!
  \****************************/
/*! exports provided: ZAppRouter, ZAdminRouter, ZRouterClass, ZRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAppRouter", function() { return ZAppRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAdminRouter", function() { return ZAdminRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZRouterClass", function() { return ZRouterClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZRouter", function() { return ZRouter; });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "../../node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components/index.ts");
/* harmony import */ var _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ZAdmin */ "./src/zui/components/ZAdmin/index.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};





var instance;

var ZAppRouter =
/** @class */
function () {
  function ZAppRouter() {
    this._router = null;
    this.isRenderRouterView = false;
  }

  ZAppRouter.prototype.genRoute = function (path, comp, def) {
    if (comp === true) {
      return [{
        path: path,
        component: def
      }];
    }

    if (comp) {
      return [{
        path: path,
        component: comp
      }];
    }

    return [];
  };

  ZAppRouter.prototype.getRouter = function () {
    if (this._router) {
      return this._router;
    }

    this._router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"](this.routerOptions);
    return this._router;
  };

  ZAppRouter.prototype.addNotFoundRoute = function (route, notFoundComponent) {
    var _this = this;

    if (route.children && route.children.length > 0) {
      // 如果已经存在，则不添加
      var needed = !(route.children.some(function (i) {
        return i.path === '*';
      }) || route.path === '/' || route.path === '*');

      if (needed) {
        route.children.push({
          path: '*',
          component: notFoundComponent
        });
      }

      route.children.forEach(function (child) {
        return _this.addNotFoundRoute(child, notFoundComponent);
      });
    }
  };

  ZAppRouter.prototype.setting = function (options) {
    if (options) {
      this.isRenderRouterView = !options.appMain && !options.appHome;
      this.appHome = options.appHome;
      this.appMain = options.appMain || _components__WEBPACK_IMPORTED_MODULE_1__["ZApp"];
      var routerOptions = options.routerOptions || Object.create(null);
      var routes = routerOptions.routes || [];
      routes.push.apply(routes, __spread(this.genRoute('/login', options.appLogin, _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZDefaultLogin"])));
      routes.push.apply(routes, __spread(this.genRoute('/500', options.appServerError, _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZView500"])));
      routes.push.apply(routes, __spread(this.genRoute('/403', options.appNotAccess, _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZView403"])));
      routes.push.apply(routes, __spread(this.genRoute('*', options.appNotFound, _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZView404"])));
      routerOptions.routes = routes;
      this.routerOptions = routerOptions;
    }
  };

  return ZAppRouter;
}();



var ZAdminRouter =
/** @class */
function (_super) {
  __extends(ZAdminRouter, _super);

  function ZAdminRouter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ZAdminRouter.prototype.genComp = function (usr, def) {
    if (typeof usr === 'boolean') {
      return usr ? def : undefined;
    }

    return usr || def;
  };

  Object.defineProperty(ZAdminRouter.prototype, "defaultHome", {
    get: function get() {
      return vue__WEBPACK_IMPORTED_MODULE_3___default.a.extend({
        name: 'z-admin-default-home',
        render: function render(h) {
          return h('div', {
            staticClass: 'z-admin-default-home'
          });
        }
      });
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 生成完整路径
   * @param path
   * @param parentPath
   */

  ZAdminRouter.prototype.genFullPathByMenu = function (path, parentPath) {
    if (path.indexOf('/') !== 0) {
      return ("/" + (parentPath || '') + "/" + path).replace(/\/+/g, '/');
    }

    return path;
  };

  ZAdminRouter.prototype.parseUsrRoutes = function (routes, parentPath) {
    var _this = this;

    var list = [];
    routes.forEach(function (route) {
      if (route) {
        route.path = _this.genFullPathByMenu(route.path);
        route.name = route.name || "usr-" + route.path.replace(/\//g, '-');
        list.push(route);
      }
    });
    return list;
  };
  /**
   * 根据菜单生成路由列表
   * @param menus
   * @param rootList
   * @param parentPath
   */


  ZAdminRouter.prototype.genRoutesByMenus = function (menus, rootList, parentPath) {
    var _this = this;

    if (parentPath === void 0) {
      parentPath = '/';
    }

    var list = [];

    if (menus) {
      menus.forEach(function (menu) {
        if (!menu.path && !menu.href && (!menu.children || menu.children.length < 1)) {
          window.console.warn("\u83DC\u5355\u914D\u7F6E\u65E0\u6CD5\u751F\u6210\u8DEF\u7531: \n " + JSON.stringify(menu, null, 4));
          return;
        }

        menu.path = menu.path || '';
        var path = (menu.path || '').indexOf('/') === 0 ? menu.path : parentPath + "/" + menu.path;
        path = path.replace(/\/{2,}/g, '/');

        if (menu.path) {
          var route = {
            name: menu.name,
            path: path || '',
            component: menu.component,
            meta: __assign({
              name: menu.name || menu.title
            }, menu.meta)
          };

          if (menu.redirect) {
            route.redirect = menu.redirect;
          }

          if (menu.alias) {
            route.alias = menu.alias;
          }

          if (menu.beforeEnter) {
            route.beforeEnter = menu.beforeEnter;
          }

          route.name = (route.path || '').replace(/\//g, '-');
          rootList.push(route);
        }

        if (menu.children && menu.children.length > 0) {
          _this.genRoutesByMenus(menu.children, rootList, path);
        }
      });
    }

    return list;
  };
  /** 生成异常路由 */


  ZAdminRouter.prototype.genExceptionRoute = function (name, path) {
    if (name === void 0) {
      name = '';
    }

    if (path === void 0) {
      path = '';
    }

    var list = [];
    list.push({
      name: name + "-403",
      path: (path + "/403").replace(/\/\//g, '/'),
      component: _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZView403"]
    });
    list.push({
      name: name + "-500",
      path: (path + "/500").replace(/\/\//g, '/'),
      component: _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZView500"]
    });
    list.push({
      name: name + "-404",
      path: (path + "/*").replace(/\/\//g, '/'),
      component: _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZView404"]
    });
    return list;
  };
  /**
   * 根据菜单创建路由列表
   * @param menus
   * @param redirect
   */


  ZAdminRouter.prototype.createRoutesByMenus = function (menus, redirect) {
    if (menus === void 0) {
      menus = [];
    }

    if (redirect === void 0) {
      redirect = '/home';
    }

    if (menus && menus.length > 0) {
      var children = [];
      children.push.apply(children, __spread(this.genRoutesByMenus(menus, children, '/')));
      children.push.apply(children, __spread(this.genExceptionRoute())); // children.push({ name: '--empty', path: '', redirect })

      return children;
    }

    return [];
  };

  ZAdminRouter.prototype.setting = function (options) {
    var NotFoundElement = this.genComp(options.appNotFound, _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZView404"]);
    var NotFoundRoute = {
      path: '*',
      component: NotFoundElement
    };
    var routeLogin = {
      name: 'r__login',
      path: '/login',
      component: this.genComp(options.appLogin, _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZDefaultLogin"])
    };
    var route500 = {
      name: 'r__500',
      path: '/500',
      component: this.genComp(options.appServerError, _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZView500"])
    };
    var route403 = {
      name: 'r__403',
      path: '/403',
      component: this.genComp(options.appNotAccess, _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZView403"])
    };
    var route404 = {
      name: 'r__404',
      path: '/404',
      component: NotFoundElement
    };
    var routeRoot404 = {
      name: 'r__root_404',
      path: '*',
      component: NotFoundElement
    };
    var routeRoot = {
      path: '/',
      component: options.appMain || _components__WEBPACK_IMPORTED_MODULE_1__["ZAdmin"]
    };
    var routeHome = {
      path: '',
      component: options.appHome || this.defaultHome
    }; // 跟节点所有前置子节点

    var beforeChildren = [routeHome]; // 跟节点所有中置子节点

    var middleChildren = []; // 跟节点所有后置子节点

    var afterChildren = [NotFoundRoute]; // 给Home设置重定向

    options.redirect && (routeHome.redirect = options.redirect);
    var routerOptions = options.routerOptions || {};
    var usrRoutes = routerOptions.routes || [];
    var usrRedirect = '';
    usrRoutes.forEach(function (route) {
      if (route.path === '/' || route.path === '') {
        var children = route.children;
        delete route.children;

        if ('component' in route && route.component) {
          routeHome.component = route.component;
        } // 设置用户自定义的重定向，会忽略options中定义的重定向


        !usrRedirect && (usrRedirect = route.redirect); // 添加所有子组件到跟路由

        middleChildren.push.apply(middleChildren, __spread(children));
      } else {
        middleChildren.push(route);
      }
    });
    usrRedirect && (routeHome.redirect = usrRedirect);
    var menuRoutes = this.createRoutesByMenus(options.menus, '');
    routeRoot.children = __spread(beforeChildren, middleChildren, menuRoutes, afterChildren);
    routerOptions.routes = [routeLogin, route500, route403, route404, routeRoot, routeRoot404];
    this.routerOptions = routerOptions;
  };

  return ZAdminRouter;
}(ZAppRouter);



var ZRouterClass =
/** @class */
function () {
  function ZRouterClass() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  Object.defineProperty(ZRouterClass.prototype, "self", {
    get: function get() {
      return ZRouterClass.router;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZRouterClass.prototype, "currentRouter", {
    get: function get() {
      return ZRouterClass.router;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZRouterClass.prototype, "currentRoute", {
    get: function get() {
      return ZRouterClass.router.currentRoute;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZRouterClass.prototype, "currentRoutePath", {
    get: function get() {
      return ZRouterClass.router.currentRoute.path;
    },
    enumerable: false,
    configurable: true
  });

  ZRouterClass.prototype.getRouter = function () {
    return ZRouterClass.router;
  };

  ZRouterClass.prototype.addRoutesByMenus = function (menus) {
    if (menus === void 0) {
      menus = [];
    }

    var router = this.currentRouter;

    if (router) {
      var options = ZRouterClass.adminRouter || {};
      ZRouterClass.menus = menus = menus || []; // todo 待完成，动态添加菜单

      var routes = []; // genRoutesByOptions(options)

      var routerOptions = options.routerOptions || Object.create(null);
      routerOptions.routes = routes;
      var newRouter = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"](routerOptions);
      router.matcher = newRouter.matcher; // 强制刷新当前路由

      var route = router.currentRoute;
      router.replace({
        path: route.path,
        query: __assign(__assign({}, route.query), {
          t: Date.now() + ''
        })
      }).then();
      router.replace({
        path: route.path,
        query: __assign({}, route.query)
      }).then();
    }
  };

  ZRouterClass.genAppRouter = function (options) {
    var appRouter = new ZAppRouter();
    appRouter.setting(options);
    ZRouterClass.appRouter = appRouter;
    return appRouter;
  };

  ZRouterClass.genAdminRouter = function (options) {
    var adminRouter = new ZAdminRouter();
    adminRouter.setting(options);
    ZRouterClass.adminRouter = adminRouter;
    return adminRouter;
  };

  ZRouterClass.genInstance = function () {
    if (!instance) {
      instance = new ZRouterClass();
    }

    return instance;
  };

  return ZRouterClass;
}();


var ZRouter = ZRouterClass.genInstance();

/***/ }),

/***/ "./src/zui/ZTheme.ts":
/*!***************************!*\
  !*** ./src/zui/ZTheme.ts ***!
  \***************************/
/*! exports provided: ZThemeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZThemeClass", function() { return ZThemeClass; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events_UIEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/UIEvent */ "./src/zui/events/UIEvent.ts");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./src/zui/options/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




var DefaultLightColors = {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00'
};
var DefaultDarkColors = {
  primary: '#2196F3',
  secondary: '#424242',
  accent: '#FF4081',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00'
};
var instance;

var ZThemeClass =
/** @class */
function (_super) {
  __extends(ZThemeClass, _super);

  function ZThemeClass(appKey, options) {
    var _this = _super.call(this) || this;

    _this.themeStore = {};

    if (!instance) {
      instance = _this;
      ZThemeClass.appKey = ZThemeClass.appKey || appKey || 'com.zpmc.app';
      var darkStatus = ZThemeClass.getLocalOption('darkStatus', false);
      ZThemeClass.darkColors = ZThemeClass.getLocalOption('darkColors', DefaultDarkColors);
      ZThemeClass.lightColors = ZThemeClass.getLocalOption('lightColors', DefaultLightColors);
      _this.themeStore = vue__WEBPACK_IMPORTED_MODULE_0___default.a.observable({
        darkStatus: darkStatus,
        darkColors: ZThemeClass.darkColors,
        lightColors: ZThemeClass.lightColors,
        primaryColor: ZThemeClass.getColor('primary', darkStatus),
        secondaryColor: ZThemeClass.getColor('secondary', darkStatus),
        accentColor: ZThemeClass.getColor('accent', darkStatus),
        errorColor: ZThemeClass.getColor('error', darkStatus),
        infoColor: ZThemeClass.getColor('info', darkStatus),
        successColor: ZThemeClass.getColor('success', darkStatus),
        warningColor: ZThemeClass.getColor('warning', darkStatus),
        denseMode: ZThemeClass.getLocalOption('denseMode', true),
        mainMenuWidth: ZThemeClass.getLocalOption('mainMenuWidth', options.mainMenuWidth || 275),
        mainMenuExpandMode: ZThemeClass.getLocalOption('mainMenuExpandMode', false),
        mainNavMode: ZThemeClass.getLocalOption('mainNavMode', _options__WEBPACK_IMPORTED_MODULE_2__["MainNavMode"].Visible),
        mainNavPosition: ZThemeClass.getLocalOption('mainNavPosition', true),
        mainNavMiniMode: ZThemeClass.getLocalOption('mainNavMiniMode', true),
        mainNavVisible: ZThemeClass.getLocalOption('mainNavVisible', false),
        footerVisible: ZThemeClass.getLocalOption('footerVisible', false),
        appBarVisible: ZThemeClass.getLocalOption('appBarVisible', false),
        cameraModel: ZThemeClass.getLocalOption('cameraModel', false)
      });

      _this.settingHtmlClass(darkStatus);

      if (_this.themeStore.mainNavMode === _options__WEBPACK_IMPORTED_MODULE_2__["MainNavMode"].Visible) {
        _this.themeStore.mainNavMiniMode = false;
      }
    }

    return instance;
  }

  Object.defineProperty(ZThemeClass.prototype, "mainNavMiniMode", {
    get: function get() {
      return this.themeStore.mainNavMiniMode || false;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZThemeClass.prototype, "darkStatus", {
    get: function get() {
      return this.themeStore.darkStatus || false;
    },
    enumerable: false,
    configurable: true
  });

  ZThemeClass.prototype.settingTheme = function (options) {
    if (options) {
      var themeStore_1 = this.themeStore;
      Object.keys(options).forEach(function (key) {
        themeStore_1[key] = options[key];
      });
      this.settingDarkStatus(themeStore_1.darkStatus);
      this.settingPrimaryColor(themeStore_1.primaryColor || '');
      ZThemeClass.setLocalOptions(themeStore_1);
      this.emit('changeTheme', themeStore_1);
    }
  };

  ZThemeClass.prototype.settingDarkColor = function (options) {
    if (options) {
      var darkColors_1 = this.themeStore.darkColors;
      Object.keys(options).forEach(function (key) {
        darkColors_1[key] = options[key];
      });
      this.resetColor(this.themeStore.darkStatus || false);
      ZThemeClass.setLocalOptions(this.themeStore); // 更新vuetify
    }
  };

  ZThemeClass.prototype.settingLightColor = function (options) {
    if (options) {
      var lightColors_1 = this.themeStore.lightColors;
      Object.keys(options).forEach(function (key) {
        lightColors_1[key] = options[key];
      });
      this.resetColor(this.themeStore.darkStatus || false);
      ZThemeClass.setLocalOptions(this.themeStore); // 更新vuetify
    }
  };

  ZThemeClass.prototype.settingThemeColors = function (options) {
    if (ZThemeClass.vuetify && options) {
      if (options.darkColors) {
        var darkDefault = ZThemeClass.vuetify.theme.themes.dark || {};

        var dark = __assign(__assign({}, options.darkColors), darkDefault);

        ZThemeClass.vuetify.theme.themes.dark = dark;
        this.settingDarkColor(dark);
      }

      if (options.lightColors) {
        var lightDefault = ZThemeClass.vuetify.theme.themes.light || {};

        var light = __assign(__assign({}, options.lightColors), lightDefault);

        ZThemeClass.vuetify.theme.themes.light = light;
        this.settingLightColor(light);
      }

      this.emit('changeThemeColors');
    }
  };

  ZThemeClass.prototype.settingPrimaryColor = function (color) {
    var _a = this.themeStore,
        darkStatus = _a.darkStatus,
        darkColors = _a.darkColors,
        lightColors = _a.lightColors;

    if (darkStatus) {
      darkColors && (darkColors.primary = color);
    } else {
      lightColors && (lightColors.primary = color);
    }

    this.themeStore.primaryColor = color;
    ZThemeClass.setLocalOptions(this.themeStore); // 更新vuetify

    if (ZThemeClass.vuetify) {
      if (this.darkStatus) {
        ZThemeClass.vuetify.theme.themes.dark.primary = color;
      } else {
        ZThemeClass.vuetify.theme.themes.light.primary = color;
      }

      this.emit('changePrimaryColor', color);
    }
  };
  /**
   * 设置html跟节点样式
   */


  ZThemeClass.prototype.settingHtmlClass = function (darkStatus) {
    var html = document.documentElement;
    html.className = darkStatus ? 'theme--dark' : 'theme--light';
  };

  ZThemeClass.prototype.settingDarkStatus = function (status) {
    if (status === void 0) {
      status = false;
    }

    if (ZThemeClass.vuetifyInstalled) {
      // 更新vuetify
      ZThemeClass.vuetify.theme.dark = status; // 更新store

      this.themeStore.darkStatus = status; // 更新视图

      this.settingHtmlClass(status); // 更新颜色

      this.resetColor(status); // 更新本地记录

      ZThemeClass.setLocalOptions(this.themeStore); // 通知视图

      this.emit('changeDark', status);
    }
  };

  ZThemeClass.prototype.getPrimaryColor = function () {
    return this.themeStore.primaryColor || '';
  };

  ZThemeClass.prototype.getDefaultPreset = function (options) {
    return __assign({
      theme: {
        dark: this.darkStatus,
        themes: {
          dark: ZThemeClass.darkColors,
          light: ZThemeClass.lightColors
        }
      }
    }, options);
  };

  ZThemeClass.prototype.resetColor = function (darkStatus) {
    var options = this.themeStore;
    options.primaryColor = ZThemeClass.getColor('primary', darkStatus);
    options.secondaryColor = ZThemeClass.getColor('secondary', darkStatus);
    options.accentColor = ZThemeClass.getColor('accent', darkStatus);
    options.errorColor = ZThemeClass.getColor('error', darkStatus);
    options.infoColor = ZThemeClass.getColor('info', darkStatus);
    options.successColor = ZThemeClass.getColor('success', darkStatus);
    options.warningColor = ZThemeClass.getColor('warning', darkStatus);
  };

  ZThemeClass.getLocalKey = function () {
    return ZThemeClass.appKey.toLocaleUpperCase() + "-" + 'Theme-Options'.toLocaleUpperCase();
  };

  ZThemeClass.getLocalOption = function (name, defaultValue) {
    if (!ZThemeClass.themeJson) {
      var themeJson = localStorage.getItem(ZThemeClass.getLocalKey());

      try {
        ZThemeClass.themeJson = JSON.parse(themeJson || '{}');
      } catch (e) {
        ZThemeClass.themeJson = {};
      }
    }

    var value = ZThemeClass.themeJson[name];

    switch (_typeof(defaultValue)) {
      case 'object':
        return __assign(__assign({}, defaultValue), value);

      case 'boolean':
        return typeof value === 'boolean' ? value : defaultValue;

      case 'number':
        return typeof value === 'number' ? value : defaultValue;

      default:
        return value || defaultValue;
    }
  };

  ZThemeClass.setLocalOptions = function (options) {
    localStorage.setItem(ZThemeClass.getLocalKey(), JSON.stringify(options));
  };

  ZThemeClass.getColor = function (name, darkStatus) {
    var darkColors = ZThemeClass.darkColors || {};
    var lightColors = ZThemeClass.lightColors || {};
    return (darkStatus ? darkColors[name] : lightColors[name]) || '';
  };

  ZThemeClass.settingVuetify = function (vuetify) {
    ZThemeClass.vuetify = vuetify;
    ZThemeClass.vuetifyInstalled = true;
  };

  ZThemeClass.genInstance = function () {
    if (!instance) {
      var message = 'Zui Uninitialized, Please use the createApp/createAdmin, Initialize your app！';
      window.console.error(message);
      throw new Error(message);
    }

    return instance;
  };

  ZThemeClass.appKey = '';
  ZThemeClass.themeJson = null;
  ZThemeClass.darkColors = {};
  ZThemeClass.lightColors = {};
  ZThemeClass.vuetifyInstalled = false;
  ZThemeClass.vuetify = {
    theme: {
      dark: true
    }
  };
  return ZThemeClass;
}(_events_UIEvent__WEBPACK_IMPORTED_MODULE_1__["UIEvent"]);



/***/ }),

/***/ "./src/zui/ZuiCore.ts":
/*!****************************!*\
  !*** ./src/zui/ZuiCore.ts ***!
  \****************************/
/*! exports provided: ZuiCoreClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZuiCoreClass", function() { return ZuiCoreClass; });
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./src/zui/directives/index.ts");
/* harmony import */ var _events_UIEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/UIEvent */ "./src/zui/events/UIEvent.ts");
/* harmony import */ var _ZMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ZMenu */ "./src/zui/ZMenu.ts");
/* harmony import */ var _ZRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZRouter */ "./src/zui/ZRouter.ts");
/* harmony import */ var _ZTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ZTheme */ "./src/zui/ZTheme.ts");
/* harmony import */ var _ZModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ZModal */ "./src/zui/ZModal.ts");
/* harmony import */ var _ZMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ZMessage */ "./src/zui/ZMessage.ts");
/* harmony import */ var _ZAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ZAuth */ "./src/zui/ZAuth.ts");
/* harmony import */ var _util_debug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/debug */ "./src/zui/util/debug.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var instance;

var ZuiCoreClass =
/** @class */
function (_super) {
  __extends(ZuiCoreClass, _super);

  function ZuiCoreClass(options) {
    var _this = _super.call(this) || this;

    if (!instance) {
      instance = _this;
      ZuiCoreClass.setting(options);

      _this.on('ready', function () {
        ZuiCoreClass.initialized = true;

        if (ZuiCoreClass.callbackList) {
          ZuiCoreClass.callbackList.forEach(function (fn) {
            fn();
          });
          ZuiCoreClass.callbackList = [];
        }
      });
    }

    return instance;
  }

  ZuiCoreClass.readyCheck = function () {
    if (!ZuiCoreClass.initialized) {
      window.console.warn('Zui is not initialized! Please use $zui.ready(callback) and call when ready');
    }
  };

  ZuiCoreClass.prototype.ready = function (callback) {
    ZuiCoreClass.callbackList.push(callback);
  };

  Object.defineProperty(ZuiCoreClass.prototype, "$menu", {
    get: function get() {
      return _ZMenu__WEBPACK_IMPORTED_MODULE_2__["ZMenuClass"].genInstance();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "$router", {
    get: function get() {
      return _ZRouter__WEBPACK_IMPORTED_MODULE_3__["ZRouterClass"].genInstance();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "$theme", {
    get: function get() {
      return ZuiCoreClass.$theme;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "$modal", {
    get: function get() {
      return _ZModal__WEBPACK_IMPORTED_MODULE_5__["ZModalClass"].genInstance();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "$message", {
    get: function get() {
      return _ZMessage__WEBPACK_IMPORTED_MODULE_6__["ZMessageClass"].genInstance();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "$auth", {
    get: function get() {
      return _ZAuth__WEBPACK_IMPORTED_MODULE_7__["ZAuthClass"].genInstance();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "appName", {
    /**
     * App名称
     */
    get: function get() {
      return ZuiCoreClass.$options.appName || '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "appKey", {
    /**
     * App唯一标示
     */
    get: function get() {
      return ZuiCoreClass.$options.appKey || '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "appId", {
    /**
     * App编号
     */
    get: function get() {
      return ZuiCoreClass.$options.appId || '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "appRedirect", {
    /**
     * App 重定向路径
     */
    get: function get() {
      return ZuiCoreClass.$options.redirect || '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "menus", {
    /**
     * 获取主菜单列表
     */
    get: function get() {
      return _ZMenu__WEBPACK_IMPORTED_MODULE_2__["ZMenuClass"].__menusData;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "darkStatus", {
    /**
     * 获取默认主题状态
     */
    get: function get() {
      return this.$theme.darkStatus || false;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "defaultSize", {
    /**
     * 获取默认主题大小
     */
    get: function get() {
      return ZuiCoreClass.$options.defaultSize || 's';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "defaultTooltipColor", {
    /**
     * 获取默认的提示背景色
     */
    get: function get() {
      return ZuiCoreClass.$options.defaultTooltipColor || '#616161';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ZuiCoreClass.prototype, "defaultTooltipSize", {
    /**
     * 获取默认的提示背景色
     */
    get: function get() {
      return ZuiCoreClass.$options.defaultTooltipSize || 's';
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 回到首页
   */

  ZuiCoreClass.prototype.openHome = function () {
    var openHome = ZuiCoreClass.$options.openHome;

    if (openHome) {
      openHome();
      return true;
    } else {
      var type = '';

      switch (ZuiCoreClass.type) {
        case 'app':
          type = 'createApp';
          break;

        case 'admin':
          type = 'createAdmin';
          break;
      }

      _util_debug__WEBPACK_IMPORTED_MODULE_8__["default"].warn("\u8BF7\u5728 " + type + " \u4E2D\u914D\u7F6E openHome\uFF0C\u5B9E\u73B0\u91CD\u5B9A\u5411\u8DF3\u8F6C\uFF01");
    }

    return false;
  };
  /**
   * 回到登录页面
   */


  ZuiCoreClass.prototype.openLogin = function () {
    var openLogin = ZuiCoreClass.$options.openLogin;

    if (openLogin) {
      openLogin();
    }
  };

  ZuiCoreClass.settingVuetify = function (vuetify) {
    ZuiCoreClass.$vuetify = vuetify;
    ZuiCoreClass.$vuetifyInstalled = true;
    _ZTheme__WEBPACK_IMPORTED_MODULE_4__["ZThemeClass"].settingVuetify(vuetify);
  };

  ZuiCoreClass.setting = function (options) {
    if (options) {
      ZuiCoreClass.$options = options;
      ZuiCoreClass.$theme = new _ZTheme__WEBPACK_IMPORTED_MODULE_4__["ZThemeClass"](options.appKey || '', {
        mainMenuWidth: options.defaultMenuWidth
      });
      _ZMessage__WEBPACK_IMPORTED_MODULE_6__["ZMessageClass"].appId = options.appId || 'app';
    }
  };

  ZuiCoreClass.genInstance = function () {
    if (!instance) {
      instance = new ZuiCoreClass();
    }

    return instance;
  };

  ZuiCoreClass.install = function (Vue, options) {
    ZuiCoreClass.setting(options);
    var core = ZuiCoreClass.genInstance();

    if (!ZuiCoreClass.install.initialized) {
      ZuiCoreClass.install.initialized = true;
    } // 安装Zui指令


    Object.keys(_directives__WEBPACK_IMPORTED_MODULE_0__).forEach(function (name) {
      Vue.directive(name, _directives__WEBPACK_IMPORTED_MODULE_0__[name]);
    });
    Vue.mixin({
      beforeCreate: function beforeCreate() {
        var $options = this.$options; // 安装 ZuiCore

        if (!this.$ui) {
          this.$ui = core;
        } else {
          $options.parent && (this.$ui = $options.parent.$ui);
        } // 安装 ZModal


        if (!this.$modal) {
          this.$modal = core.$modal;
        } else {
          $options.parent && (this.$modal = $options.parent.$modal);
        } // 安装 ZMessage


        if (!this.$message) {
          this.$message = core.$message;
        } else {
          $options.parent && (this.$message = $options.parent.$message);
        } // 安装 ZMenu


        if (!this.$menu) {
          this.$menu = core.$menu;
        } else {
          $options.parent && (this.$menu = $options.parent.$menu);
        } // 安装 ZTheme


        if (!this.$theme) {
          this.$theme = core.$theme;
          this.$themeStore = core.$theme.themeStore;
        } else {
          $options.parent && (this.$theme = $options.parent.$theme);
        }
      }
    });
  };

  ZuiCoreClass.type = '';
  ZuiCoreClass.initialized = false;
  ZuiCoreClass.callbackList = [];
  /** @internal */

  ZuiCoreClass.$vuetifyInstalled = false;
  /** @internal */

  ZuiCoreClass.$vuetify = {
    theme: {
      dark: true
    }
  };
  /** @internal */

  ZuiCoreClass.$options = {};
  return ZuiCoreClass;
}(_events_UIEvent__WEBPACK_IMPORTED_MODULE_1__["UIEvent"]);



/***/ }),

/***/ "./src/zui/components/ZAdmin/ZAdmin.ts":
/*!*********************************************!*\
  !*** ./src/zui/components/ZAdmin/ZAdmin.ts ***!
  \*********************************************/
/*! exports provided: ZAdmin, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/zui/components/ZAdmin/ZAdminApp.ts":
/*!************************************************!*\
  !*** ./src/zui/components/ZAdmin/ZAdminApp.ts ***!
  \************************************************/
/*! exports provided: ZAdminApp, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/zui/components/ZAdmin/ZDefaultLogin.ts":
/*!****************************************************!*\
  !*** ./src/zui/components/ZAdmin/ZDefaultLogin.ts ***!
  \****************************************************/
/*! exports provided: ZDefaultLogin, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/zui/components/ZAdmin/ZView403.ts":
/*!***********************************************!*\
  !*** ./src/zui/components/ZAdmin/ZView403.ts ***!
  \***********************************************/
/*! exports provided: ZView403, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/zui/components/ZAdmin/ZView404.ts":
/*!***********************************************!*\
  !*** ./src/zui/components/ZAdmin/ZView404.ts ***!
  \***********************************************/
/*! exports provided: ZView404, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/zui/components/ZAdmin/ZView500.ts":
/*!***********************************************!*\
  !*** ./src/zui/components/ZAdmin/ZView500.ts ***!
  \***********************************************/
/*! exports provided: ZView500, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/zui/components/ZAdmin/index.ts":
/*!********************************************!*\
  !*** ./src/zui/components/ZAdmin/index.ts ***!
  \********************************************/
/*! exports provided: ZAdmin, ZAdminApp, ZView403, ZView404, ZView500, ZDefaultLogin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ZAdminApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ZAdminApp */ "./src/zui/components/ZAdmin/ZAdminApp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZAdminApp", function() { return _ZAdminApp__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ZAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ZAdmin */ "./src/zui/components/ZAdmin/ZAdmin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZAdmin", function() { return _ZAdmin__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ZView403__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ZView403 */ "./src/zui/components/ZAdmin/ZView403.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZView403", function() { return _ZView403__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ZView404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZView404 */ "./src/zui/components/ZAdmin/ZView404.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZView404", function() { return _ZView404__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ZView500__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ZView500 */ "./src/zui/components/ZAdmin/ZView500.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZView500", function() { return _ZView500__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ZDefaultLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ZDefaultLogin */ "./src/zui/components/ZAdmin/ZDefaultLogin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZDefaultLogin", function() { return _ZDefaultLogin__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/* harmony default export */ __webpack_exports__["default"] = (_ZAdmin__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/zui/components/ZMessage/index.ts":
/*!**********************************************!*\
  !*** ./src/zui/components/ZMessage/index.ts ***!
  \**********************************************/
/*! exports provided: ZMessageSingle, ZMessageContainer */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/zui/components/ZModal/index.ts":
/*!********************************************!*\
  !*** ./src/zui/components/ZModal/index.ts ***!
  \********************************************/
/*! exports provided: ZModalSingle */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/zui/createAdmin.ts":
/*!********************************!*\
  !*** ./src/zui/createAdmin.ts ***!
  \********************************/
/*! exports provided: createAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAdmin", function() { return createAdmin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "../../node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ZAdmin */ "./src/zui/components/ZAdmin/index.ts");
/* harmony import */ var _ZuiCore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZuiCore */ "./src/zui/ZuiCore.ts");
/* harmony import */ var _createZui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createZui */ "./src/zui/createZui.ts");
/* harmony import */ var _ZRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ZRouter */ "./src/zui/ZRouter.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};







/**
 * 创建主程序
 * @internal
 */

function createMain(h, options, appHome) {
  return h(_components_ZAdmin__WEBPACK_IMPORTED_MODULE_2__["ZAdminApp"], {
    staticClass: "z-app " + (options.appClass || ''),
    props: {
      id: options.appId || 'app'
    }
  }, // 子元素列表
  [appHome ? h(appHome) : '']);
}
/**
 * 创建Admin, 基于 @zwd/z-ui
 * @param options
 */


function createAdmin(options) {
  options = options || {};
  _ZuiCore__WEBPACK_IMPORTED_MODULE_3__["ZuiCoreClass"].type = 'admin'; // 安装 vue-router

  vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]); // 安装 zui-core

  vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_ZuiCore__WEBPACK_IMPORTED_MODULE_3__["ZuiCoreClass"], options);

  var _a = _ZuiCore__WEBPACK_IMPORTED_MODULE_3__["ZuiCoreClass"].genInstance(),
      $menu = _a.$menu,
      $theme = _a.$theme,
      $auth = _a.$auth; // 设置认证


  $auth.setting(options.auth || {}); // 设置菜单

  $menu.settingMenus(options.menus || [], false); // 设置 vuetify and zui

  var presetOptions = $theme.getDefaultPreset(options.presetOptions);
  var ui = Object(_createZui__WEBPACK_IMPORTED_MODULE_4__["createZui"])(presetOptions, options.useOptions);
  _ZuiCore__WEBPACK_IMPORTED_MODULE_3__["ZuiCoreClass"].settingVuetify(ui.framework);
  var componentOptions = options.componentOptions || {};
  var adminRouter = _ZRouter__WEBPACK_IMPORTED_MODULE_5__["ZRouterClass"].adminRouter || _ZRouter__WEBPACK_IMPORTED_MODULE_5__["ZRouterClass"].genAdminRouter({
    appMain: options.appMain,
    appHome: options.appHome,
    redirect: options.redirect
  });
  var router = componentOptions.router;
  var appHome;

  if (adminRouter) {
    router = adminRouter.getRouter();
    appHome = adminRouter.appHome;
  }

  if (router) {
    componentOptions.router = router;
    _ZRouter__WEBPACK_IMPORTED_MODULE_5__["ZRouterClass"].router = router;
  } // 生成 vue 选项


  var vueOptions = __assign({
    el: options.appId || '#app',
    vuetify: ui,
    mounted: function mounted() {},
    render: function render(h) {
      return createMain(h, options, appHome || options.appHome);
    }
  }, componentOptions);

  _ZuiCore__WEBPACK_IMPORTED_MODULE_3__["ZuiCoreClass"].$app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(vueOptions);
  return _ZuiCore__WEBPACK_IMPORTED_MODULE_3__["ZuiCoreClass"].$app;
}

/***/ }),

/***/ "./src/zui/createApp.ts":
/*!******************************!*\
  !*** ./src/zui/createApp.ts ***!
  \******************************/
/*! exports provided: createApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ZuiCore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ZuiCore */ "./src/zui/ZuiCore.ts");
/* harmony import */ var _ZRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ZRouter */ "./src/zui/ZRouter.ts");
/* harmony import */ var _createZui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createZui */ "./src/zui/createZui.ts");
/* harmony import */ var _components_VApp_ZApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/VApp/ZApp */ "./src/components/VApp/ZApp.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};






/**
 * 创建主程序
 */

function createMain(h, options, appMain, appHome, isRenderRouterView) {
  if (isRenderRouterView === void 0) {
    isRenderRouterView = false;
  }

  options = options || {};
  var children = isRenderRouterView ? h('RouterView') : appHome ? h(appHome) : h('');
  return h(appMain || _components_VApp_ZApp__WEBPACK_IMPORTED_MODULE_4__["ZApp"], {
    staticClass: "z-app " + (options.appClass || ''),
    props: {
      id: options.appId || 'app'
    }
  }, [children]);
}
/**
 * 创建APP, 基于@zwd/z-ui
 * @param options
 */


function createApp(options) {
  options = options || {};
  _ZuiCore__WEBPACK_IMPORTED_MODULE_1__["ZuiCoreClass"].type = 'app'; // 安装 zui-core

  vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_ZuiCore__WEBPACK_IMPORTED_MODULE_1__["ZuiCoreClass"], options);
  var $theme = _ZuiCore__WEBPACK_IMPORTED_MODULE_1__["ZuiCoreClass"].genInstance().$theme;
  var presetOptions = $theme.getDefaultPreset(options.presetOptions);
  var ui = Object(_createZui__WEBPACK_IMPORTED_MODULE_3__["createZui"])(presetOptions, options.useOptions);
  _ZuiCore__WEBPACK_IMPORTED_MODULE_1__["ZuiCoreClass"].settingVuetify(ui.framework);
  var componentOptions = options.componentOptions || {};
  var appRouter = _ZRouter__WEBPACK_IMPORTED_MODULE_2__["ZRouterClass"].appRouter;
  var appMain;
  var appHome;
  var isRenderRouterView = false;

  if (appRouter) {
    appMain = appRouter.appMain;
    appHome = appRouter.appHome;
    isRenderRouterView = appRouter.isRenderRouterView;
  } // 如果用户传了自定义的 router


  if (componentOptions.router) {
    _ZRouter__WEBPACK_IMPORTED_MODULE_2__["ZRouterClass"].router = componentOptions.router;
  } else {
    appMain = options.appMain;
    appHome = options.appHome;
    isRenderRouterView = false;
  }

  _ZuiCore__WEBPACK_IMPORTED_MODULE_1__["ZuiCoreClass"].$app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(__assign({
    el: options.appId || '#app',
    vuetify: ui,
    render: function render(createElement) {
      return createMain(createElement, options, appMain, appHome, isRenderRouterView);
    }
  }, componentOptions));
  return _ZuiCore__WEBPACK_IMPORTED_MODULE_1__["ZuiCoreClass"].$app;
}

/***/ }),

/***/ "./src/zui/createMenus.ts":
/*!********************************!*\
  !*** ./src/zui/createMenus.ts ***!
  \********************************/
/*! exports provided: createMenus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenus", function() { return createMenus; });
function createMenus(menus) {
  return menus;
}

/***/ }),

/***/ "./src/zui/createRouter.ts":
/*!*********************************!*\
  !*** ./src/zui/createRouter.ts ***!
  \*********************************/
/*! exports provided: createRouter, createAdminRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRouter", function() { return createRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAdminRouter", function() { return createAdminRouter; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "../../node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _ZRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ZRouter */ "./src/zui/ZRouter.ts");



/**
 * 创建路由，可根据菜单生成路由，菜单为可选项
 * @param options
 */

function createRouter(options) {
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var zRouter = _ZRouter__WEBPACK_IMPORTED_MODULE_2__["ZRouterClass"].genAppRouter(options);
  return zRouter.getRouter();
}
/**
 * 创建Admin系统路由，可根据菜单生成路由，菜单为可选项
 * @param options
 */

function createAdminRouter(options) {
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var zRouter = _ZRouter__WEBPACK_IMPORTED_MODULE_2__["ZRouterClass"].genAdminRouter(options);
  return zRouter.getRouter();
}

/***/ }),

/***/ "./src/zui/createZui.ts":
/*!******************************!*\
  !*** ./src/zui/createZui.ts ***!
  \******************************/
/*! exports provided: createZui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createZui", function() { return createZui; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework */ "./src/framework.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};



/**
 * 创建一个 Zui 实例，包含 $vuetify、$ui、$message、$modal
 */

function createZui(options, useOptions) {
  // 安装 vuetify -> zui
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_framework__WEBPACK_IMPORTED_MODULE_1__["default"], useOptions);
  return new _framework__WEBPACK_IMPORTED_MODULE_1__["default"](__assign({}, options));
}

/***/ }),

/***/ "./src/zui/directives/drag-move/index.ts":
/*!***********************************************!*\
  !*** ./src/zui/directives/drag-move/index.ts ***!
  \***********************************************/
/*! exports provided: DragMove, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/zui/directives/index.ts":
/*!*************************************!*\
  !*** ./src/zui/directives/index.ts ***!
  \*************************************/
/*! exports provided: DragMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drag_move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-move */ "./src/zui/directives/drag-move/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragMove", function() { return _drag_move__WEBPACK_IMPORTED_MODULE_0__["DragMove"]; });



/***/ }),

/***/ "./src/zui/events/UIEvent.ts":
/*!***********************************!*\
  !*** ./src/zui/events/UIEvent.ts ***!
  \***********************************/
/*! exports provided: UIEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIEvent", function() { return UIEvent; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};



var UIEvent =
/** @class */
function () {
  function UIEvent() {
    this.events = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
  }

  UIEvent.prototype.emit = function (event) {
    var _a;

    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    (_a = this.events).$emit.apply(_a, __spread([event], args));
  };

  UIEvent.prototype.on = function (event, callback) {
    this.events.$on(event, callback);
  };

  UIEvent.prototype.once = function (event, callback) {
    this.events.$once(event, callback);
  };

  UIEvent.prototype.off = function (event, callback) {
    this.events.$off(event, callback);
  };

  return UIEvent;
}();



/***/ }),

/***/ "./src/zui/options/index.ts":
/*!**********************************!*\
  !*** ./src/zui/options/index.ts ***!
  \**********************************/
/*! exports provided: MainNavMode */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/loader.js):\nSyntaxError: /Users/wenchaoxin/code/zpmc-modules/z-ui/packages/vuetify/package.json: Error while parsing JSON - Unexpected token < in JSON at position 131\n    at JSON.parse (<anonymous>)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:57:20\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/utils.js:29:12\n    at cachedFunction (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at findPackageData (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/files/package.js:33:11)\n    at buildRootChain (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/config-chain.js:105:85)\n    at loadPrivatePartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/@babel/core/lib/config/partial.js:110:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:144:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:194)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:5:97)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:60:18)\n    at Object.<anonymous> (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/babel-loader/lib/index.js:55:12)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:283:9\n    at makeSourceMapAndFinish (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:59:5)\n    at successLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:41:5)\n    at Object.loader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/ts-loader/dist/index.js:24:5)\n    at applySyncOrAsync (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:350:21)\n    at apply (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:277:5)\n    at /Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:135:7\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:188:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:196:14)\n    at applyPitchLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:226:4)\n    at applyLoaders (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/applyLoaders.js:120:3)\n    at HappyWorker.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyWorker.js:27:3)\n    at Object.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyForegroundThreadPool.js:61:14)\n    at HappyPlugin.compile (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyPlugin.js:194:14)\n    at Object.HappyLoader (/Users/wenchaoxin/code/zpmc-modules/z-ui/node_modules/happypack/lib/HappyLoader.js:31:15)");

/***/ }),

/***/ "./src/zui/util/debug.ts":
/*!*******************************!*\
  !*** ./src/zui/util/debug.ts ***!
  \*******************************/
/*! exports provided: log, info, warn, error, ignore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignore", function() { return ignore; });
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

function log() {
  var _a;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return (_a = window.console).log.apply(_a, __spread(['[ZUI]'], args));
}
function info() {
  var _a;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return (_a = window.console).info.apply(_a, __spread(['[ZUI]'], args));
}
function warn() {
  var _a;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return (_a = window.console).warn.apply(_a, __spread(['[ZUI]'], args));
}
function error() {
  var _a;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return (_a = window.console).error.apply(_a, __spread(['[ZUI]'], args));
}
function ignore() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  } // ignore

}
/* harmony default export */ __webpack_exports__["default"] = ({
  info: info,
  log: log,
  warn: warn,
  error: error,
  ignore: ignore
});

/***/ }),

/***/ "vue":
/*!******************************************************************************!*\
  !*** external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=zui.js.map