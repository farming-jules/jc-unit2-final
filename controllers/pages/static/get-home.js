const { AuctionItem } = require('../../../models')

const pagesStaticHome = async function(req, res) {
  const auctionItems = await AuctionItem.findAll()

  res.render('pages/static/home', { auctionItems })
}

module.exports = [pagesStaticHome]