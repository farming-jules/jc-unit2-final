const { authenticateCurrentUserByToken } = require('../../_helpers')

const pagesStaticHome = async function(req, res) {
  const { currentUser } = res.locals
  const orders = await currentUser.getOrders()

  res.render('pages/static/home', { auctionItems: orders, buyable: false })
}

module.exports = [authenticateCurrentUserByToken('html'), pagesStaticHome]