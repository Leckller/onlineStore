/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GlobalState } from '../types';
import { fetchCategoriesResults } from '../redux/actions/FetchActions';

function Categorias({ check }: { check: boolean }) {
  const dispatch:Dispatch = useDispatch();
  const { categorias, loadingCat } = useSelector(
    (state: GlobalState) => state.StoreFetchReducer,
  );

  if (loadingCat) return <h1>Loading</h1>;
  return (
    <section>
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
            onClick={ () => dispatch(fetchCategoriesResults(id)) }
          />
        </label>
      ))}
    </section>
  );
}

export default Categorias;
