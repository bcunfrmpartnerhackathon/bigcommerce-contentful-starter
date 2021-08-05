import React from 'react';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { upmClient } from '@lib/upmClient';
import { buildProductDetailEnhancers } from '@lib/enhancers';
import { enhance } from '@uniformdev/upm';
import { Composition, Slot } from '@uniformdev/upm-react';
import { RootComponentInstance } from '@uniformdev/upm';
import { resolveRenderer } from '@components/composableComponents';
import { bigCommerceClient } from '@lib/enhancers/bigCommerceEnhancer';
// import { PreviewSwitch } from 'components/PreviewSwitch';
import Error from '@pages/404';
import Layout from '@components/layout';

import footerData from '@static-data/footer';
import productCountsData from '@static-data/productCounts';
import globals from '@static-data/globals';

const pageData = {
  page: {
    hasTransparentHeader: false,
    seo: {
      _type: 'seo',
      metaTitle: 'Product meta title',
      shareTitle: 'Product SEO title',
    },
  },
  site: {
    rootDomain: globals.siteUrl,
    seo: {
      metaDesc: globals.siteTitle,
      metaTitle: '{{page_title}} – {{site_title}}',
      shareDesc: globals.siteTitle,
      shareGraphic: 'todo-image',
      shareTitle: '{{page_title}} – {{site_title}}',
      siteTitle: null,
    },
    footer: footerData,
    productCounts: productCountsData,
  },
};

const ProductDetail = ({
  layout,
  pageData,
}: {
  preview?: string;
  layout: RootComponentInstance;
  pageData: any;
}) => {
  return (
    <Composition data={layout} resolveRenderer={resolveRenderer}>
      {() => (
        <Layout header={<Slot name="header" />} site={pageData.site} page={pageData.page} schema={'Product'}>
          <Slot name="content" />
          <section>
            <Slot name="bottomRow" />
          </section>
        </Layout>
      )}
    </Composition>
  );
};

export default ProductDetail;

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
    throw new (Error as any)('Composition not found.');
  }

  const enhancers = buildProductDetailEnhancers({ productId: productId as string });

  await enhance({ composition: apiResult.composition, enhancers, context: { preview } });

  return {
    props: {
      layout: apiResult.composition,
      pageData,
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
