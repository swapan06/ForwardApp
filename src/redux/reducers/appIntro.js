import { setItem } from "../../utils/utils";
import types from "../types"


const initialState = {
  introData: true
};
const appIntro = (state = initialState, action) => {
  console.log(state, '>>>>>>>>>');
  switch (action.type) {
    case types.INTRO:
      const data = action.payload;
      setItem('introdata', data);
      console.log('intro>>>>', data);
      return {...state, introData: data};

    default:
      return state;
  }

}


export default appIntro