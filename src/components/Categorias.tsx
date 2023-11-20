/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function Categorias() {
  const { categorias, loading } = useSelector(
    (state: GlobalState) => state.StoreFetchReducer,
  );
  if (loading) return <h1>Loading</h1>;
  return (
    <section>
      {categorias && categorias.map(({ id, name }) => (
        <label
          key={ id }
          htmlFor={ `categoria:${name}` }
        >
          <h2>{name}</h2>
          <input
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
