type MockNavigationState = {
   pathname?: string
}

type MockRouter = {
   push: (href: string) => void
   replace: (href: string) => void
   back: () => void
   refresh: () => void
   prefetch: (href: string) => Promise<void>
}

const defaultState: Required<MockNavigationState> = {
   pathname: '/',
}

let navigationState = defaultState

const noop = () => {}

const router: MockRouter = {
   push: noop,
   replace: noop,
   back: noop,
   refresh: noop,
   prefetch: async () => {},
}

export const setNextNavigationMockState = (nextState?: MockNavigationState) => {
   navigationState = {
      ...defaultState,
      ...nextState,
   }
}

export const usePathname = () => navigationState.pathname

export const useRouter = () => router

export const useSearchParams = () => new URLSearchParams()

export const useParams = () => ({})

export const redirect = noop

export const notFound = noop
