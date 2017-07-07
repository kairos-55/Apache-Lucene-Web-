publicWebpackJsonp([9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	  var jQuery = __webpack_require__(1);
	
	  var jQuery, $;
	  jQuery = $ = window.jQuery = window.$ = __webpack_require__(1);
	
	  __webpack_require__(40);
	  __webpack_require__(41);
	  __webpack_require__(42);
	  __webpack_require__(43);
	  __webpack_require__(44);
	  __webpack_require__(45);
	  __webpack_require__(46);
	  __webpack_require__(47);
	  __webpack_require__(48);
	  __webpack_require__(49);
	
	  window.SelectionSharer = __webpack_require__(50); //can't use exports here because it defines SelectionSharer inside a function executed .on('ready')
	}).call(window);

/***/ },

/***/ 40:
/***/ function(module, exports) {

	function getCmsCookie(name) {
	    var x,y, cookies=document.cookie.split(";");
	
	    for (key in cookies) {
	        var cookie = cookies[key];
	
	        x = cookie.substr(0, cookie.indexOf("="));
	        y = cookie.substr(cookie.indexOf("=")+1);
	
	        if (x.trim() == name)
	            return unescape(y);
	    }
	
	    return false;
	}
	
	function setCmsCookie(name, value, exdate) {
	    var now = new Date();
	
	    if (!exdate) {
	        //set expiry date to one month from now
	        exdate = new Date(now.getFullYear(), now.getMonth()+1, now.getDate());
	    };
	
	    document.cookie = name + '=' + value + '; expires=' + exdate + '; path=/';
	}

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	(function($) {
	
	    function WfLinked($el) {
	        this.$el = $el;
	        this.$el.data('wf-linked', this);
	        this.allItems = [];
	        this.items = {};
	        var self = this;
	        this.proxySelectItem = function(ev) {
	            self.selectItem($(ev.currentTarget));
	        };
	        this.reset();
	    };
	
	    WfLinked.prototype.reset = function() {
	        if (this.timeout) {
	            clearTimeout(this.timeout);
	        }
	        var self = this;
	        this.timeout = setTimeout(function() {
	            self._reset();
	        }, 10);
	    };
	
	    WfLinked.prototype._reset = function() {
	        var activatorCollections = this.$el.data('activators').split(','),
	            $defaultActive = $('#' + this.$el.data('defaultActive')),
	            collectionId;
	
	        //clean up older handlers
	        for (var i = 0; i < this.allItems.length; i++) {
	            this.allItems[i].off('click', this.proxySelectItem);
	        }
	        this.allItems = [];
	        this.items = {};
	
	        for (var i = 0; i < activatorCollections.length; i++) {
	            collectionId = activatorCollections[i];
	            this.items[collectionId] = $('[data-collection="' + collectionId + '"]');
	
	            this.items[collectionId].on('click', this.proxySelectItem);
	            this.allItems.push(this.items[collectionId]);
	            if (!$defaultActive.size()) {
	                $defaultActive = $(this.items[collectionId].get(0));
	            }
	        }
	
	        if ($defaultActive.size()) {
	            this.selectItem($defaultActive);
	        }
	    };
	
	    WfLinked.prototype.getLinked = function($el) {
	        if (!$el) {
	            return [];
	        }
	        var linked = $el.data('linkedWith'),
	            $els = [$el];
	        if (linked) {
	            linked = linked.split(',');
	            for (var i = 0; i < linked.length; i++) {
	                $els.push($('#' + linked[i]));
	            }
	        }
	        return $els;
	    };
	
	    WfLinked.prototype.selectItem = function($el) {
	        var active = this.getLinked(this.$active),
	            activated = this.getLinked($el);
	
	        if (active.length) {
	            for (var i = 0; i < active.length; i++) {
	                active[i].removeClass('active');
	            }
	        };
	
	        for (var i = 0; i < activated.length; i++) {
	            activated[i].addClass('active');
	        }
	
	        this.$active = $el;
	
	        $.event.trigger("wf-l:select", [$el, activated]);
	    };
	
	    WfLinked.prototype.next = function() {
	        if (!this.$active) {
	            return;
	        };
	
	        var collectionId = this.$active.data('collection'),
	            index = this.items[collectionId].index(this.$active) + 1;
	
	        if (index >= this.items[collectionId].size()) {
	            index = 0;
	        }
	
	        var $next = this.items[collectionId].eq(index);
	        this.selectItem($next);
	    };
	
	    $.fn.wfLinked = function(options, args) {
	        var wfLinked;
	        if (options === true) {
	            return this.data('wfLinked');
	        } else if (typeof options == 'string') {
	            wfLinked = this.data('wfLinked');
	            if (wfLinked) {
	                if (!_.isArray(args)) {
	                    args = [args];
	                }
	                return wfLinked[options].apply(wfLinked, args);
	            }
	            return this;
	        }
	
	        wfLinked = this.data('wfLinked');
	        if (wfLinked) {
	            return this;
	        }
	
	        wfLinked = new WfLinked($(this));
	
	        return this;
	    };
	
	
	    $(function() {
	        $('[data-activators]').each(function() {
	            $(this).wfLinked();
	        });
	    });
	
	    return {};
	})(jQuery);


/***/ },

/***/ 42:
/***/ function(module, exports) {

	(function($) {
	    function WfLinkedSelectors($document) {
	        this.$document = $document;
	        this.$ = function(selector){
	            return this.$document.find(selector);
	        }
	        this.$document.find('body').on('click', '[data-ls-for]', $.proxy(this.clicked, this));
	
	        this.$document.data('wfLinkedSelectors', this);
	        this.reset();
	    };
	
	    WfLinkedSelectors.prototype.reset = function() {
	        var masterContainers = [];
	        this.$('[data-ls-for]').each(function(idx, el){
	            var $el = $(el),
	                $parent = $el.parent(),
	                current = $parent.data('ls-els') || [];
	            if (masterContainers.indexOf($parent) === -1) {
	                masterContainers.push($parent);
	            }
	            current.push($el);
	            $parent.data('ls-els', current);
	        });
	        this.masterContainers = masterContainers;
	
	        var self = this;
	        $.each(this.masterContainers, function(idx, $parent){
	            var $active = $parent.find('[data-ls-for].active');
	            if (!$active.length) {
	                $active = $parent.find('[data-ls-for]').eq(0);
	            }
	
	            self.select($active);
	            if ($parent.hasClass('all-collapsed')) {
	                self._deactivate($active);
	            }
	        });
	    };
	
	    WfLinkedSelectors.prototype.clicked = function(e) {
	        var $el = $(e.currentTarget),
	            wasActive = $el.hasClass('active');
	
	        this.select($(e.currentTarget));
	
	        if (wasActive && $el.parent().hasClass('all-collapsed')) {
	            this._deactivate($el);
	        }
	    };
	
	    WfLinkedSelectors.prototype.select = function(el) {
	        var $el = $(el),
	            $parent = $el.parent(),
	            items = $parent.data('ls-els');
	
	        var self = this;
	        if (items) {
	            $.each(items, function(idx, el){
	                self._deactivate(el);
	            });
	        };
	
	        this._activate(el);
	
	        this.$document.trigger('wf-ls:select', [$el, this._getDetail($el)]);
	    };
	
	    WfLinkedSelectors.prototype._activate = function(el) {
	        var $el = $(el);
	
	        $el.addClass('active');
	        this._getDetail($el)
	            .addClass('active')
	            .css('display', 'block')
	        ;
	    };
	
	    WfLinkedSelectors.prototype._deactivate = function(el) {
	        var $el = $(el);
	
	        $el.removeClass('active');
	        this._getDetail($el)
	            .removeClass('active')
	            .css('display', 'none')
	        ;
	    }
	
	    WfLinkedSelectors.prototype._getDetail = function(el) {
	        return this.$('#' + $(el).data('ls-for'));
	    };
	
	    $.fn.wfLinkedSelectors = function(options, args) {
	        var el = this[0];
	        var _document = el.ownerDocument || el; //document has ownerDocument == null
	        //append all instances to the document, make sure only one instace per document is initialized
	        var $document = $(_document);
	        var wfLinkedSelectors;
	
	        wfLinkedSelectors = $document.data('wfLinkedSelectors');
	
	        if (options === true) {
	            return $document.data('wfLinkedSelectors');
	        } else if (typeof options == 'string' && wfLinkedSelectors) {
	            return wfLinkedSelectors[options].apply(wfLinkedSelectors, args);
	        }
	
	        if (wfLinkedSelectors) {
	            return this;
	        }
	
	        new WfLinkedSelectors($document);
	
	        return this;
	    };
	
	    $(document).ready(function() { // run function when document ready
	
	        $('body').wfLinkedSelectors();
	
	        $(document).bind('wf.html-refresh', function(){
	            $(this).wfLinkedSelectors('reset');
	        });
	
	        return {};
	    });
	
	})(jQuery);


/***/ },

