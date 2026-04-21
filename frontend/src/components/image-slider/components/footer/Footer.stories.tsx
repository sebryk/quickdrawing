import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState, storyPins } from '@/storybook/fixtures'

import { Footer } from './index'

const meta = {
   title: 'Shared/ImageSlider/Footer',
   component: Footer,
   tags: ['autodocs'],
   args: {
      currentIndex: 0,
      data: storyPins,
      isMouseMoving: true,
      onMouseOver: () => undefined,
      onMouseOut: () => undefined,
   },
   parameters: {
      layout: 'fullscreen',
      preloadedState: basePreloadedState,
   },
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Hidden: Story = {
   args: {
      isMouseMoving: false,
   },
}
