/* eslint-disable @typescript-eslint/no-unused-vars */
import {  useSelector } from "react-redux";
import { ContatoCard } from "../ContatoCard";
import { ListaContatos } from "./styles";
import { RootReducer } from "../../store";


export const ListaDeContatos = () => {
  const contatos=useSelector((state:RootReducer)=>state.contatos.itens)
  return (
    <ListaContatos>
        {contatos.map((c)=>(
            
                <ContatoCard key={c.id} id={c.id} nome={c.nome} email={c.email} telefone={c.telefone} />

        ))}
      
    
    </ListaContatos>
  );
};
