import { Get_Data,Delete_Data } from "../Type";


export const data  = (item) =>{
    console.log("item",item)
    return{
        type:Get_Data,
        item
    }
}
export const delet = (value)=>{
    console.log("delet",value)
    return {
        type:Delete_Data,
        value
    }
}