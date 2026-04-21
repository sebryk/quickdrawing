import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState, extendedStoryPins } from '@/storybook/fixtures'

import { PreviewImages } from './index'

const meta = {
   title: 'Shared/ImageSlider/PreviewImages',
   component: PreviewImages,
   tags: ['autodocs'],
   args: {
      data: extendedStoryPins,
      currentIndex: 1,
      progressIndex: 3,
      isFinished: false,
   },
   parameters: {
      preloadedState: basePreloadedState,
   },
} satisfies Meta<typeof PreviewImages>

export default meta

type Story = StoryObj<typeof meta>

export const InProgress: Story = {}

export const Finished: Story = {
   args: {
      isFinished: true,
      progressIndex: 9,
   },
}
