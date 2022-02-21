window.addEventListener('load', function(){
    let formulario = document.querySelector('#editp-form')
    
    formulario.addEventListener('submit', function(e){
        e.preventDefault()
        let nombreReg = document.querySelector('#editp-nombre')
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

        let descripcionEdit = document.querySelector('#editp-descripcion')
        let errorDescripcion = document.querySelector('.errorDescripcion')
        if(descripcionEdit.value == ""){
            errorDescripcion.innerHTML = '<small class="small-errores">Debes escribir una descripción</small>'
            errorDescripcion.style.color = 'white'
            errorDescripcion.style.position = 'absolute'
        } else if(descripcionEdit.value.length < 20){
            errorDescripcion.innerHTML = '<small class="small-errores">La descripción debe tener al menos 20 caracteres</small>'
            errorDescripcion.style.color = 'white'
            errorDescripcion.style.position = 'absolute'
        }
        
        let imageEdit = document.querySelector('#imageCrEdit')
        let errorImage = document.querySelector('.errorImage')
        if(imageEdit.value == ""){
            errorImage.innerHTML = '<small class="small-error-imagen">Debes subir una imagen</small>'
            errorImage.style.color = 'white'
            errorImage.style.position = 'absolute'
        }

        let genreEdit = document.querySelector('#editp-genre')
        let errorGenre = document.querySelector('.errorGenre')
        if(genreEdit.value == ""){
            errorGenre.innerHTML = '<small class="small-errores">Debes elegir un genero</small>'
            errorGenre.style.color = 'white'
            errorGenre.style.position = 'absolute'
        }
        
        let precioEdit = document.querySelector('#editp-precio')
        let errorPrecio = document.querySelector('.errorPrecio')
        if(precioEdit.value == ""){
            errorPrecio.innerHTML = '<small class="small-errores">Debes escribir un precio</small>'
            errorPrecio.style.color = 'white'
            errorPrecio.style.position = 'absolute'
        }

        let descuentoEdit = document.querySelector('#editp-descuento')
        let errorDescuento = document.querySelector('.errorDescuento')
        if(descuentoEdit.value == ""){
            errorDescuento.innerHTML = '<small class="small-errores">Debes escribir un descuento</small>'
            errorDescuento.style.color = 'white'
            errorDescuento.style.position = 'absolute'
        }

        else {
            formulario.submit();
        }
    })
})