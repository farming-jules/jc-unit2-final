const { authenticateCurrentUserByToken, getUserAuctionById } = require('../../_helpers')

const apiAuctionUpdate = async function(req, res) {
  res.render('pages/my-auction/edit')
}

module.exports = [authenticateCurrentUserByToken('html'), getUserAuctionById('html'), apiAuctionUpdate]
