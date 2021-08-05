import React, { ComponentType } from 'react';
import { useRouter } from 'next/router';

import { GetStaticPropsContext } from 'next';
import { ComponentInstance, RootComponentInstance } from '@uniformdev/upm';
import { ComponentProps, Composition, Slot } from '@uniformdev/upm-react';
import { PreviewSwitch } from 'components/PreviewSwitch';
import { useLivePreviewNextStaticProps } from 'src/hooks/useLivePreviewNextStaticProps';
import { Visualizer } from 'components/Visualizer';
import { ContentfulEnhancerResult } from '@uniformdev/upm-contentful';
import { upmClient } from '@lib/upmClient';
import { ProductDetail } from 'components/ProductDetail';
import { ProductCategories } from 'components/ProductCategories';
import { enhancers } from '@lib/enhancers';
import { enhance } from '@uniformdev/upm';
import { Hero } from '@components/Hero';
import { FeaturedProducts } from '@components/FeaturedProducts';
import { CallToAction } from '@components/CallToAction';
import Error from '@pages/404';
import Layout from '@components/layout';
import footerData from '@static-data/footer';
import headerData from '@static-data/header';
import productCountsData from '@static-data/productCounts';
import globals from '@static-data/globals';

const pageData = {
  page: {
    hasTransparentHeader: true,
    seo: {
      _type: 'seo',
      metaTitle: globals.siteTitle,
      shareTitle: globals.siteTitle,
    },
  },
  site: {
    cart: {
      message: 'Free shipping on all orders!',
      storeURL: globals.siteUrl,
    },
    footer: footerData,
    header: headerData,
    productCounts: productCountsData,
    rootDomain: globals.siteUrl,
    seo: {
      metaDesc: globals.siteTitle,
      metaTitle: '{{page_title}} – {{site_title}}',
      shareDesc: globals.siteTitle,
      shareGraphic: 'todo-image',
      shareTitle: '{{page_title}} – {{site_title}}',
      siteTitle: null,
    },
  },
};

function resolveRendering(component: ComponentInstance): ComponentType<ComponentProps<any>> | null {
  switch (component.type) {
    case 'callToAction':
      return CallToAction;
    case 'hero':
      return Hero;
    case 'featuredProducts':
      return FeaturedProducts;
    case 'productCategories':
      return ProductCategories;
    case 'productDetail':
      return ProductDetail;
    default:
      return Visualizer;
  }
}

type PageProps = {
  entry: ContentfulEnhancerResult<{ title: string }>;
};

type PageSlots = 'content';

export default function Home({
  pageData,
  preview,
  layout,
}: {
  preview?: string;
  layout: RootComponentInstance;
  pageData: any;
}) {
  useLivePreviewNextStaticProps({
    compositionId: layout?._id,
    projectId: preview,
  });

  const router = useRouter();

  if (!router.isFallback && !pageData) {
    return <Error data={pageData} statusCode={404} />;
  }

  const { site, page } = pageData;

  return (
    <Layout site={site} page={page} schema={undefined}>
      <Composition<PageProps> data={layout} resolveRenderer={resolveRendering}>
        {({ entry }) => (
          <main>
            <h1>{entry?.fields.title}</h1>
            <Slot<PageSlots> name="content" />
          </main>
        )}
      </Composition>

      {/* <h2>Raw layout data</h2>
      <pre>{JSON.stringify(layout, null, 2)}</pre> */}
      {/* <PreviewSwitch /> */}
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context?.params?.slug ?? '';
  const { preview } = context;

  // fetch the layout from the UPM enhancer proxy
  const apiResult = await upmClient.getCompositionBySlug({
    slug: `/home`,
    state: preview ? 'preview' : 'published',
    skipEnhance: false,
  });

  await enhance({ composition: apiResult.composition, enhancers, context: { preview } });

  return {
    props: {
      layout: apiResult.composition,
      pageData,
      // keeping the site ID in a static prop lets us hide it from non-preview users
      preview: preview ? '4553de09-49ff-49a1-806e-754f37357359' : null,
    },
  };
}
