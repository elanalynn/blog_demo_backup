
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').del(),
    knex('posts').del(),
    knex('comments').del(),
    knex('posts_users').del(),
    knex('comments_posts').del(),
    knex('comments_users').del(),
  ]).then(function () {
    console.log('Seeds cleared.')
  })
}
