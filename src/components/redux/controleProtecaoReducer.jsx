import { createSlice } from '@reduxjs/toolkit'

const Controle_protecao = {
  descricao: '', 
}

const initialState = {
  controleProtecaoAtual: Controle_protecao,
}

export const controleProtecaoSlice = createSlice({
  name: 'ControleProtecao',
  initialState,
  reducers: {
    setControleProtecaoAtual: (state, action) => {
      state.controleProtecaoAtual = action.payload
    }
  }
})

export const { setControleProtecaoAtual } = controleProtecaoSlice.actions;
export default controleProtecaoSlice.reducer;

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