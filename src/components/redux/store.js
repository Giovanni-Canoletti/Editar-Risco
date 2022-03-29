import { configureStore } from '@reduxjs/toolkit'
import editarRiscoReducer from './editarRiscoReducer'

const store = configureStore({
  reducer: {
    agenteRisco: editarRiscoReducer,
  },
})

export default store