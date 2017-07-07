var $url = 'http://devsso.elpais.com.co';
var cX = cX || {}; cX.callQueue = cX.callQueue || [];


function start(id_clientes) {
	id_clientes = shuffle(id_clientes);
	console.log(id_clientes[0]);
	cX.callQueue.push(['insertWidget',{
			widgetId: WIDGETIDCX ,
			renderFunction: function(data, context) {
					myRenderClasificadosCX(data,context);
			}
		},{
			context: {
				"parameters": [{"key": "userquery", "value": id_clientes[0]}]
			}
		}
	]);
}

Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

function myRenderClasificadosCX(data, context) {

	$.each(data.response.items, function( index, value ) {
		if(value['recs-pep-price']){
			valor = Number(value['recs-pep-price']).format(0, 3, '.', ',');
			data.response.items[index]['recs-pep-price']=valor;
		}
	});
	return loadTemplateCX(data,template_file_clasificados_cx);
}

function loadTemplateCX(data,template){
	return $.ajax({
		url : template,
		async: false,
		crossDomain: true,
		success : function(template_data) {
			//console.log(data);
			return mustacheCX(template_data, data);
		}
	}).response;
}

function mustacheCX(template_data, json_data){
	var html = Mustache.to_html(template_data, json_data);
	$('#'+div_space_cx).append(html).promise().done(function(){
		//eval(div_space_cx+'()');
		if(platform == "mobile"){
		}
	});
	return true;
}

function log(string){
	var debug = true;
	if (debug) {
		console.log(string);
	}
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

start(id_clientes);
