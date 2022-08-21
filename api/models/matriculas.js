'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      matriculas.belongsTo(models.pessoas{
        foreignKey: 'estudante_id'
      })
      matriculas.belongsTo(models.turmas,{
        foreignKey: 'turma_id'
      })
    }
  }
  matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'matriculas',
  });
  return matriculas;
};