import type { Meta, StoryObj } from '@storybook/react'

import { basePreloadedState } from '@/storybook/fixtures'

import { options } from '../../settings'
import ObjectsFormSelect from './index'

const meta = {
   title: 'Shared/ObjectsFormSelect',
   component: ObjectsFormSelect,
   tags: ['autodocs'],
   args: {
      name: 'object',
      options: options.object,
      placeholder: 'Select object',
      isVisible: true,
      isClearable: true,
   },
} satisfies Meta<typeof ObjectsFormSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      children: 'object',
   },
   parameters: {
      preloadedState: basePreloadedState,
   },
}

export const Hidden: Story = {
   args: {
      children: 'object',
      isVisible: false,
   },
}
