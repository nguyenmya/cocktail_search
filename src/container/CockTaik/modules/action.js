
// import movieApi from 'apis/movieApi';
import cocktailApi from '../../../apis/apiCockTail';
import {FETCH_COCKTAIL_SUCCESS} from "../modules/type"

export const actFetchCockTailApi = (strDrink="") => {
    return (dispatch) => {
      
        cocktailApi
            .fetchCockTailApi(strDrink)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: FETCH_COCKTAIL_SUCCESS,
                    payload: res.data.drinks,
                });
            })
           
            .catch((err) => {
                console.log("err ne", err.response?.data)
              
            });
    };
};
