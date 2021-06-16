const { Op } = require("sequelize")

const { authenticateCurrentUserByToken } = require('../../_helpers')
const { AuctionItem } = require('../../../models')

const pagesMyAuctionItemsIndex = async function(req, res) {
  const { locals: { currentUser } } = res
  const { query } = req

  const q = query.q || ''
  const page = Number(query.page) || 1
  const limit = 10
  const offset = (page - 1) * limit
  const results = await AuctionItem.findAndCountAll({
    where: {
      title: {
        [Op.iLike]: `%${q}%`
      },
      UserId: currentUser.id
    },
    order: [['createdAt', 'DESC']],
    limit,
    offset
  })
  res.render('pages/my-auction/product-index', {
    products: results.rows,
    filters: { q, page, limit, offset, totalPages: Math.ceil(results.count / limit) }
  })
}

module.exports = [authenticateCurrentUserByToken('html'), pagesMyAuctionItemsIndex]