//Definición del modelo de quiz

module.export = function(sequelize, DataTypes) {
  return sequelize.define('Quiz',
            { pregunta: DataTypes.String,
              respuesta: DataTypes.String,
	    });
};
