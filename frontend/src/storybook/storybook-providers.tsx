import type { StorybookPreloadedState } from './fixtures'

import { useRef, type PropsWithChildren } from 'react'

import { Provider } from 'react-redux'

import { createStorybookStore } from './storybook-store'

type StorybookProvidersProps = PropsWithChildren<{
   preloadedState?: StorybookPreloadedState
}>

export const StorybookProviders = ({ children, preloadedState }: StorybookProvidersProps) => {
   const storeRef = useRef(createStorybookStore(preloadedState))

   return <Provider store={storeRef.current}>{children}</Provider>
}
