const { AuctionItem } = require('../../models')

module.exports = function (format) {
  return async function(req, res, next) {
    const { currentUser } = res.locals
    const { id } = req.params

    const auction = await AuctionItem.findOne({
      where: {
        id: Number(id) || 0,
        OwnerId: currentUser.id
      }
    })

    if (!auction) {
      if (format === 'json') return res.status(404).json({ message: `Auction with ID: ${id} not found!` })
      if (format === 'html') return res.render('not-found', { message: `Auction with ID: ${id} not found!` })
    }

    res.locals.currentAuction = auction

    next()
  }
}