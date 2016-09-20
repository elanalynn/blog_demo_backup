'use strict'

var express = require('express')
var router = express.Router()
var db = require('../db/api')

router.get('/', function(req, res) {
  db.getAllPosts().then(posts => {
    res.render('posts/all', {title: 'Animal Blog: All Posts', posts: posts})
  })
})

router.get('/new', function(req, res) {
  res.send('posts/new')
})

router.get('/:id', function(req, res) {
  db.getOnePost(req.params.id).then(post => {
    console.log('post', post)
    res.render('posts/one', {title: post.title, post: post})
  })
})

router.post('/', function(req, res) {
  db.createOnePost().then(post => {
    console.log('post', post)
    res.redirect('/')
  })
})

router.get('/:id/edit', function(req, res) {
  res.render('/posts/edit')
})

router.put('/:id', function(req, res) {
  db.updateOnePost(req.params.id).then(post => {
    console.log('post', post)
    res.redirect('/')
  })
})

router.delete('/:id', function(req, res) {
  db.deleteOnePost(req.params.id).then(post => {
    console.log('post', post)
    res.redirect('/')
  })
})

module.exports = router
