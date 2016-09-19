var express = require('express')
var router = express.Router()
var db = require('../db/api')

router.get('/', function(req, res) {
  var users = db.getUsers()
  res.render('users', {title: 'View all Users', users: users})
})

router.get('/:id', function(req, res) {
  res.send('respond with a resource')
})

router.post('/', function(req, res) {
  res.send('respond with a resource')
})

router.get('/new', function(req, res) {
  res.send('respond with a resource')
})

router.get('/:id/edit', function(req, res) {
  res.send('respond with a resource')
})

router.put('/', function(req, res) {
  res.send('respond with a resource')
})

router.delete('/:id', function(req, res) {
  res.send('respond with a resource')
})

module.exports = router
