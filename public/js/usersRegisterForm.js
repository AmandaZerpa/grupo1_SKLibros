window.addEventListener('load', function(){
    let formulario = document.querySelector('#reg-form')
    
    formulario.addEventListener('submit', function(e){
        e.preventDefault()
        let nombreReg = document.querySelector('#reg-nombre')
        let errorNombre = document.querySelector('.errorNombre')
        if(nombreReg.value == ""){
            errorNombre.innerHTML = '<small>Debes colocar un nombre</small>'
        }

        let apellidoReg = document.querySelector('#reg-apellido')
        let errorApellido = document.querySelector('.errorApellido')
        if(apellidoReg.value == ""){
            errorApellido.innerHTML = '<small>Debes colocar un apellido</small>'
        }

        let emailReg = document.querySelector('#reg-email')
        let errorEmail = document.querySelector('.errorEmail')
        if(emailReg.value == ""){
            errorEmail.innerHTML = '<small>Debes colocar un email</small>'
        }

        let passwordReg = document.querySelector('#reg-password')
        let errorPassword = document.querySelector('.errorPassword')
        if(passwordReg.value == ""){
            errorPassword.innerHTML = '<small>Debes colocar una contraseña</small>'
        }

        let imageReg = document.querySelector('.reg-image')
        let errorImage = document.querySelector('.errorImage')
        if(imageReg.value == ""){
            errorImage.innerHTML = '<small>Debes subir una imagen</small>'
        }

        // let categoriaReg = document.querySelectorAll('option')
        // let errorCategoria = document.querySelector('.errorCategoria')
        // if(categoriaReg.value == 0){
        //     errorCategoria.innerHTML = '<small>Debes seleccionar una categoria</small>'
        // }

        else {
            formulario.submit();
        }
    })
})