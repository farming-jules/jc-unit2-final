const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/pages/static/get-home'))                          // ROOT AUCTION INDEX  GET /
router.get('/my/products', require('../controllers/pages/my-auction/get-products-index')) // MY PRODUCT INDEX    GET /my/auction
router.get('/my/orders', require('../controllers/pages/my-auction/get-orders-index'))     // MY ORDER INDEX      GET /my/auction
router.get('/auction/new', require('../controllers/pages/my-auction/get-new'))           // AUCTION NEW         GET /auction/new
router.get('/auction/:id', require('../controllers/pages/my-auction/get-show'))          // AUCTION SHOW        GET /auction/:id
router.get('/auction/:id/edit', require('../controllers/pages/my-auction/get-edit'))     // AUCTION EDIT        GET /auction/:id/edit


// Error Response
router.use(function (req, res) {
  res.render('not-found', { message: "Sorry! Page does not exist!" })
})

module.exports = router