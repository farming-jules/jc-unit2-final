const { authenticateCurrentUserByToken } = require('../../_helpers')

const pagesMyAuctionShow = function(req, res) {
  res.render('pages/my-auction/show')
}

module.exports = [authenticateCurrentUserByToken('html'), pagesMyAuctionShow]