/***/ 43:
/***/ function(module, exports) {

	
	/**************************************************************************************************
	/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
	    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
	*/
	var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
	/**************************************************************************************************
	**************************************************************************************************
	**************************************************************************************************/
	
	
	
	/*****************************************************
	*
	*  Copyright 2010 Adobe Systems Incorporated.  All Rights Reserved.
	*
	*****************************************************
	*  The contents of this file are subject to the Berkeley Software Distribution (BSD) Licence
	*  (the "License"); you may not use this file except in
	*  compliance with the License.
	*
	*  Software distributed under the License is distributed on an "AS IS"
	*  basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
	*  License for the specific language governing rights and limitations
	*  under the License.
	*
	*
	*  The Initial Developer of the Original Code is Adobe Systems Incorporated.
	*  Portions created by Adobe Systems Incorporated are Copyright (C) 2010 Adobe Systems
	*  Incorporated. All Rights Reserved.
	*
	*****************************************************/
	
	/**
	 * jQuery plugin that generate the necessary video playback mark-up.
	 * @param {Object} /iPad/i
	 */
	(function($, undefined){
	
	
	    /**
	     * Adapts the options of the video player based on the device/browser capabilities.
	     */
	    var AdaptiveExperienceConfigurator = function(){
	    };
	
	    var adaptiveExperienceConfiguratorMethods = {
	
	        initialize: function(){
	
	
	            this.userAgent = navigator.userAgent;
	
	            this.isiPad = this.userAgent.match(/iPad/i) != null;
	            this.isiPhone = this.userAgent.match(/iPhone/i) != null;
	            this.isAndroid = this.userAgent.match(/Android/i) != null;
	
	            this.screenWidth = screen.width;
	            this.screenHeight = screen.width;
	            this.isPhone = this.screenHeight < 360;
	            this.isTablet = this.screenHeight >= 360 && this.screenHeight <= 768;
	            this.isDesktop = this.screenHeight > 768;
	
	            this.hasHTML5VideoCapability = !!document.createElement('video').canPlayType;
	            this.flashPlayerVersion = swfobject.getFlashPlayerVersion();
	            this.hasFlashPlayerCapability = (this.flashPlayerVersion.major >= 10)?true:(this.flashPlayerVersion.release);
	        },
	
	        console: ( (window.console?window.console.log:null) || function(s){
	
	                $('#osmfdebug').html($('#osmfdebug').html() + s + "<br/>");
	        }),
	
	        adapt: function(options){
	
	            if (!this.userAgent) {
	                // Initialize lazily
	                this.initialize();
	            }
	
	            // First, extend with default values
	            options = $.extend({}, $.fn.strobemediaplayback.defaults, options);
	            this.changed = true;
	            var i = 0, n = this.rules.length;
	            while (this.changed) {
	                this.changed = false;
	                for (i = 0; i < n; i++) {
	                    this.rules[i](this, options);
	                }
	                this.changed = false;
	            }
	            return options;
	        },
	
	        setOption: function(options, name, value){
	
	            if(options.debug && $.fn.adaptiveexperienceconfigurator.console) $.fn.adaptiveexperienceconfigurator.console("setOption: " + name+  "=" + value);
	            if (!options.hasOwnProperty(name) || options[name] != value) {
	                options[name] = value;
	                this.changed = true;
	            }
	        },
	
	        rules: [
	            //playerImplementation
	            function(context, options){
	                if (options.favorFlashOverHtml5Video && context.hasFlashPlayerCapability) {
	                    context.setOption(options, "useHTML5", false);
	                }
	                else {
	                    if (!options.favorFlashOverHtml5Video && context.hasHTML5VideoCapability) {
	                        context.setOption(options, "useHTML5", true);
	                    }
	                    else {
	                        if (options.favorFlashOverHtml5Video) {
	                            context.setOption(options, "useHTML5", !context.hasFlashPlayerCapability);
	                        }
	                        else {
	                            context.setOption(options, "useHTML5", context.hasHTML5VideoCapability);
	                        }
	                    }
	                }
	            },
	
	            //neverUseJavaScriptControlsOnIPhone:
	             function(context, options){
	                if (context.isiPhone) {
	                    context.setOption(options, "javascriptControls", false);
	                }
	            },
	
	            //hideVolumeControlOnIPad:
	             function(context, options){
	                if (context.isiPad) {
	                    context.setOption(options, "disabledControls", ".volume");
	                }
	            },
	
	            // No Flash & No HTML5 Video
	             function(context, options){
	                if (!context.hasFlashPlayerCapability && !context.hasHTML5VideoCapability) {
	                    context.setOption(options, "javascriptControls", false);
	                    context.setOption(options, "displayAlternativeContent", true);
	                }
	            }
	        ]
	    };
	
	    AdaptiveExperienceConfigurator.prototype = adaptiveExperienceConfiguratorMethods;
	
	    $.fn.adaptiveexperienceconfigurator = new AdaptiveExperienceConfigurator();
	
	    var StrobeMediaPlayback = function(element, options){
	
	        this.element = element;
	        this.$element = $(element);
	        this.options = $.extend({}, $.fn.strobemediaplayback.defaults, options);
	
	        if(this.options.debug && $.fn.adaptiveexperienceconfigurator.console) $.fn.adaptiveexperienceconfigurator.console("StrobeMediaPlayback constructor");
	    };
	
	    // HACK: keeps the reference to the context of the function which uses swfobject
	    // - needed for the swfobject.js error callback handler.
	    var onFlashEmbedCompleteThisReference = null;
	
	    var strobeMediaPlaybackMethods = {
	        initialize: function() {
	
	            // Detect video playback capabilities and adapt the settings
	            this.options = $.fn.adaptiveexperienceconfigurator.adapt(this.options);
	
	            if(this.options.debug && $.fn.adaptiveexperienceconfigurator.console) $.fn.adaptiveexperienceconfigurator.console("StrobeMediaPlayback initialize");
	
	            if (this.options.useHTML5) {
	
	                if(this.options.debug && $.fn.adaptiveexperienceconfigurator.console) $.fn.adaptiveexperienceconfigurator.console("StrobeMediaPlayback html5");
	
	                var $video = $("<video></video>");
	                $video.attr("id", this.options.id);
	                $video.attr("class", "smp_video");
	                $video.attr("preload", "none");
	                $video.attr("width", this.options.width);
	                $video.attr("height", this.options.height);
	                $video.attr("src", this.options.src);
	
	                if (this.options.loop)
	                {
	                    $video.attr("loop", "loop");
	                }
	                if (this.options.autoPlay)
	                {
	                    $video.attr("autoplay", "autoplay");
	                }
	                if (this.options.controlBarMode !=  "none")
	                {
	                    $video.attr("controls", "controls");
	                }
	                if  (this.options.poster != "")
	                {
	                    $video.attr("poster", this.options.poster);
	                }
	                this.$element.replaceWith($video);
	
	                this.$video = $video;
	                this.video = $video[0];
	            }
	            else {
	                if(this.options.debug && $.fn.adaptiveexperienceconfigurator.console) $.fn.adaptiveexperienceconfigurator.console("StrobeMediaPlayback html");
	
	                this.options.queryString = $.fn.strobemediaplayback.generateQueryString(this.options);
	                var flashvars = this.options;
	                flashvars.javascriptCallbackFunction = "$.fn.strobemediaplayback.triggerHandler";
	                var params = {
	                    allowFullScreen: "true",
	                    wmode: "direct"
	                };
	                var attributes = {
	                    id: this.options.id,
	                    name: this.options.id
	                };
	
	                if(this.options.debug && $.fn.adaptiveexperienceconfigurator.console) $.fn.adaptiveexperienceconfigurator.console("StrobeMediaPlayback Embed: " + this.options.swf);
	
	                onFlashEmbedCompleteThisReference = this;
	                swfobject.embedSWF(this.options.swf,
	                    this.$element.attr("id"),
	                    this.options.width,
	                    this.options.height,
	                    this.options.minimumFlashPlayerVersion,
	                    this.options.expressInstallSwfUrl,
	                    flashvars, params, attributes,
	                    this.onFlashEmbedComplete);
	
	                    this.monitor = new VideoElementMonitor(null);
	
	                    this.$video = this.monitor.$videoElement;
	                    this.video = this.monitor.videoElement;
	                    proxyMediaElements[this.options.id] = this.monitor;
	            }
	        },
	
	        onFlashEmbedComplete: function(event)
	        {
	
	            if(onFlashEmbedCompleteThisReference.options.debug && $.fn.adaptiveexperienceconfigurator.console) $.fn.adaptiveexperienceconfigurator.console("StrobeMediaPlayback onFlashEmbedComplete: " + event.success + " | " + $.fn.adaptiveexperienceconfigurator.hasHTML5VideoCapability);
	
	            if (!event.success && $.fn.adaptiveexperienceconfigurator.hasHTML5VideoCapability)
	            {
	                onFlashEmbedCompleteThisReference.useHTML5 = true;
	                onFlashEmbedCompleteThisReference.initialize();
	            }
	            else {
	                // TODO: Error notification - failed to embed the video -> fallback to displaying a link?
	
	                if(!event.success){
	                    if(onFlashEmbedCompleteThisReference.options.debug && $.fn.adaptiveexperienceconfigurator.console) $.fn.adaptiveexperienceconfigurator.console("StrobeMediaPlayback onFlashEmbedComplete: FAILED");
	                }
	
	            }
	        }
	    }
	
	    StrobeMediaPlayback.prototype = strobeMediaPlaybackMethods;
	
	    $.fn.strobemediaplayback = function(options){
	
	        var instances = [], i;
	
	        var result = null;
	
	        this.each(function(){
	            var strobeMediaPlayback = new StrobeMediaPlayback(this, options);
	            instances.push(strobeMediaPlayback);
	        });
	
	        for (i = 0; i < instances.length; i++) {
	            instances[i].initialize();
	            if (result == null) {
	                result = instances[i].$video;
	            }
	            else{
	                result.push(instances[i].video);
	            }
	        }
	        return result;
	    };
	
	    /**
	     * Plug-in default values
	     */
	    $.fn.strobemediaplayback.defaults = {
	        debug:false,
	        favorFlashOverHtml5Video: true,
	        swf: "StrobeMediaPlayback.swf",
	        //javascriptCallbackFunction: "org.strobemediaplayback.triggerHandler",
	        javascriptCallbackFunction: "$.fn.strobemediaplayback.triggerHandler",
	        minimumFlashPlayerVersion: "10.1.0",
	        expressInstallSwfUrl: "expressInstall.swf",
	        autoPlay: false,
	        loop: false,
	        controlBarMode: "docked",
	        poster: ""
	    };
	
	
	    /**
	     * Utitility method that will retrieve the page parameters from the Query String.
	     */
	    $.fn.strobemediaplayback.parseQueryString = function(queryString){
	        var options = {};
	
	        var queryPairs = queryString.split('&'), queryPair, n = queryPairs.length;
	        for (var i = 0; i < n; i++) {
	            queryPair = queryPairs[i].split('=');
	            if (queryPair[1] == "true" || queryPair[1] == "false") {
	                options[queryPair[0]] = (queryPair[1] == "true");
	            }
	            else {
	                var number = parseFloat(queryPair[1]);
	                if (!isNaN(number)) {
	                    options[queryPair[0]] = number;
	                }
	                else {
	                    options[queryPair[0]] = queryPair[1];
	                }
	            }
	        }
	        return options;
	    }
	
	
	    /**
	     * Utitility method that will retrieve the page parameters from the Query String.
	     */
	    $.fn.strobemediaplayback.generateQueryString = function(options){
	        var queryStrings = [];
	        for (var key in options) {
	            if (queryStrings.length > 0) {
	                queryStrings.push("&");
	            }
	            queryStrings.push(encodeURIComponent(key));
	            queryStrings.push("=");
	            queryStrings.push((options[key]));
	        }
	        return queryStrings.join("");
	    }
	
	    var proxyMediaElements = {};
	    var proxiedMediaElements = {};
	
	    $.fn.strobemediaplayback.triggerHandler = function(id, eventName, updatedProperties){
	
	        if(onFlashEmbedCompleteThisReference.options.debug && $.fn.adaptiveexperienceconfigurator.console) $.fn.adaptiveexperienceconfigurator.console("StrobeMediaPlayback triggerHandler: " + id + " | " + eventName + " | " + updatedProperties);
	
	        var proxyMediaElement = proxyMediaElements[id];
	        if (typeof proxyMediaElement != 'undefined') {
	
	            if (typeof proxiedMediaElements[id] == 'undefined') {
	                strobeMediaPlayback = document.getElementById(id);
	                proxiedMediaElements[id] = strobeMediaPlayback;
	
	                proxyMediaElement.strobeMediaPlayback = strobeMediaPlayback;
	                proxyMediaElement.videoElement.play = jQuery.proxy(strobeMediaPlayback.play2, proxyMediaElement.strobeMediaPlayback);
	                proxyMediaElement.videoElement.pause = jQuery.proxy(strobeMediaPlayback.pause, proxyMediaElement.strobeMediaPlayback);
	                proxyMediaElement.videoElement.load = jQuery.proxy(proxyMediaElement.load, proxyMediaElement);
	                proxyMediaElement.videoElement.strobeMediaPlayback = strobeMediaPlayback;
	                monitorChanges(proxyMediaElement);
	            }
	            proxyMediaElement.update(updatedProperties, [eventName], proxyMediaElement);
	        }
	    }
	    /**
	     * Custom video playback controls
	     */
	    var writableProperties = "src preload currentTime defaultPlaybackRate playbackRate autoplay loop controls volume muted".split(" ");
	
	    var timeRangeProperties = "played seekable buffered".split(" ");
	    var timeRangeMethods = {
	        start: function(index){
	            return this._start[index];
	        },
	        end: function(index){
	            return this._end[index];
	        }
	    }
	
	    var monitorChanges = function(monitor){
	        var i = writableProperties.length;
	        while (i--) {
	            var propertyName = writableProperties[i];
	            if (monitor.cc.hasOwnProperty(propertyName) &&
	            monitor.videoElement.hasOwnProperty(propertyName) &&
	            monitor.cc[propertyName] != monitor.videoElement[propertyName]) {
	                var setter = "set" + propertyName.charAt(0).toUpperCase() + propertyName.substring(1);
	                monitor.strobeMediaPlayback[setter](monitor.videoElement[propertyName]);
	                monitor.cc[propertyName] = monitor.videoElement[propertyName];
	            }
	        }
	        setTimeout(function(){
	            monitorChanges(monitor)
	        }, 500);
	    };
	
	    var VideoElementMonitor = function($strobeMediaPlayback) {
	        this.videoElement = {
	            duration: 0,
	            currentTime: 0,
	            paused: true,
	            muted: false
	        };
	
	        this.cc = {
	            duration: 0,
	            currentTime: 0,
	            paused: true,
	            muted: false
	        };
	
	        this.$videoElement = $(this.videoElement);
	    }
	
	    var isPropertyChanged = function(object, cc, propertyName)
	    {
	        return !object.hasOwnProperty(propertyName) && object[propertyName] != cc[propertyName];
	    }
	
	    var videoElementMonitorMethods = {
	        load: function(){
	            this.strobeMediaPlayback.setSrc(this.videoElement.src);
	            this.strobeMediaPlayback.load();
	        },
	
	        update: function(properties, events, monitor){
	            var propertyName;
	            for (propertyName in properties) {
	                if (jQuery.inArray("emptied", events) < 0 &&
	                monitor.cc.hasOwnProperty(propertyName) &&
	                monitor.videoElement.hasOwnProperty(propertyName) &&
	                (monitor.cc[propertyName] != monitor.videoElement[propertyName] &&
	                !isNaN(monitor.cc[propertyName]) &&
	                !isNaN(monitor.videoElement[propertyName]))) {
	                    // this value changed
	                    continue;
	                }
	
	                monitor.cc[propertyName] = properties[propertyName];
	                monitor.videoElement[propertyName] = properties[propertyName];
	                if (jQuery.inArray(propertyName, timeRangeProperties) >= 0) {
	                    monitor.videoElement[propertyName].start = timeRangeMethods.start;
	                    monitor.videoElement[propertyName].end = timeRangeMethods.end;
	                }
	            }
	
	            if (events) {
	                var i = events.length;
	                while (i--) {
	                    monitor.$videoElement.triggerHandler(events[i]);
	                }
	            }
	        }
	    }
	
	    VideoElementMonitor.prototype = videoElementMonitorMethods;
	})(jQuery);
	
	
	/*
	 * Generate org.strobemediaplayback namespace - which will be used by the
	 * Flash/Strobe Media Playback once it is ready
	 */
	if (typeof org == 'undefined') {
	    var org = {};
	}
	
	if (typeof org.strobemediaplayback == 'undefined') {
	    org.strobemediaplayback = {};
	}
	
	if (typeof org.strobemediaplayback.proxied == 'undefined') {
	    org.strobemediaplayback.proxied = {};
	}
	
	org.strobemediaplayback.triggerHandler = function(id, eventName, updatedProperties){
	    //alert("--org.strobemediaplayback.triggerHandler");
	
	    if(this.options.debug && $.fn.adaptiveexperienceconfigurator.console) $.fn.adaptiveexperienceconfigurator.console("org.strobemediaplayback.triggerHandler: " + id + " | " + eventName + " | " + updatedProperties);
	
	    if (eventName == "onJavaScriptBridgeCreated") {
	        if (typeof onJavaScriptBridgeCreated == "function") {
	            onJavaScriptBridgeCreated(id);
	        }
	    }
	    else {
	        if (typeof org.strobemediaplayback.proxied[id] != 'undefined') {
	            org.strobemediaplayback.proxied[id].update(updatedProperties, [eventName], org.strobemediaplayback.proxied[id]);
	        }
	    }
	}


/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
		var jQuery = __webpack_require__(1);
	
		/*
	  * jQuery validation plug-in 1.7
	  *
	  * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	  * http://docs.jquery.com/Plugins/Validation
	  *
	  * Copyright (c) 2006 - 2008 JÃ¶rn Zaefferer
	  *
	  * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
	  *
	  * Dual licensed under the MIT and GPL licenses:
	  *   http://www.opensource.org/licenses/mit-license.php
	  *   http://www.gnu.org/licenses/gpl.html
	  */
	
		(function ($) {
	
			$.extend($.fn, {
				// http://docs.jquery.com/Plugins/Validation/validate
				validate: function validate(options) {
	
					// if nothing is selected, return nothing; can't chain anyway
					if (!this.length) {
						options && options.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
						return;
					}
	
					// check if a validator for this form was already created
					var validator = $.data(this[0], "validator");
					if (validator) {
						return validator;
					}
	
					validator = new $.validator(options, this[0]);
					$.data(this[0], "validator", validator);
	
					if (validator.settings.onsubmit) {
	
						// allow suppresing validation by adding a cancel class to the submit button
						this.find("input, button").filter(".cancel").click(function () {
							validator.cancelSubmit = true;
						});
	
						// when a submitHandler is used, capture the submitting button
						if (validator.settings.submitHandler) {
							this.find("input, button").filter(":submit").click(function () {
								validator.submitButton = this;
							});
						}
	
						// validate the form on submit
						this.submit(function (event) {
							if (validator.settings.debug)
								// prevent form submit to be able to see console output
								event.preventDefault();
	
							function handle() {
								if (validator.settings.submitHandler) {
									if (validator.submitButton) {
										// insert a hidden input as a replacement for the missing submit button
										var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
									}
									validator.settings.submitHandler.call(validator, validator.currentForm);
									if (validator.submitButton) {
										// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
										hidden.remove();
									}
									return false;
								}
								return true;
							}
	
							// prevent submit for invalid forms or custom submit handlers
							if (validator.cancelSubmit) {
								validator.cancelSubmit = false;
								return handle();
							}
							if (validator.form()) {
								if (validator.pendingRequest) {
									validator.formSubmitted = true;
									return false;
								}
								return handle();
							} else {
								validator.focusInvalid();
								return false;
							}
						});
					}
	
					return validator;
				},
				// http://docs.jquery.com/Plugins/Validation/valid
				valid: (function (_valid) {
					var _validWrapper = function valid() {
						return _valid.apply(this, arguments);
					};
	
					_validWrapper.toString = function () {
						return _valid.toString();
					};
	
					return _validWrapper;
				})(function () {
					if ($(this[0]).is("form")) {
						return this.validate().form();
					} else {
						var valid = true;
						var validator = $(this[0].form).validate();
						this.each(function () {
							valid &= validator.element(this);
						});
						return valid;
					}
				}),
				// attributes: space seperated list of attributes to retrieve and remove
				removeAttrs: function removeAttrs(attributes) {
					var result = {},
					    $element = this;
					$.each(attributes.split(/\s/), function (index, value) {
						result[value] = $element.attr(value);
						$element.removeAttr(value);
					});
					return result;
				},
				// http://docs.jquery.com/Plugins/Validation/rules
				rules: function rules(command, argument) {
					var element = this[0];
	
					if (command) {
						var settings = $.data(element.form, "validator").settings;
						var staticRules = settings.rules;
						var existingRules = $.validator.staticRules(element);
						switch (command) {
							case "add":
								$.extend(existingRules, $.validator.normalizeRule(argument));
								staticRules[element.name] = existingRules;
								if (argument.messages) settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
								break;
							case "remove":
								if (!argument) {
									delete staticRules[element.name];
									return existingRules;
								}
								var filtered = {};
								$.each(argument.split(/\s/), function (index, method) {
									filtered[method] = existingRules[method];
									delete existingRules[method];
								});
								return filtered;
						}
					}
	
					var data = $.validator.normalizeRules($.extend({}, $.validator.metadataRules(element), $.validator.classRules(element), $.validator.attributeRules(element), $.validator.staticRules(element)), element);
	
					// make sure required is at front
					if (data.required) {
						var param = data.required;
						delete data.required;
						data = $.extend({ required: param }, data);
					}
	
					return data;
				}
			});
	
			// Custom selectors
			$.extend($.expr[":"], {
				// http://docs.jquery.com/Plugins/Validation/blank
				blank: function blank(a) {
					return !$.trim("" + a.value);
				},
				// http://docs.jquery.com/Plugins/Validation/filled
				filled: function filled(a) {
					return !!$.trim("" + a.value);
				},
				// http://docs.jquery.com/Plugins/Validation/unchecked
				unchecked: function unchecked(a) {
					return !a.checked;
				}
			});
	
			// constructor for validator
			$.validator = function (options, form) {
				this.settings = $.extend(true, {}, $.validator.defaults, options);
				this.currentForm = form;
				this.init();
			};
	
			$.validator.format = function (source, params) {
				if (arguments.length == 1) return function () {
					var args = $.makeArray(arguments);
					args.unshift(source);
					return $.validator.format.apply(this, args);
				};
				if (arguments.length > 2 && params.constructor != Array) {
					params = $.makeArray(arguments).slice(1);
				}
				if (params.constructor != Array) {
					params = [params];
				}
				$.each(params, function (i, n) {
					source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
				});
				return source;
			};
	
			$.extend($.validator, {
	
				defaults: {
					messages: {},
					groups: {},
					rules: {},
					errorClass: "error",
					validClass: "valid",
					errorElement: "label",
					focusInvalid: true,
					errorContainer: $([]),
					errorLabelContainer: $([]),
					onsubmit: true,
					ignore: [],
					ignoreTitle: false,
					onfocusin: function onfocusin(element) {
						this.lastActive = element;
	
						// hide error label and remove error class on focus if enabled
						if (this.settings.focusCleanup && !this.blockFocusCleanup) {
							this.settings.unhighlight && this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
							this.errorsFor(element).hide();
						}
					},
					onfocusout: function onfocusout(element) {
						if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
							this.element(element);
						}
					},
					onkeyup: function onkeyup(element) {
						if (element.name in this.submitted || element == this.lastElement) {
							this.element(element);
						}
					},
					onclick: function onclick(element) {
						// click on selects, radiobuttons and checkboxes
						if (element.name in this.submitted) this.element(element);
						// or option elements, check parent select in that case
						else if (element.parentNode.name in this.submitted) this.element(element.parentNode);
					},
					highlight: function highlight(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
					},
					unhighlight: function unhighlight(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
					}
				},
	
				// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
				setDefaults: function setDefaults(settings) {
					$.extend($.validator.defaults, settings);
				},
	
				messages: {
					required: "Campo Obligatorio.",
					remote: "Debes responder esta pregunta.",
					email: "E-mail incorrecto.",
					url: "Please enter a valid URL.",
					date: "Please enter a valid date.",
					dateISO: "Please enter a valid date (ISO).",
					number: "S&oacute;lo n&uacute;meros.",
					digits: "Please enter only digits.",
					creditcard: "Please enter a valid credit card number.",
					equalTo: "Please enter the same value again.",
					accept: "Please enter a value with a valid extension.",
					maxlength: $.validator.format("M&aacute;ximo {0} caracteres."),
					minlength: $.validator.format("M&iacute;nimo {0} caracteres."),
					rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
					range: $.validator.format("Please enter a value between {0} and {1}."),
					max: $.validator.format("Please enter a value less than or equal to {0}."),
					min: $.validator.format("Please enter a value greater than or equal to {0}.")
				},
	
				autoCreateRanges: false,
	
				prototype: {
	
					init: function init() {
						this.labelContainer = $(this.settings.errorLabelContainer);
						this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
						this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
						this.submitted = {};
						this.valueCache = {};
						this.pendingRequest = 0;
						this.pending = {};
						this.invalid = {};
						this.reset();
	
						var groups = this.groups = {};
						$.each(this.settings.groups, function (key, value) {
							$.each(value.split(/\s/), function (index, name) {
								groups[name] = key;
							});
						});
						var rules = this.settings.rules;
						$.each(rules, function (key, value) {
							rules[key] = $.validator.normalizeRule(value);
						});
	
						function delegate(event) {
							var validator = $.data(this[0].form, "validator"),
							    eventType = "on" + event.type.replace(/^validate/, "");
							validator.settings[eventType] && validator.settings[eventType].call(validator, this[0]);
						}
						$(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", delegate).validateDelegate(":radio, :checkbox, select, option", "click", delegate);
	
						if (this.settings.invalidHandler) $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
					},
	
					// http://docs.jquery.com/Plugins/Validation/Validator/form
					form: function form() {
						this.checkForm();
						$.extend(this.submitted, this.errorMap);
						this.invalid = $.extend({}, this.errorMap);
						if (!this.valid()) $(this.currentForm).triggerHandler("invalid-form", [this]);
						this.showErrors();
						return this.valid();
					},
	
					checkForm: function checkForm() {
						this.prepareForm();
						for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
							this.check(elements[i]);
						}
						return this.valid();
					},
	
					// http://docs.jquery.com/Plugins/Validation/Validator/element
					element: (function (_element) {
						var _elementWrapper = function element(_x) {
							return _element.apply(this, arguments);
						};
	
						_elementWrapper.toString = function () {
							return _element.toString();
						};
	
						return _elementWrapper;
					})(function (element) {
						element = this.clean(element);
						this.lastElement = element;
						this.prepareElement(element);
						this.currentElements = $(element);
						var result = this.check(element);
						if (result) {
							delete this.invalid[element.name];
						} else {
							this.invalid[element.name] = true;
						}
						if (!this.numberOfInvalids()) {
							// Hide error containers on last error
							this.toHide = this.toHide.add(this.containers);
						}
						this.showErrors();
						return result;
					}),
	
					// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
					showErrors: function showErrors(errors) {
						if (errors) {
							// add items to error list and map
							$.extend(this.errorMap, errors);
							this.errorList = [];
							for (var name in errors) {
								this.errorList.push({
									message: errors[name],
									element: this.findByName(name)[0]
								});
							}
							// remove items from success list
							this.successList = $.grep(this.successList, function (element) {
								return !(element.name in errors);
							});
						}
						this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
					},
	
					// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
					resetForm: function resetForm() {
						if ($.fn.resetForm) $(this.currentForm).resetForm();
						this.submitted = {};
						this.prepareForm();
						this.hideErrors();
						this.elements().removeClass(this.settings.errorClass);
					},
	
					numberOfInvalids: function numberOfInvalids() {
						return this.objectLength(this.invalid);
					},
	
					objectLength: function objectLength(obj) {
						var count = 0;
						for (var i in obj) count++;
						return count;
					},
	
					hideErrors: function hideErrors() {
						this.addWrapper(this.toHide).hide();
					},
	
					valid: function valid() {
						return this.size() == 0;
					},
	
					size: function size() {
						return this.errorList.length;
					},
	
					focusInvalid: function focusInvalid() {
						if (this.settings.focusInvalid) {
							try {
								$(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus()
								// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
								.trigger("focusin");
							} catch (e) {}
						}
					},
	
					findLastActive: function findLastActive() {
						var lastActive = this.lastActive;
						return lastActive && $.grep(this.errorList, function (n) {
							return n.element.name == lastActive.name;
						}).length == 1 && lastActive;
					},
	
					elements: function elements() {
						var validator = this,
						    rulesCache = {};
	
						// select all valid inputs inside the form (no submit or reset buttons)
						// workaround $Query([]).add until http://dev.jquery.com/ticket/2114 is solved
						return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
							!this.name && validator.settings.debug && window.console && console.error("%o has no name assigned", this);
	
							// select only the first element for each name, and only those with rules specified
							if (this.name in rulesCache || !validator.objectLength($(this).rules())) return false;
	
							rulesCache[this.name] = true;
							return true;
						});
					},
	
					clean: function clean(selector) {
						return $(selector)[0];
					},
	
					errors: function errors() {
						return $(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext);
					},
	
					reset: function reset() {
						this.successList = [];
						this.errorList = [];
						this.errorMap = {};
						this.toShow = $([]);
						this.toHide = $([]);
						this.currentElements = $([]);
					},
	
					prepareForm: function prepareForm() {
						this.reset();
						this.toHide = this.errors().add(this.containers);
					},
	
					prepareElement: function prepareElement(element) {
						this.reset();
						this.toHide = this.errorsFor(element);
					},
	
					check: function check(element) {
						element = this.clean(element);
	
						// if radio/checkbox, validate first element in group instead
						if (this.checkable(element)) {
							element = this.findByName(element.name)[0];
						}
	
						var rules = $(element).rules();
						var dependencyMismatch = false;
						for (method in rules) {
							var rule = { method: method, parameters: rules[method] };
							try {
								var result = $.validator.methods[method].call(this, element.value.replace(/\r/g, ""), element, rule.parameters);
	
								// if a method indicates that the field is optional and therefore valid,
								// don't mark it as valid when there are no other rules
								if (result == "dependency-mismatch") {
									dependencyMismatch = true;
									continue;
								}
								dependencyMismatch = false;
	
								if (result == "pending") {
									this.toHide = this.toHide.not(this.errorsFor(element));
									return;
								}
	
								if (!result) {
									this.formatAndAdd(element, rule);
									return false;
								}
							} catch (e) {
								this.settings.debug && window.console && console.log("exception occured when checking element " + element.id + ", check the '" + rule.method + "' method", e);
								throw e;
							}
						}
						if (dependencyMismatch) {
							return;
						}if (this.objectLength(rules)) this.successList.push(element);
						return true;
					},
	
					// return the custom message for the given element and validation method
					// specified in the element's "messages" metadata
					customMetaMessage: function customMetaMessage(element, method) {
						if (!$.metadata) {
							return;
						}var meta = this.settings.meta ? $(element).metadata()[this.settings.meta] : $(element).metadata();
	
						return meta && meta.messages && meta.messages[method];
					},
	
					// return the custom message for the given element name and validation method
					customMessage: function customMessage(name, method) {
						var m = this.settings.messages[name];
						return m && (m.constructor == String ? m : m[method]);
					},
	
					// return the first defined argument, allowing empty strings
					findDefined: function findDefined() {
						for (var i = 0; i < arguments.length; i++) {
							if (arguments[i] !== undefined) {
								return arguments[i];
							}
						}
						return undefined;
					},
	
					defaultMessage: function defaultMessage(element, method) {
						return this.findDefined(this.customMessage(element.name, method), this.customMetaMessage(element, method),
						// title is never undefined, so handle empty string as undefined
						!this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>");
					},
	
					formatAndAdd: function formatAndAdd(element, rule) {
						var message = this.defaultMessage(element, rule.method),
						    theregex = /\$?\{(\d+)\}/g;
						if (typeof message == "function") {
							message = message.call(this, rule.parameters, element);
						} else if (theregex.test(message)) {
							message = jQuery.format(message.replace(theregex, "{$1}"), rule.parameters);
						}
						this.errorList.push({
							message: message,
							element: element
						});
	
						this.errorMap[element.name] = message;
						this.submitted[element.name] = message;
					},
	
					addWrapper: function addWrapper(toToggle) {
						if (this.settings.wrapper) toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
						return toToggle;
					},
	
					defaultShowErrors: function defaultShowErrors() {
						for (var i = 0; this.errorList[i]; i++) {
							var error = this.errorList[i];
							this.settings.highlight && this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
							this.showLabel(error.element, error.message);
						}
						if (this.errorList.length) {
							this.toShow = this.toShow.add(this.containers);
						}
						if (this.settings.success) {
							for (var i = 0; this.successList[i]; i++) {
								this.showLabel(this.successList[i]);
							}
						}
						if (this.settings.unhighlight) {
							for (var i = 0, elements = this.validElements(); elements[i]; i++) {
								this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
							}
						}
						this.toHide = this.toHide.not(this.toShow);
						this.hideErrors();
						this.addWrapper(this.toShow).show();
					},
	
					validElements: function validElements() {
						return this.currentElements.not(this.invalidElements());
					},
	
					invalidElements: function invalidElements() {
						return $(this.errorList).map(function () {
							return this.element;
						});
					},
	
					showLabel: function showLabel(element, message) {
						var label = this.errorsFor(element);
						if (label.length) {
							// refresh error/success class
							label.removeClass().addClass(this.settings.errorClass);
	
							// check if we have a generated label, replace the message then
							label.attr("generated") && label.html(message);
						} else {
							// create label
							label = $("<" + this.settings.errorElement + "/>").attr({ "for": this.idOrName(element), generated: true }).addClass(this.settings.errorClass).html(message || "");
							if (this.settings.wrapper) {
								// make sure the element is visible, even in IE
								// actually showing the wrapped element is handled elsewhere
								label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
							}
							if (!this.labelContainer.append(label).length) this.settings.errorPlacement ? this.settings.errorPlacement(label, $(element)) : label.insertAfter(element);
						}
						if (!message && this.settings.success) {
							label.text("");
							typeof this.settings.success == "string" ? label.addClass(this.settings.success) : this.settings.success(label);
						}
						this.toShow = this.toShow.add(label);
					},
	
					errorsFor: function errorsFor(element) {
						var name = this.idOrName(element);
						return this.errors().filter(function () {
							return $(this).attr("for") == name;
						});
					},
	
					idOrName: function idOrName(element) {
						return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
					},
	
					checkable: function checkable(element) {
						return /radio|checkbox/i.test(element.type);
					},
	
					findByName: function findByName(name) {
						// select by name and filter by form for performance over form.find("[name=...]")
						var form = this.currentForm;
						return $(document.getElementsByName(name)).map(function (index, element) {
							return element.form == form && element.name == name && element || null;
						});
					},
	
					getLength: function getLength(value, element) {
						switch (element.nodeName.toLowerCase()) {
							case "select":
								return $("option:selected", element).length;
							case "input":
								if (this.checkable(element)) {
									return this.findByName(element.name).filter(":checked").length;
								}}
						return value.length;
					},
	
					depend: function depend(param, element) {
						return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
					},
	
					dependTypes: {
						boolean: function boolean(param, element) {
							return param;
						},
						string: function string(param, element) {
							return !!$(param, element.form).length;
						},
						"function": function _function(param, element) {
							return param(element);
						}
					},
	
					optional: function optional(element) {
						return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
					},
	
					startRequest: function startRequest(element) {
						if (!this.pending[element.name]) {
							this.pendingRequest++;
							this.pending[element.name] = true;
						}
					},
	
					stopRequest: function stopRequest(element, valid) {
						this.pendingRequest--;
						// sometimes synchronization fails, make sure pendingRequest is never < 0
						if (this.pendingRequest < 0) this.pendingRequest = 0;
						delete this.pending[element.name];
						if (valid && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
							$(this.currentForm).submit();
							this.formSubmitted = false;
						} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
							$(this.currentForm).triggerHandler("invalid-form", [this]);
							this.formSubmitted = false;
						}
					},
	
					previousValue: function previousValue(element) {
						return $.data(element, "previousValue") || $.data(element, "previousValue", {
							old: null,
							valid: true,
							message: this.defaultMessage(element, "remote")
						});
					}
	
				},
	
				classRuleSettings: {
					required: { required: true },
					email: { email: true },
					url: { url: true },
					date: { date: true },
					dateISO: { dateISO: true },
					dateDE: { dateDE: true },
					number: { number: true },
					numberDE: { numberDE: true },
					digits: { digits: true },
					creditcard: { creditcard: true }
				},
	
				addClassRules: function addClassRules(className, rules) {
					className.constructor == String ? this.classRuleSettings[className] = rules : $.extend(this.classRuleSettings, className);
				},
	
				classRules: function classRules(element) {
					var rules = {};
					var classes = $(element).attr("class");
					classes && $.each(classes.split(" "), function () {
						if (this in $.validator.classRuleSettings) {
							$.extend(rules, $.validator.classRuleSettings[this]);
						}
					});
					return rules;
				},
	
				attributeRules: function attributeRules(element) {
					var rules = {};
					var $element = $(element);
	
					for (method in $.validator.methods) {
						var value = $element.attr(method);
						if (value) {
							rules[method] = value;
						}
					}
	
					// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
					if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
						delete rules.maxlength;
					}
	
					return rules;
				},
	
				metadataRules: function metadataRules(element) {
					if (!$.metadata) {
						return {};
					}var meta = $.data(element.form, "validator").settings.meta;
					return meta ? $(element).metadata()[meta] : $(element).metadata();
				},
	
				staticRules: function staticRules(element) {
					var rules = {};
					var validator = $.data(element.form, "validator");
					if (validator.settings.rules) {
						rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
					}
					return rules;
				},
	
				normalizeRules: function normalizeRules(rules, element) {
					// handle dependency check
					$.each(rules, function (prop, val) {
						// ignore rule when param is explicitly false, eg. required:false
						if (val === false) {
							delete rules[prop];
							return;
						}
						if (val.param || val.depends) {
							var keepRule = true;
							switch (typeof val.depends) {
								case "string":
									keepRule = !!$(val.depends, element.form).length;
									break;
								case "function":
									keepRule = val.depends.call(element, element);
									break;
							}
							if (keepRule) {
								rules[prop] = val.param !== undefined ? val.param : true;
							} else {
								delete rules[prop];
							}
						}
					});
	
					// evaluate parameters
					$.each(rules, function (rule, parameter) {
						rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
					});
	
					// clean number parameters
					$.each(["minlength", "maxlength", "min", "max"], function () {
						if (rules[this]) {
							rules[this] = Number(rules[this]);
						}
					});
					$.each(["rangelength", "range"], function () {
						if (rules[this]) {
							rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
						}
					});
	
					if ($.validator.autoCreateRanges) {
						// auto-create ranges
						if (rules.min && rules.max) {
							rules.range = [rules.min, rules.max];
							delete rules.min;
							delete rules.max;
						}
						if (rules.minlength && rules.maxlength) {
							rules.rangelength = [rules.minlength, rules.maxlength];
							delete rules.minlength;
							delete rules.maxlength;
						}
					}
	
					// To support custom messages in metadata ignore rule methods titled "messages"
					if (rules.messages) {
						delete rules.messages;
					}
	
					return rules;
				},
	
				// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
				normalizeRule: function normalizeRule(data) {
					if (typeof data == "string") {
						var transformed = {};
						$.each(data.split(/\s/), function () {
							transformed[this] = true;
						});
						data = transformed;
					}
					return data;
				},
	
				// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
				addMethod: function addMethod(name, method, message) {
					$.validator.methods[name] = method;
					$.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
					if (method.length < 3) {
						$.validator.addClassRules(name, $.validator.normalizeRule(name));
					}
				},
	
				methods: {
	
					// http://docs.jquery.com/Plugins/Validation/Methods/required
					required: function required(value, element, param) {
						// check if dependency is met
						if (!this.depend(param, element)) {
							return "dependency-mismatch";
						}switch (element.nodeName.toLowerCase()) {
							case "select":
								// could be an array for select-multiple or a string, both are fine this way
								var val = $(element).val();
								return val && val.length > 0;
							case "input":
								if (this.checkable(element)) {
									return this.getLength(value, element) > 0;
								}default:
								return $.trim(value).length > 0;
						}
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/remote
					remote: function remote(value, element, param) {
						if (this.optional(element)) {
							return "dependency-mismatch";
						}var previous = this.previousValue(element);
						if (!this.settings.messages[element.name]) this.settings.messages[element.name] = {};
						previous.originalMessage = this.settings.messages[element.name].remote;
						this.settings.messages[element.name].remote = previous.message;
	
						param = typeof param == "string" && { url: param } || param;
	
						if (previous.old !== value) {
							previous.old = value;
							var validator = this;
							this.startRequest(element);
							var data = {};
							data[element.name] = value;
							$.ajax($.extend(true, {
								url: param,
								mode: "abort",
								port: "validate" + element.name,
								dataType: "json",
								data: data,
								success: function success(response) {
									validator.settings.messages[element.name].remote = previous.originalMessage;
									var valid = response === true;
									if (valid) {
										var submitted = validator.formSubmitted;
										validator.prepareElement(element);
										validator.formSubmitted = submitted;
										validator.successList.push(element);
										validator.showErrors();
									} else {
										var errors = {};
										var message = previous.message = response || validator.defaultMessage(element, "remote");
										errors[element.name] = $.isFunction(message) ? message(value) : message;
										validator.showErrors(errors);
									}
									previous.valid = valid;
									validator.stopRequest(element, valid);
								}
							}, param));
							return "pending";
						} else if (this.pending[element.name]) {
							return "pending";
						}
						return previous.valid;
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/minlength
					minlength: function minlength(value, element, param) {
						return this.optional(element) || this.getLength($.trim(value), element) >= param;
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
					maxlength: function maxlength(value, element, param) {
						return this.optional(element) || this.getLength($.trim(value), element) <= param;
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
					rangelength: function rangelength(value, element, param) {
						var length = this.getLength($.trim(value), element);
						return this.optional(element) || length >= param[0] && length <= param[1];
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/min
					min: function min(value, element, param) {
						return this.optional(element) || value >= param;
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/max
					max: function max(value, element, param) {
						return this.optional(element) || value <= param;
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/range
					range: function range(value, element, param) {
						return this.optional(element) || value >= param[0] && value <= param[1];
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/email
					email: function email(value, element) {
						// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
						return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/url
					url: function url(value, element) {
						// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
						return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/date
					date: function date(value, element) {
						return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
					dateISO: function dateISO(value, element) {
						return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/number
					number: function number(value, element) {
						return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/digits
					digits: function digits(value, element) {
						return this.optional(element) || /^\d+$/.test(value);
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
					// based on http://en.wikipedia.org/wiki/Luhn
					creditcard: function creditcard(value, element) {
						if (this.optional(element)) {
							return "dependency-mismatch";
						} // accept only digits and dashes
						if (/[^0-9-]+/.test(value)) {
							return false;
						}var nCheck = 0,
						    nDigit = 0,
						    bEven = false;
	
						value = value.replace(/\D/g, "");
	
						for (var n = value.length - 1; n >= 0; n--) {
							var cDigit = value.charAt(n);
							var nDigit = parseInt(cDigit, 10);
							if (bEven) {
								if ((nDigit *= 2) > 9) nDigit -= 9;
							}
							nCheck += nDigit;
							bEven = !bEven;
						}
	
						return nCheck % 10 == 0;
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/accept
					accept: function accept(value, element, param) {
						param = typeof param == "string" ? param.replace(/,/g, "|") : "png|jpe?g|gif";
						return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
					},
	
					// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
					equalTo: function equalTo(value, element, param) {
						// bind to the blur event of the target in order to revalidate whenever the target field is updated
						// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
						var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
							$(element).valid();
						});
						return value == target.val();
					}
	
				}
	
			});
	
			// deprecated, use $.validator.format instead
			$.format = $.validator.format;
		})(jQuery);
	
		// ajax mode: abort
		// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
		// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
		;(function ($) {
			var ajax = $.ajax;
			var pendingRequests = {};
			$.ajax = function (settings) {
				// create settings for compatibility with ajaxSetup
				settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
				var port = settings.port;
				if (settings.mode == "abort") {
					if (pendingRequests[port]) {
						pendingRequests[port].abort();
					}
					return pendingRequests[port] = ajax.apply(this, arguments);
				}
				return ajax.apply(this, arguments);
			};
		})(jQuery);
	
		// provides cross-browser focusin and focusout events
		// IE has native support, in other browsers, use event caputuring (neither bubbles)
	
		// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
		// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
		;(function ($) {
			// only implement if not provided by jQuery core (since 1.4)
			// TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
			if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
				$.each({
					focus: "focusin",
					blur: "focusout"
				}, function (original, fix) {
					$.event.special[fix] = {
						setup: function setup() {
							this.addEventListener(original, handler, true);
						},
						teardown: function teardown() {
							this.removeEventListener(original, handler, true);
						},
						handler: function handler(e) {
							arguments[0] = $.event.fix(e);
							arguments[0].type = fix;
							return $.event.handle.apply(this, arguments);
						}
					};
					function handler(e) {
						e = $.event.fix(e);
						e.type = fix;
						return $.event.handle.call(this, e);
					}
				});
			};
			$.extend($.fn, {
				validateDelegate: function validateDelegate(delegate, type, handler) {
					return this.bind(type, function (event) {
						var target = $(event.target);
						if (target.is(delegate)) {
							return handler.apply(target, arguments);
						}
					});
				}
			});
		})(jQuery);
	}).call(window);
	
	// ignore IE throwing errors when focusing hidden elements

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	  var jQuery = __webpack_require__(1);
	
	  /*!
	   * jQuery Modal
	   * Copyright (c) 2014 CreativeDream
	   * Website http://creativedream.net/plugins
	   * Version: 1.2 (20-10-2014)
	   * Requires: jQuery v1.7.1 or later
	   */
	  function modal(e) {
	    return $.cModal(e);
	  }(function (e) {
	    e.cModal = function (t) {
	      var n = { type: "default", title: null, text: null, size: "normal", buttons: [{ text: "OK", val: true, onClick: function onClick(e) {
	            return true;
	          } }], center: true, autoclose: false, callback: null, onShow: null, animate: true, closeClick: true, closable: true, theme: "default", background: "rgba(0,0,0,0.5)", zIndex: 1050, buttonText: { ok: "OK", yes: "Yes", cancel: "Cancel" }, template: "<div class=\"modal-box\"><div class=\"modal-inner\"><div class=\"modal-title\"><a class=\"modal-close-btn\"></a></div><div class=\"modal-text\"></div><div class=\"modal-buttons\"></div></div></div>", _classes: { box: ".modal-box", boxInner: ".modal-inner", title: ".modal-title", content: ".modal-text", buttons: ".modal-buttons", closebtn: ".modal-close-btn" } },
	          t = e.extend({}, n, t),
	          r,
	          i = e("<div id='modal-window' />").hide(),
	          s = t._classes.box,
	          o = i.append(t.template),
	          u = { init: function init() {
	          e("#modal-window").remove();i.css({ position: "fixed", width: "100%", height: "100%", top: "0", left: "0", "z-index": t.zIndex, overflow: "auto" });i.find(t._classes.box).css({ position: "absolute" });u._modalShow();u._modalConent();t.onShow != null ? t.onShow({ close: function close() {
	              u._modalHide();
	            }, getModal: function getModal() {
	              return i;
	            }, getTitle: function getTitle() {
	              return i.find(t._classes.title);
	            }, getContet: function getContet() {
	              return i.find(t._classes.content);
	            }, setTitle: function setTitle(e) {
	              i.find(t._classes.title + " h3").html(e);return true;
	            }, setContent: function setContent(e) {
	              i.find(t._classes.content).html(e);return true;
	            }, setClosable: function setClosable(e) {
	              if (e === false) {
	                t.closable = false;
	              } else {
	                t.closable = true;
	              }return true;
	            } }) : null;i.on("click", "a.modal-btn", function (t) {
	            u._modalBtn(e(this));
	          }).on("click", t._classes.closebtn, function (e) {
	            u._modalHide();
	          }).click(function (e) {
	            if (t.closeClick) {
	              if (e.target.id == "modal-window") {
	                u._modalHide();
	              }
	            }
	          });e(window).bind("keyup", u._keyUpF).resize(function () {
	            var e = t.animate;t.animate = false;u._position();t.animate = e;
	          });i.bind("DOMSubtreeModified", u._position);
	        }, _keyUpF: function _keyUpF(e) {
	          switch (e.keyCode) {case 13:
	              if ($("input:not(.modal-prompt-input),textarea").is(":focus")) {
	                return false;
	              }u._modalBtn(i.find(t._classes.buttons + " a.modal-btn" + (typeof u.btnForEKey !== "undefined" && i.find(t._classes.buttons + " a.modal-btn:eq(" + u.btnForEKey + ")").size() > 0 ? ":eq(" + u.btnForEKey + ")" : ":last-child")));break;case 27:
	              u._modalHide();break;}
	        }, _modalShow: function _modalShow() {
	          e("body").css({ overflow: "hidden", width: e("body").innerWidth() }).append(o);
	        }, _modalHide: function _modalHide(n) {
	          if (t.closable === false) {
	            return false;
	          }r = typeof r == "undefined" ? false : r;var o = function o() {
	            i.fadeOut(200, function () {
	              t.callback != null ? t.callback(r) : null;e(this).remove();e("body").css({ overflow: "", width: "" });
	            });var n = 100 * parseFloat(e(s).css("top")) / parseFloat(e(s).parent().css("height"));e(s).stop(true, true).animate({ top: n + (t.animate ? 3 : 0) + "%" }, "fast");
	          };if (!n) {
	            o();
	          } else {
	            setTimeout(function () {
	              o();
	            }, n);
	          }e(window).unbind("keyup", u._keyUpF);
	        }, _modalConent: function _modalConent() {
	          var n = t._classes.title,
	              r = t._classes.content,
	              o = t._classes.buttons,
	              a = t.buttonText,
	              f = ["alert", "confirm", "prompt"],
	              l = ["xenon", "atlant", "reseted"];if (e.inArray(t.type, f) == -1 && t.type != "default") {
	            e(s).addClass("modal-type-" + t.type);
	          }if (t.size && t.size != null) {
	            e(s).addClass("modal-size-" + t.size);
	          } else {
	            e(s).addClass("modal-size-normal");
	          }if (t.theme && t.theme != null && t.theme != "default") {
	            e(s).addClass((e.inArray(t.theme, l) == -1 ? "" : "modal-theme-") + t.theme);
	          }if (t.background && t.background != null) {
	            i.css("background-color", t.background);
	          }if (t.title || t.title != null) {
	            e(n).prepend("<h3>" + t.title + "</h3>");
	          } else {
	            e(n).remove();
	          }t.type == "prompt" ? t.text += "<input type=\"text\" name=\"modal-prompt-input\" class=\"modal-prompt-input\" autocomplete=\"off\" autofocus=\"on\" />" : "";e(r).html(t.text);if (t.buttons || t.buttons != null) {
	            var c = "";switch (t.type) {case "alert":
	                c = "<a class=\"modal-btn" + (t.buttons[0].addClass ? " " + t.buttons[0].addClass : "") + "\">" + a.ok + "</a>";break;case "confirm":
	                c = "<a class=\"modal-btn" + (t.buttons[0].addClass ? " " + t.buttons[0].addClass : "") + "\">" + a.cancel + "</a><a class=\"modal-btn " + (t.buttons[1] && t.buttons[1].addClass ? " " + t.buttons[1].addClass : "btn-light-blue") + "\">" + a.yes + "</a>";break;case "prompt":
	                c = "<a class=\"modal-btn" + (t.buttons[0].addClass ? " " + t.buttons[0].addClass : "") + "\">" + a.cancel + "</a><a class=\"modal-btn " + (t.buttons[1] && t.buttons[1].addClass ? " " + t.buttons[1].addClass : "btn-light-blue") + "\">" + a.ok + "</a>";break;default:
	                if (t.buttons.length > 0 && e.isArray(t.buttons)) {
	                  e.each(t.buttons, function (e, t) {
	                    var n = t.addClass && typeof t.addClass != "undefined" ? " " + t.addClass : "";c += "<a class=\"modal-btn" + n + "\">" + t.text + "</a>";if (t.eKey) {
	                      u.btnForEKey = e;
	                    }
	                  });
	                } else {
	                  c += "<a class=\"modal-btn\">" + a.ok + "</a>";
	                }}e(o).html(c);
	          } else {
	            e(o).remove();
	          }i.fadeIn(200);u._position();if (t.type == "prompt") {
	            $(".modal-prompt-input").focus();
	          }if (t.autoclose) {
	            var h = t.buttons || t.buttons != null ? e(r).text().length * 32 : 900;u._modalHide(h < 900 ? 900 : h);
	          }
	        }, _position: function _position() {
	          var n = null;if (t.center) {
	            n = { top: 50, left: 50, marginTop: -e(s).outerHeight() / 2, marginLeft: -e(s).outerWidth() / 2 };if (e(window).height() < e(s).outerHeight()) {
	              n.top = 1;n.marginTop = 0;
	            }e(s).css({ top: n.top - (t.animate ? 3 : 0) + "%", left: n.left + "%", "margin-top": n.marginTop, "margin-left": n.marginLeft }).stop(true, true).animate({ top: n.top + "%" }, "fast");
	          } else {
	            n = { top: 10, left: 50, marginTop: 0, marginLeft: -e(s).outerWidth() / 2 };e(s).css({ top: n.top - (t.animate ? 3 : 0) + "%", left: n.left + "%", "margin-top": n.marginTop, "margin-left": n.marginLeft }).stop(true, true).animate({ top: n.top + "%" }, "fast");
	          }
	        }, _modalBtn: function _modalBtn(n) {
	          var s = false,
	              o = t.type,
	              a = n.index(),
	              f = t.buttons[a];if (e.inArray(o, ["alert", "confirm", "prompt"]) > -1) {
	            s = a == 1 ? true : false;if (o == "prompt") {
	              s = s && i.find("input.modal-prompt-input").size() > 0 && i.find("input.modal-prompt-input").val().length != 0 ? i.find("input.modal-prompt-input").val() : false;
	            }u._modalHide();
	          } else {
	            if (n.hasClass("btn-disabled")) {
	              return false;
	            }s = f && f.val ? f.val : true;if (!f.onClick || f.onClick({ val: s, bObj: n, bOpts: f, close: function close() {
	                u._modalHide();
	              }, getModal: function getModal() {
	                return i;
	              }, getTitle: function getTitle() {
	                return i.find(t._classes.title);
	              }, getContet: function getContet() {
	                return i.find(t._classes.content);
	              }, setTitle: function setTitle(e) {
	                i.find(t._classes.title + " h3").html(e);return true;
	              }, setContent: function setContent(e) {
	                i.find(t._classes.content).html(e);return true;
	              }, setClosable: function setClosable(e) {
	                if (e === false) {
	                  t.closable = false;
	                } else {
	                  t.closable = true;
	                }return true;
	              } })) {
	              u._modalHide();
	            }
	          }r = s;
	        } };u.init();return true;
	    };
	  })(jQuery);
	}).call(window);

/***/ },

/***/ 46:
/***/ function(module, exports) {

	/**
	 * BxSlider v4.1.3 - Fully loaded, responsive content slider
	 * http://bxslider.com
	 *
	 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
	 * Written while drinking Belgian ales and listening to jazz
	 *
	 * Released under the MIT license - http://opensource.org/licenses/MIT
	 */
	
	;(function($){
	
		var plugin = {};
	
		var defaults = {
	
			// GENERAL
			mode: 'horizontal',
			slideSelector: '',
			infiniteLoop: true,
			hideControlOnEnd: false,
			speed: 500,
			easing: null,
			slideMargin: 0,
			startSlide: 0,
			randomStart: false,
			captions: false,
			ticker: false,
			tickerHover: false,
			adaptiveHeight: false,
			adaptiveHeightSpeed: 500,
			video: false,
			useCSS: true,
			preloadImages: 'visible',
			responsive: true,
			slideZIndex: 50,
			wrapperClass: 'bx-wrapper',
	
			// TOUCH
			touchEnabled: true,
			swipeThreshold: 50,
			oneToOneTouch: true,
			preventDefaultSwipeX: true,
			preventDefaultSwipeY: false,
	
			// PAGER
			pager: true,
			pagerType: 'full',
			pagerShortSeparator: ' / ',
			pagerSelector: null,
			buildPager: null,
			pagerCustom: null,
	
			// CONTROLS
			controls: true,
			nextText: 'Next',
			prevText: 'Prev',
			nextSelector: null,
			prevSelector: null,
			autoControls: false,
			startText: 'Start',
			stopText: 'Stop',
			autoControlsCombine: false,
			autoControlsSelector: null,
	
			// AUTO
			auto: false,
			pause: 4000,
			autoStart: true,
			autoDirection: 'next',
			autoHover: false,
			autoDelay: 0,
			autoSlideForOnePage: false,
	
			// CAROUSEL
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 0,
			slideWidth: 0,
	
			// CALLBACKS
			onSliderLoad: function() {},
			onSlideBefore: function() {},
			onSlideAfter: function() {},
			onSlideNext: function() {},
			onSlidePrev: function() {},
			onSliderResize: function() {}
		}
	
		$.fn.bxSlider = function(options){
	
			if(this.length == 0) return this;
	
			// support multiple elements
			if(this.length > 1){
				this.each(function(){$(this).bxSlider(options)});
				return this;
			}
	
			// create a namespace to be used throughout the plugin
			var slider = {};
			// set a reference to our slider element
			var el = this;
			plugin.el = this;
	
			/**
			 * Makes slideshow responsive
			 */
			// first get the original window dimens (thanks a lot IE)
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
	
	
	
			/**
			 * ===================================================================================
			 * = PRIVATE FUNCTIONS
			 * ===================================================================================
			 */
	
			/**
			 * Initializes namespace settings to be used throughout plugin
			 */
			var init = function(){
				// merge user-supplied options with the defaults
				slider.settings = $.extend({}, defaults, options);
				// parse slideWidth setting
				slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
				// store the original children
				slider.children = el.children(slider.settings.slideSelector);
				// check if actual number of slides is less than minSlides / maxSlides
				if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
				if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
				// if random start, set the startSlide setting to random number
				if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
				// store active slide information
				slider.active = { index: slider.settings.startSlide }
				// store if the slider is in carousel mode (displaying / moving multiple slides)
				slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
				// if carousel, force preloadImages = 'all'
				if(slider.carousel) slider.settings.preloadImages = 'all';
				// calculate the min / max width thresholds based on min / max number of slides
				// used to setup and update carousel slides dimensions
				slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
				slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				// store the current state of the slider (if currently animating, working is true)
				slider.working = false;
				// initialize the controls object
				slider.controls = {};
				// initialize an auto interval
				slider.interval = null;
				// determine which property to use for transitions
				slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
				// determine if hardware acceleration can be used
				slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
					// create our test div element
					var div = document.createElement('div');
					// css transition properties
					var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
					// test for each property
					for(var i in props){
						if(div.style[props[i]] !== undefined){
							slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
							slider.animProp = '-' + slider.cssPrefix + '-transform';
							return true;
						}
					}
					return false;
				}());
				// if vertical mode always make maxSlides and minSlides equal
				if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
				// save original style data
				el.data("origStyle", el.attr("style"));
				el.children(slider.settings.slideSelector).each(function() {
				  $(this).data("origStyle", $(this).attr("style"));
				});
				// perform all DOM / CSS modifications
				setup();
			}
	
			/**
			 * Performs all DOM and CSS modifications
			 */
			var setup = function(){
				// wrap el in a wrapper
				el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
				// store a namespace reference to .bx-viewport
				slider.viewport = el.parent();
				// add a loading div to display while images are loading
				slider.loader = $('<div class="bx-loading" />');
				slider.viewport.prepend(slider.loader);
				// set el to a massive width, to hold any needed slides
				// also strip any margin and padding from el
				el.css({
					width: slider.settings.mode == 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
					position: 'absolute'
				});
				// if using CSS, add the easing property
				if(slider.usingCSS && slider.settings.easing){
					el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
				// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
				}else if(!slider.settings.easing){
					slider.settings.easing = 'swing';
				}
				var slidesShowing = getNumberSlidesShowing();
				// make modifications to the viewport (.bx-viewport)
				slider.viewport.css({
					width: '100%',
					overflow: 'hidden',
					position: 'relative'
				});
				slider.viewport.parent().css({
					maxWidth: getViewportMaxWidth()
				});
				// make modification to the wrapper (.bx-wrapper)
				if(!slider.settings.pager) {
					slider.viewport.parent().css({
						margin: '0 auto 0px'
					});
				}
				// apply css to all slider children
				slider.children.css({
					'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
					listStyle: 'none',
					position: 'relative'
				});
				// apply the calculated width after the float is applied to prevent scrollbar interference
				slider.children.css('width', getSlideWidth());
				// if slideMargin is supplied, add the css
				if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
				if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
				// if "fade" mode, add positioning and z-index CSS
				if(slider.settings.mode == 'fade'){
					slider.children.css({
						position: 'absolute',
						zIndex: 0,
						display: 'none'
					});
					// prepare the z-index on the showing element
					slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
				}
				// create an element to contain all slider controls (pager, start / stop, etc)
				slider.controls.el = $('<div class="bx-controls" />');
				// if captions are requested, add them
				if(slider.settings.captions) appendCaptions();
				// check if startSlide is last slide
				slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
				// if video is true, set up the fitVids plugin
				if(slider.settings.video) el.fitVids();
				// set the default preload selector (visible)
				var preloadSelector = slider.children.eq(slider.settings.startSlide);
				if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
				// only check for control addition if not in "ticker" mode
				if(!slider.settings.ticker){
					// if controls are requested, add them
					if(slider.settings.controls) appendControls();
					// if auto is true, and auto controls are requested, add them
					if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
					// if pager is requested, add it
					if(slider.settings.pager) appendPager();
					// if any control option is requested, add the controls wrapper
					if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
				// if ticker mode, do not allow a pager
				}else{
					slider.settings.pager = false;
				}
				// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
				loadElements(preloadSelector, start);
			}
	
			var loadElements = function(selector, callback){
				var total = selector.find('img, iframe').length;
				if (total == 0){
					callback();
					return;
				}
				var count = 0;
				selector.find('img, iframe').each(function(){
					$(this).one('load', function() {
					  if(++count == total) callback();
					}).each(function() {
					  if(this.complete) $(this).load();
					});
				});
			}
	
			/**
			 * Start the slider
			 */
			var start = function(){
				// if infinite loop, prepare additional slides
				if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
					var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
					var sliceAppend = slider.children.slice(0, slice).clone(true).addClass('bx-clone');
					var slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
					el.append(sliceAppend).prepend(slicePrepend);
				}
				// remove the loading DOM element
				slider.loader.remove();
				// set the left / top position of "el"
				setSlidePosition();
				// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
				if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
				// set the viewport height
				slider.viewport.height(getViewportHeight());
				// make sure everything is positioned just right (same as a window resize)
				el.redrawSlider();
				// onSliderLoad callback
				slider.settings.onSliderLoad(slider.active.index);
				// slider has been fully initialized
				slider.initialized = true;
				// bind the resize call to the window
				if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
				// if auto is true and has more than 1 page, start the show
				if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) initAuto();
				// if ticker is true, start the ticker
				if (slider.settings.ticker) initTicker();
				// if pager is requested, make the appropriate pager link active
				if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
				// check for any updates to the controls (like hideControlOnEnd updates)
				if (slider.settings.controls) updateDirectionControls();
				// if touchEnabled is true, setup the touch events
				if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
			}
	
			/**
			 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
			 */
			var getViewportHeight = function(){
				var height = 0;
				// first determine which children (slides) should be used in our height calculation
				var children = $();
				// if mode is not "vertical" and adaptiveHeight is false, include all children
				if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
					children = slider.children;
				}else{
					// if not carousel, return the single active child
					if(!slider.carousel){
						children = slider.children.eq(slider.active.index);
					// if carousel, return a slice of children
					}else{
						// get the individual slide index
						var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
						// add the current slide to the children
						children = slider.children.eq(currentIndex);
						// cycle through the remaining "showing" slides
						for (i = 1; i <= slider.settings.maxSlides - 1; i++){
							// if looped back to the start
							if(currentIndex + i >= slider.children.length){
								children = children.add(slider.children.eq(i - 1));
							}else{
								children = children.add(slider.children.eq(currentIndex + i));
							}
						}
					}
				}
				// if "vertical" mode, calculate the sum of the heights of the children
				if(slider.settings.mode == 'vertical'){
					children.each(function(index) {
					  height += $(this).outerHeight();
					});
					// add user-supplied margins
					if(slider.settings.slideMargin > 0){
						height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
					}
				// if not "vertical" mode, calculate the max height of the children
				}else{
					height = Math.max.apply(Math, children.map(function(){
						return $(this).outerHeight(false);
					}).get());
				}
	
				if(slider.viewport.css('box-sizing') == 'border-box'){
					height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
								parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
				}else if(slider.viewport.css('box-sizing') == 'padding-box'){
					height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
				}
	
				return height;
			}
	
			/**
			 * Returns the calculated width to be used for the outer wrapper / viewport
			 */
			var getViewportMaxWidth = function(){
				var width = '100%';
				if(slider.settings.slideWidth > 0){
					if(slider.settings.mode == 'horizontal'){
						width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
					}else{
						width = slider.settings.slideWidth;
					}
				}
				return width;
			}
	
			/**
			 * Returns the calculated width to be applied to each slide
			 */
			var getSlideWidth = function(){
				// start with any user-supplied slide width
				var newElWidth = slider.settings.slideWidth;
				// get the current viewport width
				var wrapWidth = slider.viewport.width();
				// if slide width was not supplied, or is larger than the viewport use the viewport width
				if(slider.settings.slideWidth == 0 ||
					(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
					slider.settings.mode == 'vertical'){
					newElWidth = wrapWidth;
				// if carousel, use the thresholds to determine the width
				}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
					if(wrapWidth > slider.maxThreshold){
						// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
					}else if(wrapWidth < slider.minThreshold){
						newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
					}
				}
				return newElWidth;
			}
	
			/**
			 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
			 */
			var getNumberSlidesShowing = function(){
				var slidesShowing = 1;
				if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
					// if viewport is smaller than minThreshold, return minSlides
					if(slider.viewport.width() < slider.minThreshold){
						slidesShowing = slider.settings.minSlides;
					// if viewport is larger than minThreshold, return maxSlides
					}else if(slider.viewport.width() > slider.maxThreshold){
						slidesShowing = slider.settings.maxSlides;
					// if viewport is between min / max thresholds, divide viewport width by first child width
					}else{
						var childWidth = slider.children.first().width() + slider.settings.slideMargin;
						slidesShowing = Math.floor((slider.viewport.width() +
							slider.settings.slideMargin) / childWidth);
					}
				// if "vertical" mode, slides showing will always be minSlides
				}else if(slider.settings.mode == 'vertical'){
					slidesShowing = slider.settings.minSlides;
				}
				return slidesShowing;
			}
	
			/**
			 * Returns the number of pages (one full viewport of slides is one "page")
			 */
			var getPagerQty = function(){
				var pagerQty = 0;
				// if moveSlides is specified by the user
				if(slider.settings.moveSlides > 0){
					if(slider.settings.infiniteLoop){
						pagerQty = Math.ceil(slider.children.length / getMoveBy());
					}else{
						// use a while loop to determine pages
						var breakPoint = 0;
						var counter = 0
						// when breakpoint goes above children length, counter is the number of pages
						while (breakPoint < slider.children.length){
							++pagerQty;
							breakPoint = counter + getNumberSlidesShowing();
							counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
						}
					}
				// if moveSlides is 0 (auto) divide children length by sides showing, then round up
				}else{
					pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
				}
				return pagerQty;
			}
	
			/**
			 * Returns the number of individual slides by which to shift the slider
			 */
			var getMoveBy = function(){
				// if moveSlides was set by the user and moveSlides is less than number of slides showing
				if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
					return slider.settings.moveSlides;
				}
				// if moveSlides is 0 (auto)
				return getNumberSlidesShowing();
			}
	
			/**
			 * Sets the slider's (el) left or top position
			 */
			var setSlidePosition = function(){
				// if last slide, not infinite loop, and number of children is larger than specified maxSlides
				if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
					if (slider.settings.mode == 'horizontal'){
						// get the last child's position
						var lastChild = slider.children.last();
						var position = lastChild.position();
						// set the left position
						setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
					}else if(slider.settings.mode == 'vertical'){
						// get the last showing index's position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						var position = slider.children.eq(lastShowingIndex).position();
						// set the top position
						setPositionProperty(-position.top, 'reset', 0);
					}
				// if not last slide
				}else{
					// get the position of the first showing slide
					var position = slider.children.eq(slider.active.index * getMoveBy()).position();
					// check for last slide
					if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
					// set the respective position
					if (position != undefined){
						if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
						else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
					}
				}
			}
	
			/**
			 * Sets the el's animating property position (which in turn will sometimes animate el).
			 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
			 *
			 * @param value (int)
			 *  - the animating property's value
			 *
			 * @param type (string) 'slider', 'reset', 'ticker'
			 *  - the type of instance for which the function is being
			 *
			 * @param duration (int)
			 *  - the amount of time (in ms) the transition should occupy
			 *
			 * @param params (array) optional
			 *  - an optional parameter containing any variables that need to be passed in
			 */
			var setPositionProperty = function(value, type, duration, params){
				// use CSS transform
				if(slider.usingCSS){
					// determine the translate3d value
					var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
					// add the CSS transition-duration
					el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
					if(type == 'slide'){
						// set the property value
						el.css(slider.animProp, propValue);
						// bind a callback method - executes when CSS transition completes
						el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
							// unbind the callback
							el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
							updateAfterSlideTransition();
						});
					}else if(type == 'reset'){
						el.css(slider.animProp, propValue);
					}else if(type == 'ticker'){
						// make the transition use 'linear'
						el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
						el.css(slider.animProp, propValue);
						// bind a callback method - executes when CSS transition completes
						el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
							// unbind the callback
							el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
							// reset the position
							setPositionProperty(params['resetValue'], 'reset', 0);
							// start the loop again
							tickerLoop();
						});
					}
				// use JS animate
				}else{
					var animateObj = {};
					animateObj[slider.animProp] = value;
					if(type == 'slide'){
						el.animate(animateObj, duration, slider.settings.easing, function(){
							updateAfterSlideTransition();
						});
					}else if(type == 'reset'){
						el.css(slider.animProp, value)
					}else if(type == 'ticker'){
						el.animate(animateObj, speed, 'linear', function(){
							setPositionProperty(params['resetValue'], 'reset', 0);
							// run the recursive loop after animation
							tickerLoop();
						});
					}
				}
			}
	
			/**
			 * Populates the pager with proper amount of pages
			 */
			var populatePager = function(){
				var pagerHtml = '';
				var pagerQty = getPagerQty();
				// loop through each pager item
				for(var i=0; i < pagerQty; i++){
					var linkContent = '';
					// if a buildPager function is supplied, use it to get pager link value, else use index + 1
					if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
						linkContent = slider.settings.buildPager(i);
						slider.pagerEl.addClass('bx-custom-pager');
					}else{
						linkContent = i + 1;
						slider.pagerEl.addClass('bx-default-pager');
					}
					// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
					// add the markup to the string
					pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
				};
				// populate the pager element with pager links
				slider.pagerEl.html(pagerHtml);
			}
	
			/**
			 * Appends the pager to the controls element
			 */
			var appendPager = function(){
				if(!slider.settings.pagerCustom){
					// create the pager DOM element
					slider.pagerEl = $('<div class="bx-pager" />');
					// if a pager selector was supplied, populate it with the pager
					if(slider.settings.pagerSelector){
						$(slider.settings.pagerSelector).html(slider.pagerEl);
					// if no pager selector was supplied, add it after the wrapper
					}else{
						slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
					}
					// populate the pager
					populatePager();
				}else{
					slider.pagerEl = $(slider.settings.pagerCustom);
				}
				// assign the pager click binding
				slider.pagerEl.on('click', 'a', clickPagerBind);
			}
	
			/**
			 * Appends prev / next controls to the controls element
			 */
			var appendControls = function(){
				slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
				slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
				// bind click actions to the controls
				slider.controls.next.bind('click', clickNextBind);
				slider.controls.prev.bind('click', clickPrevBind);
				// if nextSelector was supplied, populate it
				if(slider.settings.nextSelector){
					$(slider.settings.nextSelector).append(slider.controls.next);
				}
				// if prevSelector was supplied, populate it
				if(slider.settings.prevSelector){
					$(slider.settings.prevSelector).append(slider.controls.prev);
				}
				// if no custom selectors were supplied
				if(!slider.settings.nextSelector && !slider.settings.prevSelector){
					// add the controls to the DOM
					slider.controls.directionEl = $('<div class="bx-controls-direction" />');
					// add the control elements to the directionEl
					slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
					// slider.viewport.append(slider.controls.directionEl);
					slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
				}
			}
	
			/**
			 * Appends start / stop auto controls to the controls element
			 */
			var appendControlsAuto = function(){
				slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
				slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
				// add the controls to the DOM
				slider.controls.autoEl = $('<div class="bx-controls-auto" />');
				// bind click actions to the controls
				slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
				slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
				// if autoControlsCombine, insert only the "start" control
				if(slider.settings.autoControlsCombine){
					slider.controls.autoEl.append(slider.controls.start);
				// if autoControlsCombine is false, insert both controls
				}else{
					slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
				}
				// if auto controls selector was supplied, populate it with the controls
				if(slider.settings.autoControlsSelector){
					$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
				// if auto controls selector was not supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
				}
				// update the auto controls
				updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
			}
	
			/**
			 * Appends image captions to the DOM
			 */
			var appendCaptions = function(){
				// cycle through each child
				slider.children.each(function(index){
					// get the image title attribute
					var title = $(this).find('img:first').attr('title');
					// append the caption
					if (title != undefined && ('' + title).length) {
	                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
	                }
				});
			}
	
			/**
			 * Click next binding
			 *
			 * @param e (event)
			 *  - DOM event object
			 */
			var clickNextBind = function(e){
				// if auto show is running, stop it
				if (slider.settings.auto) el.stopAuto();
				el.goToNextSlide();
				e.preventDefault();
			}
	
			/**
			 * Click prev binding
			 *
			 * @param e (event)
			 *  - DOM event object
			 */
			var clickPrevBind = function(e){
				// if auto show is running, stop it
				if (slider.settings.auto) el.stopAuto();
				el.goToPrevSlide();
				e.preventDefault();
			}
	
			/**
			 * Click start binding
			 *
			 * @param e (event)
			 *  - DOM event object
			 */
			var clickStartBind = function(e){
				el.startAuto();
				e.preventDefault();
			}
	
			/**
			 * Click stop binding
			 *
			 * @param e (event)
			 *  - DOM event object
			 */
			var clickStopBind = function(e){
				el.stopAuto();
				e.preventDefault();
			}
	
			/**
			 * Click pager binding
			 *
			 * @param e (event)
			 *  - DOM event object
			 */
			var clickPagerBind = function(e){
				// if auto show is running, stop it
				if (slider.settings.auto) el.stopAuto();
				var pagerLink = $(e.currentTarget);
				if(pagerLink.attr('data-slide-index') !== undefined){
					var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
					// if clicked pager link is not active, continue with the goToSlide call
					if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
					e.preventDefault();
				}
			}
	
			/**
			 * Updates the pager links with an active class
			 *
			 * @param slideIndex (int)
			 *  - index of slide to make active
			 */
			var updatePagerActive = function(slideIndex){
				// if "short" pager type
				var len = slider.children.length; // nb of children
				if(slider.settings.pagerType == 'short'){
					if(slider.settings.maxSlides > 1) {
						len = Math.ceil(slider.children.length/slider.settings.maxSlides);
					}
					slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
					return;
				}
				// remove all pager active classes
				slider.pagerEl.find('a').removeClass('active');
				// apply the active class for all pagers
				slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
			}
	
			/**
			 * Performs needed actions after a slide transition
			 */
			var updateAfterSlideTransition = function(){
				// if infinite loop is true
				if(slider.settings.infiniteLoop){
					var position = '';
					// first slide
					if(slider.active.index == 0){
						// set the new position
						position = slider.children.eq(0).position();
					// carousel, last slide
					}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
						position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
					// last slide
					}else if(slider.active.index == slider.children.length - 1){
						position = slider.children.eq(slider.children.length - 1).position();
					}
					if(position){
						if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
						else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
					}
				}
				// declare that the transition is complete
				slider.working = false;
				// onSlideAfter callback
				slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
	
			/**
			 * Updates the auto controls state (either active, or combined switch)
			 *
			 * @param state (string) "start", "stop"
			 *  - the new state of the auto show
			 */
			var updateAutoControls = function(state){
				// if autoControlsCombine is true, replace the current control with the new state
				if(slider.settings.autoControlsCombine){
					slider.controls.autoEl.html(slider.controls[state]);
				// if autoControlsCombine is false, apply the "active" class to the appropriate control
				}else{
					slider.controls.autoEl.find('a').removeClass('active');
					slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
				}
			}
	
			/**
			 * Updates the direction controls (checks if either should be hidden)
			 */
			var updateDirectionControls = function(){
				if(getPagerQty() == 1){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.addClass('disabled');
				}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
					// if first slide
					if (slider.active.index == 0){
						slider.controls.prev.addClass('disabled');
						slider.controls.next.removeClass('disabled');
					// if last slide
					}else if(slider.active.index == getPagerQty() - 1){
						slider.controls.next.addClass('disabled');
						slider.controls.prev.removeClass('disabled');
					// if any slide in the middle
					}else{
						slider.controls.prev.removeClass('disabled');
						slider.controls.next.removeClass('disabled');
					}
				}
			}
	
			/**
			 * Initializes the auto process
			 */
			var initAuto = function(){
				// if autoDelay was supplied, launch the auto show using a setTimeout() call
				if(slider.settings.autoDelay > 0){
					var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
				// if autoDelay was not supplied, start the auto show normally
				}else{
					el.startAuto();
				}
				// if autoHover is requested
				if(slider.settings.autoHover){
					// on el hover
					el.hover(function(){
						// if the auto show is currently playing (has an active interval)
						if(slider.interval){
							// stop the auto show and pass true argument which will prevent control update
							el.stopAuto(true);
							// create a new autoPaused value which will be used by the relative "mouseout" event
							slider.autoPaused = true;
						}
					}, function(){
						// if the autoPaused value was created be the prior "mouseover" event
						if(slider.autoPaused){
							// start the auto show and pass true argument which will prevent control update
							el.startAuto(true);
							// reset the autoPaused value
							slider.autoPaused = null;
						}
					});
				}
			}
	
			/**
			 * Initializes the ticker process
			 */
			var initTicker = function(){
				var startPosition = 0;
				// if autoDirection is "next", append a clone of the entire slider
				if(slider.settings.autoDirection == 'next'){
					el.append(slider.children.clone().addClass('bx-clone'));
				// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
				}else{
					el.prepend(slider.children.clone().addClass('bx-clone'));
					var position = slider.children.first().position();
					startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
				}
				setPositionProperty(startPosition, 'reset', 0);
				// do not allow controls in ticker mode
				slider.settings.pager = false;
				slider.settings.controls = false;
				slider.settings.autoControls = false;
				// if autoHover is requested
				if(slider.settings.tickerHover && !slider.usingCSS){
					// on el hover
					slider.viewport.hover(function(){
						el.stop();
					}, function(){
						// calculate the total width of children (used to calculate the speed ratio)
						var totalDimens = 0;
						slider.children.each(function(index){
						  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
						});
						// calculate the speed ratio (used to determine the new speed to finish the paused animation)
						var ratio = slider.settings.speed / totalDimens;
						// determine which property to use
						var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
						// calculate the new speed
						var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
						tickerLoop(newSpeed);
					});
				}
				// start the ticker loop
				tickerLoop();
			}
	
			/**
			 * Runs a continuous loop, news ticker-style
			 */
			var tickerLoop = function(resumeSpeed){
				speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
				var position = {left: 0, top: 0};
				var reset = {left: 0, top: 0};
				// if "next" animate left position to last child, then reset left to 0
				if(slider.settings.autoDirection == 'next'){
					position = el.find('.bx-clone').first().position();
				// if "prev" animate left position to 0, then reset left to first non-clone child
				}else{
					reset = slider.children.first().position();
				}
				var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
				var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
				var params = {resetValue: resetValue};
				setPositionProperty(animateProperty, 'ticker', speed, params);
			}
	
			/**
			 * Initializes touch events
			 */
			var initTouch = function(){
				// initialize object to contain all touch values
				slider.touch = {
					start: {x: 0, y: 0},
					end: {x: 0, y: 0}
				}
				slider.viewport.bind('touchstart', onTouchStart);
			}
	
			/**
			 * Event handler for "touchstart"
			 *
			 * @param e (event)
			 *  - DOM event object
			 */
			var onTouchStart = function(e){
				if(slider.working){
					e.preventDefault();
				}else{
					// record the original position when touch starts
					slider.touch.originalPos = el.position();
					var orig = e.originalEvent;
					// record the starting touch x, y coordinates
					slider.touch.start.x = orig.changedTouches[0].pageX;
					slider.touch.start.y = orig.changedTouches[0].pageY;
					// bind a "touchmove" event to the viewport
					slider.viewport.bind('touchmove', onTouchMove);
					// bind a "touchend" event to the viewport
					slider.viewport.bind('touchend', onTouchEnd);
				}
			}
	
			/**
			 * Event handler for "touchmove"
			 *
			 * @param e (event)
			 *  - DOM event object
			 */
			var onTouchMove = function(e){
				var orig = e.originalEvent;
				// if scrolling on y axis, do not prevent default
				var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
				var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
				// x axis swipe
				if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
					e.preventDefault();
				// y axis swipe
				}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
					e.preventDefault();
				}
				if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
					var value = 0;
					// if horizontal, drag along x axis
					if(slider.settings.mode == 'horizontal'){
						var change = orig.changedTouches[0].pageX - slider.touch.start.x;
						value = slider.touch.originalPos.left + change;
					// if vertical, drag along y axis
					}else{
						var change = orig.changedTouches[0].pageY - slider.touch.start.y;
						value = slider.touch.originalPos.top + change;
					}
					setPositionProperty(value, 'reset', 0);
				}
			}
	
			/**
			 * Event handler for "touchend"
			 *
			 * @param e (event)
			 *  - DOM event object
			 */
			var onTouchEnd = function(e){
				slider.viewport.unbind('touchmove', onTouchMove);
				var orig = e.originalEvent;
				var value = 0;
				// record end x, y positions
				slider.touch.end.x = orig.changedTouches[0].pageX;
				slider.touch.end.y = orig.changedTouches[0].pageY;
				// if fade mode, check if absolute x distance clears the threshold
				if(slider.settings.mode == 'fade'){
					var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
					if(distance >= slider.settings.swipeThreshold){
						slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}
				// not fade mode
				}else{
					var distance = 0;
					// calculate distance and el's animate property
					if(slider.settings.mode == 'horizontal'){
						distance = slider.touch.end.x - slider.touch.start.x;
						value = slider.touch.originalPos.left;
					}else{
						distance = slider.touch.end.y - slider.touch.start.y;
						value = slider.touch.originalPos.top;
					}
					// if not infinite loop and first / last slide, do not attempt a slide transition
					if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
						setPositionProperty(value, 'reset', 200);
					}else{
						// check if distance clears threshold
						if(Math.abs(distance) >= slider.settings.swipeThreshold){
							distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
							el.stopAuto();
						}else{
							// el.animate(property, 200);
							setPositionProperty(value, 'reset', 200);
						}
					}
				}
				slider.viewport.unbind('touchend', onTouchEnd);
			}
	
			/**
			 * Window resize event callback
			 */
			var resizeWindow = function(e){
				// don't do anything if slider isn't initialized.
				if(!slider.initialized) return;
				// get the new window dimens (again, thank you IE)
				var windowWidthNew = $(window).width();
				var windowHeightNew = $(window).height();
				// make sure that it is a true window resize
				// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
				// are resized. Can you just die already?*
				if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
					// set the new window dimens
					windowWidth = windowWidthNew;
					windowHeight = windowHeightNew;
					// update all dynamic elements
					el.redrawSlider();
					// Call user resize handler
					slider.settings.onSliderResize.call(el, slider.active.index);
				}
			}
	
			/**
			 * ===================================================================================
			 * = PUBLIC FUNCTIONS
			 * ===================================================================================
			 */
	
			/**
			 * Performs slide transition to the specified slide
			 *
			 * @param slideIndex (int)
			 *  - the destination slide's index (zero-based)
			 *
			 * @param direction (string)
			 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
			 */
			el.goToSlide = function(slideIndex, direction){
				// if plugin is currently in motion, ignore request
				if(slider.working || slider.active.index == slideIndex) return;
				// declare that plugin is in motion
				slider.working = true;
				// store the old index
				slider.oldIndex = slider.active.index;
				// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
				if(slideIndex < 0){
					slider.active.index = getPagerQty() - 1;
				// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
				}else if(slideIndex >= getPagerQty()){
					slider.active.index = 0;
				// set active index to requested slide
				}else{
					slider.active.index = slideIndex;
				}
				// onSlideBefore, onSlideNext, onSlidePrev callbacks
				slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
				if(direction == 'next'){
					slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
				}else if(direction == 'prev'){
					slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
				}
				// check if last slide
				slider.active.last = slider.active.index >= getPagerQty() - 1;
				// update the pager with active class
				if(slider.settings.pager || slider.settings.pagerCustom) updatePagerActive(slider.active.index);
				// // check for direction control update
				if(slider.settings.controls) updateDirectionControls();
				// if slider is set to mode: "fade"
				if(slider.settings.mode == 'fade'){
					// if adaptiveHeight is true and next height is different from current height, animate to the new height
					if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
						slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
					}
					// fade out the visible child and reset its z-index value
					slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
					// fade in the newly requested slide
					slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex+1).fadeIn(slider.settings.speed, function(){
						$(this).css('zIndex', slider.settings.slideZIndex);
						updateAfterSlideTransition();
					});
				// slider mode is not "fade"
				}else{
					// if adaptiveHeight is true and next height is different from current height, animate to the new height
					if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
						slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
					}
					var moveBy = 0;
					var position = {left: 0, top: 0};
					// if carousel and not infinite loop
					if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
						if(slider.settings.mode == 'horizontal'){
							// get the last child position
							var lastChild = slider.children.eq(slider.children.length - 1);
							position = lastChild.position();
							// calculate the position of the last slide
							moveBy = slider.viewport.width() - lastChild.outerWidth();
						}else{
							// get last showing index position
							var lastShowingIndex = slider.children.length - slider.settings.minSlides;
							position = slider.children.eq(lastShowingIndex).position();
						}
						// horizontal carousel, going previous while on first slide (infiniteLoop mode)
					}else if(slider.carousel && slider.active.last && direction == 'prev'){
						// get the last child position
						var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
						var lastChild = el.children('.bx-clone').eq(eq);
						position = lastChild.position();
					// if infinite loop and "Next" is clicked on the last slide
					}else if(direction == 'next' && slider.active.index == 0){
						// get the last clone position
						position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
						slider.active.last = false;
					// normal non-zero requests
					}else if(slideIndex >= 0){
						var requestEl = slideIndex * getMoveBy();
						position = slider.children.eq(requestEl).position();
					}
	
					/* If the position doesn't exist
					 * (e.g. if you destroy the slider on a next click),
					 * it doesn't throw an error.
					 */
					if ("undefined" !== typeof(position)) {
						var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
						// plugin values to be animated
						setPositionProperty(value, 'slide', slider.settings.speed);
					}
				}
			}
	
			/**
			 * Transitions to the next slide in the show
			 */
			el.goToNextSlide = function(){
				// if infiniteLoop is false and last page is showing, disregard call
				if (!slider.settings.infiniteLoop && slider.active.last) return;
				var pagerIndex = parseInt(slider.active.index) + 1;
				el.goToSlide(pagerIndex, 'next');
			}
	
			/**
			 * Transitions to the prev slide in the show
			 */
			el.goToPrevSlide = function(){
				// if infiniteLoop is false and last page is showing, disregard call
				if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
				var pagerIndex = parseInt(slider.active.index) - 1;
				el.goToSlide(pagerIndex, 'prev');
			}
	
			/**
			 * Starts the auto show
			 *
			 * @param preventControlUpdate (boolean)
			 *  - if true, auto controls state will not be updated
			 */
			el.startAuto = function(preventControlUpdate){
				// if an interval already exists, disregard call
				if(slider.interval) return;
				// create an interval
				slider.interval = setInterval(function(){
					slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
				}, slider.settings.pause);
				// if auto controls are displayed and preventControlUpdate is not true
				if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
			}
	
			/**
			 * Stops the auto show
			 *
			 * @param preventControlUpdate (boolean)
			 *  - if true, auto controls state will not be updated
			 */
			el.stopAuto = function(preventControlUpdate){
				// if no interval exists, disregard call
				if(!slider.interval) return;
				// clear the interval
				clearInterval(slider.interval);
				slider.interval = null;
				// if auto controls are displayed and preventControlUpdate is not true
				if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
			}
	
			/**
			 * Returns current slide index (zero-based)
			 */
			el.getCurrentSlide = function(){
				return slider.active.index;
			}
	
			/**
			 * Returns current slide element
			 */
			el.getCurrentSlideElement = function(){
				return slider.children.eq(slider.active.index);
			}
	
			/**
			 * Returns number of slides in show
			 */
			el.getSlideCount = function(){
				return slider.children.length;
			}
	
			/**
			 * Update all dynamic slider elements
			 */
			el.redrawSlider = function(){
				// resize all children in ratio to new screen size
				slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
				// adjust the height
				slider.viewport.css('height', getViewportHeight());
				// update the slide position
				if(!slider.settings.ticker) setSlidePosition();
				// if active.last was true before the screen resize, we want
				// to keep it last no matter what screen size we end on
				if (slider.active.last) slider.active.index = getPagerQty() - 1;
				// if the active index (page) no longer exists due to the resize, simply set the index as last
				if (slider.active.index >= getPagerQty()) slider.active.last = true;
				// if there is a default pager populate it
				if(slider.settings.pager){
					populatePager();
					updatePagerActive(slider.active.index);
				}
				// if there is a custom pager activate it
				if(slider.settings.pagerCustom){
					appendPager();
					updatePagerActive(slider.active.index);
				}
			}
	
			/**
			 * Destroy the current instance of the slider (revert everything back to original state)
			 */
			el.destroySlider = function(){
				// don't do anything if slider has already been destroyed
				if(!slider.initialized) return;
				slider.initialized = false;
				$('.bx-clone', this).remove();
				slider.children.each(function() {
					$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
				});
				$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
				$(this).unwrap().unwrap();
				if(slider.controls.el) slider.controls.el.remove();
				if(slider.controls.next) slider.controls.next.remove();
				if(slider.controls.prev) slider.controls.prev.remove();
				if(slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) slider.pagerEl.remove();
				$('.bx-caption', this).remove();
				if(slider.controls.autoEl) slider.controls.autoEl.remove();
				clearInterval(slider.interval);
				if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
			}
	
			/**
			 * Reload the slider (revert all DOM changes, and re-initialize)
			 */
			el.reloadSlider = function(settings){
				if (settings != undefined) options = settings;
				el.destroySlider();
				init();
			}
	
			init();
	
			// returns the current jQuery object
			return this;
		}
	
	})(jQuery);


