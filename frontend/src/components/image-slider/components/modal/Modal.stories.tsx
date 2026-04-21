import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState } from '@/storybook/fixtures'

import Modal from './index'

const meta = {
   title: 'Shared/ImageSlider/Modal',
   component: Modal,
   tags: ['autodocs'],
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Finished: Story = {
   parameters: {
      preloadedState: {
         ...basePreloadedState,
         completionBar: {
            completedPercentOfTime: 100,
            key: 0,
            transitionDuration: '1s',
         },
         imageSlider: {
            ...basePreloadedState.imageSlider,
            isFinished: true,
         },
      },
   },
}

export const Interrupted: Story = {
   parameters: {
      preloadedState: {
         ...basePreloadedState,
         completionBar: {
            completedPercentOfTime: 42,
            key: 0,
            transitionDuration: '1s',
         },
         imageSlider: {
            ...basePreloadedState.imageSlider,
            isFinished: false,
         },
      },
   },
}
