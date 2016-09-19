module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/blog_backup_db',
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    },

}
