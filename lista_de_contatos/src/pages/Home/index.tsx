import { BotaoAdd } from "../../Components/BotaoAdd";
import { ListaDeContatos } from "../../Components/ListaDeContatos";

export const Home=()=>(
    <>
        <>
        <h1 style={{ textAlign: "center", margin: "30px" }}>
          Lista de Contatos
        </h1>
        <ListaDeContatos />
        <BotaoAdd/>
      </>
    </>
)