/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GlobalState } from '../types';
import { fetchCategoriesResults } from '../redux/actions/FetchActions';

function Categorias({ check, setCheck, set }: { check: boolean,
  setCheck: (p: boolean) => void, set: (p: boolean) => void }) {
  const dispatch:Dispatch = useDispatch();
  const { categorias, loadingCat } = useSelector(
    (state: GlobalState) => state.StoreFetchReducer,
  );

  if (loadingCat) return <h1>Loading</h1>;
  return (
    <section
      onFocus={ () => {
        setCheck(false);
        set(false);
      } }
    >
      {categorias && categorias.map(({ id, name }) => (
        <label
          key={ id }
          htmlFor={ `categoria:${name}` }
          id={ id }
        >
          <h2>{name}</h2>
          <input
            checked={ check ? false : undefined }
            type="radio"
            id={ `categoria:${name}` }
            name="categoria"
            onClick={ () => { dispatch(fetchCategoriesResults(id)); set(false); } }
          />
        </label>
      ))}
    </section>
  );
}

export default Categorias;
