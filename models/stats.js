const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return stats.init(sequelize, DataTypes);
}

class stats extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    season_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'seasons',
        key: 'id'
      }
    },
    match_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    starts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goals: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pens_taken: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pens_scored: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    assists: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    yellow_cards: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    red_cards: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tackles_won: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    pass_completion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dribbles_made: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    shots_target: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fouls: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fouls_against: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    average_rating: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    conceded: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clean_sheets: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    conceded_rate: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stats',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_stats",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
