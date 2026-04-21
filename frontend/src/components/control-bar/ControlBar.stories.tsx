import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState, storyPins } from '@/storybook/fixtures'

import ControlBar from './index'

const meta = {
   title: 'Shared/ControlBar',
   component: ControlBar,
   tags: ['autodocs'],
   args: {
      data: storyPins,
   },
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta<typeof ControlBar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   parameters: {
      preloadedState: basePreloadedState,
   },
}

export const InProgress: Story = {
   parameters: {
      preloadedState: {
         ...basePreloadedState,
         imageSlider: {
            ...basePreloadedState.imageSlider,
            isFinished: false,
            progressIndex: 1,
         },
         timer: {
            seconds: 120,
            isActive: true,
            isPaused: false,
         },
      },
   },
}
