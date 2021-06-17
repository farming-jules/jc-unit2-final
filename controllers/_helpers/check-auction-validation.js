const { validationResult } = require('express-validator')

module.exports = function(req, res, next) {
  const { currentAuction } = res.locals
  const errors = validationResult(req)

  let combinedErrors = { errors: [] }
  if (!errors.isEmpty()) {
    console.log('field errors')
    combinedErrors = errors
  }

  const auctionImage = currentAuction && currentAuction.image
  if (!req.file && !auctionImage) {
    console.log('image errors')
    combinedErrors.errors.push({
      param: 'image',
      msg: 'Image is Required'
    })
  }
  
  if (combinedErrors.errors.length > 0) return res.status(406).json(combinedErrors)

  next()
}