module.exports = (sequelize, dataTypes) => {
    let alias = "UsuariosCategoria";
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
        },
    };
    let config = {
        tableName: "usuarios_categoria",
        timestamps: false
    };
    
    const UsuariosCategorias= sequelize.define(alias, cols, config);
    
    UsuariosCategorias.associate = function(models) {
        UsuariosCategorias.hasMany(models.User, { 
            as: "usuarios", 
            foreignKey: "categorias_id"
        })
    }
    
    return UsuariosCategorias;
}