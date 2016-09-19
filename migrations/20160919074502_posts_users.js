exports.up = function(knex) {
  return knex.schema.createTable('posts_users', function(table){
    table.increments()
    table.string('post_id').unsigned().references('id').inTable('posts')
    table.string('user_id').unsigned().references('id').inTable('users')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('posts_users')
}
