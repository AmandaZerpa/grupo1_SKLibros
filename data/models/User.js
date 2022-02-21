module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING,
        },
        contraseña: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        categorias_id: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)

    User.associate = models => {
        User.hasMany(models.CarritoCompras, {
            as: 'carrito_de_compras',
            foreignKey:'usuario_id'})
        
        User.belongsTo(models.UsuariosCategoria,{
            as: 'usuarios_categoria',
            foreignKey: 'categorias_id',
        })
    }

    return User
}