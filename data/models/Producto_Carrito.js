module.exports = (sequelize, dataTypes) => {
    let alias = "ProductosCarrito";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        producto: {
            type: dataTypes.STRING ,
            allowNull: false
        } ,
        // productos_id: {
        //     type: dataTypes.INTEGER ,
        //     allowNull: false
        // } ,
        // carrito_id: {
        //     type: dataTypes.INTEGER ,
        //     allowNull: false
        // } ,
    };
    let config = {
        tableName: "productos_carrito",
        timestamps: false
    };
    
    const ProductoCarrito= sequelize.define(alias, cols, config);


    // ProductoCarrito.associate = function(models) {
    //     ProductoCarrito.belongsToMany(models.Productos, { 
    //         as: "productos", 
    //         through:"productos_carrito",  
    //         foreignKey: "carrito_id",
    //         otherKey:"productos_id",
    //         timestamps:false 
    //     }),
    //     ProductoCarrito.belongsTo(models.CarritoCompras, { 
    //             as: "carrito_de_compras", 
    //             foreignKey: "carrito_id"
    //         })
    //     }
    

    
    return ProductoCarrito;
}