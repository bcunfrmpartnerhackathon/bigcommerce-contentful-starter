import React, { ComponentType } from 'react';
import { useRouter } from 'next/router';

import { GetStaticPaths, GetStaticPropsContext } from 'next';
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

const pageData = {
  page: {
    hasTransparentHeader: true,
    seo: {
      _type: 'seo',
      metaTitle: 'BigCommerce Uniform Demo',
      shareTitle: 'BigCommerce Uniform Demo',
    },
  },
  site: {
    cart: {
      message: 'Free shipping on all orders!',
      storeURL: 'https://bcunfrmhackathon.netlify.app',
    },
    footer: {
      blocks: [
        {
          newsletter: {
            errorMsg: "Whoops! That didn't work",
            id: 'footer',
            klaviyoListID: 'Rf2jXC',
            submit: null,
            successMsg: "Awesome! You're all set.",
            terms: 'I agree to the terms',
          },
          title: 'Newsletter',
        },
        {
          menu: {
            items: [
              {
                _key: '7beeb47d305a',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: true,
                  slug: 'all',
                  type: 'collection',
                },
                title: 'Everything',
                url: null,
              },
              {
                _key: '96e10f3709e0',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'vinyls',
                  type: 'collection',
                },
                title: 'Vinyls',
                url: null,
              },
              {
                _key: '2a5a2ccb763d',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'apparel',
                  type: 'collection',
                },
                title: 'Apparel',
                url: null,
              },
              {
                _key: 'befeb2b3fd0f',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'posters',
                  type: 'collection',
                },
                title: 'Posters',
                url: null,
              },
            ],
          },
          title: 'Shop',
        },
        {
          menu: {
            items: [
              {
                _key: 'a9bb51208d83',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'about',
                  type: 'page',
                },
                title: 'Our Story',
                url: null,
              },
              {
                _key: '1df2681971e9',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'faq',
                  type: 'page',
                },
                title: 'FAQ',
                url: null,
              },
              {
                _key: 'fc8280c8f6a1',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'returns',
                  type: 'page',
                },
                title: 'Returns',
                url: null,
              },
              {
                _key: '63c0facf831c',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'terms',
                  type: 'page',
                },
                title: 'Terms of Service',
                url: null,
              },
              {
                _key: '21ecb91c73b1',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'privacy',
                  type: 'page',
                },
                title: 'Privacy Policy',
                url: null,
              },
            ],
          },
          title: 'Info',
        },
        {
          social: [
            {
              icon: 'Github',
              url: 'https://github.com/uniformdev/bigcommerce-contentful-starter',
            },
          ],
          title: 'Get Social',
        },
      ],
    },
    header: {
      menuDesktopLeft: {
        items: [
          {
            _key: 'f9c35d6c8871',
            _type: 'navDropdown',
            dropdownItems: [
              {
                _key: '7c2066f487c2',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: true,
                  slug: 'all',
                  type: 'collection',
                },
                title: 'Everything',
                url: null,
              },
              {
                _key: '19c395707461',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'vinyls',
                  type: 'collection',
                },
                title: 'Vinyls',
                url: null,
              },
              {
                _key: 'cd732f194034',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'apparel',
                  type: 'collection',
                },
                title: 'Apparel',
                url: null,
              },
              {
                _key: 'eba12c55aa75',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'posters',
                  type: 'collection',
                },
                title: 'Posters',
                url: null,
              },
            ],
            featured: [],
            page: null,
            title: 'Shop',
            url: null,
          },
          {
            _key: '7dc55bcc35cc',
            _type: 'navDropdown',
            dropdownItems: [
              {
                _key: '2caa859cbbff',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'about',
                  type: 'page',
                },
                title: 'Our Story',
                url: null,
              },
              {
                _key: '3c1adccf05a0',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'faq',
                  type: 'page',
                },
                title: 'FAQ',
                url: null,
              },
            ],
            featured: null,
            page: null,
            title: 'Info',
            url: null,
          },
        ],
      },
      menuDesktopRight: {
        items: [
          {
            _key: 'dacf4cf2d342',
            _type: 'navLink',
            dropdownItems: null,
            featured: null,
            page: null,
            title: 'Account',
            url: 'https://bcunfrmhackathon.netlify.app/account',
          },
        ],
      },
      menuMobilePrimary: {
        items: [
          {
            _key: '6a54b210606b',
            _type: 'navDropdown',
            dropdownItems: [
              {
                _key: 'e86995f9e1a4',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: true,
                  slug: 'all',
                  type: 'collection',
                },
                title: 'Everything',
                url: null,
              },
              {
                _key: '36a795dbbbd8',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'vinyls',
                  type: 'collection',
                },
                title: 'Vinyls',
                url: null,
              },
              {
                _key: '4fbea253fe59',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'apparel',
                  type: 'collection',
                },
                title: 'Apparel',
                url: null,
              },
              {
                _key: '03faae9b8c4f',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'posters',
                  type: 'collection',
                },
                title: 'Posters',
                url: null,
              },
            ],
            page: null,
            title: 'Shop',
            url: null,
          },
          {
            _key: 'afd532ddb642',
            _type: 'navDropdown',
            dropdownItems: [
              {
                _key: 'da719f8775e6',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'about',
                  type: 'page',
                },
                title: 'Our Story',
                url: null,
              },
              {
                _key: '3bc8ab75006a',
                _type: 'navPage',
                page: {
                  isHome: false,
                  isShop: false,
                  slug: 'faq',
                  type: 'page',
                },
                title: 'FAQ',
                url: null,
              },
            ],
            page: null,
            title: 'Info',
            url: null,
          },
        ],
      },
      menuMobileSecondary: {
        items: [
          {
            _key: 'dae349e6efe3',
            _type: 'navLink',
            dropdownItems: null,
            page: null,
            title: 'Account',
            url: '/account/login',
          },
          {
            _key: '7f3365c29468',
            _type: 'navPage',
            dropdownItems: null,
            page: {
              isHome: false,
              isShop: false,
              slug: 'terms',
              type: 'page',
            },
            title: 'Terms of Service',
            url: null,
          },
          {
            _key: 'd735a6a7cd1e',
            _type: 'navPage',
            dropdownItems: null,
            page: {
              isHome: false,
              isShop: false,
              slug: 'privacy',
              type: 'page',
            },
            title: 'Privacy Policy',
            url: null,
          },
        ],
      },
    },
    productCounts: [
      {
        count: 13,
        slug: 'all',
      },
      {
        count: 3,
        slug: 'apparel',
      },
      {
        count: 6,
        slug: 'vinyls',
      },
      {
        count: 4,
        slug: 'posters',
      },
      {
        count: 13,
        slug: 'all',
      },
    ],
    rootDomain: 'https://bcunfrmhackathon.netlify.app',
    seo: {
      metaDesc: 'Headless commerce starter powered by BigCommerce + Uniform + Next.js + Contentful',
      metaTitle: '{{page_title}} – {{site_title}}',
      shareDesc: 'Headless starter powered by BigCommerce + Uniform + Next.js + Contentful',
      shareGraphic: {
        _type: 'image',
        asset: {
          _ref: 'image-1411f962d6c07b14139098ad770db223aaf1226c-1200x630-png',
          _type: 'reference',
        },
      },
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

  // @ts-ignore
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

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await upmClient.getCompositionList({
    skipEnhance: true,
  });

  const paths = pages.compositions
    .map((c) => c.composition._slug!)
    .filter((slug) => slug)
    .map((s) => (s.startsWith('/') ? `${s}` : `/${s}`));

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
