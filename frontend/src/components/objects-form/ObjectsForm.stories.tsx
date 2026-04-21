import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState } from '@/storybook/fixtures'

import ObjectsForm from './index'

const meta = {
   title: 'Shared/ObjectsForm',
   component: ObjectsForm,
   tags: ['autodocs'],
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof ObjectsForm>

export default meta

type Story = StoryObj<typeof meta>

export const HumanSelection: Story = {
   parameters: {
      preloadedState: basePreloadedState,
   },
}

export const MinimalSelection: Story = {
   parameters: {
      preloadedState: {
         ...basePreloadedState,
         selectedOptions: {
            duration: { label: '5 min', value: 300 },
            object: { label: 'Car', value: 'car' },
            count: { label: '6 images', value: 6 },
         },
      },
   },
}

export const IncompleteSelection: Story = {
   parameters: {
      preloadedState: {
         ...basePreloadedState,
         selectedOptions: {
            duration: { label: '5 min', value: 300 },
         },
      },
   },
}
