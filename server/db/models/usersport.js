'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User,{foreignKey:'userId'});
      this.belongsTo(models.Sport, { foreignKey: 'sportId' });
    }
  }
  UserSport.init({
    userId: DataTypes.INTEGER,
    sportId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserSport',
  });
  return UserSport;
};
