import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filme } from "Types/Filme";
import { FilmeReducer } from "Types/FilmeReducer";

const initialState: FilmeReducer = {
  itens: 0,
  lista: [],
};

interface SetQuantidadeById {
  id: number;
  quantidade: number;
}

export const filmes = createSlice({
  name: "filmes",
  initialState,
  reducers: {
    setAll: (state, action: PayloadAction<Filme[]>) => {
      state.lista = action.payload;
    },
    addToCart: (state, action: PayloadAction<Filme>) => {
      const filmeExistente = state.lista.find(
        (filme) => filme.id === action.payload.id
      );
      filmeExistente!.quantidade++;
      let quantidadeDeItens = 0;
      for (const filme of state.lista)
        if (filme.quantidade) quantidadeDeItens++;
      state.itens = quantidadeDeItens;
    },
    removeFilmeFromId: (state, action: PayloadAction<number>) => {
      const indexFilme = state.lista.findIndex(
        (filme) => filme.id === action.payload
      );
      state.lista[indexFilme].quantidade = 0;
      state.itens--;
    },
    increaseQuantidadeById: (state, action: PayloadAction<number>) => {
      const indexFilme = state.lista.findIndex(
        (filme) => filme.id === action.payload
      );
      state.lista[indexFilme].quantidade++;
    },
    decreaseQuantidadeById: (state, action: PayloadAction<number>) => {
      const indexFilme = state.lista.findIndex(
        (filme) => filme.id === action.payload
      );
      state.lista[indexFilme].quantidade--;
      if (!state.lista[indexFilme].quantidade) state.itens--;
    },
    setQuantidadeById: (state, action: PayloadAction<SetQuantidadeById>) => {
      const indexFilme = state.lista.findIndex(
        (filme) => filme.id === action.payload.id
      );
      state.lista[indexFilme].quantidade = action.payload.quantidade;
      if (action.payload.quantidade <= 0) {
        state.lista[indexFilme].quantidade = 0;
        state.itens--;
      }
    },
    clearCarrinho: (state) => {
      for (const filme of state.lista) {
        filme.quantidade = 0;
      }
      state.itens = 0;
    },
  },
});

export const {
  setAll,
  addToCart,
  removeFilmeFromId,
  increaseQuantidadeById,
  decreaseQuantidadeById,
  setQuantidadeById,
  clearCarrinho,
} = filmes.actions;
export default filmes.reducer;
