/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../types';
import { fetchCategories } from '../redux/actions/FetchActions';
import Categorias from '../components/Categorias';

function Home() {
  const dispatch:Dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div>
      <header>blablabla</header>
      <Categorias />
    </div>
  );
}

export default Home;
