const { AuctionItem } = require('../../../models')

const pagesStaticHome = async function(req, res) {
  const auctionItems = await AuctionItem.findAll({
    where: {
      BuyerId: null
    }
  })

  res.render('pages/static/home', { auctionItems, buyable: true })
}

module.exports = [pagesStaticHome]