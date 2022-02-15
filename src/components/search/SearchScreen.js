import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { getHeroByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../Hooks/useForm";
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const queryString = require('query-string');
  const { q = '' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroesFiltered = useMemo( () => getHeroByName( q ), [ q ]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  };
  
  return (
    <>
      <h1>Search results</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <hr/>

          <form onSubmit={ handleSearchSubmit }>
            <input 
              type='text'
              placeholder="Type your hero"
              className="form-control mt-3"
              name='searchText'
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
            />
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-outline-primary mt-3"
                onClick={ handleSearchSubmit }
              >
                Search
              </button>
            </div>
          </form>
          
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr/>
          {
            (q === '')
              ? <div className="alert alert-info">Search a hero</div>
              : ( heroesFiltered.length === 0) && <div className="alert alert-danger">No hero found with: { q }</div>
          }
          {
            heroesFiltered.map( hero => (
              <HeroCard 
                key={hero.id}
                { ...hero }
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
