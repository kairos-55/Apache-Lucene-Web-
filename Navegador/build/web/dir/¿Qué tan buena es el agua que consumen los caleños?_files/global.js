publicWebpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	  var jQuery = __webpack_require__(1);
	
	  __webpack_require__(29);
	  __webpack_require__(30);
	  __webpack_require__(31);
	  __webpack_require__(32);
	  __webpack_require__(33);
	  __webpack_require__(34);
	  __webpack_require__(35);
	  __webpack_require__(36);
	  __webpack_require__(37);
	  __webpack_require__(38);
	  //require('imports?this=>window!js/cxense');
	  __webpack_require__(39);
	}).call(window);

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    // document loaded
	    jQuery(function ($) {
	        var d = function d(msg) {
	            if ("console" in window) {
	                window.console.log(arguments);
	            }
	        };
	
	        var $window = $(window);
	
	        var _require = __webpack_require__(6);
	
	        var isAdmin = _require.isAdmin;
	
	        (function showSearchFormHeader() {
	            $(".search-icon").click(function () {
	                $(".header-search-form").show();
	                $(".search-icon").addClass("open-search-form");
	            });
	
	            $(".close-icon").click(function () {
	                $(".header-search-form").hide();
	                $(".search-icon").removeClass("open-search-form");
	            });
	
	            $(".search-icon-sticky").click(function () {
	                $("body").animate({ scrollTop: 0 }, "500", "swing");
	            });
	        })();
	
	        (function stickyToggles() {
	            $(".sticky .share-icon").click(function () {
	                $(".sticky .sticky-share-icons").toggle();
	            });
	
	            $(".sticky .user-black-icon").click(function () {
	                $(".sticky .sticky-user-nav").toggle();
	            });
	        })();
	
	        (function showFooterLinks() {
	            $("footer .portales").click(function () {
	                $("footer .link_portales").toggle();
	                $("footer .portales").toggleClass("active");
	            });
	        })();
	
	        /* header scroll */
	        (function toggleMinimizedHeader() {
	            var headerOffset = 112;
	
	            $window.scroll(function () {
	                if ($window.scrollTop() > headerOffset) {
	                    $("nav.sticky").show();
	                } else {
	                    $("nav.sticky").hide();
	                }
	            });
	        })();
	
	        (function cartoonPageview() {
	            $(".section-opinion .cartoon-board").on("wf-slider-slide-after", function () {
	                triggerOmniturePageCount();
	            });
	        })();
	
	        (function footerMobileLinkCurrentPage() {
	            var $link = $(".versionMovil a");
	            $link.attr("href", $link.attr("href") + document.location.pathname);
	        })();
	
	        (function portadaDelDiaOpenImage() {
	            $(".sidebar-portada .foto-portada1 a").click(function (ev) {
	                ev.preventDefault();
	                var url = $(this).find("img").attr("src");
	                window.open(url, "_blank");
	            });
	        })();
	
	        (function opinionColumnistsCurrentDay() {
	            var date = new Date();
	            $(".columnists-board .tabs-title .day").eq(date.getDay() - 1).click();
	        })();
	
	        (function picoYPlacaCurrentDay() {
	            var $board = $(".pico-y-placa-board");
	            var day = new Date().getDay();
	            $board.find(".tab-container").hide();
	            $board.find(".tabs-title .tab").each(function (index, tab) {
	                var $tab = $(tab),
	                    containerId = $tab.data("lsFor");
	                $tab.removeClass("active");
	                if ((day == 0 || day == 6) && index == 4) {
	                    $tab.addClass("active");
	                    $board.find("#" + containerId).show();
	                } else {
	                    if (day - 1 == index) {
	                        $tab.addClass("active");
	                        $board.find("#" + containerId).show();
	                    }
	                }
	            });
	        })();
	
	        // #19084 fix for touchscreen devices
	        (function menuLinksToggle() {
	            var tapped = false;
	            $("header .menu-principal .expandable span, nav.sticky .menu-principal .expandable span").on("touchstart", function (event) {
	                var $this = $(this).closest(".expandable");
	                $("header .menu-principal .expandable.opened, nav.sticky .menu-principal .expandable.opened").each(function (idx, element) {
	                    var $element = $(element);
	                    if ($element.text().trim() != $this.text().trim()) {
	                        $element.removeClass("opened");
	                        $element.find("ul.menu_level_1").hide();
	                    }
	                });
	
	                if ($this.hasClass("opened")) {
	                    $this.find("ul").hide();
	                    $this.removeClass("opened");
	                } else {
	                    $this.addClass("opened");
	                    $this.find("ul").show();
	                }
	
	                // double tap to follow link version
	                // if (!$this.children('a').length) {
	                //     event.preventDefault();
	                //     if ($this.hasClass('opened')) {
	                //         $this.find('ul').hide();
	                //         $this.removeClass('opened');
	                //     } else {
	                //         $this.addClass('opened');
	                //         $this.find('ul').show();
	                //     }
	                //     tapped = null;
	                // } else {
	                //     if(!tapped){ //if tap is not set, set up single tap
	                //         event.preventDefault();
	                //         tapped=setTimeout(function(){
	                //             tapped=null;
	                //             if ($this.hasClass('opened')) {
	                //                 $this.find('ul').hide();
	                //                 $this.removeClass('opened');
	                //             } else {
	                //                 $this.addClass('opened');
	                //                 $this.find('ul').show();
	                //             }
	                //         },300);
	                //     } else {
	                //         clearTimeout(tapped);
	                //         tapped=null;
	                //     }
	                // }
	            });
	        })();
	
	        (function menuLinkTouch() {
	            // force link follow on touch
	            $("header .menu-principal .expandable .menu_level_1 ul li").on("touchstart", function () {
	                $(this).find("a").click();
	            });
	        })();
	
	        (function multimediaImageClickPlayVideo() {
	            $(".multimedia-home-main-container .video-player.inline a.image").click(function (event) {
	                event.preventDefault();
	                $(this).parent().find(".video-play").click();
	            });
	        })();
	    });
	
	    window.triggerOmniturePageCount = function () {
	        if (typeof s !== "undefined") {
	            var s_code = s.t();if (s_code) document.write(s_code);
	        };
	    };
	}).call(window);
	}.call(window));

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    jQuery(function ($) {
	
	        var isAdmin = __webpack_require__(6).isAdmin;
	
	        (function homepageHideEmptyContainers() {
	            var containersClasses = [".board-home-breaking-news", ".board-home-extraordinary"];
	            $.each(containersClasses, function (index, container) {
	                var $container = $(container);
	                if ($.trim($container.html()) == "") {
	                    $container.parents(".container").hide();
	                }
	            });
	        })();
	
	        (function quitar_content_grid_vacios() {
	            $(".content_grid_noticias,.content_grid_precios").filter(function (index) {
	                return $(this).height() === 0;
	            }).remove();
	        })();
	
	        (function articleReportError() {
	            $(document).on("click", ".open-report-error-popup", function (event) {
	                event.preventDefault();
	                window.$container = $(this).closest("div").find(".report-error-form");
	                window.$form = $container.find("form");
	                $.magnificPopup.open({
	                    items: {
	                        src: $container
	                    },
	                    type: "inline",
	                    midClick: true,
	                    closeOnBgClick: false,
	                    focus: "input",
	                    fixedContentPos: false,
	                    closeMarkup: ""
	                });
	                $form.submit(function (e) {
	                    e.preventDefault();
	                    $form.find(".form-submit").attr("disabled", "disabled").css("cursor", "wait");
	                    var formUrl = $form.attr("action");
	                    var formData = $form.serialize();
	                    $.post(formUrl, formData, function (response) {
	                        if (response.error_message == 0) {
	                            $form.find(".form-submit").removeAttr("disabled").css("cursor", "pointer");
	                            $form.fadeOut("slow", function () {
	                                $container.find(".on-success").fadeIn("slow");
	                            });
	                        } else {
	                            var fields = ["name", "email", "message"];
	                            $.each(response.error_messages, function (index, value) {
	                                if ($.inArray(index, fields) != -1) {
	                                    $form.find("#error-for-" + index).html(value);
	                                } else {
	                                    $form.find(".form-general-errors").html("<div>" + value + "</div>");
	                                }
	                            });
	                        }
	                    });
	                });
	            });
	
	            (function contactForm() {
	                var $form = $("#form-contact-page");
	                $form.submit(function (e) {
	                    e.preventDefault();
	                    $form.find(".form-submit").attr("disabled", "disabled").css("cursor", "wait");
	                    var formUrl = $form.attr("action");
	                    var formData = $form.serialize();
	                    //console.log(formData);
	                    $.post(formUrl, formData, function (response) {
	                        //console.log(response);
	                        if (response.error_code == 0) {
	                            // success -> show popup
	                            $form.find(".form-submit").removeAttr("disabled").css("cursor", "pointer");
	                            $form.find("input, textarea").val("");
	                            $.magnificPopup.open({
	                                items: {
	                                    src: "#contact-popup"
	                                },
	                                type: "inline"
	                                //closeOnBgClick: false
	                                //closeBtnInside: true,
	                                //showCloseBtn: true
	                            });
	                            $("#contact-popup").fadeIn();
	                        } else {
	                            $form.find(".form-submit").removeAttr("disabled").css("cursor", "pointer");
	                            // error present
	                            //console.log(response.error_messages);
	                            var fields = ["name", "email", "message", "for", "telephone", "captcha"];
	                            $.each(response.error_messages, function (index, value) {
	                                if ($.inArray(index, fields) != -1) {
	                                    //$('#form-top')[0].scrollIntoView(); // get error into view
	                                    $form.find("#error-for-" + index).html(value);
	                                } else {
	                                    //$('#form-top')[0].scrollIntoView();
	                                    $form.find(".form-general-errors").html("<div>" + value + "</div>");
	                                }
	                            });
	
	                            if ("grecaptcha" in window) {
	                                grecaptcha.reset();
	                            }
	                        }
	                    });
	                });
	            })();
	            $(document).on("click", ".popup-modal-dismiss", function (e) {
	                e.preventDefault();
	                // reset form data -> close popup
	                $("#form-contact-page input, #form-contact-page textarea").val("");
	                $(".form-general-errors").html("");
	                $(".field-error").html("");
	                $(".on-success, .on-canceled").hide();
	                $("#form-report-error ").show();
	                $.magnificPopup.close();
	            });
	            $(document).on("click", ".form-cancel", function (e) {
	                e.preventDefault();
	                $("#form-report-error").fadeOut("slow", function () {
	                    $(".on-canceled").fadeIn("slow");
	                });
	            });
	            $(document).on("click", ".back-to-form", function (e) {
	                e.preventDefault();
	                $(".on-canceled").fadeOut("slow", function () {
	                    $("#form-report-error").fadeIn("slow");
	                });
	            });
	            $(".field-tooltip").darkTooltip({
	                animation: "flipIn",
	                gravity: "west",
	                theme: "form-field-tooltip"
	            });
	        })();
	
	        (function opinionHomeDropdowns() {
	            $(".dropDown .btn_select").click(function (e) {
	                e.preventDefault();
	                $(this).toggleClass("active").closest(".dropDown").find("ul").toggle();
	            });
	        })();
	
	        (function toggleMoreNews() {
	            if (!isAdmin()) {
	                $(".toggleCollapse a").click(function (e) {
	                    e.preventDefault();
	                    // for mobile
	                    $(".toggleCollapse a").toggleClass("opened closed");
	                    // for desktop
	                    $(".toggleCollapse span").toggleClass("abajo-icon arriba-icon");
	                    $(".collapsible").slideToggle("slow");
	                });
	            }
	        })();
	
	        function popup_forum_registration() {
	            modal({
	                type: "default",
	                title: "Ha quedado inscrito a nuestro foro sobre Liderazgo Internacional",
	                text: "Si necesita mas información comuníquese a los siguientes teléfonos Local 571 4444 opción 3 - Nacional 01 8000 110211 Opción 3",
	                size: "normal",
	                buttons: [{
	                    text: "Cerrar", //Button Text
	                    val: "cerrar", //Button Value
	                    eKey: true, //Enter Keypress
	                    addClass: "modal-close-btn", //Button Classes (btn-large | btn-small | btn-green | btn-light-green | btn-purple | btn-orange | btn-pink | btn-turquoise | btn-blue | btn-light-blue | btn-light-red | btn-red | btn-yellow | btn-white | btn-black | btn-rounded | btn-circle | btn-square | btn-disabled)
	                    onClick: function onClick(dialog) {
	                        $("#error_menssage_forum").html("");
	                        $(":input", "#forum-registration").not(":button, :submit, :reset, :hidden").val("");
	                        $(":input", "#forum-registration").css("-webkit-box-shadow", "0 0 0 1000px white inset");
	                    }
	                }],
	                center: true,
	                autoclose: false });
	        }
	
	        (function validateForumRegistration() {
	            $.validator.addMethod("noSpecialChars", function (value, element) {
	                return this.optional(element) || /^[a-z0-9\s]+$/i.test(value);
	            }, "No se permiten caracteres especiales.");
	
	            $("#forum-registration-form").validate({
	                rules: {
	                    "elpaiscali_cms_forum_registration[name]": {
	                        required: true },
	                    "elpaiscali_cms_forum_registration[last_name]": "required",
	                    "elpaiscali_cms_forum_registration[email]": {
	                        required: true,
	                        email: true },
	                    "elpaiscali_cms_forum_registration[company]": "required",
	                    "elpaiscali_cms_forum_registration[cell]": {
	                        required: true,
	                        number: true },
	                    "elpaiscali_cms_forum_registration[phone]": {
	                        required: true,
	                        number: true },
	                    "elpaiscali_cms_forum_registration[city]": "required" },
	                messages: {
	                    "elpaiscali_cms_forum_registration[name]": {
	                        required: "Debe ingresar su nombre. Recuerde que éste no puede tener números o caracteres especiales." },
	                    "elpaiscali_cms_forum_registration[last_name]": {
	                        required: "Debe ingresar su apellido. Recuerde que éste no puede tener números o caracteres especiales."
	                    },
	                    "elpaiscali_cms_forum_registration[email]": {
	                        required: "Debe ingesar un correo electrónico.",
	                        email: "Este no es un correo electrónico válido."
	                    },
	                    "elpaiscali_cms_forum_registration[company]": {
	                        required: "Debe ingresar el nombre de su empresa."
	                    },
	                    "elpaiscali_cms_forum_registration[cell]": {
	                        required: "Debe ingresar un número de celular.",
	                        number: "Este no es un número de celular válido."
	                    },
	                    "elpaiscali_cms_forum_registration[phone]": {
	                        required: "Debe ingresar un número de teléfono.",
	                        number: "Este no es un número de teléfono válido"
	                    },
	                    "elpaiscali_cms_forum_registration[city]": {
	                        required: "Debe ingresar el nombre de su ciudad."
	                    }
	                },
	                submitHandler: function submitHandler(form) {
	                    var data = "elpaiscali_cms_forum_registration[name]=" + $("#elpaiscali_cms_forum_registration_name").val();
	                    data += "&elpaiscali_cms_forum_registration[last_name]=" + $("#elpaiscali_cms_forum_registration_last_name").val();
	                    data += "&elpaiscali_cms_forum_registration[email]=" + $("#elpaiscali_cms_forum_registration_email").val();
	                    data += "&elpaiscali_cms_forum_registration[company]=" + $("#elpaiscali_cms_forum_registration_company").val();
	                    data += "&elpaiscali_cms_forum_registration[cell]=" + $("#elpaiscali_cms_forum_registration_cell").val();
	                    data += "&elpaiscali_cms_forum_registration[phone]=" + $("#elpaiscali_cms_forum_registration_phone").val();
	                    data += "&elpaiscali_cms_forum_registration[city]=" + $("#elpaiscali_cms_forum_registration_city").val();
	                    data += "&elpaiscali_cms_forum_registration[_token]=" + $("#elpaiscali_cms_forum_registration__token").val();
	                    jQuery("#gif_forum_registration").html("<span class=\"loader\"></span>");
	                    $.ajax({
	                        cache: false,
	                        url: "/foro/registro",
	                        //url: "{{ path('forum_registration') }}",
	                        type: "POST",
	                        data: data,
	                        success: function success(msg) {
	                            jQuery("#gif_forum_registration").html("");
	                            popup_forum_registration();
	                        },
	                        error: function error(xhr, ajaxOptions, thrownError) {
	                            jQuery("#gif_forum_registration").html("");
	                            jQuery("#error_menssage_forum").html("El correo ingresado ya se encuentra registrado para éste foro.");
	                        }
	                    });
	                    return false;
	                }
	            });
	        })();
	        (function opinionColumnistsCurrentDay() {
	            var date = new Date();
	            $(".columnists-board .tabs-title .day").eq(date.getDay() - 1).click();
	        })();
	
	        (function moreMagazines() {
	            $(".contenido-principal-ediciones").on("click", ".ver-mas-revistas", function () {
	                page = $(this).attr("data-page");
	                $(this).remove();
	                $.get("/revista-archive/" + page, function (result) {
	                    $(".contenido-principal-ediciones").append(result);
	                });
	            });
	        })();
	
	        (function moreForums() {
	            $(".content_grid_eventos").on("click", ".ver-mas-revistas", function () {
	                page = $(this).attr("data-page");
	                $(this).remove();
	                $.get("/foro-calendarioForos/" + page, function (result) {
	                    $(".separator").append(result);
	                });
	            });
	        })();
	
	        (function toggleTerms() {
	            $(".term-container .title").click(function () {
	                $(this).parent().toggleClass("active");
	                $(this).closest("div.term-container").find(".module-block").toggle();
	            });
	        })();
	
	        (function toggleRSS() {
	            $(".question-container .question-title").click(function () {
	                $(this).parent().toggleClass("active");
	                $(this).parent().find(".question-text").toggle();
	            });
	        })();
	
	        window.addEventListener("message", receiveMessage, false);
	        function receiveMessage(evt) {
	            var obj,
	                iframe,
	                lastIframe,
	                mailVerified = false;;
	
	            //Infografias y modulos especiales
	            if (/\.elpaiscali\.co$/.test(evt.origin)) {
	                obj = JSON.parse(evt.data);
	                if (obj.idIframe) {
	                    iframe = document.getElementById(obj.idIframe);
	                    if (iframe) {
	                        $(iframe).attr("height", obj.ResizeHeight);
	                        // this does not work
	                        //iframe.style.height=obj.ResizeHeight;
	                    } else {
	                        for (var i in iframeKeys) {
	                            if (obj.idIframe == i) {
	                                iframe = $("iframe[id=\"" + iframeKeys[i] + "\"]");
	                                if (iframe.length > 0 && obj.ResizeHeight) {
	                                    lastIframe = iframe[iframe.length - 1];
	                                    iframe.height(obj.ResizeHeight);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }
	
	        (function showMoreColumnists() {
	            $(".more-columnists-button a").click(function (event) {
	                event.preventDefault();
	                $(".more-columnistas-popup").fadeIn("slow", function () {
	                    var $this = $(this);
	                    $("body").addClass("scroll-disabled");
	                    $this.find(".close-button").click(function (event) {
	                        event.preventDefault();
	                        $("body").removeClass("scroll-disabled");
	                        $this.fadeOut("slow");
	                    });
	                });
	            });
	        })();
	    });
	}).call(window);
	
	//alphanumeric: true

	//alphanumeric: 'no meta cosas q no son'
	}.call(window));

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    jQuery(function ($) {
	
	        var OMVideo = function OMVideo($el, options) {
	            var rand = Math.floor(Math.random() * 111111);
	            var base_path = "/bundles/wfcmsbaseassets/javascripts/epplayer/";
	            var VIDEO_CONFIG = {
	                id: "strobemediaplayback" + rand,
	                src: "",
	                width: 516,
	                height: 338,
	                autoPlay: true,
	                //enableStageVideo: false,
	                favorFlashOverHtml5Video: true,
	                swf: base_path + "StrobeMediaPlayback.swf",
	                plugin_ads: base_path + "AdvertisementPlugin.swf",
	                //javascriptCallbackFunction: "onWFJavaScriptBridgeCreated"
	
	                plugin_mast: base_path + "MASTPlugin.swf" };
	
	            // if vast ads variable exists
	            if ("EP_VIDEO_VAST_URI" in window && EP_VIDEO_VAST_URI != "") {
	                //they assign at config player
	                VIDEO_CONFIG.src_mast_uri = EP_VIDEO_VAST_URI;
	            }
	
	            this.videoConfig = VIDEO_CONFIG;
	
	            if ("EP_VIDEO_ADS" in window) {
	                for (x in EP_VIDEO_ADS) {
	                    var match_url = document.location.pathname.match("^" + x);
	                    if (match_url && match_url.length > 0) {
	                        for (y in EP_VIDEO_ADS[x]) {
	                            if ((y + "").indexOf("ads_") != -1) {
	                                this.videoConfig = $.extend({}, this.videoConfig, eval("({" + y + ":'" + eval("EP_VIDEO_ADS[x]." + y) + "'})"));
	                            }
	                        }
	                    }
	                }
	            }
	
	            var self = this;
	            this.$els = $el;
	            this.$els.each(function () {
	                self.$el = $(this);
	
	                self.$el.on("click", function (ev) {
	                    if (!$("body").hasClass("mobile-page")) {
	                        ev.preventDefault();
	                    }
	                });
	
	                self.$onClickContainer = self.$el.find(".play-button, .play-button-large"); // click on play button to prevent multiple iframe inserting
	                self.$onClickContainer.on("click", function (ev) {
	                    ev.preventDefault();
	
	                    var $this = $(this);
	                    if (!$this.is(":disabled")) {
	                        $this.prop("disabled", true);
	
	                        var $video = $(this).parents(".video-player");
	
	                        if ($video.hasClass("inline")) {
	                            self.playInline($video);
	                        } else {
	                            self.playModal($video);
	                        }
	                    };
	                });
	                self.$el.data("omVideo", self);
	            });
	        };
	
	        OMVideo.prototype.domainName = function (url) {
	            return "http://" + document.location.hostname;
	        };
	
	        OMVideo.prototype.playInline = function ($container) {
	            var $popup,
	                $playerContainer,
	                $html,
	                $close,
	                $video_player,
	                video_player,
	                $el = $container.find(".video-play"),
	                aHref = $el.attr("href"),
	                source = $el.data("source"),
	                $existingPopup = $("body").find(".video-overlay");
	
	            $existingPopup.remove();
	
	            $html = $("<div class=\"video-overimage\">                <div id=\"strobemediaplayback\"> </div>                        <a href=\"#\" class=\"close\"></a>                    <div>");
	            $popup = $container.find(".video-overimage");
	            if ($popup.length == 0) $container.append($html);
	            $popup = $container.find(".video-overimage");
	            $playerContainer = $container.find("#strobemediaplayback");
	            $playerContainer.attr("style", "background:#000");
	
	            var width = $container.css("width"),
	                height = $container.css("height");
	
	            this.videoConfig.width = width;
	            this.videoConfig.height = height;
	
	            if (source && source !== "undefined") {
	                this.playEmbedded($el, $playerContainer);
	                return;
	            };
	
	            try {
	                //flash player
	                this.videoConfig.src = this.domainName() + aHref;
	                $video_player = $playerContainer.strobemediaplayback(this.videoConfig);
	                video_player = $video_player[0];
	                //$playerContainer.html(video_player);
	                $popup.show();
	            } catch (e) {
	                //html5 player
	                video_player = "<video src=\"" + aHref + "\"                             controls=\"controls\">                            </video>                    ";
	                $playerContainer.html(video_player);
	
	                var video = $container.find("video");
	                video.css("width", width);
	                video.css("height", height);
	
	                if (video.get(0).paused == false) {
	                    video.get(0).pause();
	                    $popup.hide();
	                } else {
	                    $popup.show();
	                    video.get(0).play();
	                }
	            }
	        };
	
	        OMVideo.prototype.playEmbedded = function ($el, $playerContainer) {
	            var mediaId = $el.attr("href"),
	                source = $el.data("source"),
	                playerType = $el.data("player"),
	                configPlayerType = "";
	            if (playerType == "player1") {
	                configPlayerType = "11603161";
	            } else if (playerType == "player2") {
	                configPlayerType = "11603041";
	            } else {
	                configPlayerType = "11603161";
	            }
	            var templates = {
	                youtube: "<iframe width=\"" + this.videoConfig.width + "\" height=\"" + this.videoConfig.height + "\" src=\"//www.youtube.com/embed/" + mediaId + "?autoplay=1\" allowfullscreen></iframe>",
	                youtube_v3: "<iframe width=\"" + this.videoConfig.width + "\" height=\"" + this.videoConfig.height + "\" src=\"//www.youtube.com/embed/" + mediaId + "?autoplay=1\" allowfullscreen></iframe>",
	                // brightcove: [
	                //     '<script src="http://admin.brightcove.com/js/BrightcoveExperiences.js"></script>',
	                //     '<object id="myExperience922656010001" class="BrightcoveExperience"><param name="bgcolor" value="#FFFFFF" /><param name="width" value="'
	                //     + this.videoConfig.width + '"/><param name="height" value="' + this.videoConfig.height
	                //     + '"/><param name="playerID" value="1266656281001"><param name="playerKey" value="AQ~~,AAABHIIjPuE~,zzIwiPZ37ukfMyKzG3fpjKtt0Mj45gBT" />'
	                //     + '<param name="isVid" value="true" /><param name="isUI" value="true" /><param name="dynamicStreaming" value="true" />'
	                //     + '<param name="@videoPlayer" value="' + mediaId + '" /></object>',
	                // ],
	                //sambatech: '<script src="http://player.sambatech.com.br/current/samba-player.js?ph=6ccb636e141295292ea82e951fbaea1b&m=' + mediaId + '&autoStart=true&playerWidth='+this.videoConfig.width+'&playerHeight='+this.videoConfig.height+'"></script>',
	                // sambatech: '<iframe width="'+this.videoConfig.width+'" height="'+this.videoConfig.height+'" src="http://fast.player.liquidplatform.com/pApiv2/embed/6ccb636e141295292ea82e951fbaea1b/' + mediaId + '/m?autoStart=true" scrolling="no" frameborder="0"></iframe>',
	                // vimeo: '<iframe src="//player.vimeo.com/video/'+mediaId+'?autoplay=1" width="'+this.videoConfig.width+'" height="'+this.videoConfig.height+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
	                // ustream: '<iframe width="'+this.videoConfig.width+'" height="'+this.videoConfig.height+'" src="http://www.ustream.tv/embed/'+mediaId+'?v=3&amp;wmode=direct&autoplay=true" scrolling="no" frameborder="0" style="border: 0px none transparent;"></iframe>',
	                ooyala: "<script src=\"http://player.ooyala.com/v3/dd86aa337ed487b94c613bd79972c31?namespace=OO\"></script><div id=\"ooyalaplayer\" style=\"width:100%;height:100%\"></div><script>OO.ready(function() { OO.Player.create(\"ooyalaplayer\", \"" + mediaId + "\", {autoplay: true}); });</script><noscript><div>Please enable Javascript to watch this video</div></noscript>",
	                kaltura: "                    <script src=\"http://cloudvideo.cdn.net.co/p/102/sp/10200/embedIframeJs/uiconf_id/" + configPlayerType + "/partner_id/102\"></script>                    <div id=\"kaltura_player_1415981286326\" style=\"width:" + this.videoConfig.width + ";height:" + this.videoConfig.height + ";\" itemprop=\"video\" itemscope itemtype=\"http://schema.org/VideoObject\" >                    <!-- Search engine metadata, based on schema.org/VideoObject -->                    <span itemprop=\"description\" content=\"The Kaltura player toolkit provides a robust framework for building rich media experinces. Learn more at player.kaltura.com\"></span>                    <span itemprop=\"name\" content=\"Kaltura Player ToolKit\"></span>                    <span itemprop=\"duration\" content=\"114\"></span>                    <!-- span itemprop=\"thumbnailUrl\" content=\"http://cdnbakmi.kaltura.com/p/102/sp/10200/thumbnail/entry_id/1_sf5ovm7u/version/100003\"></span -->                    <span itemprop=\"width\" content=\"100%\"></span>                    <span itemprop=\"height\" content=\"100%\"></span>                    </div>                    <script>                    kWidget.embed({                        targetId: \"kaltura_player_1415981286326\",                        wid: \"_102\",                        uiconf_id: \"" + configPlayerType + "\",                        entry_id: \"" + mediaId + "\"                    })                    </script>                "
	            };
	
	            var template = templates[source];
	
	            // include ooyala videos in iframes because the alternative to run multiple videos in one page is complicated and buggy
	            if (source == "ooyala" || source == "kaltura") {
	                var iframe = document.createElement("iframe");
	                $(iframe).css({ width: "100%", height: "100%" });
	                $playerContainer.append(iframe);
	
	                iframe.contentWindow.document.open();
	                iframe.contentWindow.document.write("<body style=\"margin: 0;padding: 0\">" + template + "</body>");
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
	
	        OMVideo.prototype.playModal = function ($container) {
	            var $popup,
	                $playerContainer,
	                $html,
	                $close,
	                video_player,
	                $video_player,
	                $el = $container.find(".video-play"),
	                aHref = $el.attr("href"),
	                source = $el.data("source"),
	                $existingPopup = $("body").find(".video-overlay");
	
	            $existingPopup.remove();
	
	            $html = $("<div class=\"video-overlay\"><div class=\"overlay\"></div><div class=\"video-popup\">                        <a href=\"#\" class=\"close\">x</a>                        <div id=\"strobemediaplayback\"> </div>                    </div></div>");
	            $popup = $html.find(".video-popup");
	            $playerContainer = $popup.find("#strobemediaplayback");
	
	            $("body").append($html);
	            var width = $popup.css("width"),
	                height = $popup.css("height"),
	                $overlay = $html.find(".overlay");
	
	            this.videoConfig.width = width;
	            this.videoConfig.height = height;
	
	            var $close = $popup.find(".close");
	            $close.on("click", function (ev) {
	                ev.preventDefault();
	                $html.remove();
	            });
	
	            if (source && source !== "undefined") {
	                this.playEmbedded($el, $playerContainer);
	                return;
	            };
	
	            try {
	                this.videoConfig.src = this.domainName() + aHref;
	                $video_player = $playerContainer.strobemediaplayback(this.videoConfig);
	                video_player = $video_player[0];
	                $playerContainer.html(video_player);
	                $overlay.on("click", function (ev) {
	                    ev.preventDefault();
	                    $html.remove();
	                });
	            } catch (e) {
	                //html5 player
	                video_player = "<video src=\"" + aHref + "\"                             controls=\"controls\">                            </video>                    ";
	                $playerContainer.html(video_player);
	
	                var video = $popup.find("video");
	                video.css("width", width);
	                video.css("height", height);
	
	                $overlay.on("click", function (ev) {
	                    ev.preventDefault();
	                    video.get(0).pause();
	                    $html.remove();
	                });
	            }
	        };
	
	        $.fn.omVideo = function (options, $el) {
	            var omVideo;
	            if (options === true) {
	                return this.data("omVideo");
	            } else if (typeof options == "string") {
	                omVideo = new OMVideo(this, options);
	                omVideo[options].call(omVideo, this);
	                return this;
	            }
	
	            omVideo = this.data("omVideo");
	            if (omVideo) {
	                return this;
	            }
	
	            omVideo = new OMVideo(this, options);
	
	            return this;
	        };
	
	        var _ua = navigator.userAgent.toLowerCase(),
	            is_msie = /msie/.test(_ua),
	            ie6mode = /msie [1-6]\./.test(_ua);
	
	        if (is_msie) {
	            setTimeout(function () {
	                $(".video-player").omVideo();
	            }, 200);
	        } else {
	            $(".video-player").omVideo();
	        }
	
	        (function loadBoardVideo() {
	            var clicked = false;
	            if (!clicked) {
	                $(document).on("click", ".ajax-load-video", function (event) {
	                    event.preventDefault();
	                    var $this = $(this),
	                        articleId = $this.data("articleId");
	                    if (typeof articleId != "undefined" && articleId != "") {
	                        $.ajax({
	                            method: "GET",
	                            url: "/load-board-video/" + articleId
	                        }).success(function (response) {
	                            if (typeof response.mediaId != "undefined" && response.mediaId != "") {
	                                var mediaId = response.mediaId,
	                                    source = response.source,
	                                    playerType = response.playerType;
	                                $this.html("<a href=\"" + mediaId + "\" data-source=\"" + source + "\" data-player=\"" + playerType + "\" class=\"video-play\"></a>");
	                                $this.addClass("play-button-large");
	                                $this.removeClass("ajax-load-video");
	                                new OMVideo($(document).find(".video-player"));
	                                $(document).find(".play-button-large").click();
	                                clicked = true;
	                            }
	                        });
	                    }
	                });
	            }
	        })();
	
	        window.OMVideo = OMVideo;
	    });
	}).call(window);
	// allow use of mast/vast
	// src_namespace_mast:'http://www.akamai.com/mast/1.0', // allow use of mast/vast
	// src_mast_uri:'', // allow use of mast/vast

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	(function () {
	    var jQuery = __webpack_require__(1);
	
	    this.jQuery(function ($) {
	        var $getAnchor = function $getAnchor($node) {
	            if (!$node) {
	                return;
	            }
	
	            var $direct = $node.find(">a");
	            if ($direct.length) {
	                return $direct;
	            }
	
	            return $node.find("a").eq(0);
	        };
	
	        var $getRelatedMenuItem = (function (_$getRelatedMenuItem) {
	            var _$getRelatedMenuItemWrapper = function $getRelatedMenuItem(_x, _x2) {
	                return _$getRelatedMenuItem.apply(this, arguments);
	            };
	
	            _$getRelatedMenuItemWrapper.toString = function () {
	                return _$getRelatedMenuItem.toString();
	            };
	
	            return _$getRelatedMenuItemWrapper;
	        })(function ($menuItem, direction) {
	            if (!$menuItem || !$menuItem.length) {
	                return $([]);
	            }
	
	            var $sibling = $menuItem[direction]("li");
	            if ($sibling.length) {
	                return $sibling;
	            }
	
	            return $getRelatedMenuItem($menuItem.parents("li"), direction);
	        });
	
	        var $getNextMenuItem = function $getNextMenuItem($menuItem) {
	            return $getRelatedMenuItem($menuItem, "next");
	        };
	
	        var $getPrevMenuItem = function $getPrevMenuItem($menuItem) {
	            return $getRelatedMenuItem($menuItem, "prev");
	        };
	
	        var $getMenu = function $getMenu() {
	            return $(".menu-principal");
	        };
	
	        var $getSubmenu = function $getSubmenu() {
	            return $(".header-category-right-menu");
	        };
	
	        var setupArrow = function setupArrow($arrow, $anchor) {
	            if (!$anchor || !$anchor.length) {
	                $arrow.remove();
	
	                return;
	            }
	
	            $arrow.find(".title").text($anchor.text()).end().attr("href", $anchor.attr("href"));
	        };
	
	        var initializeArrows = function initializeArrows() {
	            var $arrows = $(".global-arrows");
	            if (!$arrows.hasClass("disabled")) {
	                //the article "enables" them itself, don't overwrite it
	                return;
	            }
	
	            var $prevArrow = $arrows.find(".prev");
	            var $nextArrow = $arrows.find(".next");
	            var $menu = $getMenu().eq(0); //there's a second menu for the sticky
	            var $currentMenu = $menu.find("li.current");
	
	            if (!$currentMenu.length) {
	                return;
	            }
	
	            $currentMenu = $currentMenu.last();
	
	            $arrows.removeClass("disabled");
	
	            var $currentSubmenu = $getSubmenu().find("li.current");
	            var nextFound = false,
	                prevFound = false;
	            if ($currentSubmenu.length) {
	                var $nextSubmenu = $getNextMenuItem($currentSubmenu);
	                if ($nextSubmenu.length) {
	                    nextFound = true;
	                    setupArrow($nextArrow, $getAnchor($nextSubmenu));
	                }
	                var $prevSubmenu = $getPrevMenuItem($currentSubmenu);
	                if ($prevSubmenu.length) {
	                    prevFound = true;
	                    setupArrow($prevArrow, $getAnchor($prevSubmenu));
	                }
	            }
	
	            if (!nextFound) {
	                setupArrow($nextArrow, $getAnchor($getNextMenuItem($currentMenu)));
	            }
	            if (!prevFound) {
	                setupArrow($prevArrow, $getAnchor($getPrevMenuItem($currentMenu)));
	            }
	        };
	
	        var setActive = function setActive() {
	            if (!window.wfMenuCurrentUrl) {
	                return;
	            }
	
	            var $menu = $getMenu();
	            var $current = $menu.find("li.current");
	            if ($current.length) {
	                $current.parents("li.expandable").addClass("current");
	                return; //the server already set a current
	            }
	
	            var currentUrl = window.wfMenuCurrentUrl;
	            var parts = currentUrl.split("/");
	            var found = false;
	            while (!found && parts.length) {
	                var url = parts.join("/");
	                var $currentHref = $menu.find("a[href=\"" + url + "\"]");
	                if ($currentHref.length) {
	                    $currentHref.parents("li").addClass("current");
	                    found = true;
	                }
	
	                parts.pop();
	            }
	        };
	
	        setActive();
	        initializeArrows();
	    });
	}).call(window);
	}.call(window));

/***/ }

});
//# sourceMappingURL=global.js.map