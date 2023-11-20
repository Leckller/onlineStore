/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GlobalState } from '../types';

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
        >
          <h2>{name}</h2>
          <input
            checked={ check ? false : undefined }
            type="radio"
            id={ `categoria:${name}` }
            name="categoria"
          />
        </label>
      ))}
    </section>
  );
}

export default Categorias;
