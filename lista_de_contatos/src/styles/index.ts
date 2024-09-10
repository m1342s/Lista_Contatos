 
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle=createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto,sans-serif;
    list-style: none;
}`

export const DivLabelInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

export default GlobalStyle