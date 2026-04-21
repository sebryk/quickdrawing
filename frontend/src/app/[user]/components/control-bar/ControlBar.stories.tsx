import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState, storyPins } from '@/storybook/fixtures'

import ControlBar from './index'

const meta = {
   title: 'App/User/ControlBar',
   component: ControlBar,
   tags: ['autodocs'],
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta<typeof ControlBar>

export default meta

type Story = StoryObj<typeof meta>

export const WithSelection: Story = {
   parameters: {
      preloadedState: {
         ...basePreloadedState,
         pins: {
            pins: storyPins,
            selectedBoardId: 'board-1',
            selectedPins: storyPins,
         },
      },
   },
}

export const Empty: Story = {
   parameters: {
      preloadedState: {
         ...basePreloadedState,
         pins: {
            pins: [],
            selectedBoardId: null,
            selectedPins: [],
         },
      },
   },
}
