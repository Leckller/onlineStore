import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GlobalState, ProductDetailsType } from '../types';
import { addItem } from '../redux/actions/CarrinhoActions';

function Produtos({ product }: { product: ProductDetailsType }) {
  const dispatch:Dispatch = useDispatch();
  const { thumbnail, title, price, id } = product;
  const incInCar = useSelector((s:GlobalState) => s.CarrinhoReducer.carrinho
    .some((i:ProductDetailsType) => i.id === id));
  const handleOnClick = () => {
    dispatch(addItem(product));
  };
  return (
    <article>
      <Link to="/">
        <h2>{title}</h2>
        <h4>{`R$ ${price.toFixed(2)}`}</h4>
        <img src={ thumbnail } alt={ title } />
      </Link>
      <button onClick={ handleOnClick }>
        {incInCar ? 'Remover do carrinho' : 'Adicionar ao Carrinho'}
      </button>
    </article>
  );
}

export default Produtos;
