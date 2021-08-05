const infoMenu = [
  {
    _key: 'a9bb51208d83',
    _type: 'navPage',
    page: {
      isHome: false,
      isShop: false,
      slug: '/shop',
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
      slug: '/shop',
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
      slug: '/shop',
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
      slug: '/shop',
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
      slug: '/shop',
      type: 'page',
    },
    title: 'Privacy Policy',
    url: null,
  },
];

const shopMenu =  [
  {
    _key: '7beeb47d305a',
    _type: 'navPage',
    page: {
      isHome: false,
      isShop: true,
      slug: '23',
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
];

const footer = {
  blocks: [
    {
      newsletter: {
        errorMsg: "Whoops! That didn't work",
        id: 'footer',
        submit: null,
        successMsg: "Awesome! You're all set.",
        terms: 'I agree to the terms',
      },
      title: 'Newsletter',
    },
    {
      menu: {
        items: shopMenu,
      },
      title: 'Shop',
    },
    {
      menu: {
        items: infoMenu,
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
};

export default footer;
