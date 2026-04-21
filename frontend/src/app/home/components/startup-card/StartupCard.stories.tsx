import type { Meta, StoryObj } from '@storybook/react'

import StartupCard from './startup-card'

const meta = {
   title: 'App/Home/StartupCard',
   component: StartupCard,
   tags: ['autodocs'],
   args: {
      className: '',
      onQuickSession: () => undefined,
      userSlug: null,
      getAuthUrl: () => Promise.resolve('https://example.com/pinterest-auth'),
   },
} satisfies Meta<typeof StartupCard>

export default meta

type Story = StoryObj<typeof meta>

export const LoggedOut: Story = {}

export const LoggedIn: Story = {
   args: {
      userSlug: 'artist-demo',
   },
}

export const AuthFailure: Story = {
   args: {
      getAuthUrl: () => Promise.reject(new Error('Auth failed')),
   },
}
