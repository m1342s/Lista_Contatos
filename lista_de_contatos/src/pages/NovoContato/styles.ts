import styled from "styled-components";
import cores from "../../styles/cores";
import { Link } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  margin-left: 420px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  gap: 30px;
  width: 400px;
  height: 420px;
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `;
export const DivBotoesForm=styled.div`
display:flex;
gap:20px; 
`
export const BotaoCadastro=styled.button`
font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color:${cores.verde};
  `
  export const BotaoVoltar=styled(Link)`
font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color:${cores.azul};
  text-decoration: none;
  `
