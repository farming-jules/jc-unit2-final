const { Router } = require('express')
const router = Router()

router.post('/auth/signup', require('../controllers/api/auth/post-signup'))                   // SIGNUP POST    /api/auth/signup
router.post('/auth/login', require('../controllers/api/auth/post-login'))                     // LOGIN  GET     /api/auth/login
router.delete('/auth/logout', require('../controllers/api/auth/delete-logout'))               // LOGOUT DELETE  /api/auth/logout

router.post('/my/auction', require('../controllers/api/my-auction/post-create'))              // CREATE  POST    /api/my/auction
router.put('/my/auction/:id', require('../controllers/api/my-auction/put-update'))            // UPDATE  PUT     /api/my/auction/:id
router.delete('/my/auction/:id', require('../controllers/api/my-auction/delete-destroy'))     // DESTROY DELETE  /api/my/auction/:id
router.put('/my/auction/:id/buy', require('../controllers/api/my-auction/put-buy'))           // BUY     PUT     /api/my/auction/:id/buy

// Error Response
router.use(function (req, res) {
  res.status(404).json({ message: "Sorry! API does not exist!" })
})

module.exports = router