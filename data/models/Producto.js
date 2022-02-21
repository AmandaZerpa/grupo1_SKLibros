module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: dataTypes.STRING ,
            allowNull: false
        } ,
        precio: {
            type: dataTypes.INTEGER ,
            allowNull: false
        } ,
        descuento: {
            type: dataTypes.INTEGER ,
            allowNull: false
        } ,
        imagen:{
            type: dataTypes.STRING ,
            allowNull: false
        } ,
        descripcion: {
            type: dataTypes.STRING ,
            allowNull: false
        },
        generos_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false
    };
    
    const Producto = sequelize.define(alias, cols, config);
    
    Producto.associate = function(modelos){
        Producto.belongsTo(modelos.Generos, {
            as: "generos",
            foreignKey: "generos_id",
            
           
        })
        Producto.belongsToMany(modelos.ProductosCarrito, {
            as: "productos",
            through: "productoCarrito",
            foreignKey: "producto_id",
            otherKey: 'carrito_id',
           timestamps: false 
        })
    }

    return Producto;
}