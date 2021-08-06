module.exports = {
  serverRuntimeConfig: {
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET,
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulEnvironment: process.env.CONTENTFUL_ENVIRONMENT,
    contentfulPreviewToken: process.env.CONTENTFUL_CPA_ACCESS_TOKEN,
    contentfulDeliveryToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN,
    presentationApiHost: process.env.UNIFORM_PRESENTATION_API_HOST,
    presentationApiToken: process.env.UNIFORM_PRESENTATION_API_TOKEN,
    presentationProjectId: process.env.UNIFORM_PRESENTATION_PROJECT_ID,
    bigCommerceStoreHash: process.env.BIGCOMMERCE_STORE_HASH,
    bigCommerceToken: process.env.BIGCOMMERCE_TOKEN,
  },
  publicRuntimeConfig: {
    gaTrackingId: process.env.GA_UA_ID,
  },
  target: 'serverless',
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  images: {
    loader: "cloudinary",
    path: "https://images.ctfassets.net",
    domains: ['images.ctfassets.net'],
  },
};
