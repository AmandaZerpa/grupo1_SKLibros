const { validationResult }= require('express-validator');
const path = require ('path');
const fs = require ('fs');
const bcryptjs = require ('bcryptjs');
const db = require('../data/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const req = require('express/lib/request');
const Users = db.User;

const userController = {
    login: function(req, res){
        Users.findAll().then(allUsers=>{
            res.render('login',{allUsers, user: req.session.userLogged})
        })
    },
    loginProcess: async (req, res) => {
        let resultadoValidacion = validationResult(req);
        let userToLogin = await db.User.findOne({
            where: {
                email: { [Op.like]: req.body.email }
            }
        })
        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.contrasenia, userToLogin.contraseña);
            if (isOkThePassword) {
                delete userToLogin.contrasenia;
                req.session.userLogged = userToLogin;

                // res.send(userToLogin)
                if (req.body.Recuerdame) {
                    res.cookie('email', req.body.email, { maxAge: 5 * 60 * 1000 }); //probamos otra opcion 'email'
                }

                return res.redirect('profile');
            } else{//si no coincide la contraseña se renderiza la vista de login con error
                if(resultadoValidacion.errors.length > 0){
                        return res.render('login',{
                        errors:resultadoValidacion.mapped(),
                        oldData:req.body,
                        user: req.session.userLogged})
                }else{
                    res.render("login", {
                        titulo: "Ingresá", old: req.body, errors: {
                            email: {
                                msg: "Las credenciales son invalidas"
                            }
                        }
                    })
                }
            }
        } else { //si no se encuentra el mail, volvemos a renderizar la vista de login con mensaje de error
            if(resultadoValidacion.errors.length > 0){
            return res.render('login',{
            errors:resultadoValidacion.mapped(),
            oldData:req.body,
            user: req.session.userLogged})
            }else{
                res.render("login", {
                        titulo: "Ingresá", errors: {
                            email: {
                                msg: "El usuario no se encuentra en la base de datos"
                            }
                        }
                    })
            }
        }
    },
    register: (req, res)=>{
        Users.findAll().then(allUsers=>{
            res.render('register',{allUsers, user: req.session.userLogged})
        }).catch((err)=>{
            res.send(err)
        })
    },
    processRegister: async(req, res)=>{
        let resultadoValidacion = validationResult(req);
        let userInDB = await Users.findOne({
                    where:{
                        email: {[Op.eq]:req.body.email}
                    }
                });
        if(!resultadoValidacion || !userInDB){
            Users.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                contraseña:bcryptjs.hashSync(req.body.contrasenia, 10),
                imagen: req.file.filename,
                categorias_id: req.body.categoria
            }).then(user => {
                    res.redirect('/users/login');
                }).catch((err)=>{
                    res.send(err)
                })
        }else{
            if(userInDB){
                    return res.render('register',{
                        errors:{
                            email:{
                                msg:'Este mail ya está registrado'
                            }
                        },
                        oldData: req.body,
                        user: req.session.userLogged
                    })}else{
                        return res.render('register',{
                            errors:resultadoValidacion.mapped(),
                            oldData:req.body,
                            user: req.session.userLogged})
                    }
        }
    },
    profile: function(req, res){
        Users.findByPk(req.params.id).then(profile => {
                res.render('profile', {
                    user: req.session.userLogged});
            }).catch((err)=>{
                res.send(err)
            })
    },
    logout: (req,res) =>{
        res.clearCookie("email");
        req.session.destroy();
        return res.redirect('/');
    },
}
module.exports = userController;