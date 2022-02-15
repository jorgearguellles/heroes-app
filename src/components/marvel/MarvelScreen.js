import { HeroesList } from "../hero/HeroesList";

export const MarvelScreen = () => {
  return (
    <>
      <h1>Marvel Heroes</h1>
      <hr/> 
      <HeroesList 
        publisher={'Marvel Comics'}
      />
    </>
    
  )
};