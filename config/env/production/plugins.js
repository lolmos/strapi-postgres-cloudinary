module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
  },
  email: {
    provider: "sendmail",
    providerOptions: {
      dkim: {
        privateKey: env(SENDMAIL_PRIVATE_KEY),
        keySelector: env(KEY_SELECTOR), // the same as the one set in DNS txt record, use online dns lookup tools to be sure that is retreivable
      },
    },
    settings: {
      defaultFrom: "notifications@canicacuadrada.com",
      defaultReplyTo: "notifications@canicacuadrada.com",
    },
  },
});
