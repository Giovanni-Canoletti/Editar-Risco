import { createSlice } from '@reduxjs/toolkit'

const AgenteRiscoModel = {
  risco: '', 
  descricao: '', 
  fonteGeradora: '', 
  atividade: '',
  tecnicaMedicao: '', 
  intensidade: '', 
  unidade: '', 
  limiteExposicao: '', 
  possiveisDanos: ''
}

const initialState = {
  agenteAtual: AgenteRiscoModel,
}

export const agenteSlice = createSlice({
  name: 'agenteRisco',
  initialState,
  reducers: {
    setAgenteAtual: (state, action) => {
      state.agenteAtual = action.payload
    },
  }
})

export const { setAgenteAtual } = agenteSlice.actions;
export default agenteSlice.reducer;

/*
name: 'user',
  initialState: {
    Agente_Risco: '',
    Controle_Exposicao: '',
    Controle_Protecao: '',
  },
  reducers: (state, action) => {
    state.Agente_Risco = action.payload.Agente_Risco;
    state.Controle_Exposicao = action.payload.Controle_Exposicao;
    state.Controle_Protecao = action.payload.Controle_Protecao;
    
  },
*/