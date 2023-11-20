/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../types';
import { fetchCategories, fetchSearch } from '../redux/actions/FetchActions';
import Categorias from '../components/Categorias';
import { HomeDiv } from '../Styles';

function Home() {
  const dispatch:Dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <HomeDiv onFocus={ () => setCheck(false) }>
      <header>
        <form
          onSubmit={ (e) => {
            e.preventDefault(); dispatch(fetchSearch(search));
          } }
        >
          <input
            type="text"
            value={ search }
            placeholder="Pesquisar"
            onChange={ ({ target: { value } }) => setSearch(value) }
            onClick={ () => setCheck(true) }
          />
        </form>
      </header>
      <main>
        <Categorias check={ check } />
        {check ? 'search' : 'categorias'}
      </main>
    </HomeDiv>
  );
}

export default Home;
