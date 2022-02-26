import { configureStore } from '@reduxjs/toolkit'
import agenteRiscoReducer from './agenteRiscoReducer'
import controleExposicaoReducer from './controleExposicaoReducer'
import controleProtecaoReducer from './controleProtecaoReducer'

const store = configureStore({
    reducer: {
      agenteRisco: agenteRiscoReducer,
      controleExposicao: controleExposicaoReducer,
      controleProtecao: controleProtecaoReducer,
    },
})

export default store