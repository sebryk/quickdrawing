import type { Meta, StoryObj } from '@storybook/react'

import { NavigationButton } from './index'

const meta = {
   title: 'Shared/ImageSlider/NavigationButton',
   component: NavigationButton,
   tags: ['autodocs'],
   args: {
      isMouseMoving: true,
      isVisible: true,
      onClick: () => undefined,
      onMouseOver: () => undefined,
      onMouseOut: () => undefined,
      variant: 'left',
   },
} satisfies Meta<typeof NavigationButton>

export default meta

type Story = StoryObj<typeof meta>

export const Left: Story = {}

export const Right: Story = {
   args: {
      variant: 'right',
   },
}

export const Hidden: Story = {
   args: {
      isMouseMoving: false,
   },
}
