import getConfig from 'next/config';
import { createClient } from 'contentful';

const { serverRuntimeConfig } = getConfig();
const { contentfulSpaceId, contentfulDeliveryToken, contentfulPreviewToken } = serverRuntimeConfig;

if (!contentfulSpaceId) {
  throw new Error('CONTENTFUL_SPACE_ID env not set.');
}

if (!contentfulDeliveryToken) {
  throw new Error('CONTENTFUL_CDA_ACCESS_TOKEN env not set.');
}

if (!contentfulPreviewToken) {
  throw new Error('CONTENTFUL_CDA_ACCESS_TOKEN env not set.');
}

const contentfulEnvironment = process.env.CONTENTFUL_ENVIRONMENT ?? 'master';

export const getClient = () => {
  const client = createClient({
    space: contentfulSpaceId,
    environment: contentfulEnvironment,
    accessToken: contentfulDeliveryToken,
  });

  // TODO: check if preview
  const previewClient = createClient({
    space: contentfulSpaceId,
    environment: contentfulEnvironment,
    accessToken: contentfulPreviewToken,
    host: 'preview.contentful.com',
  });

  return client;
};

export default getClient;
