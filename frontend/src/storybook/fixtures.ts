import type { StorybookStoreState } from './storybook-store'
import type { AccountBoardWithPins } from '@/services/pinterest-boards'
import type { AccountPin } from '@/services/pinterest-pins'

export type StorybookPreloadedState = Partial<StorybookStoreState>

export const storyPins: AccountPin[] = [
   {
      id: 'pin-1',
      title: 'City at night',
      description: 'Sample pin',
      link: 'https://example.com/pin-1',
      createdAt: '2026-03-20T10:00:00.000Z',
      imageUrl:
         'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
   },
   {
      id: 'pin-2',
      title: 'Mountain cabin',
      description: 'Sample pin',
      link: 'https://example.com/pin-2',
      createdAt: '2026-03-20T10:00:00.000Z',
      imageUrl:
         'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
   },
   {
      id: 'pin-3',
      title: 'Studio portrait',
      description: 'Sample pin',
      link: 'https://example.com/pin-3',
      createdAt: '2026-03-20T10:00:00.000Z',
      imageUrl:
         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
   },
   {
      id: 'pin-4',
      title: 'Desert road',
      description: 'Sample pin',
      link: 'https://example.com/pin-4',
      createdAt: '2026-03-20T10:00:00.000Z',
      imageUrl:
         'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
   },
]

export const extendedStoryPins: AccountPin[] = Array.from({ length: 10 }, (_, index) => ({
   ...storyPins[index % storyPins.length],
   id: `pin-${index + 1}`,
   title: `Pin ${index + 1}`,
}))

export const storyBoards: AccountBoardWithPins[] = [
   {
      id: 'board-1',
      name: 'Character sketches',
      description: 'Character studies',
      privacy: 'PUBLIC',
      createdAt: '2026-03-20T10:00:00.000Z',
      imageUrl: storyPins[0].imageUrl,
      previewPins: storyPins.slice(0, 3),
      pins: storyPins,
   },
   {
      id: 'board-2',
      name: 'Environments',
      description: 'Landscape references',
      privacy: 'PUBLIC',
      createdAt: '2026-03-20T10:00:00.000Z',
      imageUrl: storyPins[1].imageUrl,
      previewPins: storyPins.slice(1, 3),
      pins: storyPins.slice(1),
   },
]

export const basePreloadedState = {
   completionBar: {
      completedPercentOfTime: 24,
      key: 0,
      transitionDuration: '1s',
   },
   imageSlider: {
      currentIndex: 0,
      isFinished: true,
      isLoading: false,
      isMouseMoving: true,
      isMouseOver: false,
      key: 0,
      progressIndex: 1,
      sessionType: 'quick',
   },
   modal: {
      isOpen: false,
   },
   pins: {
      pins: storyPins,
      selectedBoardId: null,
      selectedPins: [],
   },
   selectedOptions: {
      count: { label: '4 images', value: 4 },
      duration: { label: '5 min', value: 300 },
      object: { label: 'Human', value: 'human' },
      gender: { label: 'All', value: '' },
      clothing: { label: 'Casual', value: 'casual' },
   },
   timer: {
      seconds: 87,
      isActive: false,
      isPaused: true,
   },
} satisfies StorybookPreloadedState
