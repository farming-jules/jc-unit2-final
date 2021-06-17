const { AuctionItem } = require('../../../models')

const pagesMyAuctionShow = async function(req, res) {
  const { params: { id } } = req
  const auction = await AuctionItem.findOne({
    where: {
      id: Number(id) || 0
    },
    include: AuctionItem.Owner
  })

  res.render('pages/my-auction/show', { auction })
}
  
module.exports = [pagesMyAuctionShow]
  