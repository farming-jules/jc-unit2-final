const { body } = require('express-validator')
const { AuctionItem } = require('../../../models')
const { authenticateCurrentUserByToken, checkAuctionValidation, MulterParser } = require('../../_helpers')

const permittedParams = [
  'price',
  'description',
  'image',
  'title'
]

const validation = [
  body('price').toInt().isInt().withMessage('Price must be an integer').notEmpty().withMessage('Price cannot be empty'),
  body('description').isString().withMessage('Description must be a String').notEmpty().withMessage('Description cannot be empty'),
  body('title').isString().withMessage('Title must be a String').notEmpty().withMessage('Title cannot be empty')
]

const apiMyAuctionUpdate = async function(req, res) {
  const { locals: { currentUser } } = res
  const { body: userParams } = req

  const auction = await currentUser.createAuctionItem(userParams, { fields: permittedParams })
  await auction.update({ image: req.file.location }, { fields: permittedParams })

  res.status(200).json(auction)
}

module.exports = [authenticateCurrentUserByToken('json'), MulterParser.single('image'), validation, checkAuctionValidation, apiMyAuctionUpdate]