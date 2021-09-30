const path = require("path")
const languages = require("./src/i18n/languages")
const sharp = require("sharp")

// Avoid segfaults on Netlify
// https://github.com/gatsbyjs/gatsby/issues/6291
sharp.cache(false)
sharp.simd(false)

module.exports = {
  siteMetadata: {
    author: `Fragaria s.r.o.`,
    title: "Karmen",
    email: "karmen@fragaria.cz",
    description:
      "Open-source solution for multi-printer management. It allows one to control a bunch of printers remotely, features an efficient management of print queues and offers smooth and user-friendly web interface.",
    keywords: [
      "software",
      "software development",
      "web apps",
      "vývoj software",
      "webové aplikace",
      "python",
      "javascript",
      "react",
      "html",
      "css",
    ],
    siteUrl: process.env.SITE_URL || "https://karmen.tech", // no trailing slash!
    languages,
    checkout: {
      enabled: (process.env.CHECKOUT_ENABLED || "1") === "1",
      octobatConfigured: !!process.env.OCTOBAT_API_KEY,
      octobatApiKey: process.env.OCTOBAT_API_KEY || "???",
      octobatBeanieConfigurationId:
        process.env.OCTOBAT_BEANIE_CONFIGURATION_ID ||
        "oc_beanie_cc_15861720512wyfd43d44f5",
    },
    functions: {
      rootUrl: process.env.NETLIFY_FUNCTION_ROOT || "/",
    },
    company: {
      websiteTitle: "Karmen",
      officialName: "Fragaria s.r.o.",
      phone: "+420 222 581 311",
      contactEmail: "karmen@karmen.tech",
      ico: "48590151",
      dic: "CZ48590151",
      accountNr: "2700620429/2010",
      listedAt: "Spisová značka: C 18340 vedená u Městského soudu v Praze",
      address: {
        residence: {
          line1: "Ječná 507/6",
          line2: "120 00 Praha 2",
          line3: "Czech Republic",
          mapLink:
            "https://www.google.com/maps/place/Fragaria+s.r.o./@50.0754397,14.420427,17z/data=!4m13!1m7!3m6!1s0x470b94f4a0a239d7:0xb2eea226236a6892!2zSmXEjW7DoSA1MDcvNiwgMTIwIDAwIE5vdsOpIE3Em3N0bw!3b1!8m2!3d50.0754363!4d14.4226157!3m4!1s0x470b94f4a0a6806f:0x4cd2eac776b26943!8m2!3d50.07548!4d14.42264",
        },
        billing: {
          line1: "Pampelišková 2013/8",
          line2: "106 00 Praha 10",
          line3: "Czech Republic",
        },
      },
      social: {
        twitter: "Karmen3D",
        github: "fragaria/karmen",
        youtube: "UC9kcYa3r0x4MLR47i1flnFw",
        readthedocs: "karmen",
        facebook: "karmen3D",
        gitter: "fragaria/karmen",
      },
    },
    pillDocs: "https://docs.karmen.tech/#/pill-getting-started",
    karmenDocs: "https://docs.karmen.tech/#/quickstart",
    clients: [
      {
        title: "3darena",
        img: "/portfolio/3darena-logo.png",
        href: "https://3darena.cz/",
      },
      {
        title: "cwrkjzd",
        img: "/portfolio/cwrkjzd-logo.png",
        href: "https://www.cwrkjzd.cz/",
      },
      {
        title: "3D print na FIT ČVUT",
        img: "/portfolio/cvut-logo.png",
        href: "https://3dprint.fit.cvut.cz/",
      },
      {
        title: "anyonego",
        img: "/portfolio/anyonego-logo.png",
        href: "https://anyonego.com",
      },
      {
        title: "FIT",
        img: "/portfolio/fit-cvut-logo.svg",
        href: "https://fit.cvut.cz/",
      },
      { title: "GJK", img: "/portfolio/gjk-logo.png", href: "https://gjk.cz/" },
      {
        title: "IKEM",
        img: "/portfolio/ikem-logo.png",
        href: "https://www.ikem.cz/",
      },
      {
        title: "Třeběšín",
        img: "/portfolio/trebesin-logo.png",
        href: "https://www.trebesin.cz/",
      },
    ],
    productsNav: {
      en: [
        {
          name: "Karmen Cloud",
          url: `/en/products/karmen-cloud`,
        },
        {
          name: "Karmen Pill",
          url: `/en/products/karmen-pill`,
        },
        {
          name: "Karmen Pill DIY",
          url: `/en/products/karmen-pill-diy`,
        },
      ],
      cs: [
        {
          name: "Karmen Cloud",
          url: `/cs/produkty/karmen-cloud`,
        },
        {
          name: "Karmen Pill",
          url: `/cs/produkty/karmen-pill`,
        },
        {
          name: "Karmen Pill skládačka",
          url: `/cs/produkty/karmen-pill-skladacka`,
        },
      ],
    },
    nav: {
      en: [
        {
          name: "Products",
          url: `/en/products/`,
        },
        {
          name: "Karmen story",
          url: `/en/story/`,
        },
        {
          name: "Contact",
          url: `/en/contact/`,
        },
        {
          name: "Community",
          url: `/en/community/`,
        },
        {
          name: "Blog",
          url: `/en/blog/`,
        },
        {
          name: "FAQ",
          url: `/en/faq/`,
        },
      ],
      cs: [
        {
          name: "Produkty",
          url: `/cs/produkty`,
        },
        {
          name: "Cena",
          url: `/cs/#buy`,
        },
        {
          name: "Příběh Karmen",
          url: `/cs/pribeh/`,
        },
        {
          name: "Kontakt",
          url: `/cs/kontakt/`,
        },
        {
          name: "Blog",
          url: `/cs/blog/`,
        },
        {
          name: "Komunita",
          url: `/cs/komunita/`,
        },
        {
          name: "FAQ",
          url: `/cs/faq/`,
        },
      ],
    },
    footerNav: {
      en: [
        [
          {
            name: "Log in to Karmen Cloud",
            url: "https://cloud.karmen.tech",
          },
          {
            name: "Source code on GitHub",
            url: "https://github.com/fragaria/karmen",
          },
        ],
        [
          {
            name: "Karmen Cloud & Karmen Pill Documentation",
            url: "https://docs.karmen.tech/",
          },
          {
            name: "Connecting other OctoPrint boxes to Karmen Cloud",
            url:
              "https://medium.com/karmen3d/connecting-octoprint-boxes-to-karmen-53afc48ea9b6",
          },
          {
            name: "Buy Pill on Mall.cz",
            url:
              "https://www.mall.cz/prislusenstvi-3d-tisk/karmen-pill-karmen-pill-100020418042",
          },
        ],
      ],
      cs: [
        [
          {
            name: "Přihlásit se do Karmen Cloudu",
            url: "https://cloud.karmen.tech",
          },
          {
            name: "Zdrojový kód na GitHubu",
            url: "https://github.com/fragaria/karmen",
          },
        ],
        [
          {
            name: "Dokumentace Karmen Cloud a Karmen Pill",
            url: "https://docs.karmen.tech/",
          },
          {
            name: "Připojení zařízení s OctoPrint do Karmen Cloudu",
            url:
              "https://medium.com/karmen3d/connecting-octoprint-boxes-to-karmen-53afc48ea9b6",
          },
          {
            name: "Nákup pillu přes Mall.cz",
            url:
              "https://www.mall.cz/prislusenstvi-3d-tisk/karmen-pill-karmen-pill-100020418042",
          },
        ],
      ],
    },
  },
  plugins: [
    /**
     * Adds SASS support.
     */
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
          },
        },
      },
    },
    /**
     * Allows modifications of <head> tags from any component
     */
    `gatsby-plugin-react-helmet`,
    /**
     * Adds aliases for src/pages/assets directories.
     * e.g. import someImage from 'assets/img/myimage.png'
     */
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        layouts: path.join(__dirname, "src/layouts"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/assets"),
        translations: path.join(__dirname, "src/i18n/translations"),
      },
    },
    /**
     * Filesystem source for gatsby transformers.
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "src", "assets", "img"),
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/src/resources`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /**
     * Creates website manifest (favicons etc.)
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karmen`,
        short_name: `Karmen`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ea272e`,
        display: `minimal-ui`,
        icon: `src/assets/img/karmen-logo-rect.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        prefixDefault: true,
      },
    },
    /**
     * Load Octobat Beanie checkout script
     */
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        disable: !process.env.OCTOBAT_API_KEY,
        src:
          "https://cdn.jsdelivr.net/gh/0ctobat/octobat-beanie.js@latest/dist/octobat-beanie.min.js",
      },
    },
    // Generate sitemap in production mode
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: ["/cs/platba-zrusena/", "/en/payment-cancelled/"],
      },
    },
    // Facebook tracking
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1437679376404045",
      },
    },
    // Twitter tracking
    {
      resolve: `gatsby-plugin-twitter-pixel`,
      options: {
        pixelId: "o3y3k",
      },
    },
    // Google Tag Manager
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TX6XRX5",
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "route-change",
      },
    },
  ],
}
