import type { Meta, StoryObj } from '@storybook/react'

import Layout from './index'

const meta = {
   title: 'Shared/Layout',
   component: Layout,
   tags: ['autodocs'],
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta<typeof Layout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      children: (
         <section style={{ minHeight: '50vh', padding: '4rem 2rem' }}>
            <h1>Storybook canvas</h1>
            <p>Layout with header, content area, and footer.</p>
         </section>
      ),
   },
}
