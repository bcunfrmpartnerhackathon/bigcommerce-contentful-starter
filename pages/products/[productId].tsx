import React, { ComponentProps, ComponentType } from 'react';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { upmClient } from '@lib/upmClient';
import { buildProductDetailEnhancers } from '@lib/enhancers';
import { enhance } from '@uniformdev/upm';
import { Composition, Slot } from '@uniformdev/upm-react';
import { ComponentInstance, RootComponentInstance } from '@uniformdev/upm';
import { ProductImageGallery } from '@components/product/ProductImageGallery';
import { ProductDetailInfo } from '@components/product/ProductDetailInfo';
import { Visualizer } from '@components/Visualizer';
import { ProductRecommendedProducts } from '@components/product/ProductRecommendedProducts';
import { bigCommerceClient } from '@lib/enhancers/bigCommerceEnhancer';
import { PreviewSwitch } from 'components/PreviewSwitch';
import Error from '@pages/404';
import Layout from '@components/layout';
import { ProductHero } from '@components/product/ProductHero';

const pageData = {
  page: {
    hasTransparentHeader: false,
    modules: [
      {
        _key: '501548ecc438',
        _type: 'productHero',
      },
    ],
    product: {
      comparePrice: 2495,
      description: null,
      id: 6589411950770,
      inStock: true,
      klaviyoAccountID: 'XK6zc4',
      lowStock: false,
      optionSettings: [
        {
          color: {
            _type: 'color',
            alpha: 1,
            hex: '#232325',
            hsl: {
              _type: 'hslaColor',
              a: 1,
              h: 240,
              l: 0.1411764705882353,
              s: 0.027777777777777776,
            },
            hsv: {
              _type: 'hsvaColor',
              a: 1,
              h: 240,
              s: 0.05405405405405405,
              v: 0.1450980392156863,
            },
            rgb: {
              _type: 'rgbaColor',
              a: 1,
              b: 37,
              g: 35,
              r: 35,
            },
          },
          forOption: 'Color:Black',
        },
        {
          color: {
            _type: 'color',
            alpha: 1,
            hex: '#f0f0f0',
            hsl: {
              _type: 'hslaColor',
              a: 1,
              h: 200,
              l: 0.9411764705882353,
              s: 0,
            },
            hsv: {
              _type: 'hsvaColor',
              a: 1,
              h: 200,
              s: 0,
              v: 0.9411764705882353,
            },
            rgb: {
              _type: 'rgbaColor',
              a: 1,
              b: 240,
              g: 240,
              r: 240,
            },
          },
          forOption: 'Color:White',
        },
        {
          color: {
            _type: 'color',
            alpha: 1,
            hex: '#929292',
            hsl: {
              _type: 'hslaColor',
              a: 1,
              h: 200,
              l: 0.5725490196078431,
              s: 0,
            },
            hsv: {
              _type: 'hsvaColor',
              a: 1,
              h: 200,
              s: 0,
              v: 0.5725490196078431,
            },
            rgb: {
              _type: 'rgbaColor',
              a: 1,
              b: 146,
              g: 146,
              r: 146,
            },
          },
          forOption: 'Color:Gray',
        },
      ],
      options: [
        {
          name: 'Color',
          position: 1,
          values: ['White', 'Gray', 'Black'],
        },
        {
          name: 'Size',
          position: 2,
          values: ['Small', 'Medium', 'Large'],
        },
      ],
      price: 1895,
      slug: 'megabat-tee',
      surfaceOption: '1',
      title: 'Megabat Tee',
      useGallery: 'true',
    },
    seo: {
      _type: 'seo',
      metaTitle: 'Megabat Tee – HULL',
      shareTitle: 'Megabat Tee – HULL',
    },
  },
  site: {
    cart: {
      message: 'Free shipping on orders over $666',
      storeURL: 'https://localhost',
    },
    footer: {
      blocks: [
        {
          newsletter: {
            errorMsg: [
              {
                _key: '64179e09d674',
                _type: 'block',
                children: [
                  {
                    _key: '286d3a76aa91',
                    _type: 'span',
                    marks: [],
                    text: 'Whoops!',
                  },
                ],
                markDefs: [],
                style: 'h4mock',
              },
              {
                _key: '1c9d1861e112',
                _type: 'block',
                children: [
                  {
                    _key: 'ff2c3683a755',
                    _type: 'span',
                    marks: [],
                    text: "That didn't work.",
                  },
                ],
                markDefs: [],
                style: 'normal',
              },
            ],
            id: 'footer',
            klaviyoListID: 'Rf2jXC',
            submit: null,
            successMsg: 'Yay!',
            terms: 'I agree with terms and conditions',
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
            url: 'https://shop.hull.dev/account',
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
            url: 'https://go.insane.codes/account/login',
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
    rootDomain: 'https://hull.dev',
    seo: {
      metaDesc: 'Headless commerce starter powered by BigCommerce + Uniform + Next.js + Contentful',
      metaTitle: '{{page_title}} – {{site_title}}',
      shareDesc: 'Headless commerce starter powered by BigCommerce + Uniform + Next.js + Contentful',
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
    case 'productHero':
      return ProductHero;
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

const ProductDetail = ({
  layout,
  pageData,
}: {
  preview?: string;
  layout: RootComponentInstance;
  pageData: any;
}) => {
  return (
    <Layout site={pageData.site} page={pageData.page} schema={"Product"}>
      <Composition<ProductDetailProps> data={layout} resolveRenderer={resolveRendering}>
        {() => (
          <>
            <Slot<ProductDetailSlots> name="content" />
            <section>
              <Slot<ProductDetailSlots> name="bottomRow" />
            </section>
          </>
        )}
      </Composition>
      {/* <h2>Raw layout data</h2>
    <pre>{JSON.stringify(layout, null, 2)}</pre> */}
      <PreviewSwitch />
    </Layout>
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
