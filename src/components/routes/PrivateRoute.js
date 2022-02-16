import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext"
 
export const PrivateRoute = ( { children } ) => {

  const { userState } = useContext(AuthContext);
  
  return userState.logged ? children  : <Navigate to='/login' />
}
