import React, { ComponentProps, ComponentType } from 'react';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { upmClient } from '@/lib/upmClient';
import { buildProductDetailEnhancers } from '@/lib/enhancers';
import { enhance } from '@uniformdev/upm';
import { Composition, Slot } from '@uniformdev/upm-react';
import { ComponentInstance, RootComponentInstance } from '@uniformdev/upm';
import { ProductImageGallery } from '@/components/detail/ProductImageGallery';
import { ProductDetailInfo } from '@/components/detail/ProductDetailInfo';
import { Visualizer } from '@/components/Visualizer';
import { ProductRecommendedProducts } from '@/components/detail/ProductRecommendedProducts';
import { bigCommerceClient } from '@/lib/enhancers/bigCommerceEnhancer';

function resolveRendering(component: ComponentInstance): ComponentType<ComponentProps<any>> | null {
  switch (component.type) {
    case 'productImageGallery':
      return ProductImageGallery;
    case 'productDetailInfo':
      return ProductDetailInfo;
    case 'recommendedProducts':
      return ProductRecommendedProducts;
    default:
      return Visualizer;
  }
}

type ProductDetailProps = {};

type ProductDetailSlots = 'content' | 'bottomRow';

const ProductDetail = ({ layout }: { preview?: string; layout: RootComponentInstance }) => {
  return (
    <div>
      <Composition<ProductDetailProps> data={layout} resolveRenderer={resolveRendering}>
        {() => (
          <>
            <main>
              <Slot<ProductDetailSlots> name="content" />
            </main>
            <section>
              <Slot<ProductDetailSlots> name="bottomRow" />
            </section>
          </>
        )}
      </Composition>
    </div>
  );
};

export default ProductDetail;

const sluggify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await bigCommerceClient.getProducts({});

  const paths = products.map((product) => {
    return `/products/${product.id}`;
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { productId } = context?.params || {};

  const { preview } = context;

  const [productResult, genericResult] = await Promise.all([
    upmClient
      .getCompositionBySlug({
        slug: `/products/${productId}`,
        state: true ? 'preview' : 'published',
        skipEnhance: false,
      })
      .catch(compositionExceptionHandler),
    upmClient
      .getCompositionBySlug({
        slug: `/product-detail`,
        state: true ? 'preview' : 'published',
        skipEnhance: false,
      })
      .catch(compositionExceptionHandler),
  ]);

  const apiResult = productResult ?? genericResult;

  if (!apiResult) {
    throw new Error('Composition not found.');
  }

  const enhancers = buildProductDetailEnhancers({ productId: productId as string });

  await enhance({ composition: apiResult.composition, enhancers, context: { preview } });

  return {
    props: {
      layout: apiResult.composition,
      // keeping the site ID in a static prop lets us hide it from non-preview users
      preview: preview ? '4553de09-49ff-49a1-806e-754f37357359' : null,
    },
  };
};

const compositionExceptionHandler = (e: { statusCode: number | undefined }) => {
  if (e.statusCode === 404) {
    return null;
  }

  throw e;
};
