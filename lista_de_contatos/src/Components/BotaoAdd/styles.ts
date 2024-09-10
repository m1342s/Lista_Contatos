 
import styled from "styled-components";
import cores from "../../styles/cores";
import { Link } from "react-router-dom";

export const Mais=styled(Link)`
display:flex;
height:64px;
width:64px;
background-color:${cores.verde};
color:white;
position:fixed;
bottom:40px;
right:40px;
border-radius: 50%;
justify-content: center;
align-items: center;
font-size: 40px;
text-decoration: none;
`