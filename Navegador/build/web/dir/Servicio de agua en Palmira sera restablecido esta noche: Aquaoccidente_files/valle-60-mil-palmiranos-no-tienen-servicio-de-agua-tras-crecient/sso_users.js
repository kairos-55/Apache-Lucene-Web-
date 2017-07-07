(function($, window){
    $(document).ready(function() {
        $("#edit-submit--2").click(function(e) {
            var $anio = (int)($("#edit-field-fecha-nacimiento-und-0-value-year--2").val());
            var $mes = (int)($("#edit-field-fecha-nacimiento-und-0-value-month--2").val()) - 1;
            var $dia = (int)($("#edit-field-fecha-nacimiento-und-0-value-day--2").val());
            var $fecha = new Date($anio, $mes, $dia);
            var $hoy = new Date();
            var $dia = 1000 * 60 * 60 * 24;
            var $dias = ($hoy - $fecha) / $dia;
            
            if ($dias < 365){
                alert('Debe ingresar una fecha de nacimiento válida');
                e.preventDefault();
            }
            
        });

        $("#edit-field-numero-identificacion-und-0-value--2").keypress(function(e) {
            e = (e) ? e : window.event;
            var charCode = (e.which) ? e.which : e.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }); 
    });
})(jQuery, window);