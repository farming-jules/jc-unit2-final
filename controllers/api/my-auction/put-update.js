const { body } = require('express-validator')
const { AuctionItem } = require('../../../models')
const { authenticateCurrentUserByToken, checkValidation, MulterParser } = require('../../_helpers')

const permittedParams = [
  'price',
  'product-description',
  'image'
]

const validation = [
  body('price').toInt().isInt().withMessage('Price must be an integer').notEmpty().withMessage('Price cannot be empty'),
  body('product-description').isString().withMessage('Description must be a String').notEmpty().withMessage('It cannot be empty')
]

const checkFileExist = function(req, res, next) {
  const errors = validationResult(req)

  let combinedErrors = { errors: [] }
  if (!errors.isEmpty()) {
    combinedErrors = errors
  }
  
  if (!req.file) {
    combinedErrors.errors.push({
      param: 'image',
      msg: 'Image is Required'
    })
  }
  
  if (combinedErrors.length > 0) return res.status(406).json(combinedErrors)

  next()
}

const apiMyAuctionUpdate = async function(req, res) {
  const { locals: { currentUser } } = res
  const { body: userParams } = req

  const auction = await AuctionItem.create(userParams, { fields: permittedParams })
  if (req.file && req.file.location) {
    await currentUser.update({ avatar: req.file.location }, { fields: permittedParams })
  }

  res.status(200).json(currentUser)
}

// authenticateCurrentUserByToken('json'), 

module.exports = [MulterParser.single('image'), validation, checkValidation, apiMyAuctionUpdate]