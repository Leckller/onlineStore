/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../types';
import { fetchCategories } from '../redux/actions/FetchActions';

function Home() {
  const dispatch:Dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div />
  );
}

export default Home;
