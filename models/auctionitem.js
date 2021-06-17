'use strict';
const { Model } = require('sequelize');
const AuctionItemSchema = require('./schema/auction_item')

module.exports = (sequelize, DataTypes) => {
  class AuctionItem extends Model {
    static associate(models) {
      AuctionItem.Owner = this.belongsTo(models.User, { as: 'Owner', foreignKey: 'OwnerId' })
      AuctionItem.Buyer = this.belongsTo(models.User, { as: 'Buyer', foreignKey: 'BuyerId' })
    }
  };
  
  const { tableAttributes } = AuctionItemSchema(sequelize, DataTypes)
  AuctionItem.init( tableAttributes, {
    sequelize,
    modelName: 'AuctionItem',
  });
  return AuctionItem;
};