import type { Meta, StoryObj } from '@storybook/react'

import { PreviewSection } from './index'

const meta = {
   title: 'Shared/ImageSlider/PreviewSection',
   component: PreviewSection,
   tags: ['autodocs'],
   args: {
      isMouseMoving: true,
      onMouseOver: () => undefined,
      onMouseOut: () => undefined,
      children: <div style={{ color: '#fff' }}>Preview content</div>,
   },
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta<typeof PreviewSection>

export default meta

type Story = StoryObj<typeof meta>

export const Visible: Story = {}

export const Hidden: Story = {
   args: {
      isMouseMoving: false,
   },
}
