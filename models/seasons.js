const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return seasons.init(sequelize, DataTypes);
}

class seasons extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    club: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    info: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nation: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    division: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'seasons',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_seasons",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
