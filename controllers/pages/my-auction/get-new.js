const { authenticateCurrentUserByToken } = require('../../_helpers')
const { AuctionItem } = require('../../../models')


const pagesMyAuction = async function(req, res) {
  const auction = await AuctionItem.build({ AuctionItems: [] })
  auction.push(await AuctionItem.build())

  res.render('pages/my-auction/new', { field: param })
}

module.exports = [authenticateCurrentUserByToken('html'), pagesMyAuction]