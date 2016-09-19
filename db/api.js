var knex = require ('./knex')

module.exports = {
  users: function(){
    return knex('user')
  },
}
