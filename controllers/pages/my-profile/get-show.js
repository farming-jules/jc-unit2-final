const { authenticateCurrentUserByToken } = require('../../_helpers')

const pagesMyProfileShow = function(req, res) {
  res.render('pages/my-profile/show')
}

module.exports = [authenticateCurrentUserByToken('html'), pagesMyProfileShow]