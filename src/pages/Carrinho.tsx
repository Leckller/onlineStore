/* eslint-disable jsx-a11y/control-has-associated-label */
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GlobalState, ProductDetailsType } from '../types';
import Produtos from '../components/Produtos';

function Carrinho() {
  const navigate = useNavigate();
  const { carrinho } = useSelector((state:GlobalState) => state.CarrinhoReducer);
  return (
    <>
      <header>
        <button onClick={ () => navigate('/') }>
          <i className="bi bi-arrow-90deg-left" />
        </button>
      </header>
      <main>
        {
          carrinho.length > 0 ? carrinho.map((prod: ProductDetailsType) => (
            <Produtos product={ prod } key={ prod.id } />
          )) : (
            <h1>O seu carrinho está vazio</h1>
          )
        }
      </main>
    </>
  );
}

export default Carrinho;