/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
	var $ = __webpack_require__(1);
	
	/*! Magnific Popup - v1.0.1 - 2015-12-30
	* http://dimsemenov.com/plugins/magnific-popup/
	* Copyright (c) 2015 Dmitry Semenov; */
	;(function (factory) { 
	if (true) { 
	 // AMD. Register as an anonymous module. 
	 !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); 
	 } else if (typeof exports === 'object') { 
	 // Node/CommonJS 
	 factory(require('jquery')); 
	 } else { 
	 // Browser globals 
	 factory(window.jQuery || window.Zepto); 
	 } 
	 }(function($) { 
	
	/*>>core*/
	/**
	 * 
	 * Magnific Popup Core JS file
	 * 
	 */
	
	
	/**
	 * Private static constants
	 */
	var CLOSE_EVENT = 'Close',
		BEFORE_CLOSE_EVENT = 'BeforeClose',
		AFTER_CLOSE_EVENT = 'AfterClose',
		BEFORE_APPEND_EVENT = 'BeforeAppend',
		MARKUP_PARSE_EVENT = 'MarkupParse',
		OPEN_EVENT = 'Open',
		CHANGE_EVENT = 'Change',
		NS = 'mfp',
		EVENT_NS = '.' + NS,
		READY_CLASS = 'mfp-ready',
		REMOVING_CLASS = 'mfp-removing',
		PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
	
	
	/**
	 * Private vars 
	 */
	/*jshint -W079 */
	var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
		MagnificPopup = function(){},
		_isJQ = !!(window.jQuery),
		_prevStatus,
		_window = $(window),
		_document,
		_prevContentType,
		_wrapClasses,
		_currPopupType;
	
	
	/**
	 * Private functions
	 */
	var _mfpOn = function(name, f) {
			mfp.ev.on(NS + name + EVENT_NS, f);
		},
		_getEl = function(className, appendTo, html, raw) {
			var el = document.createElement('div');
			el.className = 'mfp-'+className;
			if(html) {
				el.innerHTML = html;
			}
			if(!raw) {
				el = $(el);
				if(appendTo) {
					el.appendTo(appendTo);
				}
			} else if(appendTo) {
				appendTo.appendChild(el);
			}
			return el;
		},
		_mfpTrigger = function(e, data) {
			mfp.ev.triggerHandler(NS + e, data);
	
			if(mfp.st.callbacks) {
				// converts "mfpEventName" to "eventName" callback and triggers it if it's present
				e = e.charAt(0).toLowerCase() + e.slice(1);
				if(mfp.st.callbacks[e]) {
					mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
				}
			}
		},
		_getCloseBtn = function(type) {
			if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
				mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
				_currPopupType = type;
			}
			return mfp.currTemplate.closeBtn;
		},
		// Initialize Magnific Popup only when called at least once
		_checkInstance = function() {
			if(!$.magnificPopup.instance) {
				/*jshint -W020 */
				mfp = new MagnificPopup();
				mfp.init();
				$.magnificPopup.instance = mfp;
			}
		},
		// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
		supportsTransitions = function() {
			var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
				v = ['ms','O','Moz','Webkit']; // 'v' for vendor
	
			if( s['transition'] !== undefined ) {
				return true; 
			}
				
			while( v.length ) {
				if( v.pop() + 'Transition' in s ) {
					return true;
				}
			}
					
			return false;
		};
	
	
	
	/**
	 * Public functions
	 */
	MagnificPopup.prototype = {
	
		constructor: MagnificPopup,
	
		/**
		 * Initializes Magnific Popup plugin. 
		 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
		 */
		init: function() {
			var appVersion = navigator.appVersion;
			mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1; 
			mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
			mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
			mfp.isAndroid = (/android/gi).test(appVersion);
			mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
			mfp.supportsTransition = supportsTransitions();
	
			// We disable fixed positioned lightbox on devices that don't handle it nicely.
			// If you know a better way of detecting this - let me know.
			mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
			_document = $(document);
	
			mfp.popupsCache = {};
		},
	
		/**
		 * Opens popup
		 * @param  data [description]
		 */
		open: function(data) {
	
			var i;
	
			if(data.isObj === false) { 
				// convert jQuery collection to array to avoid conflicts later
				mfp.items = data.items.toArray();
	
				mfp.index = 0;
				var items = data.items,
					item;
				for(i = 0; i < items.length; i++) {
					item = items[i];
					if(item.parsed) {
						item = item.el[0];
					}
					if(item === data.el[0]) {
						mfp.index = i;
						break;
					}
				}
			} else {
				mfp.items = $.isArray(data.items) ? data.items : [data.items];
				mfp.index = data.index || 0;
			}
	
			// if popup is already opened - we just update the content
			if(mfp.isOpen) {
				mfp.updateItemHTML();
				return;
			}
			
			mfp.types = []; 
			_wrapClasses = '';
			if(data.mainEl && data.mainEl.length) {
				mfp.ev = data.mainEl.eq(0);
			} else {
				mfp.ev = _document;
			}
	
			if(data.key) {
				if(!mfp.popupsCache[data.key]) {
					mfp.popupsCache[data.key] = {};
				}
				mfp.currTemplate = mfp.popupsCache[data.key];
			} else {
				mfp.currTemplate = {};
			}
	
	
	
			mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
			mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
	
			if(mfp.st.modal) {
				mfp.st.closeOnContentClick = false;
				mfp.st.closeOnBgClick = false;
				mfp.st.showCloseBtn = false;
				mfp.st.enableEscapeKey = false;
			}
			
	
			// Building markup
			// main containers are created only once
			if(!mfp.bgOverlay) {
	
				// Dark overlay
				mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
					mfp.close();
				});
	
				mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
					if(mfp._checkIfClose(e.target)) {
						mfp.close();
					}
				});
	
				mfp.container = _getEl('container', mfp.wrap);
			}
	
			mfp.contentContainer = _getEl('content');
			if(mfp.st.preloader) {
				mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
			}
	
	
			// Initializing modules
			var modules = $.magnificPopup.modules;
			for(i = 0; i < modules.length; i++) {
				var n = modules[i];
				n = n.charAt(0).toUpperCase() + n.slice(1);
				mfp['init'+n].call(mfp);
			}
			_mfpTrigger('BeforeOpen');
	
	
			if(mfp.st.showCloseBtn) {
				// Close button
				if(!mfp.st.closeBtnInside) {
					mfp.wrap.append( _getCloseBtn() );
				} else {
					_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
						values.close_replaceWith = _getCloseBtn(item.type);
					});
					_wrapClasses += ' mfp-close-btn-in';
				}
			}
	
			if(mfp.st.alignTop) {
				_wrapClasses += ' mfp-align-top';
			}
	
		
	
			if(mfp.fixedContentPos) {
				mfp.wrap.css({
					overflow: mfp.st.overflowY,
					overflowX: 'hidden',
					overflowY: mfp.st.overflowY
				});
			} else {
				mfp.wrap.css({ 
					top: _window.scrollTop(),
					position: 'absolute'
				});
			}
			if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
				mfp.bgOverlay.css({
					height: _document.height(),
					position: 'absolute'
				});
			}
	
			
	
			if(mfp.st.enableEscapeKey) {
				// Close on ESC key
				_document.on('keyup' + EVENT_NS, function(e) {
					if(e.keyCode === 27) {
						mfp.close();
					}
				});
			}
	
			_window.on('resize' + EVENT_NS, function() {
				mfp.updateSize();
			});
	
	
			if(!mfp.st.closeOnContentClick) {
				_wrapClasses += ' mfp-auto-cursor';
			}
			
			if(_wrapClasses)
				mfp.wrap.addClass(_wrapClasses);
	
	
			// this triggers recalculation of layout, so we get it once to not to trigger twice
			var windowHeight = mfp.wH = _window.height();
	
			
			var windowStyles = {};
	
			if( mfp.fixedContentPos ) {
	            if(mfp._hasScrollBar(windowHeight)){
	                var s = mfp._getScrollbarSize();
	                if(s) {
	                    windowStyles.marginRight = s;
	                }
	            }
	        }
	
			if(mfp.fixedContentPos) {
				if(!mfp.isIE7) {
					windowStyles.overflow = 'hidden';
				} else {
					// ie7 double-scroll bug
					$('body, html').css('overflow', 'hidden');
				}
			}
	
			
			
			var classesToadd = mfp.st.mainClass;
			if(mfp.isIE7) {
				classesToadd += ' mfp-ie7';
			}
			if(classesToadd) {
				mfp._addClassToMFP( classesToadd );
			}
	
			// add content
			mfp.updateItemHTML();
	
			_mfpTrigger('BuildControls');
	
			// remove scrollbar, add margin e.t.c
			$('html').css(windowStyles);
			
			// add everything to DOM
			mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );
	
			// Save last focused element
			mfp._lastFocusedEl = document.activeElement;
			
			// Wait for next cycle to allow CSS transition
			setTimeout(function() {
				
				if(mfp.content) {
					mfp._addClassToMFP(READY_CLASS);
					mfp._setFocus();
				} else {
					// if content is not defined (not loaded e.t.c) we add class only for BG
					mfp.bgOverlay.addClass(READY_CLASS);
				}
				
				// Trap the focus in popup
				_document.on('focusin' + EVENT_NS, mfp._onFocusIn);
	
			}, 16);
	
			mfp.isOpen = true;
			mfp.updateSize(windowHeight);
			_mfpTrigger(OPEN_EVENT);
	
			return data;
		},
	
		/**
		 * Closes the popup
		 */
		close: function() {
			if(!mfp.isOpen) return;
			_mfpTrigger(BEFORE_CLOSE_EVENT);
	
			mfp.isOpen = false;
			// for CSS3 animation
			if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
				mfp._addClassToMFP(REMOVING_CLASS);
				setTimeout(function() {
					mfp._close();
				}, mfp.st.removalDelay);
			} else {
				mfp._close();
			}
		},
	
		/**
		 * Helper for close() function
		 */
		_close: function() {
			_mfpTrigger(CLOSE_EVENT);
	
			var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
	
			mfp.bgOverlay.detach();
			mfp.wrap.detach();
			mfp.container.empty();
	
			if(mfp.st.mainClass) {
				classesToRemove += mfp.st.mainClass + ' ';
			}
	
			mfp._removeClassFromMFP(classesToRemove);
	
			if(mfp.fixedContentPos) {
				var windowStyles = {marginRight: ''};
				if(mfp.isIE7) {
					$('body, html').css('overflow', '');
				} else {
					windowStyles.overflow = '';
				}
				$('html').css(windowStyles);
			}
			
			_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
			mfp.ev.off(EVENT_NS);
	
			// clean up DOM elements that aren't removed
			mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
			mfp.bgOverlay.attr('class', 'mfp-bg');
			mfp.container.attr('class', 'mfp-container');
	
			// remove close button from target element
			if(mfp.st.showCloseBtn &&
			(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
				if(mfp.currTemplate.closeBtn)
					mfp.currTemplate.closeBtn.detach();
			}
	
	
			if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
				$(mfp._lastFocusedEl).focus(); // put tab focus back
			}
			mfp.currItem = null;	
			mfp.content = null;
			mfp.currTemplate = null;
			mfp.prevHeight = 0;
	
			_mfpTrigger(AFTER_CLOSE_EVENT);
		},
		
		updateSize: function(winHeight) {
	
			if(mfp.isIOS) {
				// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
				var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
				var height = window.innerHeight * zoomLevel;
				mfp.wrap.css('height', height);
				mfp.wH = height;
			} else {
				mfp.wH = winHeight || _window.height();
			}
			// Fixes #84: popup incorrectly positioned with position:relative on body
			if(!mfp.fixedContentPos) {
				mfp.wrap.css('height', mfp.wH);
			}
	
			_mfpTrigger('Resize');
	
		},
	
		/**
		 * Set content of popup based on current index
		 */
		updateItemHTML: function() {
			var item = mfp.items[mfp.index];
	
			// Detach and perform modifications
			mfp.contentContainer.detach();
	
			if(mfp.content)
				mfp.content.detach();
	
			if(!item.parsed) {
				item = mfp.parseEl( mfp.index );
			}
	
			var type = item.type;	
	
			_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
			// BeforeChange event works like so:
			// _mfpOn('BeforeChange', function(e, prevType, newType) { });
			
			mfp.currItem = item;
	
			
	
			
	
			if(!mfp.currTemplate[type]) {
				var markup = mfp.st[type] ? mfp.st[type].markup : false;
	
				// allows to modify markup
				_mfpTrigger('FirstMarkupParse', markup);
	
				if(markup) {
					mfp.currTemplate[type] = $(markup);
				} else {
					// if there is no markup found we just define that template is parsed
					mfp.currTemplate[type] = true;
				}
			}
	
			if(_prevContentType && _prevContentType !== item.type) {
				mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
			}
			
			var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
			mfp.appendContent(newContent, type);
	
			item.preloaded = true;
	
			_mfpTrigger(CHANGE_EVENT, item);
			_prevContentType = item.type;
			
			// Append container back after its content changed
			mfp.container.prepend(mfp.contentContainer);
	
			_mfpTrigger('AfterChange');
		},
	
	
		/**
		 * Set HTML content of popup
		 */
		appendContent: function(newContent, type) {
			mfp.content = newContent;
			
			if(newContent) {
				if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
					mfp.currTemplate[type] === true) {
					// if there is no markup, we just append close button element inside
					if(!mfp.content.find('.mfp-close').length) {
						mfp.content.append(_getCloseBtn());
					}
				} else {
					mfp.content = newContent;
				}
			} else {
				mfp.content = '';
			}
	
			_mfpTrigger(BEFORE_APPEND_EVENT);
			mfp.container.addClass('mfp-'+type+'-holder');
	
			mfp.contentContainer.append(mfp.content);
		},
	
	
	
		
		/**
		 * Creates Magnific Popup data object based on given data
		 * @param  {int} index Index of item to parse
		 */
		parseEl: function(index) {
			var item = mfp.items[index],
				type;
	
			if(item.tagName) {
				item = { el: $(item) };
			} else {
				type = item.type;
				item = { data: item, src: item.src };
			}
	
			if(item.el) {
				var types = mfp.types;
	
				// check for 'mfp-TYPE' class
				for(var i = 0; i < types.length; i++) {
					if( item.el.hasClass('mfp-'+types[i]) ) {
						type = types[i];
						break;
					}
				}
	
				item.src = item.el.attr('data-mfp-src');
				if(!item.src) {
					item.src = item.el.attr('href');
				}
			}
	
			item.type = type || mfp.st.type || 'inline';
			item.index = index;
			item.parsed = true;
			mfp.items[index] = item;
			_mfpTrigger('ElementParse', item);
	
			return mfp.items[index];
		},
	
	
		/**
		 * Initializes single popup or a group of popups
		 */
		addGroup: function(el, options) {
			var eHandler = function(e) {
				e.mfpEl = this;
				mfp._openClick(e, el, options);
			};
	
			if(!options) {
				options = {};
			} 
	
			var eName = 'click.magnificPopup';
			options.mainEl = el;
			
			if(options.items) {
				options.isObj = true;
				el.off(eName).on(eName, eHandler);
			} else {
				options.isObj = false;
				if(options.delegate) {
					el.off(eName).on(eName, options.delegate , eHandler);
				} else {
					options.items = el;
					el.off(eName).on(eName, eHandler);
				}
			}
		},
		_openClick: function(e, el, options) {
			var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
	
	
			if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
				return;
			}
	
			var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
	
			if(disableOn) {
				if($.isFunction(disableOn)) {
					if( !disableOn.call(mfp) ) {
						return true;
					}
				} else { // else it's number
					if( _window.width() < disableOn ) {
						return true;
					}
				}
			}
			
			if(e.type) {
				e.preventDefault();
	
				// This will prevent popup from closing if element is inside and popup is already opened
				if(mfp.isOpen) {
					e.stopPropagation();
				}
			}
				
	
			options.el = $(e.mfpEl);
			if(options.delegate) {
				options.items = el.find(options.delegate);
			}
			mfp.open(options);
		},
	
	
		/**
		 * Updates text on preloader
		 */
		updateStatus: function(status, text) {
	
			if(mfp.preloader) {
				if(_prevStatus !== status) {
					mfp.container.removeClass('mfp-s-'+_prevStatus);
				}
	
				if(!text && status === 'loading') {
					text = mfp.st.tLoading;
				}
	
				var data = {
					status: status,
					text: text
				};
				// allows to modify status
				_mfpTrigger('UpdateStatus', data);
	
				status = data.status;
				text = data.text;
	
				mfp.preloader.html(text);
	
				mfp.preloader.find('a').on('click', function(e) {
					e.stopImmediatePropagation();
				});
	
				mfp.container.addClass('mfp-s-'+status);
				_prevStatus = status;
			}
		},
	
	
		/*
			"Private" helpers that aren't private at all
		 */
		// Check to close popup or not
		// "target" is an element that was clicked
		_checkIfClose: function(target) {
	
			if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
				return;
			}
	
			var closeOnContent = mfp.st.closeOnContentClick;
			var closeOnBg = mfp.st.closeOnBgClick;
	
			if(closeOnContent && closeOnBg) {
				return true;
			} else {
	
				// We close the popup if click is on close button or on preloader. Or if there is no content.
				if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
					return true;
				}
	
				// if click is outside the content
				if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
					if(closeOnBg) {
						// last check, if the clicked element is in DOM, (in case it's removed onclick)
						if( $.contains(document, target) ) {
							return true;
						}
					}
				} else if(closeOnContent) {
					return true;
				}
	
			}
			return false;
		},
		_addClassToMFP: function(cName) {
			mfp.bgOverlay.addClass(cName);
			mfp.wrap.addClass(cName);
		},
		_removeClassFromMFP: function(cName) {
			this.bgOverlay.removeClass(cName);
			mfp.wrap.removeClass(cName);
		},
		_hasScrollBar: function(winHeight) {
			return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
		},
		_setFocus: function() {
			(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
		},
		_onFocusIn: function(e) {
			if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
				mfp._setFocus();
				return false;
			}
		},
		_parseMarkup: function(template, values, item) {
			var arr;
			if(item.data) {
				values = $.extend(item.data, values);
			}
			_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );
	
			$.each(values, function(key, value) {
				if(value === undefined || value === false) {
					return true;
				}
				arr = key.split('_');
				if(arr.length > 1) {
					var el = template.find(EVENT_NS + '-'+arr[0]);
	
					if(el.length > 0) {
						var attr = arr[1];
						if(attr === 'replaceWith') {
							if(el[0] !== value[0]) {
								el.replaceWith(value);
							}
						} else if(attr === 'img') {
							if(el.is('img')) {
								el.attr('src', value);
							} else {
								el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
							}
						} else {
							el.attr(arr[1], value);
						}
					}
	
				} else {
					template.find(EVENT_NS + '-'+key).html(value);
				}
			});
		},
	
		_getScrollbarSize: function() {
			// thx David
			if(mfp.scrollbarSize === undefined) {
				var scrollDiv = document.createElement("div");
				scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
				document.body.appendChild(scrollDiv);
				mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
			}
			return mfp.scrollbarSize;
		}
	
	}; /* MagnificPopup core prototype end */
	
	
	
	
	/**
	 * Public static functions
	 */
	$.magnificPopup = {
		instance: null,
		proto: MagnificPopup.prototype,
		modules: [],
	
		open: function(options, index) {
			_checkInstance();	
	
			if(!options) {
				options = {};
			} else {
				options = $.extend(true, {}, options);
			}
				
	
			options.isObj = true;
			options.index = index || 0;
			return this.instance.open(options);
		},
	
		close: function() {
			return $.magnificPopup.instance && $.magnificPopup.instance.close();
		},
	
		registerModule: function(name, module) {
			if(module.options) {
				$.magnificPopup.defaults[name] = module.options;
			}
			$.extend(this.proto, module.proto);			
			this.modules.push(name);
		},
	
		defaults: {   
	
			// Info about options is in docs:
			// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
			
			disableOn: 0,	
	
			key: null,
	
			midClick: false,
	
			mainClass: '',
	
			preloader: true,
	
			focus: '', // CSS selector of input to focus after popup is opened
			
			closeOnContentClick: false,
	
			closeOnBgClick: true,
	
			closeBtnInside: true, 
	
			showCloseBtn: true,
	
			enableEscapeKey: true,
	
			modal: false,
	
			alignTop: false,
		
			removalDelay: 0,
	
			prependTo: null,
			
			fixedContentPos: 'auto', 
		
			fixedBgPos: 'auto',
	
			overflowY: 'auto',
	
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
	
			tClose: 'Close (Esc)',
	
			tLoading: 'Loading...',
	
			autoFocusLast: true
	
		}
	};
	
	
	
	$.fn.magnificPopup = function(options) {
		_checkInstance();
	
		var jqEl = $(this);
	
		// We call some API method of first param is a string
		if (typeof options === "string" ) {
	
			if(options === 'open') {
				var items,
					itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
					index = parseInt(arguments[1], 10) || 0;
	
				if(itemOpts.items) {
					items = itemOpts.items[index];
				} else {
					items = jqEl;
					if(itemOpts.delegate) {
						items = items.find(itemOpts.delegate);
					}
					items = items.eq( index );
				}
				mfp._openClick({mfpEl:items}, jqEl, itemOpts);
			} else {
				if(mfp.isOpen)
					mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
			}
	
		} else {
			// clone options obj
			options = $.extend(true, {}, options);
			
			/*
			 * As Zepto doesn't support .data() method for objects 
			 * and it works only in normal browsers
			 * we assign "options" object directly to the DOM element. FTW!
			 */
			if(_isJQ) {
				jqEl.data('magnificPopup', options);
			} else {
				jqEl[0].magnificPopup = options;
			}
	
			mfp.addGroup(jqEl, options);
	
		}
		return jqEl;
	};
	
	
	//Quick benchmark
	/*
	var start = performance.now(),
		i,
		rounds = 1000;
	
	for(i = 0; i < rounds; i++) {
	
	}
	console.log('Test #1:', performance.now() - start);
	
	start = performance.now();
	for(i = 0; i < rounds; i++) {
	
	}
	console.log('Test #2:', performance.now() - start);
	*/
	
	
	/*>>core*/
	
	/*>>inline*/
	
	var INLINE_NS = 'inline',
		_hiddenClass,
		_inlinePlaceholder, 
		_lastInlineElement,
		_putInlineElementsBack = function() {
			if(_lastInlineElement) {
				_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
				_lastInlineElement = null;
			}
		};
	
	$.magnificPopup.registerModule(INLINE_NS, {
		options: {
			hiddenClass: 'hide', // will be appended with `mfp-` prefix
			markup: '',
			tNotFound: 'Content not found'
		},
		proto: {
	
			initInline: function() {
				mfp.types.push(INLINE_NS);
	
				_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
					_putInlineElementsBack();
				});
			},
	
			getInline: function(item, template) {
	
				_putInlineElementsBack();
	
				if(item.src) {
					var inlineSt = mfp.st.inline,
						el = $(item.src);
	
					if(el.length) {
	
						// If target element has parent - we replace it with placeholder and put it back after popup is closed
						var parent = el[0].parentNode;
						if(parent && parent.tagName) {
							if(!_inlinePlaceholder) {
								_hiddenClass = inlineSt.hiddenClass;
								_inlinePlaceholder = _getEl(_hiddenClass);
								_hiddenClass = 'mfp-'+_hiddenClass;
							}
							// replace target inline element with placeholder
							_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
						}
	
						mfp.updateStatus('ready');
					} else {
						mfp.updateStatus('error', inlineSt.tNotFound);
						el = $('<div>');
					}
	
					item.inlineElement = el;
					return el;
				}
	
				mfp.updateStatus('ready');
				mfp._parseMarkup(template, {}, item);
				return template;
			}
		}
	});
	
	/*>>inline*/
	
	/*>>ajax*/
	var AJAX_NS = 'ajax',
		_ajaxCur,
		_removeAjaxCursor = function() {
			if(_ajaxCur) {
				$(document.body).removeClass(_ajaxCur);
			}
		},
		_destroyAjaxRequest = function() {
			_removeAjaxCursor();
			if(mfp.req) {
				mfp.req.abort();
			}
		};
	
	$.magnificPopup.registerModule(AJAX_NS, {
	
		options: {
			settings: null,
			cursor: 'mfp-ajax-cur',
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
	
		proto: {
			initAjax: function() {
				mfp.types.push(AJAX_NS);
				_ajaxCur = mfp.st.ajax.cursor;
	
				_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
				_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
			},
			getAjax: function(item) {
	
				if(_ajaxCur) {
					$(document.body).addClass(_ajaxCur);
				}
	
				mfp.updateStatus('loading');
	
				var opts = $.extend({
					url: item.src,
					success: function(data, textStatus, jqXHR) {
						var temp = {
							data:data,
							xhr:jqXHR
						};
	
						_mfpTrigger('ParseAjax', temp);
	
						mfp.appendContent( $(temp.data), AJAX_NS );
	
						item.finished = true;
	
						_removeAjaxCursor();
	
						mfp._setFocus();
	
						setTimeout(function() {
							mfp.wrap.addClass(READY_CLASS);
						}, 16);
	
						mfp.updateStatus('ready');
	
						_mfpTrigger('AjaxContentAdded');
					},
					error: function() {
						_removeAjaxCursor();
						item.finished = item.loadError = true;
						mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
					}
				}, mfp.st.ajax.settings);
	
				mfp.req = $.ajax(opts);
	
				return '';
			}
		}
	});
	
	
	
	
	
		
	
	/*>>ajax*/
	
	/*>>image*/
	var _imgInterval,
		_getTitle = function(item) {
			if(item.data && item.data.title !== undefined) 
				return item.data.title;
	
			var src = mfp.st.image.titleSrc;
	
			if(src) {
				if($.isFunction(src)) {
					return src.call(mfp, item);
				} else if(item.el) {
					return item.el.attr(src) || '';
				}
			}
			return '';
		};
	
	$.magnificPopup.registerModule('image', {
	
		options: {
			markup: '<div class="mfp-figure">'+
						'<div class="mfp-close"></div>'+
						'<figure>'+
							'<div class="mfp-img"></div>'+
							'<figcaption>'+
								'<div class="mfp-bottom-bar">'+
									'<div class="mfp-title"></div>'+
									'<div class="mfp-counter"></div>'+
								'</div>'+
							'</figcaption>'+
						'</figure>'+
					'</div>',
			cursor: 'mfp-zoom-out-cur',
			titleSrc: 'title', 
			verticalFit: true,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
	
		proto: {
			initImage: function() {
				var imgSt = mfp.st.image,
					ns = '.image';
	
				mfp.types.push('image');
	
				_mfpOn(OPEN_EVENT+ns, function() {
					if(mfp.currItem.type === 'image' && imgSt.cursor) {
						$(document.body).addClass(imgSt.cursor);
					}
				});
	
				_mfpOn(CLOSE_EVENT+ns, function() {
					if(imgSt.cursor) {
						$(document.body).removeClass(imgSt.cursor);
					}
					_window.off('resize' + EVENT_NS);
				});
	
				_mfpOn('Resize'+ns, mfp.resizeImage);
				if(mfp.isLowIE) {
					_mfpOn('AfterChange', mfp.resizeImage);
				}
			},
			resizeImage: function() {
				var item = mfp.currItem;
				if(!item || !item.img) return;
	
				if(mfp.st.image.verticalFit) {
					var decr = 0;
					// fix box-sizing in ie7/8
					if(mfp.isLowIE) {
						decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
					}
					item.img.css('max-height', mfp.wH-decr);
				}
			},
			_onImageHasSize: function(item) {
				if(item.img) {
					
					item.hasSize = true;
	
					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					
					item.isCheckingImgSize = false;
	
					_mfpTrigger('ImageHasSize', item);
	
					if(item.imgHidden) {
						if(mfp.content)
							mfp.content.removeClass('mfp-loading');
						
						item.imgHidden = false;
					}
	
				}
			},
	
			/**
			 * Function that loops until the image has size to display elements that rely on it asap
			 */
			findImageSize: function(item) {
	
				var counter = 0,
					img = item.img[0],
					mfpSetInterval = function(delay) {
	
						if(_imgInterval) {
							clearInterval(_imgInterval);
						}
						// decelerating interval that checks for size of an image
						_imgInterval = setInterval(function() {
							if(img.naturalWidth > 0) {
								mfp._onImageHasSize(item);
								return;
							}
	
							if(counter > 200) {
								clearInterval(_imgInterval);
							}
	
							counter++;
							if(counter === 3) {
								mfpSetInterval(10);
							} else if(counter === 40) {
								mfpSetInterval(50);
							} else if(counter === 100) {
								mfpSetInterval(500);
							}
						}, delay);
					};
	
				mfpSetInterval(1);
			},
	
			getImage: function(item, template) {
	
				var guard = 0,
	
					// image load complete handler
					onLoadComplete = function() {
						if(item) {
							if (item.img[0].complete) {
								item.img.off('.mfploader');
								
								if(item === mfp.currItem){
									mfp._onImageHasSize(item);
	
									mfp.updateStatus('ready');
								}
	
								item.hasSize = true;
								item.loaded = true;
	
								_mfpTrigger('ImageLoadComplete');
								
							}
							else {
								// if image complete check fails 200 times (20 sec), we assume that there was an error.
								guard++;
								if(guard < 200) {
									setTimeout(onLoadComplete,100);
								} else {
									onLoadError();
								}
							}
						}
					},
	
					// image error handler
					onLoadError = function() {
						if(item) {
							item.img.off('.mfploader');
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);
								mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
							}
	
							item.hasSize = true;
							item.loaded = true;
							item.loadError = true;
						}
					},
					imgSt = mfp.st.image;
	
	
				var el = template.find('.mfp-img');
				if(el.length) {
					var img = document.createElement('img');
					img.className = 'mfp-img';
					if(item.el && item.el.find('img').length) {
						img.alt = item.el.find('img').attr('alt');
					}
					item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
					img.src = item.src;
	
					// without clone() "error" event is not firing when IMG is replaced by new IMG
					// TODO: find a way to avoid such cloning
					if(el.is('img')) {
						item.img = item.img.clone();
					}
	
					img = item.img[0];
					if(img.naturalWidth > 0) {
						item.hasSize = true;
					} else if(!img.width) {										
						item.hasSize = false;
					}
				}
	
				mfp._parseMarkup(template, {
					title: _getTitle(item),
					img_replaceWith: item.img
				}, item);
	
				mfp.resizeImage();
	
				if(item.hasSize) {
					if(_imgInterval) clearInterval(_imgInterval);
	
					if(item.loadError) {
						template.addClass('mfp-loading');
						mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
					} else {
						template.removeClass('mfp-loading');
						mfp.updateStatus('ready');
					}
					return template;
				}
	
				mfp.updateStatus('loading');
				item.loading = true;
	
				if(!item.hasSize) {
					item.imgHidden = true;
					template.addClass('mfp-loading');
					mfp.findImageSize(item);
				} 
	
				return template;
			}
		}
	});
	
	
	
	/*>>image*/
	
	/*>>zoom*/
	var hasMozTransform,
		getHasMozTransform = function() {
			if(hasMozTransform === undefined) {
				hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
			}
			return hasMozTransform;		
		};
	
	$.magnificPopup.registerModule('zoom', {
	
		options: {
			enabled: false,
			easing: 'ease-in-out',
			duration: 300,
			opener: function(element) {
				return element.is('img') ? element : element.find('img');
			}
		},
	
		proto: {
	
			initZoom: function() {
				var zoomSt = mfp.st.zoom,
					ns = '.zoom',
					image;
					
				if(!zoomSt.enabled || !mfp.supportsTransition) {
					return;
				}
	
				var duration = zoomSt.duration,
					getElToAnimate = function(image) {
						var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
							transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
							cssObj = {
								position: 'fixed',
								zIndex: 9999,
								left: 0,
								top: 0,
								'-webkit-backface-visibility': 'hidden'
							},
							t = 'transition';
	
						cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;
	
						newImg.css(cssObj);
						return newImg;
					},
					showMainContent = function() {
						mfp.content.css('visibility', 'visible');
					},
					openTimeout,
					animatedImg;
	
				_mfpOn('BuildControls'+ns, function() {
					if(mfp._allowZoom()) {
	
						clearTimeout(openTimeout);
						mfp.content.css('visibility', 'hidden');
	
						// Basically, all code below does is clones existing image, puts in on top of the current one and animated it
						
						image = mfp._getItemToZoom();
	
						if(!image) {
							showMainContent();
							return;
						}
	
						animatedImg = getElToAnimate(image); 
						
						animatedImg.css( mfp._getOffset() );
	
						mfp.wrap.append(animatedImg);
	
						openTimeout = setTimeout(function() {
							animatedImg.css( mfp._getOffset( true ) );
							openTimeout = setTimeout(function() {
	
								showMainContent();
	
								setTimeout(function() {
									animatedImg.remove();
									image = animatedImg = null;
									_mfpTrigger('ZoomAnimationEnded');
								}, 16); // avoid blink when switching images 
	
							}, duration); // this timeout equals animation duration
	
						}, 16); // by adding this timeout we avoid short glitch at the beginning of animation
	
	
						// Lots of timeouts...
					}
				});
				_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
					if(mfp._allowZoom()) {
	
						clearTimeout(openTimeout);
	
						mfp.st.removalDelay = duration;
	
						if(!image) {
							image = mfp._getItemToZoom();
							if(!image) {
								return;
							}
							animatedImg = getElToAnimate(image);
						}
						
						
						animatedImg.css( mfp._getOffset(true) );
						mfp.wrap.append(animatedImg);
						mfp.content.css('visibility', 'hidden');
						
						setTimeout(function() {
							animatedImg.css( mfp._getOffset() );
						}, 16);
					}
	
				});
	
				_mfpOn(CLOSE_EVENT+ns, function() {
					if(mfp._allowZoom()) {
						showMainContent();
						if(animatedImg) {
							animatedImg.remove();
						}
						image = null;
					}	
				});
			},
	
			_allowZoom: function() {
				return mfp.currItem.type === 'image';
			},
	
			_getItemToZoom: function() {
				if(mfp.currItem.hasSize) {
					return mfp.currItem.img;
				} else {
					return false;
				}
			},
	
			// Get element postion relative to viewport
			_getOffset: function(isLarge) {
				var el;
				if(isLarge) {
					el = mfp.currItem.img;
				} else {
					el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
				}
	
				var offset = el.offset();
				var paddingTop = parseInt(el.css('padding-top'),10);
				var paddingBottom = parseInt(el.css('padding-bottom'),10);
				offset.top -= ( $(window).scrollTop() - paddingTop );
	
	
				/*
				
				Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.
	
				 */
				var obj = {
					width: el.width(),
					// fix Zepto height+padding issue
					height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
				};
	
				// I hate to do this, but there is no another option
				if( getHasMozTransform() ) {
					obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
				} else {
					obj.left = offset.left;
					obj.top = offset.top;
				}
				return obj;
			}
	
		}
	});
	
	
	
	/*>>zoom*/
	
	/*>>iframe*/
	
	var IFRAME_NS = 'iframe',
		_emptyPage = '//about:blank',
		
		_fixIframeBugs = function(isShowing) {
			if(mfp.currTemplate[IFRAME_NS]) {
				var el = mfp.currTemplate[IFRAME_NS].find('iframe');
				if(el.length) { 
					// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
					if(!isShowing) {
						el[0].src = _emptyPage;
					}
	
					// IE8 black screen bug fix
					if(mfp.isIE8) {
						el.css('display', isShowing ? 'block' : 'none');
					}
				}
			}
		};
	
	$.magnificPopup.registerModule(IFRAME_NS, {
	
		options: {
			markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
					'</div>',
	
			srcAction: 'iframe_src',
	
			// we don't care and support only one default type of URL by default
			patterns: {
				youtube: {
					index: 'youtube.com', 
					id: 'v=', 
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			}
		},
	
		proto: {
			initIframe: function() {
				mfp.types.push(IFRAME_NS);
	
				_mfpOn('BeforeChange', function(e, prevType, newType) {
					if(prevType !== newType) {
						if(prevType === IFRAME_NS) {
							_fixIframeBugs(); // iframe if removed
						} else if(newType === IFRAME_NS) {
							_fixIframeBugs(true); // iframe is showing
						} 
					}// else {
						// iframe source is switched, don't do anything
					//}
				});
	
				_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
					_fixIframeBugs();
				});
			},
	
			getIframe: function(item, template) {
				var embedSrc = item.src;
				var iframeSt = mfp.st.iframe;
					
				$.each(iframeSt.patterns, function() {
					if(embedSrc.indexOf( this.index ) > -1) {
						if(this.id) {
							if(typeof this.id === 'string') {
								embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
							} else {
								embedSrc = this.id.call( this, embedSrc );
							}
						}
						embedSrc = this.src.replace('%id%', embedSrc );
						return false; // break;
					}
				});
				
				var dataObj = {};
				if(iframeSt.srcAction) {
					dataObj[iframeSt.srcAction] = embedSrc;
				}
				mfp._parseMarkup(template, dataObj, item);
	
				mfp.updateStatus('ready');
	
				return template;
			}
		}
	});
	
	
	
	/*>>iframe*/
	
	/*>>gallery*/
	/**
	 * Get looped index depending on number of slides
	 */
	var _getLoopedId = function(index) {
			var numSlides = mfp.items.length;
			if(index > numSlides - 1) {
				return index - numSlides;
			} else  if(index < 0) {
				return numSlides + index;
			}
			return index;
		},
		_replaceCurrTotal = function(text, curr, total) {
			return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
		};
	
	$.magnificPopup.registerModule('gallery', {
	
		options: {
			enabled: false,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0,2],
			navigateByImgClick: true,
			arrows: true,
	
			tPrev: 'Previous (Left arrow key)',
			tNext: 'Next (Right arrow key)',
			tCounter: '%curr% of %total%'
		},
	
		proto: {
			initGallery: function() {
	
				var gSt = mfp.st.gallery,
					ns = '.mfp-gallery',
					supportsFastClick = Boolean($.fn.mfpFastClick);
	
				mfp.direction = true; // true - next, false - prev
				
				if(!gSt || !gSt.enabled ) return false;
	
				_wrapClasses += ' mfp-gallery';
	
				_mfpOn(OPEN_EVENT+ns, function() {
	
					if(gSt.navigateByImgClick) {
						mfp.wrap.on('click'+ns, '.mfp-img', function() {
							if(mfp.items.length > 1) {
								mfp.next();
								return false;
							}
						});
					}
	
					_document.on('keydown'+ns, function(e) {
						if (e.keyCode === 37) {
							mfp.prev();
						} else if (e.keyCode === 39) {
							mfp.next();
						}
					});
				});
	
				_mfpOn('UpdateStatus'+ns, function(e, data) {
					if(data.text) {
						data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
					}
				});
	
				_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
					var l = mfp.items.length;
					values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
				});
	
				_mfpOn('BuildControls' + ns, function() {
					if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
						var markup = gSt.arrowMarkup,
							arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),			
							arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);
	
						var eName = supportsFastClick ? 'mfpFastClick' : 'click';
						arrowLeft[eName](function() {
							mfp.prev();
						});			
						arrowRight[eName](function() {
							mfp.next();
						});	
	
						// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
						if(mfp.isIE7) {
							_getEl('b', arrowLeft[0], false, true);
							_getEl('a', arrowLeft[0], false, true);
							_getEl('b', arrowRight[0], false, true);
							_getEl('a', arrowRight[0], false, true);
						}
	
						mfp.container.append(arrowLeft.add(arrowRight));
					}
				});
	
				_mfpOn(CHANGE_EVENT+ns, function() {
					if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
	
					mfp._preloadTimeout = setTimeout(function() {
						mfp.preloadNearbyImages();
						mfp._preloadTimeout = null;
					}, 16);		
				});
	
	
				_mfpOn(CLOSE_EVENT+ns, function() {
					_document.off(ns);
					mfp.wrap.off('click'+ns);
				
					if(mfp.arrowLeft && supportsFastClick) {
						mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
					}
					mfp.arrowRight = mfp.arrowLeft = null;
				});
	
			}, 
			next: function() {
				mfp.direction = true;
				mfp.index = _getLoopedId(mfp.index + 1);
				mfp.updateItemHTML();
			},
			prev: function() {
				mfp.direction = false;
				mfp.index = _getLoopedId(mfp.index - 1);
				mfp.updateItemHTML();
			},
			goTo: function(newIndex) {
				mfp.direction = (newIndex >= mfp.index);
				mfp.index = newIndex;
				mfp.updateItemHTML();
			},
			preloadNearbyImages: function() {
				var p = mfp.st.gallery.preload,
					preloadBefore = Math.min(p[0], mfp.items.length),
					preloadAfter = Math.min(p[1], mfp.items.length),
					i;
	
				for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
					mfp._preloadItem(mfp.index+i);
				}
				for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
					mfp._preloadItem(mfp.index-i);
				}
			},
			_preloadItem: function(index) {
				index = _getLoopedId(index);
	
				if(mfp.items[index].preloaded) {
					return;
				}
	
				var item = mfp.items[index];
				if(!item.parsed) {
					item = mfp.parseEl( index );
				}
	
				_mfpTrigger('LazyLoad', item);
	
				if(item.type === 'image') {
					item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
						item.hasSize = true;
					}).on('error.mfploader', function() {
						item.hasSize = true;
						item.loadError = true;
						_mfpTrigger('LazyLoadError', item);
					}).attr('src', item.src);
				}
	
	
				item.preloaded = true;
			}
		}
	});
	
	/*
	Touch Support that might be implemented some day
	
	addSwipeGesture: function() {
		var startX,
			moved,
			multipleTouches;
	
			return;
	
		var namespace = '.mfp',
			addEventNames = function(pref, down, move, up, cancel) {
				mfp._tStart = pref + down + namespace;
				mfp._tMove = pref + move + namespace;
				mfp._tEnd = pref + up + namespace;
				mfp._tCancel = pref + cancel + namespace;
			};
	
		if(window.navigator.msPointerEnabled) {
			addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
		} else if('ontouchstart' in window) {
			addEventNames('touch', 'start', 'move', 'end', 'cancel');
		} else {
			return;
		}
		_window.on(mfp._tStart, function(e) {
			var oE = e.originalEvent;
			multipleTouches = moved = false;
			startX = oE.pageX || oE.changedTouches[0].pageX;
		}).on(mfp._tMove, function(e) {
			if(e.originalEvent.touches.length > 1) {
				multipleTouches = e.originalEvent.touches.length;
			} else {
				//e.preventDefault();
				moved = true;
			}
		}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
			if(moved && !multipleTouches) {
				var oE = e.originalEvent,
					diff = startX - (oE.pageX || oE.changedTouches[0].pageX);
	
				if(diff > 20) {
					mfp.next();
				} else if(diff < -20) {
					mfp.prev();
				}
			}
		});
	},
	*/
	
	
	/*>>gallery*/
	
	/*>>retina*/
	
	var RETINA_NS = 'retina';
	
	$.magnificPopup.registerModule(RETINA_NS, {
		options: {
			replaceSrc: function(item) {
				return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
			},
			ratio: 1 // Function or number.  Set to 1 to disable.
		},
		proto: {
			initRetina: function() {
				if(window.devicePixelRatio > 1) {
	
					var st = mfp.st.retina,
						ratio = st.ratio;
	
					ratio = !isNaN(ratio) ? ratio : ratio();
	
					if(ratio > 1) {
						_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
							item.img.css({
								'max-width': item.img[0].naturalWidth / ratio,
								'width': '100%'
							});
						});
						_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
							item.src = st.replaceSrc(item, ratio);
						});
					}
				}
	
			}
		}
	});
	
	/*>>retina*/
	
	/*>>fastclick*/
	/**
	 * FastClick event implementation. (removes 300ms delay on touch devices)
	 * Based on https://developers.google.com/mobile/articles/fast_buttons
	 *
	 * You may use it outside the Magnific Popup by calling just:
	 *
	 * $('.your-el').mfpFastClick(function() {
	 *     console.log('Clicked!');
	 * });
	 *
	 * To unbind:
	 * $('.your-el').destroyMfpFastClick();
	 * 
	 * 
	 * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
	 * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
	 * 
	 */
	
	(function() {
		var ghostClickDelay = 1000,
			supportsTouch = 'ontouchstart' in window,
			unbindTouchMove = function() {
				_window.off('touchmove'+ns+' touchend'+ns);
			},
			eName = 'mfpFastClick',
			ns = '.'+eName;
	
	
		// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
		$.fn.mfpFastClick = function(callback) {
	
			return $(this).each(function() {
	
				var elem = $(this),
					lock;
	
				if( supportsTouch ) {
	
					var timeout,
						startX,
						startY,
						pointerMoved,
						point,
						numPointers;
	
					elem.on('touchstart' + ns, function(e) {
						pointerMoved = false;
						numPointers = 1;
	
						point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
						startX = point.clientX;
						startY = point.clientY;
	
						_window.on('touchmove'+ns, function(e) {
							point = e.originalEvent ? e.originalEvent.touches : e.touches;
							numPointers = point.length;
							point = point[0];
							if (Math.abs(point.clientX - startX) > 10 ||
								Math.abs(point.clientY - startY) > 10) {
								pointerMoved = true;
								unbindTouchMove();
							}
						}).on('touchend'+ns, function(e) {
							unbindTouchMove();
							if(pointerMoved || numPointers > 1) {
								return;
							}
							lock = true;
							e.preventDefault();
							clearTimeout(timeout);
							timeout = setTimeout(function() {
								lock = false;
							}, ghostClickDelay);
							callback();
						});
					});
	
				}
	
				elem.on('click' + ns, function() {
					if(!lock) {
						callback();
					}
				});
			});
		};
	
		$.fn.destroyMfpFastClick = function() {
			$(this).off('touchstart' + ns + ' click' + ns);
			if(supportsTouch) _window.off('touchmove'+ns+' touchend'+ns);
		};
	})();
	
	/*>>fastclick*/
	 _checkInstance(); }));


