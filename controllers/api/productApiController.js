const DB = require("../../data/models");
const {Op} = require("sequelize");
const Sequelize = DB.sequelize;
const path = require("path")

module.exports = { 
    list: (req,res) => {
        DB.Productos
        .findAll({
            include: ["generos"]
        }).then(productos => {
            return res.json({
                meta: {
                    status : 200,
                    url: 'api/products'
                },
                data : {
                count: productos.length,
                // countByCategory: productos.generos.name,
                productos: {productos}
            }})
        })
    
    },

    detail: (req,res) => {
        DB.Productos
        .findByPk(req.params.id, {include :["generos"]})
        .then(productos => {
            return res.json({
                meta: {
                    status : 200,
                    url: 'api/products/detalle/:id'
                },
                data : { productos }
            })
        })
    },  
   
  
    lastProduct: (req,res)=>{
        DB.Productos
        .findAll({ 
            order: [
                ['id', 'DESC']
            ],
            limit: 1,
        })
        .then(producto => {
            return res.json({
                meta: {
                    status : 200,
                    url: '/api/products/last'
                },
                data:{ producto }
            })
        })
        .catch(err => console.log(err))
    },
    getImageProduct: (req,res)=>{
        console.log(req.params.id)
        return res.sendFile(path.join(__dirname, `../../public/img/products/${req.params.id}`))
    }

}
