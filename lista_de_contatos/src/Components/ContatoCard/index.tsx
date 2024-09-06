/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./styles";
import image from "../../assets/icone_foto.jpg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { remover } from "../../store/reducers/contatos";
import { Contato } from "../../models/Contato";

type Props = Contato;
export const ContatoCard = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id,
}: Props) => {
  const [editando, setEditando] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal);
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal);
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal);
    }
  }, [nomeOriginal,emailOriginal,telefoneOriginal]);

  
  const dispatch = useDispatch();
  return (
    <>
      <S.Card>
        <S.DivFotoNome>
          <S.Foto src={image}></S.Foto>
          <S.DivLabelInput>
            <S.Label>Nome do contato:</S.Label>
            <S.Input
            disabled={!setEditando}
              
              value={nomeOriginal}
              onChange={(evento) => setNome(evento.target.value)}
            />
          </S.DivLabelInput>
        </S.DivFotoNome>
        <S.DivEmailTel>
          <S.DivLabelInput>
            <S.Label>Email do contato:</S.Label>
            <S.Input
            disabled={!setEditando}
              
              value={emailOriginal}
              onChange={(evento) => setEmail(evento.target.value)}
            />
            <S.Label>Telefone do Contato:</S.Label>
            <S.Input
            disabled={!setEditando}
              
              value={telefoneOriginal}
              onChange={(evento) => setTelefone(evento.target.value)}
            />
          </S.DivLabelInput>
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
