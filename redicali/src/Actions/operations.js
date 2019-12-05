import {Add_New, Delete} from './Types';

export const addNew = ({ip}) => {
   return{
     type : Add_New,
     payload : {
       ip
     }
   }
}

export const remove = () => {
    return {type : Delete}
}
