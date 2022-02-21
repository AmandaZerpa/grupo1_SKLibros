const DB = require("../../data/models");
const {Op} = require("sequelize");


module.exports = { 
    list: (req,res) => {
        DB.User
        .findAll().then(usuarios => {
            return res.json({
                meta: {
                    status : 200,
                    url: 'api/users'
                },
                data : {
                count: usuarios.length,
                usuarios: {usuarios}
                }
            })
        })
    },
    detail: (req,res) => {
        DB.User
        .findByPk(req.params.id).then(usuarios => {
            return res.json({
                meta: {
                    status : 200,
                    url: 'api/users/:id'
                },
                usuarios: {
                    id: usuarios.id,
                    nombre: usuarios.nombre,
                    apellido: usuarios.apellido,
                    email: usuarios.email,
                    imagen: usuarios.imagen, 
                }
            })
        })
    }, 
}
