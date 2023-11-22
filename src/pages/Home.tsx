/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dispatch, GlobalState } from '../types';
import { fetchCategories, fetchSearch } from '../redux/actions/FetchActions';
import Categorias from '../components/Categorias';
import { HomeDiv, HomeHeader } from '../Styles';
import Produtos from '../components/Produtos';
import CategoriesSearch from '../components/CategoriesSearch';

function Home() {
  const dispatch:Dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [searchString, setSearchString] = useState<string>('');
  const [categorieCheck, setCategorieCheck] = useState(false);
  const [formOk, setFormOk] = useState(false);
  const { search, loadingSearch, categorias,
    categoriasSearch, loadingCatSearch, selecCategorie,
    loadingSelecCat } = useSelector(
    (state:GlobalState) => state.StoreFetchReducer,
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (categorias.length < 1) {
      dispatch(fetchCategories());
    }
    if (formOk) {
      dispatch(fetchSearch(searchString));
      setFormOk(false);
    }
  }, [searchString, formOk]);
  return (
    <HomeDiv>
      <HomeHeader>
        <div />
        <form
          onSubmit={ (e) => {
            e.preventDefault();
            setFormOk(true);
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
        <div>
          <button
            onClick={ () => navigate('/carrinho') }
          >
            <i className="bi bi-basket3" />
          </button>
        </div>
      </HomeHeader>
      <main>
        <Categorias set={ setCategorieCheck } check={ check } setCheck={ setCheck } />
        <section>
          {check ? !loadingSearch ? search.map((e) => (
            <Produtos product={ e } key={ e.id } />
          )) : (
            <h1>Loading1</h1>
          ) : loadingCatSearch ? (
            <h1>Loading2</h1>
          ) : (
            categorieCheck ? (
              loadingSelecCat ? <h1>Loading3</h1> : (
                selecCategorie.map((p) => (
                  <Produtos product={ p } key={ p.id } />
                ))
              ))
              : categoriasSearch.map((cat) => (
                <CategoriesSearch
                  set={ setCategorieCheck }
                  categorie={ cat }
                  key={ cat.id }
                />
              ))
          )}
        </section>
      </main>
    </HomeDiv>
  );
}

export default Home;
