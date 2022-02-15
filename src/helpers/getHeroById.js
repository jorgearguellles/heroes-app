
import { heroes } from "../data/heroesList"

export const getHeroById = ( id ) => {
  
  const validPublisher = [ 'DC Comics', 'Marvel Comics' ];

  if( !validPublisher.includes( id ) ){
    throw new Error( `${id} is not a valid publisher` )
  };

  return heroes.find( hero => hero.id === id );
}