const DB = require("../../data/models");
const {Op} = require("sequelize");

module.exports={
genre: (req,res) =>{
    DB.Generos
    .findAll({
        include: ["productos"]
    }).then(generos => {
        return res.json({
            meta: {
                status : 200,
                url: 'api/genres'
            },
            data : {
            count: generos.length,
            generos: {generos}
            }
        })
    })        
},
}