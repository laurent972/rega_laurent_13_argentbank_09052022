import { GET_USER, UPDATE_PROFIL, LOGOUT } from "../actions/user.actions";

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
               };
            case LOGOUT:
               return{
                  ...state,
                  isLogged: false,
               }       

            default:
               return state;
         }
   }