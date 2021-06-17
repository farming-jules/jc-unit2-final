const { AuctionItem } = require('../../../models')
const { authenticateCurrentUserByToken, MulterParser } = require('../../_helpers')

const apiMyAuctionUpdate = async function(req, res) {
  const { locals: { currentUser } } = res
  const { params: { id } } = req

  const auction = await AuctionItem.findOne({ where: { id: Number(id) || 0 } })
  if (!auction) return res.status(404).json({ message: `Auction with ID: ${id} not found!` })
  if (auction.OwnerId === currentUser.id) return res.status(403).json({ message: 'Cannot buy your own product' })

  await auction.update({ BuyerId: currentUser.id }, { fields: ['BuyerId'] } )
  res.status(200).json()
}

module.exports = [authenticateCurrentUserByToken('json'), MulterParser.none(), apiMyAuctionUpdate]

