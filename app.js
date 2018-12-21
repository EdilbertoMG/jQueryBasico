$(document).ready(function () {
    
    //formas de seleccionar parte del codigo html y reemplazar su contenido
    //$('h1').html('Etiqueta h1');
    //$('.display-4').html('desde clase');
    //$('#idh1').html('desde id');

    //agregar y eliminar clases con jquery

    $('#idh1').addClass('text-danger');
    $('#idh1').removeClass('display-4');

    //agregar elementos con jquery (partes de codigo)
    //al final
    $('#contenido').append('<h1>Este es un elemento al final</h1>');
    //al principio
    $('#contenido').prepend('<h1>Este es un elemento al principio</h1>');

    // agregar css con jquery
    $('.color-azul').css({color: 'blue' , background: 'salmon'});
    //remueve el elemento seleccionado con la clase afectada agregado con jquery
    //$('.color-azul').remove();
    //oculta 
    $('.color-azul').hide();

    //para agregar una imagen a un img desde jquery
    $('img').attr('src','https://www.google.com.co/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
    //modificar imagenes con jquery en este caso la ultima
    $('img:last').attr("width","100");

    //eventos con jquery click
    //var parrafo = $('#resultado p');
    //$('.btn-primary').click(function(){
    //    parrafo.addClass('display-4');
    //});

    //$('.btn-danger').click(function(){
    //    parrafo.removeClass('display-4');
    //});
    //agrega y quita
    //$('.btn-warning').click(function(){
    //    parrafo.toggleClass('display-4');
    //});

    //evento keyup()
        //Declarar variables reutilizables
        var input = $("#nombre");
        var contenido = $("#contenido_keyup");
      
        //Evento keyup
        input.keyup(function() {
          console.log(input.val()); //verificamos en consola
          contenido.html(input.val()); //agregamos en contenido
      
          //Podemos verificar si está vacio el input
          if (input.val() === "") {
            contenido.html("Estoy esperando...");
          }
        });
      

        //evento submit

        $('#formulario').submit(function(evento){
            evento.preventDefault();
            var nombre = $('#nombre').val();
            console.log(nombre);
        });

        //EFECTOS CON JQUERY
        var resultado = $('#resultadoEfecto');

        $('.btn-primary').click(function(){
           resultado.hide(1000);
        });
    
        $('.btn-danger').click(function(){
            resultado.show(1000);
        });
        //agrega y quita
        $('.btn-warning').click(function(){
            resultado.toggle(1000);
        });
});