import { createSlice } from '@reduxjs/toolkit'

const Controle_exposicao = {
  descricao: '', 
  resultado: '',
}

const initialState = {
  controleExpoAtual: Controle_exposicao,
}

export const controleExpoSlice = createSlice({
  name: 'ControleExposicao',
  initialState,
  reducers: {
    setControleExpoAtual: (state, action) => {
      state.controleExpoAtual = action.payload
    }
  }
})

export const { setControleExpoAtual } = controleExpoSlice.actions;
export default controleExpoSlice.reducer;

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