/***/ },

/***/ 48:
/***/ function(module, exports) {

	/* 
	 * DarkTooltip v0.3.1
	 * Simple customizable tooltip with confirm option and 3d effects
	 * (c)2014 Rub�n Torres - rubentdlh@gmail.com
	 * Released under the MIT license
	 */
	
	(function($) {
	
		function DarkTooltip(element, options){
			this.bearer = element;
			this.options = options;
			this.hideEvent;
			this.mouseOverMode=(this.options.trigger == "hover" || this.options.trigger == "mouseover" || this.options.trigger == "onmouseover");
		}
	
		DarkTooltip.prototype = {
	
			show: function(){
				var dt = this;
				if(this.options.modal){
					this.modalLayer.css('display', 'block');
				}
				//Close all other tooltips
				this.tooltip.css('display', 'block');
				//Set event to prevent tooltip from closig when mouse is over the tooltip
				if(dt.mouseOverMode){
					this.tooltip.mouseover( function(){
						clearTimeout(dt.hideEvent);
					});
					this.tooltip.mouseout( function(){
						clearTimeout(dt.hideEvent);
						dt.hide();
					});
				}
			},
	
			hide: function(){
				var dt=this;
				this.hideEvent = setTimeout( function(){
					dt.tooltip.hide();
				}, 100);
				if(dt.options.modal){
					dt.modalLayer.hide();
				}
			},
	
			toggle: function(){
				if(this.tooltip.is(":visible")){
					this.hide();
				}else{
					this.show();
				}
			},
	
			addAnimation: function(){
				switch(this.options.animation){
					case 'none':
						break;
					case 'fadeIn':
						this.tooltip.addClass('animated');
						this.tooltip.addClass('fadeIn');
						break;
					case 'flipIn':
						this.tooltip.addClass('animated');
						this.tooltip.addClass('flipIn');
						break;
				}
			},
	
			setContent: function(){
				$(this.bearer).css('cursor', 'pointer');
				//Get tooltip content
				if(this.options.content){
					this.content = this.options.content;
				}else if(this.bearer.attr("data-tooltip")){
					this.content = this.bearer.attr("data-tooltip");
				}else{
					// console.log("No content for tooltip: " + this.bearer.selector);
					return;
				}
				if(this.content.charAt(0) == '#'){
					$(this.content).hide();
					this.content = $(this.content).html();
					this.contentType='html';
				}else{
					this.contentType='text';
				}
				tooltipId = "";
				if(this.bearer.attr("id") != ""){
					tooltipId = "id='darktooltip-" + this.bearer.attr("id") + "'";
				}
				//Create modal layer
				this.modalLayer = $("<ins class='darktooltip-modal-layer'></ins>");
				//Create tooltip container
				this.tooltip = $("<ins " + tooltipId + " class = 'dark-tooltip " + this.options.theme + " " + this.options.size + " " 
					+ this.options.gravity + "'><div>" + this.content + "</div><div class = 'tip'></div></ins>");
				this.tip = this.tooltip.find(".tip");
	
				$("body").append(this.modalLayer);
				$("body").append(this.tooltip);
	
				//Adjust size for html tooltip
				if(this.contentType == 'html'){
					this.tooltip.css('max-width','none');
				}
				this.tooltip.css('opacity', this.options.opacity);
				this.addAnimation();
				if(this.options.confirm){
					this.addConfirm();
				}
			},
	
			setPositions: function(){
				var leftPos = this.bearer.offset().left;
				var topPos = this.bearer.offset().top;
	
				switch(this.options.gravity){
					case 'south':
						leftPos += this.bearer.outerWidth()/2 - this.tooltip.outerWidth()/2;
						topPos += -this.tooltip.outerHeight() - this.tip.outerHeight()/2;
						break;
					case 'west':
						leftPos += this.bearer.outerWidth() + this.tip.outerWidth()/2;
						topPos += this.bearer.outerHeight()/2 - (this.tooltip.outerHeight()/2);
						break;
					case 'north':
						leftPos += this.bearer.outerWidth()/2 - (this.tooltip.outerWidth()/2);
						topPos += this.bearer.outerHeight() + this.tip.outerHeight()/2;
						break;
					case 'east':
						leftPos += -this.tooltip.outerWidth() - this.tip.outerWidth()/2;
						topPos += this.bearer.outerHeight()/2 - this.tooltip.outerHeight()/2;
						break;
				}
				this.tooltip.css('left', leftPos);
				this.tooltip.css('top', topPos);
			},
	
			setEvents: function(){
				var dt = this;
		 		var delay = dt.options.hoverDelay;
		  		var setTimeoutConst;
				if(dt.mouseOverMode){
					this.bearer.mouseover( function(){
						//Timeout for hover mouse delay
						setTimeoutConst = setTimeout( function(){
							dt.setPositions();
							dt.show();
						}, delay);
					}).mouseout( function(){
						clearTimeout(setTimeoutConst );
						dt.hide();
					});
				}else if(this.options.trigger == "click" || this.options.trigger == "onclik"){
					this.tooltip.click( function(e){
						e.stopPropagation();
					});
					this.bearer.click( function(e){
						e.preventDefault();
						dt.setPositions();
						dt.toggle();
						e.stopPropagation();
					});
					$('html').click(function(){
						dt.hide();
					})
				}
			},
	
			activate: function(){
				this.setContent();
				if(this.content){
					this.setEvents();
				}
			},
	
			addConfirm: function(){
				this.tooltip.append("<ul class = 'confirm'><li class = 'darktooltip-yes'>" 
					+ this.options.yes +"</li><li class = 'darktooltip-no'>"+ this.options.no +"</li></ul>");
				this.setConfirmEvents();
			},
	
			setConfirmEvents: function(){
				var dt = this;
				this.tooltip.find('li.darktooltip-yes').click( function(e){
					dt.onYes();
					e.stopPropagation();
				});
				this.tooltip.find('li.darktooltip-no').click( function(e){
					dt.onNo();
					e.stopPropagation();
				});
			},
	
			finalMessage: function(){
				if(this.options.finalMessage){
					var dt = this;
					dt.tooltip.find('div:first').html(this.options.finalMessage);
					dt.tooltip.find('ul').remove();
					dt.setPositions();
					setTimeout( function(){
						dt.hide();
						dt.setContent();
					}, dt.options.finalMessageDuration);
				}else{
					this.hide();
				}
			},
	
			onYes: function(){
				this.options.onYes(this.bearer);
				this.finalMessage();
			},
	
			onNo: function(){
				this.options.onNo(this.bearer);
				this.hide();
			}
		}
	
		$.fn.darkTooltip = function(options) {
			return this.each(function(){
				options = $.extend({}, $.fn.darkTooltip.defaults, options);
				var tooltip = new DarkTooltip($(this), options);
				tooltip.activate();
			});
		}
	
		$.fn.darkTooltip.defaults = {
			animation: 'none',
			confirm: false,
			content:'',
			finalMessage: '',
			finalMessageDuration: 1000,
			gravity: 'south',
			hoverDelay: 0,
			modal: false,
			no: 'No',
			onNo: function(){},
			onYes: function(){},
			opacity: 0.9,
			size: 'medium',
			theme: 'dark',
			trigger: 'hover',
			yes: 'Yes',
		};
	
	})(jQuery);


/***/ },

