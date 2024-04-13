$("#contacto").validate({
    rules:{
        inputNombre: {
            required: true,
            minlength: 3,
            maxlength: 30 
        },
        inputApellido:{
            required: true,
            minlength: 3,
            maxlength: 30
        },
        inputEmail:{
            required: true,
            email: true
        },
        inputMensaje: {
            required: true,
            minlength: 5,
            maxlength: 30
        }
        
    }
})


$("#btn-enviar").click(function(){
    let nombre = $("#inputNombre").val();
    let apellido = $("#inputApellido").val();
    let email = $("#inputEmail").val();
    let mensaje = $("#inputMensaje").val();

    
})