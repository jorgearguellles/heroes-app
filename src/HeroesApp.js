import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./components/routes/AppRouter";

const init = () => {
  return JSON.parse( localStorage.getItem('user') ) || { logged: false };
}

export const HeroesApp = ()=>{

  const [ userState, dispatch ] = useReducer( authReducer, '', init );

  useEffect(() => {
    if( !userState ) return;

    localStorage.setItem( 'user', JSON.stringify( userState ) );
  }, [userState])
  

  return(
    <AuthContext.Provider value={{
        userState,
        dispatch
    }}
    >
      <AppRouter />    
    </AuthContext.Provider>
  )
};