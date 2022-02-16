import { types } from "../types/types";

/**
 * State idea schema
 * 
 * const state = {
 *  name: 'Jorge',
 *  logged: true,
 * }
 */


export const authReducer = (state = {} , action ) => {

  switch ( action.type ) {
    case types.login:
        return {
          ...action.payload, // Other way=>   name: action.payload.name,
          logged: true,
        }
    case types.logout:
        return {
          logged: false,
       }
    default:
      return state
  }
}