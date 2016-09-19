var express = require('express')
var router = express.Router()
var users = require('./users')

router.get('/', function(req, res) {
  res.render('index', { title: 'Blog'})
})

router.use('/users', users)

module.exports = router
