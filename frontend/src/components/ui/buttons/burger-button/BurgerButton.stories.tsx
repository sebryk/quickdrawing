import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import BurgerButton from './burger-button'

const meta = {
   title: 'UI/Buttons/BurgerButton',
   component: BurgerButton,
   tags: ['autodocs'],
   args: {
      isBurgerMenuOpen: false,
      toggleBurgerMenu: () => undefined,
   },
} satisfies Meta<typeof BurgerButton>

export default meta

type Story = StoryObj<typeof meta>

export const Toggle: Story = {
   render: () => {
      const [open, setOpen] = useState(false)
      return (
         <BurgerButton isBurgerMenuOpen={open} toggleBurgerMenu={() => setOpen((prev) => !prev)} />
      )
   },
}

export const Open: Story = {
   args: {
      isBurgerMenuOpen: true,
      toggleBurgerMenu: () => undefined,
   },
}
