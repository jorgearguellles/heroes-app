import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById";


export const HeroScreen = () => {

  const navigate = useNavigate();
  const { heroId } = useParams();

  const hero = useMemo ( ()=> getHeroById( heroId ), [ heroId ] ); // Only getHeroByID called when heroId update

  if(!hero){
    return <Navigate to='/' />
  }

  const { id, superhero, alter_ego, publisher, first_appearance, characters } = hero;

  const imgPath = `/assets/${id}.jpg`;

  const handleReturn = () => {
    navigate( -1 );
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ imgPath }
          className='img-thumbnail'
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-4">Characters</h5>
        <p>{characters}</p>
        <button
          className="btn btn-outline-info"
          onClick={ handleReturn }
        >
          Return
        </button>
      </div>

    </div>
  )
};
