import { useDispatch } from 'react-redux';
import { CategoriesType, Dispatch } from '../types';
import { fetchSelecCategorie } from '../redux/actions/FetchActions';

function CategoriesSearch({ categorie: { id, name },
  set }: { categorie: CategoriesType, set: (p: boolean) => void }) {
  const dispatch:Dispatch = useDispatch();
  const handleOnClick = () => {
    set(true);
    dispatch(fetchSelecCategorie(id));
  };
  return (
    <article>
      <button onClick={ handleOnClick }><h2>{name}</h2></button>
    </article>
  );
}

export default CategoriesSearch;
