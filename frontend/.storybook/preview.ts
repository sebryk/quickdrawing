import type { Decorator, Preview } from '@storybook/react'
import { createElement } from 'react'
import '../src/styles/global.scss'
import { setNextNavigationMockState } from '../src/storybook/mocks/next-navigation'
import { StorybookProviders } from '../src/storybook/storybook-providers'

const withStorybookProviders: Decorator = (Story, context) => {
   setNextNavigationMockState(context.parameters.nextNavigation)

   return createElement(
      StorybookProviders,
      {
         preloadedState: context.parameters.preloadedState,
      },
      createElement(Story),
   )
}

const preview: Preview = {
   decorators: [withStorybookProviders],
   parameters: {
      actions: { argTypesRegex: '^on[A-Z].*' },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
      layout: 'centered',
      nextNavigation: {
         pathname: '/',
      },
   },
}

export default preview
