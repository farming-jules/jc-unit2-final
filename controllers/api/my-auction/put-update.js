const { body } = require('express-validator')
const { AuctionItem } = require('../../../models')
const { authenticateCurrentUserByToken, getUserAuctionById, checkAuctionValidation, MulterParser } = require('../../_helpers')

const permittedParams = [
  'price',
  'description',
  'title',
  'image'
]

const validation = [
  body('price').toInt().isInt().withMessage('Price must be an integer').notEmpty().withMessage('Price cannot be empty'),
  body('description').isString().withMessage('Description must be a String').notEmpty().withMessage('Description cannot be empty'),
  body('title').isString().withMessage('Title must be a String').notEmpty().withMessage('Title cannot be empty')
]

const apiMyAuctionUpdate = async function(req, res) {
  const { locals: { currentAuction } } = res
  const { body: userParams } = req

  const auction = await currentAuction.update(userParams, { fields: permittedParams })
  if (req.file && req.file.location) {
    await currentAuction.update({ image: req.file.location }, { fields: permittedParams })
  }

  res.status(200).json(auction)
}

module.exports = [authenticateCurrentUserByToken('json'), getUserAuctionById('json'), MulterParser.single('image'), validation, checkAuctionValidation, apiMyAuctionUpdate]