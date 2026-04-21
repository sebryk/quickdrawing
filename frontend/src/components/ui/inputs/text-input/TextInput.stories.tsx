import type { Meta, StoryObj } from '@storybook/react'

import TextInput from './index'

const meta = {
   title: 'UI/Inputs/TextInput',
   component: TextInput,
   tags: ['autodocs'],
   args: {
      className: '',
      name: 'email',
      placeholder: 'Your email',
      type: 'email',
   },
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Input: Story = {}

export const Textarea: Story = {
   args: {
      name: 'message',
      placeholder: 'Your message',
   },
}

export const NameField: Story = {
   args: {
      name: 'name',
      placeholder: 'Your name',
      type: 'text',
   },
}
