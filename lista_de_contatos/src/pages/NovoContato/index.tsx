/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from "react";
import { DivLabelInput, Input, Label } from "../../styles";
import { BotaoCadastro, BotaoVoltar, DivBotoesForm, Form } from "./styles";
import { useDispatch } from "react-redux";
import { Contato } from "../../models/Contato";
import { cadastrar } from "../../store/reducers/contatos";
import { Link } from "react-router-dom";

const NovoContato = () =>{
  const dispatch=useDispatch()
  const [nome,setNome]=useState('')
  const [email,setEmail]=useState('')
  const [telefone,setTelefone]=useState('')

 const addContato=(evento:FormEvent)=>{
evento.preventDefault()
const tarefaAdd=new Contato(nome,telefone,email,4)
dispatch(cadastrar(tarefaAdd))
 }

  return( 
  <>
    <h1 style={{ textAlign: "center", margin: "30px" }}>Novo contato</h1>
    <Form onSubmit={addContato}>
      <DivLabelInput>
        <Label htmlFor="nome">Nome</Label>
        <Input
        value={nome}
        onChange={(evento)=>setNome(evento.target.value)}
          type="text"
          placeholder="Digite o nome do contato aqui"
          id="nome"
        />
      </DivLabelInput>
      <DivLabelInput>
        <Label htmlFor="email">Email</Label>
        <Input
        value={email}
        onChange={(evento)=>setEmail(evento.target.value)}
          type="email"
          placeholder="Digite o email do contato aqui"
          id="email"
        />
      </DivLabelInput>
      <DivLabelInput>
        <Label htmlFor="telefone">Telefone</Label>
        <Input
        value={telefone}
        onChange={(evento)=>setTelefone(evento.target.value)}
          type="tel"
          placeholder="Digite o telefone do contato aqui"
          id="telefone"
        />
      </DivLabelInput>
      <DivBotoesForm>
        <BotaoCadastro type="submit">Cadastrar!</BotaoCadastro>
        <BotaoVoltar to='/' type="submit">Voltar à lista de tarefas</BotaoVoltar>
      </DivBotoesForm>
    </Form>
    ;
  </>
  )
}

export default NovoContato;
