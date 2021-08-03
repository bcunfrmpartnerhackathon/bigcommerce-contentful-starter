import React, { ComponentType } from 'react';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { ComponentInstance, RootComponentInstance } from '@uniformdev/upm';
import { ComponentProps, Composition, Slot } from '@uniformdev/upm-react';
import { PreviewSwitch } from 'components/PreviewSwitch';
import { useLivePreviewNextStaticProps } from 'src/hooks/useLivePreviewNextStaticProps';
import { Visualizer } from 'components/Visualizer';
import { ContentfulEnhancerResult } from '@uniformdev/upm-contentful';
import { upmClient } from '@/lib/upmClient';
import { ProductDetail } from 'components/ProductDetail';
import { ProductCategories } from 'components/ProductCategories';
import { enhancers } from '@/lib/enhancers';
import { enhance } from '@uniformdev/upm';

function resolveRendering(component: ComponentInstance): ComponentType<ComponentProps<any>> | null {
  switch (component.type) {
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

export default function Home({ preview, layout }: { preview?: string; layout: RootComponentInstance }) {
  useLivePreviewNextStaticProps({
    compositionId: layout?._id,
    projectId: preview,
  });

  // @ts-ignore
  return (
    <div>
      {/* <ProductDetail  /> */}

      <Composition<PageProps> data={layout} resolveRenderer={resolveRendering}>
        {({ entry }) => (
          <main>
            <h1>{entry?.fields.title}</h1>
            <Slot<PageSlots> name="content" />
          </main>
        )}
      </Composition>

      <h2>Raw layout data</h2>
      <pre>{JSON.stringify(layout, null, 2)}</pre>

      <PreviewSwitch />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await upmClient.getCompositionList({
    skipEnhance: true,
  });

  const paths = pages.compositions
    .map((c) => c.composition._slug!)
    .filter((slug) => slug)
    .map((s) => (s.startsWith('/') ? `${s}` : `/${s}`));

  console.log({ paths });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context?.params?.slug ?? '';

  const slugString = Array.isArray(slug) ? slug.join('/') : slug;

  const { preview } = context;

  // fetch the layout from the UPM enhancer proxy
  const apiResult = await upmClient.getCompositionBySlug({
    slug: `/${slugString}`,
    state: preview ? 'preview' : 'published',
    skipEnhance: false,
  });

  console.log({enhancers});

  await enhance({ composition: apiResult.composition, enhancers, preview });

  console.log(JSON.stringify(apiResult.composition));

  return {
    props: {
      layout: apiResult.composition,
      // keeping the site ID in a static prop lets us hide it from non-preview users
      preview: preview ? '4553de09-49ff-49a1-806e-754f37357359' : null,
    },
  };
}
