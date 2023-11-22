import { useDispatch } from 'react-redux';
import { CategoriesType, Dispatch } from '../types';
import { fetchSelecCategorie } from '../redux/actions/FetchActions';
import { ArticleCatSearch } from '../Styles';

function CategoriesSearch({ categorie: { id, name },
  set }: { categorie: CategoriesType, set: (p: boolean) => void }) {
  const dispatch:Dispatch = useDispatch();
  const handleOnClick = () => {
    set(true);
    dispatch(fetchSelecCategorie(id));
  };
  return (
    <ArticleCatSearch>
      <button onClick={ handleOnClick }><h2>{name}</h2></button>
    </ArticleCatSearch>
  );
}

export default CategoriesSearch;
