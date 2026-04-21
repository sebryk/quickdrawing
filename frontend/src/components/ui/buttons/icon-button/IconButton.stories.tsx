import type { Meta, StoryObj } from '@storybook/react'

import { MdClose } from 'react-icons/md'

import IconButton from './index'

const meta = {
   title: 'UI/Buttons/IconButton',
   component: IconButton,
   tags: ['autodocs'],
   args: {
      variant: 'close',
      type: 'button',
      disabled: false,
   },
   argTypes: {
      onClick: { action: 'clicked' },
   },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Close: Story = {}

export const Back: Story = {
   args: {
      variant: 'back',
   },
}

export const Logout: Story = {
   args: {
      variant: 'logout',
   },
}

export const CustomIcon: Story = {
   args: {
      icon: MdClose,
   },
}

export const AsLink: Story = {
   args: {
      href: '/',
   },
}
