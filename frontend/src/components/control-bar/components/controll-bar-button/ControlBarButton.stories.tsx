import type { Meta, StoryObj } from '@storybook/react'

import ControlBarButton from './index'

const meta = {
   title: 'Shared/ControlBarButton',
   component: ControlBarButton,
   tags: ['autodocs'],
   args: {
      isImageSliderFinished: true,
      variant: 'play',
   },
} satisfies Meta<typeof ControlBarButton>

export default meta

type Story = StoryObj<typeof meta>

export const Play: Story = {}

export const Pause: Story = {
   args: {
      variant: 'pause',
   },
}

export const DisabledProgression: Story = {
   args: {
      variant: 'next',
      disabled: true,
      isImageSliderFinished: false,
   },
}
