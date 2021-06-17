const { authenticateCurrentUserByToken } = require('../../_helpers')

const apiAuctionUpdate = async function(req, res) {
  res.render('pages/my-auction/new')
}

module.exports = [authenticateCurrentUserByToken('html'), apiAuctionUpdate]