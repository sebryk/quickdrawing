import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState, storyBoards } from '@/storybook/fixtures'

import PinsList from './index'

const meta = {
   title: 'App/User/PinsList',
   component: PinsList,
   tags: ['autodocs'],
   args: {
      boards: storyBoards,
   },
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta<typeof PinsList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   parameters: {
      preloadedState: basePreloadedState,
   },
}

export const Empty: Story = {
   args: {
      boards: [],
   },
}
