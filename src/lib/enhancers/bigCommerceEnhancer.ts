import getConfig from 'next/config';
import { BigCommerceClient, createBigCommerceClient, createBigCommerceEnhancer } from '@uniformdev/upm-bigcommerce';

const { serverRuntimeConfig } = getConfig();
const { bigCommerceStoreHash, bigCommerceToken } = serverRuntimeConfig;

export const bigCommerceClient: BigCommerceClient = createBigCommerceClient({
  storeHash: bigCommerceStoreHash,
  token: bigCommerceToken,
})

export type BigCommerceEnhancerOptions = {
  productId?: string
}

export const bigCommerceEnhancer = (options?: BigCommerceEnhancerOptions) =>
  createBigCommerceEnhancer({
    client: bigCommerceClient,
    createProductOptions: () => {
      return {
        include_fields: ['id', 'name', 'price', 'description'],
      };
    },
    createProductQueryOptions: () => {
      return {
        include_fields: ['id', 'name', 'price', 'description'],
      };
    },
  });
