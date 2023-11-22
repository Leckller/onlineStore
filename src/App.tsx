import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';

function App() {
  const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/carrinho" element={ <Carrinho /> } />
      </Routes>
    </>
  );
}

export default App;
