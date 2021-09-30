
  import { FETCH_COCKTAIL_SUCCESS, FETCH_COCKTAIL_FAIL } from "./type";
  const initialState = {
      cocktail: [],
      err: ''
   
  };
  
  const cockTailReducer = (state = initialState, {type, payload} ) => {
    switch (type) {
      case FETCH_COCKTAIL_SUCCESS : {
        state.cocktail= payload ;
        return { ...state};
      }
     case FETCH_COCKTAIL_FAIL: {
         state.err= payload;
         return { ...state };
     }
      
      default:
        return state;
    }
  };
  
  export default cockTailReducer;
  