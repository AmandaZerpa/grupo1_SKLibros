window.addEventListener('load', function(){
    let formulario = document.querySelector('#formulario')
    
    formulario.addEventListener('submit', function(e){
        e.preventDefault()
        let nombreReg = document.querySelector('#nombreReg')
        let errorNombre = document.querySelector('.errorNombre')
        if(nombreReg.value == ""){
            errorNombre.innerHTML = '<small class="small-errores">Debes escribir un nombre</small>'
            errorNombre.style.color = 'white'
            errorNombre.style.position = 'absolute'
        } else if(nombreReg.value.length < 5){
            errorNombre.innerHTML = '<small class="small-errores">El nombre debe tener al menos 5 caracteres</small>'
            errorNombre.style.color = 'white'
            errorNombre.style.position = 'absolute'
        }

        let descripcion = document.querySelector('#descripcion')
        let errorDescripcion = document.querySelector('.errorDescripcion')
        if(descripcion.value == ""){
            errorDescripcion.innerHTML = '<small class="small-errores">Debes escribir una descripción</small>'
            errorDescripcion.style.color = 'white'
            errorDescripcion.style.position = 'absolute'
        } else if(descripcion.value.length < 20){
            errorDescripcion.innerHTML = '<small class="small-errores">La descripción debe tener al menos 20 caracteres</small>'
            errorDescripcion.style.color = 'white'
            errorDescripcion.style.position = 'absolute'
        }
        
        let image = document.querySelector('#imageCrEdit')
        let errorImage = document.querySelector('.errorImage')
        if(image.value == ""){
            errorImage.innerHTML = '<small class="small-error-imagen">Debes subir una imagen</small>'
            errorImage.style.color = 'white'
            errorImage.style.position = 'absolute'
        }

        let genre = document.querySelector('#genre')
        let errorGenre = document.querySelector('.errorGenre')
        if(genre.value == ""){
            errorGenre.innerHTML = '<small class="small-errores">Debes elegir un genero</small>'
            errorGenre.style.color = 'white'
            errorGenre.style.position = 'absolute'
        }
        
        let precio = document.querySelector('#precio')
        let errorPrecio = document.querySelector('.errorPrecio')
        if(precio.value == ""){
            errorPrecio.innerHTML = '<small class="small-errores">Debes escribir un precio</small>'
            errorPrecio.style.color = 'white'
            errorPrecio.style.position = 'absolute'
        }

        let descuento = document.querySelector('#descuento')
        let errorDescuento = document.querySelector('.errorDescuento')
        if(descuento.value == ""){
            errorDescuento.innerHTML = '<small class="small-errores">Debes escribir un descuento</small>'
            errorDescuento.style.color = 'white'
            errorDescuento.style.position = 'absolute'
        }

        else {
            formulario.submit();
        }
    })
})