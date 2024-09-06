/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import cores from "../../styles/cores";

export const Card = styled.li`
  background-color: white;
  width: 400px;
  border: 2px solid black;
  height: 200px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 290px;
`;
export const Foto = styled.img`
  border-radius: 50%;
  width: 15%;
  padding-left: 10px;
  padding-top: 10px;
`;
export const Label = styled.label`
  color: black;
  font-size: 20px;
`;
export const Input = styled.input`
  color: gray;
  width: 280px;
  height: 28px;
  border-radius: 8px;
`;

export const DivLabelInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Botao = styled.button`
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
  background-color: blue;
`;

export const DivFotoNome = styled.div`
  padding-top: 10px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const DivEmailTel = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 95px;
  padding-top: 10px;
  gap: 15px;
`;
export const DivBotoes = styled.div`
  padding-left: 10px;
  padding-top: 12px;
`;
export const BotaoSalvar = styled(Botao)`
  background-color: ${cores.verde};
`;

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${cores.vermelho};
`;
