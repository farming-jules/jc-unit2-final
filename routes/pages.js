const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/pages/static/get-home'))                            // ROOT   GET /

router.get('/auth/signup', require('../controllers/pages/auth/get-signup'))                 // SIGNUP GET /signup
router.get('/auth/login', require('../controllers/pages/auth/get-login'))                   // LOGIN  GET /login

router.get('/my/profile', require('../controllers/pages/my-profile/get-show'))           // SHOW   GET /my/profile

// Error Response
router.use(function (req, res) {
  res.render('not-found', { message: "Sorry! Page does not exist!" })
})

module.exports = router