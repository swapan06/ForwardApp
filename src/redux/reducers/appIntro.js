import { setItem } from "../../utils/utils";
import actions from "../actions";
import types from "../types"

const initialState = {
  introData: true
};
const appIntro = (state = initialState, actions) => {

  switch (actions.type) {
    case types.INTRO: {
      const data = actions.payload;
      console.log("Dataa>>>>>>>>----", data)
      setItem('introData', data);
      console.log(state,"state>>>>>>>>>>>>>>>")
      return {
        ...state,
        introData: data,
      }
    }
    default:
      return state;
  

  }

}


export default appIntro