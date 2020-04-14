module.exports = {

  development: {
    client: 'pg', 
    connection: {
      database: 'wireframes'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
    
  }

};
