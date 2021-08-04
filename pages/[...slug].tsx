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
    cookieConsent: {
      enabled: true,
      link: {
        slug: 'privacy',
        type: 'page',
      },
      message:
        'We use cookies to personalize and deliver appropriate content.\nBy clicking "Accept" you agree to our terms.',
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
            successMsg: [
              {
                _key: '2520597a859c',
                _type: 'block',
                children: [
                  {
                    _key: '437e9bb9c40d',
                    _type: 'span',
                    marks: [],
                    text: 'Awesome!',
                  },
                ],
                markDefs: [],
                style: 'h4mock',
              },
              {
                _key: '57156bf236e3',
                _type: 'block',
                children: [
                  {
                    _key: '37fb6554bd09',
                    _type: 'span',
                    marks: [],
                    text: "You're all set.",
                  },
                ],
                markDefs: [],
                style: 'normal',
              },
            ],
            terms: [
              {
                _key: 'e4d9bb95cb67',
                _type: 'block',
                children: [
                  {
                    _key: 'ecbd33bdbb92',
                    _type: 'span',
                    marks: [],
                    text: 'I agree to the ',
                  },
                  {
                    _key: 'a46fcd5c722d',
                    _type: 'span',
                    marks: ['d5f2093b796d'],
                    text: 'terms',
                  },
                ],
                markDefs: [
                  {
                    _key: 'd5f2093b796d',
                    _type: 'link',
                    isButton: null,
                    page: {
                      isHome: false,
                      isShop: false,
                      slug: 'terms',
                      type: 'page',
                    },
                    styles: null,
                    url: null,
                  },
                ],
                style: 'normal',
              },
            ],
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
            // {
            //   icon: 'Github',
            //   url: 'https://github.com/ndimatteo/hull',
            // },
            // {
            //   icon: 'Instagram',
            //   url: 'https://instagram.com/ndimatteo',
            // },
            // {
            //   icon: 'Twitter',
            //   url: 'https://twitter.com/ndimatteo',
            // },
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
            featured: [
              {
                comparePrice: 3500,
                description: [
                  {
                    _key: '2f855853b861',
                    _type: 'block',
                    children: [
                      {
                        _key: '9db4fc85b24b',
                        _type: 'span',
                        marks: [],
                        text: 'Quis nulla incididunt adipisicing dolor. Lorem reprehenderit mollit fugiat cillum aute mollit occaecat tempor minim proident consequat eu tempor. Adipisicing do est eu veniam adipisicing officia quis ullamco.',
                      },
                    ],
                    markDefs: [],
                    style: 'normal',
                  },
                  {
                    _key: '2bbe3fb6e537',
                    _type: 'block',
                    children: [
                      {
                        _key: '5a6b7d5c0697',
                        _type: 'span',
                        marks: [],
                        text: 'Elit tempor nulla nostrud ex est culpa exercitation ullamco id non minim dolor do. Reprehenderit culpa ipsum aliquip culpa veniam nostrud duis esse incididunt aliqua non aute veniam exercitation. Nisi cillum dolor reprehenderit velit sunt ex aliquip do.',
                      },
                    ],
                    markDefs: [],
                    style: 'normal',
                  },
                ],
                id: 6584939413682,
                inStock: true,
                klaviyoAccountID: 'XK6zc4',
                lowStock: false,
                optionSettings: null,
                options: [],
                photos: {
                  listing: [
                    {
                      default: {
                        alt: 'Front cover of the Ultra Magic vinyl',
                        aspectRatio: 1.0163690476190477,
                        asset: {
                          _ref: 'image-6f7afac34661661fd162cb89f8b01f3534fa9f3b-2049x2016-jpg',
                          _type: 'reference',
                        },
                        crop: null,
                        customRatio: 1,
                        hotspot: null,
                        id: '6f7afac34661661fd162cb89f8b01f3534fa9f3b',
                        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAIEAwUGCP/EACAQAAICAgICAwAAAAAAAAAAAAECAAQDERIxBVEiMpH/xAAYAQADAQEAAAAAAAAAAAAAAAACBAUBA//EAB4RAQACAgEFAAAAAAAAAAAAAAEAAgMRBBIhMUFR/9oADAMBAAIRAxEAPwDz/VwI4LZW0syJVxNyKsxlujQWxSxup+RbRm+o0UrqC2tj3FcuUp7lTicRzBs7fZxLDixHoxLHkDu7m6+x6iM1dm5NudNkkcVnNiXjjyMq73oSZv2j3mf9iJjUXxDMtw0LK7EsSSdkxEQpyn//2Q==',
                        type: 'image/jpeg',
                      },
                      forOption: null,
                      hover: {
                        alt: 'Ultra Magic vinyl disc partially removed from the sleeve',
                        aspectRatio: 1.0163690476190477,
                        asset: {
                          _ref: 'image-a2e872eb3708f987cb0ec98d9fead7a09a42a7c4-2049x2016-jpg',
                          _type: 'reference',
                        },
                        crop: null,
                        customRatio: 1,
                        hotspot: null,
                        id: 'a2e872eb3708f987cb0ec98d9fead7a09a42a7c4',
                        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAIFAQMGB//EACAQAAICAgEFAQAAAAAAAAAAAAECAAMEETEFEiFBURP/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxEEMWH/2gAMAwEAAhEDEQA/APA3wwQv59xJMlT0y6xmBHYB52Z0uYlePheh55+SopvS8ur3aPrfEhRY5rTdzaFTNR8KN1KOVPIOok8lg17kcbiXMJOzLvtXVlrMPhM07MRAkl0NKTk9b0xERCKf/9k=',
                        type: 'image/jpeg',
                      },
                    },
                  ],
                  main: [
                    {
                      forOption: null,
                      photos: [
                        {
                          alt: 'Front cover of the Ultra Magic vinyl',
                          aspectRatio: 1.0163690476190477,
                          asset: {
                            _ref: 'image-6f7afac34661661fd162cb89f8b01f3534fa9f3b-2049x2016-jpg',
                            _type: 'reference',
                          },
                          crop: null,
                          customRatio: 1,
                          hotspot: null,
                          id: '6f7afac34661661fd162cb89f8b01f3534fa9f3b',
                          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAIEAwUGCP/EACAQAAICAgICAwAAAAAAAAAAAAECAAQDERIxBVEiMpH/xAAYAQADAQEAAAAAAAAAAAAAAAACBAUBA//EAB4RAQACAgEFAAAAAAAAAAAAAAEAAgMRBBIhMUFR/9oADAMBAAIRAxEAPwDz/VwI4LZW0syJVxNyKsxlujQWxSxup+RbRm+o0UrqC2tj3FcuUp7lTicRzBs7fZxLDixHoxLHkDu7m6+x6iM1dm5NudNkkcVnNiXjjyMq73oSZv2j3mf9iJjUXxDMtw0LK7EsSSdkxEQpyn//2Q==',
                          type: 'image/jpeg',
                        },
                        {
                          alt: 'Back cover of the Ultra Magic vinyl',
                          aspectRatio: 1.0163690476190477,
                          asset: {
                            _ref: 'image-671b361a295d2fdce872edabfed43af34aae0ed8-2049x2016-jpg',
                            _type: 'reference',
                          },
                          crop: null,
                          customRatio: 1,
                          hotspot: null,
                          id: '671b361a295d2fdce872edabfed43af34aae0ed8',
                          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEECP/EACAQAAICAgICAwAAAAAAAAAAAAECABEhMQMEEhQiQVH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECUf/aAAwDAQACEQMRAD8A5/6z9VUrn4nZv0Gpi5S3mfHAvAmsqnroQfn9zOctuSTLrV72SeIllc7iVdRKyHIqFUK1jcRApNmzERA//9k=',
                          type: 'image/jpeg',
                        },
                        {
                          alt: 'Ultra Magic vinyl disc partially removed from the sleeve',
                          aspectRatio: 1.0163690476190477,
                          asset: {
                            _ref: 'image-a2e872eb3708f987cb0ec98d9fead7a09a42a7c4-2049x2016-jpg',
                            _type: 'reference',
                          },
                          crop: null,
                          customRatio: 1,
                          hotspot: null,
                          id: 'a2e872eb3708f987cb0ec98d9fead7a09a42a7c4',
                          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAIFAQMGB//EACAQAAICAgEFAQAAAAAAAAAAAAECAAMEETEFEiFBURP/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxEEMWH/2gAMAwEAAhEDEQA/APA3wwQv59xJMlT0y6xmBHYB52Z0uYlePheh55+SopvS8ur3aPrfEhRY5rTdzaFTNR8KN1KOVPIOok8lg17kcbiXMJOzLvtXVlrMPhM07MRAkl0NKTk9b0xERCKf/9k=',
                          type: 'image/jpeg',
                        },
                      ],
                    },
                  ],
                },
                price: 2800,
                slug: 'ultra-magic-vinyl',
                surfaceOption: null,
                title: 'Ultra Magic',
                useGallery: 'false',
                variants: [
                  {
                    comparePrice: 3500,
                    id: 39464762933426,
                    inStock: true,
                    lowStock: false,
                    options: [],
                    price: 2800,
                    seo: null,
                    title: 'Vinyl',
                  },
                ],
              },
              {
                comparePrice: 0,
                description: [
                  {
                    _key: '89af9ab86e1c',
                    _type: 'block',
                    children: [
                      {
                        _key: '35a85d60a500',
                        _type: 'span',
                        marks: [],
                        text: 'Reprehenderit sit officia id sunt sunt labore proident. Nulla et nulla ex quis labore nostrud elit Lorem exercitation deserunt. Aliqua sint Lorem laboris amet et occaecat velit consectetur incididunt culpa dolor do deserunt labore. Cupidatat pariatur non ullamco cillum pariatur mollit veniam consequat. Eiusmod reprehenderit incididunt amet.',
                      },
                    ],
                    markDefs: [],
                    style: 'normal',
                  },
                ],
                id: 6589381804210,
                inStock: true,
                klaviyoAccountID: 'XK6zc4',
                lowStock: false,
                optionSettings: [
                  {
                    color: {
                      _type: 'color',
                      alpha: 1,
                      hex: '#2e2e30',
                      hsl: {
                        _type: 'hslaColor',
                        a: 1,
                        h: 240,
                        l: 0.1843137254901961,
                        s: 0.02127659574468085,
                      },
                      hsv: {
                        _type: 'hsvaColor',
                        a: 1,
                        h: 240,
                        s: 0.041666666666666664,
                        v: 0.18823529411764706,
                      },
                      rgb: {
                        _type: 'rgbaColor',
                        a: 1,
                        b: 48,
                        g: 46,
                        r: 46,
                      },
                    },
                    forOption: 'Color:Black',
                  },
                  {
                    color: {
                      _type: 'color',
                      alpha: 1,
                      hex: '#ededed',
                      hsl: {
                        _type: 'hslaColor',
                        a: 1,
                        h: 200,
                        l: 0.9294117647058824,
                        s: 0,
                      },
                      hsv: {
                        _type: 'hsvaColor',
                        a: 1,
                        h: 200,
                        s: 0,
                        v: 0.9294117647058824,
                      },
                      rgb: {
                        _type: 'rgbaColor',
                        a: 1,
                        b: 237,
                        g: 237,
                        r: 237,
                      },
                    },
                    forOption: 'Color:White',
                  },
                  {
                    color: {
                      _type: 'color',
                      alpha: 1,
                      hex: '#3d4dd8',
                      hsl: {
                        _type: 'hslaColor',
                        a: 1,
                        h: 233.80645161290326,
                        l: 0.5431372549019607,
                        s: 0.6652360515021459,
                      },
                      hsv: {
                        _type: 'hsvaColor',
                        a: 1,
                        h: 233.80645161290326,
                        s: 0.7175925925925926,
                        v: 0.8470588235294118,
                      },
                      rgb: {
                        _type: 'rgbaColor',
                        a: 1,
                        b: 216,
                        g: 77,
                        r: 61,
                      },
                    },
                    forOption: 'Color:Blue',
                  },
                ],
                options: [
                  {
                    name: 'Color',
                    position: 1,
                    values: ['Black', 'White', 'Blue'],
                  },
                  {
                    name: 'Size',
                    position: 2,
                    values: ['Small', 'Medium', 'Large'],
                  },
                ],
                photos: {
                  listing: [
                    {
                      default: {
                        alt: 'alt text...',
                        aspectRatio: 1.3333333333333333,
                        asset: {
                          _ref: 'image-44465ea927eb678f562b5f2d938a81c7d054cbb4-2400x1800-jpg',
                          _type: 'reference',
                        },
                        crop: null,
                        customRatio: 1,
                        hotspot: null,
                        id: '44465ea927eb678f562b5f2d938a81c7d054cbb4',
                        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAH/8QAGxAAAwEBAAMAAAAAAAAAAAAAAAECAxIRIUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AwDNebSYjXGZy6foND5pMRpuqyc/QDERAf//Z',
                        type: 'image/jpeg',
                      },
                      forOption: 'Color:Black',
                      hover: {
                        alt: 'alt text...',
                        aspectRatio: 1.3333333333333333,
                        asset: {
                          _ref: 'image-9fcd6d25c0f0cb7851f47fb62426e03e317ccbbd-2400x1800-jpg',
                          _type: 'reference',
                        },
                        crop: null,
                        customRatio: 1,
                        hotspot: null,
                        id: '9fcd6d25c0f0cb7851f47fb62426e03e317ccbbd',
                        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAH/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIAAwQREkFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAESEB/9oADAMBAAIRAxEAPwDAKl7cCKtoRaiW2D5C1vw4YDeorKzmyKgjKv0CGq5JocpSil//2Q==',
                        type: 'image/jpeg',
                      },
                    },
                    {
                      default: {
                        alt: 'alt text...',
                        aspectRatio: 1.3333333333333333,
                        asset: {
                          _ref: 'image-a332a0ebf2df68fedbc7aa4f83d4be4c633c05fd-2400x1800-jpg',
                          _type: 'reference',
                        },
                        crop: null,
                        customRatio: 1,
                        hotspot: null,
                        id: 'a332a0ebf2df68fedbc7aa4f83d4be4c633c05fd',
                        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIAgb/xAAiEAABAgYCAwEAAAAAAAAAAAABAgQAAwUGBxESQRQhUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4fBdu0S47q8auL5FKeUpv1NP6YemTsb2Y1tB28cM5dOElG0z5I9g9DXcTpiOuNbdvljUn5WG8rlyKE7PsfIduVsr23X7DqFMZrcKczkgICpRA3v7ATFMCRMUEHaQTo/RBGYID//Z',
                        type: 'image/jpeg',
                      },
                      forOption: 'Color:White',
                      hover: {
                        alt: 'alt text...',
                        aspectRatio: 1.3333333333333333,
                        asset: {
                          _ref: 'image-1506bb87c5445a8f824f8664b3da787a093201f4-2400x1800-jpg',
                          _type: 'reference',
                        },
                        crop: null,
                        customRatio: 1,
                        hotspot: null,
                        id: '1506bb87c5445a8f824f8664b3da787a093201f4',
                        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIAQb/xAAjEAABAwQCAgMBAAAAAAAAAAABAgMEAAUGBxESIUETFDFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AOM0PjVhyXJlR764VOJHZmOfxynbszXWHoxeZIciM2767RUmQ0PIV6BHupy1VeouP5pCuM9biI7XbsWxyfIpv7L2jjV5w64W6AuWqTIRwn5GyBzzVmCc1gBagk8pB8H+iisoqD//2Q==',
                        type: 'image/jpeg',
                      },
                    },
                    {
                      default: {
                        alt: 'alt text...',
                        aspectRatio: 1.3333333333333333,
                        asset: {
                          _ref: 'image-2183e4e25d45dd698c6a831d42723943e1d7dab4-2400x1800-jpg',
                          _type: 'reference',
                        },
                        crop: null,
                        customRatio: 1,
                        hotspot: null,
                        id: '2183e4e25d45dd698c6a831d42723943e1d7dab4',
                        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgAH/8QAHxAAAAYCAwEAAAAAAAAAAAAAAAECAwQFESESMVET/8QAFQEBAQAAAAAAAAAAAAAAAAAABAb/xAAeEQABAwQDAAAAAAAAAAAAAAABAAIRAwQFEiExQf/aAAwDAQACEQMRAD8Aw6kjsyZZIe34n0IbWphtQFOKR88FpRAzVPpjTm3V54p8CC2u40qrcZTy5qLWhQY99sLR4qAbcxPqNUD9xHSKH2eOhCEJ9JX/2Q==',
                        type: 'image/jpeg',
                      },
                      forOption: 'Color:Blue',
                      hover: {
                        alt: 'alt text...',
                        aspectRatio: 1.3333333333333333,
                        asset: {
                          _ref: 'image-85aff9fb419746ba4f0335d002d8c4fdb6dbd1ec-2400x1800-jpg',
                          _type: 'reference',
                        },
                        crop: null,
                        customRatio: 1,
                        hotspot: null,
                        id: '85aff9fb419746ba4f0335d002d8c4fdb6dbd1ec',
                        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUGB//EACAQAAEEAQQDAAAAAAAAAAAAAAEAAgMEBRIhQVEREzH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EAB0RAAEEAgMAAAAAAAAAAAAAAAEAAgMEERIhMUH/2gAMAwEAAhEDEQA/AOIYKtDat6Jjvw3tXMnjqYrvJY2PS3zqHBWbxs7a9tkjiQB0qmQyNaWrIyP2F7hyr1GWu2o4SAbc9+o8gduMKCfuyIigpC//2Q==',
                        type: 'image/jpeg',
                      },
                    },
                  ],
                  main: [
                    {
                      forOption: 'Color:Black',
                      photos: [
                        {
                          alt: 'alt text...',
                          aspectRatio: 1.3333333333333333,
                          asset: {
                            _ref: 'image-44465ea927eb678f562b5f2d938a81c7d054cbb4-2400x1800-jpg',
                            _type: 'reference',
                          },
                          crop: null,
                          customRatio: 1,
                          hotspot: null,
                          id: '44465ea927eb678f562b5f2d938a81c7d054cbb4',
                          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAH/8QAGxAAAwEBAAMAAAAAAAAAAAAAAAECAxIRIUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AwDNebSYjXGZy6foND5pMRpuqyc/QDERAf//Z',
                          type: 'image/jpeg',
                        },
                        {
                          alt: 'alt text...',
                          aspectRatio: 1.3333333333333333,
                          asset: {
                            _ref: 'image-9fcd6d25c0f0cb7851f47fb62426e03e317ccbbd-2400x1800-jpg',
                            _type: 'reference',
                          },
                          crop: null,
                          customRatio: 1,
                          hotspot: null,
                          id: '9fcd6d25c0f0cb7851f47fb62426e03e317ccbbd',
                          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAH/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIAAwQREkFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAESEB/9oADAMBAAIRAxEAPwDAKl7cCKtoRaiW2D5C1vw4YDeorKzmyKgjKv0CGq5JocpSil//2Q==',
                          type: 'image/jpeg',
                        },
                      ],
                    },
                    {
                      forOption: 'Color:White',
                      photos: [
                        {
                          alt: 'alt text...',
                          aspectRatio: 1.3333333333333333,
                          asset: {
                            _ref: 'image-a332a0ebf2df68fedbc7aa4f83d4be4c633c05fd-2400x1800-jpg',
                            _type: 'reference',
                          },
                          crop: null,
                          customRatio: 1,
                          hotspot: null,
                          id: 'a332a0ebf2df68fedbc7aa4f83d4be4c633c05fd',
                          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIAgb/xAAiEAABAgYCAwEAAAAAAAAAAAABAgQAAwUGBxESQRQhUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4fBdu0S47q8auL5FKeUpv1NP6YemTsb2Y1tB28cM5dOElG0z5I9g9DXcTpiOuNbdvljUn5WG8rlyKE7PsfIduVsr23X7DqFMZrcKczkgICpRA3v7ATFMCRMUEHaQTo/RBGYID//Z',
                          type: 'image/jpeg',
                        },
                        {
                          alt: 'alt text...',
                          aspectRatio: 1.3333333333333333,
                          asset: {
                            _ref: 'image-1506bb87c5445a8f824f8664b3da787a093201f4-2400x1800-jpg',
                            _type: 'reference',
                          },
                          crop: null,
                          customRatio: 1,
                          hotspot: null,
                          id: '1506bb87c5445a8f824f8664b3da787a093201f4',
                          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIAQb/xAAjEAABAwQCAgMBAAAAAAAAAAABAgMEAAUGBxESIUETFDFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AOM0PjVhyXJlR764VOJHZmOfxynbszXWHoxeZIciM2767RUmQ0PIV6BHupy1VeouP5pCuM9biI7XbsWxyfIpv7L2jjV5w64W6AuWqTIRwn5GyBzzVmCc1gBagk8pB8H+iisoqD//2Q==',
                          type: 'image/jpeg',
                        },
                      ],
                    },
                    {
                      forOption: 'Color:Blue',
                      photos: [
                        {
                          alt: 'alt text...',
                          aspectRatio: 1.3333333333333333,
                          asset: {
                            _ref: 'image-2183e4e25d45dd698c6a831d42723943e1d7dab4-2400x1800-jpg',
                            _type: 'reference',
                          },
                          crop: null,
                          customRatio: 1,
                          hotspot: null,
                          id: '2183e4e25d45dd698c6a831d42723943e1d7dab4',
                          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgAH/8QAHxAAAAYCAwEAAAAAAAAAAAAAAAECAwQFESESMVET/8QAFQEBAQAAAAAAAAAAAAAAAAAABAb/xAAeEQABAwQDAAAAAAAAAAAAAAABAAIRAwQFEiExQf/aAAwDAQACEQMRAD8Aw6kjsyZZIe34n0IbWphtQFOKR88FpRAzVPpjTm3V54p8CC2u40qrcZTy5qLWhQY99sLR4qAbcxPqNUD9xHSKH2eOhCEJ9JX/2Q==',
                          type: 'image/jpeg',
                        },
                        {
                          alt: 'alt text...',
                          aspectRatio: 1.3333333333333333,
                          asset: {
                            _ref: 'image-85aff9fb419746ba4f0335d002d8c4fdb6dbd1ec-2400x1800-jpg',
                            _type: 'reference',
                          },
                          crop: null,
                          customRatio: 1,
                          hotspot: null,
                          id: '85aff9fb419746ba4f0335d002d8c4fdb6dbd1ec',
                          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUGB//EACAQAAEEAQQDAAAAAAAAAAAAAAEAAgMEBRIhQVEREzH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EAB0RAAEEAgMAAAAAAAAAAAAAAAEAAgMEERIhMUH/2gAMAwEAAhEDEQA/AOIYKtDat6Jjvw3tXMnjqYrvJY2PS3zqHBWbxs7a9tkjiQB0qmQyNaWrIyP2F7hyr1GWu2o4SAbc9+o8gduMKCfuyIigpC//2Q==',
                          type: 'image/jpeg',
                        },
                      ],
                    },
                  ],
                },
                price: 2495,
                slug: 'ultra-magic-tee',
                surfaceOption: '1',
                title: 'Ultra Magic Tee',
                useGallery: 'true',
                variants: [
                  {
                    comparePrice: 0,
                    id: 39478760079538,
                    inStock: true,
                    lowStock: true,
                    options: [
                      {
                        name: 'Color',
                        position: 1,
                        value: 'Black',
                      },
                      {
                        name: 'Size',
                        position: 2,
                        value: 'Small',
                      },
                    ],
                    price: 2495,
                    seo: null,
                    title: 'Black / Small',
                  },
                  {
                    comparePrice: 0,
                    id: 39478760112306,
                    inStock: true,
                    lowStock: false,
                    options: [
                      {
                        name: 'Color',
                        position: 1,
                        value: 'Black',
                      },
                      {
                        name: 'Size',
                        position: 2,
                        value: 'Medium',
                      },
                    ],
                    price: 2495,
                    seo: null,
                    title: 'Black / Medium',
                  },
                  {
                    comparePrice: 0,
                    id: 39478760145074,
                    inStock: false,
                    lowStock: true,
                    options: [
                      {
                        name: 'Color',
                        position: 1,
                        value: 'Black',
                      },
                      {
                        name: 'Size',
                        position: 2,
                        value: 'Large',
                      },
                    ],
                    price: 2495,
                    seo: null,
                    title: 'Black / Large',
                  },
                  {
                    comparePrice: 0,
                    id: 39478760177842,
                    inStock: true,
                    lowStock: false,
                    options: [
                      {
                        name: 'Color',
                        position: 1,
                        value: 'White',
                      },
                      {
                        name: 'Size',
                        position: 2,
                        value: 'Small',
                      },
                    ],
                    price: 2495,
                    seo: null,
                    title: 'White / Small',
                  },
                  {
                    comparePrice: 0,
                    id: 39478760210610,
                    inStock: true,
                    lowStock: false,
                    options: [
                      {
                        name: 'Color',
                        position: 1,
                        value: 'White',
                      },
                      {
                        name: 'Size',
                        position: 2,
                        value: 'Medium',
                      },
                    ],
                    price: 2495,
                    seo: null,
                    title: 'White / Medium',
                  },
                  {
                    comparePrice: 0,
                    id: 39478760243378,
                    inStock: true,
                    lowStock: true,
                    options: [
                      {
                        name: 'Color',
                        position: 1,
                        value: 'White',
                      },
                      {
                        name: 'Size',
                        position: 2,
                        value: 'Large',
                      },
                    ],
                    price: 2495,
                    seo: null,
                    title: 'White / Large',
                  },
                  {
                    comparePrice: 0,
                    id: 39478760276146,
                    inStock: false,
                    lowStock: true,
                    options: [
                      {
                        name: 'Color',
                        position: 1,
                        value: 'Blue',
                      },
                      {
                        name: 'Size',
                        position: 2,
                        value: 'Small',
                      },
                    ],
                    price: 2495,
                    seo: null,
                    title: 'Blue / Small',
                  },
                  {
                    comparePrice: 0,
                    id: 39478760308914,
                    inStock: true,
                    lowStock: false,
                    options: [
                      {
                        name: 'Color',
                        position: 1,
                        value: 'Blue',
                      },
                      {
                        name: 'Size',
                        position: 2,
                        value: 'Medium',
                      },
                    ],
                    price: 2495,
                    seo: null,
                    title: 'Blue / Medium',
                  },
                  {
                    comparePrice: 0,
                    id: 39478760341682,
                    inStock: true,
                    lowStock: false,
                    options: [
                      {
                        name: 'Color',
                        position: 1,
                        value: 'Blue',
                      },
                      {
                        name: 'Size',
                        position: 2,
                        value: 'Large',
                      },
                    ],
                    price: 2495,
                    seo: null,
                    title: 'Blue / Large',
                  },
                ],
              },
            ],
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
      promo: {
        display: 'all',
        link: {
          isHome: false,
          isShop: true,
          slug: 'all',
          type: 'collection',
        },
        text: 'Free shipping on orders',
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

export default function Home({ data, preview, layout }: { preview?: string; layout: RootComponentInstance }) {
  useLivePreviewNextStaticProps({
    compositionId: layout?._id,
    projectId: preview,
  });

  const router = useRouter();

  if (!router.isFallback && !data) {
    return <Error statusCode={404} />;
  }

  const { site, page } = data;

  // @ts-ignore
  return (
    <Layout site={site} page={page}>
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
      <PreviewSwitch />
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
      // keeping the site ID in a static prop lets us hide it from non-preview users
      preview: preview ? '4553de09-49ff-49a1-806e-754f37357359' : null,
      data: pageData,
    },
  };
}
