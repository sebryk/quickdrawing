import type { Meta, StoryObj } from '@storybook/react'

import ContactForm from './contact-form'

const meta = {
   title: 'Shared/ContactForm',
   component: ContactForm,
   tags: ['autodocs'],
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof ContactForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   render: () => (
      <div style={{ maxWidth: 520 }}>
         <ContactForm />
      </div>
   ),
}
