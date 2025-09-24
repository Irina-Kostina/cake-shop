const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './server/db/migrations',
    },
    seeds: {
      directory: './server/db/seeds',
    },
  },
}

export default config
