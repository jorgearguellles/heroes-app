import { HeroesList } from "../hero/HeroesList";

export const MarvelScreen = () => {
  return (
    <>
      <h1>MarvelScreen</h1>
      <hr/> 
      <HeroesList 
        publisher={'Marvel Comics'}
      />
    </>
    
  )
};