const menuDesktopLeftItems = [
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
          slug: '23',
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
          slug: '18',
          type: 'collection',
        },
        title: 'Bath',
        url: null,
      },
      {
        _key: 'cd732f194034',
        _type: 'navPage',
        page: {
          isHome: false,
          isShop: false,
          slug: '19',
          type: 'collection',
        },
        title: 'Garden',
        url: null,
      },
      {
        _key: 'eba12c55aa75',
        _type: 'navPage',
        page: {
          isHome: false,
          isShop: false,
          slug: '21',
          type: 'collection',
        },
        title: 'Kitchen',
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
];

const menuDesktopRightItems = [
  {
    _key: 'dacf4cf2d342',
    _type: 'navLink',
    dropdownItems: null,
    featured: null,
    page: null,
    title: 'Account',
    url: 'https://bcunfrmhackathon.netlify.app/account',
  },
];

const menuMobilePrimaryItems = [
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
          slug: '23',
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
];

const menuMobileSecondaryItems = [
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
];

const header = {
  menuDesktopLeft: {
    items: menuDesktopLeftItems,
  },
  menuDesktopRight: {
    items: menuDesktopRightItems,
  },
  menuMobilePrimary: {
    items: menuMobilePrimaryItems,
  },
  menuMobileSecondary: {
    items: menuMobileSecondaryItems,
  },
};

export default header;
