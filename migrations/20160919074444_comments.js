exports.up = function(knex) {
  return knex.schema.createTable('comments', function(table){
    table.increments()
    table.string('body')
    table.timestamps()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('comments')
}
