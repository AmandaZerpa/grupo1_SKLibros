module.exports = (sequelize, dataTypes) => {
    let alias = "Generos";
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
        tableName: "generos",
        timestamps: false
    };
    
    const Genero = sequelize.define(alias, cols, config);
    
    Genero.associate = function(models) {
        Genero.hasMany(models.Productos, { 
            as: "productos", 
            foreignKey: "generos_id"
        })
    }
    
    return Genero;
}
