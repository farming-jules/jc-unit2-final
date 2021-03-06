const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AuctionItem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OwnerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BuyerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AuctionItems',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "AuctionItems_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
