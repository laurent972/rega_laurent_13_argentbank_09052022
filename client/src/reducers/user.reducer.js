import { GET_USER, UPDATE_PROFIL } from "../actions/user.actions";

   const initialState = {
      isLogged: false,
      user:{}
   };

   export default function userReducer(state=initialState, action){
         switch (action.type) {
            case GET_USER:
               return{
                  ...state,
                  isLogged: true,
                  user: action.payload,
               };
            
               case UPDATE_PROFIL:
                  return{
                     ...state,
                     user: action.payload,
                  } 

            default:
               return state;
         }
   }