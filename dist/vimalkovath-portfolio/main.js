(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/education/education.component */ "./src/app/pages/education/education.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/pages/experience/experience.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/skills/skills.component */ "./src/app/pages/skills/skills.component.ts");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
/* harmony import */ var _pages_cookie_policy_cookie_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/cookie-policy/cookie-policy.component */ "./src/app/pages/cookie-policy/cookie-policy.component.ts");
/* harmony import */ var _pages_sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/sitemap/sitemap.component */ "./src/app/pages/sitemap/sitemap.component.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_posts_posts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/posts/posts.component */ "./src/app/pages/posts/posts.component.ts");
/* harmony import */ var _pages_posts_postdetail_postdetail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/posts/postdetail/postdetail.component */ "./src/app/pages/posts/postdetail/postdetail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components













var routes = [
    // default route to home on load
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    // In menu
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'education', component: _pages_education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"] },
    { path: 'experience', component: _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"] },
    { path: 'projects', component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"] },
    { path: 'skills', component: _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"] },
    { path: 'posts', component: _pages_posts_posts_component__WEBPACK_IMPORTED_MODULE_13__["PostsComponent"] },
    // Others
    { path: 'cookie-policy', component: _pages_cookie_policy_cookie_policy_component__WEBPACK_IMPORTED_MODULE_10__["CookiePolicyComponent"] },
    { path: 'sitemap', component: _pages_sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_11__["SitemapComponent"] },
    { path: 'terms-conditions', component: _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_12__["TermsComponent"] },
    { path: 'details', component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"] },
    { path: 'postdetail', component: _pages_posts_postdetail_postdetail_component__WEBPACK_IMPORTED_MODULE_14__["PostdetailComponent"] },
    // 404
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n<app-cookie-banner></app-cookie-banner>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_route_scroll_route_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/route-scroll/route-scroll.service */ "./src/app/providers/route-scroll/route-scroll.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var AppComponent = /** @class */ (function () {
    function AppComponent(scrollService) {
        this.scrollService = scrollService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.scrollService.scrollTopNav();
        // jQuery functions
        this.toggleLangList();
        this.toggleMenuResp();
        this.resetDropdowns();
    };
    /**
     * jQuery script
     * Fix non functional dropdown method from ngx
     * Event is not propagated to window
     *
     * When language btn is clicked -> open or close dropdown list
     */
    AppComponent.prototype.toggleLangList = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.dropdown').on('click', function (e) {
            e.stopPropagation(); // avoid click to propagate to window
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).hasClass('open') ?
                jquery__WEBPACK_IMPORTED_MODULE_1__(this).removeClass('open') : jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass('open');
        });
    };
    /**
     * jQuery script
     * Fix non functional collapse method from ngx
     * Event is not propagated to window
     *
     * When resp menu btn is clicked
     * -> open or close dropdown menu list
     * -> triggers close and open animation of burger button
     */
    AppComponent.prototype.toggleMenuResp = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.btn-burger').on('click', function (e) {
            e.stopPropagation(); // avoid click to propagate to window
            if (jquery__WEBPACK_IMPORTED_MODULE_1__('.nav-menu').hasClass('in')) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.nav-menu').removeClass('in');
                jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass('collapsed');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.nav-menu').addClass('in');
                jquery__WEBPACK_IMPORTED_MODULE_1__(this).removeClass('collapsed');
            }
        });
    };
    /**
     * jQuery script
     * Fix non functional dropdown/collapse method from ngx
     *
     * Clicking anywhere in the which is not the burger menu or the list menu buttons
     * -> cancel all active dropdowns
     */
    AppComponent.prototype.resetDropdowns = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.dropdown').removeClass('open');
            jquery__WEBPACK_IMPORTED_MODULE_1__('.nav-menu').removeClass('in');
            jquery__WEBPACK_IMPORTED_MODULE_1__('.btn-burger').addClass('collapsed');
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_route_scroll_route_scroll_service__WEBPACK_IMPORTED_MODULE_2__["RouteScrollService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _providers_providers_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/providers.module */ "./src/app/providers/providers.module.ts");
/* harmony import */ var _translations_translations_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translations/translations.module */ "./src/app/translations/translations.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/pipes/pipes.module */ "./src/app/shared/pipes/pipes.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_cookie_policy_cookie_policy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/cookie-policy/cookie-policy.component */ "./src/app/pages/cookie-policy/cookie-policy.component.ts");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
/* harmony import */ var _pages_education_education_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/education/education.component */ "./src/app/pages/education/education.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/pages/experience/experience.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _pages_sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/sitemap/sitemap.component */ "./src/app/pages/sitemap/sitemap.component.ts");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/skills/skills.component */ "./src/app/pages/skills/skills.component.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_education_profile_cs_profile_cs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/education/profile-cs/profile-cs.component */ "./src/app/pages/education/profile-cs/profile-cs.component.ts");
/* harmony import */ var _pages_home_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/home/profile/profile.component */ "./src/app/pages/home/profile/profile.component.ts");
/* harmony import */ var _shared_components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/components/details-modal/details-modal.component */ "./src/app/shared/components/details-modal/details-modal.component.ts");
/* harmony import */ var _shared_components_img_modal_img_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/components/img-modal/img-modal.component */ "./src/app/shared/components/img-modal/img-modal.component.ts");
/* harmony import */ var _pages_posts_posts_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/posts/posts.component */ "./src/app/pages/posts/posts.component.ts");
/* harmony import */ var _pages_posts_postdetail_postdetail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/posts/postdetail/postdetail.component */ "./src/app/pages/posts/postdetail/postdetail.component.ts");
/* harmony import */ var _pages_posts_postpreview_postpreview_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/posts/postpreview/postpreview.component */ "./src/app/pages/posts/postpreview/postpreview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Modules





// environment global

// Pages












// Components







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _providers_providers_module__WEBPACK_IMPORTED_MODULE_6__["ProvidersModule"],
                _translations_translations_module__WEBPACK_IMPORTED_MODULE_7__["TranslationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"].forRoot(),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _pages_cookie_policy_cookie_policy_component__WEBPACK_IMPORTED_MODULE_14__["CookiePolicyComponent"],
                _pages_details_details_component__WEBPACK_IMPORTED_MODULE_15__["DetailsComponent"],
                _pages_education_education_component__WEBPACK_IMPORTED_MODULE_16__["EducationComponent"],
                _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
                _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"],
                _pages_sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_20__["SitemapComponent"],
                _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_21__["SkillsComponent"],
                _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_22__["TermsComponent"],
                _pages_education_profile_cs_profile_cs_component__WEBPACK_IMPORTED_MODULE_23__["ProfileCsComponent"],
                _pages_home_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"],
                _pages_posts_posts_component__WEBPACK_IMPORTED_MODULE_27__["PostsComponent"],
                _pages_posts_postdetail_postdetail_component__WEBPACK_IMPORTED_MODULE_28__["PostdetailComponent"],
                _pages_posts_postpreview_postpreview_component__WEBPACK_IMPORTED_MODULE_29__["PostpreviewComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [
                _shared_components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_25__["DetailsModalComponent"],
                _shared_components_img_modal_img_modal_component__WEBPACK_IMPORTED_MODULE_26__["ImgModalComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <main class=\"wrap-articles\">\n\n    <article id=\"about-fed\" class=\"jumbotron wrap-jumbo\">\n      <div class=\"row\">\n\n        <section class=\"content-jumbo col-xs-12 col-sm-8\">\n          <header>\n            <h2>{{ 'aboutTitle0' | translate }}</h2>\n          </header>\n\n          <p>{{ 'aboutText0' | translate }}</p>\n\n          <footer class=\"img-group\">\n            <header class=\"header-sub\"><h4>{{ 'aboutTitle7' | translate }}</h4></header>\n            <figure class=\"img-wrap\" *ngFor=\"let skill of skillsDev; let i=index\">\n              <img class=\"img img-float\" [src]=\"skill.image\" [alt]=\"skill.name\">\n              <figcaption class=\"img-label\" *ngIf=\"i < 5\">{{ skill.name }}</figcaption>\n            </figure>\n          </footer>\n        </section>\n\n        <figure class=\"col-xs-12 col-sm-4 img-jumbo\">\n          <img [src]=\"details.images.dev\">\n        </figure>\n\n      </div>\n    </article>\n\n\n    <article id=\"about-ux\" class=\"jumbotron wrap-jumbo\">\n      <div class=\"row\">\n\n        <section class=\"content-jumbo col-xs-12 col-sm-8\">\n          <header>\n            <h2>{{ 'aboutTitle1' | translate }}</h2>\n          </header>\n          <p>{{ 'aboutText1' | translate }}</p>\n\n          <footer class=\"img-group\">\n            <header class=\"header-sub\"><h4>{{ 'aboutTitle7' | translate }}</h4></header>\n            <figure class=\"img-wrap\" *ngFor=\"let skill of skillsDesign; let i=index\">\n              <img class=\"img img-float\" *ngIf=\"i < 5\" [src]=\"skill.image\" [alt]=\"skill.name\">\n              <figcaption class=\"img-label\" *ngIf=\"i < 5\">{{ skill.name }}</figcaption>\n            </figure>\n          </footer>\n        </section>\n\n        <figure class=\"col-xs-12 col-sm-4 img-jumbo\">\n          <img [src]=\"details.images.design\">\n        </figure>\n\n      </div>\n    </article>\n  </main>\n\n  <section id=\"about-tools\" class=\"wrap-cards row\">\n    <header><h2>{{ 'aboutTitle2' | translate }}</h2></header>\n    <app-card\n      class=\"col-xs-12 col-sm-4 col-md-3\"\n      *ngFor=\"let tool of tools\"\n      [hidden]=\"!tool.featured\"\n      [object]=\"tool\"\n      (moreInfo)=\"openModal($event, 'tool')\">\n    </app-card>\n  </section>\n\n\n  <article id=\"about-experiences\" class=\"jumbotron wrap-jumbo\">\n    <div class=\"row\">\n\n      <section class=\"content-jumbo col-xs-12 col-sm-8\">\n        <header>\n          <h2>{{ 'aboutTitle3' | translate }}</h2>\n        </header>\n        <p>{{ 'aboutText2' | translate }}</p>\n      </section>\n\n      <figure class=\"col-xs-12 col-sm-4 img-jumbo\">\n        <img [src]=\"details.images.process\">\n      </figure>\n\n    </div>\n  </article>\n\n  <section id=\"about-hobbies\" class=\"wrap-cards row\">\n    <header><h2>{{ 'aboutTitle4' | translate }}</h2></header>\n    <app-card\n      class=\"col-xs-12 col-sm-4 col-md-3\"\n      *ngFor=\"let hobby of hobbies\"\n      [object]=\"hobby\"\n      (moreInfo)=\"openModal($event, 'hobby')\">\n    </app-card>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_skill_skill_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/skill/skill.service */ "./src/app/providers/skill/skill.service.ts");
/* harmony import */ var _providers_tool_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/tool/tool.service */ "./src/app/providers/tool/tool.service.ts");
/* harmony import */ var _providers_hobby_hobby_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/hobby/hobby.service */ "./src/app/providers/hobby/hobby.service.ts");
/* harmony import */ var _shared_constants_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants/profile */ "./src/app/shared/constants/profile.ts");
/* harmony import */ var _providers_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/modal/modal.service */ "./src/app/providers/modal/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Constants

// Services

var AboutComponent = /** @class */ (function () {
    function AboutComponent(toolService, hobbyService, skillService, modalService) {
        this.toolService = toolService;
        this.hobbyService = hobbyService;
        this.skillService = skillService;
        this.modalService = modalService;
        this.details = _shared_constants_profile__WEBPACK_IMPORTED_MODULE_4__["PROFILE"];
        this.skillsDev = [];
        this.skillsDesign = [];
        this.detailsModal = {};
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.tools = this.toolService.getTools() || [];
        this.hobbies = this.hobbyService.getHobbies() || [];
        this.skills = this.skillService.getSkills() || [];
        this.filterSkills(this.skills);
        this.scrollTo();
    };
    /**
     * window.location.hash retrieves the anchor
     * then scroll down to correct level
     */
    AboutComponent.prototype.scrollTo = function () {
        if (!!window.location.hash) {
            setTimeout(function () {
                document.querySelector(window.location.hash).scrollIntoView({
                    block: 'nearest',
                    inline: 'nearest',
                    behavior: 'smooth'
                });
            }, 500);
        }
    };
    /**
     * Filters skills depending on whether or not they are associated to design or dev
     * @param {Skill} skills
     */
    AboutComponent.prototype.filterSkills = function (skills) {
        for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
            var skill = skills_1[_i];
            if ((skill.category === 'Framework' || skill.category === 'Front-End') && skill.featured === true) {
                this.skillsDev.push(skill);
            }
            else if (skill.category === 'Design' && skill.featured === true) {
                this.skillsDesign.push(skill);
            }
        }
    };
    /**
     * Open modal
     * Resolve the item to display thanks to its id and type
     *
     * @param $event
     * @param type
     * @returns {any}
     */
    AboutComponent.prototype.openModal = function ($event, type) {
        this.typeModal = type;
        this.detailsModal = this.modalService.openModal($event, type);
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_tool_tool_service__WEBPACK_IMPORTED_MODULE_2__["ToolService"],
            _providers_hobby_hobby_service__WEBPACK_IMPORTED_MODULE_3__["HobbyService"],
            _providers_skill_skill_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"],
            _providers_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/cookie-policy/cookie-policy.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/cookie-policy/cookie-policy.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <section class=\"wrap-reg\">\n    <h2>What is a cookie?</h2>\n\n    <p>\n      They are text files recording certain actions such as:\n    </p>\n\n    <ul>\n      <li>The selected language</li>\n      <li>When the user logs in/out</li>\n      <li>The number of times an user comes back</li>\n      <li>If the user agrees with certin terms and conditions</li>\n    </ul>\n  </section>\n\n  <section class=\"wrap-reg\">\n    <h2>For what purpose?</h2>\n\n    <p>\n      In the case of this website it will serve 3 purposes:\n    </p>\n\n    <ul>\n      <li>To know, of course, if the user agrees with the terms of cookie usage</li>\n      <li>To remember what is the language chosen by the user</li>\n      <li>To monitor, thanks to Google Analytics, the traffic on my portfolio</li>\n    </ul>\n  </section>\n\n  <section class=\"wrap-reg\">\n    <h2>Why do I need your consent?</h2>\n\n    <p>\n      In regard of the law, I can store cookies on your machine if they are essential to the user's journey.\n      But your permission is needed to do so.\n    </p>\n  </section>\n\n  <section class=\"wrap-reg\">\n    <h2>What kind of cookie do I use?</h2>\n\n    <p>\n      Below is the full list of cookies I use and their purposes:\n    </p>\n\n    <div class=\"grid-table\">\n      <div class=\"row\">\n        <div class=\"grid-table-headings grid-table-row col-xs-12\">\n          <div class=\"grid-table-cell col-xs-3\"><h5>Context</h5></div>\n          <div class=\"grid-table-cell col-xs-2\"><h5>Name(s)</h5></div>\n          <div class=\"grid-table-cell col-xs-2\"><h5>Value(s)</h5></div>\n          <div class=\"grid-table-cell col-xs-5\"><h5>Purpose(s)</h5></div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"grid-table-row col-xs-12\">\n          <div class=\"grid-table-cell col-xs-3\">Agrees to cookies</div>\n          <div class=\"grid-table-cell col-xs-2\">'consent'</div>\n          <div class=\"grid-table-cell col-xs-2\">\n            <ul>\n              <li>'yes'</li>\n              <li>''</li>\n            </ul>\n          </div>\n          <div class=\"grid-table-cell col-xs-5\">\n            If 'yes', it considers the user agrees on the terms. The cookie will expire within 7 days.\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"grid-table-row col-xs-12\">\n          <div class=\"grid-table-cell col-xs-3\">Language selection</div>\n          <div class=\"grid-table-cell col-xs-2\">'language'</div>\n          <div class=\"grid-table-cell col-xs-2\">\n            <ul>\n              <li>'eng'</li>\n              <li>'fra'</li>\n            </ul>\n          </div>\n          <div class=\"grid-table-cell col-xs-5\">\n            To keep in memory the selected language. This helps to avoid you having to select again\n            your language during your future visits or even after you simply refresh the page.\n            The cookie will expire within 7 days.\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"grid-table-row col-xs-12\">\n          <div class=\"grid-table-cell col-xs-3\">Google Analytics</div>\n          <div class=\"grid-table-cell col-xs-2\">\n            <ul>\n              <li>'_ga'</li>\n              <li>'__utma'</li>\n              <li>'__utmb'</li>\n              <li>'__utmc'</li>\n              <li>'__utmz'</li>\n            </ul>\n          </div>\n          <div class=\"grid-table-cell col-xs-2\">\n            <a href=\"https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage\" target=\"_blank\">\n              Google Analytics Cookie Usage on Websites\n            </a>\n          </div>\n          <div class=\"grid-table-cell col-xs-5\">\n            To determine what are the most/least interesting pages for you and if there is room for improvement.\n            Or even if my portfolio draws enough attention.\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/cookie-policy/cookie-policy.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/cookie-policy/cookie-policy.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.grid-table {\n  border-top: 1px solid #707070;\n  border-right: 0px solid #707070;\n  border-bottom: 0px solid #707070;\n  border-left: 1px solid #707070;\n  border-radius: 0px;\n  margin-top: 3rem; }\n.grid-table .grid-table-headings .grid-table-cell {\n    background-color: #66cc99;\n    color: #fcfcfc;\n    min-height: 0px; }\n.grid-table .grid-table-cell {\n    border-top: 0px solid #707070;\n    border-right: 1px solid #707070;\n    border-bottom: 1px solid #707070;\n    border-left: 0px solid #707070;\n    border-radius: 0px;\n    min-height: 20rem;\n    padding: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Nvb2tpZS1wb2xpY3kvY29va2llLXBvbGljeS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC9wYWdlcy9jb29raWUtcG9saWN5L2Nvb2tpZS1wb2xpY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURZRjs7RUNURTtBRHNCRjs7RUNuQkU7QUQ2QkY7O0VDMUJFO0FEd0NGOztFQ3JDRTtBRHNKRjs7RUNuSkU7QUNmRjtFRm1JRSw2QkE3SFk7RUE4SFosK0JBOUhZO0VBK0haLGdDQS9IWTtFQWdJWiw4QkFoSVk7RUFpSVosa0JFdEk4QztFQUM5QyxnQkZ5Q1csRUFBQTtBRTNDYjtJQU1NLHlCRkpXO0lFS1gsY0ZDUztJRUFULGVBQWUsRUFBQTtBQVJyQjtJRm1JRSw2QkE3SFk7SUE4SFosK0JBOUhZO0lBK0haLGdDQS9IWTtJQWdJWiw4QkFoSVk7SUFpSVosa0JFMUhnRDtJQUM5QyxpQkFBaUI7SUFDakIsZUYwQlcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nvb2tpZS1wb2xpY3kvY29va2llLXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29sb3Vyc1xuICovXG5cbiRwcmltYXJ5OiAjNjZjYzk5O1xuJHNlY29uZGFyeTogIzY2OTljYztcbiRhbHQ6ICM2MmIyYjA7XG4kZGFyazogIzMwMzAzMDtcbiRncmV5OiAjNzA3MDcwO1xuJGxpZ2h0LWdyZXk6ICNmMGYwZjA7XG4kbGlnaHQ6ICNmY2ZjZmM7XG4kYWxlcnQ6ICNkODc0NmE7XG4kaW5mbzogI2NjOWQxNDtcblxuLyoqXG4gKiBGb250c1xuICovXG5cbiRmb250LW1pY3JvOiAxcmVtO1xuJGZvbnQtc21hbGw6IDEuMnJlbTtcbiRmb250LWJhc2U6IDEuNnJlbTtcbiRmb250LWJpZzogMS44cmVtO1xuJGZvbnQtbWFjcm86IDIuMnJlbTtcbiRmb250LW1lZ2E6IDIuNnJlbTtcbiRmb250LWdpZ2E6IDNyZW07XG4kZm9udC10ZXJhOiA0cmVtO1xuXG4vKipcbiAqIEltYWdlc1xuICovXG5cbiRpbWctc206IDI1cHg7XG4kaW1nLW1kOiA1MHB4O1xuJGltZy1iaWc6IDc1cHg7XG4kaW1nLW1lZ2E6IDEwMHB4O1xuJGltZy1naWdhOiAxNTBweDtcblxuLyoqXG4gKiBDb250YWluZXJzXG4gKi9cblxuJGhlYWRlci1oZWlnaHQ6IDcuNXJlbTtcbiRjYXJkLWhlaWdodDogMjByZW07XG4kZ2FwLXNtOiAwLjVyZW07XG4kZ2FwLXJlZzogMS41cmVtO1xuJGdhcC1tZDogM3JlbTtcbiRnYXAtYmlnOiA0LjVyZW07XG4kZ2FwLW1lZ2E6IDZyZW07XG4kZ2FwLXRlcmE6IDQwdmg7XG4kcGFkZGluZy1zbTogMXJlbTtcblxuLyoqXG4gKiBNaXhpbnNcbiAqL1xuXG5AbWl4aW4gc3BlY2lhbC1mb250KCRzaXplLCAkY29sb3IpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGhpZ2hsaWdodCgkYmctY29sb3IsICRmb250LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmb250LWNvbG9yO1xufVxuXG5AbWl4aW4gc3F1YXJlKCR2YWx1ZSkge1xuICB3aWR0aDogJHZhbHVlO1xuICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIHJvdW5kKCR2YWx1ZSkge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAkdmFsdWU7XG4gIGhlaWdodDogJHZhbHVlO1xufVxuXG5AbWl4aW4gcG9zaXRpb24oJHR5cGUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcbiAgcG9zaXRpb246ICR0eXBlO1xuICB0b3A6ICR0b3A7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgbGVmdDogJGxlZnQ7XG59XG5cbi8vIGNlbnRlciB2ZXJ0aWNhbGx5XG5AbWl4aW4gdmVydGljYWwtYWxpZ24oJGhlaWdodCkge1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0IC8gMjtcbn1cblxuQG1peGluIGFuaW0tZHJvcGRvd24oJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZVkoJHZhbHVlKSk7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIHRyaWFuZ2xlKCRkaXIsICRjb2xvciwgJGJhc2UsICRoZWlnaHQpIHtcbiAgJHRpcDogJGhlaWdodCBzb2xpZCAkY29sb3I7XG5cbiAgQGluY2x1ZGUgc3F1YXJlKCRiYXNlKTtcbiAgYm9yZGVyOiAkYmFzZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLSN7JGRpcn06IG5vbmU7IC8vIGJvcmRlciBjb25jZXJuZWQgZGlzYXBwZWFyXG4gIEBpZiAkZGlyID09ICd0b3AnIHtcbiAgICBib3JkZXItYm90dG9tOiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ2JvdHRvbScge1xuICAgIGJvcmRlci10b3A6ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAncmlnaHQnIHtcbiAgICBib3JkZXItbGVmdDogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdsZWZ0JyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdGlwO1xuICB9XG59XG5cbkBtaXhpbiBkcm9wLXNoYWRvdygkaXNJbnNldCwgJGhvciwgJHZlciwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuICBAaWYgJGlzSW5zZXQgPT0gdHJ1ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICB9IEBlbHNlIGlmICRpc0luc2V0ID09IGZhbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIGZsZXgtbGF5b3V0KCRoYXNXcmFwOiBub3dyYXAsICRqdXN0aWY6IGZsZXgtc3RhcnQsICRhbGlnbkNvbnRlbnQ6IHN0cmV0Y2gsICRhbGlnbkl0ZW1zOiBzdHJldGNoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogJGhhc1dyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZjtcbiAgYWxpZ24tY29udGVudDogJGFsaWduQ29udGVudDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQsICRjb2xvciwgJHJhZGl1cykge1xuICBib3JkZXItdG9wOiAkdG9wIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiAkcmlnaHQgc29saWQgJGNvbG9yO1xuICBib3JkZXItYm90dG9tOiAkYm90dG9tIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLWxlZnQ6ICRsZWZ0IHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbn1cblxuLy8gQU5JTVNcblxuQG1peGluIHRyYW5zZm9ybSgkdGFuc2Zvcm1hdGlvbikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1tb3otdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW1zLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1vLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIHRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wLCAkZHVyLCAkdGltaW5nLCAkZGVsYXksICRvdGhlcnMuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICB0cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xufVxuXG5AbWl4aW4gYnRuLWFuaW0oKSB7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCA1cHgsIDVweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTNweCkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cblxuLyoqXG4gKiBHZW5lcmFsXG4gKi9cblxuLy8gQ29udGFpbmVyXG5cbiVuby1wYWRkaW5nIHsgcGFkZGluZzogMDsgfVxuXG4lbm8tbWFyZ2luIHsgbWFyZ2luOiAwOyB9XG5cbiVibG9jay1jZW50cmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4lYmxvY2staGFsZi1jZW50cmVkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8vIEJvcmRlcnNcblxuJW5vLXJhZGl1cyB7IGJvcmRlci1yYWRpdXM6IDA7IH1cblxuJW5vLWJvcmRlciB7IGJvcmRlcjogMDsgfVxuXG4ldHJpYW5nbGVzLXBsdWdnZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAyNSU7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbiVidG4tZmlsdGVyIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGNvbG9yOiAkbGlnaHQ7XG59XG5cbiVidG4tZmlsdGVyLWFuaW0ge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVZKDEuMSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cbiIsIi8qKlxuICogQ29sb3Vyc1xuICovXG4vKipcbiAqIEZvbnRzXG4gKi9cbi8qKlxuICogSW1hZ2VzXG4gKi9cbi8qKlxuICogQ29udGFpbmVyc1xuICovXG4vKipcbiAqIE1peGluc1xuICovXG4vKipcbiAqIEdlbmVyYWxcbiAqL1xuLmdyaWQtdGFibGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgIzcwNzA3MDtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzcwNzA3MDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tdG9wOiAzcmVtOyB9XG4gIC5ncmlkLXRhYmxlIC5ncmlkLXRhYmxlLWhlYWRpbmdzIC5ncmlkLXRhYmxlLWNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmNjOTk7XG4gICAgY29sb3I6ICNmY2ZjZmM7XG4gICAgbWluLWhlaWdodDogMHB4OyB9XG4gIC5ncmlkLXRhYmxlIC5ncmlkLXRhYmxlLWNlbGwge1xuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjNzA3MDcwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCAjNzA3MDcwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAyMHJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07IH1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5ncmlkLXRhYmxlIHtcbiAgQGluY2x1ZGUgYm9yZGVyKDFweCwgMHB4LCAwcHgsIDFweCwgJGdyZXksIDBweCk7XG4gIG1hcmdpbi10b3A6ICRnYXAtbWQ7XG5cbiAgLmdyaWQtdGFibGUtaGVhZGluZ3Mge1xuICAgIC5ncmlkLXRhYmxlLWNlbGwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgICBjb2xvcjogJGxpZ2h0O1xuICAgICAgbWluLWhlaWdodDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5ncmlkLXRhYmxlLWNlbGwge1xuICAgIEBpbmNsdWRlIGJvcmRlcigwcHgsIDFweCwgMXB4LCAwcHgsICRncmV5LCAwcHgpO1xuICAgIG1pbi1oZWlnaHQ6IDIwcmVtO1xuICAgIHBhZGRpbmc6ICRnYXAtc207XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cookie-policy/cookie-policy.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/cookie-policy/cookie-policy.component.ts ***!
  \****************************************************************/
/*! exports provided: CookiePolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiePolicyComponent", function() { return CookiePolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CookiePolicyComponent = /** @class */ (function () {
    function CookiePolicyComponent() {
    }
    CookiePolicyComponent.prototype.ngOnInit = function () {
    };
    CookiePolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cookie-policy',
            template: __webpack_require__(/*! ./cookie-policy.component.html */ "./src/app/pages/cookie-policy/cookie-policy.component.html"),
            styles: [__webpack_require__(/*! ./cookie-policy.component.scss */ "./src/app/pages/cookie-policy/cookie-policy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CookiePolicyComponent);
    return CookiePolicyComponent;
}());



/***/ }),

/***/ "./src/app/pages/details/details.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/details/details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid wrap-details\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-5\">\n\n      <header class=\"wrap-img-txt\">\n        <figure>\n          <div class=\"img img-round\">\n            <img *ngIf=\"type === 'project'\" [src]=\"details.image\" [alt]=\"details.name\">\n            <img *ngIf=\"type === 'role'\" [src]=\"details.company.logo\" [alt]=\"details.company.name\">\n            <img *ngIf=\"type === 'diploma'\" [src]=\"details.school.image\" [alt]=\"details.school.name\">\n          </div>\n\n          <figcaption class=\"details-headings\">\n\n            <h2 *ngIf=\"!isConfidential()\">{{ details.name | translate }}</h2>\n            <h2 *ngIf=\"isConfidential()\">{{ details.confidentiality | translate }}</h2>\n\n            <h4>{{ details.category }}</h4>\n\n            <!-- If PROJECT -->\n            <h4 *ngIf=\"type === 'project' && details.company\">\n              <span class=\"content-prefix\">{{ 'as' | translate }}</span>&nbsp;\n              {{ details.company.role }}\n              <span class=\"content-prefix\">{{ 'at' | translate }}</span>&nbsp;\n              <a [href]=\"details.company.url\" target=\"_blank\">{{ details.company.name }}</a>\n            </h4>\n            <!-- If ROLE -->\n            <h4 *ngIf=\"type === 'role'\">\n              <span class=\"content-prefix\">{{ 'at' | translate }}</span>&nbsp;\n              <a [href]=\"details.company.url\" target=\"_blank\">{{ details.company.name }}</a>\n            </h4>\n            <!-- If DIPLOMA -->\n            <h4 *ngIf=\"type === 'diploma'\">\n              <span class=\"content-prefix\">{{ 'at' | translate }}</span>&nbsp;\n              <a [href]=\"details.school.url\" target=\"_blank\">{{ details.school.name }}</a>&nbsp;\n              <span class=\"content-prefix\" *ngIf=\"details.school.country != 'Online'\">{{ 'in' | translate }}</span>\n              {{ details.school.country }}\n            </h4>\n\n            <p class=\"wrap-dates text-center-xs\">\n              {{ details.dates.start | date : \"MMM yyyy\" }}\n              <span class=\"content-prefix\">{{ \"to\" | translate }}</span>\n              {{ (details.dates.end | date : \"MMM yyyy\") || (\"present\" | translate) }}\n            </p>\n          </figcaption>\n        </figure>\n      </header>\n\n      <main>\n        <p>{{ details.desc | translate }}</p>\n      </main>\n\n      <section class=\"btn-group--details\">\n        <a class=\"btn btn-primary\" [href]=\"details.url\" *ngIf=\"details.url\" target=\"_blank\">\n          {{ 'live' | translate }}\n        </a>\n        <a class=\"btn btn-primary\" [href]=\"details.github\" *ngIf=\"details.github\" target=\"_blank\">\n          Github\n        </a>\n      </section>\n\n\n      <!-- If DIPLOMA -->\n      <section class=\"img-group\" *ngIf=\"type === 'diploma'\">\n        <header class=\"header-sub\"><h5>{{ 'subjects' | translate }}</h5></header>\n\n        <ul>\n          <li class=\"label-bold\" *ngFor=\"let subject of details.subjects\" [hidden]=\"!subject.spe\">{{ subject.name }}</li>\n        </ul>\n        <ul>\n          <li *ngFor=\"let subject of details.subjects\" [hidden]=\"subject.spe\">{{ subject.name }}</li>\n        </ul>\n      </section>\n\n\n      <!-- If DIPLOMA OR ROLE -->\n      <section class=\"img-group\" *ngIf=\"type !== 'project' && details.projects\">\n        <header class=\"header-sub\"><h5>{{ 'projects' | translate }}</h5></header>\n\n        <figure\n          class=\"img-wrap\"\n          *ngFor=\"let project of details.projects\"\n          data-toggle=\"modal\"\n          data-target=\"#myModal\"\n          (click)=\"openProjectModal(project.id, 'project')\">\n          <span class=\"img img-round img-link\">\n              <img [src]=\"project.image\" [alt]=\"project.name\">\n          </span>\n          <figcaption class=\"img-label\">{{ project.name }}</figcaption>\n        </figure>\n      </section>\n\n\n      <!-- If PROJECT OR ROLE -->\n      <section class=\"img-group\" *ngIf=\"type !== 'diploma' && details.techs\">\n        <header class=\"header-sub\"><h5>{{ 'skills' | translate }}</h5></header>\n\n        <figure class=\"img-wrap\" *ngFor=\"let tech of details.techs\">\n          <img class=\"img img-float\" [src]=\"tech.logo\" [alt]=\"tech.name\">\n          <figcaption class=\"img-label\">{{ tech.name }}</figcaption>\n        </figure>\n      </section>\n\n    </div>\n\n\n    <div class=\"col-xs-12 col-md-7\" *ngIf=\"!isConfidential()\">\n\n      <section class=\"img-group\" *ngIf=\"details.gallery\">\n        <header class=\"header-sub\"><h5>{{ 'gallery' | translate }}</h5></header>\n        <div class=\"img-wrap\" *ngFor=\"let image of details.gallery\">\n          <figure\n            class=\"img img-gallery img-link\"\n            data-toggle=\"modal\"\n            data-target=\"#galleryModal\"\n            (click)=\"openImgModal(image)\">\n            <img [src]=\"image.image\" [alt]=\"image.alt\">\n          </figure>\n        </div>\n      </section>\n\n      <section class=\"btn-group--details\" *ngIf=\"details.prototypes\">\n        <header class=\"header-sub\"><h5>Prototypes</h5></header>\n        <a *ngFor=\"let prototype of details.prototypes\" [href]=\"prototype.url\" class=\"btn btn-primary\" target=\"_blank\">\n          {{ prototype.name }}\n        </a>\n      </section>\n\n      <section class=\"btn-group--details\" *ngIf=\"details.docs\">\n        <header class=\"header-sub\"><h5>Docs</h5></header>\n        <a *ngFor=\"let doc of details.docs\" [href]=\"doc.url\" class=\"btn btn-primary\" target=\"_blank\">\n          {{ doc.name }}\n        </a>\n      </section>\n\n    </div>\n\n    <div class=\"col-xs-12 col-md-7 wrap-confidential\" *ngIf=\"isConfidential()\">\n      <p>{{ 'confidential' | translate }}</p>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/details/details.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/details/details.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.btn, .btn-primary, .btn-font {\n  border: none;\n  border-radius: 0px; }\n.btn:focus, .btn-primary:focus, .btn-font:focus {\n    outline: none; }\n.btn:visited, .btn-primary:visited, .btn-font:visited {\n    color: #fcfcfc; }\n.btn-dark, .btn-primary, .btn-font {\n  background-color: #707070;\n  color: #fcfcfc; }\n.btn-dark:visited, .btn-primary:visited, .btn-font:visited {\n    background-color: #707070; }\n.btn-primary {\n  box-shadow: 3px 3px 3px 0px #707070;\n  transition: all 0.3s ease-in 0s;\n  min-width: 100px;\n  padding: 10px; }\n.btn-primary:hover, .btn-primary:active {\n    box-shadow: 5px 5px 3px 0px #707070;\n    -webkit-transform: translateX(-3px);\n    transform: translateX(-3px);\n    background-color: #66cc99; }\n.btn-font {\n  position: absolute;\n  top: auto;\n  right: 50px;\n  bottom: -35px;\n  left: auto;\n  box-shadow: 0px 3px 3px 0px #707070;\n  transition: all 0.3s ease-in 0s;\n  background-color: #707070;\n  font-size: 1rem;\n  padding: 2px 10px; }\n.btn-font:hover, .btn-font:focus {\n    color: #fcfcfc; }\n.btn-font:hover {\n    background-color: #575656; }\n.btn-font.selected {\n    background-color: #66cc99; }\n.btn-font .btn-label-big {\n    font-size: 1.8rem; }\n.btn-group-line .btn, .btn-group--details .btn, .btn-group-line .btn-primary, .btn-group--details .btn-primary, .btn-group-line .btn-font, .btn-group--details .btn-font {\n  margin: 10px; }\n@media screen and (max-width: 768px) {\n  .btn-group--jumbo .btn-primary {\n    margin: 10px auto; } }\n@media screen and (max-width: 500px) {\n  .btn-group--details,\n  .btn-group--jumbo {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: flex-start;\n    align-items: flex-start; }\n    .btn-group--details .btn, .btn-group--details .btn-primary, .btn-group--details .btn-font,\n    .btn-group--jumbo .btn,\n    .btn-group--jumbo .btn-primary,\n    .btn-group--jumbo .btn-font {\n      width: 100%; } }\n.img {\n  display: block; }\n.img-group {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start; }\n.img-group .img {\n    margin: 10px; }\n.img-float {\n  width: 75px;\n  height: 75px; }\n.img-brand {\n  width: 100px;\n  height: 100px; }\n.img-label {\n  transition: all 0.4s ease 0s;\n  font-size: 1rem;\n  font-weight: bold;\n  margin: auto;\n  opacity: 0;\n  text-align: center;\n  width: calc(75px + 15px); }\n.img-round, .img-round--sm, .img-round--big {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  box-shadow: 0px 3px 3px 0px #707070;\n  background-color: #fcfcfc;\n  padding: calc(100px / 4); }\n.img-round img, .img-round--sm img, .img-round--big img {\n    width: 50px;\n    height: 50px; }\n.img-round--sm {\n  border-radius: 50%;\n  width: 75px;\n  height: 75px;\n  padding: calc(50px / 4); }\n.img-round--sm img {\n    width: 50px;\n    height: 50px; }\n.img-round--big {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  padding: calc(100px / 4); }\n.img-round--big img {\n    width: 100px;\n    height: 100px; }\n.img-round--big + .img-label {\n    font-size: 1.6rem;\n    width: calc(150px + 15px); }\n.img-link {\n  transition: all 0.4s ease 0s;\n  cursor: pointer; }\n.img--flip {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1); }\n.img-wrap {\n  min-height: 150px; }\n.img-wrap:hover, .img-wrap:focus {\n    text-decoration: none; }\n.img-wrap:hover .img-link, .img-wrap:focus .img-link {\n      box-shadow: 0px 6px 6px 0px #707070;\n      -webkit-transform: translateY(-5px);\n      transform: translateY(-5px); }\n.img-wrap:hover .img-label, .img-wrap:focus .img-label {\n      opacity: 1; }\n/**\n  Media Queries\n */\n@media screen and (max-width: 768px) {\n  .img-group {\n    justify-content: center; } }\n@media screen and (max-width: 992px) {\n  .img-label {\n    opacity: 1; } }\n.wrap-details {\n  padding: 4.5rem; }\n.wrap-details .details-header {\n    display: flex; }\n.wrap-details .img-gallery {\n    box-shadow: 0px 3px 3px 0px #707070;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: center;\n    cursor: pointer;\n    height: 100px;\n    overflow: hidden; }\n.wrap-details .img-gallery img {\n      width: 100px; }\n.btn-group--details {\n  margin: 1.5rem auto; }\n.label-bold {\n  font-weight: bold; }\n/**\n  Media Queries\n */\n@media screen and (max-width: 768px) {\n  .wrap-details {\n    padding: 3rem; }\n  .wrap-img-txt .img-round, .wrap-img-txt .img-round--sm, .wrap-img-txt .img-round--big {\n    margin: auto auto 4.5rem;\n    float: none; }\n  .details-headings {\n    clear: both; }\n  .btn-group--details {\n    text-align: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fYnV0dG9ucy5zY3NzIiwiL1VzZXJzL2ZsaXBrYXJ0LzIwMTkvcG9ydGZvbGlvL3ZpbWFsa292YXRoLmdpdGh1Yi5pby9zcmMvYXBwL3RoZW1lL19pbWFnZXMuc2NzcyIsIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURZRjs7RUNURTtBRHNCRjs7RUNuQkU7QUQ2QkY7O0VDMUJFO0FEd0NGOztFQ3JDRTtBRHNKRjs7RUNuSkU7QUNqQkY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFGcEI7SUFLSSxhQUFhLEVBQUE7QUFMakI7SUFTSSxjRkNXLEVBQUE7QUVHZjtFQUNFLHlCRk5ZO0VFT1osY0ZMYSxFQUFBO0FFR2Y7SUFLSSx5QkZWVSxFQUFBO0FFY2Q7RUZrR0ksbUNBaEhVO0VBbUpaLCtCRWpJMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQU5mO0lGa0dJLG1DQWhIVTtJQXVJWixtQ0FpQm1DO0lBYm5DLDJCQWFtQztJQUNuQyx5QkE3SmUsRUFBQTtBRWdDakI7RUZ5Q0Usa0JFdEMwQjtFRnVDMUIsU0V2Q2dDO0VGd0NoQyxXRXhDc0M7RUZ5Q3RDLGFFekM2QztFRjBDN0MsVUUxQ21EO0VGaUZqRCxtQ0FoSFU7RUFtSlosK0JFbEgwQztFQUMxQyx5QkZsQ1k7RUVtQ1osZUZ6QmU7RUUwQmYsaUJBQWlCLEVBQUE7QUFSbkI7SUFZSSxjRnRDVyxFQUFBO0FFMEJmO0lBZ0JJLHlCQUFvQyxFQUFBO0FBaEJ4QztJQW9CSSx5QkZwRGEsRUFBQTtBRWdDakI7SUF3QkksaUJGdkNhLEVBQUE7QUUyQ2pCO0VBRUksWUFBWSxFQUFBO0FBSWhCO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQSxFQUNsQjtBQUdIO0VBQ0U7O0lGZ0RBLGFBQWE7SUFDYixlRS9DMkI7SUZnRDNCLHVCRWhEbUM7SUZpRG5DLHlCRWpEK0M7SUZrRC9DLHVCRWxEMkQsRUFBQTtJQUYzRDs7OztNQUlJLFdBQVcsRUFBQSxFQUNaO0FDbEZMO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VIeUhFLGFBQWE7RUFDYixlR3pIeUI7RUgwSHpCLDJCRzFIcUM7RUgySHJDLHlCRzNIaUQ7RUg0SGpELHVCRzVINkQsRUFBQTtBQUQvRDtJQUlJLFlBQVksRUFBQTtBQUloQjtFSHNERSxXQWpDWTtFQWtDWixZQWxDWSxFQUFBO0FHakJkO0VIa0RFLFlBaENjO0VBaUNkLGFBakNjLEVBQUE7QUdkaEI7RUh1SUUsNEJHdEl1QztFQUN2QyxlSEplO0VHS2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUErQixFQUFBO0FBSWpDO0VId0NFLGtCQUFrQjtFQUNsQixZQXRDYztFQXVDZCxhQXZDYztFQXNGWixtQ0FoSFU7RUcwQloseUJIeEJhO0VHeUJiLHdCQUErQixFQUFBO0FBSmpDO0lIbUNFLFdBbENXO0lBbUNYLFlBbkNXLEVBQUE7QUdVYjtFSDZCRSxrQkFBa0I7RUFDbEIsV0F2Q1k7RUF3Q1osWUF4Q1k7RUdZWix1QkFBNkIsRUFBQTtBQUgvQjtJSHdCRSxXQWxDVztJQW1DWCxZQW5DVyxFQUFBO0FHb0JiO0VIbUJFLGtCQUFrQjtFQUNsQixZQXJDYztFQXNDZCxhQXRDYztFR29CZCx3QkFBK0IsRUFBQTtBQUhqQztJSGNFLFlBaENjO0lBaUNkLGFBakNjLEVBQUE7QUdrQmhCO0lBVUksaUJIMUNjO0lHMkNkLHlCQUFnQyxFQUFBO0FBSXBDO0VId0ZFLDRCR3ZGdUM7RUFDdkMsZUFBZSxFQUFBO0FBR2pCO0VIdUVFLDZCR3RFNkI7RUgwRTdCLHFCRzFFNkIsRUFBQTtBQUcvQjtFQUNFLGlCQUFpQixFQUFBO0FBRG5CO0lBS0kscUJBQXFCLEVBQUE7QUFMekI7TUg0Q0ksbUNBaEhVO01BdUlaLG1DRzFEdUM7TUg4RHZDLDJCRzlEdUMsRUFBQTtBQVR6QztNQWFNLFVBQVUsRUFBQTtBQUtoQjs7RUYyR0U7QUV4R0Y7RUE3RkE7SUErRkksdUJBQXVCLEVBQUEsRUFDeEI7QUFHSDtFQW5GQTtJQXFGSSxVQUFVLEVBQUEsRUFDWDtBQ3RHSDtFQUNFLGVKeUNjLEVBQUE7QUkxQ2hCO0lBSUksYUFBYSxFQUFBO0FBSmpCO0lKb0hJLG1DQWhIVTtJQXFIWixhQUFhO0lBQ2IsZUlqSDJCO0lKa0gzQiwyQklsSHVDO0lKbUh2QyxzQkluSGdEO0lKb0hoRCxtQklwSHdEO0lBQ3RELGVBQWU7SUFDZixhSm1CWTtJSWxCWixnQkFBZ0IsRUFBQTtBQVpwQjtNQWVNLFlKZVUsRUFBQTtBSVZoQjtFQUVFLG1CQUFxQixFQUFBO0FBR3ZCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7O0VINE1FO0FHek1GO0VBaENBO0lBa0NJLGFKT1MsRUFBQTtFSUpYO0lBQ0Usd0JKSVk7SUlIWixXQUFXLEVBQUE7RUFHYjtJQUNFLFdBQVcsRUFBQTtFQXZCZjtJQTJCSSxrQkFBa0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29sb3Vyc1xuICovXG5cbiRwcmltYXJ5OiAjNjZjYzk5O1xuJHNlY29uZGFyeTogIzY2OTljYztcbiRhbHQ6ICM2MmIyYjA7XG4kZGFyazogIzMwMzAzMDtcbiRncmV5OiAjNzA3MDcwO1xuJGxpZ2h0LWdyZXk6ICNmMGYwZjA7XG4kbGlnaHQ6ICNmY2ZjZmM7XG4kYWxlcnQ6ICNkODc0NmE7XG4kaW5mbzogI2NjOWQxNDtcblxuLyoqXG4gKiBGb250c1xuICovXG5cbiRmb250LW1pY3JvOiAxcmVtO1xuJGZvbnQtc21hbGw6IDEuMnJlbTtcbiRmb250LWJhc2U6IDEuNnJlbTtcbiRmb250LWJpZzogMS44cmVtO1xuJGZvbnQtbWFjcm86IDIuMnJlbTtcbiRmb250LW1lZ2E6IDIuNnJlbTtcbiRmb250LWdpZ2E6IDNyZW07XG4kZm9udC10ZXJhOiA0cmVtO1xuXG4vKipcbiAqIEltYWdlc1xuICovXG5cbiRpbWctc206IDI1cHg7XG4kaW1nLW1kOiA1MHB4O1xuJGltZy1iaWc6IDc1cHg7XG4kaW1nLW1lZ2E6IDEwMHB4O1xuJGltZy1naWdhOiAxNTBweDtcblxuLyoqXG4gKiBDb250YWluZXJzXG4gKi9cblxuJGhlYWRlci1oZWlnaHQ6IDcuNXJlbTtcbiRjYXJkLWhlaWdodDogMjByZW07XG4kZ2FwLXNtOiAwLjVyZW07XG4kZ2FwLXJlZzogMS41cmVtO1xuJGdhcC1tZDogM3JlbTtcbiRnYXAtYmlnOiA0LjVyZW07XG4kZ2FwLW1lZ2E6IDZyZW07XG4kZ2FwLXRlcmE6IDQwdmg7XG4kcGFkZGluZy1zbTogMXJlbTtcblxuLyoqXG4gKiBNaXhpbnNcbiAqL1xuXG5AbWl4aW4gc3BlY2lhbC1mb250KCRzaXplLCAkY29sb3IpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGhpZ2hsaWdodCgkYmctY29sb3IsICRmb250LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmb250LWNvbG9yO1xufVxuXG5AbWl4aW4gc3F1YXJlKCR2YWx1ZSkge1xuICB3aWR0aDogJHZhbHVlO1xuICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIHJvdW5kKCR2YWx1ZSkge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAkdmFsdWU7XG4gIGhlaWdodDogJHZhbHVlO1xufVxuXG5AbWl4aW4gcG9zaXRpb24oJHR5cGUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcbiAgcG9zaXRpb246ICR0eXBlO1xuICB0b3A6ICR0b3A7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgbGVmdDogJGxlZnQ7XG59XG5cbi8vIGNlbnRlciB2ZXJ0aWNhbGx5XG5AbWl4aW4gdmVydGljYWwtYWxpZ24oJGhlaWdodCkge1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0IC8gMjtcbn1cblxuQG1peGluIGFuaW0tZHJvcGRvd24oJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZVkoJHZhbHVlKSk7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIHRyaWFuZ2xlKCRkaXIsICRjb2xvciwgJGJhc2UsICRoZWlnaHQpIHtcbiAgJHRpcDogJGhlaWdodCBzb2xpZCAkY29sb3I7XG5cbiAgQGluY2x1ZGUgc3F1YXJlKCRiYXNlKTtcbiAgYm9yZGVyOiAkYmFzZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLSN7JGRpcn06IG5vbmU7IC8vIGJvcmRlciBjb25jZXJuZWQgZGlzYXBwZWFyXG4gIEBpZiAkZGlyID09ICd0b3AnIHtcbiAgICBib3JkZXItYm90dG9tOiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ2JvdHRvbScge1xuICAgIGJvcmRlci10b3A6ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAncmlnaHQnIHtcbiAgICBib3JkZXItbGVmdDogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdsZWZ0JyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdGlwO1xuICB9XG59XG5cbkBtaXhpbiBkcm9wLXNoYWRvdygkaXNJbnNldCwgJGhvciwgJHZlciwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuICBAaWYgJGlzSW5zZXQgPT0gdHJ1ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICB9IEBlbHNlIGlmICRpc0luc2V0ID09IGZhbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIGZsZXgtbGF5b3V0KCRoYXNXcmFwOiBub3dyYXAsICRqdXN0aWY6IGZsZXgtc3RhcnQsICRhbGlnbkNvbnRlbnQ6IHN0cmV0Y2gsICRhbGlnbkl0ZW1zOiBzdHJldGNoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogJGhhc1dyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZjtcbiAgYWxpZ24tY29udGVudDogJGFsaWduQ29udGVudDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQsICRjb2xvciwgJHJhZGl1cykge1xuICBib3JkZXItdG9wOiAkdG9wIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiAkcmlnaHQgc29saWQgJGNvbG9yO1xuICBib3JkZXItYm90dG9tOiAkYm90dG9tIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLWxlZnQ6ICRsZWZ0IHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbn1cblxuLy8gQU5JTVNcblxuQG1peGluIHRyYW5zZm9ybSgkdGFuc2Zvcm1hdGlvbikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1tb3otdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW1zLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1vLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIHRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wLCAkZHVyLCAkdGltaW5nLCAkZGVsYXksICRvdGhlcnMuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICB0cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xufVxuXG5AbWl4aW4gYnRuLWFuaW0oKSB7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCA1cHgsIDVweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTNweCkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cblxuLyoqXG4gKiBHZW5lcmFsXG4gKi9cblxuLy8gQ29udGFpbmVyXG5cbiVuby1wYWRkaW5nIHsgcGFkZGluZzogMDsgfVxuXG4lbm8tbWFyZ2luIHsgbWFyZ2luOiAwOyB9XG5cbiVibG9jay1jZW50cmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4lYmxvY2staGFsZi1jZW50cmVkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8vIEJvcmRlcnNcblxuJW5vLXJhZGl1cyB7IGJvcmRlci1yYWRpdXM6IDA7IH1cblxuJW5vLWJvcmRlciB7IGJvcmRlcjogMDsgfVxuXG4ldHJpYW5nbGVzLXBsdWdnZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAyNSU7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbiVidG4tZmlsdGVyIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGNvbG9yOiAkbGlnaHQ7XG59XG5cbiVidG4tZmlsdGVyLWFuaW0ge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVZKDEuMSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cbiIsIi8qKlxuICogQ29sb3Vyc1xuICovXG4vKipcbiAqIEZvbnRzXG4gKi9cbi8qKlxuICogSW1hZ2VzXG4gKi9cbi8qKlxuICogQ29udGFpbmVyc1xuICovXG4vKipcbiAqIE1peGluc1xuICovXG4vKipcbiAqIEdlbmVyYWxcbiAqL1xuLmJ0biwgLmJ0bi1wcmltYXJ5LCAuYnRuLWZvbnQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDsgfVxuICAuYnRuOmZvY3VzLCAuYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4tZm9udDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAuYnRuOnZpc2l0ZWQsIC5idG4tcHJpbWFyeTp2aXNpdGVkLCAuYnRuLWZvbnQ6dmlzaXRlZCB7XG4gICAgY29sb3I6ICNmY2ZjZmM7IH1cblxuLmJ0bi1kYXJrLCAuYnRuLXByaW1hcnksIC5idG4tZm9udCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG4gIGNvbG9yOiAjZmNmY2ZjOyB9XG4gIC5idG4tZGFyazp2aXNpdGVkLCAuYnRuLXByaW1hcnk6dmlzaXRlZCwgLmJ0bi1mb250OnZpc2l0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7IH1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMTBweDsgfVxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTphY3RpdmUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgLW1vei1ib3gtc2hhZG93OiA1cHggNXB4IDNweCAwcHggIzcwNzA3MDtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCAwcHggIzcwNzA3MDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2Y2M5OTsgfVxuXG4uYnRuLWZvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogLTM1cHg7XG4gIGxlZnQ6IGF1dG87XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMnB4IDEwcHg7IH1cbiAgLmJ0bi1mb250OmhvdmVyLCAuYnRuLWZvbnQ6Zm9jdXMge1xuICAgIGNvbG9yOiAjZmNmY2ZjOyB9XG4gIC5idG4tZm9udDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3NTY1NjsgfVxuICAuYnRuLWZvbnQuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmNjOTk7IH1cbiAgLmJ0bi1mb250IC5idG4tbGFiZWwtYmlnIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTsgfVxuXG4uYnRuLWdyb3VwLWxpbmUgLmJ0biwgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLCAuYnRuLWdyb3VwLWxpbmUgLmJ0bi1wcmltYXJ5LCAuYnRuLWdyb3VwLS1kZXRhaWxzIC5idG4tcHJpbWFyeSwgLmJ0bi1ncm91cC1saW5lIC5idG4tZm9udCwgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLWZvbnQge1xuICBtYXJnaW46IDEwcHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1wcmltYXJ5IHtcbiAgICBtYXJnaW46IDEwcHggYXV0bzsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5idG4tZ3JvdXAtLWRldGFpbHMsXG4gIC5idG4tZ3JvdXAtLWp1bWJvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLCAuYnRuLWdyb3VwLS1kZXRhaWxzIC5idG4tcHJpbWFyeSwgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLWZvbnQsXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bixcbiAgICAuYnRuLWdyb3VwLS1qdW1ibyAuYnRuLXByaW1hcnksXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1mb250IHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuLmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5pbWctZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cbiAgLmltZy1ncm91cCAuaW1nIHtcbiAgICBtYXJnaW46IDEwcHg7IH1cblxuLmltZy1mbG9hdCB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7IH1cblxuLmltZy1icmFuZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDsgfVxuXG4uaW1nLWxhYmVsIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IGF1dG87XG4gIG9wYWNpdHk6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoNzVweCArIDE1cHgpOyB9XG5cbi5pbWctcm91bmQsIC5pbWctcm91bmQtLXNtLCAuaW1nLXJvdW5kLS1iaWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIHBhZGRpbmc6IGNhbGMoMTAwcHggLyA0KTsgfVxuICAuaW1nLXJvdW5kIGltZywgLmltZy1yb3VuZC0tc20gaW1nLCAuaW1nLXJvdW5kLS1iaWcgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7IH1cblxuLmltZy1yb3VuZC0tc20ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHBhZGRpbmc6IGNhbGMoNTBweCAvIDQpOyB9XG4gIC5pbWctcm91bmQtLXNtIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4OyB9XG5cbi5pbWctcm91bmQtLWJpZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiBjYWxjKDEwMHB4IC8gNCk7IH1cbiAgLmltZy1yb3VuZC0tYmlnIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7IH1cbiAgLmltZy1yb3VuZC0tYmlnICsgLmltZy1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgd2lkdGg6IGNhbGMoMTUwcHggKyAxNXB4KTsgfVxuXG4uaW1nLWxpbmsge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uaW1nLS1mbGlwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTsgfVxuXG4uaW1nLXdyYXAge1xuICBtaW4taGVpZ2h0OiAxNTBweDsgfVxuICAuaW1nLXdyYXA6aG92ZXIsIC5pbWctd3JhcDpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgLmltZy13cmFwOmhvdmVyIC5pbWctbGluaywgLmltZy13cmFwOmZvY3VzIC5pbWctbGluayB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA2cHggNnB4IDBweCAjNzA3MDcwO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggNnB4IDZweCAwcHggIzcwNzA3MDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IDBweCAjNzA3MDcwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbiAgICAuaW1nLXdyYXA6aG92ZXIgLmltZy1sYWJlbCwgLmltZy13cmFwOmZvY3VzIC5pbWctbGFiZWwge1xuICAgICAgb3BhY2l0eTogMTsgfVxuXG4vKipcbiAgTWVkaWEgUXVlcmllc1xuICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW1nLWdyb3VwIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5pbWctbGFiZWwge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4ud3JhcC1kZXRhaWxzIHtcbiAgcGFkZGluZzogNC41cmVtOyB9XG4gIC53cmFwLWRldGFpbHMgLmRldGFpbHMtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC53cmFwLWRldGFpbHMgLmltZy1nYWxsZXJ5IHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLndyYXAtZGV0YWlscyAuaW1nLWdhbGxlcnkgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDBweDsgfVxuXG4uYnRuLWdyb3VwLS1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxLjVyZW0gYXV0bzsgfVxuXG4ubGFiZWwtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi8qKlxuICBNZWRpYSBRdWVyaWVzXG4gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwLWRldGFpbHMge1xuICAgIHBhZGRpbmc6IDNyZW07IH1cbiAgLndyYXAtaW1nLXR4dCAuaW1nLXJvdW5kLCAud3JhcC1pbWctdHh0IC5pbWctcm91bmQtLXNtLCAud3JhcC1pbWctdHh0IC5pbWctcm91bmQtLWJpZyB7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gNC41cmVtO1xuICAgIGZsb2F0OiBub25lOyB9XG4gIC5kZXRhaWxzLWhlYWRpbmdzIHtcbiAgICBjbGVhcjogYm90aDsgfVxuICAuYnRuLWdyb3VwLS1kZXRhaWxzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxuIiwiLmJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAkbGlnaHQ7XG4gIH1cbn1cblxuLmJ0bi1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGNvbG9yOiAkbGlnaHQ7XG5cbiAgJjp2aXNpdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBAZXh0ZW5kIC5idG47XG4gIEBleHRlbmQgLmJ0bi1kYXJrO1xuICBAaW5jbHVkZSBkcm9wLXNoYWRvdyhmYWxzZSwgM3B4LCAzcHgsIDNweCwgMHB4LCAkZ3JleSk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjNzLCBlYXNlLWluLCAwcyk7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgJjpob3ZlcixcbiAgJjphY3RpdmUge1xuICAgIEBpbmNsdWRlIGJ0bi1hbmltKCk7XG4gIH1cbn1cblxuLmJ0bi1mb250IHtcbiAgQGV4dGVuZCAuYnRuO1xuICBAZXh0ZW5kIC5idG4tZGFyaztcbiAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsIGF1dG8sIDUwcHgsIC0zNXB4LCBhdXRvKTtcbiAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDBweCwgM3B4LCAzcHgsIDBweCwgJGdyZXkpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC4zcywgZWFzZS1pbiwgMHMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgZm9udC1zaXplOiAkZm9udC1taWNybztcbiAgcGFkZGluZzogMnB4IDEwcHg7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRsaWdodDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZ3JleSwgMTAlKTtcbiAgfVxuXG4gICYuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICB9XG5cbiAgLmJ0bi1sYWJlbC1iaWcge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtYmlnO1xuICB9XG59XG5cbi5idG4tZ3JvdXAtbGluZSB7XG4gIC5idG4ge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnRuLWdyb3VwLS1qdW1ibyAuYnRuLXByaW1hcnkge1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5idG4tZ3JvdXAtLWRldGFpbHMsXG4gIC5idG4tZ3JvdXAtLWp1bWJvIHtcbiAgICBAaW5jbHVkZSBmbGV4LWxheW91dCh3cmFwLCBjZW50ZXIsIGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQpO1xuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCIuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWctZ3JvdXAge1xuICBAaW5jbHVkZSBmbGV4LWxheW91dCh3cmFwLCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0KTtcblxuICAuaW1nIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuLmltZy1mbG9hdCB7XG4gIEBpbmNsdWRlIHNxdWFyZSgkaW1nLWJpZyk7XG59XG5cbi5pbWctYnJhbmQge1xuICBAaW5jbHVkZSBzcXVhcmUoJGltZy1tZWdhKTtcbn1cblxuLmltZy1sYWJlbCB7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjRzLCBlYXNlLCAwcyk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtbWljcm87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IGF1dG87XG4gIG9wYWNpdHk6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoI3skaW1nLWJpZ30gKyAxNXB4KTtcbn1cblxuLy8gUm91bmRlZCBjb250YWluZSBmb3IgaW1hZ2VzXG4uaW1nLXJvdW5kIHtcbiAgQGluY2x1ZGUgcm91bmQoJGltZy1tZWdhKTtcbiAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDBweCwgM3B4LCAzcHgsIDBweCwgJGdyZXkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG4gIHBhZGRpbmc6IGNhbGMoI3skaW1nLW1lZ2F9IC8gNCk7XG5cbiAgaW1nIHtcbiAgICBAaW5jbHVkZSBzcXVhcmUoJGltZy1tZCk7XG4gIH1cbn1cblxuLmltZy1yb3VuZC0tc20ge1xuICBAZXh0ZW5kIC5pbWctcm91bmQ7XG4gIEBpbmNsdWRlIHJvdW5kKCRpbWctYmlnKTtcbiAgcGFkZGluZzogY2FsYygjeyRpbWctbWR9IC8gNCk7XG5cbiAgaW1nIHtcbiAgICBAaW5jbHVkZSBzcXVhcmUoJGltZy1tZCk7XG4gIH1cbn1cblxuLmltZy1yb3VuZC0tYmlnIHtcbiAgQGV4dGVuZCAuaW1nLXJvdW5kO1xuICBAaW5jbHVkZSByb3VuZCgkaW1nLWdpZ2EpO1xuICBwYWRkaW5nOiBjYWxjKCN7JGltZy1tZWdhfSAvIDQpO1xuXG4gIGltZyB7XG4gICAgQGluY2x1ZGUgc3F1YXJlKCRpbWctbWVnYSk7XG4gIH1cblxuICArIC5pbWctbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtYmFzZTtcbiAgICB3aWR0aDogY2FsYygjeyRpbWctZ2lnYX0gKyAxNXB4KTtcbiAgfVxufVxuXG4uaW1nLWxpbmsge1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40cywgZWFzZSwgMHMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWctLWZsaXAge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVYKC0xKSk7XG59XG5cbi5pbWctd3JhcCB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIC5pbWctbGluayB7XG4gICAgICBAaW5jbHVkZSBkcm9wLXNoYWRvdyhmYWxzZSwgMHB4LCA2cHgsIDZweCwgMHB4LCAkZ3JleSk7XG4gICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNXB4KSk7XG4gICAgfVxuXG4gICAgLmltZy1sYWJlbCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAgTWVkaWEgUXVlcmllc1xuICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW1nLWdyb3VwIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW1nLWxhYmVsIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnYnV0dG9ucyc7XG5AaW1wb3J0ICdpbWFnZXMnO1xuXG4ud3JhcC1kZXRhaWxzIHtcbiAgcGFkZGluZzogJGdhcC1iaWc7XG5cbiAgLmRldGFpbHMtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmltZy1nYWxsZXJ5IHtcbiAgICBAaW5jbHVkZSBkcm9wLXNoYWRvdyhmYWxzZSwgMHB4LCAzcHgsIDNweCwgMHB4LCAkZ3JleSk7XG4gICAgQGluY2x1ZGUgZmxleC1sYXlvdXQod3JhcCwgZmxleC1zdGFydCwgc3RyZXRjaCwgY2VudGVyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAkaW1nLW1lZ2E7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogJGltZy1tZWdhO1xuICAgIH1cbiAgfVxufVxuXG4uYnRuLWdyb3VwLS1kZXRhaWxzIHtcbiAgQGV4dGVuZCAuYnRuLWdyb3VwLWxpbmU7XG4gIG1hcmdpbjogJGdhcC1yZWcgYXV0bztcbn1cblxuLmxhYmVsLWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyoqXG4gIE1lZGlhIFF1ZXJpZXNcbiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXAtZGV0YWlscyB7XG4gICAgcGFkZGluZzogJGdhcC1tZDtcbiAgfVxuXG4gIC53cmFwLWltZy10eHQgLmltZy1yb3VuZCB7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gJGdhcC1iaWc7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICAuZGV0YWlscy1oZWFkaW5ncyB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cblxuICAuYnRuLWdyb3VwLS1kZXRhaWxzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/details/details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/modal/modal.service */ "./src/app/providers/modal/modal.service.ts");
/* harmony import */ var _providers_resolve_by_id_resolve_by_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/resolve-by-id/resolve-by-id.service */ "./src/app/providers/resolve-by-id/resolve-by-id.service.ts");
/* harmony import */ var _providers_header_title_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/header-title/header-title.service */ "./src/app/providers/header-title/header-title.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, modalService, resolveByIdService, headerTitleService) {
        var _this = this;
        this.route = route;
        this.modalService = modalService;
        this.resolveByIdService = resolveByIdService;
        this.headerTitleService = headerTitleService;
        // We get the id and the type from the selected item
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
        });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        // Compare the id passed from previous page with id of all the objects in the collection
        this.details = this.resolveByIdService.resolveById(this.id, this.type);
        this.headerTitleService.setTitle('Details');
    };
    /**
     * Open modal for a project
     * values passed will be used to be resolved in modalService and return the relevant project
     *
     * @param {string} id
     * @param {string} type
     */
    DetailsComponent.prototype.openProjectModal = function (id, type) {
        this.typeModal = type;
        this.bsModalRef = this.modalService.openModal(id, type);
    };
    DetailsComponent.prototype.openImgModal = function (image) {
        this.bsModalRef = this.modalService.openImgModal(image);
    };
    /**
     * Galleries, Docs and Prototypes are not visible if project is confidential
     *
     * @returns {any}
     */
    DetailsComponent.prototype.isConfidential = function () {
        var confidentialInfo = ['#project15', '#project14', '#project13', '#project12', '#project11', '#project10'];
        for (var _i = 0, confidentialInfo_1 = confidentialInfo; _i < confidentialInfo_1.length; _i++) {
            var confidential = confidentialInfo_1[_i];
            if (this.details.id === confidential) {
                return true;
            }
        }
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/pages/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/pages/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _providers_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            _providers_resolve_by_id_resolve_by_id_service__WEBPACK_IMPORTED_MODULE_3__["ResolveByIdService"],
            _providers_header_title_header_title_service__WEBPACK_IMPORTED_MODULE_4__["HeaderTitleService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/education/education.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/education/education.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-stretch\">\n\n  <!-- Filter by category -->\n  <section class=\"container-filters\">\n    <!-- If res over xs -->\n    <div class=\"btn-group btn-group-justified wrap-switch\">\n      <div class=\"btn-group btn-group--filters\">\n        <button class=\"btn\" (click)=\"category = 'overview'\" [class.selected]=\"isSelected('overview')\">Overview</button>\n      </div>\n      <div class=\"btn-group btn-group--filters\">\n        <button class=\"btn\" (click)=\"category = 'codeschool'\" [class.selected]=\"isSelected('codeschool')\">Online school</button>\n      </div>\n    </div>\n  </section>\n\n  <main [ngSwitch]=\"category\">\n\n    <!-- *** ACADEMIC *** -->\n    <section class=\"row container-dual\">\n\n      <!-- LIST -->\n      <app-list-preview\n        class=\"col-xs-12 col-sm-4 container-select\"\n        [objects]=\"diplomas\"\n        [type]=\"'diploma'\"\n        (focusedItem)=\"focusItem($event)\"\n        *ngSwitchCase=\"'overview'\">\n      </app-list-preview>\n\n      <!-- PREVIEW -->\n      <app-preview\n        class=\"col-xs-8 container-preview hidden-xs\"\n        *ngIf=\"category === 'overview'\"\n        [focusedItem]=\"focusedItem\"\n        [type]=\"'diploma'\">\n      </app-preview>\n    </section>\n\n    <!-- *** CERTIFS *** -->\n    <section class=\"container\" *ngSwitchCase=\"'codeschool'\">\n\n      <article class=\"jumbotron wrap-jumbo--sm\">\n        <app-profile-cs class=\"row\" [profile]=\"csProfile\" [certifs]=\"csCertifs\"></app-profile-cs>\n      </article>\n\n      <section class=\"row container wrap-center\">\n        <app-card class=\"col-xs-12 col-sm-4 col-md-3\" *ngFor=\"let certif of csCertifs\" [object]=\"certif\"></app-card>\n      </section>\n\n    </section>\n\n  </main>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/education/education.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/education/education.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/education/education.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/education/education.component.ts ***!
  \********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_diploma_diploma_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/diploma/diploma.service */ "./src/app/providers/diploma/diploma.service.ts");
/* harmony import */ var _providers_codeschool_codeschool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/codeschool/codeschool.service */ "./src/app/providers/codeschool/codeschool.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services


var EducationComponent = /** @class */ (function () {
    function EducationComponent(diplomaService, codeschoolService) {
        this.diplomaService = diplomaService;
        this.codeschoolService = codeschoolService;
        this.category = 'overview';
    }
    EducationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Diplomas
        this.diplomas = this.diplomaService.getDiplomas();
        this.category = 'overview';
        // Certifs
        this.codeschoolService.getCodeschoolProfile()
            .subscribe(function (data) {
            _this.csCertifs = data.courses.completed,
                _this.csProfile = data.user;
        }, console.error, function () { });
    };
    /**
     * Detect hovered item
     *
     * @param itemHovered
     */
    EducationComponent.prototype.focusItem = function (itemHovered) {
        // focus will refer to the id of the selected item
        this.focusedItem = itemHovered;
    };
    /**
     * Check if this category is the selected one to highlight it
     *
     * @param categoryActive
     * @returns {boolean}
     */
    EducationComponent.prototype.isSelected = function (categoryActive) {
        return categoryActive === this.category;
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/pages/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/pages/education/education.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_diploma_diploma_service__WEBPACK_IMPORTED_MODULE_1__["DiplomaService"],
            _providers_codeschool_codeschool_service__WEBPACK_IMPORTED_MODULE_2__["CodeschoolService"]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/pages/education/profile-cs/profile-cs.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/education/profile-cs/profile-cs.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<figure class=\"col-xs-12 col-sm-4 img-jumbo\">\n  <img [src]=\"profile.organism.image\">\n</figure>\n\n<section class=\"col-xs-12 col-sm-8 content-jumbo\">\n\n  <header>\n    <h2>Report card</h2>\n    <h4>ID: {{ profile.username }}</h4>\n  </header>\n\n  <p>{{ profile.total_score }} points</p>\n  <p>Courses completed: {{ certifs.length }}</p>\n  <p>Since {{ profile.member_since | date: \"dd/MM/yyyy\"}}</p>\n\n</section>\n\n<footer class=\"col-xs-12 btn-jumbo\">\n  <a class=\"btn btn-primary\" [href]=\"profile.organism.url\" target=\"_blank\" role=\"button\">{{ \"more\" | translate }}</a>\n</footer>\n"

/***/ }),

/***/ "./src/app/pages/education/profile-cs/profile-cs.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/education/profile-cs/profile-cs.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkdWNhdGlvbi9wcm9maWxlLWNzL3Byb2ZpbGUtY3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/education/profile-cs/profile-cs.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/education/profile-cs/profile-cs.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileCsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCsComponent", function() { return ProfileCsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileCsComponent = /** @class */ (function () {
    function ProfileCsComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileCsComponent.prototype, "profile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileCsComponent.prototype, "certifs", void 0);
    ProfileCsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-cs',
            template: __webpack_require__(/*! ./profile-cs.component.html */ "./src/app/pages/education/profile-cs/profile-cs.component.html"),
            styles: [__webpack_require__(/*! ./profile-cs.component.scss */ "./src/app/pages/education/profile-cs/profile-cs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileCsComponent);
    return ProfileCsComponent;
}());



/***/ }),

/***/ "./src/app/pages/experience/experience.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/experience/experience.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-stretch\">\n  <app-filters [page]=\"'experience'\" (selectFilter)=\"filterFor($event)\"></app-filters>\n\n  <main class=\"row container-dual\">\n    <!-- LIST -->\n    <app-list-preview\n      class=\"col-xs-12 col-sm-4 container-select block-center-xs\"\n      [objects]=\"roles\"\n      [type]=\"'role'\"\n      [filterValue]=\"filterValue\"\n      (focusedItem)=\"focusItem($event)\">\n    </app-list-preview>\n\n    <!-- PREVIEW -->\n    <app-preview class=\"col-xs-8 container-preview hidden-xs\" [focusedItem]=\"focusedItem\" [type]=\"'role'\"></app-preview>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/experience/experience.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/experience/experience.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/experience/experience.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.ts ***!
  \**********************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_role_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/role/role.service */ "./src/app/providers/role/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(roleService) {
        this.roleService = roleService;
        this.filterValue = '';
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.roles = this.roleService.getRoles();
    };
    /**
     * Detect hovered item
     *
     * @param itemHovered
     */
    ExperienceComponent.prototype.focusItem = function (itemHovered) {
        // focus will refer to the id of the selected item
        this.focusedItem = itemHovered;
    };
    /**
     * Capture the filter selected in filters component
     * Will be passed to list items component
     *
     * @param filter
     */
    ExperienceComponent.prototype.filterFor = function (filter) {
        this.filterValue = filter;
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/pages/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/pages/experience/experience.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_role_role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-home\">\n\n  <main id=\"home-intro\" class=\"container jumbotron wrap-jumbo\">\n    <app-profile [profile]=\"profile\"></app-profile>\n  </main>\n\n  <section class=\"container-fluid\">\n    <div class=\"img-group\">\n      <header class=\"header-sub\"><h2>{{ 'homeTitle0' | translate }}</h2></header>\n\n      <figure class=\"img-wrap\" *ngFor=\"let project of projects\" [hidden]=\"project.client === null || !project.client?.featured\">\n        <a class=\"img img-round--big img-link\" [href]=\"project.url\" *ngIf=\"!project.confidentiality\" target=\"_blank\">\n          <img [src]=\"project.client?.logo\" [alt]=\"project.client?.name\">\n        </a>\n        <span class=\"img img-round--big\" *ngIf=\"project.confidentiality\">\n        <img [src]=\"project.client?.logo\" [alt]=\"project.client?.name\">\n      </span>\n\n        <figcaption class=\"img-label\">\n          <span *ngIf=\"!project.confidentiality\">{{ project.client?.name | translate }}</span>\n          <span *ngIf=\"project.confidentiality\">{{ project.confidentiality | translate }}</span>\n        </figcaption>\n      </figure>\n    </div>\n  </section>\n\n  <section class=\"wrap-articles\">\n\n    <article id=\"about-experiences\" class=\"container jumbotron wrap-jumbo\">\n      <div class=\"row\">\n\n        <section class=\"content-jumbo col-xs-12 col-sm-8\">\n          <header><h2>{{ 'homeTitle2' | translate }}</h2></header>\n\n          <p>{{ 'homeText4' | translate }}</p>\n        </section>\n\n        <figure class=\"col-xs-12 col-sm-4 img-jumbo\">\n          <img [src]=\"profile.images.experiences\">\n        </figure>\n\n        <footer class=\"col-xs-12 btn-group btn-group--jumbo\">\n          <a class=\"btn btn-primary\" [routerLink]=\"['../experience']\">{{ 'more-info' | translate }}</a>\n        </footer>\n\n      </div>\n    </article>\n\n    <article id=\"home-contact\" class=\"container jumbotron wrap-jumbo\">\n      <div class=\"row\">\n\n        <div class=\"content-jumbo col-xs-12 col-sm-8\">\n          <header><h2>{{ 'homeTitle3' | translate }}</h2></header>\n\n          <p>{{ 'homeText5' | translate }}</p>\n\n          <footer class=\"img-group\">\n            <figure class=\"img-wrap\">\n              <a class=\"img img-round img-link\" href=\"https://www.linkedin.com/in/vimal-kovath-88790483/\" target=\"_blank\">\n                <img src=\"assets/img/svg/socials/linkedin.svg\" alt=\"LinkedIn icon\">\n              </a>\n              <figcaption class=\"img-label\">Linkedin</figcaption>\n            </figure>\n\n            <figure class=\"img-wrap\">\n              <a class=\"img img-round img-link\" [href]=\"profile.email\">\n                <img [src]=\"profile.images.email\" alt=\"Gmail icon\">\n              </a>\n              <figcaption class=\"img-label\">Email</figcaption>\n            </figure>\n          </footer>\n        </div>\n\n        <figure class=\"col-xs-12 col-sm-4 img-jumbo\">\n          <img [src]=\"profile.images.place\">\n        </figure>\n\n      </div>\n    </article>\n\n  </section>\n\n  <section class=\"container\">\n    <div class=\"img-group\">\n      <header class=\"header-sub\"><h2>{{ 'homeTitle1' | translate }}</h2></header>\n\n      <figure class=\"img-wrap\" *ngFor=\"let skill of skills\" [hidden]=\"!skill.featured || !skill.frequent\">\n        <img class=\"img img-float\" [src]=\"skill.image\" [alt]=\"skill.name\">\n        <figcaption class=\"img-label\">{{ skill.name }}</figcaption>\n      </figure>\n    </div>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.img {\n  display: block; }\n.img-group {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start; }\n.img-group .img {\n    margin: 10px; }\n.img-float {\n  width: 75px;\n  height: 75px; }\n.img-brand {\n  width: 100px;\n  height: 100px; }\n.img-label {\n  transition: all 0.4s ease 0s;\n  font-size: 1rem;\n  font-weight: bold;\n  margin: auto;\n  opacity: 0;\n  text-align: center;\n  width: calc(75px + 15px); }\n.img-round, .img-round--sm, .img-round--big {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  box-shadow: 0px 3px 3px 0px #707070;\n  background-color: #fcfcfc;\n  padding: calc(100px / 4); }\n.img-round img, .img-round--sm img, .img-round--big img {\n    width: 50px;\n    height: 50px; }\n.img-round--sm {\n  border-radius: 50%;\n  width: 75px;\n  height: 75px;\n  padding: calc(50px / 4); }\n.img-round--sm img {\n    width: 50px;\n    height: 50px; }\n.img-round--big {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  padding: calc(100px / 4); }\n.img-round--big img {\n    width: 100px;\n    height: 100px; }\n.img-round--big + .img-label {\n    font-size: 1.6rem;\n    width: calc(150px + 15px); }\n.img-link {\n  transition: all 0.4s ease 0s;\n  cursor: pointer; }\n.img--flip {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1); }\n.img-wrap {\n  min-height: 150px; }\n.img-wrap:hover, .img-wrap:focus {\n    text-decoration: none; }\n.img-wrap:hover .img-link, .img-wrap:focus .img-link {\n      box-shadow: 0px 6px 6px 0px #707070;\n      -webkit-transform: translateY(-5px);\n      transform: translateY(-5px); }\n.img-wrap:hover .img-label, .img-wrap:focus .img-label {\n      opacity: 1; }\n/**\n  Media Queries\n */\n@media screen and (max-width: 768px) {\n  .img-group {\n    justify-content: center; } }\n@media screen and (max-width: 992px) {\n  .img-label {\n    opacity: 1; } }\n.wrap-home .img-group {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: flex-start;\n  align-items: flex-start;\n  margin: auto;\n  width: 75%; }\n.wrap-home .img-group .img-wrap {\n    margin: auto 4.5rem; }\n.wrap-home .jumbotron .img-group {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start;\n  margin: auto 0px 1.5rem; }\n.wrap-home .jumbotron .img-group .img-wrap {\n    margin: auto 1.5rem auto 0px; }\n@media screen and (max-width: 768px) {\n  .wrap-home .jumbotron .img-group {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: flex-start;\n    align-items: flex-start;\n    margin: auto auto 1.5rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9faW1hZ2VzLnNjc3MiLCIvVXNlcnMvZmxpcGthcnQvMjAxOS9wb3J0Zm9saW8vdmltYWxrb3ZhdGguZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FEWUY7O0VDVEU7QURzQkY7O0VDbkJFO0FENkJGOztFQzFCRTtBRHdDRjs7RUNyQ0U7QURzSkY7O0VDbkpFO0FDakJGO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VGeUhFLGFBQWE7RUFDYixlRXpIeUI7RUYwSHpCLDJCRTFIcUM7RUYySHJDLHlCRTNIaUQ7RUY0SGpELHVCRTVINkQsRUFBQTtBQUQvRDtJQUlJLFlBQVksRUFBQTtBQUloQjtFRnNERSxXQWpDWTtFQWtDWixZQWxDWSxFQUFBO0FFakJkO0VGa0RFLFlBaENjO0VBaUNkLGFBakNjLEVBQUE7QUVkaEI7RUZ1SUUsNEJFdEl1QztFQUN2QyxlRkplO0VFS2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUErQixFQUFBO0FBSWpDO0VGd0NFLGtCQUFrQjtFQUNsQixZQXRDYztFQXVDZCxhQXZDYztFQXNGWixtQ0FoSFU7RUUwQloseUJGeEJhO0VFeUJiLHdCQUErQixFQUFBO0FBSmpDO0lGbUNFLFdBbENXO0lBbUNYLFlBbkNXLEVBQUE7QUVVYjtFRjZCRSxrQkFBa0I7RUFDbEIsV0F2Q1k7RUF3Q1osWUF4Q1k7RUVZWix1QkFBNkIsRUFBQTtBQUgvQjtJRndCRSxXQWxDVztJQW1DWCxZQW5DVyxFQUFBO0FFb0JiO0VGbUJFLGtCQUFrQjtFQUNsQixZQXJDYztFQXNDZCxhQXRDYztFRW9CZCx3QkFBK0IsRUFBQTtBQUhqQztJRmNFLFlBaENjO0lBaUNkLGFBakNjLEVBQUE7QUVrQmhCO0lBVUksaUJGMUNjO0lFMkNkLHlCQUFnQyxFQUFBO0FBSXBDO0VGd0ZFLDRCRXZGdUM7RUFDdkMsZUFBZSxFQUFBO0FBR2pCO0VGdUVFLDZCRXRFNkI7RUYwRTdCLHFCRTFFNkIsRUFBQTtBQUcvQjtFQUNFLGlCQUFpQixFQUFBO0FBRG5CO0lBS0kscUJBQXFCLEVBQUE7QUFMekI7TUY0Q0ksbUNBaEhVO01BdUlaLG1DRTFEdUM7TUY4RHZDLDJCRTlEdUMsRUFBQTtBQVR6QztNQWFNLFVBQVUsRUFBQTtBQUtoQjs7RUR3QkU7QUNyQkY7RUE3RkE7SUErRkksdUJBQXVCLEVBQUEsRUFDeEI7QUFHSDtFQW5GQTtJQXFGSSxVQUFVLEVBQUEsRUFDWDtBQ3ZHSDtFSDBIRSxhQUFhO0VBQ2IsZUd6SDJCO0VIMEgzQiw2QkcxSHlDO0VIMkh6Qyx5QkczSHFEO0VINEhyRCx1Qkc1SGlFO0VBQy9ELFlBQVk7RUFDWixVQUFVLEVBQUE7QUFKZDtJQU9NLG1CSG9DVSxFQUFBO0FHM0NoQjtFSDBIRSxhQUFhO0VBQ2IsZUc5RzZCO0VIK0c3QiwyQkcvR3lDO0VIZ0h6Qyx5QkdoSHFEO0VIaUhyRCx1QkdqSGlFO0VBQzdELHVCSDJCVSxFQUFBO0FHekNoQjtJQWlCUSw0QkFBOEIsRUFBQTtBQU10QztFQXZCQTtJSDBIRSxhQUFhO0lBQ2IsZUdoRytCO0lIaUcvQix1QkdqR3VDO0lIa0d2Qyx5QkdsR21EO0lIbUduRCx1QkduRytEO0lBQ3pELHdCSGFRLEVBQUEsRUdaVCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29sb3Vyc1xuICovXG5cbiRwcmltYXJ5OiAjNjZjYzk5O1xuJHNlY29uZGFyeTogIzY2OTljYztcbiRhbHQ6ICM2MmIyYjA7XG4kZGFyazogIzMwMzAzMDtcbiRncmV5OiAjNzA3MDcwO1xuJGxpZ2h0LWdyZXk6ICNmMGYwZjA7XG4kbGlnaHQ6ICNmY2ZjZmM7XG4kYWxlcnQ6ICNkODc0NmE7XG4kaW5mbzogI2NjOWQxNDtcblxuLyoqXG4gKiBGb250c1xuICovXG5cbiRmb250LW1pY3JvOiAxcmVtO1xuJGZvbnQtc21hbGw6IDEuMnJlbTtcbiRmb250LWJhc2U6IDEuNnJlbTtcbiRmb250LWJpZzogMS44cmVtO1xuJGZvbnQtbWFjcm86IDIuMnJlbTtcbiRmb250LW1lZ2E6IDIuNnJlbTtcbiRmb250LWdpZ2E6IDNyZW07XG4kZm9udC10ZXJhOiA0cmVtO1xuXG4vKipcbiAqIEltYWdlc1xuICovXG5cbiRpbWctc206IDI1cHg7XG4kaW1nLW1kOiA1MHB4O1xuJGltZy1iaWc6IDc1cHg7XG4kaW1nLW1lZ2E6IDEwMHB4O1xuJGltZy1naWdhOiAxNTBweDtcblxuLyoqXG4gKiBDb250YWluZXJzXG4gKi9cblxuJGhlYWRlci1oZWlnaHQ6IDcuNXJlbTtcbiRjYXJkLWhlaWdodDogMjByZW07XG4kZ2FwLXNtOiAwLjVyZW07XG4kZ2FwLXJlZzogMS41cmVtO1xuJGdhcC1tZDogM3JlbTtcbiRnYXAtYmlnOiA0LjVyZW07XG4kZ2FwLW1lZ2E6IDZyZW07XG4kZ2FwLXRlcmE6IDQwdmg7XG4kcGFkZGluZy1zbTogMXJlbTtcblxuLyoqXG4gKiBNaXhpbnNcbiAqL1xuXG5AbWl4aW4gc3BlY2lhbC1mb250KCRzaXplLCAkY29sb3IpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGhpZ2hsaWdodCgkYmctY29sb3IsICRmb250LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmb250LWNvbG9yO1xufVxuXG5AbWl4aW4gc3F1YXJlKCR2YWx1ZSkge1xuICB3aWR0aDogJHZhbHVlO1xuICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIHJvdW5kKCR2YWx1ZSkge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAkdmFsdWU7XG4gIGhlaWdodDogJHZhbHVlO1xufVxuXG5AbWl4aW4gcG9zaXRpb24oJHR5cGUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcbiAgcG9zaXRpb246ICR0eXBlO1xuICB0b3A6ICR0b3A7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgbGVmdDogJGxlZnQ7XG59XG5cbi8vIGNlbnRlciB2ZXJ0aWNhbGx5XG5AbWl4aW4gdmVydGljYWwtYWxpZ24oJGhlaWdodCkge1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0IC8gMjtcbn1cblxuQG1peGluIGFuaW0tZHJvcGRvd24oJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZVkoJHZhbHVlKSk7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIHRyaWFuZ2xlKCRkaXIsICRjb2xvciwgJGJhc2UsICRoZWlnaHQpIHtcbiAgJHRpcDogJGhlaWdodCBzb2xpZCAkY29sb3I7XG5cbiAgQGluY2x1ZGUgc3F1YXJlKCRiYXNlKTtcbiAgYm9yZGVyOiAkYmFzZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLSN7JGRpcn06IG5vbmU7IC8vIGJvcmRlciBjb25jZXJuZWQgZGlzYXBwZWFyXG4gIEBpZiAkZGlyID09ICd0b3AnIHtcbiAgICBib3JkZXItYm90dG9tOiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ2JvdHRvbScge1xuICAgIGJvcmRlci10b3A6ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAncmlnaHQnIHtcbiAgICBib3JkZXItbGVmdDogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdsZWZ0JyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdGlwO1xuICB9XG59XG5cbkBtaXhpbiBkcm9wLXNoYWRvdygkaXNJbnNldCwgJGhvciwgJHZlciwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuICBAaWYgJGlzSW5zZXQgPT0gdHJ1ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICB9IEBlbHNlIGlmICRpc0luc2V0ID09IGZhbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIGZsZXgtbGF5b3V0KCRoYXNXcmFwOiBub3dyYXAsICRqdXN0aWY6IGZsZXgtc3RhcnQsICRhbGlnbkNvbnRlbnQ6IHN0cmV0Y2gsICRhbGlnbkl0ZW1zOiBzdHJldGNoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogJGhhc1dyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZjtcbiAgYWxpZ24tY29udGVudDogJGFsaWduQ29udGVudDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQsICRjb2xvciwgJHJhZGl1cykge1xuICBib3JkZXItdG9wOiAkdG9wIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiAkcmlnaHQgc29saWQgJGNvbG9yO1xuICBib3JkZXItYm90dG9tOiAkYm90dG9tIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLWxlZnQ6ICRsZWZ0IHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbn1cblxuLy8gQU5JTVNcblxuQG1peGluIHRyYW5zZm9ybSgkdGFuc2Zvcm1hdGlvbikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1tb3otdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW1zLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1vLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIHRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wLCAkZHVyLCAkdGltaW5nLCAkZGVsYXksICRvdGhlcnMuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICB0cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xufVxuXG5AbWl4aW4gYnRuLWFuaW0oKSB7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCA1cHgsIDVweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTNweCkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cblxuLyoqXG4gKiBHZW5lcmFsXG4gKi9cblxuLy8gQ29udGFpbmVyXG5cbiVuby1wYWRkaW5nIHsgcGFkZGluZzogMDsgfVxuXG4lbm8tbWFyZ2luIHsgbWFyZ2luOiAwOyB9XG5cbiVibG9jay1jZW50cmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4lYmxvY2staGFsZi1jZW50cmVkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8vIEJvcmRlcnNcblxuJW5vLXJhZGl1cyB7IGJvcmRlci1yYWRpdXM6IDA7IH1cblxuJW5vLWJvcmRlciB7IGJvcmRlcjogMDsgfVxuXG4ldHJpYW5nbGVzLXBsdWdnZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAyNSU7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbiVidG4tZmlsdGVyIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGNvbG9yOiAkbGlnaHQ7XG59XG5cbiVidG4tZmlsdGVyLWFuaW0ge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVZKDEuMSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cbiIsIi8qKlxuICogQ29sb3Vyc1xuICovXG4vKipcbiAqIEZvbnRzXG4gKi9cbi8qKlxuICogSW1hZ2VzXG4gKi9cbi8qKlxuICogQ29udGFpbmVyc1xuICovXG4vKipcbiAqIE1peGluc1xuICovXG4vKipcbiAqIEdlbmVyYWxcbiAqL1xuLmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5pbWctZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cbiAgLmltZy1ncm91cCAuaW1nIHtcbiAgICBtYXJnaW46IDEwcHg7IH1cblxuLmltZy1mbG9hdCB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7IH1cblxuLmltZy1icmFuZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDsgfVxuXG4uaW1nLWxhYmVsIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IGF1dG87XG4gIG9wYWNpdHk6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoNzVweCArIDE1cHgpOyB9XG5cbi5pbWctcm91bmQsIC5pbWctcm91bmQtLXNtLCAuaW1nLXJvdW5kLS1iaWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIHBhZGRpbmc6IGNhbGMoMTAwcHggLyA0KTsgfVxuICAuaW1nLXJvdW5kIGltZywgLmltZy1yb3VuZC0tc20gaW1nLCAuaW1nLXJvdW5kLS1iaWcgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7IH1cblxuLmltZy1yb3VuZC0tc20ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHBhZGRpbmc6IGNhbGMoNTBweCAvIDQpOyB9XG4gIC5pbWctcm91bmQtLXNtIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4OyB9XG5cbi5pbWctcm91bmQtLWJpZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiBjYWxjKDEwMHB4IC8gNCk7IH1cbiAgLmltZy1yb3VuZC0tYmlnIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7IH1cbiAgLmltZy1yb3VuZC0tYmlnICsgLmltZy1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgd2lkdGg6IGNhbGMoMTUwcHggKyAxNXB4KTsgfVxuXG4uaW1nLWxpbmsge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uaW1nLS1mbGlwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTsgfVxuXG4uaW1nLXdyYXAge1xuICBtaW4taGVpZ2h0OiAxNTBweDsgfVxuICAuaW1nLXdyYXA6aG92ZXIsIC5pbWctd3JhcDpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgLmltZy13cmFwOmhvdmVyIC5pbWctbGluaywgLmltZy13cmFwOmZvY3VzIC5pbWctbGluayB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA2cHggNnB4IDBweCAjNzA3MDcwO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggNnB4IDZweCAwcHggIzcwNzA3MDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IDBweCAjNzA3MDcwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbiAgICAuaW1nLXdyYXA6aG92ZXIgLmltZy1sYWJlbCwgLmltZy13cmFwOmZvY3VzIC5pbWctbGFiZWwge1xuICAgICAgb3BhY2l0eTogMTsgfVxuXG4vKipcbiAgTWVkaWEgUXVlcmllc1xuICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW1nLWdyb3VwIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5pbWctbGFiZWwge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4ud3JhcC1ob21lIC5pbWctZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzUlOyB9XG4gIC53cmFwLWhvbWUgLmltZy1ncm91cCAuaW1nLXdyYXAge1xuICAgIG1hcmdpbjogYXV0byA0LjVyZW07IH1cblxuLndyYXAtaG9tZSAuanVtYm90cm9uIC5pbWctZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogYXV0byAwcHggMS41cmVtOyB9XG4gIC53cmFwLWhvbWUgLmp1bWJvdHJvbiAuaW1nLWdyb3VwIC5pbWctd3JhcCB7XG4gICAgbWFyZ2luOiBhdXRvIDEuNXJlbSBhdXRvIDBweDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud3JhcC1ob21lIC5qdW1ib3Ryb24gLmltZy1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW46IGF1dG8gYXV0byAxLjVyZW07IH0gfVxuIiwiLmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1nLWdyb3VwIHtcbiAgQGluY2x1ZGUgZmxleC1sYXlvdXQod3JhcCwgZmxleC1zdGFydCwgZmxleC1zdGFydCwgZmxleC1zdGFydCk7XG5cbiAgLmltZyB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG59XG5cbi5pbWctZmxvYXQge1xuICBAaW5jbHVkZSBzcXVhcmUoJGltZy1iaWcpO1xufVxuXG4uaW1nLWJyYW5kIHtcbiAgQGluY2x1ZGUgc3F1YXJlKCRpbWctbWVnYSk7XG59XG5cbi5pbWctbGFiZWwge1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40cywgZWFzZSwgMHMpO1xuICBmb250LXNpemU6ICRmb250LW1pY3JvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKCN7JGltZy1iaWd9ICsgMTVweCk7XG59XG5cbi8vIFJvdW5kZWQgY29udGFpbmUgZm9yIGltYWdlc1xuLmltZy1yb3VuZCB7XG4gIEBpbmNsdWRlIHJvdW5kKCRpbWctbWVnYSk7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCAwcHgsIDNweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xuICBwYWRkaW5nOiBjYWxjKCN7JGltZy1tZWdhfSAvIDQpO1xuXG4gIGltZyB7XG4gICAgQGluY2x1ZGUgc3F1YXJlKCRpbWctbWQpO1xuICB9XG59XG5cbi5pbWctcm91bmQtLXNtIHtcbiAgQGV4dGVuZCAuaW1nLXJvdW5kO1xuICBAaW5jbHVkZSByb3VuZCgkaW1nLWJpZyk7XG4gIHBhZGRpbmc6IGNhbGMoI3skaW1nLW1kfSAvIDQpO1xuXG4gIGltZyB7XG4gICAgQGluY2x1ZGUgc3F1YXJlKCRpbWctbWQpO1xuICB9XG59XG5cbi5pbWctcm91bmQtLWJpZyB7XG4gIEBleHRlbmQgLmltZy1yb3VuZDtcbiAgQGluY2x1ZGUgcm91bmQoJGltZy1naWdhKTtcbiAgcGFkZGluZzogY2FsYygjeyRpbWctbWVnYX0gLyA0KTtcblxuICBpbWcge1xuICAgIEBpbmNsdWRlIHNxdWFyZSgkaW1nLW1lZ2EpO1xuICB9XG5cbiAgKyAuaW1nLWxhYmVsIHtcbiAgICBmb250LXNpemU6ICRmb250LWJhc2U7XG4gICAgd2lkdGg6IGNhbGMoI3skaW1nLWdpZ2F9ICsgMTVweCk7XG4gIH1cbn1cblxuLmltZy1saW5rIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nLS1mbGlwIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlWCgtMSkpO1xufVxuXG4uaW1nLXdyYXAge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAuaW1nLWxpbmsge1xuICAgICAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDBweCwgNnB4LCA2cHgsIDBweCwgJGdyZXkpO1xuICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTVweCkpO1xuICAgIH1cblxuICAgIC5pbWctbGFiZWwge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gIE1lZGlhIFF1ZXJpZXNcbiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltZy1ncm91cCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmltZy1sYWJlbCB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ2ltYWdlcyc7XG5cbi53cmFwLWhvbWUge1xuICAuaW1nLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBmbGV4LWxheW91dCh3cmFwLCBzcGFjZS1hcm91bmQsIGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuXG4gICAgLmltZy13cmFwIHtcbiAgICAgIG1hcmdpbjogYXV0byAkZ2FwLWJpZztcbiAgICB9XG4gIH1cblxuICAuanVtYm90cm9uIHtcbiAgICAuaW1nLWdyb3VwIHtcbiAgICAgIEBpbmNsdWRlIGZsZXgtbGF5b3V0KHdyYXAsIGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQpO1xuICAgICAgbWFyZ2luOiBhdXRvIDBweCAkZ2FwLXJlZztcblxuICAgICAgLmltZy13cmFwIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvICRnYXAtcmVnIGF1dG8gMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud3JhcC1ob21lIHtcbiAgICAuanVtYm90cm9uIHtcbiAgICAgIC5pbWctZ3JvdXAge1xuICAgICAgICBAaW5jbHVkZSBmbGV4LWxheW91dCh3cmFwLCBjZW50ZXIsIGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQpO1xuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byAkZ2FwLXJlZztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_project_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/project/project.service */ "./src/app/providers/project/project.service.ts");
/* harmony import */ var _providers_skill_skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/skill/skill.service */ "./src/app/providers/skill/skill.service.ts");
/* harmony import */ var _shared_constants_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/profile */ "./src/app/shared/constants/profile.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Constants

var HomeComponent = /** @class */ (function () {
    function HomeComponent(projectService, skillService) {
        this.projectService = projectService;
        this.skillService = skillService;
        this.profile = _shared_constants_profile__WEBPACK_IMPORTED_MODULE_3__["PROFILE"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.projects = this.projectService.getProjects() || [];
        this.skills = this.skillService.getSkills() || [];
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_project_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _providers_skill_skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/home/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <section class=\"col-xs-12 col-sm-8 content-jumbo\">\n    <h2>{{ profile.name }}</h2>\n    <h4>{{ profile.title }} - {{ age }}</h4>\n    <p>{{ 'homeText0' | translate }}</p>\n    <p>{{ 'homeText1' | translate }}</p>\n    <!--<p>{{ 'homeText2' | translate }}</p>-->\n  </section>\n\n  <figure class=\"col-xs-12 col-sm-4 img-jumbo\">\n    <img class=\"img--flip\" [src]=\"profile.images.avatar\" [alt]=\"profile.name\">\n  </figure>\n\n  <footer class=\"col-xs-12 btn-group btn-group--jumbo\">\n    <header class=\"header-sub\"><h4>{{ 'homeText3' | translate }}</h4></header>\n    <a\n      *ngFor=\"let btn of profileBtn\"\n      [class]=\"btn.class\"\n      [routerLink]=\"[btn.route]\"\n      [fragment]=\"btn.fragment\">\n        {{ btn.name | translate }}\n    </a>\n    <a class=\"btn btn-primary\" href=\"../assets/cv_vimalkovath_2017_en.pdf\" *ngIf=\"sessionBtn() === 'eng'\" target=\"_blank\">CV</a>\n    <a class=\"btn btn-primary\" href=\"../assets/vimalkovath.pdf\" *ngIf=\"sessionBtn() === 'fra'\" target=\"_blank\">CV</a>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.btn, .btn-primary, .btn-font {\n  border: none;\n  border-radius: 0px; }\n.btn:focus, .btn-primary:focus, .btn-font:focus {\n    outline: none; }\n.btn:visited, .btn-primary:visited, .btn-font:visited {\n    color: #fcfcfc; }\n.btn-dark, .btn-primary, .btn-font {\n  background-color: #707070;\n  color: #fcfcfc; }\n.btn-dark:visited, .btn-primary:visited, .btn-font:visited {\n    background-color: #707070; }\n.btn-primary {\n  box-shadow: 3px 3px 3px 0px #707070;\n  transition: all 0.3s ease-in 0s;\n  min-width: 100px;\n  padding: 10px; }\n.btn-primary:hover, .btn-primary:active {\n    box-shadow: 5px 5px 3px 0px #707070;\n    -webkit-transform: translateX(-3px);\n    transform: translateX(-3px);\n    background-color: #66cc99; }\n.btn-font {\n  position: absolute;\n  top: auto;\n  right: 50px;\n  bottom: -35px;\n  left: auto;\n  box-shadow: 0px 3px 3px 0px #707070;\n  transition: all 0.3s ease-in 0s;\n  background-color: #707070;\n  font-size: 1rem;\n  padding: 2px 10px; }\n.btn-font:hover, .btn-font:focus {\n    color: #fcfcfc; }\n.btn-font:hover {\n    background-color: #575656; }\n.btn-font.selected {\n    background-color: #66cc99; }\n.btn-font .btn-label-big {\n    font-size: 1.8rem; }\n.btn-group-line .btn, .btn-group-line .btn-primary, .btn-group-line .btn-font {\n  margin: 10px; }\n@media screen and (max-width: 768px) {\n  .btn-group--jumbo .btn-primary {\n    margin: 10px auto; } }\n@media screen and (max-width: 500px) {\n  .btn-group--details,\n  .btn-group--jumbo {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: flex-start;\n    align-items: flex-start; }\n    .btn-group--details .btn, .btn-group--details .btn-primary, .btn-group--details .btn-font,\n    .btn-group--jumbo .btn,\n    .btn-group--jumbo .btn-primary,\n    .btn-group--jumbo .btn-font {\n      width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZsaXBrYXJ0LzIwMTkvcG9ydGZvbGlvL3ZpbWFsa292YXRoLmdpdGh1Yi5pby9zcmMvYXBwL3RoZW1lL19idXR0b25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURZRjs7RUNURTtBRHNCRjs7RUNuQkU7QUQ2QkY7O0VDMUJFO0FEd0NGOztFQ3JDRTtBRHNKRjs7RUNuSkU7QUNqQkY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFGcEI7SUFLSSxhQUFhLEVBQUE7QUFMakI7SUFTSSxjRkNXLEVBQUE7QUVHZjtFQUNFLHlCRk5ZO0VFT1osY0ZMYSxFQUFBO0FFR2Y7SUFLSSx5QkZWVSxFQUFBO0FFY2Q7RUZrR0ksbUNBaEhVO0VBbUpaLCtCRWpJMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQU5mO0lGa0dJLG1DQWhIVTtJQXVJWixtQ0FpQm1DO0lBYm5DLDJCQWFtQztJQUNuQyx5QkE3SmUsRUFBQTtBRWdDakI7RUZ5Q0Usa0JFdEMwQjtFRnVDMUIsU0V2Q2dDO0VGd0NoQyxXRXhDc0M7RUZ5Q3RDLGFFekM2QztFRjBDN0MsVUUxQ21EO0VGaUZqRCxtQ0FoSFU7RUFtSlosK0JFbEgwQztFQUMxQyx5QkZsQ1k7RUVtQ1osZUZ6QmU7RUUwQmYsaUJBQWlCLEVBQUE7QUFSbkI7SUFZSSxjRnRDVyxFQUFBO0FFMEJmO0lBZ0JJLHlCQUFvQyxFQUFBO0FBaEJ4QztJQW9CSSx5QkZwRGEsRUFBQTtBRWdDakI7SUF3QkksaUJGdkNhLEVBQUE7QUUyQ2pCO0VBRUksWUFBWSxFQUFBO0FBSWhCO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQSxFQUNsQjtBQUdIO0VBQ0U7O0lGZ0RBLGFBQWE7SUFDYixlRS9DMkI7SUZnRDNCLHVCRWhEbUM7SUZpRG5DLHlCRWpEK0M7SUZrRC9DLHVCRWxEMkQsRUFBQTtJQUYzRDs7OztNQUlJLFdBQVcsRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbG91cnNcbiAqL1xuXG4kcHJpbWFyeTogIzY2Y2M5OTtcbiRzZWNvbmRhcnk6ICM2Njk5Y2M7XG4kYWx0OiAjNjJiMmIwO1xuJGRhcms6ICMzMDMwMzA7XG4kZ3JleTogIzcwNzA3MDtcbiRsaWdodC1ncmV5OiAjZjBmMGYwO1xuJGxpZ2h0OiAjZmNmY2ZjO1xuJGFsZXJ0OiAjZDg3NDZhO1xuJGluZm86ICNjYzlkMTQ7XG5cbi8qKlxuICogRm9udHNcbiAqL1xuXG4kZm9udC1taWNybzogMXJlbTtcbiRmb250LXNtYWxsOiAxLjJyZW07XG4kZm9udC1iYXNlOiAxLjZyZW07XG4kZm9udC1iaWc6IDEuOHJlbTtcbiRmb250LW1hY3JvOiAyLjJyZW07XG4kZm9udC1tZWdhOiAyLjZyZW07XG4kZm9udC1naWdhOiAzcmVtO1xuJGZvbnQtdGVyYTogNHJlbTtcblxuLyoqXG4gKiBJbWFnZXNcbiAqL1xuXG4kaW1nLXNtOiAyNXB4O1xuJGltZy1tZDogNTBweDtcbiRpbWctYmlnOiA3NXB4O1xuJGltZy1tZWdhOiAxMDBweDtcbiRpbWctZ2lnYTogMTUwcHg7XG5cbi8qKlxuICogQ29udGFpbmVyc1xuICovXG5cbiRoZWFkZXItaGVpZ2h0OiA3LjVyZW07XG4kY2FyZC1oZWlnaHQ6IDIwcmVtO1xuJGdhcC1zbTogMC41cmVtO1xuJGdhcC1yZWc6IDEuNXJlbTtcbiRnYXAtbWQ6IDNyZW07XG4kZ2FwLWJpZzogNC41cmVtO1xuJGdhcC1tZWdhOiA2cmVtO1xuJGdhcC10ZXJhOiA0MHZoO1xuJHBhZGRpbmctc206IDFyZW07XG5cbi8qKlxuICogTWl4aW5zXG4gKi9cblxuQG1peGluIHNwZWNpYWwtZm9udCgkc2l6ZSwgJGNvbG9yKSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG5cbkBtaXhpbiBoaWdobGlnaHQoJGJnLWNvbG9yLCAkZm9udC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcbn1cblxuQG1peGluIHNxdWFyZSgkdmFsdWUpIHtcbiAgd2lkdGg6ICR2YWx1ZTtcbiAgaGVpZ2h0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiByb3VuZCgkdmFsdWUpIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogJHZhbHVlO1xuICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIHBvc2l0aW9uKCR0eXBlLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KSB7XG4gIHBvc2l0aW9uOiAkdHlwZTtcbiAgdG9wOiAkdG9wO1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIGxlZnQ6ICRsZWZ0O1xufVxuXG4vLyBjZW50ZXIgdmVydGljYWxseVxuQG1peGluIHZlcnRpY2FsLWFsaWduKCRoZWlnaHQpIHtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBsaW5lLWhlaWdodDogJGhlaWdodCAvIDI7XG59XG5cbkBtaXhpbiBhbmltLWRyb3Bkb3duKCR2YWx1ZSkge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVZKCR2YWx1ZSkpO1xuICBvcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiB0cmlhbmdsZSgkZGlyLCAkY29sb3IsICRiYXNlLCAkaGVpZ2h0KSB7XG4gICR0aXA6ICRoZWlnaHQgc29saWQgJGNvbG9yO1xuXG4gIEBpbmNsdWRlIHNxdWFyZSgkYmFzZSk7XG4gIGJvcmRlcjogJGJhc2Ugc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci0jeyRkaXJ9OiBub25lOyAvLyBib3JkZXIgY29uY2VybmVkIGRpc2FwcGVhclxuICBAaWYgJGRpciA9PSAndG9wJyB7XG4gICAgYm9yZGVyLWJvdHRvbTogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdib3R0b20nIHtcbiAgICBib3JkZXItdG9wOiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ3JpZ2h0JyB7XG4gICAgYm9yZGVyLWxlZnQ6ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAnbGVmdCcge1xuICAgIGJvcmRlci1yaWdodDogJHRpcDtcbiAgfVxufVxuXG5AbWl4aW4gZHJvcC1zaGFkb3coJGlzSW5zZXQsICRob3IsICR2ZXIsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcbiAgQGlmICRpc0luc2V0ID09IHRydWUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6IGluc2V0ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgfSBAZWxzZSBpZiAkaXNJbnNldCA9PSBmYWxzZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBmbGV4LWxheW91dCgkaGFzV3JhcDogbm93cmFwLCAkanVzdGlmOiBmbGV4LXN0YXJ0LCAkYWxpZ25Db250ZW50OiBzdHJldGNoLCAkYWxpZ25JdGVtczogc3RyZXRjaCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6ICRoYXNXcmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWY7XG4gIGFsaWduLWNvbnRlbnQ6ICRhbGlnbkNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtcztcbn1cblxuQG1peGluIGJvcmRlcigkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0LCAkY29sb3IsICRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcDogJHRvcCBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1yaWdodDogJHJpZ2h0IHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLWJvdHRvbTogJGJvdHRvbSBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1sZWZ0OiAkbGVmdCBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8vIEFOSU1TXG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRhbnNmb3JtYXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICAtbW96LXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1tcy10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICAtby10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICB0cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcCwgJGR1ciwgJHRpbWluZywgJGRlbGF5LCAkb3RoZXJzLi4uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtbXMtdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgLW8tdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbn1cblxuQG1peGluIGJ0bi1hbmltKCkge1xuICBAaW5jbHVkZSBkcm9wLXNoYWRvdyhmYWxzZSwgNXB4LCA1cHgsIDNweCwgMHB4LCAkZ3JleSk7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVYKC0zcHgpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG59XG5cbi8qKlxuICogR2VuZXJhbFxuICovXG5cbi8vIENvbnRhaW5lclxuXG4lbm8tcGFkZGluZyB7IHBhZGRpbmc6IDA7IH1cblxuJW5vLW1hcmdpbiB7IG1hcmdpbjogMDsgfVxuXG4lYmxvY2stY2VudHJlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuJWJsb2NrLWhhbGYtY2VudHJlZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG4vLyBCb3JkZXJzXG5cbiVuby1yYWRpdXMgeyBib3JkZXItcmFkaXVzOiAwOyB9XG5cbiVuby1ib3JkZXIgeyBib3JkZXI6IDA7IH1cblxuJXRyaWFuZ2xlcy1wbHVnZ2VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMjUlO1xuICByaWdodDogMjUlO1xufVxuXG4lYnRuLWZpbHRlciB7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjRzLCBlYXNlLCAwcyk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICBjb2xvcjogJGxpZ2h0O1xufVxuXG4lYnRuLWZpbHRlci1hbmltIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlWSgxLjEpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG59XG4iLCIvKipcbiAqIENvbG91cnNcbiAqL1xuLyoqXG4gKiBGb250c1xuICovXG4vKipcbiAqIEltYWdlc1xuICovXG4vKipcbiAqIENvbnRhaW5lcnNcbiAqL1xuLyoqXG4gKiBNaXhpbnNcbiAqL1xuLyoqXG4gKiBHZW5lcmFsXG4gKi9cbi5idG4sIC5idG4tcHJpbWFyeSwgLmJ0bi1mb250IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7IH1cbiAgLmJ0bjpmb2N1cywgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLWZvbnQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLmJ0bjp2aXNpdGVkLCAuYnRuLXByaW1hcnk6dmlzaXRlZCwgLmJ0bi1mb250OnZpc2l0ZWQge1xuICAgIGNvbG9yOiAjZmNmY2ZjOyB9XG5cbi5idG4tZGFyaywgLmJ0bi1wcmltYXJ5LCAuYnRuLWZvbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xuICBjb2xvcjogI2ZjZmNmYzsgfVxuICAuYnRuLWRhcms6dmlzaXRlZCwgLmJ0bi1wcmltYXJ5OnZpc2l0ZWQsIC5idG4tZm9udDp2aXNpdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwOyB9XG5cbi5idG4tcHJpbWFyeSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7IH1cbiAgLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCAjNzA3MDcwO1xuICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmNjOTk7IH1cblxuLmJ0bi1mb250IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGF1dG87XG4gIHJpZ2h0OiA1MHB4O1xuICBib3R0b206IC0zNXB4O1xuICBsZWZ0OiBhdXRvO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDJweCAxMHB4OyB9XG4gIC5idG4tZm9udDpob3ZlciwgLmJ0bi1mb250OmZvY3VzIHtcbiAgICBjb2xvcjogI2ZjZmNmYzsgfVxuICAuYnRuLWZvbnQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzU2NTY7IH1cbiAgLmJ0bi1mb250LnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZjYzk5OyB9XG4gIC5idG4tZm9udCAuYnRuLWxhYmVsLWJpZyB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07IH1cblxuLmJ0bi1ncm91cC1saW5lIC5idG4sIC5idG4tZ3JvdXAtbGluZSAuYnRuLXByaW1hcnksIC5idG4tZ3JvdXAtbGluZSAuYnRuLWZvbnQge1xuICBtYXJnaW46IDEwcHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1wcmltYXJ5IHtcbiAgICBtYXJnaW46IDEwcHggYXV0bzsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5idG4tZ3JvdXAtLWRldGFpbHMsXG4gIC5idG4tZ3JvdXAtLWp1bWJvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLCAuYnRuLWdyb3VwLS1kZXRhaWxzIC5idG4tcHJpbWFyeSwgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLWZvbnQsXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bixcbiAgICAuYnRuLWdyb3VwLS1qdW1ibyAuYnRuLXByaW1hcnksXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1mb250IHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cbiIsIi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogJGxpZ2h0O1xuICB9XG59XG5cbi5idG4tZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICBjb2xvcjogJGxpZ2h0O1xuXG4gICY6dmlzaXRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIH1cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgQGV4dGVuZCAuYnRuO1xuICBAZXh0ZW5kIC5idG4tZGFyaztcbiAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDNweCwgM3B4LCAzcHgsIDBweCwgJGdyZXkpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC4zcywgZWFzZS1pbiwgMHMpO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gICY6aG92ZXIsXG4gICY6YWN0aXZlIHtcbiAgICBAaW5jbHVkZSBidG4tYW5pbSgpO1xuICB9XG59XG5cbi5idG4tZm9udCB7XG4gIEBleHRlbmQgLmJ0bjtcbiAgQGV4dGVuZCAuYnRuLWRhcms7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCBhdXRvLCA1MHB4LCAtMzVweCwgYXV0byk7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCAwcHgsIDNweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuM3MsIGVhc2UtaW4sIDBzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtbWljcm87XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGlnaHQ7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGdyZXksIDEwJSk7XG4gIH1cblxuICAmLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgfVxuXG4gIC5idG4tbGFiZWwtYmlnIHtcbiAgICBmb250LXNpemU6ICRmb250LWJpZztcbiAgfVxufVxuXG4uYnRuLWdyb3VwLWxpbmUge1xuICAuYnRuIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1wcmltYXJ5IHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYnRuLWdyb3VwLS1kZXRhaWxzLFxuICAuYnRuLWdyb3VwLS1qdW1ibyB7XG4gICAgQGluY2x1ZGUgZmxleC1sYXlvdXQod3JhcCwgY2VudGVyLCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0KTtcbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/cookie/cookie.service */ "./src/app/providers/cookie/cookie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(cookieService) {
        this.cookieService = cookieService;
        this.profileBtn = [{
                name: 'homeBtn0',
                route: '../about',
                href: '',
                class: 'btn btn-primary',
                fragment: 'about-fed'
            },
            {
                name: 'homeBtn1',
                route: '../about',
                href: '',
                class: 'btn btn-primary',
                fragment: 'about-ux'
            },
            {
                name: 'homeBtn2',
                route: '../projects',
                href: '',
                class: 'btn btn-primary',
                fragment: null
            }];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var today = Date.now();
        var birthday = new Date('1989-01-10');
        var ageDate = new Date(today - birthday.getTime());
        this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    /**
     * Make selected language persistent even after refresh
     */
    ProfileComponent.prototype.sessionBtn = function () {
        return this.cookieService.getCookie('language');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "profile", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/home/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/home/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Page not found</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/posts/postdetail/postdetail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/posts/postdetail/postdetail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container wrap-stretch\">\n\n  <!-- Section: Blog v.4 -->\n  <section class=\"my-5\" *ngIf=\"details\">\n\n    <!-- Grid row -->\n    <div class=\"row\">\n      <!-- {{details|json}} -->\n      <ul class=\"list-group list-group-flush\" *ngFor=\"let point of details.points\">\n        <li class=\"list-group-item\">{{point}}</li>\n\n      </ul>\n      <!-- Grid column -->\n      <div class=\"col-md-12\">\n\n        <!-- Card -->\n        <div class=\"card card-cascade wider reverse\">\n          <!-- Card image -->\n          <div class=\"view view-cascade overlay\">\n            <img class=\"card-img-top\" [src]=\"details.image\" [alt]=\"details.title\">\n            <a href=\"#!\">\n              <div class=\"mask rgba-white-slight\"></div>\n            </a>\n          </div>\n\n          <!-- Card content -->\n          <div class=\"card-body card-body-cascade text-center\">\n\n            <!-- Title -->\n            <h2 class=\"font-weight-bold\"><a>{{details.title}}</a></h2>\n            <!-- Data -->\n            <p>Written by <a><strong>{{details.author}}</strong></a>, {{details.publishedAt}}</p>\n            <!-- Social shares -->\n            <div class=\"social-counters\">\n              <!-- Facebook -->\n              <a class=\"btn btn-fb\">\n                <i class=\"fab fa-facebook-f pr-2\"></i>\n                <span class=\"clearfix d-none d-md-inline-block\">Facebook</span>\n              </a>\n              <span class=\"counter\">46</span>\n              <!-- Twitter -->\n              <a class=\"btn btn-tw\">\n                <i class=\"fab fa-twitter pr-2\"></i>\n                <span class=\"clearfix d-none d-md-inline-block\">Twitter</span>\n              </a>\n              <span class=\"counter\">22</span>\n              <!-- Google+ -->\n              <a class=\"btn btn-gplus\">\n                <i class=\"fab fa-google-plus-g pr-2\"></i>\n                <span class=\"clearfix d-none d-md-inline-block\">Google+</span>\n              </a>\n              <span class=\"counter\">31</span>\n              <!-- Comments -->\n              <a class=\"btn btn-default\">\n                <i class=\"far fa-comments pr-2\"></i>\n                <span class=\"clearfix d-none d-md-inline-block\">Comments</span>\n              </a>\n              <span class=\"counter\">18</span>\n            </div>\n            <!-- Social shares -->\n\n          </div>\n          <!-- Card content -->\n\n        </div>\n        <!-- Card -->\n\n        <!-- Excerpt -->\n        <div class=\"mt-5\">\n\n          <p>\n            {{details.description}}\n          </p>\n\n          <div class=\"list-group\">\n            <a class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-2 h5\">List group item heading</h5>\n                <!-- <small>3 days ago</small> -->\n              </div>\n              <p class=\"mb-2\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius\n                blandit.</p>\n              <small>Donec id elit non mi porta.</small>\n            </a>\n            <a class=\"list-group-item list-group-item-action flex-column align-items-start\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-2 h5\">List group item heading</h5>\n                <!-- <small class=\"text-muted\">3 days ago</small> -->\n              </div>\n              <p class=\"mb-2\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius\n                blandit.</p>\n              <small class=\"text-muted\">Donec id elit non mi porta.</small>\n            </a>\n\n          </div>\n        </div>\n\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n    <div *ngFor=\"let key of details.keys\">\n      <span class=\"badge badge-default mb-2\">\n        {{key}}\n      </span>\n    </div>\n\n\n    <hr class=\"mb-5 mt-4\">\n\n  </section>\n  <!-- Section: Blog v.4 -->\n</div>\n\n\n<!--Section: Live preview-->\n<div id=\"v-1\" class=\"container\">\n\n  <!-- Section: Magazine v.1 -->\n  <section class=\"magazine-section my-5\">\n\n    <!-- Section heading -->\n    <h2 class=\"h1-responsive font-weight-bold text-center my-5\">Related Posts</h2>\n    <!-- Section description -->\n\n    <!-- Grid row -->\n    <div class=\"row\">\n\n      <!-- Grid column -->\n      <div class=\"col-lg-6 col-md-12\" *ngFor=\"let post of posts\">\n\n        <!-- Small news -->\n        <div class=\"single-news mb-4\">\n\n          <!-- Grid row -->\n          <div class=\"row\">\n\n            <!-- Grid column -->\n            <div class=\"col-md-3\">\n\n              <!--Image-->\n              <div class=\"view overlay rounded z-depth-1 mb-4\" (click)=\"goTo(post)\">\n                <img class=\"img-fluid\" [src]=\"post.image\" [alt]=\"post.title\">\n                <a>\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-9\">\n              <!-- Excerpt -->\n              <p class=\"font-weight-bold dark-grey-text\">{{post.publishedAt}}</p>\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"col-11 text-truncate pl-0 mb-3\">\n                  <a (click)=\"goTo(post)\" class=\"dark-grey-text\">{{post.title}}</a>\n                </div>\n                <a (click)=\"goTo(post)\"><i class=\"fas fa-angle-double-right\"></i></a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n          </div>\n          <!-- Grid row -->\n\n        </div>\n        <!-- Small news -->\n\n\n      </div>\n      <!-- Grid column -->\n\n\n    </div>\n    <!-- Grid row -->\n\n  </section>\n  <!-- Section: Magazine v.1 -->\n</div>"

/***/ }),

/***/ "./src/app/pages/posts/postdetail/postdetail.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/posts/postdetail/postdetail.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n\n.card.card-cascade.wider {\n  box-shadow: none;\n  background-color: transparent; }\n\n.card {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border: 0;\n  font-weight: 400; }\n\n.card.card-cascade.wider .view.view-cascade {\n  z-index: 2; }\n\n.card.card-cascade .view.view-cascade {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  border-radius: .25rem; }\n\n.view {\n  position: relative;\n  overflow: hidden;\n  cursor: default; }\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(.25rem - 1px);\n  border-top-right-radius: calc(.25rem - 1px); }\n\n.view .mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  background-attachment: fixed; }\n\n.overlay .mask {\n  opacity: 0;\n  transition: all .4s ease-in-out; }\n\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent; }\n\n.rgba-white-slight, .rgba-white-slight:after {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.card.card-cascade.wider.reverse .card-body.card-body-cascade {\n  z-index: 3;\n  margin-top: -1rem;\n  border-radius: .25rem;\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15); }\n\n.card.card-cascade.wider .card-body.card-body-cascade {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  margin-left: 4%;\n  margin-right: 4%;\n  background: #fff;\n  z-index: 1;\n  border-radius: 0 0 .25rem .25rem; }\n\n.card-body {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-radius: 0 !important; }\n\n.btn-fb {\n  background-color: #3b5998 !important;\n  color: #fff; }\n\n.btn-tw {\n  background-color: #55acee !important;\n  color: #fff; }\n\n.btn-gplus {\n  background-color: #dd4b39 !important;\n  color: #fff; }\n\n.counter {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  position: absolute;\n  z-index: 2;\n  margin-top: 0;\n  margin-left: -23px;\n  border-radius: 10em;\n  padding: 1px 7px;\n  background-color: #fe1212;\n  font-size: 11px;\n  color: #fff;\n  left: auto; }\n\na.waves-effect, a.waves-light {\n  display: inline-block; }\n\n.btn-fb {\n  background-color: #3b5998 !important;\n  color: #fff; }\n\n.btn {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  padding: 1rem 2.5rem;\n  font-size: 1.21rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  margin: .875rem;\n  border: 0;\n  border-radius: .125rem;\n  cursor: pointer;\n  text-transform: uppercase;\n  white-space: normal;\n  word-wrap: break-word;\n  color: #fff; }\n\n.btn .fab, .btn .far, .btn .fas {\n  position: relative;\n  font-size: .9rem; }\n\n.fab {\n  font-family: 'Font Awesome 5 Brands'; }\n\n.fa, .fab, .fal, .far, .fas {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n\n.card-img-top {\n  height: 300px;\n  width: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0ZGV0YWlsL3Bvc3RkZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFFbEIsYUFBYTtFQUViLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isc0NBQXNDO0VBQ3RDLHNCQUFzQixFQUFBOztBQUV4QjtFQUVFLGdCQUFnQjtFQUNoQiw2QkFBNkIsRUFBQTs7QUFFakM7RUFFSSw2RUFBcUU7RUFDckUsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUVJLDhFQUFzRTtFQUV0RSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLDJDQUEyQyxFQUFBOztBQUUvQztFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksVUFBVTtFQUdWLCtCQUErQixFQUFBOztBQUduQztFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix3Q0FBd0MsRUFBQTs7QUFFNUM7RUFDSSwwQ0FBc0MsRUFBQTs7QUFFMUM7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUVyQiw4RUFBc0UsRUFBQTs7QUFHMUU7RUFFSSw2RUFBcUU7RUFDckUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUVWLGdDQUFnQyxFQUFBOztBQUVwQztFQUNJLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFFdEIsMkJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksb0NBQW1DO0VBQ25DLFdBQVcsRUFBQTs7QUFFZjtFQUNJLG9DQUFtQztFQUNuQyxXQUFXLEVBQUE7O0FBRWY7RUFDSSxvQ0FBbUM7RUFDbkMsV0FBVyxFQUFBOztBQUVmO0VBRUEsNkVBQXFFO0VBQ3JFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFFVjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLG9DQUFtQztFQUNuQyxXQUFXLEVBQUE7O0FBRWY7RUFFSSw2RUFBcUU7RUFDckUsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUlsQiw4SEFBOEg7RUFFOUgsZUFBZTtFQUNmLFNBQVM7RUFFVCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxvQ0FBb0MsRUFBQTs7QUFFeEM7RUFDSSxrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksYUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3RkZXRhaWwvcG9zdGRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgfVxuICAuY2FyZC5jYXJkLWNhc2NhZGUud2lkZXIge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNhcmQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuXG4uY2FyZC5jYXJkLWNhc2NhZGUud2lkZXIgLnZpZXcudmlldy1jYXNjYWRlIHtcbiAgICB6LWluZGV4OiAyO1xufVxuLmNhcmQuY2FyZC1jYXNjYWRlIC52aWV3LnZpZXctY2FzY2FkZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLDAsMCwuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLDAsMCwuMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsMCwwLC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsMCwwLC4xNSk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuXG4udmlldyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufSAgXG4uY2FyZC1pbWctdG9wIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKC4yNXJlbSAtIDFweCk7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoLjI1cmVtIC0gMXB4KTtcbn1cbi52aWV3IC5tYXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG4ub3ZlcmxheSAubWFzayB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4ud2F2ZXMtZWZmZWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnJnYmEtd2hpdGUtc2xpZ2h0LCAucmdiYS13aGl0ZS1zbGlnaHQ6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xufVxuLmNhcmQuY2FyZC1jYXNjYWRlLndpZGVyLnJldmVyc2UgLmNhcmQtYm9keS5jYXJkLWJvZHktY2FzY2FkZSB7XG4gICAgei1pbmRleDogMztcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLDAsMCwuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLDAsMCwuMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsMCwwLC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsMCwwLC4xNSk7XG59XG5cbi5jYXJkLmNhcmQtY2FzY2FkZS53aWRlciAuY2FyZC1ib2R5LmNhcmQtYm9keS1jYXNjYWRlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB6LWluZGV4OiAxO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIC4yNXJlbSAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIC4yNXJlbSAuMjVyZW07XG59XG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcbn1cbi5idG4tZmIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi10dyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZSFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYnRuLWdwbHVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5jb3VudGVyIHtcbi13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xucG9zaXRpb246IGFic29sdXRlO1xuei1pbmRleDogMjtcbm1hcmdpbi10b3A6IDA7XG5tYXJnaW4tbGVmdDogLTIzcHg7XG4td2Via2l0LWJvcmRlci1yYWRpdXM6IDEwZW07XG5ib3JkZXItcmFkaXVzOiAxMGVtO1xucGFkZGluZzogMXB4IDdweDtcbmJhY2tncm91bmQtY29sb3I6ICNmZTEyMTI7XG5mb250LXNpemU6IDExcHg7XG5jb2xvcjogI2ZmZjtcbmxlZnQ6IGF1dG87XG59XG5hLndhdmVzLWVmZmVjdCwgYS53YXZlcy1saWdodCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuLWZiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4ge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMjFyZW07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IC44NzVyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogLjEyNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMTI1cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0biAuZmFiLCAuYnRuIC5mYXIsIC5idG4gLmZhcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG59XG5cbi5mYWIge1xuICAgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgQnJhbmRzJztcbn1cbi5mYSwgLmZhYiwgLmZhbCwgLmZhciwgLmZhcyB7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmNhcmQtaW1nLXRvcHtcbiAgICBoZWlnaHQ6MzAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/posts/postdetail/postdetail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/posts/postdetail/postdetail.component.ts ***!
  \****************************************************************/
/*! exports provided: PostdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailComponent", function() { return PostdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/modal/modal.service */ "./src/app/providers/modal/modal.service.ts");
/* harmony import */ var src_app_providers_resolve_by_id_resolve_by_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/resolve-by-id/resolve-by-id.service */ "./src/app/providers/resolve-by-id/resolve-by-id.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_header_title_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/header-title/header-title.service */ "./src/app/providers/header-title/header-title.service.ts");
/* harmony import */ var src_app_providers_posts_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/posts/post.service */ "./src/app/providers/posts/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostdetailComponent = /** @class */ (function () {
    function PostdetailComponent(route, router, modalService, resolveByIdService, headerTitleService, postService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.resolveByIdService = resolveByIdService;
        this.headerTitleService = headerTitleService;
        this.postService = postService;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            // this.type = params['type'];
            // this.post = params['obj'];
        });
    }
    PostdetailComponent.prototype.ngOnInit = function () {
        // this.details['image'] = './assets/img/svg/perso/photo.svg';
        var _this = this;
        // Posts
        this.postService.getPosts()
            .subscribe(function (data) {
            _this.posts = data.articles;
            // console.log(this.posts);
            _this.details = _this.resolveByIdService.resolvePostById(_this.id, _this.posts);
            _this.headerTitleService.setTitle(_this.details.title);
        }, console.error, function () { });
    };
    PostdetailComponent.prototype.postDetail = function (id) {
        this.details = this.resolveByIdService.resolvePostById(id, this.posts);
        this.headerTitleService.setTitle(this.details.title);
    };
    /**
   * Open modal for a Post
   * values passed will be used to be resolved in modalService and return the relevant project
   *
   * @param {string} id
   * @param {string} type
   */
    PostdetailComponent.prototype.openProjectModal = function (id, type) {
        this.typeModal = type;
        this.bsModalRef = this.modalService.openModal(id, type);
    };
    PostdetailComponent.prototype.goTo = function (object) {
        // this.analyticsService.captureCustomEvent(
        //   'navigation',
        //   `Navigate to details page for ${this.type}`,
        //   `${object.name}`,
        //   1);
        // We cannot pass an object directly, only a string
        // this.router.navigate(['postdetail', { id: object.id}]);
        this.postDetail(object.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostdetailComponent.prototype, "focusedItem", void 0);
    PostdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postdetail',
            template: __webpack_require__(/*! ./postdetail.component.html */ "./src/app/pages/posts/postdetail/postdetail.component.html"),
            styles: [__webpack_require__(/*! ./postdetail.component.scss */ "./src/app/pages/posts/postdetail/postdetail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_providers_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"],
            src_app_providers_resolve_by_id_resolve_by_id_service__WEBPACK_IMPORTED_MODULE_2__["ResolveByIdService"],
            src_app_providers_header_title_header_title_service__WEBPACK_IMPORTED_MODULE_4__["HeaderTitleService"],
            src_app_providers_posts_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]])
    ], PostdetailComponent);
    return PostdetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/posts/postpreview/postpreview.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/posts/postpreview/postpreview.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Section: Blog v.3 -->\n<section class=\"my-5\" *ngIf='grid'>\n    \n      <div class=\"row\">\n\n        <!-- Grid column -->\n      <div class=\"col-lg-5 col-xl-4\">\n        <!-- Featured image -->\n        <div class=\"view overlay rounded z-depth-1-half mb-lg-0 mb-4\">\n            <img class=\"img-fluid\" [src]=\"object.image || object.badge\" [alt]=\"object.name || object.title\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n      </div>\n      <!-- Grid column -->\n  \n      <!-- Grid column -->\n      <div class=\"col-lg-7 col-xl-8\">\n          <h3 class=\"ellipsis-two-lines\">{{ object.name || object.title | translate}}</h3>\n        <!-- <h3 class=\"font-weight-bold mb-3\"><strong>Title of the news</strong></h3> -->\n        <div class=\"single-news col-md-6 mb-0\" *ngFor=\"let tag of object.tags\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\" text-truncate pl-0 mb-0\">\n                <a>{{tag}}</a>\n              </div>\n              <a><i class=\"fas fa-angle-double-right\"></i></a>\n            </div>\n          </div>\n        <!-- <p class=\"dark-grey-text\">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit\n          quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus\n          et aut officiis debitis cum soluta nobis est eligendi placeat facere aut rerum.</p> -->\n        <p class=\"col-md-12\">by <a class=\"font-weight-bold\">{{ object.author}}</a>, {{ object.punlishedAt}}</p>\n        <a class=\"col-md-12 btn btn-outline-blue btn-md\">Read more</a>\n      </div>\n      <!-- Grid column -->\n  \n    </div>\n  \n    <hr class=\"my-5\">\n  \n  </section>\n  <!-- Section: Blog v.3 -->\n\n\n\n\n\n\n\n\n<!-- type 2 -->\n<section *ngIf='!grid'>\n    <div class=\"single-news mb-0\">\n        <div class=\"view overlay rounded z-depth-2 mb-0\">\n            <img class=\"img-fluid\" [src]=\"object.image || object.badge\" [alt]=\"object.name || object.title\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <div class=\"row mb-0\">\n          <div class=\"col-12\">\n            <a href=\"#!\"><span class=\"badge pink\"><i class=\"fas fa-camera pr-2\" aria-hidden=\"true\"></i>Adventure</span></a>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"col-11 text-truncate pl-0 mb-0\">\n              <h3 class=\"ellipsis-two-lines\">{{ object.name || object.title | translate}}</h3>\n          </div>\n          <a><i class=\"fas fa-angle-double-right\"></i></a>\n        </div>\n      </div>\n      <div class=\"single-news mb-0\" *ngFor=\"let tag of object.tags\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"col-11 text-truncate pl-0 mb-0\">\n            <a>{{tag}}</a>\n          </div>\n          <a><i class=\"fas fa-angle-double-right\"></i></a>\n        </div>\n      </div>\n      <a class=\"btn btn-deep-orange btn-rounded btn-md\">Read more</a>\n</section>\n           \n\n<!-- type 1 -->\n<!-- <article class=\"card-reg thumbnail\" [class.active]=\"focusedItemBtn\">\n    <div class=\"row\">\n      <section class=\"card-image col-xs-4\">\n        <figure class=\"img img-round--sm\">\n          <img [src]=\"object.image || object.badge\" [alt]=\"object.name || object.title\">\n        </figure>\n      </section>\n      <section class=\"card-info col-xs-8\">\n          <header>\n            <h3 class=\"ellipsis-two-lines\">{{ object.name || object.title | translate}}</h3>\n          </header>\n          <p *ngIf=\"object.desc\">{{ object.desc | translate | ellipsis:50 }}</p>\n      </section>\n    </div>\n  </article> -->\n  "

/***/ }),

/***/ "./src/app/pages/posts/postpreview/postpreview.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/posts/postpreview/postpreview.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.btn, .btn-primary, .card-link .btn-card, .btn-font {\n  border: none;\n  border-radius: 0px; }\n.btn:focus, .btn-primary:focus, .card-link .btn-card:focus, .btn-font:focus {\n    outline: none; }\n.btn:visited, .btn-primary:visited, .card-link .btn-card:visited, .btn-font:visited {\n    color: #fcfcfc; }\n.btn-dark, .btn-primary, .card-link .btn-card, .btn-font {\n  background-color: #707070;\n  color: #fcfcfc; }\n.btn-dark:visited, .btn-primary:visited, .card-link .btn-card:visited, .btn-font:visited {\n    background-color: #707070; }\n.btn-primary, .card-link .btn-card {\n  box-shadow: 3px 3px 3px 0px #707070;\n  transition: all 0.3s ease-in 0s;\n  min-width: 100px;\n  padding: 10px; }\n.btn-primary:hover, .card-link .btn-card:hover, .btn-primary:active, .card-link .btn-card:active {\n    box-shadow: 5px 5px 3px 0px #707070;\n    -webkit-transform: translateX(-3px);\n    transform: translateX(-3px);\n    background-color: #66cc99; }\n.btn-font {\n  position: absolute;\n  top: auto;\n  right: 50px;\n  bottom: -35px;\n  left: auto;\n  box-shadow: 0px 3px 3px 0px #707070;\n  transition: all 0.3s ease-in 0s;\n  background-color: #707070;\n  font-size: 1rem;\n  padding: 2px 10px; }\n.btn-font:hover, .btn-font:focus {\n    color: #fcfcfc; }\n.btn-font:hover {\n    background-color: #575656; }\n.btn-font.selected {\n    background-color: #66cc99; }\n.btn-font .btn-label-big {\n    font-size: 1.8rem; }\n.btn-group-line .btn, .btn-group-line .btn-primary, .btn-group-line .card-link .btn-card, .card-link .btn-group-line .btn-card, .btn-group-line .btn-font {\n  margin: 10px; }\n@media screen and (max-width: 768px) {\n  .btn-group--jumbo .btn-primary, .btn-group--jumbo .card-link .btn-card, .card-link .btn-group--jumbo .btn-card {\n    margin: 10px auto; } }\n@media screen and (max-width: 500px) {\n  .btn-group--details,\n  .btn-group--jumbo {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: flex-start;\n    align-items: flex-start; }\n    .btn-group--details .btn, .btn-group--details .btn-primary, .btn-group--details .card-link .btn-card, .card-link .btn-group--details .btn-card, .btn-group--details .btn-font,\n    .btn-group--jumbo .btn,\n    .btn-group--jumbo .btn-primary,\n    .btn-group--jumbo .card-link .btn-card,\n    .card-link .btn-group--jumbo .btn-card,\n    .btn-group--jumbo .btn-font {\n      width: 100%; } }\n.card-reg {\n  box-shadow: 3px 3px 3px 0px #707070;\n  transition: all 0.15s ease 0s;\n  background: linear-gradient(to right, #303030 50%, transparent 50%) right bottom/200% 100%;\n  border: 0;\n  border-radius: 0;\n  height: 20rem;\n  margin: auto auto 20px;\n  max-width: 300px;\n  position: relative;\n  -webkit-transform-origin: left 0% 0;\n          transform-origin: left 0% 0; }\n.card-reg.active, .card-reg:focus {\n    background-position: left bottom;\n    color: #fcfcfc; }\n.card-reg.active .btn-card, .card-reg:focus .btn-card {\n      box-shadow: 5px 5px 3px 0px #707070;\n      -webkit-transform: translateX(-3px);\n      transform: translateX(-3px);\n      background-color: #66cc99; }\n.card-reg.active .btn-card:hover, .card-reg:focus .btn-card:hover {\n        color: #fcfcfc; }\n.card-info h3 {\n  font-size: 1.6rem;\n  margin-top: 1rem; }\n.card-info p {\n  font-size: 1.2rem; }\n.card-image,\n.card-info,\n.card-link {\n  padding: 20px; }\n.card-link {\n  position: absolute;\n  top: auto;\n  right: auto;\n  bottom: 0px;\n  left: auto;\n  width: 100%; }\n.card-link .btn-card {\n    float: right; }\n@media screen and (max-width: 768px) {\n  .card-reg {\n    box-shadow: 0px 3px 3px 0px #707070; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3RwcmV2aWV3L3Bvc3RwcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZsaXBrYXJ0LzIwMTkvcG9ydGZvbGlvL3ZpbWFsa292YXRoLmdpdGh1Yi5pby9zcmMvYXBwL3RoZW1lL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZmxpcGthcnQvMjAxOS9wb3J0Zm9saW8vdmltYWxrb3ZhdGguZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdHByZXZpZXcvcG9zdHByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURZRjs7RUNURTtBRHNCRjs7RUNuQkU7QUQ2QkY7O0VDMUJFO0FEd0NGOztFQ3JDRTtBRHNKRjs7RUNuSkU7QUNqQkY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFGcEI7SUFLSSxhQUFhLEVBQUE7QUFMakI7SUFTSSxjRkNXLEVBQUE7QUVHZjtFQUNFLHlCRk5ZO0VFT1osY0ZMYSxFQUFBO0FFR2Y7SUFLSSx5QkZWVSxFQUFBO0FFY2Q7RUZrR0ksbUNBaEhVO0VBbUpaLCtCRWpJMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQU5mO0lGa0dJLG1DQWhIVTtJQXVJWixtQ0FpQm1DO0lBYm5DLDJCQWFtQztJQUNuQyx5QkE3SmUsRUFBQTtBRWdDakI7RUZ5Q0Usa0JFdEMwQjtFRnVDMUIsU0V2Q2dDO0VGd0NoQyxXRXhDc0M7RUZ5Q3RDLGFFekM2QztFRjBDN0MsVUUxQ21EO0VGaUZqRCxtQ0FoSFU7RUFtSlosK0JFbEgwQztFQUMxQyx5QkZsQ1k7RUVtQ1osZUZ6QmU7RUUwQmYsaUJBQWlCLEVBQUE7QUFSbkI7SUFZSSxjRnRDVyxFQUFBO0FFMEJmO0lBZ0JJLHlCQUFvQyxFQUFBO0FBaEJ4QztJQW9CSSx5QkZwRGEsRUFBQTtBRWdDakI7SUF3QkksaUJGdkNhLEVBQUE7QUUyQ2pCO0VBRUksWUFBWSxFQUFBO0FBSWhCO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQSxFQUNsQjtBQUdIO0VBQ0U7O0lGZ0RBLGFBQWE7SUFDYixlRS9DMkI7SUZnRDNCLHVCRWhEbUM7SUZpRG5DLHlCRWpEK0M7SUZrRC9DLHVCRWxEMkQsRUFBQTtJQUYzRDs7Ozs7O01BSUksV0FBVyxFQUFBLEVBQ1o7QUMvRUw7RUhxSEksbUNBaEhVO0VBbUpaLDZCR3RKd0M7RUFDeEMsMEZBQXdGO0VBQ3hGLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUhpQ2lCO0VHaENqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7QUFWN0I7SUFjSSxnQ0FBZ0M7SUFDaEMsY0hSVyxFQUFBO0FHUGY7TUhxSEksbUNBaEhVO01BdUlaLG1DQWlCbUM7TUFibkMsMkJBYW1DO01BQ25DLHlCQTdKZSxFQUFBO0FHRGpCO1FBcUJRLGNIZE8sRUFBQTtBR29CZjtFQUVJLGlCSFpjO0VHYWQsZ0JIZ0JhLEVBQUE7QUduQmpCO0VBT0ksaUJIbEJlLEVBQUE7QUdzQm5COzs7RUFHRSxhQUFhLEVBQUE7QUFHZjtFSDhCRSxrQkc3QjBCO0VIOEIxQixTRzlCZ0M7RUgrQmhDLFdHL0JzQztFSGdDdEMsV0doQzJDO0VIaUMzQyxVR2pDaUQ7RUFDakQsV0FBVyxFQUFBO0FBRmI7SUFNSSxZQUFZLEVBQUE7QUFJaEI7RUF0REE7SUhxSEksbUNBaEhVLEVBQUEsRUdvRFgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cHJldmlldy9wb3N0cHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29sb3Vyc1xuICovXG5cbiRwcmltYXJ5OiAjNjZjYzk5O1xuJHNlY29uZGFyeTogIzY2OTljYztcbiRhbHQ6ICM2MmIyYjA7XG4kZGFyazogIzMwMzAzMDtcbiRncmV5OiAjNzA3MDcwO1xuJGxpZ2h0LWdyZXk6ICNmMGYwZjA7XG4kbGlnaHQ6ICNmY2ZjZmM7XG4kYWxlcnQ6ICNkODc0NmE7XG4kaW5mbzogI2NjOWQxNDtcblxuLyoqXG4gKiBGb250c1xuICovXG5cbiRmb250LW1pY3JvOiAxcmVtO1xuJGZvbnQtc21hbGw6IDEuMnJlbTtcbiRmb250LWJhc2U6IDEuNnJlbTtcbiRmb250LWJpZzogMS44cmVtO1xuJGZvbnQtbWFjcm86IDIuMnJlbTtcbiRmb250LW1lZ2E6IDIuNnJlbTtcbiRmb250LWdpZ2E6IDNyZW07XG4kZm9udC10ZXJhOiA0cmVtO1xuXG4vKipcbiAqIEltYWdlc1xuICovXG5cbiRpbWctc206IDI1cHg7XG4kaW1nLW1kOiA1MHB4O1xuJGltZy1iaWc6IDc1cHg7XG4kaW1nLW1lZ2E6IDEwMHB4O1xuJGltZy1naWdhOiAxNTBweDtcblxuLyoqXG4gKiBDb250YWluZXJzXG4gKi9cblxuJGhlYWRlci1oZWlnaHQ6IDcuNXJlbTtcbiRjYXJkLWhlaWdodDogMjByZW07XG4kZ2FwLXNtOiAwLjVyZW07XG4kZ2FwLXJlZzogMS41cmVtO1xuJGdhcC1tZDogM3JlbTtcbiRnYXAtYmlnOiA0LjVyZW07XG4kZ2FwLW1lZ2E6IDZyZW07XG4kZ2FwLXRlcmE6IDQwdmg7XG4kcGFkZGluZy1zbTogMXJlbTtcblxuLyoqXG4gKiBNaXhpbnNcbiAqL1xuXG5AbWl4aW4gc3BlY2lhbC1mb250KCRzaXplLCAkY29sb3IpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGhpZ2hsaWdodCgkYmctY29sb3IsICRmb250LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmb250LWNvbG9yO1xufVxuXG5AbWl4aW4gc3F1YXJlKCR2YWx1ZSkge1xuICB3aWR0aDogJHZhbHVlO1xuICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIHJvdW5kKCR2YWx1ZSkge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAkdmFsdWU7XG4gIGhlaWdodDogJHZhbHVlO1xufVxuXG5AbWl4aW4gcG9zaXRpb24oJHR5cGUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcbiAgcG9zaXRpb246ICR0eXBlO1xuICB0b3A6ICR0b3A7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgbGVmdDogJGxlZnQ7XG59XG5cbi8vIGNlbnRlciB2ZXJ0aWNhbGx5XG5AbWl4aW4gdmVydGljYWwtYWxpZ24oJGhlaWdodCkge1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0IC8gMjtcbn1cblxuQG1peGluIGFuaW0tZHJvcGRvd24oJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZVkoJHZhbHVlKSk7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIHRyaWFuZ2xlKCRkaXIsICRjb2xvciwgJGJhc2UsICRoZWlnaHQpIHtcbiAgJHRpcDogJGhlaWdodCBzb2xpZCAkY29sb3I7XG5cbiAgQGluY2x1ZGUgc3F1YXJlKCRiYXNlKTtcbiAgYm9yZGVyOiAkYmFzZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLSN7JGRpcn06IG5vbmU7IC8vIGJvcmRlciBjb25jZXJuZWQgZGlzYXBwZWFyXG4gIEBpZiAkZGlyID09ICd0b3AnIHtcbiAgICBib3JkZXItYm90dG9tOiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ2JvdHRvbScge1xuICAgIGJvcmRlci10b3A6ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAncmlnaHQnIHtcbiAgICBib3JkZXItbGVmdDogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdsZWZ0JyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdGlwO1xuICB9XG59XG5cbkBtaXhpbiBkcm9wLXNoYWRvdygkaXNJbnNldCwgJGhvciwgJHZlciwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuICBAaWYgJGlzSW5zZXQgPT0gdHJ1ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICB9IEBlbHNlIGlmICRpc0luc2V0ID09IGZhbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIGZsZXgtbGF5b3V0KCRoYXNXcmFwOiBub3dyYXAsICRqdXN0aWY6IGZsZXgtc3RhcnQsICRhbGlnbkNvbnRlbnQ6IHN0cmV0Y2gsICRhbGlnbkl0ZW1zOiBzdHJldGNoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogJGhhc1dyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZjtcbiAgYWxpZ24tY29udGVudDogJGFsaWduQ29udGVudDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQsICRjb2xvciwgJHJhZGl1cykge1xuICBib3JkZXItdG9wOiAkdG9wIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiAkcmlnaHQgc29saWQgJGNvbG9yO1xuICBib3JkZXItYm90dG9tOiAkYm90dG9tIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLWxlZnQ6ICRsZWZ0IHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbn1cblxuLy8gQU5JTVNcblxuQG1peGluIHRyYW5zZm9ybSgkdGFuc2Zvcm1hdGlvbikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1tb3otdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW1zLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1vLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIHRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wLCAkZHVyLCAkdGltaW5nLCAkZGVsYXksICRvdGhlcnMuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICB0cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xufVxuXG5AbWl4aW4gYnRuLWFuaW0oKSB7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCA1cHgsIDVweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTNweCkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cblxuLyoqXG4gKiBHZW5lcmFsXG4gKi9cblxuLy8gQ29udGFpbmVyXG5cbiVuby1wYWRkaW5nIHsgcGFkZGluZzogMDsgfVxuXG4lbm8tbWFyZ2luIHsgbWFyZ2luOiAwOyB9XG5cbiVibG9jay1jZW50cmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4lYmxvY2staGFsZi1jZW50cmVkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8vIEJvcmRlcnNcblxuJW5vLXJhZGl1cyB7IGJvcmRlci1yYWRpdXM6IDA7IH1cblxuJW5vLWJvcmRlciB7IGJvcmRlcjogMDsgfVxuXG4ldHJpYW5nbGVzLXBsdWdnZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAyNSU7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbiVidG4tZmlsdGVyIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGNvbG9yOiAkbGlnaHQ7XG59XG5cbiVidG4tZmlsdGVyLWFuaW0ge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVZKDEuMSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cbiIsIi8qKlxuICogQ29sb3Vyc1xuICovXG4vKipcbiAqIEZvbnRzXG4gKi9cbi8qKlxuICogSW1hZ2VzXG4gKi9cbi8qKlxuICogQ29udGFpbmVyc1xuICovXG4vKipcbiAqIE1peGluc1xuICovXG4vKipcbiAqIEdlbmVyYWxcbiAqL1xuLmJ0biwgLmJ0bi1wcmltYXJ5LCAuY2FyZC1saW5rIC5idG4tY2FyZCwgLmJ0bi1mb250IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7IH1cbiAgLmJ0bjpmb2N1cywgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuY2FyZC1saW5rIC5idG4tY2FyZDpmb2N1cywgLmJ0bi1mb250OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5idG46dmlzaXRlZCwgLmJ0bi1wcmltYXJ5OnZpc2l0ZWQsIC5jYXJkLWxpbmsgLmJ0bi1jYXJkOnZpc2l0ZWQsIC5idG4tZm9udDp2aXNpdGVkIHtcbiAgICBjb2xvcjogI2ZjZmNmYzsgfVxuXG4uYnRuLWRhcmssIC5idG4tcHJpbWFyeSwgLmNhcmQtbGluayAuYnRuLWNhcmQsIC5idG4tZm9udCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG4gIGNvbG9yOiAjZmNmY2ZjOyB9XG4gIC5idG4tZGFyazp2aXNpdGVkLCAuYnRuLXByaW1hcnk6dmlzaXRlZCwgLmNhcmQtbGluayAuYnRuLWNhcmQ6dmlzaXRlZCwgLmJ0bi1mb250OnZpc2l0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7IH1cblxuLmJ0bi1wcmltYXJ5LCAuY2FyZC1saW5rIC5idG4tY2FyZCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7IH1cbiAgLmJ0bi1wcmltYXJ5OmhvdmVyLCAuY2FyZC1saW5rIC5idG4tY2FyZDpob3ZlciwgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmNhcmQtbGluayAuYnRuLWNhcmQ6YWN0aXZlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCAjNzA3MDcwO1xuICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmNjOTk7IH1cblxuLmJ0bi1mb250IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGF1dG87XG4gIHJpZ2h0OiA1MHB4O1xuICBib3R0b206IC0zNXB4O1xuICBsZWZ0OiBhdXRvO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDJweCAxMHB4OyB9XG4gIC5idG4tZm9udDpob3ZlciwgLmJ0bi1mb250OmZvY3VzIHtcbiAgICBjb2xvcjogI2ZjZmNmYzsgfVxuICAuYnRuLWZvbnQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzU2NTY7IH1cbiAgLmJ0bi1mb250LnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZjYzk5OyB9XG4gIC5idG4tZm9udCAuYnRuLWxhYmVsLWJpZyB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07IH1cblxuLmJ0bi1ncm91cC1saW5lIC5idG4sIC5idG4tZ3JvdXAtbGluZSAuYnRuLXByaW1hcnksIC5idG4tZ3JvdXAtbGluZSAuY2FyZC1saW5rIC5idG4tY2FyZCwgLmNhcmQtbGluayAuYnRuLWdyb3VwLWxpbmUgLmJ0bi1jYXJkLCAuYnRuLWdyb3VwLWxpbmUgLmJ0bi1mb250IHtcbiAgbWFyZ2luOiAxMHB4OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZ3JvdXAtLWp1bWJvIC5idG4tcHJpbWFyeSwgLmJ0bi1ncm91cC0tanVtYm8gLmNhcmQtbGluayAuYnRuLWNhcmQsIC5jYXJkLWxpbmsgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bzsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5idG4tZ3JvdXAtLWRldGFpbHMsXG4gIC5idG4tZ3JvdXAtLWp1bWJvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLCAuYnRuLWdyb3VwLS1kZXRhaWxzIC5idG4tcHJpbWFyeSwgLmJ0bi1ncm91cC0tZGV0YWlscyAuY2FyZC1saW5rIC5idG4tY2FyZCwgLmNhcmQtbGluayAuYnRuLWdyb3VwLS1kZXRhaWxzIC5idG4tY2FyZCwgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLWZvbnQsXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bixcbiAgICAuYnRuLWdyb3VwLS1qdW1ibyAuYnRuLXByaW1hcnksXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmNhcmQtbGluayAuYnRuLWNhcmQsXG4gICAgLmNhcmQtbGluayAuYnRuLWdyb3VwLS1qdW1ibyAuYnRuLWNhcmQsXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1mb250IHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuLmNhcmQtcmVnIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlIDBzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMDMwMzAgNTAlLCB0cmFuc3BhcmVudCA1MCUpIHJpZ2h0IGJvdHRvbS8yMDAlIDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMjBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IDAlIDA7IH1cbiAgLmNhcmQtcmVnLmFjdGl2ZSwgLmNhcmQtcmVnOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgICBjb2xvcjogI2ZjZmNmYzsgfVxuICAgIC5jYXJkLXJlZy5hY3RpdmUgLmJ0bi1jYXJkLCAuY2FyZC1yZWc6Zm9jdXMgLmJ0bi1jYXJkIHtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCAjNzA3MDcwO1xuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmNjOTk7IH1cbiAgICAgIC5jYXJkLXJlZy5hY3RpdmUgLmJ0bi1jYXJkOmhvdmVyLCAuY2FyZC1yZWc6Zm9jdXMgLmJ0bi1jYXJkOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmY2ZjZmM7IH1cblxuLmNhcmQtaW5mbyBoMyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtOyB9XG5cbi5jYXJkLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XG5cbi5jYXJkLWltYWdlLFxuLmNhcmQtaW5mbyxcbi5jYXJkLWxpbmsge1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5jYXJkLWxpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiBhdXRvO1xuICB3aWR0aDogMTAwJTsgfVxuICAuY2FyZC1saW5rIC5idG4tY2FyZCB7XG4gICAgZmxvYXQ6IHJpZ2h0OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLXJlZyB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwOyB9IH1cbiIsIi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogJGxpZ2h0O1xuICB9XG59XG5cbi5idG4tZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICBjb2xvcjogJGxpZ2h0O1xuXG4gICY6dmlzaXRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIH1cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgQGV4dGVuZCAuYnRuO1xuICBAZXh0ZW5kIC5idG4tZGFyaztcbiAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDNweCwgM3B4LCAzcHgsIDBweCwgJGdyZXkpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC4zcywgZWFzZS1pbiwgMHMpO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gICY6aG92ZXIsXG4gICY6YWN0aXZlIHtcbiAgICBAaW5jbHVkZSBidG4tYW5pbSgpO1xuICB9XG59XG5cbi5idG4tZm9udCB7XG4gIEBleHRlbmQgLmJ0bjtcbiAgQGV4dGVuZCAuYnRuLWRhcms7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCBhdXRvLCA1MHB4LCAtMzVweCwgYXV0byk7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCAwcHgsIDNweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuM3MsIGVhc2UtaW4sIDBzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtbWljcm87XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGlnaHQ7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGdyZXksIDEwJSk7XG4gIH1cblxuICAmLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgfVxuXG4gIC5idG4tbGFiZWwtYmlnIHtcbiAgICBmb250LXNpemU6ICRmb250LWJpZztcbiAgfVxufVxuXG4uYnRuLWdyb3VwLWxpbmUge1xuICAuYnRuIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1wcmltYXJ5IHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYnRuLWdyb3VwLS1kZXRhaWxzLFxuICAuYnRuLWdyb3VwLS1qdW1ibyB7XG4gICAgQGluY2x1ZGUgZmxleC1sYXlvdXQod3JhcCwgY2VudGVyLCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0KTtcbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ2J1dHRvbnMnO1xuXG4uY2FyZC1yZWcge1xuICBAaW5jbHVkZSBkcm9wLXNoYWRvdyhmYWxzZSwgM3B4LCAzcHgsIDNweCwgMHB4LCAkZ3JleSk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjE1cywgZWFzZSwgMHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRkYXJrIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSByaWdodCBib3R0b20vMjAwJSAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogJGNhcmQtaGVpZ2h0O1xuICBtYXJnaW46IGF1dG8gYXV0byAyMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgMCUgMDsgLy8gZm9yIHNjYWxpbmcgZnJvbSB0b3AgdG8gYm90dG9tXG5cbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICAgIGNvbG9yOiAkbGlnaHQ7XG5cbiAgICAuYnRuLWNhcmQge1xuICAgICAgQGluY2x1ZGUgYnRuLWFuaW0oKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkbGlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jYXJkLWluZm8ge1xuICBoMyB7XG4gICAgZm9udC1zaXplOiAkZm9udC1iYXNlO1xuICAgIG1hcmdpbi10b3A6ICRwYWRkaW5nLXNtO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zbWFsbDtcbiAgfVxufVxuXG4uY2FyZC1pbWFnZSxcbi5jYXJkLWluZm8sXG4uY2FyZC1saW5rIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhcmQtbGluayB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCBhdXRvLCBhdXRvLCAwcHgsIGF1dG8pO1xuICB3aWR0aDogMTAwJTtcblxuICAuYnRuLWNhcmQge1xuICAgIEBleHRlbmQgLmJ0bi1wcmltYXJ5O1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZC1yZWcge1xuICAgIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCAwcHgsIDNweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/posts/postpreview/postpreview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/posts/postpreview/postpreview.component.ts ***!
  \******************************************************************/
/*! exports provided: PostpreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostpreviewComponent", function() { return PostpreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostpreviewComponent = /** @class */ (function () {
    function PostpreviewComponent() {
        // @Output() public gridStyle = new EventEmitter;
        this.focusedItemBtn = false;
    }
    PostpreviewComponent.prototype.ngOnInit = function () {
        if (this.grid === '') {
            // this.grid = 'row';
            this.grid = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostpreviewComponent.prototype, "focusedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostpreviewComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostpreviewComponent.prototype, "object", void 0);
    PostpreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postpreview',
            template: __webpack_require__(/*! ./postpreview.component.html */ "./src/app/pages/posts/postpreview/postpreview.component.html"),
            styles: [__webpack_require__(/*! ./postpreview.component.scss */ "./src/app/pages/posts/postpreview/postpreview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostpreviewComponent);
    return PostpreviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/posts/posts.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/posts/posts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container wrap-cards row\">\n\n    <button class=\"btn dropdown-toggle waves-effect text-dark waves-light\" \n    role=\"button\"\n    (click)=\"changeStyle()\">\n        row / <span _ngcontent-c1=\"\" class=\"btn-label-big\">colum</span>\n    </button>\n    <div class=\"container\">\n        <section class=\"magazine-section my-5\">\n\n            <h2 class=\"h1-responsive font-weight-bold text-center my-5\">Recent posts</h2>\n            <!-- <p class=\"text-center dark-grey-text w-responsive mx-auto mb-5\">Duis aute irure dolor in reprehenderit in\n                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->\n\n            <div class=\"row\">\n                    <span *ngIf=\"grid\">\n                <app-postpreview class=\"col-xs-12 col-sm-12 col-md-12 mb-4\" *ngFor=\"let post of posts \" [object]='post'\n                    (click)=goTo(post); [grid]='grid'>\n                </app-postpreview>\n            </span>\n                <span *ngIf=\"!grid\">\n                <app-postpreview class=\"col-xs-12 col-sm-6 col-md-4 mb-4\" *ngFor=\"let post of posts \" [object]='post'\n                (click)=goTo(post); [grid]='grid'>\n            </app-postpreview>\n        </span>\n            </div>\n        </section>\n    </div>\n\n</main>"

/***/ }),

/***/ "./src/app/pages/posts/posts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/posts/posts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/posts/posts.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/posts/posts.component.ts ***!
  \************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_posts_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/posts/post.service */ "./src/app/providers/posts/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService, router) {
        this.postService = postService;
        this.router = router;
        this.gridStyle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.grid = true;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Posts
        this.postService.getPosts()
            .subscribe(function (data) {
            _this.posts = data.articles;
            console.log(_this.posts);
        }, console.error, function () { });
    };
    PostsComponent.prototype.goTo = function (object) {
        // this.analyticsService.captureCustomEvent(
        //   'navigation',
        //   `Navigate to details page for ${this.type}`,
        //   `${object.name}`,
        //   1);
        // We cannot pass an object directly, only a string
        this.router.navigate(['postdetail', { id: object.id }]);
    };
    PostsComponent.prototype.focusItem = function (itemHovered) {
        // focus will refer to the id of the selected item
        // this.focusedItem = itemHovered;
    };
    PostsComponent.prototype.changeStyle = function () {
        this.grid = !this.grid;
        console.log(this.grid, 'this.grid');
        this.gridStyle.emit(this.grid);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PostsComponent.prototype, "gridStyle", void 0);
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/pages/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/pages/posts/posts.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_providers_posts_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-stretch\">\n  <app-filters [page]=\"'projects'\" (selectFilter)=\"filterFor($event)\"></app-filters>\n\n  <main class=\"row container-dual\">\n    <!-- LIST -->\n    <app-list-preview\n      class=\"col-xs-12 col-sm-4 container-select block-center-xs\"\n      [objects]=\"projects\" [type]=\"'project'\"\n      [filterValue]=\"filterValue\"\n      (focusedItem)=\"focusItem($event)\">\n    </app-list-preview>\n\n    <!-- PREVIEW -->\n    <app-preview class=\"col-xs-8 container-preview hidden-xs\" [focusedItem]=\"focusedItem\" [type]=\"'project'\"></app-preview>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_project_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/project/project.service */ "./src/app/providers/project/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
        this.filterValue = '';
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projects = this.projectService.getProjects();
    };
    /**
     * Detect hovered item
     *
     * @param itemHovered
     */
    ProjectsComponent.prototype.focusItem = function (itemHovered) {
        // focus will refer to the id of the selected item
        this.focusedItem = itemHovered;
    };
    /**
     * Capture the filter selected in filters component
     * Will be passed to list items component
     *
     * @param filter
     */
    ProjectsComponent.prototype.filterFor = function (filter) {
        this.filterValue = filter;
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/pages/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/pages/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_project_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/sitemap/sitemap.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/sitemap/sitemap.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <section class=\"wrap-reg\">\n    <p>\n      Following list represents the different pages and their respective paths depending on their indentations.\n    </p>\n\n    <ul>\n      <li>{{ 'Home' | translate }}</li>\n      <li>{{ 'About me' | translate }}</li>\n      <li>{{ 'Projects' | translate }}</li>\n      <li>{{ 'Experience' | translate }}</li>\n      <li>{{ 'Education' | translate }}</li>\n      <li>{{ 'Skills' | translate }}</li>\n      <li>{{ 'Details' | translate }}</li>\n      <li>{{ 'Cookie policy' | translate }}</li>\n      <li>{{ 'Sitemap' | translate }}</li>\n      <li>{{ 'Terms & conditions' | translate }}</li>\n    </ul>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/sitemap/sitemap.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sitemap/sitemap.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpdGVtYXAvc2l0ZW1hcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/sitemap/sitemap.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sitemap/sitemap.component.ts ***!
  \****************************************************/
/*! exports provided: SitemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemapComponent", function() { return SitemapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SitemapComponent = /** @class */ (function () {
    function SitemapComponent() {
    }
    SitemapComponent.prototype.ngOnInit = function () {
    };
    SitemapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sitemap',
            template: __webpack_require__(/*! ./sitemap.component.html */ "./src/app/pages/sitemap/sitemap.component.html"),
            styles: [__webpack_require__(/*! ./sitemap.component.scss */ "./src/app/pages/sitemap/sitemap.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SitemapComponent);
    return SitemapComponent;
}());



/***/ }),

/***/ "./src/app/pages/skills/skills.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/skills/skills.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-stretch wrap-stretch\">\n\n  <app-filters [page]=\"'skills'\" (selectFilter)=\"filterFor($event)\"></app-filters>\n\n  <!-- Filter by frequency -->\n  <div class=\"container-toggle\">\n    <label class=\"toggle\">\n      <input class=\"toggle-input\" type=\"checkbox\" (change)=\"frequency ? frequency = false : frequency = true\">\n      <span class=\"toggle-btn\"></span>\n    </label>\n    <span class=\"toggle-label\">Expertise</span>\n  </div>\n\n  <!-- RESULT -->\n  <main class=\"container wrap-cards row\">\n    <app-card\n      class=\"col-xs-12 col-sm-4 col-md-3\"\n      *ngFor=\"let skill of skills | filter:{ category: value, frequent: frequency }\"\n      [object]=\"skill\"\n      (moreInfo)=\"openModal($event, 'skill')\">\n    </app-card>\n  </main>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/skills/skills.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/skills/skills.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.container-toggle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto; }\n.container-toggle .toggle-label {\n    float: left;\n    width: 50%; }\n.toggle {\n  float: left;\n  display: inline-block;\n  height: 34px;\n  margin: 0 auto;\n  position: relative;\n  width: 60px; }\n.toggle-input {\n  display: none; }\n.toggle-input:checked + .toggle-btn {\n  background-color: #66cc99; }\n.toggle-input:checked + .toggle-btn::before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px); }\n.toggle-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transition: all 0.4s ease 0s;\n  background-color: #707070;\n  cursor: pointer; }\n.toggle-btn::before {\n    position: absolute;\n    top: auto;\n    right: auto;\n    bottom: 4px;\n    left: 4px;\n    width: 26px;\n    height: 26px;\n    transition: all 0.4s ease 0s;\n    content: '';\n    background-color: white; }\n@media screen and (max-width: 1024px) {\n  .container-toggle {\n    position: static;\n    margin: 40px auto; }\n    .container-toggle .toggle, .container-toggle .toggle-label {\n      float: none;\n      display: block; }\n    .container-toggle .toggle-label {\n      text-align: center;\n      width: 100%; } }\n@media screen and (max-width: 768px) {\n  .container-toggle {\n    display: block;\n    position: relative;\n    width: 80px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZmxpcGthcnQvMjAxOS9wb3J0Zm9saW8vdmltYWxrb3ZhdGguZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBRFlGOztFQ1RFO0FEc0JGOztFQ25CRTtBRDZCRjs7RUMxQkU7QUR3Q0Y7O0VDckNFO0FEc0pGOztFQ25KRTtBQ2ZGO0VGMkVFLGtCRTFFMEI7RUYyRTFCLE1FM0U2QjtFRjRFN0IsUUU1RWdDO0VGNkVoQyxZRTdFc0M7RUY4RXRDLFVFOUU0QyxFQUFBO0FBRDlDO0lBSUksV0FBVztJQUNYLFVBQVUsRUFBQTtBQUtkO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7QUFJYjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBSUkseUJGMUJhLEVBQUE7QUVzQmpCO0lGcUhFLG1DRTlHdUM7SUZrSHZDLDJCRWxIdUMsRUFBQTtBQU16QztFRnNDRSxrQkVyQzBCO0VGc0MxQixNRXRDNkI7RUZ1QzdCLFFFdkNnQztFRndDaEMsU0V4Q21DO0VGeUNuQyxPRXpDc0M7RUZtSHRDLDRCRWxIdUM7RUFDdkMseUJGbENZO0VFbUNaLGVBQWUsRUFBQTtBQUpqQjtJRnNDRSxrQkUvQjRCO0lGZ0M1QixTRWhDa0M7SUZpQ2xDLFdFakN3QztJRmtDeEMsV0VsQzZDO0lGbUM3QyxTRW5Da0Q7SUZvQmxELFdFbkJzQjtJRm9CdEIsWUVwQnNCO0lGNEd0Qiw0QkUzR3lDO0lBQ3ZDLFdBQVc7SUFDWCx1QkFBdUIsRUFBQTtBQUkzQjtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0lBRm5CO01BSUksV0FBVztNQUNYLGNBQWMsRUFBQTtJQUxsQjtNQVFJLGtCQUFrQjtNQUNsQixXQUFXLEVBQUEsRUFDWjtBQUlMO0VBRUU7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29sb3Vyc1xuICovXG5cbiRwcmltYXJ5OiAjNjZjYzk5O1xuJHNlY29uZGFyeTogIzY2OTljYztcbiRhbHQ6ICM2MmIyYjA7XG4kZGFyazogIzMwMzAzMDtcbiRncmV5OiAjNzA3MDcwO1xuJGxpZ2h0LWdyZXk6ICNmMGYwZjA7XG4kbGlnaHQ6ICNmY2ZjZmM7XG4kYWxlcnQ6ICNkODc0NmE7XG4kaW5mbzogI2NjOWQxNDtcblxuLyoqXG4gKiBGb250c1xuICovXG5cbiRmb250LW1pY3JvOiAxcmVtO1xuJGZvbnQtc21hbGw6IDEuMnJlbTtcbiRmb250LWJhc2U6IDEuNnJlbTtcbiRmb250LWJpZzogMS44cmVtO1xuJGZvbnQtbWFjcm86IDIuMnJlbTtcbiRmb250LW1lZ2E6IDIuNnJlbTtcbiRmb250LWdpZ2E6IDNyZW07XG4kZm9udC10ZXJhOiA0cmVtO1xuXG4vKipcbiAqIEltYWdlc1xuICovXG5cbiRpbWctc206IDI1cHg7XG4kaW1nLW1kOiA1MHB4O1xuJGltZy1iaWc6IDc1cHg7XG4kaW1nLW1lZ2E6IDEwMHB4O1xuJGltZy1naWdhOiAxNTBweDtcblxuLyoqXG4gKiBDb250YWluZXJzXG4gKi9cblxuJGhlYWRlci1oZWlnaHQ6IDcuNXJlbTtcbiRjYXJkLWhlaWdodDogMjByZW07XG4kZ2FwLXNtOiAwLjVyZW07XG4kZ2FwLXJlZzogMS41cmVtO1xuJGdhcC1tZDogM3JlbTtcbiRnYXAtYmlnOiA0LjVyZW07XG4kZ2FwLW1lZ2E6IDZyZW07XG4kZ2FwLXRlcmE6IDQwdmg7XG4kcGFkZGluZy1zbTogMXJlbTtcblxuLyoqXG4gKiBNaXhpbnNcbiAqL1xuXG5AbWl4aW4gc3BlY2lhbC1mb250KCRzaXplLCAkY29sb3IpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGhpZ2hsaWdodCgkYmctY29sb3IsICRmb250LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmb250LWNvbG9yO1xufVxuXG5AbWl4aW4gc3F1YXJlKCR2YWx1ZSkge1xuICB3aWR0aDogJHZhbHVlO1xuICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIHJvdW5kKCR2YWx1ZSkge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAkdmFsdWU7XG4gIGhlaWdodDogJHZhbHVlO1xufVxuXG5AbWl4aW4gcG9zaXRpb24oJHR5cGUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcbiAgcG9zaXRpb246ICR0eXBlO1xuICB0b3A6ICR0b3A7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgbGVmdDogJGxlZnQ7XG59XG5cbi8vIGNlbnRlciB2ZXJ0aWNhbGx5XG5AbWl4aW4gdmVydGljYWwtYWxpZ24oJGhlaWdodCkge1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0IC8gMjtcbn1cblxuQG1peGluIGFuaW0tZHJvcGRvd24oJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZVkoJHZhbHVlKSk7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIHRyaWFuZ2xlKCRkaXIsICRjb2xvciwgJGJhc2UsICRoZWlnaHQpIHtcbiAgJHRpcDogJGhlaWdodCBzb2xpZCAkY29sb3I7XG5cbiAgQGluY2x1ZGUgc3F1YXJlKCRiYXNlKTtcbiAgYm9yZGVyOiAkYmFzZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLSN7JGRpcn06IG5vbmU7IC8vIGJvcmRlciBjb25jZXJuZWQgZGlzYXBwZWFyXG4gIEBpZiAkZGlyID09ICd0b3AnIHtcbiAgICBib3JkZXItYm90dG9tOiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ2JvdHRvbScge1xuICAgIGJvcmRlci10b3A6ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAncmlnaHQnIHtcbiAgICBib3JkZXItbGVmdDogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdsZWZ0JyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdGlwO1xuICB9XG59XG5cbkBtaXhpbiBkcm9wLXNoYWRvdygkaXNJbnNldCwgJGhvciwgJHZlciwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuICBAaWYgJGlzSW5zZXQgPT0gdHJ1ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICB9IEBlbHNlIGlmICRpc0luc2V0ID09IGZhbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIGZsZXgtbGF5b3V0KCRoYXNXcmFwOiBub3dyYXAsICRqdXN0aWY6IGZsZXgtc3RhcnQsICRhbGlnbkNvbnRlbnQ6IHN0cmV0Y2gsICRhbGlnbkl0ZW1zOiBzdHJldGNoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogJGhhc1dyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZjtcbiAgYWxpZ24tY29udGVudDogJGFsaWduQ29udGVudDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQsICRjb2xvciwgJHJhZGl1cykge1xuICBib3JkZXItdG9wOiAkdG9wIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiAkcmlnaHQgc29saWQgJGNvbG9yO1xuICBib3JkZXItYm90dG9tOiAkYm90dG9tIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLWxlZnQ6ICRsZWZ0IHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbn1cblxuLy8gQU5JTVNcblxuQG1peGluIHRyYW5zZm9ybSgkdGFuc2Zvcm1hdGlvbikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1tb3otdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW1zLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1vLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIHRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wLCAkZHVyLCAkdGltaW5nLCAkZGVsYXksICRvdGhlcnMuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICB0cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xufVxuXG5AbWl4aW4gYnRuLWFuaW0oKSB7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCA1cHgsIDVweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTNweCkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cblxuLyoqXG4gKiBHZW5lcmFsXG4gKi9cblxuLy8gQ29udGFpbmVyXG5cbiVuby1wYWRkaW5nIHsgcGFkZGluZzogMDsgfVxuXG4lbm8tbWFyZ2luIHsgbWFyZ2luOiAwOyB9XG5cbiVibG9jay1jZW50cmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4lYmxvY2staGFsZi1jZW50cmVkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8vIEJvcmRlcnNcblxuJW5vLXJhZGl1cyB7IGJvcmRlci1yYWRpdXM6IDA7IH1cblxuJW5vLWJvcmRlciB7IGJvcmRlcjogMDsgfVxuXG4ldHJpYW5nbGVzLXBsdWdnZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAyNSU7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbiVidG4tZmlsdGVyIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGNvbG9yOiAkbGlnaHQ7XG59XG5cbiVidG4tZmlsdGVyLWFuaW0ge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVZKDEuMSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cbiIsIi8qKlxuICogQ29sb3Vyc1xuICovXG4vKipcbiAqIEZvbnRzXG4gKi9cbi8qKlxuICogSW1hZ2VzXG4gKi9cbi8qKlxuICogQ29udGFpbmVyc1xuICovXG4vKipcbiAqIE1peGluc1xuICovXG4vKipcbiAqIEdlbmVyYWxcbiAqL1xuLmNvbnRhaW5lci10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogYXV0bzsgfVxuICAuY29udGFpbmVyLXRvZ2dsZSAudG9nZ2xlLWxhYmVsIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlOyB9XG5cbi50b2dnbGUge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MHB4OyB9XG5cbi50b2dnbGUtaW5wdXQge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi50b2dnbGUtaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2Y2M5OTsgfVxuICAudG9nZ2xlLWlucHV0OmNoZWNrZWQgKyAudG9nZ2xlLWJ0bjo6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7IH1cblxuLnRvZ2dsZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLnRvZ2dsZS1idG46OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICBib3R0b206IDRweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY29udGFpbmVyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBtYXJnaW46IDQwcHggYXV0bzsgfVxuICAgIC5jb250YWluZXItdG9nZ2xlIC50b2dnbGUsIC5jb250YWluZXItdG9nZ2xlIC50b2dnbGUtbGFiZWwge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5jb250YWluZXItdG9nZ2xlIC50b2dnbGUtbGFiZWwge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4OyB9IH1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5jb250YWluZXItdG9nZ2xlIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsIDAsIDAsIGF1dG8sIGF1dG8pO1xuXG4gIC50b2dnbGUtbGFiZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuLy8gVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBidG4tdG9nZ2xlXG4udG9nZ2xlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjBweDtcbn1cblxuLy8gSW5wdXRcbi50b2dnbGUtaW5wdXQge1xuICBkaXNwbGF5OiBub25lOyAvLyBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveFxufVxuXG4udG9nZ2xlLWlucHV0OmNoZWNrZWQge1xuXG4gIC8vIGVsZW0gYWRqYWNlbnQgdG8gdG9nZ2xlLWlucHV0IGFmdGVyIGNoZWNrZWRcbiAgKyAudG9nZ2xlLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoMjZweCkpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgc2xpZGVyXG4udG9nZ2xlLWJ0biB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCAwLCAwLCAwLCAwKTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOjpiZWZvcmUge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCBhdXRvLCBhdXRvLCA0cHgsIDRweCk7XG4gICAgQGluY2x1ZGUgc3F1YXJlKDI2cHgpO1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjRzLCBlYXNlLCAwcyk7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jb250YWluZXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIC50b2dnbGUsIC50b2dnbGUtbGFiZWwge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnRvZ2dsZS1sYWJlbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLy8gUmV0dXJuIGxpbmUgZm9yIHRvZ2dsZVxuICAuY29udGFpbmVyLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/skills/skills.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/skills/skills.component.ts ***!
  \**************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_skill_skill_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/skill/skill.service */ "./src/app/providers/skill/skill.service.ts");
/* harmony import */ var _providers_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/modal/modal.service */ "./src/app/providers/modal/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillService, modalService) {
        this.skillService = skillService;
        this.modalService = modalService;
        this.value = '';
        this.detailsModal = {};
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.skills = this.skillService.getSkills();
    };
    /**
     * Affect the value to the filter
     * @param filter
     */
    SkillsComponent.prototype.filterFor = function (filter) {
        this.value = filter;
    };
    /**
     * Open modal
     * Resolve the item to display thanks to its id and type
     *
     * @param $event
     * @param {string} type
     * @returns {any}
     */
    SkillsComponent.prototype.openModal = function ($event, type) {
        this.typeModal = type;
        this.detailsModal = this.modalService.openModal($event, type);
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/pages/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/pages/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_skill_skill_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"],
            _providers_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/pages/terms/terms.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/terms/terms.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <section class=\"wrap-reg\">\n    <h2>About this app</h2>\n\n    <p>\n      This app is under MIT License:\n      <a href=\"https://choosealicense.com/licenses/mit/\" target=\"_blank\">See more</a>\n    </p>\n  </section>\n\n  <section class=\"wrap-reg\">\n    <h2>About the assets</h2>\n\n    <p>I don't own the following assets:</p>\n\n    <ul>\n      <li>Icons from Glyphicons:\n        <a href=\"https://glyphicons.com/license/\" target=\"_blank\">License</a>\n      </li>\n      <li>Logos/photos from softwares used in this app</li>\n      <li>Logos/photos from companies used in this app</li>\n      <li>Logos/photos from services used in this app</li>\n      <li>Logos/photos from educational organisms (private or public) used in this app</li>\n    </ul>\n\n    <p><b>I however claims to own the other assets and request credits for reusing them.</b></p>\n  </section>\n\n  <section class=\"wrap-reg\">\n    <h2>About the code</h2>\n\n    <p>\n      This app has been realised with the framework Angular, owned by Google and under MIT License:\n      <a href=\"https://angular.io/license\" target=\"_blank\">See more</a>\n    </p>\n\n    <p>You can reuse the code and modify it for your own business if you wish.</p>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/terms/terms.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/terms/terms.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/terms/terms.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/terms/terms.component.ts ***!
  \************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/pages/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.scss */ "./src/app/pages/terms/terms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/providers/codeschool/codeschool.service.ts":
/*!************************************************************!*\
  !*** ./src/app/providers/codeschool/codeschool.service.ts ***!
  \************************************************************/
/*! exports provided: CodeschoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeschoolService", function() { return CodeschoolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeschoolService = /** @class */ (function () {
    function CodeschoolService(http) {
        this.http = http;
    }
    /**
     * No need to invoke map() to parse out the response. Method has been removed,
     * and we simply return the Observable. Default responseType is JSON,
     * so the response data is already parsed for us
     *
     * @param {string} id
     * @returns {Observable<any>}
     */
    CodeschoolService.prototype.getCodeschoolProfile = function () {
        // return this.http.get<any>('http://localhost:4200/data/mock-codeschool.json');
        return this.http.get('https://vimalkovath.github.io/src/assets/data/mock-codeschool.json');
    };
    CodeschoolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CodeschoolService);
    return CodeschoolService;
}());



/***/ }),

/***/ "./src/app/providers/cookie/cookie.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/cookie/cookie.service.ts ***!
  \****************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    /**
     * Parse the cookie to return the value associated to the name passed
     *
     * @param {string} name
     * @returns {string}
     */
    CookieService.prototype.getCookie = function (name) {
        var cookieArray = document.cookie.split(';');
        var cookieArrayLength = cookieArray.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < cookieArrayLength; i += 1) {
            c = cookieArray[i].replace(/^\s+/g, ''); // removes empty spaces
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length); // return value of the cookie's name
            }
        }
        return '';
    };
    /**
     * Empty the value associated to the name passed
     *
     * @param name
     */
    CookieService.prototype.deleteCookie = function (name) {
        this.setCookie(name, '', -1);
    };
    /**
     * Creates a cookie by defining its name, duration, value (associated to the name)
     * We can also define a specific path, root by default.
     *
     * @param {string} name
     * @param {string} value
     * @param {number} expireDays
     * @param {string} path
     */
    CookieService.prototype.setCookie = function (name, value, expireDays, path) {
        if (path === void 0) { path = ''; }
        // Set expiration date
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var expires = 'expires=' + d.toUTCString();
        // Generate the cookie
        document.cookie = name + '=' + value + '; ' + expires + (path.length > 0 ? '; path=' + path : '');
    };
    CookieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/providers/diploma/diploma.service.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/diploma/diploma.service.ts ***!
  \******************************************************/
/*! exports provided: DiplomaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiplomaService", function() { return DiplomaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_mock_diplomas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/mock-diplomas */ "./src/app/shared/data/mock-diplomas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Data

var DiplomaService = /** @class */ (function () {
    function DiplomaService() {
    }
    DiplomaService.prototype.getDiplomas = function () {
        return _shared_data_mock_diplomas__WEBPACK_IMPORTED_MODULE_1__["DIPLOMAS"];
    };
    DiplomaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DiplomaService);
    return DiplomaService;
}());



/***/ }),

/***/ "./src/app/providers/g-analytics/g-analytics.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/providers/g-analytics/g-analytics.service.ts ***!
  \**************************************************************/
/*! exports provided: GAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAnalyticsService", function() { return GAnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GAnalyticsService = /** @class */ (function () {
    function GAnalyticsService(router) {
        this.router = router;
        this.host = window.location.hostname;
    }
    /**
     * Send a pageview event to GA
     * Page visited is passed
     * Disabled if actions performed on localhost
     *
     * @param page
     */
    GAnalyticsService.prototype.captureRouterEvent = function (page) {
        if (this.host !== 'localhost') {
            this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                    ga('set', 'page', event.urlAfterRedirects);
                    ga('send', 'pageview', page);
                }
            });
        }
    };
    /**
     * Send a custom event to GA
     * eventCategory & eventAction are mandatory
     * every parameter has to match its type
     * Disabled if actions performed on localhost
     *
     * eventValues:
     * 1 -> navigate from list item
     * 2 -> click card button for modal
     * 3 -> navigate from modal
     * 4 -> update details page
     *
     * @param {string} eventCategory
     * @param {string} eventAction
     * @param {string} eventLabel
     * @param {number} eventValue
     */
    GAnalyticsService.prototype.captureCustomEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        if (this.host !== 'localhost') {
            ga('send', 'event', {
                eventCategory: eventCategory,
                eventLabel: eventLabel,
                eventAction: eventAction,
                eventValue: eventValue
            });
        }
    };
    GAnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GAnalyticsService);
    return GAnalyticsService;
}());



/***/ }),

/***/ "./src/app/providers/header-title/header-title.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/providers/header-title/header-title.service.ts ***!
  \****************************************************************/
/*! exports provided: HeaderTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitleService", function() { return HeaderTitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_menus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants/menus */ "./src/app/shared/constants/menus.ts");
/* harmony import */ var _g_analytics_g_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../g-analytics/g-analytics.service */ "./src/app/providers/g-analytics/g-analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Constants

// Services

var HeaderTitleService = /** @class */ (function () {
    function HeaderTitleService(titleService, location, router, analyticsService) {
        this.titleService = titleService;
        this.location = location;
        this.router = router;
        this.analyticsService = analyticsService;
    }
    /**
     * Use the value passed as title for browser tab
     * Use the value passed as header title
     *
     * @param newTitle
     * @returns {string}
     */
    HeaderTitleService.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle); // dynamic tab title
        this.headerTitle = this.titleService.getTitle();
        return this.headerTitle; // dynamic header title
    };
    /**
     * Returns the header title value
     *
     * @returns {string}
     */
    HeaderTitleService.prototype.getTitle = function () {
        return this.headerTitle;
    };
    /**
     * On refresh, changes title in header
     */
    HeaderTitleService.prototype.setHeaderTitleOnRefresh = function () {
        this.setHeaderTitle();
    };
    /**
     * On return, changes title in header
     */
    HeaderTitleService.prototype.setHeaderTitleOnReturn = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
            .subscribe(function (e) {
            _this.setHeaderTitle();
        });
    };
    /**
     * Retrieves the file's name and replaces it with uppercase for first letter
     * If 'about' -> 'About Me'
     * If 'details' -> 'Details'
     * If 'cookie-policy' -> 'Cookies Policy'
     * If 'terms-conditions' -> 'Terms & Conditions'
     *
     */
    HeaderTitleService.prototype.setHeaderTitle = function () {
        var path = this.location.path(); // The url
        // this.location.getTitle() method is not handled properly
        if (path.includes('about')) {
            this.headerTitle = _shared_constants_menus__WEBPACK_IMPORTED_MODULE_5__["MENUS"].MAIN[1].value;
        }
        else if (path.includes('details')) {
            this.headerTitle = 'Details';
        }
        else if (path.includes('posts')) {
            this.headerTitle = 'Posts';
        }
        else if (path.includes('cookie-policy')) {
            this.headerTitle = _shared_constants_menus__WEBPACK_IMPORTED_MODULE_5__["MENUS"].SUB[0].value;
        }
        else if (path.includes('terms-conditions')) {
            this.headerTitle = _shared_constants_menus__WEBPACK_IMPORTED_MODULE_5__["MENUS"].SUB[2].value;
        }
        else {
            var firstChar = path.substr(1).charAt(0).toUpperCase();
            var strRemains = path.slice(2);
            this.headerTitle = firstChar + strRemains || 'Home';
        }
        this.analyticsService.captureRouterEvent(this.headerTitle);
    };
    HeaderTitleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _g_analytics_g_analytics_service__WEBPACK_IMPORTED_MODULE_6__["GAnalyticsService"]])
    ], HeaderTitleService);
    return HeaderTitleService;
}());



/***/ }),

/***/ "./src/app/providers/hobby/hobby.service.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/hobby/hobby.service.ts ***!
  \**************************************************/
/*! exports provided: HobbyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbyService", function() { return HobbyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_mock_hobbies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/mock-hobbies */ "./src/app/shared/data/mock-hobbies.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* DATA */

var HobbyService = /** @class */ (function () {
    function HobbyService() {
    }
    HobbyService.prototype.getHobbies = function () {
        return _shared_data_mock_hobbies__WEBPACK_IMPORTED_MODULE_1__["HOBBIES"];
    };
    HobbyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HobbyService);
    return HobbyService;
}());



/***/ }),

/***/ "./src/app/providers/modal/modal.service.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/modal/modal.service.ts ***!
  \**************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resolve_by_id_resolve_by_id_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resolve-by-id/resolve-by-id.service */ "./src/app/providers/resolve-by-id/resolve-by-id.service.ts");
/* harmony import */ var _shared_components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/details-modal/details-modal.component */ "./src/app/shared/components/details-modal/details-modal.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _shared_components_img_modal_img_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/img-modal/img-modal.component */ "./src/app/shared/components/img-modal/img-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services




var ModalService = /** @class */ (function () {
    function ModalService(resolveByIdService, bsModalService) {
        this.resolveByIdService = resolveByIdService;
        this.bsModalService = bsModalService;
        this.configs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false
        };
    }
    /**
     * Resolve the item to display thanks to its id and type
     * set "initial state" - the name of this variable is fixed and SHOULD NOT BE CHANGED
     * returns the component, configs (interactions), class and values (parsed object and type) to the modal's ref
     *
     * @param {string} id
     * @param {string} type
     * @returns {any}
     */
    ModalService.prototype.openModal = function (id, type) {
        this.resolveByIdService.resolveById(id, type);
        var initialState = { details: this.resolveByIdService.resolveById(id, type), type: type };
        return this.bsModalService.show(_shared_components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_2__["DetailsModalComponent"], Object.assign({}, this.configs, {
            class: 'modal-lg',
            initialState: initialState
        }));
    };
    /**
     * set "initial state" - the name of this variable is fixed and SHOULD NOT BE CHANGED
     * returns the component, configs (interactions), class and image to the modal's ref
     *
     * @param {any} image
     * @returns {any}
     */
    ModalService.prototype.openImgModal = function (image) {
        var initialState = { pic: image };
        return this.bsModalService.show(_shared_components_img_modal_img_modal_component__WEBPACK_IMPORTED_MODULE_4__["ImgModalComponent"], Object.assign({}, this.configs, {
            initialState: initialState
        }));
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resolve_by_id_resolve_by_id_service__WEBPACK_IMPORTED_MODULE_1__["ResolveByIdService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/providers/posts/post.service.ts":
/*!*************************************************!*\
  !*** ./src/app/providers/posts/post.service.ts ***!
  \*************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    /**
     * No need to invoke map() to parse out the response. Method has been removed,
     * and we simply return the Observable. Default responseType is JSON,
     * so the response data is already parsed for us
     *
     * @param {string} id
     * @returns {Observable<any>}
     */
    PostService.prototype.getPosts = function () {
        // return this.http.get<any>('http://localhost:4200/data/mock-codeschool.json');
        return this.http.get('../../assets/data/mock-post.json');
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/providers/project/project.service.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/project/project.service.ts ***!
  \******************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_mock_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/mock-projects */ "./src/app/shared/data/mock-projects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* MODELS */

var ProjectService = /** @class */ (function () {
    function ProjectService() {
    }
    ProjectService.prototype.getProjects = function () {
        return _shared_data_mock_projects__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"];
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/providers/providers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/providers.module.ts ***!
  \***********************************************/
/*! exports provided: ProvidersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersModule", function() { return ProvidersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _diploma_diploma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diploma/diploma.service */ "./src/app/providers/diploma/diploma.service.ts");
/* harmony import */ var _hobby_hobby_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hobby/hobby.service */ "./src/app/providers/hobby/hobby.service.ts");
/* harmony import */ var _project_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.service */ "./src/app/providers/project/project.service.ts");
/* harmony import */ var _role_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role/role.service */ "./src/app/providers/role/role.service.ts");
/* harmony import */ var _skill_skill_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skill/skill.service */ "./src/app/providers/skill/skill.service.ts");
/* harmony import */ var _tool_tool_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tool/tool.service */ "./src/app/providers/tool/tool.service.ts");
/* harmony import */ var _codeschool_codeschool_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./codeschool/codeschool.service */ "./src/app/providers/codeschool/codeschool.service.ts");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal.service */ "./src/app/providers/modal/modal.service.ts");
/* harmony import */ var _resolve_by_id_resolve_by_id_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolve-by-id/resolve-by-id.service */ "./src/app/providers/resolve-by-id/resolve-by-id.service.ts");
/* harmony import */ var _cookie_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cookie/cookie.service */ "./src/app/providers/cookie/cookie.service.ts");
/* harmony import */ var _header_title_header_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header-title/header-title.service */ "./src/app/providers/header-title/header-title.service.ts");
/* harmony import */ var _route_scroll_route_scroll_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./route-scroll/route-scroll.service */ "./src/app/providers/route-scroll/route-scroll.service.ts");
/* harmony import */ var _g_analytics_g_analytics_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./g-analytics/g-analytics.service */ "./src/app/providers/g-analytics/g-analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Services













var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [
                _project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
                _skill_skill_service__WEBPACK_IMPORTED_MODULE_6__["SkillService"],
                _role_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"],
                _diploma_diploma_service__WEBPACK_IMPORTED_MODULE_2__["DiplomaService"],
                _tool_tool_service__WEBPACK_IMPORTED_MODULE_7__["ToolService"],
                _hobby_hobby_service__WEBPACK_IMPORTED_MODULE_3__["HobbyService"],
                _codeschool_codeschool_service__WEBPACK_IMPORTED_MODULE_8__["CodeschoolService"],
                _modal_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"],
                _resolve_by_id_resolve_by_id_service__WEBPACK_IMPORTED_MODULE_10__["ResolveByIdService"],
                _cookie_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"],
                _header_title_header_title_service__WEBPACK_IMPORTED_MODULE_12__["HeaderTitleService"],
                _route_scroll_route_scroll_service__WEBPACK_IMPORTED_MODULE_13__["RouteScrollService"],
                _g_analytics_g_analytics_service__WEBPACK_IMPORTED_MODULE_14__["GAnalyticsService"]
            ],
            declarations: []
        })
    ], ProvidersModule);
    return ProvidersModule;
}());



/***/ }),

/***/ "./src/app/providers/resolve-by-id/resolve-by-id.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/providers/resolve-by-id/resolve-by-id.service.ts ***!
  \******************************************************************/
/*! exports provided: ResolveByIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveByIdService", function() { return ResolveByIdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_mock_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/mock-roles */ "./src/app/shared/data/mock-roles.ts");
/* harmony import */ var _shared_data_mock_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/mock-projects */ "./src/app/shared/data/mock-projects.ts");
/* harmony import */ var _shared_data_mock_diplomas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/mock-diplomas */ "./src/app/shared/data/mock-diplomas.ts");
/* harmony import */ var _shared_data_mock_hobbies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data/mock-hobbies */ "./src/app/shared/data/mock-hobbies.ts");
/* harmony import */ var _shared_data_mock_skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data/mock-skills */ "./src/app/shared/data/mock-skills.ts");
/* harmony import */ var _shared_data_mock_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data/mock-tools */ "./src/app/shared/data/mock-tools.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Data






var ResolveByIdService = /** @class */ (function () {
    function ResolveByIdService() {
    }
    /**
     * Use the id to retrieve the correct object
     * depending on the type
     *
     * @param id
     * @param type
     * @returns {any}
     */
    ResolveByIdService.prototype.resolveById = function (id, type) {
        switch (type) {
            case 'role':
                return this.searchById(_shared_data_mock_roles__WEBPACK_IMPORTED_MODULE_1__["ROLES"], id);
            case 'project':
                return this.searchById(_shared_data_mock_projects__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"], id);
            case 'diploma':
                return this.searchById(_shared_data_mock_diplomas__WEBPACK_IMPORTED_MODULE_3__["DIPLOMAS"], id);
            case 'hobby':
                return this.searchById(_shared_data_mock_hobbies__WEBPACK_IMPORTED_MODULE_4__["HOBBIES"], id);
            case 'skill':
                return this.searchById(_shared_data_mock_skills__WEBPACK_IMPORTED_MODULE_5__["SKILLS"], id);
            case 'tool':
                return this.searchById(_shared_data_mock_tools__WEBPACK_IMPORTED_MODULE_6__["TOOLS"], id);
            default:
                alert('The type is not defined');
                break;
        }
    };
    ResolveByIdService.prototype.resolvePostById = function (id, posts) {
        return this.searchById(posts, id);
    };
    /**
     * Go through the data relevant to the type passed
     * returns matching object
     *
     * @param data
     * @param id
     * @returns {any}
     */
    ResolveByIdService.prototype.searchById = function (data, id) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var matchingObject = data_1[_i];
            if (id === matchingObject.id) {
                return matchingObject;
            }
        }
    };
    ResolveByIdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ResolveByIdService);
    return ResolveByIdService;
}());



/***/ }),

/***/ "./src/app/providers/role/role.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/role/role.service.ts ***!
  \************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_mock_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/mock-roles */ "./src/app/shared/data/mock-roles.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Data

var RoleService = /** @class */ (function () {
    function RoleService() {
    }
    RoleService.prototype.getRoles = function () {
        return _shared_data_mock_roles__WEBPACK_IMPORTED_MODULE_1__["ROLES"];
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/providers/route-scroll/route-scroll.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/providers/route-scroll/route-scroll.service.ts ***!
  \****************************************************************/
/*! exports provided: RouteScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteScrollService", function() { return RouteScrollService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteScrollService = /** @class */ (function () {
    function RouteScrollService(router) {
        this.router = router;
    }
    /**
     * When navigating on a new page -> scroll to the top of the page
     */
    RouteScrollService.prototype.scrollTopNav = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            document.getElementById('anchor-top')
                .scrollIntoView({ block: 'start', behavior: 'smooth' });
        });
    };
    RouteScrollService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RouteScrollService);
    return RouteScrollService;
}());



/***/ }),

/***/ "./src/app/providers/skill/skill.service.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/skill/skill.service.ts ***!
  \**************************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_mock_skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/mock-skills */ "./src/app/shared/data/mock-skills.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Data

var SkillService = /** @class */ (function () {
    function SkillService() {
    }
    SkillService.prototype.getSkills = function () {
        return _shared_data_mock_skills__WEBPACK_IMPORTED_MODULE_1__["SKILLS"];
    };
    SkillService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SkillService);
    return SkillService;
}());



/***/ }),

/***/ "./src/app/providers/tool/tool.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/tool/tool.service.ts ***!
  \************************************************/
/*! exports provided: ToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolService", function() { return ToolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_mock_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/mock-tools */ "./src/app/shared/data/mock-tools.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Data

var ToolService = /** @class */ (function () {
    function ToolService() {
    }
    ToolService.prototype.getTools = function () {
        return _shared_data_mock_tools__WEBPACK_IMPORTED_MODULE_1__["TOOLS"];
    };
    ToolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ToolService);
    return ToolService;
}());



/***/ }),

/***/ "./src/app/shared/components/card/card.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/card/card.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"card-reg thumbnail\" [class.active]=\"focusedItemBtn\">\n\n  <div class=\"row\">\n    <section class=\"card-image col-xs-4\">\n      <figure class=\"img img-round--sm\">\n        <img [src]=\"object.image || object.badge\" [alt]=\"object.name || object.title\">\n      </figure>\n    </section>\n\n    <section class=\"card-info col-xs-8\">\n        <header>\n          <h3 class=\"ellipsis-two-lines\">{{ object.name || object.title | translate}}</h3>\n        </header>\n\n        <p *ngIf=\"object.desc\">{{ object.desc | translate | ellipsis:50 }}</p>\n    </section>\n  </div>\n\n  <!-- If not Codeschool certif (no badge attribute) -->\n  <footer class=\"card-link\">\n    <a class=\"btn btn-card\"\n       role=\"button\"\n       data-toggle=\"modal\"\n       data-target=\"#myModal\"\n       *ngIf=\"!object.badge\"\n       (mouseenter)=\"focusedItemBtn = true\"\n       (mouseleave)=\"focusedItemBtn = false\"\n       (click)=\"getMoreInfo(object.id)\">\n      {{ 'more-info' | translate }}\n    </a>\n\n    <!-- If Codeschool certif (has badge attribute) -->\n    <a\n      class=\"btn btn-card\"\n      [href]=\"object.url\"\n      (mouseenter)=\"focusedItemBtn = true\"\n      (mouseleave)=\"focusedItemBtn = false\"\n      *ngIf=\"object.badge\"\n      target=\"_blank\">\n      {{ 'more-info' | translate }}\n    </a>\n  </footer>\n\n</article>\n"

/***/ }),

/***/ "./src/app/shared/components/card/card.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/card/card.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.btn, .btn-primary, .card-link .btn-card, .btn-font {\n  border: none;\n  border-radius: 0px; }\n.btn:focus, .btn-primary:focus, .card-link .btn-card:focus, .btn-font:focus {\n    outline: none; }\n.btn:visited, .btn-primary:visited, .card-link .btn-card:visited, .btn-font:visited {\n    color: #fcfcfc; }\n.btn-dark, .btn-primary, .card-link .btn-card, .btn-font {\n  background-color: #707070;\n  color: #fcfcfc; }\n.btn-dark:visited, .btn-primary:visited, .card-link .btn-card:visited, .btn-font:visited {\n    background-color: #707070; }\n.btn-primary, .card-link .btn-card {\n  box-shadow: 3px 3px 3px 0px #707070;\n  transition: all 0.3s ease-in 0s;\n  min-width: 100px;\n  padding: 10px; }\n.btn-primary:hover, .card-link .btn-card:hover, .btn-primary:active, .card-link .btn-card:active {\n    box-shadow: 5px 5px 3px 0px #707070;\n    -webkit-transform: translateX(-3px);\n    transform: translateX(-3px);\n    background-color: #66cc99; }\n.btn-font {\n  position: absolute;\n  top: auto;\n  right: 50px;\n  bottom: -35px;\n  left: auto;\n  box-shadow: 0px 3px 3px 0px #707070;\n  transition: all 0.3s ease-in 0s;\n  background-color: #707070;\n  font-size: 1rem;\n  padding: 2px 10px; }\n.btn-font:hover, .btn-font:focus {\n    color: #fcfcfc; }\n.btn-font:hover {\n    background-color: #575656; }\n.btn-font.selected {\n    background-color: #66cc99; }\n.btn-font .btn-label-big {\n    font-size: 1.8rem; }\n.btn-group-line .btn, .btn-group-line .btn-primary, .btn-group-line .card-link .btn-card, .card-link .btn-group-line .btn-card, .btn-group-line .btn-font {\n  margin: 10px; }\n@media screen and (max-width: 768px) {\n  .btn-group--jumbo .btn-primary, .btn-group--jumbo .card-link .btn-card, .card-link .btn-group--jumbo .btn-card {\n    margin: 10px auto; } }\n@media screen and (max-width: 500px) {\n  .btn-group--details,\n  .btn-group--jumbo {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: flex-start;\n    align-items: flex-start; }\n    .btn-group--details .btn, .btn-group--details .btn-primary, .btn-group--details .card-link .btn-card, .card-link .btn-group--details .btn-card, .btn-group--details .btn-font,\n    .btn-group--jumbo .btn,\n    .btn-group--jumbo .btn-primary,\n    .btn-group--jumbo .card-link .btn-card,\n    .card-link .btn-group--jumbo .btn-card,\n    .btn-group--jumbo .btn-font {\n      width: 100%; } }\n.card-reg {\n  box-shadow: 3px 3px 3px 0px #707070;\n  transition: all 0.15s ease 0s;\n  background: linear-gradient(to right, #303030 50%, transparent 50%) right bottom/200% 100%;\n  border: 0;\n  border-radius: 0;\n  height: 20rem;\n  margin: auto auto 20px;\n  max-width: 300px;\n  position: relative;\n  -webkit-transform-origin: left 0% 0;\n          transform-origin: left 0% 0; }\n.card-reg.active, .card-reg:focus {\n    background-position: left bottom;\n    color: #fcfcfc; }\n.card-reg.active .btn-card, .card-reg:focus .btn-card {\n      box-shadow: 5px 5px 3px 0px #707070;\n      -webkit-transform: translateX(-3px);\n      transform: translateX(-3px);\n      background-color: #66cc99; }\n.card-reg.active .btn-card:hover, .card-reg:focus .btn-card:hover {\n        color: #fcfcfc; }\n.card-info h3 {\n  font-size: 1.6rem;\n  margin-top: 1rem; }\n.card-info p {\n  font-size: 1.2rem; }\n.card-image,\n.card-info,\n.card-link {\n  padding: 20px; }\n.card-link {\n  position: absolute;\n  top: auto;\n  right: auto;\n  bottom: 0px;\n  left: auto;\n  width: 100%; }\n.card-link .btn-card {\n    float: right; }\n@media screen and (max-width: 768px) {\n  .card-reg {\n    box-shadow: 0px 3px 3px 0px #707070; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fYnV0dG9ucy5zY3NzIiwiL1VzZXJzL2ZsaXBrYXJ0LzIwMTkvcG9ydGZvbGlvL3ZpbWFsa292YXRoLmdpdGh1Yi5pby9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBRFlGOztFQ1RFO0FEc0JGOztFQ25CRTtBRDZCRjs7RUMxQkU7QUR3Q0Y7O0VDckNFO0FEc0pGOztFQ25KRTtBQ2pCRjtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtBQUZwQjtJQUtJLGFBQWEsRUFBQTtBQUxqQjtJQVNJLGNGQ1csRUFBQTtBRUdmO0VBQ0UseUJGTlk7RUVPWixjRkxhLEVBQUE7QUVHZjtJQUtJLHlCRlZVLEVBQUE7QUVjZDtFRmtHSSxtQ0FoSFU7RUFtSlosK0JFakkwQztFQUMxQyxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0FBTmY7SUZrR0ksbUNBaEhVO0lBdUlaLG1DQWlCbUM7SUFibkMsMkJBYW1DO0lBQ25DLHlCQTdKZSxFQUFBO0FFZ0NqQjtFRnlDRSxrQkV0QzBCO0VGdUMxQixTRXZDZ0M7RUZ3Q2hDLFdFeENzQztFRnlDdEMsYUV6QzZDO0VGMEM3QyxVRTFDbUQ7RUZpRmpELG1DQWhIVTtFQW1KWiwrQkVsSDBDO0VBQzFDLHlCRmxDWTtFRW1DWixlRnpCZTtFRTBCZixpQkFBaUIsRUFBQTtBQVJuQjtJQVlJLGNGdENXLEVBQUE7QUUwQmY7SUFnQkkseUJBQW9DLEVBQUE7QUFoQnhDO0lBb0JJLHlCRnBEYSxFQUFBO0FFZ0NqQjtJQXdCSSxpQkZ2Q2EsRUFBQTtBRTJDakI7RUFFSSxZQUFZLEVBQUE7QUFJaEI7RUFDRTtJQUNFLGlCQUFpQixFQUFBLEVBQ2xCO0FBR0g7RUFDRTs7SUZnREEsYUFBYTtJQUNiLGVFL0MyQjtJRmdEM0IsdUJFaERtQztJRmlEbkMseUJFakQrQztJRmtEL0MsdUJFbEQyRCxFQUFBO0lBRjNEOzs7Ozs7TUFJSSxXQUFXLEVBQUEsRUFDWjtBQy9FTDtFSHFISSxtQ0FoSFU7RUFtSlosNkJHdEp3QztFQUN4QywwRkFBd0Y7RUFDeEYsU0FBUztFQUNULGdCQUFnQjtFQUNoQixhSGlDaUI7RUdoQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTtBQVY3QjtJQWNJLGdDQUFnQztJQUNoQyxjSFJXLEVBQUE7QUdQZjtNSHFISSxtQ0FoSFU7TUF1SVosbUNBaUJtQztNQWJuQywyQkFhbUM7TUFDbkMseUJBN0plLEVBQUE7QUdEakI7UUFxQlEsY0hkTyxFQUFBO0FHb0JmO0VBRUksaUJIWmM7RUdhZCxnQkhnQmEsRUFBQTtBR25CakI7RUFPSSxpQkhsQmUsRUFBQTtBR3NCbkI7OztFQUdFLGFBQWEsRUFBQTtBQUdmO0VIOEJFLGtCRzdCMEI7RUg4QjFCLFNHOUJnQztFSCtCaEMsV0cvQnNDO0VIZ0N0QyxXR2hDMkM7RUhpQzNDLFVHakNpRDtFQUNqRCxXQUFXLEVBQUE7QUFGYjtJQU1JLFlBQVksRUFBQTtBQUloQjtFQXREQTtJSHFISSxtQ0FoSFUsRUFBQSxFR29EWCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29sb3Vyc1xuICovXG5cbiRwcmltYXJ5OiAjNjZjYzk5O1xuJHNlY29uZGFyeTogIzY2OTljYztcbiRhbHQ6ICM2MmIyYjA7XG4kZGFyazogIzMwMzAzMDtcbiRncmV5OiAjNzA3MDcwO1xuJGxpZ2h0LWdyZXk6ICNmMGYwZjA7XG4kbGlnaHQ6ICNmY2ZjZmM7XG4kYWxlcnQ6ICNkODc0NmE7XG4kaW5mbzogI2NjOWQxNDtcblxuLyoqXG4gKiBGb250c1xuICovXG5cbiRmb250LW1pY3JvOiAxcmVtO1xuJGZvbnQtc21hbGw6IDEuMnJlbTtcbiRmb250LWJhc2U6IDEuNnJlbTtcbiRmb250LWJpZzogMS44cmVtO1xuJGZvbnQtbWFjcm86IDIuMnJlbTtcbiRmb250LW1lZ2E6IDIuNnJlbTtcbiRmb250LWdpZ2E6IDNyZW07XG4kZm9udC10ZXJhOiA0cmVtO1xuXG4vKipcbiAqIEltYWdlc1xuICovXG5cbiRpbWctc206IDI1cHg7XG4kaW1nLW1kOiA1MHB4O1xuJGltZy1iaWc6IDc1cHg7XG4kaW1nLW1lZ2E6IDEwMHB4O1xuJGltZy1naWdhOiAxNTBweDtcblxuLyoqXG4gKiBDb250YWluZXJzXG4gKi9cblxuJGhlYWRlci1oZWlnaHQ6IDcuNXJlbTtcbiRjYXJkLWhlaWdodDogMjByZW07XG4kZ2FwLXNtOiAwLjVyZW07XG4kZ2FwLXJlZzogMS41cmVtO1xuJGdhcC1tZDogM3JlbTtcbiRnYXAtYmlnOiA0LjVyZW07XG4kZ2FwLW1lZ2E6IDZyZW07XG4kZ2FwLXRlcmE6IDQwdmg7XG4kcGFkZGluZy1zbTogMXJlbTtcblxuLyoqXG4gKiBNaXhpbnNcbiAqL1xuXG5AbWl4aW4gc3BlY2lhbC1mb250KCRzaXplLCAkY29sb3IpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGhpZ2hsaWdodCgkYmctY29sb3IsICRmb250LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmb250LWNvbG9yO1xufVxuXG5AbWl4aW4gc3F1YXJlKCR2YWx1ZSkge1xuICB3aWR0aDogJHZhbHVlO1xuICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIHJvdW5kKCR2YWx1ZSkge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAkdmFsdWU7XG4gIGhlaWdodDogJHZhbHVlO1xufVxuXG5AbWl4aW4gcG9zaXRpb24oJHR5cGUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcbiAgcG9zaXRpb246ICR0eXBlO1xuICB0b3A6ICR0b3A7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgbGVmdDogJGxlZnQ7XG59XG5cbi8vIGNlbnRlciB2ZXJ0aWNhbGx5XG5AbWl4aW4gdmVydGljYWwtYWxpZ24oJGhlaWdodCkge1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0IC8gMjtcbn1cblxuQG1peGluIGFuaW0tZHJvcGRvd24oJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZVkoJHZhbHVlKSk7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIHRyaWFuZ2xlKCRkaXIsICRjb2xvciwgJGJhc2UsICRoZWlnaHQpIHtcbiAgJHRpcDogJGhlaWdodCBzb2xpZCAkY29sb3I7XG5cbiAgQGluY2x1ZGUgc3F1YXJlKCRiYXNlKTtcbiAgYm9yZGVyOiAkYmFzZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLSN7JGRpcn06IG5vbmU7IC8vIGJvcmRlciBjb25jZXJuZWQgZGlzYXBwZWFyXG4gIEBpZiAkZGlyID09ICd0b3AnIHtcbiAgICBib3JkZXItYm90dG9tOiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ2JvdHRvbScge1xuICAgIGJvcmRlci10b3A6ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAncmlnaHQnIHtcbiAgICBib3JkZXItbGVmdDogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdsZWZ0JyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdGlwO1xuICB9XG59XG5cbkBtaXhpbiBkcm9wLXNoYWRvdygkaXNJbnNldCwgJGhvciwgJHZlciwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuICBAaWYgJGlzSW5zZXQgPT0gdHJ1ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICB9IEBlbHNlIGlmICRpc0luc2V0ID09IGZhbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIGZsZXgtbGF5b3V0KCRoYXNXcmFwOiBub3dyYXAsICRqdXN0aWY6IGZsZXgtc3RhcnQsICRhbGlnbkNvbnRlbnQ6IHN0cmV0Y2gsICRhbGlnbkl0ZW1zOiBzdHJldGNoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogJGhhc1dyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZjtcbiAgYWxpZ24tY29udGVudDogJGFsaWduQ29udGVudDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQsICRjb2xvciwgJHJhZGl1cykge1xuICBib3JkZXItdG9wOiAkdG9wIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiAkcmlnaHQgc29saWQgJGNvbG9yO1xuICBib3JkZXItYm90dG9tOiAkYm90dG9tIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLWxlZnQ6ICRsZWZ0IHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbn1cblxuLy8gQU5JTVNcblxuQG1peGluIHRyYW5zZm9ybSgkdGFuc2Zvcm1hdGlvbikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1tb3otdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW1zLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1vLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIHRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wLCAkZHVyLCAkdGltaW5nLCAkZGVsYXksICRvdGhlcnMuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICB0cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xufVxuXG5AbWl4aW4gYnRuLWFuaW0oKSB7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCA1cHgsIDVweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTNweCkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cblxuLyoqXG4gKiBHZW5lcmFsXG4gKi9cblxuLy8gQ29udGFpbmVyXG5cbiVuby1wYWRkaW5nIHsgcGFkZGluZzogMDsgfVxuXG4lbm8tbWFyZ2luIHsgbWFyZ2luOiAwOyB9XG5cbiVibG9jay1jZW50cmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4lYmxvY2staGFsZi1jZW50cmVkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8vIEJvcmRlcnNcblxuJW5vLXJhZGl1cyB7IGJvcmRlci1yYWRpdXM6IDA7IH1cblxuJW5vLWJvcmRlciB7IGJvcmRlcjogMDsgfVxuXG4ldHJpYW5nbGVzLXBsdWdnZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAyNSU7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbiVidG4tZmlsdGVyIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGNvbG9yOiAkbGlnaHQ7XG59XG5cbiVidG4tZmlsdGVyLWFuaW0ge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVZKDEuMSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cbiIsIi8qKlxuICogQ29sb3Vyc1xuICovXG4vKipcbiAqIEZvbnRzXG4gKi9cbi8qKlxuICogSW1hZ2VzXG4gKi9cbi8qKlxuICogQ29udGFpbmVyc1xuICovXG4vKipcbiAqIE1peGluc1xuICovXG4vKipcbiAqIEdlbmVyYWxcbiAqL1xuLmJ0biwgLmJ0bi1wcmltYXJ5LCAuY2FyZC1saW5rIC5idG4tY2FyZCwgLmJ0bi1mb250IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7IH1cbiAgLmJ0bjpmb2N1cywgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuY2FyZC1saW5rIC5idG4tY2FyZDpmb2N1cywgLmJ0bi1mb250OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5idG46dmlzaXRlZCwgLmJ0bi1wcmltYXJ5OnZpc2l0ZWQsIC5jYXJkLWxpbmsgLmJ0bi1jYXJkOnZpc2l0ZWQsIC5idG4tZm9udDp2aXNpdGVkIHtcbiAgICBjb2xvcjogI2ZjZmNmYzsgfVxuXG4uYnRuLWRhcmssIC5idG4tcHJpbWFyeSwgLmNhcmQtbGluayAuYnRuLWNhcmQsIC5idG4tZm9udCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG4gIGNvbG9yOiAjZmNmY2ZjOyB9XG4gIC5idG4tZGFyazp2aXNpdGVkLCAuYnRuLXByaW1hcnk6dmlzaXRlZCwgLmNhcmQtbGluayAuYnRuLWNhcmQ6dmlzaXRlZCwgLmJ0bi1mb250OnZpc2l0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7IH1cblxuLmJ0bi1wcmltYXJ5LCAuY2FyZC1saW5rIC5idG4tY2FyZCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7IH1cbiAgLmJ0bi1wcmltYXJ5OmhvdmVyLCAuY2FyZC1saW5rIC5idG4tY2FyZDpob3ZlciwgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmNhcmQtbGluayAuYnRuLWNhcmQ6YWN0aXZlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCAjNzA3MDcwO1xuICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmNjOTk7IH1cblxuLmJ0bi1mb250IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGF1dG87XG4gIHJpZ2h0OiA1MHB4O1xuICBib3R0b206IC0zNXB4O1xuICBsZWZ0OiBhdXRvO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDJweCAxMHB4OyB9XG4gIC5idG4tZm9udDpob3ZlciwgLmJ0bi1mb250OmZvY3VzIHtcbiAgICBjb2xvcjogI2ZjZmNmYzsgfVxuICAuYnRuLWZvbnQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzU2NTY7IH1cbiAgLmJ0bi1mb250LnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZjYzk5OyB9XG4gIC5idG4tZm9udCAuYnRuLWxhYmVsLWJpZyB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07IH1cblxuLmJ0bi1ncm91cC1saW5lIC5idG4sIC5idG4tZ3JvdXAtbGluZSAuYnRuLXByaW1hcnksIC5idG4tZ3JvdXAtbGluZSAuY2FyZC1saW5rIC5idG4tY2FyZCwgLmNhcmQtbGluayAuYnRuLWdyb3VwLWxpbmUgLmJ0bi1jYXJkLCAuYnRuLWdyb3VwLWxpbmUgLmJ0bi1mb250IHtcbiAgbWFyZ2luOiAxMHB4OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZ3JvdXAtLWp1bWJvIC5idG4tcHJpbWFyeSwgLmJ0bi1ncm91cC0tanVtYm8gLmNhcmQtbGluayAuYnRuLWNhcmQsIC5jYXJkLWxpbmsgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bzsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5idG4tZ3JvdXAtLWRldGFpbHMsXG4gIC5idG4tZ3JvdXAtLWp1bWJvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLCAuYnRuLWdyb3VwLS1kZXRhaWxzIC5idG4tcHJpbWFyeSwgLmJ0bi1ncm91cC0tZGV0YWlscyAuY2FyZC1saW5rIC5idG4tY2FyZCwgLmNhcmQtbGluayAuYnRuLWdyb3VwLS1kZXRhaWxzIC5idG4tY2FyZCwgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLWZvbnQsXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bixcbiAgICAuYnRuLWdyb3VwLS1qdW1ibyAuYnRuLXByaW1hcnksXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmNhcmQtbGluayAuYnRuLWNhcmQsXG4gICAgLmNhcmQtbGluayAuYnRuLWdyb3VwLS1qdW1ibyAuYnRuLWNhcmQsXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1mb250IHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuLmNhcmQtcmVnIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlIDBzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMDMwMzAgNTAlLCB0cmFuc3BhcmVudCA1MCUpIHJpZ2h0IGJvdHRvbS8yMDAlIDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMjBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IDAlIDA7IH1cbiAgLmNhcmQtcmVnLmFjdGl2ZSwgLmNhcmQtcmVnOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgICBjb2xvcjogI2ZjZmNmYzsgfVxuICAgIC5jYXJkLXJlZy5hY3RpdmUgLmJ0bi1jYXJkLCAuY2FyZC1yZWc6Zm9jdXMgLmJ0bi1jYXJkIHtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCAjNzA3MDcwO1xuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4ICM3MDcwNzA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmNjOTk7IH1cbiAgICAgIC5jYXJkLXJlZy5hY3RpdmUgLmJ0bi1jYXJkOmhvdmVyLCAuY2FyZC1yZWc6Zm9jdXMgLmJ0bi1jYXJkOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmY2ZjZmM7IH1cblxuLmNhcmQtaW5mbyBoMyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtOyB9XG5cbi5jYXJkLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XG5cbi5jYXJkLWltYWdlLFxuLmNhcmQtaW5mbyxcbi5jYXJkLWxpbmsge1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5jYXJkLWxpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiBhdXRvO1xuICB3aWR0aDogMTAwJTsgfVxuICAuY2FyZC1saW5rIC5idG4tY2FyZCB7XG4gICAgZmxvYXQ6IHJpZ2h0OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLXJlZyB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwOyB9IH1cbiIsIi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogJGxpZ2h0O1xuICB9XG59XG5cbi5idG4tZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICBjb2xvcjogJGxpZ2h0O1xuXG4gICY6dmlzaXRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIH1cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgQGV4dGVuZCAuYnRuO1xuICBAZXh0ZW5kIC5idG4tZGFyaztcbiAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDNweCwgM3B4LCAzcHgsIDBweCwgJGdyZXkpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC4zcywgZWFzZS1pbiwgMHMpO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gICY6aG92ZXIsXG4gICY6YWN0aXZlIHtcbiAgICBAaW5jbHVkZSBidG4tYW5pbSgpO1xuICB9XG59XG5cbi5idG4tZm9udCB7XG4gIEBleHRlbmQgLmJ0bjtcbiAgQGV4dGVuZCAuYnRuLWRhcms7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCBhdXRvLCA1MHB4LCAtMzVweCwgYXV0byk7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCAwcHgsIDNweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuM3MsIGVhc2UtaW4sIDBzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtbWljcm87XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGlnaHQ7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGdyZXksIDEwJSk7XG4gIH1cblxuICAmLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgfVxuXG4gIC5idG4tbGFiZWwtYmlnIHtcbiAgICBmb250LXNpemU6ICRmb250LWJpZztcbiAgfVxufVxuXG4uYnRuLWdyb3VwLWxpbmUge1xuICAuYnRuIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1wcmltYXJ5IHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYnRuLWdyb3VwLS1kZXRhaWxzLFxuICAuYnRuLWdyb3VwLS1qdW1ibyB7XG4gICAgQGluY2x1ZGUgZmxleC1sYXlvdXQod3JhcCwgY2VudGVyLCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0KTtcbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ2J1dHRvbnMnO1xuXG4uY2FyZC1yZWcge1xuICBAaW5jbHVkZSBkcm9wLXNoYWRvdyhmYWxzZSwgM3B4LCAzcHgsIDNweCwgMHB4LCAkZ3JleSk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjE1cywgZWFzZSwgMHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRkYXJrIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSByaWdodCBib3R0b20vMjAwJSAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogJGNhcmQtaGVpZ2h0O1xuICBtYXJnaW46IGF1dG8gYXV0byAyMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgMCUgMDsgLy8gZm9yIHNjYWxpbmcgZnJvbSB0b3AgdG8gYm90dG9tXG5cbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICAgIGNvbG9yOiAkbGlnaHQ7XG5cbiAgICAuYnRuLWNhcmQge1xuICAgICAgQGluY2x1ZGUgYnRuLWFuaW0oKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkbGlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jYXJkLWluZm8ge1xuICBoMyB7XG4gICAgZm9udC1zaXplOiAkZm9udC1iYXNlO1xuICAgIG1hcmdpbi10b3A6ICRwYWRkaW5nLXNtO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zbWFsbDtcbiAgfVxufVxuXG4uY2FyZC1pbWFnZSxcbi5jYXJkLWluZm8sXG4uY2FyZC1saW5rIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhcmQtbGluayB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCBhdXRvLCBhdXRvLCAwcHgsIGF1dG8pO1xuICB3aWR0aDogMTAwJTtcblxuICAuYnRuLWNhcmQge1xuICAgIEBleHRlbmQgLmJ0bi1wcmltYXJ5O1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZC1yZWcge1xuICAgIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCAwcHgsIDNweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_g_analytics_g_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/g-analytics/g-analytics.service */ "./src/app/providers/g-analytics/g-analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent(analyticsService) {
        this.analyticsService = analyticsService;
        this.moreInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Emit the id of the object to parent view
     * to populate the modal
     *
     * @param id
     * @returns {any}
     */
    CardComponent.prototype.getMoreInfo = function (id) {
        this.analyticsService.captureCustomEvent('modal', "Open modal", "" + this.object.name, 2);
        this.moreInfo.emit(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "object", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "moreInfo", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/shared/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/shared/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_g_analytics_g_analytics_service__WEBPACK_IMPORTED_MODULE_1__["GAnalyticsService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/cookie-banner/cookie-banner.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/cookie-banner/cookie-banner.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-cookie\" *ngIf=\"!isConsented\">\n  <p>{{ 'cookie' | translate }}</p>\n  <div class=\"btn-group-line\">\n    <button class=\"btn btn-primary\" (click)=\"consentToCookies(true, $event)\">{{ 'agree' | translate }}</button>\n    <a [routerLink]=\"'cookie-policy'\" class=\"btn-primary\">{{ 'why' | translate }}?</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/cookie-banner/cookie-banner.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/cookie-banner/cookie-banner.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.btn, .btn-primary, .btn-font {\n  border: none;\n  border-radius: 0px; }\n.btn:focus, .btn-primary:focus, .btn-font:focus {\n    outline: none; }\n.btn:visited, .btn-primary:visited, .btn-font:visited {\n    color: #fcfcfc; }\n.btn-dark, .btn-primary, .btn-font {\n  background-color: #707070;\n  color: #fcfcfc; }\n.btn-dark:visited, .btn-primary:visited, .btn-font:visited {\n    background-color: #707070; }\n.btn-primary {\n  box-shadow: 3px 3px 3px 0px #707070;\n  transition: all 0.3s ease-in 0s;\n  min-width: 100px;\n  padding: 10px; }\n.btn-primary:hover, .btn-primary:active {\n    box-shadow: 5px 5px 3px 0px #707070;\n    -webkit-transform: translateX(-3px);\n    transform: translateX(-3px);\n    background-color: #66cc99; }\n.btn-font {\n  position: absolute;\n  top: auto;\n  right: 50px;\n  bottom: -35px;\n  left: auto;\n  box-shadow: 0px 3px 3px 0px #707070;\n  transition: all 0.3s ease-in 0s;\n  background-color: #707070;\n  font-size: 1rem;\n  padding: 2px 10px; }\n.btn-font:hover, .btn-font:focus {\n    color: #fcfcfc; }\n.btn-font:hover {\n    background-color: #575656; }\n.btn-font.selected {\n    background-color: #66cc99; }\n.btn-font .btn-label-big {\n    font-size: 1.8rem; }\n.btn-group-line .btn, .btn-group-line .btn-primary, .btn-group-line .btn-font {\n  margin: 10px; }\n@media screen and (max-width: 768px) {\n  .btn-group--jumbo .btn-primary {\n    margin: 10px auto; } }\n@media screen and (max-width: 500px) {\n  .btn-group--details,\n  .btn-group--jumbo {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: flex-start;\n    align-items: flex-start; }\n    .btn-group--details .btn, .btn-group--details .btn-primary, .btn-group--details .btn-font,\n    .btn-group--jumbo .btn,\n    .btn-group--jumbo .btn-primary,\n    .btn-group--jumbo .btn-font {\n      width: 100%; } }\n.wrap-cookie {\n  position: fixed;\n  top: auto;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-color: #cc9d14;\n  color: #fcfcfc;\n  font-size: 1.6rem;\n  opacity: 0.95;\n  padding: 3rem 0 0.5rem;\n  text-align: center; }\n.wrap-cookie p {\n    width: 75%;\n    margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Nvb2tpZS1iYW5uZXIvY29va2llLWJhbm5lci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fYnV0dG9ucy5zY3NzIiwiL1VzZXJzL2ZsaXBrYXJ0LzIwMTkvcG9ydGZvbGlvL3ZpbWFsa292YXRoLmdpdGh1Yi5pby9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Nvb2tpZS1iYW5uZXIvY29va2llLWJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBRFlGOztFQ1RFO0FEc0JGOztFQ25CRTtBRDZCRjs7RUMxQkU7QUR3Q0Y7O0VDckNFO0FEc0pGOztFQ25KRTtBQ2pCRjtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtBQUZwQjtJQUtJLGFBQWEsRUFBQTtBQUxqQjtJQVNJLGNGQ1csRUFBQTtBRUdmO0VBQ0UseUJGTlk7RUVPWixjRkxhLEVBQUE7QUVHZjtJQUtJLHlCRlZVLEVBQUE7QUVjZDtFRmtHSSxtQ0FoSFU7RUFtSlosK0JFakkwQztFQUMxQyxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0FBTmY7SUZrR0ksbUNBaEhVO0lBdUlaLG1DQWlCbUM7SUFibkMsMkJBYW1DO0lBQ25DLHlCQTdKZSxFQUFBO0FFZ0NqQjtFRnlDRSxrQkV0QzBCO0VGdUMxQixTRXZDZ0M7RUZ3Q2hDLFdFeENzQztFRnlDdEMsYUV6QzZDO0VGMEM3QyxVRTFDbUQ7RUZpRmpELG1DQWhIVTtFQW1KWiwrQkVsSDBDO0VBQzFDLHlCRmxDWTtFRW1DWixlRnpCZTtFRTBCZixpQkFBaUIsRUFBQTtBQVJuQjtJQVlJLGNGdENXLEVBQUE7QUUwQmY7SUFnQkkseUJBQW9DLEVBQUE7QUFoQnhDO0lBb0JJLHlCRnBEYSxFQUFBO0FFZ0NqQjtJQXdCSSxpQkZ2Q2EsRUFBQTtBRTJDakI7RUFFSSxZQUFZLEVBQUE7QUFJaEI7RUFDRTtJQUNFLGlCQUFpQixFQUFBLEVBQ2xCO0FBR0g7RUFDRTs7SUZnREEsYUFBYTtJQUNiLGVFL0MyQjtJRmdEM0IsdUJFaERtQztJRmlEbkMseUJFakQrQztJRmtEL0MsdUJFbEQyRCxFQUFBO0lBRjNEOzs7O01BSUksV0FBVyxFQUFBLEVBQ1o7QUM5RUw7RUh5RUUsZUd4RXVCO0VIeUV2QixTR3pFNkI7RUgwRTdCLFVHMUVrQztFSDJFbEMsV0czRXVDO0VINEV2QyxTRzVFNEM7RUFDNUMseUJITVk7RUdMWixjSEdhO0VHRmIsaUJIWWdCO0VHWGhCLGFBQWE7RUFDYixzQkhpQ2E7RUdoQ2Isa0JBQWtCLEVBQUE7QUFQcEI7SUFVSSxVQUFVO0lBQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29va2llLWJhbm5lci9jb29raWUtYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb2xvdXJzXG4gKi9cblxuJHByaW1hcnk6ICM2NmNjOTk7XG4kc2Vjb25kYXJ5OiAjNjY5OWNjO1xuJGFsdDogIzYyYjJiMDtcbiRkYXJrOiAjMzAzMDMwO1xuJGdyZXk6ICM3MDcwNzA7XG4kbGlnaHQtZ3JleTogI2YwZjBmMDtcbiRsaWdodDogI2ZjZmNmYztcbiRhbGVydDogI2Q4NzQ2YTtcbiRpbmZvOiAjY2M5ZDE0O1xuXG4vKipcbiAqIEZvbnRzXG4gKi9cblxuJGZvbnQtbWljcm86IDFyZW07XG4kZm9udC1zbWFsbDogMS4ycmVtO1xuJGZvbnQtYmFzZTogMS42cmVtO1xuJGZvbnQtYmlnOiAxLjhyZW07XG4kZm9udC1tYWNybzogMi4ycmVtO1xuJGZvbnQtbWVnYTogMi42cmVtO1xuJGZvbnQtZ2lnYTogM3JlbTtcbiRmb250LXRlcmE6IDRyZW07XG5cbi8qKlxuICogSW1hZ2VzXG4gKi9cblxuJGltZy1zbTogMjVweDtcbiRpbWctbWQ6IDUwcHg7XG4kaW1nLWJpZzogNzVweDtcbiRpbWctbWVnYTogMTAwcHg7XG4kaW1nLWdpZ2E6IDE1MHB4O1xuXG4vKipcbiAqIENvbnRhaW5lcnNcbiAqL1xuXG4kaGVhZGVyLWhlaWdodDogNy41cmVtO1xuJGNhcmQtaGVpZ2h0OiAyMHJlbTtcbiRnYXAtc206IDAuNXJlbTtcbiRnYXAtcmVnOiAxLjVyZW07XG4kZ2FwLW1kOiAzcmVtO1xuJGdhcC1iaWc6IDQuNXJlbTtcbiRnYXAtbWVnYTogNnJlbTtcbiRnYXAtdGVyYTogNDB2aDtcbiRwYWRkaW5nLXNtOiAxcmVtO1xuXG4vKipcbiAqIE1peGluc1xuICovXG5cbkBtaXhpbiBzcGVjaWFsLWZvbnQoJHNpemUsICRjb2xvcikge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaGlnaGxpZ2h0KCRiZy1jb2xvciwgJGZvbnQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICBjb2xvcjogJGZvbnQtY29sb3I7XG59XG5cbkBtaXhpbiBzcXVhcmUoJHZhbHVlKSB7XG4gIHdpZHRoOiAkdmFsdWU7XG4gIGhlaWdodDogJHZhbHVlO1xufVxuXG5AbWl4aW4gcm91bmQoJHZhbHVlKSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6ICR2YWx1ZTtcbiAgaGVpZ2h0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBwb3NpdGlvbigkdHlwZSwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCkge1xuICBwb3NpdGlvbjogJHR5cGU7XG4gIHRvcDogJHRvcDtcbiAgcmlnaHQ6ICRyaWdodDtcbiAgYm90dG9tOiAkYm90dG9tO1xuICBsZWZ0OiAkbGVmdDtcbn1cblxuLy8gY2VudGVyIHZlcnRpY2FsbHlcbkBtaXhpbiB2ZXJ0aWNhbC1hbGlnbigkaGVpZ2h0KSB7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQgLyAyO1xufVxuXG5AbWl4aW4gYW5pbS1kcm9wZG93bigkdmFsdWUpIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlWSgkdmFsdWUpKTtcbiAgb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gdHJpYW5nbGUoJGRpciwgJGNvbG9yLCAkYmFzZSwgJGhlaWdodCkge1xuICAkdGlwOiAkaGVpZ2h0IHNvbGlkICRjb2xvcjtcblxuICBAaW5jbHVkZSBzcXVhcmUoJGJhc2UpO1xuICBib3JkZXI6ICRiYXNlIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItI3skZGlyfTogbm9uZTsgLy8gYm9yZGVyIGNvbmNlcm5lZCBkaXNhcHBlYXJcbiAgQGlmICRkaXIgPT0gJ3RvcCcge1xuICAgIGJvcmRlci1ib3R0b206ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAnYm90dG9tJyB7XG4gICAgYm9yZGVyLXRvcDogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdyaWdodCcge1xuICAgIGJvcmRlci1sZWZ0OiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ2xlZnQnIHtcbiAgICBib3JkZXItcmlnaHQ6ICR0aXA7XG4gIH1cbn1cblxuQG1peGluIGRyb3Atc2hhZG93KCRpc0luc2V0LCAkaG9yLCAkdmVyLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG4gIEBpZiAkaXNJbnNldCA9PSB0cnVlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIH0gQGVsc2UgaWYgJGlzSW5zZXQgPT0gZmFsc2Uge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gZmxleC1sYXlvdXQoJGhhc1dyYXA6IG5vd3JhcCwgJGp1c3RpZjogZmxleC1zdGFydCwgJGFsaWduQ29udGVudDogc3RyZXRjaCwgJGFsaWduSXRlbXM6IHN0cmV0Y2gpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiAkaGFzV3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmO1xuICBhbGlnbi1jb250ZW50OiAkYWxpZ25Db250ZW50O1xuICBhbGlnbi1pdGVtczogJGFsaWduSXRlbXM7XG59XG5cbkBtaXhpbiBib3JkZXIoJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCwgJGNvbG9yLCAkcmFkaXVzKSB7XG4gIGJvcmRlci10b3A6ICR0b3Agc29saWQgJGNvbG9yO1xuICBib3JkZXItcmlnaHQ6ICRyaWdodCBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1ib3R0b206ICRib3R0b20gc29saWQgJGNvbG9yO1xuICBib3JkZXItbGVmdDogJGxlZnQgc29saWQgJGNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4vLyBBTklNU1xuXG5AbWl4aW4gdHJhbnNmb3JtKCR0YW5zZm9ybWF0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW1vei10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICAtbXMtdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW8tdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHByb3AsICRkdXIsICR0aW1pbmcsICRkZWxheSwgJG90aGVycy4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgLW1zLXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1vLXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIHRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG59XG5cbkBtaXhpbiBidG4tYW5pbSgpIHtcbiAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDVweCwgNXB4LCAzcHgsIDBweCwgJGdyZXkpO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtM3B4KSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xufVxuXG4vKipcbiAqIEdlbmVyYWxcbiAqL1xuXG4vLyBDb250YWluZXJcblxuJW5vLXBhZGRpbmcgeyBwYWRkaW5nOiAwOyB9XG5cbiVuby1tYXJnaW4geyBtYXJnaW46IDA7IH1cblxuJWJsb2NrLWNlbnRyZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiVibG9jay1oYWxmLWNlbnRyZWQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuLy8gQm9yZGVyc1xuXG4lbm8tcmFkaXVzIHsgYm9yZGVyLXJhZGl1czogMDsgfVxuXG4lbm8tYm9yZGVyIHsgYm9yZGVyOiAwOyB9XG5cbiV0cmlhbmdsZXMtcGx1Z2dlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxlZnQ6IDI1JTtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuJWJ0bi1maWx0ZXIge1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40cywgZWFzZSwgMHMpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgY29sb3I6ICRsaWdodDtcbn1cblxuJWJ0bi1maWx0ZXItYW5pbSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZVkoMS4xKSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xufVxuIiwiLyoqXG4gKiBDb2xvdXJzXG4gKi9cbi8qKlxuICogRm9udHNcbiAqL1xuLyoqXG4gKiBJbWFnZXNcbiAqL1xuLyoqXG4gKiBDb250YWluZXJzXG4gKi9cbi8qKlxuICogTWl4aW5zXG4gKi9cbi8qKlxuICogR2VuZXJhbFxuICovXG4uYnRuLCAuYnRuLXByaW1hcnksIC5idG4tZm9udCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4OyB9XG4gIC5idG46Zm9jdXMsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1mb250OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5idG46dmlzaXRlZCwgLmJ0bi1wcmltYXJ5OnZpc2l0ZWQsIC5idG4tZm9udDp2aXNpdGVkIHtcbiAgICBjb2xvcjogI2ZjZmNmYzsgfVxuXG4uYnRuLWRhcmssIC5idG4tcHJpbWFyeSwgLmJ0bi1mb250IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbiAgY29sb3I6ICNmY2ZjZmM7IH1cbiAgLmJ0bi1kYXJrOnZpc2l0ZWQsIC5idG4tcHJpbWFyeTp2aXNpdGVkLCAuYnRuLWZvbnQ6dmlzaXRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDsgfVxuXG4uYnRuLXByaW1hcnkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4OyB9XG4gIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDNweCAwcHggIzcwNzA3MDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCAjNzA3MDcwO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCAjNzA3MDcwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZjYzk5OyB9XG5cbi5idG4tZm9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogNTBweDtcbiAgYm90dG9tOiAtMzVweDtcbiAgbGVmdDogYXV0bztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzcwNzA3MDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAycHggMTBweDsgfVxuICAuYnRuLWZvbnQ6aG92ZXIsIC5idG4tZm9udDpmb2N1cyB7XG4gICAgY29sb3I6ICNmY2ZjZmM7IH1cbiAgLmJ0bi1mb250OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NjU2OyB9XG4gIC5idG4tZm9udC5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2Y2M5OTsgfVxuICAuYnRuLWZvbnQgLmJ0bi1sYWJlbC1iaWcge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtOyB9XG5cbi5idG4tZ3JvdXAtbGluZSAuYnRuLCAuYnRuLWdyb3VwLWxpbmUgLmJ0bi1wcmltYXJ5LCAuYnRuLWdyb3VwLWxpbmUgLmJ0bi1mb250IHtcbiAgbWFyZ2luOiAxMHB4OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZ3JvdXAtLWp1bWJvIC5idG4tcHJpbWFyeSB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYnRuLWdyb3VwLS1kZXRhaWxzLFxuICAuYnRuLWdyb3VwLS1qdW1ibyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuICAgIC5idG4tZ3JvdXAtLWRldGFpbHMgLmJ0biwgLmJ0bi1ncm91cC0tZGV0YWlscyAuYnRuLXByaW1hcnksIC5idG4tZ3JvdXAtLWRldGFpbHMgLmJ0bi1mb250LFxuICAgIC5idG4tZ3JvdXAtLWp1bWJvIC5idG4sXG4gICAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1wcmltYXJ5LFxuICAgIC5idG4tZ3JvdXAtLWp1bWJvIC5idG4tZm9udCB7XG4gICAgICB3aWR0aDogMTAwJTsgfSB9XG5cbi53cmFwLWNvb2tpZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M5ZDE0O1xuICBjb2xvcjogI2ZjZmNmYztcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG9wYWNpdHk6IDAuOTU7XG4gIHBhZGRpbmc6IDNyZW0gMCAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAud3JhcC1jb29raWUgcCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87IH1cbiIsIi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogJGxpZ2h0O1xuICB9XG59XG5cbi5idG4tZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICBjb2xvcjogJGxpZ2h0O1xuXG4gICY6dmlzaXRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIH1cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgQGV4dGVuZCAuYnRuO1xuICBAZXh0ZW5kIC5idG4tZGFyaztcbiAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDNweCwgM3B4LCAzcHgsIDBweCwgJGdyZXkpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC4zcywgZWFzZS1pbiwgMHMpO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gICY6aG92ZXIsXG4gICY6YWN0aXZlIHtcbiAgICBAaW5jbHVkZSBidG4tYW5pbSgpO1xuICB9XG59XG5cbi5idG4tZm9udCB7XG4gIEBleHRlbmQgLmJ0bjtcbiAgQGV4dGVuZCAuYnRuLWRhcms7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCBhdXRvLCA1MHB4LCAtMzVweCwgYXV0byk7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCAwcHgsIDNweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuM3MsIGVhc2UtaW4sIDBzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtbWljcm87XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGlnaHQ7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGdyZXksIDEwJSk7XG4gIH1cblxuICAmLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgfVxuXG4gIC5idG4tbGFiZWwtYmlnIHtcbiAgICBmb250LXNpemU6ICRmb250LWJpZztcbiAgfVxufVxuXG4uYnRuLWdyb3VwLWxpbmUge1xuICAuYnRuIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ0bi1ncm91cC0tanVtYm8gLmJ0bi1wcmltYXJ5IHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYnRuLWdyb3VwLS1kZXRhaWxzLFxuICAuYnRuLWdyb3VwLS1qdW1ibyB7XG4gICAgQGluY2x1ZGUgZmxleC1sYXlvdXQod3JhcCwgY2VudGVyLCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0KTtcbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ2J1dHRvbnMnO1xuXG5cbi53cmFwLWNvb2tpZSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKGZpeGVkLCBhdXRvLCAwcHgsIDBweCwgMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGluZm87XG4gIGNvbG9yOiAkbGlnaHQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtYmFzZTtcbiAgb3BhY2l0eTogMC45NTtcbiAgcGFkZGluZzogJGdhcC1tZCAwICRnYXAtc207XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/cookie-banner/cookie-banner.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/cookie-banner/cookie-banner.component.ts ***!
  \****************************************************************************/
/*! exports provided: CookieBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBannerComponent", function() { return CookieBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/cookie/cookie.service */ "./src/app/providers/cookie/cookie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CookieBannerComponent = /** @class */ (function () {
    function CookieBannerComponent(cookieService) {
        this.cookieService = cookieService;
        this.isConsented = this.cookieService.getCookie('consent') === 'yes';
    }
    /**
     * Set the consent cookie's value to "yes" with a duartion of 7 days.
     * Event click is handled. If no consent, the cookie is not set.
     *
     * @param {boolean} isConsent
     * @param event
     * @returns {boolean}
     */
    CookieBannerComponent.prototype.consentToCookies = function (isConsent, event) {
        if (!isConsent) {
            return this.isConsented;
        }
        else if (isConsent) {
            this.cookieService.setCookie('consent', 'yes', 7);
            this.isConsented = true;
            event.preventDefault();
        }
    };
    CookieBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cookie-banner',
            template: __webpack_require__(/*! ./cookie-banner.component.html */ "./src/app/shared/components/cookie-banner/cookie-banner.component.html"),
            styles: [__webpack_require__(/*! ./cookie-banner.component.scss */ "./src/app/shared/components/cookie-banner/cookie-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], CookieBannerComponent);
    return CookieBannerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/details-modal/details-modal.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/details-modal/details-modal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-details\">\n    <!-- Modal content-->\n    <section class=\"modal-content\">\n\n      <header class=\"modal-header\" (click)=\"bsModalRef.hide()\">\n        <button type=\"button\" class=\"close\">&times;</button>\n        <h3 class=\"modal-title\" *ngIf=\"!details.confidentiality\">{{ details.name | translate }}</h3>\n        <h3 class=\"modal-title\" *ngIf=\"details.confidentiality\">{{ details.confidentiality | translate }}</h3>\n      </header>\n\n      <div class=\"modal-body wrap-img-txt\">\n        <figure>\n          <span class=\"img img-round\">\n            <img [src]=\"details.image\" [alt]=\"details.name\">\n          </span>\n          <figcaption>\n            <h4>{{ details.category }}</h4>\n            <!-- If PROJECT -->\n            <h4 *ngIf=\"type === 'project' && details.company\">\n              <span class=\"content-prefix\">{{ 'as' | translate }}</span>\n              {{ details.company.role }}\n              <span class=\"content-prefix\">{{ 'at' | translate }}</span>&nbsp;\n              <a [href]=\"details.company.url\" target=\"_blank\">{{ details.company.name }}</a>\n            </h4>\n          </figcaption>\n        </figure>\n\n        <section>\n          <p>{{ details.desc | translate }}</p>\n        </section>\n\n        <section class=\"img-group\" *ngIf=\"hasSkillsInvolved()\">\n          <header class=\"header-sub\"><h5>Skills involved</h5></header>\n\n          <figure class=\"img-wrap\" *ngFor=\"let tech of details.techs\">\n            <img class=\"img\" [src]=\"tech.logo\" [alt]=\"tech.name\">\n            <figcaption class=\"img-label\">{{ tech.name }}</figcaption>\n          </figure>\n        </section>\n      </div>\n\n      <footer class=\"modal-footer btn-group--modal\" *ngIf=\"details.url || details.github || type === 'project'\">\n        <!-- If a project -->\n        <!--<a class=\"btn btn-primary\" (click)=\"goTo(details)\" *ngIf=\"type === 'project'\" data-dismiss=\"modal\">\n          {{ 'Learn More' | translate }}\n        </a>-->\n        <!-- If a skill -->\n        <a class=\"btn btn-primary\" [href]=\"details.url\" *ngIf=\"hasUrl() === 'info'\" target=\"_blank\">\n          {{ 'Learn More' | translate }}\n        </a>\n        <!-- If not a skill -->\n        <a class=\"btn btn-primary\" [href]=\"details.url\" *ngIf=\"hasUrl() === 'live'\" target=\"_blank\">\n          {{ 'live' | translate }}\n        </a>\n        <a class=\"btn btn-primary\" [href]=\"details.github\" *ngIf=\"details.github\" target=\"_blank\">\n          Github\n        </a>\n      </footer>\n\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/details-modal/details-modal.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/details-modal/details-modal.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.img {\n  display: block; }\n.img-group {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start; }\n.img-group .img {\n    margin: 10px; }\n.img-float {\n  width: 75px;\n  height: 75px; }\n.img-brand {\n  width: 100px;\n  height: 100px; }\n.img-label {\n  transition: all 0.4s ease 0s;\n  font-size: 1rem;\n  font-weight: bold;\n  margin: auto;\n  opacity: 0;\n  text-align: center;\n  width: calc(75px + 15px); }\n.img-round, .img-round--sm, .img-round--big {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  box-shadow: 0px 3px 3px 0px #707070;\n  background-color: #fcfcfc;\n  padding: calc(100px / 4); }\n.img-round img, .img-round--sm img, .img-round--big img {\n    width: 50px;\n    height: 50px; }\n.img-round--sm {\n  border-radius: 50%;\n  width: 75px;\n  height: 75px;\n  padding: calc(50px / 4); }\n.img-round--sm img {\n    width: 50px;\n    height: 50px; }\n.img-round--big {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  padding: calc(100px / 4); }\n.img-round--big img {\n    width: 100px;\n    height: 100px; }\n.img-round--big + .img-label {\n    font-size: 1.6rem;\n    width: calc(150px + 15px); }\n.img-link {\n  transition: all 0.4s ease 0s;\n  cursor: pointer; }\n.img--flip {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1); }\n.img-wrap {\n  min-height: 150px; }\n.img-wrap:hover, .img-wrap:focus {\n    text-decoration: none; }\n.img-wrap:hover .img-link, .img-wrap:focus .img-link {\n      box-shadow: 0px 6px 6px 0px #707070;\n      -webkit-transform: translateY(-5px);\n      transform: translateY(-5px); }\n.img-wrap:hover .img-label, .img-wrap:focus .img-label {\n      opacity: 1; }\n/**\n  Media Queries\n */\n@media screen and (max-width: 768px) {\n  .img-group {\n    justify-content: center; } }\n@media screen and (max-width: 992px) {\n  .img-label {\n    opacity: 1; } }\n.modal-details .modal-content {\n  min-height: 40rem; }\n.modal-details .modal-content .img-wrap,\n  .modal-details .modal-content .img-label {\n    display: inline-block; }\n.modal-details .modal-content .img-wrap .img,\n    .modal-details .modal-content .img-label .img {\n      width: 50px;\n      height: 50px;\n      margin: auto; }\n.modal-details .modal-content .img-label {\n    margin-top: 0.5rem; }\n.modal-details .modal-content .modal-footer {\n    position: absolute;\n    top: auto;\n    right: 0px;\n    bottom: 0px;\n    left: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RldGFpbHMtbW9kYWwvZGV0YWlscy1tb2RhbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9faW1hZ2VzLnNjc3MiLCIvVXNlcnMvZmxpcGthcnQvMjAxOS9wb3J0Zm9saW8vdmltYWxrb3ZhdGguZ2l0aHViLmlvL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGV0YWlscy1tb2RhbC9kZXRhaWxzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FEWUY7O0VDVEU7QURzQkY7O0VDbkJFO0FENkJGOztFQzFCRTtBRHdDRjs7RUNyQ0U7QURzSkY7O0VDbkpFO0FDakJGO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VGeUhFLGFBQWE7RUFDYixlRXpIeUI7RUYwSHpCLDJCRTFIcUM7RUYySHJDLHlCRTNIaUQ7RUY0SGpELHVCRTVINkQsRUFBQTtBQUQvRDtJQUlJLFlBQVksRUFBQTtBQUloQjtFRnNERSxXQWpDWTtFQWtDWixZQWxDWSxFQUFBO0FFakJkO0VGa0RFLFlBaENjO0VBaUNkLGFBakNjLEVBQUE7QUVkaEI7RUZ1SUUsNEJFdEl1QztFQUN2QyxlRkplO0VFS2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUErQixFQUFBO0FBSWpDO0VGd0NFLGtCQUFrQjtFQUNsQixZQXRDYztFQXVDZCxhQXZDYztFQXNGWixtQ0FoSFU7RUUwQloseUJGeEJhO0VFeUJiLHdCQUErQixFQUFBO0FBSmpDO0lGbUNFLFdBbENXO0lBbUNYLFlBbkNXLEVBQUE7QUVVYjtFRjZCRSxrQkFBa0I7RUFDbEIsV0F2Q1k7RUF3Q1osWUF4Q1k7RUVZWix1QkFBNkIsRUFBQTtBQUgvQjtJRndCRSxXQWxDVztJQW1DWCxZQW5DVyxFQUFBO0FFb0JiO0VGbUJFLGtCQUFrQjtFQUNsQixZQXJDYztFQXNDZCxhQXRDYztFRW9CZCx3QkFBK0IsRUFBQTtBQUhqQztJRmNFLFlBaENjO0lBaUNkLGFBakNjLEVBQUE7QUVrQmhCO0lBVUksaUJGMUNjO0lFMkNkLHlCQUFnQyxFQUFBO0FBSXBDO0VGd0ZFLDRCRXZGdUM7RUFDdkMsZUFBZSxFQUFBO0FBR2pCO0VGdUVFLDZCRXRFNkI7RUYwRTdCLHFCRTFFNkIsRUFBQTtBQUcvQjtFQUNFLGlCQUFpQixFQUFBO0FBRG5CO0lBS0kscUJBQXFCLEVBQUE7QUFMekI7TUY0Q0ksbUNBaEhVO01BdUlaLG1DRTFEdUM7TUY4RHZDLDJCRTlEdUMsRUFBQTtBQVR6QztNQWFNLFVBQVUsRUFBQTtBQUtoQjs7RUR3QkU7QUNyQkY7RUE3RkE7SUErRkksdUJBQXVCLEVBQUEsRUFDeEI7QUFHSDtFQW5GQTtJQXFGSSxVQUFVLEVBQUEsRUFDWDtBQ3ZHSDtFQUdJLGlCQUFpQixFQUFBO0FBSHJCOztJQU9NLHFCQUFxQixFQUFBO0FBUDNCOztNSCtERSxXQWxDVztNQW1DWCxZQW5DVztNR2xCTCxZQUFZLEVBQUE7QUFYcEI7SUFnQk0sa0JId0JTLEVBQUE7QUd4Q2Y7SUgwRUUsa0JHdEQ4QjtJSHVEOUIsU0d2RG9DO0lId0RwQyxVR3hEeUM7SUh5RHpDLFdHekQ4QztJSDBEOUMsU0cxRG1ELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsL2RldGFpbHMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbG91cnNcbiAqL1xuXG4kcHJpbWFyeTogIzY2Y2M5OTtcbiRzZWNvbmRhcnk6ICM2Njk5Y2M7XG4kYWx0OiAjNjJiMmIwO1xuJGRhcms6ICMzMDMwMzA7XG4kZ3JleTogIzcwNzA3MDtcbiRsaWdodC1ncmV5OiAjZjBmMGYwO1xuJGxpZ2h0OiAjZmNmY2ZjO1xuJGFsZXJ0OiAjZDg3NDZhO1xuJGluZm86ICNjYzlkMTQ7XG5cbi8qKlxuICogRm9udHNcbiAqL1xuXG4kZm9udC1taWNybzogMXJlbTtcbiRmb250LXNtYWxsOiAxLjJyZW07XG4kZm9udC1iYXNlOiAxLjZyZW07XG4kZm9udC1iaWc6IDEuOHJlbTtcbiRmb250LW1hY3JvOiAyLjJyZW07XG4kZm9udC1tZWdhOiAyLjZyZW07XG4kZm9udC1naWdhOiAzcmVtO1xuJGZvbnQtdGVyYTogNHJlbTtcblxuLyoqXG4gKiBJbWFnZXNcbiAqL1xuXG4kaW1nLXNtOiAyNXB4O1xuJGltZy1tZDogNTBweDtcbiRpbWctYmlnOiA3NXB4O1xuJGltZy1tZWdhOiAxMDBweDtcbiRpbWctZ2lnYTogMTUwcHg7XG5cbi8qKlxuICogQ29udGFpbmVyc1xuICovXG5cbiRoZWFkZXItaGVpZ2h0OiA3LjVyZW07XG4kY2FyZC1oZWlnaHQ6IDIwcmVtO1xuJGdhcC1zbTogMC41cmVtO1xuJGdhcC1yZWc6IDEuNXJlbTtcbiRnYXAtbWQ6IDNyZW07XG4kZ2FwLWJpZzogNC41cmVtO1xuJGdhcC1tZWdhOiA2cmVtO1xuJGdhcC10ZXJhOiA0MHZoO1xuJHBhZGRpbmctc206IDFyZW07XG5cbi8qKlxuICogTWl4aW5zXG4gKi9cblxuQG1peGluIHNwZWNpYWwtZm9udCgkc2l6ZSwgJGNvbG9yKSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG5cbkBtaXhpbiBoaWdobGlnaHQoJGJnLWNvbG9yLCAkZm9udC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcbn1cblxuQG1peGluIHNxdWFyZSgkdmFsdWUpIHtcbiAgd2lkdGg6ICR2YWx1ZTtcbiAgaGVpZ2h0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiByb3VuZCgkdmFsdWUpIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogJHZhbHVlO1xuICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIHBvc2l0aW9uKCR0eXBlLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KSB7XG4gIHBvc2l0aW9uOiAkdHlwZTtcbiAgdG9wOiAkdG9wO1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIGxlZnQ6ICRsZWZ0O1xufVxuXG4vLyBjZW50ZXIgdmVydGljYWxseVxuQG1peGluIHZlcnRpY2FsLWFsaWduKCRoZWlnaHQpIHtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBsaW5lLWhlaWdodDogJGhlaWdodCAvIDI7XG59XG5cbkBtaXhpbiBhbmltLWRyb3Bkb3duKCR2YWx1ZSkge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVZKCR2YWx1ZSkpO1xuICBvcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiB0cmlhbmdsZSgkZGlyLCAkY29sb3IsICRiYXNlLCAkaGVpZ2h0KSB7XG4gICR0aXA6ICRoZWlnaHQgc29saWQgJGNvbG9yO1xuXG4gIEBpbmNsdWRlIHNxdWFyZSgkYmFzZSk7XG4gIGJvcmRlcjogJGJhc2Ugc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci0jeyRkaXJ9OiBub25lOyAvLyBib3JkZXIgY29uY2VybmVkIGRpc2FwcGVhclxuICBAaWYgJGRpciA9PSAndG9wJyB7XG4gICAgYm9yZGVyLWJvdHRvbTogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdib3R0b20nIHtcbiAgICBib3JkZXItdG9wOiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ3JpZ2h0JyB7XG4gICAgYm9yZGVyLWxlZnQ6ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAnbGVmdCcge1xuICAgIGJvcmRlci1yaWdodDogJHRpcDtcbiAgfVxufVxuXG5AbWl4aW4gZHJvcC1zaGFkb3coJGlzSW5zZXQsICRob3IsICR2ZXIsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcbiAgQGlmICRpc0luc2V0ID09IHRydWUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6IGluc2V0ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgfSBAZWxzZSBpZiAkaXNJbnNldCA9PSBmYWxzZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBmbGV4LWxheW91dCgkaGFzV3JhcDogbm93cmFwLCAkanVzdGlmOiBmbGV4LXN0YXJ0LCAkYWxpZ25Db250ZW50OiBzdHJldGNoLCAkYWxpZ25JdGVtczogc3RyZXRjaCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6ICRoYXNXcmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWY7XG4gIGFsaWduLWNvbnRlbnQ6ICRhbGlnbkNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtcztcbn1cblxuQG1peGluIGJvcmRlcigkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0LCAkY29sb3IsICRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcDogJHRvcCBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1yaWdodDogJHJpZ2h0IHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLWJvdHRvbTogJGJvdHRvbSBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1sZWZ0OiAkbGVmdCBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8vIEFOSU1TXG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRhbnNmb3JtYXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICAtbW96LXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1tcy10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICAtby10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICB0cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcCwgJGR1ciwgJHRpbWluZywgJGRlbGF5LCAkb3RoZXJzLi4uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtbXMtdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgLW8tdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbn1cblxuQG1peGluIGJ0bi1hbmltKCkge1xuICBAaW5jbHVkZSBkcm9wLXNoYWRvdyhmYWxzZSwgNXB4LCA1cHgsIDNweCwgMHB4LCAkZ3JleSk7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVYKC0zcHgpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG59XG5cbi8qKlxuICogR2VuZXJhbFxuICovXG5cbi8vIENvbnRhaW5lclxuXG4lbm8tcGFkZGluZyB7IHBhZGRpbmc6IDA7IH1cblxuJW5vLW1hcmdpbiB7IG1hcmdpbjogMDsgfVxuXG4lYmxvY2stY2VudHJlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuJWJsb2NrLWhhbGYtY2VudHJlZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG4vLyBCb3JkZXJzXG5cbiVuby1yYWRpdXMgeyBib3JkZXItcmFkaXVzOiAwOyB9XG5cbiVuby1ib3JkZXIgeyBib3JkZXI6IDA7IH1cblxuJXRyaWFuZ2xlcy1wbHVnZ2VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMjUlO1xuICByaWdodDogMjUlO1xufVxuXG4lYnRuLWZpbHRlciB7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjRzLCBlYXNlLCAwcyk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICBjb2xvcjogJGxpZ2h0O1xufVxuXG4lYnRuLWZpbHRlci1hbmltIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlWSgxLjEpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG59XG4iLCIvKipcbiAqIENvbG91cnNcbiAqL1xuLyoqXG4gKiBGb250c1xuICovXG4vKipcbiAqIEltYWdlc1xuICovXG4vKipcbiAqIENvbnRhaW5lcnNcbiAqL1xuLyoqXG4gKiBNaXhpbnNcbiAqL1xuLyoqXG4gKiBHZW5lcmFsXG4gKi9cbi5pbWcge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uaW1nLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gIC5pbWctZ3JvdXAgLmltZyB7XG4gICAgbWFyZ2luOiAxMHB4OyB9XG5cbi5pbWctZmxvYXQge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4OyB9XG5cbi5pbWctYnJhbmQge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7IH1cblxuLmltZy1sYWJlbCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKDc1cHggKyAxNXB4KTsgfVxuXG4uaW1nLXJvdW5kLCAuaW1nLXJvdW5kLS1zbSwgLmltZy1yb3VuZC0tYmlnIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICBwYWRkaW5nOiBjYWxjKDEwMHB4IC8gNCk7IH1cbiAgLmltZy1yb3VuZCBpbWcsIC5pbWctcm91bmQtLXNtIGltZywgLmltZy1yb3VuZC0tYmlnIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4OyB9XG5cbi5pbWctcm91bmQtLXNtIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBwYWRkaW5nOiBjYWxjKDUwcHggLyA0KTsgfVxuICAuaW1nLXJvdW5kLS1zbSBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDsgfVxuXG4uaW1nLXJvdW5kLS1iaWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogY2FsYygxMDBweCAvIDQpOyB9XG4gIC5pbWctcm91bmQtLWJpZyBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4OyB9XG4gIC5pbWctcm91bmQtLWJpZyArIC5pbWctbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHdpZHRoOiBjYWxjKDE1MHB4ICsgMTVweCk7IH1cblxuLmltZy1saW5rIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmltZy0tZmxpcCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7IH1cblxuLmltZy13cmFwIHtcbiAgbWluLWhlaWdodDogMTUwcHg7IH1cbiAgLmltZy13cmFwOmhvdmVyLCAuaW1nLXdyYXA6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgIC5pbWctd3JhcDpob3ZlciAuaW1nLWxpbmssIC5pbWctd3JhcDpmb2N1cyAuaW1nLWxpbmsge1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNnB4IDZweCAwcHggIzcwNzA3MDtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDZweCA2cHggMHB4ICM3MDcwNzA7XG4gICAgICBib3gtc2hhZG93OiAwcHggNnB4IDZweCAwcHggIzcwNzA3MDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XG4gICAgLmltZy13cmFwOmhvdmVyIC5pbWctbGFiZWwsIC5pbWctd3JhcDpmb2N1cyAuaW1nLWxhYmVsIHtcbiAgICAgIG9wYWNpdHk6IDE7IH1cblxuLyoqXG4gIE1lZGlhIFF1ZXJpZXNcbiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltZy1ncm91cCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW1nLWxhYmVsIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLm1vZGFsLWRldGFpbHMgLm1vZGFsLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiA0MHJlbTsgfVxuICAubW9kYWwtZGV0YWlscyAubW9kYWwtY29udGVudCAuaW1nLXdyYXAsXG4gIC5tb2RhbC1kZXRhaWxzIC5tb2RhbC1jb250ZW50IC5pbWctbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5tb2RhbC1kZXRhaWxzIC5tb2RhbC1jb250ZW50IC5pbWctd3JhcCAuaW1nLFxuICAgIC5tb2RhbC1kZXRhaWxzIC5tb2RhbC1jb250ZW50IC5pbWctbGFiZWwgLmltZyB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1hcmdpbjogYXV0bzsgfVxuICAubW9kYWwtZGV0YWlscyAubW9kYWwtY29udGVudCAuaW1nLWxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IH1cbiAgLm1vZGFsLWRldGFpbHMgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogYXV0bztcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDsgfVxuIiwiLmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1nLWdyb3VwIHtcbiAgQGluY2x1ZGUgZmxleC1sYXlvdXQod3JhcCwgZmxleC1zdGFydCwgZmxleC1zdGFydCwgZmxleC1zdGFydCk7XG5cbiAgLmltZyB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG59XG5cbi5pbWctZmxvYXQge1xuICBAaW5jbHVkZSBzcXVhcmUoJGltZy1iaWcpO1xufVxuXG4uaW1nLWJyYW5kIHtcbiAgQGluY2x1ZGUgc3F1YXJlKCRpbWctbWVnYSk7XG59XG5cbi5pbWctbGFiZWwge1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40cywgZWFzZSwgMHMpO1xuICBmb250LXNpemU6ICRmb250LW1pY3JvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKCN7JGltZy1iaWd9ICsgMTVweCk7XG59XG5cbi8vIFJvdW5kZWQgY29udGFpbmUgZm9yIGltYWdlc1xuLmltZy1yb3VuZCB7XG4gIEBpbmNsdWRlIHJvdW5kKCRpbWctbWVnYSk7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCAwcHgsIDNweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xuICBwYWRkaW5nOiBjYWxjKCN7JGltZy1tZWdhfSAvIDQpO1xuXG4gIGltZyB7XG4gICAgQGluY2x1ZGUgc3F1YXJlKCRpbWctbWQpO1xuICB9XG59XG5cbi5pbWctcm91bmQtLXNtIHtcbiAgQGV4dGVuZCAuaW1nLXJvdW5kO1xuICBAaW5jbHVkZSByb3VuZCgkaW1nLWJpZyk7XG4gIHBhZGRpbmc6IGNhbGMoI3skaW1nLW1kfSAvIDQpO1xuXG4gIGltZyB7XG4gICAgQGluY2x1ZGUgc3F1YXJlKCRpbWctbWQpO1xuICB9XG59XG5cbi5pbWctcm91bmQtLWJpZyB7XG4gIEBleHRlbmQgLmltZy1yb3VuZDtcbiAgQGluY2x1ZGUgcm91bmQoJGltZy1naWdhKTtcbiAgcGFkZGluZzogY2FsYygjeyRpbWctbWVnYX0gLyA0KTtcblxuICBpbWcge1xuICAgIEBpbmNsdWRlIHNxdWFyZSgkaW1nLW1lZ2EpO1xuICB9XG5cbiAgKyAuaW1nLWxhYmVsIHtcbiAgICBmb250LXNpemU6ICRmb250LWJhc2U7XG4gICAgd2lkdGg6IGNhbGMoI3skaW1nLWdpZ2F9ICsgMTVweCk7XG4gIH1cbn1cblxuLmltZy1saW5rIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nLS1mbGlwIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlWCgtMSkpO1xufVxuXG4uaW1nLXdyYXAge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAuaW1nLWxpbmsge1xuICAgICAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDBweCwgNnB4LCA2cHgsIDBweCwgJGdyZXkpO1xuICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTVweCkpO1xuICAgIH1cblxuICAgIC5pbWctbGFiZWwge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gIE1lZGlhIFF1ZXJpZXNcbiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltZy1ncm91cCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmltZy1sYWJlbCB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ2ltYWdlcyc7XG5cbi5tb2RhbC1kZXRhaWxzIHtcblxuICAubW9kYWwtY29udGVudCB7XG4gICAgbWluLWhlaWdodDogNDByZW07XG5cbiAgICAuaW1nLXdyYXAsXG4gICAgLmltZy1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgIC5pbWcge1xuICAgICAgICBAaW5jbHVkZSBzcXVhcmUoJGltZy1tZCk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW1nLWxhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6ICRnYXAtc207XG4gICAgfVxuXG4gICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwgYXV0bywgMHB4LCAwcHgsIDBweCk7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/details-modal/details-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/details-modal/details-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: DetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModalComponent", function() { return DetailsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsModalComponent = /** @class */ (function () {
    // @Output() public goToProject = new EventEmitter();
    function DetailsModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.type = '';
    }
    /**
     * Check if the project is a role or a project
     * If yes it means they have skills associated
     *
     * @returns {boolean}
     */
    DetailsModalComponent.prototype.hasSkillsInvolved = function () {
        return this.type === 'role' || this.type === 'project';
    };
    /**
     * Check if link should redirect to a live website or to further doc
     * If no returns nothing (therefore remove the link)
     *
     * @returns {string}
     */
    DetailsModalComponent.prototype.hasUrl = function () {
        return !this.details.url ? '' :
            (this.type === 'skill' || this.type === 'tool') ? 'info' : 'live';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsModalComponent.prototype, "details", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsModalComponent.prototype, "type", void 0);
    DetailsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./details-modal.component.html */ "./src/app/shared/components/details-modal/details-modal.component.html"),
            styles: [__webpack_require__(/*! ./details-modal.component.scss */ "./src/app/shared/components/details-modal/details-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], DetailsModalComponent);
    return DetailsModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/filters/filters.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/filters/filters.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter by category -->\n<section class=\"container-filters\">\n  <!-- If res over xs -->\n  <div class=\"btn-group btn-group-justified wrap-filters hidden-xs\">\n    <div class=\"btn-group btn-group--filters\" *ngFor=\"let filter of filters; let i = index\">\n      <!-- we need to double wrap btn-group for buttons -->\n      <button class=\"btn\" (click)=\"onSelect(filter)\" [class.selected]=\"isSelected(filters[i])\">\n        {{ filter }}\n        <span *ngIf=\"filter === ''\">All</span>\n      </button>\n    </div>\n  </div>\n  <!-- If res below xs -->\n  <!--<div class=\"wrap-filters&#45;&#45;alt visible-xs-block\">\n      &lt;!&ndash; Reset &ndash;&gt;\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onSelect('')\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n      </button>\n      &lt;!&ndash; Call Modal &ndash;&gt;\n      <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#filtersModal\">\n          <span class=\"glyphicon glyphicon-filter\" aria-hidden=\"true\"></span>\n      </button>\n  </div>-->\n  <div class=\"wrap-filters--alt visible-xs-block\">\n    <!-- Reset -->\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"onSelect('')\">\n      <span>Reset</span>\n    </button>\n  </div>\n</section>\n\n<!-- Modal -->\n<div id=\"filtersModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <section class=\"modal-content modal-filters\">\n      <header class=\"modal-header\" data-dismiss=\"modal\">\n        <button type=\"button\" class=\"close\">&times;</button>\n        <h4 class=\"modal-title\">Filter by category</h4>\n      </header>\n      <div class=\"btn-group btn-group--filters\" *ngFor=\"let filter of filters; let i = index\">\n        <button class=\"btn\" (click)=\"onSelect(filter)\" [class.selected]=\"isSelected(filters[i])\">\n          {{ filter }}\n          <span *ngIf=\"filter === ''\">All</span>\n        </button>\n      </div>\n    </section>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/filters/filters.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/filters/filters.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/filters/filters.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/filters/filters.component.ts ***!
  \****************************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/filters */ "./src/app/shared/constants/filters.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Environment

var FiltersComponent = /** @class */ (function () {
    function FiltersComponent() {
        this.selectFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedFilter = '';
    }
    /**
     * Generate the filters relevant to the page
     */
    FiltersComponent.prototype.ngOnInit = function () {
        var filters = _constants_filters__WEBPACK_IMPORTED_MODULE_1__["FILTERS"] || null;
        switch (this.page) {
            case 'experience':
                this.filters = filters.roles;
                break;
            case 'projects':
                this.filters = filters.projects;
                break;
            case 'skills':
                this.filters = filters.skills;
                break;
        }
    };
    /**
     * Set the selected filter and emit value to parent
     *
     * @param {string} filter
     */
    FiltersComponent.prototype.onSelect = function (filter) {
        this.selectedFilter = filter;
        this.selectFilter.emit(filter);
    };
    /**
     * Check if this filter is the selected one to highlight it
     *
     * @param {string} filter
     * @returns {boolean}
     */
    FiltersComponent.prototype.isSelected = function (filter) {
        return this.selectedFilter === filter;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FiltersComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "selectFilter", void 0);
    FiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/shared/components/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/shared/components/filters/filters.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-backdrop\"></div>\n\n<footer class=\"main-footer\">\n\n  <div class=\"triangle\"></div>\n\n  <section class=\"footer-social\">\n    <a class=\"img-wrap\" *ngFor=\"let social of socials\" [href]=\"social.url\" target=\"_blank\">\n      <figure class=\"img img-round img-link\">\n        <img [src]=\"social.image\" [alt]=\"social.name\">\n      </figure>\n    </a>\n  </section>\n  \n  <ul class=\"navbar-footer\">\n    <li class=\"nav-route\" *ngFor=\"let tab of subMenu\" routerLinkActive=\"active\">\n      <a [routerLink]=\"[tab.key]\" (click)=\"setTitle(tab.value)\">{{ tab.value | translate }}</a>\n    </li>\n  </ul>\n\n  <section class=\"footer-copyright\">\n    <p>&copy; Vimal Kovath - MIT License - {{ currentYear }}</p>\n  </section>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.main-footer .triangle {\n  position: absolute;\n  margin: 0 auto;\n  left: 25%;\n  right: 25%; }\n.img {\n  display: block; }\n.img-group {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start; }\n.img-group .img {\n    margin: 10px; }\n.img-float {\n  width: 75px;\n  height: 75px; }\n.img-brand {\n  width: 100px;\n  height: 100px; }\n.img-label {\n  transition: all 0.4s ease 0s;\n  font-size: 1rem;\n  font-weight: bold;\n  margin: auto;\n  opacity: 0;\n  text-align: center;\n  width: calc(75px + 15px); }\n.img-round, .img-round--sm, .img-round--big {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  box-shadow: 0px 3px 3px 0px #707070;\n  background-color: #fcfcfc;\n  padding: calc(100px / 4); }\n.img-round img, .img-round--sm img, .img-round--big img {\n    width: 50px;\n    height: 50px; }\n.img-round--sm {\n  border-radius: 50%;\n  width: 75px;\n  height: 75px;\n  padding: calc(50px / 4); }\n.img-round--sm img {\n    width: 50px;\n    height: 50px; }\n.img-round--big {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  padding: calc(100px / 4); }\n.img-round--big img {\n    width: 100px;\n    height: 100px; }\n.img-round--big + .img-label {\n    font-size: 1.6rem;\n    width: calc(150px + 15px); }\n.img-link {\n  transition: all 0.4s ease 0s;\n  cursor: pointer; }\n.img--flip {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1); }\n.img-wrap {\n  min-height: 150px; }\n.img-wrap:hover, .img-wrap:focus {\n    text-decoration: none; }\n.img-wrap:hover .img-link, .img-wrap:focus .img-link {\n      box-shadow: 0px 6px 6px 0px #707070;\n      -webkit-transform: translateY(-5px);\n      transform: translateY(-5px); }\n.img-wrap:hover .img-label, .img-wrap:focus .img-label {\n      opacity: 1; }\n/**\n  Media Queries\n */\n@media screen and (max-width: 768px) {\n  .img-group {\n    justify-content: center; } }\n@media screen and (max-width: 992px) {\n  .img-label {\n    opacity: 1; } }\n.main-footer {\n  background-color: #66cc99;\n  position: relative; }\n.main-footer .footer-social {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-content: space-around;\n    align-items: center;\n    width: 75%;\n    margin: auto;\n    padding: 4.5rem 1.5rem 3rem; }\n.main-footer .footer-copyright {\n    background-color: #62b2b0;\n    color: #fcfcfc;\n    font-size: 1.2rem;\n    padding: 3rem 0 6rem;\n    text-align: center; }\n.main-footer .footer-copyright p {\n      margin-bottom: 0.5rem; }\n.main-footer .triangle {\n    width: 50px;\n    height: 50px;\n    border: 50px solid transparent;\n    border-bottom: none;\n    border-top: 30px solid #fcfcfc;\n    top: -1px; }\n.navbar-footer {\n  text-align: center;\n  padding: 0px; }\n.navbar-footer .nav-route {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin: auto 0.5rem 0.5rem; }\n.navbar-footer .nav-route a {\n      color: #fcfcfc;\n      text-decoration: underline;\n      transition: all 0.2s ease-in 0s; }\n.navbar-footer .nav-route a:hover,\n    .navbar-footer .nav-route.active > a {\n      text-shadow: 1.5px 1.5px #707070;\n      text-decoration: none; }\n.footer-backdrop {\n  box-shadow: 0px -10px 30px 0px #fcfcfc;\n  margin-top: 20px;\n  position: relative;\n  background: #fcfcfc;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZmxpcGthcnQvMjAxOS9wb3J0Zm9saW8vdmltYWxrb3ZhdGguZ2l0aHViLmlvL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9faW1hZ2VzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURZRjs7RUNURTtBRHNCRjs7RUNuQkU7QUQ2QkY7O0VDMUJFO0FEd0NGOztFQ3JDRTtBRHNKRjs7RUNuSkU7QUNkRjtFRjRMRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVM7RUFDVCxVQUFVLEVBQUE7QUdsTVo7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUh5SEUsYUFBYTtFQUNiLGVHekh5QjtFSDBIekIsMkJHMUhxQztFSDJIckMseUJHM0hpRDtFSDRIakQsdUJHNUg2RCxFQUFBO0FBRC9EO0lBSUksWUFBWSxFQUFBO0FBSWhCO0VIc0RFLFdBakNZO0VBa0NaLFlBbENZLEVBQUE7QUdqQmQ7RUhrREUsWUFoQ2M7RUFpQ2QsYUFqQ2MsRUFBQTtBR2RoQjtFSHVJRSw0Qkd0SXVDO0VBQ3ZDLGVISmU7RUdLZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsd0JBQStCLEVBQUE7QUFJakM7RUh3Q0Usa0JBQWtCO0VBQ2xCLFlBdENjO0VBdUNkLGFBdkNjO0VBc0ZaLG1DQWhIVTtFRzBCWix5Qkh4QmE7RUd5QmIsd0JBQStCLEVBQUE7QUFKakM7SUhtQ0UsV0FsQ1c7SUFtQ1gsWUFuQ1csRUFBQTtBR1ViO0VINkJFLGtCQUFrQjtFQUNsQixXQXZDWTtFQXdDWixZQXhDWTtFR1laLHVCQUE2QixFQUFBO0FBSC9CO0lId0JFLFdBbENXO0lBbUNYLFlBbkNXLEVBQUE7QUdvQmI7RUhtQkUsa0JBQWtCO0VBQ2xCLFlBckNjO0VBc0NkLGFBdENjO0VHb0JkLHdCQUErQixFQUFBO0FBSGpDO0lIY0UsWUFoQ2M7SUFpQ2QsYUFqQ2MsRUFBQTtBR2tCaEI7SUFVSSxpQkgxQ2M7SUcyQ2QseUJBQWdDLEVBQUE7QUFJcEM7RUh3RkUsNEJHdkZ1QztFQUN2QyxlQUFlLEVBQUE7QUFHakI7RUh1RUUsNkJHdEU2QjtFSDBFN0IscUJHMUU2QixFQUFBO0FBRy9CO0VBQ0UsaUJBQWlCLEVBQUE7QUFEbkI7SUFLSSxxQkFBcUIsRUFBQTtBQUx6QjtNSDRDSSxtQ0FoSFU7TUF1SVosbUNHMUR1QztNSDhEdkMsMkJHOUR1QyxFQUFBO0FBVHpDO01BYU0sVUFBVSxFQUFBO0FBS2hCOztFRjhCRTtBRTNCRjtFQTdGQTtJQStGSSx1QkFBdUIsRUFBQSxFQUN4QjtBQUdIO0VBbkZBO0lBcUZJLFVBQVUsRUFBQSxFQUNYO0FEdkdIO0VBQ0UseUJGQWU7RUVDZixrQkFBa0IsRUFBQTtBQUZwQjtJRjBIRSxhQUFhO0lBQ2IsZUV0SDJCO0lGdUgzQiw2QkV2SHlDO0lGd0h6QywyQkV4SHVEO0lGeUh2RCxtQkV6SCtEO0lBQzdELFVBQVU7SUFDVixZQUFZO0lBQ1osMkJGa0NTLEVBQUE7QUUxQ2I7SUFZSSx5QkZUUztJRVVULGNGTlc7SUVPWCxpQkZFZTtJRURmLG9CRjZCVztJRTVCWCxrQkFBa0IsRUFBQTtBQWhCdEI7TUFtQk0scUJGcUJTLEVBQUE7QUV4Q2Y7SUYrREUsV0V2QzBDO0lGd0MxQyxZRXhDMEM7SUZ3RTFDLDhCQUErQjtJQUMvQixtQkFBMkI7SUFJekIsOEJBOUZXO0lFbUJYLFNBQVMsRUFBQTtBQUliO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUZkO0lBS0kscUJBQXFCO0lBQ3JCLGlCRm5CYztJRW9CZCwwQkZHVyxFQUFBO0FFVmY7TUFVTSxjRmpDUztNRWtDVCwwQkFBMEI7TUYrRzlCLCtCRTlHOEMsRUFBQTtBQVpoRDs7TUFpQk0sZ0NGMUNRO01FMkNSLHFCQUFxQixFQUFBO0FBSzNCO0VGZ0VJLHNDQTlHVztFRWdEYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CRmxEYTtFRW1EYixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb2xvdXJzXG4gKi9cblxuJHByaW1hcnk6ICM2NmNjOTk7XG4kc2Vjb25kYXJ5OiAjNjY5OWNjO1xuJGFsdDogIzYyYjJiMDtcbiRkYXJrOiAjMzAzMDMwO1xuJGdyZXk6ICM3MDcwNzA7XG4kbGlnaHQtZ3JleTogI2YwZjBmMDtcbiRsaWdodDogI2ZjZmNmYztcbiRhbGVydDogI2Q4NzQ2YTtcbiRpbmZvOiAjY2M5ZDE0O1xuXG4vKipcbiAqIEZvbnRzXG4gKi9cblxuJGZvbnQtbWljcm86IDFyZW07XG4kZm9udC1zbWFsbDogMS4ycmVtO1xuJGZvbnQtYmFzZTogMS42cmVtO1xuJGZvbnQtYmlnOiAxLjhyZW07XG4kZm9udC1tYWNybzogMi4ycmVtO1xuJGZvbnQtbWVnYTogMi42cmVtO1xuJGZvbnQtZ2lnYTogM3JlbTtcbiRmb250LXRlcmE6IDRyZW07XG5cbi8qKlxuICogSW1hZ2VzXG4gKi9cblxuJGltZy1zbTogMjVweDtcbiRpbWctbWQ6IDUwcHg7XG4kaW1nLWJpZzogNzVweDtcbiRpbWctbWVnYTogMTAwcHg7XG4kaW1nLWdpZ2E6IDE1MHB4O1xuXG4vKipcbiAqIENvbnRhaW5lcnNcbiAqL1xuXG4kaGVhZGVyLWhlaWdodDogNy41cmVtO1xuJGNhcmQtaGVpZ2h0OiAyMHJlbTtcbiRnYXAtc206IDAuNXJlbTtcbiRnYXAtcmVnOiAxLjVyZW07XG4kZ2FwLW1kOiAzcmVtO1xuJGdhcC1iaWc6IDQuNXJlbTtcbiRnYXAtbWVnYTogNnJlbTtcbiRnYXAtdGVyYTogNDB2aDtcbiRwYWRkaW5nLXNtOiAxcmVtO1xuXG4vKipcbiAqIE1peGluc1xuICovXG5cbkBtaXhpbiBzcGVjaWFsLWZvbnQoJHNpemUsICRjb2xvcikge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaGlnaGxpZ2h0KCRiZy1jb2xvciwgJGZvbnQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICBjb2xvcjogJGZvbnQtY29sb3I7XG59XG5cbkBtaXhpbiBzcXVhcmUoJHZhbHVlKSB7XG4gIHdpZHRoOiAkdmFsdWU7XG4gIGhlaWdodDogJHZhbHVlO1xufVxuXG5AbWl4aW4gcm91bmQoJHZhbHVlKSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6ICR2YWx1ZTtcbiAgaGVpZ2h0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBwb3NpdGlvbigkdHlwZSwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCkge1xuICBwb3NpdGlvbjogJHR5cGU7XG4gIHRvcDogJHRvcDtcbiAgcmlnaHQ6ICRyaWdodDtcbiAgYm90dG9tOiAkYm90dG9tO1xuICBsZWZ0OiAkbGVmdDtcbn1cblxuLy8gY2VudGVyIHZlcnRpY2FsbHlcbkBtaXhpbiB2ZXJ0aWNhbC1hbGlnbigkaGVpZ2h0KSB7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQgLyAyO1xufVxuXG5AbWl4aW4gYW5pbS1kcm9wZG93bigkdmFsdWUpIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlWSgkdmFsdWUpKTtcbiAgb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gdHJpYW5nbGUoJGRpciwgJGNvbG9yLCAkYmFzZSwgJGhlaWdodCkge1xuICAkdGlwOiAkaGVpZ2h0IHNvbGlkICRjb2xvcjtcblxuICBAaW5jbHVkZSBzcXVhcmUoJGJhc2UpO1xuICBib3JkZXI6ICRiYXNlIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItI3skZGlyfTogbm9uZTsgLy8gYm9yZGVyIGNvbmNlcm5lZCBkaXNhcHBlYXJcbiAgQGlmICRkaXIgPT0gJ3RvcCcge1xuICAgIGJvcmRlci1ib3R0b206ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAnYm90dG9tJyB7XG4gICAgYm9yZGVyLXRvcDogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdyaWdodCcge1xuICAgIGJvcmRlci1sZWZ0OiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ2xlZnQnIHtcbiAgICBib3JkZXItcmlnaHQ6ICR0aXA7XG4gIH1cbn1cblxuQG1peGluIGRyb3Atc2hhZG93KCRpc0luc2V0LCAkaG9yLCAkdmVyLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG4gIEBpZiAkaXNJbnNldCA9PSB0cnVlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIH0gQGVsc2UgaWYgJGlzSW5zZXQgPT0gZmFsc2Uge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gZmxleC1sYXlvdXQoJGhhc1dyYXA6IG5vd3JhcCwgJGp1c3RpZjogZmxleC1zdGFydCwgJGFsaWduQ29udGVudDogc3RyZXRjaCwgJGFsaWduSXRlbXM6IHN0cmV0Y2gpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiAkaGFzV3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmO1xuICBhbGlnbi1jb250ZW50OiAkYWxpZ25Db250ZW50O1xuICBhbGlnbi1pdGVtczogJGFsaWduSXRlbXM7XG59XG5cbkBtaXhpbiBib3JkZXIoJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCwgJGNvbG9yLCAkcmFkaXVzKSB7XG4gIGJvcmRlci10b3A6ICR0b3Agc29saWQgJGNvbG9yO1xuICBib3JkZXItcmlnaHQ6ICRyaWdodCBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1ib3R0b206ICRib3R0b20gc29saWQgJGNvbG9yO1xuICBib3JkZXItbGVmdDogJGxlZnQgc29saWQgJGNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4vLyBBTklNU1xuXG5AbWl4aW4gdHJhbnNmb3JtKCR0YW5zZm9ybWF0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW1vei10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICAtbXMtdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW8tdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHByb3AsICRkdXIsICR0aW1pbmcsICRkZWxheSwgJG90aGVycy4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgLW1zLXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1vLXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIHRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG59XG5cbkBtaXhpbiBidG4tYW5pbSgpIHtcbiAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDVweCwgNXB4LCAzcHgsIDBweCwgJGdyZXkpO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtM3B4KSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xufVxuXG4vKipcbiAqIEdlbmVyYWxcbiAqL1xuXG4vLyBDb250YWluZXJcblxuJW5vLXBhZGRpbmcgeyBwYWRkaW5nOiAwOyB9XG5cbiVuby1tYXJnaW4geyBtYXJnaW46IDA7IH1cblxuJWJsb2NrLWNlbnRyZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiVibG9jay1oYWxmLWNlbnRyZWQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuLy8gQm9yZGVyc1xuXG4lbm8tcmFkaXVzIHsgYm9yZGVyLXJhZGl1czogMDsgfVxuXG4lbm8tYm9yZGVyIHsgYm9yZGVyOiAwOyB9XG5cbiV0cmlhbmdsZXMtcGx1Z2dlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxlZnQ6IDI1JTtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuJWJ0bi1maWx0ZXIge1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40cywgZWFzZSwgMHMpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgY29sb3I6ICRsaWdodDtcbn1cblxuJWJ0bi1maWx0ZXItYW5pbSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZVkoMS4xKSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xufVxuIiwiLyoqXG4gKiBDb2xvdXJzXG4gKi9cbi8qKlxuICogRm9udHNcbiAqL1xuLyoqXG4gKiBJbWFnZXNcbiAqL1xuLyoqXG4gKiBDb250YWluZXJzXG4gKi9cbi8qKlxuICogTWl4aW5zXG4gKi9cbi8qKlxuICogR2VuZXJhbFxuICovXG4ubWFpbi1mb290ZXIgLnRyaWFuZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMjUlO1xuICByaWdodDogMjUlOyB9XG5cbi5pbWcge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uaW1nLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gIC5pbWctZ3JvdXAgLmltZyB7XG4gICAgbWFyZ2luOiAxMHB4OyB9XG5cbi5pbWctZmxvYXQge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4OyB9XG5cbi5pbWctYnJhbmQge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7IH1cblxuLmltZy1sYWJlbCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKDc1cHggKyAxNXB4KTsgfVxuXG4uaW1nLXJvdW5kLCAuaW1nLXJvdW5kLS1zbSwgLmltZy1yb3VuZC0tYmlnIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICM3MDcwNzA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICBwYWRkaW5nOiBjYWxjKDEwMHB4IC8gNCk7IH1cbiAgLmltZy1yb3VuZCBpbWcsIC5pbWctcm91bmQtLXNtIGltZywgLmltZy1yb3VuZC0tYmlnIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4OyB9XG5cbi5pbWctcm91bmQtLXNtIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBwYWRkaW5nOiBjYWxjKDUwcHggLyA0KTsgfVxuICAuaW1nLXJvdW5kLS1zbSBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDsgfVxuXG4uaW1nLXJvdW5kLS1iaWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogY2FsYygxMDBweCAvIDQpOyB9XG4gIC5pbWctcm91bmQtLWJpZyBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4OyB9XG4gIC5pbWctcm91bmQtLWJpZyArIC5pbWctbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHdpZHRoOiBjYWxjKDE1MHB4ICsgMTVweCk7IH1cblxuLmltZy1saW5rIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmltZy0tZmxpcCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7IH1cblxuLmltZy13cmFwIHtcbiAgbWluLWhlaWdodDogMTUwcHg7IH1cbiAgLmltZy13cmFwOmhvdmVyLCAuaW1nLXdyYXA6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgIC5pbWctd3JhcDpob3ZlciAuaW1nLWxpbmssIC5pbWctd3JhcDpmb2N1cyAuaW1nLWxpbmsge1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNnB4IDZweCAwcHggIzcwNzA3MDtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDZweCA2cHggMHB4ICM3MDcwNzA7XG4gICAgICBib3gtc2hhZG93OiAwcHggNnB4IDZweCAwcHggIzcwNzA3MDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XG4gICAgLmltZy13cmFwOmhvdmVyIC5pbWctbGFiZWwsIC5pbWctd3JhcDpmb2N1cyAuaW1nLWxhYmVsIHtcbiAgICAgIG9wYWNpdHk6IDE7IH1cblxuLyoqXG4gIE1lZGlhIFF1ZXJpZXNcbiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltZy1ncm91cCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW1nLWxhYmVsIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLm1haW4tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2Y2M5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5tYWluLWZvb3RlciAuZm9vdGVyLXNvY2lhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogNC41cmVtIDEuNXJlbSAzcmVtOyB9XG4gIC5tYWluLWZvb3RlciAuZm9vdGVyLWNvcHlyaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyYjJiMDtcbiAgICBjb2xvcjogI2ZjZmNmYztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAzcmVtIDAgNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAubWFpbi1mb290ZXIgLmZvb3Rlci1jb3B5cmlnaHQgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IH1cbiAgLm1haW4tZm9vdGVyIC50cmlhbmdsZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IDMwcHggc29saWQgI2ZjZmNmYztcbiAgICB0b3A6IC0xcHg7IH1cblxuLm5hdmJhci1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDsgfVxuICAubmF2YmFyLWZvb3RlciAubmF2LXJvdXRlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgbWFyZ2luOiBhdXRvIDAuNXJlbSAwLjVyZW07IH1cbiAgICAubmF2YmFyLWZvb3RlciAubmF2LXJvdXRlIGEge1xuICAgICAgY29sb3I6ICNmY2ZjZmM7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbiAwcztcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbiAwcztcbiAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluIDBzO1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbiAwcztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4gMHM7IH1cbiAgICAubmF2YmFyLWZvb3RlciAubmF2LXJvdXRlIGE6aG92ZXIsXG4gICAgLm5hdmJhci1mb290ZXIgLm5hdi1yb3V0ZS5hY3RpdmUgPiBhIHtcbiAgICAgIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAjNzA3MDcwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5mb290ZXItYmFja2Ryb3Age1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtMTBweCAzMHB4IDBweCAjZmNmY2ZjO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAtMTBweCAzMHB4IDBweCAjZmNmY2ZjO1xuICBib3gtc2hhZG93OiAwcHggLTEwcHggMzBweCAwcHggI2ZjZmNmYztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICBoZWlnaHQ6IDUwcHg7IH1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdpbWFnZXMnO1xuXG4ubWFpbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5mb290ZXItc29jaWFsIHtcbiAgICBAaW5jbHVkZSBmbGV4LWxheW91dCh3cmFwLCBzcGFjZS1ldmVubHksIHNwYWNlLWFyb3VuZCwgY2VudGVyKTtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAkZ2FwLWJpZyAkZ2FwLXJlZyAkZ2FwLW1kO1xuICB9XG5cbiAgLmZvb3Rlci1jb3B5cmlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhbHQ7XG4gICAgY29sb3I6ICRsaWdodDtcbiAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xuICAgIHBhZGRpbmc6ICRnYXAtbWQgMCAkZ2FwLW1lZ2E7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZ2FwLXNtO1xuICAgIH1cbiAgfVxuXG4gIC50cmlhbmdsZSB7XG4gICAgQGluY2x1ZGUgdHJpYW5nbGUoJ2JvdHRvbScsICRsaWdodCwgNTBweCwgMzBweCk7XG4gICAgQGV4dGVuZCAldHJpYW5nbGVzLXBsdWdnZWQ7XG4gICAgdG9wOiAtMXB4O1xuICB9XG59XG5cbi5uYXZiYXItZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG5cbiAgLm5hdi1yb3V0ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtYmFzZTtcbiAgICBtYXJnaW46IGF1dG8gJGdhcC1zbSAkZ2FwLXNtO1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogJGxpZ2h0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC4ycywgZWFzZS1pbiwgMHMpO1xuICAgIH1cblxuICAgIGE6aG92ZXIsXG4gICAgJi5hY3RpdmUgPiBhIHtcbiAgICAgIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAkZ3JleTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmZvb3Rlci1iYWNrZHJvcCB7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCAwcHgsIC0xMHB4LCAzMHB4LCAwcHgsICRsaWdodCk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogJGxpZ2h0O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4iLCIuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWctZ3JvdXAge1xuICBAaW5jbHVkZSBmbGV4LWxheW91dCh3cmFwLCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0KTtcblxuICAuaW1nIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuLmltZy1mbG9hdCB7XG4gIEBpbmNsdWRlIHNxdWFyZSgkaW1nLWJpZyk7XG59XG5cbi5pbWctYnJhbmQge1xuICBAaW5jbHVkZSBzcXVhcmUoJGltZy1tZWdhKTtcbn1cblxuLmltZy1sYWJlbCB7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjRzLCBlYXNlLCAwcyk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtbWljcm87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IGF1dG87XG4gIG9wYWNpdHk6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoI3skaW1nLWJpZ30gKyAxNXB4KTtcbn1cblxuLy8gUm91bmRlZCBjb250YWluZSBmb3IgaW1hZ2VzXG4uaW1nLXJvdW5kIHtcbiAgQGluY2x1ZGUgcm91bmQoJGltZy1tZWdhKTtcbiAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDBweCwgM3B4LCAzcHgsIDBweCwgJGdyZXkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG4gIHBhZGRpbmc6IGNhbGMoI3skaW1nLW1lZ2F9IC8gNCk7XG5cbiAgaW1nIHtcbiAgICBAaW5jbHVkZSBzcXVhcmUoJGltZy1tZCk7XG4gIH1cbn1cblxuLmltZy1yb3VuZC0tc20ge1xuICBAZXh0ZW5kIC5pbWctcm91bmQ7XG4gIEBpbmNsdWRlIHJvdW5kKCRpbWctYmlnKTtcbiAgcGFkZGluZzogY2FsYygjeyRpbWctbWR9IC8gNCk7XG5cbiAgaW1nIHtcbiAgICBAaW5jbHVkZSBzcXVhcmUoJGltZy1tZCk7XG4gIH1cbn1cblxuLmltZy1yb3VuZC0tYmlnIHtcbiAgQGV4dGVuZCAuaW1nLXJvdW5kO1xuICBAaW5jbHVkZSByb3VuZCgkaW1nLWdpZ2EpO1xuICBwYWRkaW5nOiBjYWxjKCN7JGltZy1tZWdhfSAvIDQpO1xuXG4gIGltZyB7XG4gICAgQGluY2x1ZGUgc3F1YXJlKCRpbWctbWVnYSk7XG4gIH1cblxuICArIC5pbWctbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtYmFzZTtcbiAgICB3aWR0aDogY2FsYygjeyRpbWctZ2lnYX0gKyAxNXB4KTtcbiAgfVxufVxuXG4uaW1nLWxpbmsge1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40cywgZWFzZSwgMHMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWctLWZsaXAge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVYKC0xKSk7XG59XG5cbi5pbWctd3JhcCB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIC5pbWctbGluayB7XG4gICAgICBAaW5jbHVkZSBkcm9wLXNoYWRvdyhmYWxzZSwgMHB4LCA2cHgsIDZweCwgMHB4LCAkZ3JleSk7XG4gICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNXB4KSk7XG4gICAgfVxuXG4gICAgLmltZy1sYWJlbCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAgTWVkaWEgUXVlcmllc1xuICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW1nLWdyb3VwIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW1nLWxhYmVsIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_mock_socials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/mock-socials */ "./src/app/shared/data/mock-socials.ts");
/* harmony import */ var _shared_constants_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/menus */ "./src/app/shared/constants/menus.ts");
/* harmony import */ var _providers_header_title_header_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/header-title/header-title.service */ "./src/app/providers/header-title/header-title.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* MODELS */

/* CONSTANTS */

/* SERVICES */

var FooterComponent = /** @class */ (function () {
    function FooterComponent(headerTitleService) {
        this.headerTitleService = headerTitleService;
        this.socials = _data_mock_socials__WEBPACK_IMPORTED_MODULE_1__["SOCIALS"];
        this.subMenu = _shared_constants_menus__WEBPACK_IMPORTED_MODULE_2__["MENUS"].SUB;
    }
    Object.defineProperty(FooterComponent.prototype, "currentYear", {
        get: function () {
            return this.getCurrentYear();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update title in tab and in page header
     * Scroll to the top of the page
     *
     * @param {string} newTitle
     */
    FooterComponent.prototype.setTitle = function (newTitle) {
        this.headerTitleService.setTitle(newTitle); // dynamic tab title
        document.getElementById('anchor-top').scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    /**
     * Returns present year
     *
     * @returns {number}
     */
    FooterComponent.prototype.getCurrentYear = function () {
        return new Date().getFullYear();
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_header_title_header_title_service__WEBPACK_IMPORTED_MODULE_3__["HeaderTitleService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"anchor-top\"></div>\n<header id=\"main-header\" class=\"main-header\">\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"navbar-header\">\n\n        <!-- Burger menu -->\n        <button class=\"btn-burger navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar icn-burger-top\"></span>\n          <span class=\"icon-bar icn-burger-mid\"></span>\n          <span class=\"icon-bar icn-burger-bot\"></span>\n        </button>\n\n        <!-- Languages xs -->\n        <div class=\"dropdown nav-lang navbar-toggle visible-xs-block\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <img src=\"{{ currentFlag }}\" /><span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- Dropdown lang -->\n            <li *ngFor=\"let lang of supportedLanguages\"\n                (click)=\"selectLang(lang.value, lang.flag)\" [class.selected]=\"isCurrentLang(lang.value)\">\n              <a class=\"nav-lang-label\">{{ lang.display }}</a>\n            </li>\n          </ul>\n        </div>\n\n        <!-- iOS back button -->\n        <button type=\"button\" class=\"btn btn-back\" *ngIf=\"isIos()\" (click)=\"goBack()\">\n          <\n        </button>\n\n        <!-- Logo -->\n        <h2 class=\"navbar-brand\" [class.centred]=\"isIos()\">\n          <a [routerLink]=\"'home'\" (click)=\"setTitle('Home')\">\n            <img class=\"header-logo\" src=\"assets/img/svg/perso/monogram.svg\" alt=\"Vimal Kovath\">\n            <span class=\"header-label\" [hidden]=\"isIos()\">Vimal Kovath</span>\n          </a>\n        </h2>\n      </div>\n      <div id=\"navbar\" class=\"nav-menu navbar-collapse collapse\" aria-expanded=\"false\">\n        <ul class=\"nav navbar-nav navbar-right\">\n\n          <!-- Nav -->\n          <li class=\"nav-route\" *ngFor=\"let tab of menu\" routerLinkActive=\"active\">\n            <a [routerLink]=\"[tab.key]\" (click)=\"setTitle(tab.value)\">{{ tab.value | translate }}</a>\n          </li>\n\n          <!-- Languages -->\n          <li class=\"dropdown nav-lang hidden-xs\">\n            <a\n              class=\"dropdown-toggle\"\n              data-toggle=\"dropdown\"\n              role=\"button\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\">\n                <img [src]=\"currentFlag\" /><span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <!-- Dropdown lang-->\n              <li *ngFor=\"let lang of supportedLanguages\"\n                  (click)=\"selectLang(lang.value, lang.flag)\"\n                  [class.selected]=\"isCurrentLang(lang.value)\">\n                  <a class=\"nav-lang-label\">{{ lang.display }}</a>\n              </li>\n            </ul>\n          </li>\n\n        </ul>\n      </div>\n  </nav>\n\n  <section class=\"page-header\" [class.title-has-changed]=\"pageHasChanged\">\n    <h1>{{ headerTitleService.getTitle() | translate }}</h1>\n\n    <div class=\"triangle\"></div>\n\n    <button class=\"btn btn-font dropdown-toggle\" role=\"button\" (click)=\"changeFont()\" [class.selected]=\"fontHasChanged\">\n      a / <span class=\"btn-label-big\">a</span>\n    </button>\n\n  </section>\n\n</header>\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.nav-lang .dropdown-menu {\n  padding: 0; }\n.navbar-brand {\n  margin: 0; }\n.nav-lang .caret {\n  display: block;\n  margin: 0 auto; }\n.nav-lang .dropdown-menu {\n  border-radius: 0; }\n.page-header .triangle {\n  position: absolute;\n  margin: 0 auto;\n  left: 25%;\n  right: 25%; }\n#anchor-top {\n  position: absolute;\n  top: -50px; }\n.main-header > .navbar {\n  box-shadow: 0px 2px 10px 0px #707070;\n  background-color: #fcfcfc; }\n.main-header > .navbar .navbar-collapse {\n    padding-right: 0;\n    max-height: 75%; }\n.navbar-brand,\n.nav > li {\n  height: 7.5rem; }\n.navbar-brand {\n  font-size: 1.8rem;\n  color: #707070; }\n.navbar-brand.centred {\n    position: absolute;\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: 40%; }\n.navbar-brand a {\n    text-decoration: none; }\n.navbar-brand .header-logo {\n    width: 50px;\n    height: 100%; }\n.navbar-brand .header-label {\n    color: #707070;\n    margin-left: 1.5rem; }\n.btn-back {\n  position: absolute;\n  top: 0px;\n  right: auto;\n  bottom: 0px;\n  left: 20px;\n  background-color: transparent;\n  color: #707070;\n  width: 50px;\n  font-size: 40px; }\n.nav {\n  margin-right: 0; }\n.nav .nav-route > a {\n    font-size: 1.6rem;\n    color: #707070;\n    transition: all 0.25s ease 0s;\n    background: linear-gradient(to bottom, #66cc99 50%, #fcfcfc 50%);\n    background-size: 100% 200%;\n    background-position: bottom left;\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n    line-height: 46px; }\n.nav .nav-route.active > a,\n  .nav .nav-route.active > a:hover,\n  .nav .nav-route.active > a:focus {\n    background-position: top left;\n    color: #fcfcfc;\n    font-weight: bold; }\n.nav-lang {\n  width: 100px; }\n.nav-lang > .dropdown-toggle {\n    height: 100%;\n    text-align: center; }\n.nav-lang img {\n    height: 100%;\n    width: 20px; }\n.nav-lang .dropdown-menu {\n    transition: all 0.4s ease 0s;\n    min-width: 0;\n    width: 100px;\n    text-align: center;\n    display: block;\n    -webkit-transform-origin: 0% top 0;\n            transform-origin: 0% top 0;\n    cursor: pointer; }\n.nav-lang .dropdown-menu li .nav-lang-label {\n      padding: 15px 20px; }\n.nav-lang .dropdown-menu .selected {\n      background-color: #66cc99; }\n.nav-lang .dropdown-menu .selected:hover > a {\n        color: #303030; }\n.nav-lang .dropdown-menu .selected a {\n        color: #fcfcfc; }\n.nav-lang .dropdown-menu:not(.open) {\n    -webkit-transform: scaleY(0);\n    transform: scaleY(0);\n    opacity: 0; }\n.nav-lang.open > .dropdown-menu {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n    opacity: 1; }\n.navbar-toggle {\n  border: none;\n  margin: 20px 0px 20px 20px;\n  box-sizing: content-box;\n  height: 20px; }\n.btn-burger {\n  padding-right: 40px; }\n.btn-burger .icon-bar {\n    transition: all 0.3s ease-in 0s; }\n.btn-burger:not(.collapsed) .icn-burger-top {\n    -webkit-transform: rotate(45deg) translateY(5px);\n    transform: rotate(45deg) translateY(5px); }\n.btn-burger:not(.collapsed) .icn-burger-mid {\n    display: none; }\n.btn-burger:not(.collapsed) .icn-burger-bot {\n    -webkit-transform: rotate(-45deg) translateY(-4px);\n    transform: rotate(-45deg) translateY(-4px); }\n.navbar .navbar-toggle:hover {\n  background-color: transparent; }\n.page-header {\n  background-color: #6699cc;\n  padding: 7.5rem 0 0 3rem;\n  margin-bottom: 50px;\n  position: relative; }\n.page-header h1 {\n    transition: all 0.25s ease 0s;\n    text-indent: 0; }\n.page-header.title-has-changed > h1 {\n    text-indent: -9999px; }\n.page-header .triangle {\n    width: 50px;\n    height: 50px;\n    border: 50px solid transparent;\n    border-bottom: none;\n    border-top: 30px solid #6699cc;\n    bottom: -49px; }\n@media screen and (max-width: 1024px) {\n  .nav .nav-route > a {\n    font-size: 1.2rem; } }\n@media screen and (max-width: 768px) {\n  .nav {\n    margin-top: 0; }\n    .nav .nav-route > a {\n      font-size: 1.6rem;\n      text-align: center; }\n  .nav-lang {\n    width: auto; }\n    .nav-lang img {\n      height: auto; }\n    .nav-lang .caret {\n      display: none; }\n  .dropdown-menu {\n    margin-top: 20px;\n    margin-left: -30px; } }\n@media screen and (max-width: 380px) {\n  .header-label {\n    display: none; }\n  .nav-lang,\n  .navbar-toggle {\n    margin: 20px 5px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZmxpcGthcnQvMjAxOS9wb3J0Zm9saW8vdmltYWxrb3ZhdGguZ2l0aHViLmlvL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBRFlGOztFQ1RFO0FEc0JGOztFQ25CRTtBRDZCRjs7RUMxQkU7QUR3Q0Y7O0VDckNFO0FEc0pGOztFQ25KRTtBQ21FRjtFRnNGYyxVQUFVLEVBQUE7QUVoSnhCO0VGa0phLFNBQVMsRUFBQTtBRXhGdEI7RUYyRkUsY0FBYztFQUNkLGNBQWMsRUFBQTtBRTVGaEI7RUZzR2EsZ0JBQWdCLEVBQUE7QUViN0I7RUZrQkUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsVUFBVSxFQUFBO0FFL0xaO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtBQUlaO0VGK0dJLG9DQWhIVTtFRUdaLHlCRkRhLEVBQUE7QUVEZjtJQUtJLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7QUFLbkI7O0VBRUUsY0ZtQm9CLEVBQUE7QUVmdEI7RUY4QkUsaUJBbkNlO0VBb0NmLGNBakRZLEVBQUE7QUVrQmQ7SUZtREUsa0JFOUM0QjtJRitDNUIsU0UvQ2tDO0lGZ0RsQyxXRWhEd0M7SUZpRHhDLFlFakQ4QztJRmtEOUMsU0VsRG1ELEVBQUE7QUFMckQ7SUFTSSxxQkFBcUIsRUFBQTtBQVR6QjtJQWFJLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFkaEI7SUFrQkksY0ZwQ1U7SUVxQ1YsbUJGRFksRUFBQTtBRUtoQjtFRjRCRSxrQkUzQjBCO0VGNEIxQixRRTVCK0I7RUY2Qi9CLFdFN0JxQztFRjhCckMsV0U5QjBDO0VGK0IxQyxVRS9CZ0Q7RUFDaEQsNkJBQTZCO0VBQzdCLGNGNUNZO0VFNkNaLFdBQVc7RUFDWCxlQUFlLEVBQUE7QUFJakI7RUFDRSxlQUFlLEVBQUE7QUFEakI7SUZGRSxpQkFwQ2dCO0lBcUNoQixjQWpEWTtJQW1KWiw2QkUxRjRDO0lBQ3hDLGdFQUFnRTtJQUNoRSwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7QUFidkI7OztJQW1CTSw2QkFBNkI7SUFDN0IsY0ZwRVM7SUVxRVQsaUJBQWlCLEVBQUE7QUFLdkI7RUFDRSxZQUFZLEVBQUE7QUFEZDtJQUlJLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtBQUx0QjtJQVNJLFlBQVk7SUFDWixXQUFXLEVBQUE7QUFWZjtJRnVFRSw0QkVuRHlDO0lBQ3ZDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGVBQWUsRUFBQTtBQTFCbkI7TUE2Qk0sa0JBQWtCLEVBQUE7QUE3QnhCO01BaUNNLHlCRmpIVyxFQUFBO0FFZ0ZqQjtRQW1DUSxjRmhITSxFQUFBO0FFNkVkO1FBc0NRLGNGaEhPLEVBQUE7QUUwRWY7SUYyREUsNEJBcERpQztJQXdEakMsb0JBeERpQztJQUNqQyxVRW9DMEIsRUFBQTtBQTVDNUI7SUYyREUsNEJBcERpQztJQXdEakMsb0JBeERpQztJQUNqQyxVRXdDMEIsRUFBQTtBQUs1QjtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTtBQUtkO0VBQ0UsbUJBQW1CLEVBQUE7QUFEckI7SUZTRSwrQkVMNEMsRUFBQTtBQUo5QztJRkhFLGdERWFvRDtJRlRwRCx3Q0VTb0QsRUFBQTtBQVZ0RDtJQWFNLGFBQWEsRUFBQTtBQWJuQjtJRkhFLGtERW1Cc0Q7SUZmdEQsMENFZXNELEVBQUE7QUFNeEQ7RUFDRSw2QkFBNkIsRUFBQTtBQUkvQjtFQUNFLHlCRnpLaUI7RUUwS2pCLHdCRmxJVztFRW1JWCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7QUFKcEI7SUZsQkUsNkJFeUIwQztJQUN4QyxjQUFjLEVBQUE7QUFSbEI7SUFZSSxvQkFBb0IsRUFBQTtBQVp4QjtJRjNHRSxXRTJIOEM7SUYxSDlDLFlFMEg4QztJRjFGOUMsOEJBQStCO0lBQy9CLG1CQUEyQjtJQUl6Qiw4QkFuR2U7SUUwTGYsYUFBYSxFQUFBO0FBSWpCO0VBeklBO0lBMklJLGlCRmxMZSxFQUFBLEVFbUxoQjtBQUdIO0VBL0lBO0lBaUpJLGFBQWEsRUFBQTtJQWpKakI7TUFtSk0saUJGekxZO01FMExaLGtCQUFrQixFQUFBO0VBMUh4QjtJQThISSxXQUFXLEVBQUE7SUE5SGY7TUFnSU0sWUFBWSxFQUFBO0lBSGhCO01BTUksYUFBYSxFQUFBO0VBSWpCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBLEVBQ25CO0FBR0g7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUdmOztJQUVFLGdCQUNGLEVBQUEsRUFBQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbG91cnNcbiAqL1xuXG4kcHJpbWFyeTogIzY2Y2M5OTtcbiRzZWNvbmRhcnk6ICM2Njk5Y2M7XG4kYWx0OiAjNjJiMmIwO1xuJGRhcms6ICMzMDMwMzA7XG4kZ3JleTogIzcwNzA3MDtcbiRsaWdodC1ncmV5OiAjZjBmMGYwO1xuJGxpZ2h0OiAjZmNmY2ZjO1xuJGFsZXJ0OiAjZDg3NDZhO1xuJGluZm86ICNjYzlkMTQ7XG5cbi8qKlxuICogRm9udHNcbiAqL1xuXG4kZm9udC1taWNybzogMXJlbTtcbiRmb250LXNtYWxsOiAxLjJyZW07XG4kZm9udC1iYXNlOiAxLjZyZW07XG4kZm9udC1iaWc6IDEuOHJlbTtcbiRmb250LW1hY3JvOiAyLjJyZW07XG4kZm9udC1tZWdhOiAyLjZyZW07XG4kZm9udC1naWdhOiAzcmVtO1xuJGZvbnQtdGVyYTogNHJlbTtcblxuLyoqXG4gKiBJbWFnZXNcbiAqL1xuXG4kaW1nLXNtOiAyNXB4O1xuJGltZy1tZDogNTBweDtcbiRpbWctYmlnOiA3NXB4O1xuJGltZy1tZWdhOiAxMDBweDtcbiRpbWctZ2lnYTogMTUwcHg7XG5cbi8qKlxuICogQ29udGFpbmVyc1xuICovXG5cbiRoZWFkZXItaGVpZ2h0OiA3LjVyZW07XG4kY2FyZC1oZWlnaHQ6IDIwcmVtO1xuJGdhcC1zbTogMC41cmVtO1xuJGdhcC1yZWc6IDEuNXJlbTtcbiRnYXAtbWQ6IDNyZW07XG4kZ2FwLWJpZzogNC41cmVtO1xuJGdhcC1tZWdhOiA2cmVtO1xuJGdhcC10ZXJhOiA0MHZoO1xuJHBhZGRpbmctc206IDFyZW07XG5cbi8qKlxuICogTWl4aW5zXG4gKi9cblxuQG1peGluIHNwZWNpYWwtZm9udCgkc2l6ZSwgJGNvbG9yKSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG5cbkBtaXhpbiBoaWdobGlnaHQoJGJnLWNvbG9yLCAkZm9udC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcbn1cblxuQG1peGluIHNxdWFyZSgkdmFsdWUpIHtcbiAgd2lkdGg6ICR2YWx1ZTtcbiAgaGVpZ2h0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiByb3VuZCgkdmFsdWUpIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogJHZhbHVlO1xuICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIHBvc2l0aW9uKCR0eXBlLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KSB7XG4gIHBvc2l0aW9uOiAkdHlwZTtcbiAgdG9wOiAkdG9wO1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIGxlZnQ6ICRsZWZ0O1xufVxuXG4vLyBjZW50ZXIgdmVydGljYWxseVxuQG1peGluIHZlcnRpY2FsLWFsaWduKCRoZWlnaHQpIHtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBsaW5lLWhlaWdodDogJGhlaWdodCAvIDI7XG59XG5cbkBtaXhpbiBhbmltLWRyb3Bkb3duKCR2YWx1ZSkge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVZKCR2YWx1ZSkpO1xuICBvcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiB0cmlhbmdsZSgkZGlyLCAkY29sb3IsICRiYXNlLCAkaGVpZ2h0KSB7XG4gICR0aXA6ICRoZWlnaHQgc29saWQgJGNvbG9yO1xuXG4gIEBpbmNsdWRlIHNxdWFyZSgkYmFzZSk7XG4gIGJvcmRlcjogJGJhc2Ugc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci0jeyRkaXJ9OiBub25lOyAvLyBib3JkZXIgY29uY2VybmVkIGRpc2FwcGVhclxuICBAaWYgJGRpciA9PSAndG9wJyB7XG4gICAgYm9yZGVyLWJvdHRvbTogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdib3R0b20nIHtcbiAgICBib3JkZXItdG9wOiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ3JpZ2h0JyB7XG4gICAgYm9yZGVyLWxlZnQ6ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAnbGVmdCcge1xuICAgIGJvcmRlci1yaWdodDogJHRpcDtcbiAgfVxufVxuXG5AbWl4aW4gZHJvcC1zaGFkb3coJGlzSW5zZXQsICRob3IsICR2ZXIsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcbiAgQGlmICRpc0luc2V0ID09IHRydWUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6IGluc2V0ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgfSBAZWxzZSBpZiAkaXNJbnNldCA9PSBmYWxzZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBmbGV4LWxheW91dCgkaGFzV3JhcDogbm93cmFwLCAkanVzdGlmOiBmbGV4LXN0YXJ0LCAkYWxpZ25Db250ZW50OiBzdHJldGNoLCAkYWxpZ25JdGVtczogc3RyZXRjaCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6ICRoYXNXcmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWY7XG4gIGFsaWduLWNvbnRlbnQ6ICRhbGlnbkNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtcztcbn1cblxuQG1peGluIGJvcmRlcigkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0LCAkY29sb3IsICRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcDogJHRvcCBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1yaWdodDogJHJpZ2h0IHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLWJvdHRvbTogJGJvdHRvbSBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1sZWZ0OiAkbGVmdCBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8vIEFOSU1TXG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRhbnNmb3JtYXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICAtbW96LXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1tcy10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICAtby10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICB0cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcCwgJGR1ciwgJHRpbWluZywgJGRlbGF5LCAkb3RoZXJzLi4uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtbXMtdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgLW8tdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbn1cblxuQG1peGluIGJ0bi1hbmltKCkge1xuICBAaW5jbHVkZSBkcm9wLXNoYWRvdyhmYWxzZSwgNXB4LCA1cHgsIDNweCwgMHB4LCAkZ3JleSk7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVYKC0zcHgpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG59XG5cbi8qKlxuICogR2VuZXJhbFxuICovXG5cbi8vIENvbnRhaW5lclxuXG4lbm8tcGFkZGluZyB7IHBhZGRpbmc6IDA7IH1cblxuJW5vLW1hcmdpbiB7IG1hcmdpbjogMDsgfVxuXG4lYmxvY2stY2VudHJlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuJWJsb2NrLWhhbGYtY2VudHJlZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG4vLyBCb3JkZXJzXG5cbiVuby1yYWRpdXMgeyBib3JkZXItcmFkaXVzOiAwOyB9XG5cbiVuby1ib3JkZXIgeyBib3JkZXI6IDA7IH1cblxuJXRyaWFuZ2xlcy1wbHVnZ2VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMjUlO1xuICByaWdodDogMjUlO1xufVxuXG4lYnRuLWZpbHRlciB7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjRzLCBlYXNlLCAwcyk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICBjb2xvcjogJGxpZ2h0O1xufVxuXG4lYnRuLWZpbHRlci1hbmltIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlWSgxLjEpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG59XG4iLCIvKipcbiAqIENvbG91cnNcbiAqL1xuLyoqXG4gKiBGb250c1xuICovXG4vKipcbiAqIEltYWdlc1xuICovXG4vKipcbiAqIENvbnRhaW5lcnNcbiAqL1xuLyoqXG4gKiBNaXhpbnNcbiAqL1xuLyoqXG4gKiBHZW5lcmFsXG4gKi9cbi5uYXYtbGFuZyAuZHJvcGRvd24tbWVudSB7XG4gIHBhZGRpbmc6IDA7IH1cblxuLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbjogMDsgfVxuXG4ubmF2LWxhbmcgLmNhcmV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbi5uYXYtbGFuZyAuZHJvcGRvd24tbWVudSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cblxuLnBhZ2UtaGVhZGVyIC50cmlhbmdsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxlZnQ6IDI1JTtcbiAgcmlnaHQ6IDI1JTsgfVxuXG4jYW5jaG9yLXRvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNTBweDsgfVxuXG4ubWFpbi1oZWFkZXIgPiAubmF2YmFyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4ICM3MDcwNzA7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCAjNzA3MDcwO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4ICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7IH1cbiAgLm1haW4taGVhZGVyID4gLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIG1heC1oZWlnaHQ6IDc1JTsgfVxuXG4ubmF2YmFyLWJyYW5kLFxuLm5hdiA+IGxpIHtcbiAgaGVpZ2h0OiA3LjVyZW07IH1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogIzcwNzA3MDsgfVxuICAubmF2YmFyLWJyYW5kLmNlbnRyZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGF1dG87XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIGxlZnQ6IDQwJTsgfVxuICAubmF2YmFyLWJyYW5kIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAubmF2YmFyLWJyYW5kIC5oZWFkZXItbG9nbyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5uYXZiYXItYnJhbmQgLmhlYWRlci1sYWJlbCB7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTsgfVxuXG4uYnRuLWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgd2lkdGg6IDUwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDsgfVxuXG4ubmF2IHtcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XG4gIC5uYXYgLm5hdi1yb3V0ZSA+IGEge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UgMHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZSAwcztcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UgMHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UgMHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UgMHM7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY2Y2M5OSA1MCUsICNmY2ZjZmMgNTAlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4OyB9XG4gIC5uYXYgLm5hdi1yb3V0ZS5hY3RpdmUgPiBhLFxuICAubmF2IC5uYXYtcm91dGUuYWN0aXZlID4gYTpob3ZlcixcbiAgLm5hdiAubmF2LXJvdXRlLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAgIGNvbG9yOiAjZmNmY2ZjO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi5uYXYtbGFuZyB7XG4gIHdpZHRoOiAxMDBweDsgfVxuICAubmF2LWxhbmcgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5uYXYtbGFuZyBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjBweDsgfVxuICAubmF2LWxhbmcgLmRyb3Bkb3duLW1lbnUge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIHRvcCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5uYXYtbGFuZyAuZHJvcGRvd24tbWVudSBsaSAubmF2LWxhbmctbGFiZWwge1xuICAgICAgcGFkZGluZzogMTVweCAyMHB4OyB9XG4gICAgLm5hdi1sYW5nIC5kcm9wZG93bi1tZW51IC5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZjYzk5OyB9XG4gICAgICAubmF2LWxhbmcgLmRyb3Bkb3duLW1lbnUgLnNlbGVjdGVkOmhvdmVyID4gYSB7XG4gICAgICAgIGNvbG9yOiAjMzAzMDMwOyB9XG4gICAgICAubmF2LWxhbmcgLmRyb3Bkb3duLW1lbnUgLnNlbGVjdGVkIGEge1xuICAgICAgICBjb2xvcjogI2ZjZmNmYzsgfVxuICAubmF2LWxhbmcgLmRyb3Bkb3duLW1lbnU6bm90KC5vcGVuKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIC5uYXYtbGFuZy5vcGVuID4gLmRyb3Bkb3duLW1lbnUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgb3BhY2l0eTogMTsgfVxuXG4ubmF2YmFyLXRvZ2dsZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDIwcHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBoZWlnaHQ6IDIwcHg7IH1cblxuLmJ0bi1idXJnZXIge1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4OyB9XG4gIC5idG4tYnVyZ2VyIC5pY29uLWJhciB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7IH1cbiAgLmJ0bi1idXJnZXI6bm90KC5jb2xsYXBzZWQpIC5pY24tYnVyZ2VyLXRvcCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSg1cHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVkoNXB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVkoNXB4KTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSg1cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVZKDVweCk7IH1cbiAgLmJ0bi1idXJnZXI6bm90KC5jb2xsYXBzZWQpIC5pY24tYnVyZ2VyLW1pZCB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuYnRuLWJ1cmdlcjpub3QoLmNvbGxhcHNlZCkgLmljbi1idXJnZXItYm90IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC00cHgpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgtNHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoLTRweCk7IH1cblxuLm5hdmJhciAubmF2YmFyLXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi5wYWdlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Njk5Y2M7XG4gIHBhZGRpbmc6IDcuNXJlbSAwIDAgM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5wYWdlLWhlYWRlciBoMSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZSAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlIDBzO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZSAwcztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZSAwcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZSAwcztcbiAgICB0ZXh0LWluZGVudDogMDsgfVxuICAucGFnZS1oZWFkZXIudGl0bGUtaGFzLWNoYW5nZWQgPiBoMSB7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7IH1cbiAgLnBhZ2UtaGVhZGVyIC50cmlhbmdsZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IDMwcHggc29saWQgIzY2OTljYztcbiAgICBib3R0b206IC00OXB4OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubmF2IC5uYXYtcm91dGUgPiBhIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXYge1xuICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgICAubmF2IC5uYXYtcm91dGUgPiBhIHtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5uYXYtbGFuZyB7XG4gICAgd2lkdGg6IGF1dG87IH1cbiAgICAubmF2LWxhbmcgaW1nIHtcbiAgICAgIGhlaWdodDogYXV0bzsgfVxuICAgIC5uYXYtbGFuZyAuY2FyZXQge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICAuaGVhZGVyLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5uYXYtbGFuZyxcbiAgLm5hdmJhci10b2dnbGUge1xuICAgIG1hcmdpbjogMjBweCA1cHg7IH0gfVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLy8gQW5jaG9yIGZvciBjb21wbGV0ZSBzY3JvbGx0b3BcbiNhbmNob3ItdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MHB4O1xufVxuXG4vLyBDb250YWluZXJcbi5tYWluLWhlYWRlciA+IC5uYXZiYXIge1xuICBAaW5jbHVkZSBkcm9wLXNoYWRvdyhmYWxzZSwgMHB4LCAycHgsIDEwcHgsIDBweCwgJGdyZXkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG5cbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgcGFkZGluZy1yaWdodDogMDsgLy8gcmVtb3ZlIGluIGJ1cmdlciBtZW51XG4gICAgbWF4LWhlaWdodDogNzUlO1xuICB9XG59XG5cbi8vIENlbGwgaGVpZ2h0XG4ubmF2YmFyLWJyYW5kLFxuLm5hdiA+IGxpIHtcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbn1cblxuLy8gTG9nb1xuLm5hdmJhci1icmFuZCB7XG4gIEBleHRlbmQgJW5vLW1hcmdpbjtcbiAgQGluY2x1ZGUgc3BlY2lhbC1mb250KCRmb250LWJpZywgJGdyZXkpO1xuXG4gICYuY2VudHJlZCB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsIGF1dG8sIGF1dG8sIGF1dG8sIDQwJSk7XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAuaGVhZGVyLWxvZ28ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5oZWFkZXItbGFiZWwge1xuICAgIGNvbG9yOiAkZ3JleTtcbiAgICBtYXJnaW4tbGVmdDogJGdhcC1yZWc7XG4gIH1cbn1cblxuLmJ0bi1iYWNrIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsIDBweCwgYXV0bywgMHB4LCAyMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAkZ3JleTtcbiAgd2lkdGg6IDUwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLy8gTWVudVxuLm5hdiB7XG4gIG1hcmdpbi1yaWdodDogMDtcblxuICAubmF2LXJvdXRlIHtcblxuICAgID4gYSB7XG4gICAgICBAaW5jbHVkZSBzcGVjaWFsLWZvbnQoJGZvbnQtYmFzZSwgJGdyZXkpO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuMjVzLCBlYXNlLCAwcyk7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkcHJpbWFyeSA1MCUsICRsaWdodCA1MCUpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIH1cblxuICAgICYuYWN0aXZlID4gYSxcbiAgICAmLmFjdGl2ZSA+IGE6aG92ZXIsXG4gICAgJi5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAgICAgY29sb3I6ICRsaWdodDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG4ubmF2LWxhbmcge1xuICB3aWR0aDogMTAwcHg7XG5cbiAgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cblxuICAuY2FyZXQge1xuICAgIEBleHRlbmQgJWJsb2NrLWNlbnRyZWQ7XG4gIH1cblxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgQGV4dGVuZCAlbm8tcGFkZGluZztcbiAgICBAZXh0ZW5kICVuby1yYWRpdXM7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSB0b3AgMDsgLy8gZm9yIHNjYWxpbmcgZnJvbSB0b3AgdG8gYm90dG9tXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgbGkgLm5hdi1sYW5nLWxhYmVsIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgICAmOmhvdmVyID4gYSB7XG4gICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogJGxpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kcm9wZG93bi1tZW51Om5vdCgub3Blbikge1xuICAgIEBpbmNsdWRlIGFuaW0tZHJvcGRvd24oMCk7XG4gIH1cblxuICAmLm9wZW4gPiAuZHJvcGRvd24tbWVudSB7XG4gICAgQGluY2x1ZGUgYW5pbS1kcm9wZG93bigxKTtcbiAgfVxuXG59XG5cbi5uYXZiYXItdG9nZ2xlIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDIwcHggMHB4IDIwcHggMjBweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLy8gQnVyZ2VyIE1lbnVcblxuLmJ0bi1idXJnZXIge1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuXG4gIC5pY29uLWJhciB7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuM3MsIGVhc2UtaW4sIDBzKTtcbiAgfVxuXG4gIC8vIGFuaW0gYnVyZ2VyIG1lbnVcbiAgJjpub3QoLmNvbGxhcHNlZCkge1xuICAgIC5pY24tYnVyZ2VyLXRvcCB7XG4gICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVZKDVweCkpO1xuICAgIH1cbiAgICAuaWNuLWJ1cmdlci1taWQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmljbi1idXJnZXItYm90IHtcbiAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC00cHgpKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gb3ZlcndyaXRlIGRlZmF1bHQgaGlnaGxpZ2h0XG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8vIFRpdGxlXG4ucGFnZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xuICBwYWRkaW5nOiAkaGVhZGVyLWhlaWdodCAwIDAgJGdhcC1tZDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGgxIHtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC4yNXMsIGVhc2UsIDBzKTtcbiAgICB0ZXh0LWluZGVudDogMDtcbiAgfVxuXG4gICYudGl0bGUtaGFzLWNoYW5nZWQgPiBoMSB7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gIH1cblxuICAudHJpYW5nbGUge1xuICAgIEBpbmNsdWRlIHRyaWFuZ2xlKCdib3R0b20nLCAkc2Vjb25kYXJ5LCA1MHB4LCAzMHB4KTtcbiAgICBAZXh0ZW5kICV0cmlhbmdsZXMtcGx1Z2dlZDtcbiAgICBib3R0b206IC00OXB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubmF2IC5uYXYtcm91dGUgPiBhIHtcbiAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXYge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgLm5hdi1yb3V0ZSA+IGEge1xuICAgICAgZm9udC1zaXplOiAkZm9udC1iYXNlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuICAubmF2LWxhbmcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIC5jYXJldCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICAuaGVhZGVyLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5hdi1sYW5nLFxuICAubmF2YmFyLXRvZ2dsZSB7XG4gICAgbWFyZ2luOiAyMHB4IDVweFxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _translations_service_translations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../translations/service/translations.service */ "./src/app/translations/service/translations.service.ts");
/* harmony import */ var _providers_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/cookie/cookie.service */ "./src/app/providers/cookie/cookie.service.ts");
/* harmony import */ var _providers_header_title_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/header-title/header-title.service */ "./src/app/providers/header-title/header-title.service.ts");
/* harmony import */ var _shared_constants_menus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/constants/menus */ "./src/app/shared/constants/menus.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Services



// Constants

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(headerTitleService, translate, cookieService, renderer, location) {
        this.headerTitleService = headerTitleService;
        this.translate = translate;
        this.cookieService = cookieService;
        this.renderer = renderer;
        this.location = location;
        this.menu = _shared_constants_menus__WEBPACK_IMPORTED_MODULE_5__["MENUS"].MAIN || 'Could not render the menu';
        this.pageHasChanged = false;
        this.fontHasChanged = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // standing data
        this.supportedLanguages = [
            { display: 'In Eng', value: 'eng', flag: 'assets/img/svg/flags/in.svg' },
            { display: 'Uk Eng', value: 'in', flag: 'assets/img/svg/flags/uk.svg' },
            { display: 'Français', value: 'fra', flag: 'assets/img/svg/flags/fr.svg' }
        ];
        this.sessionLanguage();
        this.headerTitleService.setHeaderTitleOnReturn();
        this.headerTitleService.setHeaderTitleOnRefresh();
    };
    /**
     * Make selected language persistent even after refresh
     */
    HeaderComponent.prototype.sessionLanguage = function () {
        switch (this.cookieService.getCookie('language')) {
            case 'eng':
                this.selectLang(this.supportedLanguages[0].value, this.supportedLanguages[0].flag);
                break;
            case 'fra':
                this.selectLang(this.supportedLanguages[1].value, this.supportedLanguages[1].flag);
                break;
            default:
                this.selectLang(this.supportedLanguages[0].value, this.supportedLanguages[0].flag);
                break;
        }
    };
    /**
     * Check if the selected lang is current lang
     *
     * @param {string} lang
     * @returns {boolean}
     */
    HeaderComponent.prototype.isCurrentLang = function (lang) {
        return lang === this.translate.currentLang;
    };
    /**
     * Select a lang and set its flag as default
     *
     * @param {string} lang
     * @param {string} flag
     */
    HeaderComponent.prototype.selectLang = function (lang, flag) {
        this.translate.use(lang);
        this.currentFlag = flag;
        this.cookieService.setCookie('language', lang, 7);
    };
    /**
     * Update title in tab and in page header
     * Specify the page has changed with a flag to trigger the transition
     *
     * @param {string} newTitle
     * @returns {string}
     */
    HeaderComponent.prototype.setTitle = function (newTitle) {
        var _this = this;
        this.pageHasChanged = !this.pageHasChanged; // make disappear previous title
        setTimeout(function () { return _this.pageHasChanged = !_this.pageHasChanged; }, 500); // make appear new title with delay
        return this.headerTitleService.setTitle(newTitle); // dynamic tab title
    };
    /**
     * Toggle the class .font-big to body to increase or reduce font size across the app
     */
    HeaderComponent.prototype.changeFont = function () {
        var body = document.getElementsByTagName('body')[0];
        this.fontHasChanged ?
            this.renderer.removeClass(body, 'font-big') : this.renderer.addClass(body, 'font-big');
        this.fontHasChanged = !this.fontHasChanged;
    };
    /**
     * Detect if device is iOS to trigger specific UI changes and accessibility features
     *
     * @returns {boolean}
     */
    HeaderComponent.prototype.isIos = function () {
        var userAgent = navigator.userAgent || navigator.vendor;
        if (/iPad|iPhone|iPod/.test(userAgent)) {
            return true;
        }
    };
    /**
     * For iOS
     * Go back to the previous page
     */
    HeaderComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_header_title_header_title_service__WEBPACK_IMPORTED_MODULE_4__["HeaderTitleService"],
            _translations_service_translations_service__WEBPACK_IMPORTED_MODULE_2__["TranslationsService"],
            _providers_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/img-modal/img-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/img-modal/img-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"modal-gallery modal-content\">\n\n  <header class=\"modal-header\" (click)=\"bsModalRef.hide()\">\n    <button type=\"button\" class=\"close\">&times;</button>\n    <h3 class=\"modal-title\">{{ pic.name }}</h3>\n  </header>\n\n  <figure class=\"img\">\n    <img [src]=\"pic.image\" [alt]=\"pic.alt\">\n  </figure>\n\n</section>\n"

/***/ }),

/***/ "./src/app/shared/components/img-modal/img-modal.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/img-modal/img-modal.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-gallery .img > img {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbWctbW9kYWwvaW1nLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1nLW1vZGFsL2ltZy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1nYWxsZXJ5IHtcbiAgLmltZyA+IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/img-modal/img-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/img-modal/img-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: ImgModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgModalComponent", function() { return ImgModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImgModalComponent = /** @class */ (function () {
    function ImgModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.pic = {};
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgModalComponent.prototype, "pic", void 0);
    ImgModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-img-modal',
            template: __webpack_require__(/*! ./img-modal.component.html */ "./src/app/shared/components/img-modal/img-modal.component.html"),
            styles: [__webpack_require__(/*! ./img-modal.component.scss */ "./src/app/shared/components/img-modal/img-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], ImgModalComponent);
    return ImgModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/list-preview/list-preview.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/list-preview/list-preview.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- DIPLOMA LIST -->\n\n<div class=\"grid-list\" *ngIf=\"type === 'diploma'\">\n  <figure\n    class=\"grid-list-cell\"\n    *ngFor=\"let object of objects\"\n    (mouseover)=\"focusItem(object)\"\n    (click)=\"goTo(object)\"\n    [class.active]=\"focusedItemId === object.id\">\n\n    <div class=\"grid-list-icn\">\n      <!-- PROJECT LOGO -->\n      <img class=\"img img-float block-center-xs\" [src]=\"object.school.image\" [alt]=\"object.name\"/>\n    </div>\n\n    <figcaption class=\"grid-list-label ellipsis-one-line\">\n      <h5>\n        {{ object.name | translate }}\n        <!-- SCHOOL -->\n        <span class=\"sub-label\">{{ 'at' | translate }} {{ object.school.name | translate }}</span>\n      </h5>\n    </figcaption>\n\n    <div class=\"grid-list-arrows\" [class.active]=\"focusedItemId === object.id\"> >>> </div>\n\n  </figure>\n</div>\n\n<!-- PROJECT OR ROLE LIST -->\n\n<div class=\"grid-list\" *ngIf=\"type === 'project' || type === 'role'\">\n  <figure\n    class=\"grid-list-cell\"\n    *ngFor=\"let object of objects | filter:{ category: filterValue }\"\n    (mouseover)=\"focusItem(object)\"\n    (click)=\"goTo(object)\"\n    [class.active]=\"focusedItemId === object.id\">\n\n    <div class=\"grid-list-icn\">\n      <!-- PROJECT LOGO -->\n      <img *ngIf=\"type === 'project'\" class=\"img img-float\" [src]=\"object.image\" [alt]=\"object.name\"/>\n      <!-- ROLE LOGO -->\n      <img *ngIf=\"type === 'role'\" class=\"img img-float\" [src]=\"object.company.logo\" [alt]=\"object.company.name\"/>\n    </div>\n\n    <figcaption class=\"grid-list-label ellipsis-one-line\">\n      <h5>\n        <span *ngIf=\"!object.confidentiality\">{{ object.name | translate }}</span>\n        <span *ngIf=\"object.confidentiality\">{{ object.category | translate }}</span>\n        <!-- PROJECT CLIENT -->&nbsp;\n        <span class=\"sub-label\" *ngIf=\"type === 'project' && object.client && !object.confidentiality\">\n          {{ 'for' | translate }} {{ object.client.name }}\n        </span>\n        <span class=\"sub-label\" *ngIf=\"type === 'project' && object.client && object.confidentiality\">\n          {{ 'for' | translate }} {{ object.confidentiality }}\n        </span>\n        <!-- ROLE COMPANY  -->&nbsp;\n        <span class=\"sub-label\" *ngIf=\"type === 'role'\">{{ 'for' | translate }} {{ object.company.name }}</span>\n      </h5>\n    </figcaption>\n\n    <div class=\"grid-list-arrows\" [class.active]=\"focusedItemId === object.id\"> >>> </div>\n\n  </figure>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/list-preview/list-preview.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/list-preview/list-preview.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.grid-list {\n  border-top: 0.5px solid #707070;\n  cursor: pointer;\n  margin-bottom: 0;\n  min-height: 400px; }\n.grid-list-cell {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n  border-top: 0px solid #707070;\n  border-right: 0.5px solid #707070;\n  border-bottom: 0.5px solid #707070;\n  border-left: 0px solid #707070;\n  border-radius: 0px;\n  transition: all 0.2s ease-in 0s;\n  background-color: #f0f0f0;\n  color: #707070;\n  padding: 1.5rem 4.5rem 1.5rem 1.5rem; }\n.grid-list-cell h5 > .sub-label {\n    font-size: 1.2rem;\n    font-weight: normal; }\n.grid-list-cell.active {\n    border-right: 0px;\n    background-color: #fcfcfc; }\n.grid-list-cell.active h5 {\n      font-weight: bold; }\n.grid-list-icn .img-float {\n  width: 50px;\n  height: 50px; }\n.grid-list-label {\n  padding-left: 3rem; }\n.grid-list-arrows {\n  transition: all 0.2s ease-in 0.2s;\n  opacity: 0; }\n.grid-list-arrows.active {\n    -webkit-transform: translateX(1.5rem);\n    transform: translateX(1.5rem);\n    opacity: 1; }\n@media screen and (max-width: 768px), screen and (max-height: 700px) {\n  .grid-list-cell {\n    border-right: 0px;\n    flex-wrap: wrap;\n    padding-right: 1.5rem; }\n    .grid-list-cell > .grid-list-icn,\n    .grid-list-cell > .grid-list-label {\n      width: 100%; }\n    .grid-list-cell > .grid-list-icn .img {\n      margin: 0 auto; }\n    .grid-list-cell > .grid-list-label {\n      padding: 3rem 0px 0px;\n      text-align: center;\n      white-space: normal; }\n      .grid-list-cell > .grid-list-label * {\n        overflow: visible; }\n      .grid-list-cell > .grid-list-label h5 > .sub-label {\n        display: block; }\n    .grid-list-cell > .grid-list-arrows {\n      display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xpc3QtcHJldmlldy9saXN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZmxpcGthcnQvMjAxOS9wb3J0Zm9saW8vdmltYWxrb3ZhdGguZ2l0aHViLmlvL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGlzdC1wcmV2aWV3L2xpc3QtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBRFlGOztFQ1RFO0FEc0JGOztFQ25CRTtBRDZCRjs7RUMxQkU7QUR3Q0Y7O0VDckNFO0FEc0pGOztFQ25KRTtBQ2ZGO0VBQ0UsK0JGS1k7RUVKWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0FBR25CO0VGb0hFLGFBQWE7RUFDYixpQkVwSDJCO0VGcUgzQiwyQkVySHVDO0VGc0h2QyxzQkV0SGdEO0VGdUhoRCxtQkV2SHdEO0VGMkh4RCw2QkE3SFk7RUE4SFosaUNBOUhZO0VBK0haLGtDQS9IWTtFQWdJWiw4QkFoSVk7RUFpSVosa0JFOUhrRDtFRmdKbEQsK0JFL0kwQztFQUMxQyx5QkZKa0I7RUVLbEIsY0ZOWTtFRU9aLG9DRjZCYyxFQUFBO0FFbkNoQjtJQVNJLGlCRkNlO0lFQWYsbUJBQW1CLEVBQUE7QUFWdkI7SUFjSSxpQkFBaUI7SUFDakIseUJGZFcsRUFBQTtBRURmO01Ba0JNLGlCQUFpQixFQUFBO0FBS3ZCO0VGa0NFLFdBbENXO0VBbUNYLFlBbkNXLEVBQUE7QUVNYjtFQUNFLGtCRk1XLEVBQUE7QUVIYjtFRmlIRSxpQ0VoSDRDO0VBQzVDLFVBQVUsRUFBQTtBQUZaO0lGcUdFLHFDRWhHeUM7SUZvR3pDLDZCRXBHeUM7SUFDdkMsVUFBVSxFQUFBO0FBSWQ7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJGWlksRUFBQTtJRVNkOztNQU9JLFdBQVcsRUFBQTtJQVBmO01BV0ksY0FBYyxFQUFBO0lBWGxCO01BZUkscUJBQXdCO01BQ3hCLGtCQUFrQjtNQUNsQixtQkFBbUIsRUFBQTtNQWpCdkI7UUFvQk0saUJBQWlCLEVBQUE7TUFwQnZCO1FBd0JNLGNBQWMsRUFBQTtJQXhCcEI7TUE2QkksYUFBYSxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9saXN0LXByZXZpZXcvbGlzdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb2xvdXJzXG4gKi9cblxuJHByaW1hcnk6ICM2NmNjOTk7XG4kc2Vjb25kYXJ5OiAjNjY5OWNjO1xuJGFsdDogIzYyYjJiMDtcbiRkYXJrOiAjMzAzMDMwO1xuJGdyZXk6ICM3MDcwNzA7XG4kbGlnaHQtZ3JleTogI2YwZjBmMDtcbiRsaWdodDogI2ZjZmNmYztcbiRhbGVydDogI2Q4NzQ2YTtcbiRpbmZvOiAjY2M5ZDE0O1xuXG4vKipcbiAqIEZvbnRzXG4gKi9cblxuJGZvbnQtbWljcm86IDFyZW07XG4kZm9udC1zbWFsbDogMS4ycmVtO1xuJGZvbnQtYmFzZTogMS42cmVtO1xuJGZvbnQtYmlnOiAxLjhyZW07XG4kZm9udC1tYWNybzogMi4ycmVtO1xuJGZvbnQtbWVnYTogMi42cmVtO1xuJGZvbnQtZ2lnYTogM3JlbTtcbiRmb250LXRlcmE6IDRyZW07XG5cbi8qKlxuICogSW1hZ2VzXG4gKi9cblxuJGltZy1zbTogMjVweDtcbiRpbWctbWQ6IDUwcHg7XG4kaW1nLWJpZzogNzVweDtcbiRpbWctbWVnYTogMTAwcHg7XG4kaW1nLWdpZ2E6IDE1MHB4O1xuXG4vKipcbiAqIENvbnRhaW5lcnNcbiAqL1xuXG4kaGVhZGVyLWhlaWdodDogNy41cmVtO1xuJGNhcmQtaGVpZ2h0OiAyMHJlbTtcbiRnYXAtc206IDAuNXJlbTtcbiRnYXAtcmVnOiAxLjVyZW07XG4kZ2FwLW1kOiAzcmVtO1xuJGdhcC1iaWc6IDQuNXJlbTtcbiRnYXAtbWVnYTogNnJlbTtcbiRnYXAtdGVyYTogNDB2aDtcbiRwYWRkaW5nLXNtOiAxcmVtO1xuXG4vKipcbiAqIE1peGluc1xuICovXG5cbkBtaXhpbiBzcGVjaWFsLWZvbnQoJHNpemUsICRjb2xvcikge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaGlnaGxpZ2h0KCRiZy1jb2xvciwgJGZvbnQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICBjb2xvcjogJGZvbnQtY29sb3I7XG59XG5cbkBtaXhpbiBzcXVhcmUoJHZhbHVlKSB7XG4gIHdpZHRoOiAkdmFsdWU7XG4gIGhlaWdodDogJHZhbHVlO1xufVxuXG5AbWl4aW4gcm91bmQoJHZhbHVlKSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6ICR2YWx1ZTtcbiAgaGVpZ2h0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBwb3NpdGlvbigkdHlwZSwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCkge1xuICBwb3NpdGlvbjogJHR5cGU7XG4gIHRvcDogJHRvcDtcbiAgcmlnaHQ6ICRyaWdodDtcbiAgYm90dG9tOiAkYm90dG9tO1xuICBsZWZ0OiAkbGVmdDtcbn1cblxuLy8gY2VudGVyIHZlcnRpY2FsbHlcbkBtaXhpbiB2ZXJ0aWNhbC1hbGlnbigkaGVpZ2h0KSB7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQgLyAyO1xufVxuXG5AbWl4aW4gYW5pbS1kcm9wZG93bigkdmFsdWUpIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlWSgkdmFsdWUpKTtcbiAgb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gdHJpYW5nbGUoJGRpciwgJGNvbG9yLCAkYmFzZSwgJGhlaWdodCkge1xuICAkdGlwOiAkaGVpZ2h0IHNvbGlkICRjb2xvcjtcblxuICBAaW5jbHVkZSBzcXVhcmUoJGJhc2UpO1xuICBib3JkZXI6ICRiYXNlIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItI3skZGlyfTogbm9uZTsgLy8gYm9yZGVyIGNvbmNlcm5lZCBkaXNhcHBlYXJcbiAgQGlmICRkaXIgPT0gJ3RvcCcge1xuICAgIGJvcmRlci1ib3R0b206ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAnYm90dG9tJyB7XG4gICAgYm9yZGVyLXRvcDogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdyaWdodCcge1xuICAgIGJvcmRlci1sZWZ0OiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ2xlZnQnIHtcbiAgICBib3JkZXItcmlnaHQ6ICR0aXA7XG4gIH1cbn1cblxuQG1peGluIGRyb3Atc2hhZG93KCRpc0luc2V0LCAkaG9yLCAkdmVyLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG4gIEBpZiAkaXNJbnNldCA9PSB0cnVlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIH0gQGVsc2UgaWYgJGlzSW5zZXQgPT0gZmFsc2Uge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gZmxleC1sYXlvdXQoJGhhc1dyYXA6IG5vd3JhcCwgJGp1c3RpZjogZmxleC1zdGFydCwgJGFsaWduQ29udGVudDogc3RyZXRjaCwgJGFsaWduSXRlbXM6IHN0cmV0Y2gpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiAkaGFzV3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmO1xuICBhbGlnbi1jb250ZW50OiAkYWxpZ25Db250ZW50O1xuICBhbGlnbi1pdGVtczogJGFsaWduSXRlbXM7XG59XG5cbkBtaXhpbiBib3JkZXIoJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCwgJGNvbG9yLCAkcmFkaXVzKSB7XG4gIGJvcmRlci10b3A6ICR0b3Agc29saWQgJGNvbG9yO1xuICBib3JkZXItcmlnaHQ6ICRyaWdodCBzb2xpZCAkY29sb3I7XG4gIGJvcmRlci1ib3R0b206ICRib3R0b20gc29saWQgJGNvbG9yO1xuICBib3JkZXItbGVmdDogJGxlZnQgc29saWQgJGNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4vLyBBTklNU1xuXG5AbWl4aW4gdHJhbnNmb3JtKCR0YW5zZm9ybWF0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW1vei10cmFuc2Zvcm06ICR0YW5zZm9ybWF0aW9uO1xuICAtbXMtdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW8tdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHByb3AsICRkdXIsICR0aW1pbmcsICRkZWxheSwgJG90aGVycy4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3AgJGR1ciAkdGltaW5nICRkZWxheSwgJG90aGVycztcbiAgLW1zLXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1vLXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIHRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG59XG5cbkBtaXhpbiBidG4tYW5pbSgpIHtcbiAgQGluY2x1ZGUgZHJvcC1zaGFkb3coZmFsc2UsIDVweCwgNXB4LCAzcHgsIDBweCwgJGdyZXkpO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtM3B4KSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xufVxuXG4vKipcbiAqIEdlbmVyYWxcbiAqL1xuXG4vLyBDb250YWluZXJcblxuJW5vLXBhZGRpbmcgeyBwYWRkaW5nOiAwOyB9XG5cbiVuby1tYXJnaW4geyBtYXJnaW46IDA7IH1cblxuJWJsb2NrLWNlbnRyZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiVibG9jay1oYWxmLWNlbnRyZWQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuLy8gQm9yZGVyc1xuXG4lbm8tcmFkaXVzIHsgYm9yZGVyLXJhZGl1czogMDsgfVxuXG4lbm8tYm9yZGVyIHsgYm9yZGVyOiAwOyB9XG5cbiV0cmlhbmdsZXMtcGx1Z2dlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxlZnQ6IDI1JTtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuJWJ0bi1maWx0ZXIge1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40cywgZWFzZSwgMHMpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgY29sb3I6ICRsaWdodDtcbn1cblxuJWJ0bi1maWx0ZXItYW5pbSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZVkoMS4xKSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xufVxuIiwiLyoqXG4gKiBDb2xvdXJzXG4gKi9cbi8qKlxuICogRm9udHNcbiAqL1xuLyoqXG4gKiBJbWFnZXNcbiAqL1xuLyoqXG4gKiBDb250YWluZXJzXG4gKi9cbi8qKlxuICogTWl4aW5zXG4gKi9cbi8qKlxuICogR2VuZXJhbFxuICovXG4uZ3JpZC1saXN0IHtcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzcwNzA3MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtaW4taGVpZ2h0OiA0MDBweDsgfVxuXG4uZ3JpZC1saXN0LWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAwcHggc29saWQgIzcwNzA3MDtcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjNzA3MDcwO1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjNzA3MDcwO1xuICBib3JkZXItbGVmdDogMHB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4gMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluIDBzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcGFkZGluZzogMS41cmVtIDQuNXJlbSAxLjVyZW0gMS41cmVtOyB9XG4gIC5ncmlkLWxpc3QtY2VsbCBoNSA+IC5zdWItbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cbiAgLmdyaWQtbGlzdC1jZWxsLmFjdGl2ZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYzsgfVxuICAgIC5ncmlkLWxpc3QtY2VsbC5hY3RpdmUgaDUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLmdyaWQtbGlzdC1pY24gLmltZy1mbG9hdCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7IH1cblxuLmdyaWQtbGlzdC1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogM3JlbTsgfVxuXG4uZ3JpZC1saXN0LWFycm93cyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4gMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4gMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbiAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluIDAuMnM7XG4gIG9wYWNpdHk6IDA7IH1cbiAgLmdyaWQtbGlzdC1hcnJvd3MuYWN0aXZlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjVyZW0pO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjVyZW0pO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjVyZW0pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjVyZW0pO1xuICAgIG9wYWNpdHk6IDE7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpLCBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3MDBweCkge1xuICAuZ3JpZC1saXN0LWNlbGwge1xuICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07IH1cbiAgICAuZ3JpZC1saXN0LWNlbGwgPiAuZ3JpZC1saXN0LWljbixcbiAgICAuZ3JpZC1saXN0LWNlbGwgPiAuZ3JpZC1saXN0LWxhYmVsIHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLmdyaWQtbGlzdC1jZWxsID4gLmdyaWQtbGlzdC1pY24gLmltZyB7XG4gICAgICBtYXJnaW46IDAgYXV0bzsgfVxuICAgIC5ncmlkLWxpc3QtY2VsbCA+IC5ncmlkLWxpc3QtbGFiZWwge1xuICAgICAgcGFkZGluZzogM3JlbSAwcHggMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfVxuICAgICAgLmdyaWQtbGlzdC1jZWxsID4gLmdyaWQtbGlzdC1sYWJlbCAqIHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7IH1cbiAgICAgIC5ncmlkLWxpc3QtY2VsbCA+IC5ncmlkLWxpc3QtbGFiZWwgaDUgPiAuc3ViLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAuZ3JpZC1saXN0LWNlbGwgPiAuZ3JpZC1saXN0LWFycm93cyB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5ncmlkLWxpc3Qge1xuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAkZ3JleTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtaW4taGVpZ2h0OiA0MDBweDsgLy8gUHJldmVudCBmb290ZXIgb3ZlcmxhcHBpbmcgcHJldmlldyBkZXNjcmlwdGlvbiB3aGVuIG5vdCBlbm91Z2ggaXRlbVxufVxuXG4uZ3JpZC1saXN0LWNlbGwge1xuICBAaW5jbHVkZSBmbGV4LWxheW91dChub3dyYXAsIGZsZXgtc3RhcnQsIHN0cmV0Y2gsIGNlbnRlcik7XG4gIEBpbmNsdWRlIGJvcmRlcigwcHgsIDAuNXB4LCAwLjVweCwgMHB4LCAkZ3JleSwgMHB4KTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuMnMsIGVhc2UtaW4sIDBzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XG4gIGNvbG9yOiAkZ3JleTtcbiAgcGFkZGluZzogJGdhcC1yZWcgJGdhcC1iaWcgJGdhcC1yZWcgJGdhcC1yZWc7XG5cbiAgaDUgPiAuc3ViLWxhYmVsIHtcbiAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xuXG4gICAgaDUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5cbi5ncmlkLWxpc3QtaWNuIHtcbiAgLmltZy1mbG9hdCB7XG4gICAgQGluY2x1ZGUgc3F1YXJlKCRpbWctbWQpO1xuICB9XG59XG5cbi5ncmlkLWxpc3QtbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6ICRnYXAtbWQ7XG59XG5cbi5ncmlkLWxpc3QtYXJyb3dzIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuMnMsIGVhc2UtaW4sIDAuMnMpO1xuICBvcGFjaXR5OiAwO1xuXG4gICYuYWN0aXZlIHtcbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgkZ2FwLXJlZykpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpLCBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3MDBweCkge1xuICAuZ3JpZC1saXN0LWNlbGwge1xuICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAkZ2FwLXJlZztcblxuICAgID4gLmdyaWQtbGlzdC1pY24sXG4gICAgPiAuZ3JpZC1saXN0LWxhYmVsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgID4gLmdyaWQtbGlzdC1pY24gLmltZyB7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICA+IC5ncmlkLWxpc3QtbGFiZWwge1xuICAgICAgcGFkZGluZzogJGdhcC1tZCAwcHggMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcblxuICAgICAgKiB7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBoNSA+IC5zdWItbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICA+IC5ncmlkLWxpc3QtYXJyb3dzIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/list-preview/list-preview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/list-preview/list-preview.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPreviewComponent", function() { return ListPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_g_analytics_g_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/g-analytics/g-analytics.service */ "./src/app/providers/g-analytics/g-analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPreviewComponent = /** @class */ (function () {
    function ListPreviewComponent(router, analyticsService) {
        this.router = router;
        this.analyticsService = analyticsService;
        this.filterValue = '';
        this.focusedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListPreviewComponent.prototype.ngOnInit = function () {
        this.focusedItemId = this.objects[0].id; // 1st item is hovered on load
        this.focusItem(this.objects[0]); // 1st item is previewed on load
    };
    /**
     * Emit the focused object to parent view to populate the preview
     *
     * @param itemHovered
     */
    ListPreviewComponent.prototype.focusItem = function (itemHovered) {
        this.focusedItemId = itemHovered.id; // focus will refer to the id of the selected item
        this.focusedItem.emit(itemHovered);
    };
    /**
     * Navigates to the details page of the selected object
     * passes its id and type
     *
     * @param objectId
     */
    ListPreviewComponent.prototype.goTo = function (object) {
        // this.analyticsService.captureCustomEvent(
        //   'navigation',
        //   `Navigate to details page for ${this.type}`,
        //   `${object.name}`,
        //   1);
        // We cannot pass an object directly, only a string
        this.router.navigate(['details', { id: object.id, type: this.type }]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListPreviewComponent.prototype, "objects", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListPreviewComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListPreviewComponent.prototype, "filterValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListPreviewComponent.prototype, "focusedItem", void 0);
    ListPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-preview',
            template: __webpack_require__(/*! ./list-preview.component.html */ "./src/app/shared/components/list-preview/list-preview.component.html"),
            styles: [__webpack_require__(/*! ./list-preview.component.scss */ "./src/app/shared/components/list-preview/list-preview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _providers_g_analytics_g_analytics_service__WEBPACK_IMPORTED_MODULE_2__["GAnalyticsService"]])
    ], ListPreviewComponent);
    return ListPreviewComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/preview/preview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/preview/preview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"wrap-preview\" *ngIf=\"!!focusedItem\">\n\n  <h2>Preview</h2>\n\n  <header class=\"wrap-img-txt\">\n    <figure>\n      <div class=\"img img-round\">\n        <img *ngIf=\"type === 'project'\" [src]=\"focusedItem.image\" [alt]=\"focusedItem.name\">\n        <img *ngIf=\"type === 'role'\" [src]=\"focusedItem.company.logo\" [alt]=\"focusedItem.company.name\">\n        <img *ngIf=\"type === 'diploma'\" [src]=\"focusedItem.school.image\" [alt]=\"focusedItem.school.name\">\n      </div>\n\n      <figcaption class=\"details-headings\">\n\n        <h3 *ngIf=\"!focusedItem.confidentiality\">{{ focusedItem.name | translate }}</h3>\n        <h3 *ngIf=\"focusedItem.confidentiality\">{{ focusedItem.confidentiality | translate }}</h3>\n\n        <h4>{{ focusedItem.category }}</h4>\n\n        <!-- If PROJECT -->\n        <h4 *ngIf=\"type === 'project' && focusedItem.company\">\n          <span class=\"content-prefix\">{{ 'as' | translate }}</span>\n          {{ focusedItem.company.role }}\n          <span class=\"content-prefix\">{{ 'at' | translate }}</span>&nbsp;\n          <a [href]=\"focusedItem.company.url\" target=\"_blank\">{{ focusedItem.company.name }}</a>\n        </h4>\n        <!-- If ROLE -->\n        <h4 *ngIf=\"type === 'role'\">\n          <span class=\"content-prefix\">{{ 'at' | translate }}</span>&nbsp;\n          <a [href]=\"focusedItem.company.url\" target=\"_blank\">{{ focusedItem.company.name }}</a>\n        </h4>\n        <!-- If DIPLOMA -->\n        <h4 *ngIf=\"type === 'diploma'\">\n          <span class=\"content-prefix\">{{ 'at' | translate }}</span>&nbsp;\n          <a [href]=\"focusedItem.school.url\" target=\"_blank\">{{ focusedItem.school.name }}</a>&nbsp;\n          <span class=\"content-prefix\" *ngIf=\"focusedItem.school.country != 'Online'\">{{ 'in' | translate }}</span>\n          {{ focusedItem.school.country }}\n        </h4>\n\n        <!-- DATE -->\n        <p class=\"wrap-dates text-center-xs\">\n          {{ focusedItem.dates.start | date : \"MMM yyyy\" }}\n          <span class=\"content-prefix\">{{ \"to\" | translate }}</span>\n          {{ (focusedItem.dates.end | date : \"MMM yyyy\") || (\"present\" | translate) }}\n        </p>\n      </figcaption>\n    </figure>\n  </header>\n\n  <!-- DESC -->\n  <p *ngIf=\"type !== 'diploma'\">{{ focusedItem.desc | translate | ellipsis:175 }}</p>\n\n  <!-- If DIPLOMA -->\n  <div *ngIf=\"type === 'diploma' && focusedItem.subjects\">\n    <header class=\"header-sub\"><h5>{{ 'some' | translate }} {{ 'subjects' | translate | lowercase }}</h5></header>\n    <ul>\n      <li *ngFor=\"let subject of focusedItem.subjects; let i=index\" [hidden]=\"i > 3\">{{ subject.name }}</li>\n      <li>...</li>\n    </ul>\n  </div>\n\n  <!-- If PROJECT OR PROJECT -->\n  <section class=\"img-group\" *ngIf=\"type !== 'diploma' && focusedItem.techs\">\n    <header class=\"header-sub\"><h5>{{ 'some' | translate }} {{ 'skills' | translate | lowercase }}</h5></header>\n\n    <figure class=\"img-wrap\" *ngFor=\"let tech of focusedItem.techs; let i=index\" [hidden]=\"i > 3\">\n      <img class=\"img img-float\" [src]=\"tech.logo\" [alt]=\"tech.name\">\n      <figcaption class=\"img-label\">{{ tech.name }}</figcaption>\n    </figure>\n  </section>\n\n</article>\n"

/***/ }),

/***/ "./src/app/shared/components/preview/preview.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/preview/preview.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Colours\n */\n/**\n * Fonts\n */\n/**\n * Images\n */\n/**\n * Containers\n */\n/**\n * Mixins\n */\n/**\n * General\n */\n.wrap-preview {\n  background-color: #fcfcfc;\n  color: #707070;\n  position: fixed;\n  padding-left: 4.5rem;\n  width: 40%; }\n.wrap-preview h2 {\n    margin: 0px auto 1.5rem; }\n.wrap-preview .img-float {\n    width: 50px; }\n.wrap-preview .img-label {\n    width: calc(50px + 15px); }\n.wrap-preview .header-sub {\n    margin: 0.5rem 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbGlwa2FydC8yMDE5L3BvcnRmb2xpby92aW1hbGtvdmF0aC5naXRodWIuaW8vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURZRjs7RUNURTtBRHNCRjs7RUNuQkU7QUQ2QkY7O0VDMUJFO0FEd0NGOztFQ3JDRTtBRHNKRjs7RUNuSkU7QUNmRjtFQUNFLHlCRk9hO0VFTmIsY0ZJWTtFRUhaLGVBQWU7RUFDZixvQkZ3Q2M7RUV2Q2QsVUFBVSxFQUFBO0FBTFo7SUFRSSx1QkZrQ1ksRUFBQTtBRTFDaEI7SUFZSSxXRmtCUyxFQUFBO0FFOUJiO0lBZ0JJLHdCQUE4QixFQUFBO0FBaEJsQztJQW9CSSxrQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29sb3Vyc1xuICovXG5cbiRwcmltYXJ5OiAjNjZjYzk5O1xuJHNlY29uZGFyeTogIzY2OTljYztcbiRhbHQ6ICM2MmIyYjA7XG4kZGFyazogIzMwMzAzMDtcbiRncmV5OiAjNzA3MDcwO1xuJGxpZ2h0LWdyZXk6ICNmMGYwZjA7XG4kbGlnaHQ6ICNmY2ZjZmM7XG4kYWxlcnQ6ICNkODc0NmE7XG4kaW5mbzogI2NjOWQxNDtcblxuLyoqXG4gKiBGb250c1xuICovXG5cbiRmb250LW1pY3JvOiAxcmVtO1xuJGZvbnQtc21hbGw6IDEuMnJlbTtcbiRmb250LWJhc2U6IDEuNnJlbTtcbiRmb250LWJpZzogMS44cmVtO1xuJGZvbnQtbWFjcm86IDIuMnJlbTtcbiRmb250LW1lZ2E6IDIuNnJlbTtcbiRmb250LWdpZ2E6IDNyZW07XG4kZm9udC10ZXJhOiA0cmVtO1xuXG4vKipcbiAqIEltYWdlc1xuICovXG5cbiRpbWctc206IDI1cHg7XG4kaW1nLW1kOiA1MHB4O1xuJGltZy1iaWc6IDc1cHg7XG4kaW1nLW1lZ2E6IDEwMHB4O1xuJGltZy1naWdhOiAxNTBweDtcblxuLyoqXG4gKiBDb250YWluZXJzXG4gKi9cblxuJGhlYWRlci1oZWlnaHQ6IDcuNXJlbTtcbiRjYXJkLWhlaWdodDogMjByZW07XG4kZ2FwLXNtOiAwLjVyZW07XG4kZ2FwLXJlZzogMS41cmVtO1xuJGdhcC1tZDogM3JlbTtcbiRnYXAtYmlnOiA0LjVyZW07XG4kZ2FwLW1lZ2E6IDZyZW07XG4kZ2FwLXRlcmE6IDQwdmg7XG4kcGFkZGluZy1zbTogMXJlbTtcblxuLyoqXG4gKiBNaXhpbnNcbiAqL1xuXG5AbWl4aW4gc3BlY2lhbC1mb250KCRzaXplLCAkY29sb3IpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGhpZ2hsaWdodCgkYmctY29sb3IsICRmb250LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmb250LWNvbG9yO1xufVxuXG5AbWl4aW4gc3F1YXJlKCR2YWx1ZSkge1xuICB3aWR0aDogJHZhbHVlO1xuICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIHJvdW5kKCR2YWx1ZSkge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAkdmFsdWU7XG4gIGhlaWdodDogJHZhbHVlO1xufVxuXG5AbWl4aW4gcG9zaXRpb24oJHR5cGUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcbiAgcG9zaXRpb246ICR0eXBlO1xuICB0b3A6ICR0b3A7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgbGVmdDogJGxlZnQ7XG59XG5cbi8vIGNlbnRlciB2ZXJ0aWNhbGx5XG5AbWl4aW4gdmVydGljYWwtYWxpZ24oJGhlaWdodCkge1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0IC8gMjtcbn1cblxuQG1peGluIGFuaW0tZHJvcGRvd24oJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZVkoJHZhbHVlKSk7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIHRyaWFuZ2xlKCRkaXIsICRjb2xvciwgJGJhc2UsICRoZWlnaHQpIHtcbiAgJHRpcDogJGhlaWdodCBzb2xpZCAkY29sb3I7XG5cbiAgQGluY2x1ZGUgc3F1YXJlKCRiYXNlKTtcbiAgYm9yZGVyOiAkYmFzZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLSN7JGRpcn06IG5vbmU7IC8vIGJvcmRlciBjb25jZXJuZWQgZGlzYXBwZWFyXG4gIEBpZiAkZGlyID09ICd0b3AnIHtcbiAgICBib3JkZXItYm90dG9tOiAkdGlwO1xuICB9IEBlbHNlIGlmICRkaXIgPT0gJ2JvdHRvbScge1xuICAgIGJvcmRlci10b3A6ICR0aXA7XG4gIH0gQGVsc2UgaWYgJGRpciA9PSAncmlnaHQnIHtcbiAgICBib3JkZXItbGVmdDogJHRpcDtcbiAgfSBAZWxzZSBpZiAkZGlyID09ICdsZWZ0JyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdGlwO1xuICB9XG59XG5cbkBtaXhpbiBkcm9wLXNoYWRvdygkaXNJbnNldCwgJGhvciwgJHZlciwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuICBAaWYgJGlzSW5zZXQgPT0gdHJ1ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgJGhvciAkdmVyICRibHVyICRzcHJlYWQgJGNvbG9yO1xuICB9IEBlbHNlIGlmICRpc0luc2V0ID09IGZhbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICRob3IgJHZlciAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiAkaG9yICR2ZXIgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIGZsZXgtbGF5b3V0KCRoYXNXcmFwOiBub3dyYXAsICRqdXN0aWY6IGZsZXgtc3RhcnQsICRhbGlnbkNvbnRlbnQ6IHN0cmV0Y2gsICRhbGlnbkl0ZW1zOiBzdHJldGNoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogJGhhc1dyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZjtcbiAgYWxpZ24tY29udGVudDogJGFsaWduQ29udGVudDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQsICRjb2xvciwgJHJhZGl1cykge1xuICBib3JkZXItdG9wOiAkdG9wIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiAkcmlnaHQgc29saWQgJGNvbG9yO1xuICBib3JkZXItYm90dG9tOiAkYm90dG9tIHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLWxlZnQ6ICRsZWZ0IHNvbGlkICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbn1cblxuLy8gQU5JTVNcblxuQG1peGluIHRyYW5zZm9ybSgkdGFuc2Zvcm1hdGlvbikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1tb3otdHJhbnNmb3JtOiAkdGFuc2Zvcm1hdGlvbjtcbiAgLW1zLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIC1vLXRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG4gIHRyYW5zZm9ybTogJHRhbnNmb3JtYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wLCAkZHVyLCAkdGltaW5nLCAkZGVsYXksICRvdGhlcnMuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wICRkdXIgJHRpbWluZyAkZGVsYXksICRvdGhlcnM7XG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xuICB0cmFuc2l0aW9uOiAkcHJvcCAkZHVyICR0aW1pbmcgJGRlbGF5LCAkb3RoZXJzO1xufVxuXG5AbWl4aW4gYnRuLWFuaW0oKSB7XG4gIEBpbmNsdWRlIGRyb3Atc2hhZG93KGZhbHNlLCA1cHgsIDVweCwgM3B4LCAwcHgsICRncmV5KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTNweCkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cblxuLyoqXG4gKiBHZW5lcmFsXG4gKi9cblxuLy8gQ29udGFpbmVyXG5cbiVuby1wYWRkaW5nIHsgcGFkZGluZzogMDsgfVxuXG4lbm8tbWFyZ2luIHsgbWFyZ2luOiAwOyB9XG5cbiVibG9jay1jZW50cmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4lYmxvY2staGFsZi1jZW50cmVkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8vIEJvcmRlcnNcblxuJW5vLXJhZGl1cyB7IGJvcmRlci1yYWRpdXM6IDA7IH1cblxuJW5vLWJvcmRlciB7IGJvcmRlcjogMDsgfVxuXG4ldHJpYW5nbGVzLXBsdWdnZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAyNSU7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbiVidG4tZmlsdGVyIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNHMsIGVhc2UsIDBzKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIGNvbG9yOiAkbGlnaHQ7XG59XG5cbiVidG4tZmlsdGVyLWFuaW0ge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGVZKDEuMSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbn1cbiIsIi8qKlxuICogQ29sb3Vyc1xuICovXG4vKipcbiAqIEZvbnRzXG4gKi9cbi8qKlxuICogSW1hZ2VzXG4gKi9cbi8qKlxuICogQ29udGFpbmVyc1xuICovXG4vKipcbiAqIE1peGluc1xuICovXG4vKipcbiAqIEdlbmVyYWxcbiAqL1xuLndyYXAtcHJldmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmctbGVmdDogNC41cmVtO1xuICB3aWR0aDogNDAlOyB9XG4gIC53cmFwLXByZXZpZXcgaDIge1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMS41cmVtOyB9XG4gIC53cmFwLXByZXZpZXcgLmltZy1mbG9hdCB7XG4gICAgd2lkdGg6IDUwcHg7IH1cbiAgLndyYXAtcHJldmlldyAuaW1nLWxhYmVsIHtcbiAgICB3aWR0aDogY2FsYyg1MHB4ICsgMTVweCk7IH1cbiAgLndyYXAtcHJldmlldyAuaGVhZGVyLXN1YiB7XG4gICAgbWFyZ2luOiAwLjVyZW0gMHB4OyB9XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4ud3JhcC1wcmV2aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xuICBjb2xvcjogJGdyZXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZy1sZWZ0OiAkZ2FwLWJpZztcbiAgd2lkdGg6IDQwJTtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwcHggYXV0byAkZ2FwLXJlZztcbiAgfVxuXG4gIC5pbWctZmxvYXQge1xuICAgIHdpZHRoOiAkaW1nLW1kO1xuICB9XG5cbiAgLmltZy1sYWJlbCB7XG4gICAgd2lkdGg6IGNhbGMoI3skaW1nLW1kfSArIDE1cHgpO1xuICB9XG5cbiAgLmhlYWRlci1zdWIge1xuICAgIG1hcmdpbjogJGdhcC1zbSAwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/preview/preview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/preview/preview.component.ts ***!
  \****************************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreviewComponent = /** @class */ (function () {
    function PreviewComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreviewComponent.prototype, "focusedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreviewComponent.prototype, "type", void 0);
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/shared/components/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.scss */ "./src/app/shared/components/preview/preview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/filters.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/constants/filters.ts ***!
  \*********************************************/
/*! exports provided: FILTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERS", function() { return FILTERS; });
var FILTERS = {
    projects: [
        '',
        'Portfolio',
        'Mobile App',
        'Web App'
    ],
    roles: [
        '',
        'Permanent',
        'Contract',
        'Internship'
    ],
    skills: [
        '',
        'Front-End',
        'Back-End',
        'Design',
        'Framework',
        'Javascript',
        'CMS'
    ]
};


/***/ }),

/***/ "./src/app/shared/constants/menus.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/constants/menus.ts ***!
  \*******************************************/
/*! exports provided: MENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUS", function() { return MENUS; });
var MENUS = {
    MAIN: [
        { key: 'home', value: 'Home' },
        { key: 'about', value: 'About me' },
        { key: 'posts', value: 'Posts' },
        { key: 'projects', value: 'Projects' },
        { key: 'education', value: 'Education' },
        { key: 'experience', value: 'Experience' },
        { key: 'skills', value: 'Skills' }
    ],
    SUB: [
        { key: 'cookie-policy', value: 'Cookie policy' },
        { key: 'sitemap', value: 'Sitemap' },
        { key: 'terms-conditions', value: 'Terms & conditions' }
    ]
};


/***/ }),

/***/ "./src/app/shared/constants/profile.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/constants/profile.ts ***!
  \*********************************************/
/*! exports provided: PROFILE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE", function() { return PROFILE; });
var PROFILE = {
    name: 'vimal kovath',
    title: 'front end & Mean stack',
    images: {
        avatar: 'assets/img/svg/perso/photo.svg',
        dev: 'assets/img/svg/perso/dev.svg',
        design: 'assets/img/svg/perso/design.svg',
        place: 'assets/img/svg/perso/london.svg',
        process: 'assets/img/svg/perso/process.svg',
        experiences: 'assets/img/svg/perso/experiences.svg',
        email: 'assets/img/svg/perso/gmail.svg'
    },
    email: 'mailto:vimalkovath@gmail.com',
    street: 'ashraya layout, phase 1',
    postcode: '560048',
    city: 'Bengaluru',
    country: 'India'
};


/***/ }),

/***/ "./src/app/shared/data/mock-diplomas.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/data/mock-diplomas.ts ***!
  \**********************************************/
/*! exports provided: DIPLOMAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIPLOMAS", function() { return DIPLOMAS; });
var DIPLOMAS = [
    {
        'id': '#diploma5',
        'name': '#diplomaCs',
        'category': 'Certification',
        'gallery': [{
                // 'image': '../../../assets/img/svg/education/udemy.svg',
                'image': 'assets/img/svg/education/udemy.svg',
                'name': 'udemy Logo',
                'alt': 'Image of udemy logo',
            }],
        'subjects': [
            { 'name': 'Javascript', 'spe': false },
            { 'name': 'Angular', 'spe': false },
            { 'name': 'Sass', 'spe': false },
            { 'name': 'front end', 'spe': false },
            { 'name': 'RegEx', 'spe': false },
        ],
        'school': {
            'name': 'udemy',
            'image': 'assets/img/svg/education/udemy.svg',
            'place': 'Online',
            'country': 'Online',
            'url': 'https://www.udemy.com/'
        },
        'dates': {
            'start': '2016-03-01',
            'end': '2019-01-01'
        },
        'projects': null
    },
    {
        'id': '#diploma4',
        'name': '#Btech',
        'category': 'Bachelor\'s Degree',
        'gallery': [{
                'image': 'assets/img/png/diplomas/au.jpeg',
                'name': 'Bachelor\'s Degree Diploma',
                'alt': 'Image of bachelor\'s degree diploma',
            }],
        'subjects': [
            { 'name': 'All csc', 'spe': true },
            { 'name': 'IT Management', 'spe': true },
            { 'name': 'Communication', 'spe': false },
            { 'name': 'Maths', 'spe': false }
        ],
        'school': {
            'name': 'King collage of technology namakkal',
            'place': 'Tamil nadu',
            'country': 'India',
            'image': 'assets/img/png/diplomas/au.jpeg',
            'url': 'https://www.annauniv.edu/'
        },
        'dates': {
            'start': '2010-06-01',
            'end': '2013-06-20'
        },
        'projects': [{
                'id': '#project5',
                'name': '',
                'image': 'assets/img/png/diplomas/au.jpeg',
                'url': 'https://www.annauniv.edu/'
            }]
    },
    {
        'id': '#diploma3',
        'name': '#diploma',
        'category': 'University Diploma',
        'gallery': [{
                'image': 'assets/img/svg/education/gptccollage.jpg',
                'name': 'Diploma of Higher Education',
                'alt': 'Image of diploma of higher education',
            }],
        'subjects': [
            { 'name': 'cse', 'spe': true },
            { 'name': 'maths', 'spe': true },
            { 'name': 'Electronics', 'spe': true },
            { 'name': 'IT management', 'spe': false },
            { 'name': 'Software Dev', 'spe': false },
            { 'name': 'Communication', 'spe': false }
        ],
        'school': {
            'name': 'Government Polytechnic College, Chelakkara',
            'place': 'Thrissur',
            'country': 'India',
            'image': 'assets/img/svg/education/gptccollage.jpg',
            'url': 'Government Polytechnic College, Chelakkara'
        },
        'dates': {
            'start': '2006-09-01',
            'end': '2009-06-01'
        },
        'projects': [
            {
                'id': '#project1',
                'name': 'Noukari clone',
                'image': 'assets/img/svg/education/gptc.jpg',
                'url': null
            }
        ]
    },
    {
        'id': '#diploma2',
        'name': '#HSC',
        'category': 'University Degree',
        'gallery': [{
                'image': 'http://www.vhse.kerala.gov.in/vhse/images/logovhse.png',
                'name': 'VHSC',
                'alt': 'Image of university degree diploma',
            }],
        'subjects': [
            { 'name': 'Electronics', 'spe': true },
            { 'name': 'Maths', 'spe': false },
            { 'name': 'English', 'spe': false },
            { 'name': 'Social', 'spe': false },
            { 'name': 'Science', 'spe': false }
        ],
        'school': {
            'name': 'Vocational Higher Secondary Education',
            'place': 'Thrissur',
            'country': 'India',
            'image': 'http://www.vhse.kerala.gov.in/vhse/images/logovhse.png',
            'url': 'http://www.vhse.kerala.gov.in/'
        },
        'dates': {
            'start': '2003-06-01',
            'end': '2005-04-01'
        },
        'projects': [{
                'id': '#project0',
                'name': 'Radio , dancing light ',
                'image': 'http://www.vhse.kerala.gov.in/vhse/images/logovhse.png',
                'url': null
            }]
    },
    {
        'id': '#diploma1',
        'name': '#school',
        'category': 'Sslc / Metriculation',
        'gallery': [{
                'image': 'http://www.gvhsscherpu.in/logo/eb.png',
                'name': 'SSLC',
                'alt': 'Image of SSLC Diploma',
            }],
        'subjects': [
            { 'name': 'Biology', 'spe': false },
            { 'name': 'Physics/chemistry', 'spe': false },
            { 'name': 'Mathematics', 'spe': false },
            { 'name': 'Social Science', 'spe': false },
            { 'name': 'English', 'spe': false },
            { 'name': 'Sanskrit', 'spe': false },
            { 'name': 'Hindi', 'spe': false },
            { 'name': 'Malayalam', 'spe': false },
            { 'name': 'Chemistry', 'spe': false }
        ],
        'school': {
            'name': 'Cherpu Govt Vocational Higher Secondary school ',
            'place': 'Kerala , Thrissur',
            'country': 'India',
            'image': 'http://www.gvhsscherpu.in/logo/eb.png',
            'url': 'http://www.gvhsscherpu.in'
        },
        'dates': {
            'start': '1993-06-03',
            'end': '2003-04-20'
        },
        'projects': null
    }
];


/***/ }),

/***/ "./src/app/shared/data/mock-hobbies.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/data/mock-hobbies.ts ***!
  \*********************************************/
/*! exports provided: HOBBIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOBBIES", function() { return HOBBIES; });
var HOBBIES = [
    {
        'id': '#hobby6',
        'name': '#hobbyReading',
        // 'image': '../../../assets/img/svg/hobbies/reading.svg',
        'image': 'assets/img/svg/hobbies/reading.svg',
        'desc': '#hobbyReading',
        'url': null
    },
    {
        'id': '#hobby6',
        'name': '#hobbyDrawing',
        'image': 'assets/img/svg/hobbies/drawing.svg',
        'desc': '#hobbyDrawing',
        'url': null
    },
    {
        'id': '#hobby6',
        'name': '#hobbyMusic',
        'image': 'assets/img/svg/hobbies/music.svg',
        'desc': '#hobbyMusic',
        'url': null
    },
    {
        'id': '#hobby4',
        'name': '#hobbyBadminton',
        'image': 'assets/img/svg/hobbies/badminton.svg',
        'desc': '#hobbyBadminton',
        'url': null
    },
    {
        'id': '#hobby3',
        'name': '#hobbyCulture',
        'image': 'assets/img/svg/hobbies/history.svg',
        'desc': '#hobbyDescCulture',
        'url': null
    },
    {
        'id': '#hobby2',
        'name': '#hobbyChess',
        'image': 'assets/img/svg/hobbies/chess.svg',
        'desc': '#hobbyChess',
        'url': null
    },
    {
        'id': '#hobby1',
        'name': '#hobbyCricket',
        'image': 'assets/img/svg/hobbies/cricket.svg',
        'desc': '#hobbyCricket',
        'url': null
    }
];


/***/ }),

/***/ "./src/app/shared/data/mock-projects.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/data/mock-projects.ts ***!
  \**********************************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
var PROJECTS = [{
        'id': '#project16',
        'name': 'This Portfolio',
        'image': '../../../assets/img/svg/projects/portfoliov3.svg',
        'featured': true,
        'active': true,
        'category': 'Portfolio',
        'company': null,
        'client': null,
        'desc': '#projectDescPortfolio3',
        'techs': [
            {
                'name': 'Angular',
                'logo': '../../../assets/img/svg/skills/angular.svg'
            },
            {
                'name': 'Sass',
                'logo': '../../../assets/img/svg/skills/Sass.svg'
            },
            {
                'name': 'Gulp',
                'logo': '../../../assets/img/svg/skills/gulp.svg'
            },
            {
                'name': 'jQuery',
                'logo': '../../../assets/img/svg/skills/jquery.svg'
            },
            {
                'name': 'Node',
                'logo': '../../../assets/img/svg/skills/node.svg'
            }
        ],
        'gallery': null,
        'prototypes': null,
        'docs': null,
        'dates': {
            'start': '2017-01-01',
            'end': null
        },
        'confidentiality': null,
        'url': '',
        'github': 'https://github.com/vimalkovath/vimlkovath.github.io'
    },
    {
        'id': '#project15',
        'name': 'Travel Visa Assistant',
        'image': 'https://www.fulfillsolutions.com/wp-content/themes/fulfill/assets/images/logo.png',
        'featured': true,
        'active': true,
        'category': 'Web App',
        'company': {
            'name': 'Fulfill Solutions',
            'logo': 'https://www.fulfillsolutions.com/wp-content/themes/fulfill/assets/images/logo.png',
            'url': 'https://www.fulfillsolutions.com',
            'role': 'Meanstack Developer & UI Architect'
        },
        'client': {
            'name': 'Mastercard',
            'logo': 'https://www.fulfillsolutions.com/mastercard/assets/images/Logo.svg',
            'url': 'https://surelygroup.com/',
            'featured': true
        },
        'desc': '#projectDescFulfill',
        'techs': [
            {
                'name': 'PHP',
                'logo': '../../../assets/img/svg/skills/php.svg'
            },
            {
                'name': 'Javascript',
                'logo': '../../../assets/img/svg/skills/javascript.svg'
            },
            {
                'name': 'CSS',
                'logo': '../../../assets/img/svg/skills/css.svg'
            },
            {
                'name': 'Node',
                'logo': '../../../assets/img/svg/skills/node.svg'
            },
            {
                'name': 'scss',
                'logo': '../../../assets/img/svg/skills/Sass.svg'
            },
            {
                'name': 'angular',
                'logo': '../../../assets/img/svg/skills/angular.svg'
            },
            {
                'name': 'javascript',
                'logo': '../../../assets/img/svg/skills/javascript.svg'
            }
        ],
        'gallery': null,
        'prototypes': null,
        'docs': null,
        'dates': {
            'start': '2018-04-13',
            'end': '2018-04-20'
        },
        'confidentiality': null,
        'url': 'https://www.fulfillsolutions.com/mastercard/render/Dashboard_1',
        'github': null
    },
    {
        'id': '#project8',
        'name': 'IFX_GP4',
        'image': 'https://www.marlabs.com/wp-content/uploads/2017/09/marlabs_logo.png',
        'featured': true,
        'active': true,
        'category': 'Web App',
        'company': {
            'name': 'Marlabs',
            'logo': 'https://www.marlabs.com/wp-content/uploads/2017/09/marlabs_logo.png',
            'url': 'https://www.marlabs.com//',
            'role': 'Java Developer '
        },
        'client': {
            'name': 'egate',
            'logo': 'http://www.egate-solutions.com/layout/images/egate-solutions_sprite.png?453',
            'url': 'http://www.egate-solutions.com/home',
            'featured': true
        },
        'desc': '#projectDescImakr',
        'techs': [
            {
                'name': 'Bootstrap',
                'logo': '../../../assets/img/svg/skills/bootstrap.svg'
            },
            {
                'name': 'jQuery',
                'logo': '../../../assets/img/svg/skills/jquery.svg'
            },
            {
                'name': 'java',
                'logo': '../../../assets/img/svg/skills/java.svg'
            },
            {
                'name': 'html',
                'logo': '../../../assets/img/svg/skills/html.svg'
            },
            {
                'name': 'CSS',
                'logo': '../../../assets/img/svg/skills/css.svg'
            }
        ],
        'gallery': [],
        'prototypes': [],
        'docs': [],
        'dates': {
            'start': '2016-02-14',
            'end': '2016-03-31'
        },
        'confidentiality': null,
        'url': 'https://www.marlabs.com/',
        'github': null
    },
];


/***/ }),

/***/ "./src/app/shared/data/mock-roles.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/data/mock-roles.ts ***!
  \*******************************************/
/*! exports provided: ROLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLES", function() { return ROLES; });
var ROLES = [{
        'id': '#role6',
        'name': 'Mean stack & UI Architect',
        'category': 'Permanent',
        'company': {
            'name': 'fulfill solutions',
            'logo': 'https://www.fulfillsolutions.com/wp-content/themes/fulfill/assets/images/logo.png',
            'place': 'Chennai (IN)',
            'url': 'https://www.fulfillsolutions.com/',
        },
        'desc': '#Architect',
        'techs': [
            {
                'name': 'Node',
                'logo': 'https://nodejs.org/static/images/logo.svg'
            },
            {
                'name': 'Typescript',
                'logo': '../../../assets/img/svg/skills/typescript.svg'
            },
            {
                'name': 'Scss',
                'logo': 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg'
            },
            {
                'name': 'Draw.io',
                'logo': '../../../assets/img/svg/skills/drawio.svg'
            },
            {
                'name': 'D3.js',
                'logo': '../../../assets/img/svg/skills/d3.svg'
            },
            {
                'name': 'Google Developers',
                'logo': '../../../assets/img/svg/skills/googledev.svg'
            },
            {
                'name': 'Gulp',
                'logo': '../../../assets/img/svg/skills/gulp.svg'
            },
            {
                'name': 'jQuery',
                'logo': '../../../assets/img/svg/skills/jquery.svg'
            },
            {
                'name': 'Sketch',
                'logo': '../../../assets/img/svg/skills/sketch.svg'
            },
            {
                'name': 'AWS',
                'logo': '../../../assets/img/svg/skills/aws.svg'
            }
        ],
        'dates': {
            'start': '2018-02-22',
            'end': ''
        },
        'projects': [
            {
                'id': '#project15',
                'name': 'TravelVisa assistant',
                'image': 'https://www.fulfillsolutions.com/mastercard/assets/images/Logo.svg',
                'url': 'https://www.fulfillsolutions.com/mastercard/dashboard',
            },
            {
                'id': '#project13',
                'name': 'fulfill solutions',
                'image': 'https://www.fulfillsolutions.com/wp-content/themes/fulfill/assets/images/logo.png',
                'url': 'https://www.fulfillsolutions.com/',
            }
        ]
    },
    {
        'id': '#role5',
        'name': 'Mean stack & Java',
        'category': 'Permanent',
        'company': {
            'name': 'Marlabs',
            'logo': 'https://www.marlabs.com/wp-content/uploads/2017/09/marlabs_logo.png',
            'place': 'Bengaluru (IN)',
            'url': 'https://www.marlabs.com//',
        },
        'desc': '#SeniorSoftwareEngineer',
        'techs': [
            {
                'name': 'Node',
                'logo': 'https://nodejs.org/static/images/logo.svg'
            },
            {
                'name': 'Typescript',
                'logo': '../../../assets/img/svg/skills/typescript.svg'
            },
            {
                'name': 'Scss',
                'logo': 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg'
            },
            {
                'name': 'Draw.io',
                'logo': '../../../assets/img/svg/skills/drawio.svg'
            },
            {
                'name': 'D3.js',
                'logo': '../../../assets/img/svg/skills/d3.svg'
            },
            {
                'name': 'Google Developers',
                'logo': '../../../assets/img/svg/skills/googledev.svg'
            },
            {
                'name': 'Gulp',
                'logo': '../../../assets/img/svg/skills/gulp.svg'
            },
            {
                'name': 'jQuery',
                'logo': '../../../assets/img/svg/skills/jquery.svg'
            },
            {
                'name': 'AWS',
                'logo': '../../../assets/img/svg/skills/aws.svg'
            }
        ],
        'dates': {
            'start': '2015-07-20',
            'end': '2018-02-22'
        },
        'projects': [
            {
                'id': '#project15',
                'name': 'mcafe',
                'image': 'https://www.marlabs.com/wp-content/uploads/2017/09/marlabs_logo.png',
                'url': null,
            },
            {
                'id': '#project13',
                'name': 'fulfill solutions',
                'image': 'https://www.marlabs.com/wp-content/uploads/2017/09/marlabs_logo.png',
                'url': null,
            }
        ]
    },
    {
        'id': '#role4',
        'name': 'Mean stack & Java',
        'category': 'Permanent',
        'company': {
            'name': 'Objectstream',
            'logo': 'https://objectstream.com/img/logos/logo.svg',
            'place': 'Kochin (IN)',
            'url': 'https://objectstream.com/',
        },
        'desc': '#AssistantSoftwareEngineer',
        'techs': [
            {
                'name': 'Node',
                'logo': 'https://nodejs.org/static/images/logo.svg'
            },
            {
                'name': 'D3.js',
                'logo': '../../../assets/img/svg/skills/d3.svg'
            },
            {
                'name': 'Gulp',
                'logo': '../../../assets/img/svg/skills/gulp.svg'
            },
            {
                'name': 'jQuery',
                'logo': '../../../assets/img/svg/skills/jquery.svg'
            },
            {
                'name': 'AWS',
                'logo': '../../../assets/img/svg/skills/aws.svg'
            }
        ],
        'dates': {
            'start': '2013-10-13',
            'end': '2015-07-18'
        },
        'projects': [
            {
                'id': '#project15',
                'name': 'yorstain',
                'image': 'https://objectstream.com/img/logos/logo.svg',
                'url': null,
            },
            {
                'id': '#project13',
                'name': 'Objectstream',
                'image': 'https://objectstream.com/img/logos/logo.svg',
                'url': null,
            }
        ]
    },
    {
        'id': '#role3',
        'name': '',
        'category': 'Contract',
        'company': {
            'name': 'FIFOMEDIA',
            'logo': 'https://image.winudf.com/v2/image/Y29tLmZpZm8ubXVzaWNwbGF5ZXJfaWNvbl8wXzk5NzZmYzhm/icon.png?w=170&fakeurl=1&type=.png',
            'place': 'Bengluru (IN)',
            'url': null
        },
        'desc': '#WebSite',
        'techs': [
            {
                'name': 'html',
                'logo': '../../../assets/img/svg/skills/html.svg'
            },
            {
                'name': 'Bootstrap',
                'logo': '../../../assets/img/svg/skills/bootstrap.svg'
            },
            {
                'name': 'jQuery',
                'logo': '../../../assets/img/svg/skills/jquery.svg'
            },
            {
                'name': 'css',
                'logo': '../../../assets/img/svg/skills/css.svg'
            },
            {
                'name': 'javascript',
                'logo': '../../../assets/img/svg/skills/javascript.svg'
            }
        ],
        'dates': {
            'start': '2016-10-01',
            'end': '2016-10-10'
        },
        'projects': [
            {
                'id': '#project10',
                'name': 'FIFOMEDIA',
                'image': 'https://image.winudf.com/v2/image/Y29tLmZpZm8ubXVzaWNwbGF5ZXJfaWNvbl8wXzk5NzZmYzhm/icon.png?w=170&fakeurl=1&type=.png',
                'url': null,
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/data/mock-skills.ts":
/*!********************************************!*\
  !*** ./src/app/shared/data/mock-skills.ts ***!
  \********************************************/
/*! exports provided: SKILLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS", function() { return SKILLS; });
var SKILLS = [
    {
        'id': '#skill34',
        'name': 'Node',
        'featured': true,
        'frequent': true,
        'category': 'Framework',
        'desc': '#skillNode',
        // 'image': '../../../assets/img/svg/skills/node.svg',
        'image': 'assets/img/svg/skills/node.svg',
        'url': 'https://nodejs.org/'
    }, {
        'id': '#skill33',
        'name': 'D3.js',
        'featured': false,
        'frequent': false,
        'category': 'Framework',
        'desc': '#skillD3',
        'image': 'assets/img/svg/skills/d3.svg',
        'url': 'https://d3js.org/'
    },
    {
        'id': '#skill32',
        'name': 'Sketch',
        'featured': false,
        'frequent': false,
        'category': 'Design',
        'desc': '#skillSketch',
        'image': 'assets/img/svg/skills/sketch.svg',
        'url': 'https://www.sketchapp.com/'
    },
    {
        'id': '#skill31',
        'name': 'Amazon Web Services',
        'featured': false,
        'frequent': false,
        'category': 'Back-End',
        'desc': '#skillAws',
        'image': 'assets/img/svg/skills/aws.svg',
        'url': 'https://aws.amazon.com/'
    },
    {
        'id': '#skill30',
        'name': 'Google Developers',
        'featured': false,
        'frequent': false,
        'category': 'Back-End',
        'desc': '#skillGdev',
        'image': 'assets/img/svg/skills/googledev.svg',
        'url': 'https://developers.google.com/'
    },
    {
        'id': '#skill29',
        'name': 'Ionic Pro',
        'featured': false,
        'frequent': false,
        'category': 'Back-End',
        'desc': '#skillIonCloud',
        'image': 'assets/img/svg/skills/ioniccloud.svg',
        'url': 'https://ionicframework.com/pro'
    },
    {
        'id': '#skill15',
        'name': 'Ionic Creator',
        'featured': false,
        'frequent': false,
        'category': 'Design',
        'desc': '#skillCreator',
        'image': 'assets/img/svg/skills/ioniccreator.svg',
        'url': 'http://ionic.io/products/creator'
    },
    {
        'id': '#skill8',
        'name': 'Draw.io',
        'featured': false,
        'frequent': false,
        'category': 'Design',
        'desc': '#skillDrawio',
        'image': 'assets/img/svg/skills/drawio.svg',
        'url': 'https://www.draw.io/'
    },
    {
        'id': '#skill19',
        'name': 'Foundation',
        'featured': false,
        'frequent': false,
        'category': 'Front-End',
        'desc': '#skillFoundation',
        'image': 'assets/img/svg/skills/foundation.svg',
        'url': 'https://en.wikipedia.org/wiki/Foundation_(framework)'
    },
    {
        'id': '#skill28',
        'name': 'Angular.js',
        'featured': true,
        'frequent': true,
        'category': 'Framework',
        'desc': '#skillAngular',
        'image': 'assets/img/svg/skills/angular.svg',
        'url': 'https://en.wikipedia.org/wiki/AngularJS'
    },
    {
        'id': '#skill25',
        'name': 'Typescript',
        'featured': true,
        'frequent': true,
        'category': 'Javascript',
        'desc': '#skillTypescript',
        'image': 'assets/img/svg/skills/typescript.svg',
        'url': 'https://en.wikipedia.org/wiki/TypeScript'
    },
    {
        'id': '#skill24',
        'name': 'jQuery',
        'featured': true,
        'frequent': true,
        'category': 'Javascript',
        'desc': '#skillJquery',
        'image': 'assets/img/svg/skills/jquery.svg',
        'url': 'https://en.wikipedia.org/wiki/JQuery'
    },
    {
        'id': '#skill22',
        'name': 'Sass',
        'featured': true,
        'frequent': true,
        'category': 'Front-End',
        'desc': '#skillSass',
        'image': 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        'url': 'https://en.wikipedia.org/wiki/Sass_(stylesheet_language)'
    },
    {
        'id': '#skill21',
        'name': 'Less',
        'featured': false,
        'frequent': false,
        'category': 'Front-End',
        'desc': '#skillLess',
        'image': 'assets/img/svg/skills/less.svg',
        'url': 'https://en.wikipedia.org/wiki/Less_(stylesheet_language)'
    },
    {
        'id': '#skill20',
        'name': 'Bootstrap',
        'featured': true,
        'frequent': true,
        'category': 'Front-End',
        'desc': '#skillBootstrap',
        'image': 'assets/img/svg/skills/bootstrap.svg',
        'url': 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)'
    },
    {
        'id': '#skill18',
        'name': 'Gulp.js',
        'featured': false,
        'frequent': false,
        'category': 'Front-End',
        'desc': '#skillGulp',
        'image': 'assets/img/svg/skills/gulp.svg',
        'url': 'https://en.wikipedia.org/wiki/Gulp.js'
    },
    {
        'id': '#skill17',
        'name': 'Compass',
        'featured': false,
        'frequent': false,
        'category': 'Framework',
        'desc': '#skillCompass',
        'image': 'assets/img/svg/skills/compass.svg',
        'url': 'http://compass-style.org/'
    },
    {
        'id': '#skill5',
        'name': 'Javascript ES6',
        'featured': true,
        'frequent': true,
        'category': 'Javascript',
        'desc': '#skillJs',
        'image': 'assets/img/svg/skills/javascript.svg',
        'url': 'https://en.wikipedia.org/wiki/JavaScript'
    },
    {
        'id': '#skill4',
        'name': 'CSS',
        'featured': true,
        'frequent': true,
        'category': 'Front-End',
        'desc': '#skillCss',
        'image': 'assets/img/svg/skills/css.svg',
        'url': 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
    },
    {
        'id': '#skill3',
        'name': 'HTML',
        'featured': true,
        'frequent': true,
        'category': 'Front-End',
        'desc': '#skillHtml',
        'image': 'assets/img/svg/skills/html.svg',
        'url': 'https://en.wikipedia.org/wiki/HTML'
    },
    {
        'id': '#skill2',
        'name': 'Java',
        'featured': false,
        'frequent': false,
        'category': 'Front-End',
        'desc': '#skillJava',
        'image': null,
        'url': null
    }
];


/***/ }),

/***/ "./src/app/shared/data/mock-socials.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/data/mock-socials.ts ***!
  \*********************************************/
/*! exports provided: SOCIALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIALS", function() { return SOCIALS; });
var SOCIALS = [{
        'id': '#social8',
        'name': 'LinkedIn',
        'featured': true,
        'image': 'assets/img/svg/socials/linkedin.svg',
        'url': 'https://www.linkedin.com/in/vimal-kovath-88790483/'
    },
    {
        'id': '#social7',
        'name': 'GitHub',
        'featured': true,
        'image': 'assets/img/svg/socials/github.svg',
        'url': 'https://github.com/vimalkovath'
    },
    {
        'id': '#social6',
        'name': 'Udemy',
        'featured': true,
        'image': 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg',
        'url': 'https://www.udemy.com/user/vimalkovath/'
    },
    {
        'id': '#social4',
        'name': 'Stack Overflow',
        'featured': false,
        'image': 'assets/img/svg/socials/stackoverflow.svg',
        'url': 'https://stackoverflow.com/users/3496512/vimalkovath'
    },
    {
        'id': '#social3',
        'name': 'Codepen',
        'featured': false,
        'image': 'assets/img/svg/socials/codepen.svg',
        'url': 'http://codepen.io/vimalkovath/'
    },
    {
        'id': '#social1',
        'name': 'Facebook',
        'featured': false,
        'image': 'assets/img/svg/socials/fb.svg',
        'url': 'https://www.facebook.com/vimal.kovath'
    },
    {
        'id': '#social5',
        'name': 'twitter',
        'featured': false,
        // 'image': '../../../assets/img/svg/socials/twitter.svg',
        'image': 'assets/img/svg/socials/twitter.svg',
        'url': 'https://twitter.com/VimalKovath'
    }
];


/***/ }),

/***/ "./src/app/shared/data/mock-tools.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/data/mock-tools.ts ***!
  \*******************************************/
/*! exports provided: TOOLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLS", function() { return TOOLS; });
var TOOLS = [{
        'id': '#tool17',
        'name': 'Git',
        'featured': false,
        'category': 'Collaborative',
        'desc': 'Version Control System',
        'image': '../../../assets/img/svg/tools/git.svg',
        'url': 'https://en.wikipedia.org/wiki/Git'
    },
    {
        'id': '#tool16',
        'name': 'Dreamweaver',
        'featured': false,
        'category': 'IDE',
        'desc': 'IDE developed by Adobe',
        'image': '../../../assets/img/svg/tools/dreamweaver.svg',
        'url': 'https://en.wikipedia.org/wiki/Adobe_Dreamweaver'
    },
    {
        'id': '#tool13',
        'name': 'Evernote',
        'featured': false,
        'category': 'Project Management',
        'desc': 'Tool for taking notes',
        'image': '../../../assets/img/svg/tools/evernote.svg',
        'url': 'https://en.wikipedia.org/wiki/Evernote'
    },
    {
        'id': '#tool10',
        'name': 'NPM',
        'featured': true,
        'category': 'Package Manager',
        'desc': 'Default package manager for every project',
        'image': '../../../assets/img/svg/tools/npm.svg',
        'url': 'https://en.wikipedia.org/wiki/Npm_(software)'
    },
    {
        'id': '#tool9',
        'name': 'Microsoft Office',
        'featured': false,
        'category': 'Collaborative',
        'desc': 'Cloud service & Desktop Softwares',
        'image': '../../../assets/img/svg/tools/office.svg',
        'url': 'https://en.wikipedia.org/wiki/Microsoft_Office'
    },
    {
        'id': '#tool8',
        'name': 'Slack',
        'featured': false,
        'category': 'Collaborative',
        'desc': 'Cloud service',
        'image': '../../../assets/img/svg/tools/slack.svg',
        'url': 'https://en.wikipedia.org/wiki/Slack_Technologies'
    },
    {
        'id': '#tool7',
        'name': 'Trello',
        'featured': false,
        'category': 'Project Management',
        'desc': 'Kanban based project management tool',
        'image': '../../../assets/img/svg/tools/trello.svg',
        'url': 'https://en.wikipedia.org/wiki/Trello'
    },
    {
        'id': '#tool6',
        'name': 'Google Drive',
        'featured': false,
        'category': 'Collaborative',
        'desc': 'Cloud service',
        'image': '../../../assets/img/svg/tools/googledrive.svg',
        'url': 'https://en.wikipedia.org/wiki/Google_Drive'
    },
    {
        'id': '#tool5',
        'name': 'Atlassian',
        'featured': true,
        'category': 'Collaborative',
        'desc': 'Suite of tools: BitBucket, Jira, Sourcetree and so on',
        'image': '../../../assets/img/svg/tools/atlassian.svg',
        'url': 'https://en.wikipedia.org/wiki/Atlassian'
    },
    {
        'id': '#tool4',
        'name': 'GitHub',
        'featured': true,
        'category': 'Collaborative',
        'desc': 'Web & Destktop Git UI tool',
        'image': '../../../assets/img/svg/tools/github.svg',
        'url': 'https://en.wikipedia.org/wiki/GitHub'
    },
    {
        'id': '#tool1',
        'name': 'Atom',
        'featured': true,
        'category': 'IDE',
        'desc': 'Powerful, flexible and free IDE developed by GitHub',
        'image': '../../../assets/img/svg/tools/atom.svg',
        'url': 'https://en.wikipedia.org/wiki/Atom_(text_editor)'
    },
    {
        'id': '#tool1',
        'name': 'Visual Studio Code',
        'featured': true,
        'category': 'IDE',
        'desc': 'Powerful, flexible and free IDE developed by Microsoft for Windows',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg',
        'url': 'https://code.visualstudio.com/'
    }
];


/***/ }),

/***/ "./src/app/shared/pipes/ellipsis/ellipsis.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/ellipsis/ellipsis.pipe.ts ***!
  \********************************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EllipsisPipe = /** @class */ (function () {
    function EllipsisPipe() {
    }
    /**
     * If no text: displays placehoder
     * If text exists and number max of chars not defined, returns text
     * If text exists and number max of chars defined but text is not long enough, returns text
     * If text exists and number max of chars defined and text is longer, returns sliced text with an ellipsis
     *
     * @param val
     * @param maxChar
     * @returns {string}
     */
    EllipsisPipe.prototype.transform = function (val, maxChar) {
        if (val) {
            return maxChar === undefined ?
                val : val.length > maxChar ?
                val.substring(0, maxChar) + '...' : val;
        }
        else {
            return 'No description';
        }
    };
    EllipsisPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ellipsis',
            pure: false
        })
    ], EllipsisPipe);
    return EllipsisPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filter/filter.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/filter/filter.pipe.ts ***!
  \****************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * we want to sort the items which the condition
     * match the "visible" keyword AND is not empty AND exists
     *
     * @param {Array<any>} items
     * @param {{[p: string]: any}} conditions
     * @returns {Array<any>}
     */
    FilterPipe.prototype.transform = function (items, conditions) {
        return items.filter(function (item) {
            for (var field in conditions) {
                if (item[field] !== conditions[field]
                    && conditions[field] !== '' && conditions[field]) {
                    return false;
                }
            }
            return true;
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/pipes.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ellipsis_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ellipsis/ellipsis.pipe */ "./src/app/shared/pipes/ellipsis/ellipsis.pipe.ts");
/* harmony import */ var _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/filter.pipe */ "./src/app/shared/pipes/filter/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _ellipsis_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__["EllipsisPipe"],
                _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"]
            ],
            exports: [
                _ellipsis_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__["EllipsisPipe"],
                _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/shared/pipes/pipes.module.ts");
/* harmony import */ var _translations_translations_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translations/translations.module */ "./src/app/translations/translations.module.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _components_cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cookie-banner/cookie-banner.component */ "./src/app/shared/components/cookie-banner/cookie-banner.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/details-modal/details-modal.component */ "./src/app/shared/components/details-modal/details-modal.component.ts");
/* harmony import */ var _components_preview_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/preview/preview.component */ "./src/app/shared/components/preview/preview.component.ts");
/* harmony import */ var _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/filters/filters.component */ "./src/app/shared/components/filters/filters.component.ts");
/* harmony import */ var _components_img_modal_img_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/img-modal/img-modal.component */ "./src/app/shared/components/img-modal/img-modal.component.ts");
/* harmony import */ var _components_list_preview_list_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/list-preview/list-preview.component */ "./src/app/shared/components/list-preview/list-preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
                _translations_translations_module__WEBPACK_IMPORTED_MODULE_4__["TranslationsModule"]
            ],
            declarations: [
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _components_cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_6__["CookieBannerComponent"],
                _components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_9__["DetailsModalComponent"],
                _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_11__["FiltersComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_img_modal_img_modal_component__WEBPACK_IMPORTED_MODULE_12__["ImgModalComponent"],
                _components_list_preview_list_preview_component__WEBPACK_IMPORTED_MODULE_13__["ListPreviewComponent"],
                _components_preview_preview_component__WEBPACK_IMPORTED_MODULE_10__["PreviewComponent"]
            ],
            exports: [
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _components_cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_6__["CookieBannerComponent"],
                _components_details_modal_details_modal_component__WEBPACK_IMPORTED_MODULE_9__["DetailsModalComponent"],
                _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_11__["FiltersComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_img_modal_img_modal_component__WEBPACK_IMPORTED_MODULE_12__["ImgModalComponent"],
                _components_list_preview_list_preview_component__WEBPACK_IMPORTED_MODULE_13__["ListPreviewComponent"],
                _components_preview_preview_component__WEBPACK_IMPORTED_MODULE_10__["PreviewComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/translations/constants/lang-eng.ts":
/*!****************************************************!*\
  !*** ./src/app/translations/constants/lang-eng.ts ***!
  \****************************************************/
/*! exports provided: LANG_ENG_NAME, LANG_ENG_TRANS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_ENG_NAME", function() { return LANG_ENG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_ENG_TRANS", function() { return LANG_ENG_TRANS; });
var LANG_ENG_NAME = 'eng';
var titles = {
    'homePage': [
        'Some brands I have worked for',
        'Main skills',
        'Overview of my experiences',
        'Want to reach me?'
    ],
    'aboutPage': [
        'Performant frontend techs serve the user',
        'A design driven approach',
        'Toolbox',
        'Workflow and process',
        'Hobbies'
    ]
};
var LANG_ENG_TRANS = {
    /*** COMMON ***/
    'at': 'at',
    'in': 'in',
    'for': 'for',
    'to': 'to',
    'as': 'as',
    'present': 'present',
    'some': 'Some',
    /*** Main Titles ***/
    'Home': 'Home',
    'About me': 'About me',
    'Projects': 'Projects',
    'Education': 'Education',
    'Experience': 'Experience',
    'Skills': 'Skills',
    'Details': 'Details',
    'Cookie policy': 'Cookie policy',
    'Terms & conditions': 'Terms & conditions',
    /*** RECURRENT TITLES ***/
    'skills': 'Skills',
    'projects': 'Projects',
    'subjects': 'Subjects',
    'gallery': 'Gallery',
    /*** BUTTONS ***/
    'agree': 'I agree',
    'why': 'Why',
    'more-info': 'More Info',
    'more': 'More',
    'live': 'See Live',
    /*** DISCLAIMERS ***/
    'confidential': 'This project is under confidentiality clause. Images, Prototypes and Docs cannot be disclosed.',
    'cookie': "I use cookies to ease your journey and experience on this portfolio.\n            However I need your consent beforehand.",
    /*** HOME ***/
    // Titles
    'homeTitle0': titles.homePage[0], 'homeTitle1': titles.homePage[1],
    'homeTitle2': titles.homePage[2], 'homeTitle3': titles.homePage[3],
    // Texts
    'homeText0': "Hi! My name is Vimal. I am a Front-End developer specialised into Javascript Angular and Node technologies.\n                I am also a Meanstack and java developer.",
    'homeText1': "My expertise as a developer and as a ui developer comes from my hackathons and\n                especially my professional experiences in these fields.",
    'homeText2': "I live in Bengaluru since February 2018, where I got the opportunity to sharpen my skills as well as my\n                knowledge.",
    'homeText3': 'Want to hear more about my:',
    'homeText4': "I worked with clients from various industries: Airline, Social community, healthcare, Food , manpower\n                ... I know the expectations in terms of ui elemets may vary a lot from one to another\n               regarding their respective cultures (corporate, national\u2026). I have also been involved into the conception\n               hackathons of products related to IoT, insurtech and banking among others. The diversity of\n               these experiences helped me for broadening my ability to adapt to any kind of project.",
    'homeText5': "I am available in Bengaluru area. For any request, the best way to contact me is via Email:",
    // Buttons
    'homeBtn0': 'Dev Practices',
    'homeBtn1': 'UI Practices',
    'homeBtn2': 'Projects',
    'homeBtn3': 'Details',
    /*** ABOUT ME ***/
    // Titles
    'aboutTitle0': titles.aboutPage[0], 'aboutTitle1': titles.aboutPage[1],
    'aboutTitle2': titles.aboutPage[2], 'aboutTitle3': titles.aboutPage[3],
    'aboutTitle4': titles.aboutPage[4], 'aboutTitle5': titles.aboutPage[5],
    'aboutTitle6': titles.aboutPage[6], 'aboutTitle7': 'Some related skills:',
    // Texts
    'aboutText0': "The first techs I learned were HTML, CSS, JavaScript, Angular,bootstrap ,foundation ,\n                 node, Java, node, mysql,sailsjs, ionic, Mongodb, groovy and oracle . I slightly decided\n                to focus more on frontend technologies and to lean towards sophisticated JS frameworks as well as CSS\n                pre-processors like Sass. I usually rely on the official documentation of Angular and Node to stay\n                up to date. When I need to learn a new technology, Udemy and youtube is my go to solution as a starting point.",
    'aboutText1': "I try to keep informed about the latest UI reports and practices.\n                My favorite fields are definitely Interaction and Interface Development. I use these skills to build\n                user-centred and consistent interfaces.",
    'aboutText2': "I believe having an tested and agreed Developemnt (as much as possible) before any implementation is key.\n                Assumptions and guessings based on a proper interpretation of a client\u2019s need can help in certain\n                situations and if they are not overused. I also consider having the right tools for any task or project\n                is an investment worth if we aim to deliver a product of quality and to avoid delays.",
    /*** PROJECTS ***/
    // Descs
    '#projectDescHce': "Showcase WordPress website for an association of southern France hairdressers and estheticians.\n                      I served as UI Developer, mockups and POC with ngular and node.\n                      I had a lot of autonomy and could even work remotely from time to time.",
    '#projectDescPortfolioV1': "First portfolio realised during  the design may sound awkward\n                              but at least I managed to make it through!",
    '#projectDescPortfolioV2': "My second open souce project, Its under developement , i am building all the components for that \n                             its in angular 6 and angular material compo.",
    '#projectDescPortfolio3': "This portfolio has been realised with Angular 6 and its inspired from a designer portfolio named kevin.",
    '#projectDescDigitela': "Corporate website of my first company. I was working on it in parallel of the clients'\n                            projects when I had spare time. It was based on php, angular and the design was pretty basic\n                            without that much of content. My role has been to rebuild the information architecture.",
    '#projectDescApags': "Website for an bank related to 500 years of celebration. It has been my first web project for an\n                        external client. It was for my internship during my intenship year at Objectstream.\n                         I had a lot of autonomy for the design,development and the communication with my employer and\n                        the client has been great. Unfortunately the project is for 6 month duration \n                         and the website does not exist anymore.",
    '#projectDescEukiyo': "E-Ukiyo is an artistic contents sharing platform I created as an individual student project during\n                        my bachelor year in Webdesign. I first presented the designs to a jury, composed of my teachers.\n                        Then I developed it with Wordpress. The platform offers many profiles of users and artists\n                        can upload their works. The name refers to the japanese artworks called ukiyo-e and the aim\n                        was to attract mostly designers specialised into japonist art.",
    '#projectDescC2I': "C2I R\u00E9seaux is an educational contents sharing platform made for student project in group.\n                      It was supposed to allow teachers involved into the C2I (Internet & Computing Certicate)\n                      to share their contents (courses, videos conference, podcasts) between themselves and\n                      with the students. I cumulated both the roles of project manager and front-end dev in this project.\n                      It was built on Wordpress but has unfortunately been cancelled because of the merging of\n                      the regions Burgundy and Franche-Comt\u00E9 and therefore of their respective universities.",
    '#projectDescImakr': "Rebuilding iMakr's E-Commerce platform has been my very first project after I arrived in London.\n                        This website is selling 3D printing industry related products and they wanted to revamp\n                        the overall design to make it more accessible to newcomers in this industry. Also it was\n                        necessary to make the navigation and checkout process easier for the professionals.\n                        My role has been to create a new design and present my ideas via complete mockups for each pages\n                        and components. Then turning them into prototypes by using local HTML/CSS/jQuery pages.\n                        Once agreed I ended up starting to develop.",
    '#projectDescMMF': "MyMiniFactory, a subsidiary of iMakr, aims to provide a 3D printed contents/models sharing platform\n                      for 3D designers and passionates. This application was more complex than iMakr's one because\n                      the site is supposed to offer lot more interactions with the different contents and user\n                      profiles. My role has been similar to my contribution to iMakr. Creating new designs,\n                      mocking-up/prototyping my ideas for each page and component before starting the development.",
    '#projectDescDoxy': "Doxy.me is an innovative telemedecine solution of which the company is based\n                      in Provo (USA - Utah). This app aims to offer the best possible experience to the patient and\n                      doctors. I have worked remotely for them as an Angular/Ionic consultant.",
    '#projectDescDnG': "An iOS ERP app for a Central London Real Estate Agent. The app is built with the framework Ionic\n                      in a way it communicates with their desktop ERP through a common API. It has been developed in a\n                      way to handle different user profiles and rights. I had to intervene into the design process,\n                      especially the latest phases and obviously in taking the responsibility of building the front-end\n                      structure (templates, components, stylesheets) from scratch.",
    '#projectDescLloyds': "An IoT app for iOS. It has been my first mobile app project built with the framework Ionic.\n                         Its purpose is to offer the possibility to gather the data from many connected objects, display\n                         and interact with them within one hub application. I have been involved in the design and\n                         development process. I built all the frontend architecture from top to bottom.",
    '#projectDescEis': "My role had to serve three purposes. First  creating and implementing a new design for their\n                      portal dedicated to brokers and underwriters. Then fixing many issues related to the old front-end\n                      implementation (misuse of bootstrap and Sass). Finally I had to keep on with the evolutions\n                      required by the client.",
    '#projectDescMsa': "My role on this project has mostly been to fix UI issues, refactoring some templates as well as\n                      creating new ones.",
    '#projectDescSurely': "Regarding an upcoming event in which my company was due to participate I had to to work\n                        on its new website. Albeit the project was already running for three months before I started being\n                        involved, it had become necessary to wrap it up it within a short scope. I ended up adding the\n                        missing contents and styles for the pages. I also reorganised the way the info was displayed\n                        (everything was hard coded, no usage of posts). Finally I installed the plugins for SEO and\n                        migration. As well as created one for the Analytics.",
    '#projectDescFulfill': "We embarked upon our Innovation journey with the aim to disrupt the current scenario in Travel, \n                          with a clear goal of easing the pain points of the Traveler. Rather than an expanding portfolio, we focused\n                           on removing the confusion and cumbersome processes that the Traveler faces in travel planning.\n  .",
    /*** ROLES ***/
    // Descs
    '#roleDescSurely': "As Frontend Developer and interaction designer, my role is first and foremost to produce\n                      prototypes of applications as well as UI assets. Then implementing these designs, once validated,\n                      thanks to the hybrid mobile framework Ionic,\n                      built upon Cordova and Angular.",
    '#roleDescDoxy': "I have been hired as consultant to review their existing Ionic 1 app and to give guidelines\n                    about what could be done to make the project more maintainable .",
    '#roleDescMmf': "MyMiniFactory is the subsidiary of iMakr, which I worked for\n                  previously. My role this time was to implement the design I\n                  produced earlier into its Symfony platform with Foundation and jQuery.\n                  From time to time I had to create/improve UI contents.",
    '#roleDescImakr': "During my time as Frontend developer and UX designer in iMakr,\n                    I had to produce the new designs for the websites of the\n                    company and its subsidiary MyMiniFactory. Then implementing the\n                    iMakr's one into its Prestashop platform with Bootstrap and jQuery.",
    '#roleDescDigitela': "My first professional experience as a developer and a designer.\n                      I was mostly working on the mockups and the conception of our\n                      clients' websites with Wordpress. My main task has been to\n                      define the graphical identity of my company's website.",
    '#roleDescMedasys': "I helped the medical staffs of the University Hospital of\n                      Montpellier (France), during the deployment of the new HIS\n                      software DxCare. It has been one of my first awareness about how\n                      user experience could have an impact on the workflow of a team.",
    /*** HOBBIES ***/
    // Names
    '#hobbyDrawing': "Drawing",
    '#hobbyChess': "Chess",
    '#hobbyCricket': "Cricket",
    '#hobbyCulture': "Travelling & History",
    '#hobbyReading': "Reading",
    '#hobbyBadminton': "Badminton",
    // Descs
    '#hobbyDescDrawing': "Pencil drawing when ever i have time",
    '#hobbyDescChess': "Playing online chess with unknown members.",
    '#hobbyDescCricket': "Cricket is always a refreshment game for me ",
    '#hobbyDescCulture': "I love visiting countries with a deep historical background, interesting architecture and\n                        monuments. I am not really travelling to rest but rather to discover as much as I can from\n                        the place I visit and its culture.",
    '#hobbyDescReading': "Reading motivational books ...",
    '#hobbyDescBadminton': "Love to play with friends.",
    /*** Skills ***/
    '#skillAngular': "One of the main Javascript Front-End frameworks. I really like the way it has evolved since the 1st\n                    version. It is obviously the Javascript framework I decided to make my speciality of.",
    '#skillIonic': "Hybrid mobile app framework I started to get my hand on after joining Surely Group. It is based upon\n                  Angular and Cordova.",
    '#skillNode': "Node.js is an open source server environment.",
    '#skillCordova': "Hybrid mobile app framework upon which Ionic is built. I had to learn it to implement some\n                    native functionalities.",
    '#skillTypescript': "Javascript superset I had to learn when I moved from Angular 1 to Angular 2. I really like how\n                      clean and how object oriented friendly this language is.",
    '#skillJquery': "Javascript library I use quite a lot for many projects. I started to learn it at university.\n                  It is also quite useful for high fidelity HTML/CSS prototypes.",
    '#skillSymfony': "A PHP framework on which many projects I worked on are based.",
    '#skillSass': "My favorite CSS pre-processor. I built the stylesheets of many projects from scratch thanks to it.\n                It really eases the management of stylesheets thanks to the mechanics of mixins, class extensions and so...",
    '#skillLess': "Another CSS pre-processor I learned by curiosity.",
    '#skillBootstrap': "The CSS framework I am the most used to. The release of the 4th version had been long awaited.",
    '#skillFoundation': "Another CSS framework I worked on a lot while working on MyMiFactory platform.",
    '#skillGulp': "My go to code compiler. I use it mostly for Sass compilation, minification and linting javascript.",
    '#skillCompass': "A Sass compiler which has been abandoned since. I moved to Gulp since.",
    '#skillAxure': "An useful tool for quick prototyping & wireframing. I used it on many projects and learned it at\n                  university.",
    '#skillCreator': "Prototyping tool based on Ionic I used a few times.",
    '#skillXd': "Prototyping tool I mostly got my hand on by curiosity.",
    '#skillIllus': "My favourite vector graphics tool. It is my best solution to build high fidelity and scalable\n                  mockups or UI assets as quickly as possible.",
    '#skillPhotoshop': "I was using this tool way before Illustrator and today I use it to edit raster graphics mostly",
    '#skillIndesign': "A good tool to create brochure and documentation of high quality.",
    '#skillEdge': "It was supposed to succeed to Flash. Unfortunately the requirement for javascript experience\n                    did not attract Flash users. However I found it really interesting and scalable.",
    '#skillFlash': "A technology that always fascinated me. A lot of people were making fun about it at the very end but\n                  I believe it really brought webdesign standards of quality to a next level in the past.",
    '#skillDrawio': "Helps for creating diagrams and technical design documentation. Probably one of the few free\n                  solutions I would suggest. Its implementation with Google Drive is pretty neat.",
    '#skillWp': "The CMS I am the most used to. Based upon PHP and MySQL.",
    '#skillPresta': "A CMS for E-Commerce I used mostly at iMakr for my first project in UK.",
    '#skillJs': "This popular async language has become an everyday one for me. ES 6 has brought great things.",
    '#skillCss': "This stylesheet language has been my first step into frontend.",
    '#skillHtml': "The inevitable markup language everybody (believe to) know.",
    '#skillPhp': "Even though I am frontend I already had my hand on it and this experience helped a lot when moving to\n                Typescript who has a quite similar syntax.",
    '#skillSql': "One of the most popular database language I used alongside of PHP.",
    '#skillSketch': "Simplified version of Illustrator using a great ecosystem of third party plugins.",
    '#skillAws': "Cloud services platform I used to implement storage and analytics to an Ionic app.",
    '#skillIonCloud': "Cloud services platform offering a great library of API, services and test tools for Ionic apps.",
    '#skillD3': "A javascript library offering many chart interfaces (pie/bar chart...) to display data. I especially\n              learned it to use dc.js which combines d3.js and crossfilters.js.",
    '#skillGdev': "Suite of API & tools from Google. I mostly used Google Analytics/Charts/Fonts in previous projects",
    /*** DIPLOMAS ***/
    // Names
    '#diplomaCs': "Udemy Certifications",
    '#diplomaLp': "BTech",
    '#diplomaDut': "Diploma",
    '#diplomaDu': "VHSC",
    '#diplomaBac': "School",
};


/***/ }),

/***/ "./src/app/translations/constants/lang-esp.ts":
/*!****************************************************!*\
  !*** ./src/app/translations/constants/lang-esp.ts ***!
  \****************************************************/
/*! exports provided: LANG_ESP_NAME, LANG_ESP_TRANS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_ESP_NAME", function() { return LANG_ESP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_ESP_TRANS", function() { return LANG_ESP_TRANS; });
var LANG_ESP_NAME = 'esp';
var LANG_ESP_TRANS = {
    'hello world': 'hola mundo',
};


/***/ }),

/***/ "./src/app/translations/constants/lang-fra.ts":
/*!****************************************************!*\
  !*** ./src/app/translations/constants/lang-fra.ts ***!
  \****************************************************/
/*! exports provided: LANG_FRA_NAME, LANG_FRA_TRANS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_FRA_NAME", function() { return LANG_FRA_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_FRA_TRANS", function() { return LANG_FRA_TRANS; });
var LANG_FRA_NAME = 'fra';
var titles = {
    'homePage': [
        'Quelques marques pour lesquelles j\'ai travaillé',
        'Compétences clés',
        'Résumé de mes expériences',
        'Prendre contact?'
    ],
    'aboutPage': [
        'Une veille technologique constante',
        'Le design en premier plan',
        'Outils de travail',
        'Méthodes de travail et approche',
        'Centres d\'intérêt'
    ]
};
var LANG_FRA_TRANS = {
    /*** COMMON ***/
    'at': 'à',
    'in': 'en',
    'for': 'pour',
    'to': 'à',
    'as': 'comme',
    'present': 'aujourd\'hui',
    'some': 'Quelques',
    /*** Main Titles ***/
    'Home': 'Accueil',
    'About me': 'Bio',
    'Projects': 'Projets',
    'Education': 'Dîplomes',
    'Experience': 'Expérience',
    'Skills': 'Compétences',
    'Details': 'Détails',
    'Cookie policy': 'Politique de cookies',
    'Terms & conditions': 'Termes & conditions',
    /*** RECURRENT TITLES ***/
    'skills': 'Compétences',
    'projects': 'Projets',
    'subjects': 'Matières',
    'gallery': 'Gallerie',
    /*** BUTTONS ***/
    'agree': 'J\'accepte',
    'why': 'Pourquoi',
    'more-info': 'Infos',
    'more': 'Détails',
    'live': 'Voir Live',
    /*** DISCLAIMERS ***/
    'confidential': "Ce projet est soumis \u00E0 une clause de confidentialit\u00E9.\n                   Aucune image, prototype ou documentation ne peut \u00EAtre d\u00E9voil\u00E9e.",
    'cookie': "J'utilise les cookies afin d'am\u00E9liorer votre navigation et votre exp\u00E9rience sur mon portfolio.\n             Cependant j'ai besoin de votre permission en premier.",
    /*** HOME ***/
    // Titles
    'homeTitle0': titles.homePage[0], 'homeTitle1': titles.homePage[1],
    'homeTitle2': titles.homePage[2], 'homeTitle3': titles.homePage[3],
    // Texts
    'homeText0': "Salut! Je m'appelle Vimal. En tant que d\u00E9velopeur, les technologies \n                Angular et Ionic sont ma sp\u00E9cialit\u00E9. Alors qu'en tant que designer, les domaines du \n                design d'interaction et d'interface sont mes domaine de pr\u00E9dilection.",
    'homeText1': "Mon expertise en tant que d\u00E9veloppeur et designer est issue de mon background acad\u00E9mique mais aussi et\n                surtout de mes exp\u00E9riences professionnelles dans ces domaines.",
    'homeText2': "Je vis sur Londres depuis F\u00E9vrier 2016. Sur place, j'ai eu l'opportunit\u00E9 de d\u00E9velopper mes comp\u00E9tences\n                ainsi que mon relationnel avec les clients et mes coll\u00E8gues.",
    'homeText3': 'En savoir plus à propos de mes:',
    'homeText4': "J\u2019ai eu la chance de travailler avec des clients issus de diff\u00E9rents secteurs: bancaire, assurance,\n                imprimerie 3D, sant\u00E9, immobilier\u2026 Je suis conscient que les attentes en termes de design peuvent varier\n                de l\u2019un \u00E0 l\u2019autre  en fonction de leur culture respective (d\u2019entreprise, nationale\u2026). J\u2019ai aussi \u00E9t\u00E9\n                impliqu\u00E9 dans la conception de produits li\u00E9s aux objets connect\u00E9s, l\u2019insurtech, l\u2019e-commerce, le partage\n                de contenus parmi tant d\u2019autres. La diversit\u00E9 de ces exp\u00E9riences m\u2019a aid\u00E9 \u00E0 \u00E9largir ma capacit\u00E9 \u00E0\n                m\u2019adapter \u00E0 tout type de projet.",
    'homeText5': "Je suis disponible dans les alentours de Londres. Pour toutes requ\u00EAtes, les meilleurs moyens de me\n                contacter sont soit via LinkedIn, soit via email:",
    //Buttons
    'homeBtn0': 'Pratiques Dev',
    'homeBtn1': 'Pratiques UX',
    'homeBtn2': 'Projets',
    'homeBtn3': 'Coordonnées',
    /*** ABOUT ME ***/
    // Titles
    'aboutTitle0': titles.aboutPage[0], 'aboutTitle1': titles.aboutPage[1],
    'aboutTitle2': titles.aboutPage[2], 'aboutTitle3': titles.aboutPage[3],
    'aboutTitle4': titles.aboutPage[4], 'aboutTitle5': titles.aboutPage[5],
    'aboutTitle6': titles.aboutPage[6], 'aboutTitle7': 'Quelques compétences associées:',
    // Texts
    'aboutText0': "Les premi\u00E8res technologies que j'ai apprises \u00E9taient le HTML, CSS, JavaScript, SQL ainsi que PHP.\n                J'ai depuis d\u00E9cid\u00E9 de me focaliser sur les technologies frontend ainsi que sur l'utilisation de\n                frameworks Javascript sophistiqu\u00E9s et de pr\u00E9-processeurs CSS comme Sass. Je me r\u00E9f\u00E8re essentiellement\n                aux documentations d\u2019Angular et Ionic pour rester \u00E0 jour. Quand j\u2019ai besoin d\u2019apprendre une nouvelle\n                technologie, Codeschool est souvent mon point de d\u00E9part.",
    'aboutText1': "J'essaie autant que possible de rester \u00E0 jour en ce qui concerne\n                les derni\u00E8res \u00E9tudes et pratiques en termes d'UX. Celles pr\u00F4n\u00E9es par le Nielsen & Norman Group\n                sont mes r\u00E9f\u00E9rences principales d'ailleurs. Je suis aussi les documentations d\u2019UXPin et de Smashing\n                Magazine. Mes domaines favoris sont clairement le Design d'Interaction et d'Interface. J'utilise ces\n                comp\u00E9tences afin de produire des interfaces consistentes et centr\u00E9es utilisateur.",
    'aboutText2': "Je pense qu\u2019avoir un design approuv\u00E9 et test\u00E9 (autant que possible) avant toute phase de d\u00E9veloppement\n                 est n\u00E9cessaire. Supposer et deviner peut aider si et seulement si le besoin du client est correctement\n                 interpr\u00E9t\u00E9 et si ces approches ne se r\u00E9v\u00E8lent pas trop souvent r\u00E9currentes. Je consid\u00E8re aussi qu\u2019avoir\n                 les outils ad\u00E9quates pour toute t\u00E2che ou projet est un investissement obligatoire si notre objectif et\n                 de d\u00E9livrer un produit de qualit\u00E9 et d\u2019\u00E9viter les retards.",
    /*** PROJECTS ***/
    // Descs
    '#projectDescHce': "Site vitrine pour une association de coiffeurs et esth\u00E9ticiens bas\u00E9s dans le Sud de la France.\n                      Mon r\u00F4le \u00E9tait celui de designer d'interface, consistant \u00E0 produire des zonings, maquettes et\n                      \u00E9l\u00E9ments graphiques avec Illustrator et Photoshop. J'ai eu beaucoup d'autonomie et pouvais m\u00EAme\n                      avancer en t\u00E9l\u00E9travail quelquefois.",
    '#projectDescPortfolioV1': "Premier portfolio r\u00E9alis\u00E9 durant ma premi\u00E8re ann\u00E9e \u00E0 l'IUT fait avec Flash et HTML/CSS.\n                              Flash n'\u00E9tait pas encore une technologie obsol\u00E8te \u00E0 l'\u00E9poque et j'avais toujours souhait\u00E9\n                              cr\u00E9er un site enti\u00E9rement bas\u00E9 dessus. Aujourd'hui le design peut para\u00EEtre quelque peu\n                              non-orthodoxe mais j'aurais atteint mon objectif au moins!",
    '#projectDescPortfolioV2': "Mon deuxi\u00E8me portfolio, r\u00E9alis\u00E9 pendant mon ann\u00E9e de licence pro avec Edge Animate\n                              et CSS3. A cette \u00E9poque, Edge \u00E9tait une tentative par Adobe pour remplacer Flash par une\n                              technologie bas\u00E9e sur jQuery. Cela fonctionne toujours sur tous les navigateurs.",
    '#projectDescPortfolio3': "Ce portfolio a \u00E9t\u00E9 r\u00E9alis\u00E9 avec Angular 2, Bootstrap et Gulp initialement puis migr\u00E9 vers la version 6\n                             r\u00E9cemment; Gulp n'\u00E9tant plus n\u00E9cessaire par cons\u00E9quent. Ce projet a \u00E9t\u00E9 aussi une opportunit\u00E9 d'apprentissage\n                             des bonnes pratiques sur Angular. La majorit\u00E9 des \u00E9l\u00E9ments visuels m'appartiennent et sont en format SVG.\n                             Je pr\u00E9vois de remplacer Bootstrap par Angular Material dans les mois qui viennent. Etant donn\u00E9 que le premier\n                             a une tr\u00E8s mauvaise synergie avec Angular, me for\u00E7ant \u00E0 utiliser des scripts jQuery additionels afin de\n                             compenser l'absence de certaines int\u00E9ractions que m\u00EAme le plugin npm ngx-bootstrap ne pouvait corriger. Mon\n                             plan est de me d\u00E9barasser de cette d\u00E9pendance \u00E0 jQuery aussi.",
    '#projectDescDigitela': "Le site vitrine de mon premier employeur. Je travaillais dessus en parall\u00E8le des projets de\n                            nos clients sur mon temps libre. Il s'agissait d'un site Wordpress et le design \u00E9tait plut\u00F4t\n                            basique sans trop de contenus. Mon r\u00F4le a \u00E9t\u00E9 de revoir l'architecture de l'information, puis\n                            cr\u00E9er une identit\u00E9 graphique via la conception d'\u00E9l\u00E9ments graphiques avec Illustrator et\n                            Photoshop avant toute impl\u00E9mentation avec Wordpress.",
    '#projectDescApags': "Site pour une association associ\u00E9e \u00E0 la recherche contre le cancer. Cela aura \u00E9t\u00E9 mon premier\n                        projet destin\u00E9 \u00E0 un client ext\u00E9rieur et aura fait l\u2019objet de mon stage de derni\u00E8re ann\u00E9e d\u2019IUT.\n                        J\u2019ai eu beaucoup d\u2019autonomie en ce qui concerne le design et la communication avec mon employeur\n                        ainsi que le client \u00E9tait super. Malheureusement l\u2019association n\u2019existe plus depuis et de m\u00EAme\n                        pour le site web.",
    '#projectDescEukiyo': "E-Ukiyo est une platform de partage de contenus artistiques que j\u2019ai con\u00E7ue pour mon projet\n                        individuel \u00E9tudiant durant mon ann\u00E9e de licence en webdesign. J\u2019ai en premier lieu pr\u00E9sent\u00E9 mes\n                        designs \u00E0 un jury compos\u00E9 de mes professeurs avant de d\u00E9marrer le d\u00E9veloppement avec wordpress.\n                        Le site offre plusieurs profils d\u2019utilisateur et les artistes peuvent uploader leurs\n                        r\u00E9alisations. Le nom fait r\u00E9f\u00E9rence aux artworks japonais appel\u00E9s ukiyo-e et le but est\n                        d\u2019attirer les designers sp\u00E9cialistes en art japoniste. ",
    '#projectDescC2I': "C2I R\u00E9seaux est une plate-forme de partage de contenus \u00E9ducatifs ayant fait l\u2019objet d\u2019un projet\n                      \u00E9tudiant de groupe. Elle \u00E9tait suppos\u00E9e permettre aux professeurs impliqu\u00E9s dans le C2I de\n                      partager leurs contenus (le\u00E7ons, vid\u00E9os conf\u00E9rences, podcasts) entre eux et avec les \u00E9tudiants.\n                      J\u2019ai cumul\u00E9 les r\u00F4les de chef de projet et d\u2019int\u00E9grateur web dans ce projet. Ce dernier \u00E9tait\n                      construit avec Wordpress mais a malheureusement d\u00FB \u00EAtre annul\u00E9 d\u00FB \u00E0 la fusion des r\u00E9gion de\n                      Bourgogne et de Franch-Comt\u00E9 et de leurs universit\u00E9s respectives \u00E0 l\u2019\u00E9poque.",
    '#projectDescImakr': "Refondre la plate-forme e-commerce d\u2019iMakr a \u00E9t\u00E9 mon premier projet apr\u00E8s mon arriv\u00E9 \u00E0 Londres.\n                        Ce site est d\u00E9di\u00E9 \u00E0 la vente de produits associ\u00E9s \u00E0 l\u2019imprimerie 3D et il fallait revoir\n                        enti\u00E8rement la charte graphique afin de le rendre plus accessibles pour les n\u00E9ophytes. Il \u00E9tait\n                        aussi n\u00E9cessaire de rendre la navigation et la proc\u00E9dure de paiement plus ais\u00E9e pour les\n                        professionnels. Mon r\u00F4le aura \u00E9t\u00E9 de concevoir le nouveau design ainsi que pr\u00E9senter mes id\u00E9es\n                        au travers de maquettes pour chaque page et composante. Apr\u00E8s quoi je devais les convertir en\n                        prototypes HTML/CSS/jQuery. Une fois valid\u00E9s j\u2019ai pu d\u00E9marrer le d\u00E9veloppement.",
    '#projectDescMMF': "MyMiniFactory, une filiale d\u2019iMakr, a pour but de fournir une plate-forme de partage de contenus\n                      et mod\u00E8les 3D \u00E0 imprimer pour les designers 3D et les passionn\u00E9s. Ce projet \u00E9tait l\u00E9g\u00E8rement plus\n                      complexe que celui d\u2019iMakr car il \u00E9tait suppos\u00E9 offrir plus de possibilit\u00E9s d'interaction avec les\n                      diff\u00E9rents contenus et les profils des autres utilisateurs. Mon r\u00F4le \u00E9tait similaire \u00E0 celui que\n                      j\u2019occupais avec iMakr. Consistant \u00E0 cr\u00E9er de nouveaux designs, maquettes et prototypes avant de\n                      d\u00E9marrer le d\u00E9veloppement.",
    '#projectDescDoxy': "Doxy.me est une solution de t\u00E9l\u00E9m\u00E9decine innovante dont le si\u00E8ge social est bas\u00E9 \u00E0 Provo\n                      (USA - Utah). Cette application a pour but d\u2019offrir la meilleure exp\u00E9rience possible aux patients\n                      et aux docteurs. Je t\u00E9l\u00E9-travaillais pour eux en tant que consultant Angular/Ionic.",
    '#projectDescDnG': "Une application iOS ERP pour une agence immobili\u00E8re du centre de Londres. Elles est construite \u00E0\n                      partir du framework Ionic de mani\u00E8re \u00E0 communiquer avec leurs postes clients \u00C0 travers une API.\n                      Elle a aussi \u00E9t\u00E9 d\u00E9velopp\u00E9e de mani\u00E8re \u00E0 g\u00E9rer plusieurs profils utilisateurs et droits. Je suis\n                      intervenu dans les phases de designs (tardivement) et ai pris la responsabilit\u00E9 de construire la\n                      structure frontend  (templates, components, stylesheets) \u00E0 partir de z\u00E9ro.",
    '#projectDescLloyds': "Une application d\u2019objets connect\u00E9s pour iOS. Cela aura \u00E9t\u00E9 mon premier projet d\u2019application\n                        mobile avec le framework Ionic. Sa finalit\u00E9 est d\u2019offrir la possibilit\u00E9 de rassembler les\n                        donn\u00E9es envoy\u00E9es par divers objets connect\u00E9s, les afficher et interagir avec via une seule\n                        application. J\u2019ai \u00E9t\u00E9 impliqu\u00E9 dans les processus de design et de d\u00E9veloppement. J\u2019ai construit\n                        toute l\u2019architecture frontend du d\u00E9but \u00E0 la fin.",
    '#projectDescEis': "Mon r\u00F4le aura servi 3 buts. Tout d\u2019abord de cr\u00E9er impl\u00E9menter un nouveau design pour leur portail\n                      d\u00E9di\u00E9 aux courtiers et assureurs. Ensuite corriger certains probl\u00E8mes issus \u00E0 une pr\u00E9c\u00E9dente\n                      mauvaise impl\u00E9mentation frontend (mauvaise utilisation de bootstrap et de Sass). Finalement j\u2019ai\n                      d\u00FB poursuivre les \u00E9volutions futures du site.",
    '#projectDescMsa': "Ici, ma fonction aura principalement \u00E9t\u00E9 de corriger certaines erreurs relatives au frontend,\n                      reconstruire et cr\u00E9er certaines pages.",
    '#projectDescSurely': "En regard d\u2019un \u00E9v\u00E9nement imminent auquel mon entreprise allait prendre part, j\u2019ai eu \u00E0\n                        travailler sur son nouveau site vitrine. Bien que le projet eut \u00E9t\u00E9 d\u00E9j\u00E0 en cours pour plus de\n                        trois mois avant que je sois impliqu\u00E9 dedans, il \u00E9tait devenu n\u00E9cessaire de le boucler au plus\n                        vite. J\u2019ai alors d\u00FB ajouter les contenus et styles manquants pour chaque page. J\u2019ai aussi\n                        r\u00E9organis\u00E9 la fa\u00E7on dont l\u2019information \u00E9tait int\u00E9gr\u00E9e. Enfin J\u2019ai install\u00E9 les plugins pour le\n                        SEO et la migration. J\u2019ai aussi cr\u00E9\u00E9 un plugin afin d\u2019int\u00E9grer Google Analytics.",
    '#projectDescIutMtp': "Mon premier projet en tant qu'\u00E9tudiant. Le but \u00E9tait de cr\u00E9er un nouveau site de pr\u00E9sentation\n                        de l\u2019IUT de Montpellier. Ce site a \u00E9t\u00E9 con\u00E7u 2 ans avant la standardisation d\u2019HTML5 en groupe de\n                        trois. Par cons\u00E9quent il para\u00EEtra s\u00FBrement d\u00E9pass\u00E9 et basique selon les standards actuels mais\n                        cela aura \u00E9t\u00E9 un grand pas en avant pour notre groupe \u00E0 l\u2019\u00E9poque.",
    /*** ROLES ***/
    // Descs
    '#roleDescSurely': "En tant que d\u00E9veloppeur frontend et designer d'interaction, mon r\u00F4le est\n                      de produire des prototypes d'applications ainsi que des \u00E9l\u00E9ments\n                      graphiques. Puis impl\u00E9menter ces designs, une fois valid\u00E9s,\n                      gr\u00E2ce au framework mobile hybrid Ionic. Bas\u00E9 sur les technologies\n                      Cordova et Angular.",
    '#roleDescDoxy': "Mon r\u00F4le \u00E9tait de corrig\u00E9s certains probl\u00E8mes li\u00E9s \u00E0 l'aspect\n                    frontend et Xcode, ainsi qu'installer certains plugins Cordova.",
    '#roleDescMmf': "MyMiniFactory est la filiale d'iMakr, pour lesquels j'ai travaill\u00E9\n                  pr\u00E9c\u00E9dement. Mon r\u00F4le cette fois a \u00E9t\u00E9 d'int\u00E9grer le design que j'ai produits\n                  quelques temps auparavant dans la plate-forme Symfony gr\u00E2ce aux technologies\n                  Foundation et jQuery. J'\u00E9tais aussi charg\u00E9 de la cr\u00E9ation et optimisation\n                  des contenus graphiques.",
    '#roleDescImakr': "Durant ma p\u00E9riode comme Frontend developer et UX designer \u00E0 iMakr,\n                    j'ai eu \u00E0 produire les nouveaux designs pour les sites de\n                    l'entreprise et de sa filiale MyMiniFactory. Puis impl\u00E9menter celui\n                    d'iMakr dans sa plate-forme Prestashop d\u00E9di\u00E9e gr\u00E2ce aux technologies\n                    Bootstrap et jQuery.",
    '#roleDescDigitela': "Ma premi\u00E8re experience professionelle en tant que d\u00E9veloppeur\n                      et designer. Je travaillais essentiellement sur les maquettes\n                      ainsi que la conception des sites de nos clients avec Wordpress.\n                      Ma t\u00E2che principale aura \u00E9t\u00E9 de d\u00E9finir l'identit\u00E9 graphique\n                      du site de mon employeur.",
    '#roleDescMedasys': "Ma mission \u00E9tait de r\u00E9pondre aux probl\u00E9matiques rencontr\u00E9es\n                      par le personnel m\u00E9dical du CHU de Montpellier lors du d\u00E9ploiement\n                      du nouveau SIH DxCare. Cela aura \u00E9t\u00E9 ma premi\u00E8re prise de conscience\n                      \u00E0 propos du d\u00E9gr\u00E9 d'impact que peut avoir l'UX sur la\n                      productivit\u00E9 d'une \u00E9quipe.",
    /*** HOBBIES ***/
    // Names
    '#hobbyCollect': "Collections",
    '#hobbyModding': "Modding",
    '#hobbyScuba': "Plong\u00E9e",
    '#hobbyCulture': "Voyages & Histoire",
    '#hobbyWindsurf': "Planche \u00E0 Voile",
    '#hobbyHockey': "Hockey sur glace",
    // Descs
    '#hobbyDescCollect': "Collectionne dans plusieurs domaines depuis mon enfance et surtout les cartes \u00E0 \u00E9changer. Je ne\n                        les ai jamais r\u00E9ellement jou\u00E9es car la plupart du temps que j\u2019en avais des nouvelles elles\n                        atterrissaient directement dans un album. I collectionne surtout celles avec une illustration\n                        int\u00E9ressante. Cette passion pour les collections a toujours \u00E9t\u00E9 un truc de famille.",
    '#hobbyDescModding': "Premiers pas en tant que dev en cr\u00E9ant des scripts gr\u00E2ce aux toolsets. J\u2019ai toujours aim\u00E9 avoir\n                        un rendu visuel inh\u00E9rent \u00E0 mon code et c\u2019est la raison principale pour laquelle j\u2019ai d\u00E9cid\u00E9 de\n                        devenir d\u00E9veloppeur frontend.",
    '#hobbyDescScuba': "Pratique depuis longtemps et je suis d\u00E9tenteur d\u2019un niveau 3 CMAS. La plong\u00E9e m\u2019a appris\n                      l\u2019importance du travail d\u2019\u00E9quipe consid\u00E9rant le risque relatif au fait de plonger seul. Sous l\u2019eau\n                      nous devons veiller les uns sur les autres afin de nous pr\u00E9munir de tout danger. Nous devons aussi\n                      accorder de notre attention \u00E0 plusieurs param\u00E8tres. Mes plong\u00E9es favorites ont eu lieu \u00E0 Malte.",
    '#hobbyDescCulture': "J\u2019aime visiter des pays dot\u00E9s d\u2019une riche histoire, architecture et de plusieurs monuments. Je\n                        ne voyage pas vraiment pour me reposer mais plus pour d\u00E9couvrir autant que je peux de ce que\n                        l\u2019endroit que je visite a \u00E0 m\u2019offrir et de sa culture.",
    '#hobbyDescWindsurf': "J\u2019avais l\u2019habitude d\u2019en faire souvent quand je vivais dans le sud de la France. Cependant c\u2019est\n                         devenu plut\u00F4t difficile de continuer \u00E0 pratiquer depuis que j\u2019ai boug\u00E9 sur Londres...",
    '#hobbyDescHockey': "Je suis la NHL depuis mon enfance. Fan des Red Wings malgr\u00E9 qu'ils ne soient plus ce qu'ils\n                       \u00E9taient depuis quelques ann\u00E9es maintenant.",
    /*** Skills ***/
    '#skillAngular': "Un des principaux frameworks frontend Javascript. J'aime la fa\u00E7on dont il a \u00E9volu\u00E9 depuis la\n                    version 1. J'ai bien \u00E9videment d\u00E9cid\u00E9 d'en faire ma sp\u00E9cialit\u00E9.",
    '#skillIonic': "Un framework mobile hybride auquel j'ai \u00E9t\u00E9 introduit en joignant Surely. Bas\u00E9\n                  sur les technologies Ionic et Angular",
    '#skillCordova': "Un framework mobile hybride \u00E0 partir duquel Ionic est construit. M'a permis d'impl\u00E9menter certaines\n                    fonctionnalit\u00E9s natives",
    '#skillTypescript': "Un superset Javascript que j'ai appris pour transiter d'Angular 1 \u00E0 Angular 2. Je trouve ce langage\n                      relativement propre and favorable au d\u00E9veloppement orient\u00E9 object",
    '#skillJquery': "Une librairie Javascript que j'utilise dans plusieurs projets et que j'ai commenc\u00E9 \u00E0 apprendre \u00E0\n                  l'universit\u00E9. Se r\u00E9v\u00E8le aussi utile pour produire des prototypes HTML/CSS.",
    '#skillSymfony': "Un framework PHP \u00E0 partir duquel plusieurs de mes projets sont bas\u00E9s.",
    '#skillSass': "Mon pre-processeur CSS favoris. J'ai construit les feuilles de styles de plusieurs projets gr\u00E2ce \u00E0 lui.",
    '#skillLess': "Un autre pre-processeur CSS que j'ai appris par curiosit\u00E9.",
    '#skillBootstrap': "Le framework CSS auquel je suis le plus habitu\u00E9. J'ai attendu avec impatience La sortie de la version 4.",
    '#skillFoundation': "Un autre framework CSS avec lequel j'ai travaill\u00E9 pour la plateforme de MyMiFactory.",
    '#skillGulp': "Mon compilateur de code favoris. Je l'utilise essentiellement pour compiler, minifier et linter mes\n                fichiers Javascript et Sass.",
    '#skillCompass': "Un compilateur Sass dont le d\u00E9veloppement a cess\u00E9. J'utilise Gulp depuis.",
    '#skillAxure': "Un outil de prototypage et de maquettage rapide. Je l'au utilis\u00E9 pour plusieurs projet et je le ma\u00EEtrise\n                  depuis l'universit\u00E9.",
    '#skillCreator': "Un outil de prototypage bas\u00E9 sur Ionic que j'ai quelquefois utilis\u00E9.",
    '#skillXd': "Un outil de prototypage que j'ai appris par curiosit\u00E9.",
    '#skillIllus': "Mon outil de graphisme vectoriem favoris. Parfait pour cr\u00E9er des maquettes et des \u00E9l\u00E9ments d'interface\n                  de qualit\u00E9, modulables et de fa\u00E7on productive.",
    '#skillPhotoshop': "J'utilisais cet outil bien avant Illustrator. Aujourd'hui je l'utilise essentiellement pour \u00E9diter\n                      des \u00E9l\u00E9ments graphiques pixellis\u00E9s.",
    '#skillIndesign': "Un excellent logiciel pour cr\u00E9er des brochures etd es documentations de qualit\u00E9.",
    '#skillEdge': "Ce logiciel \u00E9tait cens\u00E9 succ\u00E9der \u00E0 Flash. Malheureusement le fait qu'il n\u00E9cessite une certaine ma\u00EEtrise\n                du javascript n'\u00E9tait pas du go\u00FBt des utilisateurs de Flash.",
    '#skillFlash': "Une technologie qui m'a toujours fascin\u00E9. Beaucoup l'ont tourn\u00E9 en d\u00E9rision vers la fin mais\n                  je pense qu'elle a r\u00E9ellement port\u00E9 le webdesign vers un autre niveau de qualit\u00E9 \u00E0 l'\u00E9poque",
    '#skillDrawio': "Permet de cr\u00E9er des diagrammes et des documentations techniques. Probablement une des rares solutions\n                  gratuites que je pourrais sugg\u00E8rerer de par sa combinaison avec Google Drive..",
    '#skillWp': "Le CMS auquel je suis le plus habitu\u00E9. Bas\u00E9 sur PHP et MySQL.",
    '#skillPresta': "Un CMS pour l'E-Commerce que j'ai surtout utilis\u00E9 \u00E0 iMakr pour mon premier projet \u00E0 Londres.",
    '#skillJs': "Ce langage asynchrone est devenu une langue de tous les jours pour moi. ES 6 a beaucoup apport\u00E9.",
    '#skillCss': "Ce langage pour feuilles de styles ma accompagn\u00E9 durant mes premiers pas d'int\u00E9grateur web.",
    '#skillHtml': "Le langage de balisage que tout le monde conna\u00EEt.",
    '#skillPhp': "M\u00EAme si je suis int\u00E9grateur web, j'ai d\u00E9j\u00E0 \u00E9t\u00E9 amen\u00E9 \u00E0 utiliser ce langage \u00E0 plusieurs reprises et cela\n                m'a servi quand j'ai eu \u00E0 apprendre Typescript qui a une syntaxe similaire.",
    '#skillSql': "Un des langages de base de donn\u00E9es les plus populaire.",
    '#skillSketch': "Une version simplif\u00E9e d'Illustrator exploitant une vaste librairie de plugins tiers.",
    '#skillAws': "Plate-forme de services cloud que j'ai utilis\u00E9e pour int\u00E9grer des services de stockage de donn\u00E9es et\n                d'analytics dans une application Ionic",
    '#skillIonCloud': "Plate-forme de services cloud offrant une librairie de services et d'outils de test pour\n                    applications Ionic.",
    '#skillD3': "Une librairies Javascript permettant d'afficher des donn\u00E9es tiers sous plusieurs formats graphiques\n              (camemberts, graphs...). J'ai d\u00FB apprendre \u00E0 m'en servir pour pouvoir utiliser la librairie dc.js qui\n              repose sur les librairie d3.js et crossfilters.js.",
    '#skillGdev': "\u00C9ventail d'API et d'outils mis \u00E0 disposition par Google. J'ai surtout \u00E9t\u00E9 amen\u00E9 \u00E0 utiliser Google\n                Analytics/Charts/Fonts dans mes projets.",
    /*** DIPLOMAS ***/
    // Names
    '#diplomaNng': "Certification UX NNG",
    '#diplomaCs': "Certifications CodeSchool",
    '#diplomaLp': "Licence professionelle Webdesign",
    '#diplomaDut': "DUT M\u00E9tiers du Multimedia et de l'Internet",
    '#diplomaDu': "Dipl\u00F4me Universitaire Webmaster",
    '#diplomaBac': "Bac Scientifique",
};


/***/ }),

/***/ "./src/app/translations/constants/lang-ita.ts":
/*!****************************************************!*\
  !*** ./src/app/translations/constants/lang-ita.ts ***!
  \****************************************************/
/*! exports provided: LANG_ITA_NAME, LANG_ITA_TRANS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_ITA_NAME", function() { return LANG_ITA_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_ITA_TRANS", function() { return LANG_ITA_TRANS; });
var LANG_ITA_NAME = 'ita';
var LANG_ITA_TRANS = {
    'hello world': 'ciao mondo',
};


/***/ }),

/***/ "./src/app/translations/constants/translation.ts":
/*!*******************************************************!*\
  !*** ./src/app/translations/constants/translation.ts ***!
  \*******************************************************/
/*! exports provided: TRANSLATIONS, TRANSLATION_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATIONS", function() { return TRANSLATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATION_PROVIDERS", function() { return TRANSLATION_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lang_eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang-eng */ "./src/app/translations/constants/lang-eng.ts");
/* harmony import */ var _lang_fra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang-fra */ "./src/app/translations/constants/lang-fra.ts");
/* harmony import */ var _lang_esp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang-esp */ "./src/app/translations/constants/lang-esp.ts");
/* harmony import */ var _lang_ita__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang-ita */ "./src/app/translations/constants/lang-ita.ts");

// import translations




// translation token
var TRANSLATIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('translations');
// all translations
var dictionary = (_a = {},
    _a[_lang_eng__WEBPACK_IMPORTED_MODULE_1__["LANG_ENG_NAME"]] = _lang_eng__WEBPACK_IMPORTED_MODULE_1__["LANG_ENG_TRANS"],
    _a[_lang_fra__WEBPACK_IMPORTED_MODULE_2__["LANG_FRA_NAME"]] = _lang_fra__WEBPACK_IMPORTED_MODULE_2__["LANG_FRA_TRANS"],
    _a[_lang_esp__WEBPACK_IMPORTED_MODULE_3__["LANG_ESP_NAME"]] = _lang_esp__WEBPACK_IMPORTED_MODULE_3__["LANG_ESP_TRANS"],
    _a[_lang_ita__WEBPACK_IMPORTED_MODULE_4__["LANG_ITA_NAME"]] = _lang_ita__WEBPACK_IMPORTED_MODULE_4__["LANG_ITA_TRANS"],
    _a);
// providers
var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
var _a;


/***/ }),

/***/ "./src/app/translations/pipe/translations.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/translations/pipe/translations.pipe.ts ***!
  \********************************************************/
/*! exports provided: TranslationsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationsPipe", function() { return TranslationsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_translations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/translations.service */ "./src/app/translations/service/translations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // our translate service
var TranslationsPipe = /** @class */ (function () {
    function TranslationsPipe(translate) {
        this.translate = translate;
    }
    TranslationsPipe.prototype.transform = function (value, args) {
        if (!value) {
            return;
        }
        return this.translate.instant(value);
    };
    TranslationsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'translate',
            pure: false // impure pipe allows updating value when we change language
        }),
        __metadata("design:paramtypes", [_service_translations_service__WEBPACK_IMPORTED_MODULE_1__["TranslationsService"]])
    ], TranslationsPipe);
    return TranslationsPipe;
}());



/***/ }),

/***/ "./src/app/translations/service/translations.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/translations/service/translations.service.ts ***!
  \**************************************************************/
/*! exports provided: TranslationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationsService", function() { return TranslationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/translation */ "./src/app/translations/constants/translation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

 // import our opaque token
var TranslationsService = /** @class */ (function () {
    // inject our translations
    function TranslationsService(_translations) {
        this._translations = _translations;
    }
    Object.defineProperty(TranslationsService.prototype, "currentLang", {
        get: function () {
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslationsService.prototype.use = function (lang) {
        // set current language
        this._currentLang = lang;
    };
    TranslationsService.prototype.translate = function (key) {
        // private perform translation
        var translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    };
    TranslationsService.prototype.instant = function (key) {
        // call translation
        return this.translate(key);
    };
    TranslationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_constants_translation__WEBPACK_IMPORTED_MODULE_1__["TRANSLATIONS"])),
        __metadata("design:paramtypes", [Object])
    ], TranslationsService);
    return TranslationsService;
}());



/***/ }),

/***/ "./src/app/translations/translations.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/translations/translations.module.ts ***!
  \*****************************************************/
/*! exports provided: TranslationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationsModule", function() { return TranslationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _constants_translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/translation */ "./src/app/translations/constants/translation.ts");
/* harmony import */ var _pipe_translations_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipe/translations.pipe */ "./src/app/translations/pipe/translations.pipe.ts");
/* harmony import */ var _service_translations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/translations.service */ "./src/app/translations/service/translations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Constants

// Pipe

// Service

var TranslationsModule = /** @class */ (function () {
    function TranslationsModule() {
    }
    TranslationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_pipe_translations_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslationsPipe"]],
            exports: [_pipe_translations_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslationsPipe"]],
            providers: [
                _constants_translation__WEBPACK_IMPORTED_MODULE_2__["TRANSLATION_PROVIDERS"],
                _service_translations_service__WEBPACK_IMPORTED_MODULE_4__["TranslationsService"],
            ]
        })
    ], TranslationsModule);
    return TranslationsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    'firebaseConfig': {
        apiKey: "AIzaSyCK28sW9fJUoGMl_nEJFk9aldCckRgPtlQ",
        authDomain: "vimal-kovath.firebaseapp.com",
        databaseURL: "https://vimal-kovath.firebaseio.com",
        projectId: "vimal-kovath",
        storageBucket: "vimal-kovath.appspot.com",
        messagingSenderId: "889587033678"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/flipkart/2019/portfolio/vimalkovath.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map