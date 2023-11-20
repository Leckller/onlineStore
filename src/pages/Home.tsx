/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../types';
import { fetchCategories } from '../redux/actions/FetchActions';
import Categorias from '../components/Categorias';

function Home() {
  const dispatch:Dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div onFocus={ () => setCheck(false) }>
      <header>
        <input
          type="text"
          value={ search }
          placeholder="Pesquisar"
          onChange={ ({ target: { value } }) => setSearch(value) }
          onClick={ () => setCheck(true) }
        />
      </header>
      <Categorias check={ check } />
      <main>
        itens
      </main>
    </div>
  );
}

export default Home;
