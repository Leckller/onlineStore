import { Link } from 'react-router-dom';
import { ProductDetailsType } from '../types';

function Produtos({ product: {
  thumbnail, title, price,
} }: { product: ProductDetailsType }) {
  return (
    <article>
      <Link to="/">
        <h2>{title}</h2>
        <h4>{`R$ ${price.toFixed(2)}`}</h4>
        <img src={ thumbnail } alt={ title } />
        <button>
          {[0, 2].length < 1 ? 'Remover do carrinho' : 'Adicionar ao Carrinho'}
        </button>
      </Link>
    </article>
  );
}

export default Produtos;
