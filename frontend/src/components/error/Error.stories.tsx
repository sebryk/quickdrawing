import type { Meta, StoryObj } from '@storybook/react'

import Error from './error'

const meta = {
   title: 'Shared/Error',
   component: Error,
   tags: ['autodocs'],
} satisfies Meta<typeof Error>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      children: 'Something went wrong',
   },
}

export const NotFound: Story = {
   args: {
      children: 'Page not found',
   },
}
