/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GlobalState } from '../types';
import { fetchCategories, fetchSearch } from '../redux/actions/FetchActions';
import Categorias from '../components/Categorias';
import { HomeDiv } from '../Styles';
import Produtos from '../components/Produtos';

function Home() {
  const dispatch:Dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [searchString, setSearchString] = useState<string>('');
  const { search, loadingSearch, categorias } = useSelector(
    (state:GlobalState) => state.StoreFetchReducer,
  );
  console.log(search);
  useEffect(() => {
    if (categorias.length < 1) {
      dispatch(fetchCategories());
    }
    dispatch(fetchSearch(searchString));
  }, [searchString]);
  return (
    <HomeDiv onFocus={ () => setCheck(false) }>
      <header>
        <form
          onSubmit={ (e) => {
            e.preventDefault();
          } }
        >
          <input
            type="text"
            value={ searchString }
            placeholder="Pesquisar"
            onChange={ ({ target: { value } }) => setSearchString(value) }
            onClick={ () => setCheck(true) }
          />
        </form>
      </header>
      <main>
        <Categorias check={ check } />
        <section>
          {search && !loadingSearch ? search.map((e) => (
            <Produtos product={ e } key={ e.id } />
          )) : (
            <h1>Loading</h1>
          )}
        </section>
      </main>
    </HomeDiv>
  );
}

export default Home;
