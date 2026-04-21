import type { StorybookPreloadedState } from './fixtures'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { imagesApi } from '@/api/imagesApi'
import completionBarReducer from '@/store/slices/completion-bar-slice'
import imageSliderReducer from '@/store/slices/image-slider-slice'
import modalReducer from '@/store/slices/modal-slice'
import objectsFormReducer from '@/store/slices/objects-form-slice'
import pinsReducer from '@/store/slices/pins-slice'
import timerReducer from '@/store/slices/timer-slice'

const storybookReducer = combineReducers({
   selectedOptions: objectsFormReducer,
   modal: modalReducer,
   timer: timerReducer,
   completionBar: completionBarReducer,
   imageSlider: imageSliderReducer,
   pins: pinsReducer,
   [imagesApi.reducerPath]: imagesApi.reducer,
})

export const createStorybookStore = (preloadedState?: StorybookPreloadedState) => {
   return configureStore({
      reducer: storybookReducer,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            serializableCheck: false,
         }).concat(imagesApi.middleware),
      preloadedState,
   })
}

export type StorybookStoreState = ReturnType<typeof storybookReducer>
