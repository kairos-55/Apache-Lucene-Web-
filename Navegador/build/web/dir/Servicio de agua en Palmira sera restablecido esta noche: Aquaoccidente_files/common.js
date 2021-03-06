/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["publicWebpackJsonp"];
/******/ 	window["publicWebpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		12:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.9.1
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2013-2-4
	 */
	(function( window, undefined ) {
	
	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//"use strict";
	var
		// The deferred used on DOM ready
		readyList,
	
		// A central reference to the root jQuery(document)
		rootjQuery,
	
		// Support: IE<9
		// For `typeof node.method` instead of `node.method !== undefined`
		core_strundefined = typeof undefined,
	
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,
		location = window.location,
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$,
	
		// [[Class]] -> type pairs
		class2type = {},
	
		// List of deleted data cache ids, so we can reuse them
		core_deletedIds = [],
	
		core_version = "1.9.1",
	
		// Save a reference to some core methods
		core_concat = core_deletedIds.concat,
		core_push = core_deletedIds.push,
		core_slice = core_deletedIds.slice,
		core_indexOf = core_deletedIds.indexOf,
		core_toString = class2type.toString,
		core_hasOwn = class2type.hasOwnProperty,
		core_trim = core_version.trim,
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			return new jQuery.fn.init( selector, context, rootjQuery );
		},
	
		// Used for matching numbers
		core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	
		// Used for splitting on whitespace
		core_rnotwhite = /\S+/g,
	
		// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		// Match a standalone tag
		rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	
		// JSON RegExp
		rvalidchars = /^[\],:{}\s]*$/,
		rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
		rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		},
	
		// The ready event handler
		completed = function( event ) {
	
			// readyState === "complete" is good enough for us to call the dom ready in oldIE
			if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
				detach();
				jQuery.ready();
			}
		},
		// Clean-up method for dom ready events
		detach = function() {
			if ( document.addEventListener ) {
				document.removeEventListener( "DOMContentLoaded", completed, false );
				window.removeEventListener( "load", completed, false );
	
			} else {
				document.detachEvent( "onreadystatechange", completed );
				window.detachEvent( "onload", completed );
			}
		};
	
	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: core_version,
	
		constructor: jQuery,
		init: function( selector, context, rootjQuery ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;
	
						// scripts is true for back-compat
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );
	
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[2] ) {
								return rootjQuery.find( selector );
							}
	
							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return rootjQuery.ready( selector );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		},
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		// The number of elements contained in the matched element set
		size: function() {
			return this.length;
		},
	
		toArray: function() {
			return core_slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num == null ?
	
				// Return a 'clean' array
				this.toArray() :
	
				// Return just the object
				( num < 0 ? this[ this.length + num ] : this[ num ] );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},
	
		ready: function( fn ) {
			// Add the callback
			jQuery.ready.promise().done( fn );
	
			return this;
		},
	
		slice: function() {
			return this.pushStack( core_slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},
	
		end: function() {
			return this.prevObject || this.constructor(null);
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: core_push,
		sort: [].sort,
		splice: [].splice
	};
	
	// Give the init function the jQuery prototype for later instantiation
	jQuery.fn.init.prototype = jQuery.fn;
	
	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}
	
		// extend jQuery itself if only one argument is passed
		if ( length === i ) {
			target = this;
			--i;
		}
	
		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend({
		noConflict: function( deep ) {
			if ( window.$ === jQuery ) {
				window.$ = _$;
			}
	
			if ( deep && window.jQuery === jQuery ) {
				window.jQuery = _jQuery;
			}
	
			return jQuery;
		},
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready );
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger("ready").off("ready");
			}
		},
	
		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},
	
		isArray: Array.isArray || function( obj ) {
			return jQuery.type(obj) === "array";
		},
	
		isWindow: function( obj ) {
			return obj != null && obj == obj.window;
		},
	
		isNumeric: function( obj ) {
			return !isNaN( parseFloat(obj) ) && isFinite( obj );
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return String( obj );
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ core_toString.call(obj) ] || "object" :
				typeof obj;
		},
	
		isPlainObject: function( obj ) {
			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			try {
				// Not own constructor property must be Object
				if ( obj.constructor &&
					!core_hasOwn.call(obj, "constructor") &&
					!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
					return false;
				}
			} catch ( e ) {
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}
	
			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
	
			var key;
			for ( key in obj ) {}
	
			return key === undefined || core_hasOwn.call( obj, key );
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		// data: string of html
		// context (optional): If specified, the fragment will be created in this context, defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		parseHTML: function( data, context, keepScripts ) {
			if ( !data || typeof data !== "string" ) {
				return null;
			}
			if ( typeof context === "boolean" ) {
				keepScripts = context;
				context = false;
			}
			context = context || document;
	
			var parsed = rsingleTag.exec( data ),
				scripts = !keepScripts && [];
	
			// Single tag
			if ( parsed ) {
				return [ context.createElement( parsed[1] ) ];
			}
	
			parsed = jQuery.buildFragment( [ data ], context, scripts );
			if ( scripts ) {
				jQuery( scripts ).remove();
			}
			return jQuery.merge( [], parsed.childNodes );
		},
	
		parseJSON: function( data ) {
			// Attempt to parse using the native JSON parser first
			if ( window.JSON && window.JSON.parse ) {
				return window.JSON.parse( data );
			}
	
			if ( data === null ) {
				return data;
			}
	
			if ( typeof data === "string" ) {
	
				// Make sure leading/trailing whitespace is removed (IE can't handle it)
				data = jQuery.trim( data );
	
				if ( data ) {
					// Make sure the incoming data is actual JSON
					// Logic borrowed from http://json.org/json2.js
					if ( rvalidchars.test( data.replace( rvalidescape, "@" )
						.replace( rvalidtokens, "]" )
						.replace( rvalidbraces, "")) ) {
	
						return ( new Function( "return " + data ) )();
					}
				}
			}
	
			jQuery.error( "Invalid JSON: " + data );
		},
	
		// Cross-browser xml parsing
		parseXML: function( data ) {
			var xml, tmp;
			if ( !data || typeof data !== "string" ) {
				return null;
			}
			try {
				if ( window.DOMParser ) { // Standard
					tmp = new DOMParser();
					xml = tmp.parseFromString( data , "text/xml" );
				} else { // IE
					xml = new ActiveXObject( "Microsoft.XMLDOM" );
					xml.async = "false";
					xml.loadXML( data );
				}
			} catch( e ) {
				xml = undefined;
			}
			if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
				jQuery.error( "Invalid XML: " + data );
			}
			return xml;
		},
	
		noop: function() {},
	
		// Evaluates a script in a global context
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data );
				} )( data );
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );
	
			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				}
	
			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				}
			}
	
			return obj;
		},
	
		// Use native String.trim function wherever possible
		trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
			function( text ) {
				return text == null ?
					"" :
					core_trim.call( text );
			} :
	
			// Otherwise use our own trimming functionality
			function( text ) {
				return text == null ?
					"" :
					( text + "" ).replace( rtrim, "" );
			},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					core_push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			var len;
	
			if ( arr ) {
				if ( core_indexOf ) {
					return core_indexOf.call( arr, elem, i );
				}
	
				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
	
				for ( ; i < len; i++ ) {
					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}
	
			return -1;
		},
	
		merge: function( first, second ) {
			var l = second.length,
				i = first.length,
				j = 0;
	
			if ( typeof l === "number" ) {
				for ( ; j < l; j++ ) {
					first[ i++ ] = second[ j ];
				}
			} else {
				while ( second[j] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, inv ) {
			var retVal,
				ret = [],
				i = 0,
				length = elems.length;
			inv = !!inv;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				retVal = !!callback( elems[ i ], i );
				if ( inv !== retVal ) {
					ret.push( elems[ i ] );
				}
			}
	
			return ret;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];
	
			// Go through the array, translating each of the items to their
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret[ ret.length ] = value;
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret[ ret.length ] = value;
					}
				}
			}
	
			// Flatten any nested arrays
			return core_concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = core_slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
			var i = 0,
				length = elems.length,
				bulk = key == null;
	
			// Sets many values
			if ( jQuery.type( key ) === "object" ) {
				chainable = true;
				for ( i in key ) {
					jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
				}
	
			// Sets one value
			} else if ( value !== undefined ) {
				chainable = true;
	
				if ( !jQuery.isFunction( value ) ) {
					raw = true;
				}
	
				if ( bulk ) {
					// Bulk operations run against the entire set
					if ( raw ) {
						fn.call( elems, value );
						fn = null;
	
					// ...except when executing function values
					} else {
						bulk = fn;
						fn = function( elem, key, value ) {
							return bulk.call( jQuery( elem ), value );
						};
					}
				}
	
				if ( fn ) {
					for ( ; i < length; i++ ) {
						fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
					}
				}
			}
	
			return chainable ?
				elems :
	
				// Gets
				bulk ?
					fn.call( elems ) :
					length ? fn( elems[0], key ) : emptyGet;
		},
	
		now: function() {
			return ( new Date() ).getTime();
		}
	});
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );
	
			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
	
			// If IE event model is used
			} else {
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );
	
				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );
	
				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;
	
				try {
					top = window.frameElement == null && document.documentElement;
				} catch(e) {}
	
				if ( top && top.doScroll ) {
					(function doScrollCheck() {
						if ( !jQuery.isReady ) {
	
							try {
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll("left");
							} catch(e) {
								return setTimeout( doScrollCheck, 50 );
							}
	
							// detach all dom ready events
							detach();
	
							// and execute any waiting functions
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise( obj );
	};
	
	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});
	
	function isArraylike( obj ) {
		var length = obj.length,
			type = jQuery.type( obj );
	
		if ( jQuery.isWindow( obj ) ) {
			return false;
		}
	
		if ( obj.nodeType === 1 && length ) {
			return true;
		}
	
		return type === "array" || type !== "function" &&
			( length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj );
	}
	
	// All jQuery objects should point back to these
	rootjQuery = jQuery(document);
	// String to Object options format cache
	var optionsCache = {};
	
	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
			// Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( list && ( !fired || stack ) ) {
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	jQuery.extend({
	
		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var action = tuple[ 0 ],
									fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = core_slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
						if( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}
	
			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	});
	jQuery.support = (function() {
	
		var support, all, a,
			input, select, fragment,
			opt, eventName, isSupported, i,
			div = document.createElement("div");
	
		// Setup
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	
		// Support tests won't run in some limited or non-browser environments
		all = div.getElementsByTagName("*");
		a = div.getElementsByTagName("a")[ 0 ];
		if ( !all || !a || !all.length ) {
			return {};
		}
	
		// First batch of tests
		select = document.createElement("select");
		opt = select.appendChild( document.createElement("option") );
		input = div.getElementsByTagName("input")[ 0 ];
	
		a.style.cssText = "top:1px;float:left;opacity:.5";
		support = {
			// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
			getSetAttribute: div.className !== "t",
	
			// IE strips leading whitespace when .innerHTML is used
			leadingWhitespace: div.firstChild.nodeType === 3,
	
			// Make sure that tbody elements aren't automatically inserted
			// IE will insert them into empty tables
			tbody: !div.getElementsByTagName("tbody").length,
	
			// Make sure that link elements get serialized correctly by innerHTML
			// This requires a wrapper element in IE
			htmlSerialize: !!div.getElementsByTagName("link").length,
	
			// Get the style information from getAttribute
			// (IE uses .cssText instead)
			style: /top/.test( a.getAttribute("style") ),
	
			// Make sure that URLs aren't manipulated
			// (IE normalizes it by default)
			hrefNormalized: a.getAttribute("href") === "/a",
	
			// Make sure that element opacity exists
			// (IE uses filter instead)
			// Use a regex to work around a WebKit issue. See #5145
			opacity: /^0.5/.test( a.style.opacity ),
	
			// Verify style float existence
			// (IE uses styleFloat instead of cssFloat)
			cssFloat: !!a.style.cssFloat,
	
			// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
			checkOn: !!input.value,
	
			// Make sure that a selected-by-default option has a working selected property.
			// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
			optSelected: opt.selected,
	
			// Tests for enctype support on a form (#6743)
			enctype: !!document.createElement("form").enctype,
	
			// Makes sure cloning an html5 element does not cause problems
			// Where outerHTML is undefined, this still works
			html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",
	
			// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
			boxModel: document.compatMode === "CSS1Compat",
	
			// Will be defined later
			deleteExpando: true,
			noCloneEvent: true,
			inlineBlockNeedsLayout: false,
			shrinkWrapBlocks: false,
			reliableMarginRight: true,
			boxSizingReliable: true,
			pixelPosition: false
		};
	
		// Make sure checked status is properly cloned
		input.checked = true;
		support.noCloneChecked = input.cloneNode( true ).checked;
	
		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<9
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	
		// Check if we can trust getAttribute("value")
		input = document.createElement("input");
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";
	
		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	
		// #11217 - WebKit loses check when the name is after the checked attribute
		input.setAttribute( "checked", "t" );
		input.setAttribute( "name", "t" );
	
		fragment = document.createDocumentFragment();
		fragment.appendChild( input );
	
		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		support.appendChecked = input.checked;
	
		// WebKit doesn't clone checked state correctly in fragments
		support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<9
		// Opera does not clone events (and typeof div.attachEvent === undefined).
		// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
		if ( div.attachEvent ) {
			div.attachEvent( "onclick", function() {
				support.noCloneEvent = false;
			});
	
			div.cloneNode( true ).click();
		}
	
		// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
		// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
		for ( i in { submit: true, change: true, focusin: true }) {
			div.setAttribute( eventName = "on" + i, "t" );
	
			support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
		}
	
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		// Run tests that need a body at doc ready
		jQuery(function() {
			var container, marginDiv, tds,
				divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				body = document.getElementsByTagName("body")[0];
	
			if ( !body ) {
				// Return for frameset docs that don't have a body
				return;
			}
	
			container = document.createElement("div");
			container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
	
			body.appendChild( container ).appendChild( div );
	
			// Support: IE8
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			tds = div.getElementsByTagName("td");
			tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
			isSupported = ( tds[ 0 ].offsetHeight === 0 );
	
			tds[ 0 ].style.display = "";
			tds[ 1 ].style.display = "none";
	
			// Support: IE8
			// Check if empty table cells still have offsetWidth/Height
			support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );
	
			// Check box-sizing and margin behavior
			div.innerHTML = "";
			div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
			support.boxSizing = ( div.offsetWidth === 4 );
			support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );
	
			// Use window.getComputedStyle because jsdom on node.js will break without it.
			if ( window.getComputedStyle ) {
				support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
				support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";
	
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// Fails in WebKit before Feb 2011 nightlies
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				marginDiv = div.appendChild( document.createElement("div") );
				marginDiv.style.cssText = div.style.cssText = divReset;
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
	
				support.reliableMarginRight =
					!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
			}
	
			if ( typeof div.style.zoom !== core_strundefined ) {
				// Support: IE<8
				// Check if natively block-level elements act like inline-block
				// elements when setting their display to 'inline' and giving
				// them layout
				div.innerHTML = "";
				div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
				support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );
	
				// Support: IE6
				// Check if elements with layout shrink-wrap their children
				div.style.display = "block";
				div.innerHTML = "<div></div>";
				div.firstChild.style.width = "5px";
				support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );
	
				if ( support.inlineBlockNeedsLayout ) {
					// Prevent IE 6 from affecting layout for positioned elements #11048
					// Prevent IE from shrinking the body in IE 7 mode #12869
					// Support: IE<8
					body.style.zoom = 1;
				}
			}
	
			body.removeChild( container );
	
			// Null elements to avoid leaks in IE
			container = div = tds = marginDiv = null;
		});
	
		// Null elements to avoid leaks in IE
		all = select = fragment = opt = a = input = null;
	
		return support;
	})();
	
	var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		rmultiDash = /([A-Z])/g;
	
	function internalData( elem, name, data, pvt /* Internal Use Only */ ){
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}
	
		var thisCache, ret,
			internalKey = jQuery.expando,
			getByName = typeof name === "string",
	
			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,
	
			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,
	
			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;
	
		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
			return;
		}
	
		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				elem[ internalKey ] = id = core_deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}
	
		if ( !cache[ id ] ) {
			cache[ id ] = {};
	
			// Avoids exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}
		}
	
		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}
	
		thisCache = cache[ id ];
	
		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}
	
			thisCache = thisCache.data;
		}
	
		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}
	
		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( getByName ) {
	
			// First Try to find as-is property data
			ret = thisCache[ name ];
	
			// Test for null|undefined property data
			if ( ret == null ) {
	
				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}
	
		return ret;
	}
	
	function internalRemoveData( elem, name, pvt ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}
	
		var i, l, thisCache,
			isNode = elem.nodeType,
	
			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;
	
		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}
	
		if ( name ) {
	
			thisCache = pvt ? cache[ id ] : cache[ id ].data;
	
			if ( thisCache ) {
	
				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {
	
					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {
	
						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split(" ");
						}
					}
				} else {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}
	
				for ( i = 0, l = name.length; i < l; i++ ) {
					delete thisCache[ name[i] ];
				}
	
				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
					return;
				}
			}
		}
	
		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;
	
			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}
	
		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );
	
		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
			delete cache[ id ];
	
		// When all else fails, null
		} else {
			cache[ id ] = null;
		}
	}
	
	jQuery.extend({
		cache: {},
	
		// Unique for each copy of jQuery on the page
		// Non-digits removed to match rinlinejQuery
		expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),
	
		// The following elements throw uncatchable exceptions if you
		// attempt to add expando properties to them.
		noData: {
			"embed": true,
			// Ban all objects except for Flash (which handle expandos)
			"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			"applet": true
		},
	
		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},
	
		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},
	
		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},
	
		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		},
	
		// A method for determining if a DOM node can handle the data expando
		acceptData: function( elem ) {
			// Do not set data on non-element because it will not be cleared (#8335).
			if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
				return false;
			}
	
			var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];
	
			// nodes accept data unless otherwise specified; rejection can be conditional
			return !noData || noData !== true && elem.getAttribute("classid") === noData;
		}
	});
	
	jQuery.fn.extend({
		data: function( key, value ) {
			var attrs, name,
				elem = this[0],
				i = 0,
				data = null;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );
	
					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						attrs = elem.attributes;
						for ( ; i < attrs.length; i++ ) {
							name = attrs[i].name;
	
							if ( !name.indexOf( "data-" ) ) {
								name = jQuery.camelCase( name.slice(5) );
	
								dataAttr( elem, name, data[ name ] );
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					jQuery.data( this, key );
				});
			}
	
			return jQuery.access( this, function( value ) {
	
				if ( value === undefined ) {
					// Try to fetch any internally stored data first
					return elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
				}
	
				this.each(function() {
					jQuery.data( this, key, value );
				});
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each(function() {
				jQuery.removeData( this, key );
			});
		}
	});
	
	function dataAttr( elem, key, data ) {
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
	
			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
	
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
							data;
				} catch( e ) {}
	
				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );
	
			} else {
				data = undefined;
			}
		}
	
		return data;
	}
	
	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {
	
			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}
	
		return true;
	}
	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray(data) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			hooks.cur = fn;
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				})
			});
		}
	});
	
	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}
	
			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );
	
					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		// Based off of the plugin by Clint Helfers, with permission.
		// http://blindsignals.com/index.php/2009/07/jquery-delay/
		delay: function( time, type ) {
			time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
			type = type || "fx";
	
			return this.queue( type, function( next, hooks ) {
				var timeout = setTimeout( next, time );
				hooks.stop = function() {
					clearTimeout( timeout );
				};
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var nodeHook, boolHook,
		rclass = /[\t\r\n]/g,
		rreturn = /\r/g,
		rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i,
		rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = jQuery.support.getSetAttribute,
		getSetInput = jQuery.support.input;
	
	jQuery.fn.extend({
		attr: function( name, value ) {
			return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		},
	
		prop: function( name, value ) {
			return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each(function() {
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch( e ) {}
			});
		},
	
		addClass: function( value ) {
			var classes, elem, cur, clazz, j,
				i = 0,
				len = this.length,
				proceed = typeof value === "string" && value;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}
	
			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( core_rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
						elem.className = jQuery.trim( cur );
	
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, clazz, j,
				i = 0,
				len = this.length,
				proceed = arguments.length === 0 || typeof value === "string" && value;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( core_rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
						elem.className = value ? jQuery.trim( cur ) : "";
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value,
				isBool = typeof stateVal === "boolean";
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}
	
			return this.each(function() {
				if ( type === "string" ) {
					// toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						state = stateVal,
						classNames = value.match( core_rnotwhite ) || [];
	
					while ( (className = classNames[ i++ ]) ) {
						// check each className given, space separated list
						state = isBool ? state : !self.hasClass( className );
						self[ state ? "addClass" : "removeClass" ]( className );
					}
	
				// Toggle whole class name
				} else if ( type === core_strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						jQuery._data( this, "__className__", this.className );
					}
	
					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
				}
			});
		},
	
		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}
	
			return false;
		},
	
		val: function( value ) {
			var ret, hooks, isFunction,
				elem = this[0];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each(function( i ) {
				var val,
					self = jQuery(this);
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, self.val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map(val, function ( value ) {
						return value == null ? "" : value + "";
					});
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});
	
	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					// attributes.value is undefined in Blackberry 4.7 but
					// uses .value. See #6932
					var val = elem.attributes.value;
					return !val || val.specified ? elem.value : elem.text;
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var values = jQuery.makeArray( value );
	
					jQuery(elem).find("option").each(function() {
						this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
					});
	
					if ( !values.length ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		},
	
		attr: function( elem, name, value ) {
			var hooks, notxml, ret,
				nType = elem.nodeType;
	
			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === core_strundefined ) {
				return jQuery.prop( elem, name, value );
			}
	
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( notxml ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
			}
	
			if ( value !== undefined ) {
	
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
	
				} else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;
	
				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}
	
			} else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;
	
			} else {
	
				// In IE9+, Flash objects don't have .getAttribute (#12945)
				// Support: IE9+
				if ( typeof elem.getAttribute !== core_strundefined ) {
					ret =  elem.getAttribute( name );
				}
	
				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( core_rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( rboolean.test( name ) ) {
						// Set corresponding property to false for boolean attributes
						// Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
						if ( !getSetAttribute && ruseDefault.test( name ) ) {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						} else {
							elem[ propName ] = false;
						}
	
					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}
	
					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
	
		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;
	
			// don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );
	
			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;
	
				} else {
					return ( elem[ name ] = value );
				}
	
			} else {
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
					return ret;
	
				} else {
					return elem[ name ];
				}
			}
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
					// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					var attributeNode = elem.getAttributeNode("tabindex");
	
					return attributeNode && attributeNode.specified ?
						parseInt( attributeNode.value, 10 ) :
						rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							undefined;
				}
			}
		}
	});
	
	// Hook for boolean attributes
	boolHook = {
		get: function( elem, name ) {
			var
				// Use .prop to determine if this attribute is understood as boolean
				prop = jQuery.prop( elem, name ),
	
				// Fetch it accordingly
				attr = typeof prop === "boolean" && elem.getAttribute( name ),
				detail = typeof prop === "boolean" ?
	
					getSetInput && getSetAttribute ?
						attr != null :
						// oldIE fabricates an empty string for missing boolean attributes
						// and conflates checked/selected into attroperties
						ruseDefault.test( name ) ?
							elem[ jQuery.camelCase( "default-" + name ) ] :
							!!attr :
	
					// fetch an attribute node for properties not recognized as boolean
					elem.getAttributeNode( name );
	
			return detail && detail.value !== false ?
				name.toLowerCase() :
				undefined;
		},
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );
	
			// Use defaultChecked and defaultSelected for oldIE
			} else {
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}
	
			return name;
		}
	};
	
	// fix oldIE value attroperty
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				return jQuery.nodeName( elem, "input" ) ?
	
					// Ignore the value *property* by using defaultValue
					elem.defaultValue :
	
					ret && ret.specified ? ret.value : undefined;
			},
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}
	
	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {
	
		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				return ret && ( name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified ) ?
					ret.value :
					undefined;
			},
			set: function( elem, value, name ) {
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						(ret = elem.ownerDocument.createAttribute( name ))
					);
				}
	
				ret.value = value += "";
	
				// Break association with cloned elements by also using setAttribute (#9646)
				return name === "value" || value === elem.getAttribute( name ) ?
					value :
					undefined;
			}
		};
	
		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			get: nodeHook.get,
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};
	
		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each([ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			});
		});
	}
	
	
	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !jQuery.support.hrefNormalized ) {
		jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
				get: function( elem ) {
					var ret = elem.getAttribute( name, 2 );
					return ret == null ? undefined : ret;
				}
			});
		});
	
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each([ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		});
	}
	
	if ( !jQuery.support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case senstitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}
	
	// Safari mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if ( !jQuery.support.optSelected ) {
		jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
			get: function( elem ) {
				var parent = elem.parentNode;
	
				if ( parent ) {
					parent.selectedIndex;
	
					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		});
	}
	
	// IE6/7 call enctype encoding
	if ( !jQuery.support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}
	
	// Radios and checkboxes getter/setter
	if ( !jQuery.support.checkOn ) {
		jQuery.each([ "radio", "checkbox" ], function() {
			jQuery.valHooks[ this ] = {
				get: function( elem ) {
					// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
					return elem.getAttribute("value") === null ? "on" : elem.value;
				}
			};
		});
	}
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		});
	});
	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				eventHandle.elem = elem;
			}
	
			// Handle multiple events separated by a space
			// jQuery(...).bind("mouseover mouseout", fn);
			types = ( types || "" ).match( core_rnotwhite ) || [""];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
	
						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );
	
			if ( !elemData || !(events = elemData.events) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( core_rnotwhite ) || [""];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
	
				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = core_hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			event.isTrigger = true;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
					event.preventDefault();
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
					!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, ret, handleObj, matched, j,
				handlerQueue = [],
				args = core_slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var sel, handleObj, matches, i,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {
	
				for ( ; cur != this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}
	
			return handlerQueue;
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}
	
			// Support: Chrome 23+, Safari?
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				}
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== document.activeElement && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === document.activeElement && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Even when returnValue equals to undefined Firefox will still show alert
					if ( event.result !== undefined ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
	
		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{ type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle, false );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;
	
			if ( elem.detachEvent ) {
	
				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event, to properly expose it to GC
				if ( typeof elem[ name ] === core_strundefined ) {
					elem[ name ] = null;
				}
	
				elem.detachEvent( name, handle );
			}
		};
	
	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
				src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}
	
			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();
	
			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
			if ( !e ) {
				return;
			}
			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}
	
			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = returnTrue;
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});
	
	// IE submit delegation
	if ( !jQuery.support.submitBubbles ) {
	
		jQuery.event.special.submit = {
			setup: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
					if ( form && !jQuery._data( form, "submitBubbles" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submit_bubble = true;
						});
						jQuery._data( form, "submitBubbles", true );
					}
				});
				// return undefined since we don't need an event listener
			},
	
			postDispatch: function( event ) {
				// If form was submitted by the user, bubble the event up the tree
				if ( event._submit_bubble ) {
					delete event._submit_bubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event, true );
					}
				}
			},
	
			teardown: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}
	
	// IE change delegation and checkbox/radio fix
	if ( !jQuery.support.changeBubbles ) {
	
		jQuery.event.special.change = {
	
			setup: function() {
	
				if ( rformElems.test( this.nodeName ) ) {
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._just_changed = true;
							}
						});
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._just_changed && !event.isTrigger ) {
								this._just_changed = false;
							}
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event, true );
						});
					}
					return false;
				}
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;
	
					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event, true );
							}
						});
						jQuery._data( elem, "changeBubbles", true );
					}
				});
			},
	
			handle: function( event ) {
				var elem = event.target;
	
				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
					return event.handleObj.handler.apply( this, arguments );
				}
			},
	
			teardown: function() {
				jQuery.event.remove( this, "._change" );
	
				return !rformElems.test( this.nodeName );
			}
		};
	}
	
	// Create "bubbling" focus and blur events
	if ( !jQuery.support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler while someone wants focusin/focusout
			var attaches = 0,
				handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					if ( attaches++ === 0 ) {
						document.addEventListener( orig, handler, true );
					}
				},
				teardown: function() {
					if ( --attaches === 0 ) {
						document.removeEventListener( orig, handler, true );
					}
				}
			};
		});
	}
	
	jQuery.fn.extend({
	
		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var type, origFn;
	
			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}
	
			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}
	
			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		},
	
		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});
	/*!
	 * Sizzle CSS Selector Engine
	 * Copyright 2012 jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://sizzlejs.com/
	 */
	(function( window, undefined ) {
	
	var i,
		cachedruns,
		Expr,
		getText,
		isXML,
		compile,
		hasDuplicate,
		outermostContext,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsXML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
		sortOrder,
	
		// Instance-specific data
		expando = "sizzle" + -(new Date()),
		preferredDoc = window.document,
		support = {},
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
	
		// General-purpose constants
		strundefined = typeof undefined,
		MAX_NEGATIVE = 1 << 31,
	
		// Array methods
		arr = [],
		pop = arr.pop,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf if we can't use a native one
		indexOf = arr.indexOf || function( elem ) {
			var i = 0,
				len = this.length;
			for ( ; i < len; i++ ) {
				if ( this[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
	
		// Regular expressions
	
		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),
	
		// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
		operators = "([*^$|!~]?=)",
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
			"*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
	
		// Prefer arguments quoted,
		//   then not containing pseudos/brackets,
		//   then attribute selectors/non-parenthetical expressions,
		//   then anything else
		// These preferences are here to reduce the number of selectors
		//   needing tokenize in the PSEUDO preFilter
		pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rsibling = /[\x20\t\r\n\f]*[+~]/,
	
		rnative = /^[^{]+\{\s*\[native code/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rescape = /'|\\/g,
		rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
		funescape = function( _, escaped ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			return high !== high ?
				escaped :
				// BMP codepoint
				high < 0 ?
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		};
	
	// Use a stripped-down slice if we can't use a native one
	try {
		slice.call( preferredDoc.documentElement.childNodes, 0 )[0].nodeType;
	} catch ( e ) {
		slice = function( i ) {
			var elem,
				results = [];
			while ( (elem = this[i++]) ) {
				results.push( elem );
			}
			return results;
		};
	}
	
	/**
	 * For feature detection
	 * @param {Function} fn The function to test for native support
	 */
	function isNative( fn ) {
		return rnative.test( fn + "" );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var cache,
			keys = [];
	
		return (cache = function( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key += " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key ] = value);
		});
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return fn( div );
		} catch (e) {
			return false;
		} finally {
			// release memory in IE
			div = null;
		}
	}
	
	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;
	
		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
	
		context = context || document;
		results = results || [];
	
		if ( !selector || typeof selector !== "string" ) {
			return results;
		}
	
		if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
			return [];
		}
	
		if ( !documentIsXML && !seed ) {
	
			// Shortcuts
			if ( (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}
	
				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
					return results;
	
				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getByClassName && context.getElementsByClassName ) {
					push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
					return results;
				}
			}
	
			// QSA path
			if ( support.qsa && !rbuggyQSA.test(selector) ) {
				old = true;
				nid = expando;
				newContext = context;
				newSelector = nodeType === 9 && selector;
	
				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );
	
					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";
	
					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && context.parentNode || context;
					newSelector = groups.join(",");
				}
	
				if ( newSelector ) {
					try {
						push.apply( results, slice.call( newContext.querySelectorAll(
							newSelector
						), 0 ) );
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Detect xml
	 * @param {Element|Object} elem An element or a document
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var doc = node ? node.ownerDocument || node : preferredDoc;
	
		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Set our document
		document = doc;
		docElem = doc.documentElement;
	
		// Support tests
		documentIsXML = isXML( doc );
	
		// Check if getElementsByTagName("*") returns only elements
		support.tagNameNoComments = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Check if attributes should be retrieved by attribute nodes
		support.attributes = assert(function( div ) {
			div.innerHTML = "<select></select>";
			var type = typeof div.lastChild.getAttribute("multiple");
			// IE8 returns a string for some attributes even when not present
			return type !== "boolean" && type !== "string";
		});
	
		// Check if getElementsByClassName can be trusted
		support.getByClassName = assert(function( div ) {
			// Opera can't find a second classname (in 9.6)
			div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
			if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
				return false;
			}
	
			// Safari 3.2 caches class attributes and doesn't catch changes
			div.lastChild.className = "e";
			return div.getElementsByClassName("e").length === 2;
		});
	
		// Check if getElementById returns elements by name
		// Check if getElementsByName privileges form controls or returns elements by ID
		support.getByName = assert(function( div ) {
			// Inject content
			div.id = expando + 0;
			div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
			docElem.insertBefore( div, docElem.firstChild );
	
			// Test
			var pass = doc.getElementsByName &&
				// buggy browsers will return fewer than the correct 2
				doc.getElementsByName( expando ).length === 2 +
				// buggy browsers will return more than the correct 0
				doc.getElementsByName( expando + 0 ).length;
			support.getIdNotName = !doc.getElementById( expando );
	
			// Cleanup
			docElem.removeChild( div );
	
			return pass;
		});
	
		// IE6/7 return modified attributes
		Expr.attrHandle = assert(function( div ) {
			div.innerHTML = "<a href='#'></a>";
			return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
				div.firstChild.getAttribute("href") === "#";
		}) ?
			{} :
			{
				"href": function( elem ) {
					return elem.getAttribute( "href", 2 );
				},
				"type": function( elem ) {
					return elem.getAttribute("type");
				}
			};
	
		// ID find and filter
		if ( support.getIdNotName ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [m] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
					var m = context.getElementById( id );
	
					return m ?
						m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
							[m] :
							undefined :
						[];
				}
			};
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.tagNameNoComments ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== strundefined ) {
					return context.getElementsByTagName( tag );
				}
			} :
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Name
		Expr.find["NAME"] = support.getByName && function( tag, context ) {
			if ( typeof context.getElementsByName !== strundefined ) {
				return context.getElementsByName( name );
			}
		};
	
		// Class
		Expr.find["CLASS"] = support.getByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== strundefined && !documentIsXML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21),
		// no need to also add to buggyMatches since matches checks buggyQSA
		// A support test would require too much code (would include document ready)
		rbuggyQSA = [ ":focus" ];
	
		if ( (support.qsa = isNative(doc.querySelectorAll)) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explictly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				div.innerHTML = "<select><option selected=''></option></select>";
	
				// IE8 - Some boolean attributes are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
			});
	
			assert(function( div ) {
	
				// Opera 10-12/IE8 - ^= $= *= and empty values
				// Should not select anything
				div.innerHTML = "<input type='hidden' i=''/>";
				if ( div.querySelectorAll("[i^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = isNative( (matches = docElem.matchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.webkitMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = new RegExp( rbuggyMatches.join("|") );
	
		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = isNative(docElem.contains) || docElem.compareDocumentPosition ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		// Document order sorting
		sortOrder = docElem.compareDocumentPosition ?
		function( a, b ) {
			var compare;
	
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			if ( (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b )) ) {
				if ( compare & 1 || a.parentNode && a.parentNode.nodeType === 11 ) {
					if ( a === doc || contains( preferredDoc, a ) ) {
						return -1;
					}
					if ( b === doc || contains( preferredDoc, b ) ) {
						return 1;
					}
					return 0;
				}
				return compare & 4 ? -1 : 1;
			}
	
			return a.compareDocumentPosition ? -1 : 1;
		} :
		function( a, b ) {
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
	
			// Parentless nodes are either documents or disconnected
			} else if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		// Always assume the presence of duplicates if sort doesn't
		// pass them to our comparison function (as in Google Chrome).
		hasDuplicate = false;
		[0, 0].sort( sortOrder );
		support.detectDuplicates = hasDuplicate;
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		// rbuggyQSA always contains :focus, so no need for an existence check
		if ( support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr) ) {
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch(e) {}
		}
	
		return Sizzle( expr, document, null, [elem] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		var val;
	
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		if ( !documentIsXML ) {
			name = name.toLowerCase();
		}
		if ( (val = Expr.attrHandle[ name ]) ) {
			return val( elem );
		}
		if ( documentIsXML || support.attributes ) {
			return elem.getAttribute( name );
		}
		return ( (val = elem.getAttributeNode( name )) || elem.getAttribute( name ) ) && elem[ name ] === true ?
			name :
			val && val.specified ? val.value : null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	// Document sorting and removing duplicates
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			i = 1,
			j = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			for ( ; (elem = results[i]); i++ ) {
				if ( elem === results[ i - 1 ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		return results;
	};
	
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && ( ~b.sourceIndex || MAX_NEGATIVE ) - ( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	// Returns a function to use in pseudos for input types
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	// Returns a function to use in pseudos for buttons
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	// Returns a function to use in pseudos for positionals
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			for ( ; (node = elem[i]); i++ ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (see #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[5] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[4] ) {
					match[2] = match[4];
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeName ) {
				if ( nodeName === "*" ) {
					return function() { return true; };
				}
	
				nodeName = nodeName.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];
	
							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}
	
										if ( node === elem ) {
											break;
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf.call( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifider
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsXML ?
							elem.getAttribute("xml:lang") || elem.getAttribute("lang") :
							elem.lang) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
				//   not comment, processing instructions, or others
				// Thanks to Diego Perini for the nodeName shortcut
				//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
				// use getAttribute instead to test this case
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	function tokenize( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( tokens = [] );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				} );
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push( {
						value: matched,
						type: type,
						matches: match
					} );
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	}
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var data, cache, outerCache,
					dirkey = dirruns + " " + doneName;
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
								if ( (data = cache[1]) === true || data === cachedruns ) {
									return data === true;
								}
							} else {
								cache = outerCache[ dir ] = [ dirkey ];
								cache[1] = matcher( elem, context, xml ) || cachedruns;
								if ( cache[1] === true ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf.call( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector( tokens.slice( 0, i - 1 ) ).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		// A counter to specify which element is currently being matched
		var matcherCachedRuns = 0,
			bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, expandContext ) {
				var elem, j, matcher,
					setMatched = [],
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					outermost = expandContext != null,
					contextBackup = outermostContext,
					// We must always have either seed elements or context
					elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);
	
				if ( outermost ) {
					outermostContext = context !== document && context;
					cachedruns = matcherCachedRuns;
				}
	
				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				for ( ; (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
							cachedruns = ++matcherCachedRuns;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !group ) {
				group = tokenize( selector );
			}
			i = group.length;
			while ( i-- ) {
				cached = matcherFromTokens( group[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
		}
		return cached;
	};
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function select( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			match = tokenize( selector );
	
		if ( !seed ) {
			// Try to minimize operations if there is only one group
			if ( match.length === 1 ) {
	
				// Take a shortcut and set the context if the root selector is an ID
				tokens = match[0] = match[0].slice( 0 );
				if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
						context.nodeType === 9 && !documentIsXML &&
						Expr.relative[ tokens[1].type ] ) {
	
					context = Expr.find["ID"]( token.matches[0].replace( runescape, funescape ), context )[0];
					if ( !context ) {
						return results;
					}
	
					selector = selector.slice( tokens.shift().value.length );
				}
	
				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
				while ( i-- ) {
					token = tokens[i];
	
					// Abort if we hit a combinator
					if ( Expr.relative[ (type = token.type) ] ) {
						break;
					}
					if ( (find = Expr.find[ type ]) ) {
						// Search, expanding context for leading sibling combinators
						if ( (seed = find(
							token.matches[0].replace( runescape, funescape ),
							rsibling.test( tokens[0].type ) && context.parentNode || context
						)) ) {
	
							// If seed is empty or no tokens remain, we can return early
							tokens.splice( i, 1 );
							selector = seed.length && toSelector( tokens );
							if ( !selector ) {
								push.apply( results, slice.call( seed, 0 ) );
								return results;
							}
	
							break;
						}
					}
				}
			}
		}
	
		// Compile and execute a filtering function
		// Provide `match` to avoid retokenization if we modified the selector above
		compile( selector, match )(
			seed,
			context,
			documentIsXML,
			results,
			rsibling.test( selector )
		);
		return results;
	}
	
	// Deprecated
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Easy API for creating new setFilters
	function setFilters() {}
	Expr.filters = setFilters.prototype = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	// Initialize with the default document
	setDocument();
	
	// Override sizzle attribute retrieval
	Sizzle.attr = jQuery.attr;
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	})( window );
	var runtil = /Until$/,
		rparentsprev = /^(?:parents|prev(?:Until|All))/,
		isSimple = /^.[^:#\[\.,]*$/,
		rneedsContext = jQuery.expr.match.needsContext,
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend({
		find: function( selector ) {
			var i, ret, self,
				len = this.length;
	
			if ( typeof selector !== "string" ) {
				self = this;
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}
	
			ret = [];
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, this[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = ( this.selector ? this.selector + " " : "" ) + selector;
			return ret;
		},
	
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;
	
			return this.filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},
	
		not: function( selector ) {
			return this.pushStack( winnow(this, selector, false) );
		},
	
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector, true) );
		},
	
		is: function( selector ) {
			return !!selector && (
				typeof selector === "string" ?
					// If this is a positional/relative selector, check membership in the returned set
					// so $("p:first").is("p:last") won't return true for a doc with two "p".
					rneedsContext.test( selector ) ?
						jQuery( selector, this.context ).index( this[0] ) >= 0 :
						jQuery.filter( selector, this ).length > 0 :
					this.filter( selector ).length > 0 );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				ret = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				cur = this[i];
	
				while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
					if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
						ret.push( cur );
						break;
					}
					cur = cur.parentNode;
				}
			}
	
			return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
		},
	
		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[0], jQuery( elem ) );
			}
	
			// Locate the position of the desired element
			return jQuery.inArray(
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this );
		},
	
		add: function( selector, context ) {
			var set = typeof selector === "string" ?
					jQuery( selector, context ) :
					jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
				all = jQuery.merge( this.get(), set );
	
			return this.pushStack( jQuery.unique(all) );
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );
	
		return cur;
	}
	
	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );
	
			if ( !runtil.test( name ) ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}
	
			ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;
	
			if ( this.length > 1 && rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
	
			return this.pushStack( ret );
		};
	});
	
	jQuery.extend({
		filter: function( expr, elems, not ) {
			if ( not ) {
				expr = ":not(" + expr + ")";
			}
	
			return elems.length === 1 ?
				jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
				jQuery.find.matches(expr, elems);
		},
	
		dir: function( elem, dir, until ) {
			var matched = [],
				cur = elem[ dir ];
	
			while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
				if ( cur.nodeType === 1 ) {
					matched.push( cur );
				}
				cur = cur[dir];
			}
			return matched;
		},
	
		sibling: function( n, elem ) {
			var r = [];
	
			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					r.push( n );
				}
			}
	
			return r;
		}
	});
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, keep ) {
	
		// Can't pass null or undefined to indexOf in Firefox 4
		// Set to 0 to skip string check
		qualifier = qualifier || 0;
	
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep(elements, function( elem, i ) {
				var retVal = !!qualifier.call( elem, i, elem );
				return retVal === keep;
			});
	
		} else if ( qualifier.nodeType ) {
			return jQuery.grep(elements, function( elem ) {
				return ( elem === qualifier ) === keep;
			});
	
		} else if ( typeof qualifier === "string" ) {
			var filtered = jQuery.grep(elements, function( elem ) {
				return elem.nodeType === 1;
			});
	
			if ( isSimple.test( qualifier ) ) {
				return jQuery.filter(qualifier, filtered, !keep);
			} else {
				qualifier = jQuery.filter( qualifier, filtered );
			}
		}
	
		return jQuery.grep(elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
		});
	}
	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();
	
		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}
	
	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
			"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		rleadingWhitespace = /^\s+/,
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rtbody = /<tbody/i,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	
		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
			option: [ 1, "<select multiple='multiple'>", "</select>" ],
			legend: [ 1, "<fieldset>", "</fieldset>" ],
			area: [ 1, "<map>", "</map>" ],
			param: [ 1, "<object>", "</object>" ],
			thead: [ 1, "<table>", "</table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
		},
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement("div") );
	
	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	jQuery.fn.extend({
		text: function( value ) {
			return jQuery.access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
			}, null, value, arguments.length );
		},
	
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapAll( html.call(this, i) );
				});
			}
	
			if ( this[0] ) {
				// The elements to wrap the target around
				var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);
	
				if ( this[0].parentNode ) {
					wrap.insertBefore( this[0] );
				}
	
				wrap.map(function() {
					var elem = this;
	
					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}
	
					return elem;
				}).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapInner( html.call(this, i) );
				});
			}
	
			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			});
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each(function(i) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},
	
		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		},
	
		append: function() {
			return this.domManip(arguments, true, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					this.appendChild( elem );
				}
			});
		},
	
		prepend: function() {
			return this.domManip(arguments, true, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					this.insertBefore( elem, this.firstChild );
				}
			});
		},
	
		before: function() {
			return this.domManip( arguments, false, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},
	
		after: function() {
			return this.domManip( arguments, false, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},
	
		// keepData is for internal use only--do not document
		remove: function( selector, keepData ) {
			var elem,
				i = 0;
	
			for ( ; (elem = this[i]) != null; i++ ) {
				if ( !selector || jQuery.filter( selector, [ elem ] ).length > 0 ) {
					if ( !keepData && elem.nodeType === 1 ) {
						jQuery.cleanData( getAll( elem ) );
					}
	
					if ( elem.parentNode ) {
						if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
							setGlobalEval( getAll( elem, "script" ) );
						}
						elem.parentNode.removeChild( elem );
					}
				}
			}
	
			return this;
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; (elem = this[i]) != null; i++ ) {
				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}
	
				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}
	
				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function () {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},
	
		html: function( value ) {
			return jQuery.access( this, function( value ) {
				var elem = this[0] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {
	
					value = value.replace( rxhtmlTag, "<$1></$2>" );
	
					try {
						for (; i < l; i++ ) {
							// Remove element nodes and prevent memory leaks
							elem = this[i] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch(e) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function( value ) {
			var isFunc = jQuery.isFunction( value );
	
			// Make sure that the elements are removed from the DOM before they are inserted
			// this can help fix replacing a parent with child elements
			if ( !isFunc && typeof value !== "string" ) {
				value = jQuery( value ).not( this ).detach();
			}
	
			return this.domManip( [ value ], true, function( elem ) {
				var next = this.nextSibling,
					parent = this.parentNode;
	
				if ( parent ) {
					jQuery( this ).remove();
					parent.insertBefore( elem, next );
				}
			});
		},
	
		detach: function( selector ) {
			return this.remove( selector, true );
		},
	
		domManip: function( args, table, callback ) {
	
			// Flatten any nested arrays
			args = core_concat.apply( [], args );
	
			var first, node, hasScripts,
				scripts, doc, fragment,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[0],
				isFunction = jQuery.isFunction( value );
	
			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[0] = value.call( this, index, table ? self.html() : undefined );
					}
					self.domManip( args, table, callback );
				});
			}
	
			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;
	
				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}
	
				if ( first ) {
					table = table && jQuery.nodeName( first, "tr" );
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;
	
					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;
	
						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );
	
							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}
	
						callback.call(
							table && jQuery.nodeName( this[i], "table" ) ?
								findOrAppend( this[i], "tbody" ) :
								this[i],
							node,
							i
						);
					}
	
					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;
	
						// Reenable scripts
						jQuery.map( scripts, restoreScript );
	
						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {
	
								if ( node.src ) {
									// Hope ajax is available...
									jQuery.ajax({
										url: node.src,
										type: "GET",
										dataType: "script",
										async: false,
										global: false,
										"throws": true
									});
								} else {
									jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
								}
							}
						}
					}
	
					// Fix #11809: Avoid leaking memory
					fragment = first = null;
				}
			}
	
			return this;
		}
	});
	
	function findOrAppend( elem, tag ) {
		return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		var attr = elem.getAttributeNode("type");
		elem.type = ( attr && attr.specified ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; (elem = elems[i]) != null; i++ ) {
			jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
		}
	}
	
	function cloneCopyEvent( src, dest ) {
	
		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}
	
		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;
	
		if ( events ) {
			delete curData.handle;
			curData.events = {};
	
			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	
		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}
	
	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;
	
		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		nodeName = dest.nodeName.toLowerCase();
	
		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );
	
			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}
	
			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}
	
		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );
	
		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}
	
			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
				dest.innerHTML = src.innerHTML;
			}
	
		} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set
	
			dest.defaultChecked = dest.checked = src.checked;
	
			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}
	
		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;
	
		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone(true);
				jQuery( insert[i] )[ original ]( elems );
	
				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				core_push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	});
	
	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
				undefined;
	
		if ( !found ) {
			for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}
	
	// Used in buildFragment, fixes the defaultChecked property
	function fixDefaultChecked( elem ) {
		if ( manipulation_rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}
	
	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
				clone = elem.cloneNode( true );
	
			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}
	
			if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
					(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				// Fix all IE cloning issues
				for ( i = 0; (node = srcElements[i]) != null; ++i ) {
					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[i] ) {
						fixCloneNodeIssues( node, destElements[i] );
					}
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0; (node = srcElements[i]) != null; i++ ) {
						cloneCopyEvent( node, destElements[i] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			destElements = srcElements = node = null;
	
			// Return the cloned set
			return clone;
		},
	
		buildFragment: function( elems, context, scripts, selection ) {
			var j, elem, contains,
				tmp, tag, tbody, wrap,
				l = elems.length,
	
				// Ensure a safe fragment
				safe = createSafeFragment( context ),
	
				nodes = [],
				i = 0;
	
			for ( ; i < l; i++ ) {
				elem = elems[ i ];
	
				if ( elem || elem === 0 ) {
	
					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );
	
					// Convert html into DOM nodes
					} else {
						tmp = tmp || safe.appendChild( context.createElement("div") );
	
						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
	
						tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];
	
						// Descend through wrappers to the right content
						j = wrap[0];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}
	
						// Manually add leading whitespace removed by IE
						if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
							nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
						}
	
						// Remove IE's autoinserted <tbody> from table fragments
						if ( !jQuery.support.tbody ) {
	
							// String was a <table>, *may* have spurious <tbody>
							elem = tag === "table" && !rtbody.test( elem ) ?
								tmp.firstChild :
	
								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !rtbody.test( elem ) ?
									tmp :
									0;
	
							j = elem && elem.childNodes.length;
							while ( j-- ) {
								if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
									elem.removeChild( tbody );
								}
							}
						}
	
						jQuery.merge( nodes, tmp.childNodes );
	
						// Fix #12392 for WebKit and IE > 9
						tmp.textContent = "";
	
						// Fix #12392 for oldIE
						while ( tmp.firstChild ) {
							tmp.removeChild( tmp.firstChild );
						}
	
						// Remember the top-level container for proper cleanup
						tmp = safe.lastChild;
					}
				}
			}
	
			// Fix #11356: Clear elements from fragment
			if ( tmp ) {
				safe.removeChild( tmp );
			}
	
			// Reset defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			if ( !jQuery.support.appendChecked ) {
				jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
			}
	
			i = 0;
			while ( (elem = nodes[ i++ ]) ) {
	
				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}
	
				contains = jQuery.contains( elem.ownerDocument, elem );
	
				// Append to fragment
				tmp = getAll( safe.appendChild( elem ), "script" );
	
				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}
	
				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}
	
			tmp = null;
	
			return safe;
		},
	
		cleanData: function( elems, /* internal */ acceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				deleteExpando = jQuery.support.deleteExpando,
				special = jQuery.event.special;
	
			for ( ; (elem = elems[i]) != null; i++ ) {
	
				if ( acceptData || jQuery.acceptData( elem ) ) {
	
					id = elem[ internalKey ];
					data = id && cache[ id ];
	
					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {
	
							delete cache[ id ];
	
							// IE does not allow us to delete expando properties from nodes,
							// nor does it have a removeAttribute function on Document nodes;
							// we must handle all of these cases
							if ( deleteExpando ) {
								delete elem[ internalKey ];
	
							} else if ( typeof elem.removeAttribute !== core_strundefined ) {
								elem.removeAttribute( internalKey );
	
							} else {
								elem[ internalKey ] = null;
							}
	
							core_deletedIds.push( id );
						}
					}
				}
			}
		}
	});
	var iframe, getStyles, curCSS,
		ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/,
		rposition = /^(top|right|bottom|left)$/,
		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rmargin = /^margin/,
		rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
		rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
		elemdisplay = { BODY: "block" },
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: 0,
			fontWeight: 400
		},
	
		cssExpand = [ "Top", "Right", "Bottom", "Left" ],
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
	
	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {
	
		// shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}
	
		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}
	
		return origName;
	}
	
	function isHidden( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
				}
			} else {
	
				if ( !values[ index ] ) {
					hidden = isHidden( elem );
	
					if ( display && display !== "none" || !hidden ) {
						jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
					}
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend({
		css: function( name, value ) {
			return jQuery.access( this, function( elem, name, value ) {
				var len, styles,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			var bool = typeof state === "boolean";
	
			return this.each(function() {
				if ( bool ? state : isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});
	
	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Exclude the following css properties to add px
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// convert relative number strings (+= or -=) to relative numbers. #7345
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that NaN and null values aren't set. See: #7116
				if ( value == null || type === "number" && isNaN( value ) ) {
					return;
				}
	
				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}
	
				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight (for every problematic property) identical functions
				if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
	
					// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
					// Fixes bug #5509
					try {
						style[ name ] = value;
					} catch(e) {}
				}
	
			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		},
	
		// A method for quickly swapping in/out CSS properties to get correct calculations
		swap: function( elem, options, callback, args ) {
			var ret, name,
				old = {};
	
			// Remember the old values, and insert the new ones
			for ( name in options ) {
				old[ name ] = elem.style[ name ];
				elem.style[ name ] = options[ name ];
			}
	
			ret = callback.apply( elem, args || [] );
	
			// Revert the old values
			for ( name in options ) {
				elem.style[ name ] = old[ name ];
			}
	
			return ret;
		}
	});
	
	// NOTE: we've included the "window" in window.getComputedStyle
	// because jsdom on node.js will break without it.
	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {
			return window.getComputedStyle( elem, null );
		};
	
		curCSS = function( elem, name, _computed ) {
			var width, minWidth, maxWidth,
				computed = _computed || getStyles( elem ),
	
				// getPropertyValue is only needed for .css('filter') in IE9, see #12537
				ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
				style = elem.style;
	
			if ( computed ) {
	
				if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
					ret = jQuery.style( elem, name );
				}
	
				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
				// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
				if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;
	
					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;
	
					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}
	
			return ret;
		};
	} else if ( document.documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};
	
		curCSS = function( elem, name, _computed ) {
			var left, rs, rsLeft,
				computed = _computed || getStyles( elem ),
				ret = computed ? computed[ name ] : undefined,
				style = elem.style;
	
			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}
	
			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	
			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are proportional to the parent element instead
			// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {
	
				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;
	
				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";
	
				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}
	
			return ret === "" ? "auto" : ret;
		};
	}
	
	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}
	
			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	// Try to determine the default display value of an element
	function css_defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
				// Use the already-created iframe if possible
				iframe = ( iframe ||
					jQuery("<iframe frameborder='0' width='0' height='0'/>")
					.css( "cssText", "display:block !important" )
				).appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
				doc.write("<!doctype html><html><body>");
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	
	// Called ONLY from within css_defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
			display = jQuery.css( elem[0], "display" );
		elem.remove();
		return display;
	}
	
	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});
	
	if ( !jQuery.support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {
				// IE uses filters for opacity
				return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
			},
	
			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";
	
				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;
	
				// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {
	
					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );
	
					// if there is no filter style applied in a css rule or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}
	
				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}
	
	// These hooks cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	jQuery(function() {
		if ( !jQuery.support.reliableMarginRight ) {
			jQuery.cssHooks.marginRight = {
				get: function( elem, computed ) {
					if ( computed ) {
						// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
						// Work around by temporarily setting element display to inline-block
						return jQuery.swap( elem, { "display": "inline-block" },
							curCSS, [ elem, "marginRight" ] );
					}
				}
			};
		}
	
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// getComputedStyle returns percent when specified for top/left/bottom/right
		// rather than make the css module depend on the offset module, we just check for it here
		if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
			jQuery.each( [ "top", "left" ], function( i, prop ) {
				jQuery.cssHooks[ prop ] = {
					get: function( elem, computed ) {
						if ( computed ) {
							computed = curCSS( elem, prop );
							// if curCSS returns percentage, fallback to offset
							return rnumnonpx.test( computed ) ?
								jQuery( elem ).position()[ prop ] + "px" :
								computed;
						}
					}
				};
			});
		}
	
	});
	
	if ( jQuery.expr && jQuery.expr.filters ) {
		jQuery.expr.filters.hidden = function( elem ) {
			// Support: Opera <= 12.12
			// Opera reports offsetWidths and offsetHeights less than zero on some elements
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
				(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
		};
	
		jQuery.expr.filters.visible = function( elem ) {
			return !jQuery.expr.filters.hidden( elem );
		};
	}
	
	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function(){
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function(){
				var type = this.type;
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !manipulation_rcheckableType.test( type ) );
			})
			.map(function( i, elem ){
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ){
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});
	
	//Serialize an array of form elements or a set of
	//key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});
	
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});
	
	jQuery.fn.hover = function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	};
	var
		// Document location
		ajaxLocParts,
		ajaxLocation,
		ajax_nonce = jQuery.now(),
	
		ajax_rquery = /\?/,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
	
		// Keep a copy of the old load method
		_load = jQuery.fn.load,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");
	
	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch( e ) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement( "a" );
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}
	
	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );
	
					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, response, type,
			self = this,
			off = url.indexOf(" ");
	
		if ( off >= 0 ) {
			selector = url.slice( off, url.length );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,
	
				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}
	
		return this;
	};
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
		jQuery.fn[ type ] = function( fn ){
			return this.on( type, fn );
		};
	});
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});
	
	jQuery.extend({
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": window.String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var // Cross-domain detection vars
				parts,
				// Loop variable
				i,
				// URL without anti-cache param
				cacheURL,
				// Response headers as string
				responseHeadersString,
				// timeout handle
				timeoutTimer,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				transport,
				// Response headers
				responseHeaders,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];
	
			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
				);
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			fireGlobals = s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// If successful, handle type chaining
				if ( status >= 200 && status < 300 || status === 304 ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 ) {
						isSuccess = true;
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						isSuccess = true;
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						isSuccess = ajaxConvert( s, response );
						statusText = isSuccess.state;
						success = isSuccess.data;
						error = isSuccess.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}
	
			return jqXHR;
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		}
	});
	
	/* Handles responses to an ajax request:
	 * - sets all responseXXX fields accordingly
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes,
			responseFields = s.responseFields;
	
		// Fill responseXXX fields
		for ( type in responseFields ) {
			if ( type in responses ) {
				jqXHR[ responseFields[type] ] = responses[ type ];
			}
		}
	
		// Remove auto dataType and get content-type in the process
		while( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	// Chain conversions given the request and the original response
	function ajaxConvert( s, response ) {
		var conv2, current, conv, tmp,
			converters = {},
			i = 0,
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice(),
			prev = dataTypes[ 0 ];
	
		// Apply the dataFilter if provided
		if ( s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		// Convert to each sequential dataType, tolerating list modification
		for ( ; (current = dataTypes[++i]); ) {
	
			// There's only work to do if current dataType is non-auto
			if ( current !== "*" ) {
	
				// Convert response if prev dataType is non-auto and differs from current
				if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split(" ");
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.splice( i--, 0, current );
									}
	
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s["throws"] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
	
				// Update prev for next iteration
				prev = current;
			}
		}
	
		return { state: "success", data: response };
	}
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});
	
	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	});
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function(s) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
	
			var script,
				head = document.head || jQuery("head")[0] || document.documentElement;
	
			return {
	
				send: function( _, callback ) {
	
					script = document.createElement("script");
	
					script.async = true;
	
					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}
	
					script.src = s.url;
	
					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {
	
						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {
	
							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;
	
							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}
	
							// Dereference the script
							script = null;
	
							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};
	
					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},
	
				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	});
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;
	
				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			});
	
			// Delegate to script
			return "script";
		}
	});
	var xhrCallbacks, xhrSupported,
		xhrId = 0,
		// #5280: Internet Explorer will keep connections alive if we don't abort on unload
		xhrOnUnloadAbort = window.ActiveXObject && function() {
			// Abort all pending requests
			var key;
			for ( key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		};
	
	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch( e ) {}
	}
	
	function createActiveXHR() {
		try {
			return new window.ActiveXObject("Microsoft.XMLHTTP");
		} catch( e ) {}
	}
	
	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject ?
		/* Microsoft failed to properly
		 * implement the XMLHttpRequest in IE7 (can't request local files),
		 * so we use the ActiveXObject when it is available
		 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
		 * we need a fallback.
		 */
		function() {
			return !this.isLocal && createStandardXHR() || createActiveXHR();
		} :
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;
	
	// Determine support properties
	xhrSupported = jQuery.ajaxSettings.xhr();
	jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = jQuery.support.ajax = !!xhrSupported;
	
	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {
	
		jQuery.ajaxTransport(function( s ) {
			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !s.crossDomain || jQuery.support.cors ) {
	
				var callback;
	
				return {
					send: function( headers, complete ) {
	
						// Get a new xhr
						var handle, i,
							xhr = s.xhr();
	
						// Open the socket
						// Passing null username, generates a login popup on Opera (#2865)
						if ( s.username ) {
							xhr.open( s.type, s.url, s.async, s.username, s.password );
						} else {
							xhr.open( s.type, s.url, s.async );
						}
	
						// Apply custom fields if provided
						if ( s.xhrFields ) {
							for ( i in s.xhrFields ) {
								xhr[ i ] = s.xhrFields[ i ];
							}
						}
	
						// Override mime type if needed
						if ( s.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( s.mimeType );
						}
	
						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !s.crossDomain && !headers["X-Requested-With"] ) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}
	
						// Need an extra try/catch for cross domain requests in Firefox 3
						try {
							for ( i in headers ) {
								xhr.setRequestHeader( i, headers[ i ] );
							}
						} catch( err ) {}
	
						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( s.hasContent && s.data ) || null );
	
						// Listener
						callback = function( _, isAbort ) {
							var status, responseHeaders, statusText, responses;
	
							// Firefox throws exceptions when accessing properties
							// of an xhr when a network error occurred
							// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
							try {
	
								// Was never called and is aborted or complete
								if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
	
									// Only called once
									callback = undefined;
	
									// Do not keep as active anymore
									if ( handle ) {
										xhr.onreadystatechange = jQuery.noop;
										if ( xhrOnUnloadAbort ) {
											delete xhrCallbacks[ handle ];
										}
									}
	
									// If it's an abort
									if ( isAbort ) {
										// Abort it manually if needed
										if ( xhr.readyState !== 4 ) {
											xhr.abort();
										}
									} else {
										responses = {};
										status = xhr.status;
										responseHeaders = xhr.getAllResponseHeaders();
	
										// When requesting binary data, IE6-9 will throw an exception
										// on any attempt to access responseText (#11426)
										if ( typeof xhr.responseText === "string" ) {
											responses.text = xhr.responseText;
										}
	
										// Firefox throws an exception when accessing
										// statusText for faulty cross-domain requests
										try {
											statusText = xhr.statusText;
										} catch( e ) {
											// We normalize with Webkit giving an empty statusText
											statusText = "";
										}
	
										// Filter status for non standard behaviors
	
										// If the request is local and we have data: assume a success
										// (success with no data won't get notified, that's the best we
										// can do given current implementations)
										if ( !status && s.isLocal && !s.crossDomain ) {
											status = responses.text ? 200 : 404;
										// IE - #1450: sometimes returns 1223 when it should be 204
										} else if ( status === 1223 ) {
											status = 204;
										}
									}
								}
							} catch( firefoxAccessException ) {
								if ( !isAbort ) {
									complete( -1, firefoxAccessException );
								}
							}
	
							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, responseHeaders );
							}
						};
	
						if ( !s.async ) {
							// if we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							setTimeout( callback );
						} else {
							handle = ++xhrId;
							if ( xhrOnUnloadAbort ) {
								// Create the active xhrs callbacks list if needed
								// and attach the unload handler
								if ( !xhrCallbacks ) {
									xhrCallbacks = {};
									jQuery( window ).unload( xhrOnUnloadAbort );
								}
								// Add to list of active xhrs callbacks
								xhrCallbacks[ handle ] = callback;
							}
							xhr.onreadystatechange = callback;
						}
					},
	
					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		});
	}
	var fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [function( prop, value ) {
				var end, unit,
					tween = this.createTween( prop, value ),
					parts = rfxnum.exec( value ),
					target = tween.cur(),
					start = +target || 0,
					scale = 1,
					maxIterations = 20;
	
				if ( parts ) {
					end = +parts[2];
					unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	
					// We need to compute starting value
					if ( unit !== "px" && start ) {
						// Iteratively approximate from a nonzero starting point
						// Prefer the current property, because this process will be trivial if it uses the same units
						// Fallback to end or a simple constant
						start = jQuery.css( tween.elem, prop, true ) || end || 1;
	
						do {
							// If previous iteration zeroed out, double until we get *something*
							// Use a string for doubling factor so we don't accidentally see scale as unchanged below
							scale = scale || ".5";
	
							// Adjust and apply
							start = start / scale;
							jQuery.style( tween.elem, prop, start + unit );
	
						// Update scale, tolerating zero or NaN from tween.cur()
						// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
						} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
					}
	
					tween.unit = unit;
					tween.start = start;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
				}
				return tween;
			}]
		};
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}
	
	function createTweens( animation, props ) {
		jQuery.each( props, function( prop, value ) {
			var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
				index = 0,
				length = collection.length;
			for ( ; index < length; index++ ) {
				if ( collection[ index ].call( animation, prop, value ) ) {
	
					// we're done with this property
					return;
				}
			}
		});
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ]);
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}
	
		createTweens( animation, props );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	function propFilter( props, specialEasing ) {
		var value, name, index, easing, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});
	
	function defaultPrefilter( elem, props, opts ) {
		/*jshint validthis:true */
		var prop, index, length,
			value, dataShow, toggle,
			tween, hooks, oldfire,
			anim = this,
			style = elem.style,
			orig = {},
			handled = [],
			hidden = elem.nodeType && isHidden( elem );
	
		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always(function() {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}
	
		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			if ( jQuery.css( elem, "display" ) === "inline" &&
					jQuery.css( elem, "float" ) === "none" ) {
	
				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";
	
				} else {
					style.zoom = 1;
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !jQuery.support.shrinkWrapBlocks ) {
				anim.always(function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				});
			}
		}
	
	
		// show/hide pass
		for ( index in props ) {
			value = props[ index ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ index ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
					continue;
				}
				handled.push( index );
			}
		}
	
		length = handled.length;
		if ( length ) {
			dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
	
			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( index = 0 ; index < length ; index++ ) {
				prop = handled[ index ];
				tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
				orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
		}
	}
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}
	
				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Remove in 2.0 - this supports IE8's panic based approach
	// to setting things on disconnected nodes
	
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});
	
	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {
	
			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
					doAnimation.finish = function() {
						anim.stop( true );
					};
					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// enable finishing flag on private data
				data.finish = true;
	
				// empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.cur && hooks.cur.finish ) {
					hooks.cur.finish.call( this );
				}
	
				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// turn off finishing flag
				delete data.finish;
			});
		}
	});
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;
	
		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth? 1 : 0;
		for( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p*Math.PI ) / 2;
		}
	};
	
	jQuery.timers = [];
	jQuery.fx = Tween.prototype.init;
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		if ( timer() && jQuery.timers.push( timer ) ) {
			jQuery.fx.start();
		}
	};
	
	jQuery.fx.interval = 13;
	
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	if ( jQuery.expr && jQuery.expr.filters ) {
		jQuery.expr.filters.animated = function( elem ) {
			return jQuery.grep(jQuery.timers, function( fn ) {
				return elem === fn.elem;
			}).length;
		};
	}
	jQuery.fn.offset = function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}
	
		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;
	
		if ( !doc ) {
			return;
		}
	
		docElem = doc.documentElement;
	
		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}
	
		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	};
	
	jQuery.offset = {
	
		setOffset: function( elem, options, i ) {
			var position = jQuery.css( elem, "position" );
	
			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			var curElem = jQuery( elem ),
				curOffset = curElem.offset(),
				curCSSTop = jQuery.css( elem, "top" ),
				curCSSLeft = jQuery.css( elem, "left" ),
				calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
				props = {}, curPosition = {}, curTop, curLeft;
	
			// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};
	
	
	jQuery.fn.extend({
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];
	
			// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
			};
		},
	
		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || document.documentElement;
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || document.documentElement;
			});
		}
	});
	
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
		var top = /Y/.test( prop );
	
		jQuery.fn[ method ] = function( val ) {
			return jQuery.access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? (prop in win) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});
	
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return jQuery.access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});
	// Limit scope pollution from any deprecated API
	// (function() {
	
	// })();
	// Expose jQuery to the global object
	window.jQuery = window.$ = jQuery;
	
	// Expose jQuery as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase jquery is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
	if ( "function" === "function" && __webpack_require__(2) && __webpack_require__(2).jQuery ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () { return jQuery; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	})( window );
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = $;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    module.exports = {
	        isAdmin: function isAdmin() {
	            return document.location.host.indexOf("admin") !== -1;
	        }
	    };
	}).call(window);

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	(function($, window) {
	
	    var rootJquery = $,
	        bindPolls = window.bindPolls = function($, window) {
	
	        if ('Poll' in window) {
	            return;
	        }
	
	        var Poll = {
	            ids: [],
	            url: '/polls',
	            userLogin: true,
	            voteUrl: '/poll/vote/',
	            userlessVote: false,
	
	            votedPolls: function () {
	                var nameEQ = "_cms-poll-";
	                var ca = document.cookie.split(';');
	                var ret = [], id;
	
	                for (var i = 0; i < ca.length; i++) {
	                    var c = ca[i].replace(/^\s+|\s+$/g, '');
	                    if (c.indexOf(nameEQ) == 0) {
	                        c = c.split('=');
	                        id = c[0].match(/_cms-poll-(\d+)/)[1];
	
	                        ret.push({id: id, vote: c[1]});
	                    }
	                }
	
	                return ret;
	            },
	
	            init: function () {
	                $('body')
	                    .on('click', '.poll a.link', function () {
	                        $(this).parents('.poll')
	                            .find('.poll-form').toggle().end()
	                            .find('.poll-results').toggle();
	                    })
	                    .on('submit', '.poll-form', {poll: this}, this.formSubmit);
	            },
	
	            addId: function (id) {
	                this.ids.push(id);
	            },
	
	            disablePoll: function (pollId) {
	                $('body').off('submit', '#poll-' + pollId, this.formSubmit);
	            },
	
	            alertLogin: function () {
	                $('#header-login-link').click();
	            },
	
	            loadAll: function () {
	                var poll = this, ids = [];
	
	                $('.poll').each(function () {
	                    var id = $(this).attr('id');
	                    if (id && id.match(/^poll/)) {
	                        ids.push(id.replace(/[^0-9]+/g, ''));
	                    }
	                });
	                if (!ids.length && this.ids.length) {
	                    ids = this.ids;
	                }
	                if (!ids.length) {
	                    return;
	                }
	
	                rootJquery.ajax({
	                    url: this.url,
	                    data: {
	                        ids: ids
	                    },
	                    success: function (data) {
	                        poll.userLogin = data.poll_user_login;
	                        if (poll.userlessVote) {
	                            poll.userLogin = true;
	                        }
	
	                        for (var id in data.polls) {
	                            var $pollHtml = $('#poll-' + id)
	                                .html(
	                                poll.processVotes(data.polls[id])
	                            )
	                                .trigger('poll-load', {pollId: id});
	                        }
	
	                        poll.disableVotedPolls();
	                    },
	                    error: function () {
	                    },
	                    dataType: 'json'
	                });
	            },
	
	            processVotes: function (data) {
	                var $data = $(rootJquery.trim(data));
	                var $pollResults = $data.next('.poll-results');
	                if (!$pollResults.length) {
	                    $pollResults = $data.find('.poll-results');
	                }
	                var spans = $pollResults.find('span');
	
	                var total = 0, votes = [], vote;
	                spans.each(function (s) {
	                    var $span = $(spans[s]);
	                    vote = $span.text().replace(/^\s*|\s*$/g, '');
	                    vote = parseInt(vote);
	
	                    votes.push({
	                        id: $span.parent().data('option'),
	                        vote: vote
	                    });
	
	                    total += vote;
	                });
	
	                $pollResults.find('.total-votes').text(total);
	
	                for (v in votes) {
	                    vote = (votes[v].vote * 100) / total;
	                    vote = Math.round(vote * 100) / 100;
	
	                    if (isNaN(vote)) {
	                        vote = 0;
	                    }
	                    ;
	
	                    $data
	                        .find('div[data-option=' + votes[v].id + ']')
	                        .find('span').text(vote).end()
	                        .find('div div').css('width', vote + '%');
	                }
	
	                return $data;
	            },
	
	            formSubmit: function (event) {
	                event.preventDefault();
	
	                var $this = $(this),
	                    poll = event.data.poll;
	
	                // if user is not logged in display login popup
	                if (!poll.userLogin) {
	                    poll.alertLogin();
	                    return;
	                }
	
	                if (!$this.serialize()) {
	                    return;
	                }
	
	                rootJquery.post($this.attr('action'), $this.serialize(), function (data) {
	                    // set cookie with poll id
	                    poll.markPollVoted($this.data('poll'), $this.find('input[name=vote]:checked').attr('id'));
	                    var $poll = $this.parents('.poll').eq(0);
	                    $poll.html(poll.processVotes(data));
	                    $this = $poll.find('form.poll-form');
	
	                    poll.disableVotedPolls();
	
	                    rootJquery.event.trigger({type: "wfcms-poll-voted", 'pollId': $this.data('poll')});
	                });
	            },
	
	            markPollVoted: function (id, vote) {
	                var expDate = new Date();
	                expDate.setHours(expDate.getHours() + 3);
	
	                document.cookie = '_cms-poll-' + id + '=' + vote +
	                    ';domain=' + document.location.hostname +
	                    ';path=/' +
	                    ';expires=' + expDate.toGMTString();
	            },
	
	            disableVotedPolls: function () {
	                var id, vote, votedPolls = Poll.votedPolls();
	
	                for (poll in votedPolls) {
	                    id = votedPolls[poll].id;
	                    vote = votedPolls[poll].vote;
	
	                    $('#poll-' + id)
	                        .addClass('poll-voted')
	                        .find('button[type=submit]')
	                        .addClass('disabled')
	                        .attr('disabled', 'disabled').end()
	                        .find('input[name=vote]').attr('disabled', 'disabled').end()
	                        .find('#' + vote)
	                        .attr('checked', 'checked').end()
	                        .find('.poll-results').show().end()
	                        .find('.poll-form').hide().end()
	                    ;
	                }
	            }
	        };
	
	        if ('PollConfig' in window) {
	            for (var key in window.PollConfig) {
	                if (window.PollConfig.hasOwnProperty(key)) {
	                    Poll[key] = window.PollConfig[key];
	                }
	            }
	        }
	
	        $(window.document).on('ready', function ($) {
	            Poll.init();
	            Poll.loadAll();
	        });
	
	        if (!'Poll' in window || !window.Poll) {
	            window.Poll = Poll;
	        }
	
	        $(window.document).trigger('poll-loaded')
	    };
	
	    bindPolls(jQuery, window);
	
	})(jQuery, window);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	  var jQuery = __webpack_require__(1);
	
	  /**
	   * Version: 1.0 Alpha-1 
	   * Build Date: 13-Nov-2007
	   * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
	   * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
	   * Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
	   */
	  Date.CultureInfo = { name: "en-US", englishName: "English (United States)", nativeName: "English (United States)", dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], amDesignator: "AM", pmDesignator: "PM", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "mdy", formatPatterns: { shortDate: "M/d/yyyy", longDate: "dddd, MMMM dd, yyyy", shortTime: "h:mm tt", longTime: "h:mm:ss tt", fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "MMMM dd", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^jan(uary)?/i, feb: /^feb(ruary)?/i, mar: /^mar(ch)?/i, apr: /^apr(il)?/i, may: /^may/i, jun: /^jun(e)?/i, jul: /^jul(y)?/i, aug: /^aug(ust)?/i, sep: /^sep(t(ember)?)?/i, oct: /^oct(ober)?/i, nov: /^nov(ember)?/i, dec: /^dec(ember)?/i, sun: /^su(n(day)?)?/i, mon: /^mo(n(day)?)?/i, tue: /^tu(e(s(day)?)?)?/i, wed: /^we(d(nesday)?)?/i, thu: /^th(u(r(s(day)?)?)?)?/i, fri: /^fr(i(day)?)?/i, sat: /^sa(t(urday)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|after|from)/i, subtract: /^(\-|before|ago)/i, yesterday: /^yesterday/i, today: /^t(oday)?/i, tomorrow: /^tomorrow/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^min(ute)?s?/i, hour: /^h(ou)?rs?/i, week: /^w(ee)?k/i, month: /^m(o(nth)?s?)?/i, day: /^d(ays?)?/i, year: /^y((ea)?rs?)?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a|p)/i }, abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" }, abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" } };
	  Date.getMonthNumberFromName = function (name) {
	    var n = Date.CultureInfo.monthNames,
	        m = Date.CultureInfo.abbreviatedMonthNames,
	        s = name.toLowerCase();for (var i = 0; i < n.length; i++) {
	      if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) {
	        return i;
	      }
	    }
	    return -1;
	  };Date.getDayNumberFromName = function (name) {
	    var n = Date.CultureInfo.dayNames,
	        m = Date.CultureInfo.abbreviatedDayNames,
	        o = Date.CultureInfo.shortestDayNames,
	        s = name.toLowerCase();for (var i = 0; i < n.length; i++) {
	      if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) {
	        return i;
	      }
	    }
	    return -1;
	  };Date.isLeapYear = function (year) {
	    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
	  };Date.getDaysInMonth = function (year, month) {
	    return [31, Date.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	  };Date.getTimezoneOffset = function (s, dst) {
	    return dst || false ? Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()];
	  };Date.getTimezoneAbbreviation = function (offset, dst) {
	    var n = dst || false ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard,
	        p;for (p in n) {
	      if (n[p] === offset) {
	        return p;
	      }
	    }
	    return null;
	  };Date.prototype.clone = function () {
	    return new Date(this.getTime());
	  };Date.prototype.compareTo = function (date) {
	    if (isNaN(this)) {
	      throw new Error(this);
	    }
	    if (date instanceof Date && !isNaN(date)) {
	      return this > date ? 1 : this < date ? -1 : 0;
	    } else {
	      throw new TypeError(date);
	    }
	  };Date.prototype.equals = function (date) {
	    return this.compareTo(date) === 0;
	  };Date.prototype.between = function (start, end) {
	    var t = this.getTime();return t >= start.getTime() && t <= end.getTime();
	  };Date.prototype.addMilliseconds = function (value) {
	    this.setMilliseconds(this.getMilliseconds() + value);return this;
	  };Date.prototype.addSeconds = function (value) {
	    return this.addMilliseconds(value * 1000);
	  };Date.prototype.addMinutes = function (value) {
	    return this.addMilliseconds(value * 60000);
	  };Date.prototype.addHours = function (value) {
	    return this.addMilliseconds(value * 3600000);
	  };Date.prototype.addDays = function (value) {
	    return this.addMilliseconds(value * 86400000);
	  };Date.prototype.addWeeks = function (value) {
	    return this.addMilliseconds(value * 604800000);
	  };Date.prototype.addMonths = function (value) {
	    var n = this.getDate();this.setDate(1);this.setMonth(this.getMonth() + value);this.setDate(Math.min(n, this.getDaysInMonth()));return this;
	  };Date.prototype.addYears = function (value) {
	    return this.addMonths(value * 12);
	  };Date.prototype.add = function (config) {
	    if (typeof config == "number") {
	      this._orient = config;return this;
	    }
	    var x = config;if (x.millisecond || x.milliseconds) {
	      this.addMilliseconds(x.millisecond || x.milliseconds);
	    }
	    if (x.second || x.seconds) {
	      this.addSeconds(x.second || x.seconds);
	    }
	    if (x.minute || x.minutes) {
	      this.addMinutes(x.minute || x.minutes);
	    }
	    if (x.hour || x.hours) {
	      this.addHours(x.hour || x.hours);
	    }
	    if (x.month || x.months) {
	      this.addMonths(x.month || x.months);
	    }
	    if (x.year || x.years) {
	      this.addYears(x.year || x.years);
	    }
	    if (x.day || x.days) {
	      this.addDays(x.day || x.days);
	    }
	    return this;
	  };Date._validate = function (value, min, max, name) {
	    if (typeof value != "number") {
	      throw new TypeError(value + " is not a Number.");
	    } else if (value < min || value > max) {
	      throw new RangeError(value + " is not a valid value for " + name + ".");
	    }
	    return true;
	  };Date.validateMillisecond = function (n) {
	    return Date._validate(n, 0, 999, "milliseconds");
	  };Date.validateSecond = function (n) {
	    return Date._validate(n, 0, 59, "seconds");
	  };Date.validateMinute = function (n) {
	    return Date._validate(n, 0, 59, "minutes");
	  };Date.validateHour = function (n) {
	    return Date._validate(n, 0, 23, "hours");
	  };Date.validateDay = function (n, year, month) {
	    return Date._validate(n, 1, Date.getDaysInMonth(year, month), "days");
	  };Date.validateMonth = function (n) {
	    return Date._validate(n, 0, 11, "months");
	  };Date.validateYear = function (n) {
	    return Date._validate(n, 1, 9999, "seconds");
	  };Date.prototype.set = function (config) {
	    var x = config;if (!x.millisecond && x.millisecond !== 0) {
	      x.millisecond = -1;
	    }
	    if (!x.second && x.second !== 0) {
	      x.second = -1;
	    }
	    if (!x.minute && x.minute !== 0) {
	      x.minute = -1;
	    }
	    if (!x.hour && x.hour !== 0) {
	      x.hour = -1;
	    }
	    if (!x.day && x.day !== 0) {
	      x.day = -1;
	    }
	    if (!x.month && x.month !== 0) {
	      x.month = -1;
	    }
	    if (!x.year && x.year !== 0) {
	      x.year = -1;
	    }
	    if (x.millisecond != -1 && Date.validateMillisecond(x.millisecond)) {
	      this.addMilliseconds(x.millisecond - this.getMilliseconds());
	    }
	    if (x.second != -1 && Date.validateSecond(x.second)) {
	      this.addSeconds(x.second - this.getSeconds());
	    }
	    if (x.minute != -1 && Date.validateMinute(x.minute)) {
	      this.addMinutes(x.minute - this.getMinutes());
	    }
	    if (x.hour != -1 && Date.validateHour(x.hour)) {
	      this.addHours(x.hour - this.getHours());
	    }
	    if (x.month !== -1 && Date.validateMonth(x.month)) {
	      this.addMonths(x.month - this.getMonth());
	    }
	    if (x.year != -1 && Date.validateYear(x.year)) {
	      this.addYears(x.year - this.getFullYear());
	    }
	    if (x.day != -1 && Date.validateDay(x.day, this.getFullYear(), this.getMonth())) {
	      this.addDays(x.day - this.getDate());
	    }
	    if (x.timezone) {
	      this.setTimezone(x.timezone);
	    }
	    if (x.timezoneOffset) {
	      this.setTimezoneOffset(x.timezoneOffset);
	    }
	    return this;
	  };Date.prototype.clearTime = function () {
	    this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;
	  };Date.prototype.isLeapYear = function () {
	    var y = this.getFullYear();return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
	  };Date.prototype.isWeekday = function () {
	    return !(this.is().sat() || this.is().sun());
	  };Date.prototype.getDaysInMonth = function () {
	    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
	  };Date.prototype.moveToFirstDayOfMonth = function () {
	    return this.set({ day: 1 });
	  };Date.prototype.moveToLastDayOfMonth = function () {
	    return this.set({ day: this.getDaysInMonth() });
	  };Date.prototype.moveToDayOfWeek = function (day, orient) {
	    var diff = (day - this.getDay() + 7 * (orient || +1)) % 7;return this.addDays(diff === 0 ? diff += 7 * (orient || +1) : diff);
	  };Date.prototype.moveToMonth = function (month, orient) {
	    var diff = (month - this.getMonth() + 12 * (orient || +1)) % 12;return this.addMonths(diff === 0 ? diff += 12 * (orient || +1) : diff);
	  };Date.prototype.getDayOfYear = function () {
	    return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 86400000);
	  };Date.prototype.getWeekOfYear = function (firstDayOfWeek) {
	    var y = this.getFullYear(),
	        m = this.getMonth(),
	        d = this.getDate();var dow = firstDayOfWeek || Date.CultureInfo.firstDayOfWeek;var offset = 7 + 1 - new Date(y, 0, 1).getDay();if (offset == 8) {
	      offset = 1;
	    }
	    var daynum = (Date.UTC(y, m, d, 0, 0, 0) - Date.UTC(y, 0, 1, 0, 0, 0)) / 86400000 + 1;var w = Math.floor((daynum - offset + 7) / 7);if (w === dow) {
	      y--;var prevOffset = 7 + 1 - new Date(y, 0, 1).getDay();if (prevOffset == 2 || prevOffset == 8) {
	        w = 53;
	      } else {
	        w = 52;
	      }
	    }
	    return w;
	  };Date.prototype.isDST = function () {
	    console.log("isDST");return this.toString().match(/(E|C|M|P)(S|D)T/)[2] == "D";
	  };Date.prototype.getTimezone = function () {
	    return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST());
	  };Date.prototype.setTimezoneOffset = function (s) {
	    var here = this.getTimezoneOffset(),
	        there = Number(s) * -6 / 10;this.addMinutes(there - here);return this;
	  };Date.prototype.setTimezone = function (s) {
	    return this.setTimezoneOffset(Date.getTimezoneOffset(s));
	  };Date.prototype.getUTCOffset = function () {
	    var n = this.getTimezoneOffset() * -10 / 6,
	        r;if (n < 0) {
	      r = (n - 10000).toString();return r[0] + r.substr(2);
	    } else {
	      r = (n + 10000).toString();return "+" + r.substr(1);
	    }
	  };Date.prototype.getDayName = function (abbrev) {
	    return abbrev ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()];
	  };Date.prototype.getMonthName = function (abbrev) {
	    return abbrev ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()];
	  };Date.prototype._toString = Date.prototype.toString;Date.prototype.toString = function (format) {
	    var self = this;var p = function p(s) {
	      return s.toString().length == 1 ? "0" + s : s;
	    };return format ? format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function (format) {
	      switch (format) {case "hh":
	          return p(self.getHours() < 13 ? self.getHours() : self.getHours() - 12);case "h":
	          return self.getHours() < 13 ? self.getHours() : self.getHours() - 12;case "HH":
	          return p(self.getHours());case "H":
	          return self.getHours();case "mm":
	          return p(self.getMinutes());case "m":
	          return self.getMinutes();case "ss":
	          return p(self.getSeconds());case "s":
	          return self.getSeconds();case "yyyy":
	          return self.getFullYear();case "yy":
	          return self.getFullYear().toString().substring(2, 4);case "dddd":
	          return self.getDayName();case "ddd":
	          return self.getDayName(true);case "dd":
	          return p(self.getDate());case "d":
	          return self.getDate().toString();case "MMMM":
	          return self.getMonthName();case "MMM":
	          return self.getMonthName(true);case "MM":
	          return p(self.getMonth() + 1);case "M":
	          return self.getMonth() + 1;case "t":
	          return self.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);case "tt":
	          return self.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;case "zzz":case "zz":case "z":
	          return "";}
	    }) : this._toString();
	  };
	  Date.now = function () {
	    return new Date();
	  };Date.today = function () {
	    return Date.now().clearTime();
	  };Date.prototype._orient = +1;Date.prototype.next = function () {
	    this._orient = +1;return this;
	  };Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function () {
	    this._orient = -1;return this;
	  };Date.prototype._is = false;Date.prototype.is = function () {
	    this._is = true;return this;
	  };Number.prototype._dateElement = "day";Number.prototype.fromNow = function () {
	    var c = {};c[this._dateElement] = this;return Date.now().add(c);
	  };Number.prototype.ago = function () {
	    var c = {};c[this._dateElement] = this * -1;return Date.now().add(c);
	  };(function () {
	    var $D = Date.prototype,
	        $N = Number.prototype;var dx = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/),
	        mx = "january february march april may june july august september october november december".split(/\s/),
	        px = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/),
	        de;var df = function df(n) {
	      return function () {
	        if (this._is) {
	          this._is = false;return this.getDay() == n;
	        }
	        return this.moveToDayOfWeek(n, this._orient);
	      };
	    };for (var i = 0; i < dx.length; i++) {
	      $D[dx[i]] = $D[dx[i].substring(0, 3)] = df(i);
	    }
	    var mf = function mf(n) {
	      return function () {
	        if (this._is) {
	          this._is = false;return this.getMonth() === n;
	        }
	        return this.moveToMonth(n, this._orient);
	      };
	    };for (var j = 0; j < mx.length; j++) {
	      $D[mx[j]] = $D[mx[j].substring(0, 3)] = mf(j);
	    }
	    var ef = function ef(j) {
	      return function () {
	        if (j.substring(j.length - 1) != "s") {
	          j += "s";
	        }
	        return this["add" + j](this._orient);
	      };
	    };var nf = function nf(n) {
	      return function () {
	        this._dateElement = n;return this;
	      };
	    };for (var k = 0; k < px.length; k++) {
	      de = px[k].toLowerCase();$D[de] = $D[de + "s"] = ef(px[k]);$N[de] = $N[de + "s"] = nf(de);
	    }
	  })();Date.prototype.toJSONString = function () {
	    return this.toString("yyyy-MM-ddThh:mm:ssZ");
	  };Date.prototype.toShortDateString = function () {
	    return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern);
	  };Date.prototype.toLongDateString = function () {
	    return this.toString(Date.CultureInfo.formatPatterns.longDatePattern);
	  };Date.prototype.toShortTimeString = function () {
	    return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern);
	  };Date.prototype.toLongTimeString = function () {
	    return this.toString(Date.CultureInfo.formatPatterns.longTimePattern);
	  };Date.prototype.getOrdinal = function () {
	    switch (this.getDate()) {case 1:case 21:case 31:
	        return "st";case 2:case 22:
	        return "nd";case 3:case 23:
	        return "rd";default:
	        return "th";}
	  };
	  (function () {
	    Date.Parsing = { Exception: function Exception(s) {
	        this.message = "Parse error at '" + s.substring(0, 10) + " ...'";
	      } };var $P = Date.Parsing;var _ = $P.Operators = { rtoken: function rtoken(r) {
	        return function (s) {
	          var mx = s.match(r);if (mx) {
	            return [mx[0], s.substring(mx[0].length)];
	          } else {
	            throw new $P.Exception(s);
	          }
	        };
	      }, token: function token(s) {
	        return function (s) {
	          return _.rtoken(new RegExp("^s*" + s + "s*"))(s);
	        };
	      }, stoken: function stoken(s) {
	        return _.rtoken(new RegExp("^" + s));
	      }, until: function until(p) {
	        return function (s) {
	          var qx = [],
	              rx = null;while (s.length) {
	            try {
	              rx = p.call(this, s);
	            } catch (e) {
	              qx.push(rx[0]);s = rx[1];continue;
	            }
	            break;
	          }
	          return [qx, s];
	        };
	      }, many: function many(p) {
	        return function (s) {
	          var rx = [],
	              r = null;while (s.length) {
	            try {
	              r = p.call(this, s);
	            } catch (e) {
	              return [rx, s];
	            }
	            rx.push(r[0]);s = r[1];
	          }
	          return [rx, s];
	        };
	      }, optional: function optional(p) {
	        return function (s) {
	          var r = null;try {
	            r = p.call(this, s);
	          } catch (e) {
	            return [null, s];
	          }
	          return [r[0], r[1]];
	        };
	      }, not: function not(p) {
	        return function (s) {
	          try {
	            p.call(this, s);
	          } catch (e) {
	            return [null, s];
	          }
	          throw new $P.Exception(s);
	        };
	      }, ignore: function ignore(p) {
	        return p ? function (s) {
	          var r = null;r = p.call(this, s);return [null, r[1]];
	        } : null;
	      }, product: function product() {
	        var px = arguments[0],
	            qx = Array.prototype.slice.call(arguments, 1),
	            rx = [];for (var i = 0; i < px.length; i++) {
	          rx.push(_.each(px[i], qx));
	        }
	        return rx;
	      }, cache: (function (_cache) {
	        var _cacheWrapper = function cache(_x) {
	          return _cache.apply(this, arguments);
	        };
	
	        _cacheWrapper.toString = function () {
	          return _cache.toString();
	        };
	
	        return _cacheWrapper;
	      })(function (rule) {
	        var cache = {},
	            r = null;return function (s) {
	          try {
	            r = cache[s] = cache[s] || rule.call(this, s);
	          } catch (e) {
	            r = cache[s] = e;
	          }
	          if (r instanceof $P.Exception) {
	            throw r;
	          } else {
	            return r;
	          }
	        };
	      }), any: function any() {
	        var px = arguments;return function (s) {
	          var r = null;for (var i = 0; i < px.length; i++) {
	            if (px[i] == null) {
	              continue;
	            }
	            try {
	              r = px[i].call(this, s);
	            } catch (e) {
	              r = null;
	            }
	            if (r) {
	              return r;
	            }
	          }
	          throw new $P.Exception(s);
	        };
	      }, each: function each() {
	        var px = arguments;return function (s) {
	          var rx = [],
	              r = null;for (var i = 0; i < px.length; i++) {
	            if (px[i] == null) {
	              continue;
	            }
	            try {
	              r = px[i].call(this, s);
	            } catch (e) {
	              throw new $P.Exception(s);
	            }
	            rx.push(r[0]);s = r[1];
	          }
	          return [rx, s];
	        };
	      }, all: function all() {
	        var px = arguments,
	            _ = _;return _.each(_.optional(px));
	      }, sequence: function sequence(px, d, c) {
	        d = d || _.rtoken(/^\s*/);c = c || null;if (px.length == 1) {
	          return px[0];
	        }
	        return function (s) {
	          var r = null,
	              q = null;var rx = [];for (var i = 0; i < px.length; i++) {
	            try {
	              r = px[i].call(this, s);
	            } catch (e) {
	              break;
	            }
	            rx.push(r[0]);try {
	              q = d.call(this, r[1]);
	            } catch (ex) {
	              q = null;break;
	            }
	            s = q[1];
	          }
	          if (!r) {
	            throw new $P.Exception(s);
	          }
	          if (q) {
	            throw new $P.Exception(q[1]);
	          }
	          if (c) {
	            try {
	              r = c.call(this, r[1]);
	            } catch (ey) {
	              throw new $P.Exception(r[1]);
	            }
	          }
	          return [rx, r ? r[1] : s];
	        };
	      }, between: function between(d1, p, d2) {
	        d2 = d2 || d1;var _fn = _.each(_.ignore(d1), p, _.ignore(d2));return function (s) {
	          var rx = _fn.call(this, s);return [[rx[0][0], r[0][2]], rx[1]];
	        };
	      }, list: function list(p, d, c) {
	        d = d || _.rtoken(/^\s*/);c = c || null;return p instanceof Array ? _.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) : _.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c));
	      }, set: function set(px, d, c) {
	        d = d || _.rtoken(/^\s*/);c = c || null;return function (s) {
	          var r = null,
	              p = null,
	              q = null,
	              rx = null,
	              best = [[], s],
	              last = false;for (var i = 0; i < px.length; i++) {
	            q = null;p = null;r = null;last = px.length == 1;try {
	              r = px[i].call(this, s);
	            } catch (e) {
	              continue;
	            }
	            rx = [[r[0]], r[1]];if (r[1].length > 0 && !last) {
	              try {
	                q = d.call(this, r[1]);
	              } catch (ex) {
	                last = true;
	              }
	            } else {
	              last = true;
	            }
	            if (!last && q[1].length === 0) {
	              last = true;
	            }
	            if (!last) {
	              var qx = [];for (var j = 0; j < px.length; j++) {
	                if (i != j) {
	                  qx.push(px[j]);
	                }
	              }
	              p = _.set(qx, d).call(this, q[1]);if (p[0].length > 0) {
	                rx[0] = rx[0].concat(p[0]);rx[1] = p[1];
	              }
	            }
	            if (rx[1].length < best[1].length) {
	              best = rx;
	            }
	            if (best[1].length === 0) {
	              break;
	            }
	          }
	          if (best[0].length === 0) {
	            return best;
	          }
	          if (c) {
	            try {
	              q = c.call(this, best[1]);
	            } catch (ey) {
	              throw new $P.Exception(best[1]);
	            }
	            best[1] = q[1];
	          }
	          return best;
	        };
	      }, forward: function forward(gr, fname) {
	        return function (s) {
	          return gr[fname].call(this, s);
	        };
	      }, replace: function replace(rule, repl) {
	        return function (s) {
	          var r = rule.call(this, s);return [repl, r[1]];
	        };
	      }, process: function process(rule, fn) {
	        return function (s) {
	          var r = rule.call(this, s);return [fn.call(this, r[0]), r[1]];
	        };
	      }, min: (function (_min) {
	        var _minWrapper = function min(_x, _x2) {
	          return _min.apply(this, arguments);
	        };
	
	        _minWrapper.toString = function () {
	          return _min.toString();
	        };
	
	        return _minWrapper;
	      })(function (min, rule) {
	        return function (s) {
	          var rx = rule.call(this, s);if (rx[0].length < min) {
	            throw new $P.Exception(s);
	          }
	          return rx;
	        };
	      }) };var _generator = function _generator(op) {
	      return function () {
	        var args = null,
	            rx = [];if (arguments.length > 1) {
	          args = Array.prototype.slice.call(arguments);
	        } else if (arguments[0] instanceof Array) {
	          args = arguments[0];
	        }
	        if (args) {
	          for (var i = 0, px = args.shift(); i < px.length; i++) {
	            args.unshift(px[i]);rx.push(op.apply(null, args));args.shift();return rx;
	          }
	        } else {
	          return op.apply(null, arguments);
	        }
	      };
	    };var gx = "optional not ignore cache".split(/\s/);for (var i = 0; i < gx.length; i++) {
	      _[gx[i]] = _generator(_[gx[i]]);
	    }
	    var _vector = function _vector(op) {
	      return function () {
	        if (arguments[0] instanceof Array) {
	          return op.apply(null, arguments[0]);
	        } else {
	          return op.apply(null, arguments);
	        }
	      };
	    };var vx = "each any all".split(/\s/);for (var j = 0; j < vx.length; j++) {
	      _[vx[j]] = _vector(_[vx[j]]);
	    }
	  })();(function () {
	    var flattenAndCompact = (function (_flattenAndCompact) {
	      var _flattenAndCompactWrapper = function flattenAndCompact(_x) {
	        return _flattenAndCompact.apply(this, arguments);
	      };
	
	      _flattenAndCompactWrapper.toString = function () {
	        return _flattenAndCompact.toString();
	      };
	
	      return _flattenAndCompactWrapper;
	    })(function (ax) {
	      var rx = [];for (var i = 0; i < ax.length; i++) {
	        if (ax[i] instanceof Array) {
	          rx = rx.concat(flattenAndCompact(ax[i]));
	        } else {
	          if (ax[i]) {
	            rx.push(ax[i]);
	          }
	        }
	      }
	      return rx;
	    });Date.Grammar = {};Date.Translator = { hour: function hour(s) {
	        return function () {
	          this.hour = Number(s);
	        };
	      }, minute: function minute(s) {
	        return function () {
	          this.minute = Number(s);
	        };
	      }, second: function second(s) {
	        return function () {
	          this.second = Number(s);
	        };
	      }, meridian: function meridian(s) {
	        return function () {
	          this.meridian = s.slice(0, 1).toLowerCase();
	        };
	      }, timezone: function timezone(s) {
	        return function () {
	          var n = s.replace(/[^\d\+\-]/g, "");if (n.length) {
	            this.timezoneOffset = Number(n);
	          } else {
	            this.timezone = s.toLowerCase();
	          }
	        };
	      }, day: function day(x) {
	        var s = x[0];return function () {
	          this.day = Number(s.match(/\d+/)[0]);
	        };
	      }, month: function month(s) {
	        return function () {
	          this.month = s.length == 3 ? Date.getMonthNumberFromName(s) : Number(s) - 1;
	        };
	      }, year: function year(s) {
	        return function () {
	          var n = Number(s);this.year = s.length > 2 ? n : n + (n + 2000 < Date.CultureInfo.twoDigitYearMax ? 2000 : 1900);
	        };
	      }, rday: function rday(s) {
	        return function () {
	          switch (s) {case "yesterday":
	              this.days = -1;break;case "tomorrow":
	              this.days = 1;break;case "today":
	              this.days = 0;break;case "now":
	              this.days = 0;this.now = true;break;}
	        };
	      }, finishExact: function finishExact(x) {
	        x = x instanceof Array ? x : [x];var now = new Date();this.year = now.getFullYear();this.month = now.getMonth();this.day = 1;this.hour = 0;this.minute = 0;this.second = 0;for (var i = 0; i < x.length; i++) {
	          if (x[i]) {
	            x[i].call(this);
	          }
	        }
	        this.hour = this.meridian == "p" && this.hour < 13 ? this.hour + 12 : this.hour;if (this.day > Date.getDaysInMonth(this.year, this.month)) {
	          throw new RangeError(this.day + " is not a valid value for days.");
	        }
	        var r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);if (this.timezone) {
	          r.set({ timezone: this.timezone });
	        } else if (this.timezoneOffset) {
	          r.set({ timezoneOffset: this.timezoneOffset });
	        }
	        return r;
	      }, finish: function finish(x) {
	        x = x instanceof Array ? flattenAndCompact(x) : [x];if (x.length === 0) {
	          return null;
	        }
	        for (var i = 0; i < x.length; i++) {
	          if (typeof x[i] == "function") {
	            x[i].call(this);
	          }
	        }
	        if (this.now) {
	          return new Date();
	        }
	        var today = Date.today();var method = null;var expression = !!(this.days != null || this.orient || this.operator);if (expression) {
	          var gap, mod, orient;orient = this.orient == "past" || this.operator == "subtract" ? -1 : 1;if (this.weekday) {
	            this.unit = "day";gap = Date.getDayNumberFromName(this.weekday) - today.getDay();mod = 7;this.days = gap ? (gap + orient * mod) % mod : orient * mod;
	          }
	          if (this.month) {
	            this.unit = "month";gap = this.month - today.getMonth();mod = 12;this.months = gap ? (gap + orient * mod) % mod : orient * mod;this.month = null;
	          }
	          if (!this.unit) {
	            this.unit = "day";
	          }
	          if (this[this.unit + "s"] == null || this.operator != null) {
	            if (!this.value) {
	              this.value = 1;
	            }
	            if (this.unit == "week") {
	              this.unit = "day";this.value = this.value * 7;
	            }
	            this[this.unit + "s"] = this.value * orient;
	          }
	          return today.add(this);
	        } else {
	          if (this.meridian && this.hour) {
	            this.hour = this.hour < 13 && this.meridian == "p" ? this.hour + 12 : this.hour;
	          }
	          if (this.weekday && !this.day) {
	            this.day = today.addDays(Date.getDayNumberFromName(this.weekday) - today.getDay()).getDate();
	          }
	          if (this.month && !this.day) {
	            this.day = 1;
	          }
	          return today.set(this);
	        }
	      } };var _ = Date.Parsing.Operators,
	        g = Date.Grammar,
	        t = Date.Translator,
	        _fn;g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter = _.stoken(":");g.whiteSpace = _.rtoken(/^\s*/);g.generalDelimiter = _.rtoken(/^(([\s\,]|at|on)+)/);var _C = {};g.ctoken = function (keys) {
	      var fn = _C[keys];if (!fn) {
	        var c = Date.CultureInfo.regexPatterns;var kx = keys.split(/\s+/),
	            px = [];for (var i = 0; i < kx.length; i++) {
	          px.push(_.replace(_.rtoken(c[kx[i]]), kx[i]));
	        }
	        fn = _C[keys] = _.any.apply(null, px);
	      }
	      return fn;
	    };g.ctoken2 = function (key) {
	      return _.rtoken(Date.CultureInfo.regexPatterns[key]);
	    };g.h = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), t.hour));g.hh = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/), t.hour));g.H = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), t.hour));g.HH = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/), t.hour));g.m = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.minute));g.mm = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.minute));g.s = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.second));g.ss = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.second));g.hms = _.cache(_.sequence([g.H, g.mm, g.ss], g.timePartDelimiter));g.t = _.cache(_.process(g.ctoken2("shortMeridian"), t.meridian));g.tt = _.cache(_.process(g.ctoken2("longMeridian"), t.meridian));g.z = _.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), t.timezone));g.zz = _.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/), t.timezone));g.zzz = _.cache(_.process(g.ctoken2("timezone"), t.timezone));g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([g.tt, g.zzz]));g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix);g.d = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/), _.optional(g.ctoken2("ordinalSuffix"))), t.day));g.dd = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/), _.optional(g.ctoken2("ordinalSuffix"))), t.day));g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"), function (s) {
	      return function () {
	        this.weekday = s;
	      };
	    }));g.M = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/), t.month));g.MM = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/), t.month));g.MMM = g.MMMM = _.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month));g.y = _.cache(_.process(_.rtoken(/^(\d\d?)/), t.year));g.yy = _.cache(_.process(_.rtoken(/^(\d\d)/), t.year));g.yyy = _.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/), t.year));g.yyyy = _.cache(_.process(_.rtoken(/^(\d\d\d\d)/), t.year));_fn = function () {
	      return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext")));
	    };g.day = _fn(g.d, g.dd);g.month = _fn(g.M, g.MMM);g.year = _fn(g.yyyy, g.yy);g.orientation = _.process(g.ctoken("past future"), function (s) {
	      return function () {
	        this.orient = s;
	      };
	    });g.operator = _.process(g.ctoken("add subtract"), function (s) {
	      return function () {
	        this.operator = s;
	      };
	    });g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday);g.unit = _.process(g.ctoken("minute hour day week month year"), function (s) {
	      return function () {
	        this.unit = s;
	      };
	    });g.value = _.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/), function (s) {
	      return function () {
	        this.value = s.replace(/\D/g, "");
	      };
	    });g.expression = _.set([g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM]);_fn = function () {
	      return _.set(arguments, g.datePartDelimiter);
	    };g.mdy = _fn(g.ddd, g.month, g.day, g.year);g.ymd = _fn(g.ddd, g.year, g.month, g.day);g.dmy = _fn(g.ddd, g.day, g.month, g.year);g.date = function (s) {
	      return (g[Date.CultureInfo.dateElementOrder] || g.mdy).call(this, s);
	    };g.format = _.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function (fmt) {
	      if (g[fmt]) {
	        return g[fmt];
	      } else {
	        throw Date.Parsing.Exception(fmt);
	      }
	    }), _.process(_.rtoken(/^[^dMyhHmstz]+/), function (s) {
	      return _.ignore(_.stoken(s));
	    }))), function (rules) {
	      return _.process(_.each.apply(null, rules), t.finishExact);
	    });var _F = {};var _get = function _get(f) {
	      return _F[f] = _F[f] || g.format(f)[0];
	    };g.formats = function (fx) {
	      if (fx instanceof Array) {
	        var rx = [];for (var i = 0; i < fx.length; i++) {
	          rx.push(_get(fx[i]));
	        }
	        return _.any.apply(null, rx);
	      } else {
	        return _get(fx);
	      }
	    };g._formats = g.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]);g._start = _.process(_.set([g.date, g.time, g.expression], g.generalDelimiter, g.whiteSpace), t.finish);g.start = function (s) {
	      try {
	        var r = g._formats.call({}, s);if (r[1].length === 0) {
	          return r;
	        }
	      } catch (e) {}
	      return g._start.call({}, s);
	    };
	  })();Date._parse = Date.parse;Date.parse = function (s) {
	    var r = null;if (!s) {
	      return null;
	    }
	    try {
	      r = Date.Grammar.start.call({}, s);
	    } catch (e) {
	      return null;
	    }
	    return r[1].length === 0 ? r[0] : null;
	  };Date.getParseFunction = function (fx) {
	    var fn = Date.Grammar.formats(fx);return function (s) {
	      var r = null;try {
	        r = fn.call({}, s);
	      } catch (e) {
	        return null;
	      }
	      return r[1].length === 0 ? r[0] : null;
	    };
	  };Date.parseExact = function (s, fx) {
	    return Date.getParseFunction(fx)(s);
	  };
	}).call(window);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	  var jQuery = __webpack_require__(1);
	
	  /*!
	   *  Sharrre.com - Make your sharing widget!
	   *  Version: beta 1.3.5
	   *  Author: Julien Hany
	   *  License: MIT http://en.wikipedia.org/wiki/MIT_License or GPLv2 http://en.wikipedia.org/wiki/GNU_General_Public_License
	   */
	
	  ;(function ($, window, document, undefined) {
	
	    /* Defaults
	    ================================================== */
	    var pluginName = "sharrre",
	        defaults = {
	      className: "sharrre",
	      share: {
	        googlePlus: false,
	        facebook: false,
	        twitter: false,
	        digg: false,
	        delicious: false,
	        stumbleupon: false,
	        linkedin: false,
	        pinterest: false
	      },
	      shareTotal: 0,
	      template: "",
	      title: "",
	      url: document.location.href,
	      text: document.title,
	      urlCurl: "", //PHP script for google plus...
	      count: {}, //counter by social network
	      total: 0, //total of sharing
	      shorterTotal: true, //show total by k or M when number is to big
	      enableHover: true, //disable if you want to personalize hover event with callback
	      enableCounter: true, //disable if you just want use buttons
	      enableTracking: false, //tracking with google analitycs
	      hover: function hover() {}, //personalize hover event with this callback function
	      hide: function hide() {}, //personalize hide event with this callback function
	      click: function click() {}, //personalize click event with this callback function
	      render: function render() {}, //personalize render event with this callback function
	      buttons: { //settings for buttons
	        googlePlus: { //http://www.google.com/webmasters/+1/button/
	          url: "", //if you need to personnalize button url
	          urlCount: false, //if you want to use personnalize button url on global counter
	          size: "medium",
	          lang: "en-US",
	          annotation: ""
	        },
	        facebook: { //http://developers.facebook.com/docs/reference/plugins/like/
	          url: "", //if you need to personalize url button
	          urlCount: false, //if you want to use personnalize button url on global counter
	          action: "like",
	          layout: "button_count",
	          width: "",
	          send: "false",
	          faces: "false",
	          colorscheme: "",
	          font: "",
	          lang: "en_US"
	        },
	        twitter: { //http://twitter.com/about/resources/tweetbutton
	          url: "", //if you need to personalize url button
	          urlCount: false, //if you want to use personnalize button url on global counter
	          count: "horizontal",
	          hashtags: "",
	          via: "",
	          related: "",
	          lang: "en"
	        },
	        digg: { //http://about.digg.com/downloads/button/smart
	          url: "", //if you need to personalize url button
	          urlCount: false, //if you want to use personnalize button url on global counter
	          type: "DiggCompact"
	        },
	        delicious: {
	          url: "", //if you need to personalize url button
	          urlCount: false, //if you want to use personnalize button url on global counter
	          size: "medium" //medium or tall
	        },
	        stumbleupon: { //http://www.stumbleupon.com/badges/
	          url: "", //if you need to personalize url button
	          urlCount: false, //if you want to use personnalize button url on global counter
	          layout: "1"
	        },
	        linkedin: { //http://developer.linkedin.com/plugins/share-button
	          url: "", //if you need to personalize url button
	          urlCount: false, //if you want to use personnalize button url on global counter
	          counter: ""
	        },
	        pinterest: { //http://pinterest.com/about/goodies/
	          url: "", //if you need to personalize url button
	          media: "",
	          description: "",
	          layout: "horizontal"
	        }
	      }
	    },
	
	    /* Json URL to get count number
	    ================================================== */
	    urlJson = {
	      googlePlus: "",
	
	      //new FQL method by Sire
	      facebook: "https://graph.facebook.com/?fields=share&id={url}",
	      //old method facebook: "http://graph.facebook.com/?id={url}&callback=?",
	      //facebook : "http://api.ak.facebook.com/restserver.php?v=1.0&method=links.getStats&urls={url}&format=json"
	
	      twitter: "http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
	      digg: "http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",
	      delicious: "http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",
	      //stumbleupon: "http://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}&format=jsonp&callback=?",
	      stumbleupon: "",
	      linkedin: "http://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
	      pinterest: "http://api.pinterest.com/v1/urls/count.json?url={url}&callback=?"
	    },
	
	    /* Load share buttons asynchronously
	    ================================================== */
	    loadButton = {
	      googlePlus: function googlePlus(self) {
	        var sett = self.options.buttons.googlePlus;
	        //$(self.element).find('.buttons').append('<div class="button googleplus"><g:plusone size="'+self.options.buttons.googlePlus.size+'" href="'+self.options.url+'"></g:plusone></div>');
	        $(self.element).find(".buttons").append("<div class=\"button googleplus\"><div class=\"g-plusone\" data-size=\"" + sett.size + "\" data-href=\"" + (sett.url !== "" ? sett.url : self.options.url) + "\" data-annotation=\"" + sett.annotation + "\"></div></div>");
	        window.___gcfg = {
	          lang: self.options.buttons.googlePlus.lang
	        };
	        var loading = 0;
	        if (typeof gapi === "undefined" && loading == 0) {
	          loading = 1;
	          (function () {
	            var po = document.createElement("script");po.type = "text/javascript";po.async = true;
	            po.src = "//apis.google.com/js/plusone.js";
	            var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po, s);
	          })();
	        } else {
	          gapi.plusone.go();
	        }
	      },
	      facebook: function facebook(self) {
	        var sett = self.options.buttons.facebook;
	        $(self.element).find(".buttons").append("<div class=\"button facebook\"><div id=\"fb-root\"></div><div class=\"fb-like\" data-href=\"" + (sett.url !== "" ? sett.url : self.options.url) + "\" data-send=\"" + sett.send + "\" data-layout=\"" + sett.layout + "\" data-width=\"" + sett.width + "\" data-show-faces=\"" + sett.faces + "\" data-action=\"" + sett.action + "\" data-colorscheme=\"" + sett.colorscheme + "\" data-font=\"" + sett.font + "\" data-via=\"" + sett.via + "\"></div></div>");
	        var loading = 0;
	        if (typeof FB === "undefined" && loading == 0) {
	          loading = 1;
	          (function (d, s, id) {
	            var js,
	                fjs = d.getElementsByTagName(s)[0];
	            if (d.getElementById(id)) {
	              return;
	            }
	            js = d.createElement(s);js.id = id;
	            js.src = "//connect.facebook.net/" + sett.lang + "/all.js#xfbml=1";
	            fjs.parentNode.insertBefore(js, fjs);
	          })(document, "script", "facebook-jssdk");
	        } else {
	          FB.XFBML.parse();
	        }
	      },
	      twitter: function twitter(self) {
	        var sett = self.options.buttons.twitter;
	        $(self.element).find(".buttons").append("<div class=\"button twitter\"><a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-url=\"" + (sett.url !== "" ? sett.url : self.options.url) + "\" data-count=\"" + sett.count + "\" data-text=\"" + self.options.text + "\" data-via=\"" + sett.via + "\" data-hashtags=\"" + sett.hashtags + "\" data-related=\"" + sett.related + "\" data-lang=\"" + sett.lang + "\">Tweet</a></div>");
	        var loading = 0;
	        if (typeof twttr === "undefined" && loading == 0) {
	          loading = 1;
	          (function () {
	            var twitterScriptTag = document.createElement("script");
	            twitterScriptTag.type = "text/javascript";
	            twitterScriptTag.async = true;
	            twitterScriptTag.src = "//platform.twitter.com/widgets.js";
	            var s = document.getElementsByTagName("script")[0];
	            s.parentNode.insertBefore(twitterScriptTag, s);
	          })();
	        } else {
	          $.ajax({ url: "//platform.twitter.com/widgets.js", dataType: "script", cache: true }); //http://stackoverflow.com/q/6536108
	        }
	      },
	      digg: function digg(self) {
	        var sett = self.options.buttons.digg;
	        $(self.element).find(".buttons").append("<div class=\"button digg\"><a class=\"DiggThisButton " + sett.type + "\" rel=\"nofollow external\" href=\"http://digg.com/submit?url=" + encodeURIComponent(sett.url !== "" ? sett.url : self.options.url) + "\"></a></div>");
	        var loading = 0;
	        if (typeof __DBW === "undefined" && loading == 0) {
	          loading = 1;
	          (function () {
	            var s = document.createElement("SCRIPT"),
	                s1 = document.getElementsByTagName("SCRIPT")[0];
	            s.type = "text/javascript";
	            s.async = true;
	            s.src = "//widgets.digg.com/buttons.js";
	            s1.parentNode.insertBefore(s, s1);
	          })();
	        }
	      },
	      delicious: function delicious(self) {
	        if (self.options.buttons.delicious.size == "tall") {
	          //tall
	          var css = "width:50px;",
	              cssCount = "height:35px;width:50px;font-size:15px;line-height:35px;",
	              cssShare = "height:18px;line-height:18px;margin-top:3px;";
	        } else {
	          //medium
	          var css = "width:93px;",
	              cssCount = "float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",
	              cssShare = "float:left;height:20px;line-height:20px;";
	        }
	        var count = self.shorterTotal(self.options.count.delicious);
	        if (typeof count === "undefined") {
	          count = 0;
	        }
	        $(self.element).find(".buttons").append("<div class=\"button delicious\"><div style=\"" + css + "font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;\">" + "<div style=\"" + cssCount + "background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;\">" + count + "</div>" + "<div style=\"" + cssShare + "display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;\">" + "<img src=\"http://www.delicious.com/static/img/delicious.small.gif\" height=\"10\" width=\"10\" alt=\"Delicious\" /> Add</div></div></div>");
	
	        $(self.element).find(".delicious").on("click", function () {
	          self.openPopup("delicious");
	        });
	      },
	      stumbleupon: function stumbleupon(self) {
	        var sett = self.options.buttons.stumbleupon;
	        $(self.element).find(".buttons").append("<div class=\"button stumbleupon\"><su:badge layout=\"" + sett.layout + "\" location=\"" + (sett.url !== "" ? sett.url : self.options.url) + "\"></su:badge></div>");
	        var loading = 0;
	        if (typeof STMBLPN === "undefined" && loading == 0) {
	          loading = 1;
	          (function () {
	            var li = document.createElement("script");li.type = "text/javascript";li.async = true;
	            li.src = "//platform.stumbleupon.com/1/widgets.js";
	            var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(li, s);
	          })();
	          s = window.setTimeout(function () {
	            if (typeof STMBLPN !== "undefined") {
	              STMBLPN.processWidgets();
	              clearInterval(s);
	            }
	          }, 500);
	        } else {
	          STMBLPN.processWidgets();
	        }
	      },
	      linkedin: function linkedin(self) {
	        var sett = self.options.buttons.linkedin;
	        $(self.element).find(".buttons").append("<div class=\"button linkedin\"><script type=\"in/share\" data-url=\"" + (sett.url !== "" ? sett.url : self.options.url) + "\" data-counter=\"" + sett.counter + "\"></script></div>");
	        var loading = 0;
	        if (typeof window.IN === "undefined" && loading == 0) {
	          loading = 1;
	          (function () {
	            var li = document.createElement("script");li.type = "text/javascript";li.async = true;
	            li.src = "//platform.linkedin.com/in.js";
	            var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(li, s);
	          })();
	        } else {
	          window.IN.init();
	        }
	      },
	      pinterest: function pinterest(self) {
	        var sett = self.options.buttons.pinterest;
	        $(self.element).find(".buttons").append("<div class=\"button pinterest\"><a href=\"http://pinterest.com/pin/create/button/?url=" + (sett.url !== "" ? sett.url : self.options.url) + "&media=" + sett.media + "&description=" + sett.description + "\" class=\"pin-it-button\" count-layout=\"" + sett.layout + "\">Pin It</a></div>");
	
	        (function () {
	          var li = document.createElement("script");li.type = "text/javascript";li.async = true;
	          li.src = "//assets.pinterest.com/js/pinit.js";
	          var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(li, s);
	        })();
	      }
	    },
	
	    /* Tracking for Google Analytics
	    ================================================== */
	    tracking = {
	      googlePlus: function googlePlus() {},
	      facebook: function facebook() {
	        //console.log('facebook');
	        fb = window.setInterval(function () {
	          if (typeof FB !== "undefined") {
	            FB.Event.subscribe("edge.create", function (targetUrl) {
	              _gaq.push(["_trackSocial", "facebook", "like", targetUrl]);
	            });
	            FB.Event.subscribe("edge.remove", function (targetUrl) {
	              _gaq.push(["_trackSocial", "facebook", "unlike", targetUrl]);
	            });
	            FB.Event.subscribe("message.send", function (targetUrl) {
	              _gaq.push(["_trackSocial", "facebook", "send", targetUrl]);
	            });
	            //console.log('ok');
	            clearInterval(fb);
	          }
	        }, 1000);
	      },
	      twitter: function twitter() {
	        //console.log('twitter');
	        tw = window.setInterval(function () {
	          if (typeof twttr !== "undefined") {
	            twttr.events.bind("tweet", function (event) {
	              if (event) {
	                _gaq.push(["_trackSocial", "twitter", "tweet"]);
	              }
	            });
	            //console.log('ok');
	            clearInterval(tw);
	          }
	        }, 1000);
	      },
	      digg: function digg() {},
	      delicious: function delicious() {},
	      stumbleupon: function stumbleupon() {},
	      linkedin: function linkedin() {
	        function LinkedInShare() {
	          _gaq.push(["_trackSocial", "linkedin", "share"]);
	        }
	      },
	      pinterest: function pinterest() {}
	    },
	
	    /* Popup for each social network
	    ================================================== */
	    popup = {
	      googlePlus: function googlePlus(opt) {
	        window.open("https://plus.google.com/share?hl=" + opt.buttons.googlePlus.lang + "&url=" + encodeURIComponent(opt.buttons.googlePlus.url !== "" ? opt.buttons.googlePlus.url : opt.url), "", "toolbar=0, status=0, width=900, height=500");
	      },
	      facebook: function facebook(opt) {
	        window.open("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(opt.buttons.facebook.url !== "" ? opt.buttons.facebook.url : opt.url) + "&t=" + opt.text + "", "", "toolbar=0, status=0, width=900, height=500");
	      },
	      twitter: function twitter(opt) {
	        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(opt.text) + "&url=" + encodeURIComponent(opt.buttons.twitter.url !== "" ? opt.buttons.twitter.url : opt.url) + (opt.buttons.twitter.via !== "" ? "&via=" + opt.buttons.twitter.via : ""), "", "toolbar=0, status=0, width=650, height=360");
	      },
	      digg: function digg(opt) {
	        window.open("http://digg.com/tools/diggthis/submit?url=" + encodeURIComponent(opt.buttons.digg.url !== "" ? opt.buttons.digg.url : opt.url) + "&title=" + opt.text + "&related=true&style=true", "", "toolbar=0, status=0, width=650, height=360");
	      },
	      delicious: function delicious(opt) {
	        window.open("http://www.delicious.com/save?v=5&noui&jump=close&url=" + encodeURIComponent(opt.buttons.delicious.url !== "" ? opt.buttons.delicious.url : opt.url) + "&title=" + opt.text, "delicious", "toolbar=no,width=550,height=550");
	      },
	      stumbleupon: function stumbleupon(opt) {
	        window.open("http://www.stumbleupon.com/badge/?url=" + encodeURIComponent(opt.buttons.delicious.url !== "" ? opt.buttons.delicious.url : opt.url), "stumbleupon", "toolbar=no,width=550,height=550");
	      },
	      linkedin: function linkedin(opt) {
	        window.open("https://www.linkedin.com/cws/share?url=" + encodeURIComponent(opt.buttons.delicious.url !== "" ? opt.buttons.delicious.url : opt.url) + "&token=&isFramed=true", "linkedin", "toolbar=no,width=550,height=550");
	      },
	      pinterest: function pinterest(opt) {
	        window.open("http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(opt.buttons.pinterest.url !== "" ? opt.buttons.pinterest.url : opt.url) + "&media=" + encodeURIComponent(opt.buttons.pinterest.media) + "&description=" + opt.buttons.pinterest.description, "pinterest", "toolbar=no,width=700,height=300");
	      }
	    };
	
	    /* Plugin constructor
	    ================================================== */
	    function Plugin(element, options) {
	      this.element = element;
	
	      this.options = $.extend(true, {}, defaults, options);
	      this.options.share = options.share; //simple solution to allow order of buttons
	
	      this._defaults = defaults;
	      this._name = pluginName;
	
	      this.init();
	    };
	
	    /* Initialization method
	    ================================================== */
	    Plugin.prototype.init = function () {
	      var self = this;
	      if (this.options.urlCurl !== "") {
	        urlJson.googlePlus = this.options.urlCurl + "?url={url}&type=googlePlus"; // PHP script for GooglePlus...
	        urlJson.stumbleupon = this.options.urlCurl + "?url={url}&type=stumbleupon"; // PHP script for Stumbleupon...
	      }
	      $(this.element).addClass(this.options.className); //add class
	
	      //HTML5 Custom data
	      if (typeof $(this.element).data("title") !== "undefined") {
	        this.options.title = $(this.element).attr("data-title");
	      }
	      if (typeof $(this.element).data("url") !== "undefined") {
	        this.options.url = $(this.element).data("url");
	      }
	      if (typeof $(this.element).data("text") !== "undefined") {
	        this.options.text = $(this.element).data("text");
	      }
	
	      //how many social website have been selected
	      $.each(this.options.share, function (name, val) {
	        if (val === true) {
	          self.options.shareTotal++;
	        }
	      });
	
	      if (self.options.enableCounter === true) {
	        //if for some reason you don't need counter
	        //get count of social share that have been selected
	        $.each(this.options.share, function (name, val) {
	          if (val === true) {
	            //self.getSocialJson(name);
	            try {
	              self.getSocialJson(name);
	            } catch (e) {}
	          }
	        });
	      } else if (self.options.template !== "") {
	        //for personalized button (with template)
	        this.options.render(this, this.options);
	      } else {
	        // if you want to use official button like example 3 or 5
	        this.loadButtons();
	      }
	
	      //add hover event
	      $(this.element).hover(function () {
	        //load social button if enable and 1 time
	        if ($(this).find(".buttons").length === 0 && self.options.enableHover === true) {
	          self.loadButtons();
	        }
	        self.options.hover(self, self.options);
	      }, function () {
	        self.options.hide(self, self.options);
	      });
	
	      //click event
	      $(this.element).click(function () {
	        self.options.click(self, self.options);
	        return false;
	      });
	    };
	
	    /* loadButtons methode
	    ================================================== */
	    Plugin.prototype.loadButtons = function () {
	      var self = this;
	      $(this.element).append("<div class=\"buttons\"></div>");
	      $.each(self.options.share, function (name, val) {
	        if (val == true) {
	          loadButton[name](self);
	          if (self.options.enableTracking === true) {
	            //add tracking
	            tracking[name]();
	          }
	        }
	      });
	    };
	
	    /* getSocialJson methode
	    ================================================== */
	    Plugin.prototype.getSocialJson = function (name) {
	      var self = this,
	          count = 0,
	          url = urlJson[name].replace("{url}", encodeURIComponent(this.options.url));
	      if (this.options.buttons[name].urlCount === true && this.options.buttons[name].url !== "") {
	        url = urlJson[name].replace("{url}", this.options.buttons[name].url);
	      }
	      if (name == "twitter") {
	        url = "";
	      }
	      if (name == "googlePlus") {
	        url = "";
	      }
	      //console.log('name : ' + name + ' - url : '+url); //debug
	      if (url != "") {
	        //urlCurl = '' if you don't want to used PHP script but used social button
	        $.getJSON(url, function (json) {
	          if (typeof json.count !== "undefined") {
	            //GooglePlus, Stumbleupon, Twitter, Pinterest and Digg
	            var temp = json.count + "";
	            temp = temp.replace("Â ", ""); //remove google plus special chars
	            count += parseInt(temp, 10);
	          }
	          //get the FB total count (shares, likes and more)
	          else if (json.share && typeof json.share.share_count !== "undefined" && json.share.share_count > 0) {
	            //Facebook total count
	            count += parseInt(json.share.share_count, 10);
	          } else if (typeof json[0] !== "undefined") {
	            //Delicious
	            count += parseInt(json[0].total_posts, 10);
	          } else if (typeof json[0] !== "undefined") {}
	          self.options.count[name] = count;
	          self.options.total += count;
	          self.renderer();
	          self.rendererPerso();
	          //console.log(json); //debug
	        }).error(function () {
	          self.options.count[name] = 0;
	          self.rendererPerso();
	        });
	      } else {
	        self.renderer();
	        self.options.count[name] = 0;
	        self.rendererPerso();
	      }
	    };
	
	    /* launch render methode
	    ================================================== */
	    Plugin.prototype.rendererPerso = function () {
	      //check if this is the last social website to launch render
	      var shareCount = 0;
	      for (var e in this.options.count) {
	        shareCount++;
	      }
	      if (shareCount === this.options.shareTotal) {
	        this.options.render(this, this.options);
	      }
	    };
	
	    /* render methode
	    ================================================== */
	    Plugin.prototype.renderer = function () {
	      var total = this.options.total,
	          template = this.options.template;
	      if (this.options.shorterTotal === true) {
	        //format number like 1.2k or 5M
	        total = this.shorterTotal(total);
	      }
	
	      if (template !== "") {
	        //if there is a template
	        template = template.replace("{total}", total);
	        $(this.element).html(template);
	      } else {
	        //template by defaults
	        $(this.element).html("<div class=\"box\"><a class=\"count\" href=\"#\">" + total + "</a>" + (this.options.title !== "" ? "<a class=\"share\" href=\"#\">" + this.options.title + "</a>" : "") + "</div>");
	      }
	    };
	
	    /* format total numbers like 1.2k or 5M
	    ================================================== */
	    Plugin.prototype.shorterTotal = function (num) {
	      if (num >= 1000000) {
	        num = (num / 1000000).toFixed(2) + "M";
	      } else if (num >= 1000) {
	        num = (num / 1000).toFixed(1) + "k";
	      }
	      return num;
	    };
	
	    /* Methode for open popup
	    ================================================== */
	    Plugin.prototype.openPopup = function (site) {
	      popup[site](this.options); //open
	      if (this.options.enableTracking === true) {
	        //tracking!
	        var tracking = {
	          googlePlus: { site: "Google", action: "+1" },
	          facebook: { site: "facebook", action: "like" },
	          twitter: { site: "twitter", action: "tweet" },
	          digg: { site: "digg", action: "add" },
	          delicious: { site: "delicious", action: "add" },
	          stumbleupon: { site: "stumbleupon", action: "add" },
	          linkedin: { site: "linkedin", action: "share" },
	          pinterest: { site: "pinterest", action: "pin" }
	        };
	        _gaq.push(["_trackSocial", tracking[site].site, tracking[site].action]);
	      }
	    };
	
	    /* Methode for add +1 to a counter
	    ================================================== */
	    Plugin.prototype.simulateClick = function () {
	      var html = $(this.element).html();
	      // $(this.element).html(html.replace(this.options.total, this.options.total+1));
	      $(this.element).find("span").html(this.options.total + 1);
	    };
	
	    /* Methode for add +1 to a counter
	    ================================================== */
	    Plugin.prototype.update = function (url, text) {
	      if (url !== "") {
	        this.options.url = url;
	      }
	      if (text !== "") {
	        this.options.text = text;
	      }
	    };
	
	    /* A really lightweight plugin wrapper around the constructor, preventing against multiple instantiations
	    ================================================== */
	    $.fn[pluginName] = function (options) {
	      var args = arguments;
	      if (options === undefined || typeof options === "object") {
	        return this.each(function () {
	          if (!$.data(this, "plugin_" + pluginName)) {
	            $.data(this, "plugin_" + pluginName, new Plugin(this, options));
	          }
	        });
	      } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
	        return this.each(function () {
	          var instance = $.data(this, "plugin_" + pluginName);
	          if (instance instanceof Plugin && typeof instance[options] === "function") {
	            instance[options].apply(instance, Array.prototype.slice.call(args, 1));
	          }
	        });
	      }
	    };
	  })(jQuery, window, document);
	}).call(window);
	
	//if somenone find a solution, mail me !
	/*$(this.element).find('.digg').on('click', function(){
	  _gaq.push(['_trackSocial', 'digg', 'add']);
	});*/

	//if somenone find a solution, mail me !
	//Stumbleupon
	}.call(window));

