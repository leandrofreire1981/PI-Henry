const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID, //numero aleatorio de letras y numeros unico
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    instructions: { // instrucciones paso a paso
      type: DataTypes.ARRAY(DataTypes.JSONB)
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: 'https://blogdigital.es/wp-content/uploads/2015/09/imagen-no-encontrada.jpg'
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  },
    {
      timestamps: false
    }
  );
};
