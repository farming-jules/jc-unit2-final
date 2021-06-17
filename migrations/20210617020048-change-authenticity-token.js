'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('AuctionItems', 'UserId', 'OwnerId')
    await queryInterface.addColumn('AuctionItems', 'BuyerId', {
      type: Sequelize.INTEGER
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('AuctionItems', 'OwnerId', 'UserId')
    await queryInterface.removeColumn('AuctionItems', 'BuyerId')
  }
};
