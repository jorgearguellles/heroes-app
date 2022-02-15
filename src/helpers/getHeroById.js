import { heroes } from "../data/heroesList"

export const getHeroById = ( id = '' ) => {
  return heroes.find( hero => hero.id === id );
}