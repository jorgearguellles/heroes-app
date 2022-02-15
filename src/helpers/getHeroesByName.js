import { heroes } from "../data/heroesList"

export const getHeroByName = ( name = '' ) => {
  if(name.length === 0){
    return [];
  };
  name = name.toLowerCase();
  return heroes.filter( hero => hero.superhero.toLowerCase().includes(name) );
}