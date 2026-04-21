import type { Meta, StoryObj } from '@storybook/react'

import { storyPins } from '@/storybook/fixtures'

import { PreviewDots } from './index'

const meta = {
   title: 'Shared/ImageSlider/PreviewDots',
   component: PreviewDots,
   tags: ['autodocs'],
   args: {
      data: storyPins,
      currentIndex: 1,
      isMouseMoving: true,
   },
} satisfies Meta<typeof PreviewDots>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Docked: Story = {
   args: {
      isMouseMoving: false,
   },
}
