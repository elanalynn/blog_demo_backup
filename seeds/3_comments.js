
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('comments').insert({id: 1, colName: 'rowValue1'}),
    knex('comments').insert({id: 2, colName: 'rowValue2'}),
    knex('comments').insert({id: 3, colName: 'rowValue3'}),
  ])
}
