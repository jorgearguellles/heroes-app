import { HeroesList } from "../hero/HeroesList";

export const DcScreen = () => {
  return (
    <>
      <h1>DC heroes</h1>
      <hr/>
      <HeroesList 
        publisher={'DC Comics'}
      />
    </>
  )
};
