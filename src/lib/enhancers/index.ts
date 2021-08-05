import { ComponentParameterEnhancer, compose, EnhancerBuilder } from '@uniformdev/upm';
import { UPM_CONTENTFUL_PARAMETER_TYPES } from '@uniformdev/upm-contentful';
import {
  GetProductsOptions,
  parameterIsBigCommerceProductQuery,
  UPM_BIGCOMMERCE_PARAMETER_TYPES,
} from '@uniformdev/upm-bigcommerce';
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

const createBigCommerceContextQueryEnhancer = ({
  productId,
}: {
  productId: string;
}): ComponentParameterEnhancer<
  string | GetProductsOptions | string[],
  string | GetProductsOptions | string[]
> => {
  return {
    enhanceOne: async (options) => {
      const { parameter } = options;

      let processedValue = parameter.value;

      if (parameterIsBigCommerceProductQuery(parameter)) {
        const { product } = await bigCommerceClient.getProduct(productId);

        processedValue = {
          ...parameter.value,
          brand: product?.brand_id?.toString() || undefined,
        };
      }

      return processedValue;
    },
  };
};

export const enhancers = new EnhancerBuilder()
  .parameterType(UPM_CONTENTFUL_PARAMETER_TYPES, compose(contentfulEnhancer(), sysFieldCleanser))
  .parameterType(UPM_BIGCOMMERCE_PARAMETER_TYPES, bigCommerceEnhancer());

export const buildProductDetailEnhancers = ({ productId }: { productId: string | undefined }) => {
  return new EnhancerBuilder()
    .data('product', async () => {
      if (!productId) {
        return undefined;
      }

      const { product } = await bigCommerceClient.getProduct(productId);

      return product;
    })
    .parameterType(
      UPM_BIGCOMMERCE_PARAMETER_TYPES,
      compose(createBigCommerceContextQueryEnhancer({ productId: productId! }), bigCommerceEnhancer())
    )
    .parameterType(UPM_CONTENTFUL_PARAMETER_TYPES, compose(contentfulEnhancer(), sysFieldCleanser));
};

export const buildProductCategoryEnhancers = ({ categoryName }: { categoryName: string | undefined }) => {
  return new EnhancerBuilder().data('products', async () => {
    if (!categoryName) {
      return undefined;
    }

    // const categories = bigCommerceClient.getCategories();

    const { products } = await bigCommerceClient.getProducts({ categories: [categoryName] });

    console.log();
    return products;
  });
};
