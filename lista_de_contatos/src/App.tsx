/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from "react-redux";
import GlobalStyle from "./styles";
import { store } from "./store/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import  NovoContato  from "./pages/NovoContato";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    )
  },
  {
    path:'/novo',
    element:<NovoContato/>
  }
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={rotas}/>
      </Provider>
    </>
  );
}

export default App;