/***/ },
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    jQuery(function ($) {
	
	        var isAdmin = __webpack_require__(6).isAdmin;
	
	        (function showAdvancedSearch() {
	            $(document).on("click", ".advanced-search-toggle", function (ev) {
	                ev.preventDefault();
	                $(".advanced-search-container").toggleClass("active");
	                $(this).toggleClass("active");
	            });
	        })();
	
	        (function advancedSearchFilters() {
	            var $form = $(".advanced-search-form");
	            $("#as-ct-all").click(function () {
	                $(".advanced-search input[type=\"checkbox\"]").removeAttr("checked");
	                $form.submit();
	            });
	            $(".advanced-search input[type=\"checkbox\"]").click(function () {
	                $form.submit();
	            });
	            $(".search-content-date input[type=\"checkbox\"]").click(function () {
	                var $from = $form.find("#adv_search_published_at_from"),
	                    $until = $form.find("#adv_search_published_at_until"),
	                    $this = $(this),
	                    format = "yyyy-MM-dd",
	                    todayDate = Date.today().toString(format);
	                $(".search-content-date input[type=\"checkbox\"]").removeAttr("checked");
	                $this.prop("checked", true);
	                $until.val(todayDate);
	                switch ($this.val()) {
	                    case "today":
	                        var date = new Date();
	                        $from.val(date.toString(format));
	                        break;
	                    case "week":
	                        var date = new Date();
	                        date.setDate(date.getDate() - 7);
	                        $from.val(date.toString(format));
	                        break;
	                    case "month":
	                        var date = new Date();
	                        date.setMonth(date.getMonth() - 1);
	                        $from.val(date.toString(format));
	                        break;
	                    case "year":
	                        var date = new Date();
	                        date.setFullYear(date.getFullYear() - 1);
	                        $from.val(date.toString(format));
	                        break;
	                    case "all":
	                        $from.val("");
	                        break;
	                    default:
	                        $from.remove();
	                        $until.remove();
	                }
	
	                $form.submit();
	            });
	        })();
	    });
	}).call(window);
	}.call(window));

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    // document loaded
	    jQuery(function ($) {
	        var $bar = $(".social-bar, .square-icons, .share-options");
	        bindShare($bar);
	
	        (function toggleMobileShare() {
	            $(".social-share-mobile-icon").click(function () {
	                $(".share-mobile-background").toggleClass("bg-off bg-on");
	                $(this).parents(".article-social").toggleClass("opened", "");
	                $(this).parent().find("ul").toggle();
	            });
	        })();
	
	        (function shareWhatsapp() {
	            $(".share-icon-mobile.whatsapp").click(function (event) {
	                event.preventDefault();
	                var encodedUrl;
	                if ($("body").hasClass("article-page")) {
	                    encodedUrl = encodeURIComponent(document.location);
	                }
	                window.location.href = "whatsapp://send?text=" + encodedUrl;
	            });
	        })();
	    });
	    window.bindShare = function ($selectors) {
	        var $networks = $selectors.find("li[data-network]");
	        var url = window.location.href;
	        $networks.each(function () {
	            var $this = $(this);
	            var network = $this.data("network");
	            var title = "";
	            if (typeof $this.find("a").data("title") != "undefined" && $this.find("a").data("title") != "") {
	                title = $this.find("a").data("title") + "  ";
	            }
	            if (!network) {
	                return;
	            }
	
	            var href;
	            switch (network) {
	                case "twitter":
	                    href = "https://twitter.com/intent/tweet?text=" + title + url;
	                    break;
	                case "googlePlus":
	                    href = "https://plus.google.com/share?url=" + url;
	                    break;
	            }
	
	            if (href) {
	                $this.find("a").attr("href", href);
	
	                // return;
	            }
	
	            $this.find("span").html("{total}");
	            var template = $this.html();
	
	            var options = {
	                share: {
	                    facebook: true,
	                    twitter: true,
	                    googlePlus: true
	                },
	                enableHover: false,
	                url: url,
	                enableTracking: false,
	                enableCounter: true,
	                template: template,
	                click: function click(api, options) {
	                    api.simulateClick();
	                    api.openPopup(network);
	                    if (network == "facebook") {
	                        var trackUrl = $this.find("a").data("track");
	                        if (trackUrl != undefined && trackUrl != "") {
	                            var image = new Image();
	                            image.src = trackUrl;
	                        }
	                    }
	                }
	            };
	
	            $this.html("");
	
	            $this.sharrre(options);
	        });
	    };
	}).call(window);
	}.call(window));

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    $(document).ready(function () {
	        if (document.location.host.indexOf("admin") !== -1) {
	            return;
	        };
	        var supportsTransition = (function () {
	            var b = document.body || document.documentElement;
	            var s = b.style;
	            var p = "transition";
	            if (typeof s[p] == "string") {
	                return true;
	            }
	
	            // Tests for vendor specific prop
	            v = ["Moz", "Webkit", "Khtml", "O", "ms"], p = p.charAt(0).toUpperCase() + p.substr(1);
	            for (var i = 0; i < v.length; i++) {
	                if (typeof s[v[i] + p] == "string") {
	                    return true;
	                }
	            }
	            return false;
	        })(),
	            stopEvent = function stopEvent(ev) {
	            ev.preventDefault();
	            ev.stopPropagation();
	            ev.stopImmediatePropagation();
	        };
	
	        function sliderInit($el) {
	            var $this = $el || $(this),
	                $pane = $this.find(".slider-pane"),
	                $buttonsContainer = $this.parents(".slider-wrapper").find(".slider-buttons");
	
	            if (!$buttonsContainer.length) {
	                $buttonsContainer = $this.find(".slider-buttons");
	            };
	
	            var $leftButton = $buttonsContainer.find(".left-arrow"),
	                $rightButton = $buttonsContainer.find(".right-arrow"),
	                slidesSize = $this.find(".slide").length,
	                sliderOptions = $this.data("slider-options") || {},
	                sliderOptions = $.extend(sliderOptions, $this.data("options")),
	                perPage = parseInt(sliderOptions.perPage) || 1,
	                slideMargin = sliderOptions.slideMargin || 0,
	                maxWidth = Math.floor($this.width() / perPage);
	
	            //console.log('max', $pane.width(), maxWidth);
	
	            // if gallery article type, add last page to slider
	            var $lastPage = $(".gallery-last-page");
	            if ($lastPage.length) {
	                $lastPage.clone().appendTo($pane).end().end().remove();
	            };
	
	            var $slider = $pane.bxSlider({
	                useCss: supportsTransition,
	                pager: sliderOptions.pager || false,
	                infiniteLoop: false,
	                speed: 300,
	                auto: false,
	                adaptiveHeight: true,
	                minSlides: perPage,
	                maxSlides: perPage,
	                moveSlides: parseInt(sliderOptions.slideSize) || perPage,
	                slideMargin: slideMargin,
	                slideWidth: maxWidth,
	                hideControlOnEnd: true,
	                infiniteLoop: false,
	                nextSelector: $rightButton,
	                prevSelector: $leftButton,
	                onSlideBefore: sliderOptions.onSlideBefore || function () {},
	                onSlideAfter: sliderOptions.onSlideAfter || function ($slide, oldIndex, newIndex) {
	                    if ($slide.attr("class") == "gallery-last-page") {} else {}
	                    var $counter = $el.find(".slideIndex");
	                    if (!$counter.length) {
	                        $counter = $el.parent().find(".slideIndex");
	                    };
	                    var counts = newIndex + 1;
	                    $counter.html("<span class=\"count-index\">" + counts + "</span> <span class=\"dividir-icon\"></span> <span class=\"count-total\">" + slidesSize + "</span>");
	
	                    toggleDisableButtons($rightButton);
	                    toggleDisableButtons($leftButton);
	
	                    if (sliderOptions.thumbnails) {
	                        // activate next thumbnail
	                        $pager.find("a").removeClass("active").eq(newIndex).addClass("active");
	                    };
	
	                    // add trigger to allow pagecount
	                    $el.trigger("wf-slider-slide-after");
	                },
	                onSlideNext: function onSlideNext($slideElement, oldIndex, newIndex) {
	                    if (sliderOptions.thumbnails) {
	                        $pager.goToNextSlide();
	                    }
	                },
	                onSlidePrev: function onSlidePrev($slideElement, oldIndex, newIndex) {
	                    if (sliderOptions.thumbnails) {
	                        $pager.goToPrevSlide();
	                    }
	                }
	            });
	
	            $(document).on("reset-to-first-slide", function () {
	                $slider.goToSlide(0, "prev");
	            });
	
	            if (sliderOptions.thumbnails) {
	                var $pager = createThumbnailPager($this, $slider, sliderOptions);
	            };
	
	            $el.data("slider", $slider); // keep slider object in data to allow future mofidication(eg. reloading)
	
	            toggleDisableButtons($rightButton);
	            toggleDisableButtons($leftButton);
	
	            // counter arrows
	            $el.find(".counter .counter-arrow").each(function () {
	                var $this = $(this);
	                if ($this.hasClass("prev")) {
	                    $this.click(function () {
	                        $slider.goToPrevSlide();
	                    });
	                } else if ($this.hasClass("next")) {
	                    $this.click(function () {
	                        $slider.goToNextSlide();
	                    });
	                }
	            });
	        }
	
	        function toggleDisableButtons($button) {
	            if ($button.find(".disabled").length) {
	                $button.addClass("disabled");
	                $button.hide();
	            } else {
	                $button.removeClass("disabled");
	                $button.show();
	            }
	        }
	
	        function createThumbnailPager($el, $slider, sliderOptions) {
	            var pager = "<div>";
	
	            $el.find(".slide").each(function (index) {
	                var $this = $(this),
	                    src = $this.find("img").attr("src"),
	                    title = $this.find(".title").text();
	
	                src = src.replace(/\/files\/([^\/]*?)(__[0-9](_[0-9])?)?\//, "/files/article_gallery_thumbnails/");
	
	                pager += "<a data-slide-index=\"" + index + "\">";
	                pager += "<img src=\"" + src + "\" />";
	                pager += "<div class=\"title\">" + title + "</div>";
	                pager += "</a>";
	            });
	
	            pager += "</div>";
	
	            var $pager = $(pager),
	                thumbnailsPerPage = sliderOptions.thumbnailsLength || 4;
	            $el.append($("<div>").addClass("thumbnails").append($pager));
	            $pager.bxSlider({
	                slideWidth: 100,
	                minSlides: thumbnailsPerPage,
	                maxSlides: thumbnailsPerPage,
	                moveSlides: 1,
	                slideMargin: 10,
	                pager: false,
	                infiniteLoop: false
	            });
	
	            $pager.closest(".thumbnails").data("slider", $pager).end().find("a").first().addClass("active").end().on("click", function (event) {
	                var $this = $(this);
	                $this.addClass("active").siblings().removeClass("active");
	                var sliderIndex = $this.data("slide-index"),
	                    sliderTotal = $slider.getSlideCount();
	
	                if (sliderIndex >= 2) {
	                    var pagerIndex = (sliderIndex + sliderTotal - 1) % sliderTotal;
	                    if (pagerIndex >= sliderTotal - thumbnailsPerPage) {
	                        $pager.goToNextSlide();
	                    } else {
	                        $pager.goToSlide(pagerIndex);
	                    }
	                } else if (sliderIndex == 1) {
	                    $pager.goToPrevSlide(); // fix for small gallery
	                } else if (sliderIndex == sliderTotal - 1) {
	                    $pager.goToNextSlide();
	                }
	
	                $slider.goToSlide(sliderIndex);
	            });
	
	            return $pager;
	        }
	
	        window.sliderModalInit = function ($el) {
	            if ($el.hasClass("with-counter")) {
	                counterInit($el);
	            }
	
	            sliderInit($el);
	
	            if ($el.hasClass("with-zoom")) {
	                var $trigger = $("<div>").addClass("gallery-zoom").appendTo($el);
	                magnificPopupInit($el, $trigger);
	            }
	            if ($el.hasClass("with-zoom-custom")) {
	                $("<div>").addClass("gallery-zoom-custom").appendTo($el);
	            }
	        };
	
	        function counterInit($el) {
	            var $slides = $el.find(".slide"),
	                html = "<span class=\"counter-arrow prev\"></span>" + "<span class=\"slideIndex\"><span class=\"count-index\">1</span> <span class=\"dividir-icon\"></span> <span class=\"count-total\">" + $slides.length + "</span></span>" + "<span class=\"counter-arrow next\"></span>",
	                $counter = $el.parent().find(".counter");
	
	            if (!$counter.length) {
	                $counter = $("<div>").addClass("counter").appendTo($el);
	            };
	            $counter.html(html);
	        }
	
	        function magnificPopupInit($el, $trigger) {
	            if (!$.fn || !$.fn.magnificPopup) {
	                return;
	            }
	
	            var $slider = $el.data("slider"),
	                id = $el.attr("id"),
	                items = [],
	                $slides = $el.find(".slide"),
	                showIndex = function showIndex(index) {
	                if ($el.data("magnificPopup")) {
	                    $el.magnificPopup("open", index);
	                    setTimeout(function () {
	                        $el.magnificPopup("goTo", index);
	                    }, 50);
	                }
	            };
	
	            $slides.each(function () {
	                if ($(this).find("img").attr("src") != undefined) {
	                    // slider can contains something else than an image
	                    items.push({
	                        src: $(this).find("img").attr("src").replace(/\/files\/([^\/]*?)(__[0-9](_[0-9])?)?\//, "/files/article_gallery_popup/"),
	                        type: "image"
	                    });
	                }
	            });
	
	            $el.magnificPopup({
	                key: id + "-popup",
	                type: "image",
	                mainClass: "photogallery-c " + id + "-popup mfp-with-zoom",
	                gallery: {
	                    enabled: true,
	                    navigateByImgClick: true,
	                    arrowMarkup: "<button title=\"%title%\" type=\"button\" class=\"mfp-arrow mfp-arrow-%dir%\"></button>",
	                    tCounter: "<span class=\"slideIndex mfp-counter\">" + "<span class=\"count-index\">%curr%</span>" + "<span class=\"dividir-icon\"></span>" + "<span class=\"count-total\">%total%</span>" + "</span>"
	
	                },
	                callbacks: {
	                    open: function open() {
	                        var $gallery = $("." + id + "-popup"),
	                            $content = $gallery.find(".mfp-content"),
	                            $left = $gallery.find(".left-arrow"),
	                            $right = $gallery.find(".right-arrow");
	
	                        $left.wrap("<div class=\"slider-buttons\"></div>");
	                        $left.parent().append($right);
	                        $content.append($left.parent());
	                    },
	                    elementParse: function elementParse(item) {
	                        var index = item.index;
	                        item.el = $("<div class=\"mfp-figure\">" + "<div class=\"mfp-title\">" + $(".article-top .title.tiemposRegular5").text() + "</div>" + "<div class=\"mfp-close\"></div>" + "<figure>" + "<div class=\"mfp-img\"><img src=\"" + item.src + "\"/> </div>" + "<figcaption>" + "<div class=\"mfp-bottom-bar\">" + "<div class=\"mfp-counter\"></div>" + "<div class=\"mfp-foto-author\">" + $slides.eq(index).find(".foto-author") + "</div>" + "<div class=\"mfp-foto-description\">" + $slides.eq(index).find(".foto-description") + "</div>" + "</div>" + "</figcaption>" + "</figure>" + "</div>").wrap("<div></div>").parent();
	                    }
	                },
	                items: items
	            });
	            $el.off("click");
	            $trigger.click(function (ev) {
	                stopEvent(ev);
	                showIndex($slider.getCurrentSlide());
	            });
	        }
	        $(".slider").each(function () {
	            var $this = $(this);
	            if (!$this.data("slider")) {
	                sliderModalInit($this);
	            }
	        });
	    });
	}).call(window);
	
	// $el.find('div.gallery-zoom').fadeOut();

	// $el.find('div.gallery-zoom').fadeIn();

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    jQuery(function ($) {
	        var $openedPoll;
	
	        window.Poll.init();
	
	        $(document).on("poll-load", function (ev) {
	            var $poll = $(ev.target);
	            setTimeout(function () {
	                $poll.find("form").show();
	                $poll.find("[disabled]").attr("disabled", null);
	            });
	        });
	        $(document).on("wfcms-poll-voted", function (ev) {
	            if (typeof $openedPoll != "undefined") {
	                $openedPoll.addClass("poll-voted");
	            }
	        });
	
	        function openPopup(ev, results) {
	            var $t = $(ev.target);
	            if ($t.parents(".modal").length) {
	                return;
	            }
	
	            ev.preventDefault();
	            ev.stopPropagation();
	            ev.stopImmediatePropagation();
	            var $pollModule = $t.closest(".module-poll.deportes-poll");
	            $openedPoll = $pollModule.find(".poll");
	            var $clone = $pollModule.clone(false);
	            $.magnificPopup.open({
	                type: "inline",
	                gallery: {
	                    enabled: false
	                },
	                items: [{
	                    type: "inline",
	                    src: "<div class=\"modal\">" + "<div class=\"modal-header\"></div>" + "<div class=\"modal-content\">" + "<div class=\"" + $pollModule.attr("class") + "\">" + $clone.html().replace("/view", "") + "</div>" + "</div></div>"
	                }]
	            });
	
	            window.Poll.loadAll();
	            var $container = $.magnificPopup.instance.container;
	            $container.addClass("mfp-modal");
	            $container.find(".module-poll.deportes-poll").prepend("<button class=\"mfp-close close\"> <span aria-hidden=\"true\">×</span> </button>");
	            var $popupPoll = $container.find(".poll");
	            $popupPoll.find(".see-results").removeClass("link").addClass("link-results");
	            $popupPoll.find(".link-results").click(function (ev) {
	                ev.preventDefault();
	                $popupPoll.find(".poll-form").hide();
	                $(document).find(".mfp-content .poll-results").show();
	                $popupPoll.find(".poll-results .option, .poll-results .buttons a").show();
	            });
	            if ($popupPoll.hasClass("poll-voted") || results) {
	                //when opening right after voting, the poll-results is hidden
	                $popupPoll.find(".poll-results").show();
	                $openedPoll.find(".poll-form").show();
	                $popupPoll.find(".poll-results .option, .poll-results .buttons a").show();
	            }
	
	            $container.on("click", ".close", function () {
	                $.magnificPopup.close();
	            });
	        }
	
	        $(document).on("click", ".module-poll.deportes-poll .buttons .see-results", function (ev) {
	            openPopup(ev, 1);
	        });
	        $(document).on("click", ".module-poll.deportes-poll .buttons .btn_votar", function (ev) {
	            openPopup(ev, 0);
	        });
	    });
	}).call(window);

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map