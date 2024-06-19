const submitFunction = (event) => {
    if (!validarFormulario()) {
        event.preventDefault(); //si validar formulario es false muestra los errores
    } else {
        event.preventDefault() //si no es false da un alert
       
        alert (
                'Los datos enviados fueron : \n' 
             //   'Nombre: ' + document.getElementById('nombre').value + '\n' +
              //  'Apellido: ' + document.getElementById('apellido').value + '\n' +
              //  'Documento: ' + document.getElementById('documento').value + '\n' +
              //  'Email: ' + document.getElementById('email').value + '\n' +
              //  'Edad: ' + document.getElementById('edad').value + '\n' +
             //   'Actividad: ' + document.getElementById('actividad').value + '\n' +
              //  'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
        }
}

document.getElementById('formulario').addEventListener('submit', submitFunction) // Escucha el envio del formulario


function validarFormulario() {
    let camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    //Validación de campos de texto
    camposTexto.forEach(campo => {
        // error + id con la primera letra en mayuscula
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido!')
            validacionCorrecta = false;
        } else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres')
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo)
        }
    })

    // Validación de email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ //este reget valida que el mail sea válido
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'Ingrese un Email válido!!')  
    }

    // Validación de edad
    if (edad.value < 18){
        mostrarError(errorEdad, 'Debes ser mayor de 18 para registrarte!')
        validacionCorrecta = false
    }else {
        ocultarError(errorEdad)
    }  

    //Validar la actividad
    const actividad = document.getElementById('actividad')
    const errorActividad = document.getElementById('errorActividad')
    if (actividad.value == ''){
        mostrarError(errorActividad, 'Por favor seleccione una actividad')
        validacionCorrecta = false;
    }else{ 
        ocultarError(errorActividad) 
    }

    //Validar la nivel de estudios
    const nivelEstudios = document.getElementById('nivelEstudio')
    const errorNivelEstudios = document.getElementById('errorNivelEstudio')
    if (nivelEstudios.value == ''){
        mostrarError(errorNivelEstudios, 'Por favor seleccione nivel de estudios')
        validacionCorrecta = false;
    }else{ 
        ocultarError(errorNivelEstudios) 
    }

    //Validar términos y condiciones
    const  aceptoTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')
    if (!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, 'Debes aceptar terminos y condiciones!')
        validacionCorrecta = false;
    } else { 
        ocultarError(errorAceptoTerminos)
    }

return validacionCorrecta // esto dirá si el formulario es o no correcto
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block"
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none"
}