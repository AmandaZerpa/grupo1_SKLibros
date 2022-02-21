const path = require('path');
const { body, check } = require('express-validator');

const productsValidation = [
  body('name').notEmpty().isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres'),
  body ('description').notEmpty().isLength({min:20}).withMessage('La descripción debe tener como mínimo 20 caracteres'),
  body ('genre').notEmpty().withMessage('Debes completar este campo').bail(),
  body('price').notEmpty().isNumeric().withMessage('Este campo debe contener sólo números'),
  body ('discount').notEmpty().isNumeric().withMessage('Este campo debe contener sólo números'),
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



module.exports = productsValidation;