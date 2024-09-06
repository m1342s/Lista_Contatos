import { Provider } from "react-redux";
import { ListaDeContatos } from "./Components/ListaDeContatos";
import GlobalStyle from "./styles";
import {store} from "./store/index"

function App() {
  return (
    <>
    <Provider store={store}>
      <GlobalStyle/>
      <h1 style={{textAlign:"center", margin:"30px"}}>Lista de Contatos</h1>
      <ListaDeContatos/>
      </Provider>
    </>
  
  );
}

export default App;
