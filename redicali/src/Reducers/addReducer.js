import { Add_New } from '../Actions/Types';

const addReducer = (state = [],action) => {
  switch(action.type){
    case Add_New :
    return [...state, action.payload];
    default : return state;
  }
}

export default addReducer;
