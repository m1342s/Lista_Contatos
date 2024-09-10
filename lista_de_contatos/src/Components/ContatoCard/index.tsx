/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./styles";
import image from "../../assets/icone_foto.jpg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { remover } from "../../store/reducers/contatos";
import { Contato } from "../../models/Contato";
import { DivLabelInput,Label,Input } from "../../styles";

type Props = Contato;
export const ContatoCard = ({
  nome,
  telefone,
  email,
  id,
}: Props) => {
  const [editando, setEditando] = useState(false);
  const [telefoneState, setTelefone] = useState("");
  const [emailState, setEmail] = useState("");
  const [nomeState, setNome] = useState("");

  
  
  const dispatch = useDispatch();
  return (
    <>
      <S.Card>
        <S.DivFotoNome>
          <S.Foto src={image}></S.Foto>
          <DivLabelInput>
            <Label>Nome do contato:</Label>
            <Input
            disabled={!setEditando}
              
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
            />
          </DivLabelInput>
        </S.DivFotoNome>
        <S.DivEmailTel>
          <DivLabelInput>
            <Label>Email do contato:</Label>
            <Input
            disabled={!setEditando}
              
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
            <Label>Telefone do Contato:</Label>
            <Input
            disabled={!setEditando}
              
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
            />
          </DivLabelInput>
        </S.DivEmailTel>
        <S.DivBotoes>
          {editando ? (
            <>
              <S.BotaoSalvar>Salvar</S.BotaoSalvar>
              <S.BotaoCancelarRemover onClick={() => setEditando(false)}>
                Cancelar
              </S.BotaoCancelarRemover>
            </>
          ) : (
            <>
              <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
              <S.BotaoCancelarRemover
                onClick={() => {
                  dispatch(remover(id));
                }}
              >
                Remover
              </S.BotaoCancelarRemover>
            </>
          )}
        </S.DivBotoes>
      </S.Card>
    </>
  );
};
