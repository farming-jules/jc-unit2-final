const { AuctionItem } = require('../../../models')
const { authenticateCurrentUserByToken, getUserAuctionById } = require('../../_helpers')

const apiMyAuctionDestroy = async function(req, res) {
  const { locals: { currentAuction } } = res

  await currentAuction.destroy()
  res.status(200).json()
}

module.exports = [authenticateCurrentUserByToken('json'), getUserAuctionById('json'), apiMyAuctionDestroy]