const path = require('path');
const { body, check } = require('express-validator');


const usersValidation = [
    body('nombre').notEmpty().isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    body ('apellido').notEmpty().isLength({min:2}).withMessage('El apellido debe tener al menos 2 caracteres'),
    body ('email').notEmpty().isEmail().withMessage('Ingrese e-mail válido'),
    body('contrasenia').notEmpty().isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail().isStrongPassword().withMessage('La contraseña debe tener al menos 1 número, 1 letra minúscula, 1 letra mayúscula y 1 caracter especial'),
    body('image').custom((value, {req})=>{
        const file = req.file
         let acceptedExtensions =['.jpg','.jpeg','.png','.gif']
        
        if(!file){
         throw new Error('Tienes que subir una imagen');

        }else{
             let fileExtension = path.extname(file.originalname);
             if(!acceptedExtensions.includes(fileExtension)) {
             throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ') }`);
            }
 
          }
        return true
       }

   )
]
module.exports = usersValidation;