/***/ 49:
/***/ function(module, exports) {

	// document loaded
	jQuery(function($) {
	
	    // generic listing pagination
	    $(document).on('click', '.pagination li a', loadListing);
	    function loadListing (event) {
	        event.preventDefault();
	        var $this = $(this),
	            params = {};
	        if ($this.parent().hasClass('disabled')) {
	            return;
	        };
	
	        params.settings = JSON.stringify({
	            subcategoryFilter: false, // avoid doubling settings
	            viewSetting: false,
	        });
	
	        $.get($this.attr('href'), params, function(data){
	            var $container = $this.closest('.listing');
	
	            if ($this.parent().hasClass('see-more')) {
	                $container.find('.see-more-nav').remove();
	
	                var $data = $($.trim(data));
	                $data.find('.see-more-nav li a').click(loadListing);
	                $container.after($data);
	            } else {
	                $container.replaceWith(data);
	            }
	
	            $container.trigger('wf-pager:added');
	        });
	    }
	});


/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * share-selection: Medium like popover menu to share on Twitter or by email any text selected on the page
	 *
	 * -- Requires jQuery --
	 * -- AMD compatible  --
	 *
	 * Author: Xavier Damman (@xdamman)
	 * GIT: https://github.com/xdamman/share-selection
	 * MIT License
	 */
	
	(function($) {
	
	  var SelectionSharer = function(options) {
	
	    var self = this;
	
	    options = options || {};
	    if(typeof options == 'string')
	        options = { elements: options };
	
	    this.sel = null;
	    this.textSelection='';
	    this.htmlSelection='';
	
	    this.appId = $('meta[property="fb:app_id"]').attr("content") || $('meta[property="fb:app_id"]').attr("value");
	    this.url2share = $('meta[property="og:url"]').attr("content") || $('meta[property="og:url"]').attr("value") || window.location.href;
	
	    this.getSelectionText = function(sel) {
	        var html = "", text = "";
	        sel = sel || window.getSelection();
	        if (sel.rangeCount) {
	            var container = document.createElement("div");
	            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
	                container.appendChild(sel.getRangeAt(i).cloneContents());
	            }
	            text = container.textContent;
	            html = container.innerHTML;
	        }
	        self.textSelection = text;
	        self.htmlSelection = html || text;
	        return text;
	    };
	
	    this.selectionDirection = function(selection) {
	      var sel = selection || window.getSelection();
	      var range = document.createRange();
	      if(!sel.anchorNode) return 0;
	      range.setStart(sel.anchorNode, sel.anchorOffset);
	      range.setEnd(sel.focusNode, sel.focusOffset);
	      var direction = (range.collapsed) ? "backward" : "forward";
	      range.detach();
	      return direction;
	    };
	
	    this.showPopunder = function() {
	      self.popunder = self.popunder || document.getElementById('selectionSharerPopunder');
	
	      var sel = window.getSelection();
	      var selection = self.getSelectionText(sel);
	
	      if(sel.isCollapsed || selection.length < 10 || !selection.match(/ /))
	        return self.hidePopunder();
	
	      if(self.popunder.classList.contains("fixed")) {
	          self.popunder.style.bottom = 0;
	          return self.popunder.style.bottom;
	      }
	
	      var range = sel.getRangeAt(0);
	      var node = range.endContainer.parentNode; // The <p> where the selection ends
	
	      // If the popunder is currently displayed
	      if(self.popunder.classList.contains('show')) {
	        // If the popunder is already at the right place, we do nothing
	        if(Math.ceil(self.popunder.getBoundingClientRect().top) == Math.ceil(node.getBoundingClientRect().bottom))
	          return;
	
	        // Otherwise, we first hide it and the we try again
	        return self.hidePopunder(self.showPopunder);
	      }
	
	      if(node.nextElementSibling) {
	        // We need to push down all the following siblings
	        self.pushSiblings(node);
	      }
	      else {
	        // We need to append a new element to push all the content below
	        if(!self.placeholder) {
	          self.placeholder = document.createElement('div');
	          self.placeholder.className = 'selectionSharerPlaceholder';
	        }
	
	        // If we add a div between two <p> that have a 1em margin, the space between them
	        // will become 2x 1em. So we give the placeholder a negative margin to avoid that
	        var margin = window.getComputedStyle(node).marginBottom;
	        self.placeholder.style.height = margin;
	        self.placeholder.style.marginBottom = (-2 * parseInt(margin,10))+'px';
	        node.parentNode.insertBefore(self.placeholder);
	      }
	
	      // scroll offset
	      var offsetTop = window.pageYOffset + node.getBoundingClientRect().bottom;
	      self.popunder.style.top = Math.ceil(offsetTop)+'px';
	
	      setTimeout(function() {
	        if(self.placeholder) self.placeholder.classList.add('show');
	        self.popunder.classList.add('show');
	      },0);
	
	    };
	
	    this.pushSiblings = function(el) {
	      while(el=el.nextElementSibling) { el.classList.add('selectionSharer'); el.classList.add('moveDown'); }
	    };
	
	    this.hidePopunder = function(cb) {
	      cb = cb || function() {};
	
	      if(self.popunder == "fixed") {
	        self.popunder.style.bottom = '-50px';
	        return cb();
	      }
	
	      self.popunder.classList.remove('show');
	      if(self.placeholder) self.placeholder.classList.remove('show');
	      // We need to push back up all the siblings
	      var els = document.getElementsByClassName('moveDown');
	      while(el=els[0]) {
	          el.classList.remove('moveDown');
	      }
	
	      // CSS3 transition takes 0.6s
	      setTimeout(function() {
	        if(self.placeholder) document.body.insertBefore(self.placeholder);
	        cb();
	      }, 600);
	
	    };
	
	    this.show = function(e) {
	      setTimeout(function() {
	        var sel = window.getSelection();
	        var selection = self.getSelectionText(sel);
	        if(!sel.isCollapsed && selection && selection.length>10 && selection.match(/ /)) {
	          var range = sel.getRangeAt(0);
	          var topOffset = range.getBoundingClientRect().top - 5;
	          var top = topOffset + self.getPosition().y - self.$popover.height();
	          var left = 0;
	          if(e) {
	            left = e.pageX;
	          }
	          else {
	            var obj = sel.anchorNode.parentNode;
	            left += obj.offsetWidth / 2;
	            do {
	              left += obj.offsetLeft;
	            }
	            while(obj = obj.offsetParent);
	          }
	          switch(self.selectionDirection(sel)) {
	            case 'forward':
	              left -= self.$popover.width();
	              break;
	            case 'backward':
	              left += self.$popover.width();
	              break;
	            default:
	              return;
	          }
	          self.$popover.removeClass("anim").css("top", top+10).css("left", left).show();
	          setTimeout(function() {
	            self.$popover.addClass("anim").css("top", top);
	          }, 0);
	        }
	      }, 10);
	    };
	
	    this.hide = function(e) {
	      self.$popover.hide();
	    };
	
	    this.smart_truncate = function(str, n){
	        if (!str || !str.length) return str;
	        var toLong = str.length>n,
	            s_ = toLong ? str.substr(0,n-1) : str;
	        s_ = toLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
	        return  toLong ? s_ +'...' : s_;
	    };
	
	    this.getRelatedTwitterAccounts = function() {
	      var usernames = [];
	
	      var creator = $('meta[name="twitter:creator"]').attr("content") || $('meta[name="twitter:creator"]').attr("value");
	      if(creator) usernames.push(creator);
	
	
	      // We scrape the page to find a link to http(s)://twitter.com/username
	      var anchors = document.getElementsByTagName('a');
	      for(var i=0, len=anchors.length;i<len;i++) {
	        if(anchors[i].attributes.href && typeof anchors[i].attributes.href.value == 'string') {
	          var matches = anchors[i].attributes.href.value.match(/^https?:\/\/twitter\.com\/([a-z0-9_]{1,20})/i);
	          if(matches && matches.length > 1 && ['widgets','intent'].indexOf(matches[1])==-1)
	            usernames.push(matches[1]);
	        }
	      }
	
	      if(usernames.length > 0)
	        return usernames.join(',');
	      else
	        return '';
	    };
	
	    this.shareTwitter = function(e) {
	      e.preventDefault();
	
	      var text = "“"+self.smart_truncate(self.textSelection.trim(), 114)+"”";
	      var url = 'http://twitter.com/intent/tweet?text='+encodeURIComponent(text)+'&related='+self.relatedTwitterAccounts+'&url='+encodeURIComponent(window.location.href);
	
	      // We only show the via @twitter:site if we have enough room
	      if(self.viaTwitterAccount && text.length < (120-6-self.viaTwitterAccount.length))
	        url += '&via='+self.viaTwitterAccount;
	
	      var w = 640, h=440;
	      var left = (screen.width/2)-(w/2);
	      var top = (screen.height/2)-(h/2)-100;
	      window.open(url, "share_twitter", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	      self.hide();
	      return false;
	    };
	
	    this.shareFacebook = function(e) {
	      e.preventDefault();
	      var text = self.htmlSelection.replace(/<p[^>]*>/ig,'\n').replace(/<\/p>|  /ig,'').trim();
	
	      var url = 'https://www.facebook.com/dialog/feed?' +
	                'app_id='+self.appId +
	                '&display=popup'+
	                '&caption='+encodeURIComponent(text)+
	                '&link='+encodeURIComponent(self.url2share)+
	                '&href='+encodeURIComponent(self.url2share)+
	                '&redirect_uri='+encodeURIComponent(self.url2share);
	      var w = 640, h=440;
	      var left = (screen.width/2)-(w/2);
	      var top = (screen.height/2)-(h/2)-100;
	
	      window.open(url, "share_facebook", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	    };
	
	    this.shareEmail = function(e) {
	      var text = self.textSelection.replace(/<p[^>]*>/ig,'\n').replace(/<\/p>|  /ig,'').trim();
	      var email = {};
	      email.subject = encodeURIComponent("Quote from "+document.title);
	      email.body = encodeURIComponent("“"+text+"”")+"%0D%0A%0D%0AFrom: "+document.title+"%0D%0A"+window.location.href;
	      $(this).attr("href","mailto:?subject="+email.subject+"&body="+email.body);
	      self.hide();
	      return true;
	    };
	
	    this.render = function() {
	      var popoverHTML =  '<div class="selectionSharer" id="selectionSharerPopover" style="position:absolute;">'
	                       + '  <div id="selectionSharerPopover-inner">'
	                       + '    <ul>'
	                       + '      <li><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>'
	                       + '      <li><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>'
	                       + '      <li><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="%23FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>'
	                       + '    </ul>'
	                       + '  </div>'
	                       + '  <div class="selectionSharerPopover-clip"><span class="selectionSharerPopover-arrow"></span></div>'
	                       + '</div>';
	
	      var popunderHTML = '<div id="selectionSharerPopunder" class="selectionSharer">'
	                       + '  <div id="selectionSharerPopunder-inner">'
	                       + '    <label>Share this selection</label>'
	                       + '    <ul>'
	                       + '      <li><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>'
	                       + '      <li><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>'
	                       + '      <li><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="%23FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>'
	                       + '    </ul>'
	                       + '  </div>'
	                       + '</div>';
	      self.$popover = $(popoverHTML);
	      self.$popover.find('a.tweet').click(self.shareTwitter);
	      self.$popover.find('a.facebook').click(self.shareFacebook);
	      self.$popover.find('a.email').click(self.shareEmail);
	
	      $('body').append(self.$popover);
	
	      self.$popunder = $(popunderHTML);
	      self.$popunder.find('a.tweet').click(self.shareTwitter);
	      self.$popunder.find('a.facebook').click(self.shareFacebook);
	      self.$popunder.find('a.email').click(self.shareEmail);
	      $('body').append(self.$popunder);
	
	      if (self.appId && self.url2share){
	        $(".selectionSharer a.facebook").css('display','inline-block');
	      }
	    };
	
	    this.setElements = function(elements) {
	      if(typeof elements == 'string') elements = $(elements);
	      self.$elements = elements instanceof $ ? elements : $(elements);
	      self.$elements.mouseup(self.show).mousedown(self.hide).addClass("selectionShareable");
	
	      self.$elements.bind('touchstart', function(e) {
	        self.isMobile = true;
	      });
	
	      document.onselectionchange = self.selectionChanged;
	    };
	
	    this.selectionChanged = function(e) {
	      if(!self.isMobile) return;
	
	      if(self.lastSelectionChanged) {
	        clearTimeout(self.lastSelectionChanged);
	      }
	      self.lastSelectionChanged = setTimeout(function() {
	        self.showPopunder(e);
	      }, 300);
	    };
	
	    this.getPosition = function() {
	      var supportPageOffset = window.pageXOffset !== undefined;
	      var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
	
	      var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
	      var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	      return {x: x, y: y};
	    };
	
	    this.render();
	
	    if(options.elements) {
	      this.setElements(options.elements);
	    }
	
	  };
	
	  // jQuery plugin
	  // Usage: $( "p" ).selectionSharer();
	  $.fn.selectionSharer = function() {
	    var sharer = new SelectionSharer();
	    sharer.setElements(this);
	    return this;
	  };
	
	  // For AMD / requirejs
	  // Usage: require(["selection-sharer!"]);
	  //     or require(["selection-sharer"], function(selectionSharer) { var sharer = new SelectionSharer('p'); });
	  if(true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      SelectionSharer.load = function (name, req, onLoad, config) {
	        var sharer = new SelectionSharer();
	        sharer.setElements('p');
	        onLoad();
	      };
	      return SelectionSharer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	  }
	  else {
	    // Registering SelectionSharer as a global
	    // Usage: var sharer = new SelectionSharer('p');
	    window.SelectionSharer = SelectionSharer;
	  }
	
	})(jQuery);


/***/ }

});
//# sourceMappingURL=libs.js.map