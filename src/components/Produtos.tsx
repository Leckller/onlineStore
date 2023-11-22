import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GlobalState, ProductDetailsType } from '../types';
import { addItem } from '../redux/actions/CarrinhoActions';
import { ArticleProduct } from '../Styles';

function Produtos({ product }: { product: ProductDetailsType }) {
  const dispatch:Dispatch = useDispatch();
  const { thumbnail, title, price, id } = product;
  const incInCar = useSelector((s:GlobalState) => s.CarrinhoReducer.carrinho
    .some((i:ProductDetailsType) => i.id === id));
  const handleOnClick = () => {
    dispatch(addItem(product));
  };
  return (
    <ArticleProduct>
      <Link to="/">
        <h2>{title}</h2>
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
      </Link>
      <h4>{`R$ ${price.toFixed(2)}`}</h4>
      <button onClick={ handleOnClick }>
        {incInCar ? 'Remover do carrinho' : 'Adicionar ao Carrinho'}
      </button>
    </ArticleProduct>
  );
}

export default Produtos;
