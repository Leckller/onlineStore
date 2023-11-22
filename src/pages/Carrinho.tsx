import { useNavigate } from 'react-router-dom';

function Carrinho() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <button onClick={ () => navigate('/') }>
          Voltar

        </button>
      </header>
      <main>
        produtos
      </main>
    </>
  );
}

export default Carrinho;
