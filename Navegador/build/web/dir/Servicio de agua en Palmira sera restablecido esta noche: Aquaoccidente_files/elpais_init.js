({
	name:"adtlgcen_Cookie",
	set:function(n,v,c){var d,e="";d=new Date();if(c){d.setTime(d.getTime()+c*60*60*1000);};e="; expires="+d.toGMTString();document.cookie=escape(n)+"="+v+e+"; path=/";},
	get:function(n){var e,b,p,c=document.cookie;p=n+"=";b=c.indexOf(";"+" "+p);if(b==-1){b=c.indexOf(p);if(b!==0){return "";}}else{b+=2;}e=c.indexOf(";",b);if(e==-1){e=c.length;}return unescape(c.substring(b+p.length,e));},
	unset:function(n){return this.set(n,"");},
	init:function(){window[this.name]=this;}
}).init();

var cX = cX || {}; 
cX.callQueue = cX.callQueue || [];

if (!window.admp_) {
	//Seems to be a Safari bug. All properties of location are undefined
	try { window.loc_ = (window.location.href == 'undefined' && JSON && JSON.parse && JSON.stringify) ? JSON.parse(JSON.stringify(window.location)) : window.location; }catch(err){window.loc_ = window.location;}

	window.adtlgcen = window.adtlgcen || {};
	adtlgcen.config = adtlgcen.config || {};
	adtlgcen.util = adtlgcen.util || {};
    
    var adtlgcen_SETTINGS = {
		TC_URL: window.loc_.protocol + "//admp-tc-gaca.adtlgc.com",
		SCRIPT_VERSION_PARAMETER: "&v=2.32",
		CINT_URL: "https://collector.cint.com?a=2495&i=43&id=evid_0043:"
	};

	var enr_vars = {
		evid: "evid_0043",
		evid_v: "evid_v_0043",
		evid_set: "evid_set_0043",
		adptseg: "adptseg_0043",
		adptset: "adptset_0043",
		dataRequest: "adapt_dataRequest_elpais_admp",
		persistedUpdateQueryId: "6ff8d7fb42128c3b5cc2f857b012a96350179b81",
		persistedLinkQueryId: "a7e34697e72d5495decd852f498e01964d0167f7",
		cxPrefixes: ["ppa"]
	};
	
	var siteGroups = {
		"pep": "vehiculos.elpais.com.co,gente.elpais.com.co,vanitip.com,empleos.elpais.com.co,elpais.com.co,clubselecta.com.co,clasificados.elpais.com.co,suscripciones.elpais.com.co,promociones.elpais.com.co,fincaraiz.elpais.com.co,diversos.elpais.com.co,metroxmetro.com.co,decompras.elpais.com.co,planciudad.com",
		"pec": "chicas.qhubomedellin.com,qhubomedellin.com,masificados.com,planepoly.com,clasicoelcolombiano.com,gente.com.co,clubintelecto.com,propiedades.com.co,bookdefoertas.com,promociones.elcolombiano.com,promociones.qhubomedellin.com,ciudad-d.com,elcolombianoejemplar.elcolombiano.com,elcolombiano.com,m.elcolombiano.com",
		"peu": "m.eluniversal.com.co,m.eluniversalclasificados.com,eluniversalclasificados.com,clubvitaleu.com,turismoporbolivar.com,cartagenamagica.com,tiendapop.co,donde.co,eluniversal.com.co",
		"pva": "soloparamujeres.co,m.vanguardia.com,clasificadosvanguardia.com,cocinarte.co,ubicarfincaraiz.com,ubikarme.com,bucaramanga.com,gentedecabecera.com,vanguardia.com,gentedecanaveral.com,revistanovias.com.co"
	};
	
	var segmentGroups = {
		"kv1001": "-ecsegm-gender",
		"kv1002": "-ecsegm-age",
		"kv1003": "-ecsegm-education",
		"kv1004": "-ecsegm-income",
		"kv1005": "-ecsegm-employment",
		"kv1006": "-ecsegm-childrencount",
		"kv1007": "-ecsegm-householdsize",
		"kv1009": "-ecsegm-interests"
	};
	
	var segmentValues = {
		"kv1001=a": "male",
		"kv1001=b": "female",
		"kv1002=a": "under18",
		"kv1002=b": "18-24",
		"kv1002=c": "25-34",
		"kv1002=d": "35-44",
		"kv1002=e": "45-54",
		"kv1002=f": "55-64",
		"kv1002=g": "over65",
		"kv1003=a": "PrimarySecondarySchool",
		"kv1003=b": "HighSchoolTertiaryTechCollege",
		"kv1003=c": "UniversityPostgraduate",
		"kv1003=d": "EducationLevelOther",
		"kv1004=a": "under12k",
		"kv1004=b": "12k-20k",
		"kv1004=c": "20k-45k",
		"kv1004=d": "45k-70k",
		"kv1004=e": "over70k",
		"kv1005=a": "studying",
		"kv1005=b": "working",
		"kv1005=c": "other",
		"kv1006=a": "1",
		"kv1006=b": "2-3",
		"kv1006=c": "4 and more",
		"kv1006=d": "none",
		"kv1007=a": "1",
		"kv1007=b": "2-4",
		"kv1007=c": "5more",
		"kv1009=1": "Animal Lovers",
		"kv1009=10": "Designer Fashion & Beauty",
		"kv1009=11": "Food, Wine & Dining",
		"kv1009=12": "Technology & Gadgets",
		"kv1009=13": "Gaming",
		"kv1009=14": "Plants & Gardening",
		"kv1009=15": "Health, Fitness & Wellbeing",
		"kv1009=16": "Music Lovers",
		"kv1009=17": "Weekends & Nightlife",
		"kv1009=18": "Children & Parenting",
		"kv1009=19": "Video Imaging & Photos",
		"kv1009=2": "Interior Design & Furnishing",
		"kv1009=20": "Science & Discovery",
		"kv1009=21": "Training & Exercise",
		"kv1009=22": "Sports Followers",
		"kv1009=23": "Style & Trend Setters",
		"kv1009=24": "World Travel Enthusiasts",
		"kv1009=25": "Home Improvement & DIY",
		"kv1009=3": "Racing & Automotive Enthusiasts",
		"kv1009=4": "Active Outdoors & Nature",
		"kv1009=5": "Personal Finance & Economy",
		"kv1009=6": "Business & Career",
		"kv1009=7": "Theater, Arts & Culture",
		"kv1009=8": "Organic & Sustainable Development",
		"kv1009=9": "Celebrities & Entertainment"
	};

    adtlgcen.util.isContent = function() {
		var result = document.getElementsByTagName("bi3dtext").length > 0;
		if(!result){
			 var allElements = document.getElementsByTagName('*');
			 for (var i = 0, n = allElements.length; i < n; i++){
				 if (attr = allElements[i].getAttribute("itemtype")){
				      if(attr=="http://schema.org/NewsArticle" || attr=="http://schema.org/Article"){
				    	  result = true;
				    	  break;
				      }
				 }
			 }
		}
		return result;
	};
	
    adtlgcen.util.send = function (url, skipExtraparams, pixelImage) {
    	if(!skipExtraparams){
    		url += "&evid=" + window[enr_vars.evid];
    		if(window[enr_vars.evid_v]){
    			url += "&vv=" + window[enr_vars.evid_v];
    		}
    		url += adtlgcen_SETTINGS.SCRIPT_VERSION_PARAMETER;    		
    	}
        
        if(pixelImage){
			setTimeout(function(){
				var imgRequest = new Image(0, 0);
				imgRequest.src = url;
			},100);
			return;
		}
        
        if (navigator.appVersion.indexOf("MSIE") != -1 ) {
			var version = parseFloat(navigator.appVersion.split("MSIE")[1]);
		    if(version<8){
				setTimeout(function(){
					var request = new Image(0, 0);
					request.src = url;
				},1000);
				return;
		    }
	 	}
	
		var result = false;
		if (!result && typeof XDomainRequest!='undefined') {
			result = new XDomainRequest();
		}
		if (!result && typeof XMLHttpRequest!='undefined') {
			try {
				result = new XMLHttpRequest();
			} catch (e) {
				result=false;
			}
		}
	    if (!result && window.createRequest) {
	    	try {
	    		result = window.createRequest();
	    	} catch (e) {
	    		result=false;
	    	}
	    }
		if(result){
			result.open("GET", url,true);
			result.send('');
		}
		return result;
    };

    adtlgcen.util.validateEvIdCookie = function (evIdCookieName) {
        return adtlgcen_Cookie.get(evIdCookieName) && adtlgcen_Cookie.get(evIdCookieName) != "-entered";
    };
    
    adtlgcen.util.en_smart_decode = function(url){
    	var tokens = url.split("%");
    	var result = tokens[0];
    	for(var i=1; i< tokens.length; i++){
    		try{
    			if(tokens[i].length==2 && tokens.length > i && tokens[i+1].length>=2){
    				try{
    					result+=decodeURIComponent("%"+tokens[i]+"%"+tokens[i+1].substring(0,2));
    					result+=tokens[i+1].substring(2, tokens[i+1].length);
    					i++; 
    					continue;
    				}catch(e){
    					//ignore
    				}	
    			}
    			if(tokens[i].length>=2){
    				result+=decodeURIComponent("%"+tokens[i].substring(0,2))+tokens[i].substring(2, tokens[i].length);
    				continue;
    			}
    		}catch(e){
    			//ignore
    		}
    		result+="%"+tokens[i];
    	}
    	return result;
    };
    
	adtlgcen.util.makePageImpCall = function () {
        var statURL = adtlgcen_SETTINGS.TC_URL + "/event/v3/pagestat?location=" + 
	    	(encodeURIComponent || escape)(window.loc_.href) +
	    	(adtlgcen.util.isContent() ? "&isContent=1" : "") + 
	    	"&cb=" + new Date().getTime();
        adtlgcen.util.send(statURL);
        
        var result = adtlgcen.util.en_smart_decode(window.loc_.href);
        statURL = adtlgcen_SETTINGS.TC_URL + "/event/v3/arstat?location="+(encodeURIComponent||escape)(result)+"&cb="+new Date().getTime();
        adtlgcen.util.send(statURL);
        
    	if(adtlgcen.util.validateEvIdCookie(enr_vars.evid)){
    		for(var key in siteGroups){
    			var domains = siteGroups[key].split(",");
    			for(var i=0; i<domains.length; i++){
    				if(window.location.hostname.indexOf(domains[i]) === 0 || window.location.hostname.indexOf("www."+domains[i]) === 0){
    					enr_vars.cxPrefixes[enr_vars.cxPrefixes.length] = key;
    					break;    					
    				}
    			}
    		}
    			
    		var throttleCookie = "enr_cxense_throttle";
            var minTimeBetweenUpdatesDays = 1;

            var segments = adtlgcen_Cookie.get(enr_vars.adptseg).replace(/-/g, "|").split("|");
    		
    		cX.callQueue.push(['invoke',function() {
    			var params = [];
    			for(var i=0;i < enr_vars.cxPrefixes.length; i++){
    				var prefix = enr_vars.cxPrefixes[i];
    				params[params.length] =  { "id": adtlgcen_Cookie.get(enr_vars.evid), "cxid": cX.getUserId(), "type": prefix };
    			}
    			var apiUrl = 'https://api.cxense.com/profile/user/external/link/update?callback={{callback}}'
    				+ '&persisted=' + encodeURIComponent(enr_vars.persistedLinkQueryId)
    				+ '&json=' + encodeURIComponent(cX.JSON.stringify(params));
    			cX.jsonpRequest(apiUrl, function (data) {
    				//alert(cX.JSON.stringify(data))
    			});
			}]);

			cX.callQueue.push(['invoke', function() {
			    if (!cX.getCookie(throttleCookie)) {
			    	var params = [];
	    			for(var i=0;i < enr_vars.cxPrefixes.length; i++){
	    				var prefix = enr_vars.cxPrefixes[i];
	    				
	    				var profile = [];
	    				if(segments && segments.length > 0 && segments[0]){
	    	        		for(var j=0; j < segments.length;j++){
	    	        			var curSegTokens = segments[j].split("#");
	    	        			if(segmentGroups[curSegTokens[0]]){
		    	        			var segmentValue = segmentValues[segments[j].replace("#","=")];
		        					if(segmentValue){
	    	        					profile[profile.length] = {'item': segmentValue, 'group': prefix + segmentGroups[curSegTokens[0]]};        					
	    	        				}
	    	        			}
	    	        		}
	    	        		if("pep" == prefix){
	    	        			profile[profile.length] = {'item': "yes", 'group': prefix + "-profiled"};	    	        			
	    	        		}
	    				}else{
	    					if("pep" == prefix){
		    					profile[profile.length] = {'item': "no", 'group': prefix + "-profiled"};
		    					minTimeBetweenUpdatesDays = 1/4;
	    					}
	    				}
	    				
    	        		if(profile.length>0){
    	        			params[params.length] = {"id": adtlgcen_Cookie.get(enr_vars.evid), "profile":profile, "type": prefix };	    	        			
    	        		}
	    			}
			    	
	    			if(params.length > 0){
				        var apiUrl = 'https://api.cxense.com/profile/user/external/update?callback={{callback}}'
				                + '&persisted=' + encodeURIComponent(enr_vars.persistedUpdateQueryId)
				                + '&json=' + encodeURIComponent(cX.JSON.stringify(params));
				        cX.jsonpRequest(apiUrl, function(data) {
				            //alert(cX.JSON.stringify(data))
				        });
				        cX.setCookie(throttleCookie, "throttle", minTimeBetweenUpdatesDays);
	    			}
			    }
			}]);
    	}
        
        if ("optout" != window[enr_vars.evid] && "1" != adtlgcen_Cookie.get("enr_cint_sent")){
        	adtlgcen.util.send(adtlgcen_SETTINGS.CINT_URL + window[enr_vars.evid], true, true);
        	adtlgcen_Cookie.set("enr_cint_sent", "1", 1); //one hour
        }
    };
    
    window.admp_ = new function () {
    };
    
	adtlgcen.util.getUserId = function(){
		adtlgcen.util.createSyncIFrame("enGlobalIframe", window.loc_.protocol + "//code3.adtlgc.com/js/global.html", function(){
			var requestObj = {"action":"getUser","origin":window.location.origin};
			requestObj["enr_vars"] = enr_vars;
			requestObj["enr_settings"] = adtlgcen_SETTINGS;
			document.getElementById("enGlobalIframe").contentWindow.postMessage(JSON.stringify(requestObj), window.loc_.protocol + "//code3.adtlgc.com");				
		});
	}
	
	adtlgcen.util.createSyncIFrame = function(id, src, onloadHandler) {
		if(!document.body){
			setTimeout(arguments.callee, 200, id, src, onloadHandler);
		}else{
			var iframeEl = document.createElement('iframe');
			if (onloadHandler) {
				if(iframeEl.addEventListener)
					iframeEl.addEventListener('load', onloadHandler, true);
				else if(iframeEl.attachEvent)
					iframeEl.attachEvent('onload',onloadHandler);
			}
			if (id) {
				iframeEl.id = id;
				iframeEl.name = id;
			}
			iframeEl.width = 0;
			iframeEl.height = 0;
			iframeEl.scrolling = 'no';
			iframeEl.frameBorder = 0;
			iframeEl.src = src;
			iframeEl.style.display = 'none';
			document.body.appendChild(iframeEl);
			return iframeEl;
		}
    };
    
	admp_.init = function() {
		function run(){
			if ("1" != adtlgcen_Cookie.get(enr_vars.adptset)) {
				adtlgcen_Cookie.set(enr_vars.evid_set, 1, 1 / 60);
				var url = adtlgcen_SETTINGS.TC_URL + "/getCampaigns.do?includeSegments=true&callback=" + enr_vars.dataRequest + ".campaignCallback&cb=" + new Date().getTime();
				window[enr_vars.dataRequest].send(url);
			}else{
				adtlgcen.util.makePageImpCall();
			}
			
			if (adtlgcen.util.validateEvIdCookie(enr_vars.evid)) {
				adtlgcen_Cookie.set(enr_vars.evid_set, 2, 1 / 60);
			}
		}

		window[enr_vars.evid] = adtlgcen_Cookie.get(enr_vars.evid);
		window[enr_vars.evid_v] = adtlgcen_Cookie.get(enr_vars.evid_v);
        
        if(typeof(Storage) !== "undefined"){
			if(window[enr_vars.evid]){
				localStorage.setItem(enr_vars.evid, window[enr_vars.evid]);
				if(window[enr_vars.evid_v]){
					localStorage.setItem(enr_vars.evid_v, window[enr_vars.evid_v]);					
				}
			}else{
				window[enr_vars.evid] = localStorage.getItem(enr_vars.evid);
				window[enr_vars.evid_v] = localStorage.getItem(enr_vars.evid_v);
			}
		}
        if(!window[enr_vars.evid]){
        	var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        	var eventer = window[eventMethod];
        	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
        	eventer(messageEvent, function (e) {
        		try{
        			var responseObj = JSON.parse(e.data);   
        			if(responseObj["action"]=="getUser"){
        				adtlgcen_Cookie.set(enr_vars.evid, responseObj["evid"], 18 * 30 * 24); //18 months
        				if(responseObj["vv"]){
        					adtlgcen_Cookie.set(enr_vars.evid_v, responseObj["vv"], 18 * 30 * 24);
        				}
        				window[enr_vars.evid] = responseObj["evid"]; 
        				window[enr_vars.evid_v] =responseObj["vv"];
        				run();
        			}        			
        		}catch(e){
        			//ignore
        		}
        	}, false);  
        	
        	adtlgcen.util.getUserId();
        	
        }else{
        	run();        	
        }

    };
    
	function DataRequest(functionInstance) {
        this.fn = functionInstance;
                
        this.send = function (url) {
        	if (window[enr_vars.evid]) {
        		url += "&evid=" + window[enr_vars.evid];
        	}
            url += adtlgcen_SETTINGS.SCRIPT_VERSION_PARAMETER;

            var scriptNode = document.createElement("script");
            scriptNode.setAttribute("type", "text/javascript");
            scriptNode.setAttribute("charset", "utf-8");
            scriptNode.setAttribute("src", url);
            document.getElementsByTagName("head")[0].appendChild(scriptNode);
        };

        this.campaignCallback = function (data) {
			if (data && data["evId"] != "-entered") {
                adtlgcen_Cookie.set(enr_vars.evid, data["evId"], 18 * 30 * 24); //18 months
                if(data["vv"]){
                	adtlgcen_Cookie.set(enr_vars.evid_v, data["vv"], 18 * 30 * 24);
                }
            }
        	if (adtlgcen.util.validateEvIdCookie(enr_vars.evid)) {
				adtlgcen_Cookie.set(enr_vars.adptset, "1", 2);
	            window[enr_vars.evid] = adtlgcen_Cookie.get(enr_vars.evid);
				window[enr_vars.evid_v] = adtlgcen_Cookie.get(enr_vars.evid_v);
	            
	            var segmentsData = data["segments"];
                if (segmentsData) {
                	var segments = "";
                    for (var i = 0; i < segmentsData.length; i++) {
                        if (segmentsData[i]) {
                            if(segments){
                        		segments+=";"
                        	}
                            segments += segmentsData[i];
                        }
                    }
                    if (segments) {
                        adtlgcen_Cookie.set(enr_vars.adptseg, segments.replace(/;/g, "-").replace(/=/g, "#"), 2);
                    }
                }
                
                adtlgcen.util.makePageImpCall();
	        } else {
    	        var url = adtlgcen_SETTINGS.TC_URL + "/validate?callback=" + enr_vars.dataRequest + ".validateCallback&cb=" + new Date().getTime();
        	    this.send(url);
            }
        };

        this.validateCallback = function (data) {
            if (data) {
                adtlgcen_Cookie.set(enr_vars.evid, data["evId"], 18 * 30 * 24);
                if(data["vv"]){
                	adtlgcen_Cookie.set(enr_vars.evid_v, data["vv"], 18 * 30 * 24);
                }
                window[enr_vars.evid] = adtlgcen_Cookie.get(enr_vars.evid);
                window[enr_vars.evid_v] = adtlgcen_Cookie.get(enr_vars.evid_v);

				adtlgcen_Cookie.set(enr_vars.adptset, "1", 2);
				adtlgcen_Cookie.set(enr_vars.evid_set, 2, 1/60);
                adtlgcen.util.makePageImpCall();
            }
        };
    };

    window[enr_vars.dataRequest] = new DataRequest(admp_);
    
    admp_.init();
}