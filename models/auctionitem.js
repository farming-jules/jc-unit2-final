'use strict';
const { Model } = require('sequelize');
const AuctionItemSchema = require('./schema/auction_item')

module.exports = (sequelize, DataTypes) => {
  class AuctionItem extends Model {
    static associate(models) {
      AuctionItem.User = this.belongsTo(models.User)
    }
  };
  
  const { tableAttributes } = AuctionItemSchema(sequelize, DataTypes)
  AuctionItem.init( tableAttributes, {
    sequelize,
    modelName: 'AuctionItem',
  });
  return AuctionItem;
};