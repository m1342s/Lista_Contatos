/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contato } from "../../models/Contato";

type ContatoState={
  itens:Contato[]
}

const initialState:ContatoState={
  itens:[
    {
      nome:'Marcia',
      telefone:'3421-7490',
      email:'marcia@mail.com',
      id:1
    },
    {
      nome:'Daniel',
      telefone:'3931-1278',
      email:'daniel@mail.com',
      id:2
    },
    {
      nome:'Paula',
      telefone:'9814-3060',
      email:'paula@mail.com',
      id:3
    },

  ]
}

export const contatoSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload);
    },
    cadastrar:(state,action:PayloadAction<Contato>)=>{
      const existeContato=state.itens.find(contato=>contato.nome===action.payload.nome.toLowerCase())
      if (existeContato) {
        alert("contato já adicionado!")
      }else{
        state.itens.push(action.payload)
      }
    }
  },
});

export const {remover,cadastrar}=contatoSlice.actions

export default contatoSlice.reducer