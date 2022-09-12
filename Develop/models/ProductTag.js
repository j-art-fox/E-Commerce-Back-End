const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    id:
    {
      types: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autIncrement: true,
    },
    product_id:
    {
      types: DataTypes.INTEGER,
      reference: {
        model: "tag",
        key: "id"
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
