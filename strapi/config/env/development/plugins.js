module.exports = ({ env }) => ({
  // ...
  // email: {
  //   provider: 'smtp',
  //   providerOptions: {
  //     host: env('SMTP_HOST'), //SMTP Host
  //     port: env('SMTP_PORT', '25'), //SMTP Port
  //     secure: env.bool('SMTP_SECURE', false),
  //     username: env('SMTP_USERNAME'),
  //     password: env('SMTP_PASSWORD'),
  //     rejectUnauthorized: true,
  //     requireTLS: env.bool('SMTP_TLS', false),
  //     connectionTimeout: 1,
  //   },
  //   settings: {
  //     from: env('SMTP_FROM'),
  //     replyTo: env('SMTP_REPLY_TO'),
  //   },
  // },
  upload: {
    "provider": "local",
    "providerOptions": {
      "sizeLimit": 100000
    }
  },
  // ...
});
