(function (window) {
    var $url = 'https://sso.elpais.com.co';
    var $url_base = '';
    var $show_data = false;
    var $loggedin = false;

    var sso_js_module = function ($, window) {
        function crearSlug(texto) {
            return texto
                    .toLowerCase()
                    .replace(/[^\w ]+/g, '')
                    .replace(/ +/g, '-');
        }

        return {
            create_user_area: function ($result) {
                if (parseInt($result) > 0) {
                    $('#register-sso').hide();
                    get_user_data($result);
                    $('#show-user-sso').show();
                } else {
                    $('#register-sso').show();
                }

                return false;
            },

            get_user_data: function ($result) {
                $.ajax({
                    method: 'GET',
                    url: $url + $url_base + '/user-profile/' + $result + '/json',
                    dataType: 'json',
                    cache: false,
                    async: false
                }).done(function (result) {
                    $loggedin = true;
                    print_user_data(result);
                });
                return false;
            },

            print_user_data: function ($usuario) {
                $('#show-user-sso').html('<div style="float: left;"><a href="' + $url + $url_base + '/user/' + $usuario.uid + '/edit">Hola,&nbsp;' + $usuario.name + '&nbsp;|&nbsp;Mi Cuenta</a>&nbsp;|&nbsp;</div><div style="float: left;"><a href="javascript:;" onclick="logout_user();">Desconectar</a></div>');
                return false;
            },

            login_user: function (form) {

                $("#ingresar-cargador").html('<img src="/elpais/sites/all/themes/elpais/images/loading-para-blanco.gif">');
                $('#ingresar-cargador').show();
                if (form.user.value === '') {
                    $("#ingresar-cargador").html('Ingrese su email');
                } else {

                }
                if (form.pwd.value === '') {
                    $("#ingresar-cargador").html('Ingrese su clave');
                } else {
                    var texto = form.pwd.value.replace('+', '{MAS}');
                    $.ajax({
                        type: "GET",
                        url: "/elpais/autocompletar/validar-usuario-pais/" + form.user.value + "/" + texto,
                        dataType: "json",
                        cache: false,
                        success: function (html) {
                            if (html.resp == 1) {
                                location.reload();
                            } else {
                                $("#ingresar-cargador").html('Email o clave incorrectos');
                            }
                        }
                    });
                }
            },

            logout_user: function () {
                $.get($url + $url_base + '/user/logout', function (data) {
                    $('#register-sso').show();
                    $('#show-user-sso').hide();

                    //reload comments iframe
                    $('#sso-comments').attr("src", $('#sso-comments').attr("src"));
                });

                return false;
            },

            init: function ($id, $mobile) {
                var $current_url = window.location.href;

                //validacion de dominio www.elpais.com.co
                /**
                 http://www.refulz.com:8082/index.php#tab2?foo=789

                 Property    Result
                 ------------------------------------------
                 host        www.refulz.com:8082
                 hostname    www.refulz.com
                 port        8082
                 protocol    http:
                 pathname    index.php
                 href        http://www.refulz.com:8082/index.php#tab2
                 hash        #tab2
                 search      ?foo=789

                 var x = $(location).attr('<property>');
                 */

                if (typeof $id === "undefined") {
                    $id = "";
                }
                
                if (typeof $mobile === "undefined"){
                    $mobile = "";
                }

                //cargar area de login, registro o informacion de usuario
                $('body').find('script').each(function () {
                    //var $expresion = /init_sso\((("|').*("|'))*\);/g;
                    var $expresion = /init_sso\(("|')?.*("|')?\);/g;
                    var $texto = $(this).html().trim();

                    if ($texto === 'init_sso();' || $expresion.test($texto)) {
                        if ($("#register-sso-" + $id).length > 0) {
                            return;
                        }

                        var $destino = $(this);
                        if ($id !== "") {
                            var $aux = $("div[data-id=" + $id + "]");
                            if ($aux.length > 0) {
                                $destino = $aux[0];
                            } else {
                                $show_data = false;
                            }
                        }

                        window.$mostrar_sso = $show_data;

                        if ($show_data) {
                            var $mobParam = "";
                            if (parseInt($mobile) == 1){
                                $mobParam = "&mobile=1";
                            }
                            
                            var $div = $('<div id="register-sso-' + $id + '" style="margin: 0; float: left; position: relative; min-width: 237px; min-height: 50px;"></div>');
                            var $ifr = $('<iframe id="sso-user" src="' + $url + $url_base + '/usuario/mod_usuario?_=' + btoa(encodeURI(window.location.href)) + '&host=' + $(location).attr('hostname') + $mobParam + '" width="237px" height="50px" style="position: relative; margin: 0 !important; z-index: 501;" frameborder="0" scrolling="no" ALLOWTRANSPARENCY="true"></iframe>');

                            $ifr.hover(function () {
                                $(this).height(250);
                            }, function () {
                                $(this).height(50);
                            });

                            $div.append($ifr);
                            if ($id !== "") {
                                $div.appendTo($destino);
                            }
                            else{
                                $div.insertBefore($destino);
                            }
                            
                            if ($id !== "") {
                                return;
                            }
                        }
                    }
                });

                return false;
            },
            get_comments: function ($nid, $titulo) {
                //$show_data ha sido asignada en true o false previamente con el tag init_sso().
                //console.log("Mostrando comentarios: " + $nid + " " + $show_data);
                if ($nid && $show_data) {
                    $('body').find('script').each(function () {

                        //1. initialization tag for comments
                        if ($(this).html().trim().substring(0, 12) === 'get_comments') {
                            //The vars $system and $type are not being used yet
                            var $function_params = $(this).html().trim().replace(/get_comments|\(|\)|\;/gi, '').trim().replace(/[^a-zA-Z0-9,]/g, '');
                            var $params_array = $function_params.split(',');
                            var $identificador_nid = $params_array[0];
                            var $identificador_titulo = $params_array[1];
                            var $system = ($params_array[2]) ? $params_array[2] : 'undefined';
                            var $type = ($params_array[3]) ? $params_array[3] : 'undefined';
                            var $domObj = $(this);
                            //2. call the webservice that create node if it does not exists
                            if ($nid) {
                                $.ajax({
                                    method: 'GET',
                                    url: $url + $url_base + '/create-node/' + $nid + '/' + $titulo,
                                    cache: false,
                                    async: false,
                                    dataType: 'json'
                                }).done(function (result) {
                                    $('<div id="wrapper-sso-comments"><iframe id="sso-comments" src="' + $url + $url_base + '/' + result.url + '" width="100%" height="600px" frameborder="0"></iframe></div>').insertBefore($domObj);
                                });
                            }
                        }
                    });
                }

                return false;
            },
            
            get_total_comments: function ($nid) {
                if ($nid) {
                    var $total_comments = null;
                    var $identifier = null;

                    $('body').find('script').each(function () {
                        if ($(this).html().trim().substring(0, 18) === 'get_total_comments') {
                            $identifier = $(this).html().trim().replace(/get_total_comments|\(|\)|\;/gi, '').trim().replace(/[^a-zA-Z0-9]/g, '');
                        }
                    });

                    $.ajax({
                        method: 'GET',
                        url: $url + $url_base + '/comments-counter/' + $identifier,
                        cache: false,
                        async: false
                    }).done(function (result) {
                        $total_comments = result.totalcomments;
                    });

                    $('body').find('script').each(function () {
                        if ($(this).html().trim().substring(0, 18) === 'get_total_comments') {
                            $('<div>' + $total_comments + '</div>').insertBefore($(this));
                        }
                    });
                }

                return false;
            },

            get_total_comments_multiple: function ($nid, $div) {
                if ($nid) {
                    var $total_comments = null;
                    var $identifier = null;

                    $.ajax({
                        method: 'GET',
                        url: $url + $url_base + '/comments-counter/' + $nid,
                        cache: false,
                        async: false
                    }).done(function (result) {
                        $total_comments = result.totalcomments;
                        //alert(result);
                    });

                    $('body').find($div).each(function () {
                        $(this).html('<span>' + $total_comments + '</span>');
                    });
                }

                return false;
            },

            /*get_total_comments: function ($nid) {
                if ($nid) {
                    var $total_comments = null;
                    var $identifier = $nid;

                    $.ajax({
                        method: 'GET',
                        url: $url + $url_base + '/comments-counter/' + $identifier,
                        cache: false,
                        async: false
                    }).done(function (result) {
                        $total_comments = result.totalcomments;
                    });

                    $('body').find('script').each(function () {
                        $nombreFunc = $(this).html().trim();
                        if ($nombreFunc.substring(0, 18) === 'get_total_comments' && $nombreFunc.substring(0, 27) !== 'get_total_comments_multiple') {
                            $('<div>' + $total_comments + '</div>').insertBefore($(this));
                        }
                    });
                }

                return false;
            },

            get_total_comments_multiple: function ($nid, $div, $urlNota) {
                if ($nid) {
                    var $total_comments = null;
                    var $identifier = null;

                    $.ajax({
                        method: 'GET',
                        url: $url + $url_base + '/comments-counter/' + $nid,
                        cache: false,
                        async: false
                    }).done(function (result) {
                        $total_comments = result.totalcomments;
                        //alert(result);
                    });
                    
                    if (typeof $urlNota === undefined || $urlNota === null) {
                        $('body').find($div).each(function () {
                            $(this).html('<span>' + $total_comments + '</span>');
                        });
                    }
                    else{
                        $('body').find($div).each(function () {
                            if ($total_comments > 0){
                                var $ele = '<a class="comment-count" href="' + $urlNota + '"><span>' + $total_comments + '</span></a>';
                                $(this).html($ele);
                            }
                        });
                    }
                }

                return false;
            },*/
        };
    };

    var sso_utils = function ($, window) {
        var $this = {};

        $this.createCookie = function (name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            } else
                var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        };

        $this.readCookie = function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0)
                    return c.substring(nameEQ.length, c.length);
            }
            return null;
        };

        $this.eraseCookie = function (name) {
            $this.createCookie(name, "", -1);
        };
        
        $this.sembrarCookieMipais = function($correo){
            $.ajax({
                method: 'GET',
                url: $url + $url_base + '/usuario/mipais/datos/' + $correo,
                cache : false,
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true
            }).done(function(result){
                var user_id = $this.readCookie('elpaisuser');
                if (user_id === null) user_id = 0;
                
                if ($.isEmptyObject(result) === false && !(user_id <= 0)){
                    $this.createCookie('mipais_sso', JSON.stringify(result), 60);                    
                }
                else if(result.length <= 0){
                    $this.eraseCookie('mispais_sso');
                }
            });
        };

        $this.sembrarCookieCX = function () {
            $.ajax({
                method: 'GET',
                url: $url + $url_base + '/user-profile/loggedin',
                cache: false,
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true
            }).done(function (result) {
                var user_id = $this.readCookie('elpaisuser');
                $this.sembrarCookieMipais(result.mail);
                if (user_id === null)
                    user_id = 0;
                if (result.uid > 0 && user_id <= 0) {
                    $this.createCookie('elpaisuser', result.mail, 60);
                } else if (result.uid <= 0) {
                    $this.eraseCookie('elpaisuser');
                    $this.eraseCookie('mispais_sso');
                }
                
                if (result.uid > 0){
                    $('#div-mipais').show();
                }
            });
        };
        
        $this.obtenerMiPais = function () {
            var $ret = [];
            $.ajax({
                method: 'GET',
                url: $url + $url_base + '/usuario/mipais/datos',
                cache: false,
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                async: false
            }).done(function (result) {
                var user_id = $this.readCookie('elpaisuser');
                if (user_id === null) user_id = 0;
                
                if ($.isEmptyObject(result) === false && !(user_id <= 0)){
                    $this.createCookie('mipais_sso', JSON.stringify(result), 60);                    
                }
                else if(result.length <= 0){
                    $this.eraseCookie('mispais_sso');
                }
                
                $ret = result;
            });
            
            return $ret;
        };

        $this.cargarCX = function() {
            var srcCx = 'http' + (location.protocol === 'https:' ? 's://s' : '://') + 'cdn.cxense.com/cx.js';
            var existeCx = $('script').filter(function () {
                return ($(this).attr('src') == srcCx);
            }).length;
            //console.log('existe = ' + existeCx);
            //console.log(srcCx);
            if (existeCx == 0) {
                //document.write('<scr' + 'ipt type="text/javascript" src="' + srcCx + '"></scr' + 'ipt>');
                $.getScript(srcCx);
            }
        };

        $this.llamarCX = function () {
            var user_id = $this.readCookie('elpaisuser');

            if (user_id === null)
                user_id = 0;

            var cX = cX || {};
            //console.log('Cx sesion id usario sso');
            //console.log(cX);
            cX.callQueue = cX.callQueue || [];
            cX.callQueue.push(['setSiteId', '1136174228988350311']);

            if (typeof user_id !== "undefined" && user_id !== 0) {
                console.log('SSO: envio de external id');
                cX.callQueue.push(['addExternalId', {'id': user_id, 'type': 'pep'}]);
            }

            console.log('SSO: segmentos CX inicio');
            cX.callQueue.push(['invoke', function () {
                console.log('SSO: segmentos CX envio');
                CX_SEGMENTS = cX.getUserSegmentIds({persistedQueryId: '7670f74049bb36956ca0517ea5533925680d090a'});
                CX_SEGMENTS = CX_SEGMENTS.concat(cX.getUserSegmentIds({persistedQueryId:'D3a663c900fc4fb0f117a58a14bfa2ab6e5ef457'}));

                var eplanning = ''; // INIT
                eplanning = CX_SEGMENTS.join('|');

                $this.createCookie("cxSegmentos", eplanning, 180);

            }]);

            cX.callQueue.push(['sendPageViewEvent']);
        };

        return $this;
    };

    /**
     * Incluir version propia de jQuery, Version: 1.11.2
     */

    var jquery_1_11_2_sso = null;
    if (typeof jquery_1_11 === 'undefined' || jquery_1_11 === null) {
        document.write('<scr' + 'ipt type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></scr' + 'ipt>');
        jquery_1_11_2_sso = jQuery.noConflict();
    } else {
        jquery_1_11_2_sso = jquery_1_11;
    }

    window.$mostrar_sso = false;

    jquery_1_11_2_sso.ajax({
        method: 'GET',
        url: $url + $url_base + '/sites/all/modules/custom/sso_users/sso_utils.php?task=validar_dominio&dominio=' + jquery_1_11_2_sso(location).attr('hostname'),
        cache: false
    }).done(function (checkresult) {
        $show_data = checkresult.isvalid;
        window.$mostrar_sso = $show_data;
        window.sso_utils = sso_utils(jquery_1_11_2_sso, window);
        window.sso_utils.sembrarCookieCX();
        window.sso_js_module = sso_js_module(jquery_1_11_2_sso, window);
        window.sso_utils.cargarCX();
        window.sso_utils.llamarCX();
        /*jquery_1_11_2_sso(document).ready(function() {
            window.sso_utils.cargarCX();
            window.sso_utils.llamarCX();
        });*/
    });
})(window);

