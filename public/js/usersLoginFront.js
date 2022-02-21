window.addEventListener('load', function(){
    let formulario = document.querySelector('#log-form')
    
    formulario.addEventListener('submit', function(e){
        e.preventDefault()

        const emailLog = document.getElementById("log-email")
        let errorEmail = document.querySelector('.errorEmail')
        if(emailLog.value == ""){
            errorEmail.innerHTML = '<small>Debes colocar un email</small>'
            errorEmail.style.color = 'white'
        }

        let passwordLog = document.getElementById("password-Log")
        let erPassword= document.querySelector(".erPassword")
        if(passwordLog.value == ""){
            erPassword.innerHTML = '<small>Debes colocar una contraseña</small>'
            erPassword.style.color = 'white'
        }

        else {
            formulario.submit();
        }
    })
})