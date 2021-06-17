const { authenticateCurrentUserByToken } = require('../../_helpers')

const pagesStaticHome = async function(req, res) {
  const { currentUser } = res.locals
  const products = await currentUser.getProducts()

  res.render('pages/static/home', { auctionItems: products, buyable: false })
}

module.exports = [authenticateCurrentUserByToken('html'), pagesStaticHome]