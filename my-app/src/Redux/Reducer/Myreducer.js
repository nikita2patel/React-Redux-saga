import { Delete_Data_Success, Get_Data_Success } from "../Type";

const initialstate = {
  user: [],
};

const reducer = function (state = initialstate, action) {
  console.log(123,action)
  switch (action.type) {
    case Get_Data_Success:
      var value = state.user;
      console.log("111", value);
      value.push(action.payload.item)

      return {
        ...state,
        user: [...value],
      };
case  Delete_Data_Success: 
var item = state.user
item.splice(action.payload,1)
return{
  ...state,
  user:[...item] 

}

    default:
      return state;
  }
};
export default reducer;
