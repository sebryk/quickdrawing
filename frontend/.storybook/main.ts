import type { StorybookConfig } from '@storybook/react-vite'

const srcPath = new URL('../src', import.meta.url).pathname

const config: StorybookConfig = {
   stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
   addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
   ],
   framework: {
      name: '@storybook/react-vite',
      options: {},
   },
   docs: {
      autodocs: 'tag',
   },
   viteFinal: async (config) => ({
      ...config,
      resolve: {
         ...config.resolve,
         alias: [
            ...(Array.isArray(config.resolve?.alias) ? config.resolve.alias : []),
            { find: '@', replacement: srcPath },
            {
               find: 'next/navigation',
               replacement: `${srcPath}/storybook/mocks/next-navigation.ts`,
            },
            {
               find: 'next/link',
               replacement: `${srcPath}/storybook/mocks/next-link.tsx`,
            },
            {
               find: 'next/image',
               replacement: `${srcPath}/storybook/mocks/next-image.tsx`,
            },
            {
               find: 'next/headers',
               replacement: `${srcPath}/storybook/mocks/next-headers.ts`,
            },
         ],
      },
   }),
}

export default config
