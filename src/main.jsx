import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, ErrorPage } from './routes';
import { Login, Parcerias, Ranking } from './pages';
import { theme } from './Theme.jsx';
import App from './App.jsx';
import Perfil from './pages/Perfil.jsx'; 
import EditarPerfil from './pages/EditarPerfil.jsx'; // <-- 1. IMPORTE O COMPONENTE DE EDIÇÃO

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "ranking",
        element: <Ranking />,
      },
      {
        path: "parcerias",
        element: <Parcerias />,
      },
      {
        path: "perfil/:id",
        element: <Perfil />,
      },
      // V-- 2. ADICIONE A NOVA ROTA AQUI --V
      {
        path: "perfil/editar/:id",
        element: <EditarPerfil />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);