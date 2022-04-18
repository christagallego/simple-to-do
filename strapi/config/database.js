module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432 ),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL', false), // For self-signed certificates
        },
      },
      options: {
        useNullAsDefault: true,
        version: '10.1',
        pool: {
          min: 1,
          max: 1
        }
      },
    },
  },
});
