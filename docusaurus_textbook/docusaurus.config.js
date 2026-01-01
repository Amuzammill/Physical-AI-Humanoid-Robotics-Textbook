import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Learning Physical AI and Robotics',
  favicon: 'img/favicon.ico',

  // Production URL of your site
  url: 'https://physicalhumanoidaitextbook.vercel.app', // <-- YOUR VERCEL URL
  baseUrl: '/', // <-- VERY IMPORTANT for Vercel to avoid 404

  // GitHub pages deployment config (optional)
  organizationName: 'Amuzammill',
  projectName: 'physical-ai-humanoid-robotics-textbook',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // <-- must use require.resolve
          editUrl: 'https://github.com/Amuzammill/Physical-AI-Humanoid-Textbook/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Amuzammill/Physical-AI-Humanoid-Textbook/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/ph-ai-logo.png',
    navbar: {
      title: 'Physical AI & Humanoid Robotics Textbook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ph-ai-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/Amuzammill',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Amuzammill',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook, Built with ❤️ by Muzamil Ahmed.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
