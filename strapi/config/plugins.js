module.exports = ({ env }) => ({
  // ...
  // email: {
  //   provider: 'mailgun',
  //   providerOptions: {
  //     apiKey: env('MAILGUN_API_KEY'),
  //     domain: env('MAILGUN_DOMAIN'), //Required if you have an account with multiple domains
  //     host: env('MAILGUN_HOST', 'api.mailgun.net'), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
  //   },
  //   settings: {
  //     defaultFrom: 'noreply@m.exclnetworks.com',
  //     defaultReplyTo: 'support@exclnetworks.com',
  //   },
  // },
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      serviceAccount: env.json('GCS_SERVICE_ACCOUNT'),
      bucketName: env('GCS_BUCKET_NAME'),
      basePath: env('GCS_BASE_PATH') || "/",
      baseUrl: env('GCS_BASE_URL') || "https://" + env('GCS_BUCKET_NAME'),
      publicFiles: env('GCS_PUBLIC_FILES') || "true",
      uniform: env('GCS_UNIFORM') || "true",
    },
  },
  // ...
});
