import type { Meta, StoryObj } from '@storybook/react'

import type { ComponentProps } from 'react'

import Tooltip from './index'

const meta = {
   title: 'UI/Tooltip',
   component: Tooltip,
   tags: ['autodocs'],
   args: {
      children: <span style={{ padding: '6px 10px', border: '1px solid #ccc' }}>Hover me</span>,
      content: 'Tooltip content',
      disabled: false,
   },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   render: (args: ComponentProps<typeof Tooltip>) => <Tooltip {...args} />,
}

export const Disabled: Story = {
   args: {
      children: <span style={{ padding: '6px 10px', border: '1px solid #ccc' }}>Hover me</span>,
      disabled: true,
   },
   render: Default.render,
}
