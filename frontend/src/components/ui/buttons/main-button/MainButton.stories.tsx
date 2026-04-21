import type { Meta, StoryObj } from '@storybook/react'

import { BiChevronRight } from 'react-icons/bi'

import MainButton from './index'

const meta = {
   title: 'UI/Buttons/MainButton',
   component: MainButton,
   tags: ['autodocs'],
   args: {
      children: 'Primary',
      variant: 'primary',
      type: 'button',
      disabled: false,
   },
   argTypes: {
      onClick: { action: 'clicked' },
   },
} satisfies Meta<typeof MainButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithArrowVariant: Story = {
   args: {
      children: 'Next',
      variant: 'primary-with-arrow',
   },
}

export const WithCustomIcon: Story = {
   args: {
      children: 'Custom icon',
      icon: BiChevronRight,
      iconPosition: 'left',
   },
}

export const AsLink: Story = {
   args: {
      children: 'Open gallery',
      href: '/drawing',
      target: '_self',
   },
}

export const Disabled: Story = {
   args: {
      children: 'Disabled',
      disabled: true,
   },
}
