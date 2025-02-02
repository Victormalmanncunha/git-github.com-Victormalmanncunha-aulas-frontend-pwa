import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';

import BotaoContador from './paginas/BotaoContador/BotaoContador';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import PaginaListaTarefas from './paginas/PaginaListaTarefas/PaginaListaTarefas';
import PaginaDesafioComponente from './paginas/PaginaDesafioComponente/PaginaDesafioComponente';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'lista-produtos',
    element: <ListaProdutos />,
  },
  {
    path: 'botao-contador',
    element: <BotaoContador />,
  },
  {
    path: 'lista-tarefas',
    element: <PaginaListaTarefas />,
  },
  {
    path: 'desafio-componentes',
    element: <PaginaDesafioComponente />,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;
