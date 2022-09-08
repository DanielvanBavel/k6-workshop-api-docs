// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Full scale open source load testing for development teams with K6',
  tagline: 'Performancetesten met K6',
  url: 'https://codecentric.nl',
  baseUrl: '/k6-workshop-api-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/codecentric.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DanielvanBavel', // Usually your GitHub org/user name.
  projectName: 'k6-workshop-api-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/DanielvanBavel/k6-workshop-api-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Codecentric K6 Workshop',
        logo: {
          alt: 'codecentric logo',
          src: 'img/ccnl-colored.svg',
        },
        // items: [
        //   {
        //     type: 'doc',
        //     docId: 'intro',
        //     position: 'left',
        //     label: 'Tutorial',
        //   },
        //   {
        //     href: 'https://github.com/facebook/docusaurus',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        // ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} codecentric K6 workshop`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