function init_sso($id, $mobile) {
    var $cnt = 0;
    setTimeout(function () {
        if (typeof window.sso_js_module !== 'undefined' && window.sso_js_module !== null) {
            window.sso_js_module.init($id, $mobile);
        } else {
            if ($cnt < 5) {
                $cnt += 1;
                setTimeout(function () {
                    init_sso($id, $mobile);
                }, 200);
            }
        }
    }, 200);
}

function get_total_comments($id) {
    var $cnt = 0;
    setTimeout(function () {
        if (typeof window.sso_js_module !== 'undefined' && window.sso_js_module !== null) {
            window.sso_js_module.get_total_comments($id);
        } else {
            if ($cnt < 5) {
                $cnt += 1;
                setTimeout(function () {
                    get_total_comments($id);
                }, 200);
            }
        }
    }, 200);
}

function get_total_comments_multiple($id, $div, $urlNota) {
    var $cnt = 0;
    setTimeout(function () {
        if (typeof window.sso_js_module !== 'undefined' && window.sso_js_module !== null) {
            window.sso_js_module.get_total_comments_multiple($id, $div, $urlNota);
        } else {
            if ($cnt < 5) {
                $cnt += 1;
                setTimeout(function () {
                    get_total_comments_multiple($id, $div, $urlNota);
                }, 200);
            }
        }
    }, 200);
}

function get_comments($id, $titulo, $system, $type) {
    var $cnt = 0;
    setTimeout(function () {
        if (typeof window.sso_js_module !== 'undefined' && window.sso_js_module !== null && window.$mostrar_sso) {
            window.sso_js_module.get_comments($id, $titulo, $system, $type);
        } else {
            if ($cnt < 5) {
                $cnt += 1;
                setTimeout(function () {
                    get_comments($id, $titulo, $system, $type);
                }, 200);
            }
        }
    }, 200);
}

function validarLoguin($form) {
    var $cnt = 0;
    setTimeout(function () {
        if (typeof window.sso_js_module !== 'undefined') {
            window.sso_js_module.login_user($form);
        } else {
            if ($cnt < 5) {
                $cnt += 1;
                setTimeout(validarLoguin, 200);
            }
        }
    }, 200);
}
