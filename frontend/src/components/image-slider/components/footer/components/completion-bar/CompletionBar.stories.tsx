import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState } from '@/storybook/fixtures'

import CompletionBar from './index'

const meta = {
   title: 'Shared/ImageSlider/CompletionBar',
   component: CompletionBar,
   tags: ['autodocs'],
} satisfies Meta<typeof CompletionBar>

export default meta

type Story = StoryObj<typeof meta>

export const Partial: Story = {
   parameters: {
      preloadedState: basePreloadedState,
   },
}

export const Complete: Story = {
   parameters: {
      preloadedState: {
         ...basePreloadedState,
         completionBar: {
            completedPercentOfTime: 100,
            key: 1,
            transitionDuration: '1s',
         },
      },
   },
}
