// import { GROUP_ID } from "settings/";

import { GROUP_ID } from "../settings/apiConfig";
import callApi from "../utils/callApi"

const cocktailApi={
    fetchCockTailApi(strDrink="") {
        if(strDrink!== ''.trim()){
            return callApi(`json/v1/1/search.php?s=${strDrink}` )
        }
        return callApi(`json/v1/1/search.php?s` )
     }
}
export default cocktailApi;