import { Link } from 'react-router-dom';
import { CategoriesType } from '../types';

function CategoriesSearch({ categorie: { id, name } }: { categorie: CategoriesType }) {
  return (
    <article>
      <Link to={ `/categories/${id}` }>
        <h2>{name}</h2>
      </Link>
    </article>
  );
}

export default CategoriesSearch;
