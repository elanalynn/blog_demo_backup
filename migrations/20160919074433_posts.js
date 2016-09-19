exports.up = function(knex) {
  return knex.schema.createTable('posts', function(table){
    table.increments()
    table.string('title')
    table.string('body')
    table.string('image_url')
    table.timestamps()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('posts')
}
