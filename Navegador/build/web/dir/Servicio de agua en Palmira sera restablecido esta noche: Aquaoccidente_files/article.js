publicWebpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	  var jQuery = __webpack_require__(1);
	
	  __webpack_require__(3);
	  __webpack_require__(4);
	  __webpack_require__(5);
	  __webpack_require__(7);
	  //require('imports?this=>window!js/loadMore');
	  //require('imports?this=>window!js/cxense_article');
	}).call(window);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var n=e.History=e.History||{},r=e.jQuery;if(typeof n.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");n.Adapter={bind:function(e,t,n){r(e).bind(t,n)},trigger:function(e,t,n){r(e).trigger(t,n)},extractEventData:function(e,n,r){var i=n&&n.originalEvent&&n.originalEvent[e]||r&&r[e]||t;return i},onDomLoad:function(e){r(e)}},typeof n.init!="undefined"&&n.init()}(window),function(e,t){"use strict";var n=e.document,r=e.setTimeout||r,i=e.clearTimeout||i,s=e.setInterval||s,o=e.History=e.History||{};if(typeof o.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");o.initHtml4=function(){if(typeof o.initHtml4.initialized!="undefined")return!1;o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e){var t=o.getHashByIndex(),n;return n=e===t,n},o.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),e===t},o.saveHash=function(e){return o.isLastHash(e)?!1:(o.savedHashes.push(e),!0)},o.getHashByIndex=function(e){var t=null;return typeof e=="undefined"?t=o.savedHashes[o.savedHashes.length-1]:e<0?t=o.savedHashes[o.savedHashes.length+e]:t=o.savedHashes[e],t},o.discardedHashes={},o.discardedStates={},o.discardState=function(e,t,n){var r=o.getHashByState(e),i;return i={discardedState:e,backState:n,forwardState:t},o.discardedStates[r]=i,!0},o.discardHash=function(e,t,n){var r={discardedHash:e,backState:n,forwardState:t};return o.discardedHashes[e]=r,!0},o.discardedState=function(e){var t=o.getHashByState(e),n;return n=o.discardedStates[t]||!1,n},o.discardedHash=function(e){var t=o.discardedHashes[e]||!1;return t},o.recycleState=function(e){var t=o.getHashByState(e);return o.discardedState(e)&&delete o.discardedStates[t],!0},o.emulated.hashChange&&(o.hashChangeInit=function(){o.checkerFunction=null;var t="",r,i,u,a,f=Boolean(o.getHash());return o.isInternetExplorer()?(r="historyjs-iframe",i=n.createElement("iframe"),i.setAttribute("id",r),i.setAttribute("src","#"),i.style.display="none",n.body.appendChild(i),i.contentWindow.document.open(),i.contentWindow.document.close(),u="",a=!1,o.checkerFunction=function(){if(a)return!1;a=!0;var n=o.getHash(),r=o.getHash(i.contentWindow.document);return n!==t?(t=n,r!==n&&(u=r=n,i.contentWindow.document.open(),i.contentWindow.document.close(),i.contentWindow.document.location.hash=o.escapeHash(n)),o.Adapter.trigger(e,"hashchange")):r!==u&&(u=r,f&&r===""?o.back():o.setHash(r,!1)),a=!1,!0}):o.checkerFunction=function(){var n=o.getHash()||"";return n!==t&&(t=n,o.Adapter.trigger(e,"hashchange")),!0},o.intervalList.push(s(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&&(o.onHashChange=function(t){var n=t&&t.newURL||o.getLocationHref(),r=o.getHashByUrl(n),i=null,s=null,u=null,a;return o.isLastHash(r)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(r),r&&o.isTraditionalAnchor(r)?(o.Adapter.trigger(e,"anchorchange"),o.busy(!1),!1):(i=o.extractState(o.getFullUrl(r||o.getLocationHref()),!0),o.isLastSavedState(i)?(o.busy(!1),!1):(s=o.getHashByState(i),a=o.discardedState(i),a?(o.getHashByIndex(-2)===o.getHashByState(a.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(i.data,i.title,encodeURI(i.url),!1),!0))))},o.Adapter.bind(e,"hashchange",o.onHashChange),o.pushState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getHash(),c=o.expectedStateId==s.id;return o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),u===f?(o.busy(!1),!1):(o.saveState(s),c||o.Adapter.trigger(e,"statechange"),!o.isHashEqual(u,l)&&!o.isHashEqual(u,o.getShortUrl(o.getLocationHref()))&&o.setHash(u,!1),o.busy(!1),!0)},o.replaceState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getStateByIndex(-2);return o.discardState(a,s,l),u===f?(o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),o.saveState(s),o.Adapter.trigger(e,"statechange"),o.busy(!1)):o.pushState(s.data,s.title,s.url,!1),!0}),o.emulated.pushState&&o.getHash()&&!o.emulated.hashChange&&o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,"hashchange")})},typeof o.init!="undefined"&&o.init()}(window),function(e,t){"use strict";var n=e.console||t,r=e.document,i=e.navigator,s=e.sessionStorage||!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s.setItem("TEST","1"),s.removeItem("TEST")}catch(d){s=!1}l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode;if(typeof h.init!="undefined")throw new Error("History.js Core has already been loaded...");h.init=function(e){return typeof h.Adapter=="undefined"?!1:(typeof h.initCore!="undefined"&&h.initCore(),typeof h.initHtml4!="undefined"&&h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!="undefined")return!1;h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(typeof t!="undefined"&&t!==null){for(e=0;e<t.length;e++)f(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e=typeof n!="undefined"&&typeof n.log!="undefined"&&typeof n.log.apply!="undefined",t=r.getElementById("log"),i,s,o,u,a;e?(u=Array.prototype.slice.call(arguments),i=u.shift(),typeof n.debug!="undefined"?n.debug.apply(n,[i,u]):n.log.apply(n,[i,u])):i="\n"+arguments[0]+"\n";for(s=1,o=arguments.length;s<o;++s){a=arguments[s];if(typeof a=="object"&&typeof l!="undefined")try{a=l.stringify(a)}catch(f){}i+="\n"+a+"\n"}return t?(t.value+=i+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):e||c(i),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!="undefined"?h.getInternetExplorerMajorVersion.cached:function(){var e=3,t=r.createElement("div"),n=t.getElementsByTagName("i");while((t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0]);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!="undefined"?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,n;return e?(t=l.stringify(e),n=l.parse(t)):n={},n},h.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);if(r.location.port||!1)e+=":"+r.location.port;return e+="/",e},h.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,n="";return e.length===1&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e=h.getState(!1,!1),t=(e||{}).url||h.getLocationHref(),n;return n=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"}),n},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var n=e,r=e.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(e)||(r==="/"?n=h.getRootUrl()+e.replace(/^\/+/,""):r==="#"?n=h.getPageUrl().replace(/#.*/,"")+e:r==="?"?n=h.getPageUrl().replace(/[\?#].*/,"")+e:t?n=h.getBaseUrl()+e.replace(/^(\.\/)+/,""):n=h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,n=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(n,"")),t=t.replace(r,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){typeof e=="undefined"&&(e=!0),typeof t=="undefined"&&(t=!0);var n=h.getLastSavedState();return!n&&t&&(n=h.createStateObject()),e&&(n=h.cloneObject(n),n.url=n.cleanUrl||n.url),n},h.getIdByState=function(e){var t=h.extractId(e.url),n;if(!t){n=h.getStateString(e);if(typeof h.stateToId[n]!="undefined")t=h.stateToId[n];else if(typeof h.store.stateToId[n]!="undefined")t=h.store.stateToId[n];else{for(;;){t=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof h.idToState[t]=="undefined"&&typeof h.store.idToState[t]=="undefined")break}h.stateToId[n]=t,h.idToState[t]=e}}return t},h.normalizeState=function(e){var t,n;if(!e||typeof e!="object")e={};if(typeof e.normalized!="undefined")return e;if(!e.data||typeof e.data!="object")e.data={};return t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,n=!h.isEmptyObject(t.data),(t.title||n)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t},h.createStateObject=function(e,t,n){var r={data:e,title:t,url:n};return r=h.normalizeState(r),r},h.getStateById=function(e){e=String(e);var n=h.idToState[e]||h.store.idToState[e]||t;return n},h.getStateString=function(e){var t,n,r;return t=h.normalizeState(e),n={data:t.data,title:e.title,url:e.url},r=l.stringify(n),r},h.getStateId=function(e){var t,n;return t=h.normalizeState(e),n=t.id,n},h.getHashByState=function(e){var t,n;return t=h.normalizeState(e),n=t.hash,n},h.extractId=function(e){var t,n,r,i;return e.indexOf("#")!=-1?i=e.split("#")[0]:i=e,n=/(.*)\&_suid=([0-9]+)$/.exec(i),r=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var n=null,r,i;return t=t||!1,r=h.extractId(e),r&&(n=h.getStateById(r)),n||(i=h.getFullUrl(e),r=h.getIdByUrl(i)||!1,r&&(n=h.getStateById(r)),!n&&t&&!h.isTraditionalAnchor(e)&&(n=h.createStateObject(null,null,i))),n},h.getIdByUrl=function(e){var n=h.urlToId[e]||h.store.urlToId[e]||t;return n},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t=!1,n;return n=h.extractState(e.url),t=n&&n.id!==e.id,t},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t=!1,n,r,i;return h.savedStates.length&&(n=e.id,r=h.getLastSavedState(),i=r.id,t=n===i),t},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return typeof e=="undefined"?t=h.savedStates[h.savedStates.length-1]:e<0?t=h.savedStates[h.savedStates.length+e]:t=h.savedStates[e],t},h.getCurrentIndex=function(){var e=null;return h.savedStates.length<1?e=0:e=h.savedStates.length-1,e},h.getHash=function(e){var t=h.getLocationHref(e),n;return n=h.getHashByUrl(t),n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t),t},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var n,i;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),n=h.extractState(e,!0),n&&!h.emulated.pushState?h.pushState(n.data,n.title,n.url,!1):h.getHash()!==e&&(h.bugs.setHash?(i=h.getPageUrl(),h.pushState(null,null,i+"#"+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var n=h.normalizeHash(t);return n=e.encodeURIComponent(n),h.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t),t},h.setTitle=function(e){var t=e.title,n;t||(n=h.getStateByIndex(0),n&&n.url===e.url&&(t=n.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(i){}return r.title=t,h},h.queues=[],h.busy=function(e){typeof e!="undefined"?h.busy.flag=e:typeof h.busy.flag=="undefined"&&(h.busy.flag=!1);if(!h.busy.flag){u(h.busy.timeout);var t=function(){var e,n,r;if(h.busy.flag)return;for(e=h.queues.length-1;e>=0;--e){n=h.queues[e];if(n.length===0)continue;r=n.shift(),h.fireQueueItem(r),h.busy.timeout=o(t,h.options.busyDelay)}};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return typeof e=="function"&&(e={callback:e}),typeof t!="undefined"&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t=h.extractState(h.getLocationHref()),n;if(!h.isLastSavedState(t))return n=t,n||(n=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h;return},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var n;if(e>0)for(n=1;n<=e;++n)h.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(n=-1;n>=e;--n)h.back(t)}return h};if(h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t,n){var r=!1,i=!1,s,o;return h.doubleCheckComplete(),s=h.getHash(),s?(o=h.extractState(s||h.getLocationHref(),!0),o?h.replaceState(o.data,o.title,o.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(r=h.Adapter.extractEventData("state",t,n)||!1,r?i=h.getStateById(r):h.expectedStateId?i=h.getStateById(h.expectedStateId):i=h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.pushState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.replaceState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0};if(s){try{h.store=l.parse(s.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&&(h.onUnload=function(){var e,t,n;try{e=l.parse(s.getItem("History.store"))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState){if(!h.idToState.hasOwnProperty(t))continue;e.idToState[t]=h.idToState[t]}for(t in h.urlToId){if(!h.urlToId.hasOwnProperty(t))continue;e.urlToId[t]=h.urlToId[t]}for(t in h.stateToId){if(!h.stateToId.hasOwnProperty(t))continue;e.stateToId[t]=h.stateToId[t]}h.store=e,h.normalizeStore(),n=l.stringify(e);try{s.setItem("History.store",n)}catch(i){if(i.code!==DOMException.QUOTA_EXCEEDED_ERR)throw i;s.length&&(s.removeItem("History.store"),s.setItem("History.store",n))}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload));if(!h.emulated.pushState){h.bugs.safariPoll&&h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval));if(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla")h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})}},(!h.options||!h.options.delayInit)&&h.init()}(window)

/***/ },
/* 4 */
/***/ function(module, exports) {

	(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;
	if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?
	(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    // document loaded
	    jQuery(function ($) {
	
	        var $window = $(window);
	
	        var _require = __webpack_require__(6);
	
	        var isAdmin = _require.isAdmin;
	
	        // plugin: http://someweblog.com/hcsticky-jquery-floating-sticky-plugin/
	        (function articleSocialSticky() {
	            if (isAdmin()) {
	                return;
	            };
	            var top = $("nav.sticky").height();
	
	            stickSocialCol($(".article"));
	
	            function stickSocialCol($article) {
	                $article.find(".social-sticky").hcSticky({
	                    stickTo: $(".container.article"),
	                    wrapperClassName: "social-sidebar-sticky",
	                    top: +top + 10,
	                    bottomEnd: 775
	                });
	            }
	
	            $(document).on("wf-cms:article-load", function (ev, $article) {
	                stickSocialCol($article);
	            });
	        })();
	
	        // things to do when a new articles is loaded with scroll
	        $(document).on("wf-cms:article-load", function (ev, $article) {
	            $article.find(".video-player").omVideo(); // init videos
	        });
	
	        // #15229 count pageview in gallery article only
	        (function gallerySlidePageview() {
	            $(".article.gallery .article-media .slider").on("wf-slider-slide-after", function () {
	                triggerOmniturePageCount();
	            });
	            $(document).on("click", ".mfp-arrow", function () {
	                triggerOmniturePageCount();
	            });
	        })();
	
	        $(".slider .gallery-zoom-custom").click(function (e) {
	            e.preventDefault();
	            showSliderPopup($(this).parent().clone());
	        });
	
	        function showSliderPopup($el) {
	            $el.find("div").andSelf().removeAttr("id");
	            $el.find(".slide img").each(function () {
	                var src = $(this).attr("src").replace(/\/files\/([^\/]*?)(__[0-9](_[0-9])?)?\//, "/files/article_gallery_popup/");
	                $(this).attr("src", src);
	            });
	            var $article = $(".article");
	            var $social = $article.find(".left-social-icons").clone();
	            $social.find(".square-comment-34").parent().remove();
	            $social.find(".square-mail-34").parent().remove();
	            $social.find(".box, span").remove();
	            var $ads = $("body").find(".ads-slider-zoom");
	            var $container = $("<div class=\"slider-popup-container\">" + "<div class=\"centered\">" + "<div class=\"close-popup\"><a href=\"#\">Cerrar</a></div>" + "<div class=\"slider-wrapper\">" + "<div class=\"slider-content\">" + "<div class=\"slider slider-with-arrows popup-slider\">" + "<div class=\"slider-pane\">" + $el.find(".slider-pane").html() + "</div>" + "<div class=\"close-info\"></div>" + "<div class=\"show-info\"></div>" + "<div class=\"slider-buttons\">" + "<div class=\"slider-button left-arrow\"></div>" + "<div class=\"slider-button right-arrow\"></div>" + "</div>" + "</div>" + "</div>" + "<div class=\"ads\">" + $ads.html() + "</div>" + "</div>" + "<div class=\"bottom\">" + "<div class=\"share-transparent\">" + $social.html() + "</div>" + "</div>" + "</div>" + "</div>");
	            var options = { thumbnails: true };
	            $container.find(".popup-slider").data("options", options);
	            var height = $(window).height();
	            var marginTop = (height - 700) / 2;
	            $container.find(".centered").css("margin-top", marginTop);
	            $("body").prepend($container).addClass("scroll-disabled");
	
	            sliderModalInit($(document).find(".slider-popup-container .popup-slider"));
	            $(".slider-popup-container .slider-details-content").addClass("foto-details-popup");
	            $(".slider-popup-container .slider .left-arrow").hide();
	            bindShare($(".slider-popup-container .share-transparent"));
	
	            $(document).on("click", ".slider-popup-container .close-popup a", function (e) {
	                e.preventDefault();
	                $("body").removeClass("scroll-disabled");
	                $(document).find(".slider-popup-container").remove();
	                $(".article").find(".social-sticky").hcSticky("off").hcSticky("on");
	            });
	
	            $(document).on("click", ".slider-popup-container .right-arrow a, .slider-popup-container .thumbnails a:not(:first-child)", function () {
	                $(".slider-popup-container .left-arrow").show();
	            });
	
	            $(document).on("click", ".slider .close-info", function (e) {
	                e.preventDefault();
	                var $this = $(this);
	                $this.hide();
	                var $container = $(".slide");
	                $container.find(".slider-details-container").hide();
	                $this.parent().find(".show-info").show();
	                $this.parent().find(".show-info").click(function () {
	                    $(this).hide();
	                    $this.show();
	                    $container.find(".slider-details-container").show();
	                });
	            });
	        }
	
	        (function graphicArticleIframeLoad() {
	            var iframe = $(".graphic .graphic-iframe-module");
	            iframe.attr("src", iframe.data("src-desktop"));
	            iframe.attr("height", iframe.data("frameheight-desktop") + "px");
	            iframe.removeAttr("data-src-desktop");
	            iframe.removeAttr("data-src-mobile");
	            iframe.removeAttr("data-frameheight-mobile");
	            iframe.removeAttr("data-frameheight-desktop");
	        })();
	
	        (function imageZoom() {
	            $(".zoom-icon.image-icon-zoom").click(function (e) {
	                e.preventDefault();
	                var $this = $(this);
	                var $image = $this.parent().find("img");
	                var description = typeof $this.parent().find(".foto-description").html() != "undefined" ? $this.parent().find(".foto-description").html() : "";
	                var credit = typeof $this.parent().find(".foto-author").html() != "undefined" ? $this.parent().find(".foto-author").html() : "";
	                var imageTitle = "<div class=\"description\">" + description + "</div><div class=\"credit\">" + credit + "</div>";
	                var $social = $(".article").find(".left-social-icons").clone();
	                $social.find(".square-comment-34").parent().remove();
	                $social.find(".square-mail-34").parent().remove();
	                $social.find(".box, span").remove();
	                if (typeof $image != "undefined") {
	                    var src = $image.attr("src").replace(/\/files\/([^\/]*?)(__[0-9](_[0-9])?)?\//, "/files/article_image_zoom/");
	                    $.magnificPopup.open({
	                        type: "image",
	                        image: {
	                            markup: "<div class=\"mfp-figure\">" + "<div class=\"close-popup\"><a href=\"#\">Cerrar</a></div>" + "<div class=\"mfp-img\"></div>" + "<div class=\"mfp-bottom-bar\">" + "<div class=\"mfp-title foto-details-popup\"></div>" + "<div class=\"share-transparent\">" + $social.html() + "</div>" + "</div>" + "</div>"
	                        },
	                        items: {
	                            src: src,
	                            title: imageTitle
	                        }
	                    }, 0);
	                }
	                $(document).on("click", ".mfp-figure .close-popup a", function (e) {
	                    e.preventDefault();
	                    $.magnificPopup.close();
	                });
	                bindShare($(".mfp-figure .share-transparent"));
	            });
	        })();
	
	        (function galleryArticleSlideInfo() {
	            var $gallery = $(".article.gallery .slider");
	            var $info = $("<span class=\"info\"></span>");
	            $gallery.find(".foto-description").click(function (e) {
	                $gallery.find(".foto-description").hide();
	                $gallery.append($info);
	            });
	            $(document).on("click", ".article.gallery .slider .info", function () {
	                $gallery.find(".info").remove();
	                $gallery.find(".foto-description").show();
	            });
	        })();
	
	        // fix for preventing showing questions before results
	        // when poll is voted
	        window.setTimeout(function () {
	            $(".article .module-poll").show();
	        }, 1000);
	
	        $(".left-social-icons").find("a").click(function () {
	            //global mostShared
	            var trackUrl = $(this).parent().parent().data("track");
	            if (trackUrl != undefined && trackUrl != "") {
	                var image = new Image();
	                image.src = trackUrl;
	            }
	            //individual shares for facebook and twitter
	            trackUrl = $(this).data("track");
	            if (trackUrl != undefined && trackUrl != "") {
	                var image = new Image();
	                image.src = trackUrl;
	            }
	        });
	
	        (function toggleMultimediaComments() {
	            $(".show-hide-comments").click(function () {
	                $(this).toggleClass("caret-up caret-down");
	                $(this).parent().find(".comments-container").toggleClass("hide show");
	            });
	        })();
	    });
	}).call(window);
	}.call(window));

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    jQuery(function ($) {
	        var OMAudio = function OMAudio($el, options) {
	            var rand = Math.floor(Math.random() * 111111);
	            var base_path = "/bundles/wfcmsbaseassets/javascripts/epplayer/";
	            var AUDIO_CONFIG = {
	                id: "strobemediaplayback" + rand,
	                src: "",
	                width: 516,
	                height: 338,
	                autoPlay: true,
	                playButtonOverlay: false,
	                controlBarAutoHide: false,
	                //enableStageVideo: false,
	                favorFlashOverHtml5Video: true,
	                swf: base_path + "StrobeMediaPlayback.swf",
	                plugin_ads: base_path + "AdvertisementPlugin.swf" };
	
	            this.audioConfig = AUDIO_CONFIG;
	
	            var self = this;
	            this.$els = $el;
	            this.$els.each(function () {
	                self.$el = $(this);
	                self.$el.on("click", function (ev) {
	                    ev.preventDefault();
	                });
	
	                self.$onClickContainer = self.$el.closest(".audio-player.modal");
	                self.$onClickContainer.on("click", function (ev) {
	                    ev.preventDefault();
	                    self.playModal($(this));
	                });
	
	                self.$onClickContainer = self.$el.closest(".audio-player.inline");
	                self.$onClickContainer.on("click", function (ev) {
	                    ev.preventDefault();
	                    self.playInline($(this));
	                });
	
	                self.$el.data("omAudio", self);
	            });
	        };
	
	        OMAudio.prototype.domainName = function (url) {
	            return "http://" + document.location.hostname;
	        };
	
	        OMAudio.prototype.playInline = function ($container) {
	            var $popup,
	                $playerContainer,
	                $html,
	                $close,
	                $audio_player,
	                audio_player,
	                $el = $container.find(".audio-play"),
	                aHref = $el.attr("href"),
	                source = $el.data("source"),
	                $existingPopup = $("body").find(".video-overlay");
	            if ($container.find(".play-button-large audio").length) {
	                $container.append($container.find(".play-button-large").html());
	                $container.find(".play-button-large").html("").hide();
	                var playerWidth = $container.find("img").width() || 350;
	                $container.find("audio").attr("autoplay", "").css("width", playerWidth + "px").show();
	                return;
	            }
	            $existingPopup.remove();
	            $html = $("<div class=\"video-overimage\">                <div id=\"strobemediaplayback\"> </div>                <a href=\"#\" class=\"icon-remove close\"></a>            <div>");
	            $popup = $container.find(".video-overimage");
	            if ($popup.length == 0) $container.append($html);
	            $popup = $container.find(".video-overimage");
	            $playerContainer = $container.find("#strobemediaplayback");
	            $playerContainer.attr("style", "background:#000");
	
	            var width = $container.css("width"),
	                height = $container.css("height");
	
	            this.audioConfig.width = width;
	            this.audioConfig.height = height;
	
	            if (source && source !== "undefined") {
	                this.playEmbedded($el, $playerContainer);
	                return;
	            };
	
	            try {
	                //flash player
	                this.audioConfig.src = this.domainName() + aHref;
	                $audio_player = $playerContainer.strobemediaplayback(this.audioConfig);
	                audio_player = $audio_player[0];
	                // $playerContainer.html(audio_player);
	                $popup.show();
	            } catch (e) {
	                //html5 player
	                audio_player = "<audio src=\"" + aHref + "\"                             controls=\"controls\">                            </audio>                    ";
	                $playerContainer.html(audio_player);
	
	                var audio = $container.find("audio");
	                audio.css("width", width);
	                audio.css("height", height);
	
	                if (audio.get(0).paused == false) {
	                    audio.get(0).pause();
	                    $popup.hide();
	                } else {
	                    $popup.show();
	                    audio.get(0).play();
	                }
	            }
	        };
	
	        OMAudio.prototype.playModal = function ($container) {
	            var $popup,
	                $playerContainer,
	                $html,
	                $close,
	                audio_player,
	                $audio_player,
	                $el = $container.find(".audio-play"),
	                aHref = $el.attr("href"),
	                source = $el.data("source"),
	                $existingPopup = $("body").find(".video-overlay");
	
	            $existingPopup.remove();
	
	            $html = $("<div class=\"video-overlay\">            <div class=\"overlay\"></div>            <div class=\"audio-popup\">                <a href=\"#\" class=\"icon-remove close\"></a>                <div id=\"strobemediaplayback\"> </div>            </div></div>");
	            $popup = $html.find(".audio-popup");
	            $playerContainer = $popup.find("#strobemediaplayback");
	
	            $("body").append($html);
	            var width = $popup.css("width"),
	                height = $popup.css("height"),
	                $overlay = $html.find(".overlay");
	
	            this.audioConfig.width = width;
	            this.audioConfig.height = height;
	            if (source && source !== "undefined") {
	                this.playEmbedded($el, $playerContainer);
	                return;
	            };
	
	            try {
	                this.audioConfig.src = this.domainName() + aHref;
	                $audio_player = $playerContainer.strobemediaplayback(this.audioConfig);
	                audio_player = $audio_player[0];
	                $playerContainer.html(audio_player);
	                $overlay.on("click", function (ev) {
	                    ev.preventDefault();
	                    $html.remove();
	                });
	            } catch (e) {
	                //html5 player
	                audio_player = "<audio src=\"" + aHref + "\"                             controls=\"controls\">                            </video>                    ";
	                $playerContainer.html(audio_player);
	
	                var video = $popup.find("video");
	                video.css("width", width);
	                video.css("height", height);
	
	                $overlay.on("click", function (ev) {
	                    ev.preventDefault();
	                    video.get(0).pause();
	                    $html.remove();
	                });
	            }
	
	            var $close = $popup.find(".close");
	
	            $close.on("click", function (ev) {
	                ev.preventDefault();
	                $html.remove();
	            });
	        };
	
	        $.fn.omAudio = function (options, $el) {
	            var omAudio;
	            if (options === true) {
	                return this.data("omAudio");
	            } else if (typeof options == "string") {
	                omAudio = new OMAudio(this, options);
	                omAudio[options].call(omAudio, this);
	                return this;
	            }
	
	            omAudio = this.data("omAudio");
	            if (omAudio) {
	                return this;
	            }
	
	            omAudio = new OMAudio(this, options);
	
	            return this;
	        };
	
	        var _ua = navigator.userAgent.toLowerCase(),
	            is_msie = /msie/.test(_ua),
	            ie6mode = /msie [1-6]\./.test(_ua);
	
	        if (is_msie) {
	            setTimeout(function () {
	                $(".audio-player").omAudio();
	            }, 200);
	        } else {
	            $(".audio-player").omAudio();
	        }
	        OMAudio.prototype.playEmbedded = function ($el, $playerContainer) {
	            var mediaId = $el.attr("href"),
	                source = $el.data("source"),
	                templates = {
	                kaltura: "                    <script src=\"http://cloudvideo.cdn.net.co/p/102/sp/10200/embedIframeJs/uiconf_id/23448627/partner_id/102\"></script>                    <div id=\"kaltura_player_1415981286326\" style=\"width:" + this.audioConfig.width + ";height:" + this.audioConfig.height + ";\" itemprop=\"video\" itemscope itemtype=\"http://schema.org/VideoObject\" >                    <!-- Search engine metadata, based on schema.org/VideoObject -->                    <span itemprop=\"description\" content=\"The Kaltura player toolkit provides a robust framework for building rich media experinces. Learn more at player.kaltura.com\"></span>                    <span itemprop=\"name\" content=\"Kaltura Player ToolKit\"></span>                    <span itemprop=\"duration\" content=\"114\"></span>                    <!-- span itemprop=\"thumbnailUrl\" content=\"http://cdnbakmi.kaltura.com/p/102/sp/10200/thumbnail/entry_id/1_sf5ovm7u/version/100003\"></span -->                    <span itemprop=\"width\" content=\"100%\"></span>                    <span itemprop=\"height\" content=\"100%\"></span>                    </div>                    <script>                    kWidget.embed({                        targetId: \"kaltura_player_1415981286326\",                        wid: \"_102\",                        uiconf_id: \"23448627\",                        entry_id: \"" + mediaId + "\"                    })                    </script>                "
	            };
	
	            var template = templates[source];
	
	            // include ooyala videos in iframes because the alternative to run multiple videos in one page is complicated and buggy
	            if (source == "kaltura") {
	                var iframe = document.createElement("iframe");
	                $playerContainer.append(iframe);
	
	                iframe.contentWindow.document.open();
	                iframe.contentWindow.document.write("<body style=\"padding: 0;margin: 0\">" + template + "</body>");
	                iframe.contentWindow.document.close();
	                return;
	            };
	
	            if (typeof template == "array" || typeof template == "object") {
	                for (var i in template) {
	                    appendTemplate(template[i]);
	                }
	            } else {
	                appendTemplate(template);
	            }
	
	            function appendTemplate(el) {
	                if (el.match("script")) {
	                    // jquery workaround for embedded scripts
	
	                    var match = el.match("srcs*=s*\"(.+?)\"");
	                    var s = document.createElement("script");
	                    s.type = "text/javascript";
	                    s.src = match[1];
	
	                    $playerContainer[0].appendChild(s);
	
	                    // append other stuff after the player is loaded
	                    setTimeout(function () {
	                        $playerContainer.append(el);
	                    }, 800);
	                } else {
	                    $playerContainer.append(el);
	                }
	            }
	        };
	
	        window.OMAudio = OMAudio;
	    });
	}).call(window);
	
	// javascriptCallbackFunction: "onWFJavaScriptBridgeCreated"
	}.call(window));

/***/ }
]);
//# sourceMappingURL=article.js.map