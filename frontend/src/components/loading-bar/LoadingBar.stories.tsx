import type { Meta, StoryObj } from '@storybook/react'

import LoadingBar from './loading-bar'

const meta = {
   title: 'Shared/LoadingBar',
   component: LoadingBar,
   tags: ['autodocs'],
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof LoadingBar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   render: () => (
      <div style={{ height: 10, width: 320 }}>
         <LoadingBar />
      </div>
   ),
}
