'use strict'

var knex = require ('./knex')

module.exports = {
  getAllUsers(){
    return knex('users')
  },
  getOneUser(id){
    return knex('users').where('users.id', id.toString()).first()
  },
  createOneUser(){

  },
  updateOneUser(){

  },
  deleteOneUser(){

  },
  getAllPosts(){
    return knex('posts')
      .join('users', 'posts.user_id', 'users.id')
      .select('posts.id as postId', 'users.id as userId', 'users.image_url as userImage', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody', 'posts.image_url as postImage')
  },
  getOnePost(id){
    return knex('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select('posts.id as postId', 'users.id as userId', 'users.image_url as userImage', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody', 'posts.image_url as postImage')
    .where('posts.id', id.toString()).first()
  },
  createOnePost(){

  },
  updateOnePost(){

  },
  deleteOnePost(){

  },
  getCommentsByPostId(){
    return knex('posts')
      .join('posts_users', 'posts.id', 'posts_users.post_id')
      .select('posts.id as postId', 'users.id as userId', 'users.image_url as userImage', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody', 'posts.image_url as postImage')

  },
}
