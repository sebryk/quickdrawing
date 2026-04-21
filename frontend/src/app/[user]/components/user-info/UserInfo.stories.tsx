import type { Meta, StoryObj } from '@storybook/react'

import UserInfo from './index'

const meta = {
   title: 'App/User/UserInfo',
   component: UserInfo,
   tags: ['autodocs'],
   args: {
      username: 'art_reference',
      profileImageUrl:
         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
   },
} satisfies Meta<typeof UserInfo>

export default meta

type Story = StoryObj<typeof meta>

export const WithAvatar: Story = {}

export const Placeholder: Story = {
   args: {
      profileImageUrl: null,
   },
}
