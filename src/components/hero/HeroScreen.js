import { useParams, Navigate } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById";


export const HeroScreen = () => {

  const { id } = useParams();

  const hero = getHeroById(id);
  console.log(hero);

  if(!hero) return <Navigate to='/' />

  return (
    <div>
      <h1>{hero.superhero}</h1>
    </div>

  )
}
