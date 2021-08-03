import { compose, EnhancerBuilder } from '@uniformdev/upm';
import { UPM_CONTENTFUL_PARAMETER_TYPES } from '@uniformdev/upm-contentful';
import { UPM_BIGCOMMERCE_PARAMETER_TYPES } from '@uniformdev/upm-bigcommerce';
import { contentfulEnhancer } from './contentfulEnhancer';
import { bigCommerceEnhancer, bigCommerceClient } from './bigCommerceEnhancer';

// @ts-ignore
const sysFieldCleanser = ({ parameter }) => {
  const entry = parameter.value;
  if (entry) {
    return { ...entry.fields };
  }
  return parameter.value;
};

export const enhancers = new EnhancerBuilder()
  .parameterType(UPM_CONTENTFUL_PARAMETER_TYPES, compose(contentfulEnhancer(), sysFieldCleanser))
  .parameterType(UPM_BIGCOMMERCE_PARAMETER_TYPES, bigCommerceEnhancer());

export const buildProductDetailEnhancers = ({
  productId
}: {
  productId: string | undefined
}) => {
  return new EnhancerBuilder()
    .data('product', async () => {
      if (!productId) {
        return undefined;
      }

      const { product } = await bigCommerceClient.getProduct(productId);

      return product;
    });
}