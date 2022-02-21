const db = require("../data/models");
const sequelize = db.sequelize;
const {Op} = require("sequelize");
const Productos = db.Producto;


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const mainControllers = {
     //Home
     index: function (req,res){
        let fantasía = db.Productos.findAll({
            where:{
                generos_id:1,
            },
            limit: 4
        })
        let terror = db.Productos.findAll({
            where:{
                generos_id:2,
            },
            limit: 4
        })
        let suspenso = db.Productos.findAll({
            where:{
                generos_id:3,
            },
            limit: 4
        })
        Promise
        .all([fantasía, terror,suspenso])
        .then(([fantasía, terror,suspenso])=>{
            res.render("index", {fantasía, suspenso, terror, toThousand, user: req.session.userLogged })
        })
        .catch(err=>{console.log(err)})
        // const productsFilePath = path.join(__dirname, '../data/products.json');
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        // let terror = products.filter(product=>{
        //     return product.gender == "Terror";
        // })
        // let suspenso = products.filter(product=>{
        //     return product.gender == "Suspenso";
        // })
        // let fantasía = products.filter(product=>{
        //     return product.gender == "Fantasía";
        // })
        // res.render("index", {fantasía, suspenso, terror});
    },
}


module.exports = mainControllers;