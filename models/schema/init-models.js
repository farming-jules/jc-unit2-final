var DataTypes = require("sequelize").DataTypes;
var _AuctionItem = require("./auction_item");
var _AuthenticityToken = require("./authenticity_token");
var _SequelizeMetum = require("./sequelize_metum");
var _User = require("./user");

function initModels(sequelize) {
  var AuctionItem = _AuctionItem(sequelize, DataTypes);
  var AuthenticityToken = _AuthenticityToken(sequelize, DataTypes);
  var SequelizeMetum = _SequelizeMetum(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);


  return {
    AuctionItem,
    AuthenticityToken,
    SequelizeMetum,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
