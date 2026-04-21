import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState, storyPins } from '@/storybook/fixtures'

import ImageSlider from './index'

const meta = {
   title: 'Shared/ImageSlider',
   component: ImageSlider,
   tags: ['autodocs'],
   args: {
      data: storyPins,
   },
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta<typeof ImageSlider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   parameters: {
      preloadedState: basePreloadedState,
   },
}

export const SessionInProgress: Story = {
   parameters: {
      preloadedState: {
         ...basePreloadedState,
         imageSlider: {
            ...basePreloadedState.imageSlider,
            isFinished: false,
            progressIndex: 1,
         },
         timer: {
            seconds: 140,
            isActive: true,
            isPaused: false,
         },
      },
   },
}
