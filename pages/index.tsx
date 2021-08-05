import React from 'react';
import { useRouter } from 'next/router';

import { GetStaticPropsContext } from 'next';
import { RootComponentInstance } from '@uniformdev/upm';
import { Composition, Slot } from '@uniformdev/upm-react';
import { useLivePreviewNextStaticProps } from 'src/hooks/useLivePreviewNextStaticProps';
import { ContentfulEnhancerResult } from '@uniformdev/upm-contentful';
import { upmClient } from '@lib/upmClient';
import { enhancers } from '@lib/enhancers';
import { enhance } from '@uniformdev/upm';
import Error from '@pages/404';
import Layout from '@components/layout';
import footerData from '@static-data/footer';
import productCountsData from '@static-data/productCounts';
import globals from '@static-data/globals';
import { resolveRenderer } from '@components/composableComponents';

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

type PageProps = {
  entry: ContentfulEnhancerResult<{ title: string }>;
};

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
    <Composition<PageProps> data={layout} resolveRenderer={resolveRenderer}>
      {({ entry }) => (
        <Layout header={<Slot name="header" />} site={site} page={page} schema={undefined}>
          <main>
            <h1>{entry?.fields.title}</h1>
            <Slot name="content" />
          </main>
        </Layout>
      )}
    </Composition>
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
