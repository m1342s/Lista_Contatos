/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore} from '@reduxjs/toolkit'
import contatoReducer from './reducers/contatos' 

export const store=configureStore({
    reducer:{
     contatos:contatoReducer
    }
})

export type RootReducer=ReturnType<typeof store.getState>