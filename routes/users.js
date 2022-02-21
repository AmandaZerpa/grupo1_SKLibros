const express = require('express');
const userRouter = express.Router();
const { body } = require('express-validator');
const multer = require ('multer');
const path = require ('path');
const fs = require ('fs');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');
const usersValidation = require('../middlewares/usersValidation');
// ************ Multer ************ 
const storage = multer.diskStorage({
    destination: (req,file, callback)=>{
        callback(null, path.join(__dirname,'../public/img/users'))
    },
    filename: (req,file, callback)=>{
        callback(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

// const validation = [
//     body('nombre').notEmpty().withMessage('Debes completar este campo'),
//     body ('apellido').notEmpty().withMessage('Debes completar este campo'),
//     body ('email').notEmpty().withMessage('Debes completar este campo').bail()
//     .isEmail().withMessage('Ingrese e-mail válido'),
//     body('contrasenia').notEmpty().withMessage('Debes completar este campo').bail()
//     .isLength({min:5}).withMessage('La contraseña debe tener como mínimo 5 caracteres'),
//     body('image').custom((value, {req})=>{
//         const file = req.file
//          let acceptedExtensions =['.jpg','.jpeg','.png','.gif']
        
//         if(!file){
//          throw new Error('Tienes que subir una imagen');

//         }else{
//              let fileExtension = path.extname(file.originalname);
//              if(!acceptedExtensions.includes(fileExtension)) {
//              throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ') }`);
//             }
 
//           }
//         return true
//        }

//    )
// ]
const userController= require("../controllers/userController");

/* GET login page. */
userRouter.get('/login', guestMiddleware, usersValidation, userController.login);

/* Process Login  */
userRouter.post('/login',usersValidation, userController.loginProcess);


/* get register page*/
userRouter.get('/register',guestMiddleware,usersValidation, userController.register);

// Validacion de registro
userRouter.post('/register', upload.single('image'),usersValidation, userController.processRegister);

// Perfil de usuario
userRouter.get('/profile/', authMiddleware, userController.profile);

// Logout
userRouter.get('/logout/', userController.logout);



module.exports = userRouter;
