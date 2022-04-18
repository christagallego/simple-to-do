module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env('STRAPI_URL', '/api'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'aa79e9c76a9b033c129df198403538db'),
    },
  },
});
