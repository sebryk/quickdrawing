import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState } from '@/storybook/fixtures'

import Timer from './index'

const meta = {
   title: 'Shared/Timer',
   component: Timer,
   tags: ['autodocs'],
} satisfies Meta<typeof Timer>

export default meta

type Story = StoryObj<typeof meta>

export const Paused: Story = {
   parameters: {
      preloadedState: basePreloadedState,
   },
}

export const Running: Story = {
   parameters: {
      preloadedState: {
         ...basePreloadedState,
         timer: {
            seconds: 132,
            isActive: true,
            isPaused: false,
         },
      },
   },